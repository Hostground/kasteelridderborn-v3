# Mobiele hero-knoppen: aanraakbaar maken

## Doel
Op smartphone kan de bezoeker de rij bewegende knoppen met de vinger verslepen (links/rechts). Na het loslaten loopt de rij vanzelf weer verder.

## Wat verandert
1. **Nieuwe component `HeroMarquee`** (in `src/components/`) die de mobiele knoppenrij overneemt van de CSS-animatie:
   - Automatisch langzaam scrollen van rechts naar links (zoals nu), maar gestuurd via JavaScript zodat automatisch bewegen en slepen samenwerken.
   - Aanraking: vinger op de rij → animatie pauzeert en de rij volgt de vinger (beide richtingen).
   - Loslaten → rij loopt vloeiend verder; een korte tik opent gewoon de link (slepen triggert geen klik).
   - Na ~2 seconden zonder aanraking hervat het automatisch scrollen vanuit de nieuwe positie.
2. **`src/routes/index.tsx`**: de mobiele rij (rond regel 266) vervangen door `<HeroMarquee>`, met dezelfde knoppen, fade aan de zijkanten en bestemmingen. Desktop-grid blijft ongewijzigd.
3. **Verminderde animatie**: wie "verminderde beweging" aan heeft, krijgt een stilstaande rij die handmatig horizontaal te scrollen is.

## Technisch
- Pointer events (touch + muis) met `touch-action: pan-y` zodat verticaal scrollen van de pagina niet wordt geblokkeerd.
- Eindeloze loop blijft: de knoppen blijven gedupliceerd; de offset wordt modulo de halve breedte gehouden.
- De CSS-animatie `animate-hero-marquee` in `src/styles.css` wordt dan overbodig en mag weg; de fade-maskers en vuurvliegjes blijven onaangeroerd.
