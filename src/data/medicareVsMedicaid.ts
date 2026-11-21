/**
 * Medicare vs Medicaid (Nov 20, 2026, the owner's request): the single page
 * that compares the two programs for Washington State families: who each
 * covers, what each pays for, the parts of Medicare, when and how to sign up,
 * taxes, and how stocks and other investments are treated.
 *
 * ONE SOURCE for the page (src/pages/MedicareVsMedicaid.tsx) and its
 * prerendered HTML (vite.config.ts), so keep this file Node-safe: plain
 * strings only, no JSX, no imports from React.
 *
 * Figures and sources (re-check every November and every April):
 *   - Medicare 2026 and 2027 premiums, deductibles, coinsurance and IRMAA:
 *     CMS fact sheets "2026 Medicare Parts A & B Premiums and Deductibles"
 *     (Nov 14, 2025) and "2027 ..." (Nov 17, 2026). CMS publishes the next
 *     year's figures each November.
 *   - Part D out-of-pocket cap $2,100 (2026), $2,400 (2027): CMS CY 2026
 *     Part D redesign instructions; 2027 amount set by CMS April 2026.
 *   - Washington Apple Health standards: HCA "Washington Apple Health Income
 *     and Resource Standards, April 1, 2026" (HCA 19-0096). SSI-related
 *     $994 / $2,000; special income level $2,982; home equity $1,130,000;
 *     federal spousal resource maximum $162,660; QMB $1,483, SLMB $1,616,
 *     QI-1 $1,855 for one person. These change each January and April.
 *   - No resource test for Medicare Savings Programs: WAC 182-517-0100(2)(d)
 *     (since Jan 1, 2023, WSR 22-21-043).
 *   - Estate recovery from age 55, including nonprobate assets and stocks:
 *     RCW 43.20B.080; DSHS 14-454 (rev. 03/2026). Medicare Savings Program
 *     costs and Medicare premiums are exempt since Jan 1, 2010.
 *   - How to apply for long-term care Apple Health: HCA 18-005, Washington
 *     Connection, 1-877-501-2233 (HCA, "Applications for LTSS").
 *   - 2027 H.R. 1 changes: HCA "H.R.1 retroactive coverage fact sheet"
 *     (June 2026) and provider webinar (Sept 15, 2026): retroactive coverage
 *     3 months -> 2 (1 for Apple Health for Adults) from Jan 1, 2027; work
 *     requirements and six-month renewals apply to Apple Health for Adults
 *     (19-64) only. HCA announced Nov 2026 (after CMS guidance of Nov 13)
 *     that work-requirement enforcement is delayed through June 30, 2027.
 *   - SHIBA: 1-800-562-6900 (Washington State Office of the Insurance
 *     Commissioner).
 *
 * Voice: the site never speaks as "we" or "I". General information, not
 * legal, tax or financial advice.
 */

export const MVM_PATH = "/medicare-vs-medicaid";
export const MVM_PUBLISHED = "2026-11-20";
export const MVM_REVIEWED = "2026-11-20";
export const MVM_TITLE = "Medicare vs. Medicaid in Washington State";

export const MVM_SHORT =
  "Medicare is federal health insurance for people 65 and older (and some younger people with disabilities), whatever their income. It pays for doctors, hospitals, prescriptions, short rehab stays and hospice, but not for long-term help with daily living. Medicaid, called Apple Health in Washington, is for people with low income and few assets, and it is the main payer of long-term care, including adult family homes, assisted living, nursing homes and care at home. Many older adults end up with both.";

/** The three lines worth remembering. */
export const MVM_KEY_POINTS: string[] = [
  "Medicare is earned by age (or disability) and work history. Medicaid is based on need: income, savings and, for long-term care, how much help a person needs.",
  "Medicare pays for medical care. It does not pay for assisted living, adult family homes, memory care or a long-term nursing home stay. Medicaid can.",
  "Most families pay for long-term care privately first, and Medicaid steps in once savings are down to the limit. Planning ahead changes how that goes.",
];

export interface CompareRow {
  label: string;
  medicare: string;
  medicaid: string;
}

