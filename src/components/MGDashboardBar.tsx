import { useEffect, useRef, useState } from "react";
import FloatingHomeButton from "./FloatingHomeButton";
import FloatingNavButtons from "./FloatingNavButtons";
import ChatAssistant from "./ChatAssistant";

/**
 * MG-themed dashboard bar — a pill-shaped navy container fixed to the bottom
 * center of the viewport that hosts the three sticky nav buttons:
 *   Steering wheel (Home) · Gear shifter (Back/Forward) · Wheel/tire (Chat)
 * Renders on every page. Auto-hides when the footer scrolls into view.
 */
const MGDashboardBar = () => {
  const [showTip, setShowTip] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

  // First-visit tooltip
  useEffect(() => {
    try {
      if (!localStorage.getItem("mg-dashboard-tip-seen")) {
        setShowTip(true);
        localStorage.setItem("mg-dashboard-tip-seen", "1");
        const t = setTimeout(() => setShowTip(false), 3000);
        return () => clearTimeout(t);
      }
    } catch {
      /* ignore */
    }
  }, []);

  // Hide when footer scrolls into view so bar never overlaps the footer
  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;
    const obs = new IntersectionObserver(
      ([entry]) => setFooterVisible(entry.isIntersecting),
      { rootMargin: "0px 0px -20px 0px", threshold: 0.01 },
    );
    obs.observe(footer);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .mg-dashboard {
          position: fixed;
          bottom: 18px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 9999;
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 12px 22px;
          background-color: #1a2f4e !important;
          background: #1a2f4e !important;
          background-image: none !important;
          backdrop-filter: none !important;
          -webkit-backdrop-filter: none !important;
          opacity: 1 !important;
          border: 1px solid #C9A84C;
          border-radius: 999px;
          box-shadow: 0 14px 36px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08);
          overflow: visible;
          transition: opacity 0.25s ease, transform 0.25s ease;
        }
        .mg-dashboard * {
          backdrop-filter: none !important;
          -webkit-backdrop-filter: none !important;
        }
        .mg-dashboard[data-hidden="true"] {
          opacity: 0;
          pointer-events: none;
          transform: translateX(-50%) translateY(20px);
        }

        /* Override each child's fixed positioning so they sit inline inside the bar. */
        .mg-dashboard .home-button,
        .mg-dashboard .gear-nav-oval,
        .mg-dashboard .rpp-chat-anchor {
          position: static !important;
          top: auto !important;
          left: auto !important;
          right: auto !important;
          bottom: auto !important;
          transform: none !important;
          margin: 0 !important;
          overflow: visible !important;
        }

        /* Equal-size, fully-visible buttons. Steering wheel sets the target height (~92px). */
        .mg-dashboard .home-button {
          padding: 6px 14px !important;
          font-size: 13px !important;
          min-height: 92px !important;
          justify-content: center !important;
          background: #FFF8EC !important;
        }
        .mg-dashboard .home-button .steering-wheel-img {
          width: 56px !important;
          height: 56px !important;
        }
        .mg-dashboard .gear-nav-oval {
          width: 130px !important;
          height: 92px !important;
          background: #FFF8EC !important;
        }
        .mg-dashboard .gear-top { height: 36px !important; }
        .mg-dashboard .gear-base { height: 28px !important; }

        /* R / F labels — solid navy, high z-index so they sit above the gear graphic. */
        .mg-dashboard .gear-half {
          z-index: 5 !important;
        }
        .mg-dashboard .gear-half span {
          position: relative !important;
          z-index: 10 !important;
          color: #1B2B4B !important;
          font-weight: 800 !important;
          font-size: 20px !important;
          line-height: 1 !important;
          text-shadow: 0 1px 0 #FFF8EC;
        }
        .mg-dashboard .gear-container { z-index: 2 !important; }

        .mg-dashboard .rpp-chat-anchor {
          width: 92px !important;
          height: 92px !important;
        }
        .mg-dashboard .rpp-chat-fab {
          width: 92px !important;
          height: 92px !important;
        }
        .mg-dashboard .rpp-chat-fab::after {
          width: 16px !important;
          height: 16px !important;
          top: 3px !important;
          right: 3px !important;
        }


        /* Chat panel must open upward (it's anchored to the bottom bar). */
        .mg-dashboard .rpp-chat-panel {
          top: auto !important;
          bottom: calc(100% + 12px) !important;
        }

        /* Tooltip */
        .mg-dashboard-tip {
          position: absolute;
          bottom: calc(100% + 10px);
          left: 38px;
          transform: translateX(-50%);
          background: #1B2B4B;
          color: #fff;
          padding: 8px 14px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 600;
          white-space: nowrap;
          box-shadow: 0 8px 20px rgba(0,0,0,0.3);
          animation: mg-tip-fade 3s ease forwards;
          pointer-events: none;
        }
        .mg-dashboard-tip::after {
          content: "";
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          border: 6px solid transparent;
          border-top-color: #1B2B4B;
        }
        @keyframes mg-tip-fade {
          0%   { opacity: 0; transform: translateX(-50%) translateY(4px); }
          15%  { opacity: 1; transform: translateX(-50%) translateY(0); }
          80%  { opacity: 1; }
          100% { opacity: 0; transform: translateX(-50%) translateY(-4px); }
        }

        @media (max-width: 639px) {
          .mg-dashboard {
            bottom: 12px;
            gap: 10px;
            padding: 8px 14px;
          }
          .mg-dashboard .home-button { padding: 4px 10px !important; font-size: 11px !important; min-height: 74px !important; }
          .mg-dashboard .home-button .steering-wheel-img { width: 44px !important; height: 44px !important; }
          .mg-dashboard .gear-nav-oval { width: 104px !important; height: 74px !important; }
          .mg-dashboard .gear-top { height: 28px !important; }
          .mg-dashboard .gear-base { height: 22px !important; }
          .mg-dashboard .gear-half span { font-size: 17px !important; }
          .mg-dashboard .rpp-chat-anchor { width: 74px !important; height: 74px !important; }
          .mg-dashboard .rpp-chat-fab { width: 74px !important; height: 74px !important; }
        }

      `}</style>

      <div
        ref={barRef}
        className="mg-dashboard"
        data-hidden={footerVisible ? "true" : "false"}
        aria-label="Navigation dashboard"
      >
        {showTip && <div className="mg-dashboard-tip">Tap to navigate</div>}
        <FloatingHomeButton />
        <FloatingNavButtons />
        <ChatAssistant />
      </div>
    </>
  );
};

export default MGDashboardBar;
