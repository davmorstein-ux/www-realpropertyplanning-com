import { Link } from "react-router-dom";

const resources = [
  {
    title: "Washington Executor's 10-Step Checklist",
    href: "/resources/washington-executors-10-step-checklist",
  },
  {
    title: "How Probate Real Estate Works",
    href: "/guides/how-probate-real-estate-works",
  },
  {
    title: "Senior Housing & Care Options",
    href: "/understanding-housing-care-options",
  },
  {
    title: "What to Do With an Inherited House",
    href: "/guides/inherited-house-washington",
  },
];

const HomepagePopularResources = () => (
  <section className="bg-background py-16 md:py-20">
    <div className="container px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p
            className="text-gold mb-3"
            style={{
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            Popular Resources
          </p>
          <h2
            className="font-serif text-navy"
            style={{ fontSize: "clamp(22px, 2.2vw, 30px)", fontWeight: 500, lineHeight: 1.3 }}
          >
            The guides people open most
          </h2>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {resources.map((r) => (
            <li key={r.href}>
              <Link
                to={r.href}
                className="group flex items-center justify-between gap-4 rounded-lg border border-border bg-cream px-5 py-4 transition-colors hover:border-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                style={{ minHeight: "90px", display: "flex", alignItems: "center" }}
              >
                <span className="font-serif text-navy" style={{ fontSize: "18px", fontWeight: 500, lineHeight: 1.35 }}>
                  {r.title}
                </span>
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="shrink-0 text-gold transition-transform group-hover:translate-x-1"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </Link>
            </li>
          ))}
        </ul>

        <div className="text-center mt-10">
          <Link
            to="/resources"
            className="inline-flex items-center gap-2 text-navy font-semibold hover:text-gold transition-colors"
            style={{ fontSize: "16px", letterSpacing: "0.04em" }}
          >
            Browse all resources
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default HomepagePopularResources;
