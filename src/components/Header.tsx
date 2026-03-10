import { Button } from "@/components/ui/button";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const primaryLinks = [
  { href: "/", label: "Home" },
  { href: "/probate-estate-sales", label: "Probate & Estate Sales" },
  { href: "/senior-transitions", label: "Senior Transitions" },
  { href: "/for-attorneys", label: "For Attorneys & Fiduciaries" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const secondaryLinks = [
  { href: "/executors", label: "Executors" },
  { href: "/attorney-referral", label: "Referral Resource" },
  { href: "/how-we-work", label: "How We Work" },
  { href: "/faq", label: "Q & A" },
  { href: "/terminology", label: "Terminology" },
];

const countiesDropdownLinks = [
  { href: "/counties", label: "Counties Overview" },
  { href: "/counties/king", label: "King County" },
  { href: "/counties/snohomish", label: "Snohomish County" },
  { href: "/counties/pierce", label: "Pierce County" },
  { href: "/counties/kitsap", label: "Kitsap County" },
  { href: "/cities-we-serve", label: "Cities We Serve" },
];

const allLinks = [...primaryLinks, ...secondaryLinks];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [countiesOpen, setCountiesOpen] = useState(false);
  const [mobileCountiesOpen, setMobileCountiesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setCountiesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isCountiesActive = location.pathname.startsWith("/counties") || location.pathname === "/cities-we-serve";

  const linkClass = (href: string) =>
    `text-sm transition-colors hover:text-gold ${
      location.pathname === href
        ? "text-gold font-bold"
        : isHomePage
        ? "text-foreground/70"
        : "text-primary-foreground/80"
    }`;

  const countiesButtonClass = `text-sm transition-colors hover:text-gold inline-flex items-center gap-1 ${
    isCountiesActive
      ? "text-gold font-bold"
      : isHomePage
      ? "text-foreground/70"
      : "text-primary-foreground/80"
  }`;

  return (
    <header className={`${isHomePage ? "absolute" : "relative bg-primary"} top-0 left-0 right-0 z-50`}>
      <div className="container px-6 lg:px-8">
        {/* Primary row */}
        <div className="flex items-center justify-center py-4 relative">
          <nav className="hidden lg:flex items-center gap-6">
            {primaryLinks.map((link) => (
              <Link key={link.href} to={link.href} className={linkClass(link.href)}>
                {link.label}
              </Link>
            ))}
            <Link to="/contact">
              <Button
                size="sm"
                className="bg-gold hover:bg-gold-light text-foreground font-medium"
              >
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

        {/* Desktop Secondary Row — offset to align with primary text links */}
        <div className="hidden lg:flex items-center justify-center pb-3 -mt-1">
          <div className="flex items-center gap-6 pr-[140px]">
          {secondaryLinks.map((link) => (
            <Link key={link.href} to={link.href} className={linkClass(link.href)}>
              {link.label}
            </Link>
          ))}

          {/* Counties Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              className={countiesButtonClass}
              onClick={() => setCountiesOpen(!countiesOpen)}
              onMouseEnter={() => setCountiesOpen(true)}
            >
              Counties
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${countiesOpen ? "rotate-180" : ""}`} />
            </button>

            {countiesOpen && (
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-card border border-border rounded-2xl shadow-lg py-2 z-50"
                onMouseLeave={() => setCountiesOpen(false)}
              >
                {countiesDropdownLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`block px-5 py-2.5 text-sm transition-colors hover:text-gold hover:bg-secondary ${
                      location.pathname === link.href ? "text-gold font-semibold" : "text-foreground/80"
                    }`}
                    onClick={() => setCountiesOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          </div>
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

              {/* Mobile Counties Submenu */}
              <button
                className={`text-left text-sm py-2 transition-colors hover:text-gold flex items-center justify-between ${
                  isCountiesActive ? "text-gold font-bold" : "text-primary-foreground/80"
                }`}
                onClick={() => setMobileCountiesOpen(!mobileCountiesOpen)}
              >
                Counties
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileCountiesOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileCountiesOpen && (
                <div className="flex flex-col gap-2 pl-4 border-l border-primary-foreground/10">
                  {countiesDropdownLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className={`text-sm py-1.5 transition-colors hover:text-gold ${
                        location.pathname === link.href ? "text-gold font-bold" : "text-primary-foreground/60"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}

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
