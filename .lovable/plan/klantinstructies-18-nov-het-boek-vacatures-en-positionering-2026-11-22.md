# Klantinstructies 18 nov: Het Boek, Vacatures en positionering

De huidige rustige stijl (grote foto's, veel witruimte, korte tekstblokken) blijft. Bestaande inhoud blijft staan.

## 1. Menu
Nieuwe volgorde (desktop, gsm en footer):
`Het Landgoed · De Plekken · Ons Verhaal · Het Boek · Vacatures · Contact`

## 2. Nieuwe pagina Vacatures (/vacatures)
- Titel: "Vacatures – Samen bouwen aan de toekomst van Ridderborn"
- Twee aparte oproepen met de letterlijke concepttekst van de klant:
  1. Beheerdersstel voor Kasteel Ridderborn, AngelPark en Shabos (met links naar angelpark.be en shabos.be)
  2. Ondernemend stel voor Kasteelhoeve Rendelborn
- Elk met een grote foto en een knop "Reageer op deze vacature". Die opent Contact met het juiste onderwerp al ingevuld.
- Korte zin dat afspraken over wonen en samenwerking persoonlijk besproken worden (geen beloftes, geen mede-eigendom).
- **Aan/uit-schakelaar**: één instelling waarmee je Vacatures tijdelijk uitzet. Dan verdwijnt het uit het menu en toont de pagina een korte melding "Er zijn momenteel geen openstaande vacatures".

## 3. Nieuwe pagina Het Boek (/het-boek)
- Titel "Het Boek", los van de activiteiten van Harry en Gwen. "The Wheel of Sound" wordt niet als boektitel gebruikt.
- Rustige landingspagina met een grote foto, een korte inleiding en lege plekken voor de hoofdstukken van Jean-Pierre (vul ik later met zijn tekst).
- Een vaste plek voor een link naar de boekpagina van Spirit Connection. Die blijft verborgen tot de link bekend is.

## 4. Contactpagina
- Keuze voor onderwerp toevoegen: Algemene vraag · Reageren op een vacature · Een activiteit voorstellen.
- Bij vacature-reacties een korte hint: vertel wie je bent, je ervaring en wat je wilt bijdragen.
- Het onderwerp gaat mee in de e-mail.

## 5. Positionering en ligging
- Op de homepage-introductie en Het Landgoed een korte passage: Ridderborn stelt het landgoed open voor mensen en groepen die er zelf passende activiteiten willen organiseren (kunst, muziek, natuur, stilte, ontmoeting, kleine bijeenkomsten), geformuleerd als mogelijkheden.
- Ligging natuurlijk vermelden: "in Hasselt, in het hart van Haspengouw", zonder enige suggestie van samenwerking met de stad.

## Nog nodig van de klant
- Tekst en opbouw van Het Boek (Jean-Pierre)
- Foto's van John voor Het Boek en de voorwerpen (tot dan gebruik ik bestaande foto's)
- Link naar de boekpagina van Spirit Connection

## Technisch
- Nieuwe routes `src/routes/vacatures.tsx` en `src/routes/het-boek.tsx`, elk met eigen head-metadata.
- `src/content/site-config.ts` met `vacaturesActief` en `boekLinkSpiritConnection`; Nav en Footer lezen dit.
- Contact leest `?onderwerp=` uit de URL; `contact.php` neemt het onderwerp op in de mail.
- Nieuwe pagina's toevoegen aan de lijst in `scripts/build-static.mjs`. Daarna build:static controleren en de pagina's bekijken op computer en gsm.