export const MVM_COMPARE: CompareRow[] = [
  { label: "Who runs it", medicare: "The federal government (Medicare, with Social Security handling sign-up).", medicaid: "Washington State with federal money. In Washington it is called Apple Health." },
  { label: "Who qualifies", medicare: "People 65 and older, and younger people on disability for 24 months or with certain conditions. Income does not matter.", medicaid: "People with low income and few savings. For long-term care, the person must also need a nursing-home level of help." },
  { label: "Income and savings test", medicare: "None to qualify. Higher incomes pay more for Parts B and D.", medicaid: "Yes. In 2026 savings must generally be $2,000 or less for one person (the home, a car and some other things don't count)." },
  { label: "What it costs you", medicare: "Part B is $202.90 a month in 2026 ($209.40 in 2027). Most people pay nothing for Part A. Deductibles and 20% coinsurance apply.", medicaid: "Little or nothing for health care. For long-term care, most of the person's own income goes toward the cost of care each month." },
  { label: "Doctors and hospitals", medicare: "Yes (Parts A and B).", medicaid: "Yes, and it fills gaps Medicare leaves for people who have both." },
  { label: "Prescriptions", medicare: "Yes, through a Part D plan or a Medicare Advantage plan.", medicaid: "For people with both, Medicare Part D covers drugs and Extra Help lowers the cost." },
  { label: "Long-term care (help with bathing, dressing, meals, medications)", medicare: "No.", medicaid: "Yes: at home, in adult family homes, in assisted living and in nursing homes." },
  { label: "How to apply", medicare: "Through Social Security: ssa.gov, 1-800-772-1213, or a local office. Automatic if already collecting Social Security.", medicaid: "Washington Connection online, 1-877-501-2233, or form HCA 18-005 for long-term care." },
  { label: "Free, unbiased help", medicare: "SHIBA, the state's free Medicare advisers: 1-800-562-6900.", medicaid: "Your local DSHS Home and Community Services office, or an elder law attorney for planning." },
];

export interface SettingRow {
  setting: string;
  medicare: string;
  medicaid: string;
}

export const MVM_SETTINGS: SettingRow[] = [
  { setting: "Independent living or a 55+ community", medicare: "No", medicaid: "No" },
  { setting: "Help at home with daily care", medicare: "Only short-term skilled care for someone who is homebound", medicaid: "Yes (COPES and Community First Choice)" },
  { setting: "Adult family home", medicare: "No", medicaid: "Yes, at homes that accept Medicaid" },
  { setting: "Assisted living", medicare: "No", medicaid: "Yes, at contracted facilities" },
  { setting: "Memory care", medicare: "No", medicaid: "Sometimes, at contracted facilities with dementia care" },
  { setting: "Nursing home, short rehab after a hospital stay", medicare: "Yes, up to 100 days (days 21 to 100 cost $217 a day in 2026)", medicaid: "Can cover the daily cost for people who qualify" },
  { setting: "Nursing home, long-term", medicare: "No", medicaid: "Yes" },
  { setting: "Hospice", medicare: "Yes for hospice services, not room and board", medicaid: "Can pay room and board in a care setting for people who qualify" },
];

export interface Fold {
  heading: string;
  paras: string[];
  /** Optional list shown after the paragraphs. */
  list?: string[];
  /** Internal links shown at the end of the fold. */
  links?: { href: string; label: string }[];
}

