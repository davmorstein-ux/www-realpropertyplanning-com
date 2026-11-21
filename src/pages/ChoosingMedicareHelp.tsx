/**
 * How to Choose Someone to Help You With Medicare (Nov 20, 2026).
 * Every word lives in src/data/choosingMedicareHelp.ts (page and prerender).
 * Same simplified layout as /medicare-vs-medicaid. Class names start "apf-"
 * or "cmh-" and must not contain card/cta/btn/tile/section.
 * Neutral by the owner's decision: the site lists Medicare professionals.
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
  CMH_PATH,
  CMH_TITLE,
  CMH_SHORT,
  CMH_LINKS,
  CMH_TYPES,
  CMH_RULES,
  CMH_QUESTIONS,
  CMH_WARNINGS,
  CMH_FOLDS,
  CMH_FAQS,
  CMH_REVIEWED,
  type Ext,
} from "@/data/choosingMedicareHelp";

const URL = `https://realpropertyplanning.com${CMH_PATH}`;
const NAVY = "#1B3A6B";

const REVIEWED_LABEL = new Date(`${CMH_REVIEWED}T12:00:00`).toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

const PAGE_CSS = `
  .cmh-page .cmh-reviewed { font-size: 16px; color: #3d3833; margin: 4px 0 18px; }
  .cmh-page .cmh-types { list-style: none; padding: 0; margin: 0; display: grid; gap: 14px; }
  .cmh-page .cmh-types li { background: #ffffff; border: 1px solid #d9d2c7; border-left: 5px solid ${NAVY}; border-radius: 12px; padding: 16px 18px; }
  .cmh-page .cmh-types .cmh-who { display: block; font-size: 20px; font-weight: 800; color: ${NAVY}; margin: 0 0 6px; }
  .cmh-page .cmh-types .cmh-line { display: block; font-size: 18px; line-height: 1.55; color: #1c1917; margin: 4px 0 0; }
  .cmh-page .cmh-list { margin: 0 0 8px 1.3em; padding: 0; }
  .cmh-page .cmh-list li { font-size: 18px; line-height: 1.6; color: #1c1917; margin: 0 0 10px; }
  .cmh-page .cmh-box { background: #ffffff; border: 1px solid #d9d2c7; border-radius: 12px; padding: 16px 20px 6px; }
  .cmh-page .cmh-intro { font-size: 18px; line-height: 1.6; color: #1c1917; margin: 0 0 12px; }
  .cmh-page .cmh-links { margin: 12px 0 0; display: flex; flex-direction: column; gap: 8px; }
  .cmh-page .cmh-links a { font-size: 18px; font-weight: 700; color: ${NAVY}; text-decoration: underline; text-underline-offset: 3px; }
  .cmh-page .cmh-help { background: #eef3fa; border: 1px solid #c9d6ea; border-radius: 12px; padding: 18px 20px; margin: 8px 0 0; }
`;

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

const Links = ({ links }: { links: Ext[] }) => (
  <div className="cmh-links">
    {links.map((l) => (
      <OutLink key={l.href} l={l} />
    ))}
  </div>
);

const ChoosingMedicareHelp = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="How to Choose a Medicare Agent or Broker in Washington State (WA) | Real Property Planning"
      description="How to choose a Medicare agent, broker or free SHIBA counselor in Washington State (WA): how agents are paid, what Medicare doesn't allow them to do, 12 questions to ask, warning signs, and how to check a license."
      canonical={URL}
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://realpropertyplanning.com/" },
        { name: "Medicare vs. Medicaid", url: "https://realpropertyplanning.com/medicare-vs-medicaid" },
        { name: CMH_TITLE, url: URL },
      ]}
    />
    <Header />
    <main id="main-content" className="apf cmh-page">
      <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />
      <HeroBandTitle as="h1">{CMH_TITLE}</HeroBandTitle>

      <section className="py-8 md:py-12 bg-cream">
        <div className="container px-5 md:px-8">
          <div className="apf-topic">
            <p className="apf-back">
              <BackLink to="/medicare-vs-medicaid" label="Medicare vs. Medicaid" />
            </p>
            <p className="cmh-reviewed">Checked against Medicare's and Washington State's own pages on {REVIEWED_LABEL}.</p>

            <div className="apf-answer">
              <p className="apf-answer-label">The short answer</p>
              <p className="apf-answer-text">{CMH_SHORT}</p>
            </div>

            <div className="cmh-help">
              <p className="cmh-intro" style={{ margin: 0 }}>
                <strong>Free, unbiased help first:</strong> SHIBA counselors explain every option and sell nothing.
              </p>
              <Links links={[CMH_LINKS.shiba, CMH_LINKS.shibaPhone, CMH_LINKS.planCompare]} />
            </div>

            <h2 className="apf-h2">The kinds of Medicare help, and how each is paid</h2>
            <ul className="cmh-types">
              {CMH_TYPES.map((t) => (
                <li key={t.who}>
                  <span className="cmh-who">{t.who}</span>
                  <span className="cmh-line">{t.what}</span>
                  <span className="cmh-line">
                    <strong>How they're paid:</strong> {t.paid}
                  </span>
                </li>
              ))}
            </ul>

            <h2 className="apf-h2">12 questions to ask before you choose</h2>
            <div className="cmh-box">
              <ol className="cmh-list">
                {CMH_QUESTIONS.map((q) => (
                  <li key={q}>{q}</li>
                ))}
              </ol>
              <p className="cmh-intro">
                One more worth asking: <em>"If the best plan for me paid you less, would you still recommend it?"</em>
              </p>
            </div>

            <h2 className="apf-h2">What Medicare doesn't allow agents to do</h2>
            <div className="cmh-box">
              <ul className="cmh-list">
                {CMH_RULES.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
              <Links links={[CMH_LINKS.rules, CMH_LINKS.report]} />
              <div style={{ height: 12 }} />
            </div>

            <h2 className="apf-h2">Signs to slow down</h2>
            <div className="cmh-box">
              <ul className="cmh-list">
                {CMH_WARNINGS.map((w) => (
                  <li key={w}>{w}</li>
                ))}
              </ul>
              <Links links={[CMH_LINKS.oicLookup]} />
              <div style={{ height: 12 }} />
            </div>

            <div id="people-who-help" style={{ scrollMarginTop: 96 }}>
              <TopicProfessionals path={CMH_PATH} style={{ margin: "36px 0 0" }} />
            </div>

            <div className="apf-more">
              <h2 className="apf-h2">More on this</h2>
              {CMH_FOLDS.map((f) => (
                <details key={f.heading} className="apf-fold">
                  <summary>
                    {f.heading} <ChevronDown size={22} aria-hidden="true" />
                  </summary>
                  <div className="apf-fold-body">
                    {f.paras.map((p) => (
                      <p key={p} className="apf-fold-text">{p}</p>
                    ))}
                    {f.heading === "What no Medicare plan pays for" && (
                      <Links links={[{ label: "Medicare vs. Medicaid: who pays for senior living", href: "/medicare-vs-medicaid" }]} />
                    )}
                    {f.links && <Links links={f.links} />}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PageFAQ faqs={CMH_FAQS.map((f) => ({ question: f.q, answer: f.a }))} />
      <DisclaimerSection />
    </main>
    <Footer />
  </div>
);

export default ChoosingMedicareHelp;
