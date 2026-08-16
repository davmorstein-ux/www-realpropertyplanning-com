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

/* THE canonical band text. Two tiers, plus one modifier:
   - H1: DM Sans 500, Title Case (via the transform below), sized to one
     clamp. All-caps at heading length was dropped on the typography
     review's explicit rule — sentence-length capitals are measurably harder
     for older readers, who are this site's audience.
   - Non-H1 (compact eyebrow labels): small uppercase DM Sans, the one place
     the review permits caps.
   - compact + H1: the slim attorney-family variant. Same face and case, one
     step down in size and padding. `compact` was accepted and IGNORED for a
     long stretch — seven attorney pages passed it and rendered at full H1
     height, which is why that family read as taller than intended. It is
     wired now. `compact` on a NON-H1 band is deliberately a no-op: those are
     already 15px eyebrows (AttorneyEducationalPage passes it that way) and
     shrinking them further would break them.
   index.css carries matching !important overrides near the end of the file
   (search "CANONICAL HERO BAND" and "HERO BAND HEIGHT") because global rules
   there would otherwise repaint this; change BOTH places or neither. */
const bandTextStyle = (isH1: boolean, isCompactH1: boolean) => ({
  color: "#FFFFFF",
  /* ONE FAMILY SITEWIDE. This band is DM Sans, like everything else.

     Worth knowing the history, because this value has moved four times and
     each move broke something:

     Source Serif 4 -> DM Sans, without updating the `serif` token in
     tailwind.config.ts. 209 files still asked for `font-serif`, so those
     headings did not follow the band to DM Sans — they fell through to the
     Georgia fallback and stayed there, unnoticed, for four days.

     Back to Source Serif 4, token and font load agreeing this time, giving a
     serif editorial layer over a DM Sans interface. That worked, and was
     rejected on preference: one family, hierarchy from size and weight.

     Now DM Sans, with tailwind.config.ts, index.css and RPPHomeV3.tsx all
     moved in the same pass. Source Serif 4 is no longer loaded at all.

     The rule that matters: this value is hardcoded in four other places and
     they do not follow each other. HeroBandTitle.tsx (here), the h1 and
     --compact band rules in index.css, and the #rpp-tagline rule in index.css
     that the homepage depends on. Change all of them or none of them. */
  fontFamily: "'DM Sans', system-ui, sans-serif",
  /* 500, calibrated for DM Sans at this size.

     History so it is not re-litigated: serif 600 -> DM Sans 700, which
     overcorrected (700 at 46px across a full-width navy field read as heavy
     rather than authoritative) -> DM Sans 500, which is right. It went to 600
     briefly while the band was serif, since Source Serif at 500 goes thin.
     Back on DM Sans, 500 is the value again. */
  fontWeight: 500,
  fontSize: isCompactH1 ? "clamp(24px, 3vw, 28px)" : isH1 ? "clamp(32px, 4.5vw, 46px)" : "15px",
  letterSpacing: isH1 ? "0.01em" : "0.16em",
  lineHeight: isCompactH1 ? 1.1 : isH1 ? 1.12 : 1.2,
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
  /* COMPACT IS NEUTRALISED — every h1 band is now the same size and padding.

     The attorney family (seven pages) passes `compact`, which rendered those
     bands at clamp(24px, 3vw, 28px) with 6px/8px padding while every other
     page ran clamp(32px, 4.5vw, 46px) with 8px/10px. Two standards, so the
     bands never matched no matter how carefully either one was tuned.

     Pinned to false rather than ripped out: the prop stays in the signature
     and the seven pages keep passing it, so nothing needs editing page-side
     and nothing breaks. Because the `--compact` classes are only attached
     when this is true, the compact rules in index.css now never match — they
     are dead, harmless, and can be deleted whenever that file is next opened.

     To bring the variant back, restore `isH1 && compact` here. Do not
     reintroduce a second set of values anywhere else. */
  const isCompactH1 = false;
  const textStyle = bandTextStyle(isH1, isCompactH1);
  /* className was also destructured-and-dropped before; it now reaches the
     text element so a page can add a hook without forking the component. */
  const textClass = [
    "rpp-hero-band-text",
    isCompactH1 ? "rpp-hero-band-text--compact" : "",
    className,
  ].filter(Boolean).join(" ");

  if (bare) {
    return (
      <Tag className={textClass} style={textStyle}>
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
        className={`rpp-hero-band${isCompactH1 ? " rpp-hero-band--compact" : ""}`}
        style={{
          /* Slimmed from 26/28 after side-by-side review: the thinner band
             reads cleaner and was preferred. The class above exists so the
             matching !important rule at the end of index.css can ENFORCE this
             height — bands were rendering at visibly different heights on
             different pages and the interfering rules were never fully traced,
             so the height is now pinned rather than inherited. Change it in
             BOTH places or the enforcement fights this inline value. */
          background: "#1B3A6B",
          padding: isCompactH1 ? "6px 24px 8px" : isH1 ? "8px 24px 10px" : "6px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          lineHeight: 0,
        }}
      >
        <Tag className={textClass} style={textStyle}>
          {transformChildren(children)}
        </Tag>
      </div>
    </>
  );
};

export default HeroBandTitle;
