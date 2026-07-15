import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import CTASection from "@/components/CTASection";
import DisclaimerSection from "@/components/DisclaimerSection";
import BackToAFHClub from "@/components/BackToAFHClub";
import ArticleAudioPlayer from "@/components/ArticleAudioPlayer";
import audioAsset from "@/assets/afh-training-and-education-requirements.mp3.asset.json";

const TRAINING_REQUIREMENTS = [
  {
    title: "75-Hour HCA Training",
    hours: "75 hrs",
    required: "All non-exempt providers",
    description:
      "Orientation, safety, and basic training covering personal care, resident rights, communication, safety, and infection control. Must be completed at a DSHS-approved program. After completing the 75 hours, pass the HCA certification exam and receive DOH certification before applying for an AFH license.",
    wac: "WAC 388-112A",
  },
  {
    title: "AFH Administrator Training",
    hours: "Variable",
    required: "All initial applicants",
    description:
      "A multi-day course offered exclusively through contracted Washington community colleges. Covers licensing requirements, home management, care planning, medication systems, and building inspection preparation. Awards 12 hours of continuing education credit. Required for every new AFH application and for providers opening an additional home.",
    wac: "WAC 388-112A-0800 through 0840",
  },
  {
    title: "CPR Certification",
    hours: "Varies",
    required: "All providers",
    description:
      "Current CPR certification is required at time of application and must remain current. Accepted from any accredited CPR provider.",
    wac: "WAC 388-76-10120",
  },
  {
    title: "First Aid Certification",
    hours: "Varies",
    required: "Non-nursing providers",
    description: "Required for all providers who are not licensed nurses (RN or LPN). Must remain current.",
    wac: "WAC 388-76-10120",
  },
  {
    title: "Food Safety Training",
    hours: "Varies",
    required: "All providers",
    description: "Training on safe food handling, storage, and preparation. Required before licensure.",
    wac: "WAC 388-112A-0610",
  },
];

const SPECIALTY_TRAININGS = [
  { name: "Dementia Specialty Training", trigger: "Required before admitting residents with dementia" },
  {
    name: "Mental Health Specialty Training",
    trigger: "Required before admitting residents with mental health diagnoses",
  },
  {
    name: "Developmental Disabilities Specialty Training",
    trigger: "Required before admitting residents with developmental disabilities",
  },
  { name: "Nurse Delegation — Basic", trigger: "Required if providing delegated nursing tasks" },
  { name: "Nurse Delegation — Insulin", trigger: "Required if administering insulin through delegation" },
];

