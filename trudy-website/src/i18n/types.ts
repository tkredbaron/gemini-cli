/**
 * Shape of a language dictionary. All user-facing copy lives in the per-locale
 * dictionaries (de.ts / en.ts) — never hard-code strings in components.
 */
export type Dictionary = {
  meta: {
    title: string;
    description: string;
    ogAlt: string;
  };
  nav: {
    moment: string;
    pillars: string;
    why: string;
    author: string;
    buy: string;
    menu: string;
    skipToContent: string;
  };
  cta: {
    amazon: string;
    amazonShort: string;
    bod: string;
    amazonAria: string;
    bodAria: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    tagline: string;
    subtitle: string;
    hook: string;
    coverAlt: string;
    coverNote: string;
    scroll: string;
  };
  motif: {
    quote: string;
    source: string;
  };
  moment: {
    kicker: string;
    heading: string;
    paragraphs: string[];
  };
  pillars: {
    kicker: string;
    heading: string;
    items: { id: string; index: string; label: string; body: string }[];
  };
  why: {
    kicker: string;
    heading: string;
    lede: string;
    cards: { title: string; body: string }[];
  };
  author: {
    kicker: string;
    heading: string;
    name: string;
    role: string;
    bio: string;
    portraitAlt: string;
    portraitNote: string;
  };
  buy: {
    kicker: string;
    heading: string;
    lede: string;
    facts: { label: string; value: string }[];
    closingTitle: string;
    closingBody: string;
  };
  images: {
    /** Shared credit line; replace the bracket with the real source per photo. */
    creditPlaceholder: string;
    /** Small label over the archive photo row. */
    archiveLabel: string;
    /** alt = accessibility text, caption = visible figure caption. */
    junior: { alt: string; caption: string };
    parade: { alt: string; caption: string };
    trainer: { alt: string; caption: string };
    group: { alt: string; caption: string };
    street: { alt: string; caption: string };
  };
  footer: {
    claim: string;
    book: string;
    author: string;
    rights: string;
    imprint: string;
    privacy: string;
  };
  langSwitch: {
    label: string;
    toDe: string;
    toEn: string;
  };
};
