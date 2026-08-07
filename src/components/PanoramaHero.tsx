import heroImage from "@/assets/panorama-road-scene.webp";

interface PanoramaHeroProps {
  /** Page-specific alt text. Describe the page's subject, not the image. */
  alt: string;
}

/**
 * Shared panoramic hero used across the Planning Before a Crisis section.
 *
 * The source image is 1920x487 (roughly 3.94:1). Left unconstrained it scales
 * off viewport width and reaches ~650px on an ultrawide monitor, pushing the
 * page heading below the fold. The clamp caps it at 340px and floors it at
 * 150px so it never collapses to a stripe on a phone.
 */
const PanoramaHero = ({ alt }: PanoramaHeroProps) => (
  <section className="bg-white w-full overflow-hidden">
    <img
      src={heroImage}
      alt={alt}
      className="w-full block"
      style={{
        width: "100%",
        height: "clamp(150px, 19vw, 340px)",
        objectFit: "cover",
        objectPosition: "center center",
        display: "block",
      }}
      loading="eager"
      sizes="100vw"
      decoding="async"
      width={1920}
      height={487}
    />
  </section>
);

export default PanoramaHero;
