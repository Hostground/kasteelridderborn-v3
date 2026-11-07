import { Link } from "@tanstack/react-router";

import avond from "@/assets/footer-angelpark.jpg";
import { Wordmark } from "@/components/Wordmark";
import { places } from "@/components/places";
import { ClosingLines } from "@/components/ClosingLines";
import kaart from "@/assets/brochure/ferrariskaart-vliermaal-1771.jpg.asset.json";

const linkCls = "hover:text-foreground transition-colors duration-300";
const headCls = "text-[0.68rem] uppercase tracking-[0.28em] text-foreground";
const listCls = "mt-6 space-y-3 font-display text-base xl:text-lg text-muted-foreground";
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

      <div className="relative overflow-hidden px-6 pt-24 pb-10">
        <img
          src={kaart.url}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="pointer-events-none absolute right-0 bottom-20 hidden w-[520px] opacity-50 mix-blend-multiply sepia-[0.5] lg:block"
          style={{ maskImage: "radial-gradient(ellipse 75% 80% at 72% 60%, black 35%, transparent 100%)", WebkitMaskImage: "radial-gradient(ellipse 75% 80% at 72% 60%, black 35%, transparent 100%)" }}
        />
        <svg
          aria-hidden="true"
          viewBox="0 0 40 40"
          className="pointer-events-none absolute right-10 bottom-[22rem] hidden h-10 w-10 text-muted-foreground/60 lg:block"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.6"
        >
          <circle cx="20" cy="20" r="9" />
          <path d="M20 4 L22 18 L20 20 L18 18 Z M20 36 L22 22 L20 20 L18 22 Z M4 20 L18 18 L20 20 L18 22 Z M36 20 L22 18 L20 20 L22 22 Z" fill="currentColor" fillOpacity="0.25" />
          <text x="20" y="3" fontSize="3.5" textAnchor="middle" fill="currentColor" stroke="none">N</text>
        </svg>
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center">
            <p className="font-display text-5xl md:text-6xl text-foreground">Ridderborn</p>
            <p className="mt-4 font-display italic text-lg text-muted-foreground">
              Een bijzondere plek in het hart van Haspengouw
            </p>
            <div className="mt-8 flex items-center justify-center gap-4 text-accent" aria-hidden="true">
              <span className="h-px w-24 bg-accent/50" />
              <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor"><path d="M7 0 L8.6 5.4 L14 7 L8.6 8.6 L7 14 L5.4 8.6 L0 7 L5.4 5.4 Z" /></svg>
              <span className="h-px w-24 bg-accent/50" />
            </div>
          </div>

          <div className="mt-20 grid lg:gap-x-8 gap-12 text-center sm:grid-cols-2 sm:text-left lg:grid-cols-4">
            <div>
              <h3 className={headCls}>Het landgoed</h3>
              <ul className={listCls}>
                <li><Link to="/het-landgoed" className={linkCls}>Het Landgoed</Link></li>
                <li><Link to="/ons-verhaal" className={linkCls}>Ons verhaal</Link></li>
              </ul>
            </div>
            <div>
              <h3 className={headCls}>De plekken</h3>
              <ul className={listCls}>
                {mainPlaces.map((p) => (
                  <li key={p.to}><Link to={p.to} className={linkCls}>{p.label}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className={headCls}>Bezoek</h3>
              <ul className={listCls}>
                <li>Vliermaal</li>
                <li>Haspengouw, België</li>
              </ul>
            </div>
            <div>
              <h3 className={headCls}>Contact</h3>
              <ul className={listCls}>
                <li><a href="mailto:hello@kasteelhoeveridderborn.com" className={`${linkCls} text-base`}>hello@kasteelhoeveridderborn.com</a></li>
                <li><Link to="/contact" className={linkCls}>Contactpagina</Link></li>
              </ul>
            </div>
          </div>

          <div className="mt-24 flex flex-col items-center gap-3 border-t border-border/60 pt-8 text-xs tracking-[0.12em] text-muted-foreground sm:flex-row sm:justify-between">
            <p>© {new Date().getFullYear()} Ridderborn — Angelica &amp; John</p>
            <Link to="/antwerpen" className={linkCls}>Antwerpen — Venue Fourteen</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
