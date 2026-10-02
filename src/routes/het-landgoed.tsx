import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";

import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { places } from "@/components/places";

import kaart from "@/assets/brochure/ferrariskaart-vliermaal-1771.jpg.asset.json";
import kasteel from "@/assets/brochure/kasteel.jpg.asset.json";

const gronden = [
  { opp: "9 ha", wat: "park en bos rond Ridderborn" },
  { opp: "8 ha", wat: "landbouwgrond" },
  { opp: "16 ha", wat: "graslanden aan De Overzijde" },
  { opp: "2 + 2 ha", wat: "in Vliermaal" },
  { opp: "4 ha", wat: "Shabos" },
];

export const Route = createFileRoute("/het-landgoed")({
  head: () => ({
    meta: [
      { title: "Het Landgoed — De landschappen van Ridderborn" },
      {
        name: "description",
        content:
          "Het landgoed Ridderborn in kaart: 9 ha park en bos, 8 ha landbouwgrond, 16 ha graslanden aan De Overzijde, 2 + 2 ha in Vliermaal en 4 ha Shabos.",
      },
      { property: "og:title", content: "Het Landgoed — De landschappen van Ridderborn" },
      {
        property: "og:description",
        content:
          "Park en bos, akkers, graslanden en bos: hoe de landschappen van Ridderborn bij elkaar horen.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/het-landgoed" },
      { property: "og:image", content: kasteel.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: kasteel.url },
    ],
    links: [{ rel: "canonical", href: "/het-landgoed" }],
  }),
  component: HetLandgoedPage,
});

