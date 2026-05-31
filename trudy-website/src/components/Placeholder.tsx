import Image from "next/image";

type PlaceholderProps = {
  /** Accessible description of the image. Becomes the alt text once a real src is set. */
  label: string;
  /** Short visible note shown while no image exists, e.g. "Cover-Platzhalter". */
  note: string;
  /** Tailwind aspect-ratio utility, e.g. "aspect-[2/3]". */
  aspect?: string;
  /**
   * Path to a cleared (public-domain/family) asset in /public. When provided,
   * the image renders via next/image; otherwise the on-brand placeholder shows.
   */
  src?: string;
  /** Base64 LQIP for a blur-up transition (recommended for hero/cover). */
  blurDataURL?: string;
  /** Responsive sizes hint for next/image. */
  sizes?: string;
  /** Render at higher priority (use for the LCP cover image only). */
  priority?: boolean;
  className?: string;
};

/**
 * Art-directed image slot.
 *
 * IMPORTANT: This project ships with NO photography. For licensing reasons the
 * book uses only public-domain or family material — no Getty/Pathé/Dover assets
 * and no fake stock. Drop a cleared file in /public and pass `src` here; nothing
 * else changes (alt, aspect, blur and sizes are already wired for next/image).
 */
export function Placeholder({
  label,
  note,
  aspect = "aspect-[2/3]",
  src,
  blurDataURL,
  sizes = "(max-width: 1024px) 80vw, 24rem",
  priority = false,
  className = "",
}: PlaceholderProps) {
  return (
    <div
      role={src ? undefined : "img"}
      aria-label={src ? undefined : label}
      className={`relative ${aspect} w-full overflow-hidden rounded-lg border border-amber-gold/25 bg-ocean/40 ${className}`.trim()}
    >
      {src ? (
        <Image
          src={src}
          alt={label}
          fill
          sizes={sizes}
          priority={priority}
          placeholder={blurDataURL ? "blur" : "empty"}
          blurDataURL={blurDataURL}
          className="object-cover"
        />
      ) : (
        <>
          {/* Decorative amber-goggle wash — the book's leitmotif */}
          <div className="absolute inset-0 bg-amber-glow" aria-hidden="true" />
          <div
            className="absolute inset-0 opacity-60"
            aria-hidden="true"
            style={{
              backgroundImage:
                "repeating-linear-gradient(135deg, rgba(224,174,85,0.06) 0px, rgba(224,174,85,0.06) 1px, transparent 1px, transparent 11px)",
            }}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-6 text-center">
            <span aria-hidden="true" className="text-2xl text-amber-gold/70">
              ✦
            </span>
            <span className="text-xs font-semibold uppercase tracking-eyebrow text-mist">
              {note}
            </span>
          </div>
        </>
      )}
    </div>
  );
}
