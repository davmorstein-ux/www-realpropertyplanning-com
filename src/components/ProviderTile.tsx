import { useState, useRef } from "react";

interface ProviderTileProps {
  name: string;
  title: string;
  company: string;
  photo?: string;
  photoAlt?: string;
  photo2?: string;
  photoAlt2?: string;
  name2?: string;
  title2?: string;
  logo?: string;
  logoAlt?: string;
  phone?: string;
  phone2?: string;
  email?: string;
  email2?: string;
  website: string;
  bio?: string;
  specialty?: string;
}

export default function ProviderTile({
  name,
  title,
  company,
  photo,
  photoAlt,
  photo2,
  photoAlt2,
  name2,
  title2,
  logo,
  logoAlt,
  phone,
  phone2,
  email,
  email2,
  website,
  bio,
  specialty,
}: ProviderTileProps) {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = () => {
    if (!bio) return;
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => {
      setHovered(true);
      setTimeout(() => setVisible(true), 10);
    }, 400);
  };
  const handleLeave = () => {
    if (!bio) return;
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => {
      setVisible(false);
      setTimeout(() => setHovered(false), 1600);
    }, 200);
  };

  const hasTwoPeople = !!(photo2 && name2);

  return (
    <div
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{
        position: "relative",
        background: "#fff",
        borderRadius: 8,
        boxShadow: hovered ? "0 8px 32px rgba(10,22,40,0.14)" : "0 4px 20px rgba(10,22,40,0.08)",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        padding: "24px 24px 20px",
        cursor: bio ? "pointer" : "default",
        transition: "box-shadow 0.3s ease",
      }}
    >
      {/* Bio overlay */}
      {hovered && bio && (
        <>
          <div
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 2147483646,
              background: "rgba(10,22,40,0.5)",
              opacity: visible ? 1 : 0,
              transition: "opacity 1.4s ease",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "fixed",
              top: "80px",
              left: "50%",
              transform: visible ? "translateX(-50%) scale(1)" : "translateX(-50%) scale(0.97)",
              zIndex: 2147483647,
              background: "#fff",
              borderRadius: 8,
              maxWidth: 1000,
              width: "92vw",
              maxHeight: "42vh",
              overflowY: "auto",
              boxShadow: "0 24px 80px rgba(10,22,40,0.5)",
              opacity: visible ? 1 : 0,
              filter: visible ? "blur(0px)" : "blur(8px)",
              transition:
                "opacity 1.4s cubic-bezier(0.16,1,0.3,1), transform 1.4s cubic-bezier(0.16,1,0.3,1), filter 1.4s cubic-bezier(0.16,1,0.3,1)",
              pointerEvents: "auto",
            }}
          >
            {/* Modal header */}
            <div
              style={{
                background: "#0a1628",
                padding: "20px 24px",
                borderRadius: "8px 8px 0 0",
                display: "flex",
                alignItems: "center",
                gap: 16,
              }}
            >
              {/* Photos */}
              <div style={{ display: "flex", gap: 12, flexShrink: 0 }}>
                {photo && (
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                    <img
                      src={photo}
                      alt={photoAlt || name}
                      style={{
                        width: 64,
                        height: 64,
                        borderRadius: "50%",
                        objectFit: "cover",
                        border: "2px solid #C9A84C",
                      }}
                    />
                    {hasTwoPeople && (
                      <span
                        style={{ fontFamily: "'Raleway', sans-serif", fontSize: 10, color: "rgba(255,255,255,0.7)" }}
                      >
                        {name}
                      </span>
                    )}
                  </div>
                )}
                {hasTwoPeople && photo2 && (
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                    <img
                      src={photo2}
                      alt={photoAlt2 || name2}
                      style={{
                        width: 64,
                        height: 64,
                        borderRadius: "50%",
                        objectFit: "cover",
                        border: "2px solid #C9A84C",
                      }}
                    />
                    <span style={{ fontFamily: "'Raleway', sans-serif", fontSize: 10, color: "rgba(255,255,255,0.7)" }}>
                      {name2}
                    </span>
                  </div>
                )}
              </div>

              {/* Name / title */}
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: 18,
                    fontWeight: 700,
                    color: "#fff",
                    marginBottom: 3,
                  }}
                >
                  {hasTwoPeople ? `${name} & ${name2}` : name}
                </div>
                <div
                  style={{
                    fontFamily: "'Raleway', sans-serif",
                    fontSize: 11,
                    letterSpacing: "0.12em",
                    color: "#E8C97A",
                    textTransform: "uppercase",
                  }}
                >
                  {hasTwoPeople && title2 ? `${title} · ${title2}` : title}
                </div>
                <div
                  style={{
                    fontFamily: "'Raleway', sans-serif",
                    fontSize: 11,
                    color: "rgba(255,255,255,0.65)",
                    marginTop: 2,
                  }}
                >
                  {company}
                </div>
              </div>

              {logo && (
                <img
                  src={logo}
                  alt={logoAlt || company}
                  style={{ height: 40, width: "auto", objectFit: "contain", flexShrink: 0 }}
                />
              )}
            </div>

            {/* Modal body */}
            <div style={{ padding: "20px 24px" }}>
              <p
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: 14,
                  color: "#4a5568",
                  lineHeight: 1.75,
                  marginBottom: specialty ? 16 : 0,
                }}
              >
                {bio}
              </p>
              {specialty && (
                <div
                  style={{
                    padding: "12px 14px",
                    background: "#f7f4ef",
                    borderLeft: "3px solid #8B6914",
                    borderRadius: "0 4px 4px 0",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Raleway', sans-serif",
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "#8B6914",
                      marginBottom: 5,
                    }}
                  >
                    Specialties
                  </div>
                  <div style={{ fontFamily: "Georgia, serif", fontSize: 13, color: "#4a5568", lineHeight: 1.6 }}>
                    {specialty}
                  </div>
                </div>
              )}
            </div>
          </div>
        </>
      )}

      {/* Tile: logo */}
      {logo && (
        <img
          src={logo}
          alt={logoAlt || company}
          style={{ height: 88, width: "auto", objectFit: "contain", marginBottom: 16 }}
          loading="lazy"
        />
      )}

      {/* Tile: photo(s) */}
      {hasTwoPeople ? (
        <div style={{ display: "flex", justifyContent: "center", gap: 16, marginBottom: 12 }}>
          {photo && (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
              <img
                src={photo}
                alt={photoAlt || name}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: hovered ? "3px solid #C9A84C" : "2px solid #e0d8c8",
                  transform: hovered ? "scale(1.05)" : "scale(1)",
                  transition: "transform 0.3s ease, border-color 0.3s ease",
                }}
                loading="lazy"
              />
              <div style={{ fontFamily: "Georgia, serif", fontSize: 14, fontWeight: 700, color: "#0a1628" }}>
                {name}
              </div>
              <div style={{ fontFamily: "'Raleway', sans-serif", fontSize: 10, color: "#666" }}>{title}</div>
            </div>
          )}
          {photo2 && (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
              <img
                src={photo2}
                alt={photoAlt2 || name2}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: hovered ? "3px solid #C9A84C" : "2px solid #e0d8c8",
                  transform: hovered ? "scale(1.05)" : "scale(1)",
                  transition: "transform 0.3s ease, border-color 0.3s ease",
                }}
                loading="lazy"
              />
              <div style={{ fontFamily: "Georgia, serif", fontSize: 14, fontWeight: 700, color: "#0a1628" }}>
                {name2}
              </div>
              <div style={{ fontFamily: "'Raleway', sans-serif", fontSize: 10, color: "#666" }}>{title2}</div>
            </div>
          )}
        </div>
      ) : (
        photo && (
          <img
            src={photo}
            alt={photoAlt || name}
            style={{
              width: 112,
              height: 112,
              borderRadius: "50%",
              objectFit: "cover",
              border: hovered ? "3px solid #C9A84C" : "2px solid #e0d8c8",
              marginBottom: 12,
              transform: hovered ? "scale(1.05)" : "scale(1)",
              transition: "transform 0.3s ease, border-color 0.3s ease",
            }}
            loading="lazy"
          />
        )
      )}

      {/* Tile: name/title/company — only shown for single-person tiles */}
      {!hasTwoPeople && (
        <>
          <div
            style={{ fontFamily: "Georgia, serif", fontSize: 18, fontWeight: 700, color: "#0a1628", marginBottom: 4 }}
          >
            {name}
          </div>
          <div style={{ fontFamily: "'Raleway', sans-serif", fontSize: 11, color: "#666", marginBottom: 2 }}>
            {title}
          </div>
        </>
      )}

      <div
        style={{
          fontFamily: "'Raleway', sans-serif",
          fontSize: 11,
          fontWeight: 700,
          color: "#0a1628",
          marginBottom: 10,
        }}
      >
        {company}
      </div>

      {specialty && (
        <div
          style={{
            fontFamily: "Georgia, serif",
            fontSize: 13,
            color: "#6b7280",
            fontStyle: "italic",
            marginBottom: 8,
            lineHeight: 1.5,
          }}
        >
          {specialty}
        </div>
      )}

      {bio && (
        <div
          style={{
            fontFamily: "'Raleway', sans-serif",
            fontSize: 9,
            fontWeight: 700,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: hovered ? "#8B6914" : "#ccc",
            transition: "color 0.3s ease",
            marginTop: 4,
          }}
        >
          {hovered ? "Click to close ✕" : "Click for Bio"}
        </div>
      )}

      {/* Contact section */}
      <div
        onClick={(e) => e.stopPropagation()}
        onMouseEnter={(e) => {
          e.stopPropagation();
          handleLeave();
        }}
        onMouseLeave={(e) => {
          e.stopPropagation();
        }}
        style={{
          marginTop: "auto",
          paddingTop: 16,
          borderTop: "1px solid #e0d8c8",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 6,
          alignItems: "center",
        }}
      >
        {phone && (
          <a
            href={`tel:${phone.replace(/\D/g, "")}`}
            onClick={(e) => e.stopPropagation()}
            style={{ fontSize: 13, color: "#1a5fa8", textDecoration: "none", fontWeight: 600 }}
          >
            {phone}
          </a>
        )}
        {phone2 && (
          <a
            href={`tel:${phone2.replace(/\D/g, "")}`}
            onClick={(e) => e.stopPropagation()}
            style={{ fontSize: 13, color: "#1a5fa8", textDecoration: "none", fontWeight: 600 }}
          >
            {phone2}
          </a>
        )}
        {email && (
          <a
            href={`mailto:${email}`}
            onClick={(e) => e.stopPropagation()}
            style={{ fontSize: 12, color: "#8B6914", textDecoration: "none" }}
          >
            {email}
          </a>
        )}
        {email2 && (
          <a
            href={`mailto:${email2}`}
            onClick={(e) => e.stopPropagation()}
            style={{ fontSize: 12, color: "#8B6914", textDecoration: "none" }}
          >
            {email2}
          </a>
        )}
        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          style={{
            marginTop: 8,
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            fontFamily: "'Raleway', sans-serif",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#8B6914",
            textDecoration: "none",
            border: "1.5px solid #C9A84C",
            borderRadius: 4,
            padding: "8px 16px",
          }}
        >
          Learn More
          <svg
            viewBox="0 0 24 24"
            width="12"
            height="12"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </a>
      </div>
    </div>
  );
}
