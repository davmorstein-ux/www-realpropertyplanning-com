import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/real-property-planning-logo-bright-seattle.webp";
import iconPhone3d from "@/assets/icons/real-estate-phone-contact-icon-washington.webp";

const primaryLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services", children: [
    { href: "/services", label: "All Services" },
    { href: "/senior-estate-services", label: "Senior & Estate Services" },
    { href: "/probate-estate-sales", label: "Probate & Estate Sales" },
    { href: "/senior-transitions", label: "Senior Transitions" },
    { href: "/senior-placement", label: "Senior Placement" },
    { href: "/executors", label: "For Executors" },
    { href: "/how-the-process-works", label: "How the Process Works" },
    { href: "/why-valuation-matters", label: "Why Valuation Matters" },
    { href: "/professional-referral-resource", label: "Professional Referral Resource" },
  ]},
  { href: "/counties", label: "Counties", children: [
    { href: "/counties", label: "All Counties" },
    { href: "/king-county", label: "King County" },
    { href: "/snohomish-county", label: "Snohomish County" },
    { href: "/pierce-county", label: "Pierce County" },
    { href: "/kitsap-county", label: "Kitsap County" },
    { href: "/cities-we-serve", label: "Cities We Serve" },
  ]},
  { href: "/for-professionals", label: "For Professionals", children: [
    { href: "/for-professionals", label: "Overview" },
    { href: "/for-attorneys", label: "Attorneys" },
    { href: "/for-financial-planners", label: "Financial Professionals" },
    { href: "/for-senior-living-professionals", label: "Senior & Transition Professionals" },
    { href: "/lenders-and-financing-specialists", label: "Lenders & Financing Specialists" },
  ]},
  { href: "/about", label: "About" },
  { href: "/resources", label: "Resources", children: [
    { href: "/resources", label: "Resources" },
    { href: "/professionals", label: "Find a Professional" },
    { href: "/insights", label: "Insights & Guidance" },
    { href: "/senior-living-and-relocation", label: "Senior Living & Relocation" },
    { href: "/lenders-and-financing-specialists", label: "Lenders & Financing" },
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
    if (children) return children.some((c) => location.pathname === c.href);
    return false;
  };

  return (
    <>
      {/* Skip to content — accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-md focus:text-base"
      >
        Skip to main content
      </a>
      <header
        data-nosnippet
        className={`fixed left-0 right-0 top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "border-border shadow-[0_2px_10px_rgba(0,0,0,0.06)]"
            : "border-transparent"
        }`}
        style={{ borderBottomWidth: "1px", backgroundColor: "#0a1628" }}
      >
        <div
          className={`mx-auto flex max-w-[1520px] items-center px-4 transition-all duration-300 md:px-6 lg:px-10 ${
            scrolled ? "h-[90px] md:h-[100px]" : "h-[100px] md:h-[114px]"
          }`}
          ref={dropdownRef}
        >
          <nav aria-label="Main navigation" className="hidden shrink-0 items-center gap-4 md:flex lg:gap-6 xl:gap-7">
            {primaryLinks.map((link) => (
              <div key={link.label} className="relative">
                {link.children ? (
                  <>
                    <button
                      className={`inline-flex items-center gap-1 text-[15px] font-medium tracking-[0.02em] transition-colors hover:text-blue-300 lg:text-[16px] ${
                        isActive(link.href, link.children)
                          ? "font-semibold text-white"
                          : "text-white/80"
                      }`}
                      onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                      onMouseEnter={() => setOpenDropdown(link.label)}
                      aria-expanded={openDropdown === link.label}
                      aria-haspopup="true"
                      onKeyDown={(e) => {
                        if (e.key === "Escape") {
                          setOpenDropdown(null);
                          (e.target as HTMLElement).focus();
                        }
                      }}
                    >
                      {link.label}
                      <ChevronDown className={`h-3.5 w-3.5 transition-transform ${openDropdown === link.label ? "rotate-180" : ""}`} />
                    </button>
                    {openDropdown === link.label && (
                      <div
                        className="absolute left-1/2 top-full z-50 mt-2 min-w-[240px] -translate-x-1/2 rounded-2xl border border-border bg-card py-2 shadow-lg"
                        role="menu"
                        onMouseLeave={() => setOpenDropdown(null)}
                        onKeyDown={(e) => {
                          if (e.key === "Escape") {
                            setOpenDropdown(null);
                          }
                        }}
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            role="menuitem"
                            className={`block px-5 py-2 text-[15px] whitespace-nowrap transition-colors hover:bg-secondary hover:text-[hsl(216,65%,34%)] ${
                              location.pathname === child.href ? "font-semibold text-[hsl(216,65%,34%)]" : "text-foreground/80"
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
                    className={`text-[14px] font-medium tracking-[0.02em] transition-colors hover:text-blue-300 lg:text-[15px] ${
                      isActive(link.href)
                        ? "font-semibold text-white"
                        : "text-white/80"
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="flex flex-1 justify-center lg:justify-center">
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="Real Property Planning — probate and estate real estate guidance in Washington State"
                className={`h-auto max-h-[90px] w-[400px] object-contain transition-all duration-300 md:w-[425px] lg:w-[775px] xl:w-[875px] ${
                  scrolled ? "w-[350px] md:w-[350px] lg:w-[625px] xl:w-[700px]" : ""
                }`}
               loading="lazy"/>
            </Link>
          </div>

          <div className="hidden shrink-0 flex-col items-center text-center md:flex">
            <a
              href="tel:2069003015"
              className="text-[14px] font-semibold text-white/90 hover:text-white transition-colors"
            >
              (206) 900-3015
            </a>
            <a
              href="mailto:info@realpropertyplanning.com"
              className="text-[13px] text-white/70 hover:text-white transition-colors"
            >
              info@realpropertyplanning.com
            </a>
          </div>

          <button
            className="rounded-lg border border-white/20 bg-white/10 p-3 text-white transition-colors hover:bg-white/20 md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-border bg-white px-6 pb-6 pt-5 md:hidden">
            <nav aria-label="Mobile navigation" className="flex flex-col gap-0.5">
              {primaryLinks.map((link) => (
                <div key={link.label}>
                  {link.children ? (
                    <>
                      <button
                        className={`flex w-full items-center justify-between py-3.5 text-left text-[17px] transition-colors hover:text-[hsl(216,65%,34%)] ${
                          isActive(link.href, link.children) ? "font-bold text-[hsl(216,65%,34%)]" : "font-medium text-foreground"
                        }`}
                        onClick={() => setMobileExpanded(mobileExpanded === link.label ? null : link.label)}
                      >
                        {link.label}
                        <ChevronDown className={`h-5 w-5 transition-transform ${mobileExpanded === link.label ? "rotate-180" : ""}`} />
                      </button>
                      {mobileExpanded === link.label && (
                        <div className="mb-2 flex flex-col gap-0.5 border-l-2 border-gold/30 pl-5">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              to={child.href}
                              className={`py-3 text-[15px] transition-colors hover:text-[hsl(216,65%,34%)] ${
                                location.pathname === child.href ? "font-bold text-[hsl(216,65%,34%)]" : "text-foreground/80"
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
                      className={`block py-3.5 text-[17px] transition-colors hover:text-[hsl(216,65%,34%)] ${
                        location.pathname === link.href ? "font-bold text-[hsl(216,65%,34%)]" : "font-medium text-foreground"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="mt-3 border-t border-border pt-4">
                <Link to="/contact">
                  <Button className="h-[52px] w-full rounded-lg bg-[hsl(216,65%,34%)] text-base font-semibold text-white hover:bg-[hsl(216,65%,28%)]">
                    <img src={iconPhone3d} alt="" aria-hidden="true" className="mr-2 h-5 w-5 shrink-0 object-contain"  loading="lazy"/>
                    Schedule a Consultation
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>

      <div className="h-[100px] md:h-[114px]" />
    </>
  );
};

export default Header;
