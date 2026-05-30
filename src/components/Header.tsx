import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

/**
 * Site-wide header. Clean top bar with logo, three primary links, and a
 * gold hamburger that opens a full-height left-side drawer with grouped
 * navigation.
 */
type NavChild = { label: string; href: string };
type NavGroup = { label: string; items: NavChild[] };

const DRAWER_GROUPS: NavGroup[] = [
  {
    label: "Find a Professional",
    items: [
      { label: "Aging Life Care Managers", href: "/aging-life-care-managers" },
      { label: "Certified Appraisers", href: "/real-estate-appraiser" },
      { label: "CPAs & Accountants", href: "/professionals/cpas" },
      { label: "Divorce Attorneys", href: "/attorneys/for-divorce-attorneys" },
      { label: "Estate Liquidators", href: "/estate-liquidators" },
      { label: "Financial Planners & Advisors", href: "/professionals/financial-planners" },
      { label: "Medicare & Benefits Advisors", href: "/medicare-providers" },
      { label: "Mortgage Lenders", href: "/mortgage-lenders" },
      { label: "Probate & Estate Attorneys", href: "/professionals/probate-attorneys" },
      { label: "Real Estate Brokers", href: "/realtor" },
      { label: "Senior Living Advisors", href: "/senior-living-advisors" },
      { label: "Senior Move Managers", href: "/senior-move-managers" },
    ],
  },
  {
    label: "Senior Housing & Care",
    items: [
      { label: "Senior Housing Guide", href: "/articles/senior-housing-guide" },
      { label: "Senior Housing Options", href: "/articles/senior-housing-options" },
      { label: "Senior Housing Costs", href: "/articles/senior-housing-costs" },
      { label: "Independent Living Costs", href: "/articles/independent-living-costs" },
      { label: "Memory Care Costs", href: "/articles/memory-care-costs" },
      { label: "CCRC Costs", href: "/articles/ccrc-costs" },
      { label: "Affordable Senior Housing", href: "/articles/affordable-senior-housing" },
      { label: "Aging in Place With Support", href: "/articles/aging-in-place" },
      { label: "How to Choose Senior Housing", href: "/articles/how-to-choose-senior-housing" },
    ],
  },
  {
    label: "Property, Legal & Estate",
    items: [
      { label: "Probate & Estate Sales", href: "/probate-estate-sales" },
      { label: "Senior Home Sales", href: "/senior-transitions" },
      { label: "For Executors", href: "/executors" },
      { label: "Building Your Trusted Professional Team", href: "/building-your-trusted-professional-team" },
    ],
  },
  {
    label: "Articles",
    items: [
      { label: "The Silver Tsunami", href: "/articles/silver-tsunami" },
      { label: "Senior Housing Guide", href: "/articles/senior-housing-guide" },
      { label: "How to Choose Senior Housing", href: "/articles/how-to-choose-senior-housing" },
      { label: "Senior Housing Costs", href: "/articles/senior-housing-costs" },
      { label: "Independent Living Costs", href: "/articles/independent-living-costs" },
      { label: "Memory Care Costs", href: "/articles/memory-care-costs" },
      { label: "CCRC Costs", href: "/articles/ccrc-costs" },
      { label: "Affordable Senior Housing", href: "/articles/affordable-senior-housing" },
      { label: "Aging in Place With Support", href: "/articles/aging-in-place" },
    ],
  },
  {
    label: "More",
    items: [
      { label: "About", href: "/about" },
      { label: "Resources", href: "/resources" },
      { label: "Services", href: "/services" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

const TOP_LINKS: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
  { label: "I Need a Professional", href: "/building-your-trusted-professional-team" },
  { label: "Contact", href: "/contact" },
];

const fontBody = { fontFamily: "'DM Sans', system-ui, sans-serif" };

// Brand colors
const NAVY = "#1B2B4B";
const GOLD = "#c9a84c";

// Cascade timing
const CASCADE_STEP_MS = 28; // delay between consecutive bars
const CASCADE_BAR_MS = 280; // per-bar transition duration
const HOVER_CLOSE_DELAY_MS = 180;

const Header = () => {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth < 769 : false,
  );
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [settled, setSettled] = useState(false);
  const { pathname } = useLocation();
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<number | null>(null);
  const settleTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 769);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Close on route change
  useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  // Close on Escape
  useEffect(() => {
    if (!drawerOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDrawerOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [drawerOpen]);

  // Lock body scroll when drawer open
  useEffect(() => {
    if (drawerOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [drawerOpen]);

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

  // Inject hover styles once
  useEffect(() => {
    const id = "rpp-drawer-styles";
    if (document.getElementById(id)) return;
    const style = document.createElement("style");
    style.id = id;
    style.innerHTML = `
      .rpp-drawer-link {
        display: block;
        padding: 8px 18px;
        color: #fff;
        text-decoration: none;
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0.02em;
        line-height: 1.4;
        border-left: 2px solid transparent;
        transition: border-color 0.18s ease, color 0.18s ease, background 0.18s ease;
      }
      .rpp-drawer-link:hover, .rpp-drawer-link:focus-visible {
        border-left-color: ${GOLD};
        color: ${GOLD};
        background: rgba(201, 168, 76, 0.08);
        outline: none;
      }
      .rpp-drawer-link.is-active {
        color: ${GOLD};
        border-left-color: ${GOLD};
      }
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
      .rpp-hamburger {
        background: transparent;
        border: 1px solid rgba(201, 168, 76, 0.5);
        color: ${GOLD};
        cursor: pointer;
        border-radius: 6px;
        padding: 6px 10px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        line-height: 1;
        transition: background 0.18s ease, border-color 0.18s ease;
      }
      .rpp-hamburger:hover {
        background: rgba(201, 168, 76, 0.12);
        border-color: ${GOLD};
      }

      /* === Cascading bar animation === */
      .rpp-cascade-bar {
        transform-origin: left center;
        opacity: 0;
        width: var(--cascade-w, 40%);
        transform: translateY(-8px);
        transition:
          opacity 260ms cubic-bezier(0.22, 1, 0.36, 1),
          transform 260ms cubic-bezier(0.22, 1, 0.36, 1),
          width 360ms cubic-bezier(0.22, 1, 0.36, 1);
        transition-delay: var(--cascade-delay-out, 0ms);
        will-change: opacity, transform, width;
      }
      .rpp-drawer-open .rpp-cascade-bar {
        opacity: 1;
        transform: translateY(0);
        width: var(--cascade-w, 40%);
        transition-delay: var(--cascade-delay-in, 0ms);
      }
      /* After all bars have landed, settle to full width */
      .rpp-drawer-settled .rpp-cascade-bar {
        width: 100% !important;
        transition:
          width 280ms cubic-bezier(0.22, 1, 0.36, 1),
          opacity 200ms ease,
          transform 200ms ease;
        transition-delay: 0ms !important;
      }
      @media (prefers-reduced-motion: reduce) {
        .rpp-cascade-bar {
          width: 100% !important;
          transition: opacity 180ms ease !important;
          transition-delay: 0ms !important;
          transform: none !important;
        }
      }
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
          {/* LEFT: hamburger + logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 14, flexShrink: 0 }}>
            <button
              type="button"
              aria-label={drawerOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={drawerOpen}
              onClick={() => setDrawerOpen((v) => !v)}
              className="rpp-hamburger"
              style={{ fontSize: 22, height: 38, width: 44 }}
            >
              ☰
            </button>
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

        {/* Mobile compact top-link strip */}
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

      {/* Spacer to preserve layout below fixed header */}
      <div style={{ height: isMobile ? 92 : 70 }} aria-hidden="true" />

      {/* DRAWER OVERLAY */}
      <div
        onClick={() => setDrawerOpen(false)}
        aria-hidden={!drawerOpen}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.45)",
          opacity: drawerOpen ? 1 : 0,
          pointerEvents: drawerOpen ? "auto" : "none",
          transition: "opacity 0.3s ease",
          zIndex: 90,
        }}
      />

      {/* DRAWER */}
      <aside
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "100vh",
          width: 320,
          maxWidth: "85vw",
          background: NAVY,
          color: "#fff",
          transform: drawerOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.32s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease",
          opacity: drawerOpen ? 1 : 0.6,
          zIndex: 100,
          boxShadow: drawerOpen ? "8px 0 32px rgba(0,0,0,0.4)" : "none",
          overflowY: "auto",
          ...fontBody,
        }}
      >
        {/* Drawer header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "16px 18px",
            borderBottom: "1px solid rgba(255,255,255,0.1)",
            position: "sticky",
            top: 0,
            background: NAVY,
            zIndex: 1,
          }}
        >
          <Link
            to="/"
            onClick={() => setDrawerOpen(false)}
            style={{ display: "flex", alignItems: "center" }}
          >
            <img
              src="/rpp-logo-v4.webp"
              alt="Real Property Planning"
              style={{ height: 44, width: "auto", display: "block" }}
            />
          </Link>
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={() => setDrawerOpen(false)}
            style={{
              background: "transparent",
              border: "none",
              color: "#fff",
              fontSize: 24,
              lineHeight: 1,
              cursor: "pointer",
              padding: 6,
            }}
          >
            ×
          </button>
        </div>

        <nav aria-label="Drawer navigation" style={{ padding: "14px 0 32px" }}>
          {DRAWER_GROUPS.map((group) => (
            <div key={group.label} style={{ marginBottom: 18 }}>
              <div
                style={{
                  color: GOLD,
                  fontSize: 15,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "8px 18px 6px",
                }}
              >
                {group.label}
              </div>
              <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                {group.items.map((item) => (
                  <li key={`${group.label}-${item.href}-${item.label}`}>
                    <Link
                      to={item.href}
                      onClick={() => setDrawerOpen(false)}
                      className={`rpp-drawer-link${pathname === item.href ? " is-active" : ""}`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Header;
