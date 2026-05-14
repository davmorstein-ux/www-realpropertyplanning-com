import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import gearBase from "@/assets/gear_shifter_base.png";
import gearTop from "@/assets/gear_shifter_top.png";

/**
 * Sticky Reverse / Forward navigation oval, centered horizontally beneath
 * the floating Home button. Hidden on the homepage. Each half of the oval
 * acts as a large hover/click target for back / forward.
 */
const FloatingNavButtons = () => {
  const { pathname } = useLocation();
  const ref = useRef<HTMLDivElement>(null);
  const [leftPx, setLeftPx] = useState<number>(24);

  useEffect(() => {
    const update = () => {
      const home = document.querySelector(".home-button") as HTMLElement | null;
      const self = ref.current;
      if (!home || !self) return;
      const homeRect = home.getBoundingClientRect();
      const homeCenter = homeRect.left + homeRect.width / 2;
      const selfWidth = self.offsetWidth;
      setLeftPx(Math.max(8, homeCenter - selfWidth / 2));
    };
    update();
    window.addEventListener("resize", update);
    const id = window.setTimeout(update, 50);
    return () => {
      window.removeEventListener("resize", update);
      window.clearTimeout(id);
    };
  }, [pathname]);

  if (pathname === "/") return null;

  const labelStyle: React.CSSProperties = {
    fontWeight: 700,
    fontSize: 18,
    lineHeight: 1,
    color: "#1B2B4B",
    userSelect: "none",
    pointerEvents: "none",
  };

  return (
    <>
      <style>{`
        .gear-container {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          pointer-events: none;
          z-index: 1;
        }
        .gear-top {
          position: relative;
          height: 34px;
          width: auto;
          display: block;
          transform-origin: bottom center;
          transition: transform 0.3s ease-in-out;
          pointer-events: none;
          z-index: 2;
          margin-bottom: -2px;
        }
        .gear-base {
          position: relative;
          height: 28px;
          width: auto;
          display: block;
          pointer-events: none;
          z-index: 1;
          flex-shrink: 0;
        }
        .gear-half {
          position: absolute;
          top: 0;
          height: 100%;
          width: 50%;
          display: flex;
          align-items: center;
          cursor: pointer;
          background: transparent;
          border: none;
          padding: 0;
          z-index: 3;
        }
        .gear-half-left {
          left: 0;
          justify-content: flex-start;
          padding-left: 18px;
          border-radius: 50px 0 0 50px;
        }
        .gear-half-right {
          right: 0;
          justify-content: flex-end;
          padding-right: 18px;
          border-radius: 0 50px 50px 0;
        }
        .gear-half-left:hover ~ .gear-container .gear-top {
          transform: rotate(-22deg);
        }
        .gear-half-right:hover ~ .gear-container .gear-top {
          transform: rotate(22deg);
        }
      `}</style>
      <div
        ref={ref}
        className="gear-nav-oval"
        style={{
          position: "fixed",
          bottom: 24,
          left: leftPx,
          zIndex: 999,
          width: 120,
          height: 68,
          background: "#FFF8EC",
          border: "2px solid #8B0000",
          borderRadius: 50,
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        }}
      >
        <button
          type="button"
          className="gear-half gear-half-left"
          aria-label="Go back"
          onClick={() => window.history.back()}
        >
          <span style={labelStyle}>R</span>
        </button>
        <button
          type="button"
          className="gear-half gear-half-right"
          aria-label="Go forward"
          onClick={() => window.history.forward()}
        >
          <span style={labelStyle}>F</span>
        </button>
        <div className="gear-container">
          <img src={gearTop} alt="" aria-hidden="true" className="gear-top" />
          <img src={gearBase} alt="" aria-hidden="true" className="gear-base" />
        </div>
      </div>
    </>
  );
};

export default FloatingNavButtons;
