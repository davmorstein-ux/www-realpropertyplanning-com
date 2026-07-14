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
    color: "#272421",
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
    color: "#272421",
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
      }
      .rpp-afh-title {
        font-family: Inter, system-ui, sans-serif !important;
        font-size: 26px !important;
        font-weight: 800 !important;
        color: #ffffff !important;
        line-height: 1.2 !important;
        margin: 0 0 0.4rem 0 !important;
      }
      .rpp-afh-sub {
        font-family: Inter, system-ui, sans-serif !important;
        font-size: 18px !important;
        font-weight: 500 !important;
        color: #d4f0ee !important;
        line-height: 1.4 !important;
        margin: 0 !important;
      }
      .rpp-afh-cta {
        font-family: Inter, system-ui, sans-serif !important;
        font-size: 17px !important;
        font-weight: 700 !important;
        color: #1a7a78 !important;
        background-color: #ffffff !important;
        padding: 0.65rem 1.5rem !important;
        border-radius: 6px !important;
        text-decoration: none !important;
        display: inline-flex !important;
        align-items: center !important;
        gap: 8px !important;
        white-space: nowrap !important;
        flex-shrink: 0 !important;
        transition: background-color 0.15s ease !important;
      }
      .rpp-afh-cta:hover {
        background-color: #e8f5f5 !important;
      }
      .rpp-section-eyebrow {
        font-family: Inter, system-ui, sans-serif !important;
        font-size: 14px !important;
        font-weight: 700 !important;
        letter-spacing: 0.18em !important;
        text-transform: uppercase !important;
        color: #6f2a30 !important;
        margin: 0 0 0.75rem 0 !important;
      }
      .rpp-section-heading {
        font-family: 'Cormorant Garamond', Georgia, serif !important;
        font-size: 2.25rem !important;
        font-weight: 600 !important;
        color: #272421 !important;
        margin: 0 !important;
        line-height: 1.2 !important;
      }
    `}</style>

    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
      {/* Section header */}
      <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
        <p className="rpp-section-eyebrow">Choose your path</p>
        <h2 className="rpp-section-heading">What brings you here today?</h2>
      </div>

      {/* Four situation tiles */}
      <div
        className="rpp-funnel-grid"
        style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1.25rem", marginBottom: "1.25rem" }}
      >
        {tiles.map(({ imgSrc, imgAlt, title, href, color }) => (
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
                  backgroundColor: color,
                  padding: "1.25rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "0.75rem",
                  minHeight: "76px",
                }}
              >
                <span className="rpp-tile-label">{title}</span>
                <svg
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                  fill="none"
                  stroke="#cd4a55"
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

      {/* AFH Club feature tile — full width, distinct teal */}
      <Link to="/afh-club" aria-label="Explore the AFH Club" style={{ textDecoration: "none", display: "block" }}>
        <div
          style={{
            backgroundColor: "#1a7a78",
            borderRadius: "10px",
            padding: "2rem 2.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "2rem",
            flexWrap: "wrap",
            boxShadow: "0 2px 12px rgba(0,0,0,0.12)",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
            cursor: "pointer",
          }}
          onMouseOver={(e) => {
            (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)";
            (e.currentTarget as HTMLDivElement).style.boxShadow = "0 10px 28px rgba(0,0,0,0.18)";
          }}
          onMouseOut={(e) => {
            (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
            (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.12)";
          }}
        >
          {/* Left: badge + text */}
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
            <img
              src="/afh-club-badge.png"
              alt="AFH Club"
              style={{ height: "80px", width: "auto", display: "block", flexShrink: 0 }}
            />
            <div>
              <p className="rpp-afh-title">Adult Family Home Club</p>
              <p className="rpp-afh-sub">
                Listings, resources, management companies &amp; real estate services — Washington's AFH network.
              </p>
            </div>
          </div>

          {/* Right: CTA button */}
          <span className="rpp-afh-cta">
            Explore AFH Club
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
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
        </div>
      </Link>
    </div>
  </section>
);

export default HomepageFunnel;
