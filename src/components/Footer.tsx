import { Link } from "react-router-dom";

import mappin3d from "@/assets/real-estate-service-areas-mappin-washington.webp";
import iconEmail3d from "@/assets/icons/real-estate-email-contact-icon-washington.webp";
import expRealtyLogo from "@/assets/exp-realty-real-estate-logo-washington.webp";
import alcaLogo from "@/assets/senior-advocates-alca-partner-washington.webp";
import naosaBadge from "@/assets/senior-advocates-naosa-badge-washington.webp";
import naepcLogo from "@/assets/estate-planners-naepc-badge-washington.webp";
import kccLogo from "@/assets/king-county-collaborative-law-logo.webp";
import iconPhone3d from "@/assets/icons/real-estate-phone-contact-icon-washington.webp";

const Footer = () => {
  return (
    <footer data-nosnippet="true" className="bg-navy-dark py-16">
      <div className="container px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand & NAP */}
          <div className="lg:col-span-1">
            <Link to="/" className="block mb-4">
              <span className="font-serif text-xl text-primary-foreground font-semibold">
                Real Property Planning
              </span>
            </Link>
            <p className="text-primary-foreground/80 text-sm font-medium leading-snug mb-1">
              Real Property Planning
            </p>
            <p className="text-primary-foreground/70 text-sm leading-snug mb-0.5">
              Washington State Licensed Real Estate Broker — License held under eXp Realty
            </p>
            <p className="text-primary-foreground/70 text-sm leading-snug mb-0.5">
              Washington State Certified Residential Appraiser — Stein Appraisal
            </p>
            <p className="text-primary-foreground/70 text-sm leading-snug mb-2">
              Specializing in probate, estate, inherited property &amp; senior transition real estate
            </p>
            <div className="flex flex-col gap-2 text-base">
              <a href="tel:2069003015" className="text-primary-foreground/70 hover:text-gold transition-colors flex items-center gap-2">
                <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 object-contain shrink-0"  loading="lazy"/>
                (206) 900-3015
              </a>
              <a href="mailto:info@realpropertyplanning.com" className="text-primary-foreground/70 hover:text-gold transition-colors flex items-center gap-2">
                <img src={iconEmail3d} alt="" aria-hidden="true" className="w-5 h-5 object-contain shrink-0"  loading="lazy"/>
                info@realpropertyplanning.com
              </a>
              <div className="text-primary-foreground/70 flex items-start gap-2 mt-1">
                <img src={mappin3d} alt="" aria-hidden="true" className="w-5 h-5 object-contain mt-0.5 shrink-0"  loading="lazy"/>
                <span>Mailing: PO Box 1462, Woodinville, WA 98072</span>
              </div>
              <div className="text-primary-foreground/70 flex items-start gap-2">
                <img src={mappin3d} alt="" aria-hidden="true" className="w-5 h-5 object-contain mt-0.5 shrink-0"  loading="lazy"/>
                <span>Office: 1455 NW Leary Way, Seattle, WA 98107</span>
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-primary-foreground font-serif text-lg font-semibold mb-5">Services</h3>
            <ul className="space-y-3 text-primary-foreground/70 text-base">
              <li><Link to="/probate-estate-sales" className="hover:text-gold transition-colors">Probate &amp; Estate Sales</Link></li>
              <li><Link to="/executors" className="hover:text-gold transition-colors">Help for Executors</Link></li>
              <li><Link to="/senior-transitions" className="hover:text-gold transition-colors">Senior Transitions</Link></li>
              <li><Link to="/for-attorneys" className="hover:text-gold transition-colors">For Attorneys &amp; Fiduciaries</Link></li>
              <li><Link to="/for-cpas" className="hover:text-gold transition-colors">For CPAs</Link></li>
              <li><Link to="/for-financial-planners" className="hover:text-gold transition-colors">For Financial Planners</Link></li>
              <li><Link to="/why-valuation-matters" className="hover:text-gold transition-colors">Valuation &amp; Pricing</Link></li>
              <li><Link to="/how-the-process-works" className="hover:text-gold transition-colors">How the Process Works</Link></li>
              <li><Link to="/guides-and-resources" className="hover:text-gold transition-colors">Guides &amp; Resources</Link></li>
              <li><Link to="/faq" className="hover:text-gold transition-colors">FAQs</Link></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-primary-foreground font-serif text-lg font-semibold mb-5">Resources</h3>
            <ul className="space-y-3 text-primary-foreground/70 text-base">
              <li><Link to="/about" className="hover:text-gold transition-colors">About Real Property Planning</Link></li>
              <li><Link to="/how-we-work" className="hover:text-gold transition-colors">How We Work</Link></li>
              <li><Link to="/attorney-referral" className="hover:text-gold transition-colors">Referral Resource</Link></li>
              <li><Link to="/terminology" className="hover:text-gold transition-colors">Terminology</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
              <li><Link to="/resources" className="hover:text-gold transition-colors">Resources</Link></li>
              <li><Link to="/professionals" className="hover:text-gold transition-colors">Professional Resources</Link></li>
            </ul>
          </div>
          
          {/* Service Areas */}
          <div>
            <h3 className="text-primary-foreground font-serif text-lg font-semibold mb-5">Service Areas</h3>
            <ul className="space-y-3 text-primary-foreground/70 text-base">
              <li className="flex items-start gap-2">
                <img src={mappin3d} alt="" aria-hidden="true" className="w-5 h-5 object-contain mt-0.5 shrink-0"  loading="lazy"/>
                <span>Serving clients throughout Washington State, with a strong focus in Western Washington and the Puget Sound region</span>
              </li>
              <li><Link to="/king-county" className="hover:text-gold transition-colors">Probate &amp; estate real estate in King County</Link></li>
              <li><Link to="/snohomish-county" className="hover:text-gold transition-colors">Probate &amp; estate real estate in Snohomish County</Link></li>
              <li><Link to="/pierce-county" className="hover:text-gold transition-colors">Probate &amp; estate real estate in Pierce County</Link></li>
              <li><Link to="/kitsap-county" className="hover:text-gold transition-colors">Probate &amp; estate real estate in Kitsap County</Link></li>
              <li><Link to="/skagit-county" className="hover:text-gold transition-colors">Estate property guidance in Skagit County</Link></li>
              <li><Link to="/thurston-county" className="hover:text-gold transition-colors">Probate &amp; estate real estate in Thurston County</Link></li>
              <li><Link to="/whatcom-county" className="hover:text-gold transition-colors">Probate &amp; estate real estate in Whatcom County</Link></li>
              <li><Link to="/clark-county" className="hover:text-gold transition-colors">Probate &amp; estate real estate in Clark County</Link></li>
              <li><Link to="/spokane-county" className="hover:text-gold transition-colors">Probate &amp; estate real estate in Spokane County</Link></li>
              <li><Link to="/benton-county" className="hover:text-gold transition-colors">Probate &amp; estate real estate in Benton County</Link></li>
              <li><Link to="/counties" className="hover:text-gold transition-colors">All Washington counties we serve</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Disclaimer */}
        <div className="footer-divider mb-0" />
        <div className="pt-8 mb-6" data-nosnippet="true">
           <p className="text-primary-foreground/70 text-base leading-relaxed max-w-4xl">
            Real Property Planning provides real estate brokerage and valuation-related guidance grounded in deep regional experience as a licensed professional real estate brokerage and Washington State certified residential appraisal practice. Legal, tax, and probate-specific advice should be obtained from qualified legal and tax professionals.
          </p>
          <p className="text-primary-foreground/70 text-base leading-relaxed max-w-4xl mt-3">
            Real Property Planning is a licensed real estate brokerage in the State of Washington and a Washington State certified residential appraisal practice. Real Property Planning is not a law firm, accounting firm, or tax advisor and does not provide legal, tax, or accounting advice.
          </p>
        </div>
        
        {/* Professional Affiliations */}
        <div className="footer-divider mb-0" />
        <div className="pt-8 pb-6 flex flex-col items-center">
          <h3 className="text-primary-foreground font-serif text-[28px] font-bold mb-5">Professional Memberships &amp; Affiliations</h3>
          <div className="flex justify-center gap-8">
            {/* Left column: ALCA + Senior Advocates */}
            <div className="flex flex-col items-center gap-6 w-[320px]">
              <a href="https://www.aginglifecare.org" target="_blank" rel="noopener noreferrer">
                <img
                  src={alcaLogo}
                  alt="Aging Life Care Association Corporate Partner"
                  className="w-full object-contain max-h-[140px]"
                  loading="lazy"
                />
              </a>
              <a href="https://www.naosa.org" target="_blank" rel="noopener noreferrer">
                <img
                  src={naosaBadge}
                  alt="National Association of Senior Advocates - Best Real Estate Agent 2026"
                  className="w-full object-contain max-h-[200px]"
                  loading="lazy"
                />
              </a>
            </div>
            {/* Right column: NAEPC + King County Collaborative Law */}
            <div className="flex flex-col items-center gap-6 w-[260px]">
              <a href="https://www.naepc.org" target="_blank" rel="noopener noreferrer">
                <img
                  src={naepcLogo}
                  alt="National Association of Estate Planners & Councils"
                  className="w-full object-contain max-h-[140px]"
                  loading="lazy"
                />
              </a>
              <a href="https://www.kingcountycollaborativelaw.org" target="_blank" rel="noopener noreferrer">
                <img
                  src={kccLogo}
                  alt="Friends of King County Collaborative Law"
                  className="w-full object-contain max-h-[140px]"
                  loading="lazy"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Accessibility Statement */}
        <div className="footer-divider mb-0" />
        <div className="pt-4 pb-2">
          <p className="text-primary-foreground/70 text-base text-center leading-relaxed max-w-2xl mx-auto">
            realpropertyplanning.com is committed to digital accessibility for people with disabilities. This website meets WCAG 2.1 AA accessibility standards. If you experience any accessibility barriers, please contact us at{" "}
            <a href="mailto:info@realpropertyplanning.com" className="underline underline-offset-2 hover:text-gold transition-colors font-medium">
              info@realpropertyplanning.com
            </a>{" "}
            and we will assist you.
          </p>
        </div>

        {/* Brokerage Compliance */}
        <div className="footer-divider mb-0" />
        <div className="pt-10 pb-2 flex flex-col items-center">
          <img 
            src={expRealtyLogo} 
            alt="eXp Realty — license held under eXp Realty (real estate license disclosure)" 
            className="w-[95px] md:w-[120px] h-auto mb-4"
            loading="lazy"
          />
          <p className="text-primary-foreground/70 text-base text-center leading-relaxed">
            Real Property Planning — independent hub for probate, estate, and senior transition real estate in Washington State. David Stein, President. License held under eXp Realty. Appraisal services provided through Stein Appraisal.
          </p>
          <p className="text-primary-foreground/70 text-base text-center mt-1">
            Mailing Address: PO Box 1462, Woodinville, WA 98072
          </p>
          <p className="text-primary-foreground/70 text-base text-center mt-1">
            Office Address: 1455 NW Leary Way, Seattle, WA 98107
          </p>
        </div>

        {/* Geo / Service Area SEO */}
        <div className="footer-divider mb-0" />
        <div className="mt-0 pt-6 pb-4">
          <p className="text-primary-foreground/70 text-base text-center leading-relaxed max-w-3xl mx-auto mb-2">
            Serving buyers, sellers, families, attorneys, executors, trustees, and fiduciaries throughout Washington State, with a strong focus in Western Washington and the Puget Sound region. Through David Stein's eXp Realty network, Real Property Planning can connect clients with a trusted broker anywhere in the country.
          </p>
          <p className="text-primary-foreground/70 text-base text-center leading-relaxed max-w-2xl mx-auto">
            Specializing in probate real estate, inherited property, estate sales, senior transitions, and structured, evidence-based strategy for attorneys, executors, trustees, heirs, beneficiaries, seniors, and families. Proudly serving families, executors, attorneys, CPAs, financial planners, and senior care professionals throughout the Puget Sound region — including Seattle, Bellevue, Everett, Tacoma, Bremerton, Woodinville, and surrounding communities.
          </p>
        </div>

        {/* Copyright */}
        <div className="footer-divider mb-0" />
        <div className="pt-4">
          <p className="text-primary-foreground/70 text-base text-center">
            © {new Date().getFullYear()} Real Property Planning, Real Estate Broker – Senior Relocation & Estate Sales. Real Property Planning.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
