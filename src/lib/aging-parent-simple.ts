// Simplified page content for /helping-an-aging-parent (approved by the site
// owner Oct 22, 2026): a plain title, a short answer and three steps with
// images for each topic page, and a plain label and photo for each hub choice.
// The full original text stays on every page under "More on this", so nothing
// is lost for search engines or AI tools. Images: src/assets/aging-parent/
// (no people, faces, hands or lettering in any of them).
import hub_A from "@/assets/aging-parent/hub-living-independently.webp";
import stayingSafeAtHome1 from "@/assets/aging-parent/staying-safe-at-home-1.webp";
import stayingSafeAtHome2 from "@/assets/aging-parent/staying-safe-at-home-2.webp";
import stayingSafeAtHome3 from "@/assets/aging-parent/staying-safe-at-home-3.webp";
import earlyPlanning1 from "@/assets/aging-parent/early-planning-1.webp";
import earlyPlanning2 from "@/assets/aging-parent/early-planning-2.webp";
import earlyPlanning3 from "@/assets/aging-parent/early-planning-3.webp";
import homeModifications1 from "@/assets/aging-parent/home-modifications-1.webp";
import homeModifications2 from "@/assets/aging-parent/home-modifications-2.webp";
import homeModifications3 from "@/assets/aging-parent/home-modifications-3.webp";
import longTermFinancialPrep1 from "@/assets/aging-parent/long-term-financial-prep-1.webp";
import longTermFinancialPrep2 from "@/assets/aging-parent/long-term-financial-prep-2.webp";
import longTermFinancialPrep3 from "@/assets/aging-parent/long-term-financial-prep-3.webp";
import hub_B from "@/assets/aging-parent/hub-needs-help-at-home.webp";
import inHomeCare1 from "@/assets/aging-parent/in-home-care-1.webp";
import inHomeCare2 from "@/assets/aging-parent/in-home-care-2.webp";
import inHomeCare3 from "@/assets/aging-parent/in-home-care-3.webp";
import familyCoordination1 from "@/assets/aging-parent/family-coordination-1.webp";
import familyCoordination2 from "@/assets/aging-parent/family-coordination-2.webp";
import familyCoordination3 from "@/assets/aging-parent/family-coordination-3.webp";
import safetyModifications1 from "@/assets/aging-parent/safety-modifications-1.webp";
import safetyModifications2 from "@/assets/aging-parent/safety-modifications-2.webp";
import safetyModifications3 from "@/assets/aging-parent/safety-modifications-3.webp";
import respiteOptions1 from "@/assets/aging-parent/respite-options-1.webp";
import respiteOptions2 from "@/assets/aging-parent/respite-options-2.webp";
import respiteOptions3 from "@/assets/aging-parent/respite-options-3.webp";
import hub_C from "@/assets/aging-parent/hub-exploring-care-options.webp";
import typesOfHousing1 from "@/assets/aging-parent/types-of-housing-1.webp";
import typesOfHousing2 from "@/assets/aging-parent/types-of-housing-2.webp";
import typesOfHousing3 from "@/assets/aging-parent/types-of-housing-3.webp";
import comparingCosts1 from "@/assets/aging-parent/comparing-costs-1.webp";
import comparingCosts2 from "@/assets/aging-parent/comparing-costs-2.webp";
import comparingCosts3 from "@/assets/aging-parent/comparing-costs-3.webp";
import eligibility1 from "@/assets/aging-parent/eligibility-1.webp";
import eligibility2 from "@/assets/aging-parent/eligibility-2.webp";
import eligibility3 from "@/assets/aging-parent/eligibility-3.webp";
import havingTheConversation1 from "@/assets/aging-parent/having-the-conversation-1.webp";
import havingTheConversation2 from "@/assets/aging-parent/having-the-conversation-2.webp";
import havingTheConversation3 from "@/assets/aging-parent/having-the-conversation-3.webp";
import hub_D from "@/assets/aging-parent/hub-health-crisis.webp";
import hospitalDischarge1 from "@/assets/aging-parent/hospital-discharge-1.webp";
import hospitalDischarge2 from "@/assets/aging-parent/hospital-discharge-2.webp";
import hospitalDischarge3 from "@/assets/aging-parent/hospital-discharge-3.webp";
import urgentHousing1 from "@/assets/aging-parent/urgent-housing-1.webp";
import urgentHousing2 from "@/assets/aging-parent/urgent-housing-2.webp";
import urgentHousing3 from "@/assets/aging-parent/urgent-housing-3.webp";
import legalAuthority1 from "@/assets/aging-parent/legal-authority-1.webp";
import legalAuthority2 from "@/assets/aging-parent/legal-authority-2.webp";
import legalAuthority3 from "@/assets/aging-parent/legal-authority-3.webp";
import managingTheHome1 from "@/assets/aging-parent/managing-the-home-1.webp";
import managingTheHome2 from "@/assets/aging-parent/managing-the-home-2.webp";
import managingTheHome3 from "@/assets/aging-parent/managing-the-home-3.webp";
import hub_E from "@/assets/aging-parent/hub-finances-and-legal.webp";
import powerOfAttorney1 from "@/assets/aging-parent/power-of-attorney-1.webp";
import powerOfAttorney2 from "@/assets/aging-parent/power-of-attorney-2.webp";
import powerOfAttorney3 from "@/assets/aging-parent/power-of-attorney-3.webp";
import willsAndEstatePlan1 from "@/assets/aging-parent/wills-and-estate-plan-1.webp";
import willsAndEstatePlan2 from "@/assets/aging-parent/wills-and-estate-plan-2.webp";
import willsAndEstatePlan3 from "@/assets/aging-parent/wills-and-estate-plan-3.webp";
import payingForCare1 from "@/assets/aging-parent/paying-for-care-1.webp";
import payingForCare2 from "@/assets/aging-parent/paying-for-care-2.webp";
import payingForCare3 from "@/assets/aging-parent/paying-for-care-3.webp";
import propertyDecisions1 from "@/assets/aging-parent/property-decisions-1.webp";
import propertyDecisions2 from "@/assets/aging-parent/property-decisions-2.webp";
import propertyDecisions3 from "@/assets/aging-parent/property-decisions-3.webp";
import hubNotSure from "@/assets/aging-parent/hub-not-sure.webp";

