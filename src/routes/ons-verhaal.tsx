import { RevealImage } from "@/components/RevealImage";
import { createFileRoute, Link } from "@tanstack/react-router";

import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import p3_2 from "@/assets/brochure/p3_2.jpg.asset.json";

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
      <figure className="overflow-hidden">
        <RevealImage
          src={p3_2.url}
          alt="Een rustig pad door het park van Ridderborn."
          className="h-[70svh] md:h-[86vh] w-full object-cover"
        />
      </figure>

      <article className="mx-auto max-w-2xl px-6 py-24 md:py-36">
        <p className="text-[0.7rem] uppercase tracking-[0.28em] text-muted-foreground">Ons verhaal</p>
        <h1 className="font-display mt-5 text-4xl md:text-6xl leading-[1.05]">
          Meer dan twintig jaar Ridderborn
        </h1>
        <div className="mt-12 space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>Al meer dan twintig jaar is Ridderborn ons thuis.</p>
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
