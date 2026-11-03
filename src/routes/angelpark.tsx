import { RevealImage } from "@/components/RevealImage";
import { createFileRoute, Link } from "@tanstack/react-router";

import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";

import p3_1 from "@/assets/brochure/p3_1.jpg.asset.json";
import p3_2 from "@/assets/brochure/p3_2.jpg.asset.json";
import p12_1 from "@/assets/brochure/p12_1.jpg.asset.json";
import p12_2 from "@/assets/brochure/p12_2.jpg.asset.json";

export const Route = createFileRoute("/angelpark")({
  head: () => ({
    meta: [
      { title: "Angelpark — Natuur, kunst en stilte in Haspengouw" },
      {
        name: "description",
        content:
          "Angelpark op het eeuwenoude domein Ridderborn: 10 hectare park en bos met rozentuin, vijver, Japanse tuin, oranjerie, eeuwenoude bomen en bosbaden (Shinrin-Yoku).",
      },
      { property: "og:title", content: "Angelpark — Natuur, kunst en stilte in Haspengouw" },
      {
        property: "og:description",
        content:
          "10 hectare park en bos op domein Ridderborn: rozentuin, vijver, Japanse tuin, oranjerie, bomen van meer dan 250 jaar oud en bosbaden. Nourishing the soul.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/angelpark" },
      { property: "og:image", content: p3_1.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: p3_1.url },
    ],
    links: [{ rel: "canonical", href: "/angelpark" }],
  }),
  component: AngelparkPage,
});

const bullets = [
  "Natuur- en erfgoedwandelingen met aandacht voor eeuwenoude bomen, biodiversiteit en waterbeheer.",
  "Eco-workshops over snoei, compost, bijen, vogels en vleermuizen.",
  "Stille paden en open plekken, met ruimte om te wandelen en te kijken.",
  "Residentiële kunst & cultuur, openlucht expo's, art-in-residence.",
];

const plekken = [
  {
    title: "De vijver en het eiland",
    text: "Een grote vijver met een overloopvijver die onder de straat doorloopt. Er zwemmen goudwindes, karpers, voorntjes en steuren; aan de waterkant groeien irissen, wateraardbeien en slangenkruid. Op het eiland staat een prieeltje om te picknicken, en met een bootje kun je de vijver rondvaren.",
  },
  {
    title: "De klassieke rozentuin",
    text: "Hoger gelegen, omzoomd door buxushagen en met gesnoeide taxushagen als donkere wachters. Ernaast ligt de boomgaard met verhoogde vierkantemetertuinen in gesculpteerde bakken van verouderd marmer, en de kleine oranjerie.",
  },
  {
    title: "Japanse tuin & Zen looppad",
    text: "Een meditatieve plek met een kleine nipa-hut op palen, een Zen looppad en een Chinese poort om doorheen te stappen. Verderop ligt een Chinees prieel op een heuveltje.",
  },
  {
    title: "De oranjerie en de kunstwerken",
    text: "De klassieke oranjerie met haar piramide-kunstwerk en vele elfjes. Verspreid over het domein liggen boomstronken en stammen met ruwe bergkristal, amethist, jade en andere mineralen.",
  },
  {
    title: "Eeuwenoude bomen",
    text: "Bomen van meer dan 250 jaar oud: zomereiken, platanen, rode beuken en zeldzame haagbeuken die zich in kronkels naar het licht buigen. De oude oprijlaan met grachten aan weerszijden staat vol varens.",
  },
  {
    title: "De zwemvijver",
    text: "Kristalhelder water waar je de benen in kunt laten bengelen. De karpers laten zich voeren door bezoekers — eentje eet zelfs uit de hand en laat zich graag strelen.",
  },
];

