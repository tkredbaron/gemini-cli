import type { Locale } from "@/i18n/config";
import { BOOK, SITE_URL, PURCHASE_LINKS, amazonLinkFor } from "@/lib/site";

/**
 * schema.org JSON-LD: Book + Person (author). ISBN, page count and price are
 * placeholders surfaced from lib/site.ts — replace before launch.
 */
export function StructuredData({ locale }: { locale: Locale }) {
  const currency = locale === "en" ? "USD" : "EUR";
  const price = locale === "en" ? BOOK.priceCom : BOOK.priceDe;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Book",
    name: BOOK.title,
    bookFormat: "https://schema.org/Paperback",
    inLanguage: "de",
    url: `${SITE_URL}/${locale}`,
    datePublished: BOOK.releaseYear,
    isbn: BOOK.isbn,
    numberOfPages: BOOK.pages,
    author: {
      "@type": "Person",
      name: BOOK.author,
      jobTitle: BOOK.authorRole,
      affiliation: { "@type": "Organization", name: BOOK.authorOrg },
    },
    about:
      "Gertrude „Trudy“ Ederle, die erste Frau, die 1926 den Ärmelkanal durchschwamm.",
    offers: [
      {
        "@type": "Offer",
        url: amazonLinkFor(locale),
        price,
        priceCurrency: currency,
        availability: "https://schema.org/PreOrder",
        seller: { "@type": "Organization", name: "Amazon" },
      },
      {
        "@type": "Offer",
        url: PURCHASE_LINKS.bod,
        price: BOOK.priceDe,
        priceCurrency: "EUR",
        availability: "https://schema.org/PreOrder",
        seller: { "@type": "Organization", name: "BoD — Books on Demand" },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // JSON-LD is static, author-controlled data — safe to inline.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
