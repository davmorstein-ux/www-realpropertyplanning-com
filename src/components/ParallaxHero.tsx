import { useEffect } from "react";

interface ParallaxHeroProps {
  src: string;
  alt: string;
  /** Desktop hero height. Defaults to 50vh (use 70vh for the homepage). */
  heightDesktop?: string;
  /** Mobile/tablet hero height. Defaults to 40vh. */
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
        height: var(--rpp-hero-h-desktop, 50vh);
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
          height: var(--rpp-hero-h-mobile, 40vh);
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
        ["--rpp-hero-h-desktop" as never]: heightDesktop,
        ["--rpp-hero-h-mobile" as never]: heightMobile,
      }}
    />
  );
};

export default ParallaxHero;
