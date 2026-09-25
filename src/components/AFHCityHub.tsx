import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import HeroBandTitle from "@/components/HeroBandTitle";
import PageFAQ from "@/components/PageFAQ";
import DisclaimerSection from "@/components/DisclaimerSection";
import { liveListings, soldListings, formatVerifiedDate, latestVerified, afhClassification, listingSlug } from "@/data/afhListings";
import { soldStats } from "@/data/afhInventoryPrerender";
import { AFHListingCard, AFHListingsDisclaimer } from "@/components/AFHListingCard";
import { Link } from "react-router-dom";
import { cityExists, getCityIndexEntry } from "@/data/afh/directory";
import NewsletterSignup from "@/components/NewsletterSignup";
import AFHRunTheNumbers from "@/components/AFHRunTheNumbers";
import AFHBuyerGuides from "@/components/AFHBuyerGuides";
import { AFH_CITY_PAGES, cityPageBySlug } from "@/data/afhCityPages";
import { liveListings as allLive, soldListings as allSold } from "@/data/afhListings";
import { FEATURED_BROKER } from "@/data/featuredProfessionals";

const GREEN = "#0a5648";

interface AFHCityHubProps {
  city: string;
  county: string;
  slug: string;
  metaDescription: string;
  intro: ReactNode;
  faqs: { question: string; answer: string }[];
}

