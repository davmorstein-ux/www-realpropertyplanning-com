import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import CTASection from "@/components/CTASection";
import DisclaimerSection from "@/components/DisclaimerSection";

const TEAL = "#1a7a78";
const SLATE = "#443e38";
const GRAY_BG = "#f4f6f7";
const GRAY_BORDER = "#dde3e8";
const GRAY_TEXT = "#876b6d";
const WHITE = "#ffffff";
const DARK_RED = "#8b1a1a";

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <h2
    style={{
      fontSize: "clamp(22px, 3vw, 30px)",
      fontWeight: 700,
      color: SLATE,
      margin: "0 0 1rem",
      letterSpacing: "-0.01em",
      lineHeight: 1.25,
    }}
  >
    {children}
  </h2>
);

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <p
    style={{
      fontSize: "12px",
      fontWeight: 700,
      letterSpacing: "0.15em",
      textTransform: "uppercase",
      color: DARK_RED,
      margin: "0 0 0.5rem",
    }}
  >
    {children}
  </p>
);

const StyledTable = ({ rows }: { rows: [string, React.ReactNode][] }) => (
  <table
    style={{
      width: "100%",
      borderCollapse: "collapse",
      fontSize: "15px",
      lineHeight: 1.6,
    }}
  >
    <tbody>
      {rows.map(([label, value]) => (
        <tr key={label} style={{ borderBottom: `1px solid ${GRAY_BORDER}` }}>
          <td
            style={{
              padding: "14px 16px 14px 0",
              color: GRAY_TEXT,
              fontWeight: 600,
              width: "45%",
              verticalAlign: "top",
            }}
          >
            {label}
          </td>
          <td
            style={{
              padding: "14px 0",
              color: SLATE,
              verticalAlign: "top",
            }}
          >
            {value}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

const InlineLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link
    to={to}
    style={{
      color: TEAL,
      fontWeight: 600,
      textDecoration: "underline",
      textUnderlineOffset: "3px",
    }}
  >
    {children}
  </Link>
);

const KirklandNE140thStreet = () => {
  const pageTitle = "Adult Family Home at 7339 NE 140th Street, Kirkland, WA";
  const metaDescription =
    "Licensing status, inspection history, property records, and zoning detail for the adult family home at 7339 NE 140th Street in Kirkland, Washington. Public-record reference from Real Property Planning.";
  const canonical = "https://realpropertyplanning.com/afh-club/homes/kirkland-ne-140th-street";

  return (
    <>
      <SEOHead title={pageTitle} description={metaDescription} canonical={canonical} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://realpropertyplanning.com" },
          { name: "AFH Club", url: "https://realpropertyplanning.com/afh-club" },
          { name: "Listings", url: "https://realpropertyplanning.com/afh-club/listings" },
          { name: "7339 NE 140th Street", url: canonical },
        ]}
      />
      <Header />
      <main id="main-content" style={{ backgroundColor: GRAY_BG, minHeight: "100vh" }}>
        {/* ── HERO / PAGE HEADER ── */}
        <section style={{ backgroundColor: WHITE, borderBottom: `1px solid ${GRAY_BORDER}` }}>
          <div style={{ maxWidth: "980px", margin: "0 auto", padding: "2.5rem 1.5rem 2rem" }}>
            <Eyebrow>AFH Club · Property Record</Eyebrow>
            <h1
              style={{
                fontSize: "clamp(26px, 4vw, 40px)",
                fontWeight: 700,
                color: SLATE,
                margin: "0 0 0.75rem",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
              }}
            >
              {pageTitle}
            </h1>
            <p style={{ fontSize: "16px", color: GRAY_TEXT, lineHeight: 1.7, margin: 0, maxWidth: "720px" }}>
              Public-record reference keyed to the Washington State DSHS license for this property. Listing and
              licensing details should be independently verified before relying on them.
            </p>
          </div>
        </section>

        {/* ── CURRENTLY FOR SALE ── */}
        <section style={{ padding: "3rem 1.5rem" }}>
          <div
            style={{
              maxWidth: "980px",
              margin: "0 auto",
              backgroundColor: WHITE,
              border: `1px solid ${GRAY_BORDER}`,
              borderRadius: "8px",
              padding: "2rem",
            }}
          >
            <Eyebrow>Currently For Sale</Eyebrow>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "2rem",
                alignItems: "flex-start",
              }}
            >
              <div style={{ flex: "1 1 280px" }}>
                <p
                  style={{
                    fontSize: "28px",
                    fontWeight: 700,
                    color: SLATE,
                    margin: "0 0 0.5rem",
                  }}
                >
                  $1,449,000
                </p>
                <p style={{ fontSize: "15px", color: GRAY_TEXT, margin: "0 0 1rem", lineHeight: 1.6 }}>
                  NWMLS #2476640 · 6 beds · 3 full baths · 2,820 sq ft
                </p>
                <p style={{ fontSize: "15px", color: SLATE, margin: "0 0 1rem", lineHeight: 1.6 }}>
                  Listing broker: Zora Brzac · HomeSmart Real Estate Assoc
                </p>
                <p style={{ fontSize: "15px", color: GRAY_TEXT, margin: 0, lineHeight: 1.7 }}>
                  For showings and full listing details, contact David Stein, Washington State Licensed Real Estate
                  Broker (eXp Realty).
                </p>
              </div>
              <div
                style={{
                  flex: "1 1 240px",
                  backgroundColor: GRAY_BG,
                  borderRadius: "6px",
                  padding: "1.25rem",
                  fontSize: "14px",
                  color: GRAY_TEXT,
                  lineHeight: 1.6,
                }}
              >
                <p style={{ margin: "0 0 0.75rem" }}>
                  <InlineLink to="/afh-club/listings">See all Washington adult family homes for sale</InlineLink>
                </p>
                <p style={{ margin: 0, fontStyle: "italic" }}>
                  Photo inclusion pending eXp compliance guidance on NWMLS republication.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── LICENSING AND CERTIFICATION ── */}
        <section style={{ padding: "0 1.5rem 3rem" }}>
          <div
            style={{
              maxWidth: "980px",
              margin: "0 auto",
              backgroundColor: WHITE,
              border: `1px solid ${GRAY_BORDER}`,
              borderRadius: "8px",
              padding: "2rem",
            }}
          >
            <SectionHeading>Licensing and Certification</SectionHeading>
            <StyledTable
              rows={[
                ["DSHS license number", "[VERIFY]"],
                ["License status", "[VERIFY]"],
                ["Licensed capacity", "[VERIFY — typically 6 residents]"],
                ["Initial license date", "[VERIFY]"],
                ["Specialty designations", "[VERIFY — dementia / developmental disability / mental health]"],
                ["Data retrieved", "[DATE OF PULL]"],
              ]}
            />
            <p
              style={{
                fontSize: "14px",
                color: GRAY_TEXT,
                lineHeight: 1.7,
                margin: "1.25rem 0 0",
              }}
            >
              Source: Washington State DSHS Adult Family Home licensing records.
            </p>
            <p
              style={{
                fontSize: "15px",
                color: SLATE,
                lineHeight: 1.7,
                margin: "1rem 0 0",
              }}
            >
              Washington adult family homes are licensed for a maximum of six residents. A specialty designation means
              the provider has completed additional DSHS-required training to serve residents with that specific care
              need — it is a training credential, not a quality rating.
            </p>
            <p style={{ margin: "1rem 0 0" }}>
              <InlineLink to="/afh-club/licensing-certification">
                How Washington adult family home licensing works
              </InlineLink>
            </p>
          </div>
        </section>

        {/* ── INSPECTION AND ENFORCEMENT HISTORY ── */}
        <section style={{ padding: "0 1.5rem 3rem" }}>
          <div
            style={{
              maxWidth: "980px",
              margin: "0 auto",
              backgroundColor: WHITE,
              border: `1px solid ${GRAY_BORDER}`,
              borderRadius: "8px",
              padding: "2rem",
            }}
          >
            <SectionHeading>Inspection and Enforcement History</SectionHeading>
            <p
              style={{
                fontSize: "15px",
                color: SLATE,
                lineHeight: 1.7,
                margin: "0 0 1rem",
              }}
            >
              [VERIFY — pull from DSHS enforcement records]
            </p>
            <p
              style={{
                fontSize: "15px",
                color: SLATE,
                lineHeight: 1.7,
                margin: "0 0 1rem",
              }}
            >
              For each entry, display: date, type, description as recorded by DSHS, and <strong>current resolution
              status</strong>.
            </p>
            <p
              style={{
                fontSize: "15px",
                color: SLATE,
                lineHeight: 1.7,
                margin: "0 0 1rem",
              }}
            >
              If the record is clean, say so directly: "DSHS records show no enforcement actions on file as of [date]."
            </p>
            <p
              style={{
                fontSize: "15px",
                color: SLATE,
                lineHeight: 1.7,
                margin: "0 0 1rem",
              }}
            >
              Every entry links to the DSHS source record. Real Property Planning reports these records as published and
              does not characterize or rate providers.
            </p>
            <p style={{ margin: 0 }}>
              <InlineLink to="/afh-club/violation-history-lookup">
                Look up violation history for any Washington adult family home
              </InlineLink>
            </p>
          </div>
        </section>

        {/* ── PROPERTY RECORDS ── */}
        <section style={{ padding: "0 1.5rem 3rem" }}>
          <div
            style={{
              maxWidth: "980px",
              margin: "0 auto",
              backgroundColor: WHITE,
              border: `1px solid ${GRAY_BORDER}`,
              borderRadius: "8px",
              padding: "2rem",
            }}
          >
            <SectionHeading>Property Records</SectionHeading>
            <StyledTable
              rows={[
                ["Parcel number", "[VERIFY — King County Assessor]"],
                ["Year built", "[VERIFY]"],
                ["Above-grade square footage", "[VERIFY]"],
                ["Lot size", "[VERIFY]"],
                ["Current assessed value", "[VERIFY]"],
                ["Zoning", "[VERIFY]"],
                ["Last recorded sale", "[VERIFY — date and price]"],
              ]}
            />
            <p
              style={{
                fontSize: "14px",
                color: GRAY_TEXT,
                lineHeight: 1.7,
                margin: "1.25rem 0 0",
              }}
            >
              Source: King County Department of Assessments. Assessed value is set for property tax purposes and is
              not an appraisal or an estimate of market value.
            </p>
          </div>
        </section>

        {/* ── REGULATORY AND CONVERSION NOTES ── */}
        <section style={{ padding: "0 1.5rem 3rem" }}>
          <div
            style={{
              maxWidth: "980px",
              margin: "0 auto",
              backgroundColor: WHITE,
              border: `1px solid ${GRAY_BORDER}`,
              borderRadius: "8px",
              padding: "2rem",
            }}
          >
            <SectionHeading>Regulatory and Conversion Notes</SectionHeading>
            <p
              style={{
                fontSize: "16px",
                color: SLATE,
                lineHeight: 1.8,
                margin: "0 0 1rem",
              }}
            >
              Written per-property, roughly 150–250 words. What actually goes here:
            </p>
            <ul
              style={{
                fontSize: "15px",
                color: SLATE,
                lineHeight: 1.8,
                margin: "0 0 1.25rem",
                paddingLeft: "1.25rem",
              }}
            >
              <li>
                Whether the parcel's zoning permits adult family home use outright (Washington law generally treats
                licensed AFHs as a residential use, but local requirements vary)
              </li>
              <li>
                Whether the year built and construction type suggest the home has already been through WABO conversion,
                or whether a buyer should budget for it
              </li>
              <li>Fire sprinkler, egress, and accessibility considerations typical for a home of this age and size</li>
              <li>
                Anything notable about the parcel — single level vs. multi-story, lot access, parking for staff and
                visitors
              </li>
            </ul>
            <p
              style={{
                fontSize: "15px",
                color: GRAY_TEXT,
                lineHeight: 1.7,
                margin: "0 0 1rem",
                fontStyle: "italic",
              }}
            >
              This is the section that makes the page worth reading. It is also the section no IDX site will ever have.
            </p>
            <p style={{ margin: 0 }}>
              <InlineLink to="/afh-club/wabo-inspection-guide">WABO conversion requirements for adult family homes</InlineLink>
            </p>
          </div>
        </section>

        {/* ── LOCATION CONTEXT ── */}
        <section style={{ padding: "0 1.5rem 3rem" }}>
          <div
            style={{
              maxWidth: "980px",
              margin: "0 auto",
              backgroundColor: WHITE,
              border: `1px solid ${GRAY_BORDER}`,
              borderRadius: "8px",
              padding: "2rem",
            }}
          >
            <SectionHeading>Location Context</SectionHeading>
            <p
              style={{
                fontSize: "16px",
                color: SLATE,
                lineHeight: 1.8,
                margin: "0 0 1rem",
              }}
            >
              Kirkland, WA — 100–150 words on the surrounding area as it bears on adult family home operation: proximity
              to hospitals and clinics, the local AFH market, and general neighborhood character. No demographic claims,
              no school ratings, nothing that could touch fair housing.
            </p>
            <p style={{ margin: 0 }}>
              <InlineLink to="/afh-club/for-sale/kirkland-wa">Adult family homes for sale in Kirkland</InlineLink>
            </p>
          </div>
        </section>

        {/* ── FOOTER DISCLOSURES ── */}
        <section style={{ padding: "0 1.5rem 3rem" }}>
          <div
            style={{
              maxWidth: "980px",
              margin: "0 auto",
              backgroundColor: "#f9f9f9",
              border: `1px solid ${GRAY_BORDER}`,
              borderRadius: "8px",
              padding: "1.5rem",
            }}
          >
            <p
              style={{
                fontSize: "13px",
                color: GRAY_TEXT,
                lineHeight: 1.7,
                margin: "0 0 0.75rem",
              }}
            >
              Licensing and enforcement information is sourced from Washington State DSHS public records and was retrieved
              on [date]. Property information is sourced from the King County Department of Assessments. Records may have
              changed since retrieval — verify current status directly with DSHS before relying on this information.
            </p>
            <p
              style={{
                fontSize: "13px",
                color: GRAY_TEXT,
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              Real Property Planning is an independent educational resource and does not operate, own, or manage any
              adult family home.
            </p>
          </div>
        </section>

        <CTASection />
        <DisclaimerSection />
      </main>
      <Footer />
    </>
  );
};

export default KirklandNE140thStreet;
