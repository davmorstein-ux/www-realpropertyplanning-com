import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import CTASection from "@/components/CTASection";
import DisclaimerSection from "@/components/DisclaimerSection";
import BackToAFHClub from "@/components/BackToAFHClub";

const CHOW_STEPS = [
  {
    step: "1",
    title: "Research the home thoroughly",
    body: "Use the DSHS AFH Locator to check the home's licensing status, any limits, enforcements, or exemptions issued in the previous three years. Ask the seller about any ongoing limits, outstanding enforcement, or specialty contracts in place.",
  },
  {
    step: "2",
    title: "Verify specialty contracts separately",
    body: "Specialty contracts (Meaningful Day Activities, ECS, SBS) do not transfer with ownership. If the home operates under specialty contracts, you must independently qualify and execute new contracts before providing or billing for those services.",
  },
  {
    step: "3",
    title: "Complete all provider qualifications",
    body: "You must meet all current DSHS qualification requirements — training, certification, background check, caregiving hours — regardless of the seller's qualifications. The license does not transfer.",
  },
  {
    step: "4",
    title: "Prepare the home for inspection",
    body: "Even if the home has been previously licensed, a new inspection may be required depending on the scope of the CHOW. Review the current WABO checklist against the home's current condition.",
  },
  {
    step: "5",
    title: "Submit a new DSHS license application",
    body: "Apply through the DSHS BAAU online portal. A complete license application is required — there is no abbreviated process for CHOW transactions.",
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
    body: "Sellers are obligated to disclose any ongoing limits on the license, exemptions, outstanding enforcement actions, or restrictions on the type of residents the home can accept. These must be posted in the home and disclosed to buyers.",
  },
  {
    title: "Understand what transfers — and what does not",
    body: "The real estate transfers. The license does not. Specialty contracts do not transfer. Resident relationships continue but under a new license once the buyer is approved. Plan the transition carefully to protect current residents.",
  },
  {
    title: "AFH sale price versus residential sale price",
    body: "A licensed, operating AFH typically commands a premium over the equivalent residential property. The business value — bed capacity, established compliance history, specialty contracts, referral relationships — affects pricing beyond the real estate alone.",
  },
  {
    title: "Timing the DSHS process into your sale timeline",
    body: "CHOW requires the buyer to obtain a new license before they can operate the home. There is no fixed processing timeline. Sales involving operational transitions of residents require careful coordination between seller, buyer, DSHS, and legal counsel.",
  },
];

