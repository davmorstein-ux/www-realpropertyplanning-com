/**
 * How to Choose Someone to Help You With Medicare (Nov 20, 2026, the owner's
 * "go" on Claude's recommendations): a neutral guide to the kinds of Medicare
 * help, how agents are paid, the federal rules agents must follow, questions
 * to ask, and where to check a license in Washington State.
 *
 * Owner's decisions (Nov 20, 2026): its own short page (linked from
 * /medicare-vs-medicaid and /medicare-providers); NO commission dollar table
 * (the caps change every year and a 2025 court ruling questioned CMS's
 * authority to set them); neutral framing, because the site lists Medicare
 * professionals the owner has met. Never write it as a warning about agents.
 *
 * ONE SOURCE for the page and its prerender: Node-safe, plain strings only.
 *
 * Sources (checked Nov 20, 2026):
 *   - Marketing rules: Medicare.gov "Marketing rules for health plans"
 *     (rules-medicare-plans): no enrollment fee, no steering, no pressure, no
 *     signing before ready, must say how many organizations they represent
 *     before discussing benefits, no uninvited home visits, no calls/texts
 *     unless a member or permission given, no gifts over $15, no payment over
 *     the phone or online, no sales at educational events or where you get
 *     care. Report: 1-800-MEDICARE (1-800-633-4227), TTY 1-877-486-2048.
 *   - SHIBA: free, unbiased, sells nothing (Washington State Office of the
 *     Insurance Commissioner), 1-800-562-6900.
 *   - Washington Medigap switching (Plan B-N to B-N any time, no health
 *     screen) and the "no health screen" insurer list: Washington State
 *     Office of the Insurance Commissioner / SHIBA Medigap guide and plan
 *     lists. Moving from Medicare Advantage to Medigap later can still be
 *     underwritten outside guaranteed-issue situations.
 *   - OIC agent and company lookup: verify a license and see disciplinary
 *     actions and complaints (insurance.wa.gov/search-agent).
 *   - Medicare Advantage pays agents several times what a stand-alone Part D
 *     plan does (CMS fair-market-value caps, 2026 and 2027); stated without
 *     figures on purpose.
 *
 * Voice: the site never speaks as "we" or "I".
 */

export const CMH_PATH = "/choosing-a-medicare-agent";
export const CMH_PUBLISHED = "2026-11-20";
export const CMH_REVIEWED = "2026-11-20";
export const CMH_TITLE = "How to Choose Someone to Help You With Medicare";

export const CMH_SHORT =
  "Help choosing a Medicare plan is free. SHIBA, Washington's free Medicare advisers, sells nothing and charges nothing. Licensed agents and brokers are paid by the insurance companies, not by you, and Medicare does not allow them to charge an enrollment fee. Whoever you choose, ask which companies they represent and how they are paid, have them compare Original Medicare with Medicare Advantage, and check their license with the Insurance Commissioner.";

export interface Ext {
  label: string;
  href: string;
}

export const CMH_LINKS = {
  shiba: { label: "SHIBA, free Medicare help", href: "https://www.insurance.wa.gov/insurance-resources/medicare/get-free-medicare-help-shiba" },
  shibaPhone: { label: "Call SHIBA: 1-800-562-6900", href: "tel:+18005626900" },
  oicLookup: { label: "Check an agent's license (Insurance Commissioner)", href: "https://insurance.wa.gov/search-agent" },
  rules: { label: "Medicare's marketing rules", href: "https://www.medicare.gov/sign-up-change-plans/different-types-of-medicare-health-plans/rules-medicare-plans" },
  report: { label: "Report a problem: 1-800-MEDICARE", href: "tel:+18006334227" },
  planCompare: { label: "Compare plans yourself at Medicare.gov", href: "https://www.medicare.gov/plan-compare" },
} satisfies Record<string, Ext>;

export interface HelperType {
  who: string;
  what: string;
  paid: string;
}

