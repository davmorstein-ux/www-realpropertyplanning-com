import nicolePhoto from "@/assets/providers/nicole-guzman-johnson-bookkeeper-books-on-the-rock.webp";
import booksOnTheRockLogo from "@/assets/providers/books-on-the-rock-bookkeeping-logo.webp";
import mjSharmaPhoto from "@/assets/providers/mj-sharma-two-maids-headshot.webp";
import twoMaidsLogo from "@/assets/providers/two-maids-cleaning-logo.webp";
import ruslanBagaveevPhoto from "@/assets/providers/ruslan-bagaveev-dryout-headshot.webp";
import dryoutLogo from "@/assets/providers/dryout-water-damage-restoration-logo.webp";
import { FEATURED_BROKER, brokerLicenseShort } from "@/data/featuredProfessionals";
import { BROKER_PHOTO, BROKERAGE_LOGO, BROKERAGE_LOGO_ALT, AFH_BROKER_BIO } from "@/data/featuredProfessionalAssets";

/**
 * AFH CLUB'S FEATURED PROFESSIONALS (Sept 2026), and the one place each person's
 * details live.
 *
 * WHY ONE FILE. Each of these people used to be written out inside a page. Once
 * someone appears on two pages, that is two copies of a phone number to keep in
 * step. Every page that shows a person now reads the record from here:
 *   - /afh-club/find-a-professional   everyone, grouped by role
 *   - /afh-club/real-estate-broker    the featured broker
 *   - /bookkeeping-services           Nicole Guzman Johnson
 * Change a phone number, email, photo or bio HERE and all of them update.
 *
 * THE STANDARD FOR BEING LISTED, in the site owner's words: people he has met
 * with and vetted. Listings are a courtesy. Nobody pays to be listed and Real
 * Property Planning receives nothing if a visitor hires them. The page says so,
 * so do not add anyone who does not meet that standard, and if a paid listing
 * is ever introduced, the statement on the page must change with it.
 *
 * The one exception is stated on the page too: the featured broker (see
 * src/data/featuredProfessionals.ts — the ONLY file that names him) is the
 * broker behind AFH Club and IS compensated if a visitor hires him.
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
  /** Professional license, shown under the name on the directory grid ("License #…"; the profession label above already says what kind). Omit when the profession has none. */
  license?: string;
  phone?: string;
  email?: string;
  website: string;
  specialty: string;
  bio: string;
  /** Shown beneath the person's card. Used for anything a visitor should know before calling. */
  note?: string;
  /** A page ON THIS SITE about the person. The card's own "Learn More" goes to their external website. */
  morePath?: string;
  moreLabel?: string;
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

/** The featured broker's title differs by page, so pages pass their own; everything else comes from the featured record. */
export const FEATURED_AFH_BROKER: AFHProfessional = {
  id: "featured-broker",
  name: FEATURED_BROKER.name,
  /* Was "AFH Expert Real Estate Broker". "Expert" is a self-assessment; the
     credentials are verifiable (Sept 24, 2026). */
  title: "Adult Family Home Real Estate Specialist",
  company: FEATURED_BROKER.brokerage,
  photo: BROKER_PHOTO,
  photoAlt: `Photo of ${FEATURED_BROKER.name}, AFH Real Estate Broker`,
  logo: BROKERAGE_LOGO,
  logoAlt: BROKERAGE_LOGO_ALT,
  license: `License #${FEATURED_BROKER.licenseNumber}`,
  phone: FEATURED_BROKER.phone,
  email: FEATURED_BROKER.email,
  website: FEATURED_BROKER.website,
  specialty:
    "Adult Family Home transactions, probate, estate, and trust property sales across Washington State.",
  bio: AFH_BROKER_BIO,
  morePath: "/afh-club/real-estate-broker",
  moreLabel: `More about selling or buying an adult family home with ${FEATURED_BROKER.firstName}`,
  note: `${FEATURED_BROKER.name} is the broker behind AFH Club. Unlike everyone else on this page, he is compensated if you hire him as your broker. WA real estate broker, ${brokerLicenseShort}.`,
};


export const MJ_SHARMA: AFHProfessional = {
  id: "mj-sharma",
  name: "MJ Sharma",
  title: "Owner, Two Maids Cleaning",
  company: "Two Maids Cleaning",
  photo: mjSharmaPhoto,
  photoAlt: "Photo of MJ Sharma, owner of Two Maids Cleaning",
  logo: twoMaidsLogo,
  logoAlt: "Two Maids Cleaning logo",
  phone: "(425) 659-4449",
  email: "mj.sharma@twomaidscleaning.com",
  website: "https://www.twomaidscleaning.com/bothell/",
  specialty: "Professional house cleaning — Bothell, Sammamish, and Covington, WA",
  bio: "",
};


