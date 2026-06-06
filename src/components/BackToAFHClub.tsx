import { Link } from "react-router-dom";

export default function BackToAFHClub() {
  return (
    <div
      style={{
        background: "#2c3a48",
        padding: "20px 24px",
        textAlign: "center",
      }}
    >
      <Link
        to="/afh-club"
        style={{
          fontSize: 12,
          fontFamily: "'Raleway', sans-serif",
          fontWeight: 700,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#e8e2d9",
          textDecoration: "none",
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
        Back to AFH Club
      </Link>
    </div>
  );
}
