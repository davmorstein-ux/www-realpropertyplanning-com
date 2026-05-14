import { Link, useLocation } from "react-router-dom";
import steeringWheel from "@/assets/steering-wheel-home.webp";

/**
 * Fixed bottom-left floating Home button.
 * Hidden on the homepage ("/").
 */
const FloatingHomeButton = () => {
  const { pathname } = useLocation();
  if (pathname === "/") return null;

  return (
    <Link
      to="/"
      aria-label="Home"
      style={{
        position: "fixed",
        bottom: 24,
        left: 24,
        zIndex: 999,
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        padding: "14px 20px",
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
        width={52}
        height={52}
        style={{ width: 52, height: 52, display: "block", objectFit: "contain" }}
      />
      <span>Home</span>
    </Link>
  );
};

export default FloatingHomeButton;
