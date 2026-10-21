/**
 * The family-side featured professionals, in one place (moved out of
 * src/pages/FeaturedProfessionals.tsx on Oct 20, 2026). Used by the Featured
 * Professionals directory and by the "People who help with this" box at the
 * end of each topic page (TopicProfessionals.tsx), so adding or removing a
 * person here updates every page.
 *
 * Each group has a stable `key`; src/data/topicProfessionals.ts maps topic
 * pages to keys. AFH Club's professionals are separate (afhProfessionals.ts).
 */
import { FEATURED_BROKER, FEATURED_APPRAISER } from "@/data/featuredProfessionals";
import { BROKER_PHOTO, APPRAISER_PHOTO } from "@/data/featuredProfessionalAssets";
import scottPhoto from "@/assets/providers/elder-law-scott-schill-mercer-island.webp";
import tiffanyPhoto from "@/assets/tiffany-lane-financial-planner-new-york-life-seattle.webp";
import lauraPhoto from "@/assets/providers/laura-silverstein-aging-life-care-manager-washington.webp";
import jennipherPhotoAsset from "@/assets/providers/jennipher-ama-family-first-at-home.webp.asset.json";
import nicolePhotoAsset from "@/assets/providers/nicole-aging-wisdom.webp.asset.json";
import ericPhoto from "@/assets/providers/senior-movers-eric-rovner-washington.webp";
import tinaBarilPhoto from "@/assets/providers/senior-movers-tina-baril-washington.webp";
import meriannPhoto from "@/assets/meriann-roberts-ginnys-girls-owner.webp";
import abigailPhoto from "@/assets/abigail-mckee-ginnys-girls-manager.webp";
import abbyPhoto from "@/assets/abby-durr-silver-age-senior-living-advisor.webp";
import purpleGroupPhoto from "@/assets/providers/cpa-purple-group-tenly-jessica-seattle.webp";
import dominikPhoto from "@/assets/dominik-musafia-divorce-attorney-seattle.avif";
import danBartelPhoto from "@/assets/providers/real-estate-lenders-dan-bartel-washington.webp";
import jeffMcGinnisPhoto from "@/assets/providers/real-estate-lenders-jeff-mcginnis-washington.webp";
import hansWestermarkPhoto from "@/assets/providers/real-estate-lenders-hans-westermark-washington.webp";
import heidiPhoto from "@/assets/heidi-bolton-medicare-advisor-spears-agency.webp";
import jrGillespiePhoto from "@/assets/jr-gillespie-medicare-advisor-allstar-financial.webp";
import anthonyUpchurchPhoto from "@/assets/providers/anthony-upchurch-legal-plans-legalshield.webp";
/* nicoleJohnsonPhoto, NOT nicolePhoto — that name is already taken above by
   Nicole Amico Kane at Aging Wisdom. Two different Nicoles are listed on this
   page; keep the surnames in the variable names so nobody wires the wrong
   photo to the wrong person. */
import { LYNN_LIEDLE } from "@/data/afhProfessionals";
import nicoleJohnsonPhoto from "@/assets/providers/nicole-guzman-johnson-bookkeeper-books-on-the-rock.webp";

const jennipherPhoto = jennipherPhotoAsset.url;
const nicolePhoto = nicolePhotoAsset.url;

export interface Professional {
  name: string;
  role: string;
  company: string;
  specialty: string;
  photo: string;
  href: string;
  /** Optional second person, for tiles covering two people at the same firm. */
  name2?: string;
  role2?: string;
  photo2?: string;
}

export type ProfessionalCategoryKey =
  | "realEstate"
  | "careManagers"
  | "moveManagers"
  | "estateLiquidation"
  | "seniorLiving"
  | "elderLaw"
  | "familyLaw"
  | "legalPlans"
  | "financialPlanning"
  | "mortgage"
  | "medicare"
  | "cpas"
  | "bookkeeping"
  | "cleanupRemediation";

export interface CategoryGroup {
  key: ProfessionalCategoryKey;
  category: string;
  professionals: Professional[];
}

