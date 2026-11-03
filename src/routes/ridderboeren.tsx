import { RevealImage } from "@/components/RevealImage";
import { createFileRoute, Link } from "@tanstack/react-router";

import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";

import p16_1 from "@/assets/brochure/p16_1.jpg.asset.json";
import p18_1 from "@/assets/brochure/p18_1.jpg.asset.json";
import p19_1 from "@/assets/brochure/p19_1.jpg.asset.json";
import p21_1 from "@/assets/brochure/p21_1.jpg.asset.json";
import p21_2 from "@/assets/brochure/p21_2.jpg.asset.json";

export const Route = createFileRoute("/ridderboeren")({
  head: () => ({
    meta: [
      { title: "Rendelborn — Regeneratieve landbouw in Haspengouw" },
      {
        name: "description",
        content:
          "Rendelborn op Landgoed Ridderborn: regeneratieve landbouw, kleinschalige biologische teelten, permacultuur, hoogstamboomgaarden en korte keten in Haspengouw.",
      },
      { property: "og:title", content: "Rendelborn — Regeneratieve landbouw in Haspengouw" },
      {
        property: "og:description",
        content:
          "Eerlijk, organisch en verbonden: werken met respect voor bodem, biodiversiteit en seizoenen op Landgoed Ridderborn.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/ridderboeren" },
      { property: "og:image", content: p16_1.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: p16_1.url },
    ],
    links: [{ rel: "canonical", href: "/ridderboeren" }],

  }),
  component: RendelbornPage,
});

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-l-2 border-accent pl-4">
      <div className="font-display text-2xl text-foreground">{value}</div>
      <div className="text-xs text-muted-foreground mt-1 leading-snug">{label}</div>
    </div>
  );
}

const waarden = [
  {
    t: "Organische principes",
    b: "Kleinschalige biologische teelten met respect voor bodem, biodiversiteit en het ritme van de seizoenen.",
  },
  {
    t: "Regeneratief & permacultuur",
    b: "Landbouw die de bodem sterker achterlaat dan ze hem aantrof — inclusief natuurinclusieve veeteelt.",
  },
  {
    t: "Korte keten & community",
    b: "Van het veld rechtstreeks naar de buurt: eerlijke producten, verbonden met Ridderborn.",
  },
];

function RendelbornPage() {
  return (
    <div className="bg-background text-foreground">
      <Nav />

      {/* Hero */}
      <header className="relative min-h-[70vh] flex items-end overflow-hidden">
        <RevealImage
          src={p16_1.url}
          alt="Hand met een bos vers geoogste, met aarde bedekte wortels."
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80" />
        <div className="relative mx-auto max-w-7xl w-full px-6 pb-16 pt-40">
          <p className="eyebrow text-white/80">Rendelborn</p>
          <h1 className="font-display mt-4 text-5xl md:text-7xl leading-[0.95] text-white max-w-3xl drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)]">
            Quality & <span className="italic">community.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/90 max-w-xl font-light">
            A world of pure goodness — regeneratieve landbouw en korte keten in
            Haspengouw.
          </p>
        </div>
      </header>

      {/* Intro + stats */}
      <section className="py-24 md:py-32 px-6">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6">
            <SectionHeading eyebrow="Onze grond" title="Echte kwaliteit begint in" italic="het veld." />
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
              Aan de overzijde van Ridderborn ligt de historische Kasteelhoeve
              Rendelborn: circa 1.500 m² aan gebouwen, met akkers en weilanden
              eromheen. We onderzoeken hoe landbouw op kleine schaal, lokale
              voedselproductie, biodiversiteit en natuur elkaar kunnen versterken.
              Niet terug naar vroeger. Wel opnieuw begrijpen wat de grond ons kan geven.
            </p>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Bij Rendelborn geloven we dat echte kwaliteit begint in het veld. Onze
              boeren werken volgens organische principes, met respect voor bodem,
              biodiversiteit en het ritme van de seizoenen.
            </p>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Regeneratieve landbouw, kleinschalige biologische teelten, permacultuur en
              natuurinclusieve veeteelt verbonden met Ridderborn — een wereld van pure
              goodness.
            </p>
            <p className="mt-10 font-display italic text-2xl text-primary">
              Eerlijk. Organisch. Verbonden.
            </p>
          </div>
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <Stat value="8 ha" label="Landbouwgrond" />
              <Stat value="9 ha" label="Park en bos rond Ridderborn" />
              <Stat value="16 ha" label="Graslanden aan De Overzijde" />
            </div>
            <RevealImage
              src={p18_1.url}
              alt="Groenteteelt en veldstructuur op Landgoed Ridderborn."
              className="mt-8 aspect-[16/9] object-cover w-full rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* Waarden */}
      <section className="pb-24 md:pb-32 px-6">
        <div className="mx-auto max-w-7xl grid md:grid-cols-3 gap-6">
          {waarden.map((w) => (
            <div key={w.t} className="bg-secondary/40 rounded-xl p-7 border border-border">
              <h3 className="font-display text-2xl text-primary">{w.t}</h3>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{w.b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Galerij */}
      <section className="pb-24 md:pb-32 px-6">
        <div className="mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-3 gap-3">
          <RevealImage
            src={p19_1.url}
            alt="Vers geoogste snijbiet met levendige groene bladeren en roze stelen."
            className="aspect-square object-cover w-full rounded-xl"
          />
          <RevealImage
            src={p21_1.url}
            alt="Vers geoogste groenten en ingemaakte producten in een winkel."
            className="aspect-square object-cover w-full rounded-xl"
          />
          <RevealImage
            src={p21_2.url}
            alt="Streekproducten van Rendelborn."
            className="col-span-2 md:col-span-1 aspect-square object-cover w-full rounded-xl"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-secondary/40 text-center">
        <p className="eyebrow text-accent">Proef het verschil</p>
        <h2 className="font-display text-3xl md:text-5xl mt-5">
          Van het veld, <span className="italic text-primary">naar je bord.</span>
        </h2>
        <Link
          to="/contact"
          className="inline-flex mt-10 items-center gap-2 bg-primary text-primary-foreground px-7 py-4 rounded-full text-sm hover:bg-primary/90 transition"
        >
          Neem contact op →
        </Link>
      </section>

      <Footer />
    </div>
  );
}
