"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

type LanguageSwitcherProps = {
  locale: Locale;
  dict: Dictionary;
};

/**
 * Swaps only the leading locale segment of the current path, preserving the
 * rest (and any hash). Client component because it reads the active pathname.
 */
export function LanguageSwitcher({ locale, dict }: LanguageSwitcherProps) {
  const pathname = usePathname() || `/${locale}`;

  function pathForLocale(target: Locale): string {
    const segments = pathname.split("/");
    // segments[0] is "" (leading slash), segments[1] is the current locale.
    segments[1] = target;
    return segments.join("/") || `/${target}`;
  }

  const labels: Record<Locale, string> = {
    de: dict.langSwitch.toDe,
    en: dict.langSwitch.toEn,
  };

  return (
    <nav aria-label={dict.langSwitch.label} className="flex items-center gap-1 text-sm">
      {locales.map((target, i) => {
        const active = target === locale;
        return (
          <span key={target} className="flex items-center">
            {i > 0 && (
              <span aria-hidden="true" className="px-1 text-mist/40">
                /
              </span>
            )}
            <Link
              href={pathForLocale(target)}
              hrefLang={target}
              aria-current={active ? "true" : undefined}
              className={`rounded px-1.5 py-0.5 font-semibold uppercase tracking-wide transition-colors ${
                active
                  ? "text-amber-gold"
                  : "text-mist hover:text-paper"
              }`}
            >
              <span className="sr-only">{labels[target]}: </span>
              {target}
            </Link>
          </span>
        );
      })}
    </nav>
  );
}
