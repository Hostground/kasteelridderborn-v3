# Mobiele homepage-secties duidelijker koppelen aan hun foto

## Probleem
Op mobiel is niet meteen duidelijk welke foto bij welke sectie hoort. De `Chapter`-component toont nu op smalle schermen de tekst boven de foto, maar door de grote afbeeldingen en de witruimte komt een foto vaak tussen de tekst van twee opeenvolgende secties in.

## Gekozen richting
**Framed section blocks** — elke sectie wordt een duidelijk visueel blok: tekst bovenaan, foto eronder, met een subtiele verticale verbindingslijn die het blok bij elkaar houdt. De secties krijgen meer ademruimte tussen elkaar, zodat de grens tussen twee hoofdstukken scherper wordt.

## Wat er moet gebeuren

1. **Chapter-component aanpassen (`src/components/Chapter.tsx`)**
   - Behoud de desktop-layout (`md:` grid met icoon, titel, body en link).
   - Op mobiel (`<md`):
     - Plaats tekstblok (icoon + titel + body + link) boven de afbeelding.
     - Voeg een subtiele verticale lijn toe tussen het tekstblok en de foto, links uitgelijnd met het icoon.
     - Vergroot de verticale afstand tussen twee opeenvolgende secties, zodat secties niet in elkaar overlopen.
   - Behoud alle bestaande props, links, alt-teksten en toegankelijkheid.

2. **Styling aanvullen (`src/styles.css`)**
   - Voeg een kleine utility/class toe voor de verbindingslijn, gebaseerd op het bestaande `--border` token.
   - Geen nieuwe kleuren of animaties; blijf binnen het huidige warme palette.

3. **Homepage impact**
   - `src/routes/index.tsx` hoeft alleen visueel te profiteren van de aangepaste `Chapter`; geen extra wijzigingen nodig.

4. **Testen**
   - Mobiele preview (±393 px): controleer dat elke foto duidelijk bij het tekstblok erboven hoort.
   - Desktop preview: controleer dat de bestaande layout onveranderd is.
   - Controleer `prefers-reduced-motion`: er komen geen nieuwe bewegingen bij.

## Niet in scope
- Geen wijziging aan de inhoud van de secties.
- Geen nieuwe pagina's, routes of interacties.
- Geen wijziging aan de hero of het landgoed-teaser blok.
