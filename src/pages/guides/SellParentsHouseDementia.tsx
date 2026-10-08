import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import DisclaimerSection from "@/components/DisclaimerSection";
import AuthorByline from "@/components/AuthorByline";
import PageFAQ from "@/components/PageFAQ";
import BackToPreviousPage from "@/components/BackToPreviousPage";
import NextQuestions from "@/components/NextQuestions";
import { articleAuthor, articlePublisher } from "@/lib/schema";
import {
  SELL_PARENTS_HOUSE_DEMENTIA, SPHD_SECTIONS as PTX_SECTIONS, SPHD_CHECKLIST as PTX_CHECKLIST, SPHD_FAQS as PTX_FAQS,
} from "@/data/sellParentsHouseDementia";

/**
 * Can You Sell a Parent's House If They Have Dementia? (Oct 8, 2026). Words live
 * in src/data/sellParentsHouseDementia.ts (shared with the prerender), where each
 * point is tied to its source. Same layout as the Medicaid-and-the-home guide.
 */

const { PATH, TITLE, DESCRIPTION, SHORT_ANSWER, PUBLISHED, REVIEWED } = SELL_PARENTS_HOUSE_DEMENTIA;
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
    { "@type": "Thing", name: "Dementia" },
    { "@type": "Thing", name: "Power of attorney" },
    { "@type": "Thing", name: "Selling a home in Washington State" },
  ],
  isPartOf: { "@type": "WebSite", name: "Real Property Planning", url: "https://realpropertyplanning.com" },
};

