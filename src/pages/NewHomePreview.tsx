import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

/**
 * Preview-only page (route: /new-home).
 * Self-contained header + hero + trust bar per spec.
 * Does NOT touch site-wide Header.tsx or HomepageHero.tsx.
 */
const NAV = [
  { label: "Home", href: "/new-home" },
  { label: "Probate & Estate", href: "/probate-estate-sales" },
  { label: "Senior Transitions", href: "/senior-transitions" },
  { label: "Downsizing", href: "/sell-house-fund-senior-living" },
  { label: "Property Valuation", href: "/why-valuation-matters" },
  { label: "Resources", href: "/resources" },
  { label: "About David", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function NewHomePreview() {
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    // Inject Google Fonts once
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
    <div style={{ ...fontBody, background: "#0b1220", color: "#fff", minHeight: "100vh" }}>
      {/* ===== Floating Header Island ===== */}
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
        {/* Row 1 */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
          <Link to="/new-home" style={{ display: "flex", alignItems: "center" }}>
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

        {/* Row 2 — nav */}
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
          height: "100vh",
          width: "100%",
          backgroundImage: "url('/hero-photo.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Gradient overlay */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(8,13,25,0.35) 0%, rgba(8,13,25,0.45) 55%, rgba(8,13,25,0.78) 100%)",
          }}
        />
        {/* Content */}
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
          <p
            style={{
              ...fontBody,
              color: "rgba(255,255,255,0.92)",
              fontSize: 18,
              fontWeight: 400,
              letterSpacing: "0.08em",
              marginBottom: 16,
            }}
          >
            Washington State's Trusted Choice
          </p>
          <h1
            style={{
              ...fontHead,
              color: "#fff",
              fontWeight: 800,
              fontSize: "clamp(2.6rem, 7vw, 6rem)",
              lineHeight: 1.02,
              textTransform: "uppercase",
              letterSpacing: "0.01em",
              margin: 0,
              maxWidth: 1100,
              textShadow: "0 4px 24px rgba(0,0,0,0.45)",
            }}
          >
            Probate &amp; Estate Real Estate
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
      <section style={{ background: "#1a5fa8", padding: "32px 24px" }}>
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
            {
              icon: "🛡️",
              title: "LICENSED & CERTIFIED",
              text: "WA State Broker & Certified Residential Appraiser",
            },
            {
              icon: "🤝",
              title: "FAMILY-FOCUSED",
              text: "Calm guidance through sensitive transitions",
            },
            {
              icon: "📍",
              title: "STATEWIDE SERVICE",
              text: "Serving all of Western Washington & Puget Sound",
            },
          ].map((item) => (
            <div key={item.title} style={{ display: "flex", gap: 16, alignItems: "flex-start", color: "#fff" }}>
              <div style={{ fontSize: 30, lineHeight: 1 }} aria-hidden>
                {item.icon}
              </div>
              <div>
                <div style={{ ...fontBody, fontWeight: 700, fontSize: 14, letterSpacing: "0.08em", marginBottom: 4 }}>
                  {item.title}
                </div>
                <div style={{ ...fontBody, fontSize: 14, color: "rgba(255,255,255,0.92)", lineHeight: 1.45 }}>
                  {item.text}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
