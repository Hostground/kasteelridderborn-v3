import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

import { Wordmark } from "@/components/Wordmark";
import { places } from "@/components/places";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [placesOpen, setPlacesOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const closeTimer = useRef<number | null>(null);

  const openPlaces = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setPlacesOpen(true);
  };
  const closePlacesSoon = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setPlacesOpen(false), 180);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setPlacesOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      if (closeTimer.current) window.clearTimeout(closeTimer.current);
    };
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          if (open) {
            setHidden(false);
          } else if (currentScrollY > lastScrollY && currentScrollY > 80) {
            setHidden(true);
            setPlacesOpen(false);
          } else if (currentScrollY < lastScrollY) {
            setHidden(false);
          }
          lastScrollY = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/50 transition-transform duration-300 ease-out ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="mx-auto max-w-[92rem] flex items-center justify-between px-6 py-5">
        <Link to="/" aria-label="Ridderborn — home" className="text-foreground">
          <Wordmark />
        </Link>

        <nav className="hidden md:flex items-center gap-10 text-[0.8rem] uppercase tracking-[0.18em] text-muted-foreground">
          <Link to="/het-landgoed" className="hover:text-foreground transition-colors">
            Het Landgoed
          </Link>
          <button
            type="button"
            onClick={() => setPlacesOpen((v) => !v)}
            onMouseEnter={openPlaces}
            onMouseLeave={closePlacesSoon}
            onFocus={openPlaces}
            aria-expanded={placesOpen}
            className={`uppercase tracking-[0.18em] hover:text-foreground transition-colors ${placesOpen ? "text-foreground" : ""}`}
          >
            De plekken
          </button>
          <Link to="/ons-verhaal" className="hover:text-foreground transition-colors">
            Ons verhaal
          </Link>
          <Link to="/contact" className="hover:text-foreground transition-colors">
            Contact
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Menu sluiten" : "Menu openen"}
          aria-expanded={open}
          className="md:hidden inline-flex items-center justify-center h-11 w-11 -mr-2 text-foreground/80 hover:text-foreground transition-colors"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Desktop: rustig paneel met de werelden */}
      <div
        onMouseEnter={openPlaces}
        onMouseLeave={closePlacesSoon}
        aria-hidden={!placesOpen}
        className={`hidden md:grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
          placesOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0 pointer-events-none"
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-border/50 bg-background/95 backdrop-blur-md">
            <div
              className={`mx-auto max-w-[92rem] px-6 py-10 grid grid-cols-4 gap-x-8 gap-y-6 transition-transform duration-500 ease-out ${
                placesOpen ? "translate-y-0" : "-translate-y-2"
              }`}
            >
              {places.map((p) => (
                <Link
                  key={p.to}
                  to={p.to}
                  tabIndex={placesOpen ? 0 : -1}
                  onClick={() => setPlacesOpen(false)}
                  className="group flex items-center gap-4 text-foreground/70 hover:text-foreground transition-colors"
                >
                  <span className="h-8 w-8 shrink-0 text-primary/70 group-hover:text-primary transition-colors">
                    <p.mark />
                  </span>
                  <span className="font-display text-lg">{p.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobiel */}
      {open && (
        <nav className="md:hidden border-t border-border/50 bg-background/97 backdrop-blur-md px-6 py-4 max-h-[80vh] overflow-y-auto">
          <Link
            to="/het-landgoed"
            onClick={() => setOpen(false)}
            className="block py-3 text-base border-b border-border/40"
          >
            Het Landgoed
          </Link>
          <ul className="flex flex-col">
            {places.map((p) => (
              <li key={p.to}>
                <Link
                  to={p.to}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-4 py-3 text-base text-foreground/80 border-b border-border/40"
                >
                  <span className="h-6 w-6 shrink-0 text-primary/70">
                    <p.mark />
                  </span>
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/ons-verhaal"
            onClick={() => setOpen(false)}
            className="block py-3 text-base border-b border-border/40"
          >
            Ons verhaal
          </Link>
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-5 inline-flex w-full justify-center border border-foreground/25 px-6 py-3.5 text-sm uppercase tracking-[0.2em]"
          >
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
}
