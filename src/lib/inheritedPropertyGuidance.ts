/**
 * Guidance items relocated from /selling-an-inherited-home.
 *
 * That page had grown into a 558-line wall: six pathway links, then ten
 * "Common Challenges", ten "Educational Compass" bullets, eight "Common
 * Mistakes", a five-step action plan, and a "Continue Your Journey" block
 * that linked to THE SAME SIX PAGES as the pathways. The hub was answering
 * the questions its own sub-pages exist to answer.
 *
 * All 18 items were moved to the sub-page each one actually belongs to, rather
 * than deleted — the text is indexed and carries real search value, so losing
 * it would cost rankings for no gain. "Feeling overwhelmed" was originally
 * going to stay on the hub, but the hub no longer has a section to hold it, so
 * it sits with the first-steps page where overwhelm is most likely felt.
 *
 * ONE COPY, MANY PAGES. Every item lives here and nowhere else. Pasting them
 * into six page files is how the hero bands ended up with eighty-five
 * hand-rolled variants; a page declares which slug it is and gets its subset.
 *
 * `page` must match the route path without its leading slash.
 */

export interface GuidanceItem {
  title: string;
  body: string;
  kind: "challenge" | "mistake";
  page: string;
}

export const GUIDANCE_ITEMS: GuidanceItem[] = [
  { title: "Emotional attachment to the home", body: "Memories live in the walls. Honoring that attachment is part of moving forward.", kind: "challenge", page: "what-to-do-with-the-house" },
  { title: "Feeling overwhelmed", body: "One decision at a time, in a clear order, usually replaces overwhelm with progress.", kind: "challenge", page: "executor-responsibilities-first-steps" },
  { title: "Family disagreements", body: "Shared expectations and a clear written plan typically reduce friction.", kind: "challenge", page: "executor-responsibilities-first-steps" },
  { title: "Uncertainty about legal authority", body: "Knowing who can make decisions — and when — usually clarifies the path.", kind: "challenge", page: "estate-probate-inherited-property" },
  { title: "Occupancy concerns", body: "When someone still lives in the home, planning respects both the resident and the property.", kind: "challenge", page: "what-to-do-with-the-house" },
  { title: "Deciding whether repairs are worthwhile", body: "Not every repair adds value. A professional opinion clarifies what truly matters.", kind: "challenge", page: "preparing-home-for-sale-during-transition" },
  { title: "Organizing belongings", body: "Working room by room, in small sessions, usually feels more manageable.", kind: "challenge", page: "preparing-home-for-sale-during-transition" },
  { title: "Time pressure", body: "Most timelines are more flexible than they first appear. A short pause to plan often saves months.", kind: "challenge", page: "estate-probate-inherited-property" },
  { title: "Property maintenance and security", body: "Vacant homes need active care, insurance review, and a clear monitoring plan.", kind: "challenge", page: "preparing-home-for-sale-during-transition" },
  { title: "Fear of making expensive mistakes", body: "Most costly mistakes are avoidable with one good conversation early.", kind: "challenge", page: "building-your-trusted-professional-team" },
  { title: "Making rushed property decisions", body: "Quick decisions made under stress often cost more than a short pause to plan.", kind: "mistake", page: "what-to-do-with-the-house" },
  { title: "Guessing the home's value", body: "A certified appraisal usually replaces guesswork with defensible clarity.", kind: "mistake", page: "date-of-death-valuation-property-appraisals" },
  { title: "Ignoring probate or legal coordination", body: "Authority and process steps usually need to be clear before listing.", kind: "mistake", page: "estate-probate-inherited-property" },
  { title: "Spending too much on unnecessary repairs", body: "Many updates do not return their cost. Prioritization is essential.", kind: "mistake", page: "preparing-home-for-sale-during-transition" },
  { title: "Delaying communication between heirs", body: "Silence often becomes the source of the conflict families most want to avoid.", kind: "mistake", page: "executor-responsibilities-first-steps" },
  { title: "Ignoring insurance and maintenance issues", body: "Vacant property coverage, security, and basic upkeep protect the eventual sale.", kind: "mistake", page: "preparing-home-for-sale-during-transition" },
  { title: "Waiting too long to seek guidance", body: "A short conversation early usually prevents bigger problems later.", kind: "mistake", page: "building-your-trusted-professional-team" },
  { title: "Trying to handle everything alone", body: "A small, coordinated team typically reduces stress and protects the outcome.", kind: "mistake", page: "building-your-trusted-professional-team" },
]; 

export const guidanceFor = (page: string, kind: GuidanceItem["kind"]) =>
  GUIDANCE_ITEMS.filter((i) => i.page === page && i.kind === kind);
