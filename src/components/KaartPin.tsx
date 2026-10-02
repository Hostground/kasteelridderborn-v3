import { useState } from "react";
import { Link } from "@tanstack/react-router";

import kasteel from "@/assets/brochure/kasteel.jpg.asset.json";

/**
 * Interactieve pin op de Ferrariskaart: valt binnen, beweegt zacht op en neer,
 * met pulserende ringen en een klikbaar kaartje over Kasteel Ridderborn.
 */
export function KaartPin() {
  const [open, setOpen] = useState(false);
  return (
    <>
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
      <div className="absolute h-0 w-0" style={{ left: "44.3%", top: "52.5%" }}>
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
    </>
  );
}
