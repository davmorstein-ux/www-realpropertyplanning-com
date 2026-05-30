import { useState, useRef, useEffect } from "react";

const LEFT_GROUPS = [
  {
    label: "Legal Professionals",
    href: "/building-your-trusted-professional-team",
    items: [
      { name: "Estate Planning Attorneys", href: "/professionals/estate-planning-attorneys" },
      { name: "Probate & Estate Attorneys", href: "/professionals/probate-attorneys" },
      { name: "Elder Law Attorneys", href: "/professionals/elder-law-attorneys" },
      { name: "Real Estate Attorneys", href: "/professionals/real-estate-attorneys" },
      { name: "Family Law Attorneys", href: "/professionals/family-law-attorneys" },
      { name: "Divorce Attorneys", href: "/attorneys/for-divorce-attorneys" },
    ],
  },
  {
    label: "Financial & Valuation",
    href: "/building-your-trusted-professional-team",
    items: [
      { name: "Financial Planners & Advisors", href: "/professionals/financial-planners" },
      { name: "CPAs & Accountants", href: "/professionals/cpas" },
      { name: "Certified Appraisers", href: "/real-estate-appraiser" },
      { name: "Mortgage Lenders", href: "/mortgage-lenders" },
    ],
  },
  {
    label: "Senior Housing & Care",
    href: "/building-your-trusted-professional-team",
    items: [
      { name: "Senior Living Advisors", href: "/senior-living-advisors" },
      { name: "Medicare & Benefits Advisors", href: "/medicare-providers" },
      { name: "Aging Life Care Managers", href: "/aging-life-care-managers" },
      { name: "Senior Move Managers", href: "/senior-move-managers" },
    ],
  },
  {
    label: "Property & Transition",
    href: "/building-your-trusted-professional-team",
    items: [
      { name: "Real Estate Brokers", href: "/realtor" },
      { name: "Estate Liquidators", href: "/estate-liquidators" },
    ],
  },
];

const RIGHT_GROUPS = [
  {
    label: "Senior Housing",
    href: "/articles/senior-housing-guide",
    items: [
      { name: "Senior Housing Guide", href: "/articles/senior-housing-guide" },
      { name: "Senior Housing Options", href: "/articles/senior-housing-options" },
      { name: "Senior Housing Costs", href: "/articles/senior-housing-costs" },
      { name: "Independent Living Costs", href: "/articles/independent-living-costs" },
      { name: "Memory Care Costs", href: "/articles/memory-care-costs" },
      { name: "Aging in Place", href: "/articles/aging-in-place" },
    ],
  },
  {
    label: "Property & Estate",
    href: "/probate-estate-sales",
    items: [
      { name: "Probate & Estate Sales", href: "/probate-estate-sales" },
      { name: "Senior Home Sales", href: "/senior-transitions" },
      { name: "For Executors", href: "/executors" },
    ],
  },
  {
    label: "Articles",
    href: "/articles/silver-tsunami",
    items: [
      { name: "The Silver Tsunami", href: "/articles/silver-tsunami" },
      { name: "How to Choose Senior Housing", href: "/articles/how-to-choose-senior-housing" },
      { name: "Affordable Senior Housing", href: "/articles/affordable-senior-housing" },
    ],
  },
  {
    label: "More",
    href: "/resources",
    items: [
      { name: "Resources", href: "/resources" },
      { name: "About", href: "/about" },
      { name: "Contact", href: "/contact" },
    ],
  },
];

