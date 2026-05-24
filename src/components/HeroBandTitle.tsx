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
    color: "#FFFFFF",
    fontFamily: '"Cormorant Garamond", "DM Sans", serif',
    fontWeight: 300,
    fontSize: "1.75rem",
    letterSpacing: "0.12em",
    textShadow: "0 1px 4px rgba(0,0,0,0.4)",
    lineHeight: 1.2,
    opacity: 1,
    margin: 0,
    wordSpacing: "normal",
    textAlign: "center" as const,
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
    <div
      data-hero-band
      style={{
        position: "relative",
        marginTop: "-140px",
        height: "140px",
        pointerEvents: "none",
        background:
          "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.55) 100%)",
        zIndex: 2,
      }}
    >
      <div style={{ position: "absolute", bottom: "24px", left: "40px", pointerEvents: "auto" }}>
        {titleEl}
      </div>
    </div>
  );


};

export default HeroBandTitle;
