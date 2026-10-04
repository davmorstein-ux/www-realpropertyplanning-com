/**
 * Quick answers (Question Map audit, Oct 4, 2026, step 5): on pages that held
 * the answer to a common question but buried it (a collapsed FAQ, the
 * glossary, a table row), a short block near the top puts the question as a
 * heading and answers it directly, in 40–80 words.
 *
 * Every fact here already appears elsewhere on the site with its source, and
 * the source is repeated beside the answer. Do not add a fact here that the
 * site does not already state and cite; new facts go through the page that
 * owns them first. Rendered by <QuickAnswers /> from the current path.
 * Figures carry their year; recheck them each January with the pages they
 * came from (Medicaid figures: MedicaidAndLongTermCare.tsx and
 * SellHouseFundSeniorLiving.tsx; care costs come straight from careTypes.ts).
 */

export interface QuickAnswer {
  q: string;
  a: string;
  /** Where the fact comes from, shown as "Source:". */
  source?: { label: string; href: string };
  /** The page (or glossary entry) that covers it in full. */
  more?: { label: string; href: string };
}

const rcw = (cite: string) => `https://app.leg.wa.gov/RCW/default.aspx?cite=${cite}`;
const wac = (cite: string) => `https://app.leg.wa.gov/WAC/default.aspx?cite=${cite}`;

