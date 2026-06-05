import { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import WaterfallNav from "./WaterfallNav";

const NAV_FONT = { fontFamily: "'Raleway', 'Gill Sans', 'Century Gothic', sans-serif" };
const GOLD = "#E8C97A";

const SENIOR_TRANSITION_ITEMS = [
  { label: "Senior Home Sales", href: "/senior-transitions" },
  { label: "Senior Living Advisors", href: "/senior-living-advisors" },
  { label: "Senior Move Managers", href: "/senior-move-managers" },
  { label: "Aging Life Care Managers", href: "/aging-life-care-managers" },
  { label: "Medicare & Benefits Advisors", href: "/medicare-providers" },
];
f;

const TOP_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "Probate & Estate",
    href: "/probate-estate-sales",
    items: [
      { label: "Probate & Estate Sales", href: "/probate-estate-sales" },
      { label: "For Executors", href: "/executors" },
      { label: "Executors, POAs & Trustees", href: "/executors" },
      { label: "Estate Planning Attorneys", href: "/professionals/estate-planning-attorneys" },
      { label: "Probate Attorneys", href: "/professionals/probate-attorneys" },
      { label: "Certified Appraisers", href: "/real-estate-appraiser" },
      { label: "Estate Liquidators", href: "/estate-liquidators" },
    ],
  },
  {
    label: "Senior Transitions",
    href: "/senior-transitions",
    items: [
      { label: "Senior Home Sales", href: "/senior-transitions" },
      { label: "Senior Living Advisors", href: "/senior-living-advisors" },
      { label: "Senior Move Managers", href: "/senior-move-managers" },
      { label: "Aging Life Care Managers", href: "/aging-life-care-managers" },
      { label: "Medicare & Benefits Advisors", href: "/medicare-providers" },
    ],
  },
  {
    label: "Resources",
    href: "/guides-and-resources",
    items: [
      { label: "All Resources", href: "/guides-and-resources" },
      { label: "Financial Planners", href: "/for-financial-planners" },
      { label: "CPAs & Accountants", href: "/professionals/cpas" },
      { label: "Attorneys", href: "/for-attorneys" },
      { label: "Executors, POAs & Trustees", href: "/executors" },
      { label: "Mortgage Lenders", href: "/mortgage-lenders" },
      { label: "Real Estate Brokers", href: "/realtor" },
      { label: "Certified Appraisers", href: "/real-estate-appraiser" },
      { label: "Senior Transitions", href: "/senior-transitions", hasFlyout: true },
    ],
  },
  {
    label: "Articles",
    href: "/articles",
    items: [
      { label: "The Silver Tsunami", href: "/articles/silver-tsunami" },
      { label: "Senior Housing Guide", href: "/articles/senior-housing-guide" },
      { label: "Senior Housing Options", href: "/articles/senior-housing-options" },
      { label: "Senior Housing Costs", href: "/articles/senior-housing-costs" },
      { label: "How to Choose Senior Housing", href: "/articles/how-to-choose-senior-housing" },
      { label: "Independent Living Costs", href: "/articles/independent-living-costs" },
      { label: "Memory Care Costs", href: "/articles/memory-care-costs" },
      { label: "CCRC Costs", href: "/articles/ccrc-costs" },
      { label: "Affordable Senior Housing", href: "/articles/affordable-senior-housing" },
      { label: "Aging in Place With Support", href: "/articles/aging-in-place" },
    ],
  },
  { label: "AFH Club", href: "/afh-club" },
  { label: "Contact", href: "/contact" },
];
// Flyout submenu that appears to the right of a dropdown item
function FlyoutMenu({ items, visible }: { items: { label: string; href: string }[]; visible: boolean }) {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: "calc(100% + 4px)",
        background: "rgba(8,13,25,0.97)",
        backdropFilter: "blur(12px)",
        borderRadius: 6,
        border: "1px solid rgba(232,201,122,0.15)",
        minWidth: 220,
        padding: "8px 0",
        zIndex: 300,
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transform: visible ? "translateX(0)" : "translateX(-8px)",
        transition: "opacity 0.2s ease, transform 0.2s ease",
        boxShadow: "0 16px 48px rgba(0,0,0,0.4)",
      }}
    >
      {items.map((sub) => (
        <Link
          key={sub.href}
          to={sub.href}
          style={{
            display: "block",
            padding: "9px 20px",
            color: "rgba(255,255,255,0.95)",
            textDecoration: "none",
            fontFamily: "'Raleway', 'Gill Sans', sans-serif",
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            transition: "color 0.18s ease, background 0.18s ease, border-color 0.18s ease",
            whiteSpace: "nowrap",
            borderBottom: "1px solid transparent",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.color = GOLD;
            (e.currentTarget as HTMLAnchorElement).style.background = "rgba(232,201,122,0.06)";
            (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = GOLD;
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.95)";
            (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
            (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = "transparent";
          }}
        >
          {sub.label}
        </Link>
      ))}
    </div>
  );
}

