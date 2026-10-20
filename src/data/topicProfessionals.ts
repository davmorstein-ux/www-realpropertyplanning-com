/**
 * Which featured-professional categories appear at the end of each topic page
 * in the three homepage paths (Oct 20, 2026, approved by David):
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
 * Pages not listed show no box: the hubs, how-we-can-help (about the site
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
  [`${PL}/property-questions`]: ["realEstate", "mortgage"],
  [`${PL}/when-a-move-is-coming`]: ["moveManagers", "seniorLiving"],

  // Estate, Probate & Inherited Property (no attorneys until a probate attorney is listed)
  [`${EP}/property-value`]: ["realEstate"],
  [`${EP}/what-to-do-with-the-property`]: ["realEstate", "cpas", "mortgage"],
  [`${EP}/preparing-the-property`]: ["estateLiquidation", "moveManagers"],
};

export const professionalsForTopic = (path: string): ProfessionalCategoryKey[] =>
  TOPIC_PROFESSIONALS[path.replace(/\/+$/, "")] ?? [];
