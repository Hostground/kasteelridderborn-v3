import { createFileRoute, Link } from "@tanstack/react-router";

import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";

import p5_2 from "@/assets/brochure/p5_2.jpg.asset.json";
import p29_1 from "@/assets/brochure/p29_1.jpg.asset.json";

export const Route = createFileRoute("/waterberg")({
  head: () => ({
    meta: [
      { title: "Waterberg — Waterbunkers als tentoonstellingsruimte" },
      {
        name: "description",
        content:
          "Voormalige waterbunkers in Berg (Tongeren – Borgloon) krijgen een nieuw leven als ondergrondse tentoonstellingsruimte waar erfgoed en hedendaagse kunst elkaar ontmoeten.",
      },
      { property: "og:title", content: "Waterberg — Waterbunkers als tentoonstellingsruimte" },
      {
        property: "og:description",
        content:
          "Bakstenen gewelven, weerkaatsend water en stilte: herbestemming van waterbunkers tot tentoonstellingsruimte in de natuur.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/waterberg" },
      { property: "og:image", content: p29_1.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: p29_1.url },
    ],
    links: [{ rel: "canonical", href: "/waterberg" }],

  }),
  component: WaterbergPage,
});

function WaterbergPage() {
  return (
    <div className="bg-background text-foreground">
      <Nav />

      {/* Hero */}
      <header className="relative min-h-[70vh] flex items-end overflow-hidden">
        <img
          src={p29_1.url}
          alt="Interieur van een waterbunker met bakstenen gewelven en bogen, deels ondergelopen met water."
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80" />
        <div className="relative mx-auto max-w-7xl w-full px-6 pb-16 pt-40">
          <p className="eyebrow text-white/80">Waterberg</p>
          <h1 className="font-display mt-4 text-5xl md:text-7xl leading-[0.95] text-white max-w-3xl drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)]">
            Bunker tot <span className="italic">bühne.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/90 max-w-xl font-light">
            Herbestemming in de natuur- en landschapszone te Berg
            (Tongeren – Borgloon).
          </p>
        </div>
      </header>

      {/* Intro */}
      <section className="py-24 md:py-32 px-6">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6">
            <SectionHeading eyebrow="Herbestemming" title="Erfgoed krijgt een" italic="nieuw leven." />
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
              In de natuur- en landschapszone te Berg (Tongeren – Borgloon) krijgen
              voormalige waterbunkers een nieuw leven als ondergrondse, sferische
              tentoonstellingsruimte. Bakstenen gewelven, weerkaatsend water en stilte —
              een unieke plek waar erfgoed en hedendaagse kunst elkaar ontmoeten.
            </p>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Onderdeel van het bredere Ridderborn-ensemble: één landschap, vier
              werelden.
            </p>
          </div>
          <div className="lg:col-span-6">
            <img
              src={p5_2.url}
              alt="Landschap rond de Waterberg in Berg, Tongeren – Borgloon."
              className="aspect-[4/3] object-cover w-full rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* Kenmerken */}
      <section className="pb-24 md:pb-32 px-6">
        <div className="mx-auto max-w-7xl grid md:grid-cols-3 gap-6">
          {[
            {
              t: "Ondergronds & sferisch",
              b: "Bakstenen gewelven en bogen, deels ondergelopen met water — een decor dat nergens anders te vinden is.",
            },
            {
              t: "Kunst & stilte",
              b: "Tentoonstellingen waar hedendaagse kunst en eeuwenoud erfgoed elkaar versterken.",
            },
            {
              t: "Midden in de natuur",
              b: "Gelegen in een beschermde natuur- en landschapszone, onderdeel van het Ridderborn-ensemble.",
            },
          ].map((c) => (
            <div key={c.t} className="bg-secondary/40 rounded-xl p-7 border border-border">
              <h3 className="font-display text-2xl text-primary">{c.t}</h3>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{c.b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-secondary/40 text-center">
        <p className="eyebrow text-accent">Bezoek Waterberg</p>
        <h2 className="font-display text-3xl md:text-5xl mt-5">
          Daal af in <span className="italic text-primary">stilte en kunst.</span>
        </h2>
        <Link
          to="/contact"
          className="inline-flex mt-10 items-center gap-2 bg-primary text-primary-foreground px-7 py-4 rounded-full text-sm hover:bg-primary/90 transition"
        >
          Plan je bezoek →
        </Link>
      </section>

      <Footer />
    </div>
  );
}
