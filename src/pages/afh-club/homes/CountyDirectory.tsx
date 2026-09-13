import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import HeroBandTitle from "@/components/HeroBandTitle";
import { counties, countyIndex, countiesChecked } from "@/data/afh/directory";

const GREEN = "#0a5648";
const BORDER = "#d9dede";

/**
 * Entry point for the adult family home directory: every county, then every
 * city we hold licensing data for.
 *
 * Counties are pills sorted by size, because that is where "where are the
 * options" gets answered. Within a county, cities are alphabetical — with 172
 * cities statewide the list is scanned for a name, not ranked — and each shows
 * its home and bed count.
 */
const CountyDirectory = () => {
  const totalHomes = countyIndex.reduce((s, c) => s + c.facilityCount, 0);
  const totalBeds = countyIndex.reduce((s, c) => s + c.totalBeds, 0);
  const countyGroups = counties();

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Licensed Adult Family Homes in Washington by City | Real Property Planning"
        description={`Directory of ${totalHomes} licensed adult family homes across ${countyIndex.length} Washington cities, from DSHS records. Capacity, specialty designations, Medicaid status, and inspection history for each home.`}
        canonical="https://realpropertyplanning.com/afh-club/homes"
      />
      <BreadcrumbSchema
        items={[
          { name: "AFH Club", url: "/afh-club" },
          { name: "Adult Family Homes", url: "/afh-club/homes" },
        ]}
      />
      <Header />
      <main id="main-content">
        <div style={{ background: GREEN, padding: "6px 24px 4px" }} />
        <HeroBandTitle as="h1">Licensed adult family homes by city</HeroBandTitle>

        <section className="py-10 md:py-14 bg-cream">
          <div className="container px-5 md:px-8">
            <div className="max-w-3xl mx-auto text-foreground text-[17px] md:text-[18px] leading-relaxed space-y-4">
              <p>
                Washington State licenses adult family homes to care for up to six residents — sometimes eight — in an
                ordinary house in an ordinary neighborhood. There are far more of them than most families realize, and
                no single place to compare them.
              </p>
              <p>
                This directory covers{" "}
                <strong>
                  {totalHomes.toLocaleString()} licensed homes and {totalBeds.toLocaleString()} licensed beds
                </strong>{" "}
                across {countyIndex.length} cities in {countyGroups.length} of Washington's 39 counties, assembled
                from Washington State DSHS public records. All 39 counties were checked; {countiesChecked.filter((c) => c.facilityCount === 0).length} have no licensed
                homes. Choose a county or a city to see every licensed home in it, with capacity, specialty
                designations, and Medicaid status.
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-10 bg-background">
          <div className="container px-5 md:px-8">
            <div className="max-w-3xl mx-auto">
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "1rem 1.5rem",
                  padding: "1.25rem 1.5rem",
                  marginBottom: "2rem",
                  background: GREEN,
                  borderRadius: "12px",
                  color: "#fff",
                }}
              >
                <p style={{ margin: 0, fontSize: "18px", lineHeight: 1.5, fontWeight: 600, flex: "1 1 360px" }}>
                  Budgeting first? See what an adult family home costs in any city or county — Medicaid rate range,
                  private-pay range, and how many homes there accept Medicaid.
                </p>
                <Link
                  to="/afh-club/cost-by-location"
                  className="no-underline"
                  style={{
                    flex: "0 0 auto",
                    display: "inline-flex",
                    alignItems: "center",
                    minHeight: "52px",
                    padding: "0 1.5rem",
                    background: "#fff",
                    color: GREEN,
                    fontSize: "17px",
                    fontWeight: 700,
                    borderRadius: "8px",
                    textDecoration: "none",
                  }}
                >
                  Cost by city &amp; county →
                </Link>
              </div>
              <h2 className="font-serif text-[24px] md:text-[28px] font-semibold text-navy leading-tight mb-4">Browse by county</h2>
              {(() => {
                const bySize = [...countiesChecked].sort((a, b) => b.facilityCount - a.facilityCount || a.county.localeCompare(b.county));
                const largest = bySize.slice(0, 6);
                const alpha = [...countiesChecked].sort((a, b) => a.county.localeCompare(b.county));
                const Pill = ({ c }: { c: (typeof countiesChecked)[number] }) => {
                  const empty = c.facilityCount === 0;
                  return (
                    <Link
                      to={`/afh-club/homes/county/${c.slug}`}
                      className={`rpp-county-pill no-underline${empty ? " is-empty" : ""}`}
                      title={empty ? `${c.county} County was checked and has no licensed adult family homes` : `${c.facilityCount} licensed homes in ${c.county} County`}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        minHeight: "44px",
                        padding: "8px 16px",
                        borderRadius: "999px",
                        border: `1px solid ${empty ? BORDER : GREEN}`,
                        background: empty ? "#f5f5f5" : "#fff",
                        color: empty ? "#6b7280" : GREEN,
                        fontSize: "16px",
                        fontWeight: 600,
                        textDecoration: "none",
                      }}
                    >
                      {c.county}
                      <span style={{ fontWeight: 500, color: empty ? "#9ca3af" : "#374151", fontSize: "14px" }}>
                        {empty ? "0" : c.facilityCount.toLocaleString()}
                      </span>
                    </Link>
                  );
                };
                return (
                  <>
                    <p style={{ margin: "0 0 8px", fontSize: "14px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6b7280" }}>
                      Largest markets
                    </p>
                    <nav aria-label="Largest counties" style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "20px" }}>
                      {largest.map((c) => (
                        <Pill key={c.slug} c={c} />
                      ))}
                    </nav>
                    <p style={{ margin: "0 0 8px", fontSize: "14px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6b7280" }}>
                      All counties, A to Z
                    </p>
                    <nav aria-label="All counties" style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                      {alpha.map((c) => (
                        <Pill key={c.slug} c={c} />
                      ))}
                    </nav>
                  </>
                );
              })()}
            </div>
          </div>
        </section>

        <section className="py-10 md:py-14 bg-background">
          <div className="container px-5 md:px-8">
            <div className="max-w-3xl mx-auto">
              {countyGroups.map((group) => (
                <div key={group.county} style={{ marginBottom: "40px" }}>
                  {/* County headings only appear once more than one county is in
                      the data — with a single county they would be noise. */}
                  {countyGroups.length > 1 && (
                    <h2
                      style={{
                        fontFamily: "'DM Sans', system-ui, sans-serif",
                        fontSize: "36px",
                        fontWeight: 800,
                        color: GREEN,
                        margin: "48px 0 6px",
                        paddingTop: "18px",
                        borderTop: `4px solid ${GREEN}`,
                        // No letterSpacing here: index.css treats any inline
                        // letter-spacing as eyebrow text and forces it to 14px.
                      }}
                    >
                      {group.county} County
                    </h2>
                  )}
                  {countyGroups.length > 1 && (
                    <p style={{ margin: "0 0 14px", fontSize: "18px", fontWeight: 600, color: "#374151" }}>
                      {group.facilityCount.toLocaleString()} homes · {group.totalBeds.toLocaleString()} beds ·{" "}
                      {group.cityCount} cities ·{" "}
                      <Link
                        to={`/afh-club/homes/county/${group.county.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                        className="text-accent underline underline-offset-4"
                      >
                        County page →
                      </Link>
                    </p>
                  )}
                  <ul
                    style={{
                      listStyle: "none",
                      margin: 0,
                      padding: 0,
                      borderBottom: `1px solid ${BORDER}`,
                    }}
                  >
                    {group.cities.map((c) => (
                      <li key={c.citySlug} style={{ borderTop: `1px solid ${BORDER}`, padding: "18px 0" }}>
                        <div
                          style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "6px 16px",
                            alignItems: "baseline",
                          }}
                        >
                          <h3
                            style={{
                              margin: 0,
                              flex: "1 1 200px",
                              fontFamily: "'DM Sans', system-ui, sans-serif",
                              fontSize: "21px",
                              fontWeight: 600,
                              color: "#111827",
                            }}
                          >
                            <Link
                              to={`/afh-club/homes/${c.citySlug}`}
                              className="rpp-heading-link rpp-city-link underline underline-offset-4"
                              style={{ color: "#111827" }}
                            >
                              {c.city}
                            </Link>
                          </h3>
                          <p
                            style={{
                              margin: 0,
                              fontSize: "17px",
                              color: "#374151",
                              whiteSpace: "nowrap",
                            }}
                          >
                            {c.facilityCount} {c.facilityCount === 1 ? "home" : "homes"} · {c.totalBeds} beds
                          </p>
                        </div>
                        <p style={{ margin: "4px 0 0", fontSize: "16px", color: "#6b7280" }}>
                          {c.developmentalDisabilities} serving developmental disabilities · {c.behaviorSupport} with
                          behavior support · {c.privatePay} private pay
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10 bg-cream">
          <div className="container px-5 md:px-8">
            <div className="max-w-3xl mx-auto text-[15px] text-muted-foreground leading-relaxed">
              <p>
                Licensing information is sourced from Washington State DSHS public records. Specialty designations
                reflect provider training required by the state; they are not quality ratings and are not endorsements.
                Verify current licensing status directly with DSHS before relying on this information.
              </p>
              <p className="mt-3">
                Real Property Planning is an independent educational resource and does not operate, own, or manage any
                adult family home.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CountyDirectory;
