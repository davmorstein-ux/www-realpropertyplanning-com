import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { Link } from "react-router-dom";
import { liveListings, soldListings, AFH_TYPE_LABELS, type AFHListingType, type AFHMarketStatus } from "@/data/afhListings";
import { AFH_CITY_PAGES } from "@/data/afhCityPages";
import { AFHListingCard, AFHListingsDisclaimer } from "@/components/AFHListingCard";
import { realEstateListingsPageSchema } from "@/lib/schema";
import davidSteinPhoto from "@/assets/providers/realtor-david-stein-headshot-seattle.webp";
import expRealtyLogo from "@/assets/providers/exp-realty-brokerage-large-logo-washington.webp";

const TEAL = "#1a7a78";
const TEAL_MID = "#2a9d9a";
const SLATE = "#443e38";
const GRAY_BG = "#f4f6f7";
const GRAY_BORDER = "#dde3e8";
const GRAY_TEXT = "#876b6d";
const WHITE = "#ffffff";

const BackButton = () => (
  <a href="/afh-club" aria-label="Back to AFH Club" style={{ display: "inline-block", textDecoration: "none" }}>
    <img
      src="/listing-photos/back-to-afh-club.webp"
      alt=""
      aria-hidden="true"
      style={{ height: "70px", width: "auto", display: "block", mixBlendMode: "multiply" as const }}
      onMouseOver={(e) => (e.currentTarget.style.opacity = "0.8")}
      onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
    />
  </a>
);

/**
 * Copy for each view. "all" is the umbrella at /afh-club/listings; the three
 * typed views live under /afh-club/listings/{properties,businesses,for-lease}.
 * Each is a real URL so it can be prerendered, indexed, and cited on its own.
 */
const VIEWS: Record<
  "all" | AFHListingType,
  { path: string; title: string; description: string; h1: string; lede: string; empty: string }
> = {
  all: {
    path: "/afh-club/listings",
    title: "Adult Family Homes for Sale in Washington | AFH Club",
    description:
      "An independently researched directory of publicly marketed adult family home properties, businesses, and leases in Washington State — with pricing, licensing status, source attribution, and a verification date on every listing.",
    h1: "Adult Family Home Listings",
    lede: "An independently researched directory of publicly marketed adult family home opportunities in Washington State, in three groups: the real estate, the operating business, and homes for lease. Listings are gathered from NWMLS, RMLS, BizBuySell, and direct-from-owner sources and regularly checked for status changes. Each one shows its licensing status and whether the business conveys.",
    empty: "No current listings.",
  },
  realEstate: {
    path: "/afh-club/listings/properties",
    title: "Adult Family Home Properties for Sale in Washington | AFH Club",
    description:
      "Houses currently for sale in Washington State that are licensed, formerly licensed, WABO-ready, or marketed as adult family home opportunities — with price, capacity, licensing status, and listing broker.",
    h1: "Adult Family Home Properties for Sale",
    lede: "The real estate: houses that are operating adult family homes, formerly licensed, built to the WABO checklist, or marketed for AFH use. The DSHS license never transfers with a sale — every buyer relicenses through a Change of Ownership.",
    empty: "No properties are currently listed.",
  },
  business: {
    path: "/afh-club/listings/businesses",
    title: "Adult Family Home Businesses for Sale in Washington | AFH Club",
    description:
      "Operating adult family home businesses for sale in Washington State — the license history, residents, staff, and contracts — sold separately from, or together with, the real estate.",
    h1: "Adult Family Home Businesses for Sale",
    lede: "The operation, not the house: an established adult family home business with residents in place, sold to a buyer who will qualify for their own DSHS license. Some include the real estate; most are paired with a lease or a separate property listing.",
    empty: "No businesses are currently listed. Operating homes that include the business are shown under Properties.",
  },
  lease: {
    path: "/afh-club/listings/for-lease",
    title: "Adult Family Homes for Lease in Washington | AFH Club",
    description:
      "Licensed and AFH-ready houses available for lease to adult family home operators in Washington State — monthly rent, term, and licensing status.",
    h1: "Adult Family Homes for Lease",
    lede: "Houses available to lease for adult family home operation. Leasing lets an operator start without buying, and lets an owner keep the real estate while someone else runs the home.",
    empty: "No homes are currently listed for lease.",
  },
};

