import { useState } from "react";
import { Search as SearchIcon } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import HeroBandTitle from "@/components/HeroBandTitle";
import searchHero from "@/assets/search-hero.webp";
import ParallaxHero from "@/components/ParallaxHero";

const Search = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const q = query.trim();
    if (!q) return;
    const url = `https://www.google.com/search?q=${encodeURIComponent(
      `site:realpropertyplanning.com ${q}`
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="rpp-search min-h-screen bg-background">
      <SEOHead
        title="Search | Real Property Planning"
        description="Search Real Property Planning for probate, estate sales, senior transitions, attorneys, CPAs, financial planners, and more."
      />
      <Header />
      <main id="main-content">
        {/* Hero image + navy band */}
        <section className="w-full overflow-hidden" style={{ marginTop: 0, paddingTop: 0 }}>
          <div style={{ lineHeight: 0 }}>
            <ParallaxHero src={searchHero} alt="Senior couple driving a classic red convertible into Search City at night" />
            <HeroBandTitle>Search Page</HeroBandTitle>
          </div>
        </section>

        <div className="container px-6 lg:px-8 pt-6 pb-20">
          <div className="max-w-[900px] mx-auto">
            <h1
              className="text-center mb-10 md:mb-14"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 500,
                lineHeight: 1.15,
                letterSpacing: "0.02em",
                color: "hsl(220 35% 18%)",
              }}
            >
              Search Real Property Planning
            </h1>
            <form
              onSubmit={handleSearch}
              role="search"
              style={{ maxWidth: "700px", width: "100%", margin: "0 auto" }}
            >
              <div className="flex items-center gap-2 rounded-full border-2 border-border bg-card pl-5 pr-2 py-2 focus-within:border-gold focus-within:ring-2 focus-within:ring-gold/20 transition-all"
                style={{ boxShadow: "0 4px 20px -4px hsl(220 35% 15% / 0.08)" }}
              >
                <SearchIcon className="w-5 h-5 text-navy flex-shrink-0" strokeWidth={2.5} aria-hidden="true" />
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search Real Property Planning…"
                  aria-label="Search Real Property Planning"
                  className="flex-1 bg-transparent border-none outline-none py-2 px-2 text-[17px] text-foreground placeholder:text-muted-foreground font-sans"
                />
                <button
                  type="submit"
                  className="flex-shrink-0 rounded-full bg-navy text-white font-semibold px-6 py-2.5 text-[15px] hover:bg-navy/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Search;
