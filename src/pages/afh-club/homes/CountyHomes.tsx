import { Link, useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import HeroBandTitle from "@/components/HeroBandTitle";
import NotFound from "@/pages/NotFound";
import { getCountyChecked, getCountySummary, countiesChecked } from "@/data/afh/directory";
import { afhListings, isLive, listingSlug, formatVerifiedDate, afhClassification } from "@/data/afhListings";
import { cityPageByCity } from "@/data/afhCityPages";

const GREEN = "#0a5648";
const BORDER = "#d9dede";

/** Counties that also have a probate / real-estate services page on the main site. */
const REAL_ESTATE_COUNTY_PAGES: Record<string, string> = {
  king: "/counties/king",
  pierce: "/counties/pierce",
  snohomish: "/counties/snohomish",
  kitsap: "/counties/kitsap",
};

const CountyHomes = () => {
  const { countySlug: slug = "" } = useParams<{ countySlug: string }>();
  const checked = getCountyChecked(slug);
  if (!checked) return <NotFound />;
  const summary = getCountySummary(checked.county);
  const cities = summary?.cities ?? [];
  const cityNames = new Set(cities.map((c) => c.city.toLowerCase()));
  const sales = afhListings.filter((l) => cityNames.has(l.city.toLowerCase()));
  const live = sales.filter(isLive);
  const sold = sales.filter((l) => l.marketStatus === "sold");
  const canonical = `https://realpropertyplanning.com/afh-club/homes/county/${slug}`;
  const title = `Licensed Adult Family Homes in ${checked.county} County, WA | Real Property Planning`;
  const description =
    checked.facilityCount > 0
      ? `${checked.facilityCount.toLocaleString()} licensed adult family homes with ${checked.totalBeds.toLocaleString()} beds across ${cities.length} ${cities.length === 1 ? "city" : "cities"} in ${checked.county} County, Washington, from DSHS licensing records. Capacity, specialty designations, Medicaid status, and inspection history for each home.`
      : `DSHS licensing records show no licensed adult family homes in ${checked.county} County, Washington, as of ${formatVerifiedDate(checked.retrievedAt)}. Nearby counties and statewide options.`;
  const realEstatePage = REAL_ESTATE_COUNTY_PAGES[slug];
  const others = countiesChecked.filter((c) => c.slug !== slug && c.facilityCount > 0).sort((a, b) => b.facilityCount - a.facilityCount);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead title={title} description={description} canonical={canonical} />
      <BreadcrumbSchema
        items={[
          { name: "AFH Club", url: "/afh-club" },
          { name: "Adult Family Homes", url: "/afh-club/homes" },
          { name: `${checked.county} County`, url: `/afh-club/homes/county/${slug}` },
        ]}
      />
      <Header />
      <main id="main-content">
        <div style={{ background: GREEN, padding: "6px 24px 4px" }} />
        <HeroBandTitle as="h1">Licensed adult family homes in {checked.county} County</HeroBandTitle>

        <section className="py-10 md:py-14 bg-cream">
          <div className="container px-5 md:px-8">
            <div className="max-w-3xl mx-auto text-foreground text-[17px] md:text-[18px] leading-relaxed space-y-4">
              {checked.facilityCount > 0 ? (
                <>
                  <p>
                    {checked.county} County has{" "}
                    <strong>
                      {checked.facilityCount.toLocaleString()} licensed adult family homes with{" "}
                      {checked.totalBeds.toLocaleString()} licensed beds
                    </strong>{" "}
                    across {cities.length} {cities.length === 1 ? "city" : "cities"}, according to Washington State
                    DSHS licensing records current as of {formatVerifiedDate(checked.retrievedAt)}.
                    {summary && (
                      <>
                        {" "}
                        {summary.developmentalDisabilities.toLocaleString()} carry a developmental-disabilities
                        designation, {summary.behaviorSupport.toLocaleString()} hold a specialized behavior support
                        contract, and {summary.privatePay.toLocaleString()} are private-pay only.
                      </>
                    )}
                  </p>
                  <p>Choose a city to see every licensed home in it, with capacity, specialty designations, Medicaid status, and a link to its DSHS inspection record.</p>
                </>
              ) : (
                <>
                  <p>
                    DSHS licensing records show <strong>no licensed adult family homes in {checked.county} County</strong>{" "}
                    as of {formatVerifiedDate(checked.retrievedAt)}. This county was checked, not skipped; the result was
                    empty.
                  </p>
                  <p>
                    Families placing a relative here usually look to the nearest counties with licensed homes, listed
                    below, or to other licensed care settings. Operators considering opening a home in {checked.county}{" "}
                    County would be the first, which can mean both unmet demand and a longer road to a full census.
                  </p>
                </>
              )}
            </div>
          </div>
        </section>

        {cities.length > 0 && (
          <section className="py-10 md:py-14 bg-background">
            <div className="container px-5 md:px-8">
              <div className="max-w-3xl mx-auto">
                <h2 className="font-serif text-[24px] md:text-[28px] font-semibold text-navy leading-tight mb-4">
                  Cities in {checked.county} County
                </h2>
                <ul style={{ listStyle: "none", margin: 0, padding: 0, borderBottom: `1px solid ${BORDER}` }}>
                  {cities.map((c) => (
                    <li key={c.citySlug} style={{ borderTop: `1px solid ${BORDER}`, padding: "16px 0" }}>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 16px", alignItems: "baseline" }}>
                        <h3 style={{ margin: 0, flex: "1 1 200px", fontSize: "20px" }}>
                          <Link to={`/afh-club/homes/${c.citySlug}`} className="text-accent underline underline-offset-4 font-semibold">
                            {c.city}
                          </Link>
                          {(c.counties?.length ?? 1) > 1 && (
                            <span className="text-foreground/60 text-[15px] font-normal"> (spans {c.counties!.join(" and ")} counties)</span>
                          )}
                        </h3>
                        <span className="text-foreground/70 text-[16px]">
                          {c.facilityCount.toLocaleString()} {c.facilityCount === 1 ? "home" : "homes"} · {c.totalBeds.toLocaleString()} beds
                          {cityPageByCity(c.city) && (
                            <>
                              {" · "}
                              <Link to={`/afh-club/for-sale/${cityPageByCity(c.city)!.slug}`} className="text-accent underline underline-offset-4">
                                for sale
                              </Link>
                            </>
                          )}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}

        {(live.length > 0 || sold.length > 0) && (
          <section className="py-10 md:py-14 bg-cream">
            <div className="container px-5 md:px-8">
              <div className="max-w-3xl mx-auto">
                <h2 className="font-serif text-[24px] md:text-[28px] font-semibold text-navy leading-tight mb-4">
                  Adult family homes for sale and recently sold in {checked.county} County
                </h2>
                {live.length > 0 && (
                  <p className="text-[17px] md:text-[18px] leading-relaxed mb-3">
                    <strong>{live.length} on the market:</strong>{" "}
                    {live.map((l, i) => (
                      <span key={l.id}>
                        {i > 0 && " · "}
                        <Link to={`/afh-club/listings/${listingSlug(l)}`} className="text-accent underline underline-offset-4">
                          {l.city} {l.price}
                        </Link>{" "}
                        <span className="text-foreground/70">({afhClassification(l)})</span>
                      </span>
                    ))}
                  </p>
                )}
                {sold.length > 0 && (
                  <p className="text-[17px] md:text-[18px] leading-relaxed mb-3">
                    <strong>{sold.length} recently sold:</strong>{" "}
                    {sold.map((l, i) => (
                      <span key={l.id}>
                        {i > 0 && " · "}
                        <Link to={`/afh-club/listings/${listingSlug(l)}`} className="text-accent underline underline-offset-4">
                          {l.city} {l.soldPrice ?? l.price}
                        </Link>
                        {l.soldDate && <span className="text-foreground/70"> ({formatVerifiedDate(l.soldDate)})</span>}
                      </span>
                    ))}
                  </p>
                )}
                <p className="text-[17px]">
                  <Link to="/afh-club/listings" className="text-accent underline underline-offset-4">All listings statewide</Link>
                  {" · "}
                  <Link to="/afh-club/sold" className="text-accent underline underline-offset-4">All closed sales</Link>
                </p>
              </div>
            </div>
          </section>
        )}

        <section className="py-10 md:py-14 bg-background">
          <div className="container px-5 md:px-8">
            <div className="max-w-3xl mx-auto">
              {realEstatePage && (
                <p className="text-[17px] md:text-[18px] leading-relaxed mb-6">
                  Selling or buying a home in {checked.county} County outside the AFH market?{" "}
                  <Link to={realEstatePage} className="text-accent underline underline-offset-4">
                    Real estate, probate, and senior-transition help in {checked.county} County
                  </Link>
                  .
                </p>
              )}
              <h2 className="font-serif text-[24px] md:text-[28px] font-semibold text-navy leading-tight mb-4">Other counties</h2>
              <nav aria-label="Counties" style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {others.map((c) => (
                  <Link
                    key={c.slug}
                    to={`/afh-club/homes/county/${c.slug}`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      minHeight: "40px",
                      padding: "6px 14px",
                      borderRadius: "999px",
                      border: `1px solid ${BORDER}`,
                      background: "#fff",
                      fontSize: "15px",
                      textDecoration: "none",
                      color: "#111827",
                    }}
                  >
                    {c.county} <span className="text-foreground/60">{c.facilityCount}</span>
                  </Link>
                ))}
              </nav>
              <p className="text-[16px] mt-6">
                <Link to="/afh-club/homes" className="text-accent underline underline-offset-4">All licensed adult family homes in Washington by city →</Link>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CountyHomes;

