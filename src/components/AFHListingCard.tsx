import { Phone, Mail, MapPin, Bed, Bath, Square, Home } from "lucide-react";
import type { AFHListing } from "@/data/afhListings";

const TEAL = "#1a7a78";
const TEAL_MID = "#2a9d9a";
const SLATE = "#443e38";
const GRAY_BG = "#f4f6f7";
const GRAY_BORDER = "#dde3e8";
const GRAY_TEXT = "#876b6d";
const WHITE = "#ffffff";

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

export const AFHListingCard = ({ listing, index, total }: { listing: AFHListing; index: number; total: number }) => (
  <div
    style={{
      backgroundColor: WHITE,
      borderRadius: "10px",
      border: `1px solid ${GRAY_BORDER}`,
      overflow: "visible",
      display: "flex",
      flexDirection: "row",
    }}
  >
    <PhotoPanel photo={listing.photo} index={index} total={total} />

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
          <h3
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
          </h3>
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
        <StatPill icon={<Bath size={13} />} value={listing.bathDisplay} label={`baths (${listing.bathDetail})`} />
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
);

export const AFHListingsDisclaimer = () => (
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
    David Stein, Washington State Licensed Real Estate Broker (eXp Realty · License #6c171e), for all inquiries,
    showings, and full listing details.
  </div>
);
