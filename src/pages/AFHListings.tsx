import React from "react";
import { Phone, Mail, MapPin, Bed, Bath, Square, Home } from "lucide-react";

const TEAL = "#1a7a78";
const TEAL_LIGHT = "#e8f5f5";
const TEAL_MID = "#2a9d9a";
const SLATE = "#2c3e50";
const GRAY_BG = "#f4f6f7";
const GRAY_BORDER = "#dde3e8";
const GRAY_TEXT = "#6b7a87";
const WHITE = "#ffffff";

const listings = [
  {
    id: 1,
    address: "16342 72nd Avenue W",
    city: "Edmonds",
    state: "WA",
    beds: 9,
    bathDisplay: "4",
    bathDetail: "4 full",
    sqft: "3,802",
    price: "$2,250,000",
    photo: "/listing-photos/16342_72nd_Ave_W_Edmonds.webp",
    broker: "Adrian Marchis",
    brokerage: "Skyline Properties, Inc.",
    mlsNum: "2470647",
  },
  {
    id: 2,
    address: "17926 73rd Avenue W",
    city: "Edmonds",
    state: "WA",
    beds: 8,
    bathDisplay: "4.25",
    bathDetail: "5 three-quarter · 1 half",
    sqft: "3,898",
    price: "$1,650,000",
    photo: "/listing-photos/17926_73rd_Ave_W_Edmonds.webp",
    broker: "Douglas Linton",
    brokerage: "John L. Scott, Inc.",
    mlsNum: "2459655",
  },
  {
    id: 3,
    address: "7339 NE 140th Street",
    city: "Kirkland",
    state: "WA",
    beds: 6,
    bathDisplay: "3",
    bathDetail: "3 full",
    sqft: "2,820",
    price: "$1,449,000",
    photo: "/listing-photos/7339_NE_140th_St_Kirkland.webp",
    broker: "Zora Brzac",
    brokerage: "HomeSmart Real Estate Assoc",
    mlsNum: "2476640",
  },
  {
    id: 4,
    address: "Address Upon Request",
    city: "Lynnwood",
    state: "WA",
    beds: 9,
    bathDisplay: "4",
    bathDetail: "4 full",
    sqft: "2,948",
    price: "$1,600,000",
    photo: null,
    broker: "Demba Baldeh",
    brokerage: "Skyline Properties, Inc.",
    mlsNum: "2510101",
  },
  {
    id: 5,
    address: "Address Upon Request",
    city: "Lynnwood",
    state: "WA",
    beds: 8,
    bathDisplay: "3.25",
    bathDetail: "1 full · 3 three-quarter",
    sqft: "3,080",
    price: "$1,649,000",
    photo: "/listing-photos/611313_Lynnwood.webp",
    broker: "Angie Holmstrom",
    brokerage: "Windermere RE Greenwood",
    mlsNum: "2535843",
  },
  {
    id: 6,
    address: "Address Upon Request",
    city: "Edmonds",
    state: "WA",
    beds: 7,
    bathDisplay: "3",
    bathDetail: "3 full",
    sqft: "3,246",
    price: "$1,900,000",
    photo: "/listing-photos/32562_Edmonds.webp",
    broker: "Samuel Mottley",
    brokerage: "Skyline Properties, Inc.",
    mlsNum: "2496559",
  },
  {
    id: 7,
    address: "Address Upon Request",
    city: "Edmonds",
    state: "WA",
    beds: 6,
    bathDisplay: "4",
    bathDetail: "3 full · 2 half",
    sqft: "2,356",
    price: "$2,100,000",
    photo: "/listing-photos/122263_Edmonds.webp",
    broker: "Nicolae Leva",
    brokerage: "206 Realty LLC",
    mlsNum: "2471335",
  },
  {
    id: 8,
    address: "Address Upon Request",
    city: "Lynnwood",
    state: "WA",
    beds: 10,
    bathDisplay: "4.5",
    bathDetail: "3 full · 3 half",
    sqft: "3,960",
    price: "$2,429,000",
    photo: "/listing-photos/22625_Lynnwood.webp",
    broker: "Vasi Nemes Jr",
    brokerage: "206 Realty LLC",
    mlsNum: "2336582",
  },
];

