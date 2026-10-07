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
import audioAsset from "@/assets/afh-training-and-education-requirements.mp3.asset.json";
import ArticleCover from "@/components/ArticleCover";
import NextQuestions from "@/components/NextQuestions";

const TRAINING_REQUIREMENTS = [
  {
    title: "75-Hour HCA Training",
    hours: "75 hrs",
    required: "All non-exempt providers",
    description:
      "The 75 hours are a two-hour caregiver orientation, three hours of safety training, and 70 hours of basic training covering personal care, resident rights, communication, safety, and infection control. Must be completed at a DSHS-approved program. (Not to be confused with the former DSHS Prospective Provider Orientation class for license applicants, which was repealed effective January 1, 2024.) After completing the 75 hours, pass the HCA certification exam and receive Department of Health certification before you can be licensed.",
    wac: "WAC 388-112A",
  },
  {
    title: "AFH Administrator Training",
    hours: "48–54 hrs",
    required: "All initial applicants",
    description:
      "A DSHS-developed course offered only through community colleges contracted with DSHS. The rules set a minimum of 48 hours of instruction (WAC 388-112A-0800); DSHS and North Seattle College currently describe a 54-hour course. Covers business and fiscal planning, human resources, resident health issues, care planning, emergency and disaster planning, resident rights, the licensing process, legal issues, and fire safety. The certificate counts for 12 hours of continuing education in the year the course is taken. Required for new applicants and entity representatives; a current provider who has already completed it does not repeat it for an additional home.",
    wac: "WAC 388-112A-0800 through 0840",
  },
  {
    title: "CPR Certification",
    hours: "Varies",
    required: "All applicants",
    description:
      "Applicants, providers, entity representatives, and resident managers must have a valid CPR card before the home is licensed and must keep it current. The course must be taught by an authorized CPR instructor and include written and skills tests.",
    wac: "WAC 388-112A-0700, 0720",
  },
  {
    title: "First Aid Certification",
    hours: "Varies",
    required: "Applicants",
    description: "Required with CPR before licensure for applicants, providers, entity representatives, and resident managers, and must remain current. DSHS lists licensed nurses as not required to hold first aid.",
    wac: "WAC 388-112A-0720",
  },
  {
    title: "Food Safety Training",
    hours: "Built in",
    required: "All providers",
    description: "Safe food handling is part of the required caregiver training. A separate food handler's permit is not required for anyone who completed basic training after June 30, 2005. A provider or employee relying on a food handler's permit held before June 30, 2005 must complete a half hour of food safety continuing education each year.",
    wac: "RCW 70.128.250 · WAC 388-112A-0610",
  },
];

const SPECIALTY_TRAININGS = [
  { name: "Dementia Specialty Training", trigger: "Required before admitting or serving residents with dementia-related needs" },
  {
    name: "Mental Health Specialty Training",
    trigger: "Required before admitting or serving residents with needs related to mental illness",
  },
  {
    name: "Developmental Disabilities Specialty Training",
    trigger: "Required before admitting or serving residents with developmental disabilities",
  },
  {
    name: "Nurse Delegation — Core",
    trigger: "Required before a caregiver performs any delegated nursing task; the caregiver must also be a certified Home Care Aide or Nursing Assistant Certified",
  },
  {
    name: "Nurse Delegation — Specialized Diabetes",
    trigger: "Required, in addition to core, before a caregiver gives insulin injections under delegation",
  },
];

/* Article schema. AFH guides previously emitted only BreadcrumbSchema, so
   Google had no signal that these are editorial guides rather than agent
   pages. Author/publisher is the Organization — publishing reference material
   is a hub function and makes no claim that RPP provides services. */
const afhArticleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AFH Training & Education",
  description: "Complete guide to Washington State AFH training requirements — 75-hour HCA training, AFH Administrator Training, specialty courses, continuing education, and where to enroll.",
  url: "https://realpropertyplanning.com/afh-club/training-education",
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

