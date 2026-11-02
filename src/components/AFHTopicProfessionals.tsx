/**
 * "People who help with this" for AFH Club pages (Nov 2, 2026). Same quiet box
 * as the family-side TopicProfessionals: names, firms and a link to the AFH
 * Club directory, no phone numbers. Which groups go where: AFH_TOPIC_GROUPS in
 * src/data/afhProfessionals.ts. Wording follows the directory's listing
 * standard: met in person, a courtesy, nobody pays.
 *
 * Inline styles and an "afh-topic-pros" class: index.css restyles classes
 * containing "card", "cta", "btn", "tile" or "section" and floors h and p sizes.
 */
import { Link, useLocation } from "react-router-dom";
import { afhGroupsForTopic, AFH_HEADSHOT_RING } from "@/data/afhProfessionals";
import RppArrow from "@/components/RppArrow";

const GREEN = AFH_HEADSHOT_RING;
const DIRECTORY = "/afh-club/find-a-professional";

export default function AFHTopicProfessionals() {
  const { pathname } = useLocation();
  const groups = afhGroupsForTopic(pathname);
  if (groups.length === 0) return null;

  return (
    <div style={{ maxWidth: 768, margin: "0 auto", padding: "8px 20px 40px" }}>
      <aside
        data-track-block="people_who_help"
        className="afh-topic-pros"
        aria-label="People who help with this"
        style={{
          background: "#ffffff",
          border: "1px solid #d9d2c7",
          borderTop: `5px solid ${GREEN}`,
          borderRadius: 12,
          padding: "22px 22px 10px",
          textAlign: "left",
          fontFamily: "'DM Sans', 'DM Sans Fallback', system-ui, sans-serif",
          color: "#1c1917",
        }}
      >
        <div role="heading" aria-level={2} style={{ fontSize: 22, fontWeight: 700, color: GREEN, lineHeight: 1.3, margin: "0 0 6px" }}>
          People who help with this
        </div>
        <div style={{ fontSize: 16, lineHeight: 1.5, color: "#1c1917", margin: "0 0 16px" }}>
          Independent professionals the site's founder has met in person. You contact and hire them directly; nobody pays to be listed.
        </div>
        {groups.map((g) => (
          <div key={g.id} style={{ margin: "0 0 16px" }}>
            <div role="heading" aria-level={3} style={{ fontSize: 18, fontWeight: 700, color: "#1c1917", margin: "0 0 8px" }}>
              {g.profession}
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 10 }}>
              {g.people.map((p) => (
                <li key={p.id} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <img
                    src={p.photo}
                    alt=""
                    width={48}
                    height={48}
                    loading="lazy"
                    decoding="async"
                    style={{ width: 48, height: 48, borderRadius: "50%", objectFit: "cover", flex: "0 0 48px", background: "#eee", border: `2px solid ${GREEN}` }}
                  />
                  <div style={{ fontSize: 17, lineHeight: 1.4 }}>
                    <Link to={DIRECTORY} style={{ color: GREEN, fontWeight: 700, textDecoration: "underline", textUnderlineOffset: 3 }}>
                      {p.name}
                    </Link>
                    <div style={{ fontSize: 15, color: "#1c1917" }}>{p.company}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div style={{ fontSize: 16, margin: "0 0 12px" }}>
          <Link to={DIRECTORY} style={{ color: GREEN, fontWeight: 700, textDecoration: "underline", textUnderlineOffset: 3 }}>
            See every AFH Club professional <RppArrow />
          </Link>
        </div>
      </aside>
    </div>
  );
}
