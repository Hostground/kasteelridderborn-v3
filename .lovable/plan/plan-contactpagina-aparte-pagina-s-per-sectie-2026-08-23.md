# Plan: Contactpagina + aparte pagina's per sectie

## Wat we bouwen

### 1. Vijf nieuwe pagina's (routes)
- `/contact` — contactpagina met formulier
- `/angelpark`, `/ridderboeren`, `/shabos`, `/waterberg` — elk een volledige pagina met de complete inhoud uit de bijhorende sectie op de homepagina (teksten, bullets, statistieken, foto's), plus eigen SEO-titel en beschrijving.

Elke pagina krijgt:
- Eigen kleine hero met de bijpassende brochurefoto
- De volledige sectie-inhoud (niets gaat verloren van de homepagina — die blijft zoals hij is)
- Dezelfde navigatie en footer als de homepagina

### 2. Knoppen op de homepagina
- Onder elke sectie (Angelpark, Ridderboeren, Shabos, Waterberg) komt een **"Lees meer →"** knop die naar de nieuwe pagina linkt.
- De bestaande anchor links in de navigatie (`#angelpark`, `#ridderboeren`, ...) blijven ongewijzigd werken.

### 3. Contactformulier met e-mailverzending
Een statische site kan niet zelf e-mail versturen — dat moet op de server gebeuren. Oplossing voor je cPanel-hosting:

- **`public/contact.php`** — een PHP-script dat mee in de `dist/` map komt en dus automatisch mee-upload naar cPanel. Het script:
  - Valideert naam, e-mail en bericht
  - Verstuurt de e-mail via de mailserver van je hosting (SMTP/Exim is standaard actief op cPanel)
  - Heeft een honeypot-veld tegen spam
  - Geeft een duidelijke succes- of foutmelding terug
- **Het formulier op `/contact`** stuurt de gegevens naar dit PHP-script en toont "Bericht verzonden" of een foutmelding zonder de pagina te herladen.
- Het e-mailadres waar berichten naartoe gaan staat bovenaan in `contact.php` — makkelijk aan te passen.
- De bestaande contactsectie op de homepagina krijgt ook een knop "Contacteer ons →" naar `/contact`.

### 4. Build-script uitbreiden voor cPanel
- `scripts/build-static.mjs` prerendert nu alleen de homepagina. We breiden het uit zodat **alle 6 pagina's** (`/`, `/contact`, `/angelpark`, `/ridderboeren`, `/shabos`, `/waterberg`) worden gegenereerd als `dist/<pagina>/index.html`.
- Resultaat: `npm run build:static` → de inhoud van `dist/` uploaden naar `public_html/` en alles werkt, inclusief het formulier.

## Technische details
- Nieuwe routebestanden: `src/routes/contact.tsx`, `angelpark.tsx`, `ridderboeren.tsx`, `shabos.tsx`, `waterberg.tsx`
- Nav en Footer worden uit `index.tsx` gehaald naar gedeelde componenten (`src/components/Nav.tsx`, `src/components/Footer.tsx`) zodat alle pagina's ze hergebruiken; op subpagina's linken de anchors terug naar `/#angelpark` etc.
- Elke route krijgt eigen `head()` metadata (unieke title/description, og-tags)
- Geen database of Lovable Cloud nodig — alles blijft 100% statisch + 1 PHP-bestand
- Na de build maken we opnieuw een project-ZIP voor download
