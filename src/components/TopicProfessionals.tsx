/**
 * "People who help with this": the featured professionals for one topic page,
 * shown at the end of the three homepage paths (Oct 20, 2026). Which categories
 * go where: src/data/topicProfessionals.ts. The people: familyProfessionals.ts.
 *
 * Deliberately quiet: names, firms and a link to each category page, no phone
 * numbers and no "contact us". The estate pages removed their CTA bands
 * because readers arrive in distress; this lists who exists, it doesn't pitch.
 * Wording matches the directory: met in person, hired directly, nobody pays.
 *
 * Inline styles and a "topic-pros" class: index.css restyles classes containing
 * "card", "cta", "btn", "tile" or "section" and floors h and p sizes.
 */
import { Link } from "react-router-dom";
import { professionalGroup, type CategoryGroup } from "@/data/familyProfessionals";
import { professionalsForTopic } from "@/data/topicProfessionals";
import { FEATURED_BROKER, FEATURED_BROKER_IS_FOUNDER } from "@/data/featuredProfessionals";

import RppArrow from "@/components/RppArrow";
const NAVY = "#1B3A6B";

export default function TopicProfessionals({ path, style }: { path: string; style?: React.CSSProperties }) {
  const groups = professionalsForTopic(path)
    .map(professionalGroup)
    .filter((g): g is CategoryGroup => !!g && g.professionals.length > 0);
  if (groups.length === 0) return null;
  const showsFounder = FEATURED_BROKER_IS_FOUNDER && groups.some((g) => g.key === "realEstate");

  return (
    <aside
      data-track-block="people_who_help"
      className="topic-pros"
      aria-label="People who help with this"
      style={{
        background: "#ffffff",
        border: "1px solid #d9d2c7",
        borderTop: `5px solid ${NAVY}`,
        borderRadius: 12,
        padding: "22px 22px 10px",
        textAlign: "left",
        fontFamily: "'DM Sans', 'DM Sans Fallback', system-ui, sans-serif",
        color: "#1c1917",
        ...style,
      }}
    >
      <div role="heading" aria-level={2} style={{ fontSize: 22, fontWeight: 700, color: NAVY, lineHeight: 1.3, margin: "0 0 6px" }}>
        People who help with this
      </div>
      <div style={{ fontSize: 16, lineHeight: 1.5, color: "#1c1917", margin: "0 0 16px" }}>
        Independent professionals the site's founder has met in person. You contact and hire them directly; nobody pays to be listed.
      </div>
      {groups.map((g) => (
        <div key={g.key} style={{ margin: "0 0 16px" }}>
          <div role="heading" aria-level={3} style={{ fontSize: 18, fontWeight: 700, color: "#1c1917", margin: "0 0 8px" }}>
            {g.category}
          </div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 10 }}>
            {g.professionals.map((p) => (
              <li key={`${p.name}-${p.href}`} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <img
                  src={p.photo}
                  alt=""
                  width={48}
                  height={48}
                  loading="lazy"
                  decoding="async"
                  style={{ width: 48, height: 48, borderRadius: "50%", objectFit: "cover", flex: "0 0 48px", background: "#eee" }}
                />
                <div style={{ fontSize: 17, lineHeight: 1.4 }}>
                  <Link to={p.href} style={{ color: NAVY, fontWeight: 700, textDecoration: "underline", textUnderlineOffset: 3 }}>
                    {p.name}
                    {p.name2 ? ` & ${p.name2}` : ""}
                  </Link>
                  <div style={{ fontSize: 15, color: "#1c1917" }}>
                    {p.role2 ? `${p.role} & ${p.role2}` : p.role}, {p.company}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
      {showsFounder && (
        <div style={{ fontSize: 15, lineHeight: 1.5, color: "#1c1917", margin: "0 0 12px" }}>
          {FEATURED_BROKER.name}, listed under Real Estate &amp; Appraisal, is the founder of Real Property Planning.
        </div>
      )}
      <div style={{ fontSize: 16, margin: "0 0 12px" }}>
        <Link to="/featured-professionals" style={{ color: NAVY, fontWeight: 700, textDecoration: "underline", textUnderlineOffset: 3 }}>
          See every featured professional <RppArrow />
        </Link>
      </div>
    </aside>
  );
}
