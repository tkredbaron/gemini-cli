import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { CtaButtons } from "@/components/CtaButtons";
import { Placeholder } from "@/components/Placeholder";

type HeroProps = {
  locale: Locale;
  dict: Dictionary;
};

export function Hero({ locale, dict }: HeroProps) {
  return (
    <section
      className="relative overflow-hidden bg-ocean-fade"
      aria-labelledby="hero-title"
    >
      {/* Amber-goggle glow from the top edge — the leitmotif as atmosphere */}
      <div className="pointer-events-none absolute inset-0 bg-amber-glow" aria-hidden="true" />

      <div className="shell relative grid items-center gap-12 px-6 pb-24 pt-16 sm:px-8 md:pb-32 md:pt-24 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="max-w-2xl">
          <p className="eyebrow">{dict.hero.eyebrow}</p>

          <h1 id="hero-title" className="mt-6">
            <span className="block font-serif text-display font-semibold text-paper">
              {dict.hero.title}
            </span>
            <span className="mt-3 block font-serif text-h2 font-medium italic text-amber-gold">
              {dict.hero.tagline}
            </span>
          </h1>

          <p className="mt-5 max-w-xl font-serif text-lede text-mist">
            {dict.hero.subtitle}
          </p>

          <p className="mt-8 max-w-prose text-lede text-paper/90">
            {dict.hero.hook}
          </p>

          <CtaButtons locale={locale} dict={dict} size="lg" className="mt-10" />

          <a
            href="#der-moment"
            className="mt-12 inline-flex items-center gap-2 text-sm text-mist transition-colors hover:text-paper"
          >
            <span>{dict.hero.scroll}</span>
            <span aria-hidden="true">↓</span>
          </a>
        </div>

        <div className="mx-auto w-full max-w-xs lg:max-w-sm">
          <div className="shadow-lift">
            <Placeholder
              label={dict.hero.coverAlt}
              note={dict.hero.coverNote}
              aspect="aspect-[2/3]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
