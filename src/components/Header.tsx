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
  { href: "/resources", label: "Resources", children: [
    { href: "/resources", label: "Resources" },
    { href: "/contact", label: "Contact" },
  ]},
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
        className={`mx-auto max-w-[1520px] px-4 md:px-6 lg:px-10 flex items-center transition-all duration-300 ${
          scrolled ? "h-[78px] md:h-[88px]" : "h-[86px] md:h-[94px]"
        }`}
        ref={dropdownRef}
      >
        {/* Left – Navigation */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-7 shrink-0">
          {primaryLinks.map((link) => (
            <div key={link.label} className="relative">
              {link.children ? (
                <>
                  <button
                    className={`text-[14px] lg:text-[15px] tracking-[0.02em] font-medium transition-colors hover:text-[hsl(216,65%,34%)] inline-flex items-center gap-1 ${
                      isActive(link.href, link.children)
                        ? "text-[hsl(216,65%,34%)] font-semibold"
                        : "text-foreground"
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
                  className={`text-[14px] lg:text-[15px] tracking-[0.02em] font-medium transition-colors hover:text-[hsl(216,65%,34%)] ${
                    isActive(link.href)
                      ? "text-[hsl(216,65%,34%)] font-semibold"
                      : "text-foreground"
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
              className={`transition-all duration-300 w-[320px] md:w-[340px] lg:w-[620px] xl:w-[700px] ${
                scrolled ? "xl:w-[560px] lg:w-[500px] md:w-[280px] w-[280px]" : ""
              } h-auto max-h-[72px] object-contain`}
            />
          </Link>
        </div>

        {/* Right spacer (desktop) */}
        <div className="hidden md:flex items-center shrink-0" />

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-3 text-foreground rounded-lg border border-border bg-secondary hover:bg-muted transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden px-6 pb-6 border-t border-border pt-5 bg-white">
          <nav className="flex flex-col gap-0.5">
            {primaryLinks.map((link) => (
              <div key={link.label}>
                {link.children ? (
                  <>
                    <button
                      className={`w-full text-left text-[17px] py-3.5 transition-colors hover:text-[hsl(216,65%,34%)] flex items-center justify-between ${
                        isActive(link.href, link.children) ? "text-[hsl(216,65%,34%)] font-bold" : "text-foreground font-medium"
                      }`}
                      onClick={() => setMobileExpanded(mobileExpanded === link.label ? null : link.label)}
                    >
                      {link.label}
                      <ChevronDown className={`w-5 h-5 transition-transform ${mobileExpanded === link.label ? "rotate-180" : ""}`} />
                    </button>
                    {mobileExpanded === link.label && (
                      <div className="flex flex-col gap-0.5 pl-5 border-l-2 border-gold/30 mb-2">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            className={`text-[15px] py-3 transition-colors hover:text-[hsl(216,65%,34%)] ${
                              location.pathname === child.href ? "text-[hsl(216,65%,34%)] font-bold" : "text-foreground/80"
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
                    className={`text-[17px] py-3.5 block transition-colors hover:text-[hsl(216,65%,34%)] ${
                      location.pathname === link.href ? "text-[hsl(216,65%,34%)] font-bold" : "text-foreground font-medium"
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="border-t border-border mt-3 pt-4">
              <Link to="/contact">
                <Button className="bg-[hsl(216,65%,34%)] hover:bg-[hsl(216,65%,28%)] text-white font-semibold w-full h-[52px] text-base rounded-lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Schedule a Consultation
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