const A = "#5b3f8c";
const CSS = `
.ptx { background: #ffffff; }
.ptx .ptx-wrap { max-width: 960px; margin: 0 auto; }
.ptx .ptx-narrow { max-width: 760px; }
.ptx p { font-family: 'DM Sans', 'DM Sans Fallback', sans-serif !important; font-size: 18px !important; line-height: 1.7 !important; color: #1c1917 !important; margin: 0 0 14px !important; }
.ptx .ptx-eyebrow { font-size: 14px !important; font-weight: 700 !important; letter-spacing: 0.16em !important; text-transform: uppercase; color: ${A} !important; margin: 0 0 12px !important; }
.ptx h1.ptx-h1 { font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif !important; font-size: clamp(30px, 4.6vw, 44px) !important; line-height: 1.15 !important; font-weight: 700 !important; color: #14283a !important; margin: 0 0 18px !important; text-wrap: balance; }
.ptx h2.ptx-h2 { font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif !important; font-size: clamp(24px, 3.2vw, 30px) !important; line-height: 1.2 !important; font-weight: 700 !important; color: #14283a !important; margin: 0 0 14px !important; text-wrap: balance; scroll-margin-top: 180px; }
.ptx .ptx-answer { background: #ffffff; border: 1px solid #d3dfe8; border-left: 5px solid ${A}; border-radius: 10px; padding: 18px 22px; }
.ptx .ptx-answer p { font-size: 19px !important; margin: 0 !important; }
.ptx .ptx-answer .ptx-label { font-size: 14px !important; font-weight: 700 !important; letter-spacing: 0.12em !important; text-transform: uppercase; color: ${A} !important; margin: 0 0 6px !important; }
.ptx .ptx-figs { display: grid; gap: 12px; grid-template-columns: repeat(2, minmax(0, 1fr)); margin: 22px 0 8px; }
@media (min-width: 820px) { .ptx .ptx-figs { grid-template-columns: repeat(4, minmax(0, 1fr)); } }
.ptx .ptx-fig { background: #ffffff; border: 1px solid #d3dfe8; border-radius: 10px; padding: 14px 16px; }
.ptx .ptx-fig-n { font-family: 'DM Sans', 'DM Sans Fallback', sans-serif !important; font-size: clamp(26px, 3.4vw, 32px) !important; font-weight: 700 !important; color: #14283a; line-height: 1.1; font-variant-numeric: tabular-nums; }
.ptx .ptx-fig-l { font-family: 'DM Sans', 'DM Sans Fallback', sans-serif !important; font-size: 15px !important; color: #2b2825; line-height: 1.35; margin-top: 6px; }
.ptx .ptx-story { background: #fbf8f2; border: 1px solid #e2ddd5; border-left: 5px solid #8a6d3b; border-radius: 10px; padding: 20px 24px; }
.ptx .ptx-story p { font-style: italic; margin: 0 !important; }
.ptx .ptx-story .ptx-label { font-style: normal; font-size: 14px !important; font-weight: 700 !important; letter-spacing: 0.12em !important; text-transform: uppercase; color: #6b5530 !important; margin: 0 0 8px !important; }
.ptx .ptx-cites { display: flex; flex-wrap: wrap; gap: 8px; margin: 4px 0 0; }
.ptx .ptx-cites a { display: inline-flex; align-items: center; min-height: 32px; padding: 4px 12px; border-radius: 999px; border: 1px solid #c9d7e2; background: #f4f8fb; color: #1B3A6B !important; font-family: 'DM Sans', 'DM Sans Fallback', sans-serif; font-size: 14px !important; font-weight: 600; text-decoration: none !important; }
@media (hover: hover) { .ptx .ptx-cites a:hover { background: ${A}; color: #ffffff !important; } }
.ptx ol.ptx-check { margin: 0 !important; padding: 0 0 0 28px !important; list-style: decimal !important; }
.ptx ol.ptx-check li { display: list-item !important; list-style: decimal !important; font-family: 'DM Sans', 'DM Sans Fallback', sans-serif !important; font-size: 18px !important; line-height: 1.6 !important; letter-spacing: normal !important; color: #1c1917 !important; margin-bottom: 10px; padding-left: 4px; }
.ptx ol.ptx-check li::marker { color: ${A}; font-weight: 700; }
.ptx ul.ptx-related { list-style: disc !important; margin: 0 0 0 22px; padding: 0; }
.ptx ul.ptx-related li { display: list-item !important; list-style: disc !important; margin-bottom: 8px; font-family: 'DM Sans', 'DM Sans Fallback', sans-serif; font-size: 18px; }
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


const SellParentsHouseDementia = () => (
  <div className="ptx">
    <style dangerouslySetInnerHTML={{ __html: CSS }} />
    <SEOHead title={`${TITLE} | Real Property Planning`} description={DESCRIPTION} canonical={CANONICAL} ogType="article" schemaJson={schema} />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://realpropertyplanning.com" },
        { name: "Guides & Articles", url: "https://realpropertyplanning.com/guides-and-resources" },
        { name: "Selling a Parent's House When They Have Dementia", url: CANONICAL },
      ]}
    />
    <Header />
    <main id="main-content">
      <section style={{ background: "#eef3f7", padding: "36px 16px 32px", borderBottom: `3px solid ${A}` }}>
        <div className="ptx-wrap" style={{ paddingTop: 28 }}>
          <div className="ptx-narrow">
            <p className="ptx-eyebrow">Helping a parent · Washington State</p>
            <h1 className="ptx-h1">{TITLE}</h1>
            <div className="ptx-answer">
              <p className="ptx-label">The short answer</p>
              <p>{SHORT_ANSWER}</p>
            </div>
          </div>
        </div>
      </section>

      <Section bg="#ffffff">
        <BackToPreviousPage variant="top" fallback={{ href: "/helping-an-aging-parent", label: "Helping an Aging Parent" }} />
        <h2 className="ptx-h2" style={{ marginTop: 20 }}>Who can sign, in order</h2>
        <ol className="ptx-check">
          <li><a className="ptx-link" href="#can-they-sign">Your parent</a>, if they can still understand the sale.</li>
          <li><a className="ptx-link" href="#power-of-attorney">An agent under a durable power of attorney</a>, or a <a className="ptx-link" href="#trust">successor trustee</a> if the house is in a living trust.</li>
          <li><a className="ptx-link" href="#no-power-of-attorney">A court-appointed conservator</a>, with the court's permission to sell.</li>
        </ol>
        <p className="ptx-small" style={{ marginTop: 12 }}>If your parent is married, the spouse usually signs too (<a className="ptx-link" href="#spouse">see below</a>).</p>
      </Section>

      {PTX_SECTIONS.map((s, i) => (
        <Section key={s.id} id={s.id} bg={i % 2 === 0 ? "#f7f4ef" : "#ffffff"}>
          <h2 className="ptx-h2">{s.heading}</h2>
          {s.paras.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
          {s.link && (
            <p><Link className="ptx-link" to={s.link.href}>{s.link.label}</Link></p>
          )}
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
          <li><Link className="ptx-link" to="/sell-house-fund-senior-living">How to Sell a Parent's House to Pay for Senior Living</Link></li>
          <li><Link className="ptx-link" to="/power-of-attorney">Power of Attorney and Real Estate in Washington</Link></li>
          <li><Link className="ptx-link" to="/long-term-care/medicaid-and-the-family-home">Medicaid and the Family Home in Washington</Link></li>
          <li><Link className="ptx-link" to="/senior-living/memory-care">Memory care in Washington</Link></li>
        </ul>
        <div className="ptx-note" style={{ marginTop: 24 }}>
          <p style={{ marginBottom: 0 }}>
            General information, not legal or tax advice. An elder law attorney can say how these rules apply to your parent, and a CPA can run the tax numbers.
            Real Property Planning does not refer clients to attorneys.
          </p>
        </div>
      </Section>

      <PageFAQ faqs={PTX_FAQS} heading="Selling a Parent's House With Dementia: Common Questions" eyebrow="Frequently Asked Questions" id="dementia-house-sale" />
      <NextQuestions />
      <div style={{ padding: "0 16px 32px" }}>
        <div className="ptx-wrap">
          <BackToPreviousPage variant="bottom" fallback={{ href: "/helping-an-aging-parent", label: "Helping an Aging Parent" }} />
        </div>
      </div>
    </main>
    <AuthorByline context="estate" />
    <DisclaimerSection />
    <Footer />
  </div>
);

export default SellParentsHouseDementia;
