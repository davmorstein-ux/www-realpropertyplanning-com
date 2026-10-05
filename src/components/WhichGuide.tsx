/**
 * "Which guide is for you?" box for groups of pages that cover neighbouring
 * questions (Question Map step 8, Oct 4, 2026). Each page in a group shows
 * the same box with itself marked, so readers and search engines see that
 * each page has its own job instead of competing for the same question.
 * Groups live here; add a page to a group rather than writing a new box.
 */
import { Link, useLocation } from "react-router-dom";

interface Entry {
  href: string;
  title: string;
  role: string;
}

export const WHICH_GUIDE: Record<string, { heading: string; entries: Entry[] }> = {
  agingInPlace: {
    heading: "Guides on staying at home",
    entries: [
      { href: "/articles/aging-in-place", title: "Aging in Place With Support", role: "Whether staying home is the right choice: what it really costs and when the math changes." },
      { href: "/senior-transitions/can-parent-afford-to-stay-home", title: "Can a Parent Afford to Stay at Home?", role: "A worksheet: the monthly cost of staying home against income and savings." },
      { href: "/aging-in-place-staying-home-safely", title: "Aging in Place & Staying Home Safely", role: "The family's side: common challenges, mistakes to avoid and the questions to ask." },
      { href: "/senior-living/aging-in-place", title: "Aging in Place (overview)", role: "A short summary next to the other housing options, for comparison." },
    ],
  },
  executorFirstSteps: {
    heading: "Guides for the first weeks after a death",
    entries: [
      { href: "/estate-probate-inherited-property/first-steps", title: "First Steps After a Death", role: "For the family: the first days and weeks, before anyone has legal authority." },
      { href: "/executor-responsibilities-first-steps/first-30-days", title: "Your First 30 Days as Executor", role: "For the executor: the court filing, notices and duties in the first month." },
      { href: "/guides/executor-first-steps-house", title: "What Should an Executor Do First With a House?", role: "Just the house: securing, insuring and caring for it until it is sold or distributed." },
    ],
  },
};

const CSS = `
.wg { max-width: 860px; margin: 0 auto; padding: 0 1.5rem; }
.wg-box { background: #fff; border: 1px solid #e3d9cc; border-radius: 12px; padding: 1.2rem 1.4rem; }
.wg-h.wg-h { font-family: 'DM Sans', system-ui, sans-serif; font-size: 14px !important; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #6b1b22 !important; margin: 0 0 0.75rem !important; }
.wg-list { list-style: none; margin: 0; padding: 0; display: grid; gap: 0.6rem; }
.wg-list li { font-family: 'DM Sans', system-ui, sans-serif; font-size: 16px; line-height: 1.5; color: #1f2933; padding-left: 0.9rem; border-left: 3px solid #e3d9cc; }
.wg-list li.cur { border-left-color: #1f4058; }
.wg-list a { color: #9e1f2b; font-weight: 600; text-decoration: underline; text-underline-offset: 3px; }
.wg-here { font-weight: 700; color: #1f4058; }
`;

const WhichGuide = ({ group, className = "" }: { group: keyof typeof WHICH_GUIDE; className?: string }) => {
  const { pathname } = useLocation();
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  const g = WHICH_GUIDE[group];
  return (
    <section className={`py-8 ${className}`} aria-label={g.heading}>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="wg">
        <div className="wg-box">
          <p className="wg-h">{g.heading}</p>
          <ul className="wg-list">
            {g.entries.map((e) => (
              <li key={e.href} className={e.href === path ? "cur" : undefined}>
                {e.href === path ? <span className="wg-here">{e.title} (this page)</span> : <Link to={e.href}>{e.title}</Link>}
                {": "}
                {e.role}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhichGuide;
