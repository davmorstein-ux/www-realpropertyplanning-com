
import { Suspense, useEffect, useLayoutEffect, useState, useRef, type CSSProperties } from "react";

/* Layout effect in the browser (runs before paint, so the phone header appears
   with no flicker); plain effect during the build-time render, where layout
   effects do nothing and only warn. */
const useBeforePaint = typeof window !== "undefined" ? useLayoutEffect : useEffect;
import { Link, useLocation } from "react-router-dom";
import AFHClubQuickLinks from "@/components/AFHClubQuickLinks";
import SectionStrip from "@/components/SectionStrip";
import WaterfallNav from "./WaterfallNav";
import { lazy } from "@/lib/chunkRecovery";
/* Loaded when search is opened (Oct 6, 2026): search sits behind an icon on
   every screen size now, and its page index was 18 KB of every first download. */
const SiteSearchBar = lazy(() => import("./SiteSearchBar"));
import PrimaryNav from "./PrimaryNav";
import { PRIMARY_NAV } from "@/lib/primaryNav";
/* Oct 27, 2026 (performance): logo and marble from src/assets (content-named, long-cached;
   public/ files had no cache lifetime) plus a 480px logo for phones. */
import logo480 from "@/assets/perf/rpp-logo-v27-480.webp";
import logo640 from "@/assets/perf/rpp-logo-v27-640.webp";
import logo1280 from "@/assets/perf/rpp-logo-v27-1280.webp";
import marbleDesktop from "@/assets/perf/rpp-header-marble-v4.webp";
import marbleMobile from "@/assets/perf/rpp-header-marble-mobile-v5.webp";

const NAV_FONT = { fontFamily: "'DM Sans', 'DM Sans Fallback', system-ui, sans-serif" };

/* Header controls (Oct 29, 2026 refresh, from the mock-up David approved):
   thin navy rings for search and call, and a navy outlined pill for Get
   Connected. They replace the "engraved into the marble" squares and etched
   icons of Oct 24-26. 44px tap targets throughout. */
