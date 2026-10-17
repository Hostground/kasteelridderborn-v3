import { createFileRoute, Link } from "@tanstack/react-router";
import type { CSSProperties } from "react";

import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { KaartPin } from "@/components/KaartPin";
import { Wordmark } from "@/components/Wordmark";
import { RevealImage } from "@/components/RevealImage";

import kaart from "@/assets/brochure/ferrariskaart-vliermaal-1771.jpg.asset.json";
import kasteel from "@/assets/brochure/kasteel.jpg.asset.json";
import overzijdeHero from "@/assets/brochure/overzijde-hero.jpg.asset.json";
import page22 from "@/assets/brochure/page_22.jpg.asset.json";
import p3_1 from "@/assets/brochure/p3_1.jpg.asset.json";
import p5_1 from "@/assets/brochure/DSC_8275.jpg.asset.json";
import p3_2 from "@/assets/brochure/p3_2.jpg.asset.json";
import avond from "@/assets/avond-landgoed.jpg";
import p18_1 from "@/assets/brochure/p18_1.jpg.asset.json";
import p29_1 from "@/assets/brochure/p29_1.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ridderborn — Een bijzondere plek in het hart van Haspengouw" },
      {
        name: "description",
        content:
          "Kasteel Ridderborn en zijn landgoed in Haspengouw: park, AngelPark, de Orangerie, Kasteelhoeve Rendelborn, het landschap, Shabos en Waterberg. Eén landgoed, één verhaal.",
      },
      { property: "og:title", content: "Ridderborn — Een bijzondere plek in het hart van Haspengouw" },
      {
        property: "og:description",
        content:
          "Een landgoed dat zich langzaam ontvouwt. Verschillende plekken, samen één verhaal.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: kasteel.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: kasteel.url },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Place",
          name: "Ridderborn",
          description:
            "Landgoed in Haspengouw met park en bos, landbouwgronden, graslanden, erfgoed en kunst.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Vliermaalroot (Hasselt)",
            addressRegion: "Limburg",
            addressCountry: "BE",
          },
        }),
      },
    ],
  }),
  component: Index,
});

type Story = {
  eyebrow: string;
  title: string;
  lead: string;
  paragraphs: string[];
  img: string;
  alt: string;
  to?: string;
  note?: { title: string; text: string[] };
};

