import { Link, useLocation } from "react-router-dom";
import { articleRecordFor } from "@/data/articleRecords";

/**
 * Publication record under a guide's author byline: dates, what changed, and
 * primary sources, from src/data/articleRecords.ts (Sept 28, 2026). Renders
 * nothing for a page without a record. Rules for records are in that file.
 */
const fmt = (iso: string) =>
  new Date(iso + "T12:00:00").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

const label: React.CSSProperties = {
  fontSize: 13,
  fontWeight: 700,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "#4a443e",
  margin: "18px 0 8px",
};
const text: React.CSSProperties = { margin: 0, fontSize: 16, lineHeight: 1.65, color: "#2b2825" };
const link: React.CSSProperties = { color: "#1a365d", textDecoration: "underline", textUnderlineOffset: 3 };

export default function ArticleRecord() {
  const { pathname } = useLocation();
  const rec = articleRecordFor(pathname);
  if (!rec) return null;

  return (
    <div className="rpp-article-record" style={{ borderTop: "1px solid #e2ddd5", marginTop: 16, paddingTop: 4 }}>
      <p style={{ ...text, marginTop: 12 }}>
        {rec.published && (
          <>
            First published {fmt(rec.published)}
            {" · "}
          </>
        )}
        Last reviewed against its sources {fmt(rec.reviewed)}
      </p>

      {rec.changes.length > 0 && (
        <>
          <p style={label}>What changed</p>
          <ul style={{ margin: 0, paddingLeft: 20 }}>
            {rec.changes.map((c) => (
              <li key={c.date + c.text.slice(0, 20)} style={{ ...text, marginBottom: 6 }}>
                <strong>{fmt(c.date)}:</strong> {c.text}
              </li>
            ))}
          </ul>
        </>
      )}

      <p style={label}>Primary sources</p>
      <ul style={{ margin: 0, paddingLeft: 20 }}>
        {rec.sources.map((s) => (
          <li key={s.label} style={{ ...text, marginBottom: 6 }}>
            {s.href ? (
              <a href={s.href} target="_blank" rel="noopener noreferrer" style={link}>
                {s.label}
              </a>
            ) : (
              s.label
            )}
          </li>
        ))}
      </ul>

      <p style={{ ...text, marginTop: 14, fontSize: 15 }}>
        Found an error?{" "}
        <Link to="/corrections-policy" style={link}>
          How to report it
        </Link>
        .
      </p>
    </div>
  );
}
