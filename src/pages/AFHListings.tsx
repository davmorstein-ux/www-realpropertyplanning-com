import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { afhListings } from "@/data/afhListings";
import { AFHListingCard, AFHListingsDisclaimer } from "@/components/AFHListingCard";

const TEAL = "#1a7a78";
const TEAL_MID = "#2a9d9a";
const SLATE = "#443e38";
const GRAY_BG = "#f4f6f7";
const GRAY_BORDER = "#dde3e8";
const GRAY_TEXT = "#876b6d";
const WHITE = "#ffffff";


const BackButton = () => (
  <a href="/afh-club" style={{ display: "inline-block", textDecoration: "none" }}>
    <img
      src="/listing-photos/back-to-afh-club.png"
      alt="Back to AFH Club"
      style={{ height: "70px", width: "auto", display: "block", mixBlendMode: "multiply" as const }}
      onMouseOver={(e) => (e.currentTarget.style.opacity = "0.8")}
      onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
    />
  </a>
);

const AFHListings = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: GRAY_BG,
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      <Header />
      <main id="main-content" style={{ paddingTop: "80px" }}>
        {/* ── HEADER ── */}
        <div
          style={{
            backgroundColor: WHITE,
            borderBottom: `1px solid ${GRAY_BORDER}`,
            padding: "2rem 1.5rem",
          }}
        >
          <div style={{ maxWidth: "1160px", margin: "0 auto" }}>
            {/* Top row: back button left, badge right */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "1.5rem",
              }}
            >
              <BackButton />
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                <a href="/afh-club" style={{ textDecoration: "none", display: "inline-block" }}>
                  <img
                    src="/afh-club-badge.png"
                    alt="AFH Club"
                    style={{ height: "160px", width: "auto", display: "block" }}
                  />
                </a>
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: "20px",
                      color: "#a0222c",
                      lineHeight: 1.3,
                    }}
                  >
                    David Stein
                  </div>
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: "18px",
                      color: "#a0222c",
                      lineHeight: 1.3,
                    }}
                  >
                    AFH Expert
                  </div>
                </div>
              </div>
            </div>

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

            {/* Heading */}
            <h1
              style={{
                fontSize: "clamp(1.6rem, 3.5vw, 2.1rem)",
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
              Licensed Adult Family Home properties currently available for sale in the Puget Sound region. Reach out
              for showings or additional information on any listing.
            </p>

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
                { label: "Active listings", value: "8" },
                { label: "Locations", value: "Edmonds · Kirkland · Lynnwood" },
                { label: "Price range", value: "$1.45M – $2.43M" },
                { label: "Updated", value: "June 2026" },
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
