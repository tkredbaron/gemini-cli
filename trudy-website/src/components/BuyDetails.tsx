import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaButtons } from "@/components/CtaButtons";

type BuyDetailsProps = {
  locale: Locale;
  dict: Dictionary;
};

/**
 * Facts + final purchase block. Desire is built by now; here we remove the last
 * doubts (format, ISBN, price, release) and close with the dual CTA.
 */
export function BuyDetails({ locale, dict }: BuyDetailsProps) {
  return (
    <section id="kaufen" className="section scroll-mt-20 bg-deep" aria-labelledby="buy-heading">
      <div className="shell grid gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Eckdaten */}
        <div>
          <SectionHeading kicker={dict.buy.kicker} heading={dict.buy.heading} id="buy-heading" />
          <ScrollReveal delay={120}>
            <p className="mt-4 text-lede text-amber-gold">{dict.buy.lede}</p>

            <dl className="mt-10 divide-y divide-amber-gold/15 border-t border-amber-gold/15">
              {dict.buy.facts.map((fact) => (
                <div key={fact.label} className="flex items-baseline justify-between gap-6 py-3.5">
                  <dt className="text-sm uppercase tracking-wide text-mist">{fact.label}</dt>
                  <dd className="text-right font-medium text-paper">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </ScrollReveal>
        </div>

        {/* Finaler Kaufblock */}
        <ScrollReveal delay={90} className="lg:pl-4">
          <div className="flex h-full flex-col justify-center rounded-2xl border border-amber-gold/25 bg-ocean/50 p-8 shadow-lift sm:p-12">
            <h3 className="font-serif text-h2 font-medium text-paper">
              {dict.buy.closingTitle}
            </h3>
            <p className="mt-4 max-w-prose text-base leading-relaxed text-paper/80">
              {dict.buy.closingBody}
            </p>
            <CtaButtons locale={locale} dict={dict} size="lg" className="mt-8" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
