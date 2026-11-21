/**
 * Medicare vs. Medicaid in Washington State (Nov 20, 2026, the owner's
 * request: visitors keep asking how the two differ and how each affects
 * senior living costs; homepage tile links here).
 *
 * Every word and figure lives in src/data/medicareVsMedicaid.ts, which the
 * prerender in vite.config.ts also reads. Edit there, not here.
 *
 * Layout follows the simplified pages: short answer, three key points, two
 * comparison tables, the people-who-help box, then "More on this" folded
 * into <details> (every word stays in the HTML for search and AI tools).
 *
 * Class names start "apf-" or "mvm-" and must not contain
 * card/cta/btn/tile/section (index.css restyles those sitewide).
 */
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import HeroBandTitle from "@/components/HeroBandTitle";
import DisclaimerSection from "@/components/DisclaimerSection";
import TopicProfessionals from "@/components/TopicProfessionals";
import BackLink from "@/components/BackLink";
import PageFAQ from "@/components/PageFAQ";
import {
  MVM_PATH,
  MVM_TITLE,
  MVM_SHORT,
  MVM_KEY_POINTS,
  MVM_COMPARE,
  MVM_SETTINGS,
  MVM_FOLDS,
  MVM_FAQS,
  MVM_REVIEWED,
} from "@/data/medicareVsMedicaid";

const URL = `https://realpropertyplanning.com${MVM_PATH}`;
const NAVY = "#1B3A6B";
const GREEN = "#0f6b56";

const REVIEWED_LABEL = new Date(`${MVM_REVIEWED}T12:00:00`).toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

const PAGE_CSS = `
  .mvm-page .mvm-points { list-style: none; padding: 0; margin: 0 0 8px; display: grid; gap: 12px; }
  .mvm-page .mvm-points li { background: #ffffff; border: 1px solid #d9d2c7; border-left: 5px solid ${NAVY}; border-radius: 12px; padding: 14px 18px; font-size: 18px; line-height: 1.55; color: #1c1917; }
  .mvm-page .mvm-wrap { overflow-x: auto; margin: 0 0 8px; }
  .mvm-page table.mvm-table { width: 100%; border-collapse: collapse; background: #ffffff; font-size: 17px; line-height: 1.5; color: #1c1917; }
  .mvm-page table.mvm-table th, .mvm-page table.mvm-table td { border: 1px solid #d9d2c7; padding: 12px 14px; text-align: left; vertical-align: top; overflow-wrap: break-word; }
  .mvm-page table.mvm-table thead th { color: #ffffff; font-size: 18px; font-weight: 700; }
  .mvm-page table.mvm-table thead th.mvm-medicare { background: ${NAVY}; }
  .mvm-page table.mvm-table thead th.mvm-medicaid { background: ${GREEN}; }
  .mvm-page table.mvm-table thead th.mvm-blank { background: #f3efe8; color: #1c1917; }
  .mvm-page table.mvm-table tbody th { background: #faf8f4; font-weight: 700; width: 24%; }
  .mvm-page .mvm-stack { display: none; }
  .mvm-page .mvm-note { font-size: 16px; color: #3d3833; margin: 6px 0 0; }
  .mvm-page .mvm-reviewed { font-size: 16px; color: #3d3833; margin: 4px 0 18px; }
  .mvm-page .apf-fold-body ul { margin: 12px 0 0 1.2em; padding: 0; }
  .mvm-page .apf-fold-body li { font-size: 18px; line-height: 1.6; color: #1c1917; margin: 0 0 8px; }
  .mvm-page .mvm-links { margin: 12px 0 0; display: flex; flex-direction: column; gap: 8px; }
  .mvm-page .mvm-links a { font-size: 18px; font-weight: 700; color: ${NAVY}; }
  .mvm-page .mvm-cell-links { display: flex; flex-direction: column; gap: 6px; margin-top: 10px; }
  .mvm-page .mvm-cell-links a { font-size: 17px; font-weight: 700; color: ${NAVY}; text-decoration: underline; text-underline-offset: 3px; }
  .mvm-page .mvm-medicaid .mvm-cell-links a, .mvm-page td:last-child .mvm-cell-links a { color: ${GREEN}; }
  /* Phones: tables become stacked rows so nothing scrolls sideways. */
  @media (max-width: 699px) {
    .mvm-page .mvm-wrap { display: none; }
    .mvm-page .mvm-stack { display: grid; gap: 14px; margin: 0 0 8px; }
    .mvm-page .mvm-row { background: #ffffff; border: 1px solid #d9d2c7; border-radius: 12px; overflow: hidden; }
    .mvm-page .mvm-row-head { background: #faf8f4; font-weight: 700; font-size: 18px; padding: 10px 14px; color: #1c1917; }
    .mvm-page .mvm-row-part { padding: 10px 14px; font-size: 17px; line-height: 1.5; color: #1c1917; border-top: 1px solid #ece6dc; }
    .mvm-page .mvm-row-part strong { display: block; font-size: 15px; letter-spacing: 0; text-transform: none; }
    .mvm-page .mvm-row-part.mvm-medicare strong { color: ${NAVY}; }
    .mvm-page .mvm-row-part.mvm-medicaid strong { color: ${GREEN}; }
  }
`;

type Ext = { label: string; href: string };
type Row = { head: string; medicare: string; medicaid: string; medicareLinks?: Ext[]; medicaidLinks?: Ext[] };

