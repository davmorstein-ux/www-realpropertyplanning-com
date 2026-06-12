import { useState, useEffect } from "react";

const HomepageHero = () => {
  const [isMobile, setIsMobile] = useState(() => typeof window !== "undefined" && window.innerWidth < 769);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 769);
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <div style={{ display: "block", width: "100%", margin: 0, padding: 0 }}>
      {/* Hero image — fixed height, absolutely filled */}
      <section
        style={{
          position: "relative",
          width: "100%",
          height: isMobile ? "260px" : "500px",
          overflow: "hidden",
          display: "block",
          margin: 0,
          padding: 0,
          backgroundColor: "#1a2744",
        }}
      >
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
            }}
            sizes="100vw"
          />
        </picture>
      </section>

      {/* Solid navy band below image — same pattern as interior pages, guaranteed readable */}
      <div
        style={{
          backgroundColor: "#1a2744",
          width: "100%",
          padding: isMobile ? "1.25rem 1.5rem" : "1.75rem 3.5rem",
        }}
      >
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: isMobile ? "2rem" : "3rem",
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
            fontSize: isMobile ? "18px" : "22px",
            color: "#d4a843",
            margin: 0,
            lineHeight: 1.4,
            fontWeight: 500,
          }}
        >
          Estate &amp; probate &nbsp;·&nbsp; Senior transitions &nbsp;·&nbsp; Adult Family Homes
        </p>
      </div>
    </div>
  );
};

export default HomepageHero;
