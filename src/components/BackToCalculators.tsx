import { Link } from "react-router-dom";

/**
 * "Back to Calculators" return button for the three AFH Club calculator pages.
 * Flat navy like every other button (Oct 21, 2026); the accent prop is kept
 * so the three pages need no change, but no longer colours the button. Class names avoid "btn"/"cta" so the retired maroon
 * global rule does not repaint it; rpp-link-large + rpp-filled size it and
 * make the --rpp-fill background and white text win the cascade.
 */
const BackToCalculators = ({ accent }: { accent: string }) => (
  <Link
    to="/afh-club/calculators"
    className="rpp-link-large rpp-filled no-underline"
    aria-label="Back to Calculators"
    style={{
      ["--rpp-fill" as string]: "#1B3A6B",
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
      background: "#1B3A6B",
      color: "#ffffff",
      border: "2px solid #1B3A6B",
      borderRadius: 10,
      padding: "10px 22px 10px 18px",
      fontFamily: "Georgia, 'Times New Roman', serif",
      fontWeight: 700,
      letterSpacing: ".04em",
      textTransform: "uppercase",
      textDecoration: "none",
      lineHeight: 1.1,
      boxShadow: "none",
    }}
  >
    <span aria-hidden="true" style={{ color: "#ffffff", fontSize: 26, lineHeight: 1, fontFamily: "'DM Sans', 'DM Sans Fallback', system-ui, sans-serif" }}>
      ←
    </span>
    Back to Calculators
  </Link>
);

export default BackToCalculators;
