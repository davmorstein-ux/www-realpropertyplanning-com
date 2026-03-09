import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import expRealtyLogo from "@/assets/exp-realty-logo.png";

const Footer = () => {
  return (
    <footer className="bg-navy-dark py-16">
      <div className="container px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="block mb-4">
              <span className="font-serif text-xl text-primary-foreground font-semibold">
                David Stein <span className="text-gold">Estate Property Advisory</span>
              </span>
            </Link>
            <p className="text-primary-foreground/60 text-base leading-relaxed mb-4">
              Discreet, experienced real estate guidance for estate, probate, trust, and senior property transitions.
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
              <li><Link to="/for-attorneys" className="hover:text-gold transition-colors">Attorney & Fiduciary Support</Link></li>
              <li><Link to="/faq" className="hover:text-gold transition-colors">Property Valuation</Link></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h4 className="text-primary-foreground font-serif text-lg font-medium mb-4">Resources</h4>
            <ul className="space-y-2.5 text-primary-foreground/60 text-base">
              <li><Link to="/about" className="hover:text-gold transition-colors">About David Stein</Link></li>
              <li><Link to="/faq" className="hover:text-gold transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Service Areas */}
          <div>
            <h4 className="text-primary-foreground font-serif text-lg font-medium mb-4">Service Areas</h4>
            <ul className="space-y-2.5 text-primary-foreground/60 text-base">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Greater Seattle Area</span>
              </li>
              <li>King County</li>
              <li>Snohomish County</li>
              <li>Pierce County</li>
              <li>Kitsap County</li>
            </ul>
          </div>
        </div>
        
        {/* Disclaimer */}
        <div className="border-t border-primary-foreground/10 pt-8 mb-6">
          <p className="text-primary-foreground/40 text-sm leading-relaxed max-w-4xl">
            David Stein provides real estate brokerage and valuation-related guidance based on his experience as a professional real estate broker and state certified appraiser. Legal, tax, and probate-specific advice should be obtained from qualified legal and tax professionals.
          </p>
          <p className="text-primary-foreground/40 text-sm leading-relaxed max-w-4xl mt-3">
            David Stein is a licensed real estate broker in the State of Washington and a Washington state certified real estate appraiser. He is not an attorney, CPA, or tax advisor and does not provide legal, tax, or accounting advice. Information provided is for general informational and real-estate-related purposes only.
          </p>
        </div>
        
        {/* Brokerage Compliance */}
        <div className="border-t border-primary-foreground/10 pt-10 pb-2 flex flex-col items-center">
          <img 
            src={expRealtyLogo} 
            alt="eXp Realty" 
            className="w-[95px] md:w-[120px] h-auto mb-4"
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
          <p className="text-primary-foreground/40 text-xs text-center">
            © {new Date().getFullYear()} David Stein Estate Property Advisory. Professional Real Estate Broker & State Certified Appraiser.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
