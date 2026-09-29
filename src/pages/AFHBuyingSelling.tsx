import { Link } from "react-router-dom";
import Header from "@/components/Header";
import { articleAuthor, articlePublisher } from "@/lib/schema";
import AuthorByline from "@/components/AuthorByline";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import CTASection from "@/components/CTASection";
import DisclaimerSection from "@/components/DisclaimerSection";
import BackToAFHClub from "@/components/BackToAFHClub";
import ArticleAudioPlayer from "@/components/ArticleAudioPlayer";
import audioAsset from "@/assets/afh-buying-selling.mp3.asset.json";
import IntentCTA from "@/components/IntentCTA";
import AFHBuyerSteps from "@/components/AFHBuyerSteps";

const CHOW_STEPS = [
  {
    step: "1",
    title: "Research the home thoroughly",
    body: "Use the DSHS AFH Locator to check the home's licensing status and any limits and enforcements issued in the previous three years. Ask the current owner about any ongoing limits or exemptions, any outstanding enforcement on the current license, and any specialty contracts in place. The new owner must correct all deficiencies that exist at the time of the ownership change (WAC 388-76-10105).",
  },
  {
    step: "2",
    title: "Verify specialty contracts separately",
    body: "Specialty contracts such as Expanded Community Services (ECS) and Specialized Behavior Support (SBS) do not transfer at a change of ownership. You must meet the qualifications and have your own fully executed contract before providing or billing for those services; ECS and SBS also need approval from DSHS AFH program staff. (DSHS's list also names Meaningful Day, but HCS Meaningful Day funding ended July 1, 2025.) The Medicaid contract is new too: DSHS starts it the day the new license is assigned, the day after the seller's license closes.",
  },
  {
    step: "3",
    title: "Complete all provider qualifications",
    body: "You must meet all current DSHS qualification requirements — training, certification, background check, caregiving experience — regardless of the seller's qualifications. The license does not transfer (WAC 388-76-10010). To buy a seven- or eight-bed home, you must already have been a licensed AFH provider for at least 24 months and meet the other conditions in WAC 388-76-10032.",
  },
  {
    step: "4",
    title: "Prepare the home for inspection",
    body: "DSHS inspects the home on site as part of licensing. Most applicants do not pass the first inspection, and DSHS allows at most three visits. DSHS has confirmed in writing that a home licensed continuously through the sale is held to the rules in place when it was first licensed, so the 27-inch interior door rule for homes licensed after Sept. 20, 2026 does not apply to the buyer. A home whose license has lapsed must meet current rules. Review the current building checklist (DSHS form 15-604) against the home's condition.",
  },
  {
    step: "5",
    title: "Submit a new DSHS license application",
    body: "Apply through the DSHS BAAU online portal. A change of ownership requires a complete new license application and a new license (WAC 388-76-10105). The current provider may ask DSHS in writing for priority processing to avoid disrupting residents (WAC 388-76-10107).",
  },
  {
    step: "6",
    title: "Work with a qualified real estate broker",
    body: "AFH transactions involve both real estate and licensing components. Work with a broker experienced in AFH sales who understands DSHS requirements, CHOW procedures, and how to structure the transaction properly.",
  },
];

const SELLER_CONSIDERATIONS = [
  {
    title: "Disclose all limits and enforcements",
    body: "Limits on the type of residents the home can accept, or on who can provide care, must be posted in the home. DSHS tells buyers to ask the current owner about any ongoing limits or exemptions and any outstanding enforcement on the current license, so expect those questions and answer them in writing.",
  },
  {
    title: "Understand what transfers — and what does not",
    body: "The real estate transfers. The license does not, and neither do specialty contracts or the Medicaid contract. Residents decide whether to stay or move. Medicaid residents who stay need no new assessment, but they need new authorizations under the new owner's ProviderOne number. An Exception to Rule follows the resident.",
  },
  {
    title: "AFH sale price versus residential sale price",
    body: "A licensed, operating AFH can sell for more than the same house as a residence when the buyer is also paying for the business: occupancy, staff, referral relationships and the home's inspection record. The license and specialty contracts do not transfer, so they are not something the buyer receives. A residential appraisal values the real estate only; value the business separately.",
  },
  {
    title: "Timing the DSHS process into your sale timeline",
    body: "You must give DSHS and each resident (or their representative) written notice 60 calendar days before the proposed change of ownership, naming the buyer, the resident's right to decide whether to stay or move, and any policy change that could affect them, such as whether the home will serve Medicaid residents (WAC 388-76-10106). DSHS may waive the 60 days if it grants priority processing. The buyer cannot operate until DSHS issues the new license, and DSHS will not estimate how long that takes.",
  },
];