const stories: Story[] = [
  {
    eyebrow: "Kasteel Ridderborn",
    title: "Het hart van het landgoed",
    lead: "Al eeuwen vormt Kasteel Ridderborn het hart van deze plek.",
    paragraphs: [
      "Het kasteel wordt omringd door een park met monumentale bomen, vijvers, tuinen, een boomgaard en bijzondere plekken die je vaak pas tijdens een wandeling ontdekt.",
      "Tussen het groen staan sculpturen en objecten. Op onverwachte plaatsen liggen halfedelstenen, en tussen de kiezels zijn duizenden kleine glazen hartjes verscholen. Ridderborn wil niet alleen bekeken worden. Je moet het ontdekken.",
    ],
    img: kasteel.url,
    alt: "Kasteel Ridderborn in roodbruine baksteen met witte luiken, omgeven door weidse grasvelden en oude bomen.",
    to: "/kasteel-ridderborn",
  },
  {
    eyebrow: "AngelPark",
    title: "Een plek voor rust, natuur en bewustzijn",
    lead: "AngelPark ontstond vanuit de wens om de schoonheid en rust van Ridderborn met anderen te delen.",
    paragraphs: [
      "Niet als een afgesloten wereld, maar als een plek waar natuur, stilte, bewustzijn en ontmoeting bij elkaar mogen komen. Soms is er niets meer nodig dan een wandeling, een oude boom, water, stilte en even tijd.",
    ],
    img: p3_1.url,
    alt: "Zonovergoten bospad tussen hoge bomen in het park van Ridderborn.",
    to: "/angelpark",
  },
  {
    eyebrow: "De Orangerie",
    title: "Voor de bijzondere momenten van het leven",
    lead: "Midden in het groen ligt de Orangerie: een intieme plek voor ongeveer veertig mensen, met een eigen ingang en uitzicht op het park.",
    paragraphs: [
      "Voor momenten die ertoe doen: een huwelijk, een geboorte, een bijzondere ontmoeting, een lezing of kleine bijeenkomst, maar ook afscheid en herinnering.",
    ],
    img: p5_1.url,
    alt: "Luchtfoto van de glazen oranjerie met koperglazen dak, temidden van het groene park met vijver.",
    to: "/de-oranjerie",
  },
  {
    eyebrow: "Kasteelhoeve Rendelborn · De Overzijde",
    title: "Opnieuw begrijpen wat de grond ons kan geven",
    lead: "Aan de overzijde van Ridderborn ligt de historische Kasteelhoeve Rendelborn, met circa 1.500 m² aan gebouwen, akkers en weilanden.",
    paragraphs: [
      "Hier komen landbouw, natuur en landschap weer dichter bij elkaar. We onderzoeken hoe kleinschalige landbouw, lokale voedselproductie, biodiversiteit en natuur elkaar kunnen versterken. Niet terug naar vroeger.",
    ],
    img: p18_1.url,
    alt: "Akker en hoeveland bij Kasteelhoeve Rendelborn in het zachte licht van de vroege ochtend.",
    to: "/ridderboeren",
  },
  {
    eyebrow: "Landschap & natuur",
    title: "Ruimte om te blijven ademen",
    lead: "Ridderborn houdt niet op bij de poort van het kasteel.",
    paragraphs: [
      "Park, bos, graslanden, akkers en landbouwgronden vormen samen een veel groter landschap. Dat willen we niet alleen behouden, maar stap voor stap rijker maken: meer ruimte voor bomen, bloemen, dieren en insecten, en landbouw die bij de plek past.",
    ],
    img: overzijdeHero.url,
    alt: "Stil weidelandschap met ochtendnevel en een smal pad tussen hoge bomen.",
    to: "/de-overzijde",
    note: {
      title: "Een plek voor afscheid",
      text: [
        "Een van de ideeën die we voor de toekomst onderzoeken, is of een deel van het landschap een natuurlijke plek kan bieden voor afscheid en herinnering. Geen traditionele begraafplaats, maar een boom, gras, bloemen en stilte.",
        "Dit idee is nog in ontwikkeling en wordt onderzocht in overleg met de betrokken instanties.",
      ],
    },
  },
  {
    eyebrow: "Shabos",
    title: "Even weg van de wereld",
    lead: "Shabos heeft een heel ander karakter. Groener. Kleiner. Meer teruggetrokken.",
    paragraphs: [
      "Een plek waar natuur, rust en verblijf samenkomen, en waar je even afstand kunt nemen van het dagelijkse leven.",
    ],
    img: page22.url,
    alt: "Moderne witte woning aan de rand van een bos, weerspiegeld in een rustige vijver.",
    to: "/shabos",
  },
  {
    eyebrow: "Waterberg",
    title: "Een verborgen wereld",
    lead: "Historische waterbekkens vormen er vier bijzondere ruimtes naast elkaar.",
    paragraphs: [
      "In het oudste gedeelte dragen gewelven een ruimte met een dunne laag water. Stapstenen leiden je erdoor, en licht en glas veranderen voortdurend de sfeer. Een stem, een instrument of een gong krijgt hier door de natuurlijke galm een bijna onwerkelijke dimensie.",
      "Een plek die je eigenlijk moet horen om haar te begrijpen.",
    ],
    img: p29_1.url,
    alt: "Interieur van een waterbunker met bakstenen gewelven en bogen, deels ondergelopen met water.",
    to: "/waterberg",
  },
];

