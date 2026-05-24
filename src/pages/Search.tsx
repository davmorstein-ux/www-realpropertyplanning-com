import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Search as SearchIcon } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import HeroBandTitle from "@/components/HeroBandTitle";
import searchHero from "@/assets/search-hero.webp";

interface Category {
  label: string;
  href: string;
}

const CATEGORIES: Category[] = [
  { label: "Probate & Estate Sales", href: "/probate-estate-sales" },
  { label: "Senior Transitions", href: "/senior-transitions" },
  { label: "Executors", href: "/executors" },
  { label: "Trustees", href: "/trustees" },
  { label: "For Attorneys", href: "/for-attorneys" },
  { label: "For CPAs", href: "/for-cpas" },
  { label: "For Financial Planners", href: "/for-financial-planners" },
  { label: "Real Estate Appraiser", href: "/real-estate-appraiser" },
  { label: "Estate Liquidation", href: "/estate-liquidation" },
  { label: "Guides & Resources", href: "/guides-and-resources" },
  { label: "FAQ", href: "/faq" },
  { label: "How the Process Works", href: "/how-the-process-works" },
  { label: "Why Valuation Matters", href: "/why-valuation-matters" },
  { label: "Contact", href: "/contact" },
  { label: "Aging in Place", href: "/aging-in-place-staying-home-safely" },
  { label: "Downsizing", href: "/downsizing-preparing-for-transition" },
  { label: "Gray Divorce", href: "/gray-divorce" },
  { label: "Power of Attorney", href: "/power-of-attorney" },
  { label: "Wills", href: "/wills" },
  { label: "Date of Death Appraisals", href: "/date-of-death-valuation-property-appraisals" },
  { label: "Selling an Inherited Home", href: "/selling-an-inherited-home" },
  { label: "Senior Living Options", href: "/senior-living-and-relocation" },
  { label: "Senior Placement", href: "/senior-placement" },
  { label: "Planning Before a Crisis", href: "/planning-before-a-crisis" },
  { label: "Helping Aging Parents", href: "/helping-an-aging-parent" },
  { label: "Sell House to Fund Senior Living", href: "/sell-house-fund-senior-living" },
  { label: "Reverse Mortgage", href: "/retirement-reverse-mortgage" },
  { label: "Estate Planning", href: "/estate-planning-powers-of-attorney" },
  { label: "For Divorce Attorneys", href: "/for-divorce-attorneys" },
  { label: "For Elder Law Attorneys", href: "/for-elder-law-attorneys" },
  { label: "For Probate Attorneys", href: "/for-probate-attorneys" },
  { label: "Washington State Counties", href: "/counties" },
  { label: "Join the Network", href: "/join-the-network" },
  { label: "Testimonials", href: "/testimonials" },
];

const Search = () => {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!query.trim()) return CATEGORIES;
    const q = query.toLowerCase().trim();
    return CATEGORIES.filter(
      (c) => c.label.toLowerCase().includes(q) || c.href.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div className="rpp-search min-h-screen bg-background">
      <SEOHead
        title="Search | Real Property Planning"
        description="Find what you need on Real Property Planning. Browse categories including probate, estate sales, senior transitions, attorneys, CPAs, and more."
      />
      <Header />
      <main id="main-content" className="pt-24 md:pt-28 pb-20">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[1100px] mx-auto mb-10 md:mb-14">
            <img
              src={searchHero}
              alt="Senior couple driving a classic red convertible into Search City at night"
              className="w-full h-auto rounded-2xl shadow-lg"
              loading="eager"
            />
          </div>
          <div className="max-w-[760px] mx-auto">
            {/* Search bar */}
            <div className="relative mb-12 md:mb-16">
              <label htmlFor="site-search" className="sr-only">
                Search Real Property Planning
              </label>
              <div
                className="relative flex items-center w-full"
                style={{
                  borderRadius: "9999px",
                  border: "2px solid hsl(40 15% 88%)",
                  background: "hsl(0 0% 100%)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                }}
              >
                <input
                  id="site-search"
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search Real Property Planning…"
                  className="w-full bg-transparent outline-none"
                  style={{
                    padding: "20px 56px 20px 28px",
                    fontSize: "18px",
                    fontWeight: 500,
                    color: "hsl(220 35% 15%)",
                    borderRadius: "9999px",
                  }}
                />
                <div
                  className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none"
                  style={{ color: "hsl(220 35% 18%)" }}
                >
                  <SearchIcon size={22} strokeWidth={2} />
                </div>
              </div>
            </div>

            {/* Category grid */}
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
              role="list"
            >
              {filtered.map((cat) => (
              <Link
                  key={cat.href + cat.label}
                  to={cat.href}
                  role="listitem"
                  className="group block"
                  style={{
                    borderRadius: "12px",
                    border: "1.5px solid hsl(40 15% 88%)",
                    background: "hsl(0 0% 100%)",
                    padding: "16px 20px",
                    transition: "all 0.2s ease",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = "hsl(42 55% 55% / 0.6)";
                    el.style.boxShadow = "0 4px 16px rgba(0,0,0,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = "hsl(40 15% 88%)";
                    el.style.boxShadow = "0 2px 8px rgba(0,0,0,0.04)";
                  }}
                >
                  <span
                    className="block font-sans"
                    style={{
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      color: "hsl(220 35% 18%)",
                      lineHeight: 1.4,
                      textDecoration: "none",
                    }}
                  >
                    {cat.label}
                  </span>
                </Link>
              ))}
            </div>

            {filtered.length === 0 && (
              <p
                className="text-center mt-10"
                style={{
                  fontSize: "18px",
                  color: "hsl(220 20% 32%)",
                  fontWeight: 500,
                }}
              >
                No categories match your search.
              </p>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Search;
