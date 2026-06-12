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
  <section id="guided-entry" style={{ backgroundColor: "#f5f2ec", padding: "3.5rem 0 4.5rem" }}>
    <style>{`
      @media (max-width: 900px) { .rpp-funnel-grid { grid-template-columns: repeat(2,1fr) !important; } }
      @media (max-width: 520px)  { .rpp-funnel-grid { grid-template-columns: 1fr !important; } }
    `}</style>

    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
      {/* Section header */}
      <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
        <p
          style={{
            fontFamily: "Inter, system-ui, sans-serif",
            fontSize: "14px",
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#b8963e",
            margin: "0 0 0.75rem",
          }}
        >
          Choose your path
        </p>
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "2.25rem",
            fontWeight: 600,
            color: "#1a2744",
            margin: 0,
            lineHeight: 1.2,
          }}
        >
          What brings you here today?
        </h2>
      </div>

      {/* Tiles */}
      <div
        className="rpp-funnel-grid"
        style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1.25rem" }}
      >
        {tiles.map(({ imgSrc, imgAlt, title, href, color }) => (
          <Link key={title} to={href} aria-label={title} style={{ textDecoration: "none", display: "block" }}>
            <div
              style={{
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 2px 12px rgba(0,0,0,0.10)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                cursor: "pointer",
              }}
              onMouseOver={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 10px 28px rgba(0,0,0,0.16)";
              }}
              onMouseOut={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.10)";
              }}
            >
              {/* Photo */}
              <img
                src={imgSrc}
                alt={imgAlt}
                loading="lazy"
                decoding="async"
                style={{ display: "block", width: "100%", height: "190px", objectFit: "cover" }}
              />

              {/* Label band */}
              <div
                style={{
                  backgroundColor: color,
                  padding: "1.25rem 1.25rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "0.75rem",
                  minHeight: "76px",
                }}
              >
                <span
                  style={{
                    fontFamily: "Inter, system-ui, sans-serif",
                    fontSize: "20px",
                    fontWeight: 700,
                    color: "#ffffff",
                    lineHeight: 1.25,
                  }}
                >
                  {title}
                </span>
                <svg
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                  fill="none"
                  stroke="#d4a843"
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
    </div>
  </section>
);

export default HomepageFunnel;
