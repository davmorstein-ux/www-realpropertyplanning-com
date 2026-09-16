import { Link } from "react-router-dom";

/**
 * "Back to Calculators" return button for the three AFH Club calculator pages.
 * Drawn in CSS rather than as an image so the border and arrow can take each
 * page's own accent exactly (cobalt for ROI, green for valuation, orange for
 * cost by location). Class names avoid "btn"/"cta" so the retired maroon
 * global rule does not repaint it; rpp-link-large + rpp-filled size it and
 * make the --rpp-fill background and white text win the cascade.
 */
const BackToCalculators = ({ accent }: { accent: string }) => (
  <Link
    to="/afh-club/calculators"
    className="rpp-link-large rpp-filled no-underline"
    aria-label="Back to Calculators"
    style={{
      ["--rpp-fill" as string]: "#0d1411",
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
      background: "#0d1411",
      color: "#ffffff",
      border: `3px solid ${accent}`,
      borderRadius: 6,
      padding: "10px 22px 10px 18px",
      fontFamily: "Georgia, 'Times New Roman', serif",
      fontWeight: 700,
      letterSpacing: ".04em",
      textTransform: "uppercase",
      textDecoration: "none",
      lineHeight: 1.1,
      boxShadow: `0 0 0 1px ${accent}55, 0 3px 10px rgba(0,0,0,.25)`,
    }}
  >
    <span aria-hidden="true" style={{ color: accent, fontSize: 26, lineHeight: 1, fontFamily: "'DM Sans', system-ui, sans-serif" }}>
      ←
    </span>
    Back to Calculators
  </Link>
);

export default BackToCalculators;
