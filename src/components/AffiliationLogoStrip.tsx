import AffiliationBadgeGrid from "@/components/AffiliationBadgeGrid";
import { FEATURED_BROKER } from "@/data/featuredProfessionals";

/**
 * Monochrome logo strip above the footer (Sept 2026 audit). The badges are
 * the featured broker's professional memberships, not the hub's — the label
 * says so, because a hub that "provides no services" cannot itself be a
 * REALTOR® or a corporate partner of a care association.
 */
const AffiliationLogoStrip = () => (
  <section aria-label="Professional affiliations of the featured broker" className="rpp-logostrip">
    <p className="rpp-logostrip-label">Professional affiliations of {FEATURED_BROKER.name}, the featured broker</p>
    <AffiliationBadgeGrid className="rpp-logostrip-grid" />
    <style>{`
      .rpp-logostrip { background: #faf8f4; border-top: 1px solid #e6e0d6; padding: 1.75rem 1.5rem 1.5rem; }
      .rpp-logostrip .rpp-logostrip-label { text-align: center; font-family: 'DM Sans', system-ui, sans-serif; font-size: 12px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: #6a635b; margin: 0 0 1rem !important; }
      .rpp-logostrip .rpp-logostrip-grid img { height: 56px !important; filter: grayscale(1); opacity: 0.72; transition: filter 0.2s, opacity 0.2s; }
      @media (min-width: 900px) { .rpp-logostrip .rpp-logostrip-grid img { height: 64px !important; } }
      @media (hover: hover) { .rpp-logostrip .rpp-logostrip-grid a:hover img { filter: none; opacity: 1; } }
    `}</style>
  </section>
);

export default AffiliationLogoStrip;
