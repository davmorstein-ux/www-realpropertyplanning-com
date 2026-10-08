import { useEffect, useId, useRef, useState } from "react";
import { Link } from "react-router-dom";
import type { Page, Term } from "@/lib/mcp/data";
import { ask, buildCards, type AnswerCard, type AskResult } from "@/lib/askSearch";
import { trackAsk } from "@/lib/siteTracking";

/**
 * "Ask a question" (Oct 8, 2026; owner's idea after a buyer's call: visitors
 * should get a quick answer and the page to read next).
 *
 * Answers are ONLY words already on the site (short answers, FAQs, glossary
 * terms) found by src/lib/askSearch.ts. Nothing is generated. The matched
 * question is always shown, labeled "Closest answer on our site", so a near
 * miss is visible as one. When nothing covers the question it says so and
 * offers the contact form.
 *
 * Each question is sent to Google Analytics as `ask_question` (text trimmed to
 * 100 characters with emails and phone numbers removed) so the owner can see
 * what people ask and what the site cannot answer yet. See siteTracking.ts and
 * the privacy page.
 *
 * The site data (/ai/pages.json and /ai/glossary.json, built with the site) is
 * fetched the first time someone focuses the box, not on page load.
 */

type Loaded = { pages: Page[]; cards: AnswerCard[] };
let dataPromise: Promise<Loaded> | null = null;
const loadData = () => {
  if (!dataPromise) {
    dataPromise = Promise.all([
      fetch("/ai/pages.json").then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status))))),
      fetch("/ai/glossary.json").then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status))))),
    ])
      .then(([p, g]) => {
        const pages = (p.data ?? []) as Page[];
        return { pages, cards: buildCards(pages, (g.data ?? []) as Term[]) };
      })
      .catch((e) => {
        dataPromise = null; // let the next try fetch again
        throw e;
      });
  }
  return dataPromise;
};

const EXAMPLES = [
  "Can I sell my mother's house with power of attorney if she has dementia?",
  "What is the license fee for an adult family home?",
  "How long does probate take in Washington?",
];

interface Props {
  /** Heading text. */
  title?: string;
  /** Accent colour: navy on the family side, AFH Club green on AFH pages. */
  accent?: string;
  /** Topic code for the contact form when there is no answer. */
  contactReason?: string;
  /** Example questions under the box. */
  examples?: string[];
  /** Render without the outer card (when a page supplies its own). */
  bare?: boolean;
}

