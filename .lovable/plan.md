# Grote foto's op de homepage rustig laten verschijnen

## Wat je ziet
Wanneer je naar beneden scrollt, verschijnt elke grote foto op de homepage zacht: ze fadet in en zoomt heel subtiel van iets groter naar normaal (ca. 1,6 s), als een camera die tot rust komt. Elke foto doet dit één keer.

Geldt voor: de zeven hoofdstukfoto's, de foto bij Ons verhaal en de avondfoto onderaan. De hero en de kaart blijven zoals ze zijn.

Bezoekers die in hun toestel "minder beweging" hebben ingesteld, zien de foto's meteen zonder animatie.

## Technische details
- Nieuwe kleine component `RevealImage` (in `src/components/`) met IntersectionObserver (threshold ~0.15, eenmalig).
- Start: `opacity-0 scale-[1.06]`; zichtbaar: `opacity-100 scale-100`, `transition` 1600ms met zachte ease-out. `figure` houdt `overflow-hidden`.
- Zonder JS/SSR: foto blijft zichtbaar (animatieklasse pas na hydration toegevoegd), zodat de statische build nooit lege plekken toont.
- `prefers-reduced-motion`: geen animatie.
- In `src/routes/index.tsx` de `<img>` in `StorySection`, `OnsVerhaal` en `Closing` vervangen door `RevealImage`.
