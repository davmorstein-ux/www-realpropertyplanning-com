import { useState } from "react";

interface ProviderBioModalProps {
  name: string;
  title: string;
  company: string;
  photo?: string;
  alt?: string;
  logo?: string;
  logoAlt?: string;
  phone?: string;
  email?: string;
  website?: string;
  address?: string;
  bio: string;
  specialty?: string;
}

export default function ProviderBioModal({
  name,
  title,
  company,
  photo,
  alt,
  logo,
  logoAlt,
  phone,
  email,
  website,
  address,
  bio,
  specialty,
}: ProviderBioModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Clickable headshot */}
      <div
        className="provider-bio-trigger"
        style={{ position: "relative", display: "inline-block", cursor: "pointer" }}
        onClick={() => setOpen(true)}
        title={`View ${name}'s profile`}
      >
        {photo ? (
          <img
            src={photo}
            alt={alt || name}
            style={{
              width: 112,
              height: 112,
              borderRadius: "50%",
              objectFit: "cover",
              border: "2px solid #e0d8c8",
              display: "block",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1.05)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1)")}
          />
        ) : (
          <div
            style={{
              width: 112,
              height: 112,
              borderRadius: "50%",
              background: "#0a1628",
              border: "2px solid #e0d8c8",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ fontFamily: "Georgia, serif", fontSize: 28, color: "#fff", fontWeight: 700 }}>
              {name
                .split(" ")
                .map((n) => n[0])
                .slice(0, 2)
                .join("")}
            </span>
          </div>
        )}

        {/* Hover overlay on headshot */}
        <div
          className="provider-overlay"
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            background: "rgba(10,22,40,0.65)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            opacity: 0,
            transition: "opacity 0.3s ease",
            gap: 2,
            pointerEvents: "none",
          }}
        >
          <span style={{ fontSize: 18, color: "#E8C97A" }}>👤</span>
          <span
            style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: 9,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#E8C97A",
              textAlign: "center",
              lineHeight: 1.3,
            }}
          >
            View
            <br />
            Profile
          </span>
        </div>
        <style>{`.provider-bio-trigger:hover .provider-overlay { opacity: 1 !important; }`}</style>
      </div>

      {/* Modal overlay */}
      {open && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(10,22,40,0.75)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
            backdropFilter: "blur(4px)",
          }}
          onClick={() => setOpen(false)}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: 8,
              maxWidth: 620,
              width: "100%",
              maxHeight: "90vh",
              overflowY: "auto",
              boxShadow: "0 24px 80px rgba(10,22,40,0.4)",
              animation: "modalIn 0.3s cubic-bezier(0.16,1,0.3,1)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <style>{`
              @keyframes modalIn {
                from { opacity: 0; transform: translateY(16px); }
                to { opacity: 1; transform: translateY(0); }
              }
            `}</style>

            {/* Modal header */}
            <div
              style={{
                background: "#0a1628",
                padding: "24px 28px",
                borderRadius: "8px 8px 0 0",
                display: "flex",
                alignItems: "center",
                gap: 20,
                position: "relative",
              }}
            >
              {photo && (
                <img
                  src={photo}
                  alt={alt || name}
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "2px solid #C9A84C",
                    flexShrink: 0,
                  }}
                />
              )}
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: 20,
                    fontWeight: 700,
                    color: "#fff",
                    marginBottom: 4,
                  }}
                >
                  {name}
                </div>
                <div
                  style={{
                    fontFamily: "'Raleway', sans-serif",
                    fontSize: 12,
                    fontWeight: 400,
                    letterSpacing: "0.1em",
                    color: "#E8C97A",
                    textTransform: "uppercase",
                  }}
                >
                  {title}
                </div>
                <div
                  style={{
                    fontFamily: "'Raleway', sans-serif",
                    fontSize: 12,
                    color: "rgba(255,255,255,0.7)",
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
                  style={{ height: 48, width: "auto", objectFit: "contain", flexShrink: 0 }}
                />
              )}
              {/* Close button */}
              <button
                onClick={() => setOpen(false)}
                style={{
                  position: "absolute",
                  top: 12,
                  right: 14,
                  background: "none",
                  border: "none",
                  color: "rgba(255,255,255,0.6)",
                  fontSize: 22,
                  cursor: "pointer",
                  lineHeight: 1,
                  padding: "4px 8px",
                }}
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            {/* Modal body */}
            <div style={{ padding: "28px" }}>
              {/* Bio */}
              <p
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: 15,
                  color: "#4a5568",
                  lineHeight: 1.8,
                  marginBottom: 24,
                }}
              >
                {bio}
              </p>

              {/* Specialty */}
              {specialty && (
                <div
                  style={{
                    marginBottom: 24,
                    padding: "14px 16px",
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
                      marginBottom: 6,
                    }}
                  >
                    Specialties
                  </div>
                  <div style={{ fontFamily: "Georgia, serif", fontSize: 14, color: "#4a5568", lineHeight: 1.6 }}>
                    {specialty}
                  </div>
                </div>
              )}

              {/* Contact info */}
              <div
                style={{
                  borderTop: "1px solid #e0d8c8",
                  paddingTop: 20,
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
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
                    marginBottom: 4,
                  }}
                >
                  Contact
                </div>
                {address && (
                  <div style={{ fontFamily: "Georgia, serif", fontSize: 14, color: "#4a5568" }}>📍 {address}</div>
                )}
                {phone && (
                  <a
                    href={`tel:${phone.replace(/\D/g, "")}`}
                    style={{
                      fontFamily: "Georgia, serif",
                      fontSize: 14,
                      color: "#0a1628",
                      textDecoration: "none",
                      fontWeight: 700,
                    }}
                  >
                    📞 {phone}
                  </a>
                )}
                {email && (
                  <a
                    href={`mailto:${email}`}
                    style={{ fontFamily: "Georgia, serif", fontSize: 14, color: "#8B6914", textDecoration: "none" }}
                  >
                    ✉️ {email}
                  </a>
                )}
                {website && (
                  <a
                    href={website}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontFamily: "Georgia, serif", fontSize: 14, color: "#8B6914", textDecoration: "none" }}
                  >
                    🌐 {website.replace(/^https?:\/\//, "")}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
