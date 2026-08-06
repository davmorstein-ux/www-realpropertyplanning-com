import { useState } from "react";
import ProviderVideoModal from "./ProviderVideoModal";
import "./provider-video.css";

/**
 * ProviderVideoTrigger
 *
 * Drop-in button that opens a provider's introduction video in a modal.
 * Owns its own open/close state, so wiring it into a panel is a single line:
 *
 *   <ProviderVideoTrigger
 *     videoUrl={provider.videoUrl}
 *     providerName={provider.name}
 *     providerRole="Medicare Advisor, ALLSTAR Financial Insurance"
 *   />
 *
 * Renders nothing when videoUrl is missing, so it is safe to place in a shared
 * panel where only some providers have submitted a video.
 */

interface ProviderVideoTriggerProps {
  /** Full YouTube URL. Component renders null if empty or undefined. */
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
   */
  onOpenChange?: (isOpen: boolean) => void;
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

  return (
    <>
      <button
        type="button"
        className={
          className
            ? `provider-video-trigger ${className}`
            : "provider-video-trigger"
        }
        onClick={() => setOpen(true)}
      >
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
