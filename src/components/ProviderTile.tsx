import { useState, useRef } from "react";
import { createPortal } from "react-dom";

interface ProviderTileProps {
  name: string;
  title: string;
  company: string;
  photo?: string;
  photoAlt?: string;
  logo?: string;
  logoAlt?: string;
  phone?: string;
  phoneHref?: string;
  phone2?: string;
  phoneHref2?: string;
  email?: string;
  email2?: string;
  website: string;
  bio?: string;
  specialty?: string;
}

export default function ProviderTile({
  name, title, company, photo, photoAlt, logo, logoAlt,
  phone, phoneHref, phone2, phoneHref2, email, email2, website,
  bio, specialty,
}: ProviderTileProps) {
  const [hovered, setHovered] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = () => {
    if (!bio) return;
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setHovered(true);
    setTimeout(() => setModalVisible(true), 10);
  };

  const handleLeave = () => {
    if (!bio) return;
    setModalVisible(false);
    closeTimer.current = setTimeout(() => setHovered(false), 1600);
  };

  const stopProp = (e: React.MouseEvent) => e.stopPropagation();

  const modal = hovered && bio ? createPortal(
    <div style={{
      position: "fixed", inset: 0, zIndex: 99999,
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: 24, pointerEvents: "none",
      opacity: modalVisible ? 1 : 0,
      transform: modalVisible ? "translateY(0) scale(1)" : "translateY(12px) scale(0.97)",
      filter: modalVisible ? "blur(0px)" : "blur(8px)",
      transition: "opacity 1.4s cubic-bezier(0.16,1,0.3,1), transform 1.4s cubic-bezier(0.16,1,0.3,1), filter 1.4s cubic-bezier(0.16,1,0.3,1)",
    }}>
      <div style={{
        background: "#fff", borderRadius: 8,
        maxWidth: 580, width: "100%",
        boxShadow: "0 24px 80px rgba(10,22,40,0.5)",
        pointerEvents: "auto",
      }}>
        <div style={{ background: "#0a1628", padding: "20px 24px", borderRadius: "8px 8px 0 0", display: "flex", alignItems: "center", gap: 16 }}>
          {photo && <img src={photo} alt={photoAlt || name} style={{ width: 64, height: 64, borderRadius: "50%", objectFit: "cover", border: "2px solid #C9A84C", flexShrink: 0 }} />}
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: "Georgia, serif", fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 3 }}>{name}</div>
            <div style={{ fontFamily: "'Raleway', sans-serif", fontSize: 11, letterSpacing: "0.12em", color: "#E8C97A", textTransform: "uppercase" }}>{title}</div>
            <div style={{ fontFamily: "'Raleway', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.65)", marginTop: 2 }}>{company}</div>
          </div>
          {logo && <img src={logo} alt={logoAlt || company} style={{ height: 40, width: "auto", objectFit: "contain", flexShrink: 0 }} />}
        </div>
        <div style={{ padding: "20px 24px", overflowY: "auto", maxHeight: "50vh" }}>
          <p style={{ fontFamily: "Georgia, serif", fontSize: 14, color: "#4a5568", lineHeight: 1.75, marginBottom: specialty ? 16 : 0 }}>{bio}</p>
          {specialty && (
            <div style={{ padding: "12px 14px", background: "#f7f4ef", borderLeft: "3px solid #8B6914", borderRadius: "0 4px 4px 0" }}>
              <div style={{ fontFamily: "'Raleway', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#8B6914", marginBottom: 5 }}>Specialties</div>
              <div style={{ fontFamily: "Georgia, serif", fontSize: 13, color: "#4a5568", lineHeight: 1.6 }}>{specialty}</div>
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  ) : null;

  return (
    <>
      <div style={{ background:"#fff", borderRadius:8, boxShadow:"0 4px 20px rgba(10,22,40,0.08)", height:"100%", display:"block" }}>
        <div className="tile-white__inner h-full">
          <div className="tile-white__face h-full">
            <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>

              {/* UPPER — entire area is hoverable */}
              <div
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "24px 24px 16px",
                  cursor: bio ? "pointer" : "default",
                  background: hovered ? "rgba(255,0,0,0.3)" : "transparent",
                  transition: "background 0.3s ease",
                  borderRadius: "8px 8px 0 0",
                }}
              >
                {logo && (
                  <img src={logo} alt={logoAlt || company} style={{ height: 88, width: "auto", objectFit: "contain", marginBottom: 16 }} loading="lazy" />
                )}
                {photo && (
                  <img
                    src={photo}
                    alt={photoAlt || name}
                    style={{
                      width: 112, height: 112, borderRadius: "50%", objectFit: "cover",
                      border: hovered ? "3px solid #C9A84C" : "2px solid #e0d8c8",
                      marginBottom: 12,
                      transform: hovered ? "scale(1.05)" : "scale(1)",
                      transition: "transform 0.3s ease, border 0.3s ease",
                    }}
                    loading="lazy"
                  />
                )}
                <div style={{ fontFamily: "Georgia, serif", fontSize: 18, fontWeight: 700, color: "#0a1628", marginBottom: 4 }}>{name}</div>
                <div style={{ fontFamily: "'Raleway', sans-serif", fontSize: 11, color: "#666", marginBottom: 2 }}>{title}</div>
                <div style={{ fontFamily: "'Raleway', sans-serif", fontSize: 11, fontWeight: 700, color: "#0a1628", marginBottom: 10 }}>{company}</div>
                {specialty && (
                  <div style={{ fontFamily: "Georgia, serif", fontSize: 13, color: "#6b7280", fontStyle: "italic", marginBottom: 8, lineHeight: 1.5 }}>{specialty}</div>
                )}
                {bio && (
                  <div style={{
                    fontFamily: "'Raleway', sans-serif", fontSize: 9, fontWeight: 700,
                    letterSpacing: "0.16em", textTransform: "uppercase",
                    color: hovered ? "#8B6914" : "#aaa",
                    transition: "color 0.3s ease", marginTop: 4,
                  }}>
                    {hovered ? "Viewing Bio ↑" : "Hover for Bio ↑"}
                  </div>
                )}
              </div>

              {/* LOWER — static, not hoverable */}
              <div style={{
                padding: "12px 24px 24px",
                borderTop: "1px solid #e0d8c8",
              }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 6, textAlign: "center", marginBottom: 14 }}>
                  {phone && (
                    <a href={phoneHref || `tel:${phone.replace(/\D/g, "")}`} onClick={stopProp}
                      style={{ fontSize: 13, color: "#1a5fa8", textDecoration: "none", fontWeight: 600 }}>
                      {phone}
                    </a>
                  )}
                  {phone2 && (
                    <a href={phoneHref2 || `tel:${phone2.replace(/\D/g, "")}`} onClick={stopProp}
                      style={{ fontSize: 13, color: "#1a5fa8", textDecoration: "none", fontWeight: 600 }}>
                      {phone2}
                    </a>
                  )}
                  {email && (
                    <a href={`mailto:${email}`} onClick={stopProp}
                      style={{ fontSize: 12, color: "#8B6914", textDecoration: "none" }}>
                      {email}
                    </a>
                  )}
                  {email2 && (
                    <a href={`mailto:${email2}`} onClick={stopProp}
                      style={{ fontSize: 12, color: "#8B6914", textDecoration: "none" }}>
                      {email2}
                    </a>
                  )}
                </div>
                <div style={{ textAlign: "center" }}>
                  <a href={website} target="_blank" rel="noopener noreferrer" onClick={stopProp} className="gold-cta">
                    Learn More
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      {modal}
    </>
  );
}
