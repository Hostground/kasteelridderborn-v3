import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

export type MarqueeDestination = { to: string; label: string };

const AUTO_SPEED = 32; // px per seconde, rechts naar links
const RESUME_DELAY = 2000; // ms zonder aanraking voor automatisch scrollen hervat
const DRAG_THRESHOLD = 8; // px beweging voor een tik als sleep geldt

const linkClass =
  "mx-3 flex min-h-10 items-center justify-center whitespace-nowrap border border-hero-foreground/25 bg-hero-shadow/10 px-5 py-2 text-[0.6rem] uppercase tracking-[0.22em] text-hero-foreground backdrop-blur-md transition-colors hover:bg-hero-foreground hover:text-hero-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hero-foreground";

export function HeroMarquee({ destinations }: { destinations: MarqueeDestination[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const halfWidthRef = useRef(0);
  const draggingRef = useRef(false);
  const movedRef = useRef(false);
  const startXRef = useRef(0);
  const lastXRef = useRef(0);
  const resumeAtRef = useRef(0);
  const [reduced] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    if (reduced) return;
    const track = trackRef.current;
    if (!track) return;

    const apply = () => {
      const half = halfWidthRef.current;
      if (half > 0) offsetRef.current = ((offsetRef.current % half) + half) % half;
      track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
    };

    const measure = () => {
      halfWidthRef.current = track.scrollWidth / 2;
      apply();
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(track);

    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      if (!draggingRef.current && now >= resumeAtRef.current) {
        offsetRef.current += AUTO_SPEED * dt;
        apply();
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, [reduced]);

  if (reduced) {
    return (
      <div className="overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex w-max items-center">
          {destinations.map((destination) => (
            <Link key={destination.to} to={destination.to} className={linkClass}>
              {destination.label}
            </Link>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative w-full touch-pan-y overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_18%,black_82%,transparent)]"
      onPointerDown={(e) => {
        draggingRef.current = true;
        movedRef.current = false;
        startXRef.current = e.clientX;
        lastXRef.current = e.clientX;
        e.currentTarget.setPointerCapture(e.pointerId);
      }}
      onPointerMove={(e) => {
        if (!draggingRef.current) return;
        const dx = e.clientX - lastXRef.current;
        lastXRef.current = e.clientX;
        if (Math.abs(e.clientX - startXRef.current) > DRAG_THRESHOLD) movedRef.current = true;
        offsetRef.current -= dx;
        const half = halfWidthRef.current;
        if (half > 0) offsetRef.current = ((offsetRef.current % half) + half) % half;
        trackRef.current?.style.setProperty(
          "transform",
          `translate3d(${-offsetRef.current}px, 0, 0)`,
        );
      }}
      onPointerUp={() => {
        draggingRef.current = false;
        resumeAtRef.current = performance.now() + RESUME_DELAY;
      }}
      onPointerCancel={() => {
        draggingRef.current = false;
        resumeAtRef.current = performance.now() + RESUME_DELAY;
      }}
      onClickCapture={(e) => {
        if (movedRef.current) {
          e.preventDefault();
          e.stopPropagation();
        }
      }}
    >
      <div ref={trackRef} className="flex w-max items-center will-change-transform">
        {[0, 1].map((set) => (
          <div key={set} className="flex items-center" aria-hidden={set === 1}>
            {destinations.map((destination) => (
              <Link
                key={`${set}-${destination.to}`}
                to={destination.to}
                tabIndex={set === 1 ? -1 : undefined}
                draggable={false}
                className={linkClass}
              >
                {destination.label}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
