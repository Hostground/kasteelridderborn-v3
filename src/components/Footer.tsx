import { Link } from "@tanstack/react-router";

import avond from "@/assets/footer-angelpark.jpg";
import { Wordmark } from "@/components/Wordmark";
import { places } from "@/components/places";
import { ClosingLines } from "@/components/ClosingLines";

const linkCls = "hover:text-foreground transition-colors duration-300";
const mainPlaces = places.filter((p) => p.to !== "/antwerpen");

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
          <ClosingLines className="mt-10 font-display text-xl md:text-2xl leading-relaxed text-white/90 drop-shadow-[0_1px_10px_rgba(0,0,0,0.5)]" />
        </div>
      </div>

      <div className="border-t border-border/60 px-6 pt-20 pb-10">
        <div className="mx-auto max-w-6xl grid gap-14 sm:grid-cols-2 md:grid-cols-3">
          <div>
            <h3 className="text-[0.7rem] uppercase tracking-[0.22em] text-foreground">Ridderborn</h3>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li><Link to="/het-landgoed" className={linkCls}>Het Landgoed</Link></li>
              <li><Link to="/ons-verhaal" className={linkCls}>Ons verhaal</Link></li>
              <li><Link to="/contact" className={linkCls}>Contact</Link></li>
            </ul>
            <p className="mt-6 text-sm text-muted-foreground/80">Haspengouw, België</p>
          </div>
          <div>
            <h3 className="text-[0.7rem] uppercase tracking-[0.22em] text-foreground">De plekken</h3>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              {mainPlaces.map((p) => (
                <li key={p.to}><Link to={p.to} className={linkCls}>{p.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-[0.7rem] uppercase tracking-[0.22em] text-foreground">Verbonden</h3>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li><Link to="/antwerpen" className={linkCls}>Antwerpen — Venue Fourteen</Link></li>
            </ul>
          </div>
        </div>
        <p className="mx-auto mt-20 max-w-6xl border-t border-border/40 pt-8 text-center text-xs text-muted-foreground/80">
          © {new Date().getFullYear()} Ridderborn — Angelica &amp; John
        </p>
      </div>
    </footer>
  );
}
