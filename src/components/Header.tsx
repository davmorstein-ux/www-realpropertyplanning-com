import { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import WaterfallNav from "./WaterfallNav";
import SiteSearchBar from "./SiteSearchBar";
import LanguageSwitcher from "./LanguageSwitcher";
import PrimaryNav from "./PrimaryNav";
import { PRIMARY_NAV } from "@/lib/primaryNav";

const NAV_FONT = { fontFamily: "'Raleway', 'Gill Sans', 'Century Gothic', sans-serif" };

/* Contact was removed from the top nav — it now lives on the About page and in
   the WaterfallNav quick-links strip. The CALL button covers urgent contact.
   AFH Club was also removed; it is reachable from the homepage body. */
/* Desktop logo height. The logo now occupies its own column spanning both the
   nav row and the search row, so it can be far larger without making the
   header taller — the two-column layout is actually SHORTER than the previous
   stacked one (~112px vs ~140px) while the mark nearly doubles. Adjust this
   single value to taste. */
const DESKTOP_LOGO_HEIGHT = 66;

/* Shared column geometry for the desktop header. The nav row and the search
   row are laid out on identical tracks so every element lines up vertically:
   a hamburger-width leading slot, a flexible middle, and a fixed trailing slot
   that puts the phone button at the right edge. */
const HAMBURGER_SLOT = 56; // bordered trigger button in the search row
const COLUMN_GAP = 12;
const CTA_SLOT = 215; // width of the phone button / empty slot above it

/* Search field width. It used to be flex:1 and swallowed the whole middle of
   the search row, which read as oversized next to the rest of the header.
   It is now a fixed basis that may shrink but not grow; a flexible spacer to
   its right absorbs the leftover space and keeps the phone button flush with
   the right edge. Adjust this single value to taste. */
const SEARCH_MAX_WIDTH = 520;

/* The compact (mobile) header still renders plain links. The desktop header
   uses PrimaryNav, which adds the dropdown menus. Both read PRIMARY_NAV so
   the label set cannot diverge between the two layouts. */
const CURATED_LINKS = PRIMARY_NAV;

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
    /* The guard below skips injection when a style tag with this id already
       exists, so the id must change whenever the CSS changes or returning
       visitors keep the old rules. These rules now only style the compact
       layout's links — the desktop nav carries its own styles in PrimaryNav. */
    const id = "rpp-toplink-styles-v9";
    if (document.getElementById(id)) return;
    const style = document.createElement("style");
    style.id = id;
    style.innerHTML = `
      .rpp-top-link {
        color: #272421;
        text-decoration: none;
        font-family: 'Raleway', 'Gill Sans', 'Century Gothic', sans-serif;
        font-size: 13px;
        font-weight: 600;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        /* HOVER AREA FIX — was padding: 6px 4px with no height control.
           index.css contains:
               nav a { height: 100% !important; padding-top: 0 !important;
                       padding-bottom: 0 !important; }
           which stretched every nav link to the full height of the nav row,
           so the hover state fired well away from the text.

           .rpp-top-link is a class (0,1,0) and beats "nav a" (0,0,2), so
           these !important flags hold. Height now hugs the label. */
        padding: 5px 8px !important;
        height: auto !important;
        align-self: center !important;
        border-bottom: 1px solid transparent;
        transition: color 0.18s ease, border-color 0.18s ease;
        text-align: center;
        line-height: 1.2;
        display: inline-flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .rpp-top-link-line {
        display: block;
        white-space: nowrap;
      }
      .rpp-top-link:hover { color: #7f1d1d; }
      .rpp-top-link.is-active { border-bottom-color: #7f1d1d; }
      .rpp-top-link:focus-visible {
        outline: 2px solid #7f1d1d;
        outline-offset: 3px;
        border-radius: 3px;
      }
      .rpp-curated-link { display: inline-flex; }
      @media (min-width: 769px) {
        .rpp-header-phone { font-size: 22px !important; }
      }
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
      <a href="#main-content"
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
            : "calc(env(safe-area-inset-top, 0px) + 8px) 24px 4px",
          /* Cream, matching the page background, so the header reads as part
             of the page rather than a bar sitting on top of it. Everything
             inside had to flip from light to dark when this changed — nav
             labels, carets, underlines, the divider and the hamburger. If this
             ever goes back to a dark colour, all of those flip back too. */
          backgroundColor: "rgba(245, 240, 232, 0.96)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(39,36,33,0.14)",
          ...NAV_FONT,
          color: "#272421",
        }}
      >
        {/* Two-column desktop header: the logo occupies a full-height left
            column while the nav links and search stack in the right column.
            Mobile keeps the original stacked structure untouched. */}
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
                    src="/rpp-logo-v8.webp"
                    alt="Real Property Planning"
                    style={{ height: 38, width: "auto", maxWidth: "100%", display: "block", objectFit: "contain" }}
                    sizes="100vw"
                    decoding="async"
                    width={1607}
                    height={332}
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
                    {item.lines.map((line) => (
                      <span key={line} className="rpp-top-link-line">
                        {line}
                      </span>
                    ))}
                  </Link>
                ))}
                <LanguageSwitcher compact={isMobile} />
                <a href="tel:2069003015"
                  className="rpp-header-phone"
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

            <div style={{ marginTop: 10, paddingTop: 10, borderTop: "1px solid rgba(39,36,33,0.12)" }}>
              <SiteSearchBar />
            </div>
          </>
        ) : (
          <div style={{ display: "flex", alignItems: "stretch", gap: 24, minWidth: 0 }}>
            {/* LEFT COLUMN — logo only. The hamburger moved into the search
                row so the mark can sit flush against the left edge. */}
            <div style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
              <Link to="/" style={{ display: "flex", alignItems: "center" }}>
                <img
                  src="/rpp-logo-v8.webp"
                  alt="Real Property Planning"
                  style={{
                    height: DESKTOP_LOGO_HEIGHT,
                    width: "auto",
                    display: "block",
                    objectFit: "contain",
                  }}
                  sizes="100vw"
                  decoding="async"
                  width={1607}
                  height={332}
                />
              </Link>
            </div>

            {/* RIGHT COLUMN — nav row above, search row below, on shared tracks */}
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
              <nav aria-label="Primary" style={{ display: "flex", alignItems: "center", gap: COLUMN_GAP, minWidth: 0 }}>
                {/* Leading spacer matches the hamburger slot in the row below,
                    so the first nav link starts exactly above the search field. */}
                <div style={{ width: HAMBURGER_SLOT, flexShrink: 0 }} aria-hidden="true" />

                {/* Desktop primary nav with dropdown menus. The compact layout
                    above still renders plain links; PrimaryNav hides itself
                    below 950px so the two never show at once. */}
                <PrimaryNav />

                {/* Contact used to sit here, centred above the phone button. It has
                    been removed from the nav (it now lives on the About page), but
                    the empty slot is deliberately kept: it holds the nav row and the
                    search row on the same column tracks, so the logo and phone
                    button below stay aligned. Do not delete it. */}
                <div style={{ width: CTA_SLOT, flexShrink: 0 }} aria-hidden="true" />
              </nav>

              <div style={{ marginTop: 10, paddingTop: 10, borderTop: "1px solid rgba(39,36,33,0.12)" }}>
                <div style={{ display: "flex", alignItems: "stretch", gap: COLUMN_GAP, minWidth: 0 }}>
                  {/* Hamburger moved down here so it is horizontally aligned
                      with the search field, freeing the logo to sit flush left. */}
                  <div
                    style={{
                      width: HAMBURGER_SLOT,
                      flexShrink: 0,
                      display: "flex",
                      /* stretch so the trigger fills the search row's height */
                      alignItems: "stretch",
                      justifyContent: "center",
                    }}
                  >
                    <WaterfallNav />
                  </div>

                  <div
                    style={{
                      flexGrow: 0,
                      flexShrink: 1,
                      flexBasis: SEARCH_MAX_WIDTH,
                      minWidth: 0,
                    }}
                  >
                    <SiteSearchBar />
                  </div>

                  {/* Flexible spacer. Without it the shortened search field would
                      leave slack at the END of the row, pushing the phone button
                      off the right edge and out of alignment with the empty slot
                      above it in the nav row. */}
                  <div style={{ flex: 1, minWidth: 0 }} aria-hidden="true" />

                  {/* Language sits immediately left of the phone button. */}
                  <div style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
                    <LanguageSwitcher />
                  </div>

                  <a href="tel:2069003015"
                    className="rpp-header-phone"
                    style={{
                      ...NAV_FONT,
                      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif",
                      color: "#fff",
                      background: "#1f6fb2",
                      borderRadius: 8,
                      fontWeight: 700,
                      fontSize: 22,
                      letterSpacing: "0.02em",
                      textTransform: "uppercase",
                      textDecoration: "none",
                      whiteSpace: "nowrap",
                      width: CTA_SLOT,
                      flexShrink: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    (206) 900-3015
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
