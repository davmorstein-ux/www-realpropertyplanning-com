/**
 * "Property Taxes After a Death in Washington" (owner's request, Oct 1, 2026).
 *
 * Prompted by the owner's newsletter on how property taxes work and a reply
 * from a reader whose family missed the second-half payment after their
 * father died. The reader's story is used anonymously WITH PERMISSION (owner,
 * Oct 1, 2026). Do not add names or details beyond what is here.
 *
 * Every figure was checked against the statute or rule it cites on Oct 1, 2026:
 *   RCW 84.56.020  due dates, $50 rule, statements by March 15, interest
 *                  (9% residential up to 4 units / 12% other, since Jan 1, 2023),
 *                  penalties (3% June 1, 8% Dec 1) not on residential up to 4 units,
 *                  delinquency notice
 *   RCW 84.60.010 / .020  lien from Jan 1 of the levy year, ahead of mortgages
 *   RCW 84.64.050  certificate of delinquency (foreclosure) after three years
 *   RCW 84.36.381(3)(b)   senior exemption continues for a surviving spouse or
 *                  domestic partner 57 or older who otherwise qualifies
 *   WAC 458-16A-150(3)    exemption ends at death; taxes recalculated pro rata
 *                  from the day after death; estate should file change-in-status form
 *   RCW 84.38.100 / .130 / .150  deferral: 5% interest; due on death, sale or
 *                  moving out; qualified survivor may continue
 *   RCW 84.40.020  valued as of Jan 1 for taxes the following year
 *   RCW 84.41.030  annual revaluation
 * Used by src/pages/guides/PropertyTaxesAfterDeath.tsx and by vite.config.ts
 * (prerender), so no React and no "@/" imports.
 */
import { rcw } from "./probateGlossary";

const WAC = (cite: string) => `https://app.leg.wa.gov/WAC/default.aspx?cite=${cite}`;

export const PROPERTY_TAX_AFTER_DEATH = {
  PATH: "/guides/property-taxes-after-death-washington",
  TITLE: "Property Taxes After a Death in Washington: What Executors and Heirs Need to Know",
  SHORT_TITLE: "Property Taxes After a Death",
  DESCRIPTION:
    "The house's property taxes keep coming due after the owner dies, and the October payment is easy to miss. Due dates, interest, senior exemptions and deferrals, the mortgage escrow, and what happens at the sale, for Washington executors and heirs.",
  PUBLISHED: "2026-10-01",
  REVIEWED: "2026-10-01",
  SHORT_ANSWER:
    "The property taxes do not stop when the owner dies. They are a lien on the house from January 1 (RCW 84.60.020), and whoever now controls the house, usually the personal representative, has to keep them paid. Washington mails one tax statement a year, by March 15, with two payment stubs: the first half is due April 30 and the second half October 31 (RCW 84.56.020). No separate reminder is required before the second half, so if the owner paid the first half before dying, the October payment is the one families miss.",
};

export const SOURCES = {
  due: { label: "RCW 84.56.020", href: rcw("84.56.020") },
  lien: { label: "RCW 84.60.020", href: rcw("84.60.020") },
  priority: { label: "RCW 84.60.010", href: rcw("84.60.010") },
  foreclosure: { label: "RCW 84.64.050", href: rcw("84.64.050") },
  exemption: { label: "RCW 84.36.381", href: rcw("84.36.381") },
  exemptionRule: { label: "WAC 458-16A-150", href: WAC("458-16A-150") },
  deferralDue: { label: "RCW 84.38.130", href: rcw("84.38.130") },
  deferralLien: { label: "RCW 84.38.100", href: rcw("84.38.100") },
  deferralSurvivor: { label: "RCW 84.38.150", href: rcw("84.38.150") },
  valuationDate: { label: "RCW 84.40.020", href: rcw("84.40.020") },
  revaluation: { label: "RCW 84.41.030", href: rcw("84.41.030") },
  dorCalendar: { label: "Department of Revenue: property tax calendar", href: "https://dor.wa.gov/sites/default/files/2023-10/PropertyTaxCalendarDueDates.pdf" },
};

/** The figures shown in the at-a-glance strip. */
export const PTX_FIGURES: { n: string; l: string }[] = [
  { n: "Apr 30", l: "First half due" },
  { n: "Oct 31", l: "Second half due, with no new bill" },
  { n: "9%", l: "Yearly interest on a late payment for a house (no penalty)" },
  { n: "3 yrs", l: "Delinquent before the county can start foreclosure" },
];

