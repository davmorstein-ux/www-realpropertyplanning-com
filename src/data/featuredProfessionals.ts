/**
 * THE FEATURED BROKER AND THE FEATURED APPRAISER — the one place they are named.
 *
 * Real Property Planning is a neutral educational hub. It holds no licenses and
 * provides no brokerage or appraisal services. When a page needs to name the
 * licensed person a visitor can be connected with, it reads that person from
 * here. Today both roles are held by the hub's founder, David Stein; the roles
 * are written as two records because they will not always be the same person.
 * When another appraiser (or broker) takes a spot, change the record below and
 * every disclosure, byline, CTA, credential line, contact tool and schema
 * entity on the site follows. Nothing else should carry the name.
 *
 * This file has NO asset imports so vite.config.ts (the build-time prerender)
 * and src/lib/schema.ts can load it in Node. Photos and logos live next door
 * in src/data/featuredProfessionalAssets.ts, which is app-only.
 *
 * Enforcement: scripts/audit-david-stein.mjs lists the files allowed to carry
 * the name literally. Anything else must import from here.
 */

export interface FeaturedBroker {
  /** Full name as it should appear on the site. */
  name: string;
  firstName: string;
  /** The brokerage that holds the license. Never the hub. */
  brokerage: string;
  brokerageUrl: string;
  /** Washington State DOL real estate broker license number. */
  licenseNumber: string;
  phone: string;
  /** tel: href form of `phone`. */
  phoneTel: string;
  email: string;
  website: string;
  yearsExperience: number;
  /** Zillow reviews profile, if any. */
  zillowProfileUrl?: string;
  /** Pronouns used in prose about this person ("he uses his appraisal background"). */
  pronoun: Pronouns;
  /**
   * How hub pages refer to this person after the attribution: "the featured
   * broker". The name itself appears only in the attribution sentences,
   * contact CTAs, and on the person's own pages — the hub is not about them.
   */
  role: string;
  /** Sentence-initial form: "The featured broker". */
  Role: string;
  /** Title-case form for headings: "the Featured Broker". */
  roleTitle: string;
}

export interface Pronouns {
  subject: string; // he / she / they
  object: string; // him / her / them
  possessive: string; // his / her / their
  Subject: string; // He — sentence-initial
  Possessive: string; // His — sentence-initial
}

export interface FeaturedAppraiser {
  name: string;
  firstName: string;
  /** The independent appraisal practice. Never the hub. */
  firm: string;
  /** Washington State DOL certified residential appraiser license number. */
  licenseNumber: string;
  phone: string;
  phoneTel: string;
  email: string;
  yearsExperience: number;
  pronoun: Pronouns;
  role: string;
  Role: string;
  roleTitle: string;
}

export const FEATURED_BROKER: FeaturedBroker = {
  name: "David Stein",
  firstName: "David",
  brokerage: "eXp Realty",
  brokerageUrl: "https://www.exprealty.com",
  licenseNumber: "133972",
  phone: "(206) 900-3015",
  phoneTel: "+12069003015",
  email: "dave.stein@exprealty.com",
  website: "https://davestein.exprealty.com",
  yearsExperience: 20,
  zillowProfileUrl: "https://www.zillow.com/profile/dstein2112",
  pronoun: { subject: "he", object: "him", possessive: "his", Subject: "He", Possessive: "His" },
  role: "the featured broker",
  Role: "The featured broker",
  roleTitle: "the Featured Broker",
};

export const FEATURED_APPRAISER: FeaturedAppraiser = {
  name: "David Stein",
  firstName: "David",
  firm: "Stein Appraisal",
  licenseNumber: "1702080",
  phone: "(206) 900-3015",
  phoneTel: "+12069003015",
  email: "dave@steinappraisal.com",
  yearsExperience: 20,
  pronoun: { subject: "he", object: "him", possessive: "his", Subject: "He", Possessive: "His" },
  role: "the featured appraiser",
  Role: "The featured appraiser",
  roleTitle: "the Featured Appraiser",
};

/**
 * The hub's founder — a fixed historical fact, not a role that changes hands.
 * Only the About page's founder story and the schema `founderOf` line use it.
 */
export const HUB_FOUNDER_NAME = "David Stein";
/** True while the founder is also the featured broker; the schema Person then carries founderOf. */
export const FEATURED_BROKER_IS_FOUNDER = FEATURED_BROKER.name === HUB_FOUNDER_NAME;

/** True while one person holds both roles. Components use it to write "broker and appraiser" as one clause instead of two. */
export const SAME_PERSON = FEATURED_BROKER.name === FEATURED_APPRAISER.name;

/** "eXp Realty, license #133972" */
export const brokerLicenseShort = `${FEATURED_BROKER.brokerage}, license #${FEATURED_BROKER.licenseNumber}`;
/** "Stein Appraisal, license #1702080" */
export const appraiserLicenseShort = `${FEATURED_APPRAISER.firm}, license #${FEATURED_APPRAISER.licenseNumber}`;

/**
 * The standard attribution sentences. Legally, licensed work must be attributed
 * to the person, never to the hub, so every disclosure reads these rather than
 * retyping them.
 */
export const brokerageAttribution = `Real estate brokerage services are provided by ${FEATURED_BROKER.name}, a licensed Washington broker, through ${FEATURED_BROKER.brokerage}.`;
export const appraisalAttribution = `Appraisal services are provided by ${FEATURED_APPRAISER.name} through ${FEATURED_APPRAISER.firm}.`;

/**
 * One sentence naming who the person is and what they hold, for CTAs and
 * bylines. With one person: "David Stein is a licensed Washington real estate
 * broker (eXp Realty, #133972) and a certified residential appraiser (Stein
 * Appraisal, #1702080)." With two people it returns the broker's sentence only;
 * callers that need the appraiser too use `appraiserCredentialSentence`.
 */
export const brokerCredentialSentence = SAME_PERSON
  ? `${FEATURED_BROKER.name} is a licensed Washington real estate broker (${FEATURED_BROKER.brokerage}, #${FEATURED_BROKER.licenseNumber}) and a certified residential appraiser (${FEATURED_APPRAISER.firm}, #${FEATURED_APPRAISER.licenseNumber}).`
  : `${FEATURED_BROKER.name} is a licensed Washington real estate broker (${FEATURED_BROKER.brokerage}, #${FEATURED_BROKER.licenseNumber}).`;

export const appraiserCredentialSentence = `${FEATURED_APPRAISER.name} is a Washington State certified residential appraiser (${FEATURED_APPRAISER.firm}, #${FEATURED_APPRAISER.licenseNumber}).`;
