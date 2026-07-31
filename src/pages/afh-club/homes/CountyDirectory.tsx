import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import HeroBandTitle from "@/components/HeroBandTitle";
import { countyIndex } from "@/data/afh/directory";

const GREEN = "#0a5648";
const BORDER = "#d9dede";

/**
 * Entry point for the adult family home directory: every city we hold licensing
 * data for, largest first.
 *
 * Ordered by home count rather than alphabetically because the count is the
 * useful information — someone looking for placement wants to know where the
 * options actually are, and Kent having 285 homes against Duvall's 2 is the
 * single most decision-relevant fact on this page.
 */
const CountyDirectory = () => {
  const totalHomes = countyIndex.reduce((s, c) => s + c.facilityCount, 0);
  const totalBeds = countyIndex.reduce((s, c) => s + c.totalBeds, 0);
  const counties = [...new Set(countyIndex.map((c) => c.county))];

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
                Washington State licenses adult family homes to care for up to six
                residents — sometimes eight — in an ordinary house in an ordinary
                neighborhood. There are far more of them than most families realize,
                and no single place to compare them.
              </p>
              <p>
                This directory covers{" "}
                <strong>
                  {totalHomes.toLocaleString()} licensed homes and{" "}
                  {totalBeds.toLocaleString()} licensed beds
                </strong>{" "}
                across {countyIndex.length} cities in{" "}
                {counties.join(" and ")} County, assembled from Washington State
                DSHS public records. Choose a city to see every licensed home in it,
                with capacity, specialty designations, and Medicaid status.
              </p>
            </div>
          </div>
        </section>

        <section className="py-10 md:py-14 bg-background">
          <div className="container px-5 md:px-8">
            <div className="max-w-3xl mx-auto">
              <ul
                style={{
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                  borderBottom: `1px solid ${BORDER}`,
                }}
              >
                {countyIndex.map((c) => (
                  <li
                    key={c.citySlug}
                    style={{ borderTop: `1px solid ${BORDER}`, padding: "18px 0" }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "6px 16px",
                        alignItems: "baseline",
                      }}
                    >
                      <h2 style={{ margin: 0, flex: "1 1 200px" }}>
                        <Link
                          to={`/afh-club/homes/${c.citySlug}`}
                          className="underline underline-offset-4 hover:text-gold transition-colors"
                          style={{
                            fontFamily: "Georgia, serif",
                            fontSize: "21px",
                            fontWeight: 600,
                            color: "#111827",
                          }}
                        >
                          {c.city}
                        </Link>
                      </h2>
                      <p
                        style={{
                          margin: 0,
                          fontSize: "17px",
                          color: "#374151",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {c.facilityCount} {c.facilityCount === 1 ? "home" : "homes"} ·{" "}
                        {c.totalBeds} beds
                      </p>
                    </div>
                    <p style={{ margin: "4px 0 0", fontSize: "16px", color: "#6b7280" }}>
                      {c.developmentalDisabilities} serving developmental disabilities ·{" "}
                      {c.behaviorSupport} with behavior support ·{" "}
                      {c.privatePay} private pay
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="py-10 bg-cream">
          <div className="container px-5 md:px-8">
            <div className="max-w-3xl mx-auto text-[15px] text-muted-foreground leading-relaxed">
              <p>
                Licensing information is sourced from Washington State DSHS public
                records. Specialty designations reflect provider training required by
                the state; they are not quality ratings and are not endorsements.
                Verify current licensing status directly with DSHS before relying on
                this information.
              </p>
              <p className="mt-3">
                Real Property Planning is an independent educational resource and does
                not operate, own, or manage any adult family home.
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
