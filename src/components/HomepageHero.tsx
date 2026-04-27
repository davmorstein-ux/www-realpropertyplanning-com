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
  const { pathname } = useLocation();

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
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
          <Link to="/" style={{ display: "flex", alignItems: "center" }}>
            <img
              src="/rpp-logo.webp"
              alt="Real Property Planning"
              style={{ height: 52, width: "auto", display: "block" }}
            />
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <Link
              to="/contact"
              style={{
                ...fontBody,
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.85)",
                padding: "10px 18px",
                borderRadius: 6,
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: "0.06em",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              SCHEDULE A CONSULTATION
            </Link>
            <a
              href="tel:2069003015"
              style={{
                ...fontBody,
                color: "#fff",
                background: "#1a5fa8",
                padding: "10px 18px",
                borderRadius: 6,
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: "0.06em",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              CALL (206) 900-3015
            </a>
          </div>
        </div>

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
                  fontSize: 12,
                  fontWeight: 600,
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
      </header>

      {/* ===== Hero ===== */}
      <section
        style={{
          position: "relative",
          height: "60vh",
          width: "100%",
          backgroundImage: "url('/hero-photo.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(8,13,25,0.35) 0%, rgba(8,13,25,0.45) 55%, rgba(8,13,25,0.78) 100%)",
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
            justifyContent: "center",
            textAlign: "center",
            padding: "0 24px",
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
      <section style={{ background: "#1a5fa8", padding: "40px 24px" }}>
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 28,
          }}
        >
          {[
            { emoji: "🏛️", title: "LICENSED & CERTIFIED", text: "WA State Broker & Certified Residential Appraiser" },
            { emoji: "🤝", title: "FAMILY-FOCUSED", text: "Calm guidance through sensitive transitions" },
            { emoji: "🗺️", title: "STATEWIDE SERVICE", text: "Serving all of Western Washington & Puget Sound" },
          ].map(({ emoji, title, text }) => (
            <div key={title} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", color: "#fff", padding: "0 8px" }}>
              <div
                aria-hidden
                style={{
                  fontSize: 48,
                  lineHeight: 1,
                  marginBottom: 12,
                  background: "transparent",
                  filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.35))",
                }}
              >
                {emoji}
              </div>
              <div style={{ ...fontBody, fontWeight: 700, fontSize: 15, letterSpacing: "0.08em", marginBottom: 6 }}>
                {title}
              </div>
              <div style={{ ...fontBody, fontSize: 16, color: "rgba(255,255,255,0.95)", lineHeight: 1.5 }}>
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
