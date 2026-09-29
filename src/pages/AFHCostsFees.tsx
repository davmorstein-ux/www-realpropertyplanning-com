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
import audioAsset from "@/assets/afh-costs-fees.mp3.asset.json";

const STARTUP_COSTS = [
  {
    category: "DSHS Annual License Fee",
    amount: "$450 per bed per year",
    detail:
      "$450 per licensed bed, in place since July 2025 (DSHS, in writing, September 2026). A six-bed home pays $2,700 a year. The amount is set in the state budget the Legislature passes every two years, so it can change; DSHS announces changes in provider letters. DSHS mails a billing statement 60 days before the home's license anniversary month, and the fee is due that month. Unpaid annual fees were the second most-cited adult family home deficiency in DSHS's most recent published list (fourth quarter of 2024).",
    source: "DSHS written answer, Sept 2026; RCW 70.128.060; WAC 388-76-10025",
  },
  {
    category: "DSHS Application & Processing Fees",
    amount: "Set in the state budget",
    detail:
      "Fees must be paid with the application. The processing fee applies to every application, including a new license, a change of ownership, and a change of location. Confirm current amounts with DSHS.",
    source: "WAC 388-76-10070; WAC 388-76-10073",
  },
  {
    category: "Background Checks",
    amount: "Varies",
    detail:
      "The applicant, anyone affiliated with the applicant, entity representatives, resident managers and caregivers need a Washington State name and date of birth check and a national fingerprint check. Household members over age 11, volunteers and noncaregiving staff with unsupervised access need the name and date of birth check. The name and date of birth check must be renewed every two years; the fingerprint check does not expire.",
    source: "WAC 388-76-10161; WAC 388-76-10165",
  },
  {
    category: "Home Care Aide Training (75 hours)",
    amount: "Varies by training provider",
    detail:
      "Tuition varies by training provider. The Long-Term Care Foundation's Adult Family Home Training Network covers training and testing for employees of Medicaid-contracted homes that have at least one Medicaid resident; it is not a way for a new applicant to fund their own training.",
    source: "Chapter 388-112A WAC",
  },
  {
    category: "Home Care Aide Certification (DOH)",
    amount: "$100 application",
    detail:
      "The Department of Health charges $100 to apply for Home Care Aide certification and $100 to renew. The exam is scheduled and paid for separately; check DOH for the current exam process and fee.",
    source: "WAC 246-980-990",
  },
  {
    category: "AFH Administrator Training",
    amount: "Varies by college",
    detail:
      "At least 48 hours of instruction from an approved community college. Required of applicants and entity representatives.",
    source: "WAC 388-112A-0800; WAC 388-76-10064",
  },
  {
    category: "CPR & First Aid",
    amount: "Varies",
    detail: "Required of the provider, entity representative and resident manager. Cost varies by course provider.",
    source: "WAC 388-76-10130",
  },
  {
    category: "Building Modifications",
    amount: "Varies widely",
    detail:
      "Depends almost entirely on the house. Ramps, bathroom modifications, escape windows, and smoke and carbon monoxide alarms are common. DSHS warns that septic system improvements can carry significant costs.",
    source: "WAC 51-51-0330",
  },
  {
    category: "Remodel & Building Permits",
    amount: "Varies by jurisdiction",
    detail:
      "Permit fees vary by jurisdiction and scope of work. Some jurisdictions have flat AFH permit fees; others charge by project cost.",
    source: "Local jurisdiction",
  },
  {
    category: "Liability Insurance",
    amount: "About $1,900–$2,840/year (6 beds)",
    detail:
      "Required by WAC 388-76-10191, with minimum limits of $500,000 per occurrence and $1,000,000 aggregate. The Insurance Commissioner's 2025 study found the average annual premium was $318 per bed in 2019 and $473 per bed in 2024. Six beds at those averages is about $1,900 to $2,840 a year. Some insurers have training and experience requirements beyond DSHS minimums.",
    source: "WAC 388-76-10192; WA OIC 2025 study",
  },
  {
    category: "Business Registration",
    amount: "$50 + endorsements",
    detail:
      "The Department of Revenue charges a $50 processing fee to open a new business license, plus any city or state endorsement fees. Forming an LLC with the Secretary of State costs $180 plus an online processing fee.",
    source: "WA Dept. of Revenue; WA Secretary of State",
  },
];

