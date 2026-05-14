import { useLocation } from "react-router-dom";
import gearShifter from "@/assets/gear-shifter.png";

/**
 * Sticky Reverse / Forward navigation oval, positioned directly below the
 * floating Home button. Hidden on the homepage.
 */
const FloatingNavButtons = () => {
  const { pathname } = useLocation();
  if (pathname === "/") return null;

  const labelStyle: React.CSSProperties = {
    fontWeight: 700,
    fontSize: 18,
    lineHeight: 1,
    color: "#1B2B4B",
    cursor: "pointer",
    textDecoration: "none",
    userSelect: "none",
    background: "transparent",
    border: "none",
    padding: 0,
    fontFamily: "inherit",
  };

  return (
    <>
      <style>{`
        @keyframes shift-left {
          0%   { transform: rotate(0deg); }
          40%  { transform: rotate(-20deg); }
          100% { transform: rotate(0deg); }
        }
        @keyframes shift-right {
          0%   { transform: rotate(0deg); }
          40%  { transform: rotate(20deg); }
          100% { transform: rotate(0deg); }
        }
        .gear-shifter-img {
          transform-origin: bottom center;
          background: transparent;
        }
        .reverse-label:hover ~ .gear-shifter-img {
          animation: shift-left 0.4s ease-in-out;
        }
        .forward-label:hover ~ .gear-shifter-img {
          animation: shift-right 0.4s ease-in-out;
        }
      `}</style>
      <div
        style={{
          position: "fixed",
          bottom: 24 + 64 + 12,
          left: 24,
          zIndex: 999,
          display: "inline-flex",
          alignItems: "center",
          gap: 14,
          padding: "6px 18px",
          background: "#FFF8EC",
          border: "2px solid #8B0000",
          borderRadius: 50,
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        }}
      >
        <button
          type="button"
          className="reverse-label"
          aria-label="Go back"
          onClick={() => window.history.back()}
          style={labelStyle}
        >
          Reverse
        </button>
        <img
          src={gearShifter}
          alt=""
          aria-hidden="true"
          className="gear-shifter-img"
          style={{
            height: 56,
            width: "auto",
            display: "block",
            objectFit: "contain",
            flexShrink: 0,
          }}
        />
        <button
          type="button"
          className="forward-label"
          aria-label="Go forward"
          onClick={() => window.history.forward()}
          style={labelStyle}
        >
          Forward
        </button>
      </div>
    </>
  );
};

export default FloatingNavButtons;