function Index() {
  return (
    <div className="bg-background text-foreground">
      <Nav />
      <Hero />
      <Opening />
      {stories.map((s) => (
        <StorySection key={s.eyebrow} {...s} />
      ))}
      <LandgoedTeaser />
      <OnsVerhaal />
      <Closing />
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-end justify-center overflow-hidden">
      <img
        src={kasteel.url}
        alt="Kasteel Ridderborn in het gouden licht van de late namiddag, met wijde grasvelden en een hoge wolkenlucht."
        className="absolute inset-0 h-full w-full object-cover object-[58%_center] md:object-center animate-ken-burns will-change-transform"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-hero-shadow/70" />

      <div className="hero-fireflies" aria-hidden="true">
        {[
          { left: "12%", top: "30%", size: 3, duration: "9s", delay: "0s", opacity: 0.5 },
          { left: "33%", top: "22%", size: 3, duration: "14s", delay: "2.8s", opacity: 0.35 },
          { left: "55%", top: "38%", size: 3, duration: "13s", delay: "3.5s", opacity: 0.4 },
          { left: "72%", top: "55%", size: 3, duration: "15s", delay: "4.2s", opacity: 0.3 },
          { left: "88%", top: "28%", size: 2, duration: "10.5s", delay: "1.1s", opacity: 0.45 },
        ].map((f, i) => (
          <span
            key={i}
            className="hero-firefly"
            style={
              {
                left: f.left,
                top: f.top,
                width: `${f.size}px`,
                height: `${f.size}px`,
                "--firefly-duration": f.duration,
                "--firefly-delay": f.delay,
                "--firefly-opacity": f.opacity,
              } as CSSProperties
            }
          />
        ))}
      </div>

      <div className="relative z-10 w-full px-5 pb-14 text-center text-hero-foreground md:pb-20">
        <div className="hero-reveal hero-reveal-title">
          <h1 className="font-display uppercase text-[2.1rem] sm:text-5xl md:text-7xl tracking-[0.22em] md:tracking-[0.28em] leading-none [text-shadow:var(--shadow-hero-text)]">
            Ridderborn
          </h1>
          <p className="mt-5 md:mt-7 font-display text-lg md:text-2xl text-hero-foreground/90 [text-shadow:var(--shadow-hero-text)]">
            Een bijzondere plek in het hart van Haspengouw
          </p>
        </div>
        <a
          href="#ontdek"
          className="mt-12 inline-flex flex-col items-center gap-2 text-[0.65rem] uppercase tracking-[0.28em] text-hero-foreground/80 hover:text-hero-foreground transition-colors"
        >
          Ontdek Ridderborn
          <span aria-hidden="true" className="text-base animate-bounce">↓</span>
        </a>
      </div>
    </section>
  );
}

function Opening() {
  return (
    <section id="ontdek" className="scroll-mt-20 py-28 md:py-44 px-6">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-[0.7rem] uppercase tracking-[0.28em] text-muted-foreground">
          Een landgoed dat blijft ontdekken
        </p>
        <p className="mt-8 font-display text-2xl md:text-4xl leading-[1.35]">
          Ridderborn is niet één gebouw of één bestemming. Het is een wereld die
          zich langzaam ontvouwt.
        </p>
        <div className="mt-10 space-y-5 text-lg text-muted-foreground leading-relaxed">
          <p>
            Van het kasteel en het historische park wandel je langs vijvers, oude
            bomen, tuinen, kunst en kleine verborgen verrassingen naar de Orangerie
            en AngelPark.
          </p>
          <p>
            Aan de overzijde liggen de historische Kasteelhoeve Rendelborn, de
            landbouwgronden en uitgestrekte weilanden. Verderop liggen Shabos en
            Waterberg, ieder met een heel eigen karakter.
          </p>
        </div>
        <p className="mt-10 font-display text-xl md:text-2xl">
          Verschillende plekken, maar samen één verhaal.
        </p>
      </div>
    </section>
  );
}

