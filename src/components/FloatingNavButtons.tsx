import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import gearShifter from "@/assets/gear-shifter.png";

/**
 * Sticky Reverse / Forward navigation oval, centered horizontally beneath
 * the floating Home button. Hidden on the homepage.
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
    cursor: "pointer",
    textDecoration: "none",
    userSelect: "none",
    background: "transparent",
    border: "none",
    padding: 0,
    fontFamily: "inherit",
  };

  return (
    <>
      <style>{`
        .gear-shifter-img {
          transform-origin: bottom center;
          transition: transform 0.3s ease-in-out;
        }
        .gear-nav-oval:has(.reverse-label:hover) .gear-shifter-img {
          transform: rotate(-22deg);
        }
        .gear-nav-oval:has(.forward-label:hover) .gear-shifter-img {
          transform: rotate(22deg);
        }
      `}</style>
      <div
        ref={ref}
        className="gear-nav-oval"
        style={{
          position: "fixed",
          bottom: 24 + 64 + 12,
          left: leftPx,
          zIndex: 999,
          display: "inline-flex",
          alignItems: "center",
          gap: 14,
          padding: "6px 18px",
          background: "#FFF8EC",
          border: "2px solid #8B0000",
          borderRadius: 50,
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        }}
      >
        <button
          type="button"
          className="reverse-label"
          aria-label="Go back"
          onClick={() => window.history.back()}
          style={labelStyle}
        >
          R
        </button>
        <img
          src={gearShifter}
          alt=""
          aria-hidden="true"
          className="gear-shifter-img"
          style={{
            height: 56,
            width: "auto",
            display: "block",
            objectFit: "contain",
            flexShrink: 0,
          }}
        />
        <button
          type="button"
          className="forward-label"
          aria-label="Go forward"
          onClick={() => window.history.forward()}
          style={labelStyle}
        >
          F
        </button>
      </div>
    </>
  );
};

export default FloatingNavButtons;
