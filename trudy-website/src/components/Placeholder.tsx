type PlaceholderProps = {
  /** Accessible description of the image that will eventually live here. */
  label: string;
  /** Short visible note, e.g. "Cover-Platzhalter". */
  note: string;
  /** Tailwind aspect-ratio utility, e.g. "aspect-[2/3]". */
  aspect?: string;
  className?: string;
};

/**
 * Clearly-marked image placeholder.
 *
 * IMPORTANT: This project ships with NO photography. For licensing reasons the
 * book uses only public-domain or family material — no Getty/Pathé/Dover assets
 * and no fake stock. When real, cleared imagery is available, drop the file in
 * /public and replace this component with <Image> from next/image (alt={label}).
 */
export function Placeholder({
  label,
  note,
  aspect = "aspect-[2/3]",
  className = "",
}: PlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`relative ${aspect} w-full overflow-hidden rounded-lg border border-amber-gold/25 bg-ocean/40 ${className}`.trim()}
    >
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
    </div>
  );
}
