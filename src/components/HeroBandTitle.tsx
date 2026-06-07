import { Children, ElementType, ReactNode } from "react";

interface HeroBandTitleProps {
  children: ReactNode;
  as?: ElementType;
  bare?: boolean;
  compact?: boolean;
  className?: string;
}

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
  return parts.map((part) => {
    if (!part || /^\s+$/.test(part)) return part;
    const upper = part.toUpperCase();
    if (KEEP_UPPER.has(upper)) { firstWordSeen = true; return upper; }
    const lower = part.toLowerCase();
    if (!firstWordSeen) { firstWordSeen = true; return capitalizeWord(part); }
    if (KEEP_LOWER.has(lower)) return lower;
    return capitalizeWord(part);
  }).join("");
};

const transformChildren = (children: ReactNode): ReactNode =>
  Children.map(children, (child) => (typeof child === "string" ? titleCase(child) : child));

const HeroBandTitle = ({
  children,
  as: Tag = "p",
  bare = false,
  compact = false,
  className = "",
}: HeroBandTitleProps) => {
  if (bare) {
    return (
      <Tag style={{ color: "#FFFFFF", fontFamily: "'Raleway', sans-serif", fontWeight: 900, fontSize: "28px", letterSpacing: "0.18em", lineHeight: 1.2, opacity: 1, margin: 0, textTransform: "uppercase", textAlign: "center" }}>
        {transformChildren(children)}
      </Tag>
    );
  }
  return (
    <>
      <div style={{ height: "3px", background: "#FFFFFF" }} />
      <div style={{ background: "linear-gradient(to right, #FFFFFF 0%, #1B3A6B 20%, #1B3A6B 80%, #FFFFFF 100%)", height: "68px", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Tag style={{ color: "#FFFFFF", fontFamily: "'Raleway', sans-serif", fontWeight: 900, fontSize: "28px", letterSpacing: "0.18em", lineHeight: 1.2, opacity: 1, margin: 0, textTransform: "uppercase", textAlign: "center" }}>
          {transformChildren(children)}
        </Tag>
      </div>
    </>
  );
};

export default HeroBandTitle;
