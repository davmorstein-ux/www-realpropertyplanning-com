import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import WaterfallNav from "./WaterfallNav";

const TOP_LINKS = [
  { label: "Home", href: "/" },
  { label: "I Need a Professional", href: "/building-your-trusted-professional-team" },
  { label: "Contact", href: "/contact" },
];

const fontBody = { fontFamily: "'DM Sans', system-ui, sans-serif" };
const GOLD = "#c9a84c";

const Header = () => {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth < 769 : false,
  );
  const { pathname } = useLocation();

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 769);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
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
  }, []);

  useEffect(() => {
    const id = "rpp-toplink-styles";
    if (document.getElementById(id)) return;
    const style = document.createElement("style");
    style.id = id;
    style.innerHTML = `
      .rpp-top-link {
        color: rgba(255,255,255,0.92);
        text-decoration: none;
        font-size: 13px;
        font-weight: 700;
        letter-spacing: 0.06em;
        padding: 6px 4px;
        border-bottom: 1px solid transparent;
        transition: color 0.18s ease, border-color 0.18s ease;
        white-space: nowrap;
      }
      .rpp-top-link:hover { color: ${GOLD}; }
      .rpp-top-link.is-active { border-bottom-color: #fff; }
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
          width: "100%",
          zIndex: 50,
          padding: isMobile ? "6px 16px" : "6px 32px 4px",
          backgroundColor: "rgba(8, 13, 25, 0.92)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          ...fontBody,
          color: "#fff",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
          }}
        >
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
                ...fontBody,
                color: "#fff",
                background: "#1a5fa8",
                padding: isMobile ? "6px 10px" : "4px 12px",
                borderRadius: 6,
                fontWeight: 700,
                fontSize: isMobile ? 11 : 13,
                letterSpacing: "0.06em",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              {isMobile ? "CALL" : "(206) 900-3015"}
            </a>
          </div>
        </div>

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
                style={{ fontSize: 12 }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </header>

      <div style={{ height: isMobile ? 92 : 70 }} aria-hidden="true" />
    </>
  );
};

export default Header;
