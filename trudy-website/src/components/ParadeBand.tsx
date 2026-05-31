import type { Dictionary } from "@/i18n/types";
import { ScrollReveal } from "@/components/ScrollReveal";
import { HistoricalFigure } from "@/components/HistoricalFigure";

/**
 * Full-width parade image placed right after the three pillars — the visual peak
 * of "Triumph" (two million people on Broadway) and the pivot into "Stille".
 * Wide aspect, caption carried by the figure itself.
 */
export function ParadeBand({ dict }: { dict: Dictionary }) {
  return (
    <section className="bg-abyss px-6 pb-24 sm:px-8 md:pb-32" aria-label={dict.images.parade.alt}>
      <ScrollReveal className="shell">
        <HistoricalFigure
          imageKey="parade"
          dict={dict}
          sizes="(max-width: 1248px) 100vw, 78rem"
        />
      </ScrollReveal>
    </section>
  );
}
