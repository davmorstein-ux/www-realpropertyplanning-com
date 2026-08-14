import { useState, useRef, useEffect } from "react";

function hexToRgba(hex, alpha) {
  const h = hex.replace("#", "");
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

const CATEGORIES = [
  {
    label: "Legal Professionals",
    color: "#ac1515",
    items: [
      { name: "Estate Planning Attorneys", href: "/professionals/estate-planning-attorneys" },
      { name: "Probate & Estate Attorneys", href: "/professionals/probate-attorneys" },
      { name: "Elder Law Attorneys", href: "/for-elder-law-attorneys" },
      { name: "Real Estate Attorneys", href: "/professionals/real-estate-attorneys" },
      { name: "Family Law Attorneys", href: "/professionals/family-law-attorneys" },
      { name: "Divorce Attorneys", href: "/for-divorce-attorneys" },
      { name: "Legal Plans & Identity Protection", href: "/legal-plans-identity-protection" },
    ],
  },
  {
    label: "Real Estate & Professionals",
    color: "#aa570e",
    items: [
      { name: "Financial Planners & Advisors", href: "/professionals/financial-planners" },
      { name: "CPAs & Accountants", href: "/professionals/cpas" },
      { name: "Certified Appraisers", href: "/real-estate-appraiser" },
      { name: "Mortgage Lenders", href: "/mortgage-lenders" },
      { name: "Real Estate Brokers", href: "/realtor" },
      { name: "Estate Liquidators", href: "/estate-liquidators" },
    ],
  },
  {
    label: "Senior Housing",
    color: "#1d7239",
    items: [
      { name: "Adult Family Home Directory", href: "/afh-club/homes" },
      { name: "Senior Living Advisors", href: "/senior-living-advisors" },
      { name: "Senior Move Managers", href: "/senior-move-managers" },
      { name: "Aging in Place", href: "/aging-in-place-staying-home-safely" },
      { name: "Downsizing & Preparing for Transition", href: "/downsizing-preparing-for-transition" },
    ],
  },
  {
    label: "Senior Care",
    color: "#117078",
    items: [
      { name: "Medicare & Benefits Advisors", href: "/medicare-providers" },
      { name: "Aging Life Care Managers", href: "/aging-life-care-managers" },
      { name: "Understanding Housing & Care Options", href: "/understanding-housing-care-options" },
    ],
  },
  {
    label: "Guides & Articles",
    color: "#284dbd",
    items: [
      { name: "All Guides & Articles", href: "/guides-and-resources" },
      { name: "Articles Library", href: "/articles" },
      { name: "Senior Housing Guide", href: "/articles/senior-housing-guide" },
      { name: "Senior Housing Costs", href: "/articles/senior-housing-costs" },
      { name: "Independent Living Costs", href: "/articles/independent-living-costs" },
      { name: "Memory Care Costs", href: "/articles/memory-care-costs" },
      { name: "Aging in Place", href: "/articles/aging-in-place" },
      { name: "Probate & Estate Sales", href: "/probate-estate-sales" },
      { name: "For Executors", href: "/executors" },
    ],
  },
  {
    label: "Long-Term Care",
    color: "#6b30a6",
    items: [
      { name: "Long-Term Care Overview", href: "/long-term-care" },
      { name: "Nursing Homes", href: "/long-term-care/nursing-homes" },
      { name: "Nurse Delegation", href: "/long-term-care/nurse-delegation" },
      { name: "Medicaid & Long-Term Care", href: "/long-term-care/medicaid-and-long-term-care" },
      { name: "WA Cares Fund", href: "/long-term-care/wa-cares" },
      { name: "Hospital Discharge Planning", href: "/long-term-care/hospital-discharge-planning" },
    ],
  },
  {
    label: "More",
    color: "#a82466",
    items: [
      { name: "AFH Club", href: "/afh-club" },
      { name: "Licensed AFH Directory", href: "/afh-club/homes" },
      { name: "AFH Calculators", href: "/afh-club/calculators" },
      { name: "Selling Your AFH at Retirement", href: "/afh-club/selling-your-business-at-retirement" },
      { name: "Cost of Care Calculator", href: "/cost-of-care-calculator" },
      { name: "Find a Professional", href: "/resources" },
      { name: "About", href: "/about" },
      { name: "Contact", href: "/contact" },
    ],
  },
];

/* Primary top-level pages. On viewports at or below 1100px these links are
   removed from the header bar by the .rpp-curated-link media query in
   Header.tsx, which left them reachable only two taps deep inside the "More"
   category (and left Senior Transitions unreachable entirely). This strip
   restores them to a single tap at the top of the drawer. It is hidden above
   1100px, where the header bar shows the same links. */
const QUICK_LINKS = [
  { name: "About", href: "/about" },
  { name: "Probate & Estate Sales", href: "/probate-estate-sales" },
  { name: "Senior Transitions", href: "/senior-transitions" },
  { name: "AFH Club", href: "/afh-club" },
  { name: "Contact", href: "/contact" },
];

const PANEL_FADE_MS = 1400;
const PANEL_HOVER_CLOSE_DELAY = 1500;

const CSS = `
  .wf-wrap {
    position: relative;
    display: inline-block;
    z-index: 10001;
  }
  .wf-trigger {
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    min-width: 48px;
    min-height: 48px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    transition: background 0.3s ease;
  }
  .wf-trigger:hover { background: rgba(39,36,33,0.10); }
  /* On desktop the trigger sits in the search row, so it fills that row's
     height and picks up the same 8px radius as the phone CTA — reading as
     part of the row's control set rather than a floating icon. The glyph
     itself stays tight; spreading three bars over a 64px field would stop
     looking like a menu icon. */
  @media (min-width: 951px) {
    /* .wf-wrap is inline-block by default, which would swallow the parent's
       stretch and leave the button at its intrinsic height. */
    .wf-wrap {
      display: flex;
      align-self: stretch;
      width: 100%;
    }
    .wf-trigger {
      height: 100%;
      width: 100%;
      border-radius: 8px;
      background: rgba(39,36,33,0.05);
        border: 1px solid rgba(39,36,33,0.18);
    }
    .wf-trigger:hover {
      background: rgba(39,36,33,0.12);
      border-color: rgba(39,36,33,0.40);
    }
  }

  .wf-overlay {
    position: fixed;
    inset: 0;
    background: rgba(10,22,40,0.3);
    z-index: 9998;
    cursor: pointer;
  }

  .wf-panel {
    position: fixed;
    top: 64px;
    left: 0;
    /* Was 660px, which left ~90px of dead cream to the right of even the
       longest link. This value is not arbitrary and should not be nudged by
       eye: it is 220px rail + 1px divider + ~349px flyout, where the flyout
       is sized to the longest label in the ENTIRE nav data set —
       "Downsizing & Preparing for Transition" (37 chars, 14px/700) — plus
       its 20px side padding and the 3px scrollbar gutter.

       The width is deliberately FIXED rather than content-driven. Sizing to
       max-content would make the panel jump wider and narrower as the reader
       moves down the rail, since each category has a different longest link.
       For an audience that includes people with tremor or low vision, a menu
       that changes size under the cursor is worse than one with some slack.

       If a longer link is ever added, this number has to grow with it, or
       that link wraps to two lines. Check the longest label before editing. */
    width: 570px;
    max-width: 96vw;
    height: calc(100vh - 64px);
    background: #f7f4ef;
    z-index: 9999;
    border-right: 1px solid #d2b2b4;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  .wf-panel-entering {
    animation: panelIn ${PANEL_FADE_MS}ms cubic-bezier(0.22,1,0.36,1) forwards;
  }
  .wf-panel-exiting {
    animation: panelOut ${PANEL_FADE_MS}ms cubic-bezier(0.22,1,0.36,1) forwards;
  }
  @keyframes panelIn {
    0%   { opacity: 0; transform: translateX(-32px); }
    60%  { opacity: 0.8; transform: translateX(-4px); }
    100% { opacity: 1; transform: translateX(0); }
  }
  @keyframes panelOut {
    0%   { opacity: 1; transform: translateX(0); }
    40%  { opacity: 0.6; transform: translateX(-8px); }
    100% { opacity: 0; transform: translateX(-32px); }
  }

  .wf-panel-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 18px 12px;
    border-bottom: 1px solid #dfc9cb;
    flex-shrink: 0;
  }
  .wf-what-label {
    font-size: 13px;
    font-weight: 600;
    color: #280a0c;
    letter-spacing: 0.02em;
  }
  .wf-close-x {
    background: none;
    border: none;
    color: #c0392b;
    font-size: 22px;
    font-weight: 900;
    line-height: 1;
    cursor: pointer;
    padding: 4px 8px;
    border-radius: 4px;
    transition: background 0.3s ease;
  }
  .wf-close-x:hover { background: rgba(192,57,43,0.1); }

  .wf-body {
    display: flex;
    flex: 1;
    overflow: hidden;
  }

  .wf-rail {
    width: 220px;
    flex-shrink: 0;
    border-right: 1px solid #dfc9cb;
    overflow-y: auto;
    padding: 8px 0;
  }
  .wf-rail::-webkit-scrollbar { width: 3px; }
  .wf-rail::-webkit-scrollbar-thumb { background: #d2b2b4; border-radius: 2px; }

  .wf-rail-btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 13px 16px;
    font-size: 13.5px;
    font-weight: 800;
    color: #280a0c;
    letter-spacing: 0.04em;
    background: var(--cat-bg-rest, transparent);
    border: none;
    border-left: 5px solid var(--cat-color, transparent);
    text-align: left;
    cursor: pointer;
    font-family: inherit;
    transition: background 0.25s ease, color 0.25s ease;
  }
  .wf-rail-btn-inner {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .wf-rail-dot {
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: var(--cat-color, #7f2028);
    flex-shrink: 0;
  }
  .wf-rail-btn:hover { background: var(--cat-bg-active, rgba(0,0,0,0.08)); }
  .wf-rail-btn.wf-active {
    background: var(--cat-bg-active, rgba(0,0,0,0.08));
    color: var(--cat-color, #7f2028);
  }
  .wf-rail-chevron {
    font-size: 13px;
    color: currentColor;
    opacity: 0;
    transition: opacity 0.25s ease;
    flex-shrink: 0;
    margin-left: 8px;
  }
  .wf-rail-btn.wf-active .wf-rail-chevron { opacity: 1; }

  .wf-flyout {
    flex: 1;
    overflow-y: auto;
    padding: 10px 0 16px;
  }
  .wf-flyout::-webkit-scrollbar { width: 3px; }
  .wf-flyout::-webkit-scrollbar-thumb { background: #d2b2b4; border-radius: 2px; }

  .wf-flyout-heading {
    padding: 8px 20px 12px;
    font-size: 13px;
    font-weight: 800;
    color: var(--cat-color, #7f2028);
    letter-spacing: 0.13em;
    text-transform: uppercase;
  }

  .wf-item {
    display: block;
    width: 100%;
    padding: 9px 20px;
    font-size: 14px;
    font-weight: 700;
    color: #280a0c;
    background: none;
    border: none;
    border-left: 2px solid transparent;
    text-align: left;
    cursor: pointer;
    font-family: inherit;
    line-height: 1.4;
    transition: color 0.2s, border-color 0.2s, background 0.2s;
  }
  .wf-item:hover {
    color: #280a0c;
    border-left-color: var(--cat-color, #7f2028);
    background: rgba(0,0,0,0.05);
  }

  .wf-close-footer {
    flex-shrink: 0;
    padding: 10px 18px 14px;
    border-top: 1px solid #dfc9cb;
    background: #f7f4ef;
  }
  .wf-close-btn {
    width: 100%;
    padding: 11px;
    background: #280a0c;
    color: #ffffff;
    border: none;
    border-radius: 6px;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    cursor: pointer;
    font-family: inherit;
    transition: background 0.4s ease;
  }
  .wf-close-btn:hover { background: #7f2028; color: #ffffff; }

  /* Quick-links strip — mobile/tablet only, mirrors the header bar links
     that the 1100px media query hides. */
  .wf-quick {
    display: none;
    flex-shrink: 0;
    padding: 12px 14px 14px;
    border-bottom: 1px solid #dfc9cb;
    background: #efe9e1;
  }
  .wf-quick-label {
    font-size: 12px;
    font-weight: 800;
    color: #7f2028;
    letter-spacing: 0.13em;
    text-transform: uppercase;
    margin: 0 0 10px 2px;
  }
  .wf-quick-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  .wf-quick-btn {
    flex: 1 1 44%;
    min-width: 140px;
    min-height: 44px;
    padding: 11px 12px;
    font-size: 15px;
    font-weight: 800;
    color: #280a0c;
    background: #ffffff;
    border: 1px solid #d2b2b4;
    border-left: 4px solid #7f2028;
    border-radius: 6px;
    text-align: left;
    cursor: pointer;
    font-family: inherit;
    line-height: 1.3;
    transition: background 0.2s ease, border-color 0.2s ease;
  }
  .wf-quick-btn:hover { background: #f7f4ef; }
  .wf-quick-btn:focus-visible {
    outline: 2px solid #7f2028;
    outline-offset: 2px;
  }
  @media (max-width: 1100px) {
    .wf-quick { display: block; }
  }

  @media (max-width: 640px) {
    .wf-panel { width: 100vw; max-width: 100vw; }
    .wf-body { flex-direction: column; overflow-y: auto; }
    .wf-rail {
      width: 100%;
      border-right: none;
      border-bottom: 1px solid #dfc9cb;
      overflow-y: visible;
      flex-shrink: 0;
      /* TWO COLUMNS ON PHONES. Stacked, the seven categories ran about 320px
         before the links even began, so tapping a category put its list below
         the fold and the menu looked broken — the reported complaint. Two
         columns takes seven rows down to four and saves roughly 140px.

         Height only. The buttons keep their full 44px+ tap target and their
         type size; nothing is shrunk to fit. Long labels wrap to two lines
         and that row simply grows, which is why this is a grid rather than
         hand-paired rows — pairing by hand breaks the moment a category is
         renamed. */
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1px;
      background: #dfc9cb;
    }
    .wf-rail-btn {
      padding: 12px 12px;
      background-color: #f7f4ef;
    }
    /* Chevrons pointed at a flyout to the right. There is no right on a
       phone — the list appears below — so they misdirect and cost space. */
    .wf-rail-chevron { display: none; }
    .wf-flyout { overflow-y: visible; }
    /* Lets the three short labels share a row instead of forcing two-up. */
    .wf-quick-btn { min-width: 96px; flex: 1 1 28%; }
  }

  @media (prefers-reduced-motion: reduce) {
    .wf-panel { animation: none !important; opacity: 1 !important; }
  }
`;

function QuickLinks({ onNavigate }) {
  return (
    <div className="wf-quick">
      <p className="wf-quick-label">Main Pages</p>
      <div className="wf-quick-grid">
        {QUICK_LINKS.map((item) => (
          <button key={item.href} data-nav-button className="wf-quick-btn" onClick={() => onNavigate(item.href)}>
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
}

function NavRail({ categories, activeIndex, onSelect, flyoutRef }) {
  /* On a phone the links render BELOW the whole rail, so a tap could leave the
     reader staring at an unchanged screen with the result off-screen. Shorter
     rail helps; this guarantees it. Desktop is untouched — there the flyout is
     already beside the rail and scrolling it would be wrong.

     Guarded on matchMedia rather than window width alone so it cannot fire
     during SSR, and behaviour follows the reduced-motion preference: readers
     with vestibular sensitivity get an instant jump instead of a glide. */
  const revealOnMobile = () => {
    if (typeof window === "undefined" || !flyoutRef?.current) return;
    if (!window.matchMedia("(max-width: 640px)").matches) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    /* Deferred a frame: the flyout has to re-render with the new category
       before its position is worth measuring. */
    requestAnimationFrame(() => {
      flyoutRef.current?.scrollIntoView({
        behavior: reduced ? "auto" : "smooth",
        block: "start",
      });
    });
  };

  const handleSelect = (i) => {
    onSelect(i);
    revealOnMobile();
  };

  return (
    <div className="wf-rail">
      {categories.map((cat, i) => (
        <button
          key={cat.label}
          data-nav-button
          className={`wf-rail-btn${activeIndex === i ? " wf-active" : ""}`}
          style={{
            "--cat-color": cat.color,
            "--cat-bg-rest": hexToRgba(cat.color, 0.1),
            "--cat-bg-active": hexToRgba(cat.color, 0.2),
          }}
          aria-current={activeIndex === i}
          /* Hover stays plain onSelect — a mouse user is on desktop, where
             the flyout is already visible beside the rail. */
          onMouseEnter={() => onSelect(i)}
          onClick={() => handleSelect(i)}
        >
          <span className="wf-rail-btn-inner">
            <span className="wf-rail-dot" aria-hidden="true" />
            <span>{cat.label}</span>
          </span>
          <span className="wf-rail-chevron" aria-hidden="true">
            &rarr;
          </span>
        </button>
      ))}
    </div>
  );
}

function NavFlyout({ category, onNavigate, flyoutRef }) {
  if (!category) return <div className="wf-flyout" ref={flyoutRef} />;
  return (
    <div className="wf-flyout" ref={flyoutRef} style={{ "--cat-color": category.color }}>
      <div className="wf-flyout-heading">{category.label}</div>
      {category.items.map((item) => (
        <button key={item.href} data-nav-button className="wf-item" onClick={() => onNavigate(item.href)}>
          {item.name}
        </button>
      ))}
    </div>
  );
}

export default function WaterfallNav() {
  const [open, setOpen] = useState(false);
  const [exiting, setExiting] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const exitTimerRef = useRef(null);
  /* Points at the flyout so NavRail can scroll it into view on phones. */
  const flyoutRef = useRef(null);
  const hoverTimerRef = useRef(null);

  const openPanel = () => {
    if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
    if (exitTimerRef.current) clearTimeout(exitTimerRef.current);
    setExiting(false);
    setOpen(true);
  };

  const closePanel = () => {
    if (!open || exiting) return;
    setExiting(true);
    exitTimerRef.current = setTimeout(() => {
      setOpen(false);
      setExiting(false);
      setActiveIndex(0);
    }, PANEL_FADE_MS);
  };

  const cancelClose = () => {
    if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
  };

  const scheduleClose = () => {
    hoverTimerRef.current = setTimeout(closePanel, PANEL_HOVER_CLOSE_DELAY);
  };

  const handleNavigate = (href) => {
    setOpen(false);
    setExiting(false);
    setActiveIndex(0);
    if (exitTimerRef.current) clearTimeout(exitTimerRef.current);
    if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
    window.location.href = href;
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") closePanel();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, exiting]);

  useEffect(
    () => () => {
      if (exitTimerRef.current) clearTimeout(exitTimerRef.current);
      if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
    },
    [],
  );

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      <div className="wf-wrap" onMouseEnter={openPanel} onMouseLeave={scheduleClose}>
        <button
          className="wf-trigger"
          aria-label="Open navigation menu"
          aria-expanded={open}
          onClick={openPanel}
          title="Menu"
        >
          {/* Hamburger icon only — no MENU text */}
          <span
            style={{
              display: "inline-flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: "32px",
              height: "24px",
              padding: 0,
              flexShrink: 0,
            }}
          >
            <span
              style={{ display: "block", height: "4px", background: "#272421", borderRadius: "2px", width: "100%" }}
            />
            <span
              style={{ display: "block", height: "4px", background: "#272421", borderRadius: "2px", width: "100%" }}
            />
            <span
              style={{ display: "block", height: "4px", background: "#272421", borderRadius: "2px", width: "100%" }}
            />
          </span>
        </button>
      </div>

      {open && (
        <>
          <div className="wf-overlay" onClick={closePanel} aria-hidden="true" />
          <div
            className={`wf-panel${exiting ? " wf-panel-exiting" : " wf-panel-entering"}`}
            role="dialog"
            aria-label="Site navigation"
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
          >
            <div className="wf-panel-header">
              <span className="wf-what-label">What are you looking for?</span>
              <button className="wf-close-x" data-nav-button onClick={closePanel} aria-label="Close menu">
                ✕
              </button>
            </div>

            <QuickLinks onNavigate={handleNavigate} />

            <div className="wf-body">
              <NavRail
                categories={CATEGORIES}
                activeIndex={activeIndex}
                onSelect={setActiveIndex}
                flyoutRef={flyoutRef}
              />
              <NavFlyout
                category={CATEGORIES[activeIndex]}
                onNavigate={handleNavigate}
                flyoutRef={flyoutRef}
              />
            </div>

            <div className="wf-close-footer">
              <button className="wf-close-btn" data-nav-button onClick={closePanel}>
                Close Menu
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
