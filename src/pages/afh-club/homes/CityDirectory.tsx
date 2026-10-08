import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
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
  peekCity,
} from "@/data/afh/directory";

const GREEN = "#0a5648";

/* Short chip labels; the full filter labels still title the filter pages. */
const CHIP_LABELS: Record<string, string> = {
  "private-pay": "Private pay only",
  "more-than-six-beds": "More than six residents",
  "specialized-behavior-support": "Specialized Behavior Support",
  "developmental-disabilities": "Developmental disabilities",
  "expanded-community-services": "Expanded Community Services",
};

/* Page-scoped: index.css forces margins on every p and h2 with !important
   (src/AGENTS.md section 4), so spacing here is set with doubled classes. Class
   names avoid card / tile / btn / cta. */
const PAGE_CSS = `
section.acd-sec.acd-sec { padding-top: 0 !important; padding-bottom: 0 !important; }
section.acd-sec.acd-listsec { padding-bottom: 48px !important; }
.acd-top.acd-top { padding: 16px 0 14px; }
.acd-top p.acd-figures.acd-figures { font-size: 19px !important; line-height: 1.45 !important; color: #1c1917 !important; margin: 0 !important; }
.acd-top p.acd-figures strong { font-size: 19px !important; color: ${GREEN} !important; }
.acd-top p.acd-asof.acd-asof { font-size: 15px !important; color: #3f3a35 !important; margin: 4px 0 0 !important; }
.acd-top p.acd-explain.acd-explain { font-size: 17px !important; line-height: 1.55 !important; color: #1c1917 !important; margin: 10px 0 0 !important; }
.acd-filters.acd-filters { display: block !important; padding: 14px 0 12px; }
.acd-filters select.acd-pick { display: none; width: 100%; min-height: 50px; padding: 10px 14px; border: 2px solid ${GREEN}; border-radius: 10px; background: #fff; color: #1c1917; font-family: inherit; font-size: 18px !important; font-weight: 600; }
.acd-filters p.acd-filterhead.acd-filterhead { font-size: 13px !important; font-weight: 700; letter-spacing: .14em; text-transform: uppercase; color: #6b5310 !important; margin: 0 0 8px !important; }
.acd-filters ul.acd-chips { display: flex; flex-wrap: wrap; gap: 8px; list-style: none; padding: 0; margin: 0; }
.acd-filters a.acd-chip.acd-chip { display: inline-flex; align-items: center; gap: 6px; min-height: 44px; padding: 8px 14px; border: 2px solid #c9d2cf; border-radius: 999px; background: #fff; color: #1c1917 !important; font-size: 16px !important; font-weight: 600; text-decoration: none !important; line-height: 1.2; }
@media (hover: hover) { .acd-filters a.acd-chip.acd-chip:hover { border-color: ${GREEN}; } }
.acd-filters a.acd-chip.acd-chip.is-on { background: ${GREEN}; border-color: ${GREEN}; color: #fff !important; }
.acd-filters a.acd-chip span.acd-count { font-weight: 400; color: #3f3a35 !important; font-size: 15px !important; }
.acd-filters a.acd-chip.is-on span.acd-count { color: #fff !important; }
h2.acd-abouthead.acd-abouthead { font-size: 22px !important; line-height: 1.3 !important; margin: 0 0 10px !important; color: #1c1917 !important; }
@media (max-width: 640px) {
  .acd-top p.acd-figures.acd-figures, .acd-top p.acd-figures strong { font-size: 18px !important; }
  .acd-filters select.acd-pick { display: block; }
  .acd-filters ul.acd-chips { display: none; }
}
`;

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
  const navigate = useNavigate();

  /* Starts with the list when it is already loaded (the build and main.tsx load
     it first; see peekCity), so the first render is the whole page and nothing
     jumps when the page becomes interactive. */
  const [facilities, setFacilities] = useState<AFHFacility[] | null>(() => peekCity(citySlug));

  useEffect(() => {
    let active = true;
    const ready = peekCity(citySlug);
    setFacilities(ready);
    if (ready) return;
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
    ? `${shown?.length ?? cityEntry.facilityCount} adult family homes in ${city} ${filter.label}`
    : `${cityEntry.facilityCount} licensed adult family homes in ${city}, Washington`;
  const seoTitle = filter
    ? `${shown?.length ?? cityEntry.facilityCount} Adult Family Homes in ${city}, WA ${filter.label} | AFH Club`
    : `${cityEntry.facilityCount} Adult Family Homes in ${city}, WA (${cityEntry.totalBeds.toLocaleString()} beds) — Licensed Directory | AFH Club`;

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={seoTitle}
        description={
          filter
            ? `${shown?.length ?? ""} adult family homes in ${city}, WA ${filter.label}, from DSHS licensing records — capacity, specialty designations, Medicaid status, and inspection history.`
            : `${cityEntry.facilityCount} licensed adult family homes in ${city}, WA with ${cityEntry.totalBeds.toLocaleString()} beds — every DSHS record, with capacity, Medicaid, dementia and mental-health specialties, expanded capacity, and inspection history.`
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
      <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />
      <Header />
      <main id="main-content">
        <div style={{ background: GREEN, padding: "6px 24px 4px" }} />
        <HeroBandTitle as="h1">{heading}</HeroBandTitle>

        {/* Phone first screen (Oct 7, 2026, from the first-screen audit): the
            headline figures, the filters and the first homes, in that order.
            The full sentence of figures moved to "About these homes" below the
            list; the page text is the same, only the order changed. */}
        <section className="bg-cream acd-sec">
          <div className="container px-5 md:px-8">
            <div className="max-w-3xl mx-auto acd-top">
              <p className="acd-figures">
                <strong>{cityEntry.facilityCount}</strong> {cityEntry.facilityCount === 1 ? "home" : "homes"}
                <span aria-hidden="true"> · </span>
                <strong>{cityEntry.totalBeds.toLocaleString("en-US")}</strong> licensed beds
                <span aria-hidden="true"> · </span>
                <strong>{medicaidCount}</strong> {medicaidCount === 1 ? "accepts" : "accept"} Medicaid
              </p>
              {retrievedLabel && <p className="acd-asof">DSHS licensing records as of {retrievedLabel}.</p>}
              {filter && <p className="acd-explain">{filter.explanation}</p>}
            </div>
          </div>
        </section>

        {/* Filters. Rendered as links, not a control, so each is a real page a
            search engine can index and a reader can bookmark. */}
        <section className="bg-background acd-sec">
          <div className="container px-5 md:px-8">
            {/* A div with role="navigation", not <nav>: index.css turns every nav
                into a centred flex row and strips padding from its links. */}
            <div role="navigation" aria-label="Narrow these homes" className="max-w-3xl mx-auto acd-filters">
              <p className="acd-filterhead">Narrow these homes</p>
              {/* Phones: one familiar drop-down instead of five rows of buttons,
                  so the first homes are on the first screen. The buttons below
                  stay in the page (hidden on phones) as real links. */}
              <select
                className="acd-pick"
                aria-label="Narrow these homes"
                value={filter?.slug ?? ""}
                onChange={(e) => navigate(e.target.value ? `/afh-club/homes/${citySlug}/${e.target.value}` : `/afh-club/homes/${citySlug}`)}
              >
                <option value="">All {cityEntry.facilityCount} homes</option>
                {AFH_FILTERS.map((f) => {
                  const count = facilities ? facilities.filter(f.matches).length : null;
                  // No empty filters: a "(0)" page is never prerendered (Oct 8, 2026 audit).
                  if (count === 0 && filter?.slug !== f.slug) return null;
                  return (
                    <option key={f.slug} value={f.slug}>
                      {CHIP_LABELS[f.slug] ?? f.label}
                      {count !== null ? ` (${count})` : ""}
                    </option>
                  );
                })}
              </select>
              <ul className="acd-chips">
                <li>
                  <Link
                    to={`/afh-club/homes/${citySlug}`}
                    aria-current={!filter ? "page" : undefined}
                    className={`acd-chip${!filter ? " is-on" : ""}`}
                  >
                    All {cityEntry.facilityCount}
                  </Link>
                </li>
                {AFH_FILTERS.map((f) => {
                  const active = filter?.slug === f.slug;
                  const count = facilities ? facilities.filter(f.matches).length : null;
                  if (count === 0 && !active) return null;
                  return (
                    <li key={f.slug}>
                      <Link
                        to={`/afh-club/homes/${citySlug}/${f.slug}`}
                        aria-current={active ? "page" : undefined}
                        className={`acd-chip${active ? " is-on" : ""}`}
                      >
                        {CHIP_LABELS[f.slug] ?? f.label.replace(/^(with|serving|that are|licensed for) /, "")}
                        {count !== null && <span className="acd-count">{count}</span>}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>

        <section className="pb-16 bg-background acd-sec acd-listsec">
          <div className="container px-5 md:px-8">
            <div className="max-w-3xl mx-auto">
              {shown === null ? (
                <p className="text-[18px] text-foreground" role="status">
                  Loading {city} homes…
                </p>
              ) : (
                <>
                  <p className="text-[17px] text-foreground mb-2">
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
            <div className="max-w-3xl mx-auto">
              <h2 className="acd-abouthead">About these homes</h2>
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
              <div className="text-[15px] text-muted-foreground leading-relaxed mt-4">
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
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CityDirectory;
