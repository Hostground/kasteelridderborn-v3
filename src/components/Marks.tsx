/**
 * Eén visuele familie voor de plekken binnen RIDDERBORN.
 * Allemaal dezelfde tekenstijl: 64x64 canvas, dunne lijnen (1.25),
 * abstracte vormen — geen letterlijke kastelen, bomen of boerderijen.
 */
type MarkProps = { className?: string };

const base = "h-full w-full";
const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.25,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function Frame({ className, children }: MarkProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 64 64"
      aria-hidden
      className={className ? `${base} ${className}` : base}
    >
      <g {...stroke}>{children}</g>
    </svg>
  );
}

/** Ridderborn — het hoofdmerk: één cirkel met horizon. */
export function MarkRidderborn(p: MarkProps) {
  return (
    <Frame {...p}>
      <circle cx="32" cy="32" r="21" />
      <path d="M11 36h42" />
    </Frame>
  );
}

/** Kasteel Ridderborn — poort: boog binnen een rechthoek. */
export function MarkKasteel(p: MarkProps) {
  return (
    <Frame {...p}>
      <path d="M14 52V26a18 18 0 0 1 36 0v26" />
      <path d="M26 52V38a6 6 0 0 1 12 0v14" />
    </Frame>
  );
}

/** Angelpark — plaatshouder in de familie tot het originele logo is geplaatst. */
export function MarkAngelpark(p: MarkProps) {
  return (
    <Frame {...p}>
      <path d="M32 12c7 10 7 20 0 30-7-10-7-20 0-30Z" />
      <path d="M32 42v10" />
    </Frame>
  );
}

/** De Oranjerie — licht: een open kwartboog met dunne lichtlijnen. */
export function MarkOranjerie(p: MarkProps) {
  return (
    <Frame {...p}>
      <path d="M12 50a20 20 0 0 1 40 0" />
      <path d="M22 50V34M32 50V28M42 50v-16" opacity="0.6" />
    </Frame>
  );
}

/** Kasteelhoeve Rendelborn — velden: drie parallelle lijnen in perspectief. */
export function MarkRendelborn(p: MarkProps) {
  return (
    <Frame {...p}>
      <path d="M10 44h44" />
      <path d="M16 36h32M22 28h20" opacity="0.75" />
    </Frame>
  );
}

/** De Overzijde — abstracte landschapslijnen die elkaar kruisen. */
export function MarkOverzijde(p: MarkProps) {
  return (
    <Frame {...p}>
      <path d="M8 40c10-8 18-8 28 0s12 8 20 2" />
      <path d="M8 48c12-4 20-2 30 2s16 2 18 0" opacity="0.6" />
    </Frame>
  );
}

/** Shabos — rust: een enkele halve boog boven een lijn. */
export function MarkShabos(p: MarkProps) {
  return (
    <Frame {...p}>
      <path d="M14 42a18 18 0 0 1 36 0" />
      <path d="M10 50h44" opacity="0.6" />
    </Frame>
  );
}

/** Waterberg — boog met waterlijn. */
export function MarkWaterberg(p: MarkProps) {
  return (
    <Frame {...p}>
      <path d="M16 46V32a16 16 0 0 1 32 0v14" />
      <path d="M12 46h40" />
    </Frame>
  );
}

/** Antwerpen — Venue Fourteen: verticale stad, twee lijnen en een niveau. */
export function MarkAntwerpen(p: MarkProps) {
  return (
    <Frame {...p}>
      <path d="M22 52V16h20v36" />
      <path d="M22 30h20" opacity="0.6" />
    </Frame>
  );
}
