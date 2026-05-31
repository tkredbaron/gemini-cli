import type { Dictionary } from "@/i18n/types";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";

/**
 * Self-identification section. Three reader stances (not demographics) so the
 * visitor recognises themselves and converts. Deliberately NOT a foundation or
 * mission pitch — every line earns the sale.
 */
export function WhyThisBook({ dict }: { dict: Dictionary }) {
  return (
    <section id="warum" className="section scroll-mt-20 bg-paper text-ink" aria-labelledby="why-heading">
      <div className="shell">
        <SectionHeading
          kicker={dict.why.kicker}
          heading={dict.why.heading}
          id="why-heading"
          tone="light"
          className="max-w-2xl"
        />
        <ScrollReveal delay={120}>
          <p className="mt-5 max-w-2xl text-lede text-ink/70">{dict.why.lede}</p>
        </ScrollReveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {dict.why.cards.map((card, i) => (
            <ScrollReveal
              key={i}
              as="article"
              delay={i * 110}
              className="flex h-full flex-col rounded-xl border border-ink/10 bg-sand/60 p-8 transition-shadow duration-300 ease-calm hover:shadow-lift"
            >
              <span aria-hidden="true" className="font-serif text-3xl text-amber-ember">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-serif text-h3 font-semibold leading-snug text-ink">
                {card.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-ink/75">{card.body}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
