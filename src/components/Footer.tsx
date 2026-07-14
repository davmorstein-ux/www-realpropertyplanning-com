import { Link } from "react-router-dom";

import alcaLogo from "@/assets/senior-advocates-alca-partner-washington.webp";
import naosaBadge from "@/assets/senior-advocates-naosa-badge-washington.webp";
import naepcLogo from "@/assets/estate-planners-naepc-badge-washington.webp";
import kccLogo from "@/assets/king-county-collaborative-law-logo.webp";
import iconPhone3d from "@/assets/icons/real-estate-phone-handset-3d-icon-washington.webp";
import iconEmail3d from "@/assets/footer-email-icon.webp";
import iconPin3d from "@/assets/icons/real-estate-location-pin-3d-icon-washington.webp";

const Footer = () => {
  return (
    <footer data-nosnippet="true" style={{ backgroundColor: "#23211f", padding: "2.5rem 0 1.5rem" }}>
      <style>{`
        .rpp-footer-link {
          color: rgba(255,255,255,0.72) !important;
          text-decoration: none !important;
          font-family: Inter, system-ui, sans-serif !important;
          font-size: 14px !important;
          line-height: 1.4 !important;
          transition: color 0.15s ease !important;
          display: block !important;
          padding: 2px 0 !important;
        }
        .rpp-footer-link:hover { color: #cd4a55 !important; }
        .rpp-footer-col-heading {
          font-family: Inter, system-ui, sans-serif !important;
          font-size: 11px !important;
          font-weight: 700 !important;
          letter-spacing: 0.14em !important;
          text-transform: uppercase !important;
          color: #cd4a55 !important;
          margin: 0 0 0.6rem 0 !important;
          padding-bottom: 0.4rem !important;
          border-bottom: 1px solid rgba(255,255,255,0.1) !important;
          display: block !important;
        }
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
        .rpp-footer-nap {
          font-family: Inter, system-ui, sans-serif !important;
          font-size: 13px !important;
          color: rgba(255,255,255,0.65) !important;
          display: flex !important;
          align-items: center !important;
          gap: 8px !important;
          padding: 3px 0 !important;
          text-decoration: none !important;
          transition: color 0.15s ease !important;
        }
        .rpp-footer-nap:hover { color: #cd4a55 !important; }
        .rpp-footer-disclaimer {
          font-family: Inter, system-ui, sans-serif !important;
          font-size: 11px !important;
          color: rgba(255,255,255,0.38) !important;
          line-height: 1.6 !important;
          text-align: center !important;
          max-width: 820px !important;
          margin: 0 auto 0.4rem auto !important;
        }
      `}</style>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
        {/* Main columns */}
        <div className="rpp-footer-grid">
          {/* Brand & NAP */}
          <div>
            <Link to="/" style={{ display: "block", marginBottom: "0.5rem" }}>
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "#ffffff",
                  letterSpacing: "0.02em",
                }}
              >
                Real Property Planning
              </span>
            </Link>
            <p
              style={{
                fontFamily: "Inter, system-ui, sans-serif",
                fontSize: "13px",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.5,
                margin: "0 0 0.75rem",
                maxWidth: "260px",
              }}
            >
              Probate, estate &amp; senior transition real estate — Washington State.
            </p>
            <a href="tel:2069003015" className="rpp-footer-nap">
              <img
                src={iconPhone3d}
                alt=""
                aria-hidden="true"
                style={{ width: 20, height: 20, objectFit: "contain", flexShrink: 0 }}
                loading="lazy"
                decoding="async"
                width={1024}
                height={1536}
              />
              (206) 900-3015
            </a>
            <a href="mailto:info@realpropertyplanning.com" className="rpp-footer-nap">
              <img
                src={iconEmail3d}
                alt=""
                aria-hidden="true"
                style={{ width: 20, height: 20, objectFit: "contain", flexShrink: 0 }}
                loading="lazy"
                decoding="async"
                width={128}
                height={128}
              />
              info@realpropertyplanning.com
            </a>
            <div className="rpp-footer-nap">
              <img
                src={iconPin3d}
                alt=""
                aria-hidden="true"
                style={{ width: 20, height: 20, objectFit: "contain", flexShrink: 0 }}
                loading="lazy"
                decoding="async"
                width={512}
                height={512}
              />
              PO Box 1462, Woodinville, WA 98072
            </div>
          </div>

          {/* Guided Journeys */}
          <div>
            <span className="rpp-footer-col-heading">Guided Journeys</span>
            <Link to="/helping-aging-parents" className="rpp-footer-link">
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
              Guides &amp; Resources
            </Link>
          </div>

          {/* About */}
          <div>
            <span className="rpp-footer-col-heading">About</span>
            <Link to="/about" className="rpp-footer-link">
              About
            </Link>
            <Link to="/how-we-work" className="rpp-footer-link">
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
            <Link to="/disclaimer" className="rpp-footer-link">
              Disclaimer
            </Link>
            <Link to="/search" className="rpp-footer-link">
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
          </a>
        </div>

        {/* Disclaimer — compact */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "1rem" }}>
          <p className="rpp-footer-disclaimer">
            Real Property Planning is an independent educational hub. It does not provide legal, financial, tax, real
            estate brokerage, medical, or other professional services. Professionals referenced on this site are
            independent and not affiliated with Real Property Planning.{" "}
            <Link to="/disclaimer" style={{ color: "rgba(255,255,255,0.45)", textDecoration: "underline" }}>
              Full disclaimer
            </Link>
            .
          </p>
          <p className="rpp-footer-disclaimer">
            Accessibility:{" "}
            <a
              href="mailto:info@realpropertyplanning.com"
              style={{ color: "rgba(255,255,255,0.38)", textDecoration: "underline" }}
            >
              info@realpropertyplanning.com
            </a>
            &nbsp;·&nbsp; © {new Date().getFullYear()} Real Property Planning
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
