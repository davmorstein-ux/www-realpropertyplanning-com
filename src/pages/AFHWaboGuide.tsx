import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import CTASection from "@/components/CTASection";
import DisclaimerSection from "@/components/DisclaimerSection";
import BackToAFHClub from "@/components/BackToAFHClub";
import ArticleAudioPlayer from "@/components/ArticleAudioPlayer";
import { Link } from "react-router-dom";

const label = {
  fontSize: 15,
  fontFamily: "'DM Sans', sans-serif",
  fontWeight: 600,
  letterSpacing: "0.22em",
  textTransform: "uppercase" as const,
  color: "#481216",
  margin: "0 0 14px",
};

const h2 = {
  fontSize: "clamp(24px, 3.5vw, 36px)",
  fontFamily: "'DM Sans', system-ui, sans-serif",
  fontWeight: 700,
  color: "#280a0c",
  lineHeight: 1.2,
  margin: "0 0 20px",
};

const body = {
  fontSize: 18,
  fontFamily: "'DM Sans', sans-serif",
  color: "#302b26",
  lineHeight: 1.85,
  margin: "0 0 20px",
};

const li = {
  fontSize: 18,
  fontFamily: "'DM Sans', sans-serif",
  color: "#302b26",
  lineHeight: 1.75,
  marginBottom: 10,
};

const sectionLight = { background: "#f7f4ef", padding: "64px 24px" };
const sectionWhite = { background: "#ffffff", padding: "64px 24px" };
const wrap = { maxWidth: 760, margin: "0 auto" };

/* Article schema. AFH guides previously emitted only BreadcrumbSchema, so
   Google had no signal that these are editorial guides rather than agent
   pages. Author/publisher is the Organization — publishing reference material
   is a hub function and makes no claim that RPP provides services. */
const afhArticleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What Is WABO? A Simple Overview",
  description: "A simple overview of WABO and the WABO inspection process for Adult Family Homes in Washington State — what WABO is, who inspects the home, and why it matters before buying.",
  url: "https://realpropertyplanning.com/afh-club/wabo-inspection-guide",
  datePublished: "2026-07-26",
  dateModified: "2026-07-26",
  author: {
    "@type": "Organization",
    name: "Real Property Planning",
    url: "https://realpropertyplanning.com",
  },
  publisher: {
    "@type": "Organization",
    name: "Real Property Planning",
    url: "https://realpropertyplanning.com",
    logo: {
      "@type": "ImageObject",
      url: "https://realpropertyplanning.com/logo.webp",
    },
  },
  isPartOf: {
    "@type": "WebSite",
    name: "Real Property Planning",
    url: "https://realpropertyplanning.com",
  },
};

