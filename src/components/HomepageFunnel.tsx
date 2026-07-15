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
    bgColor: "#721d24", // deep burgundy
  },
  {
    imgSrc: tileHelping,
    imgAlt: "Adult daughter hugging her senior mother on a couch",
    title: "I'm Helping an Aging Parent",
    href: "/helping-aging-parents",
    bgColor: "#883f20", // rust
  },
  {
    imgSrc: tileEstate,
    imgAlt: "Family reviewing an estate property plan with documents",
    title: "I'm Handling an Estate",
    href: "/estate-probate-inherited-property",
    bgColor: "#25597e", // steel blue
  },
  {
    imgSrc: tileProfessionals,
    imgAlt: "Man at a laptop browsing trusted professional resources",
    title: "I Need a Professional",
    href: "/building-your-trusted-professional-team",
    bgColor: "#5d2f74", // plum
  },
];

const HomepageFunnel = () => (
  <section id="guided-entry" style={{ backgroundColor: "#f5f2ec", padding: "0.5rem 0 4rem" }}>
    <style>{`
      @media (max-width: 900px) {
        .rpp-funnel-grid { grid-template-columns: repeat(2,1fr) !important; }
      }
      @media (max-width: 520px) {
        .rpp-funnel-grid { grid-template-columns: 1fr !important; }
      }
      .rpp-tile-card {
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 2px 12px rgba(0,0,0,0.10);
        transition: transform 0.2s ease, box-shadow 0.2s ease;
        cursor: pointer;
        height: 100%;
      }
      .rpp-tile-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 10px 28px rgba(0,0,0,0.16);
      }
      .rpp-tile-label {
        font-family: Inter, system-ui, sans-serif !important;
        font-size: 20px !important;
        font-weight: 700 !important;
        color: #ffffff !important;
        line-height: 1.25 !important;
        margin: 0 !important;
        padding: 0 !important;
        opacity: 1 !important;
      }
      .rpp-eyebrow {
        font-family: Inter, system-ui, sans-serif !important;
        font-size: 18px !important;
        font-weight: 700 !important;
        letter-spacing: 0.18em !important;
        text-transform: uppercase !important;
        color: #272421 !important;
        margin: 0 0 0.35rem 0 !important;
        display: block !important;
        opacity: 1 !important;
      }
      .rpp-heading {
        font-family: Inter, system-ui, sans-serif !important;
        font-size: 2.25rem !important;
        font-weight: 600 !important;
        color: #6f2a30 !important;
        margin: 0 !important;
        line-height: 1.2 !important;
        opacity: 1 !important;
      }
      .rpp-afh-title {
        font-family: Inter, system-ui, sans-serif !important;
        font-size: 24px !important;
        font-weight: 800 !important;
        color: #1a5c58 !important;
        line-height: 1.2 !important;
        margin: 0 0 0.2rem 0 !important;
        opacity: 1 !important;
        text-shadow: none !important;
      }
      .rpp-afh-sub {
        font-family: Inter, system-ui, sans-serif !important;
        font-size: 16px !important;
        font-weight: 500 !important;
        color: #443e38 !important;
        line-height: 1.5 !important;
        margin: 0 !important;
        opacity: 1 !important;
        text-shadow: none !important;
      }
      .rpp-afh-btn {
        font-family: Inter, system-ui, sans-serif !important;
        font-size: 15px !important;
        font-weight: 700 !important;
        color: #ffffff !important;
        background-color: #1a5c58 !important;
        padding: 0.7rem 1.5rem !important;
        border-radius: 6px !important;
        text-decoration: none !important;
        display: inline-flex !important;
        align-items: center !important;
        gap: 8px !important;
        white-space: nowrap !important;
        flex-shrink: 0 !important;
        opacity: 1 !important;
      }
      .rpp-afh-btn:hover { background-color: #134a46 !important; }
      .rpp-afh-tile {
        background-color: #f8fafa !important;
        border: 2px solid #272421 !important;
        border-radius: 10px !important;
        padding: 0.6rem 1.25rem 0.6rem 0.75rem !important;
        display: flex !important;
        align-items: center !important;
        justify-content: space-between !important;
        gap: 1rem !important;
        flex-wrap: nowrap !important;
        box-shadow: 0 1px 6px rgba(0,0,0,0.06) !important;
        transition: transform 0.2s ease, box-shadow 0.2s ease !important;
        cursor: pointer !important;
        text-decoration: none !important;
      }
      .rpp-afh-tile:hover {
        transform: translateY(-2px) !important;
        box-shadow: 0 6px 20px rgba(0,0,0,0.10) !important;
      }
    `}</style>

    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
      {/* Section header */}
      <div style={{ textAlign: "center", marginBottom: "1.25rem" }}>
        <h2 className="rpp-heading">What brings you here today?</h2>
      </div>

      {/* Four situation tiles */}
      <div
        className="rpp-funnel-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "1.25rem",
          marginBottom: "1.25rem",
        }}
      >
        {tiles.map(({ imgSrc, imgAlt, title, href, bgColor }) => (
          <Link key={title} to={href} aria-label={title} style={{ textDecoration: "none", display: "block" }}>
            <div className="rpp-tile-card">
              <img
                src={imgSrc}
                alt={imgAlt}
                loading="lazy"
                decoding="async"
                style={{ display: "block", width: "100%", height: "190px", objectFit: "cover" }}
              />
              <div
                style={{
                  backgroundColor: bgColor,
                  padding: "1.1rem 1.25rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "0.75rem",
                  minHeight: "70px",
                }}
              >
                <span className="rpp-tile-label">{title}</span>
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  style={{ flexShrink: 0, opacity: 0.8 }}
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* AFH Club — full width feature tile */}
      <a href="/afh-club" className="rpp-afh-tile">
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "nowrap", flex: 1, minWidth: 0 }}>
          <img
            src="/afh-club-badge.png"
            alt="AFH Club"
            style={{
              height: "80px",
              width: "auto",
              display: "block",
              flexShrink: 0,
              mixBlendMode: "multiply",
            }}
          />
          <div>
            <p className="rpp-afh-title">AFH Club</p>
            <p className="rpp-afh-sub">
              The ultimate resource network for buying, selling, managing and learning about Adult Family Homes.
            </p>
          </div>
        </div>
        <span className="rpp-afh-btn">
          Explore AFH Club
          <svg
            viewBox="0 0 24 24"
            width="15"
            height="15"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </span>
      </a>
    </div>
  </section>
);

export default HomepageFunnel;
