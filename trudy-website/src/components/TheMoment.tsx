import type { Dictionary } from "@/i18n/types";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { HistoricalFigure } from "@/components/HistoricalFigure";

/**
 * The literary excerpt — proves the writing quality immediately. On lg the prose
 * sits beside a portrait of the young Trudy (the swimmer the words describe); a
 * quiet archive row of cleared photos closes the section and grounds the story
 * in the real record. Line-by-line reveal lets the prose arrive at reading pace.
 */
export function TheMoment({ dict }: { dict: Dictionary }) {
  const [first, ...rest] = dict.moment.paragraphs;

  return (
    <section id="der-moment" className="section scroll-mt-20 bg-deep" aria-labelledby="moment-heading">
      <div className="shell">
        <SectionHeading
          kicker={dict.moment.kicker}
          heading={dict.moment.heading}
          id="moment-heading"
          className="max-w-3xl"
        />

        <div className="mt-10 hairline max-w-3xl" />

        <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_0.7fr] lg:items-start lg:gap-16">
          <div className="max-w-prose space-y-6 font-serif text-xl leading-relaxed text-paper/90">
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

          <ScrollReveal delay={120} className="lg:sticky lg:top-24">
            <HistoricalFigure
              imageKey="junior"
              dict={dict}
              sizes="(max-width: 1024px) 80vw, 22rem"
              className="mx-auto max-w-sm lg:max-w-none"
            />
          </ScrollReveal>
        </div>

        {/* Archive row — the remaining cleared photographs, quietly presented */}
        <div className="mt-20">
          <p className="eyebrow">{dict.images.archiveLabel}</p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {(["trainer", "group", "street"] as const).map((key, i) => (
              <ScrollReveal key={key} delay={i * 100}>
                <HistoricalFigure
                  imageKey={key}
                  dict={dict}
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 24rem"
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
