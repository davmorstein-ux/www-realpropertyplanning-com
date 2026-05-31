import { useState, useRef } from "react";
import React from "react";
import { createPortal } from "react-dom";

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
  const [visible, setVisible] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
    setTimeout(() => setVisible(true), 20); // tiny delay lets CSS transition fire
  };

  const handleLeave = () => {
    setVisible(false);
    closeTimer.current = setTimeout(() => setOpen(false), 1600); // wait for fade out
  };

  const modal = open
    ? createPortal(
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
            pointerEvents: "none",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0) scale(1)" : "translateY(12px) scale(0.97)",
            filter: visible ? "blur(0px)" : "blur(8px)",
            transition:
              "opacity 1.4s cubic-bezier(0.16,1,0.3,1), transform 1.4s cubic-bezier(0.16,1,0.3,1), filter 1.4s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: 8,
              maxWidth: 580,
              width: "100%",
              maxHeight: "80vh",
              overflowY: "auto",
              boxShadow: "0 24px 80px rgba(10,22,40,0.5)",
              pointerEvents: "auto",
            }}
          >
            {/* Header */}
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
              {props.photo && (
                <img
                  src={props.photo}
                  alt={props.alt || props.name}
                  style={{
                    width: 64,
                    height: 64,
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
                    fontSize: 18,
                    fontWeight: 700,
                    color: "#fff",
                    marginBottom: 3,
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
                  style={{ height: 40, width: "auto", objectFit: "contain", flexShrink: 0 }}
                />
              )}
            </div>

            {/* Body */}
            <div style={{ padding: "20px 24px" }}>
              <p
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: 14,
                  color: "#4a5568",
                  lineHeight: 1.75,
                  marginBottom: 16,
                }}
              >
                {props.bio}
              </p>

              {props.specialty && (
                <div
                  style={{
                    marginBottom: 16,
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
                    {props.specialty}
                  </div>
                </div>
              )}

              <div
                style={{
                  borderTop: "1px solid #e0d8c8",
                  paddingTop: 16,
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
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
                    marginBottom: 2,
                  }}
                >
                  Contact
                </div>
                {props.address && (
                  <div style={{ fontFamily: "Georgia, serif", fontSize: 13, color: "#4a5568" }}>📍 {props.address}</div>
                )}
                {props.phone && (
                  <a
                    href={`tel:${props.phone.replace(/\D/g, "")}`}
                    style={{
                      fontFamily: "Georgia, serif",
                      fontSize: 13,
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
                    style={{ fontFamily: "Georgia, serif", fontSize: 13, color: "#8B6914", textDecoration: "none" }}
                  >
                    ✉️ {props.email}
                  </a>
                )}
                {props.website && (
                  <a
                    href={props.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontFamily: "Georgia, serif", fontSize: 13, color: "#8B6914", textDecoration: "none" }}
                  >
                    🌐 {props.website.replace(/^https?:\/\//, "")}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>,
        document.body,
      )
    : null;

  return (
    <>
      {/* Headshot — hover opens bio, mouse leave closes */}
      <div
        style={{ position: "relative", display: "inline-block", cursor: "pointer" }}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        {props.photo ? (
          <img
            src={props.photo}
            alt={props.alt || props.name}
            style={{
              width: 112,
              height: 112,
              borderRadius: "50%",
              objectFit: "cover",
              border: open ? "3px solid #C9A84C" : "2px solid #e0d8c8",
              display: "block",
              transition: "border 0.2s ease",
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

        {/* Subtle gold ring on hover */}
        {open && (
          <div
            style={{
              position: "absolute",
              inset: -3,
              borderRadius: "50%",
              border: "2px solid #C9A84C",
              pointerEvents: "none",
            }}
          />
        )}
      </div>

      {modal}
    </>
  );
}
