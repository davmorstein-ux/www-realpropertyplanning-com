import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

/**
 * Homepage hero — floating island header + full-viewport Pine Ridge photo + trust bar.
 * This component is rendered on `/` only (see src/pages/Index.tsx). The site-wide
 * <Header /> is intentionally still rendered above it; this floating header sits on
 * top of the hero photo as a homepage-only visual treatment.
 */
type NavChild = { label: string; href: string };
type NavItem = { label: string; href: string; children?: NavChild[] };

const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Probate & Estate", href: "/probate-estate-sales" },
  { label: "Senior Transitions", href: "/senior-transitions" },
  { label: "Downsizing", href: "/sell-house-fund-senior-living" },
  { label: "Property Valuation", href: "/why-valuation-matters" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "All Services", href: "/services" },
      { label: "Probate Sales", href: "/probate-estate-sales" },
      { label: "Senior & Estate Services", href: "/senior-estate-services" },
      { label: "Senior Placement", href: "/senior-placement" },
      { label: "For Executors", href: "/executors" },
      { label: "How the Process Works", href: "/how-the-process-works" },
      { label: "Professional Referral Resource", href: "/professional-referral-resource" },
      { label: "Gray Divorce", href: "/gray-divorce" },
    ],
  },
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
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 769);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
    setMobileExpanded(null);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
          <nav ref={dropdownRef} style={{ marginTop: 10, display: "flex", flexWrap: "nowrap", justifyContent: "space-between", alignItems: "center", width: "100%", gap: 12 }}>
            {NAV.map((item) => {
              const active =
                pathname === item.href ||
                (item.children && item.children.some((c) => c.href === pathname));
              const linkStyle = {
                ...fontBody,
                color: "rgba(255,255,255,0.92)",
                textDecoration: "none",
                fontSize: 15,
                fontWeight: 800 as const,
                letterSpacing: "0.08em",
                textTransform: "uppercase" as const,
                paddingBottom: 4,
                borderBottom: active ? "1px solid #fff" : "1px solid transparent",
              };

              if (item.children) {
                const isOpen = openDropdown === item.label;
                return (
                  <div
                    key={item.label}
                    style={{ position: "relative" }}
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      type="button"
                      data-nav-button=""
                      onClick={() => setOpenDropdown(isOpen ? null : item.label)}
                      style={{
                        ...linkStyle,
                        background: "transparent",
                        border: "none",
                        borderBottom: linkStyle.borderBottom,
                        cursor: "pointer",
                        display: "inline-flex",
                        alignItems: "center",
                        alignSelf: "center",
                        verticalAlign: "middle",
                        gap: 6,
                        padding: 0,
                        paddingBottom: 4,
                        lineHeight: "inherit",
                        margin: 0,
                        transform: "translateY(-4px)",
                        appearance: "none",
                        WebkitAppearance: "none",
                      }}
                      aria-haspopup="true"
                      aria-expanded={isOpen}
                    >
                      {item.label}
                      <span style={{ fontSize: 10, transform: isOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>▾</span>
                    </button>
                    {isOpen && (
                      <div
                        role="menu"
                        style={{
                          position: "absolute",
                          top: "100%",
                          left: "50%",
                          transform: "translateX(-50%)",
                          marginTop: 8,
                          minWidth: 260,
                          background: "rgba(8,13,25,0.97)",
                          backdropFilter: "blur(10px)",
                          WebkitBackdropFilter: "blur(10px)",
                          border: "1px solid rgba(255,255,255,0.12)",
                          borderRadius: 10,
                          padding: 8,
                          boxShadow: "0 12px 32px rgba(0,0,0,0.4)",
                          zIndex: 60,
                        }}
                      >
                        {item.children.map((child) => {
                          const childActive = pathname === child.href;
                          return (
                            <Link
                              key={child.href}
                              to={child.href}
                              role="menuitem"
                              onClick={() => setOpenDropdown(null)}
                              style={{
                                ...fontBody,
                                display: "block",
                                padding: "10px 14px",
                                color: childActive ? "#fff" : "rgba(255,255,255,0.88)",
                                background: childActive ? "rgba(255,255,255,0.08)" : "transparent",
                                textDecoration: "none",
                                fontSize: 13,
                                fontWeight: 700,
                                letterSpacing: "0.06em",
                                textTransform: "uppercase",
                                borderRadius: 6,
                                whiteSpace: "nowrap",
                              }}
                            >
                              {child.label}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link key={item.href} to={item.href} style={linkStyle}>
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
              const active =
                pathname === item.href ||
                (item.children && item.children.some((c) => c.href === pathname));
              const baseStyle = {
                ...fontBody,
                color: "rgba(255,255,255,0.95)",
                textDecoration: "none",
                fontSize: 15,
                fontWeight: 700 as const,
                letterSpacing: "0.06em",
                textTransform: "uppercase" as const,
                padding: "12px 10px",
                borderRadius: 6,
                background: active ? "rgba(255,255,255,0.08)" : "transparent",
              };

              if (item.children) {
                const isExpanded = mobileExpanded === item.label;
                return (
                  <div key={item.label}>
                    <button
                      type="button"
                      onClick={() => setMobileExpanded(isExpanded ? null : item.label)}
                      style={{
                        ...baseStyle,
                        width: "100%",
                        border: "none",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        textAlign: "left",
                      }}
                      aria-expanded={isExpanded}
                    >
                      <span>{item.label}</span>
                      <span style={{ fontSize: 12, transform: isExpanded ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>▾</span>
                    </button>
                    {isExpanded && (
                      <div style={{ display: "flex", flexDirection: "column", gap: 2, paddingLeft: 12, borderLeft: "2px solid rgba(255,255,255,0.15)", marginLeft: 10, marginTop: 4, marginBottom: 4 }}>
                        {item.children.map((child) => {
                          const childActive = pathname === child.href;
                          return (
                            <Link
                              key={child.href}
                              to={child.href}
                              onClick={() => setMenuOpen(false)}
                              style={{
                                ...fontBody,
                                color: childActive ? "#fff" : "rgba(255,255,255,0.85)",
                                textDecoration: "none",
                                fontSize: 13,
                                fontWeight: 600,
                                letterSpacing: "0.05em",
                                textTransform: "uppercase",
                                padding: "10px 10px",
                                borderRadius: 6,
                                background: childActive ? "rgba(255,255,255,0.08)" : "transparent",
                              }}
                            >
                              {child.label}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link key={item.href} to={item.href} onClick={() => setMenuOpen(false)} style={baseStyle}>
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