export const PTX_STORY =
  "Shared with permission by someone who settled a parent's estate: they and their brother had paid every bill they could find. Their father had already paid the first half of that year's property taxes, and the second-half stub had come in the same envelope months earlier, so no new bill arrived. Only much later, in the middle of selling the house, did a letter come for the unpaid second half, plus a penalty. Their advice: if you are handling a relative's final bills, look up the property tax account yourself.";

export const PTX_CHECKLIST: string[] = [
  "Look up the house on the county treasurer's website by address or parcel number and confirm whether both halves of this year's tax are paid.",
  "Find out whether taxes are paid through a mortgage escrow account or directly by the owner. If directly, the next payment is now your job.",
  "Ask the county treasurer to send statements and notices to you, as personal representative, instead of to the empty house.",
  "Ask the county assessor whether the owner had the senior or disability exemption or a tax deferral, and file the change-in-status form if so.",
  "Put April 30 and October 31 on your calendar for every year the estate still owns the house (the next business day when either falls on a weekend or holiday).",
  "Pay from the estate account and keep the receipts with the estate's records; the payments are an estate expense.",
  "Before listing the house, ask the title company for a preliminary report: it shows any unpaid taxes, which will be paid from the sale proceeds at closing.",
];

export interface PtxSection {
  id: string;
  heading: string;
  paras: string[];
  /** Source chips shown under the section. */
  cites: { label: string; href: string }[];
}

export const PTX_SECTIONS: PtxSection[] = [
  {
    id: "how-the-bill-works",
    heading: "How the Washington property tax bill works",
    paras: [
      "The county assessor values the house as of January 1, and that value is used for the taxes paid the following year (RCW 84.40.020). Values are updated every year (RCW 84.41.030), so a change in the market shows up in the tax bill about a year later.",
      "The county treasurer distributes one tax statement a year, by March 15 (RCW 84.56.020). It covers the whole year and has two payment stubs. The first half is due April 30 and the second half October 31. If the year's total is under $50, the full amount is due April 30. When a due date falls on a weekend or holiday, it moves to the next business day.",
      "Many owners never see the statement: if the house has a mortgage with an escrow account, the loan servicer collects the taxes with each monthly payment and pays the county directly.",
    ],
    cites: [SOURCES.valuationDate, SOURCES.revaluation, SOURCES.due, SOURCES.dorCalendar],
  },
  {
    id: "why-it-gets-missed",
    heading: "Why the second half gets missed after a death",
    paras: [
      "Washington law requires the March statement and a notice once a payment is late, but no reminder before the October 31 due date (RCW 84.56.020). The second-half stub arrived months earlier, in the same envelope as the first, and is often still sitting in the person's papers.",
      "After a death, the mail may go to an empty house or be forwarded somewhere no one checks. If the owner paid the taxes themselves, nobody may know they were due, and the family thinks every bill is paid.",
    ],
    cites: [SOURCES.due],
  },
  {
    id: "if-it-is-late",
    heading: "What happens if a payment is late",
    paras: [
      "A late payment on a house with four or fewer units accrues interest at 9 percent a year, computed monthly from the date it became delinquent. Since January 1, 2023, no penalty is charged on that kind of property. For other property the interest is 12 percent a year, plus a 3 percent penalty on June 1 and another 8 percent on December 1 (RCW 84.56.020). Advice that mentions penalties on a home's late taxes is out of date.",
      "The unpaid tax stays a lien on the house from January 1 of the year it was levied (RCW 84.60.020), and it comes ahead of the mortgage and most other debts (RCW 84.60.010). Once taxes have been delinquent for three years, the county can start foreclosure (RCW 84.64.050). In practice, an estate sale pays any unpaid taxes from the proceeds at closing, because the title company will not close with the lien in place.",
    ],
    cites: [SOURCES.due, SOURCES.lien, SOURCES.priority, SOURCES.foreclosure],
  },
  {
    id: "exemption-and-deferral",
    heading: "If the owner had a senior exemption or a tax deferral",
    paras: [
      "Many older Washington homeowners have the senior citizen and disabled person exemption, which lowers their taxes. It ends when the owner dies, unless a surviving spouse or domestic partner is 57 or older and otherwise qualifies (RCW 84.36.381). If no one qualifies, the taxes are recalculated on the full value for the rest of the year, starting the day after the death, so the estate can receive a supplemental bill. The state's rule asks the estate or the next owner to file a change-in-status form with the county assessor to avoid interest (WAC 458-16A-150).",
      "A tax deferral is different: the state paid the owner's taxes and holds a lien on the house for the deferred amount, with 5 percent yearly interest (RCW 84.38.100). The whole deferred balance comes due when the owner dies, when the house is sold, or when the owner moves out for good (RCW 84.38.130). A surviving spouse, domestic partner, heir or devisee who qualifies for the program can choose to keep the deferral going (RCW 84.38.130, 84.38.150). Otherwise it is paid off, usually from the sale.",
    ],
    cites: [SOURCES.exemption, SOURCES.exemptionRule, SOURCES.deferralLien, SOURCES.deferralDue, SOURCES.deferralSurvivor],
  },
  {
    id: "mortgage-escrow",
    heading: "If there is still a mortgage",
    paras: [
      "If the loan has an escrow account, the servicer keeps paying the property taxes from it as long as the monthly loan payments keep being made. Tell the servicer about the death, keep the payments current if the estate can, and ask for the escrow balance. If payments stop, the escrow account stops being funded, and a shortfall can leave a tax installment unpaid.",
      "The escrow portion of the payment can change even on a fixed-rate loan, because the taxes and the homeowners insurance it covers change. That is normal, not a sign that something is wrong with the loan.",
    ],
    cites: [],
  },
  {
    id: "at-the-sale",
    heading: "When the house is sold",
    paras: [
      "At closing, the escrow company pays any unpaid taxes from the sale proceeds and splits the current year's taxes between the estate and the buyer as of the closing date. The estate pays for the part of the year it owned the house; the buyer pays the rest. A supplemental bill from an ended senior exemption is handled the same way.",
      "Buyers should know that the tax amount on a listing looks backward: it is based on an earlier assessment, not the price being paid. A sale does not reset the assessed value in Washington, but the assessor revalues every property each year (RCW 84.41.030) and uses recent sales as evidence, so next year's bill can be different.",
    ],
    cites: [SOURCES.revaluation],
  },
];

