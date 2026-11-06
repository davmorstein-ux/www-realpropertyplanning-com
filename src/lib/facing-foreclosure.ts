/**
 * FACING FORECLOSURE: one hub and four topic pages (owner's idea and "start",
 * Nov 6, 2026). A family-side educational section for older homeowners and
 * their families who are behind on a mortgage. It is NOT a marketplace and
 * never steers owners to investors (owner agreed it is not modeled on AFH Club).
 * The featured broker appears only on the selling page, as ordinary brokerage.
 *
 * Every fact here was checked against its primary source on Nov 6, 2026:
 *   RCW 61.24.031  lender letter, three calls, meeting right; notice of default
 *                  30 days after due diligence (no response) or 90 days after
 *                  initial contact (borrower responds).
 *   RCW 61.24.040  notice of trustee's sale at least 90 days before the sale,
 *                  120 days when a 61.24.031 letter was required.
 *   RCW 61.24.090  cure and reinstate until the eleventh day before the sale.
 *   RCW 61.24.163  mediation referral by a housing counselor or attorney, no
 *                  later than 90 days before the sale (25 days for an amended
 *                  notice of sale); homeowners cannot refer themselves.
 *   Commerce (commerce.wa.gov/foreclosure): hotline 1-877-894-HOME (4663);
 *                  statewide civil legal aid 1-800-606-4819; some lenders are
 *                  exempt from mediation; the fee is usually split.
 *   DOR special notice: senior/disability property tax exemption thresholds
 *                  rise for tax year 2027 (60/70/80% of county median income;
 *                  deferral 90%); county assessor; DOR 360-534-1400.
 *   NCLC practice tip (May 2024) on HUD HECM rules: unpaid taxes/insurance can
 *                  lead to foreclosure; repayment plans; under $5,000 behind;
 *                  At-Risk Extension (over 80 + critical health circumstance);
 *                  cash for keys up to $7,500 (+ up to $5,000 probate costs).
 *   AG (atg.wa.gov/mortgage-and-foreclosure-scams): three scam patterns;
 *                  complaints at atg.wa.gov/file-complaint.
 *   RCW 61.34      Distressed Property Conveyances Act.
 *
 * Steps have no pictures yet (the owner adds them later, as on the estate
 * path). Voice: never "we" or "I".
 */

export const FF_HUB = "/facing-foreclosure";

export interface FFStep { title: string; text: string }
export interface FFFold { heading: string; paras: string[] }
export interface FFTopic {
  path: string;
  title: string;
  /** Shorter label for the hub button. */
  label: string;
  description: string;
  short: string;
  steps: FFStep[];
  folds: FFFold[];
}

