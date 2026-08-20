import { Link } from "react-router-dom";

export default function BackToAFHClub() {
  return (
    <div style={{ textAlign: "center", padding: "48px 24px 64px" }}>
      {/* Class deliberately NOT named "BackTo…": index.css rule 15 targets
          [class*="BackTo"] a and forces color #280a0c !important, which is the
          same colour as this button's background. Naming it that way would
          paint the label dark-on-dark — the exact bug this fixes. */}
      <Link
        to="/afh-club"
        className="rpp-afh-return"
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
          fontFamily: "'DM Sans', system-ui, sans-serif",
          fontSize: 18,
          fontWeight: 900,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "#ffffff",
          textDecoration: "none",
          background: "#280a0c",
          border: "2px solid #c3525c",
          padding: "10px 24px",
          borderRadius: 2,
          boxShadow: "inset 0 0 0 1px rgba(201,168,76,0.3), 0 4px 24px rgba(10,22,40,0.18)",
        }}
              >
        ← Back to AFH Club
      </Link>
    </div>
  );
}
