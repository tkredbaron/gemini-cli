import type { Dictionary } from "@/i18n/types";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Placeholder } from "@/components/Placeholder";

export function AboutAuthor({ dict }: { dict: Dictionary }) {
  return (
    <section id="autor" className="section scroll-mt-20 bg-ocean" aria-labelledby="author-heading">
      <div className="shell grid items-center gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
        <ScrollReveal className="mx-auto w-full max-w-[16rem]">
          <Placeholder
            label={dict.author.portraitAlt}
            note={dict.author.portraitNote}
            aspect="aspect-[4/5]"
          />
        </ScrollReveal>

        <ScrollReveal delay={90}>
          <p className="eyebrow">{dict.author.kicker}</p>
          <h2 id="author-heading" className="mt-4 font-serif text-h2 font-medium text-paper">
            {dict.author.heading}
          </h2>
          <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-amber-gold">
            {dict.author.role}
          </p>
          <p className="mt-6 max-w-prose text-lg leading-relaxed text-paper/85">
            {dict.author.bio}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
