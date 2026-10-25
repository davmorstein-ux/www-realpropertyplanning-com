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
 * is included"; the navy arrow at the end says "go here". The arrows give one
 * short double nudge to the right soon after the page loads, staggered, then
 * stay still: no endless pulse (distracting for older readers, and WCAG 2.2.2
 * requires a way to stop motion that runs past 5 seconds). Nothing moves under
 * prefers-reduced-motion. Styles are in index.css under .rpp-hero-points.
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
            <Link to={p.to} className="rpp-hero-point-link" style={{ ["--rpp-nudge-delay" as string]: `${900 + i * 140}ms` }}>
              <svg className="rpp-hero-badge" width="30" height="30" viewBox="0 0 30 30" aria-hidden="true">
                <circle cx="15" cy="15" r="15" fill="#9E1F3A" />
                <polyline points="9 15.5 13.2 19.6 21.2 10.8" fill="none" stroke="#ffffff" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {/* The arrow sits inside the text, kept on one line with the last
                  word, so when a point wraps on a narrow phone the
                  arrow follows the text instead of floating at the far edge.
                  It is inline-block, so the text's underline skips it. */}
              <span className="rpp-hero-point-text">
                {head}
                <span className="rpp-hero-point-last">
                  {last}
                  <span className="rpp-hero-arrow" aria-hidden="true">→</span>
                </span>
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
