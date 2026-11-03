import { RevealImage } from "@/components/RevealImage";
import { createFileRoute, Link } from "@tanstack/react-router";

import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

import kasteel from "@/assets/brochure/kasteel.jpg.asset.json";
import p15_1 from "@/assets/brochure/p15_1.jpg.asset.json";

export const Route = createFileRoute("/kasteel-ridderborn")({
  head: () => ({
    meta: [
      { title: "Kasteel Ridderborn — Het historische hart van het landgoed" },
      {
        name: "description",
        content:
          "Kasteel Ridderborn is het historische hart van het landgoed in Haspengouw: eeuwenoude baksteen, park, oude bomen en stilte.",
      },
      { property: "og:title", content: "Kasteel Ridderborn — Het historische hart" },
      {
        property: "og:description",
        content: "Het stille middelpunt van het landgoed Ridderborn in Haspengouw.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/kasteel-ridderborn" },
      { property: "og:image", content: kasteel.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: kasteel.url },
    ],
    links: [{ rel: "canonical", href: "/kasteel-ridderborn" }],
  }),
  component: KasteelPage,
});

function KasteelPage() {
  return (
    <div className="bg-background text-foreground">
      <Nav />

      <header className="relative h-[86svh] flex items-center justify-center overflow-hidden">
        <RevealImage
          src={kasteel.url}
          alt="Kasteel Ridderborn in roodbruine baksteen met witte luiken, omgeven door wijde grasvelden en oude bomen."
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative px-6 text-center text-white">
          <p className="text-[0.7rem] uppercase tracking-[0.28em] text-white/80">Ridderborn</p>
          <h1 className="font-display mt-6 text-4xl md:text-6xl uppercase tracking-[0.14em] drop-shadow-[0_2px_18px_rgba(0,0,0,0.5)]">
            Kasteel Ridderborn
          </h1>
        </div>
      </header>

      <section className="px-6 py-24 md:py-40">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-display text-2xl md:text-4xl leading-[1.35]">
            Het kasteel is het stille middelpunt waar alles op het landgoed naar
            terugkeert.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24 md:pb-36">
        <div className="mx-auto max-w-[92rem] grid md:grid-cols-12 gap-12 items-center">
          <RevealImage
            src={p15_1.url}
            alt="Het kasteel in de winter, met een abstracte stenen sculptuur in het besneeuwde park."
            loading="lazy"
            className="md:col-span-7 w-full h-[60vh] object-cover"
          />
          <div className="md:col-span-5">
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
              Eeuwenoude baksteen, witte luiken, een park met bomen die ouder zijn dan
              wie er ooit gewoond heeft. Wie door de poort komt, merkt vooral de rust.
            </p>
            <p className="mt-8 text-lg md:text-xl leading-relaxed text-muted-foreground">
              Het kasteel wordt omringd door een park met monumentale bomen, vijvers,
              tuinen, een boomgaard en plekken die je pas tijdens een wandeling
              ontdekt. Kunst en natuur lopen hier vanzelf in elkaar over: tussen het
              groen staan sculpturen en objecten, op onverwachte plaatsen liggen
              halfedelstenen en tussen de kiezels zijn duizenden kleine glazen hartjes
              verscholen.
            </p>
            <p className="mt-8 font-display text-xl md:text-2xl">
              Ridderborn wil niet alleen bekeken worden. Je moet het ontdekken.
            </p>
            <p className="mt-8 text-lg md:text-xl leading-relaxed text-muted-foreground">
              Het kasteel en de omliggende gebouwen worden met zorg beheerd en
              onderhouden. Over het gebruik en de bestemming van de verschillende
              gebouwen zijn wij op dit moment in overleg met de bevoegde instanties.
            </p>
            <Link
              to="/het-landgoed"
              className="mt-12 inline-flex items-center gap-3 text-xs uppercase tracking-[0.22em] border-b border-foreground/25 pb-2 hover:border-foreground transition-colors"
            >
              Het Landgoed
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
