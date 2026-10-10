import nicolePhoto from "@/assets/providers/nicole-guzman-johnson-bookkeeper-books-on-the-rock.webp";
import booksOnTheRockLogo from "@/assets/providers/books-on-the-rock-bookkeeping-logo.webp";
import mjSharmaPhoto from "@/assets/providers/mj-sharma-two-maids-headshot.webp";
import twoMaidsLogo from "@/assets/providers/two-maids-cleaning-logo.webp";
import ruslanBagaveevPhoto from "@/assets/providers/ruslan-bagaveev-dryout-headshot.webp";
import dryoutLogo from "@/assets/providers/dryout-water-damage-restoration-logo.webp";
import kaylinPhoto from "@/assets/providers/kaylin-cottingham-wilson-griffith-insurance-headshot.webp";
import griffithLogo from "@/assets/providers/griffith-insurance-group-logo.webp";
import exaelPhoto from "@/assets/providers/exael-zuniga-invision-marketing-headshot.webp";
import invisionLogo from "@/assets/providers/invision-marketing-logo.webp";
import rachaelScottPhoto from "@/assets/providers/rachael-scott-ballpark-realty-headshot.webp";
import ballparkRealtyLogo from "@/assets/providers/ballpark-realty-logo.webp";
import sethRadduePhoto from "@/assets/providers/seth-raddue-tristar-finance-headshot.webp";
import fengquanSongPhoto from "@/assets/providers/fengquan-song-aura-living-care-headshot.webp";
import auraLivingCareLogo from "@/assets/providers/aura-living-care-logo.webp";
import tristarLogo from "@/assets/providers/tristar-finance-home-loans-logo.webp";
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
 * with personally (not "vetted": that implies an endorsement the Disclaimer denies,
 * owner's decision Sept 27, 2026). Listings are a courtesy. Nobody pays to be listed and Real
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

/** Ring around every AFH Club headshot: the deep green of the AFH Club badge
 *  (public/afh-club-badge-logo.webp ring). Owner, Sept 30, 2026: one ring color
 *  ties every featured professional to AFH Club. */
export const AFH_HEADSHOT_RING = "#0f4d3a";

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
     credentials are verifiable (Sept 24, 2026). Owner, Sept 30, 2026: "AFH Real Estate Broker". */
  title: "AFH Real Estate Broker",
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

/* Added Sept 28, 2026. License number OE20486 (owner clarified the same day that
   "CA" belonged to the company line, not the license); displayed like his. Card has one phone
   line; at her request (Sept 28, 2026) it shows (503) 432-0666 rather than (206) 363-0550. Logo supplied by
   the owner Sept 28, 2026 (light-blue background removed). */
export const KAYLIN_COTTINGHAM_WILSON: AFHProfessional = {
  id: "kaylin-cottingham-wilson",
  name: "Kaylin Cottingham-Wilson",
  title: "Producing Agent",
  company: "Griffith Insurance Group, Inc.",
  photo: kaylinPhoto,
  photoAlt: "Photo of Kaylin Cottingham-Wilson, Producing Agent at Griffith Insurance Group",
  logo: griffithLogo,
  logoAlt: "Griffith Insurance Group logo",
  license: "License #OE20486",
  phone: "(503) 432-0666",
  email: "kaylin@grdins.com",
  website: "https://www.grdins.com",
  specialty: "Business insurance — Griffith Insurance Group, Kenmore, WA",
  bio: "",
};

/* Added Sept 29, 2026 at the owner's request. */
export const EXAEL_ZUNIGA: AFHProfessional = {
  id: "exael-zuniga",
  name: "Exael Zuniga",
  title: "Invision Marketing",
  company: "Invision Marketing",
  photo: exaelPhoto,
  photoAlt: "Photo of Exael Zuniga, Invision Marketing",
  logo: invisionLogo,
  logoAlt: "Invision Marketing logo",
  phone: "(509) 948-0860",
  email: "exael@invisionmarketing.io",
  website: "https://invisionmarketing.io",
  specialty: "Website design and marketing — Woodinville, WA",
  bio: "",
};

/* Added Sept 30, 2026 at the owner's request: name, firm, phone, email, photo,
   and logo supplied by the owner (the email was given
   by him in conversation, so it is confirmed). No bio or license claim: none
   was supplied. */
export const RACHAEL_SCOTT: AFHProfessional = {
  id: "rachael-scott",
  name: "Rachael Scott",
  title: "Business Broker",
  company: "Scott Consulting / Ballpark Realty",
  photo: rachaelScottPhoto,
  photoAlt: "Photo of Rachael Scott, Business Broker with Scott Consulting and Ballpark Realty",
  logo: ballparkRealtyLogo,
  logoAlt: "Ballpark Realty logo",
  phone: "(662) 380-2502",
  email: "rachaelscott.wa@gmail.com",
  // Owner, Sept 30, 2026: her website is not BizBuySell; no website until she supplies one.
  website: "",
  specialty: "Business brokerage — Scott Consulting / Ballpark Realty",
  bio: "",
};

/* Added Oct 7, 2026 at the owner's request, from Seth's email signature:
   name, title, company, NMLS numbers, phone, email, website, headshot and logo.
   His signature lists four numbers (206-240-8514, 425-455-8497, 425-458-4763,
   888-909-9024); the first is shown. No bio or specialty claim: none supplied. */
export const SETH_RADDUE: AFHProfessional = {
  id: "seth-raddue",
  name: "Seth C. Raddue",
  title: "President & CEO, Mortgage Loan Originator",
  company: "TriStar Finance, Inc.",
  photo: sethRadduePhoto,
  photoAlt: "Photo of Seth C. Raddue, President and CEO of TriStar Finance",
  logo: tristarLogo,
  logoAlt: "TriStar Finance Home Loans logo",
  license: "NMLS #90509 · Company NMLS #43583",
  phone: "(206) 240-8514",
  email: "sethr@tristarfinance.com",
  website: "https://www.tristarfinance.com",
  specialty: "Mortgage lending — TriStar Finance, Inc.",
  bio: "",
};

/* Added Oct 9, 2026 at the owner's request, with the details published on the
   old /afh-club/management-companies page since June 2026 (phone, email,
   website); headshot recropped from that page's photo. That page was retired
   the same day at the owner's request and now forwards here: this is the only
   place he is listed. The (214) number is
   his cell (owner confirmed Oct 9, 2026). */
export const FENGQUAN_SONG: AFHProfessional = {
  id: "fengquan-song",
  name: "Fengquan Song",
  title: "Owner",
  company: "Aura Living Care",
  photo: fengquanSongPhoto,
  photoAlt: "Photo of Fengquan Song, owner of Aura Living Care",
  logo: auraLivingCareLogo,
  logoAlt: "Aura Living Care logo",
  phone: "(214) 205-4091",
  email: "aura@auralivingcare.com",
  website: "https://auralivingcare.com",
  specialty: "Adult family home management — Aura Living Care, Seattle",
  bio: "",
};

export interface AFHProfessionalGroup {
  id: string;
  label: string;
  /** What the person does, in two or three words, shown ABOVE the headshot on the directory grid ("Real Estate Broker", "Bookkeeper"). */
  profession: string;
  /** The card's profession label, always two lines (David, Sept 25 2026): e.g. ["Water Damage", "Restoration"], ["Professional", "Bookkeeper"]. */
  professionLines: [string, string];
  /** Why an adult family home needs this ROLE. About the role, never a claim about a person. */
  why: string;
  people: AFHProfessional[];
}

export const AFH_PROFESSIONAL_GROUPS: AFHProfessionalGroup[] = [
  {
    id: "real-estate",
    label: "Real estate",
    profession: "AFH Real Estate Broker",
    professionLines: ["AFH Real Estate", "Broker"],
    why: "Selling or buying an adult family home is not an ordinary house sale. The license does not transfer, the business and the building can be sold together or apart, and a lender looks at the home's income as well as its walls.",
    people: [FEATURED_AFH_BROKER],
  },
  {
    id: "bookkeeping",
    label: "Bookkeeping",
    profession: "Bookkeeper",
    professionLines: ["Professional", "Bookkeeper"],
    why: "Clean books are what make an adult family home's income believable. A buyer's lender will ask for a year or two of statements that reconcile: residents, to rates, to actual deposits. Owners who keep them current sell more easily, and buyers who inherit them can see what they are getting.",
    people: [NICOLE_GUZMAN_JOHNSON],
  },
  // Groups David is filling next (Sept 2026). Empty until a person is added, and an
  // empty group renders nothing — no placeholder, no "coming soon".
  {
    id: "photography",
    label: "Photography",
    profession: "Photographer",
    professionLines: ["Professional", "Photographer"],
    why: "A licensed care home is sold on its rooms, its light and its condition as much as on its numbers, and DSHS-required features (grab bars, ramps, door widths) have to be visible without making the home look institutional. A photographer who has shot care homes knows the difference.",
    people: [],
  },
  {
    id: "house-cleaning",
    label: "House cleaning",
    profession: "House Cleaning",
    professionLines: ["Professional", "House Cleaning"],
    why: "An operating home has to be cleaned around residents, on a schedule, to a standard an inspector or a buyer walking through will notice. A cleaning company used to care settings works quietly, on time, and with the products the home allows.",
    people: [MJ_SHARMA],
  },
  {
    id: "water-damage",
    label: "Water damage restoration",
    profession: "Water Damage Restoration",
    professionLines: ["Water Damage", "Restoration"],
    why: "A burst line or a slow leak in an operating home is an emergency twice over: the residents cannot simply move out while it dries, and DSHS will want to see that the home stayed safe and sanitary. A restoration company that can dry, contain, and document the work around residents matters more here than in an ordinary house.",
    people: [RUSLAN_BAGAVEEV],
  },
  {
    id: "business-insurance",
    label: "Insurance broker",
    profession: "Insurance Broker",
    professionLines: ["Insurance", "Broker"],
    why: "An adult family home needs general and professional liability, property, workers' compensation for caregivers, and often abuse-and-molestation coverage, and a buyer cannot take over the seller's policies. A broker who writes care homes knows which carriers will bind the risk and what DSHS and lenders expect to see.",
    people: [KAYLIN_COTTINGHAM_WILSON],
  },
  {
    id: "website-marketing",
    label: "Website design and marketing",
    profession: "Website Design & Marketing",
    professionLines: ["Website Design", "& Marketing"],
    why: "Families, case managers and hospital discharge planners look a home up online before they call. A clear website with accurate photos, the home's specialties and current contact details, and a listing that shows up in local search, is how an adult family home fills an empty bed without paying a placement fee.",
    people: [EXAEL_ZUNIGA],
  },
  {
    id: "mortgage-lending",
    label: "Mortgage lending",
    profession: "AFH Mortgage Lender",
    professionLines: ["AFH Mortgage", "Lender"],
    why: "Buying the house an adult family home runs in is usually a residential mortgage when the buyer will live there, and a commercial or income-based loan when they will not. The lender has to decide whether to count the home's care income, and how. A loan officer who has financed adult family homes knows which programs fit and what the underwriter will ask for.",
    /* Shown from Oct 9, 2026, when Seth supplied a studio headshot (cropped out
       of its decorative frame to the standard 480px square). */
    people: [SETH_RADDUE],
  },
  {
    id: "afh-management",
    label: "AFH management",
    profession: "AFH Management",
    professionLines: ["AFH", "Management"],
    why: "An owner who does not live in the home, or who owns more than one, often hires a management company to handle staffing, scheduling, DSHS compliance and day-to-day operations. For a buyer, a manager with a track record can be the difference between an investment that runs and one that needs the owner every day.",
    people: [FENGQUAN_SONG],
  },
  {
    id: "sba-lending",
    label: "SBA lending",
    profession: "SBA Loan Specialist",
    professionLines: ["SBA Loan", "Specialist"],
    why: "Most AFH purchases that include the business are financed with an SBA 7(a) or 504 loan, which underwrites the home's income as well as the real estate. A lender who has closed AFH deals knows how to present the resident revenue, the CHOW timeline, and the owner's role to underwriting.",
    people: [],
  },
  {
    id: "business-brokerage",
    label: "Business brokerage",
    profession: "Business Broker",
    professionLines: ["Business", "Broker"],
    why: "When the business changes hands separately from the building — or the buyer is leasing — a business broker values and markets the operation itself: the resident census, staff, contracts and goodwill. The DSHS license is not part of the sale (a buyer applies for a new one), so a business broker who understands that timing matters. That is different work from selling the real estate.",
    people: [RACHAEL_SCOTT],
  },
];

/**
 * SECTIONS (owner, Oct 10, 2026): the grid is split into three titled rows by
 * what the professional helps an owner do. A section lists its groups in the
 * order they appear; within a group, people run A to Z by last name. Every
 * group must belong to exactly one section (a test checks), and a section with
 * nobody in it is not rendered.
 *   Buy & Sell   the AFH real estate broker, the mortgage lender, the business broker
 *                (photography and SBA lending join here once someone is listed)
 *   Operate      management, insurance, website & marketing, bookkeeping
 *   Maintain     house cleaning, water damage restoration
 * This replaces the Oct 9 "five groups lead, then A to Z" order.
 */
export interface AFHProfessionalSection {
  id: string;
  title: string;
  /** One plain sentence under the section title saying who the row is for. */
  lead: string;
  groupIds: string[];
}

export const AFH_PROFESSIONAL_SECTIONS: AFHProfessionalSection[] = [
  {
    id: "buy-sell",
    title: "Buy & Sell",
    lead: "Buying or selling an adult family home, the building, the business, or both.",
    groupIds: ["real-estate", "mortgage-lending", "business-brokerage", "sba-lending", "photography"],
  },
  {
    id: "operate",
    title: "Operate",
    lead: "Running the home day to day: management, insurance, marketing, and the books.",
    groupIds: ["afh-management", "business-insurance", "website-marketing", "bookkeeping"],
  },
  {
    id: "maintain",
    title: "Maintain",
    lead: "Keeping the house itself clean, safe, and in good repair.",
    groupIds: ["house-cleaning", "water-damage"],
  },
];

const lastName = (name: string) => {
  const words = name.split(" & ")[0].split(",")[0].trim().split(/\s+/);
  return words[words.length - 1].toLowerCase();
};
const groupById = new Map(AFH_PROFESSIONAL_GROUPS.map((g) => [g.id, g]));
const NEUTRAL_ORDER: AFHProfessionalGroup[] = AFH_PROFESSIONAL_SECTIONS.flatMap((s) => s.groupIds)
  .map((id) => groupById.get(id))
  .filter((g): g is AFHProfessionalGroup => !!g)
  .map((g) => ({ ...g, people: [...g.people].sort((a, b) => lastName(a.name).localeCompare(lastName(b.name))) }));

type FeaturedEntry = { person: AFHProfessional; profession: string; professionLines: [string, string]; groupId: string };
const entriesOf = (groups: AFHProfessionalGroup[]): FeaturedEntry[] =>
  groups.flatMap((g) => g.people.map((person) => ({ person, profession: g.profession, professionLines: g.professionLines, groupId: g.id })));

/** The sections the page renders: each with its people in order. Empty sections are left out. */
export const AFH_FEATURED_SECTIONS: Array<AFHProfessionalSection & { entries: FeaturedEntry[] }> = AFH_PROFESSIONAL_SECTIONS.map((s) => ({
  ...s,
  entries: entriesOf(NEUTRAL_ORDER.filter((g) => s.groupIds.includes(g.id))),
})).filter((s) => s.entries.length > 0);

/** Groups that actually have someone in them, in neutral order. The page renders only these. */
export const ACTIVE_AFH_PROFESSIONAL_GROUPS = NEUTRAL_ORDER.filter((g) => g.people.length > 0);

/** Every featured person as one flat list, each tagged with their profession, in section order. */
export const AFH_FEATURED_PEOPLE: FeaturedEntry[] = entriesOf(NEUTRAL_ORDER);
