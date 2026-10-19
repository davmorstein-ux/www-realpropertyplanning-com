/**
 * "Where to go next" box on the licensed-home directory: each home's page and
 * each city's list (Oct 19, 2026). Links and reasons: src/data/afh/nextSteps.ts.
 *
 * Inline styles and an "afh-next" class: index.css restyles any class
 * containing "card", "cta", "btn", "tile" or "section", and sets size floors
 * on p and h tags, so headings here are divs with role="heading".
 */
import { Link } from "react-router-dom";
import { directoryNextSteps } from "@/data/afh/nextSteps";

const GREEN = "#0a5648";
const NAVY = "#1B3A6B";

export default function AFHDirectoryNextSteps({ city, style }: { city?: string; style?: React.CSSProperties }) {
  const groups = directoryNextSteps(city);
  return (
    <aside
      className="afh-next"
      aria-label="Where to go next"
      style={{
        border: `1px solid #d5e0da`,
        borderTop: `5px solid ${GREEN}`,
        borderRadius: 12,
        background: "#ffffff",
        padding: "22px 22px 8px",
        fontFamily: "'DM Sans', 'DM Sans Fallback', system-ui, sans-serif",
        color: "#1c1917",
        ...style,
      }}
    >
      <style>{`
        .afh-next .afh-next-grid { display: grid; grid-template-columns: 1fr; gap: 8px 32px; }
        @media (min-width: 760px) { .afh-next .afh-next-grid { grid-template-columns: 1fr 1fr; } }
        .afh-next .afh-next-link { color: ${NAVY}; font-weight: 700; font-size: 18px; text-decoration: underline; text-underline-offset: 3px; }
        .afh-next .afh-next-link.afh-next-link:hover { color: ${GREEN} !important; }
      `}</style>
      <div
        role="heading"
        aria-level={2}
        style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: GREEN, margin: "0 0 14px" }}
      >
        Where to go next
      </div>
      <div className="afh-next-grid">
        {groups.map((g) => (
          <div key={g.heading}>
            <div role="heading" aria-level={3} style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.3, color: "#1c1917", margin: "0 0 10px" }}>
              {g.heading}
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 14px" }}>
              {g.links.map((l) => (
                <li key={l.href} style={{ margin: "0 0 14px" }}>
                  <Link to={l.href} className="afh-next-link" style={{ color: NAVY }}>
                    {l.label}
                  </Link>
                  <div style={{ fontSize: 16, lineHeight: 1.5, color: "#44403c", marginTop: 2 }}>{l.note}</div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
}
