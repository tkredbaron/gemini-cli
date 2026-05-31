import type { Dictionary } from "@/i18n/types";

/**
 * Historical imagery — cleared public-domain / family material only.
 *
 * HOW TO TURN ON THE REAL PHOTOS
 * 1. Export each photo upright (rotate the sideways scans first — see notes),
 *    as a reasonably sized JPG, into `public/images/` using the `file` names below.
 * 2. Flip PHOTOS_AVAILABLE to true.
 * That's it — every <HistoricalFigure> swaps from the branded placeholder to the
 * real next/image automatically. Until then the build stays green with placeholders.
 */
export const PHOTOS_AVAILABLE = false;

/** Public path prefix for cleared assets. */
const DIR = "/images";

export type ImageKey = "junior" | "parade" | "trainer" | "group" | "street";

export type HistoricalImage = {
  /** Expected file in public/images/ */
  file: string;
  /** Tailwind aspect-ratio utility for the frame. */
  aspect: string;
  /** Dictionary key carrying alt + caption copy (i18n). */
  key: ImageKey;
  /** Export note (e.g. rotation needed for sideways scans). */
  note?: string;
};

export const IMAGES: Record<ImageKey, HistoricalImage> = {
  // Colorized portrait, upright already. Strong, determined — the swimmer.
  junior: { file: "trudy-junior-national.jpg", aspect: "aspect-[3/4]", key: "junior" },
  // The ticker-tape parade crowd ("Welcome Home Trudy"). Landscape, upright.
  parade: { file: "trudy-parade-broadway.jpg", aspect: "aspect-[3/2]", key: "parade" },
  // Trudy with a companion after a meet. Upright portrait.
  trainer: { file: "trudy-after-the-meet.jpg", aspect: "aspect-[3/4]", key: "trainer" },
  // Beach group with shepherd dog. SCAN IS SIDEWAYS — rotate upright before export.
  group: {
    file: "trudy-beach-group.jpg",
    aspect: "aspect-[3/2]",
    key: "group",
    note: "Scan is rotated 90° — rotate upright before exporting.",
  },
  // Team on the street. SCAN IS SIDEWAYS — rotate upright before export.
  street: {
    file: "trudy-team-street.jpg",
    aspect: "aspect-[3/2]",
    key: "street",
    note: "Scan is rotated 90° — rotate upright before exporting.",
  },
};

export function imageSrc(key: ImageKey): string {
  return `${DIR}/${IMAGES[key].file}`;
}

export function imageCopy(dict: Dictionary, key: ImageKey) {
  return dict.images[key];
}