export default function AskBox({ title = "Ask a question", accent = "#1B3A6B", contactReason = "site-question", examples = EXAMPLES, bare = false }: Props) {
  const id = useId();
  const [q, setQ] = useState("");
  const [asked, setAsked] = useState("");
  const [busy, setBusy] = useState(false);
  const [failed, setFailed] = useState(false);
  const [res, setRes] = useState<AskResult | null>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  const run = async (text: string) => {
    const question = text.trim();
    if (question.length < 3) return;
    setBusy(true);
    setFailed(false);
    try {
      const d = await loadData();
      const r = ask(question, d.pages, d.cards);
      setRes(r);
      setAsked(question);
      trackAsk(question, r.answer ? r.answer.path : null);
    } catch {
      setFailed(true);
      setRes(null);
    } finally {
      setBusy(false);
    }
  };

  useEffect(() => {
    if (res && resultRef.current) resultRef.current.focus({ preventScroll: true });
  }, [res]);

  const answerHref = res?.answer?.path ?? "";

  return (
    <div className={`rpp-ask${bare ? " rpp-ask-bare" : ""}`} style={{ ["--ask" as string]: accent }}>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <h2 className="rpp-ask-h" id={`${id}-h`}>{title}</h2>
      <p className="rpp-ask-sub">Type your question in plain words. You'll get the closest answer from our guides and the page to read next. Please leave out names and personal details.</p>
      <form
        className="rpp-ask-form"
        role="search"
        aria-labelledby={`${id}-h`}
        onSubmit={(e) => {
          e.preventDefault();
          run(q);
        }}
      >
        <input
          className="rpp-ask-input"
          type="text"
          enterKeyHint="search"
          maxLength={200}
          value={q}
          onChange={(e) => setQ(e.target.value)}
          onFocus={() => {
            loadData().catch(() => {});
          }}
          placeholder="For example: How long does probate take?"
          aria-label="Your question"
        />
        <button className="rpp-ask-send" type="submit" disabled={busy || q.trim().length < 3}>
          {busy ? "Looking…" : "Get answer"}
        </button>
      </form>
      {!res && !failed && examples.length > 0 && (
        <div className="rpp-ask-examples">
          <span className="rpp-ask-try">Try:</span>
          {examples.map((x) => (
            <button key={x} type="button" className="rpp-ask-example" onClick={() => { setQ(x); run(x); }}>
              {x}
            </button>
          ))}
        </div>
      )}

      <div className="rpp-ask-result" aria-live="polite" tabIndex={-1} ref={resultRef}>
        {failed && <p className="rpp-ask-none">Sorry, the answers could not be loaded just now. Please try again in a moment.</p>}
        {res && (
          <>
            {res.answer ? (
              <div className="rpp-ask-answer">
                <div className="rpp-ask-label">Closest answer on our site</div>
                <div className="rpp-ask-q">{res.answer.q}</div>
                <p className="rpp-ask-a">{res.answer.a}</p>
                <p className="rpp-ask-read">
                  <Link className="rpp-ask-link" to={answerHref}>Read the full guide: {res.answer.pageTitle} →</Link>
                </p>
              </div>
            ) : (
              <div className="rpp-ask-answer">
                <div className="rpp-ask-label">No direct answer yet</div>
                <p className="rpp-ask-a">
                  We don't have a short answer to “{asked}” yet.
                  {res.more.length > 0 ? " These pages are the closest:" : ""}
                </p>
              </div>
            )}
            {res.more.filter((m) => m.path !== answerHref.replace(/#.*$/, "")).length > 0 && (
              <div className="rpp-ask-more">
                <div className="rpp-ask-label">{res.answer ? "More on this" : "Closest pages"}</div>
                <ul>
                  {res.more
                    .filter((m) => m.path !== answerHref.replace(/#.*$/, ""))
                    .map((m) => (
                      <li key={m.path}>
                        <Link className="rpp-ask-link" to={m.path}>{m.title}</Link>
                      </li>
                    ))}
                </ul>
              </div>
            )}
            <p className="rpp-ask-foot">
              Not what you needed?{" "}
              <Link className="rpp-ask-link" to={`/contact?reason=${encodeURIComponent(contactReason)}`}>Ask us directly</Link>.
              {" "}General information, not legal, tax or financial advice.
            </p>
          </>
        )}
      </div>
    </div>
  );
}

/* index.css forces sizes on links (16px), labels (14px), uppercase/letter-spaced
   text (14px), p margins and any class containing "btn" or "cta" (maroon). These
   classes avoid all of that; doubled classes beat the global rules. */
const CSS = `
.rpp-ask.rpp-ask { font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif; background: #ffffff; border: 1.5px solid #d9d3c8; border-left: 5px solid var(--ask); border-radius: 14px; padding: 24px 24px 22px; max-width: 860px; margin: 0 auto; box-sizing: border-box; text-align: left; }
.rpp-ask.rpp-ask-bare { border: 0; padding: 0; background: transparent; }
.rpp-ask h2.rpp-ask-h.rpp-ask-h { font-size: clamp(24px, 3vw, 30px) !important; font-weight: 700 !important; line-height: 1.2 !important; color: #14283a !important; margin: 0 0 6px !important; text-align: left; }
.rpp-ask p.rpp-ask-sub.rpp-ask-sub { font-size: 17px !important; line-height: 1.5 !important; color: #2b2825 !important; margin: 0 0 14px !important; }
.rpp-ask .rpp-ask-form { display: flex; gap: 10px; flex-wrap: wrap; }
.rpp-ask input.rpp-ask-input { flex: 1 1 320px; min-width: 0; min-height: 52px; font-size: 18px; padding: 10px 16px; border: 2px solid #b9b2a6; border-radius: 10px; color: #1c1917; background: #fff; box-sizing: border-box; }
.rpp-ask input.rpp-ask-input:focus { outline: 3px solid color-mix(in srgb, var(--ask) 35%, transparent); border-color: var(--ask); }
.rpp-ask button.rpp-ask-send { min-height: 52px; padding: 10px 24px; font-size: 18px; font-weight: 700; color: #fff; background: var(--ask); border: 0; border-radius: 10px; cursor: pointer; }
.rpp-ask button.rpp-ask-send:disabled { opacity: 0.55; cursor: default; }
@media (max-width: 520px) { .rpp-ask button.rpp-ask-send { width: 100%; } .rpp-ask.rpp-ask { padding: 18px 16px; } }
.rpp-ask .rpp-ask-examples { display: flex; flex-wrap: wrap; gap: 8px; align-items: center; margin-top: 12px; }
.rpp-ask .rpp-ask-try { font-size: 16px; font-weight: 700; color: #2b2825; }
.rpp-ask button.rpp-ask-example { font-size: 15px; line-height: 1.3; text-align: left; padding: 8px 12px; border: 1px solid #d9d3c8; border-radius: 999px; background: #faf8f4; color: #1c1917; cursor: pointer; min-height: 40px; }
@media (hover: hover) { .rpp-ask button.rpp-ask-example:hover { border-color: var(--ask); } }
.rpp-ask .rpp-ask-result:focus { outline: none; }
.rpp-ask .rpp-ask-answer { margin-top: 18px; background: #f7f5f0; border-radius: 10px; padding: 16px 18px; }
.rpp-ask .rpp-ask-label { font-size: 15px; font-weight: 700; color: var(--ask); margin-bottom: 4px; }
.rpp-ask .rpp-ask-q { font-size: 19px; font-weight: 700; line-height: 1.35; color: #14283a; margin-bottom: 6px; }
.rpp-ask p.rpp-ask-a.rpp-ask-a { font-size: 18px !important; line-height: 1.6 !important; color: #1c1917 !important; margin: 0 0 8px !important; }
.rpp-ask p.rpp-ask-read.rpp-ask-read { margin: 4px 0 0 !important; }
.rpp-ask a.rpp-ask-link.rpp-ask-link { font-size: 18px !important; font-weight: 600; color: #1B3A6B !important; text-decoration: underline !important; text-underline-offset: 3px; }
.rpp-ask .rpp-ask-more { margin-top: 14px; }
.rpp-ask .rpp-ask-more ul { list-style: disc !important; margin: 0 0 0 22px !important; padding: 0 !important; }
.rpp-ask .rpp-ask-more li { display: list-item !important; list-style: disc !important; margin-bottom: 6px; font-size: 18px; }
.rpp-ask p.rpp-ask-foot.rpp-ask-foot { font-size: 16px !important; line-height: 1.5 !important; color: #2b2825 !important; margin: 14px 0 0 !important; }
.rpp-ask p.rpp-ask-foot a.rpp-ask-link.rpp-ask-link { font-size: 16px !important; }
.rpp-ask p.rpp-ask-none { font-size: 17px; color: #7a2e0e; margin-top: 14px; }
`;
