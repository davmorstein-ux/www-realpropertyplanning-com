import { Link } from "react-router-dom";

import alcaLogo from "@/assets/senior-advocates-alca-partner-washington.webp";
import naosaBadge from "@/assets/senior-advocates-naosa-badge-washington.webp";
import naepcLogo from "@/assets/estate-planners-naepc-badge-washington.webp";
import kccLogo from "@/assets/king-county-collaborative-law-logo.webp";
import iconPhone3d from "@/assets/icons/real-estate-phone-handset-3d-icon-washington.webp";
import iconEmail3d from "@/assets/icons/real-estate-email-envelope-3d-icon-washington.webp";
import iconPin3d from "@/assets/icons/real-estate-location-pin-3d-icon-washington.webp";

const Footer = () => {
  return (
    <footer data-nosnippet="true" className="bg-navy-dark py-14 md:py-16">
      <div className="container px-6 lg:px-10">
        {/* Compact link grid — wider Guided Journeys column so links never clip */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-12">
          {/* Brand & NAP — 4/12 */}
          <div className="lg:col-span-4">
            <Link to="/" className="block mb-4">
              <span className="font-serif text-2xl text-primary-foreground font-semibold leading-tight">
                Real Property Planning
              </span>
            </Link>
            <p className="text-primary-foreground text-[15px] leading-relaxed mb-5">
              Probate, estate &amp; senior transition real estate — Washington State.
            </p>
            <ul className="flex flex-col gap-3 text-[15px] text-left">
              <li>
                <a href="tel:2069003015" className="text-primary-foreground hover:text-gold transition-colors flex items-center gap-3">
                  <img src={iconPhone3d} alt="" aria-hidden="true" className="w-7 h-7 object-contain shrink-0" loading="lazy" />
                  <span>(206) 900-3015</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@realpropertyplanning.com" className="text-primary-foreground hover:text-gold transition-colors flex items-center gap-3 break-all">
                  <img src={iconEmail3d} alt="" aria-hidden="true" className="w-7 h-7 object-contain shrink-0" loading="lazy" />
                  <span>info@realpropertyplanning.com</span>
                </a>
              </li>
              <li className="text-primary-foreground flex items-start gap-3">
                <img src={iconPin3d} alt="" aria-hidden="true" className="w-7 h-7 object-contain mt-0.5 shrink-0" loading="lazy" />
                <span>PO Box 1462, Woodinville, WA 98072</span>
              </li>
            </ul>
          </div>

          {/* Guided Journeys — 4/12 (wider so links never clip) */}
          <div className="lg:col-span-4">
            <h3 className="text-primary-foreground font-serif text-lg font-semibold mb-4">Guided Journeys</h3>
            <ul className="space-y-2.5 text-primary-foreground text-[15px] leading-snug">
              <li><Link to="/helping-aging-parents" className="hover:text-gold transition-colors">Helping an Aging Parent</Link></li>
              <li><Link to="/estate-probate-inherited-property" className="hover:text-gold transition-colors">Estate &amp; Probate</Link></li>
              <li><Link to="/what-to-do-with-the-house" className="hover:text-gold transition-colors">What To Do With the House</Link></li>
              <li><Link to="/understanding-housing-care-options" className="hover:text-gold transition-colors">Housing &amp; Care Options</Link></li>
              <li><Link to="/executor-responsibilities-first-steps" className="hover:text-gold transition-colors">Executor First Steps</Link></li>
              <li><Link to="/estate-planning-powers-of-attorney" className="hover:text-gold transition-colors">Estate Planning &amp; POA</Link></li>
            </ul>
          </div>

          {/* Services — 2/12 */}
          <div className="lg:col-span-2">
            <h3 className="text-primary-foreground font-serif text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2.5 text-primary-foreground text-[15px] leading-snug">
              <li><Link to="/probate-estate-sales" className="hover:text-gold transition-colors">Probate &amp; Estate Sales</Link></li>
              <li><Link to="/senior-transitions" className="hover:text-gold transition-colors">Senior Transitions</Link></li>
              <li><Link to="/why-valuation-matters" className="hover:text-gold transition-colors">Valuation &amp; Pricing</Link></li>
              <li><Link to="/for-attorneys" className="hover:text-gold transition-colors">For Attorneys</Link></li>
              <li><Link to="/guides-and-resources" className="hover:text-gold transition-colors">Guides &amp; Resources</Link></li>
            </ul>
          </div>

          {/* About — 2/12 */}
          <div className="lg:col-span-2">
            <h3 className="text-primary-foreground font-serif text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2.5 text-primary-foreground text-[15px] leading-snug">
              <li><Link to="/about" className="hover:text-gold transition-colors">About</Link></li>
              <li><Link to="/how-we-work" className="hover:text-gold transition-colors">How We Work</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
              <li><Link to="/counties" className="hover:text-gold transition-colors">Service Areas</Link></li>
              <li><Link to="/faq" className="hover:text-gold transition-colors">FAQs</Link></li>
            </ul>
          </div>
        </div>

        {/* Affiliations — quieter row */}
        <div className="border-t border-primary-foreground/30 pt-10 mb-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-[820px] mx-auto items-center">
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
