/**
 * "55+ Communities in Washington: What Families Should Know" (Oct 4, 2026).
 *
 * Written instead of a 55+ community directory (owner's decision, Oct 4,
 * 2026): no official statewide list of age-restricted communities exists, the
 * research dataset leaned on commercial listing sites, and the state's
 * manufactured-home community registration (RCW 59.30.050) does not record
 * age restrictions. The guide covers the legal and property questions instead.
 *
 * Sources, checked Oct 4, 2026:
 *   - 42 U.S.C. 3607(b)(2)-(3): the three kinds of "housing for older
 *     persons"; 55+ needs 80% of occupied units with at least one person 55+,
 *     published policies showing intent, and HUD rules; 62+ is "solely
 *     occupied by persons 62 years of age or older".
 *   - 24 CFR 100.303 (62+ exceptions: residents since Sept 13, 1988; employees
 *     doing substantial management or maintenance duties; reserved vacant
 *     units; no exception for a younger spouse), 100.305 (the community
 *     decides the age rule, if any, for the other 20%), 100.307 (age
 *     verification, surveys updated at least once every two years).
 *   - Washington State Human Rights Commission, "Familial status": the older-
 *     persons exemption is the only exemption from familial-status protection.
 *   - RCW 59.20.073 (selling a home in a park: assignment of the rental
 *     agreement; 15 days' written notice to the landlord; landlord approves or
 *     refuses in writing at least 7 days before, on the same basis as any new
 *     tenant, consent not unreasonably withheld; seller verifies taxes, rent
 *     and expenses are paid; closure notice to the buyer).
 *   - RCW 59.20.090 (three months' written notice of a rent increase);
 *     RCW 59.20.370 as described by the Attorney General's office (since May
 *     7, 2025, increases capped at 5% in any 12-month period with limited
 *     exemptions; none in the first 12 months of a tenancy); SHB 2452 (2026)
 *     keeps the five percent figure.
 *   - RCW 59.20.325 (notice of opportunity to compete to purchase when a
 *     community is sold); RCW 59.30.050 (communities register every year).
 *   - Snohomish County licensing: title transfers of manufactured homes and
 *     the county treasurer's excise tax affidavit.
 * Chapter 59.20 RCW has no section on the death of a tenant; the death
 * section below says only what follows from the sections above.
 * Used by the page and by vite.config.ts (prerender): no React, no "@/".
 */

export const FIFTY_FIVE = {
  PATH: "/senior-transitions/55-plus-communities-washington",
  TITLE: "55+ Communities in Washington: What Families Should Know",
  SHORT_TITLE: "55+ Communities in Washington",
  DESCRIPTION:
    "What \"55+\" and \"62+\" legally mean, who can live in an age-restricted community, how owning a home on a leased lot works, what to check before buying, and what happens to the home when the owner dies.",
  PUBLISHED: "2026-10-04",
  REVIEWED: "2026-10-04",
  SHORT_ANSWER:
    "A 55+ community is housing that federal law allows to turn away younger households. To qualify, at least 80 percent of its occupied homes must have someone 55 or older, and it must publish an age policy and verify ages at least every two years; a 62+ community must be occupied only by people 62 or older. In Washington many are manufactured-home communities where you own the home but rent the lot. Before buying, get the written age policy and the rules on younger spouses, children and heirs, because those rules decide who can live there and who can buy the home later.",
};

export interface FpSection {
  id: string;
  heading: string;
  paras: string[];
  cites: { label: string; href: string }[];
}

const USC = { label: "42 U.S.C. 3607: housing for older persons", href: "https://www.law.cornell.edu/uscode/text/42/3607" };
const CFR = { label: "24 CFR 100.300–100.308: HUD rules", href: "https://www.ecfr.gov/current/title-24/subtitle-B/chapter-I/subchapter-A/part-100/subpart-E" };
const HUM = { label: "WA Human Rights Commission: familial status", href: "https://hum.wa.gov/fair-housing/familial-status" };
const R073 = { label: "RCW 59.20.073: selling a home in a park", href: "https://app.leg.wa.gov/RCW/default.aspx?cite=59.20.073" };
const R090 = { label: "RCW 59.20.090: notice of rent increases", href: "https://app.leg.wa.gov/RCW/default.aspx?cite=59.20.090" };
const AG = { label: "Attorney General: Manufactured/Mobile Home Landlord-Tenant Act", href: "https://www.atg.wa.gov/manufactured-mobile-home-landlord-tenant-act" };
const R325 = { label: "RCW 59.20.325: notice when a community is sold", href: "https://app.leg.wa.gov/RCW/default.aspx?cite=59.20.325" };
const SNO = { label: "Snohomish County: manufactured home titles", href: "https://snohomishcountywa.gov/275/Manufactured-and-Mobile-Home-Titles-and-" };

