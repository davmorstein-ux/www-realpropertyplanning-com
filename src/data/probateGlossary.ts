/**
 * Probate & estate property glossary: Washington terms (Sept 30, 2026).
 *
 * One source for /probate-glossary (the page, its DefinedTermSet schema, and
 * its prerendered HTML in vite.config.ts) and for the "Terms to know" block on
 * /washington-probate-guide. No React, relative imports only: the build
 * imports this file in Node.
 *
 * RULES
 * - Every definition must agree with the statute it cites (`source`) and with
 *   the guide it links to (`guide`). If a fact changes, change it here, on the
 *   pillar page and in the guide the same day. src/test/probateGlossary.test.ts
 *   checks that every guide route exists and that terms are unique.
 * - Plain English, one to three sentences. Dollar figures only where a dated,
 *   sourced figure is the point of the term.
 * - Audience: executors, heirs, trustees and families (the family side of the
 *   site, not AFH Club). Nothing here is legal advice; the page says so and
 *   points to an attorney. The site does not refer attorneys.
 * - Statute links use lawfilesext.leg.wa.gov (the per-section files). On Sept
 *   30, 2026, app.leg.wa.gov/RCW/default.aspx?cite= served the wrong chapter to
 *   automated readers; the lawfilesext files are the same official text.
 */

export type ProbateGlossaryCategory =
  | "The court process"
  | "People and roles"
  | "Wills and inheritance"
  | "Property that passes outside probate"
  | "Creditors and debts"
  | "Value and taxes"
  | "Selling estate property"
  | "Title and ownership";

export interface ProbateGlossarySource {
  label: string;
  href: string;
}

export interface ProbateGlossaryTerm {
  /** Anchor id on the glossary page: /probate-glossary#<id> */
  id: string;
  term: string;
  /** Expansion of an acronym, or another name for the same thing. */
  aka?: string;
  category: ProbateGlossaryCategory;
  definition: string;
  /** The Real Property Planning page that explains it best. */
  guide: { label: string; href: string };
  source?: ProbateGlossarySource;
}

/** Official per-section statute file, e.g. rcw("11.40.051"). */
/* The file names pad the title to three characters on the left and the chapter
   to three on the right ("RCW   7 . 52 .010", "RCW  11 . 96A.050"); checked
   against 11.40.051, 11.96A.050, 43.20B.080 and 7.52.010 on Sept 30, 2026. */
const lf = (x: string) => x.replace(/ /g, "%20");
const parts = (cite: string) => {
  const [t, ch, s] = cite.split(".");
  return { T: t.padStart(3), C: ch.padEnd(3), s };
};
export const rcw = (cite: string) => {
  const { T, C, s } = parts(cite);
  return `https://lawfilesext.leg.wa.gov/law/RCW/${lf(`RCW ${T}  TITLE/RCW ${T} . ${C} CHAPTER/RCW ${T} . ${C}.${s}.htm`)}`;
};
/** Official chapter file, e.g. rcwChapter("11.68"). */
export const rcwChapter = (cite: string) => {
  const { T, C } = parts(`${cite}.x`);
  return `https://lawfilesext.leg.wa.gov/law/RCW/${lf(`RCW ${T}  TITLE/RCW ${T} . ${C} CHAPTER/RCW ${T} . ${C} CHAPTER.htm`)}`;
};
const src = (cite: string, what: string): ProbateGlossarySource => ({ label: `RCW ${cite}${what ? `: ${what}` : ""}`, href: rcw(cite) });

export const DOR_ESTATE_TAX = "https://dor.wa.gov/taxes-rates/other-taxes/estate-tax-tables";
export const IRS_ESTATE_TAX = "https://www.irs.gov/businesses/small-businesses-self-employed/whats-new-estate-and-gift-tax";

