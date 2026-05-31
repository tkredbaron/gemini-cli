import { ImageResponse } from "next/og";
import { locales, isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

// Code-generated, on-brand social card per locale — no external/stock asset
// required. Next wires this into Open Graph and Twitter metadata automatically.
export const alt = "TRUDY — Triumph. Stille. Leben.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function OpengraphImage({
  params,
}: {
  params: { locale: string };
}) {
  const locale = isLocale(params.locale) ? params.locale : "de";
  const dict = getDictionary(locale);

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0A1A24",
          padding: "72px 80px",
          backgroundImage:
            "radial-gradient(65% 60% at 50% -5%, rgba(224,174,85,0.22), rgba(224,174,85,0))",
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#E0AE55",
            fontSize: 26,
            letterSpacing: 8,
          }}
        >
          {dict.hero.eyebrow}
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              color: "#F7F1E6",
              fontSize: 176,
              fontWeight: 700,
              letterSpacing: -4,
              lineHeight: 1,
            }}
          >
            TRUDY
          </div>
          <div style={{ display: "flex", color: "#E0AE55", fontSize: 58, marginTop: 8 }}>
            {dict.hero.tagline}
          </div>
          <div style={{ display: "flex", color: "#A9C2CC", fontSize: 30, marginTop: 18 }}>
            {dict.hero.subtitle}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#A9C2CC",
            fontSize: 26,
            borderTop: "1px solid rgba(224,174,85,0.3)",
            paddingTop: 24,
          }}
        >
          <span style={{ display: "flex" }}>{dict.author.name}</span>
          <span style={{ display: "flex" }}>2026</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
