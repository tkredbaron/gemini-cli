import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { amazonLinkFor } from "@/lib/site";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

type HeaderProps = {
  locale: Locale;
  dict: Dictionary;
};

/**
 * Sticky header keeps the primary CTA within reach at every scroll position —
 * the lowest-friction path to purchase. The primary CTA is visible at every
 * breakpoint; section navigation is a full bar on lg and a no-JS <details>
 * disclosure menu below it (designed for mobile, not hidden). Server component;
 * only the language switcher hydrates.
 */
export function Header({ locale, dict }: HeaderProps) {
  const navLinks = [
    { href: `/${locale}#der-moment`, label: dict.nav.moment },
    { href: `/${locale}#saeulen`, label: dict.nav.pillars },
    { href: `/${locale}#warum`, label: dict.nav.why },
    { href: `/${locale}#autor`, label: dict.nav.author },
    { href: `/${locale}#kaufen`, label: dict.nav.buy },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-amber-gold/10 bg-abyss/80 backdrop-blur-md">
      <div className="shell flex items-center justify-between gap-4 px-6 py-3 sm:px-8">
        <Link
          href={`/${locale}`}
          className="font-serif text-lg font-semibold tracking-tight text-paper"
          aria-label="TRUDY"
        >
          TRUDY
        </Link>

        <nav
          aria-label={locale === "de" ? "Hauptnavigation" : "Main navigation"}
          className="hidden items-center gap-7 lg:flex"
        >
          {navLinks.slice(0, 4).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-mist transition-colors hover:text-paper"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          <LanguageSwitcher locale={locale} dict={dict} />

          {/* Primary CTA — visible at every breakpoint, compact on phones */}
          <a
            href={amazonLinkFor(locale)}
            aria-label={dict.cta.amazonAria}
            className="inline-flex items-center rounded-full bg-amber-gold px-4 py-2 text-sm font-semibold text-abyss transition-colors duration-300 ease-calm hover:bg-amber-bright sm:px-5"
          >
            <span className="sm:hidden">{dict.cta.amazonShort}</span>
            <span className="hidden sm:inline">{dict.cta.amazon}</span>
          </a>

          {/* Mobile section menu — native <details>, zero client JS */}
          <details className="relative lg:hidden">
            <summary
              aria-label={dict.nav.menu}
              className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-amber-gold/25 text-paper transition-colors hover:bg-amber-gold/10"
            >
              <span aria-hidden="true" className="flex flex-col gap-[3px]">
                <span className="block h-px w-4 bg-current" />
                <span className="block h-px w-4 bg-current" />
                <span className="block h-px w-4 bg-current" />
              </span>
            </summary>
            <nav
              aria-label={dict.nav.menu}
              className="absolute right-0 z-50 mt-3 w-56 rounded-xl border border-amber-gold/20 bg-deep p-2 shadow-lift"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block rounded-lg px-4 py-2.5 text-sm text-mist transition-colors hover:bg-amber-gold/10 hover:text-paper"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
