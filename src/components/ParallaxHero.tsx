import { useEffect } from "react";

interface ParallaxHeroProps {
  src: string;
  alt: string;
  /** Desktop hero height as CSS value. Defaults to 50vh (use 70vh for the homepage). */
  heightDesktop?: string;
  /** Mobile/tablet hero height as CSS value. Defaults to 40vh. */
  heightMobile?: string;
  className?: string;
}

/**
 * Site-wide parallax hero.
 * - background-attachment: fixed on desktop, scroll on mobile/tablet (≤1024px)
 * - background-size: cover, position: center center — no distortion
 * - Zero gap above (sits flush under the fixed Header spacer) and below
 */
const ParallaxHero = ({
  src,
  alt,
  heightDesktop = "50vh",
  heightMobile = "40vh",
  className = "",
}: ParallaxHeroProps) => {
  // Inject shared stylesheet once.
  useEffect(() => {
    const id = "rpp-parallax-hero-styles";
    if (document.getElementById(id)) return;
    const style = document.createElement("style");
    style.id = id;
    style.innerHTML = `
      .rpp-parallax {
        display: block;
        position: relative;
        width: 100%;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        background-attachment: fixed;
        margin: 0;
        padding: 0;
      }
      @media (max-width: 1024px) {
        .rpp-parallax {
          background-attachment: scroll;
        }
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <div
      className={`rpp-parallax ${className}`.trim()}
      role="img"
      aria-label={alt}
      style={{
        backgroundImage: `url('${src}')`,
        // CSS var with media-query fallback handled inline via responsive height.
        height: `var(--rpp-hero-h, ${heightDesktop})`,
      }}
    >
      <style>{`
        @media (max-width: 1024px) {
          [data-rpp-hero="true"] { height: ${heightMobile} !important; }
        }
      `}</style>
      <span data-rpp-hero="true" style={{ display: "none" }} />
    </div>
  );
};

export default ParallaxHero;
