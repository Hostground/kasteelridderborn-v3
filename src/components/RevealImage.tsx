import { useEffect, useRef, useState } from "react";
import type { ImgHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type State = "static" | "hidden" | "shown";

export function RevealImage({ className, ...props }: ImgHTMLAttributes<HTMLImageElement>) {
  const ref = useRef<HTMLImageElement>(null);
  const [state, setState] = useState<State>("static");

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight && r.bottom > 0) return; // already visible: leave as-is
    setState("hidden");
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setState("shown");
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <img
      ref={ref}
      {...props}
      className={cn(
        className,
        state !== "static" && "transition-[opacity,scale] duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
        state === "hidden" && "opacity-0 scale-[1.06]",
        state === "shown" && "opacity-100 scale-100",
      )}
    />
  );
}
