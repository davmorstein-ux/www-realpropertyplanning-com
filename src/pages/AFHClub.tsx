import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import CTASection from "@/components/CTASection";
import DisclaimerSection from "@/components/DisclaimerSection";
import AFHCarousel from "@/components/AFHCarousel";

const AFHClub = () => (
  <>
    <SEOHead
      title="AFH Club | Adult Family Home Resource Network | Real Property Planning"
      description="Washington State's premier resource network for Adult Family Home owners, prospective providers, buyers, and the professionals who serve them."
      canonical="https://realpropertyplanning.com/afh-club"
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://realpropertyplanning.com" },
        { name: "AFH Club", url: "https://realpropertyplanning.com/afh-club" },
      ]}
    />
    <Header />
    <main id="main-content">
      {/* Hero — light slate, dark text, WCAG AA compliant */}
      <section
        style={{
          background: "#edf0f3",
          padding: "72px 24px 64px",
          textAlign: "center",
          borderBottom: "3px solid #b87333",
        }}
      >
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          {/* Badge */}
          <div style={{ marginBottom: 36 }}>
            <img
              src="/afh-club-badge.webp"
              alt="AFH Club — Washington State Adult Family Home Resource Network"
              style={{
                width: "100%",
                maxWidth: 200,
                height: "auto",
                display: "block",
                margin: "0 auto",
              }}
              loading="eager"
            />
          </div>

          {/* Eyebrow */}
          <p
            style={{
              fontSize: 12,
              fontFamily: "'Raleway', 'Gill Sans', sans-serif",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#7a4e1a",
              margin: "0 0 14px",
            }}
          >
            Real Property Planning
          </p>

          {/* Headline */}
          <h1
            style={{
              fontSize: "clamp(36px, 5vw, 54px)",
              fontFamily: "Georgia, serif",
              fontWeight: 700,
              color: "#1a2530",
              lineHeight: 1.15,
              margin: "0 0 10px",
            }}
          >
            AFH Club
          </h1>

          <p
            style={{
              fontSize: 19,
              fontFamily: "Georgia, serif",
              fontWeight: 400,
              color: "#7a4e1a",
              letterSpacing: "0.06em",
              margin: "0 0 24px",
            }}
          >
            Washington State Adult Family Home Resource Network
          </p>

          {/* Divider */}
          <div
            style={{
              width: 48,
              height: 3,
              background: "#b87333",
              margin: "0 auto 32px",
              borderRadius: 1,
            }}
          />

          {/* Intro copy */}
          <p
            style={{
              fontSize: "clamp(17px, 2vw, 19px)",
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 400,
              color: "#1e2e3e",
              lineHeight: 1.85,
              margin: "0 auto 20px",
              maxWidth: 640,
            }}
          >
            Adult Family Homes are among Washington State's most vital — and most complex — care environments. Whether
            you are exploring the business for the first time, navigating licensing and building requirements, looking
            to buy or sell an AFH, or searching for qualified professionals, AFH Club exists as a neutral resource
            network for everyone in the AFH community.
          </p>

          <p
            style={{
              fontSize: 17,
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 400,
              color: "#2e3e4e",
              lineHeight: 1.85,
              margin: "0 auto",
              maxWidth: 580,
            }}
          >
            No memberships. No fees. Simply a curated collection of resources, directories, and connections — organized
            so you can find exactly what you need.
          </p>
        </div>
      </section>

      {/* Topic divider */}
      <div
        style={{
          background: "#2c3a48",
          padding: "18px 24px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: 12,
            fontFamily: "'Raleway', sans-serif",
            fontWeight: 600,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "#e8e2d9",
          }}
        >
          Select a topic below to explore
        </p>
      </div>

      {/* Carousel */}
      <AFHCarousel />

      {/* What is an AFH section */}
      <section
        style={{
          background: "#f7f4ef",
          padding: "80px 24px",
        }}
      >
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <p
            style={{
              fontSize: 12,
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#7a4e1a",
              margin: "0 0 16px",
            }}
          >
            Background
          </p>
          <h2
            style={{
              fontSize: "clamp(26px, 3.5vw, 38px)",
              fontFamily: "Georgia, serif",
              fontWeight: 700,
              color: "#0a1628",
              lineHeight: 1.2,
              margin: "0 0 20px",
            }}
          >
            What Is an Adult Family Home?
          </h2>
          <div
            style={{
              width: 40,
              height: 3,
              background: "#b87333",
              marginBottom: 32,
              borderRadius: 1,
            }}
          />
          <p
            style={{
              fontSize: 18,
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 400,
              color: "#1e2a38",
              lineHeight: 1.85,
              margin: "0 0 22px",
            }}
          >
            An Adult Family Home (AFH) is a private residence licensed by the Washington State Department of Social and
            Health Services (DSHS) to provide personal care, room, and board for up to six adults who are unrelated to
            the service provider. In certain circumstances, an existing licensed AFH may be expanded to serve up to
            eight residents.
          </p>
          <p
            style={{
              fontSize: 18,
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 400,
              color: "#1e2a38",
              lineHeight: 1.85,
              margin: "0 0 22px",
            }}
          >
            AFHs are permitted in all single-family residential zoning districts throughout Washington State and are
            regulated under WAC 388-76 and RCW 70.128. They represent one of the most personal and community-integrated
            forms of long-term care available — and one of the most regulated.
          </p>
          <p
            style={{
              fontSize: 18,
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 400,
              color: "#1e2a38",
              lineHeight: 1.85,
              margin: 0,
            }}
          >
            DSHS licensors conduct unannounced inspections on a regular cycle. Providers must maintain continuous
            compliance with licensing, training, building, and care standards — which is precisely why having access to
            organized, reliable information matters.
          </p>
        </div>
      </section>

      <CTASection />
      <DisclaimerSection />
    </main>
    <Footer />
  </>
);

export default AFHClub;
