import { useState, useCallback } from "react";
import {
  IoChevronBackOutline as ChevronLeft,
  IoChevronForwardOutline as ChevronRight,
} from "react-icons/io5";
import "@styles/components/image_stack.scss";

type ImageStackItem = {
  src: string;
  alt: string;
};

type ImageStackProps = {
  images: ImageStackItem[];
};

export default function ImageStack({ images }: ImageStackProps) {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(
    () => setCurrent((i) => (i - 1 + images.length) % images.length),
    [images.length],
  );

  const next = useCallback(
    () => setCurrent((i) => (i + 1) % images.length),
    [images.length],
  );

  if (images.length === 0) return null;

  return (
    <div className="image-stack">
      <div className="image-stack-pile">
        {images.map((img, i) => {
          const offset = i - current;
          // Show current + 2 behind it for the stacked look
          const isCurrent = offset === 0;
          const isBehind1 =
            offset === 1 || (current === images.length - 1 && i === 0);
          const isBehind2 =
            offset === 2 ||
            (current === images.length - 2 && i === 0) ||
            (current === images.length - 1 && i === 1);

          let stackClass = "image-stack-card";
          if (isCurrent) stackClass += " image-stack-card--active";
          else if (isBehind1) stackClass += " image-stack-card--behind-1";
          else if (isBehind2) stackClass += " image-stack-card--behind-2";
          else stackClass += " image-stack-card--hidden";

          return (
            <div key={i} className={stackClass}>
              <img
                src={img.src}
                alt={img.alt}
                loading={isCurrent ? "eager" : "lazy"}
                draggable={false}
              />
            </div>
          );
        })}
      </div>

      {images.length > 1 && (
        <div className="image-stack-nav">
          <button
            onClick={prev}
            aria-label="Previous image"
            className="image-stack-arrow"
          >
            <ChevronLeft />
          </button>
          <span className="image-stack-counter">
            {current + 1} / {images.length}
          </span>
          <button
            onClick={next}
            aria-label="Next image"
            className="image-stack-arrow"
          >
            <ChevronRight />
          </button>
        </div>
      )}
    </div>
  );
}
