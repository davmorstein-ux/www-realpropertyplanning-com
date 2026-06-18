import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import CTASection from "@/components/CTASection";
import DisclaimerSection from "@/components/DisclaimerSection";
import BackToAFHClub from "@/components/BackToAFHClub";
import ArticleAudioPlayer from "@/components/ArticleAudioPlayer";
import audioAsset from "@/assets/afh-find-a-professional.mp3.asset.json";

const PROFESSIONAL_CATEGORIES = [
  {
    title: "Real Estate Brokers",
    icon: "🏡",
    description:
      "AFH transactions are unlike standard residential sales. A broker experienced in AFH properties understands DSHS requirements, CHOW procedures, how to value the business component alongside the real estate, and how to coordinate the sale timeline with the licensing process.",
    lookFor: [
      "Experience with CHOW transactions",
      "Understanding of DSHS licensing timelines",
      "Familiarity with AFH valuation beyond residential comps",
      "Network of AFH-related professionals",
    ],
    link: { label: "Real Property Planning — AFH Real Estate Services", href: "/contact" },
  },
  {
    title: "Certified Residential Appraisers",
    icon: "📋",
    description:
      "Appraising an AFH requires understanding both the residential market and the business operations that give the property its licensed value. A certified residential appraiser with AFH experience can provide credible valuations for sales, financing, estate settlement, or tax purposes.",
    lookFor: [
      "State-certified residential or general appraiser credential",
      "AFH or group home appraisal experience",
      "Understanding of DSHS licensing and bed capacity",
      "Familiarity with income approaches for licensed care facilities",
    ],
    link: { label: "Real Property Planning — Appraisal Services", href: "/real-estate-appraiser" },
  },
  {
    title: "AFH Management Companies",
    icon: "🏢",
    description:
      "Management companies handle day-to-day operations, staffing, compliance, and administration for AFH owners who want to invest in the business without operating it directly. Services vary widely — some manage everything from licensing to caregiver hiring; others focus on compliance and record-keeping.",
    lookFor: [
      "Washington State operating experience",
      "DSHS compliance track record",
      "Staffing and caregiver management services",
      "Transparent fee structure",
    ],
    link: null,
  },
  {
    title: "CPAs Familiar with AFH Operations",
    icon: "📊",
    description:
      "AFH tax and accounting has unique considerations — business income mixed with residential property, Medicaid rate structures, depreciation on modifications, payroll for caregivers, and licensing fee deductibility. A CPA with AFH experience will save you money and help you avoid costly errors.",
    lookFor: [
      "Experience with Medicaid-contracted small businesses",
      "Understanding of AFH-specific deductions",
      "Payroll services for caregiving staff",
      "Estate and business transition planning",
    ],
    link: { label: "Find a CPA — Resources Page", href: "/resources/cpas-financial-advisors" },
  },
  {
    title: "Elder Law & Business Attorneys",
    icon: "⚖️",
    description:
      "An attorney experienced in both elder law and small business matters can help with entity formation, CHOW purchase agreements, resident contracts, DSHS appeal processes, and succession planning. AFH providers operating as entities should have legal counsel involved from the start.",
    lookFor: [
      "Washington State elder law or healthcare licensing experience",
      "Business entity formation for care providers",
      "DSHS regulatory appeal experience",
      "AFH resident agreement drafting",
    ],
    link: { label: "Find an Attorney — Resources Page", href: "/for-attorneys" },
  },
  {
    title: "AFH Inspectors & Compliance Consultants",
    icon: "🔍",
    description:
      "Independent consultants and former DSHS licensors can conduct pre-inspection walkthroughs to identify compliance gaps before an official DSHS inspection. They can also assist with corrective action plans, record-keeping systems, and staff training compliance.",
    lookFor: [
      "DSHS inspection or licensing background",
      "Current knowledge of WAC 388-76",
      "Pre-inspection audit services",
      "Corrective action plan support",
    ],
    link: null,
  },
];

