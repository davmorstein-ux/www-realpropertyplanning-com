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
  authority: {
    heading: "Guides on who can sell the house",
    entries: [
      { href: "/guides/who-has-authority-sell-probate-property-washington", title: "Who Has Authority to Sell Probate Property?", role: "The full answer: letters, nonintervention powers, court-supervised sales and what a title company asks for." },
      { href: "/estate-probate-inherited-property/probate-and-legal-authority", title: "Understanding Probate & Legal Authority", role: "A step in the estate guide: where authority comes from, in plain terms." },
      { href: "/washington-probate-guide", title: "Washington Probate Guide (flow chart)", role: "Find your situation: will or no will, trust, joint ownership, and your role." },
    ],
  },
  wabo: {
    heading: "Guides on WABO and the building inspection",
    entries: [
      { href: "/afh-club/wabo-inspection-guide", title: "What Is WABO? A Simple Overview", role: "Start here: what WABO is and what the building inspection does and does not mean." },
      { href: "/afh-club/wabo-technical-guide", title: "WABO Checklist: The Technical Guide", role: "The checklist itself: requirements, common delays and how to prepare." },
      { href: "/afh-club/building-inspection", title: "AFH Building Requirements & Inspections", role: "The whole building side: requirements, inspections and how they fit with licensing." },
    ],
  },
  afhOpening: {
    heading: "Guides on opening an adult family home",
    entries: [
      { href: "/afh-club/getting-started", title: "Is an Adult Family Home Right for You?", role: "Before you commit: the steps, the time and what the work involves." },
      { href: "/afh-club/washington-adult-family-home-guide/opening", title: "Opening a New Adult Family Home (flow chart step)", role: "The opening path in order, with the guides to read at each stage." },
    ],
  },
  conversations: {
    heading: "Guides on talking with a parent",
    entries: [
      { href: "/planning-before-a-crisis/conversations-to-have", title: "The Conversations Worth Having Now", role: "Before a crisis: the questions about wishes, money and the house worth asking early." },
      { href: "/helping-an-aging-parent/exploring-care-options/having-the-conversation", title: "How Do I Have This Conversation With My Parent?", role: "When care is on the table: how to raise a move or more help." },
    ],
  },
};

const CSS = `
.wg { max-width: 860px; margin: 0 auto; padding: 0 1.5rem; }
.wg-box { background: #fff; border: 1px solid #e3d9cc; border-radius: 12px; padding: 1.2rem 1.4rem; }
.wg-h.wg-h { font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif; font-size: 14px !important; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #6b1b22 !important; margin: 0 0 0.75rem !important; }
.wg-list { list-style: none; margin: 0; padding: 0; display: grid; gap: 0.6rem; }
.wg-list li { font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif; font-size: 16px; line-height: 1.5; color: #1f2933; padding-left: 0.9rem; border-left: 3px solid #e3d9cc; }
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
