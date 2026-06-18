import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import CTASection from "@/components/CTASection";
import DisclaimerSection from "@/components/DisclaimerSection";
import BackToAFHClub from "@/components/BackToAFHClub";
import ArticleAudioPlayer from "@/components/ArticleAudioPlayer";
import audioAsset from "@/assets/afh-costs-fees.mp3.asset.json";

const STARTUP_COSTS = [
  {
    category: "DSHS Annual License Fee",
    amount: "$450 per licensed bed",
    detail:
      "Effective July 1, 2025 (doubled from $225/bed). A 6-bed home pays $2,700/year. Due annually — late payment triggers a stop-placement order.",
    source: "ESSB 5167 / DSHS Letter 2025-016",
  },
  {
    category: "Background Checks",
    amount: "$40–$80 per person",
    detail:
      "Required for provider, all household members, and staff. Must be renewed every two years for ongoing employees.",
    source: "WAC 388-76-10135",
  },
  {
    category: "HCA Training (75 hours)",
    amount: "$800–$2,000",
    detail:
      "Tuition varies by training provider. The Long-Term Care Foundation may cover this cost for Medicaid-contracted AFHs through the Training Network.",
    source: "WAC 388-112A",
  },
  {
    category: "HCA Certification Exam",
    amount: "~$125",
    detail: "DOH exam fee. Scheduling changed as of February 2024 — contact DOH for current process.",
    source: "Washington DOH",
  },
  {
    category: "AFH Administrator Training",
    amount: "$300–$600",
    detail: "Offered through contracted community colleges. North Seattle College is one primary provider.",
    source: "WAC 388-112A-0800",
  },
  {
    category: "CPR & First Aid",
    amount: "$50–$150",
    detail: "Varies by provider. Must remain current throughout licensure.",
    source: "WAC 388-76-10120",
  },
  {
    category: "Building Modifications",
    amount: "$2,000–$30,000+",
    detail:
      "Highly variable. Ramps, bathroom modifications, window upgrades, and fire safety improvements are common. Septic upgrades can cost significantly more.",
    source: "WAC 51-51-0330",
  },
  {
    category: "Remodel & Building Permits",
    amount: "$500–$3,000+",
    detail:
      "Permit fees vary by jurisdiction and scope of work. Some jurisdictions have flat AFH permit fees; others charge by project cost.",
    source: "Local jurisdiction",
  },
  {
    category: "Liability Insurance",
    amount: "$1,900–$2,800/year",
    detail:
      "Required by WAC 388-76-10191. Annual per-bed premiums ranged from $318 (2019) to $473 (2024) per bed per year. For a 6-bed home, expect approximately $1,900–$2,800 annually. Some insurers have training requirements beyond DSHS minimums.",
    source: "WA OIC 2025 Report",
  },
  {
    category: "Business Registration",
    amount: "$90–$200",
    detail:
      "Required with the Washington Secretary of State and Department of Revenue. Entity providers (LLCs, corporations) have additional formation costs.",
    source: "WA Dept. of Revenue",
  },
];

const REVENUE_CONTEXT = [
  {
    label: "Private pay (private room)",
    amount: "$5,000–$7,500+/month",
    note: "Per resident. Market rate varies significantly by location and level of care.",
  },
  {
    label: "Medicaid daily rate",
    amount: "Varies by classification",
    note: "Rates set by WAC 388-105. Increased July 1, 2024. Depends on county, care level, and specialty contracts.",
  },
  {
    label: "Maximum residents (standard)",
    amount: "6 residents",
    note: "Expansion to 7–8 possible for qualified homes with clean compliance history under RCW 70.128.066.",
  },
];

