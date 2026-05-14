import { Link, useLocation } from "react-router-dom";
import steeringWheel from "@/assets/steering-wheel-transparent.png";

/**
 * Fixed bottom-left floating Home button.
 * Hidden on the homepage ("/").
 */
const FloatingHomeButton = () => {
  const { pathname } = useLocation();
  if (pathname === "/") return null;

  return (
    <>
      <style>{`
        @keyframes steer-shake {
          0%   { transform: rotate(0deg); }
          20%  { transform: rotate(-18deg); }
          40%  { transform: rotate(18deg); }
          60%  { transform: rotate(-12deg); }
          80%  { transform: rotate(12deg); }
          100% { transform: rotate(0deg); }
        }
        .home-button:hover .steering-wheel-img {
          animation: steer-shake 0.5s ease-in-out;
        }
        .steering-wheel-img {
          transform-origin: center center;
          background: transparent;
        }
      `}</style>
      <Link
        to="/"
        aria-label="Home"
        className="home-button"
        style={{
          position: "fixed",
          bottom: 24 + 68 + 8,
          left: 24,
          zIndex: 999,
          display: "inline-flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 4,
          padding: "8px 12px",
          background: "#FFF8EC",
          border: "2px solid #8B0000",
          borderRadius: 50,
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          textDecoration: "none",
          color: "#1B2B4B",
          fontWeight: 700,
          fontSize: 18,
          lineHeight: 1,
        }}
      >
        <img
          src={steeringWheel}
          alt=""
          aria-hidden="true"
          width={64}
          height={64}
          className="steering-wheel-img"
          style={{ width: 64, height: 64, display: "block", objectFit: "contain", background: "transparent", flexShrink: 0 }}
        />
        <span style={{ textAlign: "center" }}>Home</span>
      </Link>
    </>
  );
};

export default FloatingHomeButton;
