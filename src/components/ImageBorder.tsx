import "@styles/components/image_border.scss";
import { useEffect, useState } from "react";
import { FaChrome, FaSafari } from "react-icons/fa";
import { useTranslation } from "react-i18next";

type ImageFrame = "default" | "safari" | "chrome" | "mobile";

type ImageBorderProps = {
  src: string;
  alt: string;
  frame?: ImageFrame;
  className?: string;
  lookAtCursor?: boolean;
  objectPosition?: string;
};

type FrameImageProps = {
  src: string;
  alt: string;
  objectPosition?: string;
};

type AnimationState = "minimizing" | "closing" | "expanding" | null;

type BrowserFrameProps = FrameImageProps & {
  onToggleBrowser: () => void;
  onClose: () => void;
  onMinimize: () => void;
  onExpand: () => void;
};

function FrameImage({ src, alt, objectPosition }: FrameImageProps) {
  const cleanPath = src.split("?")[0].split("#")[0].toLowerCase();
  const isVideo = /\.(mp4|webm|ogg|mov)$/.test(cleanPath);

  return (
    <div className="viewport">
      {isVideo ? (
        <video
          className="viewport-media"
          src={src}
          aria-label={alt}
          preload="metadata"
          autoPlay
          loop
          muted
          playsInline
          style={objectPosition ? { objectPosition } : undefined}
        />
      ) : (
        <img
          className="viewport-media"
          src={src}
          alt={alt}
          loading="lazy"
          style={objectPosition ? { objectPosition } : undefined}
        />
      )}
    </div>
  );
}

function SafariFrame({
  src,
  alt,
  objectPosition,
  onToggleBrowser,
  onClose,
  onMinimize,
  onExpand,
}: BrowserFrameProps) {
  const { t } = useTranslation();

  return (
    <>
      <div className="toolbar">
        <div className="traffic-lights">
          <button
            type="button"
            className="dot close"
            onClick={onClose}
            aria-label={t("imageBorder.closeWindow")}
            title={t("imageBorder.close")}
          />
          <button
            type="button"
            className="dot minimize"
            onClick={onMinimize}
            aria-label={t("imageBorder.minimizeWindow")}
            title={t("imageBorder.minimize")}
          />
          <button
            type="button"
            className="dot expand"
            onClick={onExpand}
            aria-label={t("imageBorder.expandWindow")}
            title={t("imageBorder.expand")}
          />
        </div>
        <div className="address-bar" />
        <button
          type="button"
          className="mode-toggle"
          onClick={onToggleBrowser}
          aria-label={t("imageBorder.switchToChromeFrame")}
          title={t("imageBorder.switchToChrome")}
        >
          <FaChrome aria-hidden="true" />
        </button>
      </div>
      <FrameImage src={src} alt={alt} objectPosition={objectPosition} />
    </>
  );
}

function ChromeFrame({
  src,
  alt,
  objectPosition,
  onToggleBrowser,
  onClose,
  onMinimize,
  onExpand,
}: BrowserFrameProps) {
  const { t } = useTranslation();

  return (
    <>
      <div className="toolbar">
        <div className="tabs-row">
          <div className="traffic-lights">
            <button
              type="button"
              className="dot close"
              onClick={onClose}
              aria-label={t("imageBorder.closeWindow")}
              title={t("imageBorder.close")}
            />
            <button
              type="button"
              className="dot minimize"
              onClick={onMinimize}
              aria-label={t("imageBorder.minimizeWindow")}
              title={t("imageBorder.minimize")}
            />
            <button
              type="button"
              className="dot expand"
              onClick={onExpand}
              aria-label={t("imageBorder.expandWindow")}
              title={t("imageBorder.expand")}
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
            aria-label={t("imageBorder.switchToSafariFrame")}
            title={t("imageBorder.switchToSafari")}
          >
            <FaSafari aria-hidden="true" />
          </button>
        </div>
      </div>
      <FrameImage src={src} alt={alt} objectPosition={objectPosition} />
    </>
  );
}

function MobileFrame({ src, alt, objectPosition }: FrameImageProps) {
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
      <FrameImage src={src} alt={alt} objectPosition={objectPosition} />
      <div className="bottom" aria-hidden="true" />
    </>
  );
}

export default function ImageBorder({
  src,
  alt,
  frame = "default",
  className,
  lookAtCursor = false,
  objectPosition,
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
    lookAtCursor && "cursor-look",
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
        objectPosition={objectPosition}
        onToggleBrowser={toggleBrowserFrame}
        onClose={() => triggerAnimation("closing")}
        onMinimize={() => triggerAnimation("minimizing")}
        onExpand={() => triggerAnimation("expanding")}
      />
    ) : activeFrame === "mobile" ? (
      <MobileFrame src={src} alt={alt} objectPosition={objectPosition} />
    ) : activeFrame === "default" ? (
      <FrameImage src={src} alt={alt} objectPosition={objectPosition} />
    ) : (
      <SafariFrame
        src={src}
        alt={alt}
        objectPosition={objectPosition}
        onToggleBrowser={toggleBrowserFrame}
        onClose={() => triggerAnimation("closing")}
        onMinimize={() => triggerAnimation("minimizing")}
        onExpand={() => triggerAnimation("expanding")}
      />
    );

  return (
    <div
      className={classes}
      onMouseMove={
        lookAtCursor
          ? (event) => {
            const el = event.currentTarget;
            const target = event.target as HTMLElement | null;

            if (
              (activeFrame === "safari" || activeFrame === "chrome") &&
              target?.closest(".toolbar")
            ) {
              el.style.setProperty("--mouse-rx", "0deg");
              el.style.setProperty("--mouse-ry", "0deg");
              return;
            }

            const rect = el.getBoundingClientRect();
            const x = (event.clientX - rect.left) / rect.width - 0.5;
            const y = (event.clientY - rect.top) / rect.height - 0.5;
            const maxTilt =
              activeFrame === "safari" || activeFrame === "chrome" ? 9 : 13;
            el.style.setProperty("--mouse-rx", `${(-y * maxTilt).toFixed(2)}deg`);
            el.style.setProperty("--mouse-ry", `${(x * maxTilt).toFixed(2)}deg`);
          }
          : undefined
      }
      onMouseLeave={
        lookAtCursor
          ? (event) => {
            event.currentTarget.style.setProperty("--mouse-rx", "0deg");
            event.currentTarget.style.setProperty("--mouse-ry", "0deg");
          }
          : undefined
      }
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
