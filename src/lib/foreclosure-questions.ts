/**
 * FACING FORECLOSURE: narrow question pages (owner's "yes", Nov 6, 2026).
 * One exact question per page, the way people type it when a notice arrives,
 * because narrow question pages are the family-side pages that rank (Search
 * Console, Sept 2026). Each restates facts already sourced in
 * src/lib/facing-foreclosure.ts (see that file's header for the statutes and
 * agency pages, all checked Nov 6, 2026). A new fact goes there first, with
 * its source. Voice: never "we" or "I".
 */

export interface FQSection { heading: string; paras: string[] }
export interface FQPage {
  slug: string;
  /** The H1 and the search question. */
  question: string;
  /** Google title (without the site suffix). */
  title: string;
  description: string;
  short: string;
  sections: FQSection[];
  faq: { question: string; answer: string }[];
  /** Section guides to point to at the end. */
  related: string[];
}

export const FQ_PREFIX = "/facing-foreclosure/";
export const fqPath = (slug: string) => `${FQ_PREFIX}${slug}`;

const HOTLINE = "1-877-894-HOME (4663)";

export const FQ_PAGES: FQPage[] = [
  {
    slug: "how-long-does-foreclosure-take-washington",
    question: "How Long Does Foreclosure Take in Washington State?",
    title: "How Long Does Foreclosure Take in Washington State (WA)?",
    description:
      "How long a home foreclosure takes in Washington State (WA): the waiting periods the law requires at each step, from the lender's first letter to the trustee's sale, and how to use the time.",
    short:
      "Usually many months. Washington State law sets minimum waiting periods at each step: the lender's required contact, then the Notice of Default, then a Notice of Trustee's Sale at least 90 days before the sale (120 days for most owner-occupied homes). The time is there to use, so call a free housing counselor at " + HOTLINE + " early.",
    sections: [
      {
        heading: "The steps and the minimum waiting periods",
        paras: [
          "Most home foreclosures in Washington State happen outside court, under a deed of trust, so the timeline is set by state law rather than a judge.",
          "Step 1, the lender's contact: before any Notice of Default on an owner-occupied home, the lender must send a letter and make at least three phone calls about options, and must meet with the homeowner if asked. It cannot issue a Notice of Default until 30 days after those attempts if there is no response, or 90 days after first contact if the homeowner responds.",
          "Step 2, the Notice of Default: the formal notice that the loan is in default, with the amount needed to catch up.",
          "Step 3, the Notice of Trustee's Sale: it must be given at least 90 days before the sale date, or 120 days when the lender's letter in step 1 was required.",
          "Step 4, the sale: the homeowner can catch up and stop it until the eleventh day before the sale date.",
        ],
      },
      {
        heading: "What can add time",
        paras: [
          "Foreclosure mediation, if a housing counselor or attorney makes the referral no later than 90 days before the sale date, gives the homeowner and lender a structured chance to agree on a way forward. A loan modification under review, or an agreed repayment plan, can also hold things off. None of these happen automatically; each has to be asked for.",
        ],
      },
      {
        heading: "Using the time well",
        paras: [
          "The months between the first missed payment and the sale are when every option is still open: catching up, a modification, mediation, or selling the house with time to get a fair price. Waiting for the sale notice before acting closes most of them.",
        ],
      },
    ],
    faq: [
      {
        question: "How long after a Notice of Trustee's Sale is the sale in Washington?",
        answer: "At least 90 days, or 120 days when the lender was required to send its pre-foreclosure letter, which applies to most owner-occupied homes.",
      },
      {
        question: "When is it too late to catch up on missed payments in Washington?",
        answer: "The homeowner can pay the missed amount and allowed costs to stop the sale until the eleventh day before the sale date.",
      },
    ],
    related: ["/facing-foreclosure/free-help-and-deadlines", "/facing-foreclosure/keeping-the-home"],
  },
  {
    slug: "can-i-stop-a-trustees-sale-washington",
    question: "Can I Stop a Trustee's Sale in Washington State?",
    title: "Can I Stop a Trustee's Sale (Foreclosure Sale) in Washington State (WA)?",
    description:
      "Ways to stop or avoid a trustee's sale on a home in Washington State (WA): catching up before the eleventh day, foreclosure mediation, a loan modification, selling the house first, or legal help.",
    short:
      "Often, yes, if action starts early enough. A homeowner can stop the sale by catching up on the missed amount until the eleventh day before the sale, by reaching an agreement with the lender, or by selling the house and closing first. Mediation needs a referral no later than 90 days before the sale. Call " + HOTLINE + " today.",
    sections: [
      {
        heading: "Catching up (reinstatement)",
        paras: [
          "Paying the missed payments plus allowed costs stops the foreclosure and puts the loan back in good standing. Washington State law allows this until the eleventh day before the sale date. Ask the trustee for the exact amount in writing.",
        ],
      },
      {
        heading: "An agreement with the lender",
        paras: [
          "A repayment plan, a pause in payments or a loan modification can end or hold off the foreclosure. A free housing counselor can ask for these and handle the paperwork. Foreclosure mediation, which only a counselor or attorney can request, must be referred no later than 90 days before the sale date (25 days after an amended notice of sale).",
        ],
      },
      {
        heading: "Selling the house first",
        paras: [
          "The owner still owns the house until the trustee's sale, so it can be sold and closed before the sale date. The loan is paid off at closing and the rest of the money goes to the owner. If the house is worth less than what is owed, a short sale or a deed in lieu needs the lender's agreement.",
        ],
      },
      {
        heading: "Legal help",
        paras: [
          "In some situations an attorney can ask a court to stop a sale, or other legal steps can pause it. Those are decisions to make with a lawyer. Low- and moderate-income homeowners can call Washington State's civil legal aid line at 1-800-606-4819.",
        ],
      },
      {
        heading: "What does not stop a sale",
        paras: [
          "Ignoring the notices, paying someone who promises to stop the foreclosure for a fee, or signing the deed over to a stranger who says you can stay. Those are the patterns of foreclosure rescue scams.",
        ],
      },
    ],
    faq: [
      {
        question: "What is the last day to stop a foreclosure sale by catching up in Washington?",
        answer: "The eleventh day before the sale date. After that, catching up no longer stops the sale under the reinstatement rule.",
      },
      {
        question: "Can I sign up for foreclosure mediation myself?",
        answer: `No. A housing counselor or an attorney makes the referral, no later than 90 days before the sale date. The free hotline, ${HOTLINE}, connects homeowners with a counselor.`,
      },
    ],
    related: ["/facing-foreclosure/free-help-and-deadlines", "/facing-foreclosure/selling-before-the-sale", "/facing-foreclosure/avoiding-scams"],
  },
  {
    slug: "what-is-a-notice-of-default-washington",
    question: "What Does a Notice of Default Mean in Washington State?",
    title: "What Does a Notice of Default Mean in Washington State (WA)?",
    description:
      "A Notice of Default on a Washington State (WA) home loan explained: what it means, what comes next, how much time is left, and the first three things to do.",
    short:
      "A Notice of Default is the formal notice that the home loan is behind and that foreclosure can follow. It is not the sale itself, and there is still time. The next step would be a Notice of Trustee's Sale, at least 90 days before any sale. Call a free housing counselor at " + HOTLINE + " now.",
    sections: [
      {
        heading: "What the notice says",
        paras: [
          "It states that the loan is in default and the amount needed to catch up. On an owner-occupied home, the lender must first have tried to reach the homeowner by letter and at least three phone calls, and offered to meet.",
        ],
      },
      {
        heading: "What comes next",
        paras: [
          "If the default is not resolved, the trustee can record a Notice of Trustee's Sale, which must be given at least 90 days before the sale date (120 days for most owner-occupied homes). The homeowner can catch up and stop the sale until the eleventh day before it.",
        ],
      },
      {
        heading: "The first three things to do",
        paras: [
          `Call the free housing counselor hotline, ${HOTLINE}. A counselor can refer the homeowner to foreclosure mediation, which must be requested no later than 90 days before the sale date.`,
          "Keep the notice and every later letter, with the envelopes, and note the dates.",
          "Don't respond to strangers who start calling or writing with offers to save the house. Notices are public, and scammers watch for them.",
        ],
      },
    ],
    faq: [
      {
        question: "Does a Notice of Default mean I will lose my house?",
        answer: "No. It means the loan is behind and foreclosure can follow. Catching up, an agreement with the lender, mediation or selling the house can all still prevent a foreclosure sale.",
      },
      {
        question: "How long after a Notice of Default is the sale?",
        answer: "The sale cannot happen until at least 90 days after a Notice of Trustee's Sale is given, or 120 days for most owner-occupied homes, and that notice comes after the Notice of Default.",
      },
    ],
    related: ["/facing-foreclosure/free-help-and-deadlines", "/facing-foreclosure/keeping-the-home"],
  },
  {
    slug: "reverse-mortgage-foreclosure-property-taxes",
    question: "Can a Reverse Mortgage Be Foreclosed for Unpaid Property Taxes?",
    title: "Reverse Mortgage Foreclosure for Unpaid Property Taxes or Insurance (Washington State, WA)",
    description:
      "Why reverse mortgages go into foreclosure over unpaid property taxes and insurance, the federal HECM protections (repayment plans, At-Risk Extension), and Washington State (WA) senior property tax relief.",
    short:
      "Yes. A reverse mortgage has no monthly payment, but the owner must keep paying property taxes, homeowner's insurance and any association dues. Falling behind on those is the most common reason reverse mortgages are foreclosed. Federal rules for HECM loans allow repayment plans, and Washington State's senior property tax programs can lower or defer the bill.",
    sections: [
      {
        heading: "Why it happens",
        paras: [
          "A reverse mortgage is repaid when the borrower moves out, sells or passes away, but the loan terms also require the borrower to keep the property taxes, insurance and association dues paid. If they go unpaid and aren't caught up, the servicer can call the loan due and foreclose.",
        ],
      },
      {
        heading: "Federal protections for HECM loans",
        paras: [
          "Most reverse mortgages are HECMs, insured by the federal government. Under the HECM rules, the servicer can set up a repayment plan for unpaid taxes and insurance, and can work with a borrower who is less than $5,000 behind without calling the loan due.",
          "A borrower over 80 with a critical health condition in the household may qualify for an At-Risk Extension, which can last as long as they live in the home. Ask the servicer directly.",
          "Keep the yearly occupancy certificate up to date, too: a missed certificate is another reason servicers call loans due.",
        ],
      },
      {
        heading: "Lowering the tax bill in Washington State",
        paras: [
          "Washington State has a property tax exemption and a deferral program for older homeowners and people with disabilities who meet income limits. Income limits rise for tax year 2027, so more households qualify. Apply through the county assessor; the Department of Revenue's property tax line is 360-534-1400.",
        ],
      },
      {
        heading: "If the house will be sold",
        paras: [
          "For a HECM, federal rules allow cash for keys, up to $7,500, when the borrower or heirs complete a short sale or deed in lieu, plus up to $5,000 toward probate costs when heirs are handling it.",
        ],
      },
    ],
    faq: [
      {
        question: "Can I lose my home with a reverse mortgage?",
        answer: "Yes, if property taxes, homeowner's insurance or association dues go unpaid, or the home stops being the main residence. Unpaid taxes and insurance are the most common reason reverse mortgages go into foreclosure.",
      },
      {
        question: "What is a HECM At-Risk Extension?",
        answer: "A HECM protection for a borrower over 80 with a critical health condition in the household, which can postpone foreclosure over unpaid taxes or insurance for as long as they live in the home. The servicer decides eligibility.",
      },
    ],
    related: ["/facing-foreclosure/keeping-the-home", "/retirement-reverse-mortgage"],
  },
  {
    slug: "sell-house-during-foreclosure-washington",
    question: "Can I Sell My House During Foreclosure in Washington State?",
    title: "Can I Sell My House During Foreclosure in Washington State (WA)?",
    description:
      "Yes, until the trustee's sale. How selling a house during foreclosure in Washington State (WA) works, why it usually keeps the owner's equity, how much time it takes, and short sales.",
    short:
      "Yes. The owner keeps ownership until the trustee's sale, so the house can be sold and closed before the sale date. The loan and missed payments are paid at closing, and the rest of the money goes to the owner. Start early, because a sale usually takes several weeks to a few months to close.",
    sections: [
      {
        heading: "Why selling usually leaves the owner better off",
        paras: [
          "At a trustee's sale the house goes to the highest bidder, often for less than it would bring on the open market, and the costs pile on. A normal sale reaches every buyer, and after the loan and costs are paid at closing, the rest goes to the owner. Many older owners have years of equity at stake.",
        ],
      },
      {
        heading: "How the timing works",
        paras: [
          "Preparing the house, finding a buyer and closing usually takes several weeks to a few months. Once a Notice of Trustee's Sale is given there are at least 90 days to the sale, which is enough only if the work starts right away. Let the lender and a housing counselor know the house is being sold.",
        ],
      },
      {
        heading: "If the house is worth less than what's owed",
        paras: [
          "A short sale, where the lender agrees to accept less than the balance, or a deed in lieu of foreclosure, usually does less damage than a foreclosure. Both need the lender's approval, and a CPA can explain any tax on forgiven debt.",
        ],
      },
      {
        heading: "Fast cash offers",
        paras: [
          "Be careful with anyone who offers to buy quickly for cash on condition that the owner signs the deed over before closing, or who promises the owner can stay and buy it back later. Those are the patterns of foreclosure rescue scams.",
        ],
      },
    ],
    faq: [
      {
        question: "Can I sell my house after receiving a Notice of Trustee's Sale in Washington?",
        answer: "Yes, as long as the sale closes before the trustee's sale date. There are at least 90 days between the notice and the sale.",
      },
      {
        question: "Who gets the money if I sell my house during foreclosure?",
        answer: "At closing, the loan, missed payments and costs are paid off first. Whatever is left goes to the owner.",
      },
    ],
    related: ["/facing-foreclosure/selling-before-the-sale", "/facing-foreclosure/avoiding-scams"],
  },
];

export const FQ_BY_PATH: Record<string, FQPage> = Object.fromEntries(FQ_PAGES.map((p) => [fqPath(p.slug), p]));
