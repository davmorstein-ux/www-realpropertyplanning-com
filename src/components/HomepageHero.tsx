import { useState, useEffect } from "react";

const HomepageHero = () => {
  const [isMobile, setIsMobile] = useState(() => typeof window !== "undefined" && window.innerWidth < 769);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 769);
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        margin: 0,
        padding: 0,
      }}
    >
      {/* Hero image */}
      <style>{`
        @keyframes rppHeroFadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes rppTextRise {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

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
          style={{
            display: "block",
            width: "100%",
            height: "auto",
            minHeight: isMobile ? 200 : undefined,
            objectFit: "cover",
            objectPosition: "left center",
            opacity: 0,
            animation: "rppHeroFadeIn 1.2s ease forwards",
            margin: 0,
            padding: 0,
          }}
          sizes="100vw"
        />
      </picture>

      {/* Overlaid headline — bottom-left, short and directional */}
      <div
        style={{
          position: "absolute",
          bottom: isMobile ? "1.25rem" : "2.5rem",
          left: isMobile ? "1.25rem" : "4rem",
          maxWidth: isMobile ? "260px" : "520px",
          animation: "rppTextRise 1s ease 0.4s both",
        }}
      >
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: isMobile ? "1.6rem" : "clamp(2rem, 3.5vw, 3rem)",
            fontWeight: 600,
            color: "#ffffff",
            lineHeight: 1.2,
            margin: 0,
            textShadow: "0 2px 16px rgba(0,0,0,0.45), 0 1px 4px rgba(0,0,0,0.3)",
            letterSpacing: "-0.01em",
          }}
        >
          Where do you need to go?
        </h1>
        <p
          style={{
            fontFamily: "Inter, system-ui, sans-serif",
            fontSize: isMobile ? "13px" : "16px",
            color: "rgba(255,255,255,0.88)",
            margin: "0.6rem 0 0",
            textShadow: "0 1px 6px rgba(0,0,0,0.4)",
            lineHeight: 1.5,
          }}
        >
          Estate &amp; probate · Senior transitions · Adult Family Homes
        </p>
      </div>

      {/* Subtle gradient at bottom to blend into tiles below */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "80px",
          background: "linear-gradient(to bottom, transparent, rgba(245,242,236,0.6))",
          pointerEvents: "none",
        }}
      />
    </section>
  );
};

export default HomepageHero;
