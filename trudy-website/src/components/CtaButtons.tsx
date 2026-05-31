import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { PURCHASE_LINKS, amazonLinkFor } from "@/lib/site";

type CtaButtonsProps = {
  locale: Locale;
  dict: Dictionary;
  /** Layout context — controls spacing/sizing, never the priority order. */
  size?: "md" | "lg";
  className?: string;
  align?: "start" | "center";
};

/**
 * The single source of truth for the dual call-to-action.
 * Priority is fixed everywhere: primary = Amazon, secondary = BoD.
 */
export function CtaButtons({
  locale,
  dict,
  size = "md",
  className = "",
  align = "start",
}: CtaButtonsProps) {
  const sizeClasses =
    size === "lg"
      ? "px-8 py-4 text-base"
      : "px-6 py-3.5 text-sm sm:text-base";

  const alignClasses = align === "center" ? "justify-center" : "justify-start";

  return (
    <div
      className={`flex flex-col gap-3 sm:flex-row sm:items-center ${alignClasses} ${className}`.trim()}
    >
      {/* Primary — Amazon */}
      <a
        href={amazonLinkFor(locale)}
        aria-label={dict.cta.amazonAria}
        className={`group inline-flex items-center justify-center gap-2 rounded-full bg-amber-gold font-semibold text-abyss shadow-glow transition duration-300 ease-calm hover:bg-amber-bright focus-visible:bg-amber-bright active:translate-y-px ${sizeClasses}`}
      >
        {dict.cta.amazon}
        <span
          aria-hidden="true"
          className="transition-transform duration-300 ease-calm group-hover:translate-x-1"
        >
          →
        </span>
      </a>

      {/* Secondary — BoD */}
      <a
        href={PURCHASE_LINKS.bod}
        aria-label={dict.cta.bodAria}
        className={`inline-flex items-center justify-center gap-2 rounded-full border border-amber-gold/45 font-semibold text-paper transition duration-300 ease-calm hover:border-amber-gold hover:bg-amber-gold/10 focus-visible:border-amber-gold active:translate-y-px ${sizeClasses}`}
      >
        {dict.cta.bod}
      </a>
    </div>
  );
}
