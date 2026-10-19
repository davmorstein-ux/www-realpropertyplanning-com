/**
 * Invitation to My Real Property Plan (/my-plan) from the two big hubs
 * (Oct 19, 2026): the Washington Probate Guide (situation "estate") and
 * Helping an Aging Parent (situation "parent"). The link opens the planner
 * with that situation already chosen (/my-plan#estate: or #parent:).
 *
 * "Your answers stay on your device" is true: the plan lives only in the URL
 * fragment, which browsers never send to a server, and the answers are never
 * sent to analytics or MailerLite (see AGENTS.md, My Plan).
 *
 * Inline styles and a "myplan-invite" class: index.css restyles any class
 * containing "card", "cta", "btn", "tile" or "section".
 */
import { Link } from "react-router-dom";

const COPY = {
  estate: {
    heading: "Want a checklist for your situation?",
    body: "Answer a few quick questions about your role and the house, and get a free step-by-step plan: what to do first, who can sign, and what to do with the house.",
  },
  parent: {
    heading: "Want a checklist for your family?",
    body: "Answer four quick questions about your parent, the house and paying for care, and get a free step-by-step plan for what to do first and what comes next.",
  },
} as const;

export default function MyPlanInvite({ situation, style }: { situation: "estate" | "parent"; style?: React.CSSProperties }) {
  const c = COPY[situation];
  return (
    <aside
      className="myplan-invite"
      aria-label="My Real Property Plan"
      style={{
        maxWidth: 760,
        margin: "0 auto",
        background: "#ffffff",
        border: "2px solid #1B3A6B",
        borderRadius: 14,
        padding: "24px 24px 26px",
        textAlign: "left",
        fontFamily: "'DM Sans', 'DM Sans Fallback', system-ui, sans-serif",
        color: "#1c1917",
        ...style,
      }}
    >
      <div role="heading" aria-level={2} style={{ margin: "0 0 8px", fontSize: 22, fontWeight: 700, color: "#1B3A6B", lineHeight: 1.3 }}>{c.heading}</div>
      <p style={{ margin: "0 0 16px", fontSize: 18, lineHeight: 1.55 }}>{c.body}</p>
      <Link
        to={`/my-plan#${situation}:`}
        style={{
          display: "inline-block",
          background: "#1B3A6B",
          color: "#ffffff",
          fontWeight: 700,
          fontSize: 18,
          padding: "12px 22px",
          borderRadius: 10,
          textDecoration: "none",
        }}
      >
        Make my free plan →
      </Link>
      <div style={{ margin: "12px 0 0", fontSize: 16, lineHeight: 1.5, color: "#44403c" }}>Takes about two minutes. Your answers stay on your device.</div>
    </aside>
  );
}
