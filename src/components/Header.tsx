import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";


/**
 * Site-wide header. Mirrors the homepage floating island nav (HomepageHero) so users
 * experience identical navigation across every page: same items, same dropdown
 * contents, same hover effects, same dropdown behavior, same CTAs, and same
 * visual treatment.
 */
type NavChild = { label: string; href: string };
type NavItem = { label: string; href: string; children?: NavChild[] };

const NAV: NavItem[] = [
  { label: "Probate & Estate", href: "/probate-estate-sales" },
  { label: "Senior Transitions", href: "/senior-transitions" },
  { label: "Property Valuation", href: "/date-of-death-valuation-property-appraisals" },
  { label: "Services", href: "/services" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
];

const fontBody = { fontFamily: "'DM Sans', system-ui, sans-serif" };

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(() => (typeof window !== "undefined" ? window.innerWidth < 769 : false));
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { pathname } = useLocation();

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
        "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap";
      document.head.appendChild(link);
    }
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-md focus:text-base"
      >
        Skip to main content
      </a>
      <header
        data-nosnippet="true"
        style={{
          position: "fixed",
          top: 0,
          left: "0",
          transform: "none",
          width: "100%",
          zIndex: 50,
          borderRadius: 0,
          padding: "6px 48px 4px",
          marginBottom: 0,
          backgroundColor: scrolled ? "rgba(8, 13, 25, 0.95)" : "rgba(8, 13, 25, 0.75)",
          backdropFilter: scrolled ? "blur(10px)" : "blur(10px)",
          WebkitBackdropFilter: scrolled ? "blur(10px)" : "blur(10px)",
          border: scrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(255,255,255,0.08)",
          transition: "all 0.45s ease",
          ...fontBody,
          color: "#fff",
        }}
      >
        {isMobile ? (
          /* ── Mobile header layout ── */
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
            <Link to="/" className="header-logo" style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
              <img
                src="/rpp-logo-v4.webp"
                alt="Real Property Planning"
                style={{ height: 56, width: "auto", maxWidth: "none", display: "block", objectFit: "contain" }}
              />
            </Link>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <a
                href="tel:2069003015"
                style={{
                  ...fontBody,
                  color: "#fff",
                  background: "#1a5fa8",
                  padding: "6px 8px",
                  borderRadius: 6,
                  fontWeight: 700,
                  fontSize: 10,
                  letterSpacing: "0.06em",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
              >
                CALL
              </a>
              <button
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                onClick={() => setMenuOpen((v) => !v)}
                style={{
                  background: "rgba(255,255,255,0.12)",
                  border: "2.5px solid rgba(255,255,255,0.6)",
                  borderRadius: 14,
                  padding: "8px 12px 6px",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: 72,
                  minHeight: 62,
                  gap: 0,
                  flexShrink: 0,
                  overflow: "visible",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 6 }}>
                  <span style={{ display: "block", width: 34, height: 4.5, background: "#fff", borderRadius: 3 }} />
                  <span style={{ display: "block", width: 34, height: 4.5, background: "#fff", borderRadius: 3 }} />
                  <span style={{ display: "block", width: 34, height: 4.5, background: "#fff", borderRadius: 3 }} />
                </div>
                <span
                  style={{
                    ...fontBody,
                    color: "#fff",
                    fontSize: 13,
                    fontWeight: 900,
                    letterSpacing: "0.15em",
                    lineHeight: 1,
                    marginTop: 2,
                  }}
                >
                  MENU
                </span>
              </button>
            </div>
          </div>
        ) : (
          /* ── Desktop header layout — single row ── */
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 16,
            }}
          >
            <Link to="/" className="header-logo" style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
              <img
                src="/rpp-logo-v4.webp"
                alt="Real Property Planning"
                style={{ height: 56, width: "auto", maxWidth: "none", display: "block", objectFit: "contain" }}
              />
            </Link>

            <nav
              ref={dropdownRef}
              aria-label="Main navigation"
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "nowrap",
                justifyContent: "space-evenly",
                alignItems: "center",
                gap: 16,
                flex: 1,
              }}
            >
              {NAV.map((item) => {
                const active =
                  pathname === item.href || (item.children && item.children.some((c) => c.href === pathname));
                const linkStyle = {
                  ...fontBody,
                  color: "rgba(255,255,255,0.92)",
                  textDecoration: "none",
                  fontSize: 13,
                  fontWeight: 700 as const,
                  letterSpacing: "0.06em",
                  paddingBottom: 2,
                  whiteSpace: "nowrap" as const,
                  borderBottom: active ? "1px solid #fff" : "1px solid transparent",
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
                          paddingBottom: 2,
                          lineHeight: "inherit",
                          margin: 0,
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
                            marginTop: 0,
                            minWidth: 260,
                            background: "rgba(8,13,25,0.97)",
                            backdropFilter: "blur(10px)",
                            WebkitBackdropFilter: "blur(10px)",
                            border: "1px solid rgba(255,255,255,0.12)",
                            borderRadius: 10,
                            padding: "16px 8px 8px",
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
                                className="nav-link-hover"
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

            <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
              <a
                href="tel:2069003015"
                style={{
                  ...fontBody,
                  color: "#fff",
                  background: "#1a5fa8",
                  padding: "8px 16px",
                  borderRadius: 6,
                  fontWeight: 700,
                  fontSize: 13,
                  letterSpacing: "0.06em",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
              >
                (206) 900-3015
              </a>
            </div>
          </div>
        )}


        {isMobile && menuOpen && (
          <nav
            aria-label="Mobile navigation"
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
                pathname === item.href || (item.children && item.children.some((c) => c.href === pathname));
              const baseStyle = {
                ...fontBody,
                color: "rgba(255,255,255,0.95)",
                textDecoration: "none",
                fontSize: 15,
                fontWeight: 700 as const,
                letterSpacing: "0.06em",
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
                                fontWeight: 700,
                                letterSpacing: "0.05em",
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

      {/* Spacer to preserve layout below the fixed header (prevents CLS). */}
      <div style={{ height: isMobile ? 64 : 70 }} aria-hidden="true" />
    </>
  );
};

export default Header;
