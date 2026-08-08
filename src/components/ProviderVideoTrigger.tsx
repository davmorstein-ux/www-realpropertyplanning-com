import { useState } from "react";
import ProviderVideoModal, { getYouTubeId } from "./ProviderVideoModal";
import "./provider-video.css";

/**
 * ProviderVideoTrigger
 *
 * Drop-in control that surfaces a provider's introduction video. Owns its own
 * open/close state, so wiring it into a panel is a single line:
 *
 *   <ProviderVideoTrigger
 *     videoUrl={provider.videoUrl}
 *     providerName={provider.name}
 *     providerRole="Medicare Advisor, ALLSTAR Financial Insurance"
 *   />
 *
 * Renders nothing when videoUrl is missing, so it is safe to place in a shared
 * panel where only some providers have submitted a video.
 *
 * TWO RENDER MODES
 * ----------------
 * 1. YouTube URL  -> <button> that opens ProviderVideoModal (the original
 *                    behavior; J. R. Gillespie and any future YouTube
 *                    provider are unaffected by this component's changes).
 *
 * 2. Any other URL -> <a target="_blank"> to the provider's own hosted page.
 *
 * Mode 2 exists because some providers host their introduction on a vendor
 * platform rather than YouTube (LegalShield's prospect pages, for example).
 * Those pages are ordinary web pages, not embeddable video files: there is no
 * video id to parse, and vendor pages commonly send X-Frame-Options /
 * frame-ancestors headers that make an iframe render blank. Opening the modal
 * for one of those URLs would show the visitor an empty dialog — worse than no
 * button at all. Detecting the case here, rather than inside the modal, keeps
 * ProviderVideoModal unchanged and strictly YouTube-only.
 *
 * Note that onOpenChange is intentionally NOT called in mode 2. Nothing opens
 * in-page, so the hover panel that owns this component should close on
 * mouse-out exactly as it would for a provider with no video at all.
 */

interface ProviderVideoTriggerProps {
  /**
   * The provider's introduction video URL. A YouTube URL opens in a modal;
   * any other URL opens in a new tab. Component renders null if empty or
   * undefined.
   */
  videoUrl?: string;
  /** Provider's full name, e.g. "J. R. Gillespie" */
  providerName: string;
  /** Optional line under the name in the dialog, e.g. "Medicare Advisor, ALLSTAR Financial Insurance" */
  providerRole?: string;
  /** Overrides the button text. Defaults to "Watch {providerName}'s introduction". */
  label?: string;
  /** Optional extra class on the button, if a panel needs layout tweaks. */
  className?: string;
  /**
   * Called with true when the modal opens and false when it closes.
   * Use this to pin a hover panel open while the video is playing.
   * Never called for external (non-YouTube) links — see the note above.
   */
  onOpenChange?: (isOpen: boolean) => void;
}

/** Play glyph, shared by both render modes. */
function PlayIcon() {
  return (
    <svg
      className="provider-video-trigger__icon"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M8 5v14l11-7L8 5z" />
    </svg>
  );
}

export default function ProviderVideoTrigger({
  videoUrl,
  providerName,
  providerRole,
  label,
  className,
  onOpenChange,
}: ProviderVideoTriggerProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (!videoUrl) return null;

  const setOpen = (next: boolean) => {
    setIsOpen(next);
    onOpenChange?.(next);
  };

  const buttonLabel = label ?? `Watch ${providerName}'s introduction`;
  const isYouTube = getYouTubeId(videoUrl) !== null;

  /*
   * Mode 2 — external link.
   *
   * The visible label stays identical to the modal button so the two read the
   * same in a directory. The "(opens in a new tab)" text is visually hidden
   * rather than omitted: WCAG 3.2.5 expects a warning when a link opens a new
   * context, and sighted users get that cue from the arrow glyph.
   *
   * The doubled class name is deliberate. index.css applies link underlines
   * with !important, which defeats both inline styles and a single-class rule,
   * so provider-video.css needs a matching doubled-selector rule to win on
   * specificity. See the snippet accompanying this file.
   */
  if (!isYouTube) {
    return (
      <a
        href={videoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={
          className
            ? `provider-video-trigger provider-video-trigger--external provider-video-trigger--external ${className}`
            : "provider-video-trigger provider-video-trigger--external provider-video-trigger--external"
        }
      >
        <PlayIcon />
        <span>{buttonLabel}</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          focusable="false"
          style={{ flexShrink: 0, marginLeft: 2 }}
        >
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    );
  }

  /* Mode 1 — YouTube, unchanged from the original component. */
  return (
    <>
      <button
        type="button"
        className={className ? `provider-video-trigger ${className}` : "provider-video-trigger"}
        onClick={() => setOpen(true)}
      >
        <PlayIcon />
        <span>{buttonLabel}</span>
      </button>
      <ProviderVideoModal
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        videoUrl={videoUrl}
        providerName={providerName}
        providerRole={providerRole}
      />
    </>
  );
}
