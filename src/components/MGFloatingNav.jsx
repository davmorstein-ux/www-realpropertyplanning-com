import { useNavigate } from "react-router-dom";
import steeringWheel from "@/assets/steering-wheel-transparent.png";
import gearShifter from "@/assets/gear_shifter_top.png";
import coupleImg from "@/assets/chat-couple.png";

/**
 * MGFloatingNav — Classic MG-themed sticky navigation bar
 * Fixed to bottom-center of viewport on all pages.
 *
 * Props:
 *   homeImage       — path to steering wheel image
 *   gearImage       — path to gear shifter image
 *   coupleImage     — path to couple photo image
 *   onBack          — function for back navigation (defaults to window.history.back)
 *   onForward       — function for forward navigation (defaults to window.history.forward)
 *   onChat          — function for chat button click
 */
export default function MGFloatingNav({
  homeImage = steeringWheel,
  gearImage = gearShifter,
  coupleImage = coupleImg,
  onBack = () => window.history.back(),
  onForward = () => window.history.forward(),
  onChat = () => {},
}) {
  const navigate = useNavigate();

  return (
    <>
      {/* ── Scoped styles — no global leakage ── */}
      <style>{`
        .mg-nav-bar {
          position: fixed;
          bottom: 24px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 9999;

          /* FULLY SOLID — no transparency anywhere */
          background-color: #1e3355;
          opacity: 1;

          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;

          padding: 10px 18px;
          border-radius: 999px;
          box-shadow: 0 6px 24px rgba(0, 0, 0, 0.55);

          /* Prevent any bleed-through */
          isolation: isolate;
          overflow: visible;
        }

        /* ── Shared button base ── */
        .mg-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          border: 2.5px solid #7a1a1a;
          /* FULLY SOLID cream background */
          background-color: #f0ebe0;
          flex-shrink: 0;
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }

        .mg-btn:hover {
          transform: scale(1.07);
          box-shadow: 0 4px 12px rgba(0,0,0,0.35);
        }

        .mg-btn:active {
          transform: scale(0.97);
        }

        /* ── Button 1: Steering wheel (Home) ── */
        .mg-btn-home {
          width: 72px;
          height: 72px;
          border-radius: 50%;
        }

        .mg-btn-home img {
          width: 46px;
          height: 46px;
          object-fit: contain;
          display: block;
        }

        .mg-btn-home .mg-label {
          font-size: 11px;
          font-weight: 700;
          color: #1e3355;
          margin-top: 2px;
          letter-spacing: 0.05em;
          line-height: 1;
        }

        /* ── Button 2: Gear shifter (Back / Forward) ── */
        .mg-btn-gear {
          width: 96px;
          height: 72px;
          border-radius: 36px;
          flex-direction: row;
          gap: 0;
          padding: 0 6px;
          justify-content: space-between;
          position: relative;
        }

        .mg-gear-label {
          font-size: 15px;
          font-weight: 900;
          color: #1e3355;
          flex-shrink: 0;
          width: 18px;
          text-align: center;
          cursor: pointer;
          user-select: none;
          line-height: 1;
        }

        .mg-gear-label:hover {
          color: #7a1a1a;
        }

        .mg-btn-gear img {
          width: 36px;
          height: 52px;
          object-fit: contain;
          display: block;
          flex-shrink: 0;
        }

        /* ── Button 3: Couple photo (Chat) ── */
        .mg-btn-chat {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          padding: 0;
          overflow: hidden;
          border: 3px solid #7a1a1a;
          background-color: #1e3355; /* fallback if image fails */
        }

        .mg-btn-chat img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          border-radius: 50%;
        }
      `}</style>

      <nav className="mg-nav-bar" aria-label="Quick navigation">

        {/* ── Button 1: Home ── */}
        <button
          className="mg-btn mg-btn-home"
          onClick={() => navigate("/")}
          aria-label="Go to Home"
          title="Home"
        >
          <img src={homeImage} alt="Steering wheel" />
          <span className="mg-label">Home</span>
        </button>

        {/* ── Button 2: Gear shifter (R = Back, F = Forward) ── */}
        <div className="mg-btn mg-btn-gear" aria-label="Page navigation">
          <span
            className="mg-gear-label"
            onClick={onBack}
            title="Go back"
            aria-label="Go back"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && onBack()}
          >
            R
          </span>
          <img src={gearImage} alt="Gear shifter" />
          <span
            className="mg-gear-label"
            onClick={onForward}
            title="Go forward"
            aria-label="Go forward"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && onForward()}
          >
            F
          </span>
        </div>

        {/* ── Button 3: Couple / Chat ── */}
        <button
          className="mg-btn mg-btn-chat"
          onClick={onChat}
          aria-label="Open chat"
          title="Chat with us"
        >
          <img src={coupleImage} alt="Chat" />
        </button>

      </nav>
    </>
  );
}
