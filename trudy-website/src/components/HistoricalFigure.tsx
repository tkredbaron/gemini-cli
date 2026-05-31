import type { Dictionary } from "@/i18n/types";
import {
  IMAGES,
  PHOTOS_AVAILABLE,
  imageSrc,
  imageCopy,
  type ImageKey,
} from "@/lib/images";
import { Placeholder } from "@/components/Placeholder";

type HistoricalFigureProps = {
  imageKey: ImageKey;
  dict: Dictionary;
  /** next/image sizes hint. */
  sizes?: string;
  /** Prioritise loading (above-the-fold only). */
  priority?: boolean;
  className?: string;
  /** Hide the visible caption (alt text is still set). */
  hideCaption?: boolean;
};

/**
 * A cleared historical photo with caption + credit, as a semantic <figure>.
 * Falls back to the on-brand placeholder until PHOTOS_AVAILABLE is true, so the
 * site is presentable with or without the real assets.
 */
export function HistoricalFigure({
  imageKey,
  dict,
  sizes = "(max-width: 768px) 90vw, 36rem",
  priority = false,
  className = "",
  hideCaption = false,
}: HistoricalFigureProps) {
  const meta = IMAGES[imageKey];
  const copy = imageCopy(dict, imageKey);

  return (
    <figure className={className}>
      <Placeholder
        label={copy.alt}
        note={dict.author.portraitNote}
        aspect={meta.aspect}
        src={PHOTOS_AVAILABLE ? imageSrc(imageKey) : undefined}
        sizes={sizes}
        priority={priority}
      />
      {!hideCaption && (
        <figcaption className="mt-3 text-sm leading-relaxed text-mist">
          <span className="text-paper/90">{copy.caption}</span>
          <span className="text-mist/60"> · {dict.images.creditPlaceholder}</span>
        </figcaption>
      )}
    </figure>
  );
}
