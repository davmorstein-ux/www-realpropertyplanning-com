import { Link } from "react-router-dom";

import mappin3d from "@/assets/real-estate-service-areas-mappin-washington.webp";
import iconEmail3d from "@/assets/icons/real-estate-email-contact-icon-washington.webp";

import alcaLogo from "@/assets/senior-advocates-alca-partner-washington.webp";
import naosaBadge from "@/assets/senior-advocates-naosa-badge-washington.webp";
import naepcLogo from "@/assets/estate-planners-naepc-badge-washington.webp";
import kccLogo from "@/assets/king-county-collaborative-law-logo.webp";
import iconPhone3d from "@/assets/icons/real-estate-phone-contact-icon-washington.webp";

const Footer = () => {
  return (
    <footer data-nosnippet="true" className="bg-navy-dark py-12">
      <div className="container px-6 lg:px-8">
        {/* Compact link grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand & NAP */}
          <div>
            <Link to="/" className="block mb-3">
              <span className="font-serif text-xl text-primary-foreground font-semibold">
                Real Property Planning
              </span>
            </Link>
            <p className="text-primary-foreground text-base leading-relaxed mb-4">
              Probate, estate &amp; senior transition real estate — Washington State.
            </p>
            <div className="flex flex-col gap-1.5 text-base">
              <a href="tel:2069003015" className="text-primary-foreground hover:text-gold transition-colors flex items-center gap-2">
                <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 object-contain shrink-0" loading="lazy"/>
                (206) 900-3015
              </a>
              <a href="mailto:info@realpropertyplanning.com" className="text-primary-foreground hover:text-gold transition-colors flex items-center gap-2">
                <img src={iconEmail3d} alt="" aria-hidden="true" className="w-5 h-5 object-contain shrink-0" loading="lazy"/>
                info@realpropertyplanning.com
              </a>
              <div className="text-primary-foreground flex items-start gap-2 mt-1">
                <img src={mappin3d} alt="" aria-hidden="true" className="w-5 h-5 object-contain mt-0.5 shrink-0" loading="lazy"/>
                <span>PO Box 1462, Woodinville, WA 98072</span>
              </div>
            </div>
          </div>

          {/* Guided Journeys (curated, not exhaustive) */}
          <div>
            <h3 className="text-primary-foreground font-serif text-lg font-semibold mb-3">Guided Journeys</h3>
            <ul className="space-y-1.5 text-primary-foreground text-base">
              <li><Link to="/helping-aging-parents" className="hover:text-gold transition-colors">Helping an Aging Parent</Link></li>
              <li><Link to="/estate-probate-inherited-property" className="hover:text-gold transition-colors">Estate &amp; Probate</Link></li>
              <li><Link to="/what-to-do-with-the-house" className="hover:text-gold transition-colors">What To Do With the House</Link></li>
              <li><Link to="/understanding-housing-care-options" className="hover:text-gold transition-colors">Housing &amp; Care Options</Link></li>
              <li><Link to="/executor-responsibilities-first-steps" className="hover:text-gold transition-colors">Executor First Steps</Link></li>
              <li><Link to="/estate-planning-powers-of-attorney" className="hover:text-gold transition-colors">Estate Planning &amp; POA</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-primary-foreground font-serif text-lg font-semibold mb-3">Services</h3>
            <ul className="space-y-1.5 text-primary-foreground text-base">
              <li><Link to="/probate-estate-sales" className="hover:text-gold transition-colors">Probate &amp; Estate Sales</Link></li>
              <li><Link to="/senior-transitions" className="hover:text-gold transition-colors">Senior Transitions</Link></li>
              <li><Link to="/why-valuation-matters" className="hover:text-gold transition-colors">Valuation &amp; Pricing</Link></li>
              <li><Link to="/for-attorneys" className="hover:text-gold transition-colors">For Attorneys &amp; Fiduciaries</Link></li>
              <li><Link to="/guides-and-resources" className="hover:text-gold transition-colors">Guides &amp; Resources</Link></li>
            </ul>
          </div>

          {/* About / Contact */}
          <div>
            <h3 className="text-primary-foreground font-serif text-lg font-semibold mb-3">About</h3>
            <ul className="space-y-1.5 text-primary-foreground text-base">
              <li><Link to="/about" className="hover:text-gold transition-colors">About Real Property Planning</Link></li>
              <li><Link to="/how-we-work" className="hover:text-gold transition-colors">How We Work</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
              <li><Link to="/counties" className="hover:text-gold transition-colors">Service Areas</Link></li>
              <li><Link to="/faq" className="hover:text-gold transition-colors">FAQs</Link></li>
            </ul>
          </div>
        </div>

        {/* Affiliations — quieter row */}
        <div className="border-t border-primary-foreground pt-8 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-[760px] mx-auto items-center">
            <a href="https://www.aginglifecare.org" target="_blank" rel="noopener noreferrer" className="flex justify-center">
              <img src={alcaLogo} alt="Aging Life Care Association Corporate Partner" className="object-contain max-h-[72px] w-auto" loading="lazy" />
            </a>
            <a href="https://www.naepc.org" target="_blank" rel="noopener noreferrer" className="flex justify-center">
              <img src={naepcLogo} alt="National Association of Estate Planners & Councils" className="object-contain max-h-[72px] w-auto" loading="lazy" />
            </a>
            <a href="https://www.naosa.org" target="_blank" rel="noopener noreferrer" className="flex justify-center">
              <img src={naosaBadge} alt="National Association of Senior Advocates - Best Real Estate Agent 2026" className="object-contain max-h-[88px] w-auto" loading="lazy" />
            </a>
            <a href="https://www.kingcountycollaborativelaw.org" target="_blank" rel="noopener noreferrer" className="flex justify-center">
              <img src={kccLogo} alt="Friends of King County Collaborative Law" className="object-contain max-h-[72px] w-auto" loading="lazy" />
            </a>
          </div>
        </div>

        {/* Compliance & disclaimer — single compact block */}
        <div className="border-t border-primary-foreground pt-6 text-center" data-nosnippet="true">
          <p className="text-primary-foreground text-base leading-relaxed max-w-3xl mx-auto mb-3">
            Real Property Planning — independent hub for probate, estate, and senior transition real estate in Washington State. License held under eXp Realty. Appraisal services provided through Stein Appraisal. Real Property Planning is not a law firm or tax advisor. For legal, tax, or probate-specific advice, consult a qualified professional.
          </p>
          <p className="text-primary-foreground text-base leading-relaxed max-w-2xl mx-auto mb-3">
            Accessibility questions or concerns:{" "}
            <a href="mailto:info@realpropertyplanning.com" className="underline underline-offset-2 hover:text-gold transition-colors">
              info@realpropertyplanning.com
            </a>
          </p>
          <p className="text-primary-foreground text-base">
            © {new Date().getFullYear()} Real Property Planning
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
