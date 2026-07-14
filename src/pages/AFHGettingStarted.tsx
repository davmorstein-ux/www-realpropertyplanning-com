import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import CTASection from "@/components/CTASection";
import DisclaimerSection from "@/components/DisclaimerSection";
import BackToAFHClub from "@/components/BackToAFHClub";
import ArticleAudioPlayer from "@/components/ArticleAudioPlayer";
import audioAsset from "@/assets/getting-started.mp3.asset.json";

const REALITY_CHECKS = [
  {
    q: "Are you available around the clock?",
    a: "AFH providers must be on-site or have a qualified caregiver present at all times. Residents may need assistance at 2am just as much as 2pm. This is not a 9-to-5 business.",
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
    a: "It typically takes 3–6 months from application to first resident. Startup costs — building modifications, training, insurance, and licensing — can reach $20,000–$50,000 or more before revenue begins.",
  },
  {
    q: "Do you have caregiving experience?",
    a: "DSHS requires at least 1,000 hours of direct caregiving experience in the previous 60 months. This is not a business you can enter without hands-on care experience.",
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
      "A single person who is licensed to operate the AFH and lives in or manages the home directly. The individual is personally responsible for all licensing requirements, training, and care standards. DSHS issues one license per provider.",
    pros: ["Direct personal accountability", "Simpler structure", "Provider lives in the home in many cases"],
    cons: ["Limits scalability", "Provider bears full personal liability", "Cannot hold multiple licenses easily"],
  },
  {
    type: "Entity Provider",
    description:
      "A business entity — such as an LLC, corporation, or partnership — that holds the AFH license. The entity must designate an Entity Representative who meets all individual qualification requirements. An individual may only be the entity representative for one entity provider.",
    pros: [
      "Liability protection through business structure",
      "Enables growth and multiple homes",
      "Professional business framework",
    ],
    cons: [
      "More complex setup",
      "Entity representative must meet all individual qualifications",
      "Additional administrative requirements",
    ],
  },
];

