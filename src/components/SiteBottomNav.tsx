import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import steeringWheel from "@/assets/steering-wheel-transparent.png";
import gearStickImg from "@/assets/gear_stick_only.png";
import gearBootImg from "@/assets/gear_boot_only.png";
import compassIcon from "@/assets/nav/compass_final.png";
import compassNeedle from "@/assets/nav/compass_needle_final.png";
// @ts-expect-error - vite cache-bust query
import headlampsOff from "@/assets/nav/headlamps_off_final.png?v=4";
// @ts-expect-error - vite cache-bust query
import headlampsOn from "@/assets/nav/headlamps_on_final.png?v=4";

/**
 * Sticky bottom navigation bar shown on every page.
 */
const SiteBottomNav = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [gearSide, setGearSide] = useState<"none" | "R" | "F">("none");
  const [pulseIdx, setPulseIdx] = useState<number>(-1);
  const [tooltip, setTooltip] = useState<string | null>(null);

  useEffect(() => {
    const timeouts: ReturnType<typeof setTimeout>[] = [];
    function blinkHeadlight() {
      const headlightImg = document.querySelector<HTMLElement>('.headlight-icon');
      const item = headlightImg?.closest<HTMLElement>('.sbn-item');
      if (!item) return;
      const hoverClass = 'sbn-hover-sim';

      // Blink 1 — add hover class
      item.classList.add(hoverClass);

      timeouts.push(setTimeout(() => {
        // Remove hover class
        item.classList.remove(hoverClass);

        timeouts.push(setTimeout(() => {
          // 250ms pause, then Blink 2 — add hover class again
          item.classList.add(hoverClass);

          timeouts.push(setTimeout(() => {
            // Remove hover class
            item.classList.remove(hoverClass);
          }, 600));

        }, 250));

      }, 600));
    }

    const runSequence = () => {
      for (let i = 0; i < 4; i++) {
        timeouts.push(setTimeout(() => {
          setPulseIdx(i);
          if (i === 3) blinkHeadlight();
        }, i * 500));
      }
      timeouts.push(setTimeout(() => setPulseIdx(-1), 4 * 500));
    };
    const initial = setTimeout(runSequence, 2000);
    const interval = setInterval(runSequence, 15000);
    return () => {
      clearTimeout(initial);
      clearInterval(interval);
      timeouts.forEach(clearTimeout);
    };
  }, []);

  // When the gear shifter slot pulses, drive gearSide to reuse the exact
  // same hover lean (CSS transition on the inline transform).
  useEffect(() => {
    if (pulseIdx !== 1) return;
    const timeouts: ReturnType<typeof setTimeout>[] = [];
    setGearSide("R");
    timeouts.push(setTimeout(() => setGearSide("F"), 170));
    timeouts.push(setTimeout(() => setGearSide("none"), 340));
    return () => timeouts.forEach(clearTimeout);
  }, [pulseIdx]);


  // 0=HOME, 1=PAGE (gear + arrows), 2=SEARCH, 3=CONTACT
  const isActive = (i: number) => pulseIdx === i;

  return (
    <>
      <style>{`
        @keyframes sbn-left-blink {
          0%, 60%, 100% { opacity: 1; }
          30% { opacity: 0; }
        }
        @keyframes sbn-right-blink {
          0%, 40%, 100% { opacity: 1; }
          70% { opacity: 0; }
        }
        /* Auto-sequence reuses the EXACT hover keyframes:
           - .sbn-anim-steer        -> wheelWiggle (same as hover on .sbn-wheel)
           - .sbn-anim-compass-spin -> sbn-needle-spin (same as hover on .sbn-compass-needle)
           - Headlight              -> reuses the hover image-swap below (no keyframe)
           - Gear shifter           -> reuses the hover CSS transition via gearSide state
           - Arrows                 -> blink keyframes (no hover counterpart) */
        .sbn-anim-steer { animation: wheelWiggle 0.5s ease-in-out; }
        .sbn-anim-left-blink { animation: sbn-left-blink 0.5s ease-in-out; }
        .sbn-anim-right-blink { animation: sbn-right-blink 0.5s ease-in-out; }
        .sbn-anim-compass-spin { animation: sbn-needle-spin 0.8s ease-out !important; }
        .sbn-bar {
          position: fixed;
          left: 50%;
          bottom: 14px;
          transform: translateX(-50%);
          z-index: 9999;
          padding-top: 2px !important;
          padding-bottom: 2px !important;
          padding-left: 6px !important;
          padding-right: 6px !important;
          height: 64px !important;
          overflow: visible !important;
          padding-top: 60px !important;
          background: transparent;
          border:  0;
          border-radius: 0;
          box-shadow: none;
          outline: none;
          display: flex;
          align-items: center;
          justify-content: center;
          width: fit-content !important;
          margin: 0 auto !important;
          min-width: 320px !important;
          max-width: 95% !important;
          align-self: center !important;
          box-sizing: border-box !important;
          padding-left: 6px !important;
          padding-right: 6px !important;
        }
        .sbn-inner {
          width: 100%;
          display: flex !important;
          justify-content: space-evenly !important;
          align-items: center;
        }
        .sbn-item {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2px;
          background: transparent;
          border: 0;
          padding: 0 4px;
          cursor: pointer;
          text-decoration: none;
          color: #1B2B4B;
          font-family: 'Inter', 'DM Sans', system-ui, sans-serif;
          line-height: 1;
        }
        .sbn-item:hover { color: #C9A84C; }
        .sbn-icon-wrap {
          width: 45px !important;
          height: 49px !important;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: translateY(4px);
          transform-origin: center bottom;
          transition: transform 0.2s ease-in-out;
          overflow: visible;
        }
        .sbn-inner { overflow: visible !important; }
        .sbn-item { overflow: visible; }
        .sbn-item:hover { z-index: 999; }
        .sbn-item:hover .sbn-icon-wrap {
          transform: translateY(4px) scale(1.5);
        }
        /* PAGE group: each child (arrow / gear) scales independently on its own hover */
        .sbn-page-scale {
          position: relative;
          display: flex;
          align-items: center;
          gap: 0;
        }
        .sbn-arrow-btn {
          transform-origin: center bottom;
          transition: transform 0.2s ease-in-out;
        }
        .sbn-arrow-btn:hover {
          transform: scale(1.5);
        }
        .sbn-gear-inner {
          transform-origin: center bottom;
          transition: transform 0.2s ease-in-out;
        }
        .sbn-gear-inner:hover {
          transform: scale(1.5);
        }

        .sbn-icon-tall {
          width: auto !important;
          height: 52px !important;
          object-fit: contain !important;
          display: block !important;
          background: transparent !important;
        }
        .sbn-icon {
          width: 48px !important;
          height: 48px !important;
          object-fit: contain;
          display: block;
          background: transparent;
          transition: transform 0.2s ease;
        }
        .sbn-item:hover .sbn-icon { transform: translateY(-2px) scale(1.06); }
        .sbn-headlamp-off { display: block; height: 39px; width: auto; object-fit: contain; }
        .sbn-headlamp-on { display: none; height: 39px; width: auto; object-fit: contain; }
        .sbn-item:hover .sbn-headlamp-off, .sbn-item.sbn-hover-sim .sbn-headlamp-off { display: none; }
        .sbn-item:hover .sbn-headlamp-on, .sbn-item.sbn-hover-sim .sbn-headlamp-on { display: block; }
        @keyframes sbn-needle-spin {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(720deg); }
        }
        .sbn-compass-wrap { position: relative; display: inline-block; }
        .sbn-compass-needle {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 50%;
          height: auto;
          transform: translate(-50%, -50%) rotate(0deg);
          pointer-events: none;
        }
        .sbn-item:hover .sbn-compass-needle {
          animation: sbn-needle-spin 0.8s ease-out;
        }
        .sbn-map-wrap { position: relative; display: inline-block; }
        .sbn-waypoint {
          position: absolute;
          left: 50%;
          bottom: 50%;
          height: 20px;
          width: auto;
          opacity: 0;
          pointer-events: none;
          z-index: 10;
          transition: none;
          transform: translateX(-50%) scale(0.15);
          transform-origin: bottom center;
        }
        .sbn-item:hover .sbn-waypoint {
          opacity: 1;
          transform: translateX(-50%) scale(1.2);
          transition: opacity 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .sbn-label {
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          height: 16px !important;
          margin-top: 0 !important;
          padding-top: 0 !important;
          font-weight: 800 !important;
          font-size: 8px !important;
          text-align: center !important;
          line-height: 1 !important;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: #1B2B4B;
          white-space: nowrap;
          font-family: 'Inter', 'DM Sans', system-ui, sans-serif;
        }
        .sbn-item:hover .sbn-label { color: #1B2B4B; }

        /* Shared tooltip — single fixed element centered above the nav icon group */
        .sbn-shared-tip {
          position: fixed;
          left: 50%;
          transform: translateX(-50%);
          bottom: 80px;
          font-size: 0.65rem;
          font-weight: 700;
          color: #000000;
          text-align: center;
          z-index: 10000;
          pointer-events: none;
          white-space: nowrap;
          font-family: 'Inter', 'DM Sans', system-ui, sans-serif;
          letter-spacing: 0.5px;
          line-height: 1;
          background: transparent;
        }


        /* Gear shifter — boot stationary base, knob & shaft centered on top */
        .sbn-gear-wrap {
          position: relative;
          width: 48px;
          height: 48px;
        }
        .sbn-gear-boot {
          position: absolute;
          left: 50%;
          bottom: 0;
          transform: translateX(-50%);
          width: 48px;
          height: 30px;
          object-fit: contain;
          object-position: bottom center;
          pointer-events: none;
          z-index: 1;
        }
        .sbn-gear-knob {
          position: absolute;
          left: 50%;
          bottom: 18px;
          transform: translateX(-50%);
          width: 26px;
          height: 26px;
          object-fit: contain;
          pointer-events: none;
          z-index: 2;
        }
        .sbn-gear-half {
          position: absolute;
          top: 0;
          width: 50%;
          height: 100%;
          background: transparent;
          border: 0;
          cursor: pointer;
          z-index: 3;
          padding: 0;
        }
        .sbn-gear-half.left { left: 0; }
        .sbn-gear-half.right { right: 0; }

        /* Chat — circular couple photo with tire ring snug around it */
        .sbn-chat-outer {
          width: 41px !important;
          height: 49px !important;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .sbn-chat-wrap {
          position: relative;
          width: 44px !important;
          height: 44px !important;
        }
        .sbn-chat-couple {
          position: absolute;
          inset: 7px;
          width: calc(100% - 14px);
          height: calc(100% - 14px);
          border-radius: 50%;
          object-fit: cover;
          display: block;
          z-index: 1;
        }
        .sbn-chat-tire {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
          pointer-events: none;
          z-index: 2;
        }
        .sbn-item:hover .sbn-chat-tire {
          animation: sbn-tire-spin 1.4s linear infinite;
        }
        @keyframes sbn-tire-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        /* Home steering wheel — exact wheelImgStyle from MGFloatingNav */
        .sbn-wheel {
          width: 42px !important;
          height: 42px !important;
          object-fit: contain;
          display: block;
          margin-top: 0;
          margin-bottom: 0;
          background: transparent;
        }
        @keyframes wheelWiggle {
          0%   { transform: rotate(0deg); }
          25%  { transform: rotate(-15deg); }
          75%  { transform: rotate(15deg); }
          100% { transform: rotate(0deg); }
        }
        .sbn-item:hover .sbn-wheel {
          animation: wheelWiggle 0.35s ease-in-out infinite;
          transform: none;
        }

        @media (max-width: 639px) {
          .sbn-bar {
            padding: 4px 10px 4px;
            bottom: 8px;
            border-radius: 0;
            border: 0;
            box-shadow: none;
            outline: none;
            width: calc(100vw - 12px);
          }
          .sbn-inner { gap: 0; padding-top: 0px; justify-content: space-evenly !important; }
          .sbn-icon-wrap { margin-top: 6px; margin-bottom: 4px; }
          .sbn-site-map-icon { margin-top: 6px; margin-left: 8px; }
          .sbn-label { margin-top: -8px !important; font-size: 9px !important; letter-spacing: 0.08em; }
          .fcb-btn { bottom: 110px !important; }
        }

        /* Bottom gradient fade — behind nav, above page content */
        .sbn-fade {
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 140px;
          pointer-events: none;
          z-index: 9998;
          background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.92) 40%, rgba(255,255,255,1) 100%);
        }
      `}</style>

      <div className="sbn-fade" aria-hidden="true" />
      {tooltip && <div className="sbn-shared-tip" role="tooltip">{tooltip}</div>}
      <nav className="sbn-bar" aria-label="Site bottom navigation">
        <div className="sbn-inner">
          {/* 1. Home */}
          <Link to="/" className="sbn-item" aria-label="Home"
            onMouseEnter={() => setTooltip("HOME")} onMouseLeave={() => setTooltip(null)}
            onFocus={() => setTooltip("HOME")} onBlur={() => setTooltip(null)}>
            <div className="sbn-icon-wrap">
              <img key={`h-${pulseIdx}`} src={steeringWheel} alt="" aria-hidden="true" className={`sbn-wheel${isActive(0) ? " sbn-anim-steer" : ""}`} loading="lazy" />
            </div>
            <span className="sbn-label">HOME</span>
          </Link>


          {/* Back arrow + Gear shifter + Forward arrow — grouped as one hover unit */}
          <div
            className="sbn-item sbn-page-group"
            role="group"
            aria-label="Back or forward"
            style={{ padding: 0, margin: 1 }}
          >
            <div className="sbn-page-scale">
              {/* Back arrow */}
              <button
                type="button"
                onClick={() => window.history.back()}
                aria-label="Previous page"
                className="sbn-arrow-btn"
                onMouseEnter={() => setTooltip("Page Back")} onMouseLeave={() => setTooltip(null)}
                onFocus={() => setTooltip("Page Back")} onBlur={() => setTooltip(null)}
                style={{ background: "transparent", border: 0, padding: 0, margin: 0, marginRight: -12, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
              >
                <svg key={`l-${pulseIdx}`} className={isActive(1) ? "sbn-anim-left-blink" : ""} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ letterSpacing: 0, padding: 0 }}>
                  <path d="M19 12H5" />
                  <path d="M12 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Gear shifter */}
              <div style={{ padding: 0, margin: 0, display: "flex", flexDirection: "column", alignItems: "center" }}>

                <div className="sbn-icon-wrap">

                  <div
                    style={{
                      position: "relative",
                      width: 42,
                      height: 42,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "flex-end",
                      flexShrink: 0,
                    }}
                  >


                    <img
                      key={`g-${pulseIdx}`}
                      src={gearStickImg}
                      alt=""

                      aria-hidden="true"

                      style={{
                        position: "absolute",
                        top: 0,
                        left: "50%",
                        transform: `translateX(-50%) rotate(${
                          gearSide === "R" ? -22 : gearSide === "F" ? 22 : 0
                        }deg)`,
                        transformOrigin: "bottom center",
                        width: 15,
                        height: 22,
                        objectFit: "contain",
                        transition: "transform 0.2s ease",
                        zIndex: 2,
                        pointerEvents: "none",
                      }}
                    />
                    <img
                      src={gearBootImg}
                      alt=""
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        bottom: 2,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: 27,
                        height: 21,
                        objectFit: "contain",
                        zIndex: 1,
                        pointerEvents: "none",
                      }}
                    />

                    <button
                      type="button"
                      className="sbn-gear-half left"
                      aria-label="Go back"
                      onMouseEnter={() => setGearSide("R")}
                      onMouseLeave={() => setGearSide("none")}
                      onFocus={() => setGearSide("R")}
                      onBlur={() => setGearSide("none")}
                      onClick={() => window.history.back()}
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "50%",
                        height: "100%",
                        background: "transparent",
                        border: 0,
                        cursor: "pointer",
                        zIndex: 3,
                        padding: 0,
                      }}
                    />
                    <button
                      type="button"
                      className="sbn-gear-half right"
                      aria-label="Go forward"
                      onMouseEnter={() => setGearSide("F")}
                      onMouseLeave={() => setGearSide("none")}
                      onFocus={() => setGearSide("F")}
                      onBlur={() => setGearSide("none")}
                      onClick={() => window.history.forward()}
                      style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        width: "50%",
                        height: "100%",
                        background: "transparent",
                        border: 0,
                        cursor: "pointer",
                        zIndex: 3,
                        padding: 0,
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Forward arrow */}
              <button
                type="button"
                onClick={() => window.history.forward()}
                aria-label="Next page"
                className="sbn-arrow-btn"
                onMouseEnter={() => setTooltip("Page Forward")} onMouseLeave={() => setTooltip(null)}
                onFocus={() => setTooltip("Page Forward")} onBlur={() => setTooltip(null)}
                style={{ background: "transparent", border: 0, padding: 0, margin: 0, marginLeft: -12, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
              >
                <svg key={`r-${pulseIdx}`} className={isActive(1) ? "sbn-anim-right-blink" : ""} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ letterSpacing: 0, padding: 0 }}>
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            <span className="sbn-label">PAGE</span>
          </div>


          {/* 3. Search */}
          <button
            type="button"
            onClick={() => navigate("/search")}
            className="sbn-item"
            aria-label="Search"
            onMouseEnter={() => setTooltip("Search")} onMouseLeave={() => setTooltip(null)}
            onFocus={() => setTooltip("Search")} onBlur={() => setTooltip(null)}
          >
            <div className="sbn-icon-wrap">
              <span className="sbn-compass-wrap" style={{ display: 'inline-block' }}>
                <img src={compassIcon} alt="" aria-hidden="true" loading="lazy" style={{ height: '42px', width: '42px', objectFit: 'contain', display: 'block', transform: 'rotate(35deg)', transition: 'transform 0.2s ease' }} />
                <img key={`c-${pulseIdx}`} src={compassNeedle} alt="" aria-hidden="true" loading="lazy" className={`sbn-compass-needle${isActive(2) ? " sbn-anim-compass-spin" : ""}`} />

              </span>
            </div>
            <span className="sbn-label">SEARCH</span>
          </button>

          {/* 4. Contact */}
          <Link
            to="/contact"
            className="sbn-item"
            aria-label="Contact"
            onMouseEnter={() => setTooltip("Contact")} onMouseLeave={() => setTooltip(null)}
            onFocus={() => setTooltip("Contact")} onBlur={() => setTooltip(null)}
          >
            <div className="sbn-icon-wrap" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', overflow: 'visible' }}>
              <img
                src={headlampsOff}
                alt=""
                aria-hidden="true"
                className="sbn-headlamp-off headlight-icon"
                loading="eager"
              />
              <img
                src={headlampsOn}
                alt=""
                aria-hidden="true"
                className="sbn-headlamp-on"
                loading="eager"
              />
            </div>
            <span className="sbn-label">CONTACT</span>
          </Link>

        </div>
        {/* Suppress unused warning */}
        <span hidden>{pathname}</span>
      </nav>
    </>
  );
};

export default SiteBottomNav;
