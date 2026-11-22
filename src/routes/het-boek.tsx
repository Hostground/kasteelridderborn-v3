import { createFileRoute } from "@tanstack/react-router";

import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/content/site-config";

import hero from "@/assets/brochure/ons-verhaal-hero.jpg.asset.json";

export const Route = createFileRoute("/het-boek")({
  head: () => ({
    meta: [
      { title: "Het Boek — Ridderborn" },
      { name: "description", content: "Het Boek van Ridderborn: een verhaal in hoofdstukken over het landgoed in Haspengouw." },
      { property: "og:title", content: "Het Boek — Ridderborn" },
      { property: "og:description", content: "Een verhaal in hoofdstukken over Ridderborn. Binnenkort meer." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HetBoekPage,
});

/** Hoofdstukken worden later ingevuld met de tekst van Jean-Pierre. */
const hoofdstukken: { title: string; text: string }[] = [];

function HetBoekPage() {
  const link = siteConfig.boekLinkSpiritConnection;
  return (
    <div className="bg-background text-foreground">
      <Nav />
      <PageHero img={hero.url} alt="Een rustig pad door het park van Ridderborn in het avondlicht." eyebrow="Ridderborn" title="Het Boek" />

      <section className="px-6 py-24 md:py-36">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-display text-2xl md:text-3xl leading-[1.4]">
            Een verhaal dat je, net als het landgoed, langzaam ontdekt.
          </p>
          <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
            Hier verschijnen binnenkort de hoofdstukken van het boek.
          </p>
        </div>
      </section>

      {hoofdstukken.map((h, i) => (
        <section key={h.title} className="px-6 pb-20 md:pb-28">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[0.7rem] uppercase tracking-[0.28em] text-muted-foreground">Hoofdstuk {i + 1}</p>
            <h2 className="font-display mt-5 text-3xl md:text-4xl">{h.title}</h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{h.text}</p>
          </div>
        </section>
      ))}

      {link && (
        <section className="px-6 pb-28 text-center">
          <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.22em] border-b border-foreground/25 pb-2 hover:border-foreground transition-colors">
            Meer over het boek <span aria-hidden="true">↗</span>
          </a>
        </section>
      )}
      <Footer />
    </div>
  );
}
