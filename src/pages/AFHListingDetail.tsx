import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import HeroBandTitle from "@/components/HeroBandTitle";
import DisclaimerSection from "@/components/DisclaimerSection";
import NotFound from "@/pages/NotFound";
import { AFHListingCard, AFHListingsDisclaimer } from "@/components/AFHListingCard";
import {
  findListingBySlug,
  afhClassification,
  formatVerifiedDate,
  AFH_MARKET_STATUS_LABELS,
  AFH_SOURCE_LABELS,
  AFH_TYPE_LABELS,
  type AFHListing,
} from "@/data/afhListings";
import { availabilityAnswer, whatIsBeingSold } from "@/data/afhInventoryPrerender";
import { cityPageByCity } from "@/data/afhCityPages";
import { cityExists, loadCity } from "@/data/afh/directory";
import type { AFHFacility } from "@/data/afh/types";
import { facilityForListing } from "@/data/afhAddressMatch";
import AFHRunTheNumbers from "@/components/AFHRunTheNumbers";

const GREEN = "#0a5648";


const STATUS_HEADLINE: Record<AFHListing["marketStatus"], string> = {
  active: "for sale",
  pending: "pending sale",
  sold: "sold",
  expired: "no longer listed",
  withdrawn: "no longer listed",
};

const statusColor = (s: AFHListing["marketStatus"]) => (s === "active" ? GREEN : s === "pending" ? "#a8892f" : "#8a2a2a");

