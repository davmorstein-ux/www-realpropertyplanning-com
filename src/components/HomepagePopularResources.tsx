import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ClipboardCheck, Scale, HeartHandshake, KeyRound } from "lucide-react";

const resources = [
  {
    title: "Executor's 10-Step Checklist",
    href: "/resources/washington-executors-10-step-checklist",
    icon: ClipboardCheck,
    accent: "#D97706",
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

const HomepagePopularResources = () => {
  const { t } = useTranslation();

  return (
    <section style={{ backgroundColor: "#ffffff", padding: "3.5rem 0 4rem" }}>
      <style>{`
      .rpp-pr-eyebrow {
        font-family: 'DM Sans', system-ui, sans-serif !important;
        font-size: 21px !important;
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
        font-family: 'DM Sans', system-ui, sans-serif !important;
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

      /* Browse all — a solid button, so it reads as the primary next step
         rather than another text link among many. */
      .rpp-pr-browse.rpp-pr-browse {
        display: inline-flex !important;
        align-items: center !important;
        gap: 10px !important;
        font-family: 'DM Sans', system-ui, sans-serif !important;
        font-size: 16px !important;
        font-weight: 700 !important;
        color: #ffffff !important;
        background-color: #3d3833 !important;
        border: 2px solid #3d3833 !important;
        border-radius: 8px !important;
        /* Padding and min-height are set inline on the <Link> instead of
           here: Lovable's preview serves stale CSS from <style> blocks
           while .tsx markup updates reliably, so sizing that needs to
           land goes in the markup. 44px is the WCAG 2.2 AAA tap-target
           floor — don't trim below it. */
        box-shadow: 0 3px 12px rgba(26,39,68,0.14) !important;
        transition: background-color 150ms ease, border-color 150ms ease !important;
      }
      .rpp-pr-browse.rpp-pr-browse,
      .rpp-pr-browse.rpp-pr-browse * {
        text-decoration: none !important;
      }
      .rpp-pr-browse:hover,
      .rpp-pr-browse:focus-visible {
        background-color: #7f1d1d !important;
        border-color: #7f1d1d !important;
      }

      /* AFH Club — a quiet, explicitly labeled door for the owner /
         operator / investor audience. Deliberately a different shape from
         the browse button above it: outlined strip, green left rule, and
         the audience named up front, so the two never compete. */
      .rpp-afh-strip.rpp-afh-strip {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 0.5rem 1.25rem;
        width: 100%;
        max-width: 720px;
        min-height: 56px;
        margin: 1.75rem auto 0;
        padding: 0.85rem 1.5rem;
        background: #ffffff;
        border: 1px solid #cfd8d4;
        border-left: 5px solid #0a5648;
        border-radius: 10px;
        text-align: center;
        transition: background-color 150ms ease, border-color 150ms ease;
      }
      .rpp-afh-strip.rpp-afh-strip,
      .rpp-afh-strip.rpp-afh-strip * {
        text-decoration: none !important;
      }
      .rpp-afh-strip:hover,
      .rpp-afh-strip:focus-visible {
        background: #f4f8f6;
        border-color: #0a5648;
      }
      .rpp-afh-strip-label.rpp-afh-strip-label {
        font-family: 'DM Sans', system-ui, sans-serif;
        font-size: 17px;
        font-weight: 700;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        color: #063e33;
        margin: 0;
      }
      .rpp-afh-strip-cta.rpp-afh-strip-cta {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        font-family: 'DM Sans', system-ui, sans-serif;
        font-size: 18px;
        font-weight: 700;
        color: #0a5648;
        border-bottom: 2px solid #0a5648;
        padding-bottom: 2px;
        margin: 0;
      }

      @media (max-width: 900px) {
        .rpp-pr-grid { grid-template-columns: repeat(2, 1fr) !important; }
      }
      @media (max-width: 640px) {
        .rpp-afh-strip.rpp-afh-strip {
          flex-direction: column;
          gap: 0.6rem;
          padding: 1rem 1.25rem;
        }
        .rpp-afh-strip-label.rpp-afh-strip-label {
          font-size: 15px;
          letter-spacing: 0.05em;
        }
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
                  {/* Arrow comes from the sitewide CSS ::after — see the CTA
                      ARROW block in index.css. */}
                  <span className="rpp-pr-card-cta">
                    Read Guide
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Browse all — primary next step */}
        <div style={{ textAlign: "center", marginTop: "2.25rem" }}>
          <Link to="/resources" className="rpp-pr-browse" style={{ padding: "11px 22px", minHeight: 44 }}>
            Browse all resources
          </Link>
        </div>

        {/* AFH Club — relocated from the funnel section so the top of the
            homepage speaks only to families. No SVG arrow here: the
            afhClub.cta string already ends in an arrow in every locale. */}
        <Link to="/afh-club" className="rpp-afh-strip marquee-hover">
          <span className="rpp-afh-strip-label">{t("afhClub.eyebrow")}</span>
          <span className="rpp-afh-strip-cta">{t("afhClub.cta")}</span>
        </Link>
      </div>
    </section>
  );
};

export default HomepagePopularResources;
