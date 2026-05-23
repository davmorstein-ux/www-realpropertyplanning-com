import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import steeringWheel from "@/assets/nav/steering-wheel.webp";
import gearBase from "@/assets/nav/gear-boot.webp";
import gearTop from "@/assets/nav/gear-knob.webp";
import compassIcon from "@/assets/nav/compass.webp";
import roadmapIcon from "@/assets/nav/map-clean.png";
import waypointIcon from "@/assets/nav/waypoint.webp";
import headlampIcon from "@/assets/nav/headlamps-clean.png";
import speedometerIcon from "@/assets/nav/speedometer.webp";

/**
 * Sticky bottom navigation bar shown on every page.
 * Six vintage-car-themed icons, evenly spaced, semi-transparent dark glass
 * with backdrop blur matching the home page nav style.
 */
const SiteBottomNav = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [gearSide, setGearSide] = useState<"none" | "R" | "F">("none");

  // Soft-scroll to top whenever route changes (for "You Are Here" UX consistency)
  useEffect(() => {}, [pathname]);

  const scrollTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  type Item = {
    key: string;
    label: string;
    tooltip: string;
    img: string;
    onClick?: () => void;
    to?: string;
    custom?: React.ReactNode;
  };

  const items: Item[] = [
    {
      key: "home",
      label: "Home",
      tooltip: "Home",
      img: steeringWheel,
      to: "/",
    },
    {
      key: "gear",
      label: "Back / Forward",
      tooltip: "Back / Forward",
      img: gearTop,
      custom: (
        <div className="sbn-gear">
          <button
            type="button"
            aria-label="Go back"
            onMouseEnter={() => setGearSide("R")}
            onMouseLeave={() => setGearSide("none")}
            onClick={() => window.history.back()}
            className="sbn-gear-half"
          >
            R
          </button>
          <div className="sbn-gear-graphic" aria-hidden="true">
            <img
              src={gearTop}
              alt=""
              className="sbn-gear-top"
              style={{
                transform: `rotate(${
                  gearSide === "R" ? -22 : gearSide === "F" ? 22 : 0
                }deg)`,
              }}
            />
            <img src={gearBase} alt="" className="sbn-gear-base" />
          </div>
          <button
            type="button"
            aria-label="Go forward"
            onMouseEnter={() => setGearSide("F")}
            onMouseLeave={() => setGearSide("none")}
            onClick={() => window.history.forward()}
            className="sbn-gear-half"
          >
            F
          </button>
        </div>
      ),
    },
    {
      key: "sitemap",
      label: "Site Map",
      tooltip: "Site Map",
      img: compassIcon,
      to: "/sitemap",
    },
    {
      key: "resources",
      label: "Resources",
      tooltip: "Resources",
      img: roadmapIcon,
      to: "/resources",
    },
    {
      key: "search",
      label: "Search",
      tooltip: "Search the site",
      img: headlampIcon,
      onClick: () => navigate("/sitemap"),
    },
    {
      key: "here",
      label: "You Are Here",
      tooltip: `You are here: ${pathname}`,
      img: speedometerIcon,
      onClick: scrollTop,
    },
  ];

  return (
    <>
      <style>{`
        .sbn-bar {
          position: fixed;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 9999;
          height: 100px;
          padding: 10px 16px env(safe-area-inset-bottom);
          background-color: rgba(8, 13, 25, 0.78);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-top: 1px solid rgba(255,255,255,0.10);
          box-shadow: 0 -6px 24px rgba(0,0,0,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .sbn-inner {
          width: 100%;
          max-width: 920px;
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 4px;
          align-items: center;
          justify-items: center;
        }
        .sbn-item {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 6px;
          background: transparent;
          border: 0;
          padding: 4px 2px;
          cursor: pointer;
          text-decoration: none;
          color: #fff;
          font-family: 'DM Sans', system-ui, sans-serif;
          line-height: 1;
        }
        .sbn-item:hover { color: #ffd98a; }
        .sbn-icon {
          width: 56px;
          height: 56px;
          object-fit: contain;
          display: block;
          background: transparent;
          transition: transform 0.2s ease;
        }
        .sbn-item:hover .sbn-icon { transform: translateY(-2px) scale(1.06); }
        .sbn-label {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.04em;
          color: #fff;
          text-align: center;
          white-space: nowrap;
        }
        .sbn-item:hover .sbn-label { color: #ffd98a; }

        /* Tooltip */
        .sbn-item[data-tip]::after {
          content: attr(data-tip);
          position: absolute;
          bottom: calc(100% + 8px);
          left: 50%;
          transform: translateX(-50%) translateY(4px);
          background: #1B2B4B;
          color: #fff;
          font-size: 12px;
          font-weight: 600;
          padding: 6px 10px;
          border-radius: 6px;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.18s ease, transform 0.18s ease;
          box-shadow: 0 6px 18px rgba(0,0,0,0.3);
          max-width: 260px;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .sbn-item:hover[data-tip]::after,
        .sbn-item:focus-visible[data-tip]::after {
          opacity: 1;
          transform: translateX(-50%) translateY(0);
        }

        /* Gear shifter composite */
        .sbn-gear {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2px;
          height: 56px;
        }
        .sbn-gear-half {
          position: relative;
          z-index: 3;
          background: transparent;
          border: 0;
          color: #fff;
          font-weight: 900;
          font-size: 13px;
          cursor: pointer;
          width: 14px;
          text-align: center;
          font-family: inherit;
          line-height: 1;
        }
        .sbn-gear-half:hover { color: #ffd98a; }
        .sbn-gear-graphic {
          position: relative;
          width: 56px;
          height: 56px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
          pointer-events: none;
        }
        .sbn-gear-top {
          position: absolute;
          top: 0;
          left: 50%;
          transform-origin: bottom center;
          transform: translateX(-50%);
          width: 26px;
          height: auto;
          transition: transform 0.2s ease;
        }
        .sbn-gear-base {
          width: 44px;
          height: auto;
          margin-top: auto;
        }

        @media (max-width: 639px) {
          .sbn-bar { height: 96px; padding: 8px 8px env(safe-area-inset-bottom); }
          .sbn-inner { gap: 0; }
          .sbn-label { font-size: 10px; }
          .sbn-gear-half { width: 12px; font-size: 12px; }
        }
      `}</style>

      <nav className="sbn-bar" aria-label="Site bottom navigation">
        <div className="sbn-inner">
          {items.map((item) => {
            const content = (
              <>
                {item.custom ? (
                  item.custom
                ) : (
                  <img
                    src={item.img}
                    alt=""
                    aria-hidden="true"
                    className="sbn-icon"
                    loading="lazy"
                    width={50}
                    height={50}
                  />
                )}
                <span className="sbn-label">{item.label}</span>
              </>
            );

            if (item.to) {
              return (
                <Link
                  key={item.key}
                  to={item.to}
                  className="sbn-item"
                  data-tip={item.tooltip}
                  aria-label={item.label}
                >
                  {content}
                </Link>
              );
            }
            return (
              <button
                key={item.key}
                type="button"
                onClick={item.onClick}
                className="sbn-item"
                data-tip={item.tooltip}
                aria-label={item.label}
              >
                {content}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default SiteBottomNav;
