/**
 * Which existing tiles and buttons get the double pulse (Oct 20, 2026,
 * approved by David on the homepage tiles first). One list, read by
 * src/components/PulseNavigator.tsx. Anything matching here (or carrying a
 * `data-pulse` attribute) pulses when clicked; the script adds `data-pulse`
 * to it at click time so the CSS in index.css applies.
 *
 * Built from an inventory of every clickable element on all 326 sitemap pages
 * (tiles = large linked cards; buttons = filled or outlined calls to action).
 * Left out on purpose, per David's spec: ordinary text links, form fields,
 * dropdowns, checkboxes, accordion rows, carousel arrows, calculator steppers
 * and toggles, filter chips, header and footer controls. To exclude one
 * element anywhere, give it `data-no-pulse`.
 *
 * The shared <Button> (src/components/ui/button.tsx) adds data-pulse itself
 * for its full-size variants, so Button-based calls to action need no entry.
 */
export const PULSE_TARGETS: string[] = [
  // Tiles: guided pathways, topic lists, next questions, roadmaps
  "a.tile-white",
  "a.interior-tile",
  "a.rpp-roadmap-list-item",
  "a.rpp-next-step",
  "a.rpp-qa-journey",
  "a.pfc-go",
  // Tiles: service, resource, profession and professional cards
  "a.marquee-hover",
  "a.card-3d",
  "a.card-3d-premium",
  "a.p1tile",
  "a.p3tile",
  "a.rpp-pr-card",
  "a.rpp-coc-card",
  // Tiles: AFH Club destinations, carousel, calculators
  "a.afh-carousel-card",
  "a.rpp-afh-dest-card",
  "a.rpp-afh-choose-main",
  "a.rpp-afh-strip",
  "a.rpp-calcswitch-card",
  "a.rpp-calcs-item",
  // Choice tiles that advance a guided tool (pulse only, never delayed: buttons)
  "button.mp-choice",
  "button.cgb-pick",
  "button.fhp-choice",
  // Calls to action: links styled as buttons
  "a.rpp-link-large.rpp-filled",
  "a.rpp-answer-cta",
  "a.rpp-afh-btn-solid",
  "a.rpp-afh-btn-outline",
  "a.rpp-contact-btn",
  "a.rpp-return-btn",
  "a.rpp-afh-return",
  "a.rpp-pr-browse",
  "a.rpp-btr",
  "a.prp-back",
  "a.prp-next",
  "a.article-resource-btn",
  "a.hbk-dl",
  "a.byb-dl",
  // Calls to action: real buttons
  "button.rpp-news-submit",
  "button.rpp-ask-send",
  "button.aps-go",
  "button.p1bar-btn",
  "button.p3bar-btn",
  "button.cafh-print",
  "button.mp-action",
  "button.rpp-apply-button",
];

export const PULSE_SELECTOR = ["[data-pulse]", ...PULSE_TARGETS].join(", ");
