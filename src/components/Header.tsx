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


const fontBody = { fontFamily: "'DM Sans', system-ui, sans-serif" };
const GOLD = "#c9a84c";

const Header = () => {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth < 769 : false,
  );
  const [scrolled, setScrolled] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 769);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Pages without a hero image — nav should be solid from the start
  const NON_HERO_ROUTES = new Set<string>([
    "/disclaimer",
    "/sitemap",
    "/terminology",
    "/faq",
    "/search",
    "/404",
  ]);
  const hasHero = !NON_HERO_ROUTES.has(pathname);
  const useSolid = scrolled || !hasHero;
  const headerBackground = useSolid
    ? "rgba(10,22,40,1)"
    : "linear-gradient(to bottom, rgba(10,22,40,0.95) 0%, rgba(10,22,40,0) 100%)";

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
    const id = "rpp-toplink-styles-v5";
    if (document.getElementById(id)) return;
    const style = document.createElement("style");
    style.id = id;
    style.innerHTML = `
      .rpp-top-link {
        color: #ffffff;
        text-decoration: none;
        font-size: 13px;
        font-weight: 300;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        font-family: Georgia, serif;
        padding: 6px 4px;
        border-bottom: 1px solid transparent;
        transition: opacity 0.3s ease, border-color 0.3s ease;
        white-space: nowrap;
        display: inline-flex;
        align-items: center;
      }
      .rpp-top-link:hover { opacity: 0.7; }
      .rpp-top-link.is-active { border-bottom-color: ${GOLD}; }
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
          background: headerBackground,
          backdropFilter: useSolid ? "blur(10px)" : "none",
          WebkitBackdropFilter: useSolid ? "blur(10px)" : "none",
          borderBottom: useSolid ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
          transition: "background 400ms ease, border-color 400ms ease, backdrop-filter 400ms ease",
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
                color: "#fff",
                background: "#1a5fa8",
                padding: isMobile ? "6px 10px" : "4px 12px",
                borderRadius: 6,
                fontWeight: 400,
                fontSize: isMobile ? 11 : 13,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                fontFamily: "Georgia, serif",
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

    </>
  );
};

export default Header;
