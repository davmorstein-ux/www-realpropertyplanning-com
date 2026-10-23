// Simplified page content for the Handling an Estate path
// (/estate-probate-inherited-property), Oct 23, 2026. Same pattern the site
// owner approved for Helping an Aging Parent on Oct 22: a plain title, a short
// answer and three steps with images on each topic page, and a plain label and
// photo for each hub choice. The full original text stays on every page under
// "More on this" (EstateSubPageLayout folds it), so nothing is lost for search
// engines or AI tools.
//
// Images: src/assets/estate/ — no people, faces, hands or lettering. Hub
// images 800x500 WebP, step images 480x480 WebP. A step without an image
// renders text only until its image arrives.
//
// Wording rule: the site never speaks as "we", and never refers anyone to an
// attorney (it explains what an attorney does; readers choose their own).
import hubFirstSteps from "@/assets/estate/hub-first-steps.webp";
import hubProbate from "@/assets/estate/hub-probate.webp";
import hubPropertyValue from "@/assets/estate/hub-property-value.webp";
import hubWhatToDo from "@/assets/estate/hub-what-to-do.webp";
import hubPreparing from "@/assets/estate/hub-preparing.webp";
import hubProfessionalTeam from "@/assets/estate/hub-professional-team.webp";
import firstSteps1 from "@/assets/estate/first-steps-1.webp";
import firstSteps2 from "@/assets/estate/first-steps-2.webp";
import firstSteps3 from "@/assets/estate/first-steps-3.webp";
import probate1 from "@/assets/estate/probate-1.webp";
import probate2 from "@/assets/estate/probate-2.webp";
import probate3 from "@/assets/estate/probate-3.webp";
import propertyValue1 from "@/assets/estate/property-value-1.webp";

export interface SimpleStep {
  title: string;
  text: string;
  image?: string;
}

export interface SimpleTopic {
  title: string;
  short: string;
  steps: SimpleStep[];
}

export const ESTATE_HUB_PATH = "/estate-probate-inherited-property";

export const ESTATE_SIMPLE_TOPICS: Record<string, SimpleTopic> = {
  "/estate-probate-inherited-property/first-steps": {
    title: "The First Weeks After a Death",
    short:
      "Most things can wait. In the first weeks, secure the house, find the important papers and order death certificates. Don't sell, close or give away anything yet.",
    steps: [
      { title: "Lock up and call the insurer", text: "Change the locks if you're not sure who has keys, and tell the home insurer the house may sit empty.", image: firstSteps1 },
      { title: "Find the original will and papers", text: "The original will, any trust, deeds, account statements and insurance policies. Don't close accounts yet.", image: firstSteps2 },
      { title: "Order 8 to 12 death certificates", text: "Banks, Social Security, insurers, the court and the title company each need one.", image: firstSteps3 },
    ],
  },
  "/estate-probate-inherited-property/probate-and-legal-authority": {
    title: "Probate and Who's in Charge",
    short:
      "Probate is the court process that puts someone in charge of the estate. In Washington, a house in the person's name alone usually needs it. Unless the house is in a trust, no one can sell it until the court appoints that person. Being named in the will isn't enough.",
    steps: [
      { title: "Check how the house is owned", text: "In their name alone, in a trust, or shared with someone else.", image: probate1 },
      { title: "Find out who is in charge", text: "The executor named in the will, the trustee of a trust, or, with no will, usually the closest family.", image: probate2 },
      { title: "Talk to a probate attorney", text: "They can tell you quickly whether probate is needed and how long it may take.", image: probate3 },
    ],
  },
  "/estate-probate-inherited-property/property-value": {
    title: "What the House Is Worth",
    short:
      "The estate needs the home's value as of the date of death. It sets the heirs' tax basis and goes into the estate inventory. A certified appraisal holds up better than an online estimate.",
    steps: [
      { title: "Order a date-of-death appraisal", text: "A certified appraiser values the home as it stood on the date of death.", image: propertyValue1 },
      { title: "Do it soon", text: "The value is easiest to support when the appraisal is done soon after the death." },
      { title: "Share it with the heirs and the attorney", text: "It goes into the inventory and gives everyone one number to work from." },
    ],
  },
  "/estate-probate-inherited-property/what-to-do-with-the-property": {
    title: "Sell, Keep or Rent the House",
    short:
      "There's no single right answer. Start with the facts: what the house is worth, what it needs, what is owed and what the will says. Selling is the most common choice. Keeping or renting brings real costs and work.",
    steps: [
      { title: "Get the facts first", text: "The value, the condition, any mortgage or liens, and what the will says." },
      { title: "Ask each heir what they want", text: "If one heir wants to keep the house, they usually buy out the others at the appraised value." },
      { title: "Price out keeping or renting", text: "Taxes, insurance, repairs and landlord work add up. Renting is a business, not passive income." },
    ],
  },
  "/estate-probate-inherited-property/preparing-the-property": {
    title: "Getting the House Ready",
    short:
      "The house doesn't need to be perfect. Clear it out, see what it needs, and fix only what pays off: safety items and anything an inspection or a lender will flag.",
    steps: [
      { title: "Clear out the belongings", text: "Family takes keepsakes first, then an estate sale, donation or haul-away." },
      { title: "Walk through and list what it needs", text: "Safety issues, worn systems like the roof and furnace, and cosmetic wear." },
      { title: "Fix what pays, skip the rest", text: "Fresh paint and clean carpets usually pay off. Big remodels usually don't." },
    ],
  },
  "/estate-probate-inherited-property/professional-team": {
    title: "The People Who Can Help",
    short:
      "An estate involves legal, money and real estate questions. Bring in the right people in the right order, and keep them talking to each other.",
    steps: [
      { title: "Start with a probate attorney", text: "They confirm who has authority and what the court needs." },
      { title: "Get an appraisal before listing", text: "Know the value first, then make decisions." },
      { title: "Add others as needed", text: "A CPA for taxes, a broker to sell, an estate liquidator for the contents." },
    ],
  },
};

/** Hub photo buttons, in page order (the six topics). */
export const ESTATE_HUB_CHOICES: { to: string; label: string; image: string }[] = [
  { to: "/estate-probate-inherited-property/first-steps", label: "Someone just passed away", image: hubFirstSteps },
  { to: "/estate-probate-inherited-property/probate-and-legal-authority", label: "Who's in charge, and is probate needed?", image: hubProbate },
  { to: "/estate-probate-inherited-property/property-value", label: "What is the house worth?", image: hubPropertyValue },
  { to: "/estate-probate-inherited-property/what-to-do-with-the-property", label: "Sell, keep or rent the house?", image: hubWhatToDo },
  { to: "/estate-probate-inherited-property/preparing-the-property", label: "Getting the house ready to sell", image: hubPreparing },
  { to: "/estate-probate-inherited-property/professional-team", label: "Who can help", image: hubProfessionalTeam },
];

/** Full-width bar under the six buttons. */
export const ESTATE_NOT_SURE = { to: "/my-plan#estate:", label: "Not sure where to start?", sub: "Make a free step-by-step plan" };
