import "@styles/components/image_border.scss";
import { useEffect, useState } from "react";
import { FaChrome, FaSafari } from "react-icons/fa";

type ImageFrame = "safari" | "chrome" | "mobile";

type ImageBorderProps = {
  src: string;
  alt: string;
  frame?: ImageFrame;
  className?: string;
};

type FrameImageProps = {
  src: string;
  alt: string;
};

type AnimationState = "minimizing" | "closing" | "expanding" | null;

type BrowserFrameProps = FrameImageProps & {
  onToggleBrowser: () => void;
  onClose: () => void;
  onMinimize: () => void;
  onExpand: () => void;
};

function FrameImage({ src, alt }: FrameImageProps) {
  return (
    <div className="viewport">
      <img src={src} alt={alt} loading="lazy" />
    </div>
  );
}

function SafariFrame({
  src,
  alt,
  onToggleBrowser,
  onClose,
  onMinimize,
  onExpand,
}: BrowserFrameProps) {
  return (
    <>
      <div className="toolbar">
        <div className="traffic-lights">
          <button
            type="button"
            className="dot close"
            onClick={onClose}
            aria-label="Close window"
            title="Close"
          />
          <button
            type="button"
            className="dot minimize"
            onClick={onMinimize}
            aria-label="Minimize window"
            title="Minimize"
          />
          <button
            type="button"
            className="dot expand"
            onClick={onExpand}
            aria-label="Expand window"
            title="Expand"
          />
        </div>
        <div className="address-bar" />
        <button
          type="button"
          className="mode-toggle"
          onClick={onToggleBrowser}
          aria-label="Switch to Chrome frame"
          title="Switch to Chrome"
        >
          <FaChrome aria-hidden="true" />
        </button>
      </div>
      <FrameImage src={src} alt={alt} />
    </>
  );
}

function ChromeFrame({
  src,
  alt,
  onToggleBrowser,
  onClose,
  onMinimize,
  onExpand,
}: BrowserFrameProps) {
  return (
    <>
      <div className="toolbar">
        <div className="tabs-row">
          <div className="traffic-lights">
            <button
              type="button"
              className="dot close"
              onClick={onClose}
              aria-label="Close window"
              title="Close"
            />
            <button
              type="button"
              className="dot minimize"
              onClick={onMinimize}
              aria-label="Minimize window"
              title="Minimize"
            />
            <button
              type="button"
              className="dot expand"
              onClick={onExpand}
              aria-label="Expand window"
              title="Expand"
            />
          </div>
          <span className="tab active" />
        </div>
        <div className="controls-row">
          <div className="actions">
            <span className="action" />
            <span className="action" />
            <span className="action" />
          </div>
          <div className="address-bar" />
          <button
            type="button"
            className="mode-toggle"
            onClick={onToggleBrowser}
            aria-label="Switch to Safari frame"
            title="Switch to Safari"
          >
            <FaSafari aria-hidden="true" />
          </button>
        </div>
      </div>
      <FrameImage src={src} alt={alt} />
    </>
  );
}

function MobileFrame({ src, alt }: FrameImageProps) {
  return (
    <>
      <div className="top" aria-hidden="true">
        <span className="time">9:41</span>
        <div className="notch" />
        <div className="status">
          <span className="signal" />
          <span className="wifi" />
          <span className="battery">
            <span className="level" />
          </span>
        </div>
      </div>
      <FrameImage src={src} alt={alt} />
      <div className="bottom" aria-hidden="true" />
    </>
  );
}

export default function ImageBorder({
  src,
  alt,
  frame = "safari",
  className,
}: ImageBorderProps) {
  const [activeFrame, setActiveFrame] = useState<ImageFrame>(frame);
  const [animationState, setAnimationState] = useState<AnimationState>(null);

  useEffect(() => {
    setActiveFrame(frame);
  }, [frame]);

  const toggleBrowserFrame = () => {
    setActiveFrame((current) => (current === "safari" ? "chrome" : "safari"));
  };

  const triggerAnimation = (type: Exclude<AnimationState, null>) => {
    if (activeFrame === "mobile" || animationState) return;
    setAnimationState(null);
    requestAnimationFrame(() => setAnimationState(type));
  };

  const classes = [
    "image-frame",
    activeFrame,
    animationState && `is-${animationState}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const frameComponent =
    activeFrame === "chrome" ? (
      <ChromeFrame
        src={src}
        alt={alt}
        onToggleBrowser={toggleBrowserFrame}
        onClose={() => triggerAnimation("closing")}
        onMinimize={() => triggerAnimation("minimizing")}
        onExpand={() => triggerAnimation("expanding")}
      />
    ) : activeFrame === "mobile" ? (
      <MobileFrame src={src} alt={alt} />
    ) : (
      <SafariFrame
        src={src}
        alt={alt}
        onToggleBrowser={toggleBrowserFrame}
        onClose={() => triggerAnimation("closing")}
        onMinimize={() => triggerAnimation("minimizing")}
        onExpand={() => triggerAnimation("expanding")}
      />
    );

  return (
    <div
      className={classes}
      onAnimationEnd={(event) => {
        if (event.currentTarget === event.target && animationState) {
          setAnimationState(null);
        }
      }}
    >
      {frameComponent}
    </div>
  );
}
