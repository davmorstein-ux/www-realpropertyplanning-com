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
 * Each point is a link. Garnet check badge (the logo door's colour; a thin ring since Nov 13, 2026) says "this
 * is included". The text arrows that used to end each line were removed (David,
 * Oct 25, 2026: "look cheap"); instead the check itself turns into an arrow:
 * the check rotates a quarter-turn and fades as an arrow in the same
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
const ICONS: Record<string, JSX.Element> = {
  // open book
  "/guides-and-resources": <><path d="M3 5.5c3-1.2 6-1.2 9 .8 3-2 6-2 9-.8V19c-3-1.2-6-1.2-9 .8-3-2-6-2-9-.8z" /><path d="M12 6.3v13.5" /></>,
  // calculator
  "/calculators": <><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M8 7h8" /><path d="M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01M8.5 15h.01M12 15h.01M15.5 15h.01M8.5 18h.01M12 18h.01M15.5 18h.01" strokeWidth="2.4" /></>,
  // envelope
  "/newsletter": <><rect x="3" y="5.5" width="18" height="13" rx="2" /><path d="M3.5 7l8.5 6 8.5-6" /></>,
  // person
  "/featured-professionals": <><circle cx="12" cy="8" r="3.6" /><path d="M4.8 20c.8-3.7 3.7-5.8 7.2-5.8s6.4 2.1 7.2 5.8" /></>,
};

const POINTS = [
  { key: "hero.point1", n: HOMEPAGE_GUIDE_CLAIM, to: "/guides-and-resources" },
  { key: "hero.point2", n: HOMEPAGE_CALCULATOR_CLAIM, to: "/calculators" },
  // Newsletter before professionals (David, Oct 25, 2026).
  { key: "hero.point4", to: "/newsletter" },
  { key: "hero.point3", to: "/featured-professionals" },
] as const;

/**
 * Oct 27, 2026: rendered once, inside the homepage "about" section (AboutTheHub.tsx), right
 * under "Real Property Planning is a free, independent place to start." (David): the four
 * points are the proof of that sentence. Earlier the same day it sat under the headline,
 * then after the journey tiles.
 */
export default function HomepagePoints() {
  const { t } = useTranslation();
  return (
    <ul className="rpp-hero-points rpp-hero-points--about" aria-label="What the site offers">
      {POINTS.map((p, i) => {
        const text = "n" in p ? t(p.key, { n: p.n }) : t(p.key);
        const cut = text.lastIndexOf(" ") + 1;
        const head = text.slice(0, cut);
        const last = text.slice(cut);
        return (
          <li key={p.to} className="rpp-hero-point">
            <Link to={p.to} className="rpp-hero-point-link" style={{ ["--rpp-nudge-delay" as string]: `${1800 + i * 600}ms` }}>
              {/* Nov 21, 2026 (David): small line icons instead of arrow badges, so the
                  screen isn't a run of garnet arrows; the arrows stay on the cards. */}
              <svg className="rpp-hero-badge rpp-hero-icon" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true"
                fill="none" stroke="#6b6158" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                {ICONS[p.to]}
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