const AFHWaboGuide = () => (
  <>
    <SEOHead
      title="What Is WABO? A Simple Overview | AFH Club | Real Property Planning"
      description="A simple overview of WABO and the WABO inspection process for Adult Family Homes in Washington State — what WABO is, who inspects the home, and why it matters before buying."
      canonical="https://realpropertyplanning.com/afh-club/wabo-inspection-guide"
      ogType="article"
      schemaJson={afhArticleSchema}
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://realpropertyplanning.com" },
        { name: "AFH Club", url: "https://realpropertyplanning.com/afh-club" },
        { name: "What Is WABO?", url: "https://realpropertyplanning.com/afh-club/wabo-inspection-guide" },
      ]}
    />
    <Header />
    <main id="main-content">
      {/* Hero */}
      <section style={{ background: "#edf0f3", padding: "64px 24px 56px", borderBottom: "3px solid #b13a44" }}>
        <div style={wrap}>
          <div className="mb-6">
            <ArticleAudioPlayer audioSrc="/audio/wabo-overview.mp3" />
          </div>
          <p style={label}>AFH Club · Resource Guide · Last reviewed July 2026</p>
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
            What Is WABO? A Simple Overview for Washington Adult Family Homes
          </h1>
          <p style={{ ...body, margin: 0, maxWidth: 680 }}>
            If you are exploring an Adult Family Home in Washington, you will probably hear someone mention a "WABO
            inspection." The term comes up often, but it is easy to misunderstand.
          </p>
        </div>
      </section>

      {/* Cover image */}
      <section style={{ background: "#ffffff", padding: "40px 24px 0" }}>
        <div style={{ ...wrap, textAlign: "center" as const }}>
          <img
            src="/wabo-overview-cover.webp"
            alt="What WABO is and why it matters for Washington Adult Family Homes"
            style={{ maxWidth: 340, width: "100%", height: "auto", borderRadius: 8, boxShadow: "0 8px 24px rgba(0,0,0,0.15)" }}
            loading="lazy"
            decoding="async"
            width={1023}
            height={1537}
          />
        </div>
      </section>

      {/* Key point */}
      <section style={sectionWhite}>
        <div style={wrap}>
          <p style={body}>
            WABO stands for the <strong>Washington Association of Building Officials</strong>. It is a nonprofit
            professional association made up of building officials, inspectors, plans examiners, architects,
            engineers, and other professionals involved in building-code safety. WABO is not the agency that licenses
            Adult Family Homes, and it generally does not inspect the property itself.
          </p>
          <p style={body}>
            In the Adult Family Home world, "WABO inspection" is informal shorthand for the local building inspection
            completed using the Adult Family Home Local Building Inspection Checklist developed by WABO in
            cooperation with the Washington State Department of Social and Health Services.
          </p>
          <div
            style={{
              background: "#f7f4ef",
              border: "1px solid #dfc9cb",
              borderLeft: "4px solid #9e2c35",
              borderRadius: 6,
              padding: "24px 28px",
              margin: "24px 0",
            }}
          >
            <p style={{ ...body, margin: 0, fontWeight: 600 }}>The key point is simple:</p>
            <ul style={{ margin: "12px 0 0", paddingLeft: 22 }}>
              <li style={li}><strong>WABO</strong> helped develop the checklist.</li>
              <li style={li}>Your <strong>local city or county building department</strong> performs the inspection.</li>
              <li style={li}><strong>DSHS</strong> decides whether the home can be licensed as an Adult Family Home.</li>
            </ul>
          </div>
          <p style={{ ...body, margin: 0 }}>
            Understanding those separate roles can help avoid confusion, delays, and costly mistakes when evaluating a
            property.
          </p>
        </div>
      </section>

      {/* What WABO does */}
      <section style={sectionLight}>
        <div style={wrap}>
          <h2 style={h2}>What WABO Does</h2>
          <p style={body}>
            WABO supports the development, interpretation, administration, and enforcement of construction codes
            throughout Washington. One of its important roles in the Adult Family Home process was helping create a
            consistent inspection checklist for local building departments to use.
          </p>
          <p style={{ ...body, margin: 0 }}>
            That checklist gives local officials a common framework for reviewing the basic life-safety and
            accessibility features that matter in an Adult Family Home. It helps make the process more consistent
            from one jurisdiction to another, even though each city or county still handles its own inspection
            process.
          </p>
        </div>
      </section>

      {/* Why people call it a WABO inspection */}
      <section style={sectionWhite}>
        <div style={wrap}>
          <h2 style={h2}>Why People Call It a WABO Inspection</h2>
          <p style={body}>
            The nickname comes from the checklist itself. Because WABO helped create the form, many applicants,
            contractors, real estate professionals, and local jurisdictions simply refer to the process as a WABO
            inspection.
          </p>
          <p style={{ ...body, margin: 0 }}>
            That is convenient shorthand, but it is not technically exact. The inspection is performed by the local
            building official, not by WABO. WABO provides the framework, but the city or county actually conducts the
            review.
          </p>
        </div>
      </section>

      {/* Who inspects the home */}
      <section style={sectionLight}>
        <div style={wrap}>
          <h2 style={h2}>Who Inspects the Home</h2>
          <p style={body}>
            The inspection is done by the local building official for the jurisdiction where the property is located.
            In most cases, that means either the city building department or the county building or permitting
            department.
          </p>
          <p style={{ ...body, margin: 0 }}>
            This matters because the correct jurisdiction is based on where the property physically sits, not just
            the mailing address. A home may have a city name in its postal address and still be located in
            unincorporated county territory. Before starting the process or making improvements, it is important to
            confirm which jurisdiction has authority over the property.
          </p>
        </div>
      </section>

      {/* Why the inspection matters */}
      <section style={sectionWhite}>
        <div style={wrap}>
          <h2 style={h2}>Why the Inspection Matters</h2>
          <p style={body}>
            The inspection is intended to confirm that the home meets the building-code requirements that apply to
            Adult Family Homes. The focus is on resident safety, emergency exit access, and basic accessibility.
          </p>
          <p style={body}>
            This is not the same as a general home inspection, and it is not the same as the DSHS licensing review.
            Each review serves a different purpose. A home may pass one review and still need corrections for
            another.
          </p>
          <p style={{ ...body, margin: 0 }}>
            For buyers, sellers, and operators, that distinction is important. A property may look suitable on the
            surface, but still have issues that affect whether it can function as an Adult Family Home.
          </p>
        </div>
      </section>

      {/* Why this matters before buying */}
      <section style={sectionLight}>
        <div style={wrap}>
          <h2 style={h2}>Why This Matters Before Buying</h2>
          <p style={body}>
            If you are considering the purchase of an Adult Family Home property, the WABO process should be part of
            your early due diligence. It is much better to identify problems before closing or before committing to
            construction.
          </p>
          <p style={body}>
            Some homes will need relatively minor work. Others may require changes to windows, doors, ramps,
            stairways, bathrooms, or other features before they can be approved for AFH use.
          </p>
          <p style={{ ...body, margin: 0 }}>
            That is why it is wise to confirm the building department, review the property carefully, and understand
            whether the home is likely to work for your intended use.
          </p>
        </div>
      </section>

      {/* Bottom line */}
      <section style={sectionWhite}>
        <div style={wrap}>
          <h2 style={h2}>Bottom Line</h2>
          <p style={body}>
            WABO is not the licensing agency and does not usually perform the inspection. It is the organization that
            helped develop the standardized checklist used by local building departments in the Adult Family Home
            process.
          </p>
          <p style={{ ...body, margin: 0 }}>
            The local city or county building official performs the inspection, and DSHS handles licensing. Knowing
            the difference can save time, money, and frustration.
          </p>
          <p style={{ fontSize: 16, fontFamily: "'DM Sans', sans-serif", color: "#5a5147", margin: "20px 0 0" }}>
            Ready for the technical details?{" "}
            <Link to="/afh-club/wabo-technical-guide" style={{ color: "#9e2c35", fontWeight: 600, textDecoration: "underline" }}>
              WABO Checklist & Technical Requirements →
            </Link>
          </p>
        </div>
      </section>
    </main>
    <BackToAFHClub />
    <CTASection />
    <DisclaimerSection />
    <Footer />
  </>
);

export default AFHWaboGuide;
