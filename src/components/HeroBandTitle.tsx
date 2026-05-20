import { ElementType, ReactNode, useEffect } from "react";
import { scheduleHeroAutoScroll } from "@/lib/hero-auto-scroll";

interface HeroBandTitleProps {
  children: ReactNode;
  as?: ElementType;
  /** Render only the title element (skip the white spacer + bg-primary band wrapper). */
  bare?: boolean;
  /** Use tighter vertical padding in the navy band. */
  compact?: boolean;
  className?: string;
}

/**
 * Global standardized hero blue band title.
 *
 * Reference: "Professionals & Services" band on /professionals-services.
 * Use for every navy band title that sits directly under a hero image.
 *
 * Renders:
 *   <div className="bg-white h-[3px]" aria-hidden />
 *   <div className="bg-primary py-9 md:py-10">
 *     <Tag className="hero-band-title">{children}</Tag>
 *   </div>
 *
 * Pass `bare` if you already have the band wrapper and only need the title element.
 */
const HeroBandTitle = ({
  children,
  as: Tag = "h1",
  bare = false,
  compact = false,
  className = "",
}: HeroBandTitleProps) => {

  const titleStyle = {
    color: "#ffffff",
    fontSize: "24px",
    fontWeight: 700,
    textAlign: "center" as const,
  };

  useEffect(() => {
    if (bare) return;
    return scheduleHeroAutoScroll();
  }, [bare]);

  const titleEl = (
    <Tag
      className={`hero-band-title ${className}`.trim()}
      style={{ ...titleStyle, fontSize: "24px" }}
    >
      {children}
    </Tag>
  );

  if (bare) return titleEl;

  return (
    <>
      <div className="bg-white h-[3px]" aria-hidden="true" />
      <div
        className="bg-primary"
        style={{ padding: "12px 24px", minHeight: 0 }}
        data-hero-band
      >
        {titleEl}
      </div>
    </>
  );

};

export default HeroBandTitle;
