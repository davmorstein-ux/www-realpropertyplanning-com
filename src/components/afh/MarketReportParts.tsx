/**
 * Shared layout pieces for the AFH Market Report pages and the newly licensed
 * homes page (Oct 6, 2026). Page-scoped CSS under .mkt; class names avoid the
 * substrings index.css restyles ("card", "tile", "btn", "cta", "source").
 */
import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import NewsletterSignup from "@/components/NewsletterSignup";

export const GREEN = "#0a5648";

export const MKT_CSS = `
.mkt { background: #faf8f4; }
.mkt .mkt-wrap { max-width: 920px; margin: 0 auto; padding: 0 16px; }
.mkt p, .mkt li { font-family: 'DM Sans', system-ui, sans-serif; font-size: 18px !important; line-height: 1.65 !important; color: #1c1917 !important; }
.mkt h2.mkt-h2 { font-family: 'DM Sans', system-ui, sans-serif !important; font-size: clamp(24px, 3.2vw, 30px) !important; font-weight: 700 !important; color: #14283a !important; margin: 0 0 14px !important; line-height: 1.2 !important; }
.mkt h3.mkt-h3 { font-family: 'DM Sans', system-ui, sans-serif !important; font-size: 21px !important; font-weight: 700 !important; color: ${GREEN} !important; margin: 18px 0 8px !important; line-height: 1.25 !important; }
.mkt .mkt-sec { padding: 40px 0; }
.mkt .mkt-sec.alt { background: #fff; border-top: 1px solid #e3ddd3; border-bottom: 1px solid #e3ddd3; }
.mkt .mkt-lede { background: #fff; border: 1px solid #d9d2c6; border-left: 5px solid ${GREEN}; border-radius: 10px; padding: 18px 22px; }
.mkt .mkt-lede p { margin: 0 !important; font-size: 19px !important; }
.mkt .mkt-figs { display: grid; gap: 12px; grid-template-columns: repeat(2, minmax(0, 1fr)); margin: 6px 0 18px; }
@media (min-width: 760px) { .mkt .mkt-figs { grid-template-columns: repeat(4, minmax(0, 1fr)); } }
.mkt .mkt-fig { background: #fff; border: 1px solid #d9d2c6; border-radius: 10px; padding: 14px 16px; }
.mkt .mkt-fig-n { font-family: 'DM Sans', system-ui, sans-serif; font-size: clamp(24px, 3.4vw, 32px); font-weight: 700; color: #14283a; line-height: 1.1; font-variant-numeric: tabular-nums; }
.mkt .mkt-fig-l { font-family: 'DM Sans', system-ui, sans-serif; font-size: 15px; color: #2b2825; line-height: 1.35; margin-top: 6px; }
.mkt .mkt-tablebox { overflow-x: auto; margin: 6px 0 14px; }
.mkt table.mkt-table { border-collapse: collapse; width: 100%; min-width: 420px; font-family: 'DM Sans', system-ui, sans-serif; font-variant-numeric: tabular-nums; background: #fff; }
.mkt table.mkt-table th, .mkt table.mkt-table td { border-bottom: 1px solid #e3ddd3; padding: 10px 12px; text-align: left; font-size: 16px !important; color: #1c1917; }
.mkt table.mkt-table th { background: #f1f6f4; font-weight: 700; color: #14283a; }
.mkt table.mkt-table td.n, .mkt table.mkt-table th.n { text-align: right; }
.mkt .mkt-small { font-size: 15px !important; color: #3f3a35 !important; }
.mkt a.mkt-link { color: ${GREEN} !important; font-weight: 700; text-decoration: underline !important; text-underline-offset: 3px; font-size: inherit !important; }
.mkt ul.mkt-list { margin: 0 0 0 22px !important; padding: 0 !important; }
.mkt ul.mkt-list li { list-style: disc !important; display: list-item !important; margin-bottom: 6px; }
.mkt .mkt-note { background: #f7f4ef; border: 1px solid #e2ddd5; border-radius: 10px; padding: 16px 20px; }
`;

export const Fig = ({ n, label }: { n: string; label: string }) => (
  <div className="mkt-fig">
    <div className="mkt-fig-n">{n}</div>
    <div className="mkt-fig-l">{label}</div>
  </div>
);

export const Section = ({ alt, id, children }: { alt?: boolean; id?: string; children: ReactNode }) => (
  <section className={`mkt-sec${alt ? " alt" : ""}`} id={id}>
    <div className="mkt-wrap">{children}</div>
  </section>
);

export const ReportSignup = () => (
  <NewsletterSignup
    source="afh-market-report"
    copy={{
      heading: "Get the AFH market report by email",
      body: "A short summary when each new edition is published: new licenses, ownership changes and adult family home sales in Washington.",
      cta: "Send Me the Market Report",
    }}
  />
);

export const RelatedLinks = () => (
  <ul className="mkt-list">
    <li><Link className="mkt-link" to="/afh-club/homes">Adult family home directory (every licensed home)</Link></li>
    <li><Link className="mkt-link" to="/afh-club/listings">Adult family homes for sale</Link></li>
    <li><Link className="mkt-link" to="/afh-club/sold">Recent adult family home sales</Link></li>
    <li><Link className="mkt-link" to="/afh-club/washington-afh-data">Washington AFH data by county</Link></li>
    <li><Link className="mkt-link" to="/afh-club/new-licenses">Newly licensed adult family homes</Link></li>
  </ul>
);
