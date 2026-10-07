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
import audioAsset from "@/assets/getting-started.mp3.asset.json";
import ArticleCover from "@/components/ArticleCover";
import NextQuestions from "@/components/NextQuestions";
import WhichGuide from "@/components/WhichGuide";

const REALITY_CHECKS = [
  {
    q: "Are you available around the clock?",
    a: "Under WAC 388-76-10040, the provider or entity representative must live in the home or employ a resident manager who does, unless the home has 24-hour staffing with a staff person who can make needed decisions always present. Residents may need assistance at 2am just as much as 2pm. This is not a 9-to-5 business.",
  },
  {
    q: "Can you manage the emotional weight?",
    a: "You will care for people at the most vulnerable stages of their lives. Residents decline. Some pass away in your home. Compassion fatigue is real and must be planned for.",
  },
  {
    q: "Are you comfortable with regulation?",
    a: "DSHS conducts unannounced inspections. Documentation must be meticulous and continuous. Providers who resist process and paperwork struggle significantly.",
  },
  {
    q: "Do you have the financial runway?",
    a: "Building modifications, training, insurance, and licensing are paid for before any revenue begins, and applicants must show proof of financial solvency (RCW 70.128.120). DSHS posts its current processing timeline: in late September 2026 it was working on applications received in May 2026, and review can take up to 60 days once an application is complete. Most applicants do not pass the first licensing inspection.",
  },
  {
    q: "Do you have caregiving experience?",
    a: "WAC 388-76-10130 requires at least 1,000 hours of successful direct care experience with vulnerable adults, in a licensed or contracted setting, in the previous 60 months and after age 18. Physicians, physician assistants, and licensed RNs, ARNPs, and LPNs are exempt. This is not a business you can enter without hands-on care experience.",
  },
  {
    q: "Can you communicate effectively in English?",
    a: "Washington law requires that the provider, entity representative, and resident manager be literate and able to communicate in English — and that at least one staff member can respond appropriately to emergencies in English.",
  },
];

const PROVIDER_TYPES = [
  {
    type: "Individual Provider",
    description:
      "A single person who is licensed to operate the AFH and either lives in the home or employs a resident manager who does (or staffs it 24 hours a day with a decision-maker present). The individual is personally responsible for all licensing requirements, training, and care standards.",
    pros: ["Direct personal accountability", "Simpler structure", "Provider lives in the home in many cases"],
    cons: ["Limits scalability", "Provider bears full personal liability", "Each additional home needs its own license and proof of financial solvency and management experience (RCW 70.128.065)"],
  },
  {
    type: "Entity Provider",
    description:
      "A business entity — such as an LLC, corporation, or partnership — that holds the AFH license. The entity must designate an Entity Representative who meets all individual qualification requirements. An individual may only be the entity representative for one entity provider.",
    pros: [
      "Liability protection through business structure",
      "Can suit owners planning multiple homes or partners",
      "Professional business framework",
    ],
    cons: [
      "More complex setup",
      "Entity representative must meet all individual qualifications",
      "Additional administrative requirements",
    ],
  },
];

/* Article schema. AFH guides previously emitted only BreadcrumbSchema, so
   Google had no signal that these are editorial guides rather than agent
   pages. Author/publisher is the Organization — publishing reference material
   is a hub function and makes no claim that RPP provides services. */
const afhArticleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Getting Started with an Adult Family Home",
  description: "Is an Adult Family Home right for you? A comprehensive guide to what AFHs are, who can open one, individual vs entity providers, and what to expect before applying.",
  url: "https://realpropertyplanning.com/afh-club/getting-started",
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

