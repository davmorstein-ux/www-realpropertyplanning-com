// Simplified page content for the Plan Ahead path (/planning-before-a-crisis),
// Oct 23, 2026. Same pattern as Helping an Aging Parent and Handling an
// Estate: a plain title, a short answer and three steps with images on each
// topic page, and a plain label and photo for each hub choice. The full
// original text stays on every page under "More on this"
// (PlanningSubPageLayout folds it), so nothing is lost for search engines or
// AI tools.
//
// Images: src/assets/plan-ahead/ — no people, faces, hands or lettering. Hub
// images 800x500 WebP, step images 480x480 WebP. A step without an image
// renders text only until its image arrives.
//
// Wording rule: the site never speaks as "we" (that includes addresses: the
// sixth page moved from how-we-can-help to how-this-site-helps on Oct 23).
import type { SimpleTopic, SimpleChoice, NotSureBar } from "@/lib/simple-topics";
import hubWhyPlanNow from "@/assets/plan-ahead/hub-why-plan-now.webp";
import hubConversation from "@/assets/plan-ahead/hub-conversation.webp";
import hubPapers from "@/assets/plan-ahead/hub-papers.webp";
import hubTheHouse from "@/assets/plan-ahead/hub-the-house.webp";
import hubMoveComing from "@/assets/plan-ahead/hub-move-coming.webp";
import hubThisSite from "@/assets/plan-ahead/hub-this-site.webp";
import whyPlan1 from "@/assets/plan-ahead/why-plan-1.webp";
import whyPlan2 from "@/assets/plan-ahead/why-plan-2.webp";
import whyPlan3 from "@/assets/plan-ahead/why-plan-3.webp";
import conversation1 from "@/assets/plan-ahead/conversation-1.webp";
import conversation2 from "@/assets/plan-ahead/conversation-2.webp";
import conversation3 from "@/assets/plan-ahead/conversation-3.webp";
import papers1 from "@/assets/plan-ahead/papers-1.webp";
import papers2 from "@/assets/plan-ahead/papers-2.webp";
import papers3 from "@/assets/plan-ahead/papers-3.webp";
import house1 from "@/assets/plan-ahead/house-1.webp";
import house2 from "@/assets/plan-ahead/house-2.webp";
import house3 from "@/assets/plan-ahead/house-3.webp";
import move1 from "@/assets/plan-ahead/move-1.webp";
import move2 from "@/assets/plan-ahead/move-2.webp";
import move3 from "@/assets/plan-ahead/move-3.webp";
import thisSite1 from "@/assets/plan-ahead/this-site-1.webp";
import thisSite2 from "@/assets/plan-ahead/this-site-2.webp";
import thisSite3 from "@/assets/plan-ahead/this-site-3.webp";

export const PLAN_HUB_PATH = "/planning-before-a-crisis";

const P = PLAN_HUB_PATH;

export const PLAN_SIMPLE_TOPICS: Record<string, SimpleTopic> = {
  [`${P}/why-planning-early`]: {
    title: "Why Plan Before a Crisis",
    short:
      "Decisions made in a hurry cost families money and peace. Planning while everyone is well keeps choices open, can avoid a court process, and lets your parent decide for themselves.",
    steps: [
      { title: "Have one easy conversation", text: "Ask what they'd want if living alone got hard. No agenda; just listen.", image: whyPlan1 },
      { title: "Get the legal papers signed", text: "Powers of attorney and a will or trust, signed while your parent still can.", image: whyPlan2 },
      { title: "Know what the house is worth", text: "A realistic value and a sense of its condition, before anyone needs to sell.", image: whyPlan3 },
    ],
  },
  [`${P}/conversations-to-have`]: {
    title: "Starting the Conversation",
    short:
      "Most families never ask a parent what they actually want. Start with one gentle question, listen, and write down what they say.",
    steps: [
      { title: "Ask where they want to live", text: "Stay home as long as possible, or open to moving someday?", image: conversation1 },
      { title: "Ask who should decide if they can't", text: "Who handles money and medical choices, and is it in writing?", image: conversation2 },
      { title: "Ask about the house", text: "Should it go to someone, be sold, or help pay for care?", image: conversation3 },
    ],
  },
  [`${P}/legal-documents`]: {
    title: "The Papers That Matter Most",
    short: "Four documents let family act when a parent can't. They must be signed while your parent can still sign.",
    steps: [
      { title: "Sign a durable power of attorney", text: "It lets someone handle money, and sell the house if needed. For real estate, have it notarized.", image: papers1 },
      { title: "Name a healthcare decision-maker", text: "A healthcare power of attorney and directive say who decides and what your parent wants.", image: papers2 },
      { title: "Update the will, trust and beneficiaries", text: "Make sure they're current, and that the beneficiaries on each account match the plan.", image: papers3 },
    ],
  },
  [`${P}/property-questions`]: {
    title: "Questions About the House",
    short:
      "The house is usually the biggest asset. Know what it's worth, what it needs and what should happen to it, before anyone has to decide in a hurry.",
    steps: [
      { title: "Get a realistic value", text: "An appraisal gives everyone the same number instead of an online guess.", image: house1 },
      { title: "Walk through it for repairs", text: "Find out what matters while there's still time to get bids.", image: house2 },
      { title: "Write down the plan for the house", text: "Who inherits it, and what heirs should do if they disagree. Ask an attorney and a CPA about the taxes.", image: house3 },
    ],
  },
  [`${P}/when-a-move-is-coming`]: {
    title: "When a Move Is Coming",
    short:
      "If you can see a move ahead, use the time. Visit places now, have the house evaluated, and get legal papers signed before health or memory makes that harder.",
    steps: [
      { title: "Visit places and join waitlists", text: "Assisted living, adult family homes, memory care. Ask about cost and openings.", image: move1 },
      { title: "Have the house evaluated", text: "Know what it could bring toward care, and what it needs first.", image: move2 },
      { title: "Get legal papers signed now", text: "Once memory declines, it may be too late to sign.", image: move3 },
    ],
  },
  [`${P}/how-this-site-helps`]: {
    title: "How This Site Helps",
    short:
      "Real Property Planning is a free guide. It explains your options and lists independent professionals you contact and hire directly. It provides no services itself.",
    steps: [
      { title: "Read the guide for your situation", text: "Short, plain-language guides for Washington families.", image: thisSite1 },
      { title: "Make a free plan", text: "Answer a few questions and get your next steps in order.", image: thisSite2 },
      { title: "Contact a professional directly", text: "Every person listed is someone the site's owner has met in person.", image: thisSite3 },
    ],
  },
};

/** Hub photo buttons, in page order (the six topics). */
export const PLAN_HUB_CHOICES: SimpleChoice[] = [
  { to: `${P}/why-planning-early`, label: "Why plan now?", image: hubWhyPlanNow },
  { to: `${P}/conversations-to-have`, label: "How do I start the talk?", image: hubConversation },
  { to: `${P}/legal-documents`, label: "Which papers do we need?", image: hubPapers },
  { to: `${P}/property-questions`, label: "What about the house?", image: hubTheHouse },
  { to: `${P}/when-a-move-is-coming`, label: "A move may be coming soon", image: hubMoveComing },
  { to: `${P}/how-this-site-helps`, label: "What this site does", image: hubThisSite },
];

/** Full-width bar under the six buttons. */
export const PLAN_NOT_SURE: NotSureBar = { to: "/my-plan", label: "Not sure where to start?", sub: "Make a free step-by-step plan" };
