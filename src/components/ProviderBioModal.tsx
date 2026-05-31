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

export default function ProviderBioModal(props: ProviderBioModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <style>{`
        .pbm-trigger { position: relative; display: inline-block; cursor: pointer; }
        .pbm-overlay {
          position: absolute; inset: 0; border-radius: 50%;
          background: rgba(10,22,40,0.7);
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          opacity: 0; transition: opacity 0.3s ease; pointer-events: none; gap: 2px;
        }
        .pbm-trigger:hover .pbm-overlay { opacity: 1; }
        .pbm-overlay span { color: #E8C97A; font-family: 'Raleway', sans-serif; font-size: 9px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; text-align: center; line-height: 1.3; }
      `}</style>

      {/* Clickable headshot */}
      <div className="pbm-trigger" onClick={() => setOpen(true)}>
        {props.photo ? (
          <img
            src={props.photo}
            alt={props.alt || props.name}
            style={{
              width: 112,
              height: 112,
              borderRadius: "50%",
              objectFit: "cover",
              border: "2px solid #e0d8c8",
              display: "block",
            }}
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
              {props.name
                .split(" ")
                .map((n: string) => n[0])
                .slice(0, 2)
                .join("")}
            </span>
          </div>
        )}
        <div className="pbm-overlay">
          <span>👤</span>
          <span>
            View
            <br />
            Profile
          </span>
        </div>
      </div>

      {/* Modal */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99999,
            background: "rgba(10,22,40,0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
            backdropFilter: "blur(4px)",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#fff",
              borderRadius: 8,
              maxWidth: 620,
              width: "100%",
              maxHeight: "90vh",
              overflowY: "auto",
              boxShadow: "0 24px 80px rgba(10,22,40,0.5)",
            }}
          >
            {/* Header */}
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
              {props.photo && (
                <img
                  src={props.photo}
                  alt={props.alt || props.name}
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
                  {props.name}
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
                  {props.title}
                </div>
                <div
                  style={{
                    fontFamily: "'Raleway', sans-serif",
                    fontSize: 11,
                    color: "rgba(255,255,255,0.65)",
                    marginTop: 2,
                  }}
                >
                  {props.company}
                </div>
              </div>
              {props.logo && (
                <img
                  src={props.logo}
                  alt={props.logoAlt || props.company}
                  style={{ height: 48, width: "auto", objectFit: "contain", flexShrink: 0 }}
                />
              )}
              <button
                onClick={() => setOpen(false)}
                style={{
                  position: "absolute",
                  top: 12,
                  right: 14,
                  background: "none",
                  border: "none",
                  color: "rgba(255,255,255,0.7)",
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

            {/* Body */}
            <div style={{ padding: 28 }}>
              <p
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: 15,
                  color: "#4a5568",
                  lineHeight: 1.8,
                  marginBottom: 24,
                }}
              >
                {props.bio}
              </p>

              {props.specialty && (
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
                    {props.specialty}
                  </div>
                </div>
              )}

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
                {props.address && (
                  <div style={{ fontFamily: "Georgia, serif", fontSize: 14, color: "#4a5568" }}>📍 {props.address}</div>
                )}
                {props.phone && (
                  <a
                    href={`tel:${props.phone.replace(/\D/g, "")}`}
                    style={{
                      fontFamily: "Georgia, serif",
                      fontSize: 14,
                      color: "#0a1628",
                      textDecoration: "none",
                      fontWeight: 700,
                    }}
                  >
                    📞 {props.phone}
                  </a>
                )}
                {props.email && (
                  <a
                    href={`mailto:${props.email}`}
                    style={{ fontFamily: "Georgia, serif", fontSize: 14, color: "#8B6914", textDecoration: "none" }}
                  >
                    ✉️ {props.email}
                  </a>
                )}
                {props.website && (
                  <a
                    href={props.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontFamily: "Georgia, serif", fontSize: 14, color: "#8B6914", textDecoration: "none" }}
                  >
                    🌐 {props.website.replace(/^https?:\/\//, "")}
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
