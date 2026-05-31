import type { Dictionary } from "@/i18n/types";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Placeholder } from "@/components/Placeholder";

export function AboutAuthor({ dict }: { dict: Dictionary }) {
  return (
    <section id="autor" className="section scroll-mt-20 bg-ocean" aria-labelledby="author-heading">
      <div className="shell grid items-center gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
        <ScrollReveal className="mx-auto w-full max-w-[14rem] md:max-w-[16rem]">
          <Placeholder
            label={dict.author.portraitAlt}
            note={dict.author.portraitNote}
            aspect="aspect-[4/5]"
            sizes="(max-width: 768px) 14rem, 16rem"
          />
        </ScrollReveal>

        <div>
          <SectionHeading
            kicker={dict.author.kicker}
            heading={dict.author.heading}
            id="author-heading"
          />
          <ScrollReveal delay={120}>
            <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-amber-gold">
              {dict.author.role}
            </p>
            <p className="mt-6 max-w-prose text-lg leading-relaxed text-paper/85">
              {dict.author.bio}
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
