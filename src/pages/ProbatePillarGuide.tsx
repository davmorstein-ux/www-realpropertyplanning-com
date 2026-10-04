import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import DisclaimerSection from "@/components/DisclaimerSection";
import AuthorByline from "@/components/AuthorByline";
import { articleAuthor, articlePublisher } from "@/lib/schema";
import { PROBATE_PILLAR } from "@/data/probatePillar";
import ProbateFlowChart, { FLOW_CHART_CSS } from "@/components/probate/ProbateFlowChart";
import { PROBATE_CSS, PROBATE_CSS_EXTRA } from "@/components/probate/probateStyles";
import { DEADLINES_PATH } from "@/data/probateFlow";

/**
 * The Washington Probate & Estate Property Guide: START PAGE (rebuilt Oct 1, 2026).
 *
 * Owner, Oct 1, 2026: the one-page guide (2,700 words, 69 links) was "a tidal
 * wave of text and nobody, not even me, can find it… break it up into multiple
 * pages and work like a simple, easy to navigate flow chart." So this page is
 * now just the title and the flow chart. Each box opens a short page
 * (src/pages/probate/ProbateFlowPage.tsx, words in src/data/probateFlow.ts),
 * and the rules table and questions moved to Deadlines & Key Rules
 * (src/pages/probate/ProbateDeadlines.tsx).
 *
 * KEEP THIS PAGE SHORT. Do not add sections back here; add them to a branch
 * page or a guide the branch pages link to.
 */

const { PATH, TITLE, DESCRIPTION, COVER } = PROBATE_PILLAR;
const CANONICAL = `https://realpropertyplanning.com${PATH}`;

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESCRIPTION,
  url: CANONICAL,
  image: `https://realpropertyplanning.com${COVER}`,
  datePublished: "2026-09-30",
  dateModified: "2026-10-01",
  author: articleAuthor,
  publisher: articlePublisher,
  about: { "@type": "Thing", name: "Probate and estate property in Washington State" },
  isPartOf: { "@type": "WebSite", name: "Real Property Planning", url: "https://realpropertyplanning.com" },
};

const HUB_CSS = `
.prp .prp-hubhead { display: grid; gap: 24px; align-items: center; grid-template-columns: minmax(0, 1fr); }
@media (min-width: 900px) { .prp .prp-hubhead { grid-template-columns: minmax(0, 1fr) 170px; } }
.prp .prp-hubhead img { width: 100%; max-width: 170px; height: auto; aspect-ratio: 3 / 4; border-radius: 8px; box-shadow: 0 10px 24px rgba(18,45,66,0.22); justify-self: center; }
@media (max-width: 899px) { .prp .prp-hubhead img { display: none; } }
`;

const ProbatePillarGuide = () => (
  <div className="prp">
    <style>{PROBATE_CSS + PROBATE_CSS_EXTRA + FLOW_CHART_CSS + HUB_CSS}</style>
    <SEOHead title={`${TITLE} | Real Property Planning`} description={DESCRIPTION} canonical={CANONICAL} ogType="article" schemaJson={schema} />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://realpropertyplanning.com" },
        { name: "Estate & Probate", url: "https://realpropertyplanning.com/probate-estate-sales" },
        { name: "Washington Probate & Estate Property Guide", url: CANONICAL },
      ]}
    />
    <Header />
    <main id="main-content">
      <section style={{ background: "#eef3f7", padding: "28px 16px 24px", borderBottom: "3px solid #25597e" }}>
        {/* index.css zeroes the first section's top padding sitewide; the gap goes inside. */}
        <div className="prp-wrap" style={{ paddingTop: 24 }}>
          <div className="prp-hubhead">
            <div>
              <p className="prp-eyebrow">Estate &amp; Probate · Start here</p>
              <h1 className="prp-h1">{TITLE}</h1>
              <p style={{ fontSize: 20, marginBottom: 0 }}>
                Answer one question about how the house was owned, and follow the box that fits you. Each box opens a short page with your
                next steps.
              </p>
            </div>
            {COVER && (
              <img
                src={COVER}
                alt="Guide cover: Washington Probate & Estate Property, The Complete Guide for Executors, Heirs & Trustees"
                width={1024}
                height={1365}
                loading="eager"
                decoding="async"
              />
            )}
          </div>
        </div>
      </section>

      <section style={{ background: "#ffffff", padding: "36px 16px 44px" }}>
        <div className="prp-wrap">
          <ProbateFlowChart />
        </div>
      </section>

      <section style={{ background: "#f7f4ef", padding: "36px 16px" }}>
        <div className="prp-wrap prp-narrow">
          <h2 className="prp-h2">What probate is, in one paragraph</h2>
          <p>{PROBATE_PILLAR.SHORT_ANSWER}</p>
          <p className="prp-small" style={{ marginBottom: 0 }}>
            Every deadline, with its statute, is on <Link className="prp-link" to={DEADLINES_PATH}>Deadlines &amp; key rules</Link>.
            General information, not legal advice. Real Property Planning does not refer clients to attorneys.
          </p>
        </div>
      </section>
    </main>
    <AuthorByline context="estate" />
    <DisclaimerSection />
    <Footer />
  </div>
);

export default ProbatePillarGuide;
