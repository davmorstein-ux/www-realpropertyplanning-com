/**
 * MY REAL PROPERTY PLAN — questions, rules and wording (Oct 18, 2026).
 *
 * The October audit's top suggestion: visitors answer a few questions and leave
 * with a plan assembled from the guides the site already has. Owner's decisions:
 *   - No AI. The plan is assembled by fixed rules from reviewed pages, so it can
 *     never state something the site hasn't published, and it costs nothing to run.
 *   - The plan is never gated. Email is optional and only joins the newsletter.
 *   - Two situations on the family side. AFH purchases stay in AFH Club (standing
 *     rule), which already has its own buyer steps.
 *
 * PRIVACY: answers stay in the browser. They are kept in the URL fragment (#...)
 * so a plan can be bookmarked or shared; browsers never send the fragment to the
 * server, and analytics records only that a plan was made and which situation.
 * Some answers touch on care and Medicaid, so keep it that way.
 *
 * Every href here must be a live page and not a redirect: src/test/myPlan.test.ts
 * checks. Edit wording and links here only; the page renders whatever this builds.
 *
 * Node-safe: no React, no "@/" imports (tests and the prerender read it).
 */

export const MY_PLAN_PATH = "/my-plan";
export const CHECKLIST_PDF = "/family-home-planning-checklist.pdf";

export type Situation = "estate" | "parent";

export interface PlanLink {
  title: string;
  href: string;
}

export interface PlanStep {
  id: string;
  title: string;
  why: string;
  links: PlanLink[];
}

export interface PlanQuestion {
  id: string;
  prompt: string;
  /** Short help shown under the question. */
  hint?: string;
  options: { value: string; label: string }[];
  /** Only ask this question when the earlier answers make it relevant. */
  showIf?: (a: Answers) => boolean;
}

export type Answers = Record<string, string>;

export const SITUATIONS: { value: Situation; label: string; sub: string }[] = [
  {
    value: "estate",
    label: "A parent has died and there's a house",
    sub: "For executors, trustees and family members: authority, the house, the sale or the keep.",
  },
  {
    value: "parent",
    label: "Helping a parent with housing or care",
    sub: "Staying home, moving to senior housing, paying for care, and what happens to the house.",
  },
];

/* ------------------------------------------------------------------ */
/* Questions                                                          */
/* ------------------------------------------------------------------ */

export const QUESTIONS: Record<Situation, PlanQuestion[]> = {
  estate: [
    {
      id: "role",
      prompt: "What is your role?",
      options: [
        { value: "executor", label: "I'm named executor in the will (or the court appointed me)" },
        { value: "family", label: "I'm a family member or heir" },
        { value: "trustee", label: "I'm the trustee of a trust that holds the house" },
        { value: "unsure", label: "I'm not sure" },
      ],
    },
    {
      id: "title",
      prompt: "How was the house owned?",
      hint: "The deed decides this. If you don't know, choose “Not sure”; the plan covers how to find out.",
      options: [
        { value: "alone", label: "In my parent's name alone" },
        { value: "trust", label: "In a trust" },
        { value: "joint", label: "Jointly with a surviving spouse, or with a transfer-on-death deed" },
        { value: "unsure", label: "Not sure" },
      ],
    },
    {
      id: "court",
      prompt: "Has a probate case been opened with the court?",
      options: [
        { value: "opened", label: "Yes, it's open" },
        { value: "not-yet", label: "Not yet" },
        { value: "unsure", label: "I don't know" },
      ],
      showIf: (a) => a.title === "alone" || a.title === "unsure",
    },
    {
      id: "goal",
      prompt: "What does the family want to do with the house?",
      options: [
        { value: "sell", label: "Sell it" },
        { value: "keep", label: "Keep it, or one of us buys it" },
        { value: "rent", label: "Rent it out" },
        { value: "undecided", label: "We haven't decided (or we disagree)" },
      ],
    },
    {
      id: "condition",
      prompt: "What shape is the house in?",
      options: [
        { value: "ready", label: "Ready to live in" },
        { value: "dated", label: "Dated, could use updates" },
        { value: "repairs", label: "Needs major repairs or a big cleanout" },
      ],
    },
    {
      id: "occupied",
      prompt: "Is anyone living there now?",
      options: [
        { value: "vacant", label: "No, it's empty" },
        { value: "family", label: "A family member" },
        { value: "tenant", label: "A tenant" },
      ],
    },
  ],
  parent: [
    {
      id: "now",
      prompt: "Which is closest to where your parent is now?",
      options: [
        { value: "independent", label: "Living on their own and managing" },
        { value: "help", label: "At home, but needs more help" },
        { value: "exploring", label: "We're considering a move to senior housing or care" },
        { value: "crisis", label: "Something sudden happened (hospital, a fall, an emergency)" },
      ],
    },
    {
      id: "home",
      prompt: "What do you expect for the house?",
      options: [
        { value: "stay", label: "My parent wants to stay in it" },
        { value: "move", label: "A move is likely" },
        { value: "unsure", label: "We don't know yet" },
      ],
    },
    {
      id: "authority",
      prompt: "Can someone legally sign for your parent if they can't?",
      hint: "Usually a durable power of attorney that covers real estate.",
      options: [
        { value: "yes", label: "Yes, there's a power of attorney" },
        { value: "no", label: "No" },
        { value: "unsure", label: "Not sure" },
      ],
    },
    {
      id: "pay",
      prompt: "How do you expect care to be paid for?",
      options: [
        { value: "private", label: "Savings, income and the house" },
        { value: "medicaid", label: "Medicaid may be needed" },
        { value: "unsure", label: "Not sure yet" },
      ],
    },
  ],
};

