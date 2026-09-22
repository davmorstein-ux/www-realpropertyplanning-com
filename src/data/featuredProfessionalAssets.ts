/**
 * App-only companion to src/data/featuredProfessionals.ts: the photos, logos
 * and page bios of the featured broker and appraiser. Split out because this
 * file imports image assets, which the Node-side prerender cannot load.
 *
 * When the featured person changes, change the record in featuredProfessionals.ts
 * AND the photo, logo and bio here.
 */
import { FEATURED_BROKER, FEATURED_APPRAISER, SAME_PERSON } from "@/data/featuredProfessionals";
import brokerPhoto from "@/assets/providers/realtor-david-stein-headshot-seattle.webp";
import brokerageLogo from "@/assets/providers/exp-realty-brokerage-large-logo-washington.webp";
import appraisalFirmLogo from "@/assets/stein-appraisal-appraiser-logo-washington.webp";

export const BROKER_PHOTO = brokerPhoto;
export const BROKER_PHOTO_ALT = `Photo of ${FEATURED_BROKER.name}`;
export const BROKERAGE_LOGO = brokerageLogo;
export const BROKERAGE_LOGO_ALT = `${FEATURED_BROKER.brokerage} logo`;

/** Same photo today because it is the same person; a separate export so a different appraiser gets a different photo without touching broker pages. */
export const APPRAISER_PHOTO = brokerPhoto;
export const APPRAISER_PHOTO_ALT = `Photo of ${FEATURED_APPRAISER.name}`;
export const APPRAISAL_FIRM_LOGO = appraisalFirmLogo;
export const APPRAISAL_FIRM_LOGO_ALT = `${FEATURED_APPRAISER.firm} logo`;

/** Bio shown on /realtor (family side). */
export const BROKER_BIO = `${FEATURED_BROKER.name} is a Washington State licensed real estate broker${SAME_PERSON ? " and Certified Residential Appraiser" : ""} specializing in Adult Family Home sales, probate and estate properties, and trust-owned real estate across the Puget Sound region.

With over ${FEATURED_BROKER.yearsExperience} years of experience, ${FEATURED_BROKER.firstName} represents buyers and sellers of licensed Adult Family Homes, and works with executors, trustees, personal representatives, and agents under power of attorney navigating the sale of inherited real estate — bringing calm, expert guidance to some of the most complex transactions a family can face.

As a broker with ${FEATURED_BROKER.brokerage}, he combines deep local knowledge with a powerful nationwide network.${SAME_PERSON ? " His dual license as both broker and appraiser is a rare advantage — particularly valuable when an AFH, estate, or trust property must be both accurately valued and strategically sold." : ""}

Specialties: Adult Family Home sales · Probate, estate & trust properties · Executors, trustees & families navigating inherited real estate across Washington State.`;

/** Bio shown on /real-estate-appraiser. */
export const APPRAISER_BIO = `${FEATURED_APPRAISER.name} is a Washington State Certified Residential Appraiser with over ${FEATURED_APPRAISER.yearsExperience} years of experience providing independent property valuations for attorneys, executors, trustees, courts, and families across the Puget Sound region. Through ${FEATURED_APPRAISER.firm}, he specializes in the appraisal assignments that require precision, defensibility, and an appraiser who understands the legal and fiduciary context — including date-of-death valuations for estate tax returns and probate, retrospective appraisals for prior tax years, divorce and dissolution appraisals accepted by family law courts, and litigation support for disputed property values. His appraisal reports are prepared to meet IRS, court, and lender standards and are regularly relied upon by probate attorneys, CPAs, and estate planners throughout Western Washington.${SAME_PERSON ? ` ${FEATURED_APPRAISER.firstName} also holds a Washington State real estate broker license, giving him an unusually complete understanding of both market value and the transaction process — a combination that is especially valuable when an estate or trust property must be both appraised and sold.` : ""}`;

/** Bio shown on AFH Club pages (src/data/afhProfessionals.ts). */
export const AFH_BROKER_BIO = `${FEATURED_BROKER.name} is a Washington State licensed real estate broker${SAME_PERSON ? " and Certified Residential Appraiser" : ""} with over ${FEATURED_BROKER.yearsExperience} years of experience in complex property transactions. He brings ${SAME_PERSON ? "a rare combination of appraisal expertise and brokerage experience" : "brokerage experience"} to AFH transactions — understanding both how to value a licensed care facility and how to navigate the CHOW process, DSHS timelines, and specialty contract considerations that define AFH real estate.`;
