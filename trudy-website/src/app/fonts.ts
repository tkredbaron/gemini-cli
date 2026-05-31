import { Fraunces, Hanken_Grotesk } from "next/font/google";

/**
 * Editorial serif for headlines and the literary excerpt — characterful,
 * "buchhaft". Self-hosted by next/font (no layout shift, no extra request to
 * Google at runtime).
 */
export const fontSerif = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
  axes: ["opsz"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

/** Humanist sans for body and UI — calm, highly legible. */
export const fontSans = Hanken_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});
