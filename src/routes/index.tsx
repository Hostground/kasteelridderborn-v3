import { createFileRoute, Link } from "@tanstack/react-router";
import type { CSSProperties } from "react";

import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Chapters } from "@/components/Chapters";
import type { ChapterData } from "@/components/Chapter";

import { Wordmark } from "@/components/Wordmark";
import { HeroMarquee } from "@/components/HeroMarquee";
import {
  MarkAngelpark,
  MarkAntwerpen,
  MarkKasteel,
  MarkOranjerie,
  MarkOverzijde,
  MarkRendelborn,
  MarkShabos,
  MarkWaterberg,
} from "@/components/Marks";

import kaart from "@/assets/brochure/ferrariskaart-vliermaal-1771.jpg.asset.json";
import kasteel from "@/assets/brochure/kasteel.jpg.asset.json";
import overzijdeHero from "@/assets/brochure/overzijde-hero.jpg.asset.json";
import page22 from "@/assets/brochure/page_22.jpg.asset.json";
import p3_1 from "@/assets/brochure/p3_1.jpg.asset.json";
import p5_1 from "@/assets/brochure/DSC_8275.jpg.asset.json";
import p15_1 from "@/assets/brochure/p15_1.jpg.asset.json";
import p18_1 from "@/assets/brochure/p18_1.jpg.asset.json";
import p29_1 from "@/assets/brochure/p29_1.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ridderborn — Een landgoed met een eeuwenoud verhaal" },
      {
        name: "description",
        content:
          "Ridderborn in Haspengouw: een landgoed van park en bos, landbouw, erfgoed en kunst. Kasteel Ridderborn, Angelpark, De Oranjerie, Kasteelhoeve Rendelborn, De Overzijde, Shabos en Waterberg.",
      },
      { property: "og:title", content: "Ridderborn — Een landgoed met een eeuwenoud verhaal" },
      {
        property: "og:description",
        content:
          "Park en bos, landbouw, erfgoed en kunst in Haspengouw. Eén landgoed, verschillende plekken.",
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

const chapters: ChapterData[] = [
  {
    index: "I",
    eyebrow: "Het historische hart",
    title: "Kasteel Ridderborn",
    body: "Het kasteel staat er al eeuwen, omringd door park en oude bomen. Het is het stille middelpunt waar alles op het landgoed naar terugkeert.",
    img: kasteel.url,
    alt: "Kasteel Ridderborn in roodbruine baksteen met witte luiken, omgeven door weidse grasvelden en oude bomen.",
    to: "/kasteel-ridderborn",
    linkLabel: "Kasteel Ridderborn",
    ctaLabel: "Ontdek het kasteel",
    mark: MarkKasteel,
  },
  {
    index: "II",
    eyebrow: "Park en bos",
    title: "Angelpark",
    body: "Negen hectare park en bos rond het kasteel: eeuwenoude bomen, paden, water en ruimte voor kunst in de open lucht.",
    img: p3_1.url,
    alt: "Zonovergoten bospad tussen hoge bomen in het park van Ridderborn.",
    to: "/angelpark",
    linkLabel: "Angelpark",
    ctaLabel: "Verken het park",
    mark: MarkAngelpark,
  },
  {
    index: "III",
    eyebrow: "Licht en glas",
    title: "De Oranjerie",
    body: "Een bijzondere ruimte aan het park, met veel licht en uitzicht op het groen. De precieze invulling en het vergunde gebruik worden op dit moment zorgvuldig in kaart gebracht.",
    img: p5_1.url,
    alt: "Licht historisch bijgebouw op het landgoed met hoge ramen en uitzicht op het park.",
    to: "/de-oranjerie",
    linkLabel: "De Oranjerie",
    ctaLabel: "Bekijk De Oranjerie",
    mark: MarkOranjerie,
  },
  {
    index: "IV",
    eyebrow: "Landbouw",
    title: "Kasteelhoeve Rendelborn",
    body: "De hoeve en de akkers rond het landgoed: werken met de seizoenen, met aandacht voor bodem, biodiversiteit en het landschap zelf.",
    img: p18_1.url,
    alt: "Akker en hoeveland bij Kasteelhoeve Rendelborn in het zachte licht van de vroege ochtend.",
    to: "/ridderboeren",
    linkLabel: "Kasteelhoeve Rendelborn",
    ctaLabel: "Bekijk de hoeve",
    mark: MarkRendelborn,
  },
  {
    index: "V",
    eyebrow: "Graslanden",
    title: "De Overzijde",
    body: "Zestien hectare graslanden tegenover het kasteel. Onze visie is om hier, samen met de bevoegde instanties, te onderzoeken of een natuurlijke plek voor afscheid mogelijk is.",
    img: overzijdeHero.url,
    alt: "Stil weidelandschap met ochtendnevel en een smal pad tussen hoge bomen.",
    to: "/de-overzijde",
    linkLabel: "De Overzijde",
    ctaLabel: "Ontdek De Overzijde",
    mark: MarkOverzijde,
  },
  {
    index: "VI",
    eyebrow: "Verblijf",
    title: "Shabos",
    body: "Vier hectare met bos, water en tuinen, en enkele plekken om te verblijven. Stil, eenvoudig en dicht bij de natuur.",
    img: page22.url,
    alt: "Moderne witte woning aan de rand van een bos, weerspiegeld in een rustige vijver.",
    to: "/shabos",
    linkLabel: "Shabos",
    ctaLabel: "Ontdek Shabos",
    mark: MarkShabos,
  },
  {
    index: "VII",
    eyebrow: "Erfgoed en kunst",
    title: "Waterberg",
    body: "Voormalige waterbunkers in een natuur- en landschapszone: bakstenen gewelven, weerkaatsend water en stilte, als ruimte voor kunst en erfgoed.",
    img: p29_1.url,
    alt: "Interieur van een waterbunker met bakstenen gewelven en bogen, deels ondergelopen met water.",
    to: "/waterberg",
    linkLabel: "Waterberg",
    ctaLabel: "Ontdek Waterberg",
    mark: MarkWaterberg,
  },
  {
    index: "VIII",
    eyebrow: "De stad",
    title: "Antwerpen — Venue Fourteen",
    body: "Naast het landgoed is er de stad. In Antwerpen zijn de eerste verdieping en het penthouse bestemd voor verhuur. Beelden en verdere informatie volgen.",
    img: p15_1.url,
    alt: "Abstracte stenen sculptuur in een winters landschap, met op de achtergrond een historisch bakstenen gebouw.",
    to: "/antwerpen",
    linkLabel: "Antwerpen — Venue Fourteen",
    ctaLabel: "Bekijk Venue Fourteen",
    mark: MarkAntwerpen,
  },
];

function Index() {
  return (
    <div className="bg-background text-foreground">
      <Nav />
      <Hero />
      <Opening />

      <Chapters chapters={chapters} />


      <LandgoedTeaser />
      <Footer />
    </div>
  );
}

function Hero() {
  const destinations = [
    { label: "Kasteel", to: "/kasteel-ridderborn" },
    { label: "Angelpark", to: "/angelpark" },
    { label: "De Oranjerie", to: "/de-oranjerie" },
    { label: "Rendelborn", to: "/ridderboeren" },
    { label: "De Overzijde", to: "/de-overzijde" },
    { label: "Shabos", to: "/shabos" },
    { label: "Waterberg", to: "/waterberg" },
    { label: "Antwerpen", to: "/antwerpen" },
  ];

  return (
    <section id="top" className="relative min-h-[92svh] flex items-end justify-center overflow-hidden">
      <img
        src={kasteel.url}
        alt="Kasteel Ridderborn in het gouden licht van de late namiddag, met wijde grasvelden en een hoge wolkenlucht."
        className="absolute inset-0 h-full w-full object-cover object-[58%_center] md:object-center animate-ken-burns will-change-transform"
      />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="absolute inset-0 bg-gradient-to-b from-hero-shadow/25 via-transparent to-hero-shadow/80" />

      <div className="hero-mist" aria-hidden="true">
        <span className="hero-mist-wisp hero-mist-wisp-one" />
        <span className="hero-mist-wisp hero-mist-wisp-two" />
        <span className="hero-mist-wisp hero-mist-wisp-three" />
      </div>

      <div className="hero-fireflies" aria-hidden="true">
        {[
          { left: "12%", top: "30%", size: 3, duration: "9s", delay: "0s", opacity: 0.55 },
          { left: "24%", top: "58%", size: 2, duration: "12s", delay: "1.4s", opacity: 0.4 },
          { left: "33%", top: "22%", size: 4, duration: "14s", delay: "2.8s", opacity: 0.35 },
          { left: "45%", top: "66%", size: 2, duration: "10s", delay: "0.7s", opacity: 0.5 },
          { left: "55%", top: "38%", size: 3, duration: "13s", delay: "3.5s", opacity: 0.45 },
          { left: "64%", top: "18%", size: 2, duration: "11s", delay: "2.1s", opacity: 0.5 },
          { left: "72%", top: "55%", size: 4, duration: "15s", delay: "4.2s", opacity: 0.3 },
          { left: "82%", top: "32%", size: 2, duration: "9.5s", delay: "1.1s", opacity: 0.55 },
          { left: "18%", top: "74%", size: 3, duration: "12.5s", delay: "5s", opacity: 0.4 },
          { left: "88%", top: "68%", size: 3, duration: "10.5s", delay: "3.1s", opacity: 0.45 },
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

      <div className="relative z-10 w-full px-5 pb-12 pt-36 text-center text-hero-foreground md:px-8 md:pb-16">
        <div className="hero-reveal hero-reveal-title">
        <h1 className="font-display uppercase text-[2.1rem] sm:text-5xl md:text-7xl tracking-[0.22em] md:tracking-[0.28em] leading-none [text-shadow:var(--shadow-hero-text)]">
          Ridderborn
        </h1>
        <p className="mt-5 md:mt-7 font-display text-lg md:text-2xl text-hero-foreground/90 [text-shadow:var(--shadow-hero-text)]">
          Een landgoed met een eeuwenoud verhaal.
        </p>
        </div>

        <nav aria-label="Ontdek de plekken" className="mx-auto mt-9 hidden max-w-3xl grid-cols-4 gap-3 md:mt-12 md:grid">
          {destinations.map((destination, index) => (
            <Link
              key={destination.to}
              to={destination.to}
              className="hero-place-link flex min-h-11 items-center justify-center border border-hero-foreground/40 bg-hero-shadow/15 px-3 py-2 text-[0.65rem] uppercase tracking-[0.16em] text-hero-foreground backdrop-blur-sm transition-colors hover:bg-hero-foreground hover:text-hero-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hero-foreground"
              style={{ "--reveal-delay": `${900 + index * 150}ms` } as CSSProperties}
            >
              {destination.label}
            </Link>
          ))}
        </nav>

        <nav aria-label="Ontdek de plekken" className="mt-10 md:hidden">
          <HeroMarquee destinations={destinations} />
        </nav>
      </div>
    </section>
  );
}

function Opening() {
  return (
    <section className="py-28 md:py-44 px-6">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-display text-2xl md:text-4xl leading-[1.35]">
          Ridderborn is één landgoed in Haspengouw, opgebouwd uit verschillende
          plekken die elk hun eigen karakter hebben.
        </p>
        <p className="mt-10 text-lg text-muted-foreground leading-relaxed">
          Park en bos, landbouw, graslanden, erfgoed en kunst. Het verhaal ontvouwt
          zich langzaam, plek na plek.
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
            Hoe de landschappen bij elkaar horen
          </h2>
          <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-xl">
            Park en bos, akkers, graslanden en bos vormen samen één geheel. Op een
            eenvoudige landschapsweergave wordt zichtbaar hoe de plekken met elkaar
            verbonden zijn.
          </p>
          <Link
            to="/het-landgoed"
            className="mt-10 inline-flex items-center gap-3 text-xs uppercase tracking-[0.22em] border-b border-foreground/25 pb-2 hover:border-foreground transition-colors"
          >
            Bekijk het landgoed
          </Link>
        </div>
        <div className="lg:col-span-7">
          <img
            src={kaart.url}
            alt="Ferrariskaart van Vliermaal uit 1771, met het kasteel, de hoeve, akkers en beken in het landschap van Haspengouw."
            loading="lazy"
            width={1068}
            height={742}
            className="w-full h-auto"
          />
        </div>
      </div>
      <div className="mx-auto max-w-[92rem] mt-16 text-center">
        <Wordmark size="sm" className="text-muted-foreground" />
      </div>
    </section>
  );
}
