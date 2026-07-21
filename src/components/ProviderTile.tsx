import { useState, useRef, useEffect } from "react";

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
  emailHref?: string;
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
  emailHref,
  bio,
  specialty,
}: ProviderTileProps) {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  const handleEnter = () => {
    if (!bio) return;
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setHovered(true);
    setTimeout(() => setVisible(true), 10);
  };
  const handleLeave = () => {
    if (!bio) return;
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => {
      setVisible(false);
      closeTimer.current = setTimeout(() => setHovered(false), 400);
    }, 150);
  };

  // Robust dismissal: while hovered, watch the document pointer and close
  // as soon as it leaves BOTH the tile's bounding rect AND the overlay
  // panel's own bounding rect. The panel is fixed-positioned elsewhere on
  // screen (not nested inside the tile visually), so checking only the
  // tile's rect closed the panel the moment the pointer moved toward the
  // panel itself — e.g. to reach its internal scrollbar.
  useEffect(() => {
    if (!hovered || !bio) return;
    const onMove = (e: MouseEvent) => {
      const el = wrapperRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const insideTile = e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom;

      let insideOverlay = false;
      const overlayEl = overlayRef.current;
      if (overlayEl) {
        const or = overlayEl.getBoundingClientRect();
        insideOverlay = e.clientX >= or.left && e.clientX <= or.right && e.clientY >= or.top && e.clientY <= or.bottom;
      }

      if (insideTile || insideOverlay) {
        // Pointer is safely inside one of the two zones — cancel any close
        // timer that was armed while briefly passing through the gap
        // between them, so it doesn't fire late and close the panel out
        // from under the user after they've already reached it.
        if (closeTimer.current) {
          clearTimeout(closeTimer.current);
          closeTimer.current = null;
        }
      } else {
        handleLeave();
      }
    };
    const onLeaveWindow = () => handleLeave();
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeaveWindow);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeaveWindow);
    };
  }, [hovered, bio]);

  const hasTwoPeople = !!(photo2 && name2);

  return (
    <div
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
            ref={overlayRef}
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
                background: "#280a0c",
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
                        border: "2px solid #c3525c",
                      }}
                      sizes="100vw"
                      decoding="async"
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
                        border: "2px solid #c3525c",
                      }}
                      sizes="100vw"
                      decoding="async"
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
                  {name}
                </div>
                {name2 && (
                  <div
                    style={{
                      fontFamily: "Georgia, serif",
                      fontSize: 18,
                      fontWeight: 700,
                      color: "#fff",
                      marginBottom: 3,
                    }}
                  >
                    {name2}
                  </div>
                )}
                <div
                  style={{
                    fontFamily: "'Raleway', sans-serif",
                    fontSize: 11,
                    letterSpacing: "0.12em",
                    color: "#e0828a",
                    textTransform: "uppercase",
                  }}
                >
                  {title}
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
                  sizes="100vw"
                  decoding="async"
                />
              )}
            </div>

            {/* Modal body */}
            <div style={{ padding: "20px 24px" }}>
              <p
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: 14,
                  color: "#5e5954",
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
                    borderLeft: "3px solid #7f2028",
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
                      color: "#7f2028",
                      marginBottom: 5,
                    }}
                  >
                    Specialties
                  </div>
                  <div style={{ fontFamily: "Georgia, serif", fontSize: 13, color: "#5e5954", lineHeight: 1.6 }}>
                    {specialty}
                  </div>
                </div>
              )}
            </div>
          </div>
        </>
      )}

      {/* Top portion — hover trigger scoped to here only, not the contact section below */}
      <div
        ref={wrapperRef}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        className="marquee-hover"
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          cursor: bio ? "pointer" : "default",
        }}
      >
        {/* Tile: logo */}
        {logo && (
          <div
            style={{
              minHeight: 80,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 16,
              width: "100%",
            }}
          >
            <img
              src={logo}
              alt={logoAlt || company}
              style={{ height: 88, width: "auto", objectFit: "contain" }}
              loading="lazy"
              sizes="100vw"
              decoding="async"
            />
          </div>
        )}

        {/* Tile: photo(s) */}
        {hasTwoPeople ? (
          <div
            style={{
              minHeight: 200,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 12,
              width: "100%",
            }}
          >
            <div style={{ display: "flex", justifyContent: "center", gap: 16 }}>
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
                      border: hovered ? "3px solid #c3525c" : "2px solid #dfc9cb",
                      transform: hovered ? "scale(1.05)" : "scale(1)",
                      transition: "transform 0.3s ease, border-color 0.3s ease",
                    }}
                    loading="lazy"
                    sizes="100vw"
                    decoding="async"
                  />
                  <div style={{ fontFamily: "Georgia, serif", fontSize: 14, fontWeight: 700, color: "#280a0c" }}>
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
                      border: hovered ? "3px solid #c3525c" : "2px solid #dfc9cb",
                      transform: hovered ? "scale(1.05)" : "scale(1)",
                      transition: "transform 0.3s ease, border-color 0.3s ease",
                    }}
                    loading="lazy"
                    sizes="100vw"
                    decoding="async"
                  />
                  <div style={{ fontFamily: "Georgia, serif", fontSize: 14, fontWeight: 700, color: "#280a0c" }}>
                    {name2}
                  </div>
                  <div style={{ fontFamily: "'Raleway', sans-serif", fontSize: 10, color: "#666" }}>{title2}</div>
                </div>
              )}
            </div>
          </div>
        ) : (
          photo && (
            <div
              style={{
                height: 120,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 12,
                width: "100%",
              }}
            >
              <img
                src={photo}
                alt={photoAlt || name}
                style={{
                  width: 112,
                  height: 112,
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: hovered ? "3px solid #c3525c" : "2px solid #dfc9cb",
                  transform: hovered ? "scale(1.05)" : "scale(1)",
                  transition: "transform 0.3s ease, border-color 0.3s ease",
                }}
                loading="lazy"
                sizes="100vw"
                decoding="async"
              />
            </div>
          )
        )}

        {/* Tile: name/title/company — only shown for single-person tiles */}
        {!hasTwoPeople && (
          <>
            <div
              style={{
                minHeight: 60,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 2,
                width: "100%",
              }}
            >
              <div style={{ fontFamily: "Georgia, serif", fontSize: 18, fontWeight: 700, color: "#280a0c" }}>
                {name}
              </div>
              {name2 && (
                <div
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: 18,
                    fontWeight: 700,
                    color: "#280a0c",
                    marginBottom: 4,
                  }}
                >
                  {name2}
                </div>
              )}
            </div>
            <div
              style={{
                minHeight: 48,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 2,
                width: "100%",
              }}
            >
              <div style={{ fontFamily: "'Raleway', sans-serif", fontSize: 11, color: "#666" }}>{title}</div>
            </div>
          </>
        )}

        <div
          style={{
            minHeight: 32,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 10,
            width: "100%",
          }}
        >
          <div
            style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: 11,
              fontWeight: 700,
              color: "#280a0c",
            }}
          >
            {company}
          </div>
        </div>

        {specialty && (
          <div
            style={{
              minHeight: 100,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 8,
              width: "100%",
            }}
          >
            <div
              style={{
                fontFamily: "Georgia, serif",
                fontSize: 13,
                color: "#806b6d",
                fontStyle: "italic",
                lineHeight: 1.5,
              }}
            >
              {specialty}
            </div>
          </div>
        )}
      </div>

      {/* Contact section */}
      <div
        style={{
          marginTop: "auto",
          paddingTop: 16,
          borderTop: "1px solid #dfc9cb",
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
            style={{ fontSize: 13, color: "#a0222c", textDecoration: "none", fontWeight: 600 }}
          >
            {phone}
          </a>
        )}
        {phone2 && (
          <a
            href={`tel:${phone2.replace(/\D/g, "")}`}
            onClick={(e) => e.stopPropagation()}
            style={{ fontSize: 13, color: "#a0222c", textDecoration: "none", fontWeight: 600 }}
          >
            {phone2}
          </a>
        )}
        {email && (
          <a
            href={emailHref || `mailto:${email}`}
            onClick={(e) => e.stopPropagation()}
            style={{ fontSize: 12, color: "#7f2028", textDecoration: "none" }}
          >
            {email}
          </a>
        )}
        {email2 && (
          <a
            href={`mailto:${email2}`}
            onClick={(e) => e.stopPropagation()}
            style={{ fontSize: 12, color: "#7f2028", textDecoration: "none" }}
          >
            {email2}
          </a>
        )}
        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          style={{ fontSize: 12, color: "#7f2028", textDecoration: "none" }}
        >
          {website.replace(/^https?:\/\//, "")}
        </a>
        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="gold-cta"
          style={{ marginTop: 8 }}
        >
          Learn More
          <span className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1">→</span>
        </a>
      </div>
    </div>
  );
}
