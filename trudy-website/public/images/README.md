# Cleared historical imagery

Drop the cleared **public-domain / family** photographs here, then flip
`PHOTOS_AVAILABLE` to `true` in `src/lib/images.ts`. Every `<HistoricalFigure>`
switches from the branded placeholder to the real `next/image` automatically.

Use these exact filenames (referenced by `src/lib/images.ts`):

| File | Where it appears | Source photo | Notes |
| --- | --- | --- | --- |
| `trudy-junior-national.jpg` | "Der Moment" — portrait beside the excerpt | Colorized "Junior National Trudy", after the 220-yd win | Upright already. This is the LCP-ish image; export sharp. |
| `trudy-parade-broadway.jpg` | Parade band (after the three pillars) | "Welcome Home Trudy" — Broadway ticker-tape crowd, 1926 | Landscape, upright. |
| `trudy-after-the-meet.jpg` | "Der Moment" — archive row | Trudy with a companion after a meet (WSA badge) | Upright portrait. |
| `trudy-beach-group.jpg` | "Der Moment" — archive row | Beach group with a shepherd dog | **Scan is rotated 90° — rotate upright before export.** |
| `trudy-team-street.jpg` | "Der Moment" — archive row | Team walking in the city | **Scan is rotated 90° — rotate upright before export.** |

## Export guidance

- **Orientation:** rotate the two sideways scans upright before exporting (don't
  rely on EXIF orientation — bake it into the pixels).
- **Format/size:** JPG, long edge ~1600–2000 px is plenty; next/image generates
  responsive sizes and modern formats (AVIF/WebP) at request time.
- **Aspect ratios** are set per image in `src/lib/images.ts` (`object-cover`
  crops gracefully); tweak there if a crop hides something important.
- **Credit:** captions are in `src/i18n/dictionaries/{de,en}.ts` under `images`.
  Replace the shared `creditPlaceholder` (`[Bildnachweis]` / `[Image credit]`)
  with the real source line per the book's licensing.

## Licensing reminder

Only public-domain or family material — no Getty/Pathé/Dover assets, no stock.
The placeholders that ship in the repo contain no photography by design.
