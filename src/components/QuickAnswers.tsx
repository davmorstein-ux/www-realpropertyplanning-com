import { Link, useLocation } from "react-router-dom";
import { QUICK_ANSWER_COST_TABLE, quickAnswersFor } from "@/data/quickAnswers";
import { CARE_TYPES, COST_SOURCE_LINE, formatCurrency } from "@/lib/careTypes";

/**
 * "Quick answers" near the top of a page: each common question as a heading
 * with a short, direct answer, its source and where to read more. Content is
 * in src/data/quickAnswers.ts, keyed by path; renders nothing elsewhere.
 */
const CSS = `
.qa-wrap { background: #faf8f4; border-top: 1px solid #e7dfd3; border-bottom: 1px solid #e7dfd3; }
.qa-inner { max-width: 880px; margin: 0 auto; padding: 2.75rem 1.5rem 3rem; }
.qa-eyebrow.qa-eyebrow { font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif; font-size: 14px !important; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: #6b1b22 !important; margin: 0 0 0.4rem !important; }
.qa-title.qa-title { font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif; font-size: clamp(26px, 2.6vw, 34px) !important; font-weight: 700; color: #1c1917 !important; margin: 0 0 1.5rem !important; line-height: 1.2; }
.qa-item { background: #fff; border: 1px solid #e3d9cc; border-left: 4px solid #1f4058; border-radius: 10px; padding: 1.15rem 1.35rem 1.1rem; margin: 0 0 0.9rem; }
.qa-q.qa-q { font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif; font-size: 20px !important; font-weight: 700; color: #1c1917 !important; line-height: 1.3; margin: 0 0 0.45rem !important; }
.qa-a.qa-a { font-size: 17px !important; line-height: 1.65 !important; color: #1f2933 !important; margin: 0 !important; }
.qa-meta.qa-meta { font-size: 14.5px !important; color: #3d4a55 !important; margin: 0.55rem 0 0 !important; display: flex; flex-wrap: wrap; gap: 0.35rem 1.1rem; }
.qa-meta a { color: #9e1f2b !important; font-weight: 600; text-decoration: underline; text-underline-offset: 3px; }
.qa-table-wrap { overflow-x: auto; margin: 0.4rem 0 0; }
.qa-table { width: 100%; border-collapse: collapse; font-size: 16px; background: #fff; border: 1px solid #e3d9cc; border-radius: 10px; overflow: hidden; }
.qa-table th, .qa-table td { text-align: left; padding: 0.6rem 0.9rem; border-bottom: 1px solid #efe7dc; color: #1f2933; }
.qa-table th { background: #f3eee5; font-weight: 700; color: #1c1917; }
.qa-table td.num { font-variant-numeric: tabular-nums; white-space: nowrap; }
.qa-note.qa-note { font-size: 13.5px !important; color: #3d4a55 !important; margin: 0.5rem 0 0 !important; }
`;

const QuickAnswers = () => {
  const { pathname } = useLocation();
  const items = quickAnswersFor(pathname);
  if (!items.length) return null;
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  const costRows = (QUICK_ANSWER_COST_TABLE[path] ?? [])
    .map((id) => CARE_TYPES.find((c) => c.id === id))
    .filter((c): c is (typeof CARE_TYPES)[number] => Boolean(c));

  return (
    <section className="qa-wrap" aria-labelledby="quick-answers">
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="qa-inner">
        <p className="qa-eyebrow">Quick answers</p>
        <h2 id="quick-answers" className="qa-title">
          The questions people ask most
        </h2>
        {items.map((item) => (
          <div className="qa-item" key={item.q}>
            <h3 className="qa-q">{item.q}</h3>
            <p className="qa-a">{item.a}</p>
            {(item.source || item.more) && (
              <p className="qa-meta">
                {item.source && (
                  <span>
                    Source:{" "}
                    <a href={item.source.href} target="_blank" rel="noopener noreferrer">
                      {item.source.label}
                    </a>
                  </span>
                )}
                {item.more && (
                  <span>
                    More: <Link to={item.more.href}>{item.more.label}</Link>
                  </span>
                )}
              </p>
            )}
          </div>
        ))}
        {costRows.length > 0 && (
          <div className="qa-table-wrap">
            <table className="qa-table">
              <caption className="sr-only">Typical monthly cost of care in Washington</caption>
              <thead>
                <tr>
                  <th scope="col">Setting</th>
                  <th scope="col">Typical monthly cost in Washington</th>
                </tr>
              </thead>
              <tbody>
                {costRows.map((c) => (
                  <tr key={c.id}>
                    <td>
                      {c.label}
                      {c.unit !== "monthly fee" && c.unit !== "monthly" ? ` (${c.unit})` : ""}
                    </td>
                    <td className="num">
                      {formatCurrency(c.waMonthly)}
                      {c.estimate ? " (estimate)" : " (median)"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="qa-note">{COST_SOURCE_LINE}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default QuickAnswers;
