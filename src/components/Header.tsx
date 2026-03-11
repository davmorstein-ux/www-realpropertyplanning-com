import { Button } from "@/components/ui/button";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const primaryLinks = [
  { href: "/", label: "Home" },
  { href: "/probate-estate-sales", label: "Services", children: [
    { href: "/probate-estate-sales", label: "Probate & Estate Sales" },
    { href: "/senior-transitions", label: "Senior Transitions" },
    { href: "/for-attorneys", label: "For Attorneys & Fiduciaries" },
    { href: "/executors", label: "For Executors" },
    { href: "/for-cpas", label: "For CPAs" },
    { href: "/for-financial-planners", label: "For Financial Planners" },
    { href: "/how-the-process-works", label: "How the Process Works" },
    { href: "/why-valuation-matters", label: "Why Valuation Matters" },
  ]},
  { href: "/counties", label: "Counties", children: [
    { href: "/counties", label: "Counties Overview" },
    { href: "/counties/king", label: "King County" },
    { href: "/counties/snohomish", label: "Snohomish County" },
    { href: "/counties/pierce", label: "Pierce County" },
    { href: "/counties/kitsap", label: "Kitsap County" },
    { href: "/cities-we-serve", label: "Cities We Serve" },
  ]},
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "Resources", children: [
    { href: "/about", label: "About David Stein" },
    { href: "/how-we-work", label: "How We Work" },
    { href: "/attorney-referral", label: "Referral Resource" },
    { href: "/terminology", label: "Terminology" },
  ]},
  { href: "/contact", label: "Contact" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
    setMobileExpanded(null);
  }, [location.pathname]);

  const isActive = (href: string, children?: { href: string }[]) => {
    if (location.pathname === href) return true;
    if (children) return children.some(c => location.pathname === c.href);
    return false;
  };

  const linkColor = (active: boolean) =>
    `text-sm font-medium transition-colors hover:text-gold ${
      active ? "text-gold font-bold" : isHomePage ? "text-foreground/70" : "text-primary-foreground/80"
    }`;

  return (
    <header data-nosnippet className={`${isHomePage ? "absolute" : "relative bg-primary"} top-0 left-0 right-0 z-50`}>
      <div className="container px-6 lg:px-8">
        <div className="flex items-center justify-center py-4 relative" ref={dropdownRef}>
          <nav className="hidden lg:flex items-center gap-7">
            {primaryLinks.map((link) => (
              <div key={link.label} className="relative">
                {link.children ? (
                  <>
                    <button
                      className={`${linkColor(isActive(link.href, link.children))} inline-flex items-center gap-1`}
                      onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                      onMouseEnter={() => setOpenDropdown(link.label)}
                    >
                      {link.label}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform ${openDropdown === link.label ? "rotate-180" : ""}`} />
                    </button>
                    {openDropdown === link.label && (
                      <div
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-card border border-border rounded-2xl shadow-lg py-2 z-50"
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            className={`block px-5 py-2.5 text-sm transition-colors hover:text-gold hover:bg-secondary ${
                              location.pathname === child.href ? "text-gold font-semibold" : "text-foreground/80"
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link to={link.href} className={linkColor(isActive(link.href))}>
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <Link to="/contact">
              <Button size="sm" className="bg-gold hover:bg-gold-light text-foreground font-medium">
                <Phone className="w-4 h-4 mr-2" />
                Consultation
              </Button>
            </Link>
          </nav>

          <button
            className={`lg:hidden p-2 absolute right-0 ${isHomePage ? "text-foreground" : "text-primary-foreground"}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-6 border-t border-primary-foreground/10 pt-4">
            <nav className="flex flex-col gap-1">
              {primaryLinks.map((link) => (
                <div key={link.label}>
                  {link.children ? (
                    <>
                      <button
                        className={`w-full text-left text-sm py-2.5 transition-colors hover:text-gold flex items-center justify-between ${
                          isActive(link.href, link.children) ? "text-gold font-bold" : "text-primary-foreground/80"
                        }`}
                        onClick={() => setMobileExpanded(mobileExpanded === link.label ? null : link.label)}
                      >
                        {link.label}
                        <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === link.label ? "rotate-180" : ""}`} />
                      </button>
                      {mobileExpanded === link.label && (
                        <div className="flex flex-col gap-1 pl-4 border-l border-primary-foreground/10 mb-2">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              to={child.href}
                              className={`text-sm py-2 transition-colors hover:text-gold ${
                                location.pathname === child.href ? "text-gold font-bold" : "text-primary-foreground/60"
                              }`}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={link.href}
                      className={`text-sm py-2.5 block transition-colors hover:text-gold ${
                        location.pathname === link.href ? "text-gold font-bold" : "text-primary-foreground/80"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <Link to="/contact">
                <Button className="bg-gold hover:bg-gold-light text-navy font-medium w-full mt-3">
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
