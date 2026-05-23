import { Link, useLocation, useNavigate } from "react-router-dom";
import steeringWheel from "@/assets/nav/steering-wheel.webp";
import gearBoot from "@/assets/nav/gear-boot.webp";
import gearKnob from "@/assets/nav/gear-knob.webp";
import compassIcon from "@/assets/nav/compass.webp";
import roadmapIcon from "@/assets/nav/map-clean.png";
import headlampIcon from "@/assets/nav/headlamps-clean.png";
import chatCouple from "@/assets/chat-couple.png";
import chatTire from "@/assets/chat-tire.png";

/**
 * Sticky bottom navigation bar shown on every page.
 * Six vintage-car-themed icons, all sized 56x56, evenly spaced.
 */
const SiteBottomNav = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const openChat = () => {
    window.dispatchEvent(new Event("rpp-open-chat"));
  };

  return (
    <>
      <style>{`
        .sbn-bar {
          position: fixed;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 9999;
          height: 100px;
          padding: 10px 16px env(safe-area-inset-bottom);
          background-color: rgba(8, 13, 25, 0.78);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-top: 1px solid rgba(255,255,255,0.10);
          box-shadow: 0 -6px 24px rgba(0,0,0,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .sbn-inner {
          width: 100%;
          max-width: 920px;
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
          gap: 6px;
          background: transparent;
          border: 0;
          padding: 4px 2px;
          cursor: pointer;
          text-decoration: none;
          color: #fff;
          font-family: 'DM Sans', system-ui, sans-serif;
          line-height: 1;
        }
        .sbn-item:hover { color: #ffd98a; }
        .sbn-icon-wrap {
          width: 56px;
          height: 56px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .sbn-icon {
          width: 56px;
          height: 56px;
          object-fit: contain;
          display: block;
          background: transparent;
          transition: transform 0.2s ease;
        }
        .sbn-item:hover .sbn-icon { transform: translateY(-2px) scale(1.06); }
        .sbn-label {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.04em;
          color: #fff;
          text-align: center;
          white-space: nowrap;
        }
        .sbn-item:hover .sbn-label { color: #ffd98a; }

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

        /* Gear shifter composite — single visual icon, click halves trigger back/forward */
        .sbn-gear-wrap {
          position: relative;
          width: 56px;
          height: 56px;
        }
        .sbn-gear-boot {
          position: absolute;
          left: 50%;
          bottom: 0;
          transform: translateX(-50%);
          width: 44px;
          height: auto;
          pointer-events: none;
          z-index: 1;
        }
        .sbn-gear-knob {
          position: absolute;
          left: 50%;
          top: 0;
          transform: translateX(-50%);
          width: 28px;
          height: auto;
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

        /* Chat icon with spinning tire on hover */
        .sbn-chat-couple {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          object-fit: cover;
          display: block;
        }
        .sbn-chat-tire {
          position: absolute;
          inset: -4px;
          width: calc(100% + 8px);
          height: calc(100% + 8px);
          object-fit: contain;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.2s ease;
        }
        .sbn-item:hover .sbn-chat-tire {
          opacity: 1;
          animation: sbn-tire-spin 1.4s linear infinite;
        }
        @keyframes sbn-tire-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        @media (max-width: 639px) {
          .sbn-bar { height: 96px; padding: 8px 6px env(safe-area-inset-bottom); }
          .sbn-inner { gap: 0; max-width: 100%; }
          .sbn-label { font-size: 11px; }
        }
      `}</style>

      <nav className="sbn-bar" aria-label="Site bottom navigation">
        <div className="sbn-inner">
          {/* 1. Home */}
          <Link to="/" className="sbn-item" data-tip="Home" aria-label="Home">
            <div className="sbn-icon-wrap">
              <img src={steeringWheel} alt="" aria-hidden="true" className="sbn-icon" loading="lazy" />
            </div>
            <span className="sbn-label">Home</span>
          </Link>

          {/* 2. Back / Forward gear shifter */}
          <div
            className="sbn-item"
            data-tip="Back / Forward"
            role="group"
            aria-label="Back or forward"
          >
            <div className="sbn-gear-wrap sbn-icon-wrap">
              <img src={gearBoot} alt="" aria-hidden="true" className="sbn-gear-boot" />
              <img src={gearKnob} alt="" aria-hidden="true" className="sbn-gear-knob" />
              <button
                type="button"
                className="sbn-gear-half left"
                aria-label="Go back"
                onClick={() => window.history.back()}
              />
              <button
                type="button"
                className="sbn-gear-half right"
                aria-label="Go forward"
                onClick={() => window.history.forward()}
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
            <div className="sbn-icon-wrap">
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
