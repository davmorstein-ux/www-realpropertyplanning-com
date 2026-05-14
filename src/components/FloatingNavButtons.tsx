import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import gearShifter from "@/assets/gear-shifter.png";

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
        .gear-shifter-img {
          transform-origin: bottom center;
          transform: translate(-50%, -50%) rotate(0deg);
          transition: transform 0.3s ease-in-out;
          pointer-events: none;
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
          z-index: 2;
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
        .gear-nav-oval:has(.gear-half-left:hover) .gear-shifter-img {
          transform: translate(-50%, -50%) rotate(-22deg);
        }
        .gear-nav-oval:has(.gear-half-right:hover) .gear-shifter-img {
          transform: translate(-50%, -50%) rotate(22deg);
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
        <img
          src={gearShifter}
          alt=""
          aria-hidden="true"
          className="gear-shifter-img"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            height: 56,
            width: "auto",
            display: "block",
            objectFit: "contain",
            zIndex: 3,
          }}
        />
      </div>
    </>
  );
};

export default FloatingNavButtons;
