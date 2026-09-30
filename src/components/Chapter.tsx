import { Link } from "@tanstack/react-router";
import type { ReactElement } from "react";

export type ChapterVariant = "split" | "card" | "frame";

export type ChapterData = {
  index: string;
  eyebrow: string;
  title: string;
  body: string;
  img: string;
  alt: string;
  to: string;
  linkLabel: string;
  ctaLabel: string;
  mark: (p: { className?: string }) => ReactElement;
};

/** Duidelijk herkenbare doorklikknop met pijl. */
function ChapterCta({ to, label }: { to: string; label: string }) {
  return (
    <Link
      to={to}
      className="group mt-8 inline-flex min-h-12 items-center gap-3 rounded-full border border-foreground/30 bg-background/60 px-6 py-3 text-[0.7rem] uppercase tracking-[0.2em] text-foreground transition-colors hover:border-foreground hover:bg-foreground hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground"
    >
      <span>{label}</span>
      <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
        &rarr;
      </span>
    </Link>
  );
}

function ChapterHeading({
  index,
  eyebrow,
  title,
  mark: Mark,
}: Pick<ChapterData, "index" | "eyebrow" | "title" | "mark">) {
  return (
    <div className="flex items-start gap-5">
      <span className="h-10 w-10 shrink-0 text-primary/70">
        <Mark />
      </span>
      <div>
        <p className="text-[0.7rem] uppercase tracking-[0.28em] text-muted-foreground">
          {index} · {eyebrow}
        </p>
        <h2 className="font-display mt-4 text-3xl md:text-5xl leading-[1.05]">{title}</h2>
      </div>
    </div>
  );
}

export function Chapter({
  variant = "frame",
  position = 0,
  ...c
}: ChapterData & { variant?: ChapterVariant; position?: number }) {
  const heading = <ChapterHeading index={c.index} eyebrow={c.eyebrow} title={c.title} mark={c.mark} />;
  const body = (
    <p className="mt-6 text-lg md:text-xl leading-relaxed text-muted-foreground max-w-xl">{c.body}</p>
  );
  const cta = <ChapterCta to={c.to} label={c.ctaLabel} />;

  if (variant === "split") {
    const flip = position % 2 === 1;
    return (
      <section className="mx-auto max-w-[92rem] px-6 py-14 md:py-20">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className={flip ? "md:order-2" : undefined}>
            {heading}
            {body}
            {cta}
          </div>
          <figure className={`overflow-hidden rounded-sm ${flip ? "md:order-1" : ""}`}>
            <img
              src={c.img}
              alt={c.alt}
              loading="lazy"
              className="h-[42vh] md:h-[68vh] w-full object-cover"
            />
          </figure>
        </div>
      </section>
    );
  }

  if (variant === "card") {
    return (
      <section className="mx-auto max-w-[92rem] px-6 py-8 md:py-12">
        <article className="overflow-hidden rounded-lg border border-border bg-secondary/30">
          <figure className="relative">
            <img
              src={c.img}
              alt={c.alt}
              loading="lazy"
              className="h-[38vh] md:h-[62vh] w-full object-cover"
            />
            <figcaption className="absolute left-4 top-4 rounded-full border border-border bg-background/85 px-4 py-2 text-[0.65rem] uppercase tracking-[0.2em] backdrop-blur-sm">
              {c.index} · {c.eyebrow}
            </figcaption>
          </figure>
          <div className="p-6 md:p-12">
            {heading}
            {body}
            {cta}
          </div>
        </article>
      </section>
    );
  }

  // frame: grootformaat beeld, stevig verankerd aan het tekstblok erboven
  return (
    <section className="mx-auto max-w-[92rem] px-6 py-12 md:py-16">
      <div className="border-l border-border pl-5 md:pl-10">
        <div className="grid gap-y-6 md:grid-cols-12 md:gap-x-12">
          <div className="md:col-span-5">{heading}</div>
          <div className="md:col-span-6 md:col-start-7">
            {body}
            {cta}
          </div>
        </div>
        <figure className="mt-10 overflow-hidden rounded-sm border border-border">
          <img
            src={c.img}
            alt={c.alt}
            loading="lazy"
            className="h-[48vh] md:h-[78vh] w-full object-cover"
          />
        </figure>
      </div>
    </section>
  );
}