const AFHTrainingEducation = () => (
  <>
    <SEOHead
      title="AFH Training & Education | AFH Club | Real Property Planning"
      description="Complete guide to Washington State AFH training requirements — 75-hour HCA training, AFH Administrator Training, specialty courses, continuing education, and where to enroll."
      canonical="https://realpropertyplanning.com/afh-club/training-education"
      ogType="article"
      schemaJson={afhArticleSchema}
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
          <ArticleCover src="/afh-training-education.webp" alt="Cover art: AFH Training & Education" width={1024} height={1536} />
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
            AFH Club · Training & Education
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
            AFH Training & Education Requirements
          </h1>
          <div className="mb-6">
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
            For AFH providers, training is not a one-time event — it is an ongoing professional responsibility. This page
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
              fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
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
              fontFamily: "'DM Sans', 'DM Sans Fallback', system-ui, sans-serif",
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
              fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
              color: "#1c1917",
              lineHeight: 1.8,
              margin: "0 0 32px",
            }}
          >
            All of the following must be completed before an AFH license is issued. Training takes time — build this
            into your planning timeline.
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
                    style={{ fontSize: 18, fontFamily: "'DM Sans', 'DM Sans Fallback', system-ui, sans-serif", fontWeight: 700, color: "#280a0c", margin: 0 }}
                  >
                    {item.title}
                  </h3>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    <span
                      style={{
                        fontSize: 15,
                        fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
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
                        fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
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
                    fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
                    color: "#1c1917",
                    lineHeight: 1.75,
                    margin: "0 0 10px",
                  }}
                >
                  {item.description}
                </p>
                <p
                  style={{
                    fontSize: 15,
                    fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
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
              fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
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
              fontFamily: "'DM Sans', 'DM Sans Fallback', system-ui, sans-serif",
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
              fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
              color: "#1c1917",
              lineHeight: 1.85,
              margin: "0 0 20px",
            }}
          >
            The AFH Administrator Training is available only through community colleges contracted with DSHS. It is
            required for new applicants and entity representatives. DSHS must deny a license to an applicant who has not
            completed it (WAC 388-76-10120).
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
            The rules set a minimum of 48 hours of instruction (WAC 388-112A-0800); DSHS and North Seattle College
            currently describe the course as 54 hours. Required subjects include business planning and marketing, fiscal
            management, human resources, identifying resident health issues, person-centered and negotiated care planning,
            emergency and disaster planning, nutrition and food service, resident rights, the licensing process, legal
            issues, and physical maintenance and fire safety (WAC 388-112A-0820). Upon completion, participants receive a
            certificate that can be used for 12 hours of long-term care worker continuing education in the year the
            course was taken.
          </p>
          <p
            style={{
              fontSize: 18,
              fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
              color: "#1c1917",
              lineHeight: 1.85,
              margin: "0 0 28px",
            }}
          >
            To find a participating college, use the DSHS training finder and choose "AFH Administrator Training" under
            Other Training. North Seattle College is one of them; call 206-934-3705 or email
            afh.north@seattlecolleges.edu for its current schedule.
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
                fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
                color: "#2f2a25",
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              <strong>Already licensed?</strong> A current provider or entity representative who has already completed
              the AFH Administrator Training does not take it again to apply for an additional home. One who has never
              completed it must take it before submitting the new application (WAC 388-76-10064). If unsure, email
              rcspolicy@dshs.wa.gov.
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
              fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
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
              fontFamily: "'DM Sans', 'DM Sans Fallback', system-ui, sans-serif",
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
              fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
              color: "#1c1917",
              lineHeight: 1.8,
              margin: "0 0 28px",
            }}
          >
            These trainings are required only if your home admits residents with specific diagnoses or assessed needs.
            The provider, entity representative and resident manager must complete specialty training and pass the DSHS
            competency test before admitting or serving those residents. If a current resident develops one of these
            needs in a home without that specialty designation, they have 120 days to complete it (WAC 388-112A-0490).
            Caregivers serving those residents need the matching specialty training too (WAC 388-112A-0400). Nurse
            delegation training is required before a caregiver performs delegated nursing tasks (WAC 388-112A-0550).
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
                      fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
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
                      fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
                      color: "#1c1917",
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
              fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
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
              fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
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
              fontFamily: "'DM Sans', 'DM Sans Fallback', system-ui, sans-serif",
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
              fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
              color: "#1c1917",
              lineHeight: 1.85,
              margin: "0 0 20px",
            }}
          >
            Providers, entity representatives, resident managers, certified Home Care Aides, and nursing assistants
            certified must complete 12 hours of DSHS-approved continuing education by their birthday each year. RNs, LPNs
            and ARNPs are not covered by this requirement. A caregiver who falls behind may not provide care until the
            hours are done (WAC 388-112A-0610). The AFH Administrator Training certificate counts for 12 CE hours in the
            year it is completed.
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
            State law also directs DSHS to establish a specialty license with a geriatric specialty certification for
            providers who complete the <strong>University of Washington School of Nursing</strong> certified geriatric
            certification program and testing (RCW 70.128.040). It is voluntary. Check with the University of Washington
            for whether the program is currently offered.
          </p>
          <p
            style={{
              fontSize: 18,
              fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
              color: "#1c1917",
              lineHeight: 1.85,
              margin: "0 0 28px",
            }}
          >
            The Long-Term Care Foundation of Washington (LTCF) operates an AFH Training Network. For
            Medicaid-contracted AFHs with at least one Medicaid resident, it describes paying tuition, testing and
            application fees for HCA or CNA certification and some specialty courses, plus a training participation
            allowance paid after the employee completes training. Confirm current terms with LTCF.
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
                  fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
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

      <AuthorByline context="afh" />
      <BackToAFHClub />
      <CTASection />
      <DisclaimerSection />
      <NextQuestions />
    </main>
    <Footer />
  </>
);

export default AFHTrainingEducation;
