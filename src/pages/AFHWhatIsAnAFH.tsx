import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import BackToAFHClub from "@/components/BackToAFHClub";
import { STATE_TERMS, TERM_FAMILIES, LAST_REVIEWED } from "@/data/afh/state-terms";

const URL = "https://realpropertyplanning.com/afh-club/what-is-an-adult-family-home";
const TITLE = "What Is an Adult Family Home? Definition and What It's Called in Every State";
const DESCRIPTION =
  "An adult family home is Washington State's term for a licensed residence caring for up to six adults. The same model is called an adult foster home, personal care home, board and care, or family care home elsewhere. State-by-state table of terms, agencies, and capacities.";

const reviewedLabel = new Date(`${LAST_REVIEWED}T00:00:00Z`).toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "UTC",
});

/* Questions answered on this page. The FAQ schema below is generated from the
   same list so the visible answers and the structured answers never diverge. */
const FAQ = [
  {
    q: "What is an adult family home?",
    a: "An adult family home (AFH) is a regular residential house licensed by Washington State DSHS to provide housing, meals, and personal care to up to six adults who are not related to the provider. DSHS may approve up to eight. The provider or staff live in or staff the home around the clock, and residents receive help with daily activities, medication, and, in homes with specialty designations, dementia, mental health, or developmental disability care.",
  },
  {
    q: "Is \"adult family home\" a national term?",
    a: "No. It is Washington's licensing term, defined in RCW 70.128. Wisconsin and Ohio also use it, and Florida, New Jersey, West Virginia, New Hampshire, and Maine use \"adult family care\" or \"adult family-care home.\" Most other states license the same kind of small residential care home under a different name, such as adult foster home, personal care home, family care home, or residential care home.",
  },
  {
    q: "What is the difference between an adult family home and assisted living?",
    a: "Scale and setting. An adult family home is a private house serving up to six (occasionally eight) residents with a live-in or round-the-clock caregiver. An assisted living facility is a licensed building, often with dozens to hundreds of apartments, shift staff, and communal dining. In Washington the two are licensed under different laws (RCW 70.128 for adult family homes, RCW 18.20 for assisted living), have different building requirements, and are inspected under different rules.",
  },
  {
    q: "What is an adult family home called in Oregon?",
    a: "An adult foster home, also abbreviated AFH. Oregon adult foster homes are licensed by the Oregon Department of Human Services for up to five residents and are classified by level of care.",
  },
  {
    q: "What is an adult family home called in California?",
    a: "A Residential Care Facility for the Elderly (RCFE), commonly called a board and care home. Small RCFEs serving six or fewer residents are the closest equivalent to a Washington adult family home. Homes for adults under 60 are licensed as Adult Residential Facilities.",
  },
  {
    q: "Does Medicaid pay for adult family home care?",
    a: "In Washington, yes, for residents who qualify. Most adult family homes hold a DSHS Medicaid contract; the site's directory shows which homes accept Medicaid and which are private pay only. Other states have their own Medicaid waiver programs for small residential care, and eligibility and rates differ by state.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESCRIPTION,
  url: URL,
  datePublished: LAST_REVIEWED,
  dateModified: LAST_REVIEWED,
  author: { "@type": "Organization", name: "Real Property Planning", url: "https://realpropertyplanning.com" },
  publisher: {
    "@type": "Organization",
    name: "Real Property Planning",
    url: "https://realpropertyplanning.com",
    logo: { "@type": "ImageObject", url: "https://realpropertyplanning.com/logo.webp" },
  },
  isPartOf: { "@type": "WebSite", name: "Real Property Planning", url: "https://realpropertyplanning.com" },
};

const bodyText: React.CSSProperties = {
  fontSize: 18,
  fontFamily: "'DM Sans', sans-serif",
  color: "#342e28",
  lineHeight: 1.85,
  margin: "0 0 16px",
};

const h2Style: React.CSSProperties = {
  fontSize: "clamp(24px, 3.2vw, 32px)",
  fontFamily: "'DM Sans', system-ui, sans-serif",
  fontWeight: 700,
  color: "#292521",
  lineHeight: 1.2,
  margin: "0 0 18px",
};

const cell: React.CSSProperties = {
  padding: "12px 14px",
  borderTop: "1px solid #d9dede",
  verticalAlign: "top",
  fontSize: 16,
  lineHeight: 1.5,
};

const AFHWhatIsAnAFH = () => {
  const byAbbr = new Map(STATE_TERMS.map((s) => [s.abbr, s]));

  return (
    <>
      <SEOHead
        title={`${TITLE} | Real Property Planning`}
        description={DESCRIPTION}
        canonical={URL}
        ogType="article"
        schemaJson={[articleSchema, faqSchema]}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://realpropertyplanning.com" },
          { name: "AFH Club", url: "https://realpropertyplanning.com/afh-club" },
          { name: "What Is an Adult Family Home?", url: URL },
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
              AFH Club · Definitions
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
              What is an adult family home — and what is it called in your state?
            </h1>

            {/* Quick answer: the first 60 words answer the question outright. */}
            <div
              style={{
                margin: "0 0 20px",
                padding: "20px 22px",
                border: "1px solid #d9dede",
                borderRadius: 12,
                background: "#fafaf8",
              }}
            >
              <p
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#a8892f",
                  margin: "0 0 8px",
                }}
              >
                Quick answer
              </p>
              <p style={{ ...bodyText, margin: 0 }}>
                An <strong>adult family home</strong> is a regular house licensed by Washington State DSHS to
                provide housing and personal care for up to six adults (up to eight with approval). The term
                is Washington's; the same small residential care home is an <em>adult foster home</em> in
                Oregon and Michigan, a <em>board and care</em> (RCFE) in California, a <em>personal care
                home</em> in Georgia and Pennsylvania, and a <em>family care home</em> in North Carolina.
              </p>
            </div>

            <p style={{ ...bodyText, fontSize: 15, color: "#5b554e" }}>
              Reviewed {reviewedLabel}. State terms and capacity limits change; verify with the agency listed
              before relying on this table.
            </p>
          </div>
        </section>

        {/* Definition */}
        <section style={{ padding: "56px 24px" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <h2 style={h2Style}>The adult family home model</h2>
            <p style={bodyText}>
              Every state licenses some version of the same idea: a small number of adults who need daily
              help living together in an ordinary house, cared for by a provider who lives there or staffs it
              around the clock. It sits between in-home care and a facility. Residents get the supervision of
              assisted living without the scale, and the state inspects the home, licenses the provider, and
              caps how many people can live there.
            </p>
            <p style={bodyText}>
              In Washington that license is the adult family home, created by RCW 70.128 and regulated under
              WAC 388-76. There are more than 4,000 licensed adult family homes in King, Pierce, and Snohomish
              counties alone, most licensed for six residents, most accepting Medicaid, and most carrying
              DSHS specialty designations for dementia, mental health, or developmental disabilities. This
              site's{" "}
              <Link to="/afh-club/homes" style={{ color: "#1a365d", textDecoration: "underline" }}>
                directory lists every one of them
              </Link>{" "}
              from DSHS licensing records.
            </p>
            <p style={bodyText}>
              The confusion starts at the state line. Someone searching for this kind of care in Phoenix will
              never type "adult family home," because Arizona calls it an assisted living home. The table
              below maps Washington's term to what each state's regulator actually calls it.
            </p>
          </div>
        </section>

        {/* Term families */}
        <section style={{ background: "#f7f5f2", padding: "56px 24px" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <h2 style={h2Style}>Same model, six vocabularies</h2>
            <p style={bodyText}>
              State terms cluster into a handful of families. If you know your state's word, this is the
              fastest way to find its row in the full table.
            </p>
            <ul style={{ paddingLeft: 22, margin: 0 }}>
              {TERM_FAMILIES.map(({ family, states }) => (
                <li key={family} style={{ ...bodyText, margin: "0 0 10px" }}>
                  <strong>{family}</strong> —{" "}
                  {states
                    .map((ab) => byAbbr.get(ab))
                    .filter(Boolean)
                    .map((s) => s!.state)
                    .join(", ")}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* State table */}
        <section style={{ padding: "56px 24px" }}>
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <h2 style={h2Style}>What an adult family home is called in each state</h2>
            <p style={bodyText}>
              Term as the state regulator uses it, the licensing agency, and typical capacity for the
              small-home category. Where a state has no separate small-home license, the row says so.
            </p>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "'DM Sans', sans-serif" }}>
                <thead>
                  <tr style={{ textAlign: "left", background: "#edf0f3" }}>
                    <th style={{ ...cell, borderTop: "none", fontWeight: 700 }}>State</th>
                    <th style={{ ...cell, borderTop: "none", fontWeight: 700 }}>Licensing term</th>
                    <th style={{ ...cell, borderTop: "none", fontWeight: 700 }}>Licensing agency</th>
                    <th style={{ ...cell, borderTop: "none", fontWeight: 700 }}>Typical capacity</th>
                  </tr>
                </thead>
                <tbody>
                  {[...STATE_TERMS]
                    .sort((a, b) => a.state.localeCompare(b.state))
                    .map((s) => (
                      <tr key={s.abbr} id={`state-${s.abbr.toLowerCase()}`}>
                        <th scope="row" style={{ ...cell, fontWeight: 600, whiteSpace: "nowrap" }}>
                          {s.state}
                        </th>
                        <td style={cell}>
                          <strong>{s.term}</strong>
                          {s.shortName ? ` (${s.shortName})` : ""}
                          {s.note && (
                            <div style={{ color: "#5b554e", fontSize: 15, marginTop: 4 }}>{s.note}</div>
                          )}
                        </td>
                        <td style={cell}>{s.agency}</td>
                        <td style={cell}>{s.capacity}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            <p style={{ ...bodyText, fontSize: 15, color: "#5b554e", marginTop: 16 }}>
              {STATE_TERMS.length} states listed. States not shown either fold small homes into their
              general assisted living license or have not yet been reviewed. Corrections are welcome — the
              agency named in each row is the authority.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ background: "#f7f5f2", padding: "56px 24px" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <h2 style={h2Style}>Common questions</h2>
            {FAQ.map(({ q, a }) => (
              <div key={q} style={{ margin: "0 0 26px" }}>
                <h3
                  style={{
                    fontSize: 20,
                    fontFamily: "'DM Sans', system-ui, sans-serif",
                    fontWeight: 700,
                    color: "#292521",
                    margin: "0 0 8px",
                  }}
                >
                  {q}
                </h3>
                <p style={{ ...bodyText, margin: 0 }}>{a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Where to go next */}
        <section style={{ padding: "56px 24px" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <h2 style={h2Style}>In Washington</h2>
            <ul style={{ paddingLeft: 22, margin: 0 }}>
              {[
                ["/afh-club/homes", "Find a licensed adult family home by city"],
                ["/afh-club/listings", "Adult family homes for sale"],
                ["/afh-club/licensing-certification", "How to get licensed as a provider"],
                ["/afh-club/buying-selling", "Buying or selling an adult family home"],
                ["/afh-club/costs-fees", "What an adult family home costs"],
              ].map(([to, label]) => (
                <li key={to} style={{ ...bodyText, margin: "0 0 8px" }}>
                  <Link to={to} style={{ color: "#1a365d", textDecoration: "underline" }}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <BackToAFHClub />
      </main>
      <Footer />
    </>
  );
};

export default AFHWhatIsAnAFH;
