import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import HeroBandTitle from "@/components/HeroBandTitle";
import FacilityList from "@/components/afh/FacilityList";
import type { AFHFacility } from "@/data/afh/types";
import {
  AFH_FILTERS,
  getCityIndexEntry,
  getFilter,
  loadCity,
} from "@/data/afh/directory";

const GREEN = "#0a5648";

/**
 * Directory of licensed adult family homes in one city, optionally narrowed by
 * one filter. Serves both:
 *
 *   /afh-club/homes/:citySlug
 *   /afh-club/homes/:citySlug/:filterSlug
 *
 * Facility detail pages live at /afh-club/homes/:citySlug/:facilitySlug and are
 * routed separately — facility slugs end in the license number, filter slugs
 * never do, so the two can share a path position without ambiguity.
 */
const CityDirectory = () => {
  const { citySlug = "", segment: filterSlug } = useParams();
  const cityEntry = getCityIndexEntry(citySlug);
  const filter = getFilter(filterSlug);

  const [facilities, setFacilities] = useState<AFHFacility[] | null>(null);

  useEffect(() => {
    let active = true;
    setFacilities(null);
    loadCity(citySlug).then((list) => {
      if (active) setFacilities(list);
    });
    return () => {
      active = false;
    };
  }, [citySlug]);

  if (!cityEntry) {
    return (
      <div className="min-h-screen bg-background">
        <SEOHead
          title="City not found | Real Property Planning"
          description="This city directory does not exist."
          noIndex
        />
        <Header />
        <main id="main-content">
          <HeroBandTitle as="h1">City not found</HeroBandTitle>
          <section className="py-12 md:py-16 bg-cream">
            <div className="container px-5 md:px-8">
              <p className="max-w-3xl mx-auto text-[18px] text-foreground">
                We don't have a directory for that city yet.{" "}
                <Link to="/afh-club/homes" className="underline underline-offset-4 text-accent">
                  Browse all cities with licensed adult family homes
                </Link>
                .
              </p>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  const { city } = cityEntry;
  const shown = filter && facilities ? facilities.filter(filter.matches) : facilities;

  /* Counts spoken in the opening paragraph. Medicaid is derivable from the
     index before the city file loads; the rest wait for the facility list.
     The same sentence is prerendered at build time by src/data/afh/prerender.ts
     so crawlers and visitors read identical facts. */
  const medicaidCount = cityEntry.facilityCount - cityEntry.privatePay;
  const stats = facilities
    ? {
        dementia: facilities.filter((f) => f.specialties.includes("dementia")).length,
        mentalHealth: facilities.filter((f) => f.specialties.includes("mentalHealth")).length,
        over6: facilities.filter((f) => f.licensedBeds > 6).length,
        retrievedAt: facilities.reduce((m, f) => (f.retrievedAt > m ? f.retrievedAt : m), ""),
      }
    : null;
  const retrievedLabel = stats?.retrievedAt
    ? new Date(`${stats.retrievedAt}T00:00:00Z`).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC",
      })
    : null;

  const path = filter
    ? `/afh-club/homes/${citySlug}/${filter.slug}`
    : `/afh-club/homes/${citySlug}`;
  const heading = filter
    ? `Adult family homes in ${city} ${filter.label}`
    : `Licensed adult family homes in ${city}, Washington`;

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`${heading} | Real Property Planning`}
        description={
          filter
            ? `${city}, Washington adult family homes ${filter.label}, from Washington State DSHS licensing records. Capacity, specialty designations, and Medicaid status for each home.`
            : `All ${cityEntry.facilityCount} licensed adult family homes in ${city}, Washington, from DSHS records. Capacity, specialty designations, Medicaid status, and inspection history.`
        }
        canonical={`https://realpropertyplanning.com${path}`}
        schemaJson={
          shown
            ? {
                "@context": "https://schema.org",
                "@type": "ItemList",
                name: heading,
                numberOfItems: shown.length,
                itemListElement: shown.map((f, i) => ({
                  "@type": "ListItem",
                  position: i + 1,
                  item: {
                    "@type": "ResidentialCareFacility",
                    name: f.displayName,
                    identifier: f.licenseNumber,
                    url: `https://realpropertyplanning.com/afh-club/homes/${citySlug}/${f.slug}`,
                    ...(f.phone ? { telephone: f.phone } : {}),
                    address: {
                      "@type": "PostalAddress",
                      streetAddress: f.address.street,
                      addressLocality: f.address.city,
                      addressRegion: "WA",
                      postalCode: f.address.zip,
                      addressCountry: "US",
                    },
                  },
                })),
              }
            : undefined
        }
      />
      <BreadcrumbSchema
        items={[
          { name: "AFH Club", url: "/afh-club" },
          { name: "Adult Family Homes", url: "/afh-club/homes" },
          { name: city, url: `/afh-club/homes/${citySlug}` },
          ...(filter ? [{ name: filter.label, url: path }] : []),
        ]}
      />
      <Header />
      <main id="main-content">
        <div style={{ background: GREEN, padding: "6px 24px 4px" }} />
        <HeroBandTitle as="h1">{heading}</HeroBandTitle>

        <section className="py-10 md:py-14 bg-cream">
          <div className="container px-5 md:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-foreground text-[17px] md:text-[18px] leading-relaxed">
                {city} has{" "}
                <strong>
                  {cityEntry.facilityCount} licensed adult family homes
                </strong>{" "}
                with {cityEntry.totalBeds} licensed beds, according to Washington State
                DSHS records. {medicaidCount} {medicaidCount === 1 ? "accepts" : "accept"}{" "}
                Medicaid
                {stats && (
                  <>
                    , {stats.dementia} {stats.dementia === 1 ? "carries" : "carry"} the dementia
                    specialty designation, {stats.mentalHealth}{" "}
                    {stats.mentalHealth === 1 ? "carries" : "carry"} the mental health
                    designation, and {cityEntry.developmentalDisabilities}{" "}
                    {cityEntry.developmentalDisabilities === 1 ? "serves" : "serve"} developmental
                    disabilities. {stats.over6} {stats.over6 === 1 ? "is" : "are"} licensed for
                    more than six residents
                  </>
                )}
                . Capacity, specialty designations, and Medicaid status come directly
                from those records.
              </p>
              {retrievedLabel && (
                <p className="text-muted-foreground text-[15px] mt-3">
                  Records current as of {retrievedLabel}.
                </p>
              )}
              {filter && (
                <p className="text-foreground text-[17px] md:text-[18px] leading-relaxed mt-4">
                  {filter.explanation}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Filters. Rendered as links, not a control, so each is a real page a
            search engine can index and a reader can bookmark. */}
        <section className="py-8 bg-background">
          <div className="container px-5 md:px-8">
            <nav aria-label="Narrow these homes" className="max-w-3xl mx-auto">
              <p className="text-gold font-bold tracking-[0.2em] uppercase text-sm mb-4">
                Narrow these homes
              </p>
              <ul className="flex flex-wrap gap-3 list-none p-0 m-0">
                <li>
                  <Link
                    to={`/afh-club/homes/${citySlug}`}
                    aria-current={!filter ? "page" : undefined}
                    className="inline-block px-4 py-2 text-[16px] underline underline-offset-4 hover:text-gold transition-colors"
                    style={{
                      border: `2px solid ${!filter ? GREEN : "#d9dede"}`,
                      borderRadius: "4px",
                      fontWeight: !filter ? 700 : 400,
                    }}
                  >
                    All {cityEntry.facilityCount}
                  </Link>
                </li>
                {AFH_FILTERS.map((f) => {
                  const active = filter?.slug === f.slug;
                  return (
                    <li key={f.slug}>
                      <Link
                        to={`/afh-club/homes/${citySlug}/${f.slug}`}
                        aria-current={active ? "page" : undefined}
                        className="inline-block px-4 py-2 text-[16px] underline underline-offset-4 hover:text-gold transition-colors"
                        style={{
                          border: `2px solid ${active ? GREEN : "#d9dede"}`,
                          borderRadius: "4px",
                          fontWeight: active ? 700 : 400,
                        }}
                      >
                        {f.label.replace(/^(with|serving|that are|licensed for) /, "")}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </section>

        <section className="pb-16 bg-background">
          <div className="container px-5 md:px-8">
            <div className="max-w-3xl mx-auto">
              {shown === null ? (
                <p className="text-[18px] text-foreground" role="status">
                  Loading {city} homes…
                </p>
              ) : (
                <>
                  <p className="text-[17px] text-foreground mb-6">
                    Showing {shown.length}{" "}
                    {shown.length === 1 ? "home" : "homes"}
                    {filter ? ` of ${cityEntry.facilityCount}` : ""}.
                  </p>
                  <FacilityList
                    facilities={shown}
                    emptyMessage={`No ${city} homes currently match this. Try another filter, or view all ${cityEntry.facilityCount} homes in ${city}.`}
                  />
                </>
              )}
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

export default CityDirectory;