const AFHListingDetail = () => {
  const { slug = "" } = useParams<{ slug: string }>();
  const listing = findListingBySlug(slug);
  const [facility, setFacility] = useState<AFHFacility | null>(null);
  useEffect(() => {
    if (!listing) return;
    const citySlug = listing.city.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
    if (!cityExists(citySlug)) return;
    let cancelled = false;
    loadCity(citySlug).then((fs) => {
      if (!cancelled) setFacility(facilityForListing(listing, fs) ?? null);
    });
    return () => {
      cancelled = true;
    };
  }, [listing]);
  if (!listing) return <NotFound />;

  const isUndisclosed = /upon request|undisclosed/i.test(listing.address);
  const heading = `${isUndisclosed ? "Undisclosed address" : listing.address}, ${listing.city}, ${listing.state}`;
  const typeNoun =
    listing.listingType === "business"
      ? "Adult family home business"
      : listing.listingType === "lease"
        ? "Adult family home for lease"
        : "Adult family home";
  const citySlug = cityPageByCity(listing.city)?.slug;
  const canonical = `https://realpropertyplanning.com/afh-club/listings/${slug}`;
  const title = `${typeNoun} ${STATUS_HEADLINE[listing.marketStatus]}: ${heading} | AFH Club`;
  const description = `${heading} — ${afhClassification(listing)}, ${listing.beds} bedrooms, ${listing.sqft} sq ft, ${
    listing.marketStatus === "sold" && listing.soldPrice ? `sold for ${listing.soldPrice}` : `listed at ${listing.price}`
  }. ${AFH_SOURCE_LABELS[listing.source]} #${listing.mlsNum}. Status ${AFH_MARKET_STATUS_LABELS[listing.marketStatus].toLowerCase()}, verified ${formatVerifiedDate(listing.lastVerified)}.`;

  const rows: Array<[string, string]> = [
    ["Status", AFH_MARKET_STATUS_LABELS[listing.marketStatus]],
    ...(listing.soldPrice ? ([["Sold price", listing.soldPrice]] as Array<[string, string]>) : []),
    [listing.marketStatus === "sold" ? "Last list price" : "List price", listing.price],
    ...(listing.listedDate ? ([["Date listed", formatVerifiedDate(listing.listedDate)]] as Array<[string, string]>) : []),
    ...(listing.statusChanged ? ([["Status changed", formatVerifiedDate(listing.statusChanged)]] as Array<[string, string]>) : []),
    ...(listing.soldDate ? ([["Closed", formatVerifiedDate(listing.soldDate)]] as Array<[string, string]>) : []),
    ["Last verified", formatVerifiedDate(listing.lastVerified)],
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead title={title} description={description} canonical={canonical} />
      <BreadcrumbSchema
        items={[
          { name: "AFH Club", url: "/afh-club" },
          { name: "Listings", url: "/afh-club/listings" },
          ...(citySlug ? [{ name: `For sale in ${listing.city}, WA`, url: `/afh-club/for-sale/${citySlug}` }] : []),
          { name: heading, url: `/afh-club/listings/${slug}` },
        ]}
      />
      <Header />
      <main id="main-content">
        <div style={{ background: GREEN, padding: "6px 24px 4px" }} />
        <HeroBandTitle as="h1">{`${typeNoun} ${STATUS_HEADLINE[listing.marketStatus]}: ${heading}`}</HeroBandTitle>

        <section className="py-10 md:py-14 bg-cream">
          <div className="container px-5 md:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-[18px] mb-6">
                <strong style={{ color: statusColor(listing.marketStatus) }}>
                  {AFH_MARKET_STATUS_LABELS[listing.marketStatus]}
                </strong>{" "}
                · {listing.marketStatus === "sold" && listing.soldPrice ? `Sold ${listing.soldPrice}` : listing.price} ·{" "}
                {afhClassification(listing)}
              </p>
              <div className="rounded-xl border border-border bg-background p-5 md:p-6 mb-8">
                <p className="text-gold font-bold tracking-[0.2em] uppercase text-sm mb-2">Quick Answer</p>
                <h2 className="font-serif text-[22px] md:text-[26px] font-semibold text-navy leading-tight mb-2">
                  Is this {typeNoun.toLowerCase()} still available?
                </h2>
                <p className="text-foreground text-[17px] md:text-[18px] leading-relaxed">{availabilityAnswer(listing)}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 md:py-14 bg-background">
          <div className="container px-5 md:px-8">
            <div className="max-w-[1000px] mx-auto flex flex-col gap-6">
              <AFHListingCard listing={listing} index={0} total={1} />
              <div className="max-w-3xl">
                <h2 className="font-serif text-[24px] md:text-[28px] font-semibold text-navy leading-tight mb-3">
                  Status and price history
                </h2>
                <table className="w-full text-[17px]">
                  <tbody>
                    {rows.map(([k, v]) => (
                      <tr key={k} className="border-b border-border">
                        <th scope="row" className="text-left py-2 pr-4 font-semibold w-2/5">
                          {k}
                        </th>
                        <td className="py-2">{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {facility && (
                <div className="max-w-3xl">
                  <h2 className="font-serif text-[24px] md:text-[28px] font-semibold text-navy leading-tight mb-3">
                    DSHS licensing record
                  </h2>
                  <p className="text-foreground text-[17px] md:text-[18px] leading-relaxed">
                    The DSHS locator lists a licensed adult family home at this address:{" "}
                    <Link to={`/afh-club/homes/${facility.address.citySlug}/${facility.slug}`} className="text-accent underline underline-offset-4 font-semibold">
                      {facility.displayName}
                    </Link>
                    , licensed for {facility.licensedBeds} residents. The licensing record shows the current provider,
                    capacity, and contracts; it does not show who owns the real estate.
                  </p>
                </div>
              )}
              <div className="max-w-3xl">
                <AFHRunTheNumbers
                  city={listing.city}
                  county={cityPageByCity(listing.city)?.county ?? facility?.address.county ?? "King"}
                  beds={facility?.licensedBeds ?? null}
                  lead={listing.marketStatus === "sold" ? "both" : "buyer"}
                  heading={`Run the numbers on this ${listing.city} home`}
                />
              </div>
              <div className="max-w-3xl">
                <h2 className="font-serif text-[24px] md:text-[28px] font-semibold text-navy leading-tight mb-3">
                  What is — and is not — being sold
                </h2>
                <p className="text-foreground text-[17px] md:text-[18px] leading-relaxed">{whatIsBeingSold(listing)}</p>
              </div>
              <div className="max-w-3xl">
                <h2 className="font-serif text-[24px] md:text-[28px] font-semibold text-navy leading-tight mb-3">
                  Seen a change?
                </h2>
                <p className="text-foreground text-[17px] md:text-[18px] leading-relaxed">
                  If this listing has sold, changed price, or come off the market,{" "}
                  <a
                    href={`mailto:info@realpropertyplanning.com?subject=${encodeURIComponent(
                      `AFH listing status change — ${AFH_SOURCE_LABELS[listing.source]} #${listing.mlsNum}`
                    )}`}
                    className="text-accent underline underline-offset-4"
                  >
                    report the change
                  </a>{" "}
                  and it will be verified against the source and updated.
                </p>
              </div>
              <div className="max-w-3xl text-[17px] md:text-[18px] flex flex-col gap-2">
                <Link to={`/afh-club/listings/${AFH_TYPE_LABELS[listing.listingType].slug}`} className="text-accent underline underline-offset-4">
                  All {AFH_TYPE_LABELS[listing.listingType].plural.toLowerCase()} in Washington
                </Link>
                {citySlug && (
                  <Link to={`/afh-club/for-sale/${citySlug}`} className="text-accent underline underline-offset-4">
                    Adult family homes for sale in {listing.city}, WA
                  </Link>
                )}
                <Link to="/afh-club/listings" className="text-accent underline underline-offset-4">
                  All adult family home listings in Washington
                </Link>
              </div>
              <AFHListingsDisclaimer sources={[listing.source]} />
            </div>
          </div>
        </section>
      </main>
      <DisclaimerSection />
      <Footer />
    </div>
  );
};

export default AFHListingDetail;
