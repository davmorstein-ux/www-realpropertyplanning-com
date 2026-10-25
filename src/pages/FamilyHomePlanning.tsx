import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterSignup from "@/components/NewsletterSignup";
import { loadMetaPixel } from "@/lib/metaPixel";
import { trackPlannerCompleted, trackPlannerStarted } from "@/lib/siteTracking";

/**
 * /family-home-planning (Oct 17, 2026): the first Facebook ad landing page.
 *
 * The ad asks "What happens to the family home?". This page answers in three
 * steps: three quick questions, an immediate "where to start" result (no email
 * needed to see it), then the free 7-step checklist PDF in exchange for joining
 * the family newsletter.
 *
 * DECISIONS
 *   - The result is never gated. The email is asked for the checklist only.
 *   - The answers stay in the browser. They are not sent to Google, Meta,
 *     MailerLite or anyone; planner_completed records only that the three were
 *     answered. Keep it that way: Q2 can touch on senior housing.
 *   - Signups carry the source tag family-home-planning:<utm_source>, so
 *     MailerLite shows which ad (or "direct") produced each subscriber.
 *   - The Meta Pixel loads here and nowhere else (src/lib/metaPixel.ts).
 *   - The checklist is public/family-home-planning-checklist.pdf (built from an
 *     HTML source with the same DM Sans). Its URL is public; the signup is the
 *     invitation, not a lock.
 *   - Content is housing, ownership and planning only. No health or care-need
 *     wording on this page, so a pixel on it shares nothing sensitive.
 *
 * Class names use an fhp- prefix and avoid "card", "tile", "section", "btn"
 * and "cta" (sitewide substring rules in index.css). Choices are buttons with
 * role="radio", not <label>s, because index.css forces every label in main to 14px.
 */

const NAVY = "#1B3A6B";
const BRICK = "#B0352A";
const INK = "#1c1917";
const CREAM = "#faf8f4";
const FONT = "'DM Sans', 'DM Sans Fallback', system-ui, sans-serif";
export const CHECKLIST_PDF = "/family-home-planning-checklist.pdf";

type Discussed = "yes" | "not-yet" | "unsure";
type Topic = "stay" | "move" | "pass";
type Need = "checklist" | "costs" | "professionals";

interface Question<T extends string> {
  id: string;
  prompt: string;
  options: { value: T; label: string }[];
}

const Q1: Question<Discussed> = {
  id: "discussed",
  prompt: "Has your family talked about what should happen to the home?",
  options: [
    { value: "yes", label: "Yes, we have" },
    { value: "not-yet", label: "Not yet" },
    { value: "unsure", label: "I'm not sure" },
  ],
};
const Q2: Question<Topic> = {
  id: "topic",
  prompt: "Which is closest to what you're thinking about?",
  options: [
    { value: "stay", label: "Staying in the home as long as possible" },
    { value: "move", label: "Moving somewhere smaller or to senior housing" },
    { value: "pass", label: "What happens to the house after they're gone" },
  ],
};
const Q3: Question<Need> = {
  id: "need",
  prompt: "What would help most right now?",
  options: [
    { value: "checklist", label: "A checklist of what to do" },
    { value: "costs", label: "Understanding the costs" },
    { value: "professionals", label: "Knowing who to talk to" },
  ],
};

