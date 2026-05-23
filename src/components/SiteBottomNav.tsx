import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import steeringWheel from "@/assets/steering-wheel-transparent.png";
import gearStickImg from "@/assets/gear_stick_only.png";
import gearBootImg from "@/assets/gear_boot_only.png";
import compassIcon from "@/assets/nav/compass.webp";
import roadmapIcon from "@/assets/nav/map-clean.png";
import headlampIcon from "@/assets/nav/headlamps-clean.png";
import chatCouple from "@/assets/chat-couple.png";
import chatTire from "@/assets/chat-tire.png";

/**
 * Sticky bottom navigation bar shown on every page.
 */
const SiteBottomNav = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [gearSide, setGearSide] = useState<"none" | "R" | "F">("none");

  const openChat = () => {
    window.dispatchEvent(new Event("rpp-open-chat"));
  };

  return (
    <>
      <style>{`
        .sbn-bar {
          position: fixed;
          left: 50%;
          bottom: 14px;
          transform: translateX(-50%);
          z-index: 9999;
          height: 70px;
          padding: 4px 28px;
          background-color: rgba(245, 241, 232, 0.92);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 2px solid #1B2B4B;
          border-radius: 9999px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.18);
          display: flex;
          align-items: center;
          justify-content: center;
          width: min(960px, calc(100vw - 24px));
        }
        .sbn-inner {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 4px;
          align-items: end;
          justify-items: center;
        }
        .sbn-item {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
          gap: 2px;
          background: transparent;
          border: 0;
          padding: 0 4px;
          cursor: pointer;
          text-decoration: none;
          color: #1B2B4B;
          font-family: 'Inter', 'DM Sans', system-ui, sans-serif;
          line-height: 1;
        }
        .sbn-item:hover { color: #C9A84C; }
        .sbn-icon-wrap {
          width: 72px;
          height: 72px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .sbn-icon {
          width: 72px;
          height: 72px;
          object-fit: contain;
          display: block;
          background: transparent;
          transition: transform 0.2s ease;
        }
        .sbn-item:hover .sbn-icon { transform: translateY(-2px) scale(1.06); }
        .sbn-label {
          font-size: 9px !important;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #1B2B4B;
          text-align: center;
          white-space: nowrap;
          font-family: 'Inter', 'DM Sans', system-ui, sans-serif;
        }
        .sbn-item:hover .sbn-label { color: #1B2B4B; }

        /* Tooltip */
        .sbn-item[data-tip]::after {
          content: attr(data-tip);
          position: absolute;
          bottom: calc(100% + 8px);
          left: 50%;
          transform: translateX(-50%) translateY(4px);
          background: #1B2B4B;
          color: #fff;
          font-size: 12px;
          font-weight: 600;
          padding: 6px 10px;
          border-radius: 6px;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.18s ease, transform 0.18s ease;
          box-shadow: 0 6px 18px rgba(0,0,0,0.3);
          max-width: 260px;
        }
        .sbn-item:hover[data-tip]::after,
        .sbn-item:focus-visible[data-tip]::after {
          opacity: 1;
          transform: translateX(-50%) translateY(0);
        }

        /* Gear shifter — boot stationary base, knob & shaft centered on top */
        .sbn-gear-wrap {
          position: relative;
          width: 48px;
          height: 48px;
        }
        .sbn-gear-boot {
          position: absolute;
          left: 50%;
          bottom: 0;
          transform: translateX(-50%);
          width: 48px;
          height: 30px;
          object-fit: contain;
          object-position: bottom center;
          pointer-events: none;
          z-index: 1;
        }
        .sbn-gear-knob {
          position: absolute;
          left: 50%;
          bottom: 18px;
          transform: translateX(-50%);
          width: 26px;
          height: 26px;
          object-fit: contain;
          pointer-events: none;
          z-index: 2;
        }
        .sbn-gear-half {
          position: absolute;
          top: 0;
          width: 50%;
          height: 100%;
          background: transparent;
          border: 0;
          cursor: pointer;
          z-index: 3;
          padding: 0;
        }
        .sbn-gear-half.left { left: 0; }
        .sbn-gear-half.right { right: 0; }

        /* Chat — circular couple photo with tire ring snug around it */
        .sbn-chat-wrap {
          position: relative;
          width: 48px;
          height: 48px;
        }
        .sbn-chat-couple {
          position: absolute;
          inset: 6px;
          width: calc(100% - 12px);
          height: calc(100% - 12px);
          border-radius: 50%;
          object-fit: cover;
          display: block;
          z-index: 1;
        }
        .sbn-chat-tire {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
          pointer-events: none;
          z-index: 2;
        }
        .sbn-item:hover .sbn-chat-tire {
          animation: sbn-tire-spin 1.4s linear infinite;
        }
        @keyframes sbn-tire-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        /* Home steering wheel — exact wheelImgStyle from MGFloatingNav */
        .sbn-wheel {
          width: 60px !important;
          height: 60px !important;
          object-fit: contain;
          display: block;
          margin-top: -4px;
          margin-bottom: 2px;
          background: transparent;
        }
        @keyframes wheelWiggle {
          0%   { transform: rotate(0deg); }
          25%  { transform: rotate(-15deg); }
          75%  { transform: rotate(15deg); }
          100% { transform: rotate(0deg); }
        }
        .sbn-item:hover .sbn-wheel {
          animation: wheelWiggle 0.35s ease-in-out infinite;
          transform: none;
        }

        @media (max-width: 639px) {
          .sbn-bar {
            height: 70px;
            padding: 4px 10px;
            bottom: 8px;
            border-radius: 9999px;
            width: calc(100vw - 12px);
          }
          .sbn-inner { gap: 0; }
          .sbn-label { font-size: 10px; letter-spacing: 0.06em; }
        }
      `}</style>

      <nav className="sbn-bar" aria-label="Site bottom navigation">
        <div className="sbn-inner">
          {/* 1. Home */}
          <Link to="/" className="sbn-item" data-tip="Home" aria-label="Home">
            <div className="sbn-icon-wrap">
              <img src={steeringWheel} alt="" aria-hidden="true" className="sbn-wheel" loading="lazy" />
            </div>
            <span className="sbn-label">Home</span>
          </Link>

          {/* 2. Back / Forward gear shifter — exact stacking from MGFloatingNav */}
          <div
            className="sbn-item"
            data-tip="Back / Forward"
            role="group"
            aria-label="Back or forward"
          >
            <div
              className="sbn-icon-wrap"
              style={{
                position: "relative",
                width: 30,
                height: 54,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-end",
                flexShrink: 0,
              }}
            >
              <img
                src={gearStickImg}
                alt=""
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: 0,
                  left: "50%",
                  transform: `translateX(-50%) rotate(${
                    gearSide === "R" ? -22 : gearSide === "F" ? 22 : 0
                  }deg)`,
                  transformOrigin: "bottom center",
                  width: 19,
                  height: 32,
                  objectFit: "contain",
                  transition: "transform 0.2s ease",
                  zIndex: 2,
                  pointerEvents: "none",
                }}
              />
              <img
                src={gearBootImg}
                alt=""
                aria-hidden="true"
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 32,
                  height: 24,
                  objectFit: "contain",
                  zIndex: 1,
                  pointerEvents: "none",
                }}
              />

              <button
                type="button"
                className="sbn-gear-half left"
                aria-label="Go back"
                onMouseEnter={() => setGearSide("R")}
                onMouseLeave={() => setGearSide("none")}
                onFocus={() => setGearSide("R")}
                onBlur={() => setGearSide("none")}
                onClick={() => window.history.back()}
                style={{
                  position: "absolute",
                  top: 0,
                  left: "-22px",
                  width: "calc(50% + 22px)",
                  height: "100%",
                  background: "transparent",
                  border: 0,
                  cursor: "pointer",
                  zIndex: 3,
                  padding: 0,
                }}
              />
              <button
                type="button"
                className="sbn-gear-half right"
                aria-label="Go forward"
                onMouseEnter={() => setGearSide("F")}
                onMouseLeave={() => setGearSide("none")}
                onFocus={() => setGearSide("F")}
                onBlur={() => setGearSide("none")}
                onClick={() => window.history.forward()}
                style={{
                  position: "absolute",
                  top: 0,
                  right: "-22px",
                  width: "calc(50% + 22px)",
                  height: "100%",
                  background: "transparent",
                  border: 0,
                  cursor: "pointer",
                  zIndex: 3,
                  padding: 0,
                }}
              />
            </div>
            <span className="sbn-label">&lt; Back / Forward &gt;</span>
          </div>


          {/* 3. Site Map */}
          <Link to="/sitemap" className="sbn-item" data-tip="Site Map" aria-label="Site Map">
            <div className="sbn-icon-wrap">
              <img src={roadmapIcon} alt="" aria-hidden="true" className="sbn-icon" loading="lazy" />
            </div>
            <span className="sbn-label">Site Map</span>
          </Link>

          {/* 4. Search */}
          <button
            type="button"
            onClick={() => navigate("/sitemap")}
            className="sbn-item"
            data-tip="Search the site"
            aria-label="Search"
          >
            <div className="sbn-icon-wrap">
              <img src={compassIcon} alt="" aria-hidden="true" className="sbn-icon" loading="lazy" />
            </div>
            <span className="sbn-label">Search</span>
          </button>

          {/* 5. Contact */}
          <Link to="/contact" className="sbn-item" data-tip="Contact us" aria-label="Contact">
            <div className="sbn-icon-wrap">
              <img src={headlampIcon} alt="" aria-hidden="true" className="sbn-icon" loading="lazy" />
            </div>
            <span className="sbn-label">Contact</span>
          </Link>

          {/* 6. Chat */}
          <button
            type="button"
            onClick={openChat}
            className="sbn-item"
            data-tip="Chat with us"
            aria-label="Open chat"
          >
            <div className="sbn-chat-wrap">
              <img src={chatCouple} alt="" aria-hidden="true" className="sbn-chat-couple" />
              <img src={chatTire} alt="" aria-hidden="true" className="sbn-chat-tire" />
            </div>
            <span className="sbn-label">Chat</span>
          </button>
        </div>
        {/* Suppress unused warning */}
        <span hidden>{pathname}</span>
      </nav>
    </>
  );
};

export default SiteBottomNav;
