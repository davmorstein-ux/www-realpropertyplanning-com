import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { HOMEPAGE_CALCULATOR_CLAIM } from "@/data/calculatorIndex";
import { HOMEPAGE_GUIDE_CLAIM } from "@/data/guideLibrary";

/**
 * The four points under the homepage artwork (Oct 25, 2026).
 *
 * They replaced the "What this hub includes" pill row (HomepageTrustBar), which
 * repeated three of them lower on the page. The pills' numbers moved up into
 * the points; the "6,000+ licensed adult family homes" and "Free and
 * independent" pills were dropped (AFH Club has its own tile; "free" is in two
 * of the points and About is in the menu).
 *
 * Each point is a link. Garnet check badge (the logo door's colour) says "this
 * is included". The text arrows that used to end each line were removed (David,
 * Oct 25, 2026: "look cheap"); instead the check itself turns into an arrow:
 * the check rotates a quarter-turn and fades as a white arrow in the same
 * stroke turns into place. It does this once soon after the page loads,
 * staggered across the four badges, and then stays an arrow (David: turning
 * back would be too much animation). No other motion. Under
 * prefers-reduced-motion the arrows simply show from the start.
 * Styles are in index.css under .rpp-hero-points.
 *
 * The guide and calculator figures come from their data files, each with a
 * test that fails if the site holds fewer than the homepage claims — never
 * type a number here.
 */
const POINTS = [
  { key: "hero.point1", n: HOMEPAGE_GUIDE_CLAIM, to: "/guides-and-resources" },
  { key: "hero.point2", n: HOMEPAGE_CALCULATOR_CLAIM, to: "/calculators" },
  { key: "hero.point3", to: "/featured-professionals" },
  { key: "hero.point4", to: "/newsletter" },
] as const;

export default function HomepagePoints() {
  const { t } = useTranslation();
  return (
    <ul className="rpp-hero-points" aria-label="What the site offers">
      {POINTS.map((p, i) => {
        const text = "n" in p ? t(p.key, { n: p.n }) : t(p.key);
        const cut = text.lastIndexOf(" ") + 1;
        const head = text.slice(0, cut);
        const last = text.slice(cut);
        return (
          <li key={p.to} className="rpp-hero-point">
            <Link to={p.to} className="rpp-hero-point-link" style={{ ["--rpp-nudge-delay" as string]: `${1000 + i * 220}ms` }}>
              <svg className="rpp-hero-badge" width="30" height="30" viewBox="0 0 30 30" aria-hidden="true">
                <circle cx="15" cy="15" r="15" fill="#9E1F3A" />
                <g fill="none" stroke="#ffffff" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                  <polyline className="rpp-badge-check" points="9 15.5 13.2 19.6 21.2 10.8" />
                  <g className="rpp-badge-arrow">
                    <line x1="8.5" y1="15" x2="21" y2="15" />
                    <polyline points="16 10 21 15 16 20" />
                  </g>
                </g>
              </svg>
              <span className="rpp-hero-point-text">
                {head}
                <span className="rpp-hero-point-last">{last}</span>
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
