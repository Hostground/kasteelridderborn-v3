export function SectionHeading({
  eyebrow,
  title,
  italic,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  italic?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      <p className="eyebrow text-accent">{eyebrow}</p>
      <h2 className="font-display text-4xl md:text-6xl mt-5 text-foreground leading-[1.05]">
        {title}
        {italic && <span className="italic text-primary"> {italic}</span>}
      </h2>
    </div>
  );
}