/** The questions to show for these answers, in order. */
export const visibleQuestions = (s: Situation, a: Answers): PlanQuestion[] =>
  QUESTIONS[s].filter((q) => !q.showIf || q.showIf(a));

export const isComplete = (s: Situation, a: Answers): boolean => visibleQuestions(s, a).every((q) => !!a[q.id]);

/* ------------------------------------------------------------------ */
/* Rules                                                              */
/* ------------------------------------------------------------------ */

const PROS: PlanStep = {
  id: "pros",
  title: "Line up the right professionals",
  why: "Most families need some combination of an attorney, a broker, a tax adviser and help with the contents. Real Property Planning lists people its founder has met in person; you choose and hire them directly.",
  links: [
    { title: "Featured professionals", href: "/featured-professionals" },
    { title: "Building your professional team", href: "/estate-probate-inherited-property/professional-team" },
  ],
};

function estatePlan(a: Answers): PlanStep[] {
  const steps: PlanStep[] = [];
  const probate = a.title === "alone" || a.title === "unsure";
  const selling = a.goal === "sell" || a.goal === "undecided";

  // 1. Authority
  if (a.title === "joint") {
    steps.push({
      id: "authority",
      title: "Confirm whether the house needs probate at all",
      why: "A house owned jointly with a survivor, or with a transfer-on-death deed, can pass without a probate case. Confirm it on the recorded deed before anyone signs anything.",
      links: [
        { title: "When probate isn't needed", href: "/washington-probate-guide/no-probate-needed" },
        { title: "Probate and legal authority", href: "/estate-probate-inherited-property/probate-and-legal-authority" },
      ],
    });
  } else if (a.title === "trust" || a.role === "trustee") {
    steps.push({
      id: "authority",
      title: "Act under the trust",
      why: "If the house is in a trust, the successor trustee usually manages and sells it without a probate case. Read the trust's terms first.",
      links: [
        { title: "When the house is in a trust", href: "/washington-probate-guide/house-in-a-trust" },
        { title: "A guide for trustees", href: "/trustees" },
      ],
    });
  } else if (a.role === "executor" && a.court === "opened") {
    steps.push({
      id: "authority",
      title: "Use your authority: the first 30 days",
      why: "With the case open, you can act for the estate. The first weeks are about securing assets, notifying people, and keeping records of everything you do.",
      links: [
        { title: "An executor's first 30 days", href: "/executor-responsibilities-first-steps/first-30-days" },
        { title: "An executor's legal duties", href: "/executor-responsibilities-first-steps/legal-duties" },
      ],
    });
  } else if (a.role === "executor") {
    steps.push({
      id: "authority",
      title: "Get your authority from the court",
      why: "Being named in the will isn't enough to sign for the house. The court has to appoint you first.",
      links: [
        { title: "Washington probate: if you're the executor", href: "/washington-probate-guide/executor" },
        { title: "Can an executor sell before probate?", href: "/guides/executor-sell-house-before-probate-washington" },
      ],
    });
  } else if (a.role === "family") {
    steps.push({
      id: "authority",
      title: "Find out who can act for the estate",
      why: "Heirs share in the estate, but only the personal representative (or trustee) can sign for the house. Find out who that is, or whether anyone has been appointed.",
      links: [
        { title: "Washington probate: if you're an heir", href: "/washington-probate-guide/heir" },
        { title: "Probate and legal authority", href: "/estate-probate-inherited-property/probate-and-legal-authority" },
      ],
    });
  } else {
    steps.push({
      id: "authority",
      title: "Work out who has authority over the house",
      why: "Everything else waits on this. The deed and any will or trust decide who can sign.",
      links: [
        { title: "The Washington probate guide (start here)", href: "/washington-probate-guide" },
        { title: "First steps after a death", href: "/estate-probate-inherited-property/first-steps" },
      ],
    });
  }

  // 2. Protect the house
  const protect: Record<string, PlanStep> = {
    vacant: {
      id: "protect",
      title: "Protect the empty house",
      why: "Standard insurance can lapse on a vacant home. Tell the insurer, keep the heat and power on, and check on it regularly.",
      links: [
        { title: "Preparing the property (vacancy and insurance)", href: "/estate-probate-inherited-property/preparing-the-property" },
        { title: "First steps with the house", href: "/guides/executor-first-steps-house" },
      ],
    },
    family: {
      id: "protect",
      title: "Agree in writing on the family member living there",
      why: "Who pays the bills, and until when, is the most common source of family disputes over an estate house.",
      links: [
        { title: "Executor property decisions", href: "/executor-responsibilities-first-steps/property-decisions" },
        { title: "When heirs disagree about selling", href: "/guides/heirs-disagree-selling-house" },
      ],
    },
    tenant: {
      id: "protect",
      title: "Keep the lease and the tenant's rights in mind",
      why: "A lease doesn't end when the owner dies. Rent and notices go through whoever has authority for the estate.",
      links: [{ title: "Executor property decisions", href: "/executor-responsibilities-first-steps/property-decisions" }],
    },
  };
  if (protect[a.occupied]) steps.push(protect[a.occupied]);

  // 3. Bills
  steps.push({
    id: "bills",
    title: "Keep the mortgage, taxes and insurance paid",
    why: "These keep running after a death. Missed payments add costs and can put the house at risk.",
    links: [
      { title: "The mortgage after a death", href: "/guides/mortgage-after-death-washington" },
      { title: "Property taxes after a death", href: "/guides/property-taxes-after-death-washington" },
    ],
  });

  // 4. Value
  steps.push({
    id: "value",
    title: "Find out what the house is worth",
    why: "The value at the date of death matters for taxes and for dividing the estate, and it's the starting point for every decision below.",
    links: [
      { title: "An appraisal before selling inherited property", href: "/guides/appraisal-before-selling-inherited-property" },
      { title: "Understanding the property's value", href: "/estate-probate-inherited-property/property-value" },
    ],
  });

  // 5. The decision
  const decide: Record<string, PlanStep> = {
    sell: {
      id: "decide",
      title: "Plan the sale",
      why: probate
        ? "In Washington, an estate house can often be sold during probate. Know the steps and how long it usually takes."
        : "A sale outside probate is usually simpler, but the steps and timing still need planning.",
      links: probate
        ? [
            { title: "Selling a house during probate", href: "/guides/sell-house-during-probate-washington" },
            { title: "How long a probate sale takes", href: "/guides/how-long-sell-probate-property" },
          ]
        : [
            { title: "Probate sale vs. trust sale", href: "/guides/probate-vs-trust-sale-washington" },
            { title: "Selling an inherited home", href: "/selling-an-inherited-home" },
          ],
    },
    keep: {
      id: "decide",
      title: "Plan how the house stays in the family",
      why: "One heir buying out the others is common. It needs a fair price everyone accepts and, usually, financing.",
      links: [
        { title: "Selling the estate house to a family member", href: "/guides/executor-buy-or-sell-estate-house-to-family-washington" },
        { title: "What to do with the property", href: "/estate-probate-inherited-property/what-to-do-with-the-property" },
      ],
    },
    rent: {
      id: "decide",
      title: "Weigh renting it out",
      why: "Renting brings in income but keeps the estate open and the heirs tied together. Compare it honestly with selling.",
      links: [{ title: "What to do with the property", href: "/estate-probate-inherited-property/what-to-do-with-the-property" }],
    },
    undecided: {
      id: "decide",
      title: "Decide together: sell, keep or rent",
      why: "Lay out the options with numbers before anyone takes a position. Most disagreements are about price and timing.",
      links: [
        { title: "What to do with the property", href: "/estate-probate-inherited-property/what-to-do-with-the-property" },
        { title: "When heirs disagree about selling", href: "/guides/heirs-disagree-selling-house" },
      ],
    },
  };
  if (decide[a.goal]) steps.push(decide[a.goal]);

  // 6. Condition (only matters if a sale is on the table)
  if (selling && a.condition === "dated") {
    steps.push({
      id: "condition",
      title: "Check whether updates would pay for themselves",
      why: "Light work (paint, flooring, cleaning) often pays back; big remodels usually don't in an estate sale. Run the numbers for this house before spending.",
      links: [
        { title: "What's My Remodel Worth? (calculator)", href: "/whats-my-remodel-worth" },
        { title: "Sell as-is or fix it up?", href: "/guides/sell-inherited-house-as-is-or-fix" },
      ],
    });
  } else if (selling && a.condition === "repairs") {
    steps.push({
      id: "condition",
      title: "Clear the house, then decide what to fix",
      why: "The contents usually come out first. Then fix safety issues and items a buyer's lender would require, and consider selling the rest as-is.",
      links: [
        { title: "Estate cleanout and liquidation", href: "/estate-liquidation" },
        { title: "Sell as-is or fix it up?", href: "/guides/sell-inherited-house-as-is-or-fix" },
      ],
    });
  }

  // 7. Taxes on a sale
  if (selling) {
    steps.push({
      id: "taxes",
      title: "Understand the taxes on a sale",
      why: "Inherited property usually gets a new tax basis at the date-of-death value, which often makes the capital gain small. Confirm with a tax adviser.",
      links: [{ title: "Taxes when selling an inherited house", href: "/guides/taxes-selling-inherited-house-washington" }],
    });
  }

  // 8. Probate costs and deadlines
  if (probate) {
    steps.push({
      id: "deadlines",
      title: "Know the probate costs and deadlines",
      why: "Washington sets deadlines for creditor claims and other steps. Knowing them avoids delays and surprises.",
      links: [
        { title: "Probate deadlines and key rules", href: "/washington-probate-guide/deadlines-and-key-rules" },
        { title: "What probate costs in Washington", href: "/guides/probate-costs-washington" },
      ],
    });
  }

  steps.push(PROS);
  return steps;
}

