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
  fontFamily: "Georgia, serif",
  fontWeight: 700,
  color: "#280a0c",
  lineHeight: 1.2,
  margin: "0 0 20px",
};

const h3 = {
  fontSize: "clamp(19px, 2.5vw, 24px)",
  fontFamily: "Georgia, serif",
  fontWeight: 700,
  color: "#292521",
  lineHeight: 1.3,
  margin: "28px 0 12px",
};

const body = {
  fontSize: 18,
  fontFamily: "'DM Sans', sans-serif",
  color: "#302b26",
  lineHeight: 1.85,
  margin: "0 0 20px",
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
  headline: "WABO Checklist & Technical Requirements",
  description: "A technical guide to the WABO Adult Family Home Building Inspection Checklist in Washington State — what the checklist covers, common delays, and why passing does not mean licensed.",
  url: "https://realpropertyplanning.com/afh-club/wabo-technical-guide",
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

const AFHWaboTechnicalGuide = () => (
  <>
    <SEOHead
      title="WABO Checklist & Technical Requirements | AFH Club | Real Property Planning"
      description="A technical guide to the WABO Adult Family Home Building Inspection Checklist in Washington State — what the checklist covers, common delays, and why passing does not mean licensed."
      canonical="https://realpropertyplanning.com/afh-club/wabo-technical-guide"
      ogType="article"
      schemaJson={afhArticleSchema}
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://realpropertyplanning.com" },
        { name: "AFH Club", url: "https://realpropertyplanning.com/afh-club" },
        { name: "WABO Checklist & Technical Requirements", url: "https://realpropertyplanning.com/afh-club/wabo-technical-guide" },
      ]}
    />
    <Header />
    <main id="main-content">
      {/* Hero */}
      <section style={{ background: "#edf0f3", padding: "64px 24px 56px", borderBottom: "3px solid #b13a44" }}>
        <div style={wrap}>
          <div className="mb-6">
            <ArticleAudioPlayer audioSrc="/audio/wabo-technical.mp3" />
          </div>
          <p style={label}>AFH Club · Resource Guide · Last reviewed July 2026</p>
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
            What Is WABO? The Technical Guide for Washington Adult Family Homes
          </h1>
          <p style={{ ...body, margin: "0 0 16px", maxWidth: 680 }}>
            If you are opening, buying, remodeling, or expanding an Adult Family Home in Washington, the WABO
            checklist process is one of the most important parts of the project. This article focuses on the
            technical side of the process — what the checklist covers, who performs the inspection, what usually
            causes delays, and why passing the checklist is only one part of the larger licensing process.
          </p>
          <p style={{ fontSize: 16, fontFamily: "'DM Sans', sans-serif", color: "#5a5147", margin: 0 }}>
            New to WABO? Start with{" "}
            <Link to="/afh-club/wabo-inspection-guide" style={{ color: "#9e2c35", fontWeight: 600, textDecoration: "underline" }}>
              What Is WABO? A Simple Overview →
            </Link>
          </p>
        </div>
      </section>

      {/* Cover image */}
      <section style={{ background: "#ffffff", padding: "40px 24px 0" }}>
        <div style={{ ...wrap, textAlign: "center" as const }}>
          <img
            src="/wabo-technical-cover.webp"
            alt="WABO Adult Family Home inspection checklist and technical requirements guide"
            style={{ maxWidth: 340, width: "100%", height: "auto", borderRadius: 8, boxShadow: "0 8px 24px rgba(0,0,0,0.15)" }}
            loading="lazy"
            decoding="async"
            width={1023}
            height={1537}
          />
        </div>
      </section>

      {/* Intro / how it works */}
      <section style={sectionWhite}>
        <div style={wrap}>
          <p style={body}>
            WABO stands for the Washington Association of Building Officials, but the term "WABO inspection" is
            really shorthand for the local building inspection completed using the Adult Family Home Local Building
            Inspection Checklist developed by WABO in cooperation with the Washington State Department of Social and
            Health Services.
          </p>

          <h2 style={h2}>How the Process Works</h2>
          <p style={body}>
            The inspection is performed by the local building official for the jurisdiction where the property is
            located. Depending on the property, that may be a city building department or a county building or
            permitting department.
          </p>
          <p style={body}>
            Before the inspection, the applicant usually needs to identify the correct jurisdiction, obtain the
            current checklist and local application requirements, complete the applicant sections, and provide a
            floor plan of the home. In many cases, the local building department may also require permits, plans,
            engineering, fire review, septic review, or other documentation before issuing approval.
          </p>
          <p style={{ ...body, margin: 0 }}>
            The inspection is intended to determine whether the home meets the AFH building-code requirements in
            Washington's residential code, including Section R330. It is not the same as a general home inspection,
            and it is not the same as the DSHS licensing review.
          </p>
        </div>
      </section>

      {/* What the checklist covers */}
      <section style={sectionLight}>
        <div style={wrap}>
          <h2 style={h2}>What the Checklist Covers</h2>
          <p style={body}>
            The current checklist addresses a number of life-safety and accessibility issues. These include resident
            bedroom exits, emergency escape windows, smoke and carbon monoxide alarms, doors and hardware, ramps and
            landings, stairs and handrails, bathroom grab bars, shower dimensions, and fire access and water supply.
          </p>
          <p style={{ ...body, margin: 0 }}>
            Each category matters because an Adult Family Home must support safe evacuation, safe daily use, and
            reasonable access for residents who may have mobility limitations or need help during an emergency.
          </p>

          <h3 style={h3}>Resident Bedrooms</h3>
          <p style={body}>
            One of the most important parts of the checklist is how proposed sleeping rooms are classified. The room
            layout, exit path, and accessibility all matter. A room that looks suitable as a bedroom may not qualify
            for AFH use if its egress or location does not meet the code requirements.
          </p>
          <p style={{ ...body, margin: 0 }}>
            That is why basement rooms, upper-level rooms, converted garages, and rooms reached through stairs often
            require extra review. The physical arrangement of the room can affect whether it can be used as a
            resident bedroom.
          </p>

          <h3 style={h3}>Emergency Escape Windows</h3>
          <p style={body}>
            Resident sleeping rooms must have compliant emergency escape and rescue openings. The checklist reviews
            the size and operation of bedroom windows to make sure they can serve as a usable escape route.
          </p>
          <p style={{ ...body, margin: 0 }}>
            This is a common problem area, especially when replacement windows have reduced the actual clear opening.
            A window may look large enough at first glance but still fail if the net-clear opening, sill height, or
            operating configuration does not comply.
          </p>

          <h3 style={h3}>Ramps and Landings</h3>
          <p style={body}>
            Ramps are another common issue. A ramp must do more than simply connect two elevations — it must have the
            right slope, proper landings, and compliant handrails or guards where required.
          </p>
          <p style={{ ...body, margin: 0 }}>
            A ramp that appears gradual may still fail if it is too steep, lacks landing space, or does not fit
            within the property layout. Before construction begins, the full route should be planned carefully.
          </p>

          <h3 style={h3}>Stairs and Handrails</h3>
          <p style={body}>
            Stairs are reviewed for tread and riser dimensions, handrails, and guards. The goal is to support safe
            movement through the home while reducing fall risk.
          </p>
          <p style={{ ...body, margin: 0 }}>
            Missing handrails or noncompliant stair dimensions can quickly delay approval. These issues are often
            easier to correct before a remodel is finished than after the fact.
          </p>

          <h3 style={h3}>Bathrooms and Showers</h3>
          <p style={body}>
            Bathrooms used by residents are reviewed for required grab bars and shower dimensions. Grab bars must be
            properly mounted and backed so they can safely support use over time.
          </p>
          <p style={{ ...body, margin: 0 }}>
            Showers also have minimum dimensional requirements when they are being used to satisfy bathing-facility
            needs. Improperly sized showers and poorly planned grab-bar placement are common reasons a home may not
            pass on the first attempt.
          </p>

          <h3 style={h3}>Doors, Locks, and Hardware</h3>
          <p style={body}>
            The checklist also covers doors and operating hardware. Doors must be usable in a way that supports safe
            exit and reentry, and hardware must generally be operable without tight grasping, pinching, or twisting.
          </p>
          <p style={{ ...body, margin: 0 }}>
            This can become an issue when a home has round doorknobs, keyed deadbolts, or other hardware that is
            difficult for residents to operate. In an Adult Family Home, simple details can have a major impact on
            compliance.
          </p>

          <h3 style={h3}>Smoke and Carbon Monoxide Alarms</h3>
          <p style={body}>
            Smoke and carbon monoxide alarms must be placed and installed correctly. The goal is not just to have
            alarms in the home, but to ensure the alarm system works in a way that protects residents throughout the
            dwelling.
          </p>
          <p style={{ ...body, margin: 0 }}>
            The inspector will consider location, coverage, and audibility. Individual battery alarms may not be
            enough if they do not meet the code requirements for the structure.
          </p>

          <h3 style={h3}>Fire Access and Water Supply</h3>
          <p style={{ ...body, margin: 0 }}>
            The property must also have adequate fire apparatus access and water supply. That can involve road
            access, driveway conditions, hydrants, and other site-specific issues. These items are easy to overlook
            during a purchase or remodel, but they can become major approval issues if the property does not have the
            right access or utility conditions.
          </p>
        </div>
      </section>

      {/* Why passing does not mean licensed */}
      <section style={sectionWhite}>
        <div style={wrap}>
          <h2 style={h2}>Why Passing Does Not Mean Licensed</h2>
          <p style={body}>
            A passed checklist is important, but it is not the same as a DSHS license. The local building official is
            only approving the building for AFH use under the items reviewed on the checklist.
          </p>
          <p style={{ ...body, margin: 0 }}>
            DSHS still decides whether the provider and the home qualify for licensing. The checklist does not
            transfer an existing license, guarantee a specific licensed capacity, or replace other permits and final
            inspections.
          </p>
        </div>
      </section>

      {/* Common delays */}
      <section style={sectionLight}>
        <div style={wrap}>
          <h2 style={h2}>Common Delays</h2>
          <p style={body}>
            The most common delays usually come from avoidable issues. These include using an outdated checklist,
            contacting the wrong jurisdiction, submitting an incomplete floor plan, assuming a room qualifies as a
            bedroom because it is labeled that way, failing window or ramp requirements, missing handrails, poor
            grab-bar installation, small showers, hardware that does not meet the code, and unpermitted construction
            that does not match the approved plans.
          </p>
          <p style={{ ...body, margin: 0 }}>
            For buyers, the biggest mistake is assuming a property is already AFH-ready just because it was
            previously used as one. The approved checklist, the current license, the permit history, and the actual
            condition of the property all need to be verified.
          </p>
        </div>
      </section>

      {/* Why buyers should review this early + conclusion */}
      <section style={sectionWhite}>
        <div style={wrap}>
          <h2 style={h2}>Why Buyers Should Review This Early</h2>
          <p style={body}>
            If you are buying an Adult Family Home property, this review should happen before you remove your
            feasibility contingency. The building code, the licensing rules, and the physical property all need to
            work together.
          </p>
          <p style={body}>
            A property may be a good home but a poor AFH candidate. Early review can save time, money, and
            frustration.
          </p>

          <h3 style={h3}>Conclusion</h3>
          <p style={body}>
            The WABO checklist is a technical but essential part of the Adult Family Home process in Washington. It
            helps local building departments evaluate whether a home is physically suitable for AFH use, but it does
            not replace DSHS licensing or other due diligence.
          </p>
          <p style={{ ...body, margin: 0 }}>
            If the goal is to buy, sell, or remodel an Adult Family Home successfully, the technical checklist should
            be treated as a core part of the project from the start.
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

export default AFHWaboTechnicalGuide;
