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
  {
    label: "Senior Transitions",
    href: "/senior-transitions",
    children: [
      { label: "Senior Transitions", href: "/senior-transitions" },
      { label: "Downsizing", href: "/sell-house-fund-senior-living" },
    ],
  },
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
  const [isMobile, setIsMobile] = useState(() => (typeof window !== "undefined" ? window.innerWidth < 769 : false));
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMenu = (label: string) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setOpenDropdown(label);
  };
  const scheduleClose = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(() => setOpenDropdown(null), 150);
  };
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
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const fontBody = { fontFamily: "'DM Sans', system-ui, sans-serif" };
  const fontHead = { fontFamily: "'Barlow Condensed', 'DM Sans', sans-serif" };

  return (
    <div style={{ ...fontBody, background: "#FFFFFF", color: "#1E3A5F", paddingTop: isMobile ? 70 : 120 }}>
      {/* ===== Stacked Header (homepage-only) ===== */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          width: "100%",
          zIndex: 9999,
          boxShadow: "0 2px 12px rgba(0,0,0,0.12)",
        }}
      >
        {/* Row 1 — Top bar (navy) */}
        <div style={{ background: "#1E3A5F", width: "100%" }}>
          <div
            style={{
              maxWidth: 1280,
              margin: "0 auto",
              minHeight: 100,
              padding: isMobile ? "10px 16px" : "10px 24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 12,
            }}
          >
            <Link to="/" style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
              <img
                src="/rpp-logo-v4.webp"
                alt="Real Property Planning"
                style={{
                  height: "90px",
                  width: "auto",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </Link>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <a
                href="tel:2069003015"
                style={{
                  ...fontBody,
                  color: "#FFFFFF",
                  background: "#C9A14A",
                  padding: isMobile ? "10px 14px" : "12px 22px",
                  borderRadius: 6,
                  fontWeight: 800,
                  fontSize: isMobile ? 12 : 14,
                  letterSpacing: "0.06em",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
              >
                {isMobile ? "CALL" : "CALL (206) 900-3015"}
              </a>
              {isMobile && (
                <button
                  aria-label={menuOpen ? "Close menu" : "Open menu"}
                  onClick={() => setMenuOpen((v) => !v)}
                  style={{
                    background: "rgba(255,255,255,0.12)",
                    border: "2px solid rgba(255,255,255,0.7)",
                    borderRadius: 10,
                    padding: "8px 10px",
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 4,
                    flexShrink: 0,
                  }}
                >
                  <span style={{ display: "block", width: 24, height: 3, background: "#fff", borderRadius: 2 }} />
                  <span style={{ display: "block", width: 24, height: 3, background: "#fff", borderRadius: 2 }} />
                  <span style={{ display: "block", width: 24, height: 3, background: "#fff", borderRadius: 2 }} />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Row 2 — Navigation bar (cream/white) */}
        {!isMobile && (
          <div
            style={{
              width: "100%",
              backgroundColor: "transparent",
              padding: "8px 24px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <nav
              ref={dropdownRef}
              style={{
                maxWidth: "1100px",
                width: "100%",
                minHeight: "50px",
                padding: "0 32px",
                display: "flex",
                flexWrap: "nowrap",
                justifyContent: "center",
                alignItems: "center",
                gap: 28,
                backgroundColor: scrolled ? "rgba(245, 240, 230, 0.55)" : "rgba(245, 240, 230, 1)",
                backdropFilter: scrolled ? "blur(16px)" : "none",
                WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
                borderRadius: "50px",
                boxShadow: scrolled ? "0 8px 32px rgba(30,58,95,0.22)" : "0 4px 20px rgba(30,58,95,0.12)",
                border: scrolled ? "1px solid rgba(30,58,95,0.22)" : "1px solid rgba(30,58,95,0.10)",
                transition: "all 0.3s ease",
              }}
            >
              {NAV.map((item) => {
                const active =
                  pathname === item.href || (item.children && item.children.some((c) => c.href === pathname));
                const linkStyle = {
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                  color: "#1E3A5F",
                  textDecoration: "none",
                  fontSize: "14px",
                  fontWeight: 600 as const,
                  letterSpacing: "0.5px",
                  textTransform: "uppercase" as const,
                  lineHeight: 1,
                  paddingBottom: 4,
                  borderBottom: active ? "2px solid #1E3A5F" : "2px solid transparent",
                };

                if (item.children) {
                  const isOpen = openDropdown === item.label;
                  return (
                    <div
                      key={item.label}
                      style={{ position: "relative" }}
                      onMouseEnter={() => openMenu(item.label)}
                      onMouseLeave={scheduleClose}
                    >
                      <button
                        type="button"
                        data-nav-button=""
                        className="nav-link-hover"
                        onClick={() => setOpenDropdown(isOpen ? null : item.label)}
                        style={{
                          ...linkStyle,
                          background: "transparent",
                          border: "none",
                          borderBottom: linkStyle.borderBottom,
                          cursor: "pointer",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 6,
                          padding: 0,
                          paddingBottom: 4,
                          appearance: "none",
                          WebkitAppearance: "none",
                        }}
                        aria-haspopup="true"
                        aria-expanded={isOpen}
                      >
                        {item.label}
                        <span
                          style={{
                            fontSize: 10,
                            transform: isOpen ? "rotate(180deg)" : "none",
                            transition: "transform 0.2s",
                          }}
                        >
                          ▾
                        </span>
                      </button>
                      {isOpen && (
                        <div
                          role="menu"
                          style={{
                            position: "absolute",
                            top: "100%",
                            left: "50%",
                            transform: "translateX(-50%)",
                            marginTop: 4,
                            minWidth: 260,
                            background: "#FFFFFF",
                            border: "1px solid rgba(30,58,95,0.15)",
                            borderRadius: 10,
                            padding: "8px",
                            boxShadow: "0 12px 32px rgba(30,58,95,0.18)",
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
                                className="nav-link-hover"
                                onClick={() => setOpenDropdown(null)}
                                style={{
                                  ...fontBody,
                                  display: "block",
                                  padding: "10px 14px",
                                  color: "#1E3A5F",
                                  background: childActive ? "rgba(30,58,95,0.08)" : "transparent",
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
                  <Link key={item.href} to={item.href} className="nav-link-hover" style={linkStyle}>
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        )}

        {/* Mobile menu (drops below top bar) */}
        {isMobile && menuOpen && (
          <nav
            style={{
              background: "#1E3A5F",
              borderTop: "1px solid rgba(255,255,255,0.12)",
              display: "flex",
              flexDirection: "column",
              gap: 2,
              padding: 12,
            }}
          >
            {NAV.map((item) => {
              const active =
                pathname === item.href || (item.children && item.children.some((c) => c.href === pathname));
              const baseStyle = {
                ...fontBody,
                color: "#FFFFFF",
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
                      <span
                        style={{
                          fontSize: 12,
                          transform: isExpanded ? "rotate(180deg)" : "none",
                          transition: "transform 0.2s",
                        }}
                      >
                        ▾
                      </span>
                    </button>
                    {isExpanded && (
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 2,
                          paddingLeft: 12,
                          borderLeft: "2px solid rgba(255,255,255,0.15)",
                          marginLeft: 10,
                          marginTop: 4,
                          marginBottom: 4,
                        }}
                      >
                        {item.children.map((child) => {
                          return (
                            <Link
                              key={child.href}
                              to={child.href}
                              onClick={() => setMenuOpen(false)}
                              style={{
                                ...fontBody,
                                color: "#FFFFFF",
                                textDecoration: "none",
                                fontSize: 13,
                                fontWeight: 600,
                                letterSpacing: "0.05em",
                                textTransform: "uppercase",
                                padding: "10px 10px",
                                borderRadius: 6,
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
      <style>{`@keyframes rppHeroFadeIn { from { opacity: 0 } to { opacity: 1 } }`}</style>
      <section
        style={{
          position: "relative",
          width: "100%",
          background: "transparent",
          overflow: "hidden",
        }}
      >
        <img
          src="/homepage-car-ride.webp"
          alt="Senior couple by a red convertible on a coastal road with a SOLD Real Property Planning sign and Next Chapter moving truck"
          fetchPriority="high"
          loading="eager"
          decoding="async"
          style={{
            display: "block",
            width: "100%",
            height: "auto",
            minHeight: isMobile ? 200 : undefined,
            objectFit: "contain",
            objectPosition: "center",
            background: "transparent",
            opacity: 0,
            animation: "rppHeroFadeIn 1.2s ease forwards",
          }}
        />
      </section>

      {/* ===== Trust Bar ===== */}
      <section className="bg-navy" style={{ background: "#1a2f4e", padding: isMobile ? "20px 20px" : "36px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", textAlign: "center" }}>
          <p
            style={{
              fontFamily: "'DM Sans', system-ui, sans-serif",
              fontSize: isMobile ? "18px" : "28px",
              fontWeight: 500,
              color: "white",
              letterSpacing: "0.3px",
              margin: 0,
              padding: 0,
              display: "block",
              width: "100%",
            }}
          >
            Guidance for Senior Transitions, Estate Sales &amp; Probate
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomepageHero;
