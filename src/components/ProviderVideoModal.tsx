import { useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";

/**
 * ProviderVideoModal
 *
 * Renders a YouTube video in an accessible dialog, portaled to document.body
 * so it survives the hover panel unmounting on mouse-out.
 *
 * Accessibility:
 *  - role="dialog" + aria-modal + aria-labelledby
 *  - Escape closes; focus is trapped while open; focus returns to the trigger
 *  - Close button is 48x48 (exceeds the 44px WCAG 2.5.5 target)
 *  - Captions requested on by default (cc_load_policy=1)
 *  - Background scroll locked while open
 */

interface ProviderVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  /** Full YouTube URL, e.g. https://www.youtube.com/watch?v=8i4vW8bbYQk */
  videoUrl: string;
  /** Provider name, used in the dialog heading and iframe title */
  providerName: string;
  /** Optional subtitle, e.g. "Medicare Advisor, ALLSTAR Financial Insurance" */
  providerRole?: string;
}

/** Pulls the 11-char video id out of watch, youtu.be, embed, or shorts URLs. */
export function getYouTubeId(url: string): string | null {
  if (!url) return null;
  const patterns = [
    /[?&]v=([A-Za-z0-9_-]{11})/,
    /youtu\.be\/([A-Za-z0-9_-]{11})/,
    /\/embed\/([A-Za-z0-9_-]{11})/,
    /\/shorts\/([A-Za-z0-9_-]{11})/,
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
}

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, iframe, [tabindex]:not([tabindex="-1"])';

export default function ProviderVideoModal({
  isOpen,
  onClose,
  videoUrl,
  providerName,
  providerRole,
}: ProviderVideoModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  const videoId = getYouTubeId(videoUrl);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)
      ).filter((el) => el.offsetParent !== null || el.tagName === "IFRAME");

      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (!isOpen) return;

    previouslyFocused.current = document.activeElement as HTMLElement;

    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;
    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    document.addEventListener("keydown", handleKeyDown);

    const focusTimer = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      window.clearTimeout(focusTimer);
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
      previouslyFocused.current?.focus?.();
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  if (!videoId) {
    console.warn(`ProviderVideoModal: could not parse video id from "${videoUrl}"`);
    return null;
  }

  const embedSrc =
    `https://www.youtube-nocookie.com/embed/${videoId}` +
    `?autoplay=1&rel=0&modestbranding=1&cc_load_policy=1&playsinline=1`;

  const headingId = `provider-video-heading-${videoId}`;

  return createPortal(
    <div
      className="provider-video-overlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        className="provider-video-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby={headingId}
      >
        <div className="provider-video-dialog__bar">
          <div className="provider-video-dialog__titles">
            <h2 id={headingId} className="provider-video-dialog__title">
              {providerName}
            </h2>
            {providerRole && (
              <p className="provider-video-dialog__role">{providerRole}</p>
            )}
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            className="provider-video-dialog__close"
            onClick={onClose}
            aria-label="Close video"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              aria-hidden="true"
              focusable="false"
            >
              <line x1="5" y1="5" x2="19" y2="19" />
              <line x1="19" y1="5" x2="5" y2="19" />
            </svg>
          </button>
        </div>

        <div className="provider-video-dialog__frame">
          <iframe
            src={embedSrc}
            title={`Introduction video from ${providerName}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />
        </div>

        <p className="provider-video-dialog__note">
          Press <kbd>Esc</kbd> or select Close when you are finished.
        </p>
      </div>
    </div>,
    document.body
  );
}
