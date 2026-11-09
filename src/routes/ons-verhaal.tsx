import { RevealImage } from "@/components/RevealImage";
import { createFileRoute, Link } from "@tanstack/react-router";

import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import hero from "@/assets/brochure/ons-verhaal-hero.jpg.asset.json";

export const Route = createFileRoute("/ons-verhaal")({
  head: () => ({
    meta: [
      { title: "Ons verhaal — Angelica & John over Ridderborn" },
      {
        name: "description",
        content:
          "Al meer dan twintig jaar is Ridderborn het thuis van Angelica & John. Over behoud, nieuw leven en de toekomst van het landgoed.",
      },
      { property: "og:title", content: "Ons verhaal — Angelica & John over Ridderborn" },
      {
        property: "og:description",
        content: "Meer dan twintig jaar Ridderborn, en een visie op erfgoed dat leeft.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: OnsVerhaalPage,
});

function OnsVerhaalPage() {
  return (
    <div className="bg-background text-foreground">
      <Nav />
      <header className="relative h-[86svh] flex items-center justify-center overflow-hidden">
        <RevealImage
          src={hero.url}
          alt="Een rustig pad door het park van Ridderborn in het avondlicht."
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative px-6 text-center text-white">
          <p className="text-[0.7rem] uppercase tracking-[0.28em] text-white/80">Ridderborn</p>
          <h1 className="font-display mt-6 text-4xl md:text-6xl uppercase tracking-[0.14em] drop-shadow-[0_2px_18px_rgba(0,0,0,0.5)]">
            Ons verhaal
          </h1>
        </div>
      </header>

      <section className="px-6 pt-24 md:pt-40">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-display text-2xl md:text-4xl leading-[1.35]">
            Al meer dan twintig jaar is Ridderborn ons thuis.
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-2xl px-6 py-24 md:py-32 text-center">
        <h2 className="font-display text-3xl md:text-4xl leading-[1.1]">
          Meer dan twintig jaar Ridderborn
        </h2>
        <div className="mt-12 space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            In die jaren hebben wij geprobeerd deze bijzondere plek niet alleen te
            onderhouden, maar steeds iets aan haar verhaal toe te voegen.
          </p>
          <p>
            Soms groot, vaak heel klein. Een tuin. Een boom. Een kunstwerk. Een gebouw
            dat opnieuw een functie krijgt. Een verborgen detail waar iemand onverwacht
            blij van wordt.
          </p>
          <p>Zo is Ridderborn langzaam geworden wat het vandaag is. En nog steeds is het niet af.</p>
        </div>

        <h2 className="font-display mt-24 text-3xl md:text-4xl leading-[1.1]">
          De toekomst van Ridderborn
        </h2>
        <div className="mt-10 space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            Wij geloven dat erfgoed alleen werkelijk behouden kan blijven wanneer het
            ook een betekenis heeft voor de toekomst. Daarom zoeken we naar een
            evenwicht tussen behoud en nieuw leven.
          </p>
          <p className="font-display text-xl text-foreground">
            Erfgoed en natuur. Landbouw en biodiversiteit. Kunst en bewustzijn.
            Ontmoeting en stilte. Vieren en afscheid nemen.
          </p>
          <p>Niet alles hoeft hier te gebeuren. Alleen wat bij Ridderborn past.</p>
          <p>
            Ons doel is eenvoudig: Ridderborn doorgeven aan de volgende generatie —
            niet alleen als een plek die bewaard is gebleven, maar als een plek die
            leeft.
          </p>
        </div>
        <p className="mt-14 font-display text-2xl">Angelica &amp; John</p>
        <Link
          to="/contact"
          className="mt-12 inline-flex items-center gap-3 text-xs uppercase tracking-[0.22em] border-b border-foreground/25 pb-2 hover:border-foreground transition-colors"
        >
          Neem contact op <span aria-hidden="true">→</span>
        </Link>
      </article>
      <Footer />
    </div>
  );
}
