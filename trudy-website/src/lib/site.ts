import type { Locale } from "@/i18n/config";

/**
 * Purchase destinations. Replace the bracketed placeholders with the live URLs.
 *   - English visitors are routed to amazon.com, German visitors to amazon.de.
 *   - BoD is the same shop link for both languages.
 */
export const PURCHASE_LINKS = {
  amazonDe: "[AMAZON_DE]",
  amazonCom: "[AMAZON_COM]",
  bod: "[BOD_LINK]",
} as const;

export function amazonLinkFor(locale: Locale): string {
  return locale === "en" ? PURCHASE_LINKS.amazonCom : PURCHASE_LINKS.amazonDe;
}

/**
 * Canonical origin used for metadata, sitemap and JSON-LD.
 * Set NEXT_PUBLIC_SITE_URL in the deployment environment.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://trudy-buch.de"
).replace(/\/$/, "");

export const BOOK = {
  title: "TRUDY — Triumph. Stille. Leben.",
  author: "Tobias Kolesnyk",
  authorRole: "Director Strategic Communication",
  authorOrg: "TEF",
  releaseYear: "2026",
  // Placeholders surfaced in JSON-LD; replace before launch.
  isbn: "[ISBN]",
  pages: "[SEITENZAHL]",
  priceDe: "[PREIS]",
  priceCom: "[PRICE]",
} as const;