const HEADER_NAVY = "#1B3A6B";
const RING_BUTTON: CSSProperties = {
  width: 44,
  minWidth: 44,
  height: 44,
  padding: 0,
  borderRadius: "50%",
  border: `1.75px solid ${HEADER_NAVY}`,
  boxSizing: "border-box",
  background: "transparent",
  color: HEADER_NAVY,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  cursor: "pointer",
  textDecoration: "none",
};
const SearchGlyph = ({ size }: { size: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true" focusable="false">
    <circle cx="10.5" cy="10.5" r="6.5" />
    <path d="M15.5 15.5 20 20" />
  </svg>
);
const PhoneGlyph = ({ size }: { size: number }) => (
  <svg className="rpp-header-phone-icon" viewBox="0 0 24 24" width={size} height={size} style={{ width: size, height: size }} fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.4-1.2a2 2 0 0 1 2.1-.4c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2z" />
  </svg>
);

/* Contact was removed from the top nav — it now lives on the About page and in
   the WaterfallNav quick-links strip. The CALL button covers urgent contact.
   AFH Club was also removed; it is reachable from the homepage body. */
/* Desktop logo height. The logo now occupies its own column spanning both the
   nav row and the search row, so it can be far larger without making the
   header taller — the two-column layout is actually SHORTER than the previous
   stacked one (~112px vs ~140px) while the mark nearly doubles. Adjust this
   single value to taste. */
/* Logo height. The whole desktop header is now ONE row — logo, nav, search
   and hamburger — so this value directly controls how much room the nav has.
   At 52px the logo is ~252px wide; every pixel added here is a pixel taken
   from the five nav labels. Lower it before shortening the labels. */
/* Raised from 52. The brand column is exactly the logo's width, and the search
   field lives inside it beneath the hamburger — at 52 the field was too narrow
   and clipped its own placeholder. Every point here widens the search. */
/* Oct 24, 2026: 55 with the wider v13 logo keeps the brand column at ~295px,
   the same room the flat v11 logo took at 60, so the nav keeps its space. */
const DESKTOP_LOGO_HEIGHT = 55;

/* The logo file is 1280x250 (rpp-logo-v27, Oct 29, 2026: David's new logo,
   cleaned up from a ChatGPT render, with PLANNING centred under PROPERTY and
   the chimney kept; transparent background). The full-size master is
   docs/brand/rpp-logo-v27-master.png (2125x415); regenerate the 480/640/1280
   webp files from it, never from an earlier export. Replaced v26 (1280x240,
   the 3D stone mark).
   Deriving its rendered width from the height above
   means the search field beneath it can be given exactly the same width — and
   stays matched if the logo height is ever changed. Hardcoding a pixel value
   here would silently break that alignment. */
const LOGO_ASPECT = 1280 / 250;
const LOGO_WIDTH = Math.round(DESKTOP_LOGO_HEIGHT * LOGO_ASPECT);

/* Search field width. It shares the nav tier now rather than sitting beneath
   the logo, so it is no longer tied to the logo's width and can be sized for
   its own placeholder. */
/* Search field width — 25% longer than the previous 250px, and scaling with
   the window so it stays generous on a wide screen without crowding the nav
   labels on a laptop. */

/* Shared column geometry for the desktop header. The nav row and the search
   row are laid out on identical tracks so every element lines up vertically:
   a hamburger-width leading slot, a flexible middle, and a fixed trailing slot
   that puts the phone button at the right edge. */

/* Search field width. It used to be flex:1 and swallowed the whole middle of
   the search row, which read as oversized next to the rest of the header.
   It is now a fixed basis that may shrink but not grow; a flexible spacer to
   its right absorbs the leftover space and keeps the phone button flush with
   the right edge. Adjust this single value to taste. */
/* Search width on the single-row header. Kept as a visible field rather than
   an icon that expands: an always-present field is easier to find, which
   matters more here than the space an icon would save. */
/* Search width in the utility row. It shares that row with the language
   switcher and the phone button and may shrink below this on narrow screens. */

/* The compact (mobile) header still renders plain links. The desktop header
   uses PrimaryNav, which adds the dropdown menus. Both read PRIMARY_NAV so
   the label set cannot diverge between the two layouts. */
const CURATED_LINKS = PRIMARY_NAV;

const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  /* Starts false on every render, server and browser alike, so a prerendered
     page hydrates without a mismatch; the effect below sets the real value
     before the first paint. */
  const [isMobile, setIsMobile] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    setSearchOpen(false);
  }, [pathname]);
  const headerRef = useRef<HTMLElement>(null);

  /* The final nav entry is centred beneath the phone button, which means it
     needs the phone's width. That was a hardcoded estimate and it kept drifting
     out of alignment whenever the button's padding or type size changed. This
     measures the real element and publishes it as a CSS variable the nav reads,
     so the two stay locked together. */
  const phoneRef = useRef<HTMLAnchorElement>(null);
  const [phoneWidth, setPhoneWidth] = useState(215);

  useEffect(() => {
    const el = phoneRef.current;
    if (!el) return;
    const measure = () => setPhoneWidth(Math.round(el.getBoundingClientRect().width));
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [isMobile]);

  useBeforePaint(() => {
    /* Keyed off WIDTH only. `resize` fires on every URL-bar show/hide during a
       mobile scroll, but the width has not changed — re-running this on height
       changes re-rendered the entire header mid-scroll for no reason. */
    let lastWidth = typeof window !== "undefined" ? window.innerWidth : 0;
    const check = () => {
      if (window.innerWidth === lastWidth) return;
      lastWidth = window.innerWidth;
      setIsMobile(window.innerWidth < 769);
    };
    setIsMobile(window.innerWidth < 769);
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
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
        font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif;
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
      .rpp-top-link:hover { color: #1B3A6B; }
      .rpp-top-link.is-active { border-bottom-color: #1B3A6B; }
      .rpp-top-link:focus-visible {
        outline: 2px solid #1B3A6B;
        outline-offset: 3px;
        border-radius: 3px;
      }
      .rpp-curated-link { display: inline-flex; }
      /* Ring buttons and the Get Connected pill (Oct 29, 2026 refresh) fill
         navy on hover, on devices that really hover. */
      .rpp-header-outline, header .rpp-header-search-toggle { transition: background-color .15s ease, color .15s ease, border-color .15s ease; }
      @media (hover: hover) {
        a.rpp-header-outline.rpp-header-outline:hover,
        header button.rpp-header-search-toggle.rpp-header-search-toggle:hover { background: #1B3A6B !important; color: #ffffff !important; border-color: #1B3A6B !important; }
      }
      a.rpp-header-outline.rpp-header-outline:focus-visible,
      header button.rpp-header-search-toggle:focus-visible { outline: 2px solid #1B3A6B; outline-offset: 2px; }
      .rpp-header-phone-icon { flex-shrink: 0; }
      @media (max-width: 950px) {
        .rpp-curated-link { display: none !important; }
      }
    `;
    document.head.appendChild(style);
  }, []);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    /* JITTER FIX. On mobile, hiding and revealing the browser's URL bar during
       a scroll fires `resize` continuously. This used to write --header-height
       on every one of those events, and because layout across the site reads
       that variable, each write forced a style recalculation mid-scroll — the
       header appeared to shudder.

       Two guards: only write when the height has actually changed by more than
       half a pixel, and defer the write to the next animation frame so it never
       lands in the middle of the browser's own scroll work. A ResizeObserver
       callback that writes styles synchronously can also re-trigger itself. */
    let last = -1;
    let frame = 0;

    const setVar = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const h = el.getBoundingClientRect().height;
        if (Math.abs(h - last) < 0.5) return;
        last = h;
        document.documentElement.style.setProperty("--header-height", `${h}px`);
      });
    };

    setVar();

    const observer = new ResizeObserver(setVar);
    observer.observe(el);
    window.addEventListener("orientationchange", setVar);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
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
          /* FIXED ON PHONES, STICKY ON DESKTOP: the tremor fix.

             A sticky element has to be re-positioned by the browser on every
             scroll frame. On phones, where scrolling runs on a separate thread
             from the page, that re-positioning can land a frame late, and the
             header shivers in both directions. Layout was measured rock-stable
             while it happened (top 0, constant height, no style writes), and
             removing the translateZ/will-change layer did not cure it, so the
             mechanism itself was removed instead: a fixed element is never
             re-positioned during a scroll, so there is nothing to lag.

             The spacer rendered straight after the closing header tag keeps the
             header's exact footprint in the flow, so every page lays out
             precisely as it did when the header was sticky. If the header is
             ever made sticky on mobile again, delete the spacer too or every
             page gains a header's worth of blank space. */
          position: isMobile ? "fixed" : "sticky",
          top: 0,
          left: 0,
          right: 0,
          width: isMobile ? "100%" : undefined,
          boxSizing: "border-box",
          zIndex: 50,
          margin: 0,
          /* env(safe-area-inset-top) is only meaningful when the header is at
             the very top of the viewport. Once it is stuck and the page has
             scrolled, iOS reports a different inset as the URL bar collapses,
             which changed the header's own height mid-scroll and fed straight
             back into the jitter. Fixed padding on mobile; the inset is handled
             by the sticky offset instead. */
          padding: isMobile
            ? "10px 12px 6px"
            /* Oct 24, 2026: 16px top (was 8px); the logo touched the top
               edge of the header. */
            : "calc(env(safe-area-inset-top, 0px) + 16px) 24px 4px",
          /* Cream, matching the page background, so the header reads as part
             of the page rather than a bar sitting on top of it. Everything
             inside had to flip from light to dark when this changed — nav
             labels, carets, underlines, the divider and the hamburger. If this
             ever goes back to a dark colour, all of those flip back too. */
          backgroundColor: "#F5F0E8",
          /* Subtle warm marble behind the whole header (Oct 24, 2026), to sit
             under the 3D logo. The marble is a separate image on purpose — the
             logo file is transparent — so the stone never shows a seam or a
             mismatched rectangle at any screen width. "cover" anchored top-left
             keeps the veins still as the header changes height. The cream
             colour above shows while the image loads. Opaque now, so the
             desktop backdrop blur below no longer has anything to blur. */
          /* -v2 (Oct 24, 2026): veins about 55% stronger; David found the
             first marble too subtle. -v3/-v4 (same day): veins redrawn as
             long hand-placed strokes spread evenly across the whole bar and
             kept at ~40% behind the logo; the earlier pattern bunched most
             veins up behind the logo. -v4/-v5 (Oct 25, 2026): replaced the
             generated pattern with a real marble photograph David supplied,
             warmed to the cream and softened (veins at ~90% of the photo's
             own depth) so it stays subtle and evenly spread. */
          /* Oct 29, 2026 header refresh (David approved the mock-up): a
             62% cream wash over the same photo makes the marble a faint
             texture rather than a stone slab, so the flatter tiles and ring
             buttons below it don't fight it. Lower the 0.62 to bring the
             veins back. */
          backgroundImage: isMobile
            ? `linear-gradient(rgba(250,248,244,0.62), rgba(250,248,244,0.62)), url(${marbleMobile})`
            : `linear-gradient(rgba(250,248,244,0.62), rgba(250,248,244,0.62)), url(${marbleDesktop})`,
          backgroundSize: "cover",
          backgroundPosition: "left top",
          backgroundRepeat: "no-repeat",
          /* Blur is dropped on mobile. backdrop-filter on a sticky element is
             one of the most expensive things a mobile browser can be asked to
             do — it re-samples what is behind the header on every scroll frame.
             The background opacity is raised to compensate, so the header still
             reads as solid. Desktop keeps the blur, where it is affordable. */
          backdropFilter: "none",
          WebkitBackdropFilter: "none",
          /* Own compositing layer, so scrolling repaints the page beneath it
             without repainting the header itself. DESKTOP ONLY.

             On phones this hack was the tremor. A position:sticky element is
             already promoted to its own layer by every current mobile browser,
             and the browser's scrolling thread positions that layer itself so
             it stays glued to the top during touch scrolling and while the URL
             bar collapses and expands. Adding transform/will-change on top
             makes it a transformed layer as well, and the sticky offset and the
             transform then get reconciled on different threads, a frame apart:
             the header visibly shivers on every scroll frame, in both
             directions. Layout was verified stable while this happened (header
             top fixed at 0, height constant, no style writes across 200+
             scrolled frames), which is how the cause was narrowed to the
             compositor. Nothing inside the header depends on the transform:
             the mobile menu is portalled to <body>, and the search and language
             dropdowns are position:absolute. */
          transform: isMobile ? "none" : "translateZ(0)",
          willChange: isMobile ? "auto" : "transform",
          /* Strengthened from 14% to 30% opacity. Not a new dark rule: the
             header is cream and the hero photograph sits directly beneath it,
             so the tonal contrast already marks that boundary — a hard dark
             line there would be answering a question the colours have already
             answered, and it would box the hero in.

             What was wrong was the asymmetry. The navy band below the image
             now has a crisp 1px edge, so a barely-visible 14% line above it
             read as vague by comparison. 30% is enough to look deliberate and
             still light enough to stay a hairline rather than a border.

             Charcoal at low opacity rather than a fixed colour, so it holds up
             over the photograph on the homepage and over cream on interior
             pages without needing a second rule. */
          /* Oct 29, 2026 header refresh: one warm hairline where the header
             meets the page. It replaces the "stone ledge" (a 1px charcoal
             border, an inset light line and two drop shadows cast onto the
             hero, Oct 24), which visitors read as dated. */
          borderBottom: "1px solid #ddd5c8",
          boxShadow: "none",
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
                <Link
                  to="/"
                  className="rpp-logo-home"
                  aria-label="Real Property Planning — go to the homepage"
                  title="Go to the homepage"
                  style={{ display: "flex", alignItems: "center", position: "relative", flex: "none" }}
                >
                  {/* Oct 29, 2026 refresh: up to 184px wide (about 36px tall with the
                      v27 file), a touch under the mock-up's 38px so it clears the
                      search ring at 390px; on narrower phones it gives up width first, keeping a ~12px gap at 360px.
                      Oct 28, 2026 (David: logo looked small on phones). It was height 35 with
                      width auto inside a shrinking flex row, so it was squeezed to 138px wide and
                      drawn about 26px tall. Now a set width that grows with the screen: 158px on
                      a 360px phone, ~172px at 390, 180px max. Height follows (1280x240 file). */}
                  <img
                    src={logo640}
                    srcSet={`${logo480} 480w, ${logo640} 640w, ${logo1280} 1280w`}
                    alt=""
                    style={{ width: "clamp(150px, calc(100vw - 196px), 184px)", height: "auto", maxWidth: "none", display: "block" }}
                    sizes="184px"
                    decoding="async"
                    width={1280}
                    height={250}
                  />
                </Link>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: isMobile ? 10 : 22, flexShrink: 0, height: 44 }}>
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
                {/* Phones: search behind an icon, like desktop (Oct 6, 2026). The
                    always-open field took a fifth of the first screen on every
                    page; it opens in the row below when tapped. */}
                <button
                  type="button"
                  onClick={() => setSearchOpen((v) => !v)}
                  aria-expanded={searchOpen}
                  aria-label={searchOpen ? "Close site search" : "Search the site"}
                  className="rpp-header-search-toggle"
                  style={{
                    ...RING_BUTTON,
                    /* Fills navy while the search row is open. */
                    background: searchOpen ? HEADER_NAVY : "transparent",
                    color: searchOpen ? "#fff" : HEADER_NAVY,
                  }}
                >
                  <SearchGlyph size={18} />
                </button>
                <a href="tel:2069003015"
                  className="rpp-header-phone"
                  style={RING_BUTTON}
                  aria-label="Call Real Property Planning at (206) 900-3015"
                >
                  {/* Icon-only; the aria-label carries the number. */}
                  <PhoneGlyph size={18} />
                </a>
              </div>
            </nav>

            {searchOpen && (
              <div style={{ marginTop: 10, paddingTop: 10, borderTop: "1px solid rgba(39,36,33,0.12)" }}>
                <Suspense fallback={<div style={{ height: 48 }} />}><SiteSearchBar autoFocus /></Suspense>
              </div>
            )}
          </>
        ) : (
          <>
            {/* TIER 1 — brand block on the left, phone on the right.
                The nav is NOT here. Sharing this row with the phone meant the
                right-hand labels sat directly beneath the phone button, and
                reserving space to clear it left about 60px for four gaps —
                less separation between labels, not more. Giving the nav its
                own tier below costs roughly 40px of header height and buys it
                the full page width. */}
            <div style={{ display: "flex", alignItems: "center", gap: 28, minWidth: 0 }}>
              {/* Brand block: logo on top, hamburger and search side by side
                  beneath it. The hamburger was previously to the LEFT of the
                  logo, which pushed the whole brand block inward and left the
                  menu button orphaned in the margin. Both rows are exactly
                  LOGO_WIDTH, so the block has one clean left and right edge. */}
              {/* Logo alone. The search moved down to the nav tier: stacking it
                  under the logo made the left column ~112px tall on its own and
                  pushed the whole header to ~190px. */}
              <div style={{ width: LOGO_WIDTH, flexShrink: 0 }}>
                {/* The logo is the site's home button, but nothing said so:
                    no label, no tooltip, no hover state. The accessible name
                    and title below carry that meaning to screen readers and
                    mouse users; .rpp-logo-home in index.css carries the
                    visual treatment. The img alt is now empty ON PURPOSE —
                    the Link owns the accessible name, and leaving alt text
                    on the image made screen readers announce the brand twice
                    without ever saying "home". */}
                <Link
                  to="/"
                  className="rpp-logo-home"
                  aria-label="Real Property Planning — go to the homepage"
                  title="Go to the homepage"
                  style={{ display: "block", position: "relative" }}
                >
                  <img
                    src={logo640}
                    srcSet={`${logo480} 480w, ${logo640} 640w, ${logo1280} 1280w`}
                    alt=""
                    style={{
                      width: "100%",
                      height: "auto",
                      display: "block",
                      objectFit: "contain",
                    }}
                    /* Displayed about 292px wide; the 640px file covers 2x
                       screens (Oct 6, 2026; the 1608px original was 36 KB). */
                    sizes="(max-width: 950px) 245px, 292px"
                    decoding="async"
                    width={1280}
                    height={250}
                  />
                </Link>
              </div>

              <div style={{ flex: 1, minWidth: 0, display: "flex", justifyContent: "flex-end", alignItems: "stretch", gap: 14, position: "relative", height: 44 }}>
                {/* Search lives behind an icon on desktop (Sept 2026 header
                    tidy-up): the full field was the widest thing in the nav
                    row and pushed the last category against the right edge.
                    The field drops down under this cluster when opened. */}
                <button
                  type="button"
                  onClick={() => setSearchOpen((v) => !v)}
                  aria-expanded={searchOpen}
                  aria-label={searchOpen ? "Close site search" : "Search the site"}
                  className="rpp-header-search-toggle"
                  style={{
                    ...RING_BUTTON,
                    alignSelf: "center",
                    background: searchOpen ? HEADER_NAVY : "transparent",
                    color: searchOpen ? "#fff" : HEADER_NAVY,
                  }}
                >
                  <SearchGlyph size={19} />
                </button>
                {searchOpen && (
                  <div
                    style={{
                      position: "absolute",
                      top: "calc(100% + 8px)",
                      right: 0,
                      width: "min(520px, 60vw)",
                      background: "#F5F0E8",
                      border: "1px solid rgba(39,36,33,0.25)",
                      borderRadius: 8,
                      padding: 10,
                      boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                      zIndex: 60,
                    }}
                  >
                    <Suspense fallback={<div style={{ height: 48 }} />}><SiteSearchBar autoFocus /></Suspense>
                  </div>
                )}
                {/* The header's one action, in the hub's voice. Outlined, navy
                    text (Oct 26, 2026, David: the solid navy block and solid
                    navy phone made the right of the bar heavy). Same 1px
                    outline as the search box; fills navy on hover. */}
                <Link
                  to="/contact?reason=other"
                  className="rpp-header-connect rpp-header-outline bg-transparent"
                  style={{
                    ...NAV_FONT,
                    display: "inline-flex",
                    alignItems: "center",
                    alignSelf: "center",
                    height: 44,
                    boxSizing: "border-box",
                    padding: "0 20px",
                    /* Outlined navy pill (Oct 29, 2026 refresh); the faint
                       white fill lifts it off the marble. */
                    borderRadius: 999,
                    border: `1.75px solid ${HEADER_NAVY}`,
                    boxShadow: "none",
                    background: "rgba(255,255,255,0.55)",
                    color: HEADER_NAVY,
                    fontWeight: 700,
                    fontSize: 16,
                    letterSpacing: "0.01em",
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                  }}
                >
                  Get Connected
                </Link>
                <a href="tel:2069003015"
                  ref={phoneRef}
                  className="rpp-header-phone rpp-header-outline"
                  style={{ ...RING_BUTTON, alignSelf: "center" }}
                  aria-label="Call Real Property Planning at (206) 900-3015"
                >
                  {/* Icon-only; the aria-label carries the number. */}
                  <PhoneGlyph size={19} />
                </a>
              </div>
            </div>

            {/* TIER 2 — navigation across the full width, on its own rule.
                Nothing sits above or below any label, so the five categories
                read as one row of equals. */}
            <div
              className="rpp-header-navrow"
              style={{
                marginTop: 8,
                paddingTop: 8,
                paddingBottom: 8,
                /* Divider rule removed Oct 24, 2026: on the marble it read as a
                   stray line under the logo's "PLANNING". The header is one
                   stone slab now; the spacing alone separates the two tiers. */
                ["--pn-phone-slot" as string]: `${phoneWidth}px`,
                display: "flex",
                alignItems: "center",
                minWidth: 0,
                /* Keeps the last label clear of the phone button sitting in the
                   tier above it. Without this the right-hand category sat
                   directly beneath the phone. */
              }}
            >
              {/* Nav only. The hamburger (a duplicate of this menu) and the
                  search field moved off this row in Sept 2026; the mobile
                  header keeps both. */}
              <PrimaryNav />
            </div>
          </>
        )}
      </header>
      {/* Holds the fixed mobile header's place in the flow. Height comes from the
          measured --header-height; 65px is the real mobile height with search
          closed (measured Oct 7, 2026 at 360-768px), used only for the first
          paint before measurement, so the page does not shift when it lands. */}
      {isMobile && (
        <div aria-hidden="true" data-header-spacer="" style={{ height: "var(--header-height, 65px)", flexShrink: 0 }} />
      )}
      {/* Section strip: the other topics from the same dropdown, on pages a topic
          menu links to (owner, Oct 28, 2026). Never on AFH Club pages. */}
      <SectionStrip />
      {/* AFH Club quick links: renders only on AFH Club pages (owner, Oct 1, 2026). */}
      <AFHClubQuickLinks />
    </>
  );
};

export default Header;
