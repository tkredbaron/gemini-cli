import type { Dictionary } from "@/i18n/types";
import { ScrollReveal } from "@/components/ScrollReveal";

/**
 * The three movements of Trudy's life — Triumph / Stille / Leben — as the
 * structural spine of the book, rendered as three numbered blocks.
 */
export function Pillars({ dict }: { dict: Dictionary }) {
  return (
    <section id="saeulen" className="section scroll-mt-20 bg-abyss" aria-labelledby="pillars-heading">
      <div className="shell">
        <ScrollReveal className="max-w-2xl">
          <p className="eyebrow">{dict.pillars.kicker}</p>
          <h2 id="pillars-heading" className="mt-4 font-serif text-h2 font-medium text-paper">
            {dict.pillars.heading}
          </h2>
        </ScrollReveal>

        <ol className="mt-16 grid gap-px overflow-hidden rounded-xl border border-amber-gold/15 bg-amber-gold/15 md:grid-cols-3">
          {dict.pillars.items.map((item, i) => (
            <li key={item.id} className="bg-deep">
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
      </div>
    </section>
  );
}
