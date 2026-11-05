# Voorstel: rustigere, chiquere footer

## Idee
De avondfoto met "Ridderborn" en de drie regels blijft bovenaan als afsluiter. Het deel eronder wordt een rustige, crèmekleurige "briefhoofd"-footer in de sfeer van een oud landgoed:

- **Gecentreerd merk**: grote serif "Ridderborn", eronder cursief "Een bijzondere plek in het hart van Haspengouw", en een dun goudkleurig lijntje met klein ornament.
- **Vier stille kolommen** met kleine kapitalen als kopje:
  - Het landgoed: Het Landgoed, Ons verhaal
  - De plekken: Kasteel Ridderborn, AngelPark, De Orangerie, Kasteelhoeve Rendelborn, Landschap & natuur (De Overzijde), Shabos, Waterberg
  - Bezoek: Vliermaal, Haspengouw, België
  - Contact: hello@kasteelhoeveridderborn.com (klikbaar) en link naar de contactpagina
- **Ferrariskaart als vervaagde watermerk-vignet** rechtsonder (dezelfde transparante kaart als op Het Landgoed), heel licht, alleen op grotere schermen.
- **Slotregel** over de hele breedte met een haarlijn: links "© 2026 Ridderborn — Angelica & John", rechts discreet "Antwerpen — Venue Fourteen".

Op gsm: kolommen onder elkaar, gecentreerd, kaart verborgen.

## Wat niet verandert
- Avondfoto en de drie afsluitregels (inclusief de animatie).
- Geen knoppen, kaders of tegels; veel witruimte.

## Technische details
- Alleen `src/components/Footer.tsx` herschrijven; kaart importeren uit de bestaande asset (`ferrariskaart-vliermaal-1771`), `aria-hidden`, `opacity` ~0.15.
- Ornament als kleine inline SVG; kleuren via bestaande tokens (`foreground`, `muted-foreground`, `border`, accent/goud indien aanwezig in `styles.css`).
- Grid: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`.
- Na afloop controleren op desktop en gsm (Playwright) en statische build.
