# Deploy naar cPanel (eigen server)

Deze website is gebouwd als **statische single-page app** en kan op elke gewone webhosting (cPanel / Apache / Nginx) gehost worden — zonder Node.js.

## 1. Build maken

Op je eigen computer (of een CI omgeving) met **Node.js 20+** en **bun** of **npm**:

```bash
# Installeer dependencies (eenmalig)
bun install
# of: npm install

# Maak een productie-build
bun run build:static
# of: npm run build:static
```

Resultaat: alle bestanden komen in de map **`dist/`**.

> Tip: `build:static` zet `STATIC_BUILD=1` waardoor de Nitro/server-bundel wordt overgeslagen en je een pure SPA krijgt.

## 2. Upload naar cPanel

### Optie A — File Manager
1. Log in op cPanel → **File Manager** → ga naar `public_html/`.
2. Maak de map leeg (of maak een backup van bestaande bestanden).
3. Upload **alle inhoud** uit de `dist/` map (niet de map zelf — de bestanden erin).
4. Zorg dat `.htaccess` ook is geüpload (verborgen bestand — schakel "Show hidden files" in).

### Optie B — FTP / SFTP
Gebruik bijv. FileZilla:
- Host: jouw cPanel FTP host
- Doelmap: `/public_html/`
- Sleep alle inhoud van `dist/` naar `public_html/`

## 3. Controleer

Open `https://jouwdomein.be` — de site moet direct laden.

## Wat zit er in de build?

- `index.html` — de homepagina
- `angelpark/index.html`, `ridderboeren/index.html`, `shabos/index.html`, `waterberg/index.html`, `contact/index.html` — de losse pagina's (vooraf gerenderd voor SEO)
- `contact.php` — verstuurt de berichten uit het contactformulier via de mailserver van je cPanel-hosting
- `assets/` — gehashte JS- en CSS-bundels (cacheable voor 1 jaar)
- `assets/brochure/` — alle foto's van het landgoed
- `.htaccess` — Apache config: SPA fallback, GZIP compressie, cache headers, security headers

## Contactformulier instellen (SMTP)

Het formulier op `/contact` post naar `contact.php`. Open dat bestand en pas
bovenaan de instellingen aan:

```php
'to'   => 'hello@ridderborn.be',   // ontvanger
'from' => 'no-reply@ridderborn.be',// afzender op je eigen domein
'smtp' => [
  'host'   => 'mail.ridderborn.be', // leeg laten = via cPanel mail()
  'port'   => 587,                  // 587 = STARTTLS, 465 = SSL
  'secure' => 'tls',                // 'tls' | 'ssl' | ''
  'user'   => 'no-reply@ridderborn.be',
  'pass'   => 'wachtwoord-van-de-mailbox',
],
```

Deze gegevens vind je in cPanel → *E-mailaccounts* → **Connect Devices**.
Laat `host` leeg als je liever de lokale mailserver van cPanel gebruikt.

**Testen:** vul het formulier in op je live site. Komt er geen mail aan, kijk in
cPanel → *Track Delivery* en in het PHP-errorlog (`[contact.php]` regels).

## Spamcontrole met Cloudflare Turnstile (later in te stellen)

Alles staat al klaar; je hoeft enkel twee sleutels in te vullen wanneer je het
wil activeren:

1. Maak een gratis widget aan op Cloudflare → *Turnstile* voor je domein.
2. Zet de **site key** in `site-config.js` (staat naast `index.html` op de
   server, kan je daar rechtstreeks aanpassen):
   ```js
   window.SITE_CONFIG = { turnstileSiteKey: "0x4AAA..." };
   ```
3. Zet de **secret key** in `contact.php`:
   ```php
   'turnstile_secret' => '0x4AAA...',
   ```

Zolang beide leeg zijn, wordt de widget niet getoond en niet gecontroleerd.


## Updates publiceren

Telkens je iets wijzigt in Lovable:
1. Run lokaal opnieuw `bun run build:static`
2. Upload de nieuwe inhoud van `dist/` naar `public_html/` (overschrijf bestaande bestanden)

Je hoeft niet alle assets opnieuw te uploaden — alleen `index.html`, de nieuwe `assets/*.js` / `assets/*.css` bestanden, en eventueel nieuwe afbeeldingen.

## Troubleshooting

**Wit scherm / 404 op subpaden?**
→ `.htaccess` mist of `mod_rewrite` staat uit op je hosting. Vraag je host om `mod_rewrite` te activeren.

**Foto's laden niet?**
→ Controleer dat de map `assets/brochure/` correct is geüpload (alle .jpg bestanden).

**HTTPS afdwingen?**
→ Open `.htaccess` en uncomment de drie HTTPS rewrite regels bovenaan.
