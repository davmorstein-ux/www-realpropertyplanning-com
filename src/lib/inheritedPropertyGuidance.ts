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

import { CircleHelp, DollarSign, DoorOpen, Hammer, Heart, Layers, MessageCircle, Package, ShieldAlert, ShieldCheck, Timer, Users, type LucideIcon } from "lucide-react";

export interface GuidanceItem {
  title: string;
  body: string;
  kind: "challenge" | "mistake";
  page: string;
  /** Icon beside the title (Oct 27, 2026: every text tile gets an icon). */
  icon: LucideIcon;
}

export const GUIDANCE_ITEMS: GuidanceItem[] = [
  { title: "Emotional attachment to the home", body: "Memories live in the walls. Honoring that attachment is part of moving forward.", kind: "challenge", page: "what-to-do-with-the-house", icon: Heart },
  { title: "Feeling overwhelmed", body: "One decision at a time, in a clear order, usually replaces overwhelm with progress.", kind: "challenge", page: "executor-responsibilities-first-steps", icon: Layers },
  { title: "Family disagreements", body: "Shared expectations and a clear written plan typically reduce friction.", kind: "challenge", page: "executor-responsibilities-first-steps", icon: Users },
  { title: "Occupancy concerns", body: "When someone still lives in the home, planning respects both the resident and the property.", kind: "challenge", page: "what-to-do-with-the-house", icon: DoorOpen },
  { title: "Deciding whether repairs are worthwhile", body: "Not every repair adds value. A professional opinion clarifies what truly matters.", kind: "challenge", page: "preparing-home-for-sale-during-transition", icon: Hammer },
  { title: "Organizing belongings", body: "Working room by room, in small sessions, usually feels more manageable.", kind: "challenge", page: "preparing-home-for-sale-during-transition", icon: Package },
  { title: "Property maintenance and security", body: "Vacant homes need active care, insurance review, and a clear monitoring plan.", kind: "challenge", page: "preparing-home-for-sale-during-transition", icon: ShieldCheck },
  { title: "Making rushed property decisions", body: "Quick decisions made under stress often cost more than a short pause to plan.", kind: "mistake", page: "what-to-do-with-the-house", icon: Timer },
  { title: "Guessing the home's value", body: "A certified appraisal usually replaces guesswork with defensible clarity.", kind: "mistake", page: "date-of-death-valuation-property-appraisals", icon: CircleHelp },
  { title: "Spending too much on unnecessary repairs", body: "Many updates do not return their cost. Prioritization is essential.", kind: "mistake", page: "preparing-home-for-sale-during-transition", icon: DollarSign },
  { title: "Delaying communication between heirs", body: "Silence often becomes the source of the conflict families most want to avoid.", kind: "mistake", page: "executor-responsibilities-first-steps", icon: MessageCircle },
  { title: "Ignoring insurance and maintenance issues", body: "Vacant property coverage, security, and basic upkeep protect the eventual sale.", kind: "mistake", page: "preparing-home-for-sale-during-transition", icon: ShieldAlert },
]; 

export const guidanceFor = (page: string, kind: GuidanceItem["kind"]) =>
  GUIDANCE_ITEMS.filter((i) => i.page === page && i.kind === kind);
