/**
 * Embeddable Cost of Care calculator (Oct 6, 2026): the URLs and the snippet
 * other websites paste in. One place for both, so the share page, the embed
 * page and the tests agree.
 *
 * Two kinds of embed:
 *   /embed/cost-of-care           all six care types, with a chooser
 *   /embed/cost-of-care/<slug>    one care type (slugs from careCalculators.ts)
 *
 * The embed pages are noindex and carry no header or footer. Every link inside
 * them opens the full site in a new tab. They post their height to the parent
 * page as { type: "rpp-embed-height", height } so the optional script in the
 * snippet can size the frame; without the script the frame keeps the fixed
 * height in the snippet.
 *
 * No React here; used by pages, the share page and tests.
 */
import { CARE_CALCULATORS } from "./careCalculators";

export const SITE_ORIGIN = "https://realpropertyplanning.com";
export const EMBED_BASE = "/embed/cost-of-care";
export const EMBED_SHARE_PATH = "/calculators/embed";
export const EMBED_HEIGHT_MESSAGE = "rpp-embed-height";

/** "all" = the chooser version. */
export type EmbedChoice = "all" | string;

/** Care type the chooser opens on. AFH carries the city/county lookup, the one
    thing on the calculator no other site has. */
export const EMBED_DEFAULT_SLUG = "adult-family-home";

export const embedPath = (choice: EmbedChoice) => (choice === "all" ? EMBED_BASE : `${EMBED_BASE}/${choice}`);

export const embedOptions = (): { value: EmbedChoice; label: string }[] => [
  { value: "all", label: "All six care types, with a chooser" },
  ...CARE_CALCULATORS.map((o) => ({ value: o.slug, label: `${o.shortLabel} only` })),
];

/* Frame heights for sites that strip the resize script, measured Oct 6, 2026
   in a 375px-wide frame (the tallest case) with room to spare: on a wide page
   this leaves empty space below the card, which beats a frame that scrolls
   inside itself. The AFH versions are taller because of the city and county
   lookup; the chooser adds a row of buttons. */
const HEIGHTS = { all: 1920, afh: 1760, other: 1520 };
export const embedHeight = (choice: EmbedChoice) =>
  choice === "all" ? HEIGHTS.all : choice === "adult-family-home" ? HEIGHTS.afh : HEIGHTS.other;

/** Where the credit line under the frame points: the matching calculator page. */
export const creditPath = (choice: EmbedChoice) =>
  choice === "all" ? "/cost-of-care-calculator" : `/cost-of-care-calculator/${choice}`;

const creditLabel = (choice: EmbedChoice) => {
  const o = CARE_CALCULATORS.find((x) => x.slug === choice);
  return o ? `${o.shortLabel.toLowerCase()} cost calculator` : "cost of care calculator";
};

/**
 * The code a site owner pastes in. Three parts: the frame; a plain credit link
 * OUTSIDE the frame (a link inside an iframe belongs to our page, not theirs,
 * so it is this line that tells search engines where the tool comes from);
 * and an optional script that resizes the frame to fit.
 */
export function embedSnippet(choice: EmbedChoice): string {
  const src = `${SITE_ORIGIN}${embedPath(choice)}`;
  const title = choice === "all" ? "Washington cost of care calculator" : `Washington ${creditLabel(choice)}`;
  return [
    `<iframe src="${src}" title="${title}" width="100%" height="${embedHeight(choice)}" style="border:0;width:100%;max-width:780px;display:block;margin:0 auto" loading="lazy"></iframe>`,
    `<p style="text-align:center;font-size:14px;margin:8px 0 0">Washington <a href="${SITE_ORIGIN}${creditPath(choice)}">${creditLabel(choice)}</a> from Real Property Planning</p>`,
    `<script>window.addEventListener("message",function(e){if(e.origin!=="${SITE_ORIGIN}"||!e.data||e.data.type!=="${EMBED_HEIGHT_MESSAGE}")return;var f=document.getElementsByTagName("iframe");for(var i=0;i<f.length;i++){if(f[i].contentWindow===e.source){f[i].style.height=Math.ceil(e.data.height)+"px";}}});</script>`,
  ].join("\n");
}