export const QUICK_ANSWERS: Record<string, QuickAnswer[]> = {
  "/long-term-care/medicaid-and-long-term-care": [
    {
      q: "Does Medicaid count the house if a parent moves into care?",
      a: "Usually not while your parent intends to return home, or while a spouse or dependent relative lives there: the home is generally an exempt asset for Apple Health long-term care, within a home equity limit ($1,130,000 in 2026). Once the house is sold, the cash counts toward the $2,000 asset limit for a single person and is generally spent on care before Medicaid pays.",
      source: { label: "WAC 182-513-1350", href: wac("182-513-1350") },
      more: { label: "Selling a parent's house to pay for care", href: "/sell-house-fund-senior-living" },
    },
    {
      q: "Can the spouse at home keep the house and some savings?",
      a: "Yes, within limits. The home stays exempt while the spouse lives there, and the community spouse may keep a share of the couple's assets, the Community Spouse Resource Allowance (up to $162,660 in 2026), plus a minimum monthly income. These rules exist so the healthy spouse is not impoverished by the other's care; an elder law attorney can explain how they apply before you spend down.",
      source: { label: "WAC 182-513-1350", href: wac("182-513-1350") },
    },
    {
      q: "Can a parent give the house to a child to protect it?",
      a: "Not without risk. A gift, or a sale to family for less than fair value, within 60 months before applying for Apple Health long-term care can cause a penalty period with no coverage. Adding a child to the title is a gift too, and the child loses the stepped-up tax basis they would receive by inheriting. Talk with an elder law attorney before any transfer.",
      source: { label: "WAC 182-513-1363", href: wac("182-513-1363") },
      more: { label: "Wills, trusts and adding a child to title", href: "/articles/wills-trusts-other-options" },
    },
    {
      q: "Can the state make a claim on the house after death?",
      a: "It can. Washington recovers the cost of Medicaid long-term care received at age 55 or older (and of state-funded long-term care at any age) from the estate, and the claim reaches nonprobate assets too, such as a house passing by transfer on death deed. That is why a personal representative sends the notice to creditors to DSHS.",
      more: { label: "Estate recovery in the probate glossary", href: "/probate-glossary#estate-recovery" },
    },
  ],

  "/guides/who-has-authority-sell-probate-property-washington": [
    {
      q: "How do you get letters testamentary in Washington?",
      a: "The person named in the will, usually through a probate attorney, petitions the superior court and files the original will; the petitioner may choose any Washington county. When the court admits the will and appoints the personal representative, the clerk issues letters testamentary, the document banks and title companies ask for. Until then the executor can secure and insure the house but cannot sell it.",
      source: { label: "RCW 11.96A.050, 11.68.090", href: rcw("11.68.090") },
    },
    {
      q: "Who is appointed when there is no will?",
      a: "The court appoints an administrator in a set order of priority: the surviving spouse or registered domestic partner first, then next of kin. A nonresident may serve by appointing a local agent. Once appointed, the administrator receives letters of administration and has the same authority over the house as an executor named in a will.",
      source: { label: "RCW 11.28.120, 11.36.010", href: rcw("11.28.120") },
    },
    {
      q: "What are nonintervention powers, and what if the estate doesn't have them?",
      a: "Nonintervention powers let the personal representative of a solvent estate settle it without further court orders, including selling the house without court approval; most Washington estates are administered this way. Without them, a sale generally needs a court order, then a report of sale and the court's confirmation.",
      source: { label: "RCW 11.68.090; chapter 11.56 RCW", href: rcw("11.68.090") },
    },
  ],

  "/guides/heirs-disagree-selling-house": [
    {
      q: "What is a partition action?",
      a: "A lawsuit by a co-owner asking the court to divide a property or, when it cannot be divided fairly, to order it sold and the proceeds shared. It is the last resort when heirs who each own a share cannot agree. For property inherited by relatives, Washington's Uniform Partition of Heirs Property Act may apply, giving the other co-owners a chance to buy out the one who sued.",
      source: { label: "RCW 7.52.010; chapter 7.54 RCW", href: rcw("7.52.010") },
    },
    {
      q: "How do heirs agree on a buyout price?",
      a: "Most families agree in writing, before anyone orders a report, to rely on one independent appraisal, and settle two points in advance: the date the value is as of, and whether the selling costs the buying heir avoids are shared. If the buying heir is also the personal representative, they are selling to themselves as a fiduciary, so the price and the other heirs' agreement should be documented.",
      more: { label: "Date-of-death and estate appraisals", href: "/date-of-death-valuation-property-appraisals" },
    },
  ],

  "/guides/out-of-state-families": [
    {
      q: "Can I be the executor if I live outside Washington?",
      a: "Yes. A personal representative who lives outside Washington may serve, but must appoint an agent in the county of the probate (or the estate's attorney of record) to accept legal papers, and may have to post a bond unless it is waived. Much of the rest, including selling the house, can then be handled from where you live with local professionals.",
      source: { label: "RCW 11.36.010", href: rcw("11.36.010") },
    },
    {
      q: "Does a Washington house need probate here if the owner lived in another state?",
      a: "Usually, if it was in the owner's name alone. The main probate happens where the person lived, and a Washington house typically needs a second, local ancillary probate here. A house that passes outside probate, such as one held in a trust, in joint tenancy with right of survivorship, or by a recorded transfer on death deed, does not.",
      more: { label: "Ancillary probate in the glossary", href: "/probate-glossary#ancillary-probate" },
    },
  ],

  "/sell-house-fund-senior-living": [
    {
      q: "Can family buy a parent's house below market value?",
      a: "It is risky if Medicaid may be needed. A sale to family for less than fair value within 60 months before applying for Apple Health long-term care counts as a partial gift, and the discount can cause a penalty period without coverage. A sale at documented fair value avoids that, though the cash then counts toward the asset limit. An independent appraisal is the usual way to document value.",
      source: { label: "WAC 182-513-1363", href: wac("182-513-1363") },
    },
    {
      q: "Can a power of attorney sell the house to pay for care?",
      a: "Usually, if the durable power of attorney gives the agent authority over real estate. No court order is needed; the title company reviews the document, and Washington requires a notarized POA to be accepted, or a certification requested, within seven business days. The proceeds belong to the parent and must be used for their benefit, such as paying for care.",
      source: { label: "RCW 11.125.200", href: rcw("11.125.200") },
      more: { label: "Powers of attorney in Washington", href: "/power-of-attorney" },
    },
  ],

  "/power-of-attorney": [
    {
      q: "Does an agent need a court order to sell a parent's house?",
      a: "No, when the power of attorney grants authority over real property. The title company reviews the document, and Washington limits refusals: a person asked to accept a notarized POA must accept it, or request an agent's certification or a translation, within seven business days. A court becomes involved only when there is no usable POA and a guardian or conservator has to be appointed.",
      source: { label: "RCW 11.125.200", href: rcw("11.125.200") },
    },
    {
      q: "Can we sell the house while a parent lives in a care facility?",
      a: "Yes. The parent can sign if they still have capacity; otherwise an agent under a durable power of attorney with real estate authority can list the house and sign for them. If there is no POA and the parent lacks capacity, a court-appointed guardian or conservator is needed.",
      more: { label: "Selling a parent's house to pay for care", href: "/sell-house-fund-senior-living" },
    },
    {
      q: "What happens to the power of attorney when the parent dies?",
      a: "It ends at death. From then on only a court-appointed personal representative (or a successor trustee, for a house held in a trust) can sell the house, so a sale that is underway must pause until someone is appointed.",
      more: { label: "Who has authority to sell after a death", href: "/guides/who-has-authority-sell-probate-property-washington" },
    },
  ],

  "/guides/taxes-selling-inherited-house-washington": [
    {
      q: "Does a surviving spouse get a new tax basis on the whole house?",
      a: "Often, yes. For federal income tax, inherited property generally takes a new basis equal to its value at the date of death, and for community property both halves usually get the new basis at the first spouse's death, not just the half that belonged to the spouse who died. A date-of-death appraisal documents that value for a later sale; confirm with a CPA how the home was held.",
      source: { label: "26 U.S.C. § 1014", href: "https://www.law.cornell.edu/uscode/text/26/1014" },
    },
    {
      q: "Is real estate excise tax due when the estate sells?",
      a: "Yes. Passing a house to heirs by inheritance is exempt from Washington's real estate excise tax, but when the estate or the heirs later sell to a buyer, the sale is taxed like any other, usually paid by the seller at closing.",
      source: { label: "WAC 458-61A-202", href: wac("458-61A-202") },
    },
  ],

  "/long-term-care/how-to-choose-care-settings": [
    {
      q: "Is an adult family home cheaper than assisted living?",
      a: "Often, but compare at the same level of care. Assisted living's Washington median and this site's adult family home estimate are in the table below; adult family homes set their own private-pay rates, so the real comparison is each home's all-in monthly cost at your parent's care level.",
      more: { label: "Cost of care calculators", href: "/cost-of-care-calculator" },
    },
    {
      q: "When does someone need a nursing home rather than an adult family home?",
      a: "When they need licensed nurses on staff, such as for complex medical management or rehabilitation after a hospital stay. Adult family homes usually are not staffed by licensed nurses, but through nurse delegation a registered nurse can train and authorize caregivers to do some nursing tasks, which lets many people with medical needs stay in an adult family home.",
      more: { label: "How nurse delegation works", href: "/long-term-care/nurse-delegation" },
    },
  ],
};

/** Care-cost rows shown under the quick answers on these pages (from careTypes.ts). */
export const QUICK_ANSWER_COST_TABLE: Record<string, string[]> = {
  "/long-term-care/how-to-choose-care-settings": ["in-home", "adult-family-home", "assisted-living", "memory-care", "nursing-semi"],
};

export function quickAnswersFor(pathname: string): QuickAnswer[] {
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  return QUICK_ANSWERS[path] ?? [];
}
