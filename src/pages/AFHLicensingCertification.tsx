import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import CTASection from "@/components/CTASection";
import DisclaimerSection from "@/components/DisclaimerSection";
import BackToAFHClub from "@/components/BackToAFHClub";
import ArticleAudioPlayer from "@/components/ArticleAudioPlayer";
import audioAsset from "@/assets/afh-licensing-and-certification.mp3.asset.json";

const APPLICATION_STEPS = [
  {
    step: "1",
    title: "Complete all required training",
    detail:
      "75-hour HCA training (if not exempt), AFH Administrator Training, CPR, First Aid, and Food Safety must all be completed before applying.",
  },
  {
    step: "2",
    title: "Pass your background check",
    detail:
      "Submit a background check through DSHS for yourself, all household members, and any staff. Disqualifying crimes are defined under WAC 388-113.",
  },
  {
    step: "3",
    title: "Prepare your home for inspection",
    detail:
      "Review the WABO AFH Building Inspection Checklist and complete any required building modifications. A floor plan of each level must accompany your application.",
  },
  {
    step: "4",
    title: "Gather your documentation",
    detail:
      "Assemble the Caregiver Experience Attestation form (DSHS 10-417), training certificates, background check clearance, liability insurance proof, and the Disclosure of Services form (DSHS 10-508).",
  },
  {
    step: "5",
    title: "Submit the online application",
    detail:
      "Apply at the DSHS BAAU portal (baau.dshs.wa.gov). Avoid using the symbols &, =, +, or # in the application — they cause submission errors. There is no fixed timeline for processing.",
  },
  {
    step: "6",
    title: "DSHS initial inspection",
    detail:
      "A DSHS licensor will conduct an initial inspection of your home. You will also need a passed local building inspection from your jurisdiction before the DSHS inspection is completed.",
  },
  {
    step: "7",
    title: "TB testing",
    detail: "Tuberculosis testing must be completed within three days of the home being licensed.",
  },
  {
    step: "8",
    title: "License issued",
    detail:
      "Once all requirements are met and the inspection is passed, DSHS issues the AFH license. Annual renewal requires payment of the $450/bed licensing fee.",
  },
];

const HCA_EXEMPTIONS = [
  "Registered Nurses (RNs) and Licensed Practical Nurses (LPNs)",
  "Certified Nursing Assistants (CNA/NA-C) or persons in an approved CNA training program",
  "Medicare-certified home health aides",
  "Persons with special education training and an endorsement from the Superintendent of Public Instruction",
  "Long-term care workers employed between January 1, 2011 and January 6, 2012 who completed training requirements then in effect (must have proof of employment per DOH WAC 246-980-070)",
];

