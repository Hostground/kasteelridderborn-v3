/** RIDDERBORN als typografisch hoofdmerk. */
export function Wordmark({
  className = "",
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const sizes = {
    sm: "text-sm tracking-[0.42em]",
    md: "text-base md:text-lg tracking-[0.4em]",
    lg: "text-2xl md:text-4xl tracking-[0.34em]",
  } as const;
  return (
    <span className={`font-display uppercase leading-none ${sizes[size]} ${className}`}>
      Ridderborn
    </span>
  );
}
