/**
 * "Medicaid and the Family Home in Washington" (Question Map step 7, Oct 4,
 * 2026; audit questions Q130, Q143, Q152, Q170, Q171, Q173, Q174, Q184, Q185,
 * Q186, Q190, Q191, Q192 — the house-specific Medicaid questions that were
 * split across four pages).
 *
 * Sources, checked Oct 4, 2026:
 *   - Home exemption, intent to return, the $1,130,000 (2026) equity limit and
 *     when it does not apply, the $2,000 asset limit and the $162,660 (2026)
 *     Community Spouse Resource Allowance: repeated from
 *     /long-term-care/medicaid-and-long-term-care and its quick answers, which
 *     cite WAC 182-513-1350. Recheck these figures each January with that page.
 *   - WAC 182-513-1363: 60-month look-back; (4)(d) home transfers without a
 *     penalty — to a spouse; a child under 21; a child meeting the disability
 *     criteria; a sibling with an equity interest who lived in the home at
 *     least one year immediately before; a child who lived in the home at
 *     least two years and provided verifiable care (with documentation rules)
 *   - DSHS 14-454 Estate Recovery (rev. 03/2026): recovery of federally funded
 *     long-term services after 55 and state-funded services at any age; reaches
 *     houses, accounts and non-probate assets and life estates; deferred while
 *     a spouse, a child under 21, or a blind or disabled child survives; undue
 *     hardship (an heir's irreplaceable housing, sole income-producing asset);
 *     pre-death (TEFRA) lien when the person lives in a medical facility and is
 *     not reasonably expected to return home, not filed when a spouse,
 *     registered domestic partner, child under 21 or sibling lives there,
 *     released on return home; Office of Financial Recovery 800-562-6114
 *   - RCW 43.20B.080 (recovery), RCW 11.40.020 (notice to creditors to DSHS):
 *     already cited by the probate glossary
 * Used by the page and by vite.config.ts (prerender): no React, no "@/".
 */
import { rcw } from "./probateGlossary";

const wac = (cite: string) => `https://app.leg.wa.gov/WAC/default.aspx?cite=${cite}`;

export const MEDICAID_AND_THE_HOME = {
  PATH: "/long-term-care/medicaid-and-the-family-home",
  TITLE: "Medicaid and the Family Home in Washington",
  SHORT_TITLE: "Medicaid and the Family Home",
  DESCRIPTION:
    "What happens to a parent's house when they need Apple Health (Medicaid) for long-term care in Washington: when the home is protected, what changes if it sits empty or is sold, giving it to family, the spouse at home, and estate recovery after death.",
  PUBLISHED: "2026-10-04",
  REVIEWED: "2026-10-04",
  SHORT_ANSWER:
    "Usually the house can be kept while your parent receives care. Washington's Apple Health generally treats the home as exempt while your parent intends to return to it, or while a spouse or dependent relative lives there, within a home equity limit ($1,130,000 in 2026). If the house is sold, the cash counts toward the $2,000 asset limit. Giving it away within 60 months before applying can cause a penalty, with some exceptions. After death, the state may seek to recover what it paid for long-term care from the estate, including the house, though recovery is deferred while a spouse or certain children survive.",
};

const SRC = {
  exemption: { label: "WAC 182-513-1350", href: wac("182-513-1350") },
  transfers: { label: "WAC 182-513-1363", href: wac("182-513-1363") },
  recoveryForm: { label: "DSHS 14-454: Estate Recovery (2026)", href: "https://www.dshs.wa.gov/sites/default/files/forms/pdf/14-454lp.pdf" },
  recovery: { label: "RCW 43.20B.080", href: rcw("43.20B.080") },
  notice: { label: "RCW 11.40.020", href: rcw("11.40.020") },
};

export interface MthSection {
  id: string;
  heading: string;
  paras: string[];
  cites: { label: string; href: string }[];
}