const GUIDES: Record<Topic, { heading: string; body: string; links: { title: string; href: string }[] }> = {
  stay: {
    heading: "Staying at home: plan for the house, not just the person",
    body: "Staying put works best when the family knows what the house costs to keep, what it needs, and who can sign for it if a parent cannot.",
    links: [
      { title: "Can a Parent Afford to Stay at Home? (Worksheet)", href: "/senior-transitions/can-parent-afford-to-stay-home" },
      { title: "Aging in Place & Staying at Home Safely", href: "/aging-in-place-staying-home-safely" },
      { title: "Power of Attorney and Real Estate in Washington", href: "/power-of-attorney" },
    ],
  },
  move: {
    heading: "A move: the house usually pays for what comes next",
    body: "Most moves are funded by the sale of the home, so the timing of the sale and the move need planning together.",
    links: [
      { title: "Downsizing & Preparing for a Transition", href: "/downsizing-preparing-for-transition" },
      { title: "How to Sell a Parent's House to Pay for Senior Living", href: "/sell-house-fund-senior-living" },
      { title: "How to Choose Senior Housing", href: "/articles/how-to-choose-senior-housing" },
    ],
  },
  pass: {
    heading: "Passing the house on: the deed matters as much as the will",
    body: "How the home is titled decides whether it goes through probate, and some shortcuts create tax or Medicaid problems later.",
    links: [
      { title: "How to Pass Real Estate to Your Children", href: "/articles/wills-trusts-other-options" },
      { title: "The Property Questions to Think Through", href: "/planning-before-a-crisis/property-questions" },
      { title: "Medicaid and the Family Home in Washington", href: "/long-term-care/medicaid-and-the-family-home" },
    ],
  },
};

const FIRST_STEP: Record<Discussed, { title: string; body: string; link?: { title: string; href: string } }> = {
  yes: {
    title: "You're ahead of most families.",
    body: "The next step is usually the paperwork: how the home is owned, and whether someone can sign for your parents if they cannot. Steps 2 to 4 of the checklist cover it.",
  },
  "not-yet": {
    title: "Start with one conversation.",
    body: "Most families haven't, and the first talk is the hardest. Ask what your parents want before anyone discusses what should happen.",
    link: { title: "The Conversations Worth Having Now", href: "/planning-before-a-crisis/conversations-to-have" },
  },
  unsure: {
    title: "Find out what's already been decided.",
    body: "Parents often have a will or a plan the children have never seen. Asking where the papers are is a gentle way to begin.",
    link: { title: "The Conversations Worth Having Now", href: "/planning-before-a-crisis/conversations-to-have" },
  },
};

const NEXT: Record<Need, { text: string; link: { title: string; href: string } }> = {
  checklist: { text: "The free 7-step checklist below walks through it in order.", link: { title: "Get the checklist", href: "#checklist" } },
  costs: { text: "Washington cost-of-care calculators show what each option costs by month and year.", link: { title: "Cost of care calculators", href: "/cost-of-care-calculator" } },
  professionals: { text: "Washington professionals for estates, property and planning, all met in person by the site's founder.", link: { title: "Find a professional", href: "/featured-professionals" } },
};

const STEPS = [
  "Ask what your parents actually want",
  "Find out how the home is owned",
  "Gather the papers in one place",
  "Make sure someone can act if a parent cannot",
  "Understand the money",
  "Know the ways a house can pass, and their trade-offs",
  "Write it down and share it (with a fill-in summary page)",
];