// A single dropdown item that may have a flyout
function DropdownItem({
  sub,
  pathname,
}: {
  sub: { label: string; href: string; hasFlyout?: boolean };
  pathname: string;
}) {
  const [flyoutOpen, setFlyoutOpen] = useState(false);
  const flyoutTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  if (!sub.hasFlyout) {
    return (
      <Link
        to={sub.href}
        style={{
          display: "block",
          padding: "9px 20px",
          color: "rgba(255,255,255,0.95)",
          textDecoration: "none",
          fontFamily: "'Raleway', 'Gill Sans', sans-serif",
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          transition: "color 0.18s ease, background 0.18s ease, border-color 0.18s ease",
          whiteSpace: "nowrap",
          borderBottom: "1px solid transparent",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.color = GOLD;
          (e.currentTarget as HTMLAnchorElement).style.background = "rgba(232,201,122,0.06)";
          (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = GOLD;
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.95)";
          (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
          (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = "transparent";
        }}
      >
        {sub.label}
      </Link>
    );
  }

  // Item with flyout — styled identically to regular items
  const flyoutItemStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "9px 20px",
    color: flyoutOpen ? GOLD : "rgba(255,255,255,0.95)",
    textDecoration: "none",
    fontFamily: "'Raleway', 'Gill Sans', sans-serif",
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    cursor: "pointer",
    background: flyoutOpen ? "rgba(232,201,122,0.06)" : "transparent",
    borderBottom: `1px solid ${flyoutOpen ? GOLD : "transparent"}`,
    transition: "color 0.18s ease, background 0.18s ease",
    whiteSpace: "nowrap",
    gap: 6,
    lineHeight: 1,
  };

  return (
    <div
      style={{ position: "relative" }}
      onMouseEnter={() => {
        if (flyoutTimer.current) clearTimeout(flyoutTimer.current);
        setFlyoutOpen(true);
      }}
      onMouseLeave={() => {
        flyoutTimer.current = setTimeout(() => setFlyoutOpen(false), 200);
      }}
    >
      <Link to={sub.href} style={flyoutItemStyle}>
        {sub.label}
        {/* Right-arrow indicator */}
        <svg
          width="9"
          height="9"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ opacity: 0.7, transform: "rotate(-90deg)", flexShrink: 0 }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </Link>
      <FlyoutMenu items={SENIOR_TRANSITION_ITEMS} visible={flyoutOpen} />
    </div>
  );
}

function NavItem({ item, pathname }: { item: (typeof TOP_LINKS)[0]; pathname: string }) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };

  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 300);
  };

  if (!item.items) {
    return (
      <Link to={item.href} className={`rpp-top-link${pathname === item.href ? " is-active" : ""}`}>
        {item.label}
      </Link>
    );
  }

  return (
    <div style={{ position: "relative" }} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <Link
        to={item.href}
        className={`rpp-top-link${pathname === item.href ? " is-active" : ""}`}
        style={{ display: "inline-flex", alignItems: "center", gap: 5 }}
      >
        {item.label}
        <svg
          width="9"
          height="9"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            transition: "transform 0.25s ease",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            opacity: 0.7,
          }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </Link>

      {/* Dropdown */}
      <div
        style={{
          position: "absolute",
          top: "calc(100% + 10px)",
          left: "50%",
          background: "rgba(8,13,25,0.97)",
          backdropFilter: "blur(12px)",
          borderRadius: 6,
          border: "1px solid rgba(232,201,122,0.15)",
          minWidth: 220,
          padding: "8px 0",
          zIndex: 200,
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transform: open ? "translateX(-50%) translateY(0)" : "translateX(-50%) translateY(-8px)",
          transition: "opacity 0.25s ease, transform 0.25s ease",
          boxShadow: "0 16px 48px rgba(0,0,0,0.4)",
        }}
      >
        {/* Small arrow pointer */}
        <div
          style={{
            position: "absolute",
            top: -5,
            left: "50%",
            transform: "translateX(-50%)",
            width: 10,
            height: 10,
            background: "rgba(8,13,25,0.97)",
            border: "1px solid rgba(232,201,122,0.15)",
            borderBottom: "none",
            borderRight: "none",
            rotate: "45deg",
          }}
        />

        {item.items.map((sub) => (
          <DropdownItem key={sub.href} sub={sub} pathname={pathname} />
        ))}
      </div>
    </div>
  );
}

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
            {!isMobile && TOP_LINKS.map((item) => <NavItem key={item.href} item={item} pathname={pathname} />)}

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

        {/* Mobile nav */}
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
