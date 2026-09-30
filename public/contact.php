<?php
/**
 * Contactformulier — Landgoed Rendelborn
 *
 * Dit bestand wordt mee geupload naar je cPanel-hosting (het staat in de
 * dist/ map na `npm run build:static`).
 *
 * 1) SMTP: vul hieronder de gegevens van je mailbox in (cPanel > E-mailaccounts
 *    > Connect Devices toont host, poort en gebruikersnaam). Laat SMTP_HOST leeg
 *    om via de lokale mailserver van cPanel te versturen (mail()).
 * 2) Turnstile (Cloudflare, optioneel): vul TURNSTILE_SECRET in wanneer je het
 *    later wil activeren. Zet dezelfde site key in `site-config.js`.
 */

// ===== Instellingen =====
$config = [
    // Ontvanger
    'to'        => 'hello@ridderborn.be',
    'to_name'   => 'Landgoed Rendelborn',

    // Afzender (moet een adres op je eigen domein zijn)
    'from'      => 'no-reply@ridderborn.be',
    'from_name' => 'Rendelborn website',

    // SMTP — laat 'host' leeg ('') om mail() van cPanel te gebruiken
    'smtp' => [
        'host'    => '',                  // bv. 'mail.ridderborn.be'
        'port'    => 587,                 // 587 = STARTTLS, 465 = SSL, 25 = geen encryptie
        'secure'  => 'tls',               // 'tls' | 'ssl' | ''
        'user'    => '',                  // bv. 'no-reply@ridderborn.be'
        'pass'    => '',                  // wachtwoord van de mailbox
        'timeout' => 15,
    ],

    // Cloudflare Turnstile (spamcheck) — leeg = uitgeschakeld
    'turnstile_secret' => '',
];
// =========================

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

function fail($code, $msg) {
    http_response_code($code);
    echo json_encode(['ok' => false, 'error' => $msg]);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    fail(405, 'Methode niet toegestaan.');
}

// Honeypot: bots vullen dit verborgen veld in — doen alsof het gelukt is.
if (!empty($_POST['website'])) {
    echo json_encode(['ok' => true]);
    exit;
}

$name    = trim((string)($_POST['name'] ?? ''));
$email   = trim((string)($_POST['email'] ?? ''));
$message = trim((string)($_POST['message'] ?? ''));

if ($name === '' || $message === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    fail(422, 'Vul naam, een geldig e-mailadres en een bericht in.');
}
if (mb_strlen($name) > 200 || mb_strlen($message) > 5000) {
    fail(422, 'Bericht is te lang.');
}

// ===== Turnstile-verificatie (alleen actief als er een secret is) =====
if (!empty($config['turnstile_secret'])) {
    $token = (string)($_POST['cf-turnstile-response'] ?? '');
    if ($token === '') {
        fail(422, 'Spamcontrole niet voltooid. Vink de verificatie aan en probeer opnieuw.');
    }
    $payload = http_build_query([
        'secret'   => $config['turnstile_secret'],
        'response' => $token,
        'remoteip' => $_SERVER['REMOTE_ADDR'] ?? '',
    ]);
    $verify = null;
    if (function_exists('curl_init')) {
        $ch = curl_init('https://challenges.cloudflare.com/turnstile/v0/siteverify');
        curl_setopt_array($ch, [
            CURLOPT_POST           => true,
            CURLOPT_POSTFIELDS     => $payload,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_TIMEOUT        => 10,
        ]);
        $verify = curl_exec($ch);
        curl_close($ch);
    } else {
        $verify = @file_get_contents(
            'https://challenges.cloudflare.com/turnstile/v0/siteverify',
            false,
            stream_context_create(['http' => [
                'method'  => 'POST',
                'header'  => "Content-Type: application/x-www-form-urlencoded\r\n",
                'content' => $payload,
                'timeout' => 10,
            ]])
        );
    }
    $result = json_decode((string)$verify, true);
    if (!is_array($result) || empty($result['success'])) {
        fail(403, 'Spamcontrole mislukt. Probeer het opnieuw.');
    }
}

// Bescherming tegen header-injectie.
$name  = str_replace(["\r", "\n"], ' ', $name);
$email = str_replace(["\r", "\n"], '', $email);

$subject = '=?UTF-8?B?' . base64_encode('Contactformulier Rendelborn — ' . $name) . '?=';

