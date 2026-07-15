import { Link } from "react-router-dom";
import { ClipboardCheck, Scale, HeartHandshake, KeyRound, ArrowRight } from "lucide-react";

const resources = [
  {
    title: "Executor's 10-Step Checklist",
    href: "/resources/washington-executors-10-step-checklist",
    icon: ClipboardCheck,
    accent: "#721d24",
  },
  {
    title: "How Probate Real Estate Works",
    href: "/guides/how-probate-real-estate-works",
    icon: Scale,
    accent: "#246044",
  },
  {
    title: "Senior Housing & Care Options",
    href: "/understanding-housing-care-options",
    icon: HeartHandshake,
    accent: "#25597e",
  },
  {
    title: "What to Do With an Inherited House",
    href: "/guides/inherited-house-washington",
    icon: KeyRound,
    accent: "#5d2f74",
  },
];

const HomepagePopularResources = () => (
  <section style={{ backgroundColor: "#ffffff", padding: "3.5rem 0 4rem" }}>
    <style>{`
      .rpp-pr-eyebrow {
        font-family: Inter, system-ui, sans-serif !important;
        font-size: 18px !important;
        font-weight: 700 !important;
        letter-spacing: 0.14em !important;
        text-transform: uppercase !important;
        color: #272421 !important;
        margin: 0 0 0.5rem 0 !important;
        display: block !important;
      }
      .rpp-pr-heading {
        font-family: 'Cormorant Garamond', Georgia, serif !important;
        font-size: clamp(32px, 3vw, 48px) !important;
        font-weight: 700 !important;
        color: #272421 !important;
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
        align-items: center !important;
        text-align: center !important;
        background-color: #ffffff !important;
        border: 1px solid #dfd3d4 !important;
        border-top: 4px solid var(--pr-accent, #272421) !important;
        border-radius: 12px !important;
        padding: 2rem 1.5rem 1.75rem !important;
        min-height: 240px !important;
        width: 100% !important;
        text-decoration: none !important;
        box-shadow: 0 3px 14px rgba(26,39,68,0.08) !important;
        transition: box-shadow 0.2s ease, transform 0.2s ease !important;
      }
      .rpp-pr-card:hover {
        box-shadow: 0 10px 28px rgba(26,39,68,0.16) !important;
      }
      .rpp-pr-card-icon {
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        width: 52px !important;
        height: 52px !important;
        border-radius: 50% !important;
        background-color: var(--pr-accent-soft, #f5f2ec) !important;
        margin-bottom: 1.1rem !important;
        flex-shrink: 0 !important;
      }
      .rpp-pr-card-text {
        font-family: Georgia, 'Cormorant Garamond', serif !important;
        font-size: 20px !important;
        font-weight: 700 !important;
        color: #272421 !important;
        line-height: 1.35 !important;
        flex: 1 !important;
        margin-bottom: 1.5rem !important;
        text-align: center !important;
      }
      .rpp-pr-card-cta {
        display: inline-flex !important;
        align-items: center !important;
        gap: 8px !important;
        font-family: Inter, system-ui, sans-serif !important;
        font-size: 14px !important;
        font-weight: 700 !important;
        letter-spacing: 0.08em !important;
        text-transform: uppercase !important;
        color: #ffffff !important;
        background-color: var(--pr-accent, #272421) !important;
        padding: 10px 18px !important;
        border-radius: 8px !important;
        text-decoration: none !important;
      }
      .rpp-pr-browse {
        display: inline-flex !important;
        align-items: center !important;
        gap: 8px !important;
        font-family: Inter, system-ui, sans-serif !important;
        font-size: 18px !important;
        font-weight: 700 !important;
        color: #272421 !important;
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
        {resources.map((r) => {
          const Icon = r.icon;
          return (
            <li key={r.href}>
              <Link
                to={r.href}
                className="rpp-pr-card marquee-hover"
                style={{ ["--pr-accent" as string]: r.accent, ["--pr-accent-soft" as string]: `${r.accent}1a` }}
              >
                <span className="rpp-pr-card-icon">
                  <Icon size={26} color={r.accent} strokeWidth={2} aria-hidden="true" />
                </span>
                <span className="rpp-pr-card-text">{r.title}</span>
                <span className="rpp-pr-card-cta">
                  Read Guide
                  <ArrowRight size={15} aria-hidden="true" />
                </span>
              </Link>
            </li>
          );
        })}
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
