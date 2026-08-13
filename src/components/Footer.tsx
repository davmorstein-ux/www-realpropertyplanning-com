import { Link } from "react-router-dom";

import alcaLogo from "@/assets/senior-advocates-alca-partner-washington.webp";
import naosaBadge from "@/assets/senior-advocates-naosa-badge-washington.webp";
import naepcLogo from "@/assets/estate-planners-naepc-badge-washington.webp";
import kccLogo from "@/assets/king-county-collaborative-law-logo.webp";

const Footer = () => {
  return (
    <footer data-nosnippet="true" style={{ backgroundColor: "#23211f", padding: "2.5rem 0 1.5rem" }}>
      <style>{`
        .rpp-footer-link {
          color: rgba(255,255,255,0.72) !important;
          text-decoration: none !important;
          font-family: 'DM Sans', system-ui, sans-serif !important;
          font-size: 16px !important;
          line-height: 1.4 !important;
          transition: color 0.15s ease !important;
          display: block !important;
          padding: 2px 0 !important;
        }
        .rpp-footer-link:hover { color: #e0737d !important; }

        /* HEADING COLOUR CHANGED — was #5757ff, which measures about 3.0:1
           against the #23211f footer background. AA needs 4.5:1 for text
           this size (15px bold does not qualify as "large text", which
           starts at 18.66px bold). #9a9aff keeps the periwinkle character
           at roughly 5.9:1. Applied to all four headings so the columns and
           the contact block stay identical. */
        .rpp-footer-col-heading {
          font-family: 'DM Sans', system-ui, sans-serif !important;
          font-size: 15px !important;
          font-weight: 700 !important;
          letter-spacing: 0.14em !important;
          text-transform: uppercase !important;
          color: #9a9aff !important;
          margin: 0 0 0.6rem 0 !important;
          padding-bottom: 0.4rem !important;
          border-bottom: 1px solid rgba(255,255,255,0.1) !important;
          display: block !important;
          text-decoration: none !important;
        }
        a.rpp-footer-col-heading:hover { color: #b8b8ff !important; }

        .rpp-footer-grid {
          display: grid !important;
          grid-template-columns: 2fr 2fr 1.5fr 1fr !important;
          gap: 2rem !important;
          margin-bottom: 2rem !important;
        }
        @media (max-width: 900px) {
          .rpp-footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 520px) {
          .rpp-footer-grid { grid-template-columns: 1fr !important; }
        }

        /* NAP items now carry the same typography as .rpp-footer-link.
           WAS: 16px at 0.65 opacity, display:flex with an 8px gap left over
           from an icon treatment that is no longer used — the flex layout
           was also why these sat on a different vertical rhythm to the
           link columns. */
        .rpp-footer-nap {
          font-family: 'DM Sans', system-ui, sans-serif !important;
          font-size: 16px !important;
          line-height: 1.4 !important;
          color: rgba(255,255,255,0.72) !important;
          display: block !important;
          padding: 2px 0 !important;
          text-decoration: none !important;
          transition: color 0.15s ease !important;
        }
        a.rpp-footer-nap:hover { color: #e0737d !important; }

        /* Tagline. WAS 13px at 0.55 opacity in a separate treatment — the
           smallest and faintest text in the block. Now matches the links,
           held slightly back by opacity rather than by size. */
        .rpp-footer-tagline {
          font-family: 'DM Sans', system-ui, sans-serif !important;
          font-size: 16px !important;
          line-height: 1.4 !important;
          color: rgba(255,255,255,0.72) !important;
          margin: 0 0 0.75rem 0 !important;
          max-width: 260px !important;
        }

        /* WAS 11px at 0.38 opacity — roughly 2.6:1, well under AA, and below
           any reasonable minimum size. 13px at 0.62 reaches about 4.6:1 and
           still reads as fine print. */
        .rpp-footer-disclaimer {
          font-family: 'DM Sans', system-ui, sans-serif !important;
          font-size: 13px !important;
          color: rgba(255,255,255,0.62) !important;
          line-height: 1.6 !important;
          text-align: center !important;
          max-width: 820px !important;
          margin: 0 auto 0.5rem auto !important;
        }
        .rpp-footer-disclaimer a {
          color: rgba(255,255,255,0.72) !important;
          text-decoration: underline !important;
        }
      `}</style>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
        {/* Main columns */}
        <div className="rpp-footer-grid">
          {/* Brand & NAP — same heading class and link typography as the
              three columns to its right, so the four read as one system. */}
          <div>
            <Link to="/" className="rpp-footer-col-heading">
              Real Property Planning
            </Link>
            <p className="rpp-footer-tagline">
              Probate, estate &amp; senior transition real estate — Washington State.
            </p>
            <a href="tel:2069003015" className="rpp-footer-nap">
              (206) 900-3015
            </a>
            <a href="mailto:info@realpropertyplanning.com" className="rpp-footer-nap">
              info@realpropertyplanning.com
            </a>
            <div className="rpp-footer-nap">PO Box 1462, Woodinville, WA 98072</div>
          </div>

          {/* Guided Journeys */}
          <div>
            <span className="rpp-footer-col-heading">Guided Journeys</span>
            <Link to="/helping-an-aging-parent" className="rpp-footer-link">
              Helping an Aging Parent
            </Link>
            <Link to="/estate-probate-inherited-property" className="rpp-footer-link">
              Estate &amp; Probate
            </Link>
            <Link to="/what-to-do-with-the-house" className="rpp-footer-link">
              What To Do With the House
            </Link>
            <Link to="/understanding-housing-care-options" className="rpp-footer-link">
              Housing &amp; Care Options
            </Link>
            <Link to="/executor-responsibilities-first-steps" className="rpp-footer-link">
              Executor First Steps
            </Link>
            <Link to="/estate-planning-powers-of-attorney" className="rpp-footer-link">
              Estate Planning &amp; POA
            </Link>
          </div>

          {/* Services */}
          <div>
            <span className="rpp-footer-col-heading">Services</span>
            <Link to="/probate-estate-sales" className="rpp-footer-link">
              Probate &amp; Estate Sales
            </Link>
            <Link to="/senior-transitions" className="rpp-footer-link">
              Senior Transitions
            </Link>
            <Link to="/why-valuation-matters" className="rpp-footer-link">
              Valuation &amp; Pricing
            </Link>
            <Link to="/for-attorneys" className="rpp-footer-link">
              For Attorneys
            </Link>
            <Link to="/guides-and-resources" className="rpp-footer-link">
              Guides &amp; Articles
            </Link>
            <Link to="/afh-club/homes" className="rpp-footer-link">
              Adult Family Home Directory
            </Link>
          </div>

          {/* About */}
          <div>
            <span className="rpp-footer-col-heading">About</span>
            <Link to="/about" className="rpp-footer-link">
              About
            </Link>
            <Link to="/how-the-process-works" className="rpp-footer-link">
              How We Work
            </Link>
            <Link to="/contact" className="rpp-footer-link">
              Contact
            </Link>
            <Link to="/counties" className="rpp-footer-link">
              Service Areas
            </Link>
            <Link to="/faq" className="rpp-footer-link">
              FAQs
            </Link>
            <Link to="/privacy" className="rpp-footer-link">
              Privacy
            </Link>
            <Link to="/disclaimer" className="rpp-footer-link">
              Disclaimer
            </Link>
            <Link to="/sitemap" className="rpp-footer-link">
              Site Map
            </Link>
          </div>
        </div>

        {/* Affiliations */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: "1.5rem",
            marginBottom: "1.5rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "2.5rem",
            flexWrap: "wrap",
          }}
        >
          <a href="https://www.aginglifecare.org" target="_blank" rel="noopener noreferrer">
            <img
              src={alcaLogo}
              alt="Aging Life Care Association Corporate Partner"
              style={{ maxHeight: 52, width: "auto", objectFit: "contain" }}
              loading="lazy"
              decoding="async"
              width={1185}
              height={819}
            />
            <span className="sr-only"> (opens in a new window)</span>
          </a>
          <a href="https://www.naepc.org" target="_blank" rel="noopener noreferrer">
            <img
              src={naepcLogo}
              alt="National Association of Estate Planners & Councils"
              style={{ maxHeight: 52, width: "auto", objectFit: "contain" }}
              loading="lazy"
              decoding="async"
              width={864}
              height={265}
            />
            <span className="sr-only"> (opens in a new window)</span>
          </a>
          <a href="https://www.naosa.org" target="_blank" rel="noopener noreferrer">
            <img
              src={naosaBadge}
              alt="National Association of Senior Advocates"
              style={{ maxHeight: 64, width: "auto", objectFit: "contain" }}
              loading="lazy"
              decoding="async"
              width={423}
              height={512}
            />
            <span className="sr-only"> (opens in a new window)</span>
          </a>
          <a href="https://www.kingcountycollaborativelaw.org" target="_blank" rel="noopener noreferrer">
            <img
              src={kccLogo}
              alt="Friends of King County Collaborative Law"
              style={{ maxHeight: 52, width: "auto", objectFit: "contain" }}
              loading="lazy"
              decoding="async"
              width={496}
              height={101}
            />
            <span className="sr-only"> (opens in a new window)</span>
          </a>
        </div>

        {/* Disclaimer — compact */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "1rem" }}>
          {/* CONDENSED to match the body DisclaimerSection. The full text is
              one click away at /disclaimer, and the body version — which has
              no data-nosnippet — is the one search engines and AI answer
              engines can extract.

              Kept here rather than removed because this footer is the only
              disclosure that appears on EVERY page. DisclaimerSection is
              added per page and can be missed; the footer cannot. */}
          <p className="rpp-footer-disclaimer">
            Real Property Planning is an independent educational hub. It does not provide legal, financial, tax, real
            estate brokerage, medical, or other professional services. Professionals referenced on this site are
            independently licensed and operate through their own separate businesses.{" "}
            <Link to="/disclaimer">Full disclaimer</Link>.
          </p>
          <p className="rpp-footer-disclaimer">
            Accessibility: <a href="mailto:info@realpropertyplanning.com">info@realpropertyplanning.com</a>
            &nbsp;·&nbsp; © {new Date().getFullYear()} Real Property Planning
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