const G = {
  pillar: { label: "The Washington Probate & Estate Property Guide", href: "/washington-probate-guide" },
  authority: { label: "Understanding Probate & Legal Authority", href: "/estate-probate-inherited-property/probate-and-legal-authority" },
  whoSells: { label: "Who Has Authority to Sell Probate Property?", href: "/guides/who-has-authority-sell-probate-property-washington" },
  beforeProbate: { label: "Can an Executor Sell Before Probate?", href: "/guides/executor-sell-house-before-probate-washington" },
  duringProbate: { label: "Can You Sell a House During Probate?", href: "/guides/sell-house-during-probate-washington" },
  howWorks: { label: "How Probate Real Estate Works in Washington", href: "/guides/how-probate-real-estate-works" },
  timeline: { label: "Probate House Sale Timeline in Washington", href: "/guides/probate-house-sale-timeline-washington" },
  probateSales: { label: "Probate Real Estate Sales in Washington", href: "/probate-estate-sales" },
  first30: { label: "Your First 30 Days as Executor", href: "/executor-responsibilities-first-steps/first-30-days" },
  duties: { label: "Understanding Your Legal Duties as Executor", href: "/executor-responsibilities-first-steps/legal-duties" },
  executors: { label: "For Executors", href: "/executors" },
  trustees: { label: "For Trustees", href: "/trustees" },
  probateVsTrust: { label: "Probate vs Trust Sale in Washington", href: "/guides/probate-vs-trust-sale-washington" },
  wills: { label: "Wills and Real Estate in Washington State", href: "/wills" },
  passing: { label: "How to Pass Real Estate to Your Children", href: "/articles/wills-trusts-other-options" },
  poa: { label: "Power of Attorney and Real Estate in Washington", href: "/power-of-attorney" },
  dod: { label: "Date-of-Death Valuation & Estate Property Appraisals", href: "/date-of-death-valuation-property-appraisals" },
  value: { label: "Understanding the Property's Value", href: "/estate-probate-inherited-property/property-value" },
  taxes: { label: "What Taxes Apply When Selling an Inherited House?", href: "/guides/taxes-selling-inherited-house-washington" },
  heirs: { label: "What Happens If Heirs Disagree About Selling?", href: "/guides/heirs-disagree-selling-house" },
  inherited: { label: "What to Do With an Inherited House in Washington", href: "/guides/inherited-house-washington" },
  asIs: { label: "Sell an Inherited House As-Is or Fix It First?", href: "/guides/sell-inherited-house-as-is-or-fix" },
  outOfState: { label: "How Out-of-State Families Can Handle a Washington Property Sale", href: "/guides/out-of-state-families" },
  firstSteps: { label: "First Steps After a Death", href: "/estate-probate-inherited-property/first-steps" },
  liquidation: { label: "Estate Liquidation", href: "/estate-liquidation" },
};

