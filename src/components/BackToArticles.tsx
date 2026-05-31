import { Link } from "react-router-dom";

export default function BackToArticles() {
  return (
    <div style={{ textAlign: "center", padding: "48px 24px 64px" }}>
      <Link
        to="/articles"
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
          fontFamily: "'Raleway', 'Gill Sans', sans-serif",
          fontSize: 15,
          fontWeight: 900,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "#ffffff",
          textDecoration: "none",
          background: "#0a1628",
          border: "2px solid #C9A84C",
          padding: "16px 48px",
          borderRadius: 2,
          boxShadow: "inset 0 0 0 1px rgba(201,168,76,0.3), 0 4px 24px rgba(10,22,40,0.18)",
        }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "#1a2a42")}
        onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "#0a1628")}
      >
        ← Back to Featured Articles
      </Link>
    </div>
  );
}
