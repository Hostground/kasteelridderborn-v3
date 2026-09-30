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
          "Angelpark op Landgoed Ridderborn: natuur- en erfgoedwandelingen, eco-workshops, bosbaden, outdoor yoga en openlucht expo's in Haspengouw.",
      },
      { property: "og:title", content: "Angelpark — Natuur, kunst en stilte in Haspengouw" },
      {
        property: "og:description",
        content:
          "Wandelingen, eco-workshops, bosbaden en openlucht expo's op Landgoed Ridderborn. Nourishing the soul.",
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

function AngelparkPage() {
  return (
    <div className="bg-background text-foreground">
      <Nav />

      {/* Hero */}
      <header className="relative min-h-[70vh] flex items-end overflow-hidden">
        <img
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

      {/* Galerij */}
      <section className="pb-24 md:pb-32 px-6">
        <div className="mx-auto max-w-7xl grid grid-cols-6 gap-3">
          <img
            src={p12_1.url}
            alt="Groep mensen in een kring buiten, in gesprek in een natuurlijke omgeving."
            className="col-span-6 md:col-span-3 aspect-[4/3] object-cover w-full rounded-xl"
          />
          <img
            src={p12_2.url}
            alt="Stenen boog van een ruïne in een bos, omringd door herfstbladeren."
            className="col-span-3 md:col-span-2 aspect-[4/3] object-cover w-full rounded-xl"
          />
          <img
            src={p3_2.url}
            alt="Een cluster paddenstoelen groeit op een bemoste boomstronk."
            className="col-span-3 md:col-span-1 aspect-[4/3] object-cover w-full rounded-xl"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-secondary/40 text-center">
        <p className="eyebrow text-accent">Bezoek Angelpark</p>
        <h2 className="font-display text-3xl md:text-5xl mt-5">
          Kom wandelen, verstillen, <span className="italic text-primary">verwonderen.</span>
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