const AFHListings = ({ view = "all" }: { view?: "all" | AFHListingType }) => {
  const copy = VIEWS[view];
  // Only listings currently on the market (active or pending); sold / expired records stay in the data file but never display here.
  const afhListings = liveListings();
  const [status, setStatus] = React.useState<"all" | AFHMarketStatus>("all");
  const byType = view === "all" ? afhListings : afhListings.filter((l) => l.listingType === view);
  const statusCounts = {
    active: byType.filter((l) => l.marketStatus === "active").length,
    pending: byType.filter((l) => l.marketStatus === "pending").length,
  };
  const soldCount = soldListings().length;
  const shown = status === "all" ? byType : byType.filter((l) => l.marketStatus === status);
  const counts = {
    realEstate: afhListings.filter((l) => l.listingType === "realEstate").length,
    business: afhListings.filter((l) => l.listingType === "business").length,
    lease: afhListings.filter((l) => l.listingType === "lease").length,
  };
  const sourcesPresent = [...new Set(shown.map((l) => l.source))];

  const saleValues = shown
    .filter((l) => !l.priceLabel || l.priceLabel === "Asking price")
    .map((l) => Number(l.price.replace(/[^0-9.]/g, "")))
    .filter((n) => !Number.isNaN(n) && n > 0);

  const formatPrice = (n: number) =>
    n >= 1_000_000 ? `$${(n / 1_000_000).toFixed(2)}M` : `$${Math.round(n).toLocaleString()}`;

  const priceRangeLabel =
    saleValues.length > 0
      ? `${formatPrice(Math.min(...saleValues))} – ${formatPrice(Math.max(...saleValues))}`
      : "Contact for pricing";

  const cityCounts = shown.reduce<Record<string, number>>((acc, l) => {
    acc[l.city] = (acc[l.city] || 0) + 1;
    return acc;
  }, {});
  const uniqueCities = Object.keys(cityCounts);
  const citiesByVolume = [...uniqueCities].sort((a, b) => cityCounts[b] - cityCounts[a]);
  const locationsLabel =
    citiesByVolume.length > 3
      ? `${citiesByVolume.slice(0, 3).join(" · ")} + ${citiesByVolume.length - 3} more`
      : citiesByVolume.join(" · ");

  const listingsJsonLd = realEstateListingsPageSchema(shown, `${copy.h1} — Washington State`);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: GRAY_BG,
        fontFamily: "'DM Sans', system-ui, sans-serif",
      }}
    >
      <SEOHead
        title={copy.title}
        description={copy.description}
        canonical={`https://realpropertyplanning.com${copy.path}`}
        jsonLd={listingsJsonLd}
      />
      <BreadcrumbSchema
        items={[
          { name: "AFH Club", url: "https://realpropertyplanning.com/afh-club" },
          { name: "Listings", url: "https://realpropertyplanning.com/afh-club/listings" },
        ]}
      />
      <Header />
      {/* The site header is position:sticky, so it already occupies space in the
          document flow. No compensating top padding is needed here — adding it
          produced a large empty band above the page heading. */}
      <main id="main-content" style={{ paddingTop: "0" }}>
        {/* ── HEADER ── */}
        {/* NOTE: this div is #main-content > *:first-child, which index.css
            forces to padding-top: 0 / padding-bottom: 0 with !important.
            Vertical padding MUST live on the inner wrapper below, not here —
            anything set here is silently discarded. Horizontal padding is
            unaffected and stays. */}
        <div
          style={{
            backgroundColor: WHITE,
            borderBottom: `1px solid ${GRAY_BORDER}`,
            padding: "0 1.5rem",
          }}
        >
          <div style={{ maxWidth: "1160px", margin: "0 auto", padding: "2.25rem 0 2rem" }}>
            {/* Two-column intro row: heading/copy on the left, contact card on the
                right. Previously the contact card sat in its own full-width row
                above the heading, which pushed the H1 far down the page. Wraps to
                a single stacked column on narrow viewports. */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                gap: "2rem",
                flexWrap: "wrap",
              }}
            >
              {/* LEFT: pill + heading + copy */}
              {/* LEFT: pill + heading + copy */}
              <div style={{ flex: "1 1 520px", minWidth: 0 }}>
                {/* Pill */}
                <div style={{ marginBottom: "0.75rem" }}>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      backgroundColor: "#f0f0f0",
                      color: "#8b1a1a",
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      padding: "4px 12px",
                      borderRadius: "100px",
                      border: "1px solid #d0c0c0",
                    }}
                  >
                    <span
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        backgroundColor: "#8b1a1a",
                        display: "inline-block",
                      }}
                    />
                    AFH Club · Active Listings
                  </span>
                </div>

                {/* Heading — stepped down one size from clamp(28px, 4.5vw, 44px).
                    NOTE: the effective size is enforced by the
                    html body main h1.afh-listings-h1 rule in index.css, which
                    carries !important; that rule must match this value. */}
                <h1
                  className="afh-listings-h1"
                  style={{
                    fontSize: "clamp(25px, 3.8vw, 36px)",
                    fontWeight: 700,
                    color: SLATE,
                    margin: "0 0 0.6rem",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.2,
                  }}
                >
                  {copy.h1}
                </h1>

                {/* Subtext */}
                <p
                  style={{
                    fontSize: "15px",
                    color: GRAY_TEXT,
                    lineHeight: 1.7,
                    margin: "0 0 1.5rem",
                    maxWidth: "560px",
                  }}
                >
                  {copy.lede}
                </p>
                {/* Category navigation — links, not tabs, so each view is a crawlable page */}
                <nav aria-label="Listing categories" style={{ display: "flex", gap: "8px", flexWrap: "wrap", margin: "0 0 1.25rem" }}>
                  {(["all", "realEstate", "business", "lease"] as const).map((v) => {
                    const active = v === view;
                    const label =
                      v === "all"
                        ? `All (${afhListings.length})`
                        : `${AFH_TYPE_LABELS[v].plural} (${counts[v]})`;
                    return (
                      <Link
                        key={v}
                        to={VIEWS[v].path}
                        aria-current={active ? "page" : undefined}
                        style={{
                          fontSize: "13px",
                          fontWeight: active ? 700 : 500,
                          color: active ? WHITE : SLATE,
                          backgroundColor: active ? TEAL : WHITE,
                          border: `1px solid ${active ? TEAL : GRAY_BORDER}`,
                          borderRadius: "6px",
                          padding: "6px 12px",
                          textDecoration: "none",
                        }}
                      >
                        {label}
                      </Link>
                    );
                  })}
                  <Link
                    to="/afh-club/sold"
                    style={{
                      fontSize: "13px",
                      fontWeight: 500,
                      color: SLATE,
                      backgroundColor: WHITE,
                      border: `1px solid ${GRAY_BORDER}`,
                      borderRadius: "6px",
                      padding: "6px 12px",
                      textDecoration: "none",
                    }}
                  >
                    Sold
                  </Link>
                </nav>
                <p
                  style={{
                    fontSize: "14px",
                    color: GRAY_TEXT,
                    lineHeight: 1.7,
                    margin: "0 0 1.5rem",
                    maxWidth: "620px",
                    fontStyle: "italic",
                  }}
                >
                  AFH licenses are issued to individual providers and do not automatically transfer with the real
                  estate. Buyers must independently satisfy all applicable DSHS licensing and Change of Ownership
                  requirements. Property and licensing information should be independently verified.
                </p>
              </div>

              {/* RIGHT: contact card */}
              <div
                style={{
                  flex: "0 0 auto",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "8px",
                  width: "200px",
                }}
              >
                <a href="/realtor" aria-label="David Stein" style={{ textDecoration: "none", display: "inline-block" }}>
                  <img
                    src={davidSteinPhoto}
                    alt="David Stein"
                    style={{
                      height: "120px",
                      width: "120px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      display: "block",
                      border: "3px solid #272421",
                    }}
                  />
                </a>
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: "20px",
                      color: "#1247b4",
                      lineHeight: 1.3,
                    }}
                  >
                    David Stein
                  </div>
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: "18px",
                      color: "#272421",
                      lineHeight: 1.3,
                    }}
                  >
                    AFH Expert
                  </div>
                  <img
                    src={expRealtyLogo}
                    alt="eXp Realty"
                    style={{ height: "44px", width: "auto", display: "block", margin: "4px auto" }}
                  />
                  <a
                    href="tel:2069003015"
                    style={{
                      display: "block",
                      fontWeight: 600,
                      fontSize: "16px",
                      color: "#1247b4",
                      lineHeight: 1.3,
                      textDecoration: "none",
                      minHeight: "24px",
                    }}
                  >
                    (206) 900-3015
                  </a>
                </div>
              </div>
            </div>

            {/* Stats bar */}
            <div
              style={{
                display: "flex",
                gap: "2rem",
                flexWrap: "wrap",
                padding: "1rem 1.25rem",
                backgroundColor: "#f0f0f0",
                borderRadius: "8px",
                border: "1px solid #d8d8d8",
              }}
            >
              {[
                { label: "Active listings", value: String(shown.length) },
                { label: "Locations", value: locationsLabel },
                { label: "Price range", value: priceRangeLabel },
                { label: "Cities covered", value: String(uniqueCities.length) },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    style={{
                      fontSize: "11px",
                      fontWeight: 600,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: "#8b1a1a",
                      marginBottom: "2px",
                    }}
                  >
                    {stat.label}
                  </div>
                  <div style={{ fontSize: "14px", fontWeight: 600, color: SLATE }}>{stat.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── LISTINGS ── */}
        <div
          style={{
            maxWidth: "1160px",
            margin: "0 auto",
            padding: "2rem 1.5rem 1rem",
          }}
        >
          {/* Before-you-browse callout: every listing's label points at this guide, but a buyer who has never
              heard of the labels needs it in front of them before the first card. */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1rem 1.5rem",
              padding: "1.25rem 1.5rem",
              marginBottom: "1.5rem",
              background: "#0a5648",
              borderRadius: "12px",
              color: WHITE,
            }}
          >
            <div style={{ flex: "1 1 360px" }}>
              <p style={{ margin: "0 0 4px", fontSize: "13px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", opacity: 0.85 }}>
                Before you browse
              </p>
              <p style={{ margin: 0, fontSize: "18px", lineHeight: 1.5, fontWeight: 600 }}>
                "Adult family home," "AFH-ready," and "potential AFH" are not the same thing. Know what each label means
                and what to ask for before you rely on a listing.
              </p>
            </div>
            <Link
              to="/afh-club/afh-property-classifications"
              style={{
                flex: "0 0 auto",
                display: "inline-flex",
                alignItems: "center",
                minHeight: "52px",
                padding: "0 1.5rem",
                background: WHITE,
                color: "#0a5648",
                fontSize: "17px",
                fontWeight: 700,
                borderRadius: "8px",
                textDecoration: "none",
              }}
            >
              Is it really an AFH? Read the guide →
            </Link>
          </div>
          {/* Browse by city. Counts come from the data so they never drift from the city pages. */}
          <section aria-labelledby="browse-city" style={{ marginBottom: "1.5rem" }}>
            <h2 id="browse-city" style={{ fontSize: "17px", fontWeight: 700, color: SLATE, margin: "0 0 10px" }}>
              Browse by city
            </h2>
            {Object.entries(
              AFH_CITY_PAGES.reduce<Record<string, typeof AFH_CITY_PAGES>>((acc, c) => {
                (acc[c.county] ??= []).push(c);
                return acc;
              }, {})
            ).map(([county, cities]) => (
              <div key={county} style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "6px 10px", marginBottom: "8px" }}>
                <span style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: GRAY_TEXT, minWidth: "96px" }}>
                  {county} County
                </span>
                {cities.map((c) => {
                  const live = afhListings.filter((l) => l.city.toLowerCase() === c.city.toLowerCase()).length;
                  const sold = soldListings().filter((l) => l.city.toLowerCase() === c.city.toLowerCase()).length;
                  return (
                    <Link
                      key={c.slug}
                      to={`/afh-club/for-sale/${c.slug}`}
                      style={{
                        fontSize: "15px",
                        color: SLATE,
                        backgroundColor: WHITE,
                        border: `1px solid ${GRAY_BORDER}`,
                        borderRadius: "999px",
                        padding: "6px 12px",
                        textDecoration: "none",
                        minHeight: "36px",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      {c.city}
                      <span style={{ color: GRAY_TEXT, fontSize: "13px" }}>
                        {live} · {sold} sold
                      </span>
                    </Link>
                  );
                })}
              </div>
            ))}
          </section>

          {/* Status filter. Active/Pending filter in place; Recently sold is its own page. */}
          <nav aria-label="Listing status" style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "1.25rem", alignItems: "center" }}>
            {(
              [
                ["all", `All on market (${byType.length})`],
                ["active", `Active (${statusCounts.active})`],
                ["pending", `Pending (${statusCounts.pending})`],
              ] as const
            ).map(([key, lbl]) => {
              const on = status === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setStatus(key)}
                  aria-pressed={on}
                  style={{
                    fontSize: "15px",
                    fontWeight: on ? 700 : 500,
                    color: on ? WHITE : SLATE,
                    backgroundColor: on ? "#0a5648" : WHITE,
                    border: `1px solid ${on ? "#0a5648" : GRAY_BORDER}`,
                    borderRadius: "999px",
                    padding: "8px 16px",
                    minHeight: "44px",
                    cursor: "pointer",
                  }}
                >
                  {lbl}
                </button>
              );
            })}
            <Link
              to="/afh-club/sold"
              style={{
                fontSize: "15px",
                fontWeight: 500,
                color: SLATE,
                backgroundColor: WHITE,
                border: `1px solid ${GRAY_BORDER}`,
                borderRadius: "999px",
                padding: "8px 16px",
                minHeight: "44px",
                display: "inline-flex",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              Recently sold ({soldCount}) →
            </Link>
          </nav>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {shown.length === 0 && status !== "all" && (
              <p style={{ fontSize: "16px", color: SLATE, padding: "1rem 0" }}>
                Nothing {status} in this category right now.
              </p>
            )}
            {shown.length === 0 && status === "all" && (
              <p style={{ fontSize: "16px", color: SLATE, padding: "1rem 0" }}>
                {copy.empty} Have one to list?{" "}
                <a href="/afh-submit" style={{ color: TEAL, textDecoration: "underline" }}>
                  Talk with David
                </a>
                .
              </p>
            )}
            {shown.map((listing, index) => (
              <AFHListingCard key={listing.id} listing={listing} index={index} total={shown.length} />
            ))}
          </div>

          {/* ── DISCLAIMER ── */}
          <AFHListingsDisclaimer sources={sourcesPresent} />

          {/* ── SECOND BACK BUTTON ── */}
          <div style={{ marginTop: "2rem", paddingBottom: "2.5rem" }}>
            <BackButton />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AFHListings;
