/**
 * Which featured-professional categories appear at the end of each topic page
 * in the three homepage paths, and on the guides listed at the bottom
 * (Oct 20, 2026, approved by David):
 *   Helping an Aging Parent  /helping-an-aging-parent/<category>/<leaf>
 *   Planning Before a Crisis /planning-before-a-crisis/<leaf>
 *   Estate & Probate         /estate-probate-inherited-property/<leaf>
 *
 * Rules David set:
 *   - Every listed person in a category is shown, A to Z, never a pick.
 *   - Real Estate & Appraisal (David himself) appears on property topics only,
 *     with a line saying he founded the site (TopicProfessionals.tsx).
 *   - No attorneys on the estate pages: there is no probate or estate attorney
 *     listed yet, and an elder law attorney is not one. Add "probateLaw" here
 *     once one is listed.
 *
 * Pages not listed show no box: the hubs, how-this-site-helps (about the site
 * itself) and professional-team (it already shows the network).
 */
import type { ProfessionalCategoryKey } from "./familyProfessionals";

const AP = "/helping-an-aging-parent";
const PL = "/planning-before-a-crisis";
const EP = "/estate-probate-inherited-property";

export const TOPIC_PROFESSIONALS: Record<string, ProfessionalCategoryKey[]> = {
  // Helping an Aging Parent: living independently
  [`${AP}/living-independently/staying-safe-at-home`]: ["careManagers"],
  [`${AP}/living-independently/early-planning`]: ["elderLaw", "financialPlanning"],
  [`${AP}/living-independently/home-modifications`]: ["careManagers"],
  [`${AP}/living-independently/long-term-financial-prep`]: ["financialPlanning", "elderLaw", "medicare"],
  // Needs help at home
  [`${AP}/needs-help-at-home/in-home-care`]: ["careManagers", "medicare"],
  [`${AP}/needs-help-at-home/family-coordination`]: ["careManagers"],
  [`${AP}/needs-help-at-home/safety-modifications`]: ["careManagers"],
  [`${AP}/needs-help-at-home/respite-options`]: ["careManagers"],
  // Exploring care options
  [`${AP}/exploring-care-options/types-of-housing`]: ["seniorLiving", "careManagers"],
  [`${AP}/exploring-care-options/comparing-costs`]: ["seniorLiving", "financialPlanning"],
  [`${AP}/exploring-care-options/eligibility`]: ["elderLaw", "seniorLiving"],
  [`${AP}/exploring-care-options/having-the-conversation`]: ["careManagers", "seniorLiving"],
  // Health crisis
  [`${AP}/health-crisis/hospital-discharge`]: ["careManagers", "seniorLiving"],
  [`${AP}/health-crisis/urgent-housing`]: ["seniorLiving", "careManagers"],
  [`${AP}/health-crisis/legal-authority`]: ["elderLaw"],
  [`${AP}/health-crisis/managing-the-home`]: ["realEstate", "moveManagers", "estateLiquidation"],
  // Finances and legal
  [`${AP}/finances-and-legal/power-of-attorney`]: ["elderLaw", "legalPlans"],
  [`${AP}/finances-and-legal/wills-and-estate-plan`]: ["elderLaw", "legalPlans"],
  [`${AP}/finances-and-legal/paying-for-care`]: ["elderLaw", "financialPlanning", "mortgage"],
  [`${AP}/finances-and-legal/property-decisions`]: ["realEstate", "mortgage", "cpas"],

  // Planning Before a Crisis
  [`${PL}/why-planning-early`]: ["elderLaw", "financialPlanning"],
  [`${PL}/conversations-to-have`]: ["careManagers"],
  [`${PL}/legal-documents`]: ["elderLaw", "legalPlans"],
  /* Oct 29, 2026 (David): no mortgage lenders here; the page tells readers to ask a CPA about the taxes. */
  [`${PL}/property-questions`]: ["realEstate", "cpas"],
  [`${PL}/when-a-move-is-coming`]: ["moveManagers", "seniorLiving"],

  // Estate, Probate & Inherited Property (no attorneys until a probate attorney is listed)
  [`${EP}/property-value`]: ["realEstate"],
  [`${EP}/what-to-do-with-the-property`]: ["realEstate", "cpas", "mortgage"],
  [`${EP}/preparing-the-property`]: ["estateLiquidation", "moveManagers", "cleanupRemediation"],

  /* Guides outside the three paths (Oct 20, 2026, David's go): each names
     these kinds of professional in its text but linked to none of them
     (found by checking all 106 family guides). Shown by GuideProfessionals,
     placed once in DisclaimerSection and ExecutorSubPageLayout. Estate and
     probate guides get no attorneys, same rule as the estate path. */
  // Probate and estate
  "/probate-glossary": ["cpas", "estateLiquidation"],
  "/washington-probate-guide/deadlines-and-key-rules": ["cpas"],
  "/washington-probate-guide/selling-the-house": ["estateLiquidation", "cleanupRemediation"],
  "/guides/mortgage-after-death-washington": ["mortgage"],
  "/guides/taxes-selling-inherited-house-washington": ["cpas"],
  "/guides/inherited-house-washington": ["cpas", "cleanupRemediation"],
  "/guides/probate-costs-washington": ["cpas"],
  "/guides/what-executors-should-do": ["estateLiquidation", "cleanupRemediation"],
  "/guides/executor-first-steps-house": ["cpas", "cleanupRemediation"],
  "/executor-responsibilities-first-steps/legal-duties": ["cpas"],
  "/executor-responsibilities-first-steps/working-with-professionals": ["cpas", "financialPlanning"],
  "/executor-responsibilities-first-steps/when-you-need-extra-help": ["moveManagers", "estateLiquidation", "financialPlanning"],
  // A parent's housing, care and money
  "/power-of-attorney": ["elderLaw", "legalPlans", "moveManagers"],
  "/senior-transitions": ["moveManagers", "seniorLiving", "estateLiquidation"],
  "/senior-living-and-relocation": ["moveManagers", "seniorLiving"],
  "/guides/out-of-state-families": ["elderLaw", "moveManagers", "estateLiquidation"],
  "/sell-house-fund-senior-living": ["financialPlanning", "elderLaw", "cpas"],
  "/guides/sell-parents-house-dementia-washington": ["elderLaw", "cpas"],
  "/senior-transitions/can-parent-afford-to-stay-home": ["financialPlanning", "mortgage"],
  "/long-term-care/medicaid-and-the-family-home": ["elderLaw"],
  "/long-term-care/nursing-homes": ["careManagers", "elderLaw", "financialPlanning"],
  "/long-term-care/hospital-discharge-planning": ["careManagers", "seniorLiving"],
  "/long-term-care/short-term-nursing-home-stays": ["careManagers"],
  "/gray-divorce": ["familyLaw", "financialPlanning", "cpas"],
  // Adult family homes, family side (Oct 21, 2026)
  "/senior-living/choosing-an-adult-family-home": ["seniorLiving", "careManagers"],
  "/adult-family-home-costs": ["seniorLiving", "careManagers"],
  // The two appraisal guides show the appraiser (David, Oct 21, 2026: "Yes, for now").
  "/guides/appraisal-vs-cma": ["realEstate"],
  "/guides/appraisal-before-selling-inherited-property": ["realEstate"],
};

export const professionalsForTopic = (path: string): ProfessionalCategoryKey[] =>
  TOPIC_PROFESSIONALS[path.replace(/\/+$/, "")] ?? [];
