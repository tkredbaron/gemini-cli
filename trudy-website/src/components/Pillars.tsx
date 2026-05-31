import type { Dictionary } from "@/i18n/types";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";

/**
 * The three movements of Trudy's life — Triumph / Stille / Leben.
 *
 * Mobile is designed, not shrunk: the three blocks become a horizontal,
 * snap-scrolling carousel (one card at a time, peeking the next) instead of a
 * cramped vertical stack. On md+ they form the bordered three-column grid.
 */
export function Pillars({ dict }: { dict: Dictionary }) {
  return (
    <section id="saeulen" className="section scroll-mt-20 bg-abyss" aria-labelledby="pillars-heading">
      <div className="shell">
        <SectionHeading
          kicker={dict.pillars.kicker}
          heading={dict.pillars.heading}
          id="pillars-heading"
          className="max-w-2xl"
        />

        <ol className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:mt-16 md:grid md:grid-cols-3 md:gap-px md:overflow-visible md:rounded-xl md:border md:border-amber-gold/15 md:bg-amber-gold/15 md:pb-0">
          {dict.pillars.items.map((item, i) => (
            <li
              key={item.id}
              className="min-w-[82%] shrink-0 snap-start rounded-xl border border-amber-gold/15 bg-deep sm:min-w-[60%] md:min-w-0 md:rounded-none md:border-0"
            >
              <ScrollReveal as="article" delay={i * 110} className="flex h-full flex-col p-8 md:p-10">
                <span
                  aria-hidden="true"
                  className="font-serif text-5xl font-semibold text-amber-gold/45"
                >
                  {item.index}
                </span>
                <h3 className="mt-5 font-serif text-h3 font-semibold text-amber-gold">
                  {item.label}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-paper/85">{item.body}</p>
              </ScrollReveal>
            </li>
          ))}
        </ol>

        {/* Carousel affordance — mobile only */}
        <p className="mt-4 text-center text-xs text-mist md:hidden" aria-hidden="true">
          ← →
        </p>
      </div>
    </section>
  );
}
