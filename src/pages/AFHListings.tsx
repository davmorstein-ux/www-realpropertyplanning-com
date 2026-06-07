import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import CTASection from "@/components/CTASection";
import DisclaimerSection from "@/components/DisclaimerSection";
import BackToAFHClub from "@/components/BackToAFHClub";
import HeroBandTitle from "@/components/HeroBandTitle";

const AFHListings = () => (
  <>
    <SEOHead
      title="AFH Listings | AFH Club | Real Property Planning"
      description="Adult Family Homes available for sale throughout Washington State — browse current listings or contact our AFH real estate broker for assistance."
      canonical="https://realpropertyplanning.com/afh-club/listings"
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://realpropertyplanning.com" },
        { name: "AFH Club", url: "https://realpropertyplanning.com/afh-club" },
        { name: "AFH Listings", url: "https://realpropertyplanning.com/afh-club/listings" },
      ]}
    />
    <Header />
    <main id="main-content">
      {/* Hero */}
      <section style={{ background: "#edf0f3", padding: "64px 24px 56px", borderBottom: "3px solid #b87333" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p
            style={{
              fontSize: "clamp(18px, 2vw, 20px)",
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 400,
              color: "#1e2a38",
              lineHeight: 1.85,
              maxWidth: 680,
            }}
          >
            Adult Family Homes available for sale throughout Washington State. Buying an AFH is a unique transaction —
            the real estate and the DSHS license are handled separately. Our AFH real estate broker can guide you
            through every step.
          </p>
        </div>
      </section>
      <HeroBandTitle>AFH Listings</HeroBandTitle>

      {/* Coming Soon */}
      <section style={{ background: "#f7f4ef", padding: "80px 24px" }}>
        <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
          <div
            style={{
              background: "#fff",
              border: "1px solid #e0d8c8",
              borderTop: "4px solid #b87333",
              borderRadius: 8,
              padding: "56px 40px",
            }}
          >
            <div style={{ fontSize: 48, marginBottom: 24 }}>🏡</div>
            <h2
              style={{
                fontSize: "clamp(26px, 3.5vw, 36px)",
                fontFamily: "Georgia, serif",
                fontWeight: 700,
                color: "#0a1628",
                margin: "0 0 16px",
              }}
            >
              Listings Coming Soon
            </h2>
            <div style={{ width: 40, height: 3, background: "#b87333", margin: "0 auto 24px", borderRadius: 1 }} />
            <p
              style={{
                fontSize: "clamp(17px, 1.8vw, 19px)",
                fontFamily: "'Raleway', sans-serif",
                color: "#1e2a38",
                lineHeight: 1.85,
                margin: "0 0 32px",
              }}
            >
              We are currently building this directory. If you have an Adult Family Home you are looking to sell, or if
              you are searching for an AFH to purchase, contact our AFH real estate broker directly for current
              opportunities throughout Washington State.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link
                to="/afh-club/real-estate-broker"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 14,
                  fontFamily: "'Raleway', sans-serif",
                  fontWeight: 700,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "#fff",
                  background: "#2c3a48",
                  padding: "14px 28px",
                  borderRadius: 4,
                  textDecoration: "none",
                  border: "2px solid #C9A84C",
                }}
              >
                Contact Our AFH Broker →
              </Link>
              <Link
                to="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 14,
                  fontFamily: "'Raleway', sans-serif",
                  fontWeight: 700,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "#1e2a38",
                  background: "transparent",
                  padding: "14px 28px",
                  borderRadius: 4,
                  textDecoration: "none",
                  border: "1px solid #b87333",
                }}
              >
                General Inquiry
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What to know about buying */}
      <section style={{ background: "#edf0f3", padding: "72px 24px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <p
            style={{
              fontSize: 14,
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#5a3200",
              margin: "0 0 14px",
            }}
          >
            Buyer's Guide
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
            What to Know Before Buying an AFH
          </h2>
          <div style={{ width: 40, height: 3, background: "#b87333", marginBottom: 32, borderRadius: 1 }} />
          {[
            {
              heading: "The license does not transfer.",
              body: "Purchasing an AFH is a Change of Ownership (CHOW). You must apply for a new DSHS license — the seller's license stays with the seller. Budget time for this process.",
            },
            {
              heading: "Specialty contracts don't transfer either.",
              body: "If the home operates under Dementia, ECS, or SBS specialty contracts, you must independently qualify and execute new contracts. These cannot be assigned to you.",
            },
            {
              heading: "Check the DSHS AFH Locator first.",
              body: "Research the current license's compliance history, any enforcement actions, and active limits before making an offer. Some violations disappear when ownership changes.",
            },
            {
              heading: "The real estate and the business are two different transactions.",
              body: "You are buying a home and acquiring a licensed care operation simultaneously. Both require professional guidance — a real estate broker who understands AFH transactions is essential.",
            },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start", marginBottom: 24 }}>
              <div
                style={{
                  flexShrink: 0,
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#b87333",
                  marginTop: 10,
                }}
              />
              <div>
                <p
                  style={{
                    fontSize: "clamp(17px, 1.8vw, 19px)",
                    fontFamily: "'Raleway', sans-serif",
                    fontWeight: 700,
                    color: "#0a1628",
                    margin: "0 0 6px",
                  }}
                >
                  {item.heading}
                </p>
                <p
                  style={{
                    fontSize: "clamp(16px, 1.6vw, 18px)",
                    fontFamily: "'Raleway', sans-serif",
                    color: "#1e2a38",
                    lineHeight: 1.8,
                    margin: 0,
                  }}
                >
                  {item.body}
                </p>
              </div>
            </div>
          ))}
          <div style={{ marginTop: 16 }}>
            <Link
              to="/afh-club/buying-selling"
              style={{
                fontSize: 14,
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 700,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#5a3200",
                textDecoration: "none",
                borderBottom: "1px solid #b87333",
                paddingBottom: 2,
              }}
            >
              Read the full Buying & Selling guide →
            </Link>
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

export default AFHListings;