function HetLandgoedPage() {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-background text-foreground">
      <Nav />

      <header className="relative h-[80svh] flex items-center justify-center overflow-hidden">
        <img
          src={kasteel.url}
          alt="Het landgoed Ridderborn met wijde grasvelden, oude bomen en het kasteel in de verte."
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative px-6 text-center text-white">
          <p className="text-[0.7rem] uppercase tracking-[0.28em] text-white/80">Ridderborn</p>
          <h1 className="font-display mt-6 text-4xl md:text-6xl uppercase tracking-[0.14em] drop-shadow-[0_2px_18px_rgba(0,0,0,0.5)]">
            Het Landgoed
          </h1>
        </div>
      </header>

      <section className="px-6 py-24 md:py-36">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-display text-2xl md:text-4xl leading-[1.35]">
            Eén landschap, opgebouwd uit verschillende gronden die in elkaar overlopen.
          </p>
          <p className="mt-10 text-lg text-muted-foreground leading-relaxed">
            Rond het kasteel liggen park en bos. Daarachter de akkers van de hoeve, en
            aan de overzijde van de weg de graslanden. Verder weg horen ook de gronden in
            Vliermaal en het bos van Shabos bij het geheel.
          </p>
        </div>
      </section>

      <style>{`
        @keyframes pin-drop {
          0% { opacity: 0; transform: translateY(-36px); }
          55% { opacity: 1; transform: translateY(5px); }
          75% { transform: translateY(-3px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes pin-bob {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-7px); }
        }
        @keyframes pin-ripple {
          0% { transform: translate(-50%, -50%) scale(0.35); opacity: 0.75; }
          70% { opacity: 0; }
          100% { transform: translate(-50%, -50%) scale(1.9); opacity: 0; }
        }
        .kaart-pin-svg {
          animation: pin-drop 0.9s ease-out both, pin-bob 3.2s ease-in-out 1s infinite;
        }
        .kaart-pin-ripple {
          animation: pin-ripple 2.4s ease-out infinite;
        }
        .kaart-pin-ripple-delayed {
          animation: pin-ripple 2.4s ease-out 1.2s infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .kaart-pin-svg, .kaart-pin-ripple, .kaart-pin-ripple-delayed {
            animation: none;
          }
        }
      `}</style>
      <section className="px-6 pb-8">
        <div className="relative mx-auto w-full max-w-[92rem]">
          <img
            src={kaart.url}
            alt="Ferrariskaart van Vliermaal uit 1771, met het kasteel, de hoeve, akkers en beken in het landschap van Haspengouw."
            loading="lazy"
            width={1068}
            height={742}
            className="mx-auto w-full h-auto"
          />
          <div
            className="absolute h-0 w-0"
            style={{ left: "44.3%", top: "52.5%" }}
          >
            <span
              aria-hidden="true"
              className="kaart-pin-ripple pointer-events-none absolute h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-primary/70"
            />
            <span
              aria-hidden="true"
              className="kaart-pin-ripple-delayed pointer-events-none absolute h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-primary/50"
            />
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-label="Toon informatie over Kasteel Ridderborn"
              className="group absolute -translate-x-1/2 -translate-y-full cursor-pointer focus:outline-none"
            >
              <svg
                viewBox="0 0 24 24"
                className="kaart-pin-svg h-10 w-10 drop-shadow-[0_3px_6px_rgba(0,0,0,0.25)] md:h-12 md:w-12"
                aria-hidden="true"
              >
                <path
                  d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                  className="fill-primary stroke-background"
                  strokeWidth="1.2"
                />
                <circle cx="12" cy="9" r="2.4" className="fill-background" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              className="absolute top-3 -translate-x-1/2 cursor-pointer whitespace-nowrap rounded-full border border-border bg-background/90 px-3 py-1 font-display text-xs tracking-wide text-foreground opacity-75 shadow-sm backdrop-blur-sm transition-opacity duration-200 hover:opacity-100 focus-visible:opacity-100 md:text-sm"
            >
              Kasteel Ridderborn
            </button>
            {open && (
              <div
                role="dialog"
                aria-label="Kasteel Ridderborn"
                className="animate-scale-in absolute bottom-14 left-1/2 z-10 w-64 -translate-x-1/2 overflow-hidden rounded-lg border border-border bg-background text-left shadow-xl md:w-72"
              >
                <img
                  src={kasteel.url}
                  alt="Kasteel Ridderborn in roodbruine baksteen"
                  className="h-32 w-full object-cover"
                />
                <div className="p-4">
                  <p className="font-display text-lg">Kasteel Ridderborn</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Het historische hart van het landgoed: eeuwenoude baksteen,
                    omringd door park, oude bomen en stilte.
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <Link
                      to="/kasteel-ridderborn"
                      className="text-sm text-primary underline-offset-4 hover:underline"
                    >
                      Ontdek het kasteel →
                    </Link>
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      aria-label="Sluiten"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <p className="mx-auto mt-6 max-w-[92rem] text-xs text-muted-foreground">
          De Ferrariskaart van Vliermaal (1771) — een historische landkaart,
          bedoeld om de samenhang te tonen — geen kadastrale kaart.
        </p>
      </section>

      <section className="px-6 py-24 md:py-36">
        <div className="mx-auto max-w-[92rem] grid md:grid-cols-12 gap-12">
          <h2 className="md:col-span-4 font-display text-3xl md:text-4xl leading-[1.1]">
            De gronden
          </h2>
          <ul className="md:col-span-7 md:col-start-6 divide-y divide-border">
            {gronden.map((g) => (
              <li key={g.wat} className="flex items-baseline justify-between gap-8 py-6">
                <span className="font-display text-2xl md:text-3xl">{g.opp}</span>
                <span className="text-right text-muted-foreground">{g.wat}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-6 pb-28 md:pb-40">
        <div className="mx-auto max-w-[92rem]">
          <p className="text-[0.7rem] uppercase tracking-[0.28em] text-muted-foreground">
            De plekken
          </p>
          <ul className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-8">
            {places.map((p) => (
              <li key={p.to}>
                <Link
                  to={p.to}
                  className="group flex items-center gap-4 text-foreground/75 hover:text-foreground transition-colors"
                >
                  <span className="h-9 w-9 shrink-0 text-primary/70 group-hover:text-primary transition-colors">
                    <p.mark />
                  </span>
                  <span className="font-display text-lg">{p.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
}