export const FF_TOPICS: FFTopic[] = [
  {
    path: "/facing-foreclosure/free-help-and-deadlines",
    title: "Free Help and the Deadlines That Matter",
    label: "Free help and the deadlines",
    description:
      "Behind on the mortgage in Washington State (WA)? Free housing counselors, the foreclosure mediation program and its 90-day deadline, free legal aid, and the foreclosure timeline step by step.",
    short:
      "Call a free housing counselor now at 1-877-894-HOME (4663). Only a housing counselor or an attorney can refer a homeowner to Washington State's foreclosure mediation program, and the referral must be made at least 90 days before the sale date.",
    steps: [
      { title: "Call the free hotline", text: "1-877-894-HOME (4663) connects you with a free housing counselor. Counseling is free; nobody legitimate charges for it." },
      { title: "Answer the lender", text: "Before any default notice, the lender must write and call. Ask for a meeting, and name your counselor so the lender talks to them too." },
      { title: "Watch the dates", text: "Every notice has a date on it. Keep each one, and give copies to your counselor right away." },
    ],
    folds: [
      {
        heading: "How a foreclosure unfolds in Washington State",
        paras: [
          "Most home foreclosures in Washington State happen outside court, under a deed of trust, on a timeline set by state law.",
          "First, the lender must send a letter and make at least three phone calls to discuss options. If the homeowner asks, the lender must meet, by phone or in person, before going further. The lender cannot issue a Notice of Default until 30 days after those contact attempts if there is no response, or 90 days after first contact if the homeowner responds.",
          "Next comes the Notice of Default, and then the Notice of Trustee's Sale, which must be given at least 90 days before the sale (120 days when the lender's letter was required).",
          "The homeowner can still catch up on the missed amount and stop the sale until the eleventh day before the sale date.",
        ],
      },
      {
        heading: "Foreclosure mediation",
        paras: [
          "Mediation brings the homeowner and the lender together with a neutral mediator to look for a way to keep the home or end things on better terms.",
          "Homeowners cannot sign up themselves: a housing counselor or an attorney makes the referral, usually after a Notice of Default. The referral must reach the state no later than 90 days before the sale date on the Notice of Trustee's Sale (25 days if an amended notice is recorded). Some lenders are exempt, and the mediation fee is usually split between the two sides.",
          "This deadline is the main reason to call a counselor as soon as a payment is missed, not when the sale notice arrives.",
        ],
      },
      {
        heading: "Free legal help",
        paras: [
          "Low- and moderate-income homeowners can call Washington State's civil legal aid line at 1-800-606-4819. An attorney can also refer a homeowner to mediation.",
        ],
      },
      {
        heading: "What to have ready for the first call",
        paras: [
          "Recent mortgage statements, every letter or notice from the lender or trustee, proof of income (Social Security, pension, other), a list of monthly bills, and the property tax and insurance bills. For a reverse mortgage, also the servicer's letters.",
        ],
      },
    ],
  },
  {
    path: "/facing-foreclosure/keeping-the-home",
    title: "Ways to Keep the Home",
    label: "Ways to keep the home",
    description:
      "Options for older homeowners in Washington State (WA) to keep a home after missed mortgage payments: catching up, repayment plans, loan modification, senior property tax relief, and reverse mortgage protections.",
    short:
      "If the income can cover the payments going forward, the usual paths are catching up, a repayment plan, a pause in payments, or a loan modification. Older homeowners should also check two things many miss: the senior property tax programs and, for reverse mortgages, the protections for unpaid taxes and insurance.",
    steps: [
      { title: "Ask for options, with help", text: "A housing counselor can ask the lender for a repayment plan, a pause or a modification, and knows what to ask for." },
      { title: "Check the property tax programs", text: "Washington State's senior and disability property tax programs can lower or defer the tax bill. The county assessor takes applications." },
      { title: "Reverse mortgage? Call now", text: "Falling behind on taxes or insurance can end a reverse mortgage. Call the servicer and a counselor before the arrears grow." },
    ],
    folds: [
      {
        heading: "Catching up before the sale",
        paras: [
          "Paying the missed amount, plus allowed costs, stops the foreclosure. Washington State law allows this until the eleventh day before the sale date. Family members sometimes help with a one-time amount when the regular payment is affordable again.",
        ],
      },
      {
        heading: "Repayment plans, pauses and modifications",
        paras: [
          "A repayment plan spreads the missed amount over several months on top of the regular payment. A forbearance pauses or lowers payments for a while. A loan modification permanently changes the loan's terms, such as the rate or length, to bring the payment down.",
          "Lenders decide case by case, and the paperwork is heavy. A free housing counselor can submit it and follow up, and the lender must deal with a counselor the homeowner names.",
        ],
      },
      {
        heading: "Senior property tax relief",
        paras: [
          "Washington State has a property tax exemption and a separate deferral program for older homeowners and people with disabilities who meet income limits. The exemption lowers the bill; the deferral postpones it until the home is sold or the owner passes away.",
          "Income limits are set as a share of each county's median household income, and they rise for tax year 2027, so more households qualify than before. Apply through the county assessor. The Department of Revenue's property tax line is 360-534-1400.",
        ],
      },
      {
        heading: "Reverse mortgages and unpaid taxes or insurance",
        paras: [
          "With a reverse mortgage there is no monthly payment, but the owner must keep paying property taxes, homeowner's insurance and any association dues. Falling behind on those is the most common reason reverse mortgages go into foreclosure.",
          "Under the federal rules for the common HECM reverse mortgage, the servicer can set up a repayment plan, and can work with a borrower who is less than $5,000 behind without calling the loan due. A borrower over 80 with a critical health condition in the household may qualify for an At-Risk Extension that can last as long as they live in the home. Keep the yearly occupancy certificate up to date.",
        ],
      },
      {
        heading: "When keeping the home isn't realistic",
        paras: [
          "If the payments can't be caught up even with help, selling before the sale usually protects far more of the home's value than waiting. See Selling Before the Sale.",
        ],
      },
    ],
  },
  {
    path: "/facing-foreclosure/selling-before-the-sale",
    title: "Selling Before the Sale",
    label: "Selling before the sale",
    description:
      "Selling a home before a foreclosure sale in Washington State (WA): why it usually keeps the owner's equity, how much time it takes, short sales and deeds in lieu, and reverse mortgage cash for keys.",
    short:
      "When the payments can't be caught up, selling the house before the trustee's sale usually leaves the owner far better off. The lender is paid from the sale, and whatever is left over stays with the owner instead of being lost at auction.",
    steps: [
      { title: "Find out what it's worth", text: "Compare the likely sale price with everything owed: the loan, missed payments, fees and taxes." },
      { title: "Tell the lender", text: "Let the lender and your counselor know the house is being sold. A signed sale can be a reason to ask for more time." },
      { title: "List with time to spare", text: "A sale usually takes weeks to close. Listing early leaves room for offers, inspections and closing before the sale date." },
    ],
    folds: [
      {
        heading: "Why selling usually beats foreclosure",
        paras: [
          "At a trustee's sale, the house goes to the highest bidder, often for less than it would bring on the open market, and the costs add up. A normal sale reaches every buyer, and after the loan and costs are paid at closing, the rest of the money goes to the owner.",
          "Many older owners have paid down their loans for decades, so the equity at stake can be large. Protecting it can pay for the next home.",
        ],
      },
      {
        heading: "How much time a sale needs",
        paras: [
          "Preparing the house, finding a buyer and closing usually takes several weeks to a few months. The earlier the decision, the better the price and the less pressure to take a low offer.",
          "Once the Notice of Trustee's Sale is recorded, there are at least 90 days to the sale. That is enough for a sale only if the work starts right away.",
        ],
      },
      {
        heading: "If the house is worth less than what's owed",
        paras: [
          "A short sale is a sale the lender agrees to accept for less than the loan balance. A deed in lieu of foreclosure hands the house to the lender in exchange for ending the loan. Both usually do less damage than a foreclosure, and both need the lender's approval.",
          "For a HECM reverse mortgage, federal rules allow cash for keys: up to $7,500 for a short sale or deed in lieu, plus up to $5,000 toward probate costs when heirs are handling it.",
        ],
      },
      {
        heading: "Taxes and what happens to the money",
        paras: [
          "At closing, the escrow company pays off the loan and any missed amounts, and the rest goes to the owner. A CPA can explain any tax on the sale, and on any debt a lender forgives in a short sale.",
          "Beware of anyone offering to buy the house fast for cash on condition that the owner signs the deed over before closing. See Avoiding Foreclosure Scams.",
        ],
      },
    ],
  },
  {
    path: "/facing-foreclosure/avoiding-scams",
    title: "Avoiding Foreclosure Scams",
    label: "Avoiding foreclosure scams",
    description:
      "Foreclosure rescue scams target older homeowners in Washington State (WA). The warning signs, the three most common schemes, Washington's law against equity skimming, and how to report a scam.",
    short:
      "A demand for money up front to save the home, advice to stop talking to the lender, or a request to sign over the deed are all warning signs. Real help from a housing counselor is free.",
    steps: [
      { title: "Never sign over the deed", text: "Don't sign anything that transfers the home, even with a promise that you can stay or buy it back." },
      { title: "Never pay up front", text: "Don't pay anyone who promises to stop a foreclosure. Housing counseling is free." },
      { title: "Check, then report", text: "Ask a housing counselor about any offer, and report suspected scams to the Washington State Attorney General." },
    ],
    folds: [
      {
        heading: "Three common schemes",
        paras: [
          "Rent-to-buy: the owner signs the deed over and rents the home with a promise to buy it back later. The rent is often too high to keep up, and the buyback never happens.",
          "Phantom help: someone charges large fees, claims to be negotiating with the lender, and tells the owner not to contact the lender, a lawyer or a counselor.",
          "Bait and switch: the owner is told the papers are for a new loan, but they actually transfer ownership while the owner still owes the mortgage.",
        ],
      },
      {
        heading: "Why older homeowners are targeted",
        paras: [
          "Foreclosure notices are public, and many older owners have large equity. Scammers mail, call and knock on doors as soon as a notice is recorded. Family members can help by watching the mail and asking about any offer that sounds too good.",
        ],
      },
      {
        heading: "Washington State's law against equity skimming",
        paras: [
          "Washington State's Distressed Property Conveyances Act (chapter 61.34 RCW) regulates people who contact owners in or near foreclosure and offer to save their homes, and deals that transfer a distressed home. A homeowner who signed such a deal should talk to an attorney or the legal aid line, 1-800-606-4819, right away.",
        ],
      },
      {
        heading: "How to report a scam",
        paras: [
          "File a complaint with the Washington State Attorney General's Office online at atg.wa.gov/file-complaint, or by mail. The housing counselor hotline, 1-877-894-HOME (4663), can also help check whether an offer is legitimate.",
        ],
      },
    ],
  },
];

export const FF_BY_PATH: Record<string, FFTopic> = Object.fromEntries(FF_TOPICS.map((t) => [t.path, t]));
