import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { CtaButtons } from "@/components/CtaButtons";
import { Placeholder } from "@/components/Placeholder";

type HeroProps = {
  locale: Locale;
  dict: Dictionary;
};

/**
 * Hero with a one-time, orchestrated entrance (CSS-only `.enter` choreography,
 * staggered via animation-delay) and a slowly drifting goggle-glow. All motion
 * is disabled under prefers-reduced-motion.
 *
 * Mobile is a distinct composition, not a shrunk desktop: type leads and fills
 * the viewport first; the cover is a smaller supporting element below. On lg the
 * cover becomes a full second column.
 */
export function Hero({ locale, dict }: HeroProps) {
  return (
    <section
      className="relative overflow-hidden bg-ocean-fade"
      aria-labelledby="hero-title"
    >
      {/* Amber-goggle glow — the leitmotif as living atmosphere */}
      <div className="pointer-events-none absolute inset-0 bg-amber-glow glow-drift" aria-hidden="true" />

      <div className="shell relative grid items-center gap-12 px-6 pb-24 pt-16 sm:px-8 md:pb-32 md:pt-24 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="max-w-2xl">
          <p className="eyebrow enter" style={{ animationDelay: "0ms" }}>
            {dict.hero.eyebrow}
          </p>

          <h1 id="hero-title" className="mt-6">
            <span
              className="enter block font-serif text-display font-semibold text-paper"
              style={{ animationDelay: "90ms" }}
            >
              {dict.hero.title}
            </span>
            <span
              className="enter mt-3 block font-serif text-h2 font-medium italic text-amber-gold"
              style={{ animationDelay: "180ms" }}
            >
              {dict.hero.tagline}
            </span>
          </h1>

          <p
            className="enter mt-5 max-w-xl font-serif text-lede text-mist"
            style={{ animationDelay: "260ms" }}
          >
            {dict.hero.subtitle}
          </p>

          <p
            className="enter mt-8 max-w-prose text-lede text-paper/90"
            style={{ animationDelay: "340ms" }}
          >
            {dict.hero.hook}
          </p>

          <div className="enter" style={{ animationDelay: "440ms" }}>
            <CtaButtons locale={locale} dict={dict} size="lg" className="mt-10" />
          </div>

          <a
            href="#der-moment"
            className="enter mt-12 inline-flex items-center gap-2 text-sm text-mist transition-colors hover:text-paper"
            style={{ animationDelay: "540ms" }}
          >
            <span>{dict.hero.scroll}</span>
            <span aria-hidden="true">↓</span>
          </a>
        </div>

        {/* Cover: supporting element on mobile (narrow, centered), full column on lg */}
        <div
          className="enter mx-auto w-full max-w-[11rem] sm:max-w-[13rem] lg:max-w-sm"
          style={{ animationDelay: "240ms" }}
        >
          <div className="shadow-lift">
            <Placeholder
              label={dict.hero.coverAlt}
              note={dict.hero.coverNote}
              aspect="aspect-[2/3]"
              priority
              sizes="(max-width: 640px) 11rem, (max-width: 1024px) 13rem, 24rem"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
