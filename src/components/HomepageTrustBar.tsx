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
            <span className="rpp-trustbar-arrow" aria-hidden="true">→</span>
          </Link>
        </li>
      ))}
    </ul>
    <style>{`
      /* Quiet, but obviously clickable (David, Sept 23): each figure is a
         bordered pill with an arrow, on a cream hairline row. */
      .rpp-trustbar { background: transparent; border-top: 1px solid #e6e0d6; border-bottom: 1px solid #e6e0d6; padding: 1rem 1.5rem; }
      .rpp-trustbar ul { list-style: none; margin: 0 auto; padding: 0; max-width: 1100px; display: flex; flex-wrap: wrap; justify-content: center; gap: 10px 14px; }
      .rpp-trustbar li { margin: 0; }
      .rpp-trustbar a { display: inline-flex; align-items: baseline; gap: 6px; white-space: nowrap; padding: 9px 16px; border: 1.5px solid #1B3A6B; border-radius: 999px; background: #fff; color: #1B3A6B !important; text-decoration: none !important; font-family: 'DM Sans', system-ui, sans-serif; font-size: 15px; font-weight: 600; transition: background 0.15s, color 0.15s; }
      .rpp-trustbar strong { font-size: 18px; font-weight: 700; }
      .rpp-trustbar .rpp-trustbar-arrow { margin-left: 2px; }
      @media (hover: hover) { .rpp-trustbar a:hover { background: #1B3A6B; color: #fff !important; } }
      @media (max-width: 480px) { .rpp-trustbar a { white-space: normal; font-size: 14px; padding: 8px 14px; } }
    `}</style>
  </section>
);

export default HomepageTrustBar;
