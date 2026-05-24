import { Children, ElementType, ReactNode, useEffect } from "react";
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

// Sitewide hero-band title casing rule:
// Title Case every word, EXCEPT 'and', 'to', 'a' which always stay lowercase.
// Acronyms in this set are preserved fully uppercase.
const KEEP_LOWER = new Set(["and", "to", "a"]);
const KEEP_UPPER = new Set(["CPA", "CPAS", "POA", "FAQ", "WA"]);

const titleCase = (input: string): string =>
  input
    .split(/(\s+)/)
    .map((part) => {
      if (!part || /^\s+$/.test(part)) return part;
      const upper = part.toUpperCase();
      if (KEEP_UPPER.has(upper)) return upper;
      const lower = part.toLowerCase();
      if (KEEP_LOWER.has(lower)) return lower;
      // Capitalize the first alphabetic character; lowercase the rest.
      // Preserves leading punctuation like quotes.
      const lowered = part.toLowerCase();
      const idx = lowered.search(/[a-z]/);
      if (idx === -1) return part;
      return (
        lowered.slice(0, idx) +
        lowered.charAt(idx).toUpperCase() +
        lowered.slice(idx + 1)
      );
    })
    .join("");

const transformChildren = (children: ReactNode): ReactNode =>
  Children.map(children, (child) =>
    typeof child === "string" ? titleCase(child) : child,
  );

const HeroBandTitle = ({
  children,
  as: Tag = "h1",
  bare = false,
  compact = false,
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
    wordSpacing: "normal",
  };

  useEffect(() => {
    if (bare) return;
    return scheduleHeroAutoScroll();
  }, [bare]);

  const titleEl = (
    <Tag
      className={`hero-band-title ${className}`.trim()}
      style={titleStyle}
    >
      {transformChildren(children)}
    </Tag>
  );


  if (bare) return titleEl;

  return (
    <>
      <div className="bg-white h-[3px]" aria-hidden="true" />
      <div
        className="bg-primary"
        style={{ padding: "4px 24px", minHeight: 0 }}
        data-hero-band
      >
        {titleEl}
      </div>
    </>
  );

};

export default HeroBandTitle;
