import { Link } from "@tanstack/react-router";

import avond from "@/assets/footer-angelpark.jpg";
import { Wordmark } from "@/components/Wordmark";
import { places } from "@/components/places";

export function Footer() {
  return (
    <footer className="relative">
      <div className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <img
          src={avond}
          alt="Het kasteel bij schemering, weerspiegeld in de vijver, omlijst door donkere boomtakken."
          loading="lazy"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative px-6 text-center text-white">
          <Wordmark size="lg" className="drop-shadow-[0_2px_18px_rgba(0,0,0,0.55)]" />
          <p className="mt-10 font-display text-xl md:text-2xl leading-relaxed text-white/90 drop-shadow-[0_1px_10px_rgba(0,0,0,0.5)]">
            Een plek met een verleden.
            <br />
            Een landschap met een toekomst.
          </p>
        </div>
      </div>

      <div className="border-t border-border/60 px-6 py-14">
        <div className="mx-auto max-w-[92rem] flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <nav className="flex flex-wrap gap-x-6 gap-y-3 text-xs uppercase tracking-[0.16em] text-muted-foreground">
            <Link to="/het-landgoed" className="hover:text-foreground transition-colors">
              Het Landgoed
            </Link>
            {places.map((p) => (
              <Link key={p.to} to={p.to} className="hover:text-foreground transition-colors">
                {p.label}
              </Link>
            ))}
            <Link to="/contact" className="hover:text-foreground transition-colors">
              Contact
            </Link>
          </nav>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Ridderborn — Haspengouw, België.
          </p>
        </div>
      </div>
    </footer>
  );
}