const PANEL_FADE_MS = 1400;
const PANEL_HOVER_CLOSE_DELAY = 1500;

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@200;300&display=swap');
  .wf-wrap {
    position: relative;
    display: inline-block;
    z-index: 10001;
  }
  .wf-trigger {
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 8px 12px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 6px;
    transition: background 0.3s ease;
  }
  .wf-trigger:hover { background: rgba(232,201,122,0.12); }

  /* ── M≡NU word-mark ── */
  .wf-menu-word {
    display: inline-flex;
    align-items: center;
    gap: 0;
    line-height: 1;
    user-select: none;
  }
  .wf-menu-letter {
    font-family: Georgia, serif;
    font-weight: 300;
    font-size: 13px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #E8C97A;
    line-height: 1;
  }

  /* The ≡ hamburger — sized to match the cap-height of the letters */
  .wf-menu-e {
    display: inline-flex;
    flex-direction: column;
    justify-content: space-between;
    width: 10px;
    height: 9px;          /* matches Georgia cap-height at 13px */
    margin: 0 2px;
    padding: 0;
    vertical-align: middle;
    position: relative;
    top: 0px;
    flex-shrink: 0;
  }
  .wf-menu-e span {
    display: block;
    height: 1.5px;
    background: #E8C97A;
    border-radius: 1px;
    width: 100%;
    transition: width 0.4s cubic-bezier(0.16,1,0.3,1);
  }
  /* middle line slightly shorter for classic hamburger look */
  .wf-menu-e span:nth-child(2) { width: 70%; }
  .wf-trigger:hover .wf-menu-e span { width: 100%; }

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
    width: 500px;
    max-width: 96vw;
    height: calc(100vh - 64px);
    background: #f7f4ef;
    z-index: 9999;
    border-right: 1px solid #d4c9b0;
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
    border-bottom: 1px solid #e0d8c8;
    flex-shrink: 0;
  }
  .wf-what-label {
    font-size: 13px;
    font-weight: 600;
    color: #0a1628;
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

  .wf-columns {
    display: grid;
    grid-template-columns: 1fr 1fr;
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
  }
  .wf-col { padding: 8px 0 16px; }
  .wf-col:first-child { border-right: 1px solid #e0d8c8; }
  .wf-columns::-webkit-scrollbar { width: 3px; }
  .wf-columns::-webkit-scrollbar-thumb { background: #d4c9b0; border-radius: 2px; }

  .wf-group { display: block; width: 100%; }
  .wf-group-divider {
    margin: 2px 14px;
    border: none;
    border-top: 0.5px solid #e0d8c8;
  }

  .wf-group-btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 11px 14px;
    font-size: 10px;
    font-weight: 700;
    color: #8B6914;
    letter-spacing: 0.13em;
    text-transform: uppercase;
    background: none;
    border: none;
    text-align: left;
    cursor: pointer;
    font-family: inherit;
    transition: background 0.3s;
    border-radius: 4px;
  }
  .wf-group-btn:hover { background: rgba(139,105,20,0.08); }
  .wf-group-btn.wf-open { color: #6B4F10; }

  .wf-chevron {
    font-size: 11px;
    color: #8B6914;
    transition: transform 0.5s cubic-bezier(0.16,1,0.3,1);
    flex-shrink: 0;
    margin-left: 6px;
  }
  .wf-open .wf-chevron { transform: rotate(180deg); }

  .wf-items {
    overflow: hidden;
    max-height: 0;
    transition: max-height 1.0s cubic-bezier(0.16,1,0.3,1);
  }
  .wf-items-open { max-height: 400px; }

  .wf-item {
    display: block;
    width: 100%;
    padding: 7px 14px 7px 22px;
    font-size: 12px;
    color: #0a1628;
    background: none;
    border: none;
    border-left: 2px solid transparent;
    text-align: left;
    cursor: pointer;
    font-family: inherit;
    line-height: 1.35;
    opacity: 0;
    transform: translateY(-5px);
    transition: color 0.3s, border-color 0.3s, background 0.3s, opacity 0.6s, transform 0.6s;
  }
  .wf-item-visible {
    opacity: 1;
    transform: translateY(0);
  }
  .wf-item:hover {
    color: #0a1628;
    border-left-color: #8B6914;
    background: rgba(139,105,20,0.08);
  }

  .wf-close-footer {
    flex-shrink: 0;
    padding: 10px 18px 14px;
    border-top: 1px solid #e0d8c8;
    background: #f7f4ef;
  }
  .wf-close-btn {
    width: 100%;
    padding: 11px;
    background: #0a1628;
    color: #8B6914;
    border: none;
    border-radius: 6px;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    cursor: pointer;
    font-family: inherit;
    transition: background 0.4s ease, color 0.4s ease;
  }
  .wf-close-btn:hover { background: #8B6914; color: #0a1628; }

  @media (prefers-reduced-motion: reduce) {
    .wf-panel { animation: none !important; opacity: 1 !important; }
    .wf-item { opacity: 1 !important; transform: none !important; }
  }
`;

function AccordionGroup({ group, isOpen, onMouseEnter, onNavigate }) {
  const itemRefs = useRef([]);

  useEffect(() => {
    if (isOpen) {
      group.items.forEach((_, i) => {
        setTimeout(() => {
          if (itemRefs.current[i]) {
            itemRefs.current[i].classList.add("wf-item-visible");
          }
        }, i * 150);
      });
    } else {
      group.items.forEach((_, i) => {
        if (itemRefs.current[i]) {
          itemRefs.current[i].classList.remove("wf-item-visible");
        }
      });
    }
  }, [isOpen]);

  return (
    <div className="wf-group" onMouseEnter={onMouseEnter}>
      <button className={`wf-group-btn${isOpen ? " wf-open" : ""}`} aria-expanded={isOpen} onClick={onMouseEnter}>
        <span>{group.label}</span>
        <span className="wf-chevron" aria-hidden="true">
          ▾
        </span>
      </button>
      <div className={`wf-items${isOpen ? " wf-items-open" : ""}`}>
        {group.items.map((item, i) => (
          <button
            key={i}
            ref={(el) => (itemRefs.current[i] = el)}
            className="wf-item"
            onClick={() => onNavigate(item.href)}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
}

function NavColumn({ groups, openIndex, onGroupEnter, onNavigate }) {
  return (
    <div className="wf-col">
      {groups.map((group, i) => (
        <div key={i}>
          {i > 0 && <hr className="wf-group-divider" />}
          <AccordionGroup
            group={group}
            isOpen={openIndex === i}
            onMouseEnter={() => onGroupEnter(i)}
            onNavigate={onNavigate}
          />
        </div>
      ))}
    </div>
  );
}

export default function WaterfallNav() {
  const [open, setOpen] = useState(false);
  const [exiting, setExiting] = useState(false);
  const [leftOpen, setLeftOpen] = useState(null);
  const [rightOpen, setRightOpen] = useState(null);
  const exitTimerRef = useRef(null);
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
      setLeftOpen(null);
      setRightOpen(null);
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
    setLeftOpen(null);
    setRightOpen(null);
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
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              lineHeight: 1,
              userSelect: "none",
              letterSpacing: "0.18em",
            }}
          >
            <span
              style={{
                fontFamily: "'Raleway', 'Gill Sans', 'Century Gothic', sans-serif",
                fontWeight: 200,
                fontSize: "15px",
                textTransform: "uppercase",
                color: "#E8C97A",
                lineHeight: 1,
                letterSpacing: "0.18em",
              }}
            >
              M
            </span>
            <span
              style={{
                display: "inline-flex",
                flexDirection: "column",
                justifyContent: "space-between",
                width: "14px",
                height: "10px",
                margin: "0 1px 0 2px",
                padding: 0,
                flexShrink: 0,
                alignSelf: "center",
              }}
            >
              <span
                style={{ display: "block", height: "1.5px", background: "#E8C97A", borderRadius: "0", width: "100%" }}
              ></span>
              <span
                style={{ display: "block", height: "1.5px", background: "#E8C97A", borderRadius: "0", width: "75%" }}
              ></span>
              <span
                style={{ display: "block", height: "1.5px", background: "#E8C97A", borderRadius: "0", width: "100%" }}
              ></span>
            </span>
            <span
              style={{
                fontFamily: "'Raleway', 'Gill Sans', 'Century Gothic', sans-serif",
                fontWeight: 200,
                fontSize: "15px",
                textTransform: "uppercase",
                color: "#E8C97A",
                lineHeight: 1,
                letterSpacing: "0.18em",
              }}
            >
              NU
            </span>
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
              <button className="wf-close-x" onClick={closePanel} aria-label="Close menu">
                ✕
              </button>
            </div>

            <div className="wf-columns">
              <NavColumn
                groups={LEFT_GROUPS}
                openIndex={leftOpen}
                onGroupEnter={(i) => setLeftOpen(i)}
                onNavigate={handleNavigate}
              />
              <NavColumn
                groups={RIGHT_GROUPS}
                openIndex={rightOpen}
                onGroupEnter={(i) => setRightOpen(i)}
                onNavigate={handleNavigate}
              />
            </div>

            <div className="wf-close-footer">
              <button className="wf-close-btn" onClick={closePanel}>
                Close Menu
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
