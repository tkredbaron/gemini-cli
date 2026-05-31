import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return locales.map((locale) => ({
    url: `${SITE_URL}/${locale}`,
    lastModified,
    changeFrequency: "monthly",
    priority: locale === "de" ? 1 : 0.9,
    alternates: {
      languages: {
        de: `${SITE_URL}/de`,
        en: `${SITE_URL}/en`,
      },
    },
  }));
}