export const CMH_TYPES: HelperType[] = [
  { who: "SHIBA counselor", what: "Free, unbiased counseling from trained volunteers through the Washington State Office of the Insurance Commissioner. Helps compare plans and apply for help with costs.", paid: "Not paid by insurers. Sells nothing." },
  { who: "Independent agent or broker", what: "Licensed to sell plans from several insurance companies, so can compare more than one company's plans.", paid: "Commissions from the insurance company, the first year and smaller ones each year you stay." },
  { who: "Company (captive) agent", what: "Works for one insurance company and offers that company's plans.", paid: "Salary, commission or both, from that company." },
  { who: "Fee-based adviser", what: "Some financial planners and consultants give Medicare advice as part of broader planning.", paid: "Paid by you. Ask for the fee in writing and whether they also receive commissions." },
];

/** From Medicare.gov's marketing rules. */
export const CMH_RULES: string[] = [
  "Charge you an enrollment fee.",
  "Steer you toward a particular plan, or pressure you to join.",
  "Ask you to sign an enrollment form before you're ready.",
  "Talk about a plan's benefits before telling you how many companies they represent.",
  "Come to your home uninvited, or call or text you unless you're a member of their plan or gave permission.",
  "Ask for bank or credit card numbers, or ask you to pay over the phone or online.",
  "Offer cash, gifts worth more than $15 or free meals to get you to join.",
  "Sell plans at a health fair or educational event, or in an exam room, hospital or pharmacy.",
];

export const CMH_QUESTIONS: string[] = [
  "Do you work for one insurance company, or are you independent?",
  "Which companies do you represent in my county, and are there major ones you can't offer?",
  "Can you compare Original Medicare with a Medigap policy against Medicare Advantage, side by side?",
  "How are you paid, and does that change depending on which plan I choose?",
  "Will I pay you anything? If so, please put it in writing.",
  "Will my doctors, specialists and hospitals be covered? Please check each one in the plan's network.",
  "Are all my prescriptions covered, at my pharmacy, and what will they cost for the year?",
  "What is my total possible cost for a year: premiums, deductibles, copays and the out-of-pocket maximum?",
  "What rules come with the plan: networks, referrals, prior approval, coverage when I travel?",
  "If my health changes, can I switch back to Original Medicare and still get a Medigap policy?",
  "Will you help me after I enroll, with the yearly review, billing problems and appeals?",
  "Can you give me a written comparison of the plans you looked at and why you suggest one?",
];

export const CMH_WARNINGS: string[] = [
  "Only Medicare Advantage is discussed, never Original Medicare with a Medigap policy.",
  "They can't say which insurance companies they represent.",
  "The pitch is mostly about extras (dental, grocery cards, gym) rather than doctors, drugs and total cost.",
  "You're told your doctors are covered without anyone checking the network.",
  "Questions about how they're paid get a vague answer.",
  "You're rushed to sign today, or encouraged to switch plans every year without a reason.",
];

export interface Fold {
  heading: string;
  paras: string[];
  links?: Ext[];
}

