import { Button } from "@/components/ui/button";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo-rpp.jpg";

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
  { href: "/for-attorneys", label: "For Attorneys" },
  { href: "/executors", label: "For Executors" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  return (
    <header
      data-nosnippet
      className={`sticky top-0 z-50 bg-white border-b transition-all duration-300 ${
        scrolled
          ? "border-border shadow-[0_2px_10px_rgba(0,0,0,0.06)]"
          : "border-[hsl(0_0%_90%)]"
      }`}
      style={{ borderBottomWidth: "1px" }}
    >
      <div
        className={`mx-auto max-w-[1400px] px-6 lg:px-10 flex items-center transition-all duration-300 ${
          scrolled ? "h-[66px]" : "h-[80px]"
        }`}
        ref={dropdownRef}
      >
        {/* Left – Navigation */}
        <nav className="hidden lg:flex items-center gap-6 shrink-0">
          {primaryLinks.map((link) => (
            <div key={link.label} className="relative">
              {link.children ? (
                <>
                  <button
                    className={`text-[13.5px] tracking-[0.04em] font-normal transition-colors hover:text-[hsl(216,65%,34%)] inline-flex items-center gap-1 ${
                      isActive(link.href, link.children)
                        ? "text-[hsl(216,65%,34%)] font-medium"
                        : "text-foreground/70"
                    }`}
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
                          className={`block px-5 py-2.5 text-sm transition-colors hover:text-[hsl(216,65%,34%)] hover:bg-secondary ${
                            location.pathname === child.href ? "text-[hsl(216,65%,34%)] font-semibold" : "text-foreground/80"
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
                  className={`text-[13.5px] tracking-[0.04em] font-normal transition-colors hover:text-[hsl(216,65%,34%)] ${
                    isActive(link.href)
                      ? "text-[hsl(216,65%,34%)] font-medium"
                      : "text-foreground/70"
                  }`}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Center – Logo */}
        <div className="flex-1 flex justify-center lg:justify-center">
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Real Property Planning logo – estate real estate planning and property transition services"
              className={`transition-all duration-300 w-[240px] md:w-[380px] lg:w-[520px] ${
                scrolled ? "lg:w-[440px] md:w-[320px] w-[210px]" : ""
              } h-auto max-h-[60px] object-contain`}
            />
          </Link>
        </div>

        {/* Right – CTA (desktop) / Hamburger (mobile) */}
        <div className="hidden lg:flex items-center shrink-0">
          <Link to="/contact">
            <Button size="sm" className="bg-gold hover:bg-gold-light text-foreground font-medium">
              <Phone className="w-4 h-4 mr-2" />
              Consultation
            </Button>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-6 pb-6 border-t border-border pt-4 bg-white">
          <nav className="flex flex-col gap-1">
            {primaryLinks.map((link) => (
              <div key={link.label}>
                {link.children ? (
                  <>
                    <button
                      className={`w-full text-left text-[15px] py-2.5 transition-colors hover:text-[hsl(216,65%,34%)] flex items-center justify-between ${
                        isActive(link.href, link.children) ? "text-[hsl(216,65%,34%)] font-bold" : "text-foreground/70"
                      }`}
                      onClick={() => setMobileExpanded(mobileExpanded === link.label ? null : link.label)}
                    >
                      {link.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === link.label ? "rotate-180" : ""}`} />
                    </button>
                    {mobileExpanded === link.label && (
                      <div className="flex flex-col gap-1 pl-4 border-l border-border mb-2">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            className={`text-sm py-2 transition-colors hover:text-[hsl(216,65%,34%)] ${
                              location.pathname === child.href ? "text-[hsl(216,65%,34%)] font-bold" : "text-foreground/60"
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
                    className={`text-[15px] py-2.5 block transition-colors hover:text-[hsl(216,65%,34%)] ${
                      location.pathname === link.href ? "text-[hsl(216,65%,34%)] font-bold" : "text-foreground/70"
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <Link to="/contact">
              <Button className="bg-gold hover:bg-gold-light text-foreground font-medium w-full mt-3">
                <Phone className="w-4 h-4 mr-2" />
                Schedule Consultation
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
