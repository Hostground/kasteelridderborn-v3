import { createFileRoute, Link } from "@tanstack/react-router";

import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

import p15_1 from "@/assets/brochure/p15_1.jpg.asset.json";

export const Route = createFileRoute("/antwerpen")({
  head: () => ({
    meta: [
      { title: "Antwerpen — Venue Fourteen | Ridderborn" },
      {
        name: "description",
        content:
          "Venue Fourteen in Antwerpen, onderdeel van Ridderborn. De eerste verdieping en het penthouse zijn bestemd voor verhuur.",
      },
      { property: "og:title", content: "Antwerpen — Venue Fourteen | Ridderborn" },
      {
        property: "og:description",
        content:
          "Naast het landgoed is er de stad: Venue Fourteen in Antwerpen. Eerste verdieping en penthouse voor verhuur.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/antwerpen" },
      { property: "og:image", content: p15_1.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: p15_1.url },
    ],
    links: [{ rel: "canonical", href: "/antwerpen" }],
  }),
  component: AntwerpenPage,
});

function AntwerpenPage() {
  return (
    <div className="bg-background text-foreground">
      <Nav />

      <header className="relative h-[86svh] flex items-center justify-center overflow-hidden">
        <img
          src={p15_1.url}
          alt="Sober landschap met een abstracte stenen sculptuur en een historisch bakstenen gebouw op de achtergrond."
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative px-6 text-center text-white">
          <p className="text-[0.7rem] uppercase tracking-[0.28em] text-white/80">Ridderborn</p>
          <h1 className="font-display mt-6 text-4xl md:text-6xl uppercase tracking-[0.14em] drop-shadow-[0_2px_18px_rgba(0,0,0,0.5)]">
            Antwerpen
          </h1>
          <p className="mt-6 font-display text-lg md:text-2xl text-white/90">
            Venue Fourteen
          </p>
        </div>
      </header>

      <section className="px-6 py-24 md:py-40">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-display text-2xl md:text-4xl leading-[1.35]">
            Naast het landgoed is er de stad.
          </p>
          <p className="mt-10 text-lg text-muted-foreground leading-relaxed">
            In Antwerpen zijn de eerste verdieping en het penthouse bestemd voor
            verhuur. Beelden van het penthouse en verdere informatie volgen.
          </p>
          <Link
            to="/contact"
            className="mt-12 inline-flex items-center gap-3 text-xs uppercase tracking-[0.22em] border-b border-foreground/25 pb-2 hover:border-foreground transition-colors"
          >
            Informatie aanvragen
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
