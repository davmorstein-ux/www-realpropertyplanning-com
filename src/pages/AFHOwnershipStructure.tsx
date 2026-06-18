/* force rebuild */
/* force rebuild */
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import CTASection from "@/components/CTASection";
import DisclaimerSection from "@/components/DisclaimerSection";
import BackToAFHClub from "@/components/BackToAFHClub";
import ArticleAudioPlayer from "@/components/ArticleAudioPlayer";
import audioAsset from "@/assets/afh-ownership-structure.mp3.asset.json";

const DECIDE_QUESTIONS = [
  {
    step: "1",
    title: "How important is financing simplicity?",
    body: "Individual ownership generally offers a smoother, more familiar path to conventional financing. Lenders are typically more comfortable underwriting a loan to a person than to a newly formed entity.",
  },
  {
    step: "2",
    title: "How important is liability separation?",
    body: "An LLC can create a clearer line between your personal assets and the property or business. If liability protection is a top priority, this separation may outweigh the added complexity.",
  },
  {
    step: "3",
    title: "Am I buying one home or building a larger business?",
    body: "If you plan to own more than one Adult Family Home, bring in partners, or build a long-term operation, an LLC structure is often better suited to support that growth.",
  },
  {
    step: "4",
    title: "Do I need a structure that supports future partners or planning?",
    body: "For buyers thinking beyond a single purchase, an LLC can make it easier to add partners, plan for succession, or organize multiple properties under one structure over time.",
  },
];

const CONSIDERATIONS = [
  {
    title: "Buying as an individual",
    body: "Buying an AFH in your own name is often the simplest option. The closing process is usually more straightforward, the paperwork is lighter, and financing may be easier to obtain. Many traditional lenders are more comfortable lending to an individual than to a newly formed LLC, which can make this route appealing for first-time buyers or owner-operators who want to move quickly. The tradeoff is liability exposure — if you own the property personally, your personal assets may be more exposed if a problem arises.",
  },
  {
    title: "Buying through an LLC",
    body: "Buying an AFH through an LLC is often attractive to buyers who want a clearer line between their personal assets and the property or business. An LLC can help create that separation and may offer more privacy as well. This structure can also be useful if you plan to own more than one AFH, bring in partners, or create a long-term business plan. The downside is that financing may be more complicated — lenders may require different underwriting, larger down payments, or higher interest rates, and there are added costs for forming and maintaining the entity.",
  },
];

const AFHOwnershipStructure = () => (
  <>
    <SEOHead
      title="AFH Ownership: Individual or LLC? | AFH Club | Real Property Planning"
      description="Should you buy an Adult Family Home as an individual or through an LLC? A guide to financing, liability, tax, and Washington State licensing considerations for AFH buyers."
      canonical="https://realpropertyplanning.com/afh-club/ownership-structure"
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://realpropertyplanning.com" },
        { name: "AFH Club", url: "https://realpropertyplanning.com/afh-club" },
        {
          name: "AFH Ownership: Individual or LLC?",
          url: "https://realpropertyplanning.com/afh-club/ownership-structure",
        },
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
            AFH Club · Ownership Structure
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
            Should You Buy an Adult Family Home as an Individual or Through an LLC?
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
            Buying an Adult Family Home is different from buying a typical house. In many cases, you are buying both a
            home and a business location — which makes ownership structure one of the most important early decisions a
            buyer can make.
          </p>
        </div>
      </section>

      {/* Why ownership structure matters */}
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
            Why Ownership Structure Matters
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
            One of the first questions buyers ask is whether they should purchase the property in their own name or
            through a limited liability company, or LLC. There is no single right answer. The best choice depends on
            your financing, your risk tolerance, your tax and estate planning goals, and whether you are buying one AFH
            or planning to build a larger business.
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
            When you buy an Adult Family Home, you are not just deciding how to hold title. You are also deciding how
            the property will be financed, how liability will be handled, and how easy it may be to transfer ownership
            later. For some buyers, simplicity is the priority. For others, liability protection matters more. In many
            cases, the right answer is a balance between convenience and protection.
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
              <strong>Before you choose a structure,</strong> it is smart to talk with a lender early. The financing
              answer may influence the ownership structure before you even make an offer.
            </p>
          </div>
        </div>
      </section>

      {/* Individual vs LLC */}
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
            The Two Paths
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
            Individual Ownership or an LLC
          </h2>
          <div style={{ width: 40, height: 3, background: "#b87333", marginBottom: 28, borderRadius: 1 }} />
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {CONSIDERATIONS.map((item) => (
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

      {/* Financing differences */}
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
            Financing
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
            Financing Differences
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
            Financing is often one of the biggest differences between the two options. Lenders are usually more familiar
            with individual borrowers than with newly formed entities. If you buy in your own name, you may have a
            smoother path to conventional financing. If you buy through an LLC, the lender may treat the transaction
            more like a business loan, which can mean more paperwork and potentially less favorable terms.
          </p>
        </div>
      </section>

      {/* Washington State considerations */}
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
            Washington State
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
            Washington State Considerations
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
            In Washington State, Adult Family Homes are regulated and licensed. Ownership changes can affect licensing,
            and in some cases may require a new application or other compliance steps. That means the ownership
            structure is not just a real estate issue — it can also affect how the AFH is licensed and whether the
            business can continue operating smoothly after the purchase.
          </p>
        </div>
      </section>

      {/* How to decide */}
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
            Making the Decision
          </p>
          <h2
            style={{
              fontSize: "clamp(24px, 3.5vw, 36px)",
              fontFamily: "Georgia, serif",
              fontWeight: 700,
              color: "#0a1628",
              lineHeight: 1.2,
              margin: "0 0 16px",
            }}
          >
            How to Decide
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
            A simple way to think about it is to ask four questions. If ease and speed matter most, individual ownership
            may be the better fit. If protection and long-term structure matter more, an LLC may be worth the added
            complexity.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {DECIDE_QUESTIONS.map((item, i) => (
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

      {/* Final thoughts */}
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
            Final Thoughts
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
            There Is No Single Best Answer
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
            The right structure depends on your goals, your lender, your legal planning, and the way you intend to
            operate the home. If you are considering an Adult Family Home purchase in Washington State, it helps to
            think about both the real estate and business sides of the transaction. The right structure can make the
            purchase easier to finance, easier to manage, and better aligned with your long-term plans.
          </p>
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
            Planning an AFH Purchase?
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
            referrals for attorneys and lenders familiar with AFH transactions.
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

export default AFHOwnershipStructure;
