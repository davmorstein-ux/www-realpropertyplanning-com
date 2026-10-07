import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import DisclaimerSection from "@/components/DisclaimerSection";
import AuthorByline from "@/components/AuthorByline";
import PageFAQ from "@/components/PageFAQ";
import BackToAFHClub from "@/components/BackToAFHClub";
import { articleAuthor, articlePublisher } from "@/lib/schema";
import { AFH_GREEN, AFH_FLOW_BASE } from "@/data/afhFlow";
import { BEFORE_YOU_BUY, BYB_LAYERS, BYB_CLAIMS, BYB_FAQS, type BybLink } from "@/data/afhBeforeYouBuy";

/**
 * Before You Buy an Adult Family Home: What to Verify (Oct 3, 2026). Words in
 * src/data/afhBeforeYouBuy.ts (shared with the prerender). Linked from the
 * Buying box of the AFH flow chart. Scoped "byb-" classes with !important to
 * survive index.css; no "section" in class names (index.css pads those).
 */

const { PATH, TITLE, DESCRIPTION, SHORT_ANSWER, PUBLISHED, REVIEWED } = BEFORE_YOU_BUY;
const CANONICAL = `https://realpropertyplanning.com${PATH}`;
const HANDBOOK_PDF = "/downloads/afh-club-handbook.pdf";
const G = AFH_GREEN;

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
  about: [{ "@type": "Thing", name: "Buying an adult family home in Washington State" }],
  isPartOf: { "@type": "WebSite", name: "Real Property Planning", url: "https://realpropertyplanning.com" },
};

const CSS = `
.byb { background: #ffffff; }
.byb .byb-wrap { max-width: 960px; margin: 0 auto; }
.byb p { font-family: 'DM Sans', 'DM Sans Fallback', sans-serif !important; font-size: 18px !important; line-height: 1.65 !important; color: #1c1917 !important; margin: 0 0 14px !important; }
.byb .byb-eyebrow.byb-eyebrow { font-size: 14px !important; font-weight: 700 !important; letter-spacing: 0.16em !important; text-transform: uppercase; color: ${G} !important; margin: 0 0 12px !important; }
.byb h1.byb-h1 { font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif !important; font-size: clamp(30px, 4.6vw, 44px) !important; line-height: 1.15 !important; font-weight: 700 !important; color: #14283a !important; margin: 0 0 18px !important; text-wrap: balance; }
.byb h2.byb-h2 { font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif !important; font-size: clamp(24px, 3.2vw, 30px) !important; line-height: 1.2 !important; font-weight: 700 !important; color: #14283a !important; margin: 0 0 8px !important; text-wrap: balance; }
.byb .byb-answer { background: #ffffff; border: 1px solid #c9dbd5; border-left: 5px solid ${G}; border-radius: 10px; padding: 18px 22px; }
.byb .byb-answer p { font-size: 19px !important; margin: 0 !important; }
.byb .byb-answer .byb-label.byb-label { font-size: 14px !important; font-weight: 700 !important; letter-spacing: 0.12em !important; text-transform: uppercase; color: ${G} !important; margin: 0 0 6px !important; }
.byb .byb-layers { display: grid; gap: 14px; margin-top: 20px; }
.byb .byb-layer { display: grid; grid-template-columns: 48px minmax(0, 1fr); gap: 16px; background: #ffffff; border: 1px solid #d5e2dd; border-radius: 12px; padding: 18px 20px; }
.byb .byb-num { width: 44px; height: 44px; border-radius: 50%; background: ${G}; color: #ffffff; display: flex; align-items: center; justify-content: center; font-family: 'DM Sans', 'DM Sans Fallback', sans-serif; font-size: 20px !important; font-weight: 700 !important; }
.byb h3.byb-h3 { font-family: 'DM Sans', 'DM Sans Fallback', sans-serif !important; font-size: 21px !important; font-weight: 700 !important; color: #14283a !important; margin: 8px 0 8px !important; line-height: 1.25 !important; }
.byb ul.byb-qs { margin: 0 0 10px !important; padding: 0 0 0 20px !important; list-style: disc !important; }
.byb ul.byb-qs li { display: list-item !important; list-style: disc !important; font-family: 'DM Sans', 'DM Sans Fallback', sans-serif !important; font-size: 17px !important; line-height: 1.55 !important; color: #1c1917 !important; margin-bottom: 6px; }
.byb a.byb-link { color: ${G} !important; font-weight: 700 !important; text-decoration: underline !important; text-underline-offset: 3px; font-size: 16px !important; }
.byb a.byb-cite { display: inline-flex; margin-left: 10px; padding: 2px 10px; border-radius: 999px; border: 1px solid #c9dbd5; background: #f2f7f5; color: #14283a !important; font-size: 14px !important; font-weight: 600 !important; text-decoration: none !important; }
.byb .byb-tablewrap { overflow-x: auto; margin-top: 18px; border: 1px solid #d5e2dd; border-radius: 12px; background: #ffffff; }
.byb table.byb-table { width: 100%; border-collapse: collapse; min-width: 640px; }
.byb .byb-table th { text-align: left; padding: 12px 14px; background: ${G}; color: #ffffff !important; font-family: 'DM Sans', 'DM Sans Fallback', sans-serif; font-size: 15px !important; font-weight: 700 !important; letter-spacing: 0.04em; }
.byb .byb-table td { padding: 12px 14px; border-top: 1px solid #e3ece8; vertical-align: top; font-family: 'DM Sans', 'DM Sans Fallback', sans-serif; font-size: 17px !important; line-height: 1.5 !important; color: #1c1917 !important; }
.byb .byb-table td.byb-claim { font-weight: 700 !important; color: #14283a !important; width: 30%; }
.byb .byb-table td.byb-where { white-space: nowrap; }
.byb .byb-note { background: #f2f7f5; border: 1px solid #c9dbd5; border-radius: 12px; padding: 18px 22px; }
.byb a.byb-dl { display: inline-flex; align-items: center; gap: 10px; min-height: 48px; padding: 10px 20px; border-radius: 10px; background: ${G}; color: #ffffff !important; font-family: 'DM Sans', 'DM Sans Fallback', sans-serif; font-size: 17px !important; font-weight: 700 !important; text-decoration: none !important; }
@media (hover: hover) { .byb a.byb-dl:hover { background: #073f35; } }
@media (max-width: 640px) {
  .byb .byb-layer { grid-template-columns: 1fr; gap: 6px; padding: 16px; }
  .byb .byb-table td.byb-where { white-space: normal; }
}
`;

