import { Link } from "react-router-dom";

import mappin3d from "@/assets/mappin-3d.png";
import iconEmail3d from "@/assets/icons/icon-email-3d.png";
import expRealtyLogo from "@/assets/exp-realty-logo.png";
import alcaLogo from "@/assets/alca-corporate-partner.png";
import naosaBadge from "@/assets/naosa-badge.jpg";
import naepcLogo from "@/assets/naepc-logo.png";
import iconPhone3d from "@/assets/icons/icon-phone-3d.png";

const Footer = () => {
  return (
    <footer data-nosnippet className="bg-navy-dark py-16">
      <div className="container px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand & NAP */}
          <div className="lg:col-span-1">
            <Link to="/" className="block mb-4">
              <span className="font-serif text-xl text-primary-foreground font-semibold">
                David Stein <span className="text-gold font-bold">Senior Relocation & Estate Sales</span>
              </span>
            </Link>
            <p className="text-primary-foreground/70 text-[15px] leading-relaxed mb-3">
              Licensed Real Estate Broker &amp; Washington State Certified Residential Appraiser
            </p>
            <p className="text-primary-foreground/70 text-[15px] leading-relaxed mb-3">eXp Realty</p>
            <div className="flex flex-col gap-2 text-[15px]">
              <a href="tel:2069003015" className="text-primary-foreground/70 hover:text-gold flex items-center gap-2">
                <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 object-contain shrink-0" />
                (206) 900-3015
              </a>
              <a href="mailto:david@realpropertyplanning.com" className="text-primary-foreground/70 hover:text-gold flex items-center gap-2">
                <img src={iconEmail3d} alt="" aria-hidden="true" className="w-5 h-5 object-contain shrink-0" />
                david@realpropertyplanning.com
              </a>
              <div className="text-primary-foreground/50 flex items-start gap-2 mt-1">
                <img src={mappin3d} alt="" aria-hidden="true" className="w-5 h-5 object-contain mt-0.5 shrink-0" />
                <span>Mailing: PO Box 1462, Woodinville, WA 98072</span>
              </div>
              <div className="text-primary-foreground/50 flex items-start gap-2">
                <img src={mappin3d} alt="" aria-hidden="true" className="w-5 h-5 object-contain mt-0.5 shrink-0" />
                <span>Office: 1455 NW Leary Way, Seattle, WA 98107</span>
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-primary-foreground font-serif text-lg font-medium mb-4">Services</h4>
            <ul className="space-y-3 text-primary-foreground/70 text-base">
              <li><Link to="/probate-estate-sales" className="hover:text-gold transition-colors">Probate &amp; Estate Sales</Link></li>
              <li><Link to="/executors" className="hover:text-gold transition-colors">Help for Executors</Link></li>
              <li><Link to="/senior-transitions" className="hover:text-gold transition-colors">Senior Transitions</Link></li>
              <li><Link to="/for-attorneys" className="hover:text-gold transition-colors">For Attorneys &amp; Fiduciaries</Link></li>
              <li><Link to="/for-cpas" className="hover:text-gold transition-colors">For CPAs</Link></li>
              <li><Link to="/for-financial-planners" className="hover:text-gold transition-colors">For Financial Planners</Link></li>
              <li><Link to="/why-valuation-matters" className="hover:text-gold transition-colors">Valuation &amp; Pricing</Link></li>
              <li><Link to="/how-the-process-works" className="hover:text-gold transition-colors">How the Process Works</Link></li>
              <li><Link to="/faq" className="hover:text-gold transition-colors">FAQs</Link></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h4 className="text-primary-foreground font-serif text-lg font-medium mb-4">Resources</h4>
            <ul className="space-y-3 text-primary-foreground/70 text-base">
              <li><Link to="/about" className="hover:text-gold transition-colors">About David Stein</Link></li>
              <li><Link to="/how-we-work" className="hover:text-gold transition-colors">How We Work</Link></li>
              <li><Link to="/attorney-referral" className="hover:text-gold transition-colors">Referral Resource</Link></li>
              <li><Link to="/terminology" className="hover:text-gold transition-colors">Terminology</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
              <li><Link to="/resources" className="hover:text-gold transition-colors">Resources</Link></li>
            </ul>
          </div>
          
          {/* Service Areas */}
          <div>
            <h4 className="text-primary-foreground font-serif text-lg font-medium mb-4">Service Areas</h4>
            <ul className="space-y-3 text-primary-foreground/70 text-base">
              <li className="flex items-start gap-2">
                <img src={mappin3d} alt="" aria-hidden="true" className="w-5 h-5 object-contain mt-0.5 shrink-0" />
                <span>Western Washington &amp; the Puget Sound Region</span>
              </li>
              <li><Link to="/counties/king" className="hover:text-gold transition-colors">Probate and estate real estate in King County</Link></li>
              <li><Link to="/counties/snohomish" className="hover:text-gold transition-colors">Probate and estate real estate in Snohomish County</Link></li>
              <li><Link to="/counties/pierce" className="hover:text-gold transition-colors">Probate and estate real estate in Pierce County</Link></li>
              <li><Link to="/counties/kitsap" className="hover:text-gold transition-colors">Probate and estate real estate in Kitsap County</Link></li>
              <li><Link to="/counties/skagit" className="hover:text-gold transition-colors">Estate property guidance in Skagit County</Link></li>
              <li><Link to="/cities-we-serve" className="hover:text-gold transition-colors">All Cities We Serve</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Disclaimer */}
        <div className="border-t border-primary-foreground/10 pt-8 mb-6">
          <p className="text-primary-foreground/50 text-[13px] leading-relaxed max-w-4xl">
            David Stein provides real estate brokerage and valuation-related guidance based on his experience as a professional real estate broker and state certified appraiser. Legal, tax, and probate-specific advice should be obtained from qualified legal and tax professionals.
          </p>
          <p className="text-primary-foreground/50 text-[13px] leading-relaxed max-w-4xl mt-3">
            David Stein is a licensed real estate broker in the State of Washington and a Washington state certified real estate appraiser. He is not an attorney, CPA, or tax advisor and does not provide legal, tax, or accounting advice.
          </p>
        </div>
        
        {/* Professional Affiliations */}
        <div className="border-t border-primary-foreground/10 pt-8 pb-6 flex flex-col items-center">
          <h4 className="text-primary-foreground font-serif text-lg font-medium mb-4">Professional Memberships &amp; Affiliations</h4>
          <div className="flex items-center justify-center gap-6">
            <a href="https://www.aginglifecare.org" target="_blank" rel="noopener noreferrer">
              <img
                src={alcaLogo}
                alt="Aging Life Care Association Corporate Partner"
                className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity"
                loading="lazy"
              />
            </a>
            <a href="https://www.naosa.org" target="_blank" rel="noopener noreferrer">
              <img
                src={naosaBadge}
                alt="National Association of Senior Advocates - Best Real Estate Agent 2026"
                className="h-28 w-auto opacity-80 hover:opacity-100 transition-opacity"
                loading="lazy"
              />
            </a>
            <a href="https://www.naepc.org" target="_blank" rel="noopener noreferrer">
              <img
                src={naepcLogo}
                alt="National Association of Estate Planners & Councils"
                className="max-h-[82px] w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                loading="lazy"
              />
            </a>
          </div>
        </div>

        {/* Brokerage Compliance */}
        <div className="border-t border-primary-foreground/10 pt-10 pb-2 flex flex-col items-center">
          <img 
            src={expRealtyLogo} 
            alt="eXp Realty brokerage logo — David Stein is a licensed broker with eXp Realty" 
            className="w-[95px] md:w-[120px] h-auto mb-4"
            loading="lazy"
          />
          <p className="text-primary-foreground/50 text-[13px] text-center leading-relaxed">
            David Stein | Real Estate Broker — Senior Relocation & Estate Sales | eXp Realty
          </p>
          <p className="text-primary-foreground/40 text-[13px] text-center mt-1">
            Mailing Address: PO Box 1462, Woodinville, WA 98072
          </p>
          <p className="text-primary-foreground/40 text-[13px] text-center mt-1">
            Office Address: 1455 NW Leary Way, Seattle, WA 98107
          </p>
        </div>

        {/* Geo / Service Area SEO */}
        <div className="border-t border-primary-foreground/10 mt-8 pt-6 pb-4">
          <p className="text-primary-foreground/50 text-[13px] text-center leading-relaxed max-w-3xl mx-auto">
            Serving clients throughout Western Washington and the greater Puget Sound region, including King, Snohomish, Pierce, and Kitsap counties: Seattle, Bellevue, Tacoma, Everett, Kirkland, Redmond, Bothell, and nearby communities.
          </p>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/10 pt-4">
          <p className="text-primary-foreground/40 text-[13px] text-center">
            © {new Date().getFullYear()} David Stein, Real Estate Broker – Senior Relocation & Estate Sales. Real Property Planning.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
