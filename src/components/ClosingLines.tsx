import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

type State = "static" | "hidden" | "shown";

const lines = ["Een plek om te ontdekken.", "Een plek om te koesteren.", "Een plek om door te geven."];
const delays = ["delay-0", "delay-[1600ms]", "delay-[3200ms]"];

export function ClosingLines({ className }: { className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [state, setState] = useState<State>("static");

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setState("hidden");
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setState("shown");
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <p ref={ref} className={className}>
      {lines.map((line, i) => (
        <span
          key={line}
          className={cn(
            "block",
            state !== "static" &&
              "transition-[opacity,translate,filter] duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
            state !== "static" && delays[i],
            state === "hidden" && "opacity-0 translate-y-3 blur-sm",
            state === "shown" && "opacity-100 translate-y-0 blur-0",
          )}
        >
          {line}
        </span>
      ))}
    </p>
  );
}