const AFHCostsFees = () => (
  <>
    <SEOHead
      title="AFH Costs & Fees | AFH Club | Real Property Planning"
      description="Complete breakdown of Washington State Adult Family Home startup costs, annual licensing fees, liability insurance, building permits, and Medicaid rate information for 2025."
      canonical="https://realpropertyplanning.com/afh-club/costs-fees"
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://realpropertyplanning.com" },
        { name: "AFH Club", url: "https://realpropertyplanning.com/afh-club" },
        { name: "Costs & Fees", url: "https://realpropertyplanning.com/afh-club/costs-fees" },
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
            AFH Club · Costs & Fees
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
            AFH Costs & Fees in Washington State
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
            Opening an Adult Family Home involves a range of startup costs that can surprise unprepared applicants. This
            page provides a realistic breakdown of fees, licensing costs, and ongoing expenses — updated for 2025 — so
            you can plan with clear eyes.
          </p>
          <div
            style={{
              background: "#fdf3e8",
              border: "1px solid #b87333",
              borderLeft: "4px solid #b87333",
              borderRadius: 6,
              padding: "16px 20px",
              maxWidth: 680,
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
              <strong>2025 fee increase:</strong> Effective July 1, 2025, the annual DSHS licensing fee doubled from
              $225 to $450 per bed as part of the state budget (ESSB 5167). Plan accordingly.
            </p>
          </div>
        </div>
      </section>

      {/* Audio Player */}
      <section style={{ background: "#edf0f3", padding: "0 24px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <ArticleAudioPlayer audioSrc={audioAsset.url} />
        </div>
      </section>

      {/* Startup Cost Table */}
      <section style={{ background: "#f7f4ef", padding: "72px 24px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
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
            Startup & Ongoing
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
            Cost Breakdown
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
            Total startup costs before first revenue typically range from <strong>$20,000 to $50,000 or more</strong>{" "}
            depending on the condition of your home, your prior training, and your jurisdiction's permit fees. Building
            modifications are the largest and most variable expense.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {STARTUP_COSTS.map((item, i) => (
              <div
                key={i}
                style={{
                  padding: "20px 0",
                  borderBottom: "1px solid #ddd8cc",
                  borderTop: i === 0 ? "1px solid #ddd8cc" : "none",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                    gap: 8,
                    marginBottom: 6,
                  }}
                >
                  <h3
                    style={{ fontSize: 17, fontFamily: "Georgia, serif", fontWeight: 700, color: "#0a1628", margin: 0 }}
                  >
                    {item.category}
                  </h3>
                  <span
                    style={{
                      fontSize: 17,
                      fontFamily: "'Raleway', sans-serif",
                      fontWeight: 700,
                      color: "#5a3200",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item.amount}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: 17,
                    fontFamily: "'Raleway', sans-serif",
                    color: "#1e2a38",
                    lineHeight: 1.7,
                    margin: "0 0 4px",
                  }}
                >
                  {item.detail}
                </p>
                <p
                  style={{
                    fontSize: 15,
                    fontFamily: "'Raleway', sans-serif",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#1e2a38",
                    margin: 0,
                  }}
                >
                  Source: {item.source}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Liability Insurance Detail */}
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
            Important Note
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
            Liability Insurance — Plan Ahead
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
            Liability insurance is required for all licensed AFHs under WAC 388-76-10191 through 10192. Coverage for
            AFHs in Washington typically comes from surplus lines insurers and risk retention groups — not the standard
            homeowner's insurance market.
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
            A 2025 report by the Washington Office of the Insurance Commissioner found that the annual per-bed premium
            ranged from $318 (2019) to $473 (2024). For a 6-bed home this equates to approximately $1,900–$2,800 per
            year. Some insurers impose training and experience requirements above and beyond what DSHS requires for
            licensure.
          </p>
          <div
            style={{
              background: "#fdecea",
              border: "1px solid #c0392b",
              borderLeft: "4px solid #c0392b",
              borderRadius: 6,
              padding: "18px 22px",
            }}
          >
            <p
              style={{
                fontSize: 17,
                fontFamily: "'Raleway', sans-serif",
                color: "#1a0a0a",
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              <strong>Research your insurance options before applying for licensure.</strong> DSHS has noted that some
              homes face difficulty obtaining insurance. Insurance company requirements may affect your training
              timeline and startup plan. Do not wait until your license is issued to begin the insurance search.
            </p>
          </div>
        </div>
      </section>

      {/* Revenue Context */}
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
            Revenue Context
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
            Understanding AFH Revenue
          </h2>
          <div style={{ width: 40, height: 3, background: "#b87333", marginBottom: 28, borderRadius: 1 }} />
          <p
            style={{
              fontSize: 18,
              fontFamily: "'Raleway', sans-serif",
              color: "#1e2a38",
              lineHeight: 1.85,
              margin: "0 0 24px",
            }}
          >
            AFH revenue comes from private pay, Medicaid (for contracted homes), or a combination of both. Private pay
            rates in Washington typically start at $5,000 per month per resident for a private room, with averages
            reported between $3,800 and $6,750 depending on location and level of care.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 28 }}>
            {REVENUE_CONTEXT.map((item, i) => (
              <div
                key={i}
                style={{
                  background: "#fff",
                  border: "1px solid #ddd8cc",
                  borderLeft: "4px solid #2c3a48",
                  borderRadius: 6,
                  padding: "18px 22px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                  gap: 12,
                }}
              >
                <div>
                  <p
                    style={{
                      fontSize: 18,
                      fontFamily: "'Raleway', sans-serif",
                      fontWeight: 700,
                      color: "#0a1628",
                      margin: "0 0 4px",
                    }}
                  >
                    {item.label}
                  </p>
                  <p
                    style={{
                      fontSize: 16,
                      fontFamily: "'Raleway', sans-serif",
                      color: "#1e2a38",
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {item.note}
                  </p>
                </div>
                <span
                  style={{
                    fontSize: 18,
                    fontFamily: "Georgia, serif",
                    fontWeight: 700,
                    color: "#5a3200",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.amount}
                </span>
              </div>
            ))}
          </div>
          <p
            style={{
              fontSize: 17,
              fontFamily: "'Raleway', sans-serif",
              color: "#1e2a38",
              lineHeight: 1.85,
              margin: "0 0 20px",
            }}
          >
            Medicaid rates are governed by WAC 388-105 and were increased effective July 1, 2024. Rates vary by county,
            care classification, and specialty contract type. Homes with specialty contracts (Dementia, ECS, SBS)
            qualify for higher rates but must meet additional training and qualification requirements.
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
              Allow 3–6 months from application to first resident. Homes typically do not reach full capacity
              immediately. Financial planning should account for a ramp-up period before reaching stable revenue.
              Consulting a CPA familiar with AFH operations before opening is strongly advised.
            </p>
          </div>
        </div>
      </section>

      {/* Key Links */}
      <section style={{ background: "#edf0f3", padding: "56px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2
            style={{ fontSize: 22, fontFamily: "Georgia, serif", fontWeight: 700, color: "#0a1628", margin: "0 0 8px" }}
          >
            Key Resources
          </h2>
          <div style={{ width: 36, height: 2, background: "#b87333", marginBottom: 24, borderRadius: 1 }} />
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              {
                label: "DSHS AFH Annual License Fee Information",
                url: "https://www.dshs.wa.gov/altsa/afh-annual-license-fee",
              },
              { label: "Medicaid Rates — WAC 388-105", url: "https://app.leg.wa.gov/wac/default.aspx?cite=388-105" },
              {
                label: "WA Insurance Commissioner AFH Insurance Report (2025)",
                url: "https://www.insurance.wa.gov/about-us/news/2025/study-liability-insurance-adult-family-homes-finds-market-reasonable-shape",
              },
              {
                label: "Long-Term Care Foundation Training Network (Tuition Support)",
                url: "https://www.longtermcarefoundationwa.org/training-network",
              },
              {
                label: "Washington Business Licensing Service",
                url: "https://dor.wa.gov/open-business/apply-business-license",
              },
            ].map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: 17,
                  fontFamily: "'Raleway', sans-serif",
                  fontWeight: 600,
                  color: "#2c6e9e",
                  textDecoration: "underline",
                }}
              >
                {link.label} →
              </a>
            ))}
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

export default AFHCostsFees;
