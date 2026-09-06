import { Link } from "react-router-dom";

/**
 * Visible byline for AFH guide pages.
 *
 * The Article schema on these pages names David Stein as author. Search and AI
 * engines discount schema that has no visible counterpart, so this renders the
 * same claim in prose: who wrote it, what licenses they hold, and where to read
 * more. The license numbers match src/lib/schema.ts exactly.
 */
export default function AuthorByline({ reviewed }: { reviewed?: string }) {
  return (
    <aside
      aria-label="About the author"
      style={{
        maxWidth: 760,
        margin: "40px auto 0",
        padding: "22px 24px",
        border: "1px solid #d9dede",
        borderRadius: 12,
        background: "#fafaf8",
        fontFamily: "'DM Sans', system-ui, sans-serif",
        color: "#342e28",
        lineHeight: 1.7,
      }}
    >
      <p
        style={{
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "#a8892f",
          margin: "0 0 8px",
        }}
      >
        About the author
      </p>
      <p style={{ margin: 0, fontSize: 17 }}>
        <strong>David Stein</strong> is a Washington State licensed real estate broker (eXp Realty,
        license #133972) and a Washington State certified residential appraiser (Stein Appraisal,
        license #1702080). He has more than 20 years of experience in both disciplines and works
        directly with adult family home buyers, sellers, and operators across the Puget Sound
        region.{reviewed ? ` This guide was last reviewed ${reviewed}.` : ""}{" "}
        <Link to="/about" style={{ color: "#1a365d", textDecoration: "underline" }}>
          More about David
        </Link>
        .
      </p>
    </aside>
  );
}
