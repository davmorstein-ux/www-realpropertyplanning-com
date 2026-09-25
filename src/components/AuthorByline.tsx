import { Link } from "react-router-dom";
import { FEATURED_BROKER, FEATURED_APPRAISER, SAME_PERSON } from "@/data/featuredProfessionals";

/**
 * Visible byline for AFH guide pages.
 *
 * The Article schema on these pages names the featured broker as author. Search and AI
 * engines discount schema that has no visible counterpart, so this renders the
 * same claim in prose: who wrote it, what licenses they hold, and where to read
 * more. Name and license numbers come from src/data/featuredProfessionals.ts, the
 * same source schema.ts reads, so the two cannot disagree.
 */
/**
 * `context` picks the one sentence about what the author does: AFH guides
 * (default) or the family-side probate, estate and inherited-property guides
 * (Sept 25, 2026: every competitor outranking those guides names a licensed
 * author on the page; the Article schema already did, the page did not).
 */
export default function AuthorByline({ reviewed, context = "afh" }: { reviewed?: string; context?: "afh" | "estate" }) {
  const focus =
    context === "estate"
      ? "works with executors, trustees, heirs, and attorneys on probate, estate, and inherited-property sales across Washington State, and has valued and sold estate homes in every condition"
      : "works directly with adult family home buyers, sellers, and operators across the Puget Sound region";
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
        <strong>{FEATURED_BROKER.name}</strong> is a Washington State licensed real estate broker (
        {FEATURED_BROKER.brokerage}, license #{FEATURED_BROKER.licenseNumber})
        {SAME_PERSON
          ? ` and a Washington State certified residential appraiser (${FEATURED_APPRAISER.firm}, license #${FEATURED_APPRAISER.licenseNumber}). He has more than ${FEATURED_BROKER.yearsExperience} years of experience in both disciplines`
          : `. He has more than ${FEATURED_BROKER.yearsExperience} years of experience`}{" "}
        and {focus}.{reviewed ? ` This guide was last reviewed ${reviewed}.` : ""}{" "}
        <Link to="/about" style={{ color: "#1a365d", textDecoration: "underline" }}>
          More about {FEATURED_BROKER.firstName}
        </Link>
        .
      </p>
    </aside>
  );
}
