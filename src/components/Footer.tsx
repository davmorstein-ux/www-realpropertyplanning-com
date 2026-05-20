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
    <footer data-nosnippet="true" className="bg-navy-dark py-14 md:py-16">
      <div className="container px-6 lg:px-10">
        {/* Compact link grid — wider Guided Journeys column so links never clip */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 mb-12 text-left">
          {/* Brand & NAP — 3/12 */}
          <div className="lg:col-span-3">
            <Link to="/" className="block mb-2.5">
              <span className="font-serif text-primary-foreground" style={{ fontSize: '22px', fontWeight: '700', letterSpacing: '0.5px' }}>
                Real Property Planning
              </span>
            </Link>
            <p className="text-primary-foreground text-[16px] leading-[1.7] mb-5 max-w-[320px]">
              Probate, estate &amp; senior transition real estate — Washington State.
            </p>
            <ul className="flex flex-col gap-2.5 text-[16px] text-left">
              <li>
                <a href="tel:2069003015" className="text-primary-foreground hover:text-gold transition-colors flex items-center gap-3.5 leading-tight">
                  <img src={iconPhone3d} alt="" aria-hidden="true" className="w-[28px] h-[28px] object-contain shrink-0" loading="lazy" />
                  <span>(206) 900-3015</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@realpropertyplanning.com" className="text-primary-foreground hover:text-gold transition-colors flex items-center gap-3.5 break-all leading-tight">
                  <img src={iconEmail3d} alt="" aria-hidden="true" className="w-[28px] h-[28px] object-contain shrink-0" loading="lazy" />
                  <span>info@realpropertyplanning.com</span>
                </a>
              </li>
              <li className="text-primary-foreground flex items-start gap-3.5 leading-snug">
                <img src={iconPin3d} alt="" aria-hidden="true" className="w-[28px] h-[28px] object-contain mt-0.5 shrink-0" loading="lazy" />
                <span>PO Box 1462, Woodinville, WA 98072</span>
              </li>
            </ul>
          </div>

          {/* Guided Journeys — 4/12 */}
          <div className="lg:col-span-4 min-w-0">
            <h3 className="text-primary-foreground font-serif text-xl font-semibold mb-3">Guided Journeys</h3>
            <ul className="space-y-1.5 text-primary-foreground text-[16px] leading-snug">
              <li><Link to="/helping-aging-parents" className="hover:text-gold transition-colors break-words">Helping an Aging Parent</Link></li>
              <li><Link to="/estate-probate-inherited-property" className="hover:text-gold transition-colors break-words">Estate &amp; Probate</Link></li>
              <li><Link to="/what-to-do-with-the-house" className="hover:text-gold transition-colors break-words">What To Do With the House</Link></li>
              <li><Link to="/understanding-housing-care-options" className="hover:text-gold transition-colors break-words">Housing &amp; Care Options</Link></li>
              <li><Link to="/executor-responsibilities-first-steps" className="hover:text-gold transition-colors break-words">Executor First Steps</Link></li>
              <li><Link to="/estate-planning-powers-of-attorney" className="hover:text-gold transition-colors break-words">Estate Planning &amp; POA</Link></li>
            </ul>
          </div>

          {/* Services — 3/12 */}
          <div className="lg:col-span-3 min-w-0">
            <h3 className="text-primary-foreground font-serif text-xl font-semibold mb-3">Services</h3>
            <ul className="space-y-1.5 text-primary-foreground text-[16px] leading-snug">
              <li><Link to="/probate-estate-sales" className="hover:text-gold transition-colors break-words">Probate &amp; Estate Sales</Link></li>
              <li><Link to="/senior-transitions" className="hover:text-gold transition-colors break-words">Senior Transitions</Link></li>
              <li><Link to="/why-valuation-matters" className="hover:text-gold transition-colors break-words">Valuation &amp; Pricing</Link></li>
              <li><Link to="/for-attorneys" className="hover:text-gold transition-colors break-words">For Attorneys</Link></li>
              <li><Link to="/guides-and-resources" className="hover:text-gold transition-colors break-words">Guides &amp; Resources</Link></li>
            </ul>
          </div>

          {/* About — 2/12 */}
          <div className="lg:col-span-2 min-w-0">
            <h3 className="text-primary-foreground font-serif text-xl font-semibold mb-3">About</h3>
            <ul className="space-y-1.5 text-primary-foreground text-[16px] leading-snug">
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
            Real Property Planning — independent hub for probate, estate, and senior transition real estate in Washington State. Real Property Planning is not a law firm or tax advisor. For legal, tax, or probate-specific advice, consult a qualified professional.
          </p>
          <p className="text-primary-foreground text-base leading-relaxed max-w-3xl mx-auto mb-3">
            Real Property Planning is an independent educational hub. It does not provide legal, financial, tax, real estate brokerage, medical, or other professional services through this website. Professionals and companies referenced on this site are independent and are not employees, partners, members, or affiliates of Real Property Planning. Read the full{" "}
            <Link to="/disclaimer" className="underline underline-offset-2 hover:text-gold transition-colors">
              disclaimer
            </Link>
            .
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