const AFHBuyingSelling = () => (
  <>
    <SEOHead
      title="Buying or Selling an AFH | AFH Club | Real Property Planning"
      description="Complete guide to buying or selling an Adult Family Home in Washington State — CHOW process, what transfers, DSHS locator, specialty contracts, and real estate considerations."
      canonical="https://realpropertyplanning.com/afh-club/buying-selling"
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
      <section style={{ background: "#edf0f3", padding: "64px 24px 56px", borderBottom: "3px solid #b87333" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p
            style={{
              fontSize: 15,
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#5a3200",
              margin: "0 0 14px",
            }}
          >
            AFH Club · Buying or Selling
          </p>
          <h1
            style={{
              fontSize: "clamp(32px, 5vw, 50px)",
              fontFamily: "Georgia, serif",
              fontWeight: 700,
              color: "#1a2530",
              lineHeight: 1.15,
              margin: "0 0 20px",
            }}
          >
            Buying or Selling an Adult Family Home
          </h1>
          <div style={{ width: 48, height: 3, background: "#b87333", marginBottom: 28, borderRadius: 1 }} />
          <p
            style={{
              fontSize: 18,
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 400,
              color: "#1e2e3e",
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

      {/* What is CHOW */}
      <section style={{ background: "#f7f4ef", padding: "72px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p
            style={{
              fontSize: 15,
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#5a3200",
              margin: "0 0 14px",
            }}
          >
            Key Concept
          </p>
          <h2
            style={{
              fontSize: "clamp(24px, 3.5vw, 36px)",
              fontFamily: "Georgia, serif",
              fontWeight: 700,
              color: "#0a1628",
              lineHeight: 1.2,
              margin: "0 0 20px",
            }}
          >
            What Is a CHOW?
          </h2>
          <div style={{ width: 40, height: 3, background: "#b87333", marginBottom: 28, borderRadius: 1 }} />
          <p
            style={{
              fontSize: 18,
              fontFamily: "'Raleway', sans-serif",
              color: "#1e2a38",
              lineHeight: 1.85,
              margin: "0 0 20px",
            }}
          >
            CHOW stands for <strong>Change of Ownership</strong>. When an Adult Family Home is sold, DSHS requires the
            new owner to apply for a completely new AFH license. The existing license does not transfer to the buyer —
            it remains with the seller until it expires or is surrendered.
          </p>
          <p
            style={{
              fontSize: 18,
              fontFamily: "'Raleway', sans-serif",
              color: "#1e2a38",
              lineHeight: 1.85,
              margin: "0 0 20px",
            }}
          >
            This means the buyer must meet all current DSHS qualifications, complete the same training requirements,
            pass a background check, and in most cases have the home re-inspected — even if the home was recently
            licensed.
          </p>
          <p
            style={{
              fontSize: 18,
              fontFamily: "'Raleway', sans-serif",
              color: "#1e2a38",
              lineHeight: 1.85,
              margin: "0 0 24px",
            }}
          >
            Because violations are tied to the license rather than the physical home, a buyer's public record for that
            address may appear clean even if the previous operator had significant enforcement history. Always research
            the seller's license history directly — not just the address.
          </p>
          <div
            style={{
              background: "#e8f2f9",
              border: "1px solid #2c6e9e",
              borderLeft: "4px solid #2c6e9e",
              borderRadius: 6,
              padding: "18px 22px",
            }}
          >
            <p
              style={{
                fontSize: 17,
                fontFamily: "'Raleway', sans-serif",
                color: "#1a2a3a",
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              <strong>For buyers:</strong> Check the{" "}
              <a
                href="https://fortress.wa.gov/dshs/adsaapps/lookup/AFHAdvLookup.aspx"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#2c6e9e" }}
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
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#5a3200",
              margin: "0 0 14px",
            }}
          >
            For Buyers
          </p>
          <h2
            style={{
              fontSize: "clamp(24px, 3.5vw, 36px)",
              fontFamily: "Georgia, serif",
              fontWeight: 700,
              color: "#0a1628",
              lineHeight: 1.2,
              margin: "0 0 20px",
            }}
          >
            The CHOW Process — Step by Step
          </h2>
          <div style={{ width: 40, height: 3, background: "#b87333", marginBottom: 16, borderRadius: 1 }} />
          <p
            style={{
              fontSize: 17,
              fontFamily: "'Raleway', sans-serif",
              color: "#1e2a38",
              lineHeight: 1.8,
              margin: "0 0 28px",
            }}
          >
            There is no abbreviated licensing path for CHOW buyers. Plan for the same timeline as a new applicant —
            typically several months from application to license issuance.
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
                    background: "#2c3a48",
                    color: "#e8e2d9",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "Georgia, serif",
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
                      fontFamily: "Georgia, serif",
                      fontWeight: 700,
                      color: "#0a1628",
                      margin: "0 0 6px",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 17,
                      fontFamily: "'Raleway', sans-serif",
                      color: "#1e2a38",
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
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#5a3200",
              margin: "0 0 14px",
            }}
          >
            For Sellers
          </p>
          <h2
            style={{
              fontSize: "clamp(24px, 3.5vw, 36px)",
              fontFamily: "Georgia, serif",
              fontWeight: 700,
              color: "#0a1628",
              lineHeight: 1.2,
              margin: "0 0 20px",
            }}
          >
            What Sellers Need to Know
          </h2>
          <div style={{ width: 40, height: 3, background: "#b87333", marginBottom: 28, borderRadius: 1 }} />
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {SELLER_CONSIDERATIONS.map((item) => (
              <div
                key={item.title}
                style={{
                  background: "#fff",
                  border: "1px solid #ddd8cc",
                  borderLeft: "4px solid #b87333",
                  borderRadius: 6,
                  padding: "22px",
                }}
              >
                <h3
                  style={{
                    fontSize: 17,
                    fontFamily: "Georgia, serif",
                    fontWeight: 700,
                    color: "#0a1628",
                    margin: "0 0 10px",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: 17,
                    fontFamily: "'Raleway', sans-serif",
                    color: "#1e2a38",
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
      <section style={{ background: "#2c3a48", padding: "64px 24px" }}>
        <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
          <p
            style={{
              fontSize: 15,
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#b87333",
              margin: "0 0 16px",
            }}
          >
            Real Estate Services
          </p>
          <h2
            style={{
              fontSize: "clamp(24px, 3.5vw, 34px)",
              fontFamily: "Georgia, serif",
              fontWeight: 700,
              color: "#e8e2d9",
              lineHeight: 1.2,
              margin: "0 0 20px",
            }}
          >
            Looking to Buy or Sell an AFH?
          </h2>
          <div style={{ width: 40, height: 2, background: "#b87333", margin: "0 auto 24px", borderRadius: 1 }} />
          <p
            style={{
              fontSize: 17,
              fontFamily: "'Raleway', sans-serif",
              color: "#e8e2d9",
              lineHeight: 1.85,
              margin: "0 0 32px",
            }}
          >
            Real Property Planning maintains a network of resources for those buying or selling Adult Family Homes
            throughout Washington State — including real estate broker services, appraisal support, and professional
            referrals for attorneys familiar with AFH transactions.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              to="/contact"
              style={{
                display: "inline-block",
                fontSize: 16,
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 700,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#e8e2d9",
                background: "#b87333",
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
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 700,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#e8e2d9",
                background: "transparent",
                padding: "14px 28px",
                borderRadius: 4,
                textDecoration: "none",
                border: "1px solid #4a5a6a",
              }}
            >
              Search AFH Locator
            </a>
          </div>
        </div>
      </section>

      <BackToAFHClub />
      <CTASection />
      <DisclaimerSection />
    </main>
    <Footer />
  </>
);

export default AFHBuyingSelling;