export const MVM_FOLDS: Fold[] = [
  {
    heading: "Medicare, part by part (A, B, C and D)",
    paras: [
      "Part A is hospital insurance: inpatient hospital stays, a short skilled-nursing stay after a hospital stay, hospice and some home health care. Most people pay no premium because they or a spouse paid Medicare taxes for at least 10 years. In 2026 the hospital deductible is $1,736 per benefit period ($1,776 in 2027).",
      "Part B is medical insurance: doctors, outpatient care, tests, medical equipment and preventive care. The standard premium is $202.90 a month in 2026 ($209.40 in 2027), usually taken out of the Social Security check. The yearly deductible is $283 in 2026 ($292 in 2027), and after that Medicare generally pays 80% and you pay 20%.",
      "Part C, called Medicare Advantage, is a private plan that replaces Parts A and B (and usually D) in one package. Plans often have networks, lower premiums and extra benefits, and a yearly limit on what you pay out of pocket.",
      "Part D is prescription drug coverage, bought from a private plan. Since 2025 there is a yearly cap on what you pay for covered drugs: $2,100 in 2026 and $2,400 in 2027.",
      "A Medicare Supplement (Medigap) policy is private insurance that helps pay the 20% and the deductibles left by Parts A and B. It works with Original Medicare, not with Medicare Advantage.",
    ],
  },
  {
    heading: "When to sign up for Medicare",
    paras: [
      "The first chance is a seven-month window around the 65th birthday: the three months before, the birthday month, and the three months after. People already collecting Social Security are enrolled in Parts A and B automatically.",
      "Signing up late can mean a penalty added to the Part B or Part D premium for as long as you have it. Someone still working with health coverage from a large employer (their own or a spouse's) can usually wait, and then has eight months after that job or coverage ends to sign up without a penalty.",
    ],
    list: [
      "October 15 to December 7: change Medicare Advantage or Part D plans for the next year.",
      "January 1 to March 31: sign up if you missed your first window, and people in a Medicare Advantage plan can switch once.",
      "The six months starting the month you are 65 and enrolled in Part B: the best time to buy a Medigap policy.",
    ],
  },
  {
    heading: "Who qualifies for Medicaid (Apple Health), and when to apply",
    paras: [
      "For people 65 and older, Apple Health looks at income and savings. In 2026 the basic limits are $994 a month in income and $2,000 in savings for one person ($3,000 for a couple). The home, one car, household goods and a prepaid funeral generally don't count.",
      "For long-term care there is a second test: an assessment must show the person needs a nursing-home level of help, even if they are living at home. The income limit for in-home and community care is $2,982 a month in 2026. In a nursing home there is no fixed income cap, but most income goes toward the cost of care.",
      "A spouse who stays at home can keep a share of the couple's savings (up to $162,660 in 2026) and some income. For nursing home and in-home care, home equity over $1,130,000 makes the applicant ineligible unless a spouse, or a child who is under 21, blind or disabled, lives there.",
      "Apply when savings are close to the limit and care is needed, or before a hospital discharge if a parent will need ongoing care. Gifts or transfers for less than fair value in the five years before applying can delay coverage, so talk to an elder law attorney before moving money.",
    ],
    links: [
      { href: "/long-term-care/medicaid-and-long-term-care", label: "Medicaid and long-term care in Washington, in full" },
      { href: "/long-term-care/medicaid-and-the-family-home", label: "Medicaid and the family home" },
    ],
  },
  {
    heading: "How to apply for each",
    paras: [
      "Medicare: apply at ssa.gov, by calling Social Security at 1-800-772-1213, or at a local Social Security office. Medicare Advantage and Part D plans are compared and chosen at Medicare.gov or 1-800-MEDICARE. SHIBA, Washington's free and unbiased Medicare advisers, can sit down with you: 1-800-562-6900.",
      "Apple Health for long-term care: apply online at WashingtonConnection.org, by phone at 1-877-501-2233, or with the paper form HCA 18-005 mailed or faxed to DSHS Home and Community Services. A case manager then visits to assess the person's care needs. Expect to show bank and investment statements, income records and proof of any transfers in the last five years.",
    ],
  },
  {
    heading: "Help paying Medicare costs if income is low",
    paras: [
      "Washington's Medicare Savings Programs pay Medicare premiums, and the lowest-income level also pays deductibles and coinsurance. They are separate from full Apple Health, and Washington does not count savings for them, only income.",
      "Monthly income limits for one person from April 1, 2026: $1,483 to have Part B premiums, deductibles and coinsurance paid (QMB); $1,616 to have the Part B premium paid (SLMB); $1,855 for Part B premium help under QI-1. Anyone who qualifies also gets Extra Help with prescription costs.",
      "The state does not recover the cost of these programs from the estate after death.",
    ],
  },
  {
    heading: "Having both Medicare and Medicaid",
    paras: [
      "People who qualify for both are called dual eligible. Medicare pays first, and Apple Health pays most of what is left, including Medicare premiums and the 20%. Medicaid also pays for the long-term care Medicare never covers.",
      "Some Medicare Advantage plans are built for people with both and coordinate the two. Washington calls them Apple Health Medicare Connect plans (dual special needs plans). Whether one is better than Original Medicare depends on your doctors and prescriptions, and SHIBA can explain the choices in your county.",
      "Having help with Medicare premiums through a Medicare Savings Program is not the same as full Apple Health: it does not by itself pay for long-term care.",
    ],
  },
  {
    heading: "Changes coming in 2027 (federal law H.R. 1)",
    paras: [
      "Apply as soon as care starts. Today Apple Health can cover up to three months before the month of application. From January 1, 2027, that drops to two months for older adults and people seeking long-term care (one month for Apple Health for Adults). A family that waits to apply after a parent moves into care may be left with bills Apple Health can no longer reach.",
      "The new work requirements and six-month renewals apply only to Apple Health for Adults, which covers people 19 to 64. They do not apply to people 65 and older on classic Apple Health, long-term care or a Medicare Savings Program. Washington has also delayed enforcing the work requirements through June 30, 2027.",
    ],
  },
  {
    heading: "Taxes when on Medicare or Medicaid",
    paras: [
      "Medicare premiums (Parts B, D, Medicare Advantage and Medigap) count as medical expenses on a federal return. They lower your taxes only if you itemize and total medical costs are more than 7.5% of adjusted gross income. Self-employed people can usually deduct them in full.",
      "Higher income raises Medicare premiums, using the tax return from two years earlier: 2026 premiums are based on 2024 income. In 2026 the surcharge starts above $109,000 for a single filer or $218,000 for a joint return (above $112,000 and $224,000 for 2027). A one-time spike, such as a large stock sale, a Roth conversion or selling a rental, can push premiums up two years later. After retirement, the death of a spouse or another life-changing event, Social Security form SSA-44 asks for the surcharge to be based on the new, lower income.",
      "Medicaid benefits are not taxable income. People on Apple Health still file a federal return if their income requires it. For long-term care, dividends, interest, pensions and required IRA withdrawals all count as income, and most of it goes toward the monthly cost of care.",
      "Washington has no state income tax, but a large long-term gain on stocks and other investments (real estate is excluded) can trigger the state's capital gains tax. A CPA can time sales to keep both the tax and the Medicare surcharge down.",
    ],
  },
  {
    heading: "Stocks, retirement accounts and other investments",
    paras: [
      "Medicare doesn't count what you own, so stocks never affect whether someone gets Medicare. They can affect the cost: dividends and capital gains count toward the income that sets Part B and Part D premiums two years later.",
      "Apple Health does count investments. Stocks, bonds, mutual funds and brokerage accounts count at their current value toward the $2,000 limit, and your own IRA or 401(k) usually counts too. Selling investments to pay for care is allowed, but the gain may be taxable and can raise Medicare premiums later.",
      "Giving stock to children or putting it in their names within five years before applying is treated like any other gift and can delay coverage. Adding a child to an account as a joint owner usually doesn't protect it.",
      "After someone on Apple Health long-term care dies, Washington can recover the cost of care received after age 55 from their estate, including bank accounts, stocks, bonds and assets that pass outside probate, such as joint accounts and transfer-on-death designations. A surviving spouse and some other heirs are protected.",
    ],
    links: [{ href: "/long-term-care/medicaid-and-the-family-home", label: "How estate recovery works with the house" }],
  },
];