export interface SimpleStep { title: string; text: string; image: string }
export interface SimpleTopic { title: string; short: string; steps: SimpleStep[] }

/** Topic pages: plain title (the page's h1), short answer, three steps. */
export const SIMPLE_TOPICS: Record<string, SimpleTopic> = {
  "/helping-an-aging-parent/living-independently/staying-safe-at-home": {
    title: "Staying Safe at Home",
    short: "Most falls happen in the bathroom, on stairs and at the front entry. Simple, low-cost changes like grab bars, brighter lights and clear floors lower the risk a lot.",
    steps: [
      { title: "Look for trip hazards", text: "Walk through the home and clear loose rugs, cords and clutter from hallways and stairs.", image: stayingSafeAtHome1 },
      { title: "Add grab bars and better lighting", text: "Put grab bars by the tub and toilet, and bright lights and night lights along halls and stairs.", image: stayingSafeAtHome2 },
      { title: "Consider a medical alert button", text: "A wearable button lets your parent call for help after a fall, even if they can't reach a phone.", image: stayingSafeAtHome3 },
    ],
  },
  "/helping-an-aging-parent/living-independently/early-planning": {
    title: "Talking About the Future",
    short: "Talk early, while nothing is urgent. The goal is to learn what your parent would want, not to change anything today.",
    steps: [
      { title: "Pick a calm time to talk", text: "A simple opening works: “I want to make sure I understand what you'd want if things changed.”", image: earlyPlanning1 },
      { title: "Ask what they'd want if things changed", text: "Stay home with help, move in with family, or move to a care home? And who should decide if they can't?", image: earlyPlanning2 },
      { title: "Find where the important papers are", text: "The will, power of attorney, insurance and account information. Know where they are before they're needed.", image: earlyPlanning3 },
    ],
  },
  "/helping-an-aging-parent/living-independently/home-modifications": {
    title: "Making the Home Work Longer",
    short: "With the right changes, many parents can stay home longer. Small fixes cost a few hundred dollars; bigger projects like a new shower or a ramp can run several thousand or more.",
    steps: [
      { title: "Start with the bathroom and entry", text: "A walk-in shower with a bench, grab bars and a step-free entry make the biggest difference.", image: homeModifications1 },
      { title: "Get a contractor's quote", text: "Get written bids. A Certified Aging-in-Place Specialist (CAPS) is a contractor trained in this work.", image: homeModifications2 },
      { title: "Consider a ramp or stairlift", text: "A ramp, a stairlift or a main-floor bedroom keeps steps from forcing a move.", image: homeModifications3 },
    ],
  },
  "/helping-an-aging-parent/living-independently/long-term-financial-prep": {
    title: "Planning for Care Costs",
    short: "Care costs more than most families expect. In Washington, assisted living runs about $7,550 a month, and Medicare does not pay for long-term care.",
    steps: [
      { title: "Gather the financial papers", text: "Find bank, retirement, insurance and property records, plus the will and power of attorney.", image: longTermFinancialPrep1 },
      { title: "Learn what care costs", text: "Washington medians: in-home care about $45 an hour; a nursing home about $13,155 a month (CareScout 2025).", image: longTermFinancialPrep2 },
      { title: "Talk with an elder law attorney", text: "Especially if Apple Health (Medicaid) may be needed someday. The rules on assets and gifts are strict.", image: longTermFinancialPrep3 },
    ],
  },
  "/helping-an-aging-parent/needs-help-at-home/in-home-care": {
    title: "Help at Home",
    short: "In-home care can cover anything from meals and errands to bathing and nursing visits. In Washington it costs about $45 an hour.",
    steps: [
      { title: "Decide what help is needed", text: "Companionship and chores, personal care like bathing and dressing, or nursing visits?", image: inHomeCare1 },
      { title: "Choose an agency or a caregiver", text: "Agencies handle hiring and backup but cost more. Hiring on your own costs less, but you manage taxes and scheduling.", image: inHomeCare2 },
      { title: "Plan for the cost", text: "Full-time help (44 hours a week) runs about $8,580 a month. Apple Health may pay for those who qualify.", image: inHomeCare3 },
    ],
  },
  "/helping-an-aging-parent/needs-help-at-home/family-coordination": {
    title: "Sharing the Care",
    short: "When several family members help, a little structure prevents most of the friction: one main contact, one shared calendar and regular check-ins.",
    steps: [
      { title: "Choose one main contact", text: "One person talks with doctors and caregivers and passes news to everyone else.", image: familyCoordination1 },
      { title: "Keep a shared calendar", text: "Track appointments, medications and who is doing what, where everyone can see it.", image: familyCoordination2 },
      { title: "Meet as a family", text: "Check in regularly. If siblings disagree, a care manager or family mediator can help.", image: familyCoordination3 },
    ],
  },
  "/helping-an-aging-parent/needs-help-at-home/safety-modifications": {
    title: "A Safer Home for Care",
    short: "When a parent needs help at home, the bathroom and the path to it at night matter most. Small changes are often do-it-yourself; bigger ones need a contractor.",
    steps: [
      { title: "Start with the bathroom", text: "Grab bars, a shower bench, non-slip mats and a raised toilet seat.", image: safetyModifications1 },
      { title: "Light the path at night", text: "A clear, lit path from bed to bathroom prevents many night-time falls.", image: safetyModifications2 },
      { title: "Ask about help paying", text: "Your local Area Agency on Aging knows the home modification programs in your county.", image: safetyModifications3 },
    ],
  },
  "/helping-an-aging-parent/needs-help-at-home/respite-options": {
    title: "Taking a Break",
    short: "Caregivers need breaks to keep going. Respite care covers for you for a few hours or a few weeks, and Washington has a program that can help pay.",
    steps: [
      { title: "Bring in a respite caregiver", text: "A paid caregiver comes to the home so you can step away.", image: respiteOptions1 },
      { title: "Try an adult day program", text: "Daytime activities, meals and supervision in a group setting.", image: respiteOptions2 },
      { title: "Ask about caregiver support", text: "Washington's Family Caregiver Support Program, through your Area Agency on Aging, can help eligible caregivers pay for respite.", image: respiteOptions3 },
    ],
  },
  "/helping-an-aging-parent/exploring-care-options/types-of-housing": {
    title: "Senior Housing, Explained",
    short: "Washington has five main kinds of senior housing. The biggest difference between them is how much care is included.",
    steps: [
      { title: "Independent living", text: "Apartments with meals and activities, but no care included.", image: typesOfHousing1 },
      { title: "Adult family homes and assisted living", text: "An adult family home is a regular house caring for up to 6 residents (8 with DSHS approval). Assisted living is larger, with staff around the clock.", image: typesOfHousing2 },
      { title: "Memory care and nursing homes", text: "Memory care is a secure setting for dementia. Nursing homes are for people who need ongoing medical care.", image: typesOfHousing3 },
    ],
  },
  "/helping-an-aging-parent/exploring-care-options/comparing-costs": {
    title: "Comparing Costs",
    short: "Prices vary widely, and the base rate is rarely the full cost. Compare all-in monthly prices, and ask how they rise as care needs grow.",
    steps: [
      { title: "Ask for the all-in monthly price", text: "Care levels, medications and transportation are often charged on top of the base rate.", image: comparingCosts1 },
      { title: "Compare at least three places", text: "Ask each one the same questions and line up the answers side by side.", image: comparingCosts2 },
      { title: "Know how it gets paid", text: "Savings and home equity, long-term care insurance, veterans benefits or Apple Health (Medicaid).", image: comparingCosts3 },
    ],
  },
  "/helping-an-aging-parent/exploring-care-options/eligibility": {
    title: "What Your Parent Qualifies for",
    short: "Eligibility depends on two things: how much daily help your parent needs, and their income and assets.",
    steps: [
      { title: "Medical need", text: "Programs look at help needed with bathing, dressing, eating, moving, toileting and continence.", image: eligibility1 },
      { title: "Apple Health (Medicaid)", text: "Pays for long-term care when countable assets are generally $2,000 or less for a single person. Gifts in the last 5 years can cause a penalty.", image: eligibility2 },
      { title: "Veterans benefits", text: "Aid & Attendance adds to the VA pension for wartime veterans and surviving spouses who need daily help.", image: eligibility3 },
    ],
  },
  "/helping-an-aging-parent/exploring-care-options/having-the-conversation": {
    title: "The Conversation",
    short: "Start with what your parent wants, not with your worries. One calm conversation is enough to begin.",
    steps: [
      { title: "Start from their wishes", text: "“I want to understand what you'd want if things changed” lands better than “I'm worried about you.”", image: havingTheConversation1 },
      { title: "Pick a quiet moment", text: "Not during a crisis, not in front of the whole family, not when anyone is tired. Listen more than you talk.", image: havingTheConversation2 },
      { title: "Get help if it stalls", text: "A geriatric care manager, social worker or family mediator can lead the conversation.", image: havingTheConversation3 },
    ],
  },
  "/helping-an-aging-parent/health-crisis/hospital-discharge": {
    title: "Leaving the Hospital",
    short: "Discharge can happen within a day or two. Ask the hospital what care your parent will need next and who arranges it. If it feels too soon, you can ask Medicare for a fast review before the discharge day.",
    steps: [
      { title: "Meet with the discharge planner", text: "Ask for a meeting with the hospital's discharge planner or social worker.", image: hospitalDischarge1 },
      { title: "Ask where your parent goes next", text: "Home with help, rehab, or a care home.", image: hospitalDischarge2 },
      { title: "Feel it is too soon?", text: "Call the number on the “Important Message from Medicare” notice before the discharge day.", image: hospitalDischarge3 },
    ],
  },
  "/helping-an-aging-parent/health-crisis/urgent-housing": {
    title: "Finding Care Quickly",
    short: "When a parent needs a place fast, the hospital social worker is your first call. Adult family homes often have openings when larger places don't.",
    steps: [
      { title: "Ask the hospital social worker", text: "Finding placement is part of their job, and they know who has openings.", image: urgentHousing1 },
      { title: "Call adult family homes about openings", text: "Ask about immediate openings, the level of care, and whether they accept your parent's way of paying.", image: urgentHousing2 },
      { title: "A short-term place is OK", text: "Your parent can move to a better fit once the crisis passes. Don't sign anything you don't understand.", image: urgentHousing3 },
    ],
  },
  "/helping-an-aging-parent/health-crisis/legal-authority": {
    title: "Legal Authority in a Hurry",
    short: "To pay bills or talk with doctors for your parent, you need the right papers. If they aren't signed yet, act now while your parent can still sign.",
    steps: [
      { title: "Find the power of attorney", text: "A financial power of attorney lets you handle bills and accounts. In Washington it must say it is durable.", image: legalAuthority1 },
      { title: "Who makes medical decisions", text: "A health care power of attorney names who decides, and a HIPAA release lets doctors talk with you.", image: legalAuthority2 },
      { title: "Call an elder law attorney", text: "Papers can often be ready within days. If your parent can no longer sign, a court guardianship may be needed.", image: legalAuthority3 },
    ],
  },
  "/helping-an-aging-parent/health-crisis/managing-the-home": {
    title: "Looking After the House",
    short: "When a parent goes into the hospital or care, the house still needs looking after: locked, bills paid, mail collected. Decisions about selling can wait.",
    steps: [
      { title: "Secure the house", text: "Make sure it's locked, a trusted person has a key, and any pets are cared for.", image: managingTheHome1 },
      { title: "Collect mail and pay bills", text: "Mortgage, utilities and insurance first. With a financial power of attorney you can pay from your parent's accounts; keep records.", image: managingTheHome2 },
      { title: "Decide later about the house", text: "Selling, renting or keeping it can wait until the picture is clearer.", image: managingTheHome3 },
    ],
  },
  "/helping-an-aging-parent/finances-and-legal/power-of-attorney": {
    title: "The Key Legal Papers",
    short: "Four documents let family help when it matters: a financial power of attorney, a health care power of attorney, an advance directive and a will. Your parent has to sign them while they still can.",
    steps: [
      { title: "Financial power of attorney", text: "Names who handles banking, bills and property.", image: powerOfAttorney1 },
      { title: "Health care directive", text: "Names who makes medical decisions and records wishes about end-of-life care.", image: powerOfAttorney2 },
      { title: "Book an attorney", text: "Many prepare a basic set (power of attorney, directive and will) for a flat fee. Avoid online forms for papers this important.", image: powerOfAttorney3 },
    ],
  },
  "/helping-an-aging-parent/finances-and-legal/wills-and-estate-plan": {
    title: "Wills & Estate Plans",
    short: "A basic estate plan says who gets what and who's in charge. Beneficiary forms and how the house is titled matter as much as the will.",
    steps: [
      { title: "The will", text: "Names who receives your parent's property and who carries out their wishes.", image: willsAndEstatePlan1 },
      { title: "Check beneficiaries", text: "Life insurance and retirement accounts go to the people named on those forms, not by the will.", image: willsAndEstatePlan2 },
      { title: "Washington rules", text: "Washington is a community property state with its own estate tax. A house in one person's name usually goes through probate unless it's set up to pass another way.", image: willsAndEstatePlan3 },
    ],
  },
  "/helping-an-aging-parent/finances-and-legal/paying-for-care": {
    title: "Paying for Care",
    short: "Most families pay from savings and home equity first. Long-term care insurance, veterans benefits and Apple Health (Medicaid) can help. Medicare does not pay for long-term care.",
    steps: [
      { title: "Savings and home equity", text: "The most common starting point, and it gives the most choice.", image: payingForCare1 },
      { title: "Long-term care insurance", text: "Find the policy now. Check the waiting period, the daily benefit and how to file a claim.", image: payingForCare2 },
      { title: "Medicaid and veterans benefits", text: "Apple Health pays for those who qualify. Aid & Attendance helps eligible wartime veterans and surviving spouses.", image: payingForCare3 },
    ],
  },
  "/helping-an-aging-parent/finances-and-legal/property-decisions": {
    title: "Deciding About the House",
    short: "The house is often a parent's biggest asset. Selling, renting and keeping it each have tax and timing effects worth understanding first.",
    steps: [
      { title: "Selling", text: "A well-prepared sale can fund years of care. The home-sale tax exclusion can still apply after a move into care.", image: propertyDecisions1 },
      { title: "Renting", text: "Rent can help pay for care, but someone has to manage the property.", image: propertyDecisions2 },
      { title: "Taxes", text: "Inherited property gets a “stepped-up” tax basis, which can greatly lower capital gains. Get advice before selling.", image: propertyDecisions3 },
    ],
  },
};

/** Hub choices: the plain button label and its photo. */
export const SIMPLE_HUB: Record<string, { label: string; image: string }> = {
  "/helping-an-aging-parent/living-independently": { label: "They still live on their own", image: hub_A },
  "/helping-an-aging-parent/needs-help-at-home": { label: "They need more help at home", image: hub_B },
  "/helping-an-aging-parent/exploring-care-options": { label: "We're looking at care or housing", image: hub_C },
  "/helping-an-aging-parent/health-crisis": { label: "A health crisis just happened", image: hub_D },
  "/helping-an-aging-parent/finances-and-legal": { label: "Money and legal papers", image: hub_E },
};

/** Sixth hub button for families who don't know which choice fits. */
export const NOT_SURE_CHOICE = { label: "Not sure where to start?", to: "/my-plan", image: hubNotSure };
