# Drie afsluitregels na elkaar laten verschijnen

## Wat je ziet
Zodra de bezoeker de avondfoto onderaan bereikt, verschijnen de drie regels één voor één:
- "Een plek om te ontdekken." komt eerst,
- daarna "Een plek om te koesteren.",
- en als laatste "Een plek om door te geven."

Elke regel komt zacht tevoorschijn: hij wordt langzaam zichtbaar, schuift een klein stukje omhoog en wordt van wazig scherp. Alles samen duurt ongeveer 5 seconden. Het gebeurt één keer per bezoek aan de pagina.

Bezoekers die op hun toestel "minder beweging" hebben ingesteld, zien de tekst meteen. Zonder JavaScript blijft de tekst gewoon zichtbaar.

## Technische details
- `src/components/Footer.tsx`: de `<p>` opsplitsen in drie `<span className="block">`-regels.
- IntersectionObserver (threshold ~0.4, eenmalig) zet een `shown`-status; tot hydratie geen verborgen klassen (zelfde aanpak als `RevealImage`).
- Per regel: start `opacity-0 translate-y-3 blur-sm`, zichtbaar `opacity-100 translate-y-0 blur-0`, transitie 1800ms ease-out, vertragingen 0 / 1600 / 3200 ms (eindigt na ~5 s).
- Tailwind-`translate`-eigenschap gebruiken, geen `transform` in keyframes.
- `prefers-reduced-motion`: geen animatie.
