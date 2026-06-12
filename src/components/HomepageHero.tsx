import { useState, useEffect } from "react";

const HomepageHero = () => {
  const [isMobile, setIsMobile] = useState(() => typeof window !== "undefined" && window.innerWidth < 769);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 769);
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const heroHeight = isMobile ? "260px" : "520px";

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: heroHeight,
        minHeight: heroHeight,
        overflow: "hidden",
        display: "block",
        margin: 0,
        padding: 0,
        backgroundColor: "#1a2744",
      }}
    >
      {/* Image fills the container absolutely — cannot collapse */}
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
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "left center",
            display: "block",
            margin: 0,
            padding: 0,
          }}
          sizes="100vw"
        />
      </picture>

      {/* Dark scrim panel — guaranteed readable text */}
      <div
        style={{
          position: "absolute",
          bottom: isMobile ? "1.25rem" : "2.5rem",
          left: isMobile ? "1rem" : "3.5rem",
          maxWidth: isMobile ? "260px" : "500px",
          backgroundColor: "rgba(0,0,0,0.65)",
          borderRadius: "8px",
          padding: isMobile ? "1rem 1.25rem" : "1.5rem 2rem",
          zIndex: 2,
        }}
      >
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: isMobile ? "2rem" : "2.75rem",
            fontWeight: 600,
            color: "#ffffff",
            lineHeight: 1.15,
            margin: "0 0 0.5rem",
            letterSpacing: "-0.01em",
          }}
        >
          Where do you need to go?
        </h1>
        <p
          style={{
            fontFamily: "Inter, system-ui, sans-serif",
            fontSize: isMobile ? "16px" : "18px",
            color: "#f0ece4",
            margin: 0,
            lineHeight: 1.55,
            fontWeight: 400,
          }}
        >
          Estate &amp; probate · Senior transitions · Adult Family Homes
        </p>
      </div>
    </section>
  );
};

export default HomepageHero;
