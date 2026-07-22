import { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import WaterfallNav from "./WaterfallNav";
import SiteSearchBar from "./SiteSearchBar";

const NAV_FONT = { fontFamily: "'Raleway', 'Gill Sans', 'Century Gothic', sans-serif" };

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
      { label: "Long-Term Care Options", href: "/long-term-care" },
    ],
  },
  {
    label: "Resources",
    href: "/guides-and-resources",
    items: [
      { label: "All Resources", href: "/guides-and-resources" },
      { label: "Cost of Care Calculator", href: "/cost-of-care-calculator" },
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
      { label: "The Senior Housing Guide", href: "/articles/senior-housing-guide" },
      { label: "Senior Housing Options", href: "/articles/senior-housing-options" },
      { label: "Senior Housing Costs", href: "/articles/senior-housing-costs" },
      { label: "How to Choose Senior Housing", href: "/articles/how-to-choose-senior-housing" },
      { label: "Independent Living Costs", href: "/articles/independent-living-costs" },
      { label: "Memory Care Costs", href: "/articles/memory-care-costs" },
      { label: "CCRC Costs", href: "/articles/ccrc-costs" },
      { label: "Affordable Senior Housing", href: "/articles/affordable-senior-housing" },
      { label: "Aging in Place With Support", href: "/articles/aging-in-place" },
      { label: "Wills, Trusts, and Other Options", href: "/articles/wills-trusts-other-options" },
    ],
  },
  {
    label: "AFH Club",
    href: "/afh-club",
    items: [
      { label: "AFH Marketplace", href: "/afh-marketplace" },
      { label: "AFH Resources", href: "/afh-club/resources" },
      { label: "AFH Listings", href: "/afh-club/listings" },
      { label: "Management Companies", href: "/afh-club/management-companies" },
      { label: "AFH Calculators", href: "/afh-club/calculators" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

const CONTACT_LINK = TOP_LINKS[TOP_LINKS.length - 1];

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
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
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

        {/* Always-visible site search — sits under the nav on every page */}
        <div style={{ marginTop: 10, paddingTop: 10, borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <SiteSearchBar />
        </div>
      </header>
    </>
  );
};

export default Header;
