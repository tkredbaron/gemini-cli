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
 * the lowest-friction path to purchase. Server component; only the language
 * switcher hydrates on the client.
 */
export function Header({ locale, dict }: HeaderProps) {
  const navLinks = [
    { href: `/${locale}#der-moment`, label: dict.nav.moment },
    { href: `/${locale}#saeulen`, label: dict.nav.pillars },
    { href: `/${locale}#warum`, label: dict.nav.why },
    { href: `/${locale}#autor`, label: dict.nav.author },
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
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-mist transition-colors hover:text-paper"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 sm:gap-5">
          <LanguageSwitcher locale={locale} dict={dict} />
          <a
            href={amazonLinkFor(locale)}
            aria-label={dict.cta.amazonAria}
            className="hidden rounded-full bg-amber-gold px-5 py-2 text-sm font-semibold text-abyss transition-colors duration-300 ease-calm hover:bg-amber-bright sm:inline-flex"
          >
            {dict.cta.amazon}
          </a>
        </div>
      </div>
    </header>
  );
}
