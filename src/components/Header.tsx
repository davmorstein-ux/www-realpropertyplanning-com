import { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import WaterfallNav from "./WaterfallNav";
import SiteSearchBar from "./SiteSearchBar";

const NAV_FONT = { fontFamily: "'Raleway', 'Gill Sans', 'Century Gothic', sans-serif" };

const CONTACT_LINK = { label: "Contact", href: "/contact" };

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
        letter-spacing: 0.18em;
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
            ? "calc(env(safe-area-inset-top, 0px) + 8px) 16px 6px"
            : "calc(env(safe-area-inset-top, 0px) + 8px) 32px 4px",
          backgroundColor: "rgba(8, 13, 25, 0.92)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          ...NAV_FONT,
          color: "#fff",
        }}
      >
        <nav
          aria-label="Primary"
          style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}
        >
          {/* LEFT: WaterfallNav + logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 14, flexShrink: 0 }}>
            <WaterfallNav />
            <Link to="/" style={{ display: "flex", alignItems: "center" }}>
              <img
                src="/rpp-logo-v4.webp"
                alt="Real Property Planning"
                style={{ height: isMobile ? 48 : 56, width: "auto", display: "block", objectFit: "contain" }}
                sizes="100vw"
                decoding="async"
                width={946}
                height={449}
              />
            </Link>
          </div>

          {/* Tagline removed */}

          {/* RIGHT: top links + CTA */}
          <div style={{ display: "flex", alignItems: "center", gap: isMobile ? 10 : 22, flexShrink: 0 }}>
            <Link
              to={CONTACT_LINK.href}
              className={`rpp-top-link${pathname === CONTACT_LINK.href ? " is-active" : ""}`}
              style={isMobile ? { padding: "10px 6px", fontSize: 12 } : undefined}
            >
              {CONTACT_LINK.label}
            </Link>
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

        {/* Always-visible site search — sits under the nav on every page */}
        <div style={{ marginTop: 10, paddingTop: 10, borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <SiteSearchBar />
        </div>
      </header>
    </>
  );
};

export default Header;