/** Official sites open in a new tab; phone numbers dial; site pages use the router. */
const OutLink = ({ l }: { l: Ext }) =>
  l.href.startsWith("/") ? (
    <Link to={l.href}>{l.label}</Link>
  ) : l.href.startsWith("tel:") ? (
    <a href={l.href}>{l.label}</a>
  ) : (
    <a href={l.href} target="_blank" rel="noopener noreferrer">
      {l.label}
    </a>
  );

const CellLinks = ({ links }: { links?: Ext[] }) =>
  links && links.length ? (
    <span className="mvm-cell-links">
      {links.map((l) => (
        <OutLink key={l.href} l={l} />
      ))}
    </span>
  ) : null;

const CompareTable = ({ caption, firstCol, rows }: { caption: string; firstCol: string; rows: Row[] }) => (
  <>
    <div className="mvm-wrap">
      <table className="mvm-table">
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr>
            <th scope="col" className="mvm-blank">{firstCol}</th>
            <th scope="col" className="mvm-medicare">Medicare</th>
            <th scope="col" className="mvm-medicaid">Medicaid (Apple Health)</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.head}>
              <th scope="row">{r.head}</th>
              <td>
                {r.medicare}
                <CellLinks links={r.medicareLinks} />
              </td>
              <td>
                {r.medicaid}
                <CellLinks links={r.medicaidLinks} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className="mvm-stack">
      {rows.map((r) => (
        <div key={r.head} className="mvm-row">
          <div className="mvm-row-head">{r.head}</div>
          <div className="mvm-row-part mvm-medicare">
            <strong>Medicare</strong>
            {r.medicare}
            <CellLinks links={r.medicareLinks} />
          </div>
          <div className="mvm-row-part mvm-medicaid">
            <strong>Medicaid (Apple Health)</strong>
            {r.medicaid}
            <CellLinks links={r.medicaidLinks} />
          </div>
        </div>
      ))}
    </div>
  </>
);

const MedicareVsMedicaid = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Medicare vs. Medicaid in Washington State (WA): Differences, Costs & Senior Living | Real Property Planning"
      description="Medicare vs. Medicaid (Apple Health) in Washington State (WA): who qualifies, what each pays for, Parts A to D, which pays for assisted living, adult family homes and nursing homes, when and how to apply, taxes, and how stocks count. 2026 figures."
      canonical={URL}
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://realpropertyplanning.com/" },
        { name: "Long-Term Care", url: "https://realpropertyplanning.com/long-term-care" },
        { name: MVM_TITLE, url: URL },
      ]}
    />
    <Header />
    <main id="main-content" className="apf mvm-page">
      <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />
      <HeroBandTitle as="h1">{MVM_TITLE}</HeroBandTitle>

      <section className="py-8 md:py-12 bg-cream">
        <div className="container px-5 md:px-8">
          <div className="apf-topic">
            <p className="apf-back">
              <BackLink to="/long-term-care" label="Long-term care" />
            </p>
            <p className="mvm-reviewed">Figures checked against official sources on {REVIEWED_LABEL}.</p>

            <div className="apf-answer">
              <p className="apf-answer-label">The short answer</p>
              <p className="apf-answer-text">{MVM_SHORT}</p>
            </div>

            <h2 className="apf-h2">Three things to remember</h2>
            <ul className="mvm-points">
              {MVM_KEY_POINTS.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>

            <h2 className="apf-h2">Medicare and Medicaid side by side</h2>
            <CompareTable
              caption="Medicare and Medicaid compared"
              firstCol="Question"
              rows={MVM_COMPARE.map((r) => ({ head: r.label, medicare: r.medicare, medicaid: r.medicaid, medicareLinks: r.medicareLinks, medicaidLinks: r.medicaidLinks }))}
            />

            <h2 className="apf-h2">Who pays for each kind of senior living</h2>
            <CompareTable
              caption="Who pays for each kind of senior living in Washington State"
              firstCol="Where the person lives"
              rows={MVM_SETTINGS.map((r) => ({ head: r.setting, medicare: r.medicare, medicaid: r.medicaid }))}
            />
            <p className="mvm-note">
              Anyone who doesn't qualify for Medicaid pays for these settings privately, with savings, long-term care insurance,{" "}
              <Link to="/long-term-care/wa-cares">WA Cares</Link> or the sale of a home. See what each costs with the{" "}
              <Link to="/cost-of-care-calculator">cost of care calculator</Link>.
            </p>

            <div id="people-who-help" style={{ scrollMarginTop: 96 }}>
              <TopicProfessionals path={MVM_PATH} style={{ margin: "36px 0 0" }} />
            </div>

            <div className="apf-more">
              <h2 className="apf-h2">More on this</h2>
              {MVM_FOLDS.map((f) => (
                <details key={f.heading} className="apf-fold">
                  <summary>
                    {f.heading} <ChevronDown size={22} aria-hidden="true" />
                  </summary>
                  <div className="apf-fold-body">
                    {f.paras.map((p) => (
                      <p key={p} className="apf-fold-text">{p}</p>
                    ))}
                    {f.list && (
                      <ul>
                        {f.list.map((l) => (
                          <li key={l}>{l}</li>
                        ))}
                      </ul>
                    )}
                    {f.links && (
                      <div className="mvm-links">
                        {f.links.map((l) => (
                          <OutLink key={l.href} l={l} />
                        ))}
                      </div>
                    )}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PageFAQ faqs={MVM_FAQS.map((f) => ({ question: f.q, answer: f.a }))} />
      <DisclaimerSection />
    </main>
    <Footer />
  </div>
);

export default MedicareVsMedicaid;
