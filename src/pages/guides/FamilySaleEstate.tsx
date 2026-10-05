import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import DisclaimerSection from "@/components/DisclaimerSection";
import AuthorByline from "@/components/AuthorByline";
import PageFAQ from "@/components/PageFAQ";
import BackToPreviousPage from "@/components/BackToPreviousPage";
import ProbateStartHere from "@/components/ProbateStartHere";
import NextQuestions from "@/components/NextQuestions";
import { articleAuthor, articlePublisher } from "@/lib/schema";
import {
  FAMILY_SALE, FS_SECTIONS as PTX_SECTIONS, FS_CHECKLIST as PTX_CHECKLIST, FS_FAQS as PTX_FAQS,
} from "@/data/familySaleEstate";

/**
 * Can an Executor or Trustee Buy the House, or Sell It to Family? (Oct 4,
 * 2026, Question Map step 7). Words live in src/data/familySaleEstate.ts
 * (shared with the prerender), each point tied to its source. Same layout as
 * the property-tax and mortgage guides.
 */

const { PATH, TITLE, DESCRIPTION, SHORT_ANSWER, PUBLISHED, REVIEWED } = FAMILY_SALE;
const CANONICAL = `https://realpropertyplanning.com${PATH}`;

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESCRIPTION,
  url: CANONICAL,
  datePublished: PUBLISHED,
  dateModified: REVIEWED,
  author: articleAuthor,
  publisher: articlePublisher,
  about: [
    { "@type": "Thing", name: "Fiduciary duty" },
    { "@type": "Thing", name: "Estate administration in Washington State" },
  ],
  isPartOf: { "@type": "WebSite", name: "Real Property Planning", url: "https://realpropertyplanning.com" },
};

const A = "#25597e"; // the Estate & Probate menu colour
const CSS = `
.ptx { background: #ffffff; }
.ptx .ptx-wrap { max-width: 960px; margin: 0 auto; }
.ptx .ptx-narrow { max-width: 760px; }
.ptx p { font-family: 'DM Sans', sans-serif !important; font-size: 18px !important; line-height: 1.7 !important; color: #1c1917 !important; margin: 0 0 14px !important; }
.ptx .ptx-eyebrow { font-size: 14px !important; font-weight: 700 !important; letter-spacing: 0.16em !important; text-transform: uppercase; color: ${A} !important; margin: 0 0 12px !important; }
.ptx h1.ptx-h1 { font-family: 'DM Sans', system-ui, sans-serif !important; font-size: clamp(30px, 4.6vw, 44px) !important; line-height: 1.15 !important; font-weight: 700 !important; color: #14283a !important; margin: 0 0 18px !important; text-wrap: balance; }
.ptx h2.ptx-h2 { font-family: 'DM Sans', system-ui, sans-serif !important; font-size: clamp(24px, 3.2vw, 30px) !important; line-height: 1.2 !important; font-weight: 700 !important; color: #14283a !important; margin: 0 0 14px !important; text-wrap: balance; scroll-margin-top: 180px; }
.ptx .ptx-answer { background: #ffffff; border: 1px solid #d3dfe8; border-left: 5px solid ${A}; border-radius: 10px; padding: 18px 22px; }
.ptx .ptx-answer p { font-size: 19px !important; margin: 0 !important; }
.ptx .ptx-answer .ptx-label { font-size: 14px !important; font-weight: 700 !important; letter-spacing: 0.12em !important; text-transform: uppercase; color: ${A} !important; margin: 0 0 6px !important; }
.ptx .ptx-figs { display: grid; gap: 12px; grid-template-columns: repeat(2, minmax(0, 1fr)); margin: 22px 0 8px; }
@media (min-width: 820px) { .ptx .ptx-figs { grid-template-columns: repeat(4, minmax(0, 1fr)); } }
.ptx .ptx-fig { background: #ffffff; border: 1px solid #d3dfe8; border-radius: 10px; padding: 14px 16px; }
.ptx .ptx-fig-n { font-family: 'DM Sans', sans-serif !important; font-size: clamp(26px, 3.4vw, 32px) !important; font-weight: 700 !important; color: #14283a; line-height: 1.1; font-variant-numeric: tabular-nums; }
.ptx .ptx-fig-l { font-family: 'DM Sans', sans-serif !important; font-size: 15px !important; color: #2b2825; line-height: 1.35; margin-top: 6px; }
.ptx .ptx-story { background: #fbf8f2; border: 1px solid #e2ddd5; border-left: 5px solid #8a6d3b; border-radius: 10px; padding: 20px 24px; }
.ptx .ptx-story p { font-style: italic; margin: 0 !important; }
.ptx .ptx-story .ptx-label { font-style: normal; font-size: 14px !important; font-weight: 700 !important; letter-spacing: 0.12em !important; text-transform: uppercase; color: #6b5530 !important; margin: 0 0 8px !important; }
.ptx .ptx-cites { display: flex; flex-wrap: wrap; gap: 8px; margin: 4px 0 0; }
.ptx .ptx-cites a { display: inline-flex; align-items: center; min-height: 32px; padding: 4px 12px; border-radius: 999px; border: 1px solid #c9d7e2; background: #f4f8fb; color: #1B3A6B !important; font-family: 'DM Sans', sans-serif; font-size: 14px !important; font-weight: 600; text-decoration: none !important; }
@media (hover: hover) { .ptx .ptx-cites a:hover { background: ${A}; color: #ffffff !important; } }
.ptx ol.ptx-check { margin: 0 !important; padding: 0 0 0 28px !important; list-style: decimal !important; }
.ptx ol.ptx-check li { display: list-item !important; list-style: decimal !important; font-family: 'DM Sans', sans-serif !important; font-size: 18px !important; line-height: 1.6 !important; letter-spacing: normal !important; color: #1c1917 !important; margin-bottom: 10px; padding-left: 4px; }
.ptx ol.ptx-check li::marker { color: ${A}; font-weight: 700; }
.ptx ul.ptx-related { list-style: disc !important; margin: 0 0 0 22px; padding: 0; }
.ptx ul.ptx-related li { display: list-item !important; list-style: disc !important; margin-bottom: 8px; font-family: 'DM Sans', sans-serif; font-size: 18px; }
.ptx a.ptx-link { color: #1B3A6B !important; text-decoration: underline !important; text-underline-offset: 3px; font-size: inherit !important; }
.ptx .ptx-small { font-size: 15px !important; color: #3f3a35 !important; }
.ptx .ptx-note { background: #f7f4ef; border: 1px solid #e2ddd5; border-radius: 10px; padding: 16px 20px; }
`;

