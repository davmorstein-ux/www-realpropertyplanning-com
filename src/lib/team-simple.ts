// Simplified Building Your Professional Team page (/building-your-professional-team),
// Oct 23, 2026. Six photo buttons ask by need ("Selling the house") rather than
// by job title, because families know their problem before they know which
// professional handles it. Every profession is still listed A-Z under the
// buttons (BuildingYourTrustedProfessionalTeam.tsx).
//
// Images: src/assets/team/, cut from images the site owner supplied for the
// Estate and Plan Ahead paths (no people, faces, hands or lettering). Replace
// any of them by dropping in a new 800x500 WebP with the same name.
import type { SimpleChoice, NotSureBar } from "@/lib/simple-topics";
import hubLegal from "@/assets/team/hub-legal.webp";
import hubHouseWorth from "@/assets/team/hub-house-worth.webp";
import hubSelling from "@/assets/team/hub-selling.webp";
import hubMoney from "@/assets/team/hub-money.webp";
import hubCare from "@/assets/team/hub-care.webp";
import hubMoving from "@/assets/team/hub-moving.webp";

export const TEAM_HUB_CHOICES: SimpleChoice[] = [
  { to: "/for-attorneys", label: "Wills, probate or legal papers", image: hubLegal },
  { to: "/real-estate-appraiser", label: "What is the house worth?", image: hubHouseWorth },
  { to: "/realtor", label: "Selling the house", image: hubSelling },
  { to: "/for-cpas", label: "Taxes and money questions", image: hubMoney },
  { to: "/aging-life-care-managers", label: "Choosing care or housing for a parent", image: hubCare },
  { to: "/senior-move-managers", label: "Clearing out and moving", image: hubMoving },
];

/** Full-width bar under the six buttons. */
export const TEAM_NOT_SURE: NotSureBar = {
  to: "/contact",
  label: "Not sure who you need?",
  sub: "Ask a question through the contact form",
};
