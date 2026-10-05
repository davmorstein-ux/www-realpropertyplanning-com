/**
 * "Can a Parent Afford to Stay at Home?" (Question Map step 7, Oct 4, 2026;
 * audit questions Q125 and Q133).
 *
 * Sources, checked Oct 4, 2026:
 *   - Care costs: src/lib/careTypes.ts (CareScout Cost of Care Survey, 2025
 *     data). In-home care: Washington median $8,580 a month for about 44 hours
 *     a week, about $45 an hour. Every figure below is computed from that
 *     file, never typed in, so it moves when careTypes.ts is updated.
 *   - Senior property tax exemption: Washington Department of Revenue,
 *     "Property tax exemption for senior citizens and people with
 *     disabilities" (rev. Sept 23, 2024): age 61 by Dec 31 of the assessment
 *     year (or 57+ surviving spouse of a participant, or disabled); owner who
 *     lives there more than six months a year; residence plus up to one acre;
 *     income threshold the greater of last year's or 70% of county median
 *     household income; three levels of relief; apply to the county assessor
 *     by Dec 31 of the assessment year. Exemption and deferral sections of
 *     /guides/property-taxes-after-death-washington cite RCW 84.36.381 and
 *     chapter 84.38.
 *   - Medicaid in-home programs and the COPES income limit: repeated from
 *     /long-term-care/medicaid-and-long-term-care.
 *   - Reverse mortgage 12-month rule: repeated from
 *     /sell-house-fund-senior-living (MoveOrSellFirst.tsx).
 * The audit's "upkeep is 1-2% of value a year" rule of thumb is NOT used: no
 * primary source was found. The worksheet asks for the family's own figure.
 * Used by the page and by vite.config.ts (prerender): no React, no "@/".
 */
import { CARE_TYPES } from "../lib/careTypes";

const find = (id: string) => CARE_TYPES.find((c) => c.id === id)!;
export const IN_HOME = find("in-home");
export const ASSISTED = find("assisted-living");
export const AFH = find("adult-family-home");
/** Hours a month the in-home median is based on (about 44 a week). */
const MEDIAN_HOURS_PER_MONTH = (44 * 52) / 12;
/** Washington in-home care hourly rate implied by the survey median. */
export const HOURLY_RATE = Math.round(IN_HOME.waMonthly / MEDIAN_HOURS_PER_MONTH);
export const WEEKS_PER_MONTH = 52 / 12;

const usd = (n: number) => `$${Math.round(n).toLocaleString("en-US")}`;

/** The worked example (audit Q133). Housing figures are the example's own. */
export const EXAMPLE = {
  income: 2400,
  mortgage: 0,
  propertyTax: 550,
  insurance: 150,
  utilities: 350,
  upkeep: 300,
  hoursPerDay: 6,
  daysPerWeek: 7,
  savings: 150000,
};
export const exampleCare = Math.round(EXAMPLE.hoursPerDay * EXAMPLE.daysPerWeek * WEEKS_PER_MONTH * HOURLY_RATE);
export const exampleHousing = EXAMPLE.mortgage + EXAMPLE.propertyTax + EXAMPLE.insurance + EXAMPLE.utilities + EXAMPLE.upkeep;
export const exampleGap = exampleCare + exampleHousing - EXAMPLE.income;

export const STAY_HOME = {
  PATH: "/senior-transitions/can-parent-afford-to-stay-home",
  TITLE: "Can a Parent Afford to Stay at Home?",
  SHORT_TITLE: "Can a Parent Afford to Stay Home?",
  DESCRIPTION:
    "A worksheet for Washington families: add up the real monthly cost of staying home, including care hours at Washington rates, compare it with income and savings, and see the ways families close the gap.",
  PUBLISHED: "2026-10-04",
  REVIEWED: "2026-10-04",
  SHORT_ANSWER: `Compare your parent's monthly income with the full monthly cost of staying home: the housing costs that continue (mortgage, property tax, insurance, utilities, upkeep) plus the care they need. Care is usually the largest part. In-home care in Washington runs about ${usd(HOURLY_RATE)} an hour, so six hours a day is about ${usd(exampleCare)} a month. If income and savings cover the total for as long as care is likely to be needed, staying home works; if not, the gap has to come from the house's equity, public programs, family help or a move.`,
};

export interface ShSection {
  id: string;
  heading: string;
  paras: string[];
  cites: { label: string; href: string }[];
}

const DOR = {
  label: "Department of Revenue: senior property tax exemption",
  href: "https://www.dor.wa.gov/sites/default/files/2022-02/PTExemption_Senior.pdf",
};
const CARESCOUT = { label: "CareScout Cost of Care Survey (2025 data)", href: "https://www.businesswire.com/news/home/20260302776244/en/CareScout-Releases-2025-Cost-of-Care-Data-for-Washington" };

