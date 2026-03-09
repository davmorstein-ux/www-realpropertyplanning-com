import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

const primaryLinks = [
  { href: "/", label: "Home" },
  { href: "/probate-estate-sales", label: "Probate & Estate Sales" },
  { href: "/senior-transitions", label: "Senior Transitions" },
  { href: "/for-attorneys", label: "For Attorneys & Fiduciaries" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const secondaryLinks = [
  { href: "/attorney-referral", label: "Referral Resource" },
  { href: "/how-we-work", label: "How We Work" },
  { href: "/faq", label: "Q & A" },
  { href: "/terminology", label: "Terminology" },
];

const allLinks = [...primaryLinks, ...secondaryLinks];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const linkClass = (href: string) =>
    `text-sm transition-colors hover:text-gold ${
      location.pathname === href
        ? "text-gold font-bold"
        : isHomePage
        ? "text-foreground/70"
        : "text-primary-foreground/80"
    }`;

  return (
    <header className={`${isHomePage ? "absolute" : "relative bg-primary"} top-0 left-0 right-0 z-50`}>
      <div className="container px-6 lg:px-8">
        {/* Primary row */}
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Real Property Planning" className="h-12 w-auto" />
          </Link>

          {/* Desktop Primary Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {primaryLinks.map((link) => (
              <Link key={link.href} to={link.href} className={linkClass(link.href)}>
                {link.label}
              </Link>
            ))}
            <Link to="/contact">
              <Button
                size="sm"
                className="bg-gold hover:bg-gold-light text-foreground font-medium ml-2"
              >
                <Phone className="w-4 h-4 mr-2" />
                Consultation
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 ${isHomePage ? "text-foreground" : "text-primary-foreground"}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop Secondary Row */}
        <div className="hidden lg:flex items-center justify-end gap-6 pb-3 -mt-1">
          {secondaryLinks.map((link) => (
            <Link key={link.href} to={link.href} className={linkClass(link.href)}>
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-6 border-t border-primary-foreground/10 pt-4">
            <nav className="flex flex-col gap-3">
              {allLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-primary-foreground/80 hover:text-gold transition-colors py-2 text-sm ${
                    location.pathname === link.href ? "text-gold font-bold" : ""
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button className="bg-gold hover:bg-gold-light text-navy font-medium w-full mt-2">
                  <Phone className="w-4 h-4 mr-2" />
                  Schedule Consultation
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
