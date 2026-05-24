import { useEffect, useRef, useState } from "react";
import chatCouple from "@/assets/chat-couple.png";
import chatTire from "@/assets/chat-tire.png";

/**
 * Standalone floating chat button shown on every page.
 * Reuses the sbn-chat-wrap visual structure from the bottom nav.
 */
const FloatingChatButton = () => {
  const [autoAnimate, setAutoAnimate] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const labelTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openChat = () => {
    window.dispatchEvent(new Event("rpp-open-chat"));
  };

  useEffect(() => {
    const clearTimers = () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (labelTimeoutRef.current) clearTimeout(labelTimeoutRef.current);
      intervalRef.current = null;
      labelTimeoutRef.current = null;
    };

    // If user is hovering, pause the auto cycle and reset state.
    if (isHovering) {
      clearTimers();
      setAutoAnimate(false);
      return;
    }

    const trigger = () => {
      setAutoAnimate(true);
      // Spin lasts 1.5s, label remains visible 2s, then fade out and restart.
      labelTimeoutRef.current = setTimeout(() => {
        setAutoAnimate(false);
      }, 2000);
    };

    intervalRef.current = setInterval(trigger, 15000);

    return clearTimers;
  }, [isHovering]);

  return (
    <>
      <style>{`
        .fcb-btn {
          position: fixed;
          bottom: 20px;
          right: 20px;
          width: 105px;
          height: 105px;
          z-index: 10000;
          background: transparent;
          border: 0;
          padding: 0;
          cursor: pointer;
        }
        .fcb-wrap {
          position: relative;
          width: 100%;
          height: 100%;
        }
        .fcb-couple {
          position: absolute;
          inset: 10px;
          width: calc(100% - 20px);
          height: calc(100% - 20px);
          border-radius: 50%;
          object-fit: cover;
          display: block;
          z-index: 1;
        }
        .fcb-tire {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
          pointer-events: none;
          z-index: 2;
        }
        .fcb-btn:hover .fcb-tire {
          animation: fcb-tire-spin 1.4s linear infinite;
        }
        .fcb-btn.fcb-auto .fcb-tire {
          animation: fcb-tire-spin 1.5s linear 1;
        }
        .fcb-label {
          position: absolute;
          right: 110%;
          top: 50%;
          transform: translateY(-50%);
          background: #1B2B4B;
          color: #fff;
          font-size: 14px;
          font-weight: bold;
          padding: 6px 12px;
          border-radius: 20px;
          white-space: nowrap;
          opacity: 0;
          transition: opacity 0.2s ease;
          pointer-events: none;
        }
        .fcb-btn:hover .fcb-label,
        .fcb-btn.fcb-auto .fcb-label {
          opacity: 1;
        }
        @keyframes fcb-tire-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
      <button
        type="button"
        onClick={openChat}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className={`fcb-btn ${autoAnimate && !isHovering ? "fcb-auto" : ""}`.trim()}
        aria-label="Open chat"
      >
        <div className="fcb-wrap">
          <img src={chatCouple} alt="" aria-hidden="true" className="fcb-couple" />
          <img src={chatTire} alt="" aria-hidden="true" className="fcb-tire" />
        </div>
      </button>
    </>
  );
};

export default FloatingChatButton;
