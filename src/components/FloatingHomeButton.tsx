import { Link, useLocation } from "react-router-dom";
import steeringWheel from "@/assets/steering-wheel-transparent.png";

/**
 * Fixed middle-left floating Home button, stacked above the gear shifter.
 * Hidden on the homepage ("/").
 */
const FloatingHomeButton = () => {
  const { pathname } = useLocation();
  if (pathname === "/") return null;

  return (
    <>
      <style>{`
        @keyframes steer-shake {
          0%   { transform: rotate(0deg); }
          20%  { transform: rotate(-18deg); }
          40%  { transform: rotate(18deg); }
          60%  { transform: rotate(-12deg); }
          80%  { transform: rotate(12deg); }
          100% { transform: rotate(0deg); }
        }
        .home-button:hover .steering-wheel-img {
          animation: steer-shake 0.5s ease-in-out;
        }
        .steering-wheel-img {
          transform-origin: center center;
          background: transparent;
        }
        .home-button {
          position: fixed;
          left: 72px;
          top: calc(50% - 42px);
          transform: translate(-50%, -100%);
          z-index: 1000;
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 4px;
          padding: 8px 12px;
          background: #FFF8EC;
          border: 2px solid #8B0000;
          border-radius: 50px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          text-decoration: none;
          color: #1B2B4B;
          font-weight: 700;
          font-size: 18px;
          line-height: 1;
        }
        .home-button .steering-wheel-img {
          width: 64px;
          height: 64px;
          display: block;
          object-fit: contain;
          flex-shrink: 0;
        }
        @media (max-width: 767px) {
          .home-button {
            padding: 6px 10px;
            font-size: 14px;
            top: calc(50% - 34px);
          }
          .home-button .steering-wheel-img {
            width: 51px;
            height: 51px;
          }
        }
      `}</style>
      <Link to="/" aria-label="Home" className="home-button">
        <img
          src={steeringWheel}
          alt=""
          aria-hidden="true"
          width={64}
          height={64}
          className="steering-wheel-img"
        />
        <span style={{ textAlign: "center" }}>Home</span>
      </Link>
    </>
  );
};

export default FloatingHomeButton;
