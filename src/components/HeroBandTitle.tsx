import { Children, ElementType, ReactNode } from "react";


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
// Title Case every word, EXCEPT 'to', 'a', 'an' which stay lowercase —
// unless the word is the first word of the title (always capitalized).
// Acronyms in KEEP_UPPER are preserved fully uppercase.
const KEEP_LOWER = new Set(["to", "a", "an"]);
const KEEP_UPPER = new Set(["CPA", "CPAS", "POA", "FAQ", "WA"]);

const capitalizeWord = (part: string): string => {
  const lowered = part.toLowerCase();
  const idx = lowered.search(/[a-z]/);
  if (idx === -1) return part;
  return lowered.slice(0, idx) + lowered.charAt(idx).toUpperCase() + lowered.slice(idx + 1);
};

const titleCase = (input: string): string => {
  const parts = input.split(/(\s+)/);
  let firstWordSeen = false;
  return parts
    .map((part) => {
      if (!part || /^\s+$/.test(part)) return part;
      const upper = part.toUpperCase();
      if (KEEP_UPPER.has(upper)) {
        firstWordSeen = true;
        return upper;
      }
      const lower = part.toLowerCase();
      if (!firstWordSeen) {
        firstWordSeen = true;
        return capitalizeWord(part);
      }
      if (KEEP_LOWER.has(lower)) return lower;
      return capitalizeWord(part);
    })
    .join("");
};

const transformChildren = (children: ReactNode): ReactNode =>
  Children.map(children, (child) => (typeof child === "string" ? titleCase(child) : child));

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
    fontWeight: 500,
    fontSize: ".85rem",
    letterSpacing: "0.1em",
    lineHeight: 1.2,
    opacity: 1,
    margin: 0,
    wordSpacing: "normal",
    textAlign: "center" as const,
  };

  // Auto-scroll removed: all scrolling is manual.


  const titleEl = (
    <Tag className={`hero-band-title ${className}`.trim()} style={titleStyle}>
      {transformChildren(children)}
    </Tag>
  );

  if (bare) return titleEl;

  return (
    <>
      <div style={{ height: "3px", background: "#FFFFFF" }} />
      <div
        data-hero-band
        style={{
          background: "linear-gradient(to right, #FFFFFF 0%, #1B3A6B 20%, #1B3A6B 80%, #FFFFFF 100%)",
          height: "46px",
          padding: "0 16px 4px 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {titleEl}
      </div>
    </>
  );
};

export default HeroBandTitle;
