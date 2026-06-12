import { Link } from "react-router-dom";

const resources = [
  { title: "Washington Executor's 10-Step Checklist", href: "/resources/washington-executors-10-step-checklist" },
  { title: "How Probate Real Estate Works", href: "/guides/how-probate-real-estate-works" },
  { title: "Senior Housing & Care Options", href: "/understanding-housing-care-options" },
  { title: "What to Do With an Inherited House", href: "/guides/inherited-house-washington" },
];

const HomepagePopularResources = () => (
  <section style={{ backgroundColor: "#ffffff", padding: "4rem 0 4.5rem" }}>
    <style>{`
      @media (max-width: 900px) { .rpp-resources-grid { grid-template-columns: repeat(2,1fr) !important; } }
      @media (max-width: 520px)  { .rpp-resources-grid { grid-template-columns: 1fr !important; } }
    `}</style>

    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
      {/* Header */}
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
          Popular Resources
        </p>
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "2.25rem",
            fontWeight: 600,
            color: "#1a2744",
            margin: 0,
            lineHeight: 1.3,
          }}
        >
          The guides people open most
        </h2>
      </div>

      {/* Cards */}
      <ul
        className="rpp-resources-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "1rem",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
      >
        {resources.map((r) => (
          <li key={r.href}>
            <Link
              to={r.href}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1rem",
                backgroundColor: "#f5f2ec",
                border: "2px solid #c8c0b0",
                borderRadius: "8px",
                padding: "1.25rem 1.25rem",
                minHeight: "90px",
                textDecoration: "none",
                transition: "border-color 0.15s ease, background-color 0.15s ease",
              }}
              onMouseOver={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "#b8963e";
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#faf8f4";
              }}
              onMouseOut={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "#c8c0b0";
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#f5f2ec";
              }}
            >
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "20px",
                  fontWeight: 600,
                  color: "#1a2744",
                  lineHeight: 1.35,
                }}
              >
                {r.title}
              </span>
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
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
            </Link>
          </li>
        ))}
      </ul>

      {/* Browse all */}
      <div style={{ textAlign: "center", marginTop: "2.25rem" }}>
        <Link
          to="/resources"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            fontFamily: "Inter, system-ui, sans-serif",
            fontSize: "18px",
            fontWeight: 700,
            color: "#1a2744",
            textDecoration: "none",
            letterSpacing: "0.02em",
          }}
          onMouseOver={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#b8963e")}
          onMouseOut={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#1a2744")}
        >
          Browse all resources
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
        </Link>
      </div>
    </div>
  </section>
);

export default HomepagePopularResources;