const Block = ({ bg, children }: { bg: string; children: React.ReactNode }) => (
  <div style={{ background: bg, padding: "44px 16px" }}>
    <div className="byb-wrap">{children}</div>
  </div>
);

const Go = ({ l }: { l: BybLink }) =>
  l.external ? (
    <a className="byb-link" href={l.href} target="_blank" rel="noopener noreferrer">{l.label} ↗</a>
  ) : (
    <Link className="byb-link" to={l.href}>{l.label} →</Link>
  );

const AFHBeforeYouBuy = () => (
  <div className="byb">
    <style dangerouslySetInnerHTML={{ __html: CSS }} />
    <SEOHead title={`${TITLE} | AFH Club`} description={DESCRIPTION} canonical={CANONICAL} ogType="article" schemaJson={schema} />
    <BreadcrumbSchema
      items={[
        { name: "AFH Club", url: "/afh-club" },
        { name: "Washington AFH Guide", url: AFH_FLOW_BASE },
        { name: "Before You Buy", url: PATH },
      ]}
    />
    <Header />
    <main id="main-content">
      <div style={{ background: "#edf0f3", padding: "36px 16px 32px", borderBottom: `3px solid ${G}` }}>
        <div className="byb-wrap" style={{ paddingTop: 28 }}>
          <p className="byb-eyebrow">AFH Club · For buyers</p>
          <h1 className="byb-h1">{TITLE}</h1>
          <div className="byb-answer">
            <p className="byb-label">The short answer</p>
            <p>{SHORT_ANSWER}</p>
          </div>
        </div>
      </div>

      <Block bg="#ffffff">
        <h2 className="byb-h2">The seven layers</h2>
        <p>Work through them in order. Each one links to the guide that covers it in full.</p>
        <div className="byb-layers">
          {BYB_LAYERS.map((l) => (
            <div key={l.n} className="byb-layer">
              <div className="byb-num" aria-hidden="true">{l.n}</div>
              <div>
                <h3 className="byb-h3">{l.name}</h3>
                <ul className="byb-qs">
                  {l.questions.map((q) => <li key={q.slice(0, 40)}>{q}</li>)}
                </ul>
                <Go l={l.link} />
                {l.cite && <a className="byb-cite" href={l.cite.href} target="_blank" rel="noopener noreferrer">{l.cite.label}</a>}
              </div>
            </div>
          ))}
        </div>
      </Block>

      <Block bg="#f4f7f6">
        <h2 className="byb-h2">Sales claims to verify</h2>
        <p>Each of these can be true. None should be taken on trust. Asking for proof is ordinary due diligence, not distrust.</p>
        <div className="byb-tablewrap">
          <table className="byb-table">
            <thead>
              <tr><th scope="col">You hear</th><th scope="col">Ask for</th><th scope="col">More</th></tr>
            </thead>
            <tbody>
              {BYB_CLAIMS.map((c) => (
                <tr key={c.claim}>
                  <td className="byb-claim">{c.claim}</td>
                  <td>{c.verify}</td>
                  <td className="byb-where"><Go l={c.link} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Block>

      <Block bg="#ffffff">
        <div className="byb-note">
          <p style={{ fontWeight: 700 }}>The question to end on</p>
          <p>
            Not &ldquo;is this a good adult family home?&rdquo; but &ldquo;is this the right home for this buyer, at this price, under these assumptions?&rdquo;
            A house that needs work can be a good buy at the right price. A beautiful operating home can be a poor one if the price counts income you won&apos;t keep.
          </p>
          <p style={{ marginBottom: 16 }}>
            Want the whole picture in one place? <strong>The AFH Club Handbook</strong> covers buying, owning, operating and selling, as a free PDF.
          </p>
          <a className="byb-dl" href={HANDBOOK_PDF} download>Download the AFH Club Handbook (PDF)</a>
        </div>
        <p style={{ marginTop: 22 }}>
          Back to the <Link className="byb-link" to={`${AFH_FLOW_BASE}/buying`}>Buying an Adult Family Home</Link> steps, or the <Link className="byb-link" to={AFH_FLOW_BASE}>Washington AFH Guide</Link>.
        </p>
      </Block>

      <PageFAQ faqs={BYB_FAQS} heading="Before You Buy: Common Questions" eyebrow="Frequently Asked Questions" id="afh-before-you-buy" />
    </main>
    <AuthorByline context="afh" />
    <BackToAFHClub />
    <DisclaimerSection />
    <Footer />
  </div>
);

export default AFHBeforeYouBuy;
