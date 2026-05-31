import type { Dictionary } from "@/i18n/types";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";

/**
 * The literary excerpt. Its job is to prove the writing quality immediately —
 * editorial serif, generous measure, drop-cap on the opener, and a line-by-line
 * reveal so the prose arrives at reading pace rather than as one block.
 */
export function TheMoment({ dict }: { dict: Dictionary }) {
  const [first, ...rest] = dict.moment.paragraphs;

  return (
    <section id="der-moment" className="section scroll-mt-20 bg-deep" aria-labelledby="moment-heading">
      <div className="shell max-w-3xl">
        <SectionHeading
          kicker={dict.moment.kicker}
          heading={dict.moment.heading}
          id="moment-heading"
        />

        <div className="mt-10 hairline" />

        <div className="mt-10 space-y-6 font-serif text-xl leading-relaxed text-paper/90">
          <ScrollReveal>
            <p className="first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-7xl first-letter:font-semibold first-letter:leading-[0.8] first-letter:text-amber-gold">
              {first}
            </p>
          </ScrollReveal>
          {rest.map((paragraph, i) => (
            <ScrollReveal key={i} delay={i * 90}>
              <p className={paragraph.startsWith("Please") ? "italic text-amber-bright" : undefined}>
                {paragraph}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
