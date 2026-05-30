import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import WaterfallNav from "./WaterfallNav";

const TOP_LINKS = [
  { label: "Home", href: "/" },
  { label: "Probate & Estate", href: "/probate-estate-sales" },
  { label: "Senior Transitions", href: "/senior-transitions" },
  { label: "Resources", href: "/guides-and-resources" },
  { label: "Articles", href: "/articles/silver-tsunami" },
  { label: "Contact", href: "/contact" },
];

const NAV_FONT = { fontFamily: "'Raleway', 'Gill Sans', 'Century Gothic', sans-serif" };

const Header = () => {
  const [isMobile, setIsMobile] = useState(() => (typeof window !== "undefined" ? window.innerWidth < 769 : false));
  const { pathname } = useLocation();

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 769);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    // Load Raleway to match M≡NU button
    const id = "rpp-raleway-font";
    if (!document.getElementById(id)) {
      const link = document.createElement("link");
      link.id = id;
      link.rel = "stylesheet";
      link.href = "https://fonts.googleapis.com/css2?family=Raleway:wght@200;300&display=swap";
      document.head.appendChild(link);
    }
  }, []);

  useEffect(() => {
    const id = "rpp-toplink-styles-v4";
    if (document.getElementById(id)) return;
    const style = document.createElement("style");
    style.id = id;
    style.innerHTML = `
      .rpp-top-link {
        color: rgba(255,255,255,0.92);
        text-decoration: none;
        font-family: 'Raleway', 'Gill Sans', 'Century Gothic', sans-serif;
        font-size: 13px;
        font-weight: 400;
        letter-spacing: 0.18em;
        text-transform: uppercase;
        padding: 6px 4px;
        border-bottom: 1px solid transparent;
        transition: color 0.18s ease, border-color 0.18s ease;
        white-space: nowrap;
        display: inline-flex;
        align-items: center;
      }
      .rpp-top-link:hover { color: #E8C97A; }
      .rpp-top-link.is-active { border-bottom-color: #E8C97A; }
    `;
    document.head.appendChild(style);
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
          left: 0,
          right: 0,
          zIndex: 50,
          margin: 0,
          padding: isMobile ? "0 16px 6px" : "0 32px 4px",
          backgroundColor: "rgba(8, 13, 25, 0.92)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          ...NAV_FONT,
          color: "#fff",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
          {/* LEFT: WaterfallNav + logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 14, flexShrink: 0 }}>
            <WaterfallNav />
            <Link to="/" style={{ display: "flex", alignItems: "center" }}>
              <img
                src="/rpp-logo-v4.webp"
                alt="Real Property Planning"
                style={{ height: isMobile ? 48 : 56, width: "auto", display: "block", objectFit: "contain" }}
              />
            </Link>
          </div>

          {/* RIGHT: top links + CTA */}
          <div style={{ display: "flex", alignItems: "center", gap: isMobile ? 10 : 22 }}>
            {!isMobile &&
              TOP_LINKS.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`rpp-top-link${pathname === item.href ? " is-active" : ""}`}
                >
                  {item.label}
                </Link>
              ))}

            <a
              href="tel:2069003015"
              style={{
                ...NAV_FONT,
                color: "#fff",
                background: "#1a5fa8",
                padding: isMobile ? "6px 10px" : "4px 14px",
                borderRadius: 6,
                fontWeight: 400,
                fontSize: isMobile ? 11 : 13,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              {isMobile ? "CALL" : "(206) 900-3015"}
            </a>
          </div>
        </div>

        {/* Mobile nav links */}
        {isMobile && (
          <div
            style={{
              display: "flex",
              gap: 14,
              marginTop: 8,
              paddingTop: 6,
              borderTop: "1px solid rgba(255,255,255,0.08)",
              overflowX: "auto",
            }}
          >
            {TOP_LINKS.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`rpp-top-link${pathname === item.href ? " is-active" : ""}`}
                style={{ fontSize: 11 }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
