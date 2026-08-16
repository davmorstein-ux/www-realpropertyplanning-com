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
   - H1: Source Serif 4 semibold, Title Case (via the transform below), sized
     to one clamp. All-caps at heading length was dropped on the typography
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
  /* TWO LAYERS, ONE FACE EACH. The band is Source Serif 4 again.

     The single-family consolidation that moved this to DM Sans was aimed at a
     real problem — three families loading, one used — but it left the site
     worse, because `serif` in tailwind.config.ts still pointed at Source Serif
     4 and 207 files still asked for `font-serif`. Dropping the font did not
     move those headings to DM Sans; it dropped them to the Georgia fallback.
     So the live result was a DM Sans band sitting directly on top of Georgia
     section headings: two unrelated faces stacked on every page, neither one
     chosen.

     The split now runs along a line that means something. DM Sans is the
     INTERFACE face: navigation, buttons, body copy, the small-caps eyebrow
     bands below. Source Serif 4 is the EDITORIAL face: this h1 band and every
     section heading under it. A reader can tell at a glance which layer they
     are looking at, and the hub reads as published reference material rather
     than a product page — which is the whole positioning.

     Non-h1 compact bands stay DM Sans. That is the one place the typography
     review permits capitals, and small-caps serif at 15px is a worse read. */
  fontFamily: "'DM Sans', system-ui, sans-serif",
  /* 600, back to the weight this band carried the last time it was serif.

     The 500 here was calibrated for DM Sans, and the history is worth keeping
     so it is not re-litigated: serif 600 → DM Sans 700 (overcorrected, 700 at
     46px across a full-width navy field read as heavy rather than
     authoritative) → DM Sans 500. Now that the face is serif again, 500 is the
     wrong end of that correction — Source Serif at 500 goes thin and loses the
     field. 600 is the value that was right before, for the same reason. */
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
