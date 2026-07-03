import React from "react";
import { Phone, Mail, MapPin, Bed, Bath, Square, Home } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TEAL = "#1a7a78";
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
    photo: "/listing-photos/2510101_Lynnwood.webp",
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
  {
    id: 9,
    address: "5004 188th Street SW",
    city: "Lynnwood",
    state: "WA",
    beds: 5,
    bathDisplay: "2",
    bathDetail: "2 full",
    sqft: "1,248",
    price: "$949,000",
    photo: "/listing-photos/5004_188th_St_SW_Lynnwood.webp",
    broker: "Irwan Ngadisastra",
    brokerage: "Skyline Properties, Inc.",
    mlsNum: "2546548",
  },
  {
    id: 10,
    address: "Address Upon Request",
    city: "Lynnwood",
    state: "WA",
    beds: 8,
    bathDisplay: "3.25",
    bathDetail: "1 full · 3 three-quarter",
    sqft: "3,080",
    price: "$1,550,000",
    photo: "/listing-photos/2547787_Lynnwood.webp",
    broker: "Angie Holmstrom",
    brokerage: "Windermere RE Greenwood",
    mlsNum: "2547787",
  },
  {
    id: 11,
    address: "Address Upon Request",
    city: "Marysville",
    state: "WA",
    beds: 5,
    bathDisplay: "3",
    bathDetail: "3 full",
    sqft: "1,755",
    price: "$750,000",
    photo: "/listing-photos/2542893_Marysville.webp",
    broker: "Hyun Rim",
    brokerage: "Keller Williams South Sound",
    mlsNum: "2542893",
  },
  {
    id: 12,
    address: "8816 NE 60th Dr NE",
    city: "Marysville",
    state: "WA",
    beds: 6,
    bathDisplay: "4.5",
    bathDetail: "4 full · 1 half",
    sqft: "2,512",
    price: "$1,350,000",
    photo: "/listing-photos/8816_NE_60th_Dr_NE_Marysville.webp",
    broker: "Steve Knoblaugh",
    brokerage: "COMPASS",
    mlsNum: "2547573",
  },
  {
    id: 13,
    address: "9411 356th Street S",
    city: "McKenna",
    state: "WA",
    beds: 5,
    bathDisplay: "2.5",
    bathDetail: "1 full · 2 three-quarter",
    sqft: "2,560",
    price: "$575,000",
    photo: "/listing-photos/9411_356th_St_S_McKenna.webp",
    broker: "John Graver",
    brokerage: "Yelm Windermere",
    mlsNum: "2543352",
  },
  {
    // NOTE: potential AFH — currently a 4-bed home marketed as AFH-convertible
    // ("BR Approved: 5", seller will build out to buyer's spec), not a turnkey
    // licensed AFH like most others on this page. Confirm this fits before publishing.
    id: 14,
    address: "283 Division Avenue",
    city: "Morton",
    state: "WA",
    beds: 4,
    bathDisplay: "2.5",
    bathDetail: "2 full · 1 half",
    sqft: "3,523",
    price: "$434,500",
    photo: "/listing-photos/283_Division_Ave_Morton.webp",
    broker: "Jenn Kaatz",
    brokerage: "Keller Williams South Sound",
    mlsNum: "2463643",
  },
  {
    // NOTE: address marked "Undisclosed" on MLS, but a partial house number is
    // visible in the photo (mailbox/porch area). Consider cropping before publishing.
    id: 15,
    address: "Address Upon Request",
    city: "Mukilteo",
    state: "WA",
    beds: 9,
    bathDisplay: "4.75",
    bathDetail: "3 full · 1 three-quarter · 2 half",
    sqft: "4,469",
    price: "$3,350,000",
    photo: "/listing-photos/2503566_Mukilteo.webp",
    broker: "Alexandru Motroc",
    brokerage: "Real Broker LLC",
    mlsNum: "2503566",
  },
  {
    id: 16,
    address: "1001 8th Avenue NW",
    city: "Puyallup",
    state: "WA",
    beds: 9,
    bathDisplay: "3",
    bathDetail: "3 full",
    sqft: "2,800",
    price: "$1,350,000",
    photo: "/listing-photos/1001_8th_Ave_NW_Puyallup.webp",
    broker: "Nova Miraflor",
    brokerage: "Pellego, Inc.",
    mlsNum: "2533607",
  },
  {
    // NOTE: this is a 5-year LEASE opportunity for a future AFH operator, not a
    // sale — priceLabel below overrides "Asking price" to avoid misleading visitors.
    id: 17,
    address: "17843 110th Avenue SE",
    city: "Renton",
    state: "WA",
    beds: 7,
    bathDisplay: "3",
    bathDetail: "3 three-quarter",
    sqft: "2,270",
    price: "$7,500/mo",
    priceLabel: "For Lease",
    photo: "/listing-photos/17843_110th_Ave_SE_Renton.webp",
    broker: "Angie Holmstrom",
    brokerage: "Windermere RE Greenwood",
    mlsNum: "2536169",
  },
  {
    // NOTE: address marked "Undisclosed" on MLS, but a partial house number is
    // faintly visible above the front door in the photo. Worth a second look.
    id: 18,
    address: "Address Upon Request",
    city: "Seattle",
    state: "WA",
    beds: 8,
    bathDisplay: "4",
    bathDetail: "4 full",
    sqft: "3,000",
    price: "$2,800,000",
    photo: "/listing-photos/2488822_Seattle.webp",
    broker: "Hyun Rim",
    brokerage: "Keller Williams South Sound",
    mlsNum: "2488822",
  },
  {
    id: 19,
    address: "226 O Street SE",
    city: "Auburn",
    state: "WA",
    beds: 6,
    bathDisplay: "2",
    bathDetail: "2 full",
    sqft: "1,810",
    price: "$879,300",
    photo: "/listing-photos/226_O_St_SE_Auburn.webp",
    broker: "Jason Singh",
    brokerage: "Dulay Homes LLC",
    mlsNum: "2541949",
  },
  {
    id: 20,
    address: "10702 SE 318th Place",
    city: "Auburn",
    state: "WA",
    beds: 8,
    bathDisplay: "3.5",
    bathDetail: "3 full · 1 half",
    sqft: "3,180",
    price: "$1,595,000",
    photo: "/listing-photos/10702_SE_318th_Pl_Auburn.webp",
    broker: "Nova Miraflor",
    brokerage: "Pellego, Inc.",
    mlsNum: "2510524",
  },
  {
    // NOTE: address marked "Undisclosed" on MLS, but a partial house number is
    // visible on the brick driveway pillar in the photo. Worth a second look.
    id: 21,
    address: "Address Upon Request",
    city: "Bellevue",
    state: "WA",
    beds: 8,
    bathDisplay: "3.25",
    bathDetail: "1 full · 3 three-quarter",
    sqft: "2,940",
    price: "$2,375,000",
    photo: "/listing-photos/2482928_Bellevue.webp",
    broker: "Vasi Nemes Jr",
    brokerage: "206 Realty LLC",
    mlsNum: "2482928",
  },
  {
    // NOTE: "Though the business is no longer active" per listing remarks —
    // previously-licensed/WABO-ready, not a currently operating AFH like most
    // others on this page. Confirm this fits before publishing.
    id: 22,
    address: "9100 189th Avenue Court E",
    city: "Bonney Lake",
    state: "WA",
    beds: 5,
    bathDisplay: "2.5",
    bathDetail: "2 full · 1 half",
    sqft: "3,232",
    price: "$995,000",
    photo: "/listing-photos/9100_189th_Ave_Ct_E_BonneyLake.webp",
    broker: "Kevin J Williams",
    brokerage: "Synergy Mergers & Acquisitions LLC",
    mlsNum: "2539328",
  },
  {
    id: 23,
    address: "Address Upon Request",
    city: "Custer",
    state: "WA",
    beds: 6,
    bathDisplay: "4",
    bathDetail: "3 full · 2 half",
    sqft: "2,530",
    price: "$899,999",
    photo: "/listing-photos/2520888_Custer.webp",
    broker: "Douglas Linton",
    brokerage: "John L. Scott, Inc.",
    mlsNum: "2520888",
  },
  {
    // NOTE: only 2bd/1ba/918sqft — much smaller than every other listing here.
    // Broker remarks say "Value is in the land," suggesting this may be more of
    // a redevelopment play than an ongoing AFH operation. Confirm this fits.
    id: 24,
    address: "3208 21st Street",
    city: "Everett",
    state: "WA",
    beds: 2,
    bathDisplay: "1",
    bathDetail: "1 full",
    sqft: "918",
    price: "$483,000",
    photo: "/listing-photos/3208_21st_St_Everett.webp",
    broker: "Nikita Krivorak",
    brokerage: "Pellego, Inc.",
    mlsNum: "2535911",
  },
  {
    id: 25,
    address: "6425 Nyanza Park Drive SW",
    city: "Lakewood",
    state: "WA",
    beds: 6,
    bathDisplay: "2",
    bathDetail: "2 full",
    sqft: "2,650",
    price: "$839,950",
    photo: "/listing-photos/6425_Nyanza_Park_Dr_SW_Lakewood.webp",
    broker: "Anthony Pere",
    brokerage: "Skyline Properties, Inc.",
    mlsNum: "2532876",
  },
];

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
      height: "165px",
      alignSelf: "flex-start",
      position: "relative",
      overflow: "hidden",
      backgroundColor: "#e4ecec",
      border: "3px solid #111111",
      borderRadius: "4px",
      flexShrink: 0,
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
          minHeight: "165px",
        }}
      />
    ) : (
      <div
        style={{
          width: "100%",
          height: "100%",
          minHeight: "165px",
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
          <div style={{ maxWidth: "920px", margin: "0 auto" }}>
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
                      color: "#1a5fa8",
                      lineHeight: 1.3,
                    }}
                  >
                    David Stein
                  </div>
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: "18px",
                      color: "#1a5fa8",
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
            maxWidth: "920px",
            margin: "0 auto",
            padding: "2rem 1.5rem 1rem",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {listings.map((listing, index) => (
              <div
                key={listing.id}
                style={{
                  backgroundColor: WHITE,
                  borderRadius: "10px",
                  border: `1px solid ${GRAY_BORDER}`,
                  overflow: "visible",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <PhotoPanel photo={listing.photo} index={index} total={listings.length} />

                <div
                  style={{
                    flex: 1,
                    padding: "1.25rem 1.5rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                  }}
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
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "4px",
                          fontSize: "13px",
                          color: GRAY_TEXT,
                        }}
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
                        {listing.priceLabel || "Asking price"} · MLS# {listing.mlsNum}
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

                  {/* Broker compliance */}
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

          {/* ── DISCLAIMER ── */}
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