export const PROBATE_GLOSSARY: ProbateGlossaryTerm[] = [
  /* ---------------- The court process ---------------- */
  {
    id: "probate",
    term: "Probate",
    category: "The court process",
    definition:
      "The court process that confirms a will (or that there is none), appoints the person who settles the estate, gives creditors a deadline, and lets property titled in the person's name alone be transferred or sold. In Washington it is filed in superior court, and most estates are then handled with little court supervision.",
    guide: G.authority,
    source: { label: "Title 11 RCW: Probate and trust law", href: "https://app.leg.wa.gov/RCW/default.aspx?cite=11" },
  },
  {
    id: "letters-testamentary",
    term: "Letters testamentary",
    category: "The court process",
    definition:
      "The court document that proves a personal representative named in a will has been appointed. Banks, title companies and buyers ask for a recently certified copy before they will deal with the estate.",
    guide: G.whoSells,
  },
  {
    id: "letters-of-administration",
    term: "Letters of administration",
    category: "The court process",
    definition:
      "The same proof of appointment when there is no will, or no named executor able to serve. The court appoints an administrator in the order of priority set by statute, starting with the surviving spouse or registered domestic partner.",
    guide: G.whoSells,
    source: src("11.28.120", "priority for appointment"),
  },
  {
    id: "nonintervention-powers",
    term: "Nonintervention powers",
    category: "The court process",
    definition:
      "Authority the court can grant a personal representative of a solvent estate to settle it without further court orders, including to sell, mortgage or lease real estate without court approval or confirmation. Most Washington estates are administered this way.",
    guide: G.duringProbate,
    source: src("11.68.090", "powers without court intervention"),
  },
  {
    id: "notice-of-appointment",
    term: "Notice of appointment and pendency of probate",
    category: "The court process",
    definition:
      "Within 20 days of appointment, the personal representative must send notice to each heir, beneficiary under the will and nonprobate beneficiary whose address is reasonably known, saying the probate is open and who is in charge.",
    guide: G.first30,
    source: src("11.28.237", "notice to heirs and beneficiaries"),
  },
  {
    id: "inventory",
    term: "Inventory and appraisement",
    category: "The court process",
    definition:
      "A list of everything in the estate with its fair net value as of the date of death, due within three months of appointment unless the court allows longer. It is not filed with the court by default, but the personal representative must give a copy within 10 days to an heir, a beneficiary, a nonprobate beneficiary or a creditor with a filed claim who asks.",
    guide: G.duties,
    source: src("11.44.015", "inventory"),
  },
  {
    id: "special-notice",
    term: "Request for special notice",
    category: "The court process",
    definition:
      "A filing by an heir, a beneficiary or a creditor with a filed claim. Afterwards they are mailed notice whenever the inventory, a petition, an account or the declaration of completion is filed. A sale under nonintervention powers needs no court filing, so it triggers no notice.",
    guide: G.heirs,
    source: src("11.28.240", "request for special notice"),
  },
  {
    id: "declaration-of-completion",
    term: "Declaration of completion",
    category: "The court process",
    definition:
      "The filing that closes an estate administered with nonintervention powers. Heirs and other interested parties have 30 days to ask the court to review it or the fees. If no one does, the fees are deemed reasonable, the estate is deemed properly settled, and the personal representative is discharged.",
    guide: G.timeline,
    source: src("11.68.110", "declaration of completion"),
  },
  {
    id: "tedra",
    term: "TEDRA",
    aka: "Trust and Estate Dispute Resolution Act",
    category: "The court process",
    definition:
      "Washington's law for resolving estate and trust disputes, including by a written agreement signed by everyone with an interest (a nonjudicial binding agreement) that can be filed with the court instead of going to a hearing.",
    guide: G.heirs,
    source: { label: "Chapter 11.96A RCW", href: rcwChapter("11.96A") },
  },
  {
    id: "will-contest",
    term: "Will contest",
    category: "The court process",
    definition:
      "A challenge to a will's validity, for example over capacity, undue influence or how it was signed. It must be filed within four months after the will is admitted to probate or rejected, and the personal representative must be served within 90 days of filing.",
    guide: G.heirs,
    source: src("11.24.010", "contest deadline"),
  },
  {
    id: "ancillary-probate",
    term: "Ancillary probate",
    category: "The court process",
    definition:
      "A second, local probate in a state where the person owned real estate but did not live. A Washington house owned by someone who lived in another state usually needs one here, and a Washington resident's out-of-state property may need one there.",
    guide: G.outOfState,
  },
  {
    id: "small-estate-affidavit",
    term: "Small estate affidavit",
    category: "The court process",
    definition:
      "A sworn statement that lets a successor collect the person's personal property, such as a bank account or car, without probate, if the probate estate is worth $100,000 or less and 40 days have passed since the death. It cannot be used to transfer real estate.",
    guide: G.authority,
    source: src("11.62.010", "small estate affidavit"),
  },

  /* ---------------- People and roles ---------------- */
  {
    id: "decedent",
    term: "Decedent",
    category: "People and roles",
    definition: "The person who died. Court papers, deeds and tax forms use this word.",
    guide: G.firstSteps,
  },
  {
    id: "personal-representative",
    term: "Personal representative",
    aka: "PR",
    category: "People and roles",
    definition:
      "Washington's term for the person the court appoints to settle an estate, whether named in a will (an executor) or appointed without one (an administrator). Only the personal representative can sign for the estate, and only after the court issues letters.",
    guide: G.whoSells,
    source: src("11.36.010", "who may serve"),
  },
  {
    id: "executor",
    term: "Executor",
    category: "People and roles",
    definition:
      "The person a will names to settle the estate. Naming does not give authority by itself: the executor becomes the personal representative only when the court appoints them. The executor must deliver the original will to the court within 40 days of learning of the death.",
    guide: G.executors,
    source: src("11.20.010", "delivering the will"),
  },
  {
    id: "administrator",
    term: "Administrator",
    category: "People and roles",
    definition:
      "A personal representative appointed when there is no will or no named executor able to serve. If no one with priority asks to be appointed within 60 days of the death, the court may appoint someone else.",
    guide: G.whoSells,
    source: src("11.28.120", "priority for appointment"),
  },
  {
    id: "nonresident-personal-representative",
    term: "Nonresident personal representative",
    category: "People and roles",
    definition:
      "A personal representative who lives outside Washington. They may serve, but must appoint an agent in the county of the probate (or the estate's attorney of record) to accept legal papers, and may have to post a bond unless it is waived.",
    guide: G.outOfState,
    source: src("11.36.010", "nonresident personal representatives"),
  },
  {
    id: "heir",
    term: "Heir",
    category: "People and roles",
    definition:
      "Strictly, a person who inherits under Washington's intestacy law when there is no will. In everyday use it means anyone inheriting. Being an heir does not give authority to sell or manage estate property.",
    guide: G.inherited,
    source: src("11.04.015", "who inherits without a will"),
  },
  {
    id: "beneficiary",
    term: "Beneficiary",
    aka: "devisee, legatee",
    category: "People and roles",
    definition:
      "A person or organization that receives something under a will or trust, or through a beneficiary designation such as a transfer on death deed. Older documents say devisee (real estate) or legatee (other property).",
    guide: G.inherited,
  },
  {
    id: "successor-trustee",
    term: "Successor trustee",
    category: "People and roles",
    definition:
      "The person who takes over a trust when the person who created it dies or can no longer serve. For a house held in the trust, the successor trustee, not a personal representative, has authority to sell, and no probate is needed for that house.",
    guide: G.trustees,
  },
  {
    id: "attorney-in-fact",
    term: "Agent under a power of attorney",
    aka: "attorney-in-fact",
    category: "People and roles",
    definition:
      "The person a power of attorney authorizes to act for someone who is alive. The authority ends at death, so an agent cannot sell or manage the property of someone who has died.",
    guide: G.poa,
  },

  /* ---------------- Wills and inheritance ---------------- */
  {
    id: "will",
    term: "Will",
    aka: "last will and testament",
    category: "Wills and inheritance",
    definition:
      "A written document, signed by the person making it and by two witnesses, that says who receives the probate estate and who should settle it. Anyone holding an original will must deliver it to the court or the named executor within 30 days of learning of the death.",
    guide: G.wills,
    source: src("11.20.010", "delivering the will"),
  },
  {
    id: "testate-intestate",
    term: "Testate and intestate",
    category: "Wills and inheritance",
    definition:
      "Testate means the person left a valid will; intestate means they did not, so state law decides who inherits and who may serve as administrator.",
    guide: G.authority,
  },
  {
    id: "intestate-succession",
    term: "Intestate succession",
    category: "Wills and inheritance",
    definition:
      "Washington's default order of inheritance without a will. A surviving spouse or registered domestic partner receives all of the decedent's share of community property and one-half of separate property if there are children or other descendants; three-quarters if there are none but a parent, or a parent's descendant such as a sibling, survives; all if none of these survive. The rest goes to descendants, then parents, then siblings and other relatives.",
    guide: G.authority,
    source: src("11.04.015", "descent and distribution"),
  },
  {
    id: "self-proving-affidavit",
    term: "Self-proving affidavit",
    category: "Wills and inheritance",
    definition:
      "A sworn statement by the witnesses, usually signed with the will (it can also be signed after the death), confirming the will was properly signed. With it, the court can admit the will without tracking down the witnesses.",
    guide: G.wills,
    source: src("11.20.020", "proof of will"),
  },
  {
    id: "codicil",
    term: "Codicil",
    category: "Wills and inheritance",
    definition: "A signed and witnessed amendment to a will. It must be delivered and probated with the will it changes.",
    guide: G.wills,
  },
  {
    id: "community-property",
    term: "Community property",
    category: "Wills and inheritance",
    definition:
      "In Washington, property acquired by either spouse or registered domestic partner during the marriage or partnership, other than by gift or inheritance, is presumed to belong to both. Each owns half, and each can leave only their own half by will.",
    guide: G.inherited,
    source: src("26.16.030", "community property defined"),
  },
  {
    id: "separate-property",
    term: "Separate property",
    category: "Wills and inheritance",
    definition:
      "Property a spouse or partner owned before the marriage or partnership, or received by gift or inheritance during it. How a house is classified can change who inherits it and what probate is needed.",
    guide: G.inherited,
    source: src("26.16.010", "separate property"),
  },

  /* ---------------- Property that passes outside probate ---------------- */
  {
    id: "nonprobate-asset",
    term: "Nonprobate asset",
    category: "Property that passes outside probate",
    definition:
      "Property that passes at death by title or designation rather than by will: a house held in joint tenancy with right of survivorship or recorded with a transfer on death deed, trust property, payable-on-death bank accounts, IRAs, and property passing under a community property agreement. Life insurance and employer retirement plans with a living beneficiary also pass outside probate, though the statute's definition leaves them out.",
    guide: G.passing,
    source: src("11.02.005", "definitions"),
  },
  {
    id: "transfer-on-death-deed",
    term: "Transfer on death deed",
    aka: "TOD deed",
    category: "Property that passes outside probate",
    definition:
      "A deed that names who receives a house when the owner dies, without probate. It works only if it was recorded with the county auditor before the owner's death; one found in a drawer afterwards has no effect. The owner can revoke it by recording a revocation or a new deed before death; a will cannot revoke it.",
    guide: G.passing,
    source: src("64.80.060", "requirements"),
  },
  {
    id: "joint-tenancy",
    term: "Joint tenancy with right of survivorship",
    category: "Property that passes outside probate",
    definition:
      "Co-ownership in which a surviving owner automatically takes the deceased owner's share. The deed must say so in writing; without that language, co-owners hold shares that pass through each owner's estate.",
    guide: G.whoSells,
    source: src("64.28.010", "joint tenancy"),
  },
  {
    id: "community-property-agreement",
    term: "Community property agreement",
    category: "Property that passes outside probate",
    definition:
      "A written, signed and acknowledged agreement between spouses or registered domestic partners that often converts their property to community property and passes it to the survivor at the first death without probate. It is signed and acknowledged like a deed; recording it in each county where the couple owns real estate is common practice.",
    guide: G.passing,
    source: src("26.16.120", "community property agreements"),
  },
  {
    id: "revocable-living-trust",
    term: "Revocable living trust",
    category: "Property that passes outside probate",
    definition:
      "A trust a person creates and controls while alive, then managed by a successor trustee after death. A house deeded into the trust passes under the trust's terms without probate; a house the person never deeded into it does not.",
    guide: G.probateVsTrust,
  },
  {
    id: "certification-of-trust",
    term: "Certification of trust",
    category: "Property that passes outside probate",
    definition:
      "A short signed statement of a trust's key facts (that it exists, who the trustee is, and the trustee's powers) that a title company or buyer can rely on without reading the whole trust.",
    guide: G.trustees,
    source: src("11.98.075", "certification of trust"),
  },
  {
    id: "trust-notice",
    term: "Trustee's notice to beneficiaries",
    category: "Property that passes outside probate",
    definition:
      "Within 60 days after accepting the role, the trustee of an irrevocable trust (including a living trust that became irrevocable at the creator's death) must tell the qualified beneficiaries that the trust exists, who created it, how to reach the trustee, and that they may request the information they need to protect their rights.",
    guide: G.trustees,
    source: src("11.98.072", "notice to beneficiaries"),
  },

  /* ---------------- Creditors and debts ---------------- */
  {
    id: "notice-to-creditors",
    term: "Notice to creditors",
    category: "Creditors and debts",
    definition:
      "A notice the personal representative publishes once a week for three weeks in a legal newspaper, files with the court, and mails to known creditors, starting the deadline for claims. A copy must also go to the DSHS Office of Financial Recovery.",
    guide: G.first30,
    source: src("11.40.020", "notice to creditors"),
  },
  {
    id: "creditor-claim-period",
    term: "Creditor claim period",
    category: "Creditors and debts",
    definition:
      "The deadline for a creditor's claim: four months after the notice is first published (or 30 days after a mailed notice, if later). If no notice is given, claims can be brought for up to 24 months after the death.",
    guide: G.timeline,
    source: src("11.40.051", "time limits for claims"),
  },
  {
    id: "estate-recovery",
    term: "Estate recovery",
    category: "Creditors and debts",
    definition:
      "The state's claim to recover the cost of Medicaid long-term care received at age 55 or older, and of state-funded long-term care at any age. It reaches the estate and nonprobate assets too, such as a house passing by transfer on death deed, which is why the notice to creditors goes to DSHS.",
    guide: G.duties,
    source: src("43.20B.080", "recovery from estates; see also RCW 74.39A.170"),
  },
  {
    id: "insolvent-estate",
    term: "Insolvent estate",
    category: "Creditors and debts",
    definition:
      "An estate whose debts are larger than its assets. Heirs are not personally liable for the decedent's debts, though someone who receives a nonprobate asset can be required to contribute toward them. Creditors are paid in the order the law sets before anyone inherits, and nonintervention powers are available only to a solvent estate.",
    guide: G.duties,
    source: src("11.76.110", "order of payment"),
  },

  /* ---------------- Value and taxes ---------------- */
  {
    id: "date-of-death-value",
    term: "Date-of-death value",
    category: "Value and taxes",
    definition:
      "What a property was worth on the day the owner died. It is used in the estate inventory, for any estate tax return, and as the heirs' new tax basis when they sell.",
    guide: G.dod,
    source: src("11.44.015", "inventory values"),
  },
  {
    id: "retrospective-appraisal",
    term: "Retrospective (date-of-death) appraisal",
    category: "Value and taxes",
    definition:
      "An appraisal by a certified appraiser that values a property as of a past date, usually the date of death, even when it is written months later. It documents the value for the inventory, the estate's accountant and the heirs' basis.",
    guide: G.dod,
  },
  {
    id: "stepped-up-basis",
    term: "Stepped-up basis",
    category: "Value and taxes",
    definition:
      "For federal income tax, inherited property generally takes a new basis equal to its value at the date of death, so gain from before the death is not taxed when the heirs sell. For community property, both halves usually get the new basis at the first spouse's death.",
    guide: G.taxes,
    source: { label: "26 U.S.C. § 1014", href: "https://www.law.cornell.edu/uscode/text/26/1014" },
  },
  {
    id: "washington-estate-tax",
    term: "Washington estate tax",
    category: "Value and taxes",
    definition:
      "A state tax on estates above an exclusion amount, separate from the federal tax. The exclusion is $3,000,000 for deaths from July 1, 2026 ($3,076,000 for January to June 2026, $3,000,000 for July to December 2025). Rates run 10 to 20 percent for deaths from July 1, 2026; they were 10 to 35 percent for deaths from July 1, 2025 to June 30, 2026. Check the Department of Revenue's table for the date of death.",
    guide: G.taxes,
    source: { label: "Department of Revenue: estate tax tables", href: DOR_ESTATE_TAX },
  },
  {
    id: "federal-estate-tax",
    term: "Federal estate tax",
    category: "Value and taxes",
    definition:
      "A federal tax that applies only to very large estates: the basic exclusion is $15 million per person for deaths in 2026. Many estates owe no federal tax but still owe, or must file, the Washington estate tax.",
    guide: G.taxes,
    source: { label: "IRS: What's new, estate and gift tax", href: IRS_ESTATE_TAX },
  },
  {
    id: "reet",
    term: "Real estate excise tax",
    aka: "REET",
    category: "Value and taxes",
    definition:
      "Washington's tax on selling real estate, usually paid by the seller at closing. Passing a house to heirs by inheritance is exempt, but when the estate or the heirs later sell to a buyer, the sale is taxed like any other.",
    guide: G.taxes,
    source: { label: "WAC 458-61A-202: inheritance", href: "https://app.leg.wa.gov/WAC/default.aspx?cite=458-61A-202" },
  },

  /* ---------------- Selling estate property ---------------- */
  {
    id: "probate-sale",
    term: "Probate sale",
    category: "Selling estate property",
    definition:
      "A sale of real estate by a personal representative on behalf of an estate. With nonintervention powers it works much like an ordinary sale, and it can close before the creditor period ends. Without them, a sale generally needs a court order, then a report of sale and the court's confirmation, unless the will itself directs or authorizes the sale.",
    guide: G.probateSales,
    source: { label: "Chapter 11.56 RCW: sales without nonintervention powers", href: rcwChapter("11.56") },
  },
  {
    id: "personal-representatives-deed",
    term: "Personal representative's deed",
    category: "Selling estate property",
    definition:
      "The deed a personal representative signs to convey estate real estate, to a buyer or to an heir. The title company will want certified letters and, usually, proof of nonintervention powers.",
    guide: G.howWorks,
  },
  {
    id: "as-is-sale",
    term: "As-is sale",
    category: "Selling estate property",
    definition:
      "A sale in which the seller makes no repairs and the buyer accepts the property's condition. Common for estate property, because the personal representative often never lived there. The estate still may not hide defects it knows about.",
    guide: G.asIs,
  },
  {
    id: "seller-disclosure",
    term: "Seller disclosure statement",
    aka: "Form 17",
    category: "Selling estate property",
    definition:
      "The disclosure form Washington requires from most sellers of residential property. A transfer by the personal representative of an estate is exempt from it, though the estate still may not conceal defects it knows about.",
    guide: G.probateSales,
    source: src("64.06.010", "exemptions"),
  },
  {
    id: "heir-buyout",
    term: "Heir buyout",
    category: "Selling estate property",
    definition:
      "One heir keeps the house by paying the others for their shares, usually based on an appraisal all agree to rely on, and often financed with a new loan.",
    guide: G.heirs,
  },
  {
    id: "partition",
    term: "Partition",
    category: "Selling estate property",
    definition:
      "A lawsuit by a co-owner asking the court to divide a property or, when it cannot be divided fairly, order it sold and the proceeds shared. It is the last resort when heirs who each own a share cannot agree. For property inherited by relatives, the Uniform Partition of Heirs Property Act (chapter 7.54 RCW) may apply, giving the other co-owners a chance to buy out the one who sued.",
    guide: G.heirs,
    source: src("7.52.010", "partition"),
  },
  {
    id: "estate-sale",
    term: "Estate sale",
    aka: "estate liquidation",
    category: "Selling estate property",
    definition:
      "A sale of the household contents, usually run by an estate sale company for a percentage of the proceeds, often before the house itself is listed.",
    guide: G.liquidation,
  },
  /* ---------------- Added Oct 4, 2026 from the retired /terminology page ---------------- */
  {
    id: "testator",
    term: "Testator",
    category: "Wills and inheritance",
    definition:
      "The person who made the will. In Washington, anyone 18 or older and of sound mind can make one.",
    guide: G.wills,
    source: src("11.12.010", "who may make a will"),
  },
  {
    id: "testamentary-capacity",
    term: "Testamentary capacity",
    category: "Wills and inheritance",
    definition:
      "The mental ability the law requires to make a valid will: understanding what property you have, who your natural heirs are, and what the will does with it. A will can be challenged on the ground that the person lacked it when they signed.",
    guide: G.wills,
    source: src("11.12.010", "sound mind"),
  },
  {
    id: "undue-influence",
    term: "Undue influence",
    category: "Wills and inheritance",
    definition:
      "Pressure strong enough to replace the person's own wishes with someone else's when a will was signed or property was transferred. It is one of the usual grounds for a will contest.",
    guide: G.heirs,
  },
  {
    id: "bequest-and-devise",
    term: "Bequest and devise",
    aka: "devisee",
    category: "Wills and inheritance",
    definition:
      "Gifts made in a will. A bequest is traditionally a gift of money or personal property and a devise a gift of real estate; the person who receives a devise is the devisee.",
    guide: G.wills,
  },
  {
    id: "residuary-estate",
    term: "Residuary estate",
    aka: "residue",
    category: "Wills and inheritance",
    definition:
      "Everything left after specific gifts, debts, taxes and the costs of settling the estate are paid. A house not left to anyone by name usually falls into the residue and passes to the residuary beneficiaries.",
    guide: G.wills,
  },
  {
    id: "distribution",
    term: "Distribution",
    category: "Wills and inheritance",
    definition:
      "The final handing over of estate property to the heirs or beneficiaries, as cash, as the property itself, or as a share of sale proceeds, after creditors and expenses are paid.",
    guide: G.timeline,
  },
  {
    id: "fiduciary",
    term: "Fiduciary",
    category: "People and roles",
    definition:
      "Anyone legally required to act in another person's interest rather than their own: a personal representative, trustee, guardian or agent under a power of attorney. A fiduciary selling a house owes the estate or trust a fair price and full disclosure, and cannot quietly buy it themselves.",
    guide: G.duties,
  },
  {
    id: "court-confirmation",
    term: "Court confirmation of sale",
    category: "Selling estate property",
    definition:
      "Court approval of a sale after it is negotiated. Washington requires it only when the personal representative does not have nonintervention powers; with them, the representative signs the sale without returning to court.",
    guide: G.duringProbate,
    source: { label: "Chapter 11.56 RCW: sales, exchanges, leases and mortgages", href: rcwChapter("11.56") },
  },
  {
    id: "title",
    term: "Title",
    category: "Title and ownership",
    definition:
      "Legal ownership of a property, shown by the recorded deeds. After a death, title stays in the person's name until it passes through probate, a trust, or a nonprobate transfer, and a buyer's title company will want to see that chain completed.",
    guide: G.howWorks,
  },
  {
    id: "marketable-title",
    term: "Marketable title",
    aka: "clear title",
    category: "Title and ownership",
    definition:
      "Title free of defects a reasonable buyer would object to, so a title company will insure it. Unpaid liens, missing heirs or an unrecorded transfer can keep an inherited house from having marketable title until they are resolved.",
    guide: G.howWorks,
  },
  {
    id: "title-report",
    term: "Preliminary title report",
    aka: "title commitment",
    category: "Title and ownership",
    definition:
      "The title company's report, ordered early in a sale, showing who holds record title and every lien, easement and other matter that must be paid or cleared before closing. On an estate property it is often the first place problems with the ownership chain surface.",
    guide: G.timeline,
  },
  {
    id: "deed",
    term: "Deed",
    category: "Title and ownership",
    definition:
      "The signed, acknowledged document that transfers real estate. Washington requires conveyances of real property to be by deed, and a deed takes effect against later buyers once it is recorded with the county.",
    guide: G.howWorks,
    source: src("64.04.020", "requisites of a deed"),
  },
  {
    id: "statutory-warranty-deed",
    term: "Statutory warranty deed",
    category: "Title and ownership",
    definition:
      "The deed used in most Washington sales, in which the seller guarantees the title against all claims. Estates and trusts usually sell with a personal representative's or trustee's deed instead, which makes narrower promises.",
    guide: G.howWorks,
    source: src("64.04.030", "warranty deed form"),
  },
  {
    id: "quitclaim-deed",
    term: "Quitclaim deed",
    category: "Title and ownership",
    definition:
      "A deed that transfers whatever interest the signer has, if any, with no promise about the title. Heirs sometimes use one to move a share to a sibling in a buyout; it does not cure title problems.",
    guide: G.heirs,
    source: src("64.04.050", "quitclaim deed form"),
  },
  {
    id: "tenancy-in-common",
    term: "Tenancy in common",
    category: "Title and ownership",
    definition:
      "Co-ownership where each owner holds a separate share that passes through their own estate when they die, not to the other owners. In Washington, co-owners hold this way unless the deed declares a joint tenancy or the property is community property. Heirs who inherit a house together usually own it this way.",
    guide: G.heirs,
    source: src("64.28.020", "interests in common"),
  },
  {
    id: "life-estate",
    term: "Life estate",
    aka: "remainderman",
    category: "Title and ownership",
    definition:
      "The right to own and live in a property for someone's lifetime. When that person dies, it passes automatically to the remaindermen named in the deed, without probate. A life tenant cannot sell the whole property without the remaindermen signing too.",
    guide: G.passing,
  },
  {
    id: "encumbrance",
    term: "Encumbrance",
    category: "Title and ownership",
    definition:
      "Anything recorded against a property that limits it or must be paid: a mortgage, lien, easement or restriction. Encumbrances survive the owner's death and show up on the title report when the house is sold.",
    guide: G.howWorks,
  },
  {
    id: "lien",
    term: "Lien",
    category: "Title and ownership",
    definition:
      "A claim against a property that secures a debt, such as a mortgage, unpaid property taxes, a judgment or a contractor's claim. Liens are paid from the sale proceeds at closing, and the property tax lien comes ahead of nearly all others.",
    guide: G.howWorks,
    source: src("84.60.010", "property tax lien"),
  },
  {
    id: "real-and-personal-property",
    term: "Real property and personal property",
    category: "Title and ownership",
    definition:
      "Real property is land and what is permanently attached to it, such as the house. Personal property is everything movable, such as furniture, vehicles and accounts. The difference matters because they are handled, valued and sold separately.",
    guide: G.inherited,
  },
  {
    id: "quiet-title",
    term: "Quiet title",
    category: "Title and ownership",
    definition:
      "A lawsuit asking the court to declare who owns a property and remove conflicting claims. It is the fix when a title problem, such as an heir who cannot be found or an old unreleased claim, cannot be cleared any other way.",
    guide: G.heirs,
    source: { label: "Chapter 7.28 RCW: quieting title", href: rcwChapter("7.28") },
  },
  {
    id: "homestead",
    term: "Homestead",
    category: "Title and ownership",
    definition:
      "Washington's protection of an owner's home from most unsecured creditors, up to the greater of $125,000 or the county's median single-family sale price for the prior year. It does not protect against mortgages or property tax liens.",
    guide: G.inherited,
    source: src("6.13.030", "homestead amount"),
  },
  {
    id: "heirs-property",
    term: "Heirs' property",
    category: "Title and ownership",
    definition:
      "A house owned by several relatives who inherited it, often over more than one generation, without a completed probate or a clear agreement among them. Washington's Uniform Partition of Heirs Property Act gives co-owners a chance to buy out a relative who sues to force a sale.",
    guide: G.heirs,
    source: { label: "Chapter 7.54 RCW: Uniform Partition of Heirs Property Act", href: rcwChapter("7.54") },
  },
];

export const PROBATE_GLOSSARY_CATEGORIES: ProbateGlossaryCategory[] = [
  "The court process",
  "People and roles",
  "Wills and inheritance",
  "Property that passes outside probate",
  "Creditors and debts",
  "Value and taxes",
  "Selling estate property",
  "Title and ownership",
];

export const PROBATE_GLOSSARY_A_TO_Z: ProbateGlossaryTerm[] = [...PROBATE_GLOSSARY].sort((a, b) =>
  a.term.localeCompare(b.term, "en", { sensitivity: "base", numeric: true })
);
