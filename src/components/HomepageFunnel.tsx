import { Link } from "react-router-dom";
import tilePlanning from "@/assets/tiles/tile-planning-ahead.webp";
import tileHelping from "@/assets/tiles/tile-helping-loved-one.webp";
import tileEstate from "@/assets/tiles/tile-handling-estate.webp";
import tileProfessionals from "@/assets/tiles/tile-find-professionals.webp";

const tiles = [
  {
    imgSrc: tilePlanning,
    imgAlt: "Older couple reviewing an estate plan together at home",
    title: "I Want to Plan Ahead",
    href: "/planning-before-a-crisis",
    color: "#1a2744",
  },
  {
    imgSrc: tileHelping,
    imgAlt: "Adult daughter hugging her senior mother on a couch",
    title: "I'm Helping an Aging Parent",
    href: "/helping-aging-parents",
    color: "#2d5a3d",
  },
  {
    imgSrc: tileEstate,
    imgAlt: "Family reviewing an estate property plan with documents",
    title: "I'm Handling an Estate",
    href: "/estate-probate-inherited-property",
    color: "#1a2744",
  },
  {
    imgSrc: tileProfessionals,
    imgAlt: "Man at a laptop browsing trusted professional resources",
    title: "I Need a Professional",
    href: "/building-your-trusted-professional-team",
    color: "#2d5a3d",
  },
];

const HomepageFunnel = () => (
  <section id="guided-entry" style={{ backgroundColor: "#f5f2ec", padding: "3rem 0 4rem" }}>
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
      {/* Section label — short, terminal-style */}
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <p
          style={{
            fontFamily: "Inter, system-ui, sans-serif",
            fontSize: "12px",
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#b8963e",
            margin: "0 0 0.6rem",
          }}
        >
          Choose your path
        </p>
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
            fontWeight: 600,
            color: "#1a2744",
            margin: 0,
            lineHeight: 1.2,
            letterSpacing: "-0.01em",
          }}
        >
          What brings you here today?
        </h2>
      </div>

      {/* Tiles */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1.25rem",
        }}
      >
        {tiles.map(({ imgSrc, imgAlt, title, href, color }) => (
          <Link key={title} to={href} aria-label={title} style={{ textDecoration: "none", display: "block" }}>
            <div
              style={{
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 2px 12px rgba(0,0,0,0.09)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                cursor: "pointer",
              }}
              onMouseOver={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 24px rgba(0,0,0,0.14)";
              }}
              onMouseOut={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.09)";
              }}
            >
              {/* Photo */}
              <div style={{ position: "relative", overflow: "hidden" }}>
                <img
                  src={imgSrc}
                  alt={imgAlt}
                  loading="lazy"
                  decoding="async"
                  style={{
                    display: "block",
                    width: "100%",
                    height: "180px",
                    objectFit: "cover",
                    transition: "transform 0.35s ease",
                  }}
                />
              </div>

              {/* Label band */}
              <div
                style={{
                  backgroundColor: color,
                  padding: "1.1rem 1.25rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "0.75rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: "clamp(1rem, 1.4vw, 1.2rem)",
                    fontWeight: 600,
                    color: "#ffffff",
                    lineHeight: 1.25,
                    letterSpacing: "0.01em",
                  }}
                >
                  {title}
                </span>
                {/* Arrow */}
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="#b8963e"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  style={{ flexShrink: 0 }}
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Mobile: stack to 2 columns */}
      <style>{`
        @media (max-width: 768px) {
          #guided-entry > div > div:last-child {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          #guided-entry > div > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  </section>
);

export default HomepageFunnel;
