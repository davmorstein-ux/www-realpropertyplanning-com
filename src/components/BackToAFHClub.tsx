import { Link } from "react-router-dom";

export default function BackToAFHClub() {
  return (
    <div
      style={{
        padding: "48px 24px",
        textAlign: "center",
        background: "#f7f4ef",
      }}
    >
      <Link
        to="/afh-club"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 10,
          fontSize: 12,
          fontFamily: "'Raleway', 'Gill Sans', sans-serif",
          fontWeight: 700,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#e8e2d9",
          background: "#2c3a48",
          border: "1px solid #b87333",
          padding: "14px 28px",
          borderRadius: 4,
          textDecoration: "none",
          transition: "background 0.2s ease",
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
