/**
 * "What to read next" at the end of each of the six estate topic pages
 * (Oct 20, 2026, David's go on the visitor-journey review).
 *
 * Before this, the six pages ended on the professionals box or the disclaimer;
 * the step list existed only at the top. First Steps After a Death, the most
 * likely first click from the homepage estate tile, gave a reader in the worst
 * week of their year no next step. Now each page points to the next topic in
 * estateProbateTopics, and the last one offers My Real Property Plan.
 *
 * Inline styles and an "estate-readnext" class: index.css restyles classes
 * containing "card", "cta", "btn", "tile" or "section", forces <a> to 16px
 * (rpp-link-large is the exemption, 20px bold) and floors h and p sizes.
 */
import { Link } from "react-router-dom";
import { estateProbateTopics } from "@/lib/estateProbateTopics";

const NAVY = "#1B3A6B";
const HUB = "/estate-probate-inherited-property";

export default function EstateReadNext({ path, style }: { path: string; style?: React.CSSProperties }) {
  const i = estateProbateTopics.findIndex((t) => t.href === path);
  if (i === -1) return null;
  const next = estateProbateTopics[i + 1];
  const total = estateProbateTopics.length;

  return (
    /* A <div role="navigation">, not <nav>: index.css lays out nav elements
       inside main as a flex row, which put the heading, step and links side by
       side in a narrow column on phones. */
    <div
      role="navigation"
      className="estate-readnext"
      aria-label="What to read next"
      style={{
        background: "#ffffff",
        border: "1px solid #d9d2c7",
        borderLeft: `5px solid ${NAVY}`,
        borderRadius: 12,
        padding: "22px 22px 20px",
        fontFamily: "'DM Sans', 'DM Sans Fallback', system-ui, sans-serif",
        color: "#1c1917",
        display: "block",
        ...style,
      }}
    >
      <div role="heading" aria-level={2} style={{ fontSize: 22, fontWeight: 700, color: NAVY, lineHeight: 1.3, margin: "0 0 10px" }}>
        What to read next
      </div>
      {next ? (
        <>
          <div style={{ fontSize: 16, color: "#44403c", margin: "0 0 4px" }}>
            Step {i + 2} of {total}
          </div>
          <Link to={next.href} className="rpp-link-large" style={{ color: NAVY }}>
            {next.title} →
          </Link>
        </>
      ) : (
        <>
          <div style={{ fontSize: 18, lineHeight: 1.55, margin: "0 0 8px" }}>
            You've reached the last of the six topics. For a checklist that fits your situation, answer a few
            questions about your role and the house.
          </div>
          <Link to="/my-plan#estate:" className="rpp-link-large" style={{ color: NAVY }}>
            Make my free step-by-step plan →
          </Link>
        </>
      )}
      <div style={{ margin: "14px 0 0" }}>
        <Link to={HUB} style={{ color: NAVY }}>
          See all {total} estate topics
        </Link>
      </div>
    </div>
  );
}