export const RUSLAN_BAGAVEEV: AFHProfessional = {
  id: "ruslan-bagaveev",
  name: "Ruslan Bagaveev",
  title: "Water Damage Restoration, Dryout",
  company: "Dryout",
  photo: ruslanBagaveevPhoto,
  photoAlt: "Photo of Ruslan Bagaveev, Dryout water damage restoration",
  logo: dryoutLogo,
  logoAlt: "Dryout Water Damage Restoration logo",
  phone: "(425) 221-3264",
  email: "dryout@wtrdmg.com",
  website: "https://www.wtrdmg.com",
  specialty: "Water damage restoration and dry-out for homes and licensed care homes",
  bio: "",
};

export interface AFHProfessionalGroup {
  id: string;
  label: string;
  /** What the person does, in two or three words, shown ABOVE the headshot on the directory grid ("Real Estate Broker", "Bookkeeper"). */
  profession: string;
  /** Why an adult family home needs this ROLE. About the role, never a claim about a person. */
  why: string;
  people: AFHProfessional[];
}

export const AFH_PROFESSIONAL_GROUPS: AFHProfessionalGroup[] = [
  {
    id: "real-estate",
    label: "Real estate",
    profession: "Real Estate Broker",
    why: "Selling or buying an adult family home is not an ordinary house sale. The license does not transfer, the business and the building can be sold together or apart, and a lender looks at the home's income as well as its walls.",
    people: [FEATURED_AFH_BROKER],
  },
  {
    id: "bookkeeping",
    label: "Bookkeeping",
    profession: "Bookkeeper",
    why: "Clean books are what make an adult family home's income believable. A buyer's lender will ask for a year or two of statements that reconcile: residents, to rates, to actual deposits. Owners who keep them current sell more easily, and buyers who inherit them can see what they are getting.",
    people: [NICOLE_GUZMAN_JOHNSON],
  },
  // Groups David is filling next (Sept 2026). Empty until a person is added, and an
  // empty group renders nothing — no placeholder, no "coming soon".
  {
    id: "photography",
    label: "Photography",
    profession: "Photographer",
    why: "A licensed care home is sold on its rooms, its light and its condition as much as on its numbers, and DSHS-required features (grab bars, ramps, door widths) have to be visible without making the home look institutional. A photographer who has shot care homes knows the difference.",
    people: [],
  },
  {
    id: "house-cleaning",
    label: "House cleaning",
    profession: "House Cleaning",
    why: "An operating home has to be cleaned around residents, on a schedule, to a standard an inspector or a buyer walking through will notice. A cleaning company used to care settings works quietly, on time, and with the products the home allows.",
    people: [MJ_SHARMA],
  },
  {
    id: "water-damage",
    label: "Water damage restoration",
    profession: "Water Damage Restoration",
    why: "A burst line or a slow leak in an operating home is an emergency twice over: the residents cannot simply move out while it dries, and DSHS will want to see that the home stayed safe and sanitary. A restoration company that can dry, contain, and document the work around residents matters more here than in an ordinary house.",
    people: [RUSLAN_BAGAVEEV],
  },
  {
    id: "business-insurance",
    label: "Business insurance",
    profession: "Business Insurance",
    why: "An adult family home needs general and professional liability, property, workers' compensation for caregivers, and often abuse-and-molestation coverage, and a buyer cannot take over the seller's policies. A broker who writes care homes knows which carriers will bind the risk and what DSHS and lenders expect to see.",
    people: [],
  },
  {
    id: "sba-lending",
    label: "SBA lending",
    profession: "SBA Loan Specialist",
    why: "Most AFH purchases that include the business are financed with an SBA 7(a) or 504 loan, which underwrites the home's income as well as the real estate. A lender who has closed AFH deals knows how to present the resident revenue, the CHOW timeline, and the owner's role to underwriting.",
    people: [],
  },
  {
    id: "business-brokerage",
    label: "Business brokerage",
    profession: "Business Broker",
    why: "When the business changes hands separately from the building — or the buyer is leasing — a commercial business broker values and markets the operation itself: the license, the resident census, the staff and the contracts. That is different work from selling the real estate.",
    people: [],
  },
];

/** Groups that actually have someone in them. The page renders only these. */
export const ACTIVE_AFH_PROFESSIONAL_GROUPS = AFH_PROFESSIONAL_GROUPS.filter((g) => g.people.length > 0);

/** Every featured person as one flat list, each tagged with their profession, in group order. This is what the directory grid renders. */
export const AFH_FEATURED_PEOPLE: Array<{ person: AFHProfessional; profession: string; groupId: string }> = AFH_PROFESSIONAL_GROUPS.flatMap((g) =>
  g.people.map((person) => ({ person, profession: g.profession, groupId: g.id })),
);