export const CMH_FOLDS: Fold[] = [
  {
    heading: "How Medicare agents are paid",
    paras: [
      "For Medicare Advantage and Part D drug plans, the insurance company pays the agent a commission. You pay the same premium whether you enroll through an agent, through the company or on Medicare.gov. The first-year commission is larger, and a smaller one is paid each year you stay in the plan.",
      "Medicare limits these commissions and updates the limits every year. A Medicare Advantage enrollment typically pays an agent several times what a stand-alone drug plan does. That doesn't make an agent's advice wrong, but it is a fair reason to ask how they're paid and to see Original Medicare compared too.",
      "Medigap (Medicare Supplement) policies are paid under different rules. A fee-based adviser is paid by you instead of an insurer.",
    ],
  },
  {
    heading: "Why the first choice matters most",
    paras: [
      "The six months starting the month you are 65 and enrolled in Part B is the one time a Medigap policy must be sold to you without health questions. Someone who picks Medicare Advantage first and wants to switch later may have to answer health questions and can be turned down for Medigap.",
      "Washington is more flexible than most states once you have a Medigap policy: someone in Plan B through N can switch to another Plan B through N at any time of year without health questions. The risk is in starting with Medicare Advantage and moving to Medigap later, when health questions may apply. Some insurers in Washington sell Medigap without a health screen; SHIBA keeps the current list.",
      "That is why a good adviser compares both paths at 65, not just the plan with the lowest premium this year.",
    ],
  },
  {
    heading: "What no Medicare plan pays for",
    paras: [
      "Neither Original Medicare nor a Medicare Advantage plan pays for ongoing help with daily living: assisted living, an adult family home, memory care or a long-term nursing home stay. Extra benefits some plans advertise don't change that. Long-term care is paid privately, by long-term care insurance, by WA Cares, or by Medicaid for people who qualify.",
    ],
  },
  {
    heading: "Where to check and where to report",
    paras: [
      "Every agent selling Medicare plans in Washington must hold a state insurance license. The Insurance Commissioner's lookup shows whether a license is active and lists disciplinary actions and complaints.",
      "If an agent breaks Medicare's rules, call 1-800-MEDICARE (1-800-633-4227, TTY 1-877-486-2048). For a complaint about an agent's conduct in Washington, contact the Insurance Commissioner.",
    ],
    links: [CMH_LINKS.oicLookup, CMH_LINKS.rules, CMH_LINKS.report],
  },
];

export const CMH_FAQS: { q: string; a: string }[] = [
  {
    q: "Do I have to pay a Medicare agent?",
    a: "No. Medicare does not allow agents to charge an enrollment fee for Medicare Advantage or Part D plans; the insurance company pays them. Free, unbiased help is also available from SHIBA at 1-800-562-6900. Only a fee-based adviser charges you directly, and that fee should be in writing.",
  },
  {
    q: "Is a Medicare agent or SHIBA better?",
    a: "They do different jobs. SHIBA counselors are free, sell nothing and explain all your options. A licensed agent can enroll you in a plan and help after enrollment, and an independent agent can compare several companies. Many people talk to SHIBA first and then choose an agent.",
  },
  {
    q: "Do Medicare agents get paid more for some plans?",
    a: "Yes. Commissions differ by plan type, and a Medicare Advantage enrollment typically pays more than a stand-alone drug plan. It's fair to ask any agent how they're paid and whether it changes with the plan you choose.",
  },
  {
    q: "How do I check a Medicare agent's license in Washington?",
    a: "Use the Washington State Office of the Insurance Commissioner's agent and company lookup at insurance.wa.gov. It shows whether the license is active and lists any disciplinary actions and complaints.",
  },
  {
    q: "Will a Medicare plan pay for assisted living?",
    a: "No. No Medicare plan pays for assisted living, adult family homes, memory care or long-term nursing home care. Medicaid (Apple Health) can, for people who qualify.",
  },
];

const linkText = (l?: Ext[]) => (l ? " " + l.filter((x) => x.href.startsWith("http")).map((x) => `${x.label} (${x.href})`).join("; ") : "");

export const CMH_PRERENDER_SECTIONS: string[] = [
  ...CMH_TYPES.map((t) => `${t.who}: ${t.what} How they are paid: ${t.paid}`),
  `What Medicare does not allow agents to do: ${CMH_RULES.join(" ")}`,
  `Questions to ask: ${CMH_QUESTIONS.join(" ")}`,
  `Warning signs: ${CMH_WARNINGS.join(" ")}`,
  ...CMH_FOLDS.map((f) => `${f.heading}. ${f.paras.join(" ")}${linkText(f.links)}`),
  `Free help: SHIBA, 1-800-562-6900 (${CMH_LINKS.shiba.href}). Check a license: ${CMH_LINKS.oicLookup.href}.`,
];