export const FP_SECTIONS: FpSection[] = [
  {
    id: "what-makes-it-55-plus",
    heading: "What makes a community \"55+\"",
    paras: [
      "Fair housing law forbids turning away families with children. The one exception is housing for older persons, and a community has to earn it. Federal law recognizes three kinds: housing in a state or federal program designed for older people; housing intended for and occupied only by people 62 or older; and housing intended for people 55 or older where at least 80 percent of the occupied homes have at least one resident 55 or older.",
      "A 55+ community must also publish and follow policies that show it is meant for older residents, and it must verify ages, with surveys updated at least once every two years. A driver's license, passport or a signed statement in a lease or application can count. A community that is only marketed to retirees, without meeting these tests, is \"age-targeted,\" not age-restricted, and cannot turn away younger buyers or renters. Washington's Human Rights Commission describes the same exemption as the only one from the state's protections for families with children.",
    ],
    cites: [USC, CFR, HUM],
  },
  {
    id: "who-can-live-there",
    heading: "Who can live there: spouses, adult children, heirs",
    paras: [
      "In a 55+ community, the law needs only one person in the home to be 55 or older, and only in 80 percent of the homes. Each community decides its own rule for the rest. Some let a younger spouse or an adult child live with a parent; some require every household to include someone 55 or older; some go further. A younger spouse may be able to stay after a death under one community's rules and not another's.",
      "A 62+ community is stricter. Every resident must be 62 or older. The federal rules allow only narrow exceptions, such as people who lived there before September 13, 1988 and staff who manage or maintain the property. A younger spouse is not one of them. Communities in a government housing program may also have program rules of their own.",
      "Because the rules differ so much, the written age policy is the most important document to read. Ask who counts as the qualifying resident, whether younger spouses, partners, adult children or caregivers may live there, how long guests may stay, and what happens to a younger spouse or an heir after the qualifying resident dies.",
    ],
    cites: [CFR],
  },
  {
    id: "kinds-of-communities",
    heading: "The kinds of age-restricted communities in Washington",
    paras: [
      "For-sale homes and condominiums. Houses, townhomes or condos you buy outright, usually with a homeowners' association that runs common areas and enforces the age policy. Larger active-adult communities often add a clubhouse and activities.",
      "Manufactured-home communities. You own the home and rent the lot it sits on. Many of Washington's 55+ communities are manufactured-home communities. Washington's Manufactured/Mobile Home Landlord-Tenant Act governs the lot rental; the next section covers it.",
      "62+ and senior apartments. Rentals limited to older tenants. Many are income-restricted or subsidized, with their own eligibility rules and waiting lists, usually through a housing authority or a nonprofit.",
      "None of these provide care. Assisted living, adult family homes and nursing homes are licensed care settings, a different decision with different rules.",
    ],
    cites: [],
  },
  {
    id: "land-lease",
    heading: "Owning the home, renting the lot",
    paras: [
      "In a manufactured-home community, the home is yours but the ground is not. You pay lot rent every month for as long as the home stays, and the rental agreement and community rules govern what you can do. Loans for a home on a rented lot work differently from an ordinary mortgage, so ask a lender early if the purchase needs financing.",
      "Washington law gives lot renters real protections. The landlord must give three months' written notice before raising the rent. Since May 7, 2025, an increase is limited to 5 percent in any 12-month period, with limited exemptions, and the rent cannot go up at all in the first 12 months of a tenancy. When an owner sets out to sell the community, the law requires a notice giving residents a chance to compete to buy it. Communities must register with the state every year, and the Attorney General's office runs a dispute resolution program for park owners and residents.",
      "Before buying a home in a community, ask the seller and the landlord whether a closure notice is in effect: a seller must give the buyer a copy at least 15 days before the sale. Ask too whether the community is for sale, and for the current rent and every increase over the last few years.",
    ],
    cites: [R090, AG, R325, R073],
  },
  {
    id: "before-you-buy",
    heading: "What to get in writing before buying",
    paras: [
      "The age policy, and how the community verifies ages. The homeowners' association declaration, bylaws and rules, or for a manufactured-home community the rental agreement and community rules. The current dues or lot rent, what they cover, and how they have changed. The rules on renting the home out, on guests and on younger residents. And, for a parent buying, the question families most often forget to ask: what happens to the home when the owner dies. Who may live there, who may buy it, and how the community approves a buyer all decide how easily the family can sell it later.",
    ],
    cites: [],
  },
  {
    id: "when-the-owner-dies",
    heading: "When the owner dies",
    paras: [
      "A home in a 55+ community passes through the estate like any other property: by will, by trust, or to heirs, with the personal representative or trustee in charge until it is sold or transferred. The costs keep coming. Association dues or lot rent are still owed every month, and the estate pays them.",
      "Owning and living there are different questions. An heir under 55 can usually inherit the home, but the community's age policy decides whether the heir can live there, and its rules decide whether the home can be rented out. In a 62+ community, a younger heir generally cannot live there at all. Many families sell.",
      "Selling needs more planning because the buyer has to qualify. In a manufactured-home community, the buyer takes over the lot rental agreement, and the landlord approves or refuses the buyer on the same basis as any new tenant, which in a 55+ community generally includes the age policy. The seller must notify the landlord in writing at least 15 days before the sale and confirm that taxes, rent and other charges are paid; the landlord must approve or refuse in writing at least 7 days before the transfer, and cannot unreasonably refuse. The home's title transfers through a county licensing office, and the county treasurer handles the excise tax paperwork.",
      "If the home sits on land the owner also owned, outside a community, it may have been converted to real property and is sold like a house.",
    ],
    cites: [R073, SNO],
  },
  {
    id: "finding-communities",
    heading: "Finding communities",
    paras: [
      "This site does not keep a directory of 55+ communities. No official statewide list of age-restricted communities exists, and the state's registration of manufactured-home communities does not record age rules. National listing websites for 55+ and manufactured-home communities list many Washington communities, with current homes for sale. For income-restricted 62+ apartments, start with the local housing authority. Whatever the source, confirm the age policy with the community itself before relying on it.",
    ],
    cites: [],
  },
];

