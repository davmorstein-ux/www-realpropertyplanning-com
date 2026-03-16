import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import expRealtyLogo from "@/assets/exp-realty-logo.png";
import alcaLogo from "@/assets/alca-corporate-partner.png";

const Footer = () => {
  return (
    <footer data-nosnippet className="bg-navy-dark py-16">
      <div className="container px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="block mb-4">
              <span className="font-serif text-xl text-primary-foreground font-semibold">
                David Stein <span className="text-gold font-bold">Real Property Planning</span>
              </span>
            </Link>
            <p className="text-primary-foreground/60 text-base leading-relaxed mb-4">
              Probate real estate, inherited property, trust-owned real estate, and estate sale guidance in Western Washington.
            </p>
            <div className="flex flex-col gap-2 text-base">
              <a href="tel:2069003015" className="text-primary-foreground/70 hover:text-gold flex items-center gap-2">
                <Phone className="w-4 h-4" />
                (206) 900-3015
              </a>
              <a href="mailto:david@realpropertyplanning.com" className="text-primary-foreground/70 hover:text-gold flex items-center gap-2">
                <Mail className="w-4 h-4" />
                david@realpropertyplanning.com
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-primary-foreground font-serif text-lg font-medium mb-4">Services</h4>
            <ul className="space-y-2.5 text-primary-foreground/60 text-base">
              <li><Link to="/probate-estate-sales" className="hover:text-gold transition-colors">Probate & Estate Sales</Link></li>
              <li><Link to="/senior-transitions" className="hover:text-gold transition-colors">Senior Transitions</Link></li>
              <li><Link to="/for-attorneys" className="hover:text-gold transition-colors">For Attorneys & Fiduciaries</Link></li>
              <li><Link to="/executors" className="hover:text-gold transition-colors">For Executors</Link></li>
              <li><Link to="/for-cpas" className="hover:text-gold transition-colors">For CPAs</Link></li>
              <li><Link to="/for-financial-planners" className="hover:text-gold transition-colors">For Financial Planners</Link></li>
              <li><Link to="/why-valuation-matters" className="hover:text-gold transition-colors">Why Valuation Matters</Link></li>
              <li><Link to="/how-the-process-works" className="hover:text-gold transition-colors">How the Process Works</Link></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h4 className="text-primary-foreground font-serif text-lg font-medium mb-4">Resources</h4>
            <ul className="space-y-2.5 text-primary-foreground/60 text-base">
              <li><Link to="/about" className="hover:text-gold transition-colors">About David Stein</Link></li>
              <li><Link to="/faq" className="hover:text-gold transition-colors">FAQ</Link></li>
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
            <ul className="space-y-2.5 text-primary-foreground/60 text-base">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Western Washington &amp; Puget Sound</span>
              </li>
              <li><Link to="/counties/king" className="hover:text-gold transition-colors">Probate Real Estate in King County</Link></li>
              <li><Link to="/counties/snohomish" className="hover:text-gold transition-colors">Estate Property Guidance in Snohomish County</Link></li>
              <li><Link to="/counties/pierce" className="hover:text-gold transition-colors">Inherited Property Sales in Pierce County</Link></li>
              <li><Link to="/counties/kitsap" className="hover:text-gold transition-colors">Estate Property Sales in Kitsap County</Link></li>
              <li><Link to="/counties/skagit" className="hover:text-gold transition-colors">Probate Property Guidance in Skagit County</Link></li>
              <li><Link to="/cities-we-serve" className="hover:text-gold transition-colors">All Cities We Serve</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Disclaimer */}
        <div className="border-t border-primary-foreground/10 pt-8 mb-6">
          <p className="text-primary-foreground/40 text-sm leading-relaxed max-w-4xl">
            David Stein provides real estate brokerage and valuation-related guidance based on his experience as a professional real estate broker and state certified appraiser. Legal, tax, and probate-specific advice should be obtained from qualified legal and tax professionals.
          </p>
          <p className="text-primary-foreground/40 text-sm leading-relaxed max-w-4xl mt-3">
            David Stein is a licensed real estate broker in the State of Washington and a Washington state certified real estate appraiser. He is not an attorney, CPA, or tax advisor and does not provide legal, tax, or accounting advice.
          </p>
        </div>
        
        {/* Brokerage Compliance */}
        <div className="border-t border-primary-foreground/10 pt-10 pb-2 flex flex-col items-center">
          <img 
            src={expRealtyLogo} 
            alt="eXp Realty brokerage logo — David Stein is a licensed broker with eXp Realty" 
            className="w-[95px] md:w-[120px] h-auto mb-4"
            loading="lazy"
          />
          <p className="text-primary-foreground/50 text-sm text-center leading-relaxed">
            David Stein | Licensed Real Estate Broker, Washington State | eXp Realty
          </p>
          <p className="text-primary-foreground/40 text-sm text-center mt-1">
            Mailing Address: PO Box 1462, Woodinville, WA 98072
          </p>
          <p className="text-primary-foreground/40 text-sm text-center mt-1">
            Office Address: 1455 NW Leary Way, Seattle, WA 98107
          </p>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/10 mt-8 pt-4">
          <p className="text-primary-foreground/40 text-sm text-center">
            © {new Date().getFullYear()} Real Property Planning — David Stein. Professional Real Estate Broker & State Certified Appraiser.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