const AFHGettingStarted = () => (
  <>
    <SEOHead
      title="Getting Started with an Adult Family Home | AFH Club | Real Property Planning"
      description="Is an Adult Family Home right for you? A comprehensive guide to what AFHs are, who can open one, individual vs entity providers, and what to expect before applying."
      canonical="https://realpropertyplanning.com/afh-club/getting-started"
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
          <p
            style={{
              fontSize: 15,
              fontFamily: "'Raleway', sans-serif",
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
              fontFamily: "Georgia, serif",
              fontWeight: 700,
              color: "#292521",
              lineHeight: 1.15,
              margin: "0 0 20px",
            }}
          >
            Is an Adult Family Home Right for You?
          </h1>
          <div style={{ width: 48, height: 3, background: "#b13a44", marginBottom: 28, borderRadius: 1 }} />
          <div style={{ marginBottom: 24 }}>
            <ArticleAudioPlayer audioSrc={audioAsset.url} />
          </div>
          <p
            style={{
              fontSize: 18,
              fontFamily: "'Raleway', sans-serif",
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
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 400,
              color: "#302b26",
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
      <section style={{ background: "#f7f4ef", padding: "72px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p
            style={{
              fontSize: 15,
              fontFamily: "'Raleway', sans-serif",
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
              fontFamily: "Georgia, serif",
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
              fontFamily: "'Raleway', sans-serif",
              color: "#302b26",
              lineHeight: 1.85,
              margin: "0 0 20px",
            }}
          >
            An Adult Family Home (AFH) is a private residence licensed by the Washington State Department of Social and
            Health Services (DSHS) to provide personal care, room, and board to adults who are not related to the
            provider. Licensed under RCW 70.128 and regulated under WAC 388-76, AFHs may serve up to six residents, with
            expansion to seven or eight possible for qualified homes with clean compliance histories.
          </p>
          <p
            style={{
              fontSize: 18,
              fontFamily: "'Raleway', sans-serif",
              color: "#302b26",
              lineHeight: 1.85,
              margin: "0 0 20px",
            }}
          >
            Services provided include room and board, laundry, necessary supervision, assistance with activities of
            daily living, personal care, and social services. Homes that obtain specialty contracts may also provide
            more complex care for residents with dementia, mental health needs, or developmental disabilities.
          </p>
          <p
            style={{ fontSize: 18, fontFamily: "'Raleway', sans-serif", color: "#302b26", lineHeight: 1.85, margin: 0 }}
          >
            AFHs are permitted in all single-family residential zoning districts throughout Washington State. The
            concept originated in Washington in the 1990s specifically to create a homelike alternative to larger
            institutional care settings.
          </p>
        </div>
      </section>

      {/* Minimum Qualifications */}
      <section style={{ background: "#edf0f3", padding: "72px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p
            style={{
              fontSize: 15,
              fontFamily: "'Raleway', sans-serif",
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
              fontFamily: "Georgia, serif",
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
              fontFamily: "'Raleway', sans-serif",
              color: "#302b26",
              lineHeight: 1.8,
              margin: "0 0 32px",
            }}
          >
            Under RCW 70.128.120, prospective providers must meet all of the following qualifications before applying
            for an AFH license:
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {[
              { label: "High school diploma or equivalent", detail: "Per RCW 28B.50.536" },
              {
                label: "1,000 hours of direct caregiving experience",
                detail:
                  "Must be within the previous 60 months. Documented via the Caregiver Experience Attestation (CEA) form DSHS 10-417.",
              },
              {
                label: "Home Care Aide (HCA) certification",
                detail:
                  "OR qualification for one of the DSHS-approved exemptions (RNs, LPNs, CNAs, Medicare-certified home health aides, and others).",
              },
              {
                label: "AFH Administrator Training",
                detail:
                  "Offered through contracted community colleges. Required for all initial applicants and those opening additional homes.",
              },
              { label: "CPR and First Aid certification", detail: "First Aid not required for licensed nurses." },
              { label: "Food Safety training", detail: "Per WAC 388-112A-0610." },
              {
                label: "Cleared DSHS background check",
                detail: "Required for the provider and all household members and staff.",
              },
              {
                label: "Good moral character and management ability",
                detail: "DSHS evaluates this as part of the application review.",
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
                      fontFamily: "'Raleway', sans-serif",
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
                      fontFamily: "'Raleway', sans-serif",
                      color: "#302b26",
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
                fontFamily: "'Raleway', sans-serif",
                color: "#2f2a25",
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              <strong>Note:</strong> As of January 1, 2024, the DSHS-provided Orientation class is no longer required.
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
              fontFamily: "'Raleway', sans-serif",
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
              fontFamily: "Georgia, serif",
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
              fontFamily: "'Raleway', sans-serif",
              color: "#302b26",
              lineHeight: 1.8,
              margin: "0 0 32px",
            }}
          >
            Experienced AFH providers developed these questions to help prospective providers honestly evaluate their
            readiness. There are no right or wrong answers — only honest ones.
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
                    fontFamily: "Georgia, serif",
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
                    fontFamily: "'Raleway', sans-serif",
                    color: "#302b26",
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
              fontFamily: "'Raleway', sans-serif",
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
              fontFamily: "Georgia, serif",
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
              fontFamily: "'Raleway', sans-serif",
              color: "#302b26",
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
                    fontFamily: "Georgia, serif",
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
                    fontFamily: "'Raleway', sans-serif",
                    color: "#302b26",
                    lineHeight: 1.75,
                    margin: "0 0 20px",
                  }}
                >
                  {item.description}
                </p>
                <p
                  style={{
                    fontSize: 15,
                    fontFamily: "'Raleway', sans-serif",
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
                      fontFamily: "'Raleway', sans-serif",
                      color: "#302b26",
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
                    fontFamily: "'Raleway', sans-serif",
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
                      fontFamily: "'Raleway', sans-serif",
                      color: "#302b26",
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
                fontFamily: "'Raleway', sans-serif",
                color: "#302b26",
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
              fontFamily: "'Raleway', sans-serif",
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
              fontFamily: "Georgia, serif",
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
                  "Apply online at the DSHS BAAU portal. Allow significant time — there is no fixed timeline for becoming licensed. Contact baau@dshs.wa.gov for application questions.",
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
                      color: "#280a0c",
                      margin: "0 0 6px",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 17,
                      fontFamily: "'Raleway', sans-serif",
                      color: "#302b26",
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
                  fontFamily: "'Raleway', sans-serif",
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

      <BackToAFHClub />
      <CTASection />
      <DisclaimerSection />
    </main>
    <Footer />
  </>
);

export default AFHGettingStarted;
