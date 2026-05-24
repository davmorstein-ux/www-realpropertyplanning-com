import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import HeroBandTitle from "@/components/HeroBandTitle";
import searchHero from "@/assets/search-hero.webp";

const Search = () => {
  useEffect(() => {
    const existing = document.querySelector(
      'script[src="https://cse.google.com/cse.js?cx=549468ba95e8c46df"]'
    );
    if (existing) return;

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://cse.google.com/cse.js?cx=549468ba95e8c46df";
    document.head.appendChild(script);

    return () => {
      // Do not remove the script on unmount so the widget survives navigation
    };
  }, []);

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
            <img
              src={searchHero}
              alt="Senior couple driving a classic red convertible into Search City at night"
              className="w-full h-auto block"
              loading="eager"
            />
            <HeroBandTitle>Search Page</HeroBandTitle>
          </div>
        </section>

        <div className="container px-6 lg:px-8 pt-12 md:pt-16 pb-20">
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
            <div className="gcse-search" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Search;
