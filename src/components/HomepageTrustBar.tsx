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
  { value: `${HOMEPAGE_GUIDE_CLAIM}+`, label: "plain-language guides & articles", href: "/guides-and-resources" },
  { value: `${HOMEPAGE_CALCULATOR_CLAIM}+`, label: "calculators & planning tools", href: "/calculators" },
  { value: "6,000+", label: "licensed adult family homes in the statewide directory", href: "/afh-club/homes" },
  { value: "Free", label: "independent, and no services sold", href: "/about" },
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
      .rpp-trustbar { background: #1B3A6B; color: #fff; padding: 1.5rem 1.5rem; }
      .rpp-trustbar ul { list-style: none; margin: 0 auto; padding: 0; max-width: 1200px; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 18px 24px; }
      @media (min-width: 900px) { .rpp-trustbar ul { grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 24px 32px; } }
      .rpp-trustbar li { margin: 0; text-align: center; }
      .rpp-trustbar a { color: #fff !important; text-decoration: none !important; display: block; font-family: 'DM Sans', system-ui, sans-serif; }
      .rpp-trustbar strong { display: block; font-size: clamp(26px, 2.6vw, 38px); font-weight: 700; line-height: 1.1; letter-spacing: -0.01em; }
      .rpp-trustbar span { display: block; font-size: clamp(13px, 1.05vw, 15px); line-height: 1.35; opacity: 0.9; margin-top: 6px; }
      @media (hover: hover) { .rpp-trustbar a:hover span { text-decoration: underline; text-underline-offset: 3px; } }
    `}</style>
  </section>
);

export default HomepageTrustBar;
