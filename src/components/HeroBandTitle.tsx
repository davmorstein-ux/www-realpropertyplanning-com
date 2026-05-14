import { ElementType, ReactNode } from "react";

interface HeroBandTitleProps {
  children: ReactNode;
  as?: ElementType;
  /** Render only the title element (skip the white spacer + bg-primary band wrapper). */
  bare?: boolean;
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
  className = "",
}: HeroBandTitleProps) => {
  const titleStyle = {
    color: "#ffffff",
    fontFamily: '"DM Sans", serif',
    fontWeight: 600,
    textAlign: "center" as const,
    lineHeight: 1.2,
    fontSize: "clamp(18px, 2.6vw, 32px)",
    opacity: 1,
    margin: 0,
    textTransform: "capitalize" as const,
    wordSpacing: "normal",
  };

  const titleEl = (
    <Tag className={`hero-band-title ${className}`.trim()} style={titleStyle}>
      {children}
    </Tag>
  );

  if (bare) return titleEl;

  return (
    <>
      <div className="bg-white h-[3px]" aria-hidden="true" />
      <div className="bg-primary py-9 md:py-10">
        {titleEl}
      </div>
    </>
  );
};

export default HeroBandTitle;
