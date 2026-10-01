import { createFileRoute, Link } from "@tanstack/react-router";

import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

import page22 from "@/assets/brochure/page_22.jpg.asset.json";
import p23_1 from "@/assets/brochure/p23_1.jpg.asset.json";
import p23_3 from "@/assets/brochure/p23_3.jpg.asset.json";
import p24_1 from "@/assets/brochure/p24_1.jpg.asset.json";
import p24_2 from "@/assets/brochure/p24_2.jpg.asset.json";
import p23_2 from "@/assets/brochure/p23_2.jpg.asset.json";

export const Route = createFileRoute("/shabos")({
  head: () => ({
    meta: [
      { title: "Shabos — Verblijven in de natuur bij Landgoed Ridderborn" },
      {
        name: "description",
        content:
          "Shabos is verblijf in de natuur: Zen House aan de Fazantstraat 22, houten woonwagen en moderne cabin. Rust, stilte en zingeving in Haspengouw, tot 6 personen.",
      },
      { property: "og:title", content: "Shabos — Verblijven in de natuur bij Landgoed Ridderborn" },
      {
        property: "og:description",
        content:
          "Een plek waar geborgenheid, rust, stilte en zingeving de ziel voeden. Verblijf tot 6 personen, het hele jaar door.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/shabos" },
      { property: "og:image", content: page22.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: page22.url },
    ],
    links: [{ rel: "canonical", href: "/shabos" }],

  }),
  component: ShabosPage,
});

const verblijven = [
  {
    title: "Fazantstraat 22 — Zen House",
    body: "Een stijlvolle moderne woning met ruimte voor 6 personen, beschikbaar het hele jaar door. Een plek om tot rust te komen, midden in het groen.",
  },
  {
    title: "Living in nature",
    body: "Houten woonwagen, moderne cabin en tuinen — een premium uitvalsbasis voor een bezoek aan het landgoed.",
  },
  {
    title: "Synergie met het landgoed",
    body: "Versterking van landschap & beleving, ondersteuning van educatie en duurzame landbouw. Shabos ontvangt partners, bedrijven, vrijwilligers en deelnemers aan educatieve programma's.",
  },
];

function ShabosPage() {
  return (
    <div className="bg-background text-foreground">
      <Nav />

      {/* Hero */}
      <header className="relative min-h-[70vh] flex items-end overflow-hidden">
        <img
          src={page22.url}
          alt="Moderne witte woning aan de rand van een bos, weerspiegeld in een rustige vijver."
          className="absolute inset-0 h-full w-full object-cover brightness-105 contrast-110 saturate-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-black/65" />
        <div className="relative mx-auto max-w-7xl w-full px-6 pb-16 pt-40">
          <p className="eyebrow text-white/80">Shabos</p>
          <h1 className="font-display mt-4 text-5xl md:text-7xl leading-[0.95] text-white max-w-3xl drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)]">
            Rest is a <span className="italic">state of mind.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/90 max-w-xl font-light">
            Verblijf in de natuur — geborgenheid, rust, stilte en zingeving.
          </p>
        </div>
      </header>

      {/* Intro */}
      <section className="py-24 md:py-32 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow text-accent">Een prachtig plekje op aarde</p>
          <p className="mt-8 font-display text-3xl md:text-4xl leading-tight text-foreground">
            Waar geborgenheid, rust, stilte en zingeving
            <span className="italic text-primary"> de ziel voeden.</span>
          </p>
          <p className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Shabos ontvangt partners, bedrijven, vrijwilligers en deelnemers aan
            educatieve programma's — iedereen die even wil landen in het groen.
          </p>
        </div>
      </section>

      {/* Verblijven */}
      <section className="pb-24 md:pb-32 px-6">
        <div className="mx-auto max-w-7xl grid md:grid-cols-3 gap-6">
          {verblijven.map((v) => (
            <div key={v.title} className="bg-secondary/40 rounded-xl p-7 border border-border">
              <h3 className="font-display text-2xl text-primary">{v.title}</h3>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Galerij */}
      <section className="pb-24 md:pb-32 px-6">
        <div className="mx-auto max-w-7xl grid grid-cols-6 gap-3">
          <img
            src={p24_2.url}
            alt="Moderne houten woning met balkon, grote ramen en bomen rondom."
            className="col-span-6 md:col-span-4 aspect-[4/3] object-cover w-full rounded-xl"
          />
          <img
            src={p27_1.url}
            alt="Houten pad met zonne-lampjes naar een prieel in een tuin bij schemering."
            className="col-span-6 md:col-span-2 aspect-[4/3] object-cover w-full rounded-xl"
          />
          <img
            src={p23_1.url}
            alt="Buitenaanzicht van een wit huis met grindplein en boomstronken."
            className="col-span-3 aspect-square object-cover w-full rounded-xl"
          />
          <img
            src={p23_3.url}
            alt="Interieur van een houten cabin met deur, kasten en een kleurrijk patroon kussen."
            className="col-span-3 aspect-square object-cover w-full rounded-xl"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 px-6 overflow-hidden">
        <img
          src={p24_1.url}
          alt="Verblijf in het groen bij Shabos."
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/85" />
        <div className="relative mx-auto max-w-3xl text-center text-primary-foreground">
          <p className="eyebrow text-accent">Verblijf bij Shabos</p>
          <h2 className="font-display text-3xl md:text-5xl mt-5">
            Kom tot rust in <span className="italic">het groen.</span>
          </h2>
          <Link
            to="/contact"
            className="inline-flex mt-10 items-center gap-2 bg-cream text-bark px-7 py-4 rounded-full text-sm hover:bg-cream/90 transition"
          >
            Vraag beschikbaarheid →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