function parentPlan(a: Answers): PlanStep[] {
  const steps: PlanStep[] = [];
  const crisis = a.now === "crisis";

  const start: Record<string, PlanStep> = {
    independent: {
      id: "start",
      title: "Start the planning conversation now, while it's easy",
      why: "Decisions made early, together, are calmer and keep your parent in charge of them.",
      links: [
        { title: "Starting early planning conversations", href: "/helping-an-aging-parent/living-independently/early-planning" },
        { title: "The property questions to think through", href: "/planning-before-a-crisis/property-questions" },
      ],
    },
    help: {
      id: "start",
      title: "Arrange more help at home",
      why: "More help at home is often the first step, and how the family shares the load matters as much as what's paid for.",
      links: [
        { title: "In-home caregivers and support", href: "/helping-an-aging-parent/needs-help-at-home/in-home-care" },
        { title: "Coordinating family caregivers", href: "/helping-an-aging-parent/needs-help-at-home/family-coordination" },
      ],
    },
    exploring: {
      id: "start",
      title: "Compare the kinds of senior housing and care",
      why: "Independent living, assisted living, adult family homes, memory care and nursing homes differ a lot in care and cost.",
      links: [
        { title: "What types of senior housing exist?", href: "/helping-an-aging-parent/exploring-care-options/types-of-housing" },
        { title: "How to have this conversation with your parent", href: "/helping-an-aging-parent/exploring-care-options/having-the-conversation" },
      ],
    },
    crisis: {
      id: "start",
      title: "Handle the next few days first",
      why: "After a hospital stay or emergency, discharge planning and short-term care come before longer decisions.",
      links: [
        { title: "Hospital discharge planning", href: "/helping-an-aging-parent/health-crisis/hospital-discharge" },
        { title: "Urgent housing or care placement", href: "/helping-an-aging-parent/health-crisis/urgent-housing" },
      ],
    },
  };
  if (start[a.now]) steps.push(start[a.now]);

  // Authority
  if (a.authority === "yes") {
    steps.push({
      id: "authority",
      title: "Check the power of attorney covers the house",
      why: "To sell or refinance, it must be durable (survive incapacity) and include real property. Many older documents don't.",
      links: [{ title: "Power of attorney and real estate in Washington", href: "/power-of-attorney" }],
    });
  } else {
    steps.push({
      id: "authority",
      title: crisis ? "Sort out who can sign, quickly" : "Put a durable power of attorney in place",
      why: crisis
        ? "Without a power of attorney, the family may need a court guardianship before anyone can act on the house or accounts."
        : "While your parent can still sign, a durable power of attorney avoids a court guardianship later.",
      links: crisis
        ? [
            { title: "Legal authority to act quickly", href: "/helping-an-aging-parent/health-crisis/legal-authority" },
            { title: "Selling a parent's house with dementia", href: "/guides/sell-parents-house-dementia-washington" },
          ]
        : [
            { title: "Power of attorney and legal documents", href: "/helping-an-aging-parent/finances-and-legal/power-of-attorney" },
            { title: "Power of attorney and real estate in Washington", href: "/power-of-attorney" },
          ],
    });
  }

  // Costs
  steps.push(
    a.home === "stay"
      ? {
          id: "costs",
          title: "Work out what staying home really costs",
          why: "Care hours, repairs and safety changes add up. Compare them with the alternatives in dollars.",
          links: [
            { title: "Can a parent afford to stay at home? (worksheet)", href: "/senior-transitions/can-parent-afford-to-stay-home" },
            { title: "Cost of care calculators", href: "/cost-of-care-calculator" },
          ],
        }
      : {
          id: "costs",
          title: "Compare what each option costs",
          why: "Washington costs vary widely by care type and area. Put real monthly numbers side by side.",
          links: [
            { title: "Cost of care calculators", href: "/cost-of-care-calculator" },
            { title: "How do I compare costs?", href: "/helping-an-aging-parent/exploring-care-options/comparing-costs" },
          ],
        },
  );

  // Paying
  steps.push(
    a.pay === "private"
      ? {
          id: "pay",
          title: "Plan how savings and the house cover the cost",
          why: "For most families the house is the largest asset. When and how it's used shapes everything else.",
          links: [
            { title: "Paying for care", href: "/helping-an-aging-parent/finances-and-legal/paying-for-care" },
            { title: "WA Cares, Washington's long-term care benefit", href: "/long-term-care/wa-cares" },
          ],
        }
      : {
          id: "pay",
          title: "Learn how Medicaid treats the house",
          why: "Medicaid has rules about the home, transfers and estate recovery. Learn them before selling or giving the house to anyone.",
          links: [
            { title: "Medicaid and the family home", href: "/long-term-care/medicaid-and-the-family-home" },
            { title: "Medicaid and long-term care in Washington", href: "/long-term-care/medicaid-and-long-term-care" },
          ],
        },
  );

  // The house
  const house: Record<string, PlanStep> = {
    stay: {
      id: "house",
      title: "Make the house work for staying",
      why: "Small changes (grab bars, lighting, a first-floor bedroom) often decide whether staying is safe.",
      links: [
        { title: "Home modifications and aging in place", href: "/helping-an-aging-parent/living-independently/home-modifications" },
        { title: "Aging in place and staying home safely", href: "/aging-in-place-staying-home-safely" },
      ],
    },
    move: {
      id: "house",
      title: "Plan the move and the sale together",
      why: "Most moves are paid for by the house. Timing the sale against the move avoids paying for two homes, or rushing.",
      links: [
        { title: "Selling a parent's house to pay for senior living", href: "/sell-house-fund-senior-living" },
        { title: "Downsizing and preparing for a transition", href: "/downsizing-preparing-for-transition" },
      ],
    },
    unsure: {
      id: "house",
      title: "Think through the property decisions",
      why: "Keep, sell, rent, or pass the house on: each has tax, Medicaid and family consequences worth knowing early.",
      links: [{ title: "Property and real estate decisions", href: "/helping-an-aging-parent/finances-and-legal/property-decisions" }],
    },
  };
  if (house[a.home]) steps.push(house[a.home]);

  // The long view
  steps.push({
    id: "later",
    title: "Decide what happens to the house later",
    why: "How the home is titled decides whether it goes through probate, and some shortcuts cause tax or Medicaid problems.",
    links: [
      { title: "How to pass real estate to your children", href: "/articles/wills-trusts-other-options" },
      { title: "Wills and estate planning", href: "/helping-an-aging-parent/finances-and-legal/wills-and-estate-plan" },
    ],
  });

  steps.push({
    ...PROS,
    why: "A care manager, an elder law attorney and a broker who knows senior moves often help most. Real Property Planning lists people its founder has met in person; you choose and hire them directly.",
    links: [
      { title: "Featured professionals", href: "/featured-professionals" },
      { title: "Aging life care managers", href: "/aging-life-care-managers" },
    ],
  });
  return steps;
}