const Section = ({ bg, id, children }: { bg: string; id?: string; children: React.ReactNode }) => (
  <section id={id} style={{ background: bg, padding: "44px 16px" }}>
    <div className="ptx-wrap">
      <div className="ptx-narrow">{children}</div>
    </div>
  </section>
);


const FamilySaleEstate = () => (
  <div className="ptx">
    <style dangerouslySetInnerHTML={{ __html: CSS }} />
    <SEOHead title={`${TITLE} | Real Property Planning`} description={DESCRIPTION} canonical={CANONICAL} ogType="article" schemaJson={schema} />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://realpropertyplanning.com" },
        { name: "Estate & Probate", url: "https://realpropertyplanning.com/probate-estate-sales" },
        { name: "Executor or Trustee Buying the House", url: CANONICAL },
      ]}
    />
    <Header />
    <main id="main-content">
      <ProbateStartHere />
      <section style={{ background: "#eef3f7", padding: "36px 16px 32px", borderBottom: `3px solid ${A}` }}>
        <div className="ptx-wrap" style={{ paddingTop: 28 }}>
          <div className="ptx-narrow">
            <p className="ptx-eyebrow">Estate &amp; Probate · For executors, trustees and heirs</p>
            <h1 className="ptx-h1">{TITLE}</h1>
            <div className="ptx-answer">
              <p className="ptx-label">The short answer</p>
              <p>{SHORT_ANSWER}</p>
            </div>
          </div>
        </div>
      </section>

      <Section bg="#ffffff">
        <BackToPreviousPage variant="top" fallback={{ href: "/washington-probate-guide", label: "Washington Probate Guide" }} />
      </Section>

      {PTX_SECTIONS.map((s, i) => (
        <Section key={s.id} id={s.id} bg={i % 2 === 0 ? "#f7f4ef" : "#ffffff"}>
          <h2 className="ptx-h2">{s.heading}</h2>
          {s.paras.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
          {s.cites.length > 0 && (
            <div className="ptx-cites" aria-label="Sources">
              {s.cites.map((c) => (
                <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer">{c.label}</a>
              ))}
            </div>
          )}
        </Section>
      ))}

      <Section bg={PTX_SECTIONS.length % 2 === 0 ? "#f7f4ef" : "#ffffff"} id="checklist">
        <h2 className="ptx-h2">Checklist</h2>
        <ol className="ptx-check">
          {PTX_CHECKLIST.map((c) => (
            <li key={c.slice(0, 40)}>{c}</li>
          ))}
        </ol>
      </Section>

      <Section bg={PTX_SECTIONS.length % 2 === 0 ? "#ffffff" : "#f7f4ef"}>
        <h2 className="ptx-h2">Related guides</h2>
        <ul className="ptx-related">
          <li><Link className="ptx-link" to="/guides/heirs-disagree-selling-house">When Heirs Disagree About Selling the House</Link></li>
          <li><Link className="ptx-link" to="/trustees">Trustees: Selling Trust-Held Property</Link></li>
          <li><Link className="ptx-link" to="/date-of-death-valuation-property-appraisals">Date-of-Death and Estate Appraisals</Link></li>
          <li><Link className="ptx-link" to="/guides/who-has-authority-sell-probate-property-washington">Who Has Authority to Sell the House?</Link></li>
          <li><Link className="ptx-link" to="/guides/taxes-selling-inherited-house-washington">What Taxes Apply When Selling an Inherited House?</Link></li>
        </ul>
        <div className="ptx-note" style={{ marginTop: 24 }}>
          <p style={{ marginBottom: 0 }}>
            General information, not legal advice. A sale by an executor or trustee to themselves or family is worth having the estate's attorney handle.
            Real Property Planning does not refer clients to attorneys.
          </p>
        </div>
      </Section>

      <PageFAQ faqs={PTX_FAQS} heading="Executors, Trustees and Family Sales: Common Questions" eyebrow="Frequently Asked Questions" id="family-sale-estate" />
      <NextQuestions />
      <div style={{ padding: "0 16px 32px" }}>
        <div className="ptx-wrap">
          <BackToPreviousPage variant="bottom" fallback={{ href: "/washington-probate-guide", label: "Washington Probate Guide" }} />
        </div>
      </div>
    </main>
    <AuthorByline context="estate" />
    <DisclaimerSection />
    <Footer />
  </div>
);

export default FamilySaleEstate;
