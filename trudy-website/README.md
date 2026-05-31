# TRUDY — Triumph. Stille. Leben.

One-page, conversion-driven marketing site for the book **TRUDY — Triumph.
Stille. Leben.** by Tobias Kolesnyk (release 2026, the 100th anniversary of
Trudy Ederle's English Channel crossing).

The site sells one book via two paths — **Amazon** (primary) and **BoD**
(secondary) — with no lead funnels, newsletter, or foundation pitch. Every
section earns the sale.

## Stack

- **Next.js 14** (App Router) · **React 18** · **TypeScript**
- **Tailwind CSS** with a custom, named design system (no default indigo/slate)
- Bilingual **DE/EN** via `[locale]` routes + per-language dictionaries
- `next/font` (Fraunces + Hanken Grotesk), server-rendered, minimal client JS

## Getting started

```bash
npm install
cp .env.example .env.local   # set NEXT_PUBLIC_SITE_URL
npm run dev                  # http://localhost:3000  (→ /de)
```

`npm run build` for a production build, `npm start` to serve it.

## Design system

The "stiller Triumph" palette lives in two mirrored places:

- CSS variables — `src/app/globals.css` (`:root`)
- Tailwind theme — `tailwind.config.ts`

| Token | Hex | Role |
| --- | --- | --- |
| `abyss` / `deep` / `ocean` | `#0A1A24` / `#0E2532` / `#143A4C` | Atlantic depth, stillness (base) |
| `amber-bright` / `amber-gold` / `amber` | `#F0CE7D` / `#E0AE55` / `#C98A2E` | Trudy's amber goggles — triumph & warmth (accent) |
| `paper` / `sand` | `#F7F1E6` / `#ECE1CC` | warm off-white, breathing room |
| `ink` | `#13242E` | text on light surfaces |

Primary CTA = amber-gold fill on dark ink (high AA contrast). Secondary CTA =
amber hairline outline.

## Internationalisation

- Routes: `/de` and `/en`. `middleware.ts` redirects `/` and any unprefixed
  path to `/de`.
- All copy lives in `src/i18n/dictionaries/{de,en}.ts` (typed by
  `src/i18n/types.ts`). **No hard-coded strings in components.**
- Language switcher preserves the current path and hash.
- `hreflang` alternates are emitted from the layout metadata; `x-default` → DE.
- **EN links to amazon.com, DE links to amazon.de** (`src/lib/site.ts`).

## Placeholders to fill before launch

All bracketed tokens are intentional:

- **Purchase links** — `src/lib/site.ts`: `[AMAZON_DE]`, `[AMAZON_COM]`,
  `[BOD_LINK]`
- **Book facts** — `src/lib/site.ts` + dictionaries: `[FORMAT]`,
  `[SEITENZAHL]` / `[PAGE_COUNT]`, `[ISBN]`, `[PREIS]` / `[PRICE]`
- **Imagery** — there is **no photography** in this repo. For licensing
  reasons the book uses only public-domain or family material. Drop cleared
  assets in `/public` and replace `src/components/Placeholder.tsx` usages with
  `next/image`. Add an OG image at `/public/og.png` and wire it into the layout
  metadata (`openGraph.images`, then upgrade Twitter card to
  `summary_large_image`).
- **Legal** — `Impressum` / `Datenschutz` links in `src/components/Footer.tsx`.

## Accessibility & performance

- Semantic landmarks, single `<h1>`, ordered heading hierarchy, skip link.
- Visible focus ring (amber on dark), keyboard-operable throughout.
- Scroll reveals are CSS-only and fully disabled under
  `prefers-reduced-motion`.
- AA contrast checked for amber-on-blue and ink-on-paper combinations.
- JSON-LD (`schema.org/Book` + `Person`), `sitemap.xml`, `robots.txt`.

## Structure

```
src/
  app/
    [locale]/layout.tsx    # <html lang>, fonts, metadata + hreflang, header/footer
    [locale]/page.tsx      # section composition
    globals.css            # design tokens + base + reveal utility
    fonts.ts  robots.ts  sitemap.ts
  components/               # Hero, TheMoment, Pillars, WhyThisBook, … CtaButtons
  i18n/                     # config, types, dictionaries (de/en)
  lib/site.ts              # purchase links, book facts, canonical URL
  middleware.ts            # locale redirect
```