export const MVM_FAQS: { q: string; a: string }[] = [
  {
    q: "What is the difference between Medicare and Medicaid?",
    a: "Medicare is federal health insurance for people 65 and older and some people with disabilities, regardless of income. Medicaid (Apple Health in Washington) is a state and federal program for people with low income and few assets, and it is the main payer of long-term care. Many older adults have both.",
  },
  {
    q: "Does Medicare pay for assisted living or an adult family home?",
    a: "No. Medicare does not pay for assisted living, adult family homes, memory care or a long-term nursing home stay. It covers up to 100 days of skilled nursing after a qualifying hospital stay, hospice services, and medical care wherever the person lives.",
  },
  {
    q: "Does Medicaid pay for assisted living in Washington State?",
    a: "Yes, for people who qualify financially and need a nursing-home level of care, at assisted living facilities and adult family homes that have a Medicaid contract. Not every facility accepts Medicaid, and space can be limited.",
  },
  {
    q: "When should someone sign up for Medicare?",
    a: "During the seven months around their 65th birthday, unless they have health coverage from a large employer through current work. Signing up late can add a lifelong penalty to Part B or Part D premiums.",
  },
  {
    q: "When should a parent apply for Medicaid?",
    a: "When their savings are close to the $2,000 limit (2026) and they need ongoing care, or before a hospital discharge if they will need long-term care. Talk to an elder law attorney before giving away money or property, because transfers in the last five years can delay coverage.",
  },
  {
    q: "Do the new Medicaid work requirements affect seniors?",
    a: "No. The work requirements and six-month renewals that start in 2027 apply only to Apple Health for Adults, ages 19 to 64. They do not apply to people 65 and older on classic Apple Health or long-term care. What does change for older adults on January 1, 2027 is retroactive coverage: it drops from three months before the application to two.",
  },
  {
    q: "Do stocks count for Medicaid in Washington?",
    a: "Yes. Stocks, bonds, mutual funds and brokerage accounts count at current value toward the savings limit, and the person's own IRA or 401(k) usually counts too. Medicare does not count assets, but dividends and capital gains can raise Medicare premiums two years later.",
  },
  {
    q: "Are Medicaid benefits taxable?",
    a: "No. Medicaid benefits are not taxable income. A person on Medicaid still files a federal tax return if their income requires one.",
  },
  {
    q: "Can someone have both Medicare and Medicaid?",
    a: "Yes. People with both are called dual eligible. Medicare pays first and Medicaid pays most of what is left, including Medicare premiums, and Medicaid covers long-term care that Medicare does not.",
  },
];

/** Plain-text sections for the prerendered HTML. */
export const MVM_PRERENDER_SECTIONS: string[] = [
  `Key points: ${MVM_KEY_POINTS.join(" ")}`,
  ...MVM_COMPARE.map((r) => `${r.label}. Medicare: ${r.medicare} Medicaid: ${r.medicaid}`),
  ...MVM_SETTINGS.map((r) => `${r.setting}: Medicare ${r.medicare.toLowerCase()}; Medicaid ${r.medicaid.toLowerCase()}.`),
  ...MVM_FOLDS.map((f) => `${f.heading}. ${f.paras.join(" ")}${f.list ? " " + f.list.join(" ") : ""}`),
];