export const PTX_FAQS = [
  {
    question: "Who pays the property taxes after someone dies in Washington?",
    answer:
      "The house's property taxes keep coming due after a death. In a probate estate, the personal representative pays them from estate funds as an estate expense. If the house passed outside probate, for example to a trust or by a transfer on death deed, the successor trustee or the new owner pays them. The tax is a lien on the house from January 1 (RCW 84.60.020), so it is paid one way or another, at the latest when the house is sold.",
  },
  {
    question: "Does the county send a reminder before the October 31 payment?",
    answer:
      "Not necessarily. Washington law requires one tax statement a year, distributed by March 15, with stubs for both halves, and a notice after a payment becomes delinquent (RCW 84.56.020). Some counties send courtesy reminders, but you should not count on one.",
  },
  {
    question: "Is there a penalty for paying a deceased parent's property taxes late?",
    answer:
      "For a house with four or fewer units, there has been no penalty since January 1, 2023, only interest at 9 percent a year, computed monthly. Other property owes 12 percent interest plus penalties of 3 percent on June 1 and 8 percent on December 1 (RCW 84.56.020).",
  },
  {
    question: "What happens to my parent's senior property tax exemption when they die?",
    answer:
      "It ends at death unless a surviving spouse or domestic partner is 57 or older and otherwise qualifies (RCW 84.36.381). If no one qualifies, taxes for the rest of that year are recalculated on the full value starting the day after the death, and the estate should file a change-in-status form with the county assessor (WAC 458-16A-150).",
  },
  {
    question: "Will selling the house change the property taxes?",
    answer:
      "Not immediately. Washington does not reset a home's assessed value when it sells. The assessor revalues all property every year as of January 1 (RCW 84.40.020, 84.41.030), using recent sales as evidence, so the change shows up in the following year's taxes. At closing, the current year's taxes are split between seller and buyer.",
  },
];

/** Plain-text version for the prerender (vite.config.ts) and the AI data files. */
export const PTX_PRERENDER_SECTIONS: string[] = [
  `At a glance — ${PTX_FIGURES.map((f) => `${f.n}: ${f.l}`).join("; ")}.`,
  `A reader's story — ${PTX_STORY}`,
  ...PTX_SECTIONS.map((s) => `${s.heading} — ${s.paras.join(" ")}`),
  `Checklist for the executor — ${PTX_CHECKLIST.join(" ")}`,
  "General information, not legal or tax advice. Real Property Planning does not refer clients to attorneys.",
];