const AFHTrainingEducation = () => (
  <>
    <SEOHead
      title="AFH Training & Education | AFH Club | Real Property Planning"
      description="Complete guide to Washington State AFH training requirements — 75-hour HCA training, AFH Administrator Training, specialty courses, continuing education, and where to enroll."
      canonical="https://realpropertyplanning.com/afh-club/training-education"
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://realpropertyplanning.com" },
        { name: "AFH Club", url: "https://realpropertyplanning.com/afh-club" },
        { name: "Training & Education", url: "https://realpropertyplanning.com/afh-club/training-education" },
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
            AFH Club · Training & Education
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
            AFH Training & Education Requirements
          </h1>
          <div className="mb-6">
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
            Washington State has some of the most comprehensive caregiver training requirements in the country. For AFH
            providers, training is not a one-time event — it is an ongoing professional responsibility. This page
            outlines every required training, who must complete it, and where to find approved programs.
          </p>
        </div>
      </section>

      {/* Core Training Requirements */}
      <section style={{ background: "#f7f4ef", padding: "72px 24px" }}>
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
            Pre-Licensure
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
            Core Training Requirements
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
            All of the following must be completed before you can apply for an AFH license. Training takes time — build
            this into your planning timeline.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {TRAINING_REQUIREMENTS.map((item) => (
              <div
                key={item.title}
                style={{
                  background: "#fff",
                  border: "1px solid #dccdce",
                  borderLeft: "5px solid #3f3a35",
                  borderRadius: 6,
                  padding: "24px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                    gap: 8,
                    marginBottom: 10,
                  }}
                >
                  <h3
                    style={{ fontSize: 18, fontFamily: "Georgia, serif", fontWeight: 700, color: "#280a0c", margin: 0 }}
                  >
                    {item.title}
                  </h3>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    <span
                      style={{
                        fontSize: 15,
                        fontFamily: "'Raleway', sans-serif",
                        fontWeight: 700,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        background: "#3f3a35",
                        color: "#e8e2d9",
                        padding: "3px 10px",
                        borderRadius: 3,
                      }}
                    >
                      {item.hours}
                    </span>
                    <span
                      style={{
                        fontSize: 15,
                        fontFamily: "'Raleway', sans-serif",
                        fontWeight: 600,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        background: "#edf0f3",
                        color: "#3f3a35",
                        padding: "3px 10px",
                        borderRadius: 3,
                      }}
                    >
                      {item.required}
                    </span>
                  </div>
                </div>
                <p
                  style={{
                    fontSize: 17,
                    fontFamily: "'Raleway', sans-serif",
                    color: "#302b26",
                    lineHeight: 1.75,
                    margin: "0 0 10px",
                  }}
                >
                  {item.description}
                </p>
                <p
                  style={{
                    fontSize: 15,
                    fontFamily: "'Raleway', sans-serif",
                    fontWeight: 600,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#481216",
                    margin: 0,
                  }}
                >
                  {item.wac}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AFH Admin Training Detail */}
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
            Featured Requirement
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
            AFH Administrator Training — In Detail
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
            The AFH Administrator Training is available only through contracted Washington State community colleges. It
            is a required step for every person applying for an initial AFH license and for any provider opening an
            additional home.
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
            Topics covered include Washington State licensing requirements, resident rights, care planning, medication
            systems, building inspection preparation, emergency procedures, and home administration. Upon completion,
            participants receive a certificate that also counts as 12 hours of DSHS-approved continuing education for
            long-term care workers.
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
            Classes are typically offered at multiple Washington community colleges including North Seattle College.
            Contact the college directly for current schedules — some classes are available on weekends for working
            professionals. Call (206) 934-3619 or email afh.north@seattlecolleges.edu for North Seattle College
            scheduling.
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
                fontFamily: "'Raleway', sans-serif",
                color: "#2f2a25",
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              <strong>Already licensed?</strong> A currently licensed provider who has completed the AFH Administrator
              Training is not required to take it again when applying for a new license for an additional home — unless
              they have not yet completed it at all. If unsure, email rcspolicy@dshs.wa.gov.
            </p>
          </div>
        </div>
      </section>

      {/* Specialty Trainings */}
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
            Additional Training
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
            Specialty Trainings
          </h2>
          <p
            style={{
              fontSize: 17,
              fontFamily: "'Raleway', sans-serif",
              color: "#302b26",
              lineHeight: 1.8,
              margin: "0 0 28px",
            }}
          >
            These trainings are required only if your home admits residents with specific diagnoses or assessed needs.
            They must be completed before providing those services — not after. Each allows you to accept a broader
            range of residents and may qualify your home for specialty Medicaid contracts.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {SPECIALTY_TRAININGS.map((item) => (
              <div
                key={item.name}
                style={{
                  background: "#fff",
                  border: "1px solid #dccdce",
                  borderLeft: "4px solid #b13a44",
                  borderRadius: 6,
                  padding: "18px 22px",
                  display: "flex",
                  gap: 16,
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    flexShrink: 0,
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#b13a44",
                    marginTop: 7,
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
                    {item.name}
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
                    {item.trigger}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <a
            href="https://fortress.wa.gov/dshs/adsaapps/Professional/training/training.aspx"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              marginTop: 24,
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
            Find an approved instructor for specialty trainings →
          </a>
        </div>
      </section>

      {/* Continuing Education */}
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
            Ongoing Requirement
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
            Continuing Education & Optional Certifications
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
            AFH providers and staff are required to complete continuing education annually. Long-term care workers must
            accumulate DSHS-approved CE credits each year to maintain their credentials. The AFH Administrator Training
            certificate counts for 12 CE hours in the year it is completed.
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
            An optional but prestigious credential is the <strong>Certified Adult Family Home Provider</strong> program
            offered through the University of Washington's Northwest Geriatric Education Center. Completing 52–57
            credits covering more than 20 geriatric health topics earns this designation, which signals advanced
            expertise to families and referral agencies.
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
            The Long-Term Care Foundation of Washington (LTCF) operates an AFH Training Network that provides sponsored
            training — including HCA and CNA certification tuition — at no out-of-pocket cost for Medicaid-contracted
            AFHs. Providers pay employees for training hours; LTCF reimburses the AFH after completion.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              { label: "CareLearn Washington — Online CE Courses", url: "https://carelearnwa.com/" },
              {
                label: "DSHS Training Requirements for AFHs",
                url: "https://www.dshs.wa.gov/altsa/training/training-requirements-adult-family-homes",
              },
              {
                label: "Long-Term Care Foundation Training Network",
                url: "https://www.longtermcarefoundationwa.org/training-network",
              },
              {
                label: "Find Approved Training Programs (DSHS)",
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

export default AFHTrainingEducation;
