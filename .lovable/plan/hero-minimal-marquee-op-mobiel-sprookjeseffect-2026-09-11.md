# Hero: minimal marquee op mobiel + sprookjeseffect

## Doel
Op mobiel worden de acht hero-knoppen (Kasteel, Angelpark, … Antwerpen) een rustige, eindeloos scrollende rij die van rechts naar links beweegt en aan beide zijkanten zacht wegvaagt. Daarnaast krijgt de hero een subtiel sprookjesachtig laagje: zwevende lichtdeeltjes (vuurvliegjes) over de foto. Desktop blijft exact zoals nu.

## Wat je straks ziet
- **Mobiel**: één rij kleine, minimalistische knoppen (dunne omlijning, lichte blur) die langzaam voorbijglijdt; links en rechts een zachte fade via een masker. Alle knoppen blijven echte links naar dezelfde pagina's.
- **Desktop**: ongewijzigd raster van knoppen.
- **Sprookjeslaag**: een tiental langzaam zwevende lichtpuntjes met zachte gloed over de hero-foto, gecombineerd met de bestaande mist. Subtiel en elegant, geen drukke animatie.
- **Toegankelijkheid**: bij "verminderde animatie"-instelling van het toestel staan marquee en deeltjes stil.

## Technische uitwerking
1. **`src/routes/index.tsx` (functie `Hero`)**
   - De bestaande `nav` krijgt `hidden md:grid` (alleen desktop).
   - Nieuwe mobiele marquee-`nav` (`md:hidden`): container met `overflow-hidden` en `[mask-image:linear-gradient(to_right,transparent,black_18%,black_82%,transparent)]`; binnenin een flex-rij met de acht bestemmingen **twee keer** herhaald (naadloze loop), geanimeerd met nieuwe utility `animate-hero-marquee`. Items zijn dezelfde `<Link>`-componenten, visueel verfijnd naar de gekozen richting: kleinere tekst, dunnere border, `backdrop-blur`, ruimere padding.
2. **`src/styles.css`**
   - Nieuwe keyframes `hero-marquee` (translateX 0 → -50%, ±28s lineair, infinite) en `hero-firefly` (langzaam opstijgen + dwarrelen met opacity-puls).
   - Nieuwe klassen: `.animate-hero-marquee`, `.hero-fireflies` / `.hero-firefly` met varianten (grootte, positie, delay, duur), allemaal met bestaande semantische tokens (`hero-foreground`, zachte warme gloed via `color-mix`).
   - Uitbreiding van de bestaande `prefers-reduced-motion` blok: marquee en fireflies pauzeren.
3. **Fairytale-laag in `Hero`**: extra `aria-hidden` laag met ~10 `<span class="hero-firefly …">` deeltjes boven de bestaande mist, onder de tekst (z-index behouden).

## Verificatie
- Playwright-screenshot op mobiel (393px) en desktop (1280px): marquee zichtbaar/mobiel-only, deeltjes aanwezig, desktopraster intact.
- Check `/tmp/observability/build-errors.log`.