const groupsAsWritten: CategoryGroup[] = [
  {
    key: "realEstate",
    category: "Real Estate & Appraisal",
    professionals: [
      {
        name: FEATURED_BROKER.name,
        role: "Washington State Licensed Real Estate Broker",
        company: FEATURED_BROKER.brokerage,
        specialty: "Probate, estate, and trust property sales throughout Washington State.",
        photo: BROKER_PHOTO,
        href: "/realtor",
      },
      {
        name: FEATURED_APPRAISER.name,
        role: "Certified Residential Appraiser",
        company: FEATURED_APPRAISER.firm,
        specialty: "Date-of-death valuations, estate appraisals, and residential appraisal services.",
        photo: APPRAISER_PHOTO,
        href: "/real-estate-appraiser",
      },
    ],
  },
  {
    key: "careManagers",
    category: "Aging Life Care Management",
    professionals: [
      {
        name: "Laura A. Silverstein, MSW",
        role: "Aging Life Care Manager",
        company: "Silver & Sage Consulting, LLC",
        specialty: "Care coordination and advocacy for older adults and families navigating aging-related decisions.",
        photo: lauraPhoto,
        href: "/aging-life-care-managers",
      },
      {
        name: "Jennipher Ama",
        role: "President, RN, CMC",
        company: "Family First at Home",
        specialty: "Registered nurse and certified care manager supporting families through in-home care planning.",
        photo: jennipherPhoto,
        href: "/aging-life-care-managers",
      },
      {
        name: "Nicole Amico Kane, MSW, LICSW, CMC",
        role: "Director of Care Management",
        company: "Aging Wisdom",
        specialty: "Certified care manager specializing in complex family dynamics and long-term care planning.",
        photo: nicolePhoto,
        href: "/aging-life-care-managers",
      },
    ],
  },
  {
    key: "moveManagers",
    category: "Senior Move Management",
    professionals: [
      {
        name: "Eric Rovner",
        role: "Vice President of Marketing",
        company: "HB Move Management · Hansen Bros. Moving",
        specialty: "Full-service senior relocation and move management throughout the Puget Sound region.",
        photo: ericPhoto,
        href: "/senior-move-managers",
      },
      {
        name: "Tina Baril",
        role: "Owner",
        company: "Monarch Transitions · Senior Move Managers",
        specialty: "Compassionate move management and downsizing support for older adults and their families.",
        photo: tinaBarilPhoto,
        href: "/senior-move-managers",
      },
      {
        name: "Meriann Roberts",
        role: "Owner",
        company: "Ginny's Girls Estate Services",
        specialty: "Estate sales, downsizing, and move-out services for families in transition.",
        photo: meriannPhoto,
        href: "/senior-move-managers",
      },
    ],
  },
  {
    key: "estateLiquidation",
    category: "Estate Liquidation Services",
    professionals: [
      {
        // Meriann and Abigail are the same firm with identical specialty copy,
        // so they share one tile rather than rendering two duplicate cards.
        name: "Meriann Roberts",
        role: "Owner",
        name2: "Abigail McKee",
        role2: "Manager",
        company: "Ginny's Girls Estate Services",
        specialty:
          "Estate sales, senior move management, residential clear-outs, and ISA-certified personal property appraisals throughout North King and Snohomish Counties.",
        photo: meriannPhoto,
        photo2: abigailPhoto,
        href: "/estate-liquidators",
      },
    ],
  },
  {
    key: "seniorLiving",
    category: "Senior Living Advisors",
    professionals: [
      {
        name: "Abby Durr",
        role: "Owner & Founder",
        company: "Silver Age Senior Living Advisors",
        specialty: "Free, personalized guidance matching families with the right senior living community.",
        photo: abbyPhoto,
        href: "/senior-living-advisors",
      },
    ],
  },
  {
    key: "elderLaw",
    category: "Elder Law",
    professionals: [
      {
        name: "Scott R. Schill",
        role: "Elder Law Attorney",
        company: "S.R. Schill & Associates — Financial and Longevity Advisors",
        specialty: "Elder law, Medicaid planning, and long-term care legal strategy in Washington State.",
        photo: scottPhoto,
        href: "/for-elder-law-attorneys",
      },
    ],
  },
  {
    key: "familyLaw",
    category: "Family Law & Divorce",
    professionals: [
      {
        name: "Dominik Musafia",
        role: "Divorce & Family Law Attorney",
        company: "Seattle Divorce Options, PLLC",
        specialty:
          "Collaborative divorce and family law, with additional expertise in business and real property matters.",
        photo: dominikPhoto,
        href: "/for-divorce-attorneys",
      },
    ],
  },
  {
    /*
      Deliberately a separate category from Elder Law and Family Law & Divorce,
      and deliberately not filed under Estate Planning Attorneys.

      A legal service plan representative is not an attorney, and the plan
      provider is not a law firm — legal work under a plan is performed by
      independent provider law firms. Grouping a plan associate with licensed
      attorneys would tell an older visitor that a plan membership is
      equivalent to retaining counsel for an estate matter, which it is not.
      The role and specialty copy below both state the distinction, and the
      destination page repeats it above the fold.
    */
    key: "legalPlans",
    category: "Legal Plans & Identity Protection",
    professionals: [
      {
        name: "Anthony Upchurch",
        role: "Legal and Privacy Manager (not an attorney)",
        company: "LegalShield",
        specialty:
          "Legal service plans covering attorney-prepared wills, will reviews and updates, document review, and identity theft monitoring. Wills are prepared by attorneys at LegalShield's provider law firms; LegalShield is a plan provider, not a law firm.",
        photo: anthonyUpchurchPhoto,
        href: "/legal-plans-identity-protection",
      },
    ],
  },
  {
    key: "financialPlanning",
    category: "Financial Planning",
    professionals: [
      {
        name: "Tiffany Lane",
        role: "Financial Professional",
        company: "New York Life — Seattle General Office",
        specialty: "Financial planning for families navigating major life and estate transitions.",
        photo: tiffanyPhoto,
        href: "/for-financial-planners",
      },
    ],
  },
  {
    key: "mortgage",
    category: "Mortgage & Reverse Mortgage Lending",
    professionals: [
      {
        name: "Daniel Bartel",
        role: "Retirement Mortgage Specialist · Reverse Mortgage Lender",
        company: "C2 Financial",
        specialty: "Reverse mortgages and retirement planning for seniors.",
        photo: danBartelPhoto,
        href: "/mortgage-lenders",
      },
      {
        name: "Jeff McGinnis",
        role: "Senior Loan Officer",
        company: "CrossCountry Mortgage",
        specialty: "25+ years of mortgage lending experience.",
        photo: jeffMcGinnisPhoto,
        href: "/mortgage-lenders",
      },
      {
        name: "Hans Westermark",
        role: "President & Senior Loan Officer",
        company: "Family First Mortgage",
        specialty: "Home loans, refinancing, and real estate transitions.",
        photo: hansWestermarkPhoto,
        href: "/mortgage-lenders",
      },
    ],
  },
  {
    key: "medicare",
    category: "Medicare Guidance",
    professionals: [
      {
        name: "Heidi Bolton",
        role: "Medicare Advisor",
        company: "Spears Agency",
        specialty:
          "Medicare planning and coverage guidance for individuals turning 65, retiring, or reviewing existing coverage.",
        photo: heidiPhoto,
        href: "/medicare-providers",
      },
      {
        name: "J. R. Gillespie",
        role: "Medicare Advisor",
        company: "ALLSTAR Financial Insurance",
        specialty: "Medicare guidance for individuals, families, and small businesses across the Puget Sound region.",
        photo: jrGillespiePhoto,
        href: "/medicare-providers",
      },
    ],
  },
  {
    key: "cpas",
    category: "CPAs & Tax Planning",
    professionals: [
      {
        name: "Tenly Krakoff & Jessica Simons, CPAs",
        role: "Co-Founders",
        company: "The Purple Group",
        specialty: "Tax planning, estate and trust taxation, and financial strategy for individuals and families.",
        photo: purpleGroupPhoto,
        href: "/for-cpas",
      },
    ],
  },
  /* Bookkeeping is its own category, deliberately. A bookkeeper is not a CPA —
     different work, different credential — and folding one into a group headed
     "CPAs & Tax Planning" would misstate a professional designation on a page
     whose whole purpose is accurate attribution. */
  {
    key: "bookkeeping",
    category: "Bookkeeping",
    professionals: [
      {
        name: "Nicole Guzman Johnson",
        role: "Owner, Certified QuickBooks ProAdvisor",
        company: "Books on The Rock, LLC",
        specialty: "Bookkeeping and QuickBooks Online support for small- and medium-sized business owners. Hablo español.",
        photo: nicoleJohnsonPhoto,
        href: "/bookkeeping-services",
      },
    ],
  },
  /* Added Oct 21, 2026. Lynn also appears on AFH Club; her details live once,
     in src/data/afhProfessionals.ts (LYNN_LIEDLE). */
  {
    key: "cleanupRemediation",
    category: "Water, Mold, Fire & Biohazard Cleanup",
    professionals: [
      {
        name: LYNN_LIEDLE.name,
        role: "Owner",
        company: LYNN_LIEDLE.company,
        specialty: "Water damage cleanup, mold removal and remediation, biohazard cleanup, air duct and coil cleaning, sanitizing, fire damage cleanup and moisture control, restoring the home to a clean, sanitary and livable condition.",
        photo: LYNN_LIEDLE.photo,
        href: "/water-mold-fire-cleanup",
      },
    ],
  },
];

/**
 * Directory order is neutral (owner's decision, Sept 27, 2026, after an outside
 * audit noted the featured broker always came first): categories A to Z, and
 * people A to Z by last name within each category. Sorted here, so entries can
 * be written in any order above and new ones fall into place. Ties keep their
 * written order (the broker and appraiser tiles for the same person).
 */
const lastName = (name: string) => {
  const first = name.split(" & ")[0].split(",")[0].trim();
  const words = first.split(/\s+/);
  return words[words.length - 1].toLowerCase();
};
export const PROFESSIONAL_GROUPS: CategoryGroup[] = [...groupsAsWritten]
  .sort((a, b) => a.category.localeCompare(b.category))
  .map((g) => ({ ...g, professionals: [...g.professionals].sort((a, b) => lastName(a.name).localeCompare(lastName(b.name))) }));

export const professionalGroup = (key: ProfessionalCategoryKey): CategoryGroup | undefined =>
  PROFESSIONAL_GROUPS.find((g) => g.key === key);
