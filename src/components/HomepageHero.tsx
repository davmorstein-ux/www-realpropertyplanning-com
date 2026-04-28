import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

/**
 * Homepage hero — floating island header + full-viewport Pine Ridge photo + trust bar.
 * This component is rendered on `/` only (see src/pages/Index.tsx). The site-wide
 * <Header /> is intentionally still rendered above it; this floating header sits on
 * top of the hero photo as a homepage-only visual treatment.
 */
const NAV = [
  { label: "Home", href: "/" },
  { label: "Probate & Estate", href: "/probate-estate-sales" },
  { label: "Senior Transitions", href: "/senior-transitions" },
  { label: "Downsizing", href: "/sell-house-fund-senior-living" },
  { label: "Property Valuation", href: "/why-valuation-matters" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const HomepageHero = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth < 769 : false
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 769);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const id = "rpp-preview-fonts";
    if (!document.getElementById(id)) {
      const link = document.createElement("link");
      link.id = id;
      link.rel = "stylesheet";
      link.href =
        "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800&family=DM+Sans:wght@400;600;700&display=swap";
      document.head.appendChild(link);
    }
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const fontBody = { fontFamily: "'DM Sans', system-ui, sans-serif" };
  const fontHead = { fontFamily: "'Barlow Condensed', 'DM Sans', sans-serif" };

  return (
    <div style={{ ...fontBody, background: "#0b1220", color: "#fff" }}>
      {/* ===== Floating Header Island (homepage-only) ===== */}
      <header
        style={{
          position: "fixed",
          top: 16,
          left: "50%",
          transform: "translateX(-50%)",
          width: "min(1280px, calc(100% - 48px))",
          zIndex: 50,
          borderRadius: 14,
          padding: "14px 24px",
          backgroundColor: scrolled ? "rgba(8, 13, 25, 0.82)" : "rgba(8, 13, 25, 0)",
          backdropFilter: scrolled ? "blur(10px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(10px)" : "none",
          border: scrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(255,255,255,0)",
          transition: "all 0.45s ease",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: isMobile ? 8 : 16 }}>
          <Link to="/" style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
            <img
              src="/rpp-logo.webp"
              alt="Real Property Planning"
              style={{ height: isMobile ? 56 : 88, width: "auto", maxWidth: "none", display: "block", objectFit: "contain" }}
            />
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: isMobile ? 6 : 12 }}>
            <Link
              to="/contact"
              style={{
                ...fontBody,
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.85)",
                padding: isMobile ? "6px 8px" : "10px 18px",
                borderRadius: 6,
                fontWeight: 700,
                fontSize: isMobile ? 10 : 13,
                letterSpacing: "0.06em",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              {isMobile ? "CONSULT" : "SCHEDULE A CONSULTATION"}
            </Link>
            <a
              href="tel:2069003015"
              style={{
                ...fontBody,
                color: "#fff",
                background: "#1a5fa8",
                padding: isMobile ? "6px 8px" : "10px 18px",
                borderRadius: 6,
                fontWeight: 700,
                fontSize: isMobile ? 10 : 13,
                letterSpacing: "0.06em",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              {isMobile ? "CALL" : "CALL (206) 900-3015"}
            </a>
            {isMobile && (
              <button
                aria-label="Open menu"
                onClick={() => setMenuOpen((v) => !v)}
                style={{
                  background: "transparent",
                  border: "1px solid rgba(255,255,255,0.6)",
                  borderRadius: 6,
                  padding: 8,
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  width: 36,
                  height: 32,
                }}
              >
                <span style={{ display: "block", height: 2, background: "#fff", borderRadius: 1 }} />
                <span style={{ display: "block", height: 2, background: "#fff", borderRadius: 1 }} />
                <span style={{ display: "block", height: 2, background: "#fff", borderRadius: 1 }} />
              </button>
            )}
          </div>
        </div>

        {!isMobile && (
          <nav style={{ marginTop: 10, display: "flex", flexWrap: "wrap", gap: 22 }}>
            {NAV.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  style={{
                    ...fontBody,
                    color: "rgba(255,255,255,0.92)",
                    textDecoration: "none",
                    fontSize: 15,
                    fontWeight: 800,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    paddingBottom: 4,
                    borderBottom: active ? "1px solid #fff" : "1px solid transparent",
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        )}

        {isMobile && menuOpen && (
          <nav
            style={{
              marginTop: 12,
              display: "flex",
              flexDirection: "column",
              gap: 4,
              background: "rgba(8,13,25,0.95)",
              borderRadius: 10,
              padding: 12,
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            {NAV.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    ...fontBody,
                    color: "rgba(255,255,255,0.95)",
                    textDecoration: "none",
                    fontSize: 15,
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    padding: "12px 10px",
                    borderRadius: 6,
                    background: active ? "rgba(255,255,255,0.08)" : "transparent",
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        )}
      </header>

      {/* ===== Hero ===== */}
      <section
        style={{
          position: "relative",
          height: isMobile ? "50vh" : "55vh",
          width: "100%",
          backgroundImage: "url('/hero-photo.png')",
          backgroundSize: "cover",
          backgroundPosition: isMobile ? "center 30%" : "center",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(8,13,25,0.85) 0%, rgba(8,13,25,0.55) 22%, rgba(8,13,25,0.18) 50%, rgba(8,13,25,0.20) 75%, rgba(8,13,25,0.55) 100%)",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 2,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-end",
            textAlign: "center",
            padding: "0 24px 50px",
          }}
        >
          <h1
            style={{
              ...fontHead,
              color: "#fff",
              fontWeight: 800,
              fontSize: "clamp(4.5rem, 9vw, 8rem)",
              lineHeight: 1.02,
              textTransform: "uppercase",
              letterSpacing: "0.01em",
              margin: 0,
              maxWidth: 1100,
              textShadow: "0 4px 24px rgba(0,0,0,0.45)",
            }}
          >
            Probate · Senior Transitions · Estate Sales
          </h1>
          <div style={{ display: "flex", gap: 14, marginTop: 36, flexWrap: "wrap", justifyContent: "center" }}>
            <Link
              to="/about"
              style={{
                ...fontBody,
                background: "#1a5fa8",
                color: "#fff",
                padding: "14px 28px",
                borderRadius: 6,
                fontWeight: 700,
                fontSize: 14,
                letterSpacing: "0.08em",
                textDecoration: "none",
              }}
            >
              WHO WE ARE
            </Link>
            <Link
              to="/contact"
              style={{
                ...fontBody,
                background: "rgba(8,13,25,0.55)",
                color: "#fff",
                padding: "14px 28px",
                borderRadius: 6,
                fontWeight: 700,
                fontSize: 14,
                letterSpacing: "0.08em",
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.85)",
              }}
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Trust Bar ===== */}
      <section style={{ background: "#1a5fa8", padding: isMobile ? "12px 20px" : "20px 24px" }}>
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(260px, 1fr))",
            gap: isMobile ? 14 : 20,
          }}
        >
          {[
            { emoji: "🌐", title: "TRUSTED PROFESSIONAL NETWORK", text: "Connecting families with trusted local professionals" },
            { emoji: "🤝", title: "FAMILY & SENIOR FOCUSED", text: "Connecting families with the right professionals at the right time" },
            { emoji: "📍", title: "SERVING WASHINGTON STATE", text: "Resources and professionals across all of Washington State" },
          ].map(({ emoji, title, text }) => (
            <div key={title} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", color: "#fff", padding: "0 8px" }}>
              <div
                aria-hidden
                style={{
                  fontSize: isMobile ? 28 : 32,
                  lineHeight: 1,
                  marginBottom: isMobile ? 4 : 6,
                  background: "transparent",
                  filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.35))",
                }}
              >
                {emoji}
              </div>
              <div className={isMobile ? "text-xl font-bold" : ""} style={{ ...fontBody, fontWeight: 700, fontSize: isMobile ? 14 : 15, letterSpacing: "0.08em", marginBottom: isMobile ? 4 : 6 }}>
                {title}
              </div>
              <div className={isMobile ? "font-sans font-bold" : ""} style={{ ...fontBody, fontSize: isMobile ? 13 : 16, color: "rgba(255,255,255,0.95)", lineHeight: isMobile ? 1.4 : 1.5 }}>
                {text}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomepageHero;