const AFHCityHub = ({ city, county, slug, metaDescription, intro, faqs }: AFHCityHubProps) => {
  const cityListings = liveListings().filter((l) => l.city.toLowerCase() === city.toLowerCase());
  const activeListings = cityListings.filter((l) => l.marketStatus === "active");
  const pendingListings = cityListings.filter((l) => l.marketStatus === "pending");
  const soldHere = soldListings().filter((l) => l.city.toLowerCase() === city.toLowerCase());
  const soldHereStats = soldStats(soldHere);
  const verified = latestVerified([...cityListings, ...soldHere]);
  const countyName = cityPageBySlug(slug)?.county ?? "";
  const countySiblings = AFH_CITY_PAGES.filter((c) => c.county === countyName && c.slug !== slug);
  const nearby = (cityPageBySlug(slug)?.nearby ?? [])
    .map((s) => AFH_CITY_PAGES.find((c) => c.slug === s))
    .filter((c): c is NonNullable<typeof c> => !!c)
    .map((c) => ({
      ...c,
      live: allLive().filter((l) => l.city.toLowerCase() === c.city.toLowerCase()).length,
      sold: allSold().filter((l) => l.city.toLowerCase() === c.city.toLowerCase()).length,
    }));
  const money = (n: number) => "$" + Math.round(n).toLocaleString("en-US");
  const num = (s: string) => Number(s.replace(/[^0-9.]/g, "")) || 0;

  // Cities outside the counties we hold DSHS data for have no directory page yet,
  // so the cross-link only renders where it actually resolves.
  const directorySlug = city
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  const directoryEntry = cityExists(directorySlug) ? getCityIndexEntry(directorySlug) : null;

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`Adult Family Homes For Sale in ${city}, WA | Real Property Planning`}
        description={metaDescription}
        canonical={`https://realpropertyplanning.com/afh-club/for-sale/${slug}`}
      />
      <BreadcrumbSchema
        items={[
          { name: "AFH Club", url: "/afh-club" },
          { name: `For Sale in ${city}, WA`, url: `/afh-club/for-sale/${slug}` },
        ]}
      />
      <Header />
      <main id="main-content">
        <div style={{ background: GREEN, padding: "6px 24px 4px" }} />
        <HeroBandTitle as="h1">{`Adult Family Homes For Sale in ${city}, WA`}</HeroBandTitle>

        <section className="py-12 md:py-16 bg-cream">
          <div className="container px-5 md:px-8">
            <div className="max-w-3xl mx-auto text-foreground text-[17px] md:text-[18px] leading-relaxed space-y-4">
              {intro}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-background">
          <div className="container px-5 md:px-8">
            <div className="max-w-3xl mx-auto mb-10 text-center">
              <p className="text-gold font-bold tracking-[0.2em] uppercase text-sm mb-3">Currently Available</p>
              <h2 className="font-serif text-[26px] md:text-[34px] font-semibold text-navy leading-tight">
                {cityListings.length > 0
                  ? `Adult Family Homes for sale in ${city} right now`
                  : `No active ${city} listings at this exact moment`}
              </h2>
              {verified && (
                <p className="text-foreground/70 text-[16px] mt-3">
                  {activeListings.length} active · {pendingListings.length} pending · {soldHere.length} recently sold ·
                  last verified {formatVerifiedDate(verified)}
                </p>
              )}
              <nav aria-label="Jump to" className="mt-4 text-[17px] flex flex-wrap gap-x-5 gap-y-2 justify-center">
                <a href="#active" className="text-accent underline underline-offset-4">Active ({activeListings.length})</a>
                <a href="#pending" className="text-accent underline underline-offset-4">Pending ({pendingListings.length})</a>
                <a href="#recently-sold" className="text-accent underline underline-offset-4">Recently sold ({soldHere.length})</a>
              </nav>
            </div>

            {cityListings.length > 0 ? (
              <div className="max-w-[1000px] mx-auto flex flex-col gap-4">
                <h3 id="active" className="font-serif text-[22px] md:text-[26px] font-semibold text-navy scroll-mt-32">
                  Active — {activeListings.length} {activeListings.length === 1 ? "listing" : "listings"}
                </h3>
                {activeListings.length === 0 && (
                  <p className="text-foreground/80 text-[17px]">No active listings at the moment.</p>
                )}
                {activeListings.map((listing, index) => (
                  <AFHListingCard key={listing.id} listing={listing} index={index} total={activeListings.length} />
                ))}
                <h3 id="pending" className="font-serif text-[22px] md:text-[26px] font-semibold text-navy mt-6 scroll-mt-32">
                  Pending — {pendingListings.length} under contract
                </h3>
                {pendingListings.length === 0 ? (
                  <p className="text-foreground/80 text-[17px]">Nothing pending.</p>
                ) : (
                  <p className="text-foreground/80 text-[17px]">
                    Under contract but not closed. Pending sales can fall through, so these may return to the market.
                  </p>
                )}
                {pendingListings.map((listing, index) => (
                  <AFHListingCard key={listing.id} listing={listing} index={index} total={pendingListings.length} />
                ))}
                <AFHListingsDisclaimer />
              </div>
            ) : (
              <div className="max-w-2xl mx-auto text-center text-foreground/80 text-[17px] leading-relaxed">
                <p className="mb-4">
                  Nothing in {city} is on the market right now. Adult family homes here list infrequently and sell
                  quickly.{" "}
                  {soldHere.length > 0
                    ? `The ${soldHere.length} recent ${soldHere.length === 1 ? "sale" : "sales"} below show what the market has been doing, and `
                    : "The "}
                  {nearby.length > 0 ? "nearby cities below have current inventory." : "statewide directory has current inventory."}
                  {directoryEntry
                    ? ` ${city} has ${directoryEntry.facilityCount} licensed adult family homes today, so ownership changes do come up.`
                    : ""}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/afh-club/listings"
                    className="inline-flex items-center justify-center gap-2 bg-[#0a5648] text-white font-bold px-6 py-3 rounded-lg no-underline"
                  >
                    All adult family homes for sale in Washington
                  </Link>
                  <a
                    href="#city-alert"
                    className="inline-flex items-center justify-center gap-2 border-2 border-[#0a5648] text-[#0a5648] font-bold px-6 py-3 rounded-lg no-underline"
                  >
                    Get notified when {city} lists
                  </a>
                </div>
              </div>
            )}
          </div>
        </section>

        <section id="recently-sold" className="py-12 md:py-16 bg-cream scroll-mt-32">
          <div className="container px-5 md:px-8">
            <div className="max-w-3xl mx-auto mb-8 text-center">
              <p className="text-gold font-bold tracking-[0.2em] uppercase text-sm mb-3">Recently sold</p>
              <h2 className="font-serif text-[26px] md:text-[34px] font-semibold text-navy leading-tight">
                {soldHere.length > 0
                  ? `${soldHere.length} adult family home ${soldHere.length === 1 ? "sale" : "sales"} in ${city}`
                  : `No closed ${city} sales recorded yet`}
              </h2>
              {soldHere.length >= 3 && soldHereStats.medianSold !== null && soldHereStats.medianPerBed !== null && (
                <p className="text-foreground/70 text-[16px] mt-3">
                  Median sold price {money(soldHereStats.medianSold)} · {money(soldHereStats.medianPerBed)} per bedroom
                </p>
              )}
            </div>
            {soldHere.length > 0 && (
              <div className="max-w-[1000px] mx-auto overflow-x-auto mb-6">
                <table className="w-full text-[16px]">
                  <thead>
                    <tr className="text-left border-b-2 border-border">
                      <th className="py-2 pr-3">Closed</th>
                      <th className="py-2 pr-3">Address</th>
                      <th className="py-2 pr-3">Sold</th>
                      <th className="py-2 pr-3">Last list</th>
                      <th className="py-2 pr-3">Beds</th>
                      <th className="py-2 pr-3">$/bed</th>
                      <th className="py-2 pr-3">Classification</th>
                    </tr>
                  </thead>
                  <tbody>
                    {soldHere.map((l) => {
                      const sp = l.soldPrice ? num(l.soldPrice) : 0;
                      return (
                        <tr key={l.id} className="border-b border-border">
                          <td className="py-2 pr-3 whitespace-nowrap">{l.soldDate ? formatVerifiedDate(l.soldDate) : ""}</td>
                          <td className="py-2 pr-3">
                            <Link to={`/afh-club/listings/${listingSlug(l)}`} className="text-accent underline underline-offset-4">
                              {/upon request|undisclosed/i.test(l.address) ? "Undisclosed" : l.address}
                            </Link>
                          </td>
                          <td className="py-2 pr-3 whitespace-nowrap font-semibold">{l.soldPrice}</td>
                          <td className="py-2 pr-3 whitespace-nowrap">{l.price}</td>
                          <td className="py-2 pr-3">{l.beds}</td>
                          <td className="py-2 pr-3 whitespace-nowrap">{sp && l.beds ? money(sp / l.beds) : ""}</td>
                          <td className="py-2 pr-3">{afhClassification(l)}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
            <p className="text-center text-[18px]">
              <Link to="/afh-club/sold" className="text-accent underline underline-offset-4 font-semibold">
                All adult family home sales in Washington →
              </Link>
            </p>
          </div>
        </section>

        <section className="py-8 md:py-10 bg-background">
          <div className="container px-5 md:px-8">
            <div className="max-w-3xl mx-auto">
              <AFHRunTheNumbers city={city} county={county} />
            </div>
          </div>
        </section>

        <section className="py-8 md:py-10 bg-background">
          <div className="container px-5 md:px-8">
            <div className="max-w-3xl mx-auto">
              <AFHBuyerGuides />
            </div>
          </div>
        </section>

        {nearby.length > 0 && (
          <section className="py-8 md:py-10 bg-background">
            <div className="container px-5 md:px-8">
              <div className="max-w-3xl mx-auto">
                <p className="text-gold font-bold tracking-[0.2em] uppercase text-sm mb-3">Nearby markets</p>
                <h2 className="font-serif text-[24px] md:text-[28px] font-semibold text-navy leading-tight mb-4">
                  Adult family homes for sale near {city}
                </h2>
                <ul className="flex flex-wrap gap-x-6 gap-y-3 text-[17px] md:text-[18px] list-none p-0 m-0">
                  {nearby.map((c) => (
                    <li key={c.slug}>
                      <Link to={`/afh-club/for-sale/${c.slug}`} className="text-accent underline underline-offset-4 font-semibold">
                        {c.city}
                      </Link>{" "}
                      <span className="text-foreground/70">
                        ({c.live} on market, {c.sold} sold)
                      </span>
                    </li>
                  ))}
                </ul>
                {/* County siblings and the state page: every city page links
                    up to /afh-club/listings and across to its county, so the
                    for-sale pages form one connected set (Sept 25, 2026). */}
                {countySiblings.length > 0 && (
                  <p className="mt-5 text-[16px] md:text-[17px]">
                    <span className="text-foreground/70">Elsewhere in {countyName} County: </span>
                    {countySiblings.map((c, k) => (
                      <span key={c.slug}>
                        <Link to={`/afh-club/for-sale/${c.slug}`} className="text-accent underline underline-offset-4">
                          {c.city}
                        </Link>
                        {k < countySiblings.length - 1 ? ", " : ""}
                      </span>
                    ))}
                  </p>
                )}
                <p className="mt-3 text-[16px] md:text-[17px]">
                  <Link to="/afh-club/listings" className="text-accent underline underline-offset-4 font-semibold">
                    All adult family homes for sale in Washington →
                  </Link>
                </p>
              </div>
            </div>
          </section>
        )}

        <section id="city-alert" className="py-10 md:py-14 bg-cream scroll-mt-32">
          <div className="container px-5 md:px-8">
            <div className="max-w-3xl mx-auto">
              <NewsletterSignup
                source={`afh-alert:${slug}`}
                copy={{
                  heading: `Tell me when an adult family home lists in ${city}`,
                  body: `An email from ${FEATURED_BROKER.name} when a ${city} AFH property, business, or lease comes on the market or changes status. Nothing else.`,
                  cta: "Notify me",
                }}
              />
            </div>
          </div>
        </section>

        {directoryEntry && (
          <section className="py-10 md:py-14 bg-cream">
            <div className="container px-5 md:px-8">
              <div className="max-w-3xl mx-auto">
                <p className="text-gold font-bold tracking-[0.2em] uppercase text-sm mb-3">
                  Every licensed home in {city}
                </p>
                <h2 className="font-serif text-[24px] md:text-[30px] font-semibold text-navy leading-tight mb-4">
                  Not every {city} adult family home is for sale
                </h2>
                <p className="text-foreground text-[17px] md:text-[18px] leading-relaxed mb-4">
                  {city} has {directoryEntry.facilityCount} licensed adult family homes with {directoryEntry.totalBeds}{" "}
                  licensed beds. Whether you are looking for placement for a family member or researching the market
                  before buying, the full DSHS licensing record for every one of them — capacity, specialty
                  designations, and Medicaid status — is available.
                </p>
                <p className="text-[18px]">
                  <Link
                    to={`/afh-club/homes/${directorySlug}`}
                    className="text-accent underline underline-offset-4 hover:text-gold transition-colors font-semibold"
                  >
                    All {directoryEntry.facilityCount} licensed adult family homes in {city} →
                  </Link>
                </p>
              </div>
            </div>
          </section>
        )}

        <PageFAQ
          faqs={faqs}
          heading={`Adult Family Homes in ${city}, WA: Common Questions`}
          eyebrow="Frequently Asked Questions"
          id={`afh-${slug}`}
        />
      </main>
      <DisclaimerSection />
      <Footer />
    </div>
  );
};

export default AFHCityHub;
