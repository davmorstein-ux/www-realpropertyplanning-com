import { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import WaterfallNav from "./WaterfallNav";
import SiteSearchBar from "./SiteSearchBar";
import LanguageSwitcher from "./LanguageSwitcher";

const NAV_FONT = { fontFamily: "'Raleway', 'Gill Sans', 'Century Gothic', sans-serif" };

const CONTACT_LINK = { label: "Contact", href: "/contact" };
/* Desktop logo height. The logo now occupies its own column spanning both the
   nav row and the search row, so it can be far larger without making the
   header taller — the two-column layout is actually SHORTER than the previous
   stacked one (~112px vs ~140px) while the mark nearly doubles. Adjust this
   single value to taste. */
const DESKTOP_LOGO_HEIGHT = 104;

const CURATED_LINKS = [
  { label: "About", href: "/about" },
  { label: "Probate & Estate Sales", href: "/probate-estate-sales" },
  { label: "Senior Transitions", href: "/senior-transitions" },
  { label: "AFH Club", href: "/afh-club" },
];

const Header = () => {
  const [isMobile, setIsMobile] = useState(() => (typeof window !== "undefined" ? window.innerWidth < 769 : false));
  const { pathname } = useLocation();
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 769);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const id = "rpp-raleway-font";
    if (!document.getElementById(id)) {
      const link = document.createElement("link");
      link.id = id;
      link.rel = "stylesheet";
      link.href = "https://fonts.googleapis.com/css2?family=Raleway:wght@200;300;400;600&display=swap";
      document.head.appendChild(link);
    }
  }, []);

  useEffect(() => {
    const id = "rpp-toplink-styles-v5";
    if (document.getElementById(id)) return;
    const style = document.createElement("style");
    style.id = id;
    style.innerHTML = `
      .rpp-top-link {
        color: rgba(255,255,255,0.92);
        text-decoration: none;
        font-family: 'Raleway', 'Gill Sans', 'Century Gothic', sans-serif;
        font-size: 13px;
        font-weight: 600;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        padding: 6px 4px;
        border-bottom: 1px solid transparent;
        transition: color 0.18s ease, border-color 0.18s ease;
        white-space: nowrap;
        display: inline-flex;
        align-items: center;
      }
      .rpp-top-link:hover { color: #d1a847; }
      .rpp-top-link.is-active { border-bottom-color: #d1a847; }
      .rpp-top-link:focus-visible {
        outline: 2px solid #d1a847;
        outline-offset: 3px;
        border-radius: 3px;
      }
      .rpp-curated-link { display: inline-flex; }
      /* Breakpoint lowered from 1100px. Reducing letter-spacing from 0.18em
         to 0.08em recovered roughly 90px across the five links, which is
         enough to keep the full desktop nav on tablets and small laptops
         instead of dropping them to the hamburger-only layout. */
      @media (max-width: 950px) {
        .rpp-curated-link { display: none !important; }
      }
    `;
    document.head.appendChild(style);
  }, []);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    const setVar = () => {
      document.documentElement.style.setProperty("--header-height", `${el.getBoundingClientRect().height}px`);
    };

    setVar();

    const observer = new ResizeObserver(setVar);
    observer.observe(el);
    window.addEventListener("resize", setVar);
    window.addEventListener("orientationchange", setVar);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", setVar);
      window.removeEventListener("orientationchange", setVar);
    };
  }, [isMobile]);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-md focus:text-base"
      >
        Skip to main content
      </a>

      <header
        ref={headerRef}
        data-nosnippet="true"
        style={{
          position: "sticky",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          margin: 0,
          padding: isMobile
            ? "calc(env(safe-area-inset-top, 0px) + 8px) 12px 6px"
            : "calc(env(safe-area-inset-top, 0px) + 8px) 32px 4px",
          backgroundColor: "rgba(8, 13, 25, 0.92)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          ...NAV_FONT,
          color: "#fff",
        }}
      >
        {/* Two-column desktop header: the logo occupies a full-height left
            column while the nav links and search stack in the right column.
            This lets the logo be ~104px instead of 60px WITHOUT making the
            header taller — it is in fact shorter than the previous stacked
            layout. Mobile keeps the original stacked structure untouched. */}
        {isMobile ? (
          <>
            <nav
              aria-label="Primary"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 12,
                minWidth: 0,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 14, minWidth: 0, flexShrink: 1 }}>
                <WaterfallNav />
                <Link to="/" style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src="/rpp-logo-v4.webp"
                    alt="Real Property Planning"
                    style={{ height: 44, width: "auto", maxWidth: "100%", display: "block", objectFit: "contain" }}
                    sizes="100vw"
                    decoding="async"
                    width={946}
                    height={449}
                  />
                </Link>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: isMobile ? 10 : 22, flexShrink: 0 }}>
                {CURATED_LINKS.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`rpp-top-link rpp-curated-link${pathname === item.href ? " is-active" : ""}`}
                  >
                    {item.label}
                  </Link>
                ))}
                <LanguageSwitcher compact={isMobile} />
                {/* Contact is hidden on mobile — it was the item being clipped at the
                right edge. It now lives in the WaterfallNav quick-links strip,
                and the CALL button below covers urgent contact. */}
                {!isMobile && (
                  <Link
                    to={CONTACT_LINK.href}
                    className={`rpp-top-link${pathname === CONTACT_LINK.href ? " is-active" : ""}`}
                  >
                    {CONTACT_LINK.label}
                  </Link>
                )}
                <a
                  href="tel:2069003015"
                  style={{
                    ...NAV_FONT,
                    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif",
                    color: "#fff",
                    background: "#1f6fb2",
                    padding: isMobile ? "6px 10px" : "4px 14px",
                    borderRadius: 6,
                    fontWeight: 700,
                    fontSize: isMobile ? 15 : 16,
                    letterSpacing: "0.02em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                  }}
                >
                  {isMobile ? "CALL" : "(206) 900-3015"}
                </a>
              </div>
            </nav>

            <div style={{ marginTop: 10, paddingTop: 10, borderTop: "1px solid rgba(255,255,255,0.08)" }}>
              <SiteSearchBar />
            </div>
          </>
        ) : (
          <div style={{ display: "flex", alignItems: "stretch", gap: 24, minWidth: 0 }}>
            {/* LEFT COLUMN — hamburger + full-height logo */}
            <div style={{ display: "flex", alignItems: "center", gap: 14, flexShrink: 0 }}>
              <WaterfallNav />
              <Link to="/" style={{ display: "flex", alignItems: "center" }}>
                <img
                  src="/rpp-logo-v4.webp"
                  alt="Real Property Planning"
                  style={{
                    height: DESKTOP_LOGO_HEIGHT,
                    width: "auto",
                    display: "block",
                    objectFit: "contain",
                  }}
                  sizes="100vw"
                  decoding="async"
                  width={946}
                  height={449}
                />
              </Link>
            </div>

            {/* RIGHT COLUMN — nav links above, search below */}
            <div
              style={{
                flex: 1,
                minWidth: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: 0,
              }}
            >
              <nav
                aria-label="Primary"
                style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 12, minWidth: 0 }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: isMobile ? 10 : 22, flexShrink: 0 }}>
                  {CURATED_LINKS.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className={`rpp-top-link rpp-curated-link${pathname === item.href ? " is-active" : ""}`}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <LanguageSwitcher compact={isMobile} />
                  {/* Contact is hidden on mobile — it was the item being clipped at the
                right edge. It now lives in the WaterfallNav quick-links strip,
                and the CALL button below covers urgent contact. */}
                  {!isMobile && (
                    <Link
                      to={CONTACT_LINK.href}
                      className={`rpp-top-link${pathname === CONTACT_LINK.href ? " is-active" : ""}`}
                    >
                      {CONTACT_LINK.label}
                    </Link>
                  )}
                  <a
                    href="tel:2069003015"
                    style={{
                      ...NAV_FONT,
                      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif",
                      color: "#fff",
                      background: "#1f6fb2",
                      padding: isMobile ? "6px 10px" : "4px 14px",
                      borderRadius: 6,
                      fontWeight: 700,
                      fontSize: isMobile ? 15 : 16,
                      letterSpacing: "0.02em",
                      textTransform: "uppercase",
                      textDecoration: "none",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {isMobile ? "CALL" : "(206) 900-3015"}
                  </a>
                </div>
              </nav>

              {/* Divider now spans only this column, so it separates nav from
                  search rather than bisecting the whole header. */}
              <div style={{ marginTop: 10, paddingTop: 10, borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                <SiteSearchBar />
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
