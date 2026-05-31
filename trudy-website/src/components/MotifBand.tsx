import type { Dictionary } from "@/i18n/types";
import { ScrollReveal } from "@/components/ScrollReveal";

/**
 * Quiet full-width band carrying the book's leitmotif — the question "Wofür? /
 * What for?". Used as a breath between sections, never as a CTA.
 */
export function MotifBand({ dict }: { dict: Dictionary }) {
  return (
    <section className="bg-abyss px-6 py-20 sm:px-8 md:py-28" aria-label={dict.motif.quote}>
      <ScrollReveal className="shell text-center">
        <p className="font-serif text-h2 font-medium italic text-amber-gold">
          {dict.motif.quote}
        </p>
        <p className="mx-auto mt-5 max-w-prose text-base text-mist">
          {dict.motif.source}
        </p>
      </ScrollReveal>
    </section>
  );
}
