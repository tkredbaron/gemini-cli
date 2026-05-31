import { ScrollReveal } from "@/components/ScrollReveal";

type SectionHeadingProps = {
  kicker: string;
  heading: string;
  /** id for the <h2>, referenced by the section's aria-labelledby. */
  id: string;
  /** Surface tone — switches the kicker/heading colors. */
  tone?: "dark" | "light";
  className?: string;
};

/**
 * Shared section header: a fading kicker over a clip-revealed headline.
 * Keeps motion and hierarchy consistent across every section (DRY) and is the
 * home of the "crafted, not fade-up-slop" headline wipe.
 */
export function SectionHeading({
  kicker,
  heading,
  id,
  tone = "dark",
  className = "",
}: SectionHeadingProps) {
  const kickerClass =
    tone === "light"
      ? "text-xs font-semibold uppercase tracking-eyebrow text-amber-ember"
      : "eyebrow";
  const headingClass =
    tone === "light"
      ? "mt-4 font-serif text-h2 font-medium text-ink"
      : "mt-4 font-serif text-h2 font-medium text-paper";

  return (
    <div className={className}>
      <ScrollReveal>
        <p className={kickerClass}>{kicker}</p>
      </ScrollReveal>
      <ScrollReveal variant="clip" delay={60}>
        <h2 id={id} className={headingClass}>
          {heading}
        </h2>
      </ScrollReveal>
    </div>
  );
}