export const MTH_SECTIONS: MthSection[] = [
  {
    id: "while-alive",
    heading: "While your parent is alive, the house is usually protected",
    paras: [
      "For Apple Health long-term care, the home is generally an exempt asset: it does not count toward the $2,000 asset limit for a single person. That stays true after your parent moves into a nursing home, adult family home or assisted living, as long as they intend to return home, or a spouse or dependent relative lives there. The house does not have to be sold for your parent to qualify.",
      "There is a ceiling. For nursing home and COPES coverage, home equity above $1,130,000 (2026) makes the applicant ineligible unless a spouse or dependent child lives in the home. Equity is the value of your parent's share minus the mortgage and other debts on it, so an accurate, documented value matters when the house is close to the limit.",
    ],
    cites: [SRC.exemption],
  },
  {
    id: "empty-house",
    heading: "If the house sits empty",
    paras: [
      "Keeping the house exempt does not keep it free. Property taxes, insurance, utilities and upkeep still have to be paid, and a vacant house may need different insurance; call the insurer once no one is living there.",
      "If your parent lives in a medical facility and is not reasonably expected to return home, DSHS can place a lien on the house before death. It will not file one if a spouse, state-registered domestic partner, child under 21 or sibling lives there, and it releases the lien if your parent returns home. If the house is sold, DSHS recovers its costs from the proceeds.",
    ],
    cites: [SRC.recoveryForm],
  },
  {
    id: "selling",
    heading: "If the house is sold",
    paras: [
      "A sale at fair market value is not a penalized transfer, but the money it brings in is no longer exempt. The net proceeds count toward the $2,000 asset limit, so they are generally spent on your parent's care before Apple Health pays. That can be a deliberate plan: private-pay choice first, Medicaid later if it is needed.",
      "A sale to a family member for less than the house is worth is treated as a partial gift (see the next section). An independent appraisal is the usual way to document that the price was fair.",
    ],
    cites: [SRC.transfers],
  },
  {
    id: "giving-it-away",
    heading: "Giving the house to family",
    paras: [
      "Apple Health looks back 60 months. A gift of the house, adding a child to the title, or a sale to family below fair value within 60 months before applying can cause a penalty period: months when Medicaid will not pay for long-term care. A child who receives the house as a gift also loses the stepped-up tax basis they would get by inheriting it.",
      "Washington's rule allows a home to go, without a penalty, to the person's spouse; to a child under 21; to a child who meets the disability criteria; to a brother or sister who has an equity interest in the home and lived there for at least a year immediately before the parent needed institutional care; or to a son or daughter who lived in the home for at least two years and provided care, documented, that let the parent stay at home rather than move into care. Each exception has conditions; have an elder law attorney confirm one applies before any deed is signed.",
    ],
    cites: [SRC.transfers],
  },
  {
    id: "spouse-at-home",
    heading: "If one spouse needs care and the other stays home",
    paras: [
      "The home stays exempt while the spouse lives in it, and the home equity limit does not apply. The spouse at home may also keep a share of the couple's other assets, the Community Spouse Resource Allowance (up to $162,660 in 2026), plus a minimum monthly income. These rules exist so the healthy spouse is not impoverished by the other's care.",
      "A transfer of the house to the spouse is also allowed without a penalty. How the couple holds title, and what happens to the house after both die, are worth settling with an elder law attorney early.",
    ],
    cites: [SRC.exemption, SRC.transfers],
  },
  {
    id: "estate-recovery",
    heading: "After death: estate recovery",
    paras: [
      "Washington seeks to recover what it paid for federally funded long-term services and supports received at age 55 or older, and state-funded services at any age, from the person's estate. That reaches the house, bank accounts and other property, including non-probate assets such as a house passing by transfer on death deed, and life estates. It is why the personal representative's notice to creditors goes to DSHS.",
      "Recovery is deferred while the person's spouse survives, or a child under 21, or a child who is blind or disabled. DSHS can also grant an undue hardship waiver, for example when recovery would cost an heir housing they cannot replace, or when the property is an heir's only income-producing asset.",
      "Families can ask the DSHS Office of Financial Recovery about a specific estate at 800-562-6114.",
    ],
    cites: [SRC.recoveryForm, SRC.recovery, SRC.notice],
  },
];

export const MTH_CHECKLIST: string[] = [
  "Write down whether your parent intends to return home, and who, if anyone, lives in the house now.",
  "Keep paying the property taxes, insurance and utilities, and tell the insurer if the house will be empty.",
  "Get a documented value if the equity may be near the limit, or before any sale to family.",
  "Do not gift the house, add a child to the title, or sell it to family below value without advice from an elder law attorney.",
  "If the house will be sold, plan how the proceeds will pay for care and when to apply.",
  "After a death, expect DSHS to receive the notice to creditors, and ask the Office of Financial Recovery about deferral or a hardship waiver if they may apply.",
];

export const MTH_FAQS = [
  {
    question: "Will Medicaid take my parent's house in Washington?",
    answer:
      "Not while your parent is alive and qualifies: the home is generally exempt while they intend to return or a spouse or dependent relative lives there, within the equity limit. The risk comes after death, when Washington may recover the cost of long-term care from the estate, including the house. Recovery is deferred while a spouse, a child under 21, or a blind or disabled child survives, and hardship waivers exist.",
  },
  {
    question: "Does my mother have to sell her house to qualify for Medicaid?",
    answer:
      "Generally no. If she intends to return home and her equity is under $1,130,000 (2026), the house is usually exempt and does not have to be sold. Someone still has to pay the taxes, insurance and upkeep, and if she is not expected to return home, DSHS may place a lien on the house that it collects from if the house is later sold.",
  },
  {
    question: "Can my parent give me the house to protect it from Medicaid?",
    answer:
      "Usually not without a penalty. A gift within 60 months before applying can delay Medicaid coverage. Washington allows a home to pass without a penalty to a spouse, a child under 21, a child with a disability, a sibling with an equity interest who lived there a year, or a child who lived there two years and provided care that kept the parent at home. Get elder law advice before any transfer.",
  },
  {
    question: "Can the spouse at home keep the house if the other spouse needs Medicaid?",
    answer:
      "Yes. The home stays exempt while the spouse lives there, the equity limit does not apply, and the spouse can keep a share of the couple's assets (up to $162,660 in 2026) plus a minimum monthly income. Estate recovery is deferred while the surviving spouse is alive.",
  },
];

/** Plain-text version for the prerender (vite.config.ts). */
export const MTH_PRERENDER_SECTIONS: string[] = [
  ...MTH_SECTIONS.map((s) => `${s.heading} — ${s.paras.join(" ")}`),
  `Checklist — ${MTH_CHECKLIST.join(" ")}`,
  "General information, not legal advice. Medicaid figures change each year. Real Property Planning does not refer clients to attorneys.",
];
