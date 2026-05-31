import type { Dictionary } from "@/i18n/types";
import { ScrollReveal } from "@/components/ScrollReveal";

/**
 * The literary excerpt. Its job is to prove the writing quality immediately —
 * set in the editorial serif, generous measure, drop-cap on the opener.
 */
export function TheMoment({ dict }: { dict: Dictionary }) {
  const [first, ...rest] = dict.moment.paragraphs;

  return (
    <section id="der-moment" className="section scroll-mt-20 bg-deep" aria-labelledby="moment-heading">
      <div className="shell max-w-3xl">
        <ScrollReveal>
          <p className="eyebrow">{dict.moment.kicker}</p>
          <h2 id="moment-heading" className="mt-4 font-serif text-h2 font-medium text-paper">
            {dict.moment.heading}
          </h2>
        </ScrollReveal>

        <div className="mt-10 hairline" />

        <ScrollReveal delay={80}>
          <div className="mt-10 space-y-6 font-serif text-xl leading-relaxed text-paper/90">
            <p className="first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-7xl first-letter:font-semibold first-letter:leading-[0.8] first-letter:text-amber-gold">
              {first}
            </p>
            {rest.map((paragraph, i) => (
              <p key={i} className={paragraph.startsWith("Please") ? "italic text-amber-bright" : undefined}>
                {paragraph}
              </p>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
