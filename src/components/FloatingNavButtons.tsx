import { useLocation } from "react-router-dom";
import gearBase from "@/assets/gear_shifter_base.png";
import gearTop from "@/assets/gear_shifter_top.png";

/**
 * Sticky Reverse / Forward navigation oval, positioned middle-left of the
 * viewport directly below the floating Home button. Each half of the oval
 * acts as a large hover/click target for back / forward.
 */
const FloatingNavButtons = () => {
  useLocation();

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
        .gear-nav-oval {
          position: fixed;
          left: 72px;
          top: 50%;
          transform: translate(-50%, -50%);
          z-index: 1000;
          width: 120px;
          height: 68px;
          background: #FFF8EC;
          border: 2px solid #8B0000;
          border-radius: 50px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }
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
        @media (max-width: 767px) {
          .gear-nav-oval {
            width: 96px;
            height: 54px;
          }
          .gear-top {
            height: 27px;
          }
          .gear-base {
            height: 22px;
          }
          .gear-half-left {
            padding-left: 14px;
          }
          .gear-half-right {
            padding-right: 14px;
          }
        }
      `}</style>
      <div className="gear-nav-oval">
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
