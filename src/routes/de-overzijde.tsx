import { createFileRoute, Link } from "@tanstack/react-router";

import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { RevealImage } from "@/components/RevealImage";

import overzijdeHero from "@/assets/brochure/overzijde-hero.jpg.asset.json";
import p33_1 from "@/assets/brochure/p33_1.jpg.asset.json";

export const Route = createFileRoute("/de-overzijde")({
  head: () => ({
    meta: [
      { title: "Landschap & natuur — De Overzijde van Ridderborn" },
      {
        name: "description",
        content:
          "Park, bos, graslanden, akkers en weilanden aan de overzijde van Kasteel Ridderborn: een landschap dat we stap voor stap rijker willen maken.",
      },
      { property: "og:title", content: "Landschap & natuur — De Overzijde van Ridderborn" },
      {
        property: "og:description",
        content: "Ridderborn houdt niet op bij de poort van het kasteel. Ruimte om te blijven ademen.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/de-overzijde" },
      { property: "og:image", content: overzijdeHero.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: overzijdeHero.url },
    ],
    links: [{ rel: "canonical", href: "/de-overzijde" }],
  }),
  component: DeOverzijdePage,
});

function DeOverzijdePage() {
  return (
    <div className="bg-background text-foreground">
      <Nav />

      <header className="relative min-h-[80vh] flex items-end overflow-hidden">
        <RevealImage
          src={overzijdeHero.url}
          alt="Stil weidelandschap bij zonsopgang met ochtendnevel en een smal pad dat tussen hoge bomen wegloopt."
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-hero-shadow/70" />
        <div className="relative w-full px-6 pb-16 text-center text-hero-foreground">
          <p className="text-[0.7rem] uppercase tracking-[0.28em] text-hero-foreground/80">De Overzijde</p>
          <h1 className="font-display mt-5 text-4xl md:text-6xl leading-[1.05] [text-shadow:var(--shadow-hero-text)]">
            Landschap &amp; natuur
          </h1>
        </div>
      </header>

      <section className="py-28 md:py-40 px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-display text-2xl md:text-4xl leading-[1.35]">
            Ridderborn houdt niet op bij de poort van het kasteel.
          </p>
          <p className="mt-10 text-lg text-muted-foreground leading-relaxed">
            Park, bos, graslanden, akkers en landbouwgronden vormen samen een veel
            groter landschap. Aan de overzijde liggen de historische Kasteelhoeve
            Rendelborn en uitgestrekte weilanden.
          </p>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Dat landschap willen we niet alleen behouden, maar stap voor stap rijker
            maken: meer biodiversiteit, meer ruimte voor bomen, bloemen, dieren en
            insecten, en landbouw die bij de plek past.
          </p>
          <p className="mt-10 font-display text-xl md:text-2xl">
            En vooral: ruimte om te blijven ademen.
          </p>
        </div>
      </section>

      <section className="pb-24 md:pb-40">
        <figure className="overflow-hidden">
          <RevealImage
            src={p33_1.url}
            alt="Bosrijk landschap met hoge bomen en bemoste grond aan de overzijde van Ridderborn."
            loading="lazy"
            className="h-[60svh] md:h-[86vh] w-full object-cover"
          />
        </figure>
        <div className="mx-auto max-w-2xl px-6 pt-14 md:pt-20 text-center">
          <p className="text-[0.7rem] uppercase tracking-[0.28em] text-muted-foreground">Een idee voor de toekomst</p>
          <h2 className="font-display mt-5 text-3xl md:text-5xl leading-[1.1]">Een plek voor afscheid</h2>
          <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
            Een van de ideeën die we voor de toekomst onderzoeken, is of een deel van
            het landschap een natuurlijke plek kan bieden voor afscheid en
            herinnering. Geen traditionele begraafplaats, maar natuur. Een boom, gras,
            bloemen en stilte.
          </p>
          <p className="mt-6 text-base text-muted-foreground leading-relaxed italic">
            Dit idee bevindt zich nog in ontwikkeling en wordt onderzocht in overleg
            met de betrokken instanties.
          </p>
          <Link
            to="/contact"
            className="mt-12 inline-flex items-center gap-3 text-xs uppercase tracking-[0.22em] border-b border-foreground/25 pb-2 hover:border-foreground transition-colors"
          >
            Contact <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
