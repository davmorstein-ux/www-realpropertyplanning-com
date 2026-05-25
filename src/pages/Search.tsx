import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import HeroBandTitle from "@/components/HeroBandTitle";
import searchHero from "@/assets/search-hero.webp";

const Search = () => {
  useEffect(() => {
    const SRC = "https://cse.google.com/cse.js?cx=549468ba95e8c46df";
    const existing = document.querySelector(`script[src="${SRC}"]`);
    if (!existing) {
      const script = document.createElement("script");
      script.async = true;
      script.src = SRC;
      document.head.appendChild(script);
    }

    const hidePlaceholder = () => {
      const ph = document.getElementById("gcse-placeholder");
      if (ph && document.querySelector(".gsc-control-cse")) {
        ph.style.display = "none";
        return true;
      }
      return false;
    };

    // Note: do NOT call google.search.cse.element.render() here — the
    // container uses class="gcse-search" which auto-initializes. Calling
    // render() in addition causes a duplicate search bar to appear.

    const onLoad = () => tryRender();
    window.addEventListener("load", onLoad);

    let attempts = 0;
    const interval = window.setInterval(() => {
      attempts++;
      tryRender();
      if (hidePlaceholder() || attempts > 40) {
        window.clearInterval(interval);
      }
    }, 250);

    return () => {
      window.removeEventListener("load", onLoad);
      window.clearInterval(interval);
    };
  }, []);

  return (
    <div className="rpp-search min-h-screen bg-background">
      <SEOHead
        title="Search | Real Property Planning"
        description="Search Real Property Planning for probate, estate sales, senior transitions, attorneys, CPAs, financial planners, and more."
      />
      <Header />
      <style>{`
        .gsc-branding,
        .gsc-branding-text,
        .gsc-branding-img,
        .gsib_b {
          display: none !important;
        }
      `}</style>
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
            <div
              id="gcse-search-container"
              className="gcse-search"
              style={{ minHeight: "56px", position: "relative" }}
            />
            <div
              id="gcse-placeholder"
              aria-hidden="true"
              style={{
                marginTop: "-56px",
                height: "56px",
                borderRadius: "9999px",
                background: "hsl(220 14% 93%)",
                animation: "rpp-pulse 1.4s ease-in-out infinite",
              }}
            />
            <style>{`
              @keyframes rpp-pulse {
                0%, 100% { opacity: 0.6; }
                50% { opacity: 1; }
              }
              .gsc-control-cse { background: transparent !important; border: none !important; padding: 0 !important; }
            `}</style>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Search;
