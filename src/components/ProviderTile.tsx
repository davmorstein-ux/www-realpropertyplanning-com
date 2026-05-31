import { useState, useRef } from "react";
import { createPortal } from "react-dom";

interface ProviderTileProps {
  // Identity
  name: string;
  title: string;
  company: string;
  photo?: string;
  photoAlt?: string;
  logo?: string;
  logoAlt?: string;
  // Contact — shown statically at bottom, NOT in modal
  phone?: string;
  phoneHref?: string;
  phone2?: string;
  phoneHref2?: string;
  email?: string;
  email2?: string;
  website: string;
  // Bio modal
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
        {/* Header */}
        <div style={{ background: "#0a1628", padding: "20px 24px", borderRadius: "8px 8px 0 0", display: "flex", alignItems: "center", gap: 16 }}>
          {photo && <img src={photo} alt={photoAlt || name} style={{ width: 64, height: 64, borderRadius: "50%", objectFit: "cover", border: "2px solid #C9A84C", flexShrink: 0 }} />}
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: "Georgia, serif", fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 3 }}>{name}</div>
            <div style={{ fontFamily: "'Raleway', sans-serif", fontSize: 11, letterSpacing: "0.12em", color: "#E8C97A", textTransform: "uppercase" }}>{title}</div>
            <div style={{ fontFamily: "'Raleway', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.65)", marginTop: 2 }}>{company}</div>
          </div>
          {logo && <img src={logo} alt={logoAlt || company} style={{ height: 40, width: "auto", objectFit: "contain", flexShrink: 0 }} />}
        </div>
        {/* Body */}
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
      <style>{`
        .pvt-upper { transition: background 0.3s ease; border-radius: 8px 8px 0 0; cursor: ${bio ? "pointer" : "default"}; }
        .pvt-upper:hover { background: rgba(10,22,40,0.04); }
        .pvt-photo { transition: transform 0.3s ease, border-color 0.3s ease; }
        .pvt-upper:hover .pvt-photo { transform: scale(1.05); border-color: #C9A84C !important; }
      `}</style>

      <div className="interior-tile tile-white block h-full">
        <div className="tile-white__inner h-full">
          <div className="tile-white__face h-full">
            <div className="flex h-full flex-col">

              {/* UPPER — hoverable, shows bio */}
              <div
                className="pvt-upper flex flex-col items-center text-center px-6 pt-6 pb-4 flex-1"
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
              >
                {logo && (
                  <img src={logo} alt={logoAlt || company} className="h-20 md:h-24 w-auto object-contain mb-4" loading="lazy" />
                )}
                {photo && (
                  <img src={photo} alt={photoAlt || name} className="pvt-photo w-28 h-28 rounded-full object-cover border-2 border-border shadow-sm mb-3" loading="lazy" />
                )}
                <h3 className="font-serif text-xl text-navy font-semibold leading-snug mb-1">{name}</h3>
                <p className="text-foreground text-sm mb-1">{title}</p>
                <p className="text-foreground text-sm font-semibold mb-3">{company}</p>
                {specialty && <p className="text-muted-foreground text-sm italic mb-2">{specialty}</p>}

                {bio && (
                  <p className="text-muted-foreground text-xs mt-1" style={{ fontFamily: "'Raleway', sans-serif", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    Hover for bio ↑
                  </p>
                )}
              </div>

              {/* LOWER — static contact info, not hoverable */}
              <div className="px-6 pb-6 pt-2 border-t border-border/30">
                <div className="space-y-1 text-sm text-center mb-4">
                  {phone && (
                    <div>
                      <a href={phoneHref || `tel:${phone.replace(/\D/g, "")}`} onClick={stopProp} className="text-accent hover:text-gold underline-offset-4 hover:underline font-medium">
                        {phone}
                      </a>
                    </div>
                  )}
                  {phone2 && (
                    <div>
                      <a href={phoneHref2 || `tel:${phone2.replace(/\D/g, "")}`} onClick={stopProp} className="text-accent hover:text-gold underline-offset-4 hover:underline font-medium">
                        {phone2}
                      </a>
                    </div>
                  )}
                  {email && (
                    <div>
                      <a href={`mailto:${email}`} onClick={stopProp} className="text-accent hover:text-gold underline-offset-4 hover:underline break-all">
                        {email}
                      </a>
                    </div>
                  )}
                  {email2 && (
                    <div>
                      <a href={`mailto:${email2}`} onClick={stopProp} className="text-accent hover:text-gold underline-offset-4 hover:underline break-all">
                        {email2}
                      </a>
                    </div>
                  )}
                </div>
                <div className="text-center">
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