const PAGE_CSS = `
  .fhp { font-family: ${FONT}; color: ${INK}; }
  .fhp-wrap { max-width: 860px; margin: 0 auto; padding: 0 20px; }
  .fhp h1.fhp-h1 { font-size: clamp(32px, 5vw, 48px) !important; line-height: 1.12 !important; margin: 0 0 14px !important; color: ${INK} !important; }
  .fhp h2.fhp-h2 { font-size: clamp(24px, 3vw, 32px) !important; line-height: 1.22 !important; margin: 0 0 10px !important; color: ${INK} !important; }
  .fhp h3.fhp-h3 { font-size: 21px !important; line-height: 1.3 !important; margin: 0 0 8px !important; color: ${INK} !important; }
  .fhp p.fhp-p { font-size: 19px !important; line-height: 1.6 !important; margin: 0 0 16px !important; color: ${INK} !important; }
  .fhp p.fhp-kicker { font-size: 14px !important; font-weight: 700 !important; letter-spacing: .14em; text-transform: uppercase; color: ${NAVY} !important; margin: 0 0 10px !important; }
  .fhp p.fhp-small { font-size: 16px !important; line-height: 1.5 !important; margin: 0 !important; color: ${INK} !important; }
  .fhp-rule { width: 56px; height: 4px; background: ${BRICK}; margin: 0 0 18px; border-radius: 2px; }
  .fhp-hero { background: ${CREAM}; border-bottom: 3px solid ${NAVY}; padding: 40px 0 34px; }
  .fhp-block { padding: 36px 0; }
  .fhp-quiz { background: #fff; border: 1px solid #d9d2c7; border-radius: 12px; padding: 24px 20px; }
  .fhp-q + .fhp-q { margin-top: 26px; padding-top: 22px; border-top: 1px solid #ebe5dc; }
  .fhp p.fhp-qtext { font-size: 20px !important; font-weight: 700 !important; line-height: 1.35 !important; margin: 0 0 12px !important; }
  .fhp-qnum { color: ${NAVY}; margin-right: 6px; }
  .fhp-choices { display: grid; gap: 10px; grid-template-columns: 1fr; }
  @media (min-width: 700px) { .fhp-choices { grid-template-columns: repeat(3, 1fr); } }
  .fhp button.fhp-choice { min-height: 58px; width: 100%; text-align: left; padding: 12px 16px !important; border: 2px solid #c9beb4 !important; border-radius: 10px !important; background: #fff !important; color: ${INK} !important; font-family: ${FONT} !important; font-weight: 600 !important; line-height: 1.3 !important; cursor: pointer; display: flex; align-items: center; gap: 12px; }
  .fhp button.fhp-choice .fhp-dot { flex: 0 0 22px; width: 22px; height: 22px; border-radius: 50%; border: 2px solid ${NAVY}; background: #fff; box-shadow: inset 0 0 0 4px #fff; }
  .fhp button.fhp-choice[aria-checked="true"] { border-color: ${NAVY} !important; background: #eef2f8 !important; }
  .fhp button.fhp-choice[aria-checked="true"] .fhp-dot { background: ${NAVY}; }
  @media (hover: hover) { .fhp button.fhp-choice:hover { border-color: ${NAVY} !important; } }
  .fhp button.fhp-choice:focus-visible { outline: 3px solid ${NAVY} !important; outline-offset: 2px !important; }
  .fhp-result { margin-top: 26px; background: #eef2f8; border-left: 5px solid ${NAVY}; border-radius: 10px; padding: 22px 20px; }
  .fhp-result:focus { outline: none; }
  .fhp-links { list-style: none; margin: 4px 0 0; padding: 0; display: grid; gap: 10px; }
  .fhp a.fhp-link { display: block; background: #fff; border: 1px solid #c9d3e3; border-radius: 8px; padding: 14px 16px; font-size: 18px !important; font-weight: 700; color: ${NAVY} !important; text-decoration: none !important; line-height: 1.35; }
  .fhp a.fhp-link::after { content: " →"; }
  @media (hover: hover) { .fhp a.fhp-link:hover { border-color: ${NAVY}; text-decoration: underline !important; } }
  .fhp a.fhp-inline { color: ${NAVY} !important; font-weight: 700; text-decoration: underline !important; text-underline-offset: 3px; font-size: inherit !important; }
  .fhp-divider { height: 1px; background: #c9d3e3; margin: 18px 0; }
  .fhp-offer { display: grid; gap: 24px; grid-template-columns: 1fr; align-items: start; }
  @media (min-width: 820px) { .fhp-offer { grid-template-columns: 1fr 1fr; } }
  .fhp-steps { list-style: none; counter-reset: fhp; margin: 0; padding: 0; }
  .fhp-steps li { counter-increment: fhp; position: relative; padding: 0 0 0 44px; margin: 0 0 12px; font-size: 18px; line-height: 1.45; min-height: 32px; }
  .fhp-steps li::before { content: counter(fhp); position: absolute; left: 0; top: -2px; width: 30px; height: 30px; border-radius: 50%; background: ${NAVY}; color: #fff; font-weight: 700; font-size: 16px; display: flex; align-items: center; justify-content: center; }
  .fhp-offer .rpp-news.rpp-news { margin: 0 !important; }
  .fhp-about { background: ${CREAM}; border-top: 1px solid #e4ddd2; }
`;