const REVENUE_CONTEXT = [
  {
    label: "Private pay",
    amount: "Set by the provider",
    note: "Per resident. Market rates vary by location, room and level of care.",
  },
  {
    label: "Medicaid daily rate",
    amount: "Varies by classification",
    note: "Set under chapter 388-105 WAC and the state's collective bargaining agreement with the Adult Family Home Council. Depends on the resident's assessed care level, the county, and any specialty contract.",
  },
  {
    label: "Maximum residents (standard)",
    amount: "6 residents",
    note: "Seven or eight is possible after at least 24 months of licensure and other requirements, including inspections without enforcement actions and sprinklers, under RCW 70.128.066.",
  },
];

/* Article schema. AFH guides previously emitted only BreadcrumbSchema, so
   Google had no signal that these are editorial guides rather than agent
   pages. Author/publisher is the Organization — publishing reference material
   is a hub function and makes no claim that RPP provides services. */
const afhArticleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AFH Costs & Fees",
  description: "Breakdown of Washington State Adult Family Home startup costs, annual licensing fees, liability insurance, building permits, and Medicaid rate information.",
  url: "https://realpropertyplanning.com/afh-club/costs-fees",
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

const AFHCostsFees = () => (
  <>
    <SEOHead
      title="AFH Costs & Fees | AFH Club | Real Property Planning"
      description="Breakdown of Washington State Adult Family Home startup costs, annual licensing fees, liability insurance, building permits, and Medicaid rate information."
      canonical="https://realpropertyplanning.com/afh-club/costs-fees"
      ogType="article"
      schemaJson={afhArticleSchema}
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
            AFH Club · Costs & Fees
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
            AFH Costs & Fees in Washington State
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
            Opening an Adult Family Home involves a range of startup costs that can surprise unprepared applicants. This
            page breaks down fees, licensing costs, and ongoing expenses, with the rule or agency behind each one, so
            you can plan with clear eyes.
          </p>
          <div
            style={{
              background: "#fdf3e8",
              border: "1px solid #b13a44",
              borderLeft: "4px solid #b13a44",
              borderRadius: 6,
              padding: "16px 20px",
              maxWidth: 680,
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
              <strong>Annual license fee:</strong> $450 per licensed bed per year since July 2025, or $2,700 for a six-bed
              home. It is set in the state budget every two years and can change. DSHS bills 60 days before your license
              anniversary month; pay it on time every year.
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
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#481216",
              margin: "0 0 14px",
            }}
          >
            Startup & Ongoing
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
            Cost Breakdown
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
            Total startup costs before first revenue depend on the condition of the home, the training you already
            have, and your jurisdiction's permit fees. Building modifications are usually the largest and most variable
            expense.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {STARTUP_COSTS.map((item, i) => (
              <div
                key={i}
                style={{
                  padding: "20px 0",
                  borderBottom: "1px solid #dccdce",
                  borderTop: i === 0 ? "1px solid #dccdce" : "none",
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
                    style={{ fontSize: 17, fontFamily: "'DM Sans', system-ui, sans-serif", fontWeight: 700, color: "#280a0c", margin: 0 }}
                  >
                    {item.category}
                  </h3>
                  <span
                    style={{
                      fontSize: 17,
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 700,
                      color: "#481216",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item.amount}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: 17,
                    fontFamily: "'DM Sans', sans-serif",
                    color: "#1c1917",
                    lineHeight: 1.7,
                    margin: "0 0 4px",
                  }}
                >
                  {item.detail}
                </p>
                <p
                  style={{
                    fontSize: 15,
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#1c1917",
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
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#481216",
              margin: "0 0 14px",
            }}
          >
            Important Note
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
            Liability Insurance — Plan Ahead
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
            Liability insurance is required for all licensed AFHs under WAC 388-76-10191 through 10192: commercial
            general liability and professional liability, each with limits of at least $500,000 per occurrence and
            $1,000,000 aggregate, in place before the first resident is admitted or within 10 working days of the
            license, whichever comes first. A Medicaid contract may require higher limits. Coverage for AFHs in
            Washington comes from surplus lines insurers and risk retention groups, not the standard homeowner's
            insurance market.
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
            A 2025 study by the Washington Office of the Insurance Commissioner found that the average annual premium
            was $318 per bed in 2019 and $473 per bed in 2024. For a 6-bed home that is about $1,900 to $2,840 a year.
            DSHS notes that some insurers impose training and experience requirements above and beyond what DSHS
            requires for licensure.
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
                fontFamily: "'DM Sans', sans-serif",
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
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#481216",
              margin: "0 0 14px",
            }}
          >
            Revenue Context
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
            Understanding AFH Revenue
          </h2>
          <p
            style={{
              fontSize: 18,
              fontFamily: "'DM Sans', sans-serif",
              color: "#1c1917",
              lineHeight: 1.85,
              margin: "0 0 24px",
            }}
          >
            AFH revenue comes from private pay, Medicaid (for contracted homes), or a combination of both. The provider
            sets private-pay rates; Medicaid rates are set by the state.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 28 }}>
            {REVENUE_CONTEXT.map((item, i) => (
              <div
                key={i}
                style={{
                  background: "#fff",
                  border: "1px solid #dccdce",
                  borderLeft: "4px solid #3f3a35",
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
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 700,
                      color: "#280a0c",
                      margin: "0 0 4px",
                    }}
                  >
                    {item.label}
                  </p>
                  <p
                    style={{
                      fontSize: 16,
                      fontFamily: "'DM Sans', sans-serif",
                      color: "#1c1917",
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
                    fontFamily: "'DM Sans', system-ui, sans-serif",
                    fontWeight: 700,
                    color: "#481216",
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
              fontFamily: "'DM Sans', sans-serif",
              color: "#1c1917",
              lineHeight: 1.85,
              margin: "0 0 20px",
            }}
          >
            Medicaid rates are set under chapter 388-105 WAC and the state's 2025-27 collective bargaining agreement
            with the Adult Family Home Council, and DSHS publishes the current rate tables. Rates vary by county and
            care classification. Specialty contracts such as Expanded Community Services (ECS) and Specialized Behavior
            Support (SBS) pay more but need AFH program approval and carry additional requirements.
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
              In late September 2026 DSHS was processing license applications received in May 2026, and it allows up
              to 60 days once an application is complete. Most applicants do not pass the first inspection. Homes
              typically do not reach full capacity immediately, so plan for a ramp-up period before revenue is stable.
              Consulting a CPA familiar with AFH operations before opening is strongly advised.
            </p>
          </div>
        </div>
      </section>

      {/* Key Links */}
      <section style={{ background: "#edf0f3", padding: "56px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2
            style={{ fontSize: 22, fontFamily: "'DM Sans', system-ui, sans-serif", fontWeight: 700, color: "#280a0c", margin: "0 0 8px" }}
          >
            Key Resources
          </h2>
          <div style={{ width: 36, height: 2, background: "#b13a44", marginBottom: 24, borderRadius: 1 }} />
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              {
                label: "DSHS AFH Annual License Fee Information",
                url: "https://www.dshs.wa.gov/altsa/afh-annual-license-fee",
              },
              {
                label: "DSHS Application Processing Timeline",
                url: "https://www.dshs.wa.gov/altsa/baau-application-processing-timeline",
              },
              { label: "Medicaid Rates — WAC 388-105", url: "https://app.leg.wa.gov/wac/default.aspx?cite=388-105" },
              {
                label: "DSHS Current Rates (PDF)",
                url: "https://www.dshs.wa.gov/sites/default/files/ALTSA/msd/documents/All_HCS_Rates.pdf",
              },
              {
                label: "WA Insurance Commissioner AFH Insurance Report (2025)",
                url: "https://www.insurance.wa.gov/about-us/news/2025/study-liability-insurance-adult-family-homes-finds-market-reasonable-shape",
              },
              {
                label: "AFH Training Network (staff of Medicaid-contracted homes)",
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
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 600,
                  color: "#9e2c35",
                  textDecoration: "underline",
                }}
              >
                {link.label} →
              </a>
            ))}
          </div>
        </div>
      </section>

      <AuthorByline />
      <BackToAFHClub />
      <CTASection />
      <DisclaimerSection />
    </main>
    <Footer />
  </>
);

export default AFHCostsFees;
