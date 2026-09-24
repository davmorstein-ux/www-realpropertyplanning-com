import { Link } from "react-router-dom";
import { HOMEPAGE_CALCULATOR_CLAIM } from "@/data/calculatorIndex";
import { HOMEPAGE_GUIDE_CLAIM } from "@/data/guideLibrary";

/**
 * One calm, full-width row for the three numbers that prove the hub is
 * substantial (Sept 2026 audits: the figures were scattered as callouts and
 * competed with everything around them). Each figure links to the page that
 * proves it and comes from a data file with a test behind it — see the note
 * in AboutTheHub.tsx for how each number is justified. 6,000 is hardcoded on
 * purpose: counting the directory at runtime would ship 6,000 records for
 * one number.
 */
const STATS = [
  { value: `${HOMEPAGE_GUIDE_CLAIM}+`, label: "guides & articles", href: "/guides-and-resources" },
  { value: `${HOMEPAGE_CALCULATOR_CLAIM}+`, label: "calculators", href: "/calculators" },
  { value: "6,000+", label: "licensed adult family homes", href: "/afh-club/homes" },
  { value: "Free", label: "and independent", href: "/about" },
];

const HomepageTrustBar = () => (
  <section aria-label="What the hub offers" className="rpp-trustbar">
    <ul>
      {STATS.map((s) => (
        <li key={s.href}>
          <Link to={s.href} className="bg-transparent">
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </Link>
        </li>
      ))}
    </ul>
    <style>{`
      /* Quiet on purpose (David, Sept 23: the navy band overpowered the page):
         cream, hairline top and bottom, navy figures, one row. */
      .rpp-trustbar { background: #faf8f4; border-top: 1px solid #e6e0d6; border-bottom: 1px solid #e6e0d6; padding: 0.9rem 1.5rem; }
      .rpp-trustbar ul { list-style: none; margin: 0 auto; padding: 0; max-width: 1100px; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px 20px; }
      @media (min-width: 900px) { .rpp-trustbar ul { grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 12px 28px; } }
      .rpp-trustbar li { margin: 0; text-align: center; }
      .rpp-trustbar a { color: #272421 !important; text-decoration: none !important; display: inline-flex; align-items: baseline; gap: 8px; flex-wrap: wrap; justify-content: center; font-family: 'DM Sans', system-ui, sans-serif; }
      .rpp-trustbar strong { font-size: clamp(18px, 1.5vw, 22px); font-weight: 700; color: #1B3A6B; line-height: 1.1; }
      .rpp-trustbar span { font-size: clamp(13px, 1vw, 15px); line-height: 1.3; color: #4a443e; }
      @media (hover: hover) { .rpp-trustbar a:hover span { text-decoration: underline; text-underline-offset: 3px; } }
    `}</style>
  </section>
);

export default HomepageTrustBar;
