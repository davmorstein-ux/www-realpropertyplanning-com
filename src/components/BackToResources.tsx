import { useState } from "react";
import { Link } from "react-router-dom";

interface BackToResourcesProps {
  /** Button text. Defaults to generic wording that is accurate from any
   *  entry point — a reader arriving from Google was never "at" resources,
   *  so "Back to" would be a false claim for them. */
  label?: string;
  /** Destination. Pass a #fragment to land on a specific category section
   *  rather than the top of the guides index. */
  href?: string;
}

/**
 * WHY THIS IS NO LONGER AN IMAGE
 *
 * This component previously rendered /back-to-resources.webp — a picture of
 * the words "← Back to Resources". Three problems came with that:
 *
 * 1. TRANSLATION. The site runs i18next across seven languages. An image
 *    cannot be translated, so every non-English visitor saw English text on
 *    this button.
 *
 * 2. ZOOM AND CONTRAST. A reader at 200% zoom got blurred pixels instead of
 *    larger crisp text, and browser font-size preferences were ignored.
 *    WCAG 1.4.5 (Images of Text, AA) exists for this reason, and it matters
 *    more than usual for this site's audience.
 *
 * 3. WORDING. Changing the label meant commissioning a new graphic and
 *    keeping the alt text in sync with it.
 *
 * The styling below reproduces the navy-and-gold plate from the original
 * image using real text, so it scales, translates, and recolours normally.
 */
export default function BackToResources({
  label = "Explore More Guides",
  href = "/guides-and-resources",
}: BackToResourcesProps) {
  const [hover, setHover] = useState(false);

  return (
    <div style={{ textAlign: "center", padding: "48px 24px 64px" }}>
      <Link
        to={href}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onFocus={() => setHover(true)}
        onBlur={() => setHover(false)}
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 14,
          maxWidth: 480,
          width: "100%",
          minHeight: 56,
          padding: "16px 32px",
          boxSizing: "border-box",

          /* Navy plate with the gold double-rule from the original artwork */
          background: hover
            ? "linear-gradient(180deg, #1a3a63 0%, #12294a 55%, #0d1f3a 100%)"
            : "linear-gradient(180deg, #16335a 0%, #0f2547 55%, #0b1c35 100%)",
          border: "3px solid #c9a84c",
          borderRadius: 4,
          boxShadow: hover
            ? "0 0 0 1px #8a7233, 0 6px 18px rgba(0,0,0,0.28), inset 0 0 0 1px rgba(201,168,76,0.55)"
            : "0 0 0 1px #8a7233, 0 3px 10px rgba(0,0,0,0.22), inset 0 0 0 1px rgba(201,168,76,0.4)",

          /* Real text — scales with zoom, translates, inherits user settings */
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontSize: 21,
          fontWeight: 700,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "#ffffff",
          textDecoration: "none",
          textAlign: "center",
          lineHeight: 1.25,

          transform: hover ? "translateY(-2px)" : "translateY(0)",
          transition: "transform 0.25s ease, background 0.25s ease, box-shadow 0.25s ease",
        }}
      >
        <span>{label}</span>
        <span
          aria-hidden="true"
          style={{
            color: "#d1a847",
            fontSize: 24,
            lineHeight: 1,
            transform: hover ? "translateX(4px)" : "translateX(0)",
            transition: "transform 0.25s ease",
          }}
        >
          →
        </span>
      </Link>
    </div>
  );
}
