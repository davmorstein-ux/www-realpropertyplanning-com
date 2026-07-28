import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { afhListings } from "@/data/afhListings";
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
      src="/listing-photos/back-to-afh-club.png"
      alt=""
      aria-hidden="true"
      style={{ height: "70px", width: "auto", display: "block", mixBlendMode: "multiply" as const }}
      onMouseOver={(e) => (e.currentTarget.style.opacity = "0.8")}
      onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
    />
  </a>
);

const AFHListings = () => {
  const saleValues = afhListings
    .filter((l) => !l.priceLabel || l.priceLabel === "Asking price")
    .map((l) => Number(l.price.replace(/[^0-9.]/g, "")))
    .filter((n) => !Number.isNaN(n) && n > 0);

  const formatPrice = (n: number) =>
    n >= 1_000_000 ? `$${(n / 1_000_000).toFixed(2)}M` : `$${Math.round(n).toLocaleString()}`;

  const priceRangeLabel =
    saleValues.length > 0
      ? `${formatPrice(Math.min(...saleValues))} – ${formatPrice(Math.max(...saleValues))}`
      : "Contact for pricing";

  const cityCounts = afhListings.reduce<Record<string, number>>((acc, l) => {
    acc[l.city] = (acc[l.city] || 0) + 1;
    return acc;
  }, {});
  const uniqueCities = Object.keys(cityCounts);
  const citiesByVolume = [...uniqueCities].sort((a, b) => cityCounts[b] - cityCounts[a]);
  const locationsLabel =
    citiesByVolume.length > 3
      ? `${citiesByVolume.slice(0, 3).join(" · ")} + ${citiesByVolume.length - 3} more`
      : citiesByVolume.join(" · ");

  const listingsJsonLd = realEstateListingsPageSchema(afhListings);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: GRAY_BG,
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      <SEOHead
        title="Adult Family Homes for Sale in Washington | AFH Club"
        description="Browse Adult Family Home properties currently listed for sale or lease throughout Washington State, with pricing, property details and NWMLS attribution."
        canonical="https://realpropertyplanning.com/afh-club/listings"
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
                  Adult Family Home Properties
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
                  Properties currently marketed or operated as Adult Family Homes for sale in the Puget Sound region.
                  Reach out for showings or additional information on any listing.
                </p>
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
                { label: "Active listings", value: String(afhListings.length) },
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
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {afhListings.map((listing, index) => (
              <AFHListingCard key={listing.id} listing={listing} index={index} total={afhListings.length} />
            ))}
          </div>

          {/* ── DISCLAIMER ── */}
          <AFHListingsDisclaimer />

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