/**
 * "Where to confirm this": official sources shown under each plan (Oct 20,
 * 2026, David's request). One box per situation rather than a footnote per
 * step; the guides each step links to cite their own sources. Every link is
 * one the site already cites or one confirmed in a search of the agency's own
 * domain on Oct 20, 2026. Agencies move pages: recheck these each January.
 * `href` is omitted where there is no single statewide page (county records).
 */
export interface OfficialSource {
  title: string;
  note: string;
  href?: string;
}

export const OFFICIAL_SOURCES: Record<Situation, OfficialSource[]> = {
  estate: [
    {
      title: "Washington State Courts: court forms",
      note: "The state's probate forms and case cover sheets.",
      href: "https://www.courts.wa.gov/forms/?fa=forms.static&staticID=14",
    },
    {
      title: "Washington's probate law (RCW Title 11)",
      note: "The statutes on wills, probate, trusts and the personal representative.",
      href: "https://app.leg.wa.gov/RCW/default.aspx?cite=11",
    },
    {
      title: "Your county recorder or auditor",
      note: "A copy of the recorded deed shows how the house was owned and who is on title.",
    },
    {
      title: "IRS Publication 551: Basis of Assets",
      note: "How inherited property gets its tax basis.",
      href: "https://www.irs.gov/publications/p551",
    },
    {
      title: "Washington Department of Revenue: estate tax tables",
      note: "The current Washington estate tax exclusion and rates.",
      href: "https://dor.wa.gov/taxes-rates/other-taxes/estate-tax-tables",
    },
    {
      title: "DSHS: Estate Recovery (form 14-454)",
      note: "If Medicaid paid for your parent's long-term care.",
      href: "https://www.dshs.wa.gov/sites/default/files/forms/pdf/14-454lp.pdf",
    },
  ],
  parent: [
    {
      title: "DSHS: Getting started with long-term care",
      note: "The state's starting point, including free local help through Community Living Connections.",
      href: "https://www.dshs.wa.gov/adult-and-aging-services/getting-started-long-term-care",
    },
    {
      title: "Washington Apple Health: long-term care and hospice",
      note: "How Medicaid covers care at home, in adult family homes, assisted living and nursing homes.",
      href: "https://www.hca.wa.gov/free-or-low-cost-health-care/i-need-medical-dental-or-vision-care/long-term-care-and-hospice",
    },
    {
      title: "How Medicaid treats the home (WAC 182-513-1350)",
      note: "The rule on when the house is an exempt asset.",
      href: "https://app.leg.wa.gov/WAC/default.aspx?cite=182-513-1350",
    },
    {
      title: "DSHS: Estate Recovery (form 14-454)",
      note: "What the state may recover after death, and when it waits.",
      href: "https://www.dshs.wa.gov/sites/default/files/forms/pdf/14-454lp.pdf",
    },
    {
      title: "Washington's power of attorney law (RCW 11.125)",
      note: "What a durable power of attorney must say to cover real estate.",
      href: "https://app.leg.wa.gov/RCW/default.aspx?cite=11.125",
    },
    {
      title: "WA Cares Fund",
      note: "Washington's long-term care benefit: who qualifies and what it pays.",
      href: "https://wacaresfund.wa.gov/",
    },
  ],
};

export function buildPlan(s: Situation, a: Answers): PlanStep[] {
  return s === "estate" ? estatePlan(a) : parentPlan(a);
}

/* ------------------------------------------------------------------ */
/* Saving in the URL fragment                                          */
/* ------------------------------------------------------------------ */

/** "#estate:role=executor,title=alone,..." Only known questions and values survive. */
export function encodePlan(s: Situation, a: Answers): string {
  const parts = visibleQuestions(s, a)
    .filter((q) => a[q.id])
    .map((q) => `${q.id}=${a[q.id]}`);
  return `#${s}:${parts.join(",")}`;
}

export function decodePlan(hash: string): { situation: Situation; answers: Answers } | null {
  const m = /^#?(estate|parent):(.*)$/.exec(hash || "");
  if (!m) return null;
  const situation = m[1] as Situation;
  const answers: Answers = {};
  for (const pair of m[2].split(",")) {
    const [k, v] = pair.split("=");
    const q = QUESTIONS[situation].find((x) => x.id === k);
    if (q && q.options.some((o) => o.value === v)) answers[k] = v;
  }
  return { situation, answers };
}
