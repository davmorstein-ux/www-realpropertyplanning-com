import { Link } from "react-router-dom";

const resources = [
  { title: "Washington Executor's 10-Step Checklist", href: "/resources/washington-executors-10-step-checklist" },
  { title: "How Probate Real Estate Works", href: "/guides/how-probate-real-estate-works" },
  { title: "Senior Housing & Care Options", href: "/understanding-housing-care-options" },
  { title: "What to Do With an Inherited House", href: "/guides/inherited-house-washington" },
];

const HomepagePopularResources = () => (
  <section style={{ backgroundColor: "#ffffff", padding: "3.5rem 0 4rem" }}>
    <style>{`
      .rpp-pr-eyebrow {
        font-family: Inter, system-ui, sans-serif !important;
        font-size: 13px !important;
        font-weight: 700 !important;
        letter-spacing: 0.18em !important;
        text-transform: uppercase !important;
        color: #1a2744 !important;
        margin: 0 0 0.5rem 0 !important;
        display: block !important;
      }
      .rpp-pr-heading {
        font-family: 'Cormorant Garamond', Georgia, serif !important;
        font-size: clamp(32px, 3vw, 48px) !important;
        font-weight: 700 !important;
        color: #1a2744 !important;
        margin: 0 !important;
        line-height: 1.2 !important;
      }
      .rpp-pr-grid {
        display: grid !important;
        grid-template-columns: repeat(4, 1fr) !important;
        gap: 1.25rem !important;
        list-style: none !important;
        margin: 0 !important;
        padding: 0 !important;
      }
      .rpp-pr-grid li {
        display: flex !important;
      }
      .rpp-pr-card {
        display: flex !important;
        flex-direction: column !important;
        justify-content: space-between !important;
        align-items: center !important;
        text-align: center !important;
        background-color: #f5f2ec !important;
        border: 1px solid #e0dbd2 !important;
        border-radius: 10px !important;
        padding: 1.75rem 1.25rem 1.5rem !important;
        min-height: 160px !important;
        width: 100% !important;
        text-decoration: none !important;
        box-shadow: 0 2px 8px rgba(0,0,0,0.06) !important;
        transition: box-shadow 0.15s ease, transform 0.15s ease !important;
      }
      .rpp-pr-card:hover {
        box-shadow: 0 6px 20px rgba(26,39,68,0.12) !important;
        transform: translateY(-2px) !important;
        background-color: #faf8f4 !important;
      }
      .rpp-pr-card-text {
        font-family: Inter, system-ui, sans-serif !important;
        font-size: 18px !important;
        font-weight: 600 !important;
        color: #1a2744 !important;
        line-height: 1.35 !important;
        flex: 1 !important;
        margin-bottom: 1.25rem !important;
        text-align: center !important;
      }
      .rpp-pr-card-cta {
        display: inline-flex !important;
        align-items: center !important;
        gap: 6px !important;
        font-family: Inter, system-ui, sans-serif !important;
        font-size: 13px !important;
        font-weight: 700 !important;
        letter-spacing: 0.1em !important;
        text-transform: uppercase !important;
        color: #1a2744 !important;
        text-decoration: underline !important;
        text-underline-offset: 3px !important;
      }
      .rpp-pr-browse {
        display: inline-flex !important;
        align-items: center !important;
        gap: 8px !important;
        font-family: Inter, system-ui, sans-serif !important;
        font-size: 18px !important;
        font-weight: 700 !important;
        color: #1a2744 !important;
        text-decoration: none !important;
      }
      .rpp-pr-browse:hover { color: #7f1d1d !important; }
      @media (max-width: 900px) {
        .rpp-pr-grid { grid-template-columns: repeat(2, 1fr) !important; }
      }
      @media (max-width: 520px) {
        .rpp-pr-grid { grid-template-columns: 1fr !important; }
      }
    `}</style>

    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "2.25rem" }}>
        <span className="rpp-pr-eyebrow">Popular Resources</span>
        <h2 className="rpp-pr-heading">The guides people open most</h2>
      </div>

      {/* Cards */}
      <ul className="rpp-pr-grid">
        {resources.map((r) => (
          <li key={r.href}>
            <Link to={r.href} className="rpp-pr-card">
              <span className="rpp-pr-card-text">{r.title}</span>
              <span className="rpp-pr-card-cta">
                Read guide
                <svg
                  viewBox="0 0 24 24"
                  width="13"
                  height="13"
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
            </Link>
          </li>
        ))}
      </ul>

      {/* Browse all */}
      <div style={{ textAlign: "center", marginTop: "2.25rem" }}>
        <Link to="/resources" className="rpp-pr-browse">
          Browse all resources
          <svg
            viewBox="0 0 24 24"
            width="18"
            height="18"
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