const AFHFindProfessional = () => (
  <>
    <SEOHead
      title="Find an AFH Professional | AFH Club | Real Property Planning"
      description="Directory of professional categories serving Washington State Adult Family Homes — real estate brokers, appraisers, management companies, CPAs, attorneys, and compliance consultants."
      canonical="https://realpropertyplanning.com/afh-club/find-a-professional"
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://realpropertyplanning.com" },
        { name: "AFH Club", url: "https://realpropertyplanning.com/afh-club" },
        { name: "Find a Professional", url: "https://realpropertyplanning.com/afh-club/find-a-professional" },
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
            AFH Club · Find a Professional
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
            Find an AFH Professional
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
            Running an Adult Family Home successfully requires a team of specialists who understand the unique
            intersection of residential real estate, small business operations, and DSHS regulation. This directory
            outlines the key professional categories and what to look for when selecting each one.
          </p>
          <p
            style={{
              fontSize: 18,
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 400,
              color: "#1e2a38",
              lineHeight: 1.8,
              maxWidth: 680,
            }}
          >
            Real Property Planning is a neutral resource network — we do not receive compensation for professional
            listings and do not endorse specific providers unless they are featured members of our network.
          </p>
        </div>
      </section>

      {/* Audio Player */}
      <section style={{ background: "#edf0f3", padding: "48px 24px 32px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <ArticleAudioPlayer audioSrc={audioAsset.url} />
        </div>
      </section>

      {/* Professional Categories */}
      <section style={{ background: "#f7f4ef", padding: "72px 24px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {PROFESSIONAL_CATEGORIES.map((cat, i) => (
              <div
                key={cat.title}
                style={{
                  background: "#fff",
                  border: "1px solid #ddd8cc",
                  borderTop: "4px solid #2c3a48",
                  borderRadius: 6,
                  padding: "32px 28px",
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: 20, flexWrap: "wrap" }}>
                  <div style={{ fontSize: 36, flexShrink: 0 }}>{cat.icon}</div>
                  <div style={{ flex: 1, minWidth: 240 }}>
                    <h2
                      style={{
                        fontSize: "clamp(20px, 2.5vw, 26px)",
                        fontFamily: "Georgia, serif",
                        fontWeight: 700,
                        color: "#0a1628",
                        margin: "0 0 14px",
                      }}
                    >
                      {cat.title}
                    </h2>
                    <p
                      style={{
                        fontSize: 18,
                        fontFamily: "'Raleway', sans-serif",
                        color: "#1e2a38",
                        lineHeight: 1.8,
                        margin: "0 0 20px",
                      }}
                    >
                      {cat.description}
                    </p>
                    <p
                      style={{
                        fontSize: 15,
                        fontFamily: "'Raleway', sans-serif",
                        fontWeight: 700,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "#5a3200",
                        margin: "0 0 10px",
                      }}
                    >
                      What to Look For
                    </p>
                    <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: cat.link ? 20 : 0 }}>
                      {cat.lookFor.map((item, j) => (
                        <div key={j} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                          <div
                            style={{
                              flexShrink: 0,
                              width: 6,
                              height: 6,
                              borderRadius: "50%",
                              background: "#b87333",
                              marginTop: 8,
                            }}
                          />
                          <p
                            style={{
                              fontSize: 16,
                              fontFamily: "'Raleway', sans-serif",
                              color: "#1e2a38",
                              lineHeight: 1.65,
                              margin: 0,
                            }}
                          >
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                    {cat.link &&
                      (cat.link.href.startsWith("/") ? (
                        <Link
                          to={cat.link.href}
                          style={{
                            fontSize: 16,
                            fontFamily: "'Raleway', sans-serif",
                            fontWeight: 700,
                            letterSpacing: "0.14em",
                            textTransform: "uppercase",
                            color: "#5a3200",
                            textDecoration: "none",
                            borderBottom: "1px solid #b87333",
                            paddingBottom: 2,
                          }}
                        >
                          {cat.link.label} →
                        </Link>
                      ) : (
                        <a
                          href={cat.link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            fontSize: 16,
                            fontFamily: "'Raleway', sans-serif",
                            fontWeight: 700,
                            letterSpacing: "0.14em",
                            textTransform: "uppercase",
                            color: "#5a3200",
                            textDecoration: "none",
                            borderBottom: "1px solid #b87333",
                            paddingBottom: 2,
                          }}
                        >
                          {cat.link.label} →
                        </a>
                      ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Are You a Professional CTA */}
      <section style={{ background: "#edf0f3", padding: "64px 24px" }}>
        <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
          <p
            style={{
              fontSize: 15,
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#5a3200",
              margin: "0 0 16px",
            }}
          >
            Are You a Professional?
          </p>
          <h2
            style={{
              fontSize: "clamp(22px, 3.5vw, 32px)",
              fontFamily: "Georgia, serif",
              fontWeight: 700,
              color: "#0a1628",
              lineHeight: 1.2,
              margin: "0 0 20px",
            }}
          >
            Join the Real Property Planning Network
          </h2>
          <div style={{ width: 40, height: 2, background: "#b87333", margin: "0 auto 24px", borderRadius: 1 }} />
          <p
            style={{
              fontSize: 17,
              fontFamily: "'Raleway', sans-serif",
              color: "#1e2a38",
              lineHeight: 1.85,
              margin: "0 0 28px",
            }}
          >
            Real Property Planning connects professionals who serve the AFH community with owners, buyers, and families
            throughout Washington State. If you work with Adult Family Homes and would like to be considered for a
            listing in this directory, contact us to learn more.
          </p>
          <Link
            to="/join-the-network"
            style={{
              display: "inline-block",
              fontSize: 16,
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 700,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#fff",
              background: "#2c3a48",
              padding: "14px 28px",
              borderRadius: 4,
              textDecoration: "none",
            }}
          >
            Join the Network
          </Link>
        </div>
      </section>

      <BackToAFHClub />
      <CTASection />
      <DisclaimerSection />
    </main>
    <Footer />
  </>
);

export default AFHFindProfessional;