const seizoenen = [
  {
    naam: "Lente",
    text: "In april ligt er een wit tapijt van bosanemonen in het bos, alsof het net gesneeuwd heeft. De vogels maken hun nesten — er is zelfs een buizerdnest in de hoogste boom — en de Egyptische ganzen komen vaak al in februari met meer dan zeven jongen aan.",
  },
  {
    naam: "Zomer",
    text: "In juni staat alles in volle bloei. De varens komen tot wasdom, de kilometers lange meidoorn- en beukenhagen worden geschoren (goed voor drie weken werk) en het is heerlijk toeven onder het prieeltje op het eiland.",
  },
  {
    naam: "Herfst",
    text: "Tamme en wilde kastanjes en beukennootjes vallen — bezoekers mogen ze oprapen en meenemen. De eekhoorns zijn druk in de weer en duizenden kilo's blad moeten van de grasvelden en paden geruimd worden.",
  },
  {
    naam: "Winter",
    text: "Rust over het domein, soms onder een dun laagje sneeuw. Het Bacchusbeeld van eeuwenoud keramiek wordt ingepakt tegen de vorst. Je hoort het knappen van ijs en het druppen van smeltend water.",
  },
];

function AngelparkPage() {
  return (
    <div className="bg-background text-foreground">
      <Nav />

      {/* Hero */}
      <header className="relative min-h-[70vh] flex items-end overflow-hidden">
        <RevealImage
          src={p3_1.url}
          alt="Een zonovergoten bospad bij zonsondergang in Angelpark."
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80" />
        <div className="relative mx-auto max-w-7xl w-full px-6 pb-16 pt-40">
          <p className="eyebrow text-white/80">Angelpark</p>
          <h1 className="font-display mt-4 text-5xl md:text-7xl leading-[0.95] text-white max-w-3xl drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)]">
            Enjoy the <span className="italic">miracle.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/90 max-w-xl font-light">
            Een pretpark voor bewustzijn — natuur, kunst en stilte in het hart van
            Haspengouw.
          </p>
        </div>
      </header>

      {/* Intro + bullets */}
      <section className="py-24 md:py-32 px-6">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Bewustwording" title="Wakker worden in" italic="stilte." />
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
              Een open ruimte voor bewustwording en transformatie, voor individuen en
              groepen die wakker willen worden in stilte, in schoonheid, in verbinding.
              Genietend van de prachtige natuur en mooie kunstobjecten.
            </p>
            <p className="mt-10 font-display italic text-2xl text-primary">
              Nourishing the soul.
            </p>
          </div>
          <div className="lg:col-span-7">
            <ul className="space-y-5">
              {bullets.map((b) => (
                <li
                  key={b}
                  className="flex gap-4 bg-secondary/40 border border-border rounded-xl p-6 text-foreground/85"
                >
                  <span className="text-accent mt-2.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                  <span className="leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Missie */}
      <section className="pb-24 md:pb-32 px-6">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Welkom bij Angelpark" title="Behoud van park" italic="en tuin." />
          </div>
          <div className="lg:col-span-7 space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Angelpark bevindt zich op het eeuwenoude domein Ridderborn en zet zich in
              voor het behoud en de leefbaarheid van historische parken en tuinen, en voor
              hun ontsluiting — zodat hun voortbestaan en hun sociale en culturele
              betekenis gewaarborgd blijven.
            </p>
            <p>
              Daarnaast promoten we in binnen- en buitenland de sierteelt en de tuinkunst.
              Angelpark werkt samen met gelijkwaardige parken ten behoeve van hun
              instandhouding. Zo staan er in Angelpark bomen van meer dan 250 jaar oud.
            </p>
            <p>
              Het doel is het publiek bewuster te maken van de natuur om hen heen, onder
              andere door het organiseren van tuindagen en door mee te werken aan andere
              initiatieven die bijdragen aan de instandhouding van historische parken en
              tuinen.
            </p>
          </div>
        </div>
      </section>

      {/* Galerij */}
      <section className="pb-24 md:pb-32 px-6">
        <div className="mx-auto max-w-7xl grid grid-cols-6 gap-3">
          <RevealImage
            src={p12_1.url}
            alt="Groep mensen in een kring buiten, in gesprek in een natuurlijke omgeving."
            className="col-span-6 md:col-span-3 aspect-[4/3] object-cover w-full rounded-xl"
          />
          <RevealImage
            src={p12_2.url}
            alt="Stenen boog van een ruïne in een bos, omringd door herfstbladeren."
            className="col-span-3 md:col-span-2 aspect-[4/3] object-cover w-full rounded-xl"
          />
          <RevealImage
            src={p3_2.url}
            alt="Een cluster paddenstoelen groeit op een bemoste boomstronk."
            className="col-span-3 md:col-span-1 aspect-[4/3] object-cover w-full rounded-xl"
          />
        </div>
      </section>

      {/* Wat je vindt in het park */}
      <section className="pb-24 md:pb-32 px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Tien hectare"
            title="Wat je vindt in"
            italic="het park."
          />
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plekken.map((p) => (
              <article
                key={p.title}
                className="bg-secondary/40 border border-border rounded-xl p-7"
              >
                <h3 className="font-display text-2xl text-foreground">{p.title}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">{p.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Seizoenen */}
      <section className="py-24 md:py-32 px-6 bg-secondary/30 border-y border-border">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Het jaar rond"
            title="De seizoenen in"
            italic="Angelpark."
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {seizoenen.map((s) => (
              <article key={s.naam} className="bg-background border border-border rounded-xl p-7">
                <p className="eyebrow text-accent">{s.naam}</p>
                <p className="mt-4 text-muted-foreground leading-relaxed">{s.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Shinrin-Yoku */}
      <section className="py-24 md:py-32 px-6">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Bosbaden" title="Ervaar" italic="Shinrin-Yoku." />
            <p className="mt-10 font-display italic text-2xl text-primary">
              Alle leven is met elkaar verbonden.
            </p>
          </div>
          <div className="lg:col-span-7 space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              De term shinrin-yoku werd in 1982 voor het eerst gebruikt door een Japans
              bosagentschap, om mensen aan te moedigen regelmatig een boswandeling te
              maken. Vertaald betekent het 'bosbaden'.
            </p>
            <p>
              Bostherapie is een op onderzoek gebaseerd raamwerk dat genezing en welzijn
              ondersteunt door onderdompeling in bossen en andere natuurlijke omgevingen.
              Studies tonen uiteenlopende gezondheidsvoordelen aan, vooral voor het hart-
              en vaatstelsel en het immuunsysteem, en voor het stabiliseren en verbeteren
              van stemming en concentratie.
            </p>
            <p>
              We bouwen voort op die voordelen en kijken verder: naar wat er gebeurt
              wanneer mensen zich herinneren dat we deel zijn van de natuur, er niet los
              van staan, en op fundamentele manieren verwant zijn met alle andere wezens.
            </p>
          </div>
        </div>
      </section>

      {/* Erfgoed */}
      <section className="pb-24 md:pb-32 px-6">
        <div className="mx-auto max-w-5xl bg-secondary/40 border border-border rounded-2xl p-10 md:p-14">
          <p className="eyebrow text-accent">Erfgoed</p>
          <h2 className="font-display text-3xl md:text-4xl mt-5">
            Een park met een <span className="italic text-primary">lange adem.</span>
          </h2>
          <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
            Het parkbos en de oprijlaan gaan terug op de 18de-eeuwse structuur. In 1865
            werd het domein omgevormd tot een landschapspark met een grote vijver en een
            overloopvijver die onder de straat doorloopt en uitmondt in een beekje. Ook
            een Bacchusbeeld, een brug over de vijver en verschillende fabriekjes in
            rustieke stijl maken deel uit van het park.
          </p>
          <Link
            to="/het-landgoed"
            className="inline-flex mt-8 items-center gap-2 text-sm text-primary hover:underline"
          >
            Lees de geschiedenis van het landgoed →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-secondary/40 text-center">
        <p className="eyebrow text-accent">Bezoek Angelpark</p>
        <h2 className="font-display text-3xl md:text-5xl mt-5">
          Kom wandelen, verstillen, <span className="italic text-primary">verwonderen.</span>
        </h2>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://angelpark.be/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-4 rounded-full text-sm hover:bg-primary/90 transition"
          >
            Meer info op angelpark.be ↗
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 border border-foreground/25 text-foreground px-7 py-4 rounded-full text-sm hover:bg-secondary/60 transition"
          >
            Plan je bezoek →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