const AFHLicensingCertification = () => (
  <>
    <SEOHead
      title="AFH Licensing & Certification | AFH Club | Real Property Planning"
      description="Complete guide to Washington State AFH licensing — DSHS application process, Home Care Aide certification, background checks, HCA exemptions, and CHOW requirements."
      canonical="https://realpropertyplanning.com/afh-club/licensing-certification"
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://realpropertyplanning.com" },
        { name: "AFH Club", url: "https://realpropertyplanning.com/afh-club" },
        { name: "Licensing & Certification", url: "https://realpropertyplanning.com/afh-club/licensing-certification" },
      ]}
    />
    <Header />
    <main id="main-content">
      {/* Hero */}
      <section style={{ background: "#edf0f3", padding: "64px 24px 56px", borderBottom: "3px solid #b13a44" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div className="mb-6"><ArticleAudioPlayer audioSrc={audioAsset.url} /></div>
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
            AFH Club · Licensing & Certification
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
            AFH Licensing & Certification in Washington State
          </h1>
          <div style={{ width: 48, height: 3, background: "#b13a44", marginBottom: 28, borderRadius: 1 }} />
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
            Every Adult Family Home in Washington State must be licensed by DSHS before admitting a single resident. The
            licensing process involves multiple agencies, several rounds of documentation, and a home inspection. This
            page walks through each step in plain language.
          </p>
        </div>
      </section>

      {/* HCA Certification */}
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
            Caregiver Credential
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
            Home Care Aide (HCA) Certification
          </h2>
          <div style={{ width: 40, height: 3, background: "#b13a44", marginBottom: 28, borderRadius: 1 }} />
          <p
            style={{
              fontSize: 18,
              fontFamily: "'Raleway', sans-serif",
              color: "#302b26",
              lineHeight: 1.85,
              margin: "0 0 20px",
            }}
          >
            Unless you qualify for an exemption, you must be a certified Home Care Aide before applying for an AFH
            license. This means completing a 75-hour orientation, safety, and basic training program, passing the HCA
            certification examination, and receiving certification from the Washington State Department of Health.
          </p>
          <p
            style={{
              fontSize: 18,
              fontFamily: "'Raleway', sans-serif",
              color: "#302b26",
              lineHeight: 1.85,
              margin: "0 0 28px",
            }}
          >
            As of February 29, 2024, the Department of Health made changes to the HCA credential and exam scheduling
            process. Contact DOH or an approved training program for current scheduling details.
          </p>
          <div
            style={{
              background: "#fff",
              border: "1px solid #dccdce",
              borderTop: "3px solid #b13a44",
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
                margin: "0 0 16px",
              }}
            >
              HCA Exemptions
            </h3>
            <p
              style={{
                fontSize: 17,
                fontFamily: "'Raleway', sans-serif",
                color: "#302b26",
                lineHeight: 1.75,
                margin: "0 0 16px",
              }}
            >
              You do NOT need HCA certification if you are one of the following:
            </p>
            {HCA_EXEMPTIONS.map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 10 }}>
                <div
                  style={{
                    flexShrink: 0,
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    background: "#b13a44",
                    marginTop: 8,
                  }}
                />
                <p
                  style={{
                    fontSize: 17,
                    fontFamily: "'Raleway', sans-serif",
                    color: "#302b26",
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {item}
                </p>
              </div>
            ))}
            <p
              style={{
                fontSize: 16,
                fontFamily: "'Raleway', sans-serif",
                color: "#302b26",
                lineHeight: 1.6,
                margin: "16px 0 0",
                fontStyle: "italic",
              }}
            >
              Source: WAC 388-112A-0090. If unsure whether you qualify, contact DSHS at rcspolicy@dshs.wa.gov.
            </p>
          </div>
        </div>
      </section>

      {/* Application Process */}
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
            Step by Step
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
            The DSHS License Application Process
          </h2>
          <div style={{ width: 40, height: 3, background: "#b13a44", marginBottom: 16, borderRadius: 1 }} />
          <p
            style={{
              fontSize: 17,
              fontFamily: "'Raleway', sans-serif",
              color: "#302b26",
              lineHeight: 1.8,
              margin: "0 0 32px",
            }}
          >
            There is no fixed timeline for becoming licensed. Allow several months from application to first resident.
            The process involves both DSHS and your local building jurisdiction.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {APPLICATION_STEPS.map((item, i) => (
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
        </div>
      </section>

      {/* Background Checks */}
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
            Background Checks
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
            Who Needs a Background Check?
          </h2>
          <div style={{ width: 40, height: 3, background: "#b13a44", marginBottom: 28, borderRadius: 1 }} />
          <p
            style={{
              fontSize: 18,
              fontFamily: "'Raleway', sans-serif",
              color: "#302b26",
              lineHeight: 1.85,
              margin: "0 0 20px",
            }}
          >
            Background checks are required for the provider, all household members, and all staff — including volunteers
            who have unsupervised access to residents. Checks must be renewed every two years for ongoing staff.
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
            Disqualifying crimes and negative actions are governed by WAC 388-113. Certain criminal convictions
            permanently disqualify an applicant. Others may be reviewed on a case-by-case basis depending on recency and
            nature.
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
              <strong>Important:</strong> Missing or expired background checks are among the most frequently cited
              violations statewide. Establish a tracking system for renewal dates from day one.
            </p>
          </div>
        </div>
      </section>

      {/* CHOW */}
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
            Buying an Existing AFH
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
            Change of Ownership (CHOW)
          </h2>
          <div style={{ width: 40, height: 3, background: "#b13a44", marginBottom: 28, borderRadius: 1 }} />
          <p
            style={{
              fontSize: 18,
              fontFamily: "'Raleway', sans-serif",
              color: "#302b26",
              lineHeight: 1.85,
              margin: "0 0 20px",
            }}
          >
            Purchasing an existing licensed AFH is called a Change of Ownership (CHOW). The new owner must submit a
            fresh AFH license application and meet all current qualification and licensing requirements — the existing
            license does not transfer automatically.
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
            Before purchasing, always check the AFH Locator for any limits, enforcements, or exemptions issued in the
            previous three years. Ask the current owner about any ongoing limits or outstanding enforcement on the
            existing license.
          </p>
          <p
            style={{
              fontSize: 18,
              fontFamily: "'Raleway', sans-serif",
              color: "#302b26",
              lineHeight: 1.85,
              margin: "0 0 24px",
            }}
          >
            Specialty contracts — such as Meaningful Day Activities, Expanded Community Services (ECS), and Specialized
            Behavior Support (SBS) — are not transferable in a CHOW. The new owner must independently qualify and
            execute new specialty contracts before providing or billing for those services.
          </p>
          <a
            href="https://fortress.wa.gov/dshs/adsaapps/lookup/AFHAdvLookup.aspx"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: 16,
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#481216",
              textDecoration: "none",
              borderBottom: "1px solid #b13a44",
              paddingBottom: 2,
            }}
          >
            Search the AFH Locator before you buy →
          </a>
        </div>
      </section>

      {/* Key Links */}
      <section style={{ background: "#f7f4ef", padding: "56px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2
            style={{ fontSize: 22, fontFamily: "Georgia, serif", fontWeight: 700, color: "#280a0c", margin: "0 0 8px" }}
          >
            Key DSHS Resources
          </h2>
          <div style={{ width: 36, height: 2, background: "#b13a44", marginBottom: 24, borderRadius: 1 }} />
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              { label: "DSHS Online License Application", url: "https://baau.dshs.wa.gov/" },
              {
                label: "AFH Prospective Provider Information",
                url: "https://www.dshs.wa.gov/altsa/residential-care-services/information-afh-prospective-providers",
              },
              {
                label: "Background Check Information (RCS)",
                url: "https://www.dshs.wa.gov/altsa/residential-care-services/rcs-background-check-information",
              },
              {
                label: "Disqualifying Crimes — WAC 388-113",
                url: "https://app.leg.wa.gov/WAC/default.aspx?cite=388-113",
              },
              {
                label: "AFH Minimum Licensing Requirements — WAC 388-76",
                url: "https://app.leg.wa.gov/wac/default.aspx?cite=388-76",
              },
              {
                label: "Find Approved HCA Training Programs",
                url: "https://fortress.wa.gov/dshs/adsaapps/Professional/training/training.aspx",
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

      <BackToAFHClub />
      <CTASection />
      <DisclaimerSection />
    </main>
    <Footer />
  </>
);

export default AFHLicensingCertification;