$body  = "Naam: {$name}\n";
$body .= "E-mail: {$email}\n";
$body .= 'Verzonden: ' . date('d-m-Y H:i') . "\n";
$body .= "\nBericht:\n{$message}\n";

$fromHeader    = mb_encode_mimeheader($config['from_name'], 'UTF-8') . " <{$config['from']}>";
$replyToHeader = mb_encode_mimeheader($name, 'UTF-8') . " <{$email}>";

$headers = [
    'From'         => $fromHeader,
    'Reply-To'     => $replyToHeader,
    'MIME-Version' => '1.0',
    'Content-Type' => 'text/plain; charset=utf-8',
];

/** Minimale SMTP-client (AUTH LOGIN, optioneel STARTTLS/SSL). */
function smtp_send(array $smtp, $from, $to, $subject, $body, array $headers, &$error) {
    $host = $smtp['host'];
    if ($smtp['secure'] === 'ssl') $host = 'ssl://' . $host;
    $fp = @stream_socket_client(
        $host . ':' . (int)$smtp['port'],
        $errno, $errstr, (int)$smtp['timeout'],
        STREAM_CLIENT_CONNECT
    );
    if (!$fp) { $error = "Verbinding met mailserver mislukt ({$errstr})."; return false; }
    stream_set_timeout($fp, (int)$smtp['timeout']);

    $read = function () use ($fp) {
        $data = '';
        while (($line = fgets($fp, 1024)) !== false) {
            $data .= $line;
            if (strlen($line) < 4 || $line[3] !== '-') break;
        }
        return $data;
    };
    $cmd = function ($command, $expect) use ($fp, $read, &$error) {
        if ($command !== null) fwrite($fp, $command . "\r\n");
        $response = $read();
        $code = (int)substr($response, 0, 3);
        if (!in_array($code, (array)$expect, true)) {
            $error = 'Mailserver antwoordde: ' . trim($response);
            return false;
        }
        return true;
    };

    $hostname = $_SERVER['HTTP_HOST'] ?? 'localhost';
    if (!$cmd(null, 220)) return false;
    if (!$cmd('EHLO ' . $hostname, 250)) return false;

    if ($smtp['secure'] === 'tls') {
        if (!$cmd('STARTTLS', 220)) return false;
        if (!@stream_socket_enable_crypto($fp, true, STREAM_CRYPTO_METHOD_TLS_CLIENT)) {
            $error = 'TLS-verbinding mislukt.';
            return false;
        }
        if (!$cmd('EHLO ' . $hostname, 250)) return false;
    }

    if ($smtp['user'] !== '') {
        if (!$cmd('AUTH LOGIN', 334)) return false;
        if (!$cmd(base64_encode($smtp['user']), 334)) return false;
        if (!$cmd(base64_encode($smtp['pass']), 235)) return false;
    }

    if (!$cmd('MAIL FROM:<' . $from . '>', 250)) return false;
    if (!$cmd('RCPT TO:<' . $to . '>', [250, 251])) return false;
    if (!$cmd('DATA', 354)) return false;

    $lines = [];
    foreach ($headers as $key => $value) $lines[] = "{$key}: {$value}";
    $lines[] = 'To: <' . $to . '>';
    $lines[] = 'Subject: ' . $subject;
    $lines[] = 'Date: ' . date('r');
    $lines[] = '';
    foreach (explode("\n", str_replace("\r\n", "\n", $body)) as $line) {
        $lines[] = (isset($line[0]) && $line[0] === '.') ? '.' . $line : $line;
    }
    fwrite($fp, implode("\r\n", $lines) . "\r\n.\r\n");
    if (!$cmd(null, 250)) return false;

    $cmd('QUIT', [221, 250]);
    fclose($fp);
    return true;
}

$error = '';
if (!empty($config['smtp']['host'])) {
    $sent = smtp_send($config['smtp'], $config['from'], $config['to'], $subject, $body, $headers, $error);
} else {
    $flat = [];
    foreach ($headers as $key => $value) $flat[] = "{$key}: {$value}";
    $sent = mail($config['to'], $subject, $body, implode("\r\n", $flat));
}

if ($sent) {
    echo json_encode(['ok' => true]);
} else {
    error_log('[contact.php] verzenden mislukt: ' . $error);
    fail(500, 'Verzenden mislukt. Probeer het later opnieuw of mail ons rechtstreeks.');
}
