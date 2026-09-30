import { useState } from "react";

import { Chapter } from "@/components/Chapter";
import type { ChapterData, ChapterVariant } from "@/components/Chapter";

const OPTIONS: { value: ChapterVariant; label: string }[] = [
  { value: "split", label: "Naast elkaar" },
  { value: "card", label: "Kaarten" },
  { value: "frame", label: "Grootformaat" },
];

export function Chapters({ chapters }: { chapters: ChapterData[] }) {
  const [variant, setVariant] = useState<ChapterVariant>("split");

  return (
    <div>
      <div className="mx-auto max-w-[92rem] px-6">
        <div className="flex flex-wrap items-center gap-3 border-b border-border pb-6">
          <span className="text-[0.65rem] uppercase tracking-[0.24em] text-muted-foreground">
            Weergave
          </span>
          <div className="flex flex-wrap gap-2">
            {OPTIONS.map((o) => (
              <button
                key={o.value}
                type="button"
                onClick={() => setVariant(o.value)}
                aria-pressed={variant === o.value}
                className={`min-h-10 rounded-full border px-4 py-2 text-[0.65rem] uppercase tracking-[0.18em] transition-colors ${
                  variant === o.value
                    ? "border-foreground bg-foreground text-background"
                    : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                }`}
              >
                {o.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {chapters.map((c, i) => (
        <Chapter key={c.to} {...c} variant={variant} position={i} />
      ))}
    </div>
  );
}
