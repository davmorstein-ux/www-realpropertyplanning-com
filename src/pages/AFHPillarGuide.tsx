import HandbookDownload from "@/components/afh/HandbookDownload";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import CTASection from "@/components/CTASection";
import DisclaimerSection from "@/components/DisclaimerSection";
import BackToAFHClub from "@/components/BackToAFHClub";
import AuthorByline from "@/components/AuthorByline";
import { articleAuthor, articlePublisher } from "@/lib/schema";
import AFHFlowChart, { AFH_FLOW_CHART_CSS } from "@/components/afh/AFHFlowChart";
import { flowCss } from "@/components/flow/FlowBranchPage";
import { AFH_RULES_PATH, AFH_GREEN } from "@/data/afhFlow";

/**
 * AFH Club: Washington Adult Family Homes, The Complete Guide. START PAGE
 * (rebuilt Oct 1, 2026, like the probate guide).
 *
 * The one-page guide (paths, figures table, six long questions, terms, FAQ) was
 * a wall of text. This page is now the title and a flow chart; each box opens a
 * short page (src/pages/afh/AFHFlowPage.tsx, words in src/data/afhFlow.ts), and
 * the table, questions, terms and FAQ moved to Rules & Key Figures
 * (src/pages/afh/AFHRulesAndFigures.tsx).
 *
 * KEEP THIS PAGE SHORT. New AFH guides go into a branch page's steps.
 * Audience: buyers, sellers, owners and investors (AGENTS.md §8).
 */

const PATH = "/afh-club/washington-adult-family-home-guide";
const CANONICAL = `https://realpropertyplanning.com${PATH}`;
const TITLE = "Washington Adult Family Homes: The Complete Guide";
const COVER = "/afh-washington-guide-cover.webp";
const DESCRIPTION =
  "What a Washington adult family home is, who licenses it, what the house and the owner need, how homes are paid, and what happens when one is sold, with a path for opening, running, buying, selling or evaluating an AFH.";
const SHORT_ANSWER =
  "An adult family home is a regular house licensed by DSHS to care for two to six adults who are not related to the provider, or up to eight with DSHS approval. The license belongs to the provider, not the house, so it never transfers in a sale: every new owner applies for a new one. Most homes are paid mainly by Medicaid, at a daily rate set by each resident's CARE classification and where the home is.";

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESCRIPTION,
  url: CANONICAL,
  image: `https://realpropertyplanning.com${COVER}`,
  datePublished: "2026-09-29",
  dateModified: "2026-10-01",
  author: articleAuthor,
  publisher: articlePublisher,
  about: { "@type": "Thing", name: "Adult family homes in Washington State" },
  isPartOf: { "@type": "WebSite", name: "Real Property Planning", url: "https://realpropertyplanning.com" },
};

const HUB_CSS = `
.prp .prp-hubhead { display: grid; gap: 24px; align-items: center; grid-template-columns: minmax(0, 1fr); }
@media (min-width: 900px) { .prp .prp-hubhead { grid-template-columns: minmax(0, 1fr) 170px; } }
.prp .prp-hubhead img { width: 100%; max-width: 170px; height: auto; aspect-ratio: 3 / 4; border-radius: 8px; box-shadow: 0 10px 24px rgba(18,45,66,0.22); justify-self: center; }
@media (max-width: 899px) { .prp .prp-hubhead img { display: none; } }
`;

const AFHPillarGuide = () => (
  <div className="prp">
    <style>{flowCss(AFH_GREEN) + AFH_FLOW_CHART_CSS + HUB_CSS}</style>
    <SEOHead title={`${TITLE} | AFH Club`} description={DESCRIPTION} canonical={CANONICAL} ogType="article" schemaJson={schema} />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://realpropertyplanning.com" },
        { name: "AFH Club", url: "https://realpropertyplanning.com/afh-club" },
        { name: "Washington Adult Family Home Guide", url: CANONICAL },
      ]}
    />
    <Header />
    <main id="main-content">
      <section style={{ background: "#edf0f3", padding: "28px 16px 24px", borderBottom: `3px solid ${AFH_GREEN}` }}>
        {/* index.css zeroes the first section's top padding sitewide; the gap goes inside. */}
        <div className="prp-wrap" style={{ paddingTop: 24 }}>
          <div className="prp-hubhead">
            <div>
              <p className="prp-eyebrow">AFH Club · Start here</p>
              <h1 className="prp-h1">{TITLE}</h1>
              <p style={{ fontSize: 20, marginBottom: 0 }}>
                Pick what you want to do with an adult family home. Each box opens a short page with your next steps.
              </p>
            </div>
            <img
              src={COVER}
              alt="AFH Club reference guide cover: Washington Adult Family Homes, The Complete Guide, over a gold map of Washington State"
              width={1024}
              height={1365}
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <section style={{ background: "#ffffff", padding: "36px 16px 44px" }}>
        <div className="prp-wrap">
          <AFHFlowChart />
        </div>
      </section>

      <section style={{ background: "#ffffff", padding: "0 16px 44px" }}>
        <HandbookDownload />
      </section>

      <section style={{ background: "#f7f4ef", padding: "36px 16px" }}>
        <div className="prp-wrap prp-narrow">
          <h2 className="prp-h2">What an adult family home is, in one paragraph</h2>
          <p>{SHORT_ANSWER}</p>
          <p className="prp-small" style={{ marginBottom: 0 }}>
            Every rule and figure, with its source, is on <Link className="prp-link" to={AFH_RULES_PATH}>Rules &amp; key figures</Link>.
            General information, not legal or tax advice.
          </p>
        </div>
      </section>
    </main>
    <AuthorByline />
    <BackToAFHClub />
    <CTASection />
    <DisclaimerSection />
    <Footer />
  </div>
);

export default AFHPillarGuide;