const StatPill = ({ icon, label, value }: { icon: JSX.Element; label: string; value: string }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "7px",
      backgroundColor: GRAY_BG,
      border: `1px solid ${GRAY_BORDER}`,
      borderRadius: "6px",
      padding: "6px 12px",
      fontFamily: "Inter, system-ui, sans-serif",
      fontSize: "13px",
    }}
  >
    <span style={{ color: TEAL, display: "flex", alignItems: "center" }}>{icon}</span>
    <span style={{ fontWeight: 600, color: SLATE }}>{value}</span>
    <span style={{ color: GRAY_TEXT }}>{label}</span>
  </div>
);

const PhotoPanel = ({ photo, index, total }: { photo: string | null; index: number; total: number }) => (
  <div
    style={{
      width: "220px",
      minWidth: "220px",
      position: "relative",
      overflow: "hidden",
      backgroundColor: "#e4ecec",
    }}
  >
    {photo ? (
      <img
        src={photo}
        alt={`Listing ${index + 1}`}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          minHeight: "180px",
        }}
      />
    ) : (
      <div
        style={{
          width: "100%",
          height: "100%",
          minHeight: "180px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          backgroundImage:
            "linear-gradient(rgba(26,122,120,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(26,122,120,0.06) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      >
        <Home size={28} style={{ color: TEAL, opacity: 0.45 }} />
        <span
          style={{
            fontSize: "10px",
            color: TEAL,
            opacity: 0.6,
            letterSpacing: "0.07em",
            textTransform: "uppercase" as const,
          }}
        >
          Photo pending
        </span>
      </div>
    )}

    {/* Listing counter */}
    <div
      style={{
        position: "absolute",
        top: "10px",
        left: "10px",
        backgroundColor: "rgba(26,122,120,0.88)",
        color: WHITE,
        fontSize: "10px",
        fontWeight: 700,
        letterSpacing: "0.06em",
        padding: "3px 8px",
        borderRadius: "4px",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {String(index + 1).padStart(2, "0")} / {total}
    </div>

    {/* Active badge */}
    <div
      style={{
        position: "absolute",
        bottom: "10px",
        left: "10px",
        display: "flex",
        alignItems: "center",
        gap: "5px",
        backgroundColor: "rgba(255,255,255,0.92)",
        padding: "3px 8px",
        borderRadius: "4px",
        fontSize: "10px",
        fontWeight: 600,
        color: "#2d7a3a",
        letterSpacing: "0.05em",
        textTransform: "uppercase" as const,
        fontFamily: "Inter, sans-serif",
      }}
    >
      <span
        style={{
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          backgroundColor: "#3aaa4a",
          display: "inline-block",
        }}
      />
      Active
    </div>
  </div>
);

const AFHListings = () => {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: GRAY_BG, fontFamily: "Inter, system-ui, sans-serif" }}>
      {/* Page header band */}
      <div style={{ backgroundColor: WHITE, borderBottom: `1px solid ${GRAY_BORDER}`, padding: "2.5rem 1.5rem 2rem" }}>
        <div style={{ maxWidth: "920px", margin: "0 auto" }}>
          {/* Back to AFH Club button */}
          <div style={{ marginBottom: "1.5rem" }}>
            <a href="/afh-club" style={{ display: "inline-block", textDecoration: "none" }}>
              <img
                src="/listing-photos/back-to-afh-club.png"
                alt="Back to AFH Club"
                style={{
                  height: "52px",
                  width: "auto",
                  display: "block",
                  transition: "opacity 0.15s",
                }}
                onMouseOver={(e) => (e.currentTarget.style.opacity = "0.85")}
                onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
              />
            </a>
          </div>

          {/* Pill label + AFH Badge row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "0.75rem",
              flexWrap: "wrap",
              gap: "0.75rem",
              maxWidth: "920px",
            }}
          >
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

            {/* AFH Club badge */}
            <a href="/afh-club" style={{ textDecoration: "none", display: "inline-block" }}>
              <img
                src="/afh-club-badge.png"
                alt="AFH Club"
                style={{ height: "110px", width: "auto", display: "block" }}
              />
            </a>
          </div>

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

          <p style={{ fontSize: "15px", color: GRAY_TEXT, lineHeight: 1.7, margin: "0 0 1.5rem", maxWidth: "560px" }}>
            Licensed Adult Family Home properties currently available for sale in the Puget Sound region. Contact David
            Stein for showings or additional information on any listing.
          </p>

          {/* Summary stats bar */}
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

      {/* Listings */}
      <div style={{ maxWidth: "920px", margin: "0 auto", padding: "2rem 1.5rem 3rem" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {listings.map((listing, index) => (
            <div
              key={listing.id}
              style={{
                backgroundColor: WHITE,
                borderRadius: "10px",
                border: `1px solid ${GRAY_BORDER}`,
                overflow: "hidden",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <PhotoPanel photo={listing.photo} index={index} total={listings.length} />

              {/* Card content */}
              <div
                style={{ flex: 1, padding: "1.25rem 1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}
              >
                {/* Address + price */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "1rem",
                    flexWrap: "wrap",
                  }}
                >
                  <div>
                    <h2
                      style={{
                        fontSize: "1.05rem",
                        fontWeight: 700,
                        color: SLATE,
                        margin: "0 0 4px",
                        letterSpacing: "-0.01em",
                        lineHeight: 1.25,
                      }}
                    >
                      {listing.address}
                    </h2>
                    <div
                      style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "13px", color: GRAY_TEXT }}
                    >
                      <MapPin size={12} style={{ color: TEAL_MID }} />
                      {listing.city}, {listing.state}
                    </div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div
                      style={{
                        fontSize: "1.4rem",
                        fontWeight: 700,
                        color: TEAL,
                        letterSpacing: "-0.02em",
                        lineHeight: 1,
                      }}
                    >
                      {listing.price}
                    </div>
                    <div style={{ fontSize: "11px", color: GRAY_TEXT, marginTop: "3px" }}>
                      Asking price · MLS# {listing.mlsNum}
                    </div>
                  </div>
                </div>

                {/* Stat pills */}
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  <StatPill icon={<Bed size={13} />} value={String(listing.beds)} label="beds" />
                  <StatPill
                    icon={<Bath size={13} />}
                    value={listing.bathDisplay}
                    label={`baths (${listing.bathDetail})`}
                  />
                  <StatPill icon={<Square size={13} />} value={listing.sqft} label="sq ft" />
                </div>

                {/* Divider */}
                <div style={{ height: "1px", backgroundColor: GRAY_BORDER }} />

                {/* CTAs */}
                <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
                  <a
                    href="tel:+12069003015"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      backgroundColor: TEAL,
                      color: WHITE,
                      fontSize: "13px",
                      fontWeight: 600,
                      padding: "8px 16px",
                      borderRadius: "6px",
                      textDecoration: "none",
                      letterSpacing: "0.02em",
                    }}
                  >
                    <Phone size={13} />
                    (206) 900-3015
                  </a>
                  <a
                    href="mailto:dave.stein@exprealty.com"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      backgroundColor: "transparent",
                      color: TEAL,
                      fontSize: "13px",
                      fontWeight: 600,
                      padding: "8px 16px",
                      borderRadius: "6px",
                      border: `1px solid ${TEAL}55`,
                      textDecoration: "none",
                    }}
                  >
                    <Mail size={13} />
                    Email inquiry
                  </a>
                </div>

                {/* NWMLS compliance attribution */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    paddingTop: "4px",
                    fontSize: "11px",
                    color: GRAY_TEXT,
                    borderTop: `1px solid ${GRAY_BORDER}`,
                  }}
                >
                  <span style={{ fontWeight: 600, color: SLATE }}>Listing broker:</span>
                  <span>
                    {listing.broker} · {listing.brokerage}
                  </span>
                  <span style={{ marginLeft: "auto", opacity: 0.6 }}>NWMLS</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer disclaimer */}
        <div
          style={{
            marginTop: "2.5rem",
            padding: "1.25rem",
            backgroundColor: WHITE,
            borderRadius: "8px",
            border: `1px solid ${GRAY_BORDER}`,
            fontSize: "11.5px",
            color: GRAY_TEXT,
            lineHeight: 1.75,
            textAlign: "center",
          }}
        >
          Listings sourced from NWMLS. Information deemed reliable but not guaranteed. Real Property Planning is an
          independent educational hub and does not represent buyers or sellers on these properties directly — contact
          David Stein, Washington State Licensed Real Estate Broker (eXp Realty · License #113972), for all inquiries,
          showings, and full listing details.
        </div>
      </div>
    </div>
  );
};

export default AFHListings;