export const SH_SECTIONS: ShSection[] = [
  {
    id: "the-real-cost",
    heading: "The real cost of staying home",
    paras: [
      "Staying home feels like the cheaper choice because the house is already paid for. But the house still costs money every month (property tax, insurance, utilities, repairs and, for some, a mortgage), and once a parent needs help, the care hours are added on top.",
      `Care is the number that decides it. Washington's median for in-home care is about ${usd(HOURLY_RATE)} an hour, or about ${usd(IN_HOME.waMonthly)} a month for roughly 44 hours a week. A few hours a week is affordable for many families; round-the-clock care at home usually costs more than any residential setting.`,
    ],
    cites: [CARESCOUT],
  },
  {
    id: "example",
    heading: "Example: Dad, his house, and six hours of care a day",
    paras: [
      `Dad is 84 and owns his house outright. He gets ${usd(EXAMPLE.income)} a month from Social Security and now needs about six hours of help a day. At ${usd(HOURLY_RATE)} an hour, that is about ${usd(exampleCare)} a month. With about ${usd(exampleHousing)} a month for property tax, insurance, utilities and upkeep, staying home costs about ${usd(exampleCare + exampleHousing)} a month: a gap of about ${usd(exampleGap)} a month after his income.`,
      `With ${usd(EXAMPLE.savings)} in savings, that gap uses up the savings in about ${Math.floor(EXAMPLE.savings / exampleGap)} months. For comparison, Washington's assisted living median is about ${usd(ASSISTED.waMonthly)} a month and this site's adult family home estimate is about ${usd(AFH.waMonthly)}, though either would leave the house to sell, rent or keep empty. The family's choices are to close the gap with the house's equity, public programs or family help, or to plan a move before the savings run out.`,
    ],
    cites: [],
  },
  {
    id: "closing-the-gap",
    heading: "Ways families close the gap",
    paras: [
      "Property tax relief. Washington exempts part of the property tax for homeowners who are 61 or older (or disabled, or a surviving spouse 57 or older of a participant), live in the home more than six months a year, and have income under their county's threshold, which is at least 70 percent of the county's median household income. Apply to the county assessor. A deferral program lets some owners postpone the tax instead; the deferred tax is a lien on the house, repaid when it is sold or the owner dies or moves out.",
      "Medicaid in-home care. Apple Health long-term care programs, including COPES and Community First Choice, pay for in-home personal care for people who meet the medical and financial tests; the home is generally exempt within the equity limit.",
      "The house's equity. A reverse mortgage can turn equity into monthly income or a line of credit for a parent who is staying, though it generally comes due once the last borrower has been away in a care facility for more than 12 consecutive months. Selling is the other way to use the equity, and it usually means a move.",
      "Family help and other care. Family caregivers, adult day programs and respite care can cut the paid hours. Adult day care runs about $" + Math.round(find("adult-day").waMonthly).toLocaleString("en-US") + " a month in Washington for five days a week, often less than the same hours of in-home care.",
    ],
    cites: [DOR, CARESCOUT],
  },
  {
    id: "when-it-stops-working",
    heading: "When staying home stops working",
    paras: [
      "The numbers are only part of it. Staying home stops working when care is needed at night, when one caregiver can no longer manage transfers or wandering safely, or when the family caregivers are worn out. When the cost of the hours needed passes the cost of a residential setting, it is worth comparing the options seriously, before a fall or a hospital stay forces the decision.",
    ],
    cites: [],
  },
];

export const SH_FAQS = [
  {
    question: "How much does in-home care cost in Washington?",
    answer: `About ${usd(HOURLY_RATE)} an hour at the Washington median, or about ${usd(IN_HOME.waMonthly)} a month for roughly 44 hours a week (CareScout Cost of Care Survey, 2025 data).`,
  },
  {
    question: "Is it cheaper to stay home or move to assisted living?",
    answer: `It depends on how many care hours are needed. A few hours a week at home usually costs less than assisted living, about ${usd(ASSISTED.waMonthly)} a month at the Washington median. By these figures, once care reaches about five hours a day, in-home care plus the house's ongoing costs is more than the assisted living median.`,
  },
  {
    question: "Can my parent get help with property taxes to stay home?",
    answer:
      "Possibly. Washington's senior property tax exemption is for owners 61 or older (or disabled) who live in the home and have income under their county's threshold, at least 70 percent of county median household income. A deferral program can postpone the tax. Both are handled by the county assessor.",
  },
];

/** Plain-text version for the prerender (vite.config.ts). */
export const SH_PRERENDER_SECTIONS: string[] = [
  ...SH_SECTIONS.map((s) => `${s.heading} — ${s.paras.join(" ")}`),
  "The page includes a worksheet: enter monthly income, housing costs, care hours and savings to see the monthly gap and how long savings would last.",
  "General information, not financial advice. Care costs are Washington medians from the CareScout Cost of Care Survey, 2025 data.",
];
