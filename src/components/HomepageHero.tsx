import { useState, useEffect } from "react";

const HomepageHero = () => {
  const [isMobile, setIsMobile] = useState(() => typeof window !== "undefined" && window.innerWidth < 769);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 769);
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <div className="rpp-hero-wrap">
      <style>{`
        .rpp-hero-wrap {
          display: block;
          width: 100%;
          margin: 0 !important;
          padding: 0 !important;
        }
        .rpp-hero-img-section {
          position: relative;
          width: 100%;
          height: 500px;
          overflow: hidden;
          display: block;
          margin: 0 !important;
          padding: 0 !important;
          background-color: #1a2744;
        }
        @media (max-width: 768px) {
          .rpp-hero-img-section { height: 260px !important; }
        }
        .rpp-hero-img-section img {
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
          width: 100% !important;
          height: 100% !important;
          object-fit: cover !important;
          object-position: left center !important;
          display: block !important;
        }
        .rpp-hero-band {
          background-color: #1a2744 !important;
          width: 100% !important;
          padding: 2rem 3.5rem !important;
          margin: 0 !important;
        }
        @media (max-width: 768px) {
          .rpp-hero-band { padding: 1.5rem 1.5rem !important; }
        }
        .rpp-hero-h1 {
          font-family: 'Cormorant Garamond', Georgia, serif !important;
          font-size: 3rem !important;
          font-weight: 700 !important;
          color: #ffffff !important;
          line-height: 1.15 !important;
          margin: 0 0 0.6rem 0 !important;
          padding: 0 !important;
          letter-spacing: -0.01em !important;
          text-shadow: none !important;
          opacity: 1 !important;
        }
        @media (max-width: 768px) {
          .rpp-hero-h1 { font-size: 2rem !important; }
        }
        .rpp-hero-sub {
          font-family: Inter, system-ui, sans-serif !important;
          font-size: 22px !important;
          font-weight: 600 !important;
          color: #d4a843 !important;
          line-height: 1.4 !important;
          margin: 0 !important;
          padding: 0 !important;
          text-shadow: none !important;
          opacity: 1 !important;
        }
        @media (max-width: 768px) {
          .rpp-hero-sub { font-size: 18px !important; }
        }
      `}</style>

      {/* Hero image */}
      <section className="rpp-hero-img-section">
        <picture>
          <source media="(max-width: 768px)" srcSet="/homepage-hero-mobile.webp" type="image/webp" />
          <source
            media="(min-width: 769px)"
            srcSet="/homepage-hero.webp 1440w, /homepage-hero-1280.webp 1280w, /homepage-hero-1920.webp 1920w"
            sizes="100vw"
            type="image/webp"
          />
          <img
            src="/homepage-hero.webp"
            width={1440}
            height={606}
            alt="Senior couple by a red convertible on a coastal road with a SOLD Real Property Planning sign"
            loading="eager"
            decoding="async"
            sizes="100vw"
          />
        </picture>
      </section>

      {/* Navy band with headline — !important on everything */}
      <div className="rpp-hero-band">
        <h1 className="rpp-hero-h1">Where do you need to go?</h1>
        <p className="rpp-hero-sub">
          Estate &amp; probate &nbsp;·&nbsp; Senior transitions &nbsp;·&nbsp; Adult Family Homes
        </p>
      </div>
    </div>
  );
};

export default HomepageHero;