export const FP_FAQS = [
  {
    question: "Can my adult child live with me in a 55+ community?",
    answer:
      "It depends on the community. Federal law requires only that 80 percent of occupied homes have at least one resident 55 or older, and each community sets its own rule for the rest. Many allow a younger adult to live with a qualifying resident; some do not. Read the written age policy. In a 62+ community, every resident must be 62 or older, with narrow exceptions.",
  },
  {
    question: "Can I inherit a home in a 55+ community if I am under 55?",
    answer:
      "Usually you can inherit and own it; whether you can live there or rent it out depends on the community's age policy and rules. Many heirs sell. The buyer has to qualify under the community's rules, which can narrow the pool of buyers.",
  },
  {
    question: "How much can a manufactured-home community raise the lot rent?",
    answer:
      "Since May 7, 2025, Washington limits lot rent increases to 5 percent in any 12-month period, with limited exemptions, and allows none in the first 12 months of a tenancy. The landlord must give three months' written notice. The Attorney General's office has details and a dispute resolution program.",
  },
  {
    question: "Is a 55+ community the same as assisted living?",
    answer:
      "No. A 55+ community is housing with an age rule; it provides no care. Assisted living, adult family homes and nursing homes are licensed care settings.",
  },
];

/** Every source, for the article record (src/data/articleRecords.ts). */
export const FP_SOURCES = [USC, CFR, HUM, R073, R090, AG, R325, SNO, {
  label: "RCW 59.30.050: annual registration of manufactured-home communities",
  href: "https://app.leg.wa.gov/RCW/default.aspx?cite=59.30.050",
}];

/** Plain-text version for the prerender (vite.config.ts). */
export const FP_PRERENDER_SECTIONS: string[] = [
  ...FP_SECTIONS.map((s) => `${s.heading.replace(/"/g, "")} — ${s.paras.join(" ")}`),
  "General information, not legal advice. Community age policies, fees and rules change; confirm them with the community before making a housing decision.",
];