function Choices<T extends string>({ q, n, value, onPick }: { q: Question<T>; n: number; value: T | null; onPick: (v: T) => void }) {
  const labelId = `fhp-${q.id}-label`;
  return (
    <div className="fhp-q">
      <p className="fhp-qtext" id={labelId}>
        <span className="fhp-qnum">{n}.</span>
        {q.prompt}
      </p>
      <div className="fhp-choices" role="radiogroup" aria-labelledby={labelId}>
        {q.options.map((o) => (
          <button
            key={o.value}
            type="button"
            role="radio"
            aria-checked={value === o.value}
            className="fhp-choice"
            onClick={() => onPick(o.value)}
          >
            <span className="fhp-dot" aria-hidden="true" />
            <span>{o.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

const FamilyHomePlanning = () => {
  const { search } = useLocation();
  const [discussed, setDiscussed] = useState<Discussed | null>(null);
  const [topic, setTopic] = useState<Topic | null>(null);
  const [need, setNeed] = useState<Need | null>(null);
  const done = discussed !== null && topic !== null && need !== null;

  /* planner_started once per visit, on the first answer (Oct 25, 2026). */
  const started = useRef(false);
  useEffect(() => {
    if (!started.current && (discussed !== null || topic !== null || need !== null)) {
      started.current = true;
      trackPlannerStarted();
    }
  }, [discussed, topic, need]);

  /* Which ad brought the visitor, for the MailerLite source tag. Letters,
     digits, dash and underscore only: it comes from the URL. */
  const source = useMemo(() => {
    const raw = new URLSearchParams(search).get("utm_source") || "direct";
    return `family-home-planning:${raw.toLowerCase().replace(/[^a-z0-9_-]/g, "").slice(0, 30) || "direct"}`;
  }, [search]);

  useEffect(() => {
    loadMetaPixel();
  }, []);

  /* Once per visit: answers can be changed afterwards without re-sending. */
  const reported = useRef(false);
  useEffect(() => {
    if (done && !reported.current) {
      reported.current = true;
      trackPlannerCompleted();
    }
  }, [done]);

  return (
    <>
      <SEOHead
        title="What Will Happen to the Family Home? A Free Planning Checklist | Real Property Planning"
        description="Three quick questions and a free 7-step checklist for Washington families planning what happens to a parent's home: staying, moving, or passing it on."
        canonical="https://realpropertyplanning.com/family-home-planning"
      />
      <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />
      <Header />
      <main className="fhp">
        <div className="fhp-hero">
          <div className="fhp-wrap">
            <p className="fhp-kicker">Free for Washington families</p>
            <h1 className="fhp-h1">What will happen to the family home?</h1>
            <div className="fhp-rule" />
            <p className="fhp-p" style={{ maxWidth: 680 }}>
              Whether your parents plan to stay, move, or one day leave the house to family, the decisions are easier made early,
              together, and before anything forces them.
            </p>
            <p className="fhp-small">Three quick questions · about a minute · no email needed to see where to start</p>
          </div>
        </div>

        <div className="fhp-block">
          <div className="fhp-wrap">
            <div className="fhp-quiz">
              <Choices<Discussed> q={Q1} n={1} value={discussed} onPick={setDiscussed} />
              <Choices<Topic> q={Q2} n={2} value={topic} onPick={setTopic} />
              <Choices<Need> q={Q3} n={3} value={need} onPick={setNeed} />

              <div aria-live="polite">
                {done && (
                  <div className="fhp-result">
                    <p className="fhp-kicker">Where to start</p>
                    <h2 className="fhp-h2">{FIRST_STEP[discussed].title}</h2>
                    <p className="fhp-p">{FIRST_STEP[discussed].body}</p>
                    {FIRST_STEP[discussed].link && (
                      <ul className="fhp-links">
                        <li>
                          <Link className="fhp-link" to={FIRST_STEP[discussed].link!.href}>
                            {FIRST_STEP[discussed].link!.title}
                          </Link>
                        </li>
                      </ul>
                    )}
                    <div className="fhp-divider" />
                    <h3 className="fhp-h3">{GUIDES[topic].heading}</h3>
                    <p className="fhp-p">{GUIDES[topic].body}</p>
                    <ul className="fhp-links">
                      {GUIDES[topic].links.map((l) => (
                        <li key={l.href}>
                          <Link className="fhp-link" to={l.href}>
                            {l.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <div className="fhp-divider" />
                    <p className="fhp-p" style={{ marginBottom: 0 }}>
                      {NEXT[need].text}{" "}
                      {NEXT[need].link.href.startsWith("#") ? (
                        <a className="fhp-inline" href={NEXT[need].link.href}>
                          {NEXT[need].link.title}
                        </a>
                      ) : (
                        <Link className="fhp-inline" to={NEXT[need].link.href}>
                          {NEXT[need].link.title}
                        </Link>
                      )}
                    </p>
                  </div>
                )}
              </div>
            </div>
            <p className="fhp-small" style={{ marginTop: 12 }}>
              Your answers stay on this page. They are not saved or sent anywhere.
            </p>
          </div>
        </div>

        <div className="fhp-block" id="checklist" style={{ background: "#fff", borderTop: "1px solid #ebe5dc", scrollMarginTop: 90 }}>
          <div className="fhp-wrap">
            <p className="fhp-kicker">Free printable checklist</p>
            <h2 className="fhp-h2">The Family Home: a 7-step planning checklist</h2>
            <p className="fhp-p">
              Four printable pages, written for Washington: what to ask, what to find, and when it's worth calling a professional,
              with a one-page summary to fill in together.
            </p>
            <div className="fhp-offer">
              <ol className="fhp-steps">
                {STEPS.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ol>
              <NewsletterSignup
                list="family"
                source={source}
                copy={{
                  heading: "Get the free checklist",
                  body: "Enter your email to download it now. You'll also get the occasional Real Property Planning newsletter for Washington families: plain-English notes on homes, estates and senior moves. Unsubscribe any time.",
                  cta: "Get the Checklist",
                }}
                doneMessage={
                  <>
                    <p style={{ margin: "0 0 14px", fontSize: 19, fontWeight: 700 }}>Your checklist is ready.</p>
                    <a
                      className="fhp-link"
                      href={CHECKLIST_PDF}
                      target="_blank"
                      rel="noopener"
                      style={{ marginBottom: 14 }}
                    >
                      Download the 7-step checklist (PDF)
                    </a>
                    <p style={{ margin: 0, fontSize: 17, lineHeight: 1.55 }}>
                      <strong>One more step for the newsletter:</strong> a link to confirm your address has been emailed to you. Nothing
                      else is sent until you click it. If it isn't there in a few minutes, check your spam folder.
                    </p>
                  </>
                }
              />
            </div>
          </div>
        </div>

        <div className="fhp-block fhp-about">
          <div className="fhp-wrap">
            <h2 className="fhp-h2">About Real Property Planning</h2>
            <p className="fhp-p">
              A free educational resource for Washington families dealing with a parent's home, an estate, or a move. No ads and
              nothing to buy: 90+ guides, free calculators, and a list of professionals the founder has met in person.
            </p>
            <p className="fhp-p" style={{ marginBottom: 0 }}>
              <Link className="fhp-inline" to="/planning-before-a-crisis">
                Planning before a crisis
              </Link>{" "}
              ·{" "}
              <Link className="fhp-inline" to="/guides-and-resources">
                All guides
              </Link>{" "}
              ·{" "}
              <Link className="fhp-inline" to="/calculators">
                Calculators
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default FamilyHomePlanning;
