/**
 * Local guide on a city's directory page: cost, dementia care, nearby cities
 * (Oct 19, 2026). Words and reasons: src/data/afh/cityGuide.ts, shared with the
 * prerendered HTML.
 *
 * Headings are divs with role="heading" and the class avoids "section", "card",
 * "cta", "btn" and "tile": index.css restyles those and floors h and p sizes.
 */
import { Link } from "react-router-dom";
import { countyIndex } from "@/data/afh/directory";
import { cityGuide, type CityGuideInput, type Seg } from "@/data/afh/cityGuide";

const GREEN = "#0a5648";
const NAVY = "#1B3A6B";
const linkStyle: React.CSSProperties = { color: NAVY, fontWeight: 700, textDecoration: "underline", textUnderlineOffset: 3 };

const Segs = ({ segs }: { segs: Seg[] }) => (
  <>
    {segs.map((s, i) =>
      typeof s === "string" ? (
        <span key={i}>{s}</span>
      ) : (
        <Link key={i} to={s.href} style={linkStyle}>
          {s.text}
        </Link>
      ),
    )}
  </>
);

export default function AFHCityGuide({ input, style }: { input: CityGuideInput; style?: React.CSSProperties }) {
  const g = cityGuide(input, countyIndex);
  const h3: React.CSSProperties = { fontSize: 21, fontWeight: 700, lineHeight: 1.3, color: "#1c1917", margin: "26px 0 10px" };
  return (
    <div className="afh-cityguide" style={{ color: "#1c1917", ...style }}>
      <div role="heading" aria-level={2} style={{ fontSize: 26, fontWeight: 700, lineHeight: 1.25, color: GREEN, margin: 0 }}>
        {g.heading}
      </div>
      {g.sections.map((s) => (
        <div key={s.heading}>
          <div role="heading" aria-level={3} style={h3}>
            {s.heading}
          </div>
          {s.paragraphs.map((p, i) => (
            <p key={i} style={{ fontSize: 18, lineHeight: 1.6, margin: "0 0 14px" }}>
              <Segs segs={p} />
            </p>
          ))}
        </div>
      ))}
      {g.nearby.length > 0 && (
        <>
          <div role="heading" aria-level={3} style={h3}>
            Adult family homes near {input.city}
          </div>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 10px", display: "flex", flexWrap: "wrap", gap: "10px 22px" }}>
            {g.nearby.map((n) => (
              <li key={n.href} style={{ fontSize: 18 }}>
                <Link to={n.href} style={linkStyle}>
                  {n.text}
                </Link>
              </li>
            ))}
          </ul>
          <p style={{ fontSize: 18, margin: "0 0 4px" }}>
            <Link to={g.countyLink.href} style={linkStyle}>
              {g.countyLink.text} →
            </Link>
          </p>
        </>
      )}
    </div>
  );
}