const AFHGettingStarted = () => (
  <>
    <SEOHead
      title="Getting Started with an Adult Family Home | AFH Club | Real Property Planning"
      description="Is an Adult Family Home right for you? A comprehensive guide to what AFHs are, who can open one, individual vs entity providers, and what to expect before applying."
      canonical="https://realpropertyplanning.com/afh-club/getting-started"
      ogType="article"
      schemaJson={afhArticleSchema}
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://realpropertyplanning.com" },
        { name: "AFH Club", url: "https://realpropertyplanning.com/afh-club" },
        { name: "Getting Started", url: "https://realpropertyplanning.com/afh-club/getting-started" },
      ]}
    />
    <Header />
    <main id="main-content">
      {/* Hero */}
      <section style={{ background: "#edf0f3", padding: "64px 24px 56px", borderBottom: "3px solid #b13a44" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <ArticleCover src="/afh-getting-started.webp" alt="Cover art: Getting Started with Adult Family Homes" width={1086} height={1448} />
          <p
            style={{
              fontSize: 15,
              fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#481216",
              margin: "0 0 14px",
            }}
          >
            AFH Club · Getting Started
          </p>
          <h1
            style={{
              fontSize: "clamp(32px, 5vw, 50px)",
              fontFamily: "'DM Sans', 'DM Sans Fallback', system-ui, sans-serif",
              fontWeight: 700,
              color: "#292521",
              lineHeight: 1.15,
              margin: "0 0 20px",
            }}
          >
            Is an Adult Family Home Right for You?
          </h1>
          <div style={{ marginBottom: 24 }}>
            <ArticleAudioPlayer audioSrc={audioAsset.url} />
          </div>
          <p
            style={{
              fontSize: 18,
              fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
              fontWeight: 400,
              color: "#342e28",
              lineHeight: 1.85,
              margin: "0 0 16px",
              maxWidth: 680,
            }}
          >
            An Adult Family Home is one of the most personally rewarding — and personally demanding — businesses in
            Washington State. Before investing in training, building modifications, or licensing, it is essential to
            understand what you are committing to and whether you meet the baseline requirements.
          </p>
          <p
            style={{
              fontSize: 18,
              fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
              fontWeight: 400,
              color: "#1c1917",
              lineHeight: 1.8,
              maxWidth: 680,
            }}
          >
            This page is a starting point for prospective providers. Use it alongside the official DSHS resources linked
            throughout.
          </p>
        </div>
      </section>

      {/* What is an AFH */}
      <WhichGuide group="afhOpening" />
      <section style={{ background: "#f7f4ef", padding: "72px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p
            style={{
              fontSize: 15,
              fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#481216",
              margin: "0 0 14px",
            }}
          >
            The Basics
          </p>
          <h2
            style={{
              fontSize: "clamp(24px, 3.5vw, 36px)",
              fontFamily: "'DM Sans', 'DM Sans Fallback', system-ui, sans-serif",
              fontWeight: 700,
              color: "#280a0c",
              lineHeight: 1.2,
              margin: "0 0 20px",
            }}
          >
            What Is an Adult Family Home?
          </h2>
          <p
            style={{
              fontSize: 18,
              fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
              color: "#1c1917",
              lineHeight: 1.85,
              margin: "0 0 20px",
            }}
          >
            An Adult Family Home (AFH) is a private residence licensed by the Washington State Department of Social and
            Health Services (DSHS) to provide personal care, room, and board to adults who are not related to the
            provider. Licensed under RCW 70.128 and regulated under WAC 388-76, AFHs may serve two to six residents. DSHS may
            approve seven or eight for a provider who has held the initial license at least 24 months (12 of them at six
            residents), shows financial solvency and management experience, has recent inspections without enforcement
            action, and meets the sprinkler and evacuation requirements in WAC 388-76-10031.
          </p>
          <p
            style={{
              fontSize: 18,
              fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
              color: "#1c1917",
              lineHeight: 1.85,
              margin: "0 0 20px",
            }}
          >
            The license covers room, board, personal care (hands-on help with, and supervision of, daily personal care
            tasks), and special care beyond that (RCW 70.128.010; WAC 388-76-10000). Homes whose providers and staff
            complete DSHS specialty training may carry designations for dementia, mental health, or developmental
            disabilities, and some hold additional DSHS contracts for residents with higher needs.
          </p>
          <p
            style={{ fontSize: 18, fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif", color: "#1c1917", lineHeight: 1.85, margin: 0 }}
          >
            State law makes AFHs a permitted use in all areas zoned for residential or commercial purposes, including
            single-family zones (RCW 70.128.140), and homeowners' association restrictions on licensed AFHs are
            unenforceable (RCW 64.38.060). Washington's adult family home law, chapter 70.128 RCW, dates to 1989; the
            Legislature describes these homes as an alternative to institutional settings (RCW 70.128.005).
          </p>
        </div>
      </section>

      {/* Minimum Qualifications */}
      <section style={{ background: "#edf0f3", padding: "72px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p
            style={{
              fontSize: 15,
              fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#481216",
              margin: "0 0 14px",
            }}
          >
            Minimum Requirements
          </p>
          <h2
            style={{
              fontSize: "clamp(24px, 3.5vw, 36px)",
              fontFamily: "'DM Sans', 'DM Sans Fallback', system-ui, sans-serif",
              fontWeight: 700,
              color: "#280a0c",
              lineHeight: 1.2,
              margin: "0 0 20px",
            }}
          >
            Who Can Open an AFH?
          </h2>
          <p
            style={{
              fontSize: 17,
              fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
              color: "#1c1917",
              lineHeight: 1.8,
              margin: "0 0 32px",
            }}
          >
            Under RCW 70.128.120 and WAC 388-76-10130, prospective providers must meet all of the following
            qualifications before applying for an AFH license:
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {[
              { label: "At least 21 years old", detail: "WAC 388-76-10130." },
              {
                label: "High school diploma or equivalent",
                detail:
                  "A U.S. diploma or high school equivalency certificate (RCW 28B.50.536), or one of the college or foreign-education equivalents listed in WAC 388-76-10130.",
              },
              {
                label: "1,000 hours of direct caregiving experience",
                detail:
                  "Successful direct care of vulnerable adults in a licensed or contracted setting, within the previous 60 months and after age 18. Documented via the Caregiver Experience Attestation (CEA) form DSHS 10-417. Physicians, physician assistants, and licensed RNs, ARNPs, and LPNs are exempt.",
              },
              {
                label: "Home Care Aide (HCA) certification",
                detail:
                  "OR qualification for one of the exemptions in RCW 18.88B.041 (RNs, LPNs, CNAs, Medicare-certified home health aides, and others).",
              },
              {
                label: "AFH Administrator Training",
                detail:
                  "Offered through colleges contracted with DSHS and required of new license applicants (WAC 388-112A-0810). State law sets a minimum of 48 classroom hours (RCW 70.128.120).",
              },
              { label: "CPR and First Aid certification", detail: "First Aid not required for licensed nurses." },
              {
                label: "Food Safety training",
                detail:
                  "Food safety is part of the required caregiver training, so anyone who began working in an adult family home after June 30, 2005 and completed that training does not need a separate food worker card. Someone relying on a food handler permit held before then keeps it current with half an hour of food safety continuing education a year (RCW 70.128.250).",
              },
              {
                label: "Cleared DSHS background check",
                detail:
                  "Required for the applicant, anyone affiliated with the applicant, caregivers, entity representatives, and resident managers; household members over age 11 need a Washington name and date of birth check (WAC 388-76-10161).",
              },
              {
                label: "Good moral character and management ability",
                detail: "DSHS evaluates this as part of the application review.",
              },
              {
                label: "Proof of financial solvency",
                detail: "Required of applicants under RCW 70.128.120.",
              },
              {
                label: "English literacy and communication ability",
                detail:
                  "Required by WAC 388-76-10130. At least one staff member must be able to respond to emergencies in English.",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: 16,
                  alignItems: "flex-start",
                  padding: "16px 20px",
                  background: "#fff",
                  border: "1px solid #dccdce",
                  borderLeft: "4px solid #b13a44",
                  borderRadius: 6,
                }}
              >
                <div
                  style={{
                    flexShrink: 0,
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#b13a44",
                    marginTop: 8,
                  }}
                />
                <div>
                  <p
                    style={{
                      fontSize: 18,
                      fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
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
                      fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
                      color: "#1c1917",
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div
            style={{
              marginTop: 28,
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
                fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
                color: "#2f2a25",
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              <strong>Note:</strong> As of January 1, 2024, the DSHS <em>Prospective Provider Orientation class</em> — a separate one-day class for
              license applicants, formerly required by WAC 388-76-10060 — is no longer required; DSHS repealed the rule (WSR 23-24-010)
              because its content is covered in AFH Administrator Training. This is not the same thing as the two-hour caregiver orientation
              module inside the 75-hour Home Care Aide training, which is still required unless you are exempt.
              However, prospective providers are strongly encouraged to read the DSHS document{" "}
              <a
                href="https://www.dshs.wa.gov/sites/default/files/ALTSA/rcs/documents/afh/information/AFH%20Information%20Sheet%20-%20What%20You%20Need%20to%20Understand.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#9e2c35" }}
              >
                "What You Need to Understand Before Becoming a Licensed Adult Family Home Provider"
              </a>{" "}
              before proceeding.
            </p>
          </div>
        </div>
      </section>

      {/* Reality Check */}
      <section style={{ background: "#f7f4ef", padding: "72px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p
            style={{
              fontSize: 15,
              fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#481216",
              margin: "0 0 14px",
            }}
          >
            Honest Assessment
          </p>
          <h2
            style={{
              fontSize: "clamp(24px, 3.5vw, 36px)",
              fontFamily: "'DM Sans', 'DM Sans Fallback', system-ui, sans-serif",
              fontWeight: 700,
              color: "#280a0c",
              lineHeight: 1.2,
              margin: "0 0 20px",
            }}
          >
            Six Questions to Ask Yourself First
          </h2>
          <p
            style={{
              fontSize: 17,
              fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
              color: "#1c1917",
              lineHeight: 1.8,
              margin: "0 0 32px",
            }}
          >
            These questions are meant to help prospective providers honestly evaluate their readiness. There are no right or wrong answers — only honest ones.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {REALITY_CHECKS.map((item, i) => (
              <div
                key={i}
                style={{
                  background: "#fff",
                  border: "1px solid #dccdce",
                  borderTop: "3px solid #3f3a35",
                  borderRadius: 6,
                  padding: "24px",
                }}
              >
                <h3
                  style={{
                    fontSize: 17,
                    fontFamily: "'DM Sans', 'DM Sans Fallback', system-ui, sans-serif",
                    fontWeight: 700,
                    color: "#280a0c",
                    margin: "0 0 10px",
                  }}
                >
                  {item.q}
                </h3>
                <p
                  style={{
                    fontSize: 17,
                    fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
                    color: "#1c1917",
                    lineHeight: 1.75,
                    margin: 0,
                  }}
                >
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Individual vs Entity */}
      <section style={{ background: "#edf0f3", padding: "72px 24px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <p
            style={{
              fontSize: 15,
              fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#481216",
              margin: "0 0 14px",
            }}
          >
            Business Structure
          </p>
          <h2
            style={{
              fontSize: "clamp(24px, 3.5vw, 36px)",
              fontFamily: "'DM Sans', 'DM Sans Fallback', system-ui, sans-serif",
              fontWeight: 700,
              color: "#280a0c",
              lineHeight: 1.2,
              margin: "0 0 20px",
            }}
          >
            Individual Provider vs. Entity Provider
          </h2>
          <p
            style={{
              fontSize: 17,
              fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
              color: "#1c1917",
              lineHeight: 1.8,
              margin: "0 0 32px",
            }}
          >
            Washington State issues AFH licenses to either an individual or a business entity. Understanding the
            difference before you apply will shape how you structure your business, your liability exposure, and your
            ability to grow.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {PROVIDER_TYPES.map((item) => (
              <div
                key={item.type}
                style={{
                  background: "#fff",
                  border: "1px solid #dccdce",
                  borderTop: "4px solid #3f3a35",
                  borderRadius: 6,
                  padding: "28px 24px",
                }}
              >
                <h3
                  style={{
                    fontSize: 19,
                    fontFamily: "'DM Sans', 'DM Sans Fallback', system-ui, sans-serif",
                    fontWeight: 700,
                    color: "#280a0c",
                    margin: "0 0 12px",
                  }}
                >
                  {item.type}
                </h3>
                <p
                  style={{
                    fontSize: 17,
                    fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
                    color: "#1c1917",
                    lineHeight: 1.75,
                    margin: "0 0 20px",
                  }}
                >
                  {item.description}
                </p>
                <p
                  style={{
                    fontSize: 15,
                    fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#481216",
                    margin: "0 0 8px",
                  }}
                >
                  Advantages
                </p>
                {item.pros.map((p, i) => (
                  <p
                    key={i}
                    style={{
                      fontSize: 16,
                      fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
                      color: "#1c1917",
                      lineHeight: 1.65,
                      margin: "0 0 4px",
                      paddingLeft: 12,
                    }}
                  >
                    · {p}
                  </p>
                ))}
                <p
                  style={{
                    fontSize: 15,
                    fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#481216",
                    margin: "16px 0 8px",
                  }}
                >
                  Considerations
                </p>
                {item.cons.map((c, i) => (
                  <p
                    key={i}
                    style={{
                      fontSize: 16,
                      fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
                      color: "#1c1917",
                      lineHeight: 1.65,
                      margin: "0 0 4px",
                      paddingLeft: 12,
                    }}
                  >
                    · {c}
                  </p>
                ))}
              </div>
            ))}
          </div>
          <div
            style={{
              marginTop: 24,
              background: "#fff",
              border: "1px solid #dccdce",
              borderLeft: "4px solid #b13a44",
              borderRadius: 6,
              padding: "18px 22px",
            }}
          >
            <p
              style={{
                fontSize: 17,
                fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
                color: "#1c1917",
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              <strong>Important:</strong> Regardless of structure, DSHS issues one license per home. The entity
              representative must meet all the same personal qualifications as an individual provider. Consult a
              Washington State business attorney before choosing your structure.
            </p>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section style={{ background: "#f7f4ef", padding: "72px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p
            style={{
              fontSize: 15,
              fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#481216",
              margin: "0 0 14px",
            }}
          >
            What Comes Next
          </p>
          <h2
            style={{
              fontSize: "clamp(24px, 3.5vw, 36px)",
              fontFamily: "'DM Sans', 'DM Sans Fallback', system-ui, sans-serif",
              fontWeight: 700,
              color: "#280a0c",
              lineHeight: 1.2,
              margin: "0 0 20px",
            }}
          >
            Your Path Forward
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {[
              {
                step: "1",
                title: "Read the DSHS prospective provider guide",
                detail:
                  'Download and read "What You Need to Understand Before Becoming a Licensed Adult Family Home Provider" from DSHS. This document was written to help you decide if this business is right for you.',
              },
              {
                step: "2",
                title: "Complete required training",
                detail:
                  "Begin your 75-hour HCA training (if not exempt) and enroll in the AFH Administrator Training at a Washington community college. These take time — plan accordingly.",
              },
              {
                step: "3",
                title: "Evaluate your home or property",
                detail:
                  "Have your home reviewed against the WABO AFH Building Inspection Checklist before applying. Building modifications can be costly and time-consuming.",
              },
              {
                step: "4",
                title: "Research the AFH market in your area",
                detail:
                  "Use the DSHS AFH Locator to understand how many licensed homes already operate in your ZIP code or county. Market saturation affects how quickly you will fill beds.",
              },
              {
                step: "5",
                title: "Submit your application to DSHS",
                detail:
                  "Apply online at the DSHS BAAU portal. Allow significant time: DSHS posts its current processing timeline, which in late September 2026 showed applications received in May 2026 being processed and up to 60 days once an application is complete. A licensing inspection is required, most applicants need more than one, and DSHS makes up to three visits. Contact baau@dshs.wa.gov for application questions.",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: 20,
                  padding: "20px 0",
                  borderBottom: "1px solid #dccdce",
                  borderTop: i === 0 ? "1px solid #dccdce" : "none",
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
                    fontFamily: "'DM Sans', 'DM Sans Fallback', system-ui, sans-serif",
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
                      fontFamily: "'DM Sans', 'DM Sans Fallback', system-ui, sans-serif",
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
                      fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
                      color: "#1c1917",
                      lineHeight: 1.75,
                      margin: 0,
                    }}
                  >
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              {
                label: "DSHS Prospective Provider Information",
                url: "https://www.dshs.wa.gov/altsa/residential-care-services/information-afh-prospective-providers",
              },
              { label: "DSHS Online License Application (BAAU)", url: "https://baau.dshs.wa.gov/" },
              { label: "DSHS: AFH License Application Process slideshow (PowerPoint)", url: "https://www.dshs.wa.gov/sites/default/files/2026-04/AFH-License-Application-Process-Informational-Slideshow.pptx" },
              {
                label: "DSHS Application Processing Timeline",
                url: "https://www.dshs.wa.gov/altsa/baau-application-processing-timeline",
              },
              {
                label: "AFH Locator — Search Licensed Homes",
                url: "https://fortress.wa.gov/dshs/adsaapps/lookup/AFHAdvLookup.aspx",
              },
              {
                label: "Find DSHS-Approved Training Programs",
                url: "https://fortress.wa.gov/dshs/adsaapps/Professional/training/training.aspx",
              },
            ].map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: 16,
                  fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
                  fontWeight: 600,
                  color: "#9e2c35",
                  textDecoration: "underline",
                  lineHeight: 1.5,
                }}
              >
                {link.label} →
              </a>
            ))}
          </div>
        </div>
      </section>

      <AuthorByline context="afh" />
      <BackToAFHClub />
      <CTASection />
      <DisclaimerSection />
      <NextQuestions />
    </main>
    <Footer />
  </>
);

export default AFHGettingStarted;
