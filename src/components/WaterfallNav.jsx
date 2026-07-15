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
    label: "Real Estate & Valuation",
    href: "/building-your-trusted-professional-team",
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
    label: "Senior Housing & Care",
    href: "/building-your-trusted-professional-team",
    items: [
      { name: "Senior Living Advisors", href: "/senior-living-advisors" },
      { name: "Medicare & Benefits Advisors", href: "/medicare-providers" },
      { name: "Aging Life Care Managers", href: "/aging-life-care-managers" },
      { name: "Senior Move Managers", href: "/senior-move-managers" },
    ],
  },
];

const RIGHT_GROUPS = [
  {
    label: "Guides & Articles",
    href: "/guides-and-resources",
    items: [
      { name: "All Resources & Guides", href: "/guides-and-resources" },
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
    href: "/long-term-care",
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
    href: "/resources",
    items: [
      { name: "AFH Club", href: "/afh-club" },
      { name: "AFH Calculators", href: "/afh-club/calculators" },
      { name: "Cost of Care Calculator", href: "/cost-of-care-calculator" },
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

  .wf-columns {
    display: grid;
    grid-template-columns: 1fr 1fr;
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
  }
  .wf-col { padding: 8px 0 16px; }
  .wf-col:first-child { border-right: 1px solid #dfc9cb; }
  .wf-columns::-webkit-scrollbar { width: 3px; }
  .wf-columns::-webkit-scrollbar-thumb { background: #d2b2b4; border-radius: 2px; }

  .wf-group { display: block; width: 100%; }
  .wf-group-divider {
    margin: 2px 14px;
    border: none;
    border-top: 0.5px solid #dfc9cb;
  }

  .wf-group-btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 11px 14px;
    font-size: 10px;
    font-weight: 700;
    color: #7f2028;
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
  .wf-group-btn.wf-open { color: #62191f; }

  .wf-chevron {
    font-size: 11px;
    color: #7f2028;
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
    font-weight: 700;
    color: #280a0c;
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
    color: #280a0c;
    border-left-color: #7f2028;
    background: rgba(139,105,20,0.08);
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
    color: #7f2028;
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
  .wf-close-btn:hover { background: #7f2028; color: #280a0c; }

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
          {/* Hamburger icon only — no MENU text */}
          <span
            style={{
              display: "inline-flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: "22px",
              height: "15px",
              padding: 0,
              flexShrink: 0,
            }}
          >
            <span
              style={{ display: "block", height: "2px", background: "#d1a847", borderRadius: "1px", width: "100%" }}
            />
            <span
              style={{ display: "block", height: "2px", background: "#d1a847", borderRadius: "1px", width: "75%" }}
            />
            <span
              style={{ display: "block", height: "2px", background: "#d1a847", borderRadius: "1px", width: "100%" }}
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
