import { RevealImage } from "@/components/RevealImage";

export function PageHero({ img, alt, eyebrow, title }: { img: string; alt: string; eyebrow: string; title: string }) {
  return (
    <header className="relative h-[70svh] md:h-[80svh] flex items-center justify-center overflow-hidden">
      <RevealImage src={img} alt={alt} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-hero-shadow/35" />
      <div className="relative z-10 px-6 text-center text-hero-foreground">
        <p className="text-[0.7rem] uppercase tracking-[0.28em] text-hero-foreground/80">{eyebrow}</p>
        <h1 className="font-display mt-6 text-4xl md:text-6xl leading-[1.1] [text-shadow:var(--shadow-hero-text)]">{title}</h1>
      </div>
    </header>
  );
}
