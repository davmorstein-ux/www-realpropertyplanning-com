import nicolePhoto from "@/assets/providers/nicole-guzman-johnson-bookkeeper-books-on-the-rock.webp";
import booksOnTheRockLogo from "@/assets/providers/books-on-the-rock-bookkeeping-logo.webp";
import davidSteinPhoto from "@/assets/providers/realtor-david-stein-headshot-seattle.webp";
import expRealtyLogo from "@/assets/providers/exp-realty-brokerage-large-logo-washington.webp";

/**
 * AFH CLUB'S FEATURED PROFESSIONALS (Sept 2026), and the one place each person's
 * details live.
 *
 * WHY ONE FILE. Each of these people used to be written out inside a page. Once
 * someone appears on two pages, that is two copies of a phone number to keep in
 * step. Every page that shows a person now reads the record from here:
 *   - /afh-club/find-a-professional   everyone, grouped by role
 *   - /afh-club/real-estate-broker    David Stein
 *   - /bookkeeping-services           Nicole Guzman Johnson
 * Change a phone number, email, photo or bio HERE and all of them update.
 *
 * THE STANDARD FOR BEING LISTED, in the site owner's words: people he has met
 * with and vetted. Listings are a courtesy. Nobody pays to be listed and Real
 * Property Planning receives nothing if a visitor hires them. The page says so,
 * so do not add anyone who does not meet that standard, and if a paid listing
 * is ever introduced, the statement on the page must change with it.
 *
 * The one exception is stated on the page too: David Stein is the broker behind
 * AFH Club and IS compensated if a visitor hires him as their broker.
 *
 * WHAT A RECORD MAY CLAIM. Only what the person or the site owner has supplied.
 * Do not write that someone "specializes in adult family homes" unless they
 * said so. The AFH-specific explanation of why a role matters belongs to the
 * GROUP (`why`), where it describes the role, not the person.
 *
 * ADDING SOMEONE. Add a record, put it in a group below (or add a group), and
 * run the tests. A group with nobody in it is not rendered: the page never shows
 * an empty category or a "coming soon".
 *
 * This file imports image assets, so it is for the app only. It cannot be loaded
 * by vite.config.ts; the static HTML for crawlers names the roles in words.
 */

export interface AFHProfessional {
  id: string;
  name: string;
  title: string;
  company: string;
  photo: string;
  photoAlt: string;
  logo?: string;
  logoAlt?: string;
  phone?: string;
  email?: string;
  website: string;
  specialty: string;
  bio: string;
  /** Shown beneath the person's card. Used for anything a visitor should know before calling. */
  note?: string;
}

export const NICOLE_GUZMAN_JOHNSON: AFHProfessional = {
  id: "nicole-guzman-johnson",
  name: "Nicole Guzman Johnson",
  title: "Owner, Certified QuickBooks ProAdvisor",
  company: "Books on The Rock, LLC",
  photo: nicolePhoto,
  photoAlt: "Photo of Nicole Guzman Johnson, Owner and Certified QuickBooks ProAdvisor at Books on The Rock, LLC",
  logo: booksOnTheRockLogo,
  logoAlt: "Books on The Rock, LLC logo",
  phone: "(225) 361-7916",
  email: "njohnson.bk@booksontherockllc.com",
  website: "https://booksontherockllc.com",
  specialty:
    "Organized, personalized bookkeeping and QuickBooks Online support for small- and medium-sized business owners across Washington State. Hablo español.",
  bio: "Nicole Guzman Johnson is the owner of Books on The Rock LLC and a Certified QuickBooks ProAdvisor who helps small- and medium-sized business owners gain clarity and confidence in their finances.\n\nThrough organized, personalized bookkeeping and QuickBooks Online support, Nicole helps clients stay current with their books, understand their financial position, and make informed decisions. Her goal is to reduce the stress of managing financial records so business owners can focus on serving their clients and growing their business.\n\nBased in Everett, Washington. Bookkeeping services built on a firm foundation. Hablo español.",
};

/** David's title differs by page, so pages pass their own; everything else is shared. */
export const DAVID_STEIN: AFHProfessional = {
  id: "david-stein",
  name: "David Stein",
  title: "AFH Expert Real Estate Broker",
  company: "eXp Realty",
  photo: davidSteinPhoto,
  photoAlt: "Photo of David Stein, AFH Real Estate Broker",
  logo: expRealtyLogo,
  logoAlt: "eXp Realty logo",
  phone: "(206) 900-3015",
  email: "dave.stein@exprealty.com",
  website: "https://davestein.exprealty.com",
  specialty:
    "Adult Family Home transactions, probate, estate, and trust property sales across Washington State.",
  bio: "David Stein is a Washington State licensed real estate broker and Certified Residential Appraiser with over 20 years of experience in complex property transactions. He brings a rare combination of appraisal expertise and brokerage experience to AFH transactions — understanding both how to value a licensed care facility and how to navigate the CHOW process, DSHS timelines, and specialty contract considerations that define AFH real estate.",
  note: "David Stein is the broker behind AFH Club. Unlike everyone else on this page, he is compensated if you hire him as your broker. WA real estate broker, eXp Realty, license #133972.",
};

export interface AFHProfessionalGroup {
  id: string;
  label: string;
  /** Why an adult family home needs this ROLE. About the role, never a claim about a person. */
  why: string;
  people: AFHProfessional[];
}

export const AFH_PROFESSIONAL_GROUPS: AFHProfessionalGroup[] = [
  {
    id: "real-estate",
    label: "Real estate",
    why: "Selling or buying an adult family home is not an ordinary house sale. The license does not transfer, the business and the building can be sold together or apart, and a lender looks at the home's income as well as its walls.",
    people: [DAVID_STEIN],
  },
  {
    id: "bookkeeping",
    label: "Bookkeeping",
    why: "Clean books are what make an adult family home's income believable. A buyer's lender will ask for a year or two of statements that reconcile: residents, to rates, to actual deposits. Owners who keep them current sell more easily, and buyers who inherit them can see what they are getting.",
    people: [NICOLE_GUZMAN_JOHNSON],
  },
];

/** Groups that actually have someone in them. The page renders only these. */
export const ACTIVE_AFH_PROFESSIONAL_GROUPS = AFH_PROFESSIONAL_GROUPS.filter((g) => g.people.length > 0);