/* Article schema. AFH guides previously emitted only BreadcrumbSchema, so
   Google had no signal that these are editorial guides rather than agent
   pages. Author/publisher is the Organization — publishing reference material
   is a hub function and makes no claim that RPP provides services. */
const afhArticleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Buying or Selling an AFH",
  description: "Complete guide to buying or selling an Adult Family Home in Washington State — CHOW process, what transfers, DSHS locator, specialty contracts, and real estate considerations.",
  url: "https://realpropertyplanning.com/afh-club/buying-selling",
  datePublished: "2026-07-24",
  dateModified: "2026-09-28",
  author: articleAuthor,
  publisher: articlePublisher,
  isPartOf: {
    "@type": "WebSite",
    name: "Real Property Planning",
    url: "https://realpropertyplanning.com",
  },
};

const AFHBuyingSelling = () => (
  <>
    <SEOHead
      title="Buying or Selling an AFH | AFH Club | Real Property Planning"
      description="Complete guide to buying or selling an Adult Family Home in Washington State — CHOW process, what transfers, DSHS locator, specialty contracts, and real estate considerations."
      canonical="https://realpropertyplanning.com/afh-club/buying-selling"
      ogType="article"
      schemaJson={afhArticleSchema}
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://realpropertyplanning.com" },
        { name: "AFH Club", url: "https://realpropertyplanning.com/afh-club" },
        { name: "Buying or Selling an AFH", url: "https://realpropertyplanning.com/afh-club/buying-selling" },
      ]}
    />
    <Header />
    <main id="main-content">
      {/* Hero */}
      <section style={{ background: "#edf0f3", padding: "64px 24px 56px", borderBottom: "3px solid #b13a44" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p
            style={{
              fontSize: 15,
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#481216",
              margin: "0 0 14px",
            }}
          >
            AFH Club · Buying or Selling
          </p>
          <h1
            style={{
              fontSize: "clamp(32px, 5vw, 50px)",
              fontFamily: "'DM Sans', system-ui, sans-serif",
              fontWeight: 700,
              color: "#292521",
              lineHeight: 1.15,
              margin: "0 0 20px",
            }}
          >
            Buying or Selling an Adult Family Home
          </h1>
          <p
            style={{
              fontSize: 18,
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 400,
              color: "#342e28",
              lineHeight: 1.85,
              margin: "0 0 16px",
              maxWidth: 680,
            }}
          >
            Buying or selling an Adult Family Home involves both a real estate transaction and a DSHS licensing process
            running in parallel. Understanding how these two tracks interact — and where they diverge — is essential for
            both buyers and sellers to protect their interests and their residents.
          </p>
        </div>
      </section>

      <section style={{ background: "#edf0f3", padding: "32px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <ArticleAudioPlayer src={audioAsset.url} title="Listen to this article" />
        </div>
      </section>

      {/* What is CHOW */}
      <section style={{ background: "#f7f4ef", padding: "72px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p
            style={{
              fontSize: 15,
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#481216",
              margin: "0 0 14px",
            }}
          >
            Key Concept
          </p>
          <h2
            style={{
              fontSize: "clamp(24px, 3.5vw, 36px)",
              fontFamily: "'DM Sans', system-ui, sans-serif",
              fontWeight: 700,
              color: "#280a0c",
              lineHeight: 1.2,
              margin: "0 0 20px",
            }}
          >
            What Is a CHOW?
          </h2>
          <p
            style={{
              fontSize: 18,
              fontFamily: "'DM Sans', sans-serif",
              color: "#1c1917",
              lineHeight: 1.85,
              margin: "0 0 20px",
            }}
          >
            CHOW stands for <strong>Change of Ownership</strong>. When an Adult Family Home is sold, DSHS requires the
            new owner to apply for a completely new AFH license. The existing license does not transfer to the buyer —
            it is valid only for the seller and that address, and it closes when the seller relinquishes or surrenders
            it.
          </p>
          <p
            style={{
              fontSize: 18,
              fontFamily: "'DM Sans', sans-serif",
              color: "#1c1917",
              lineHeight: 1.85,
              margin: "0 0 20px",
            }}
          >
            This means the buyer must meet all current DSHS qualifications, complete the same training requirements,
            pass a background check, and have the home inspected by DSHS as part of licensing — even if the home was
            recently licensed.
          </p>
          <p
            style={{
              fontSize: 18,
              fontFamily: "'DM Sans', sans-serif",
              color: "#1c1917",
              lineHeight: 1.85,
              margin: "0 0 24px",
            }}
          >
            The DSHS AFH Locator shows limits and enforcements issued in the previous three years only. Anything older,
            and anything still in progress, you learn by asking the current owner. The new owner must correct every
            deficiency that exists at the time of the ownership change.
          </p>
          <div
            style={{
              background: "#e8f2f9",
              border: "1px solid #9e2c35",
              borderLeft: "4px solid #9e2c35",
              borderRadius: 6,
              padding: "18px 22px",
            }}
          >
            <p
              style={{
                fontSize: 17,
                fontFamily: "'DM Sans', sans-serif",
                color: "#2f2a25",
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              <strong>For buyers:</strong> Check the{" "}
              <a
                href="https://fortress.wa.gov/dshs/adsaapps/lookup/AFHAdvLookup.aspx"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#9e2c35" }}
              >
                DSHS AFH Locator
              </a>{" "}
              and ask the seller directly about any ongoing limits, exemptions, or outstanding enforcement on the
              current license before making an offer.
            </p>
          </div>
        </div>
      </section>

      {/* CHOW Process for Buyers */}
      <section style={{ background: "#edf0f3", padding: "72px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p
            style={{
              fontSize: 15,
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#481216",
              margin: "0 0 14px",
            }}
          >
            For Buyers
          </p>
          <h2
            style={{
              fontSize: "clamp(24px, 3.5vw, 36px)",
              fontFamily: "'DM Sans', system-ui, sans-serif",
              fontWeight: 700,
              color: "#280a0c",
              lineHeight: 1.2,
              margin: "0 0 20px",
            }}
          >
            The CHOW Process — Step by Step
          </h2>
          <p
            style={{
              fontSize: 17,
              fontFamily: "'DM Sans', sans-serif",
              color: "#1c1917",
              lineHeight: 1.8,
              margin: "0 0 28px",
            }}
          >
            A CHOW buyer files a full license application. DSHS will not estimate how long a change-of-ownership license
            takes; a complete application avoids delays. Its posted queue showed applications received in May 2026
            being processed in late September 2026, and once an application is complete, processing can take up to 60
            days.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {CHOW_STEPS.map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: 20,
                  padding: "20px 0",
                  borderBottom: "1px solid #d0ccc4",
                  borderTop: i === 0 ? "1px solid #d0ccc4" : "none",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    flexShrink: 0,
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: "#3f3a35",
                    color: "#e8e2d9",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "'DM Sans', system-ui, sans-serif",
                    fontWeight: 700,
                    fontSize: 18,
                  }}
                >
                  {item.step}
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: 17,
                      fontFamily: "'DM Sans', system-ui, sans-serif",
                      fontWeight: 700,
                      color: "#280a0c",
                      margin: "0 0 6px",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 17,
                      fontFamily: "'DM Sans', sans-serif",
                      color: "#1c1917",
                      lineHeight: 1.75,
                      margin: 0,
                    }}
                  >
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seller Considerations */}
      <section style={{ background: "#f7f4ef", padding: "72px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p
            style={{
              fontSize: 15,
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#481216",
              margin: "0 0 14px",
            }}
          >
            For Sellers
          </p>
          <h2
            style={{
              fontSize: "clamp(24px, 3.5vw, 36px)",
              fontFamily: "'DM Sans', system-ui, sans-serif",
              fontWeight: 700,
              color: "#280a0c",
              lineHeight: 1.2,
              margin: "0 0 20px",
            }}
          >
            What Sellers Need to Know
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {SELLER_CONSIDERATIONS.map((item) => (
              <div
                key={item.title}
                style={{
                  background: "#fff",
                  border: "1px solid #dccdce",
                  borderLeft: "4px solid #b13a44",
                  borderRadius: 6,
                  padding: "22px",
                }}
              >
                <h3
                  style={{
                    fontSize: 17,
                    fontFamily: "'DM Sans', system-ui, sans-serif",
                    fontWeight: 700,
                    color: "#280a0c",
                    margin: "0 0 10px",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: 17,
                    fontFamily: "'DM Sans', sans-serif",
                    color: "#1c1917",
                    lineHeight: 1.75,
                    margin: 0,
                  }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Estate Broker CTA */}
      <section className="rpp-dark-surface" style={{ background: "#3f3a35", padding: "64px 24px" }}>
        <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
          <p
            style={{
              fontSize: 15,
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#b13a44",
              margin: "0 0 16px",
            }}
          >
            Featured Professionals
          </p>
          <h2
            style={{
              fontSize: "clamp(24px, 3.5vw, 34px)",
              fontFamily: "'DM Sans', system-ui, sans-serif",
              fontWeight: 700,
              color: "#e8e2d9",
              lineHeight: 1.2,
              margin: "0 0 20px",
            }}
          >
            Looking to Buy or Sell an AFH?
          </h2>
          <div style={{ width: 40, height: 2, background: "#b13a44", margin: "0 auto 24px", borderRadius: 1 }} />
          <p
            style={{
              fontSize: 17,
              fontFamily: "'DM Sans', sans-serif",
              color: "#e8e2d9",
              lineHeight: 1.85,
              margin: "0 0 32px",
            }}
          >
            Real Property Planning can connect you with a featured Washington licensed broker or certified appraiser.
            Licensed work is done by those professionals through their own practices, and the Find a Professional page
            lists others who work with adult family homes.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              to="/contact?reason=afh-buy-sell"
              style={{
                display: "inline-block",
                fontSize: 16,
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 700,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#e8e2d9",
                background: "#b13a44",
                padding: "14px 28px",
                borderRadius: 4,
                textDecoration: "none",
              }}
            >
              Contact Us About an AFH
            </Link>
            <a
              href="https://fortress.wa.gov/dshs/adsaapps/lookup/AFHAdvLookup.aspx"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                fontSize: 16,
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 700,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#e8e2d9",
                background: "transparent",
                padding: "14px 28px",
                borderRadius: 4,
                textDecoration: "none",
                border: "1px solid #605a54",
              }}
            >
              Search AFH Locator
            </a>
          </div>
          <p
            style={{
              fontSize: 15,
              fontFamily: "'DM Sans', sans-serif",
              color: "#e8e2d9",
              marginTop: 28,
            }}
          >
            Retiring from operating your AFH?{" "}
            <Link to="/afh-club/selling-your-business-at-retirement" style={{ color: "#e8e2d9", fontWeight: 700 }}>
              Read our guide to selling the business and the building.
            </Link>
          </p>
        </div>
      </section>

      <AuthorByline />
      <BackToAFHClub />
      <CTASection />
      <section style={{ padding: "2rem 1.5rem", background: "#faf8f4" }}>
        <AFHBuyerSteps />
      </section>
      <IntentCTA
        heading="Buying or selling an adult family home?"
        body="The business and the building can change hands together or separately. The license never does: the buyer's new license drives the timeline. Ask about your situation before setting a price or making an offer."
        buttonText="Discuss the property, the business, or both"
        reason="afh-buy-sell"
        professional="broker"
      />
      <DisclaimerSection />
    </main>
    <Footer />
  </>
);

export default AFHBuyingSelling;
