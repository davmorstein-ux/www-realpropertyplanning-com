import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import steeringWheel from "@/assets/steering-wheel-transparent.png";
import gearStickImg from "@/assets/gear_stick_only.png";
import gearBootImg from "@/assets/gear_boot_only.png";
import compassIcon from "@/assets/nav/compass_final.png";
import compassNeedle from "@/assets/nav/compass_needle_final.png";
import waypointPin from "@/assets/nav/waypoint_final.png";
import roadmapIcon from "@/assets/nav/map_final.png";
import headlampIcon from "@/assets/nav/headlamps_final.png";
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
          padding-top: 2px !important;
          padding-bottom: 2px !important;
          padding-left: 6px !important;
          padding-right: 6px !important;
          height: 95px !important;
          overflow: hidden !important;
          background-color: rgba(245, 241, 232, 0.92);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 2px solid #CA0600;
          border-radius: 9999px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.18);
          display: flex;
          align-items: center;
          justify-content: center;
          width: fit-content !important;
          margin: 0 auto !important;
          min-width: unset !important;
          max-width: 95% !important;
          align-self: center !important;
          box-sizing: border-box !important;
          padding-left: 8px !important;
          padding-right: 8px !important;
        }
        .sbn-inner {
          width: 100%;
          display: flex !important;
          justify-content: space-evenly !important;
          align-items: center;
        }
        .sbn-item {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
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
          width: 60px !important;
          height: 65px !important;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .sbn-icon-tall {
          width: auto !important;
          height: 75px !important;
          object-fit: contain !important;
          display: block !important;
          background: transparent !important;
        }
        .sbn-icon {
          width: 55px !important;
          height: 55px !important;
          object-fit: contain;
          display: block;
          background: transparent;
          transition: transform 0.2s ease;
        }
        .sbn-item:hover .sbn-icon { transform: translateY(-2px) scale(1.06); }
        .sbn-headlamp {
          filter: brightness(1);
          transition: filter 0.3s ease;
        }
        .sbn-item:hover .sbn-headlamp {
          filter: brightness(1.5) drop-shadow(0 0 10px rgba(255, 240, 150, 0.95)) drop-shadow(0 0 20px rgba(255, 220, 100, 0.7));
        }
        .sbn-headlamp-wrap { position: relative; display: inline-block; }
        .sbn-headlamp-beams {
          position: absolute;
          inset: 0;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
          background:
            radial-gradient(circle at 30% 45%, rgba(255,240,100,0.85) 0%, rgba(255,200,0,0.4) 40%, transparent 70%),
            radial-gradient(circle at 65% 45%, rgba(255,240,100,0.85) 0%, rgba(255,200,0,0.4) 40%, transparent 70%);
        }
        .sbn-item:hover .sbn-headlamp-beams { opacity: 1; }
        @keyframes sbn-needle-spin {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(720deg); }
        }
        .sbn-compass-wrap { position: relative; display: inline-block; }
        .sbn-compass-needle {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 50%;
          height: auto;
          transform: translate(-50%, -50%) rotate(0deg);
          pointer-events: none;
        }
        .sbn-item:hover .sbn-compass-needle {
          animation: sbn-needle-spin 0.8s ease-out;
        }
        @keyframes waypointBounce {
          0% { transform: translateX(-50%) translateY(0px); }
          40% { transform: translateX(-50%) translateY(6px); }
          70% { transform: translateX(-50%) translateY(-3px); }
          100% { transform: translateX(-50%) translateY(0px); }
        }
        .sbn-map-wrap { position: relative; display: inline-block; }
        .sbn-waypoint {
          position: absolute;
          left: 50%;
          top: 2px;
          height: 22px;
          width: auto;
          opacity: 0;
          pointer-events: none;
          z-index: 10;
          transition: opacity 0.3s ease;
          filter: drop-shadow(0 0 6px rgba(255,180,0,0.9));
          transform: translateX(-50%);
        }
        .sbn-item:hover .sbn-waypoint {
          opacity: 1;
          animation: waypointBounce 0.6s ease forwards;
        }
        .sbn-label {
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          height: 16px !important;
          margin-top: 0 !important;
          padding-top: 0 !important;
          font-weight: 800 !important;
          font-size: 11px !important;
          text-align: center !important;
          line-height: 1 !important;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: #1B2B4B;
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
        .sbn-chat-outer {
          width: 55px !important;
          height: 65px !important;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .sbn-chat-wrap {
          position: relative;
          width: 58px !important;
          height: 58px !important;
        }
        .sbn-chat-couple {
          position: absolute;
          inset: 7px;
          width: calc(100% - 14px);
          height: calc(100% - 14px);
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
          width: 58px !important;
          height: 58px !important;
          object-fit: contain;
          display: block;
          margin-top: 0;
          margin-bottom: 0;
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
            padding: 4px 10px 4px;
            bottom: 8px;
            border-radius: 9999px;
            width: calc(100vw - 12px);
          }
          .sbn-inner { gap: 0; }
          .sbn-label { font-size: 9px !important; letter-spacing: 0.08em; }
        }
      `}</style>

      <nav className="sbn-bar" aria-label="Site bottom navigation">
        <div className="sbn-inner">
          {/* 1. Home */}
          <Link to="/" className="sbn-item" data-tip="Home" aria-label="Home">
            <div className="sbn-icon-wrap">
              <img src={steeringWheel} alt="" aria-hidden="true" className="sbn-wheel" loading="lazy" />
            </div>
            <span className="sbn-label">HOME</span>
          </Link>

          {/* 2. Back / Forward gear shifter — exact stacking from MGFloatingNav */}
          <div
            className="sbn-item"
            data-tip="Back / Forward"
            role="group"
            aria-label="Back or forward"
          >
            <div className="sbn-icon-wrap">

              <div
                style={{
                  position: "relative",
                  width: 60,
                  height: 65,
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
                    top: 2,
                    left: "50%",
                    transform: `translateX(-50%) rotate(${
                      gearSide === "R" ? -22 : gearSide === "F" ? 22 : 0
                    }deg)`,
                    transformOrigin: "bottom center",
                    width: 20,
                    height: 36,
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
                    bottom: 2,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: 36,
                    height: 28,
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
                    left: 0,
                    width: "50%",
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
                    right: 0,
                    width: "50%",
                    height: "100%",
                    background: "transparent",
                    border: 0,
                    cursor: "pointer",
                    zIndex: 3,
                    padding: 0,
                  }}
                />
              </div>
            </div>
            <span className="sbn-label">&lt; PAGE &gt;</span>
          </div>


          {/* 3. Site Map */}
          <Link to="/sitemap" className="sbn-item" data-tip="Site Map" aria-label="Site Map">
            <div className="sbn-icon-wrap" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', overflow: 'visible', marginRight: '8px' }}>
              <span className="sbn-map-wrap">
                <img src={roadmapIcon} alt="" aria-hidden="true" style={{ height: '68px', width: 'auto', objectFit: 'contain' }} loading="lazy" />
                <img src={waypointPin} alt="" aria-hidden="true" className="sbn-waypoint" loading="lazy" />
              </span>
            </div>
            <span className="sbn-label">SITE MAP</span>
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
              <span className="sbn-compass-wrap">
                <img src={compassIcon} alt="" aria-hidden="true" loading="lazy" style={{ height: '62px', width: 'auto', objectFit: 'contain', display: 'block', transform: 'rotate(35deg)', transition: 'transform 0.2s ease' }} />
                <img src={compassNeedle} alt="" aria-hidden="true" loading="lazy" className="sbn-compass-needle" />
              </span>
            </div>
            <span className="sbn-label">SEARCH</span>
          </button>

          {/* 5. Contact */}
          <Link to="/contact" className="sbn-item" data-tip="Contact us" aria-label="Contact">
            <div className="sbn-icon-wrap" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', overflow: 'visible' }}>
              <span className="sbn-headlamp-wrap">
                <img src={headlampIcon} alt="" aria-hidden="true" className="sbn-headlamp" style={{ height: '62px', width: 'auto', objectFit: 'contain', display: 'block' }} loading="lazy" />
                <span className="sbn-headlamp-beams" aria-hidden="true" />
              </span>
            </div>
            <span className="sbn-label">CONTACT</span>
          </Link>

          {/* 6. Chat */}
          <button
            type="button"
            onClick={openChat}
            className="sbn-item"
            data-tip="Chat with us"
            aria-label="Open chat"
          >
            <div className="sbn-chat-outer">
              <div className="sbn-chat-wrap">
                <img src={chatCouple} alt="" aria-hidden="true" className="sbn-chat-couple" />
                <img src={chatTire} alt="" aria-hidden="true" className="sbn-chat-tire" />
              </div>
            </div>
            <span className="sbn-label">CHAT</span>
          </button>
        </div>
        {/* Suppress unused warning */}
        <span hidden>{pathname}</span>
      </nav>
    </>
  );
};

export default SiteBottomNav;
