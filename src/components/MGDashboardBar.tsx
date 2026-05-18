import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import steeringWheel from "@/assets/steering-wheel-transparent.png";
import gearBase from "@/assets/gear_shifter_base.png";
import gearTop from "@/assets/gear_shifter_top.png";
import ChatAssistant from "./ChatAssistant";

/**
 * MG-themed dashboard bar — fixed bottom-center pill containing three sticky
 * navigation controls: Home (steering wheel), Back/Forward (gear shifter),
 * Chat (couple photo). Rebuilt from scratch with fully opaque backgrounds and
 * no transparency / no backdrop-filter / no overflow clipping.
 */
const MGDashboardBar = () => {
  const [footerVisible, setFooterVisible] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

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
        .mgbar {
          position: fixed;
          bottom: 24px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 9999;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 20px;
          background-color: #1e3a5f;
          background-image: none;
          border-radius: 60px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.4);
          opacity: 1;
          isolation: isolate;
        }
        .mgbar[data-hidden="true"] {
          opacity: 0;
          pointer-events: none;
          transform: translateX(-50%) translateY(20px);
        }
        .mgbar, .mgbar * {
          backdrop-filter: none !important;
          -webkit-backdrop-filter: none !important;
          mix-blend-mode: normal !important;
        }

        /* ---- Home (steering wheel) ---- */
        .mgbar-home {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background-color: #f5f0e8;
          background-image: none;
          border: 2px solid #8b1a1a;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1px;
          text-decoration: none;
          color: #1B2B4B;
          padding: 6px 0 6px;
          box-sizing: border-box;
          flex-shrink: 0;
          overflow: visible;
        }
        .mgbar-home img {
          width: 42px;
          height: 42px;
          object-fit: contain;
          display: block;
          background: transparent;
        }
        .mgbar-home span {
          font-size: 11px;
          font-weight: 800;
          line-height: 1;
          color: #1B2B4B;
          letter-spacing: 0.02em;
        }

        /* ---- Gear shifter (R / F) ---- */
        .mgbar-gear {
          position: relative;
          width: 96px;
          height: 72px;
          border-radius: 36px;
          background-color: #f5f0e8;
          background-image: none;
          border: 2px solid #8b1a1a;
          flex-shrink: 0;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 10px;
        }
        .mgbar-gear-half {
          position: relative;
          z-index: 3;
          background: transparent;
          border: none;
          padding: 0;
          cursor: pointer;
          color: #1B2B4B;
          font-weight: 900;
          font-size: 14px;
          line-height: 1;
          font-family: inherit;
        }
        .mgbar-gear-graphic {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          pointer-events: none;
          z-index: 1;
        }
        .mgbar-gear-graphic img.top {
          height: 30px;
          width: auto;
          display: block;
          margin-bottom: -2px;
          transform-origin: bottom center;
          transition: transform 0.25s ease;
        }
        .mgbar-gear-graphic img.base {
          height: 22px;
          width: auto;
          display: block;
        }
        .mgbar-gear:hover .mgbar-gear-graphic img.top {
          transform: rotate(8deg);
        }

        /* ---- Chat (couple photo) ---- */
        .mgbar-chat {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          border: 3px solid #8b1a1a;
          overflow: hidden;
          flex-shrink: 0;
          position: relative;
          background-color: #f5f0e8;
          isolation: isolate;
        }
        /* Override ChatAssistant's fixed positioning so it sits inside the bar */
        .mgbar-chat .rpp-chat-anchor {
          position: absolute !important;
          inset: 0 !important;
          left: 0 !important;
          top: 0 !important;
          width: 100% !important;
          height: 100% !important;
          transform: none !important;
        }
        .mgbar-chat .rpp-chat-fab {
          width: 100% !important;
          height: 100% !important;
          border-radius: 50% !important;
          overflow: hidden !important;
        }
        .mgbar-chat .rpp-chat-fab::after {
          width: 14px !important;
          height: 14px !important;
          top: 2px !important;
          right: 2px !important;
        }
        .mgbar-chat .rpp-chat-couple-layer,
        .mgbar-chat .rpp-chat-tire-layer {
          width: 100% !important;
          height: 100% !important;
          object-fit: cover !important;
        }
        .mgbar-chat .rpp-chat-panel {
          top: auto !important;
          bottom: calc(100% + 12px) !important;
        }

        @media (max-width: 639px) {
          .mgbar {
            bottom: 12px;
            padding: 8px 14px;
            gap: 10px;
          }
          .mgbar-home { width: 60px; height: 60px; }
          .mgbar-home img { width: 34px; height: 34px; }
          .mgbar-home span { font-size: 10px; }
          .mgbar-gear { width: 82px; height: 60px; }
          .mgbar-gear-graphic img.top { height: 24px; }
          .mgbar-gear-graphic img.base { height: 18px; }
          .mgbar-gear-half { font-size: 12px; }
          .mgbar-chat { width: 60px; height: 60px; }
        }
      `}</style>

      <div
        ref={barRef}
        className="mgbar"
        data-hidden={footerVisible ? "true" : "false"}
        aria-label="Navigation dashboard"
      >
        {/* Home */}
        <Link to="/" className="mgbar-home" aria-label="Home">
          <img src={steeringWheel} alt="" aria-hidden="true" />
          <span>Home</span>
        </Link>

        {/* Gear shifter — R / F */}
        <div className="mgbar-gear">
          <button
            type="button"
            className="mgbar-gear-half"
            aria-label="Go back"
            onClick={() => window.history.back()}
          >
            R
          </button>
          <div className="mgbar-gear-graphic">
            <img src={gearTop} alt="" aria-hidden="true" className="top" />
            <img src={gearBase} alt="" aria-hidden="true" className="base" />
          </div>
          <button
            type="button"
            className="mgbar-gear-half"
            aria-label="Go forward"
            onClick={() => window.history.forward()}
          >
            F
          </button>
        </div>

        {/* Chat */}
        <div className="mgbar-chat">
          <ChatAssistant />
        </div>
      </div>
    </>
  );
};

export default MGDashboardBar;
