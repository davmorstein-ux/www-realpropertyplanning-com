import { Children, ElementType, ReactNode } from "react";

interface HeroBandTitleProps {
  children: ReactNode;
  as?: ElementType;
  bare?: boolean;
  compact?: boolean;
  className?: string;
}

const KEEP_LOWER = new Set([
  "to",
  "a",
  "an",
  "of",
  "the",
  "and",
  "or",
  "nor",
  "but",
  "as",
  "at",
  "by",
  "for",
  "in",
  "into",
  "on",
  "onto",
  "with",
]);
const KEEP_UPPER = new Set(["CPA", "CPAS", "POA", "FAQ", "WA", "AFH", "AFHS"]);

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
    const m = part.match(/^([^A-Za-z0-9]*)([A-Za-z0-9]*)([^A-Za-z0-9]*)$/);
    const [, lead = "", core = "", trail = ""] = m || [];
    if (core && KEEP_UPPER.has(core.toUpperCase())) {
      firstWordSeen = true;
      return lead + core.toUpperCase() + trail;
    }
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

/* THE canonical band text. Two tiers only:
   - H1: Source Serif 4 semibold, Title Case (via the transform below), sized
     to one clamp. All-caps at heading length was dropped on the typography
     review's explicit rule — sentence-length capitals are measurably harder
     for older readers, who are this site's audience.
   - Non-H1 (compact eyebrow labels): small uppercase DM Sans, the one place
     the review permits caps.
   index.css carries matching !important overrides near the end of the file
   (search "CANONICAL HERO BAND") because global rules there would otherwise
   repaint this; change BOTH places or neither. */
const bandTextStyle = (isH1: boolean) => ({
  color: "#FFFFFF",
  fontFamily: isH1 ? "'Source Serif 4', Georgia, serif" : "'DM Sans', system-ui, sans-serif",
  fontWeight: isH1 ? 600 : 700,
  fontSize: isH1 ? "clamp(32px, 4.5vw, 46px)" : "15px",
  letterSpacing: isH1 ? "0.01em" : "0.16em",
  lineHeight: isH1 ? 1.12 : 1.2,
  opacity: 1,
  margin: 0,
  padding: 0,
  textTransform: isH1 ? ("none" as const) : ("uppercase" as const),
  textAlign: "center" as const,
});

const HeroBandTitle = ({
  children,
  as: Tag = "div",
  bare = false,
  compact = false,
  className = "",
}: HeroBandTitleProps) => {
  const isH1 = Tag === "h1";
  const textStyle = bandTextStyle(isH1);
  if (bare) {
    return (
      <Tag className="rpp-hero-band-text" style={textStyle}>
        {transformChildren(children)}
      </Tag>
    );
  }
  return (
    <>
      {/* Solid navy, not the old white-edged gradient: the gradient made the
          band's apparent width vary with screen size, which read as different
          bands on different pages. One colour, one height, everywhere. */}
      <div
        style={{
          background: "#1B3A6B",
          padding: isH1 ? "26px 24px 28px" : "6px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          lineHeight: 0,
        }}
      >
        <Tag className="rpp-hero-band-text" style={textStyle}>
          {transformChildren(children)}
        </Tag>
      </div>
    </>
  );
};

export default HeroBandTitle;