function StorySection({ eyebrow, title, lead, paragraphs, img, alt, to, note }: Story) {
  return (
    <section className="pb-24 md:pb-40">
      <figure className="overflow-hidden">
        <RevealImage src={img} alt={alt} loading="lazy" className="h-[60svh] md:h-[86vh] w-full object-cover" />
      </figure>
      <div className="mx-auto max-w-2xl px-6 pt-14 md:pt-20 text-center">
        <p className="text-[0.7rem] uppercase tracking-[0.28em] text-muted-foreground">{eyebrow}</p>
        <h2 className="font-display mt-5 text-3xl md:text-5xl leading-[1.1]">{title}</h2>
        <p className="mt-8 font-display text-xl md:text-2xl leading-relaxed">{lead}</p>
        {paragraphs.map((p) => (
          <p key={p} className="mt-5 text-lg text-muted-foreground leading-relaxed">
            {p}
          </p>
        ))}
        {to && (
          <Link
            to={to}
            className="mt-10 inline-flex items-center gap-3 text-xs uppercase tracking-[0.22em] border-b border-foreground/25 pb-2 hover:border-foreground transition-colors"
          >
            Ontdek meer <span aria-hidden="true">→</span>
          </Link>
        )}
        {note && (
          <div className="mt-16 border-t border-border pt-10">
            <p className="font-display text-xl md:text-2xl">{note.title}</p>
            {note.text.map((t) => (
              <p key={t} className="mt-4 text-base text-muted-foreground leading-relaxed italic">
                {t}
              </p>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function OnsVerhaal() {
  return (
    <section className="py-24 md:py-40">
      <figure className="overflow-hidden">
        <RevealImage
          src={p3_2.url}
          alt="Een rustig pad door het park van Ridderborn."
          loading="lazy"
          className="h-[50svh] md:h-[70vh] w-full object-cover"
        />
      </figure>
      <div className="mx-auto max-w-2xl px-6 pt-14 md:pt-20 text-center">
        <p className="text-[0.7rem] uppercase tracking-[0.28em] text-muted-foreground">Ons verhaal</p>
        <h2 className="font-display mt-5 text-3xl md:text-5xl leading-[1.1]">
          Meer dan twintig jaar Ridderborn
        </h2>
        <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
          Al meer dan twintig jaar is Ridderborn ons thuis. Soms groot, vaak heel
          klein: een tuin, een boom, een kunstwerk, een gebouw dat opnieuw een functie
          krijgt. Zo is Ridderborn langzaam geworden wat het vandaag is. En nog steeds
          is het niet af.
        </p>
        <p className="mt-8 font-display text-xl">Angelica &amp; John</p>
        <Link
          to="/ons-verhaal"
          className="mt-10 inline-flex items-center gap-3 text-xs uppercase tracking-[0.22em] border-b border-foreground/25 pb-2 hover:border-foreground transition-colors"
        >
          Lees ons verhaal <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}

function Closing() {
  return (
    <section className="pb-24 md:pb-32">
      <figure className="overflow-hidden">
        <RevealImage
          src={avond}
          alt="Het landgoed in avondlicht."
          loading="lazy"
          className="h-[60svh] md:h-[86vh] w-full object-cover"
        />
      </figure>
      <div className="mx-auto max-w-2xl px-6 pt-16 md:pt-24 text-center">
        <p className="font-display uppercase tracking-[0.28em] text-2xl md:text-3xl">Ridderborn</p>
        <p className="mt-8 font-display text-xl md:text-2xl leading-relaxed">
          Een plek om te ontdekken.
          <br />
          Een plek om te koesteren.
          <br />
          Een plek om door te geven.
        </p>
        <Link
          to="/contact"
          className="mt-12 inline-flex items-center gap-3 text-xs uppercase tracking-[0.22em] border-b border-foreground/25 pb-2 hover:border-foreground transition-colors"
        >
          Contact <span aria-hidden="true">→</span>
        </Link>
        <p className="mt-16 text-xs text-muted-foreground">
          Ook van ons: <Link to="/antwerpen" className="underline underline-offset-4 hover:text-foreground">VenueFourteen in Antwerpen</Link>
        </p>
      </div>
    </section>
  );
}

function LandgoedTeaser() {
  return (
    <section className="px-6 py-24 md:py-40 bg-secondary/40">
      <div className="mx-auto max-w-[92rem] grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5">
          <p className="text-[0.7rem] uppercase tracking-[0.28em] text-muted-foreground">
            Het Landgoed
          </p>
          <h2 className="font-display mt-5 text-3xl md:text-5xl leading-[1.05]">
            Hoe alles bij elkaar hoort
          </h2>
          <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-xl">
            Op de oude Ferrariskaart van 1771 ligt het kasteel al midden in het
            landschap van akkers, weiden en beken.
          </p>
          <Link
            to="/het-landgoed"
            className="mt-10 inline-flex items-center gap-3 text-xs uppercase tracking-[0.22em] border-b border-foreground/25 pb-2 hover:border-foreground transition-colors"
          >
            Bekijk het landgoed
          </Link>
        </div>
        <div className="lg:col-span-7">
          <div className="relative">
            <img
              src={kaart.url}
              alt="Ferrariskaart van Vliermaal uit 1771, met het kasteel, de hoeve, akkers en beken in het landschap van Haspengouw."
              loading="lazy"
              width={1068}
              height={742}
              className="w-full h-auto"
            />
            <KaartPin />
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[92rem] mt-16 text-center">
        <Wordmark size="sm" className="text-muted-foreground" />
      </div>
    </section>
  );
}
