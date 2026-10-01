/**
 * The six standards pages (Sept 27, 2026): editorial standards, methodology,
 * corrections, professional inclusion, compensation disclosure, and authors.
 *
 * One source for both the React page (src/pages/PolicyPage.tsx) and the
 * prerendered HTML (vite.config.ts ROUTE_METADATA), so what crawlers read and
 * what visitors read cannot drift apart. Node-safe: no JSX, no browser APIs.
 *
 * Every statement here must stay literally true. Facts the owner stated on
 * Sept 27, 2026:
 *  - Real Property Planning pays no one, has no bank account, and makes no profit.
 *  - Professionals are paid directly by their own clients. The featured broker is
 *    paid a commission for representing a buyer or seller, only when a property sells.
 *  - Nobody besides the owner reviews content today.
 *  - Corrections go to the general inbox (info@realpropertyplanning.com).
 *  - Referral fees: only when the featured broker refers someone to a broker in
 *    another state (the site offers that through the brokerage's national
 *    network). No referral fees or commission splits otherwise.
 *  - Every professional listed has been met with personally by the owner.
 * If any of these change, change this file the same day.
 */
import { FEATURED_APPRAISER, FEATURED_BROKER, SAME_PERSON } from "./featuredProfessionals";

export interface PolicySection {
  heading: string;
  paragraphs: string[];
  /** Optional bullet list rendered after the paragraphs. */
  bullets?: string[];
}

export interface PolicyPage {
  path: string;
  /** Short name for menus and the "Our standards" list. */
  navTitle: string;
  h1: string;
  title: string;
  description: string;
  intro: string;
  sections: PolicySection[];
  lastReviewed: string;
}

const LAST_REVIEWED = "September 27, 2026";
const INBOX = "info@realpropertyplanning.com";

const authorCredentials = SAME_PERSON
  ? `a Washington State licensed real estate broker (${FEATURED_BROKER.brokerage}, license #${FEATURED_BROKER.licenseNumber}) and a Washington State certified residential appraiser (${FEATURED_APPRAISER.firm}, license #${FEATURED_APPRAISER.licenseNumber})`
  : `a Washington State licensed real estate broker (${FEATURED_BROKER.brokerage}, license #${FEATURED_BROKER.licenseNumber})`;

export const POLICY_PAGES: PolicyPage[] = [
  {
    path: "/editorial-standards",
    navTitle: "Editorial Standards",
    h1: "Editorial Standards",
    title: "Editorial Standards | Real Property Planning",
    description:
      "How Real Property Planning writes, sources, reviews, and updates its Washington guides on probate property, senior transitions, and adult family homes.",
    intro:
      "Real Property Planning publishes free, Washington-specific guides for families, executors, and adult family home buyers, owners, and sellers. These are the rules every guide is held to.",
    sections: [
      {
        heading: "What we publish, and what we do not",
        paragraphs: [
          "We publish education: how Washington processes work, what the rules say, what things cost, and which questions to ask. We do not publish legal, tax, financial, medical, or licensing advice for anyone's particular situation, and nothing on the site creates a professional relationship.",
          "Real Property Planning does not provide professional services. When a guide describes work such as pricing a home, appraising it, or handling a probate filing, that work is done by an independently engaged licensed professional, never by the site.",
        ],
      },
      {
        heading: "Primary sources first",
        paragraphs: [
          "Statements about Washington law, rules, rates, and programs are checked against the primary source: the Revised Code of Washington (RCW), the Washington Administrative Code (WAC) and the Washington State Register, the Department of Social and Health Services (DSHS), the Health Care Authority (HCA), county courts and assessors, and the published text of agreements such as the adult family home collective bargaining agreement.",
          "When a rule has recently changed, we read the section's history line and the filing that changed it, and cite the filing. A news article, a search result, or another website is never treated as proof that a rule says something.",
          "Guides link to their sources so readers can check them. Where a figure is an estimate rather than a published number, the page says so.",
        ],
      },
      {
        heading: "Separating requirements from advice",
        paragraphs: [
          "Where it matters, guides label a statement as a Washington requirement (it rests on law, rule, or agency guidance) or as a best practice (a practical recommendation that is not required). Readers should never have to guess which is which.",
        ],
      },
      {
        heading: "How guides are written and reviewed",
        paragraphs: [
          `Guides are written and reviewed by ${FEATURED_BROKER.name}, ${authorCredentials}. AI writing assistants are used to help draft, organize, and check pages; every factual statement is verified against its source before publication, and the author is responsible for what is published.`,
          "No outside reviewer currently reviews the site's content. When a qualified reviewer, such as an attorney for legal-process guides, reviews a page, the page will name the reviewer and the date, and the reviewer page will list their qualifications. A reviewer's involvement does not mean they or Real Property Planning are giving you advice.",
        ],
      },
      {
        heading: "Dates and updates",
        paragraphs: [
          "Guides show when they were last reviewed. A review means the page was read against its current sources, not merely re-dated. When a rule, rate, or program changes, affected pages are updated and the change is described on the page where it matters.",
          "Some figures change on a fixed schedule, such as DSHS adult family home rates each July. Those pages say which period their figures cover.",
        ],
      },
      {
        heading: "Independence",
        paragraphs: [
          "No one pays to be written about, and no one can buy a place in a guide, a directory, or a ranking. Professionals mentioned in guides are independent businesses. See the Professional Inclusion Standards and the Advertising and Compensation Disclosure for the details.",
        ],
      },
      {
        heading: "Mistakes",
        paragraphs: [
          `If you find an error, email ${INBOX} or use the contact form and choose "I have a website question or correction." The Corrections Policy explains what happens next.`,
        ],
      },
    ],
    lastReviewed: LAST_REVIEWED,
  },
  {
    path: "/research-methodology",
    navTitle: "Research & Data Methodology",
    h1: "Research and Data Methodology",
    title: "Research and Data Methodology | Real Property Planning",
    description:
      "Where Real Property Planning's data comes from, how the adult family home directory, rates, listings, and calculators are built, and what each one can and cannot tell you.",
    intro:
      "Several parts of the site are built from data rather than written from scratch. This page explains where each dataset comes from, how it is processed, how current it is, and its limits.",
    sections: [
      {
        heading: "Adult family home directory",
        paragraphs: [
          "The directory of licensed adult family homes is built from the Department of Social and Health Services (DSHS) Adult Family Home Locator, using the county exports from its Advanced Lookup for all 39 Washington counties. Each home's page shows the date its data was retrieved.",
          "For each home we keep the fields DSHS publishes: license number, name, address, county, contact name, phone, licensed capacity (beds), specialty designations (dementia, mental health, developmental disabilities), DSHS contracts, whether the home accepts Medicaid, and whether DSHS has inspection or investigation reports on file.",
          "Processing is limited to cleaning: standardizing city names and ZIP codes, correcting obvious typos in city names, and merging records DSHS lists more than once for multiple contracts. We do not add, estimate, or infer any field. A home that does not appear in the DSHS locator is not listed as licensed.",
          "Limits: the directory is a snapshot. Licenses are issued, changed, and closed every week, so always confirm a home's current status in the DSHS locator. We do not rate or rank homes, and a listing is not a recommendation.",
        ],
      },
      {
        heading: "Inspection and enforcement history",
        paragraphs: [
          "Real Property Planning does not republish or summarize DSHS inspection reports. Where DSHS has reports on file, the directory tells you so and links to DSHS, where the reports themselves are published. Our guide to reading violation history explains how to find and interpret them.",
        ],
      },
      {
        heading: "Medicaid rates and specialty payments",
        paragraphs: [
          "DSHS adult family home daily rates come from the published DSHS rate tables and are updated each July when new rates take effect. Behavioral-health and specialty add-on amounts come from the published adult family home collective bargaining agreement and the related Washington rules. Each page states the effective period of the figures it shows.",
        ],
      },
      {
        heading: "Private-pay estimates",
        paragraphs: [
          "Private-pay adult family home prices are not published by any agency, and there is no public dataset of them. The ranges shown for King, Snohomish, and Pierce counties are working estimates from the featured broker and appraiser's experience with operating homes, and they are labeled as estimates with a review date. Other counties show no private-pay estimate until there is enough information to publish one honestly.",
        ],
      },
      {
        heading: "Adult family homes for sale and sold",
        paragraphs: [
          "For-sale and sold adult family home listings come mainly from the Northwest Multiple Listing Service (NWMLS), with some from other listing services and business-for-sale sites, each reviewed by hand and credited to its source. Each listing is labeled by what the record actually supports: an operating licensed home, a licensed home with no residents, a former adult family home, a home with a passed building inspection that was never licensed, or a home marketed as a potential adult family home with nothing verified. A listing broker's description is never used as the label.",
          "Listings are marked sold or expired rather than deleted, so the record stays accurate over time.",
        ],
      },
      {
        heading: "Calculators and scores",
        paragraphs: [
          "The site's calculators, such as the cost-of-care calculators, the adult family home ROI and valuation tools, the Occupancy and Financing calculator, and the AFH Property Score, run entirely in your browser. Nothing you enter is stored or sent anywhere.",
          "Each tool shows its assumptions. Rates and rules that the tools rely on come from the same published sources described above. Weights and cost ranges that involve judgment, such as the Property Score's weights, are described on the tool's page as provisional. A calculator result is an estimate for planning, not an appraisal, a lending decision, or a licensing determination.",
        ],
      },
      {
        heading: "Reporting a data problem",
        paragraphs: [
          `If a home's details are wrong, check the DSHS locator first, since our data comes from it. If DSHS is correct and we are not, email ${INBOX} with the license number and we will fix it.`,
        ],
      },
    ],
    lastReviewed: LAST_REVIEWED,
  },
  {
    path: "/corrections-policy",
    navTitle: "Corrections Policy",
    h1: "Corrections Policy",
    title: "Corrections Policy | Real Property Planning",
    description:
      "How to report an error on Real Property Planning and how corrections are made, dated, and disclosed.",
    intro:
      "Getting Washington-specific facts right is the point of this site. When we get something wrong, we fix it and say so.",
    sections: [
      {
        heading: "How to report an error",
        paragraphs: [
          `Email ${INBOX}, or use the contact form and choose "I have a website question or correction." Please include the page address and, if you can, the source that shows the correct information.`,
        ],
      },
      {
        heading: "What happens next",
        paragraphs: [
          "Every report is read. We check the claim against the primary source, not against another website. If the page is wrong, it is corrected, and the page's last-reviewed date is updated.",
          "Substantive corrections, meaning anything that changes a fact, a figure, a requirement, or a conclusion a reader might act on, are noted on the page with the date and what changed. Spelling, grammar, and formatting fixes are made without a note.",
          "If the report is about a professional's own listing, such as a phone number or a license, we update it once the professional confirms the change.",
        ],
      },
      {
        heading: "When the rules change",
        paragraphs: [
          "An update because a law, rule, or rate changed is not a correction, but it is handled the same way: the page is revised, the review date changes, and the page says what changed and when the new rule took effect.",
        ],
      },
    ],
    lastReviewed: LAST_REVIEWED,
  },
  {
    path: "/professional-inclusion-standards",
    navTitle: "Professional Inclusion Standards",
    h1: "Professional Inclusion Standards",
    title: "Professional Inclusion Standards | Real Property Planning",
    description:
      "How professionals come to be listed on Real Property Planning and AFH Club, what is and is not checked, and what a listing does and does not mean.",
    intro:
      "Real Property Planning lists independent professionals so readers have a place to start. This page states exactly how listings work, so no one reads more into a listing than it means.",
    sections: [
      {
        heading: "What a listing means",
        paragraphs: [
          "A listing means the professional appears in the directory. It is not an endorsement, a recommendation, a guarantee, or a statement about the quality of their work. Every listed professional is an independent business, responsible for their own services, fees, advice, licensing, and client relationships.",
          "Listings are free. No one pays to be listed, and no one can pay for a better position. Directories are arranged by category and then alphabetically by last name.",
        ],
      },
      {
        heading: "How professionals are added",
        paragraphs: [
          "Every professional listed on the site, on the main directory and on AFH Club, is someone the site's owner has met with personally. Meeting someone is how a listing starts; it is not an evaluation of their work.",
          "Professionals can ask to be considered through the contact form. Being considered does not guarantee a listing.",
        ],
      },
      {
        heading: "What is and is not checked",
        paragraphs: [
          "Real Property Planning does not investigate, audit, or monitor listed professionals. License numbers, business details, and descriptions are shown as the professional supplied them. Before hiring anyone, verify their license and standing directly with the licensing body:",
        ],
        bullets: [
          "Real estate brokers and appraisers: Washington State Department of Licensing",
          "Attorneys: Washington State Bar Association lawyer directory",
          "Insurance agents: Washington Office of the Insurance Commissioner",
          "Contractors: Washington State Department of Labor & Industries",
          "Adult family homes: the DSHS Adult Family Home Locator",
        ],
      },
      {
        heading: "Removal",
        paragraphs: [
          "A professional can ask to be removed at any time. A listing may also be removed if its details can no longer be confirmed or if it no longer fits these standards.",
        ],
      },
    ],
    lastReviewed: LAST_REVIEWED,
  },
  {
    path: "/compensation-disclosure",
    navTitle: "Compensation Disclosure",
    h1: "Advertising and Compensation Disclosure",
    title: "Advertising and Compensation Disclosure | Real Property Planning",
    description:
      "Real Property Planning carries no advertising, charges nothing, and pays no one. How the independent professionals on the site are paid, including the featured broker.",
    intro:
      "Readers deserve to know who gets paid and how. The short answer: the site itself neither charges nor pays anyone. The professionals listed here are paid by their own clients.",
    sections: [
      {
        heading: "The site",
        paragraphs: [
          "Real Property Planning is not a business that earns money. It has no bank account, makes no profit, charges nothing for its guides, tools, or directory, and pays no one.",
          "The site carries no advertising and no affiliate links. No one pays to be listed, to be mentioned in a guide, or to appear higher in a directory.",
        ],
      },
      {
        heading: "The professionals",
        paragraphs: [
          "Every professional listed on the site is an independent business. They are paid for their services directly by the clients who hire them, on terms they set with those clients. Real Property Planning receives nothing when you hire anyone listed here.",
        ],
      },
      {
        heading: `The featured broker${SAME_PERSON ? " and appraiser" : ""}`,
        paragraphs: [
          `${FEATURED_BROKER.name}, the featured broker, is a licensed real estate broker with ${FEATURED_BROKER.brokerage}. If you hire ${FEATURED_BROKER.pronoun.object} to represent you as a buyer or seller, ${FEATURED_BROKER.pronoun.subject} is paid a commission through ${FEATURED_BROKER.brokerage}, and only when the property sells. The commission comes from the transaction, never from Real Property Planning, and it is disclosed on ${FEATURED_BROKER.pronoun.possessive} own listing.`,
          `The only other case: for a property outside Washington, ${FEATURED_BROKER.pronoun.subject} can refer you to a licensed broker in that state through ${FEATURED_BROKER.brokerage}'s national network. If that property sells, the other broker may pay ${FEATURED_BROKER.pronoun.object} a referral fee out of their own commission. ${FEATURED_BROKER.pronoun.Subject} receives no referral fees for referrals within Washington.`,
          ...(SAME_PERSON
            ? [
                `${FEATURED_APPRAISER.name} is also a certified residential appraiser with ${FEATURED_APPRAISER.firm}. Appraisal fees are paid by the client who orders the appraisal. Appraisal and brokerage are kept on separate transactions: the same property is never both appraised and brokered by the same person.`,
              ]
            : []),
          "You are always free to work with any professional you choose, listed here or not.",
        ],
      },
    ],
    lastReviewed: LAST_REVIEWED,
  },
  {
    path: "/authors",
    navTitle: "Authors & Reviewers",
    h1: "About Our Authors and Reviewers",
    title: "About Our Authors and Reviewers | Real Property Planning",
    description:
      "Who writes and reviews Real Property Planning's Washington guides, their licenses and experience, and how reviewers will be identified.",
    intro:
      "Every guide on the site names who wrote it. This page gives the full background, so readers can judge the source for themselves.",
    sections: [
      {
        heading: FEATURED_BROKER.name,
        paragraphs: [
          `${FEATURED_BROKER.name} writes and reviews the site's guides. ${FEATURED_BROKER.pronoun.Subject} is ${authorCredentials}.`,
          `${FEATURED_BROKER.pronoun.Possessive} work covers probate, estate, and inherited-property sales for executors, trustees, heirs, and attorneys across Washington State, and adult family home purchases and sales for buyers, sellers, and operators in the Puget Sound region. That experience is where many of the site's questions come from.`,
          `Licenses can be verified with the Washington State Department of Licensing. ${FEATURED_BROKER.pronoun.Possessive} work as a broker${SAME_PERSON ? " and appraiser" : ""} is done through ${FEATURED_BROKER.pronoun.possessive} own independent business${SAME_PERSON ? "es" : ""}, not through Real Property Planning. See the Advertising and Compensation Disclosure.`,
        ],
      },
      {
        heading: "Reviewers",
        paragraphs: [
          "No outside reviewer currently reviews the site's content. When qualified professionals, such as attorneys, CPAs, or care professionals, review guides in their field, they will be listed here with their qualifications, and each page they reviewed will name them and the review date.",
          "A reviewer confirms that a guide is accurate as general education. Their review does not mean they are advising you, and it does not create a relationship between you and them or between you and Real Property Planning.",
        ],
      },
      {
        heading: "How guides are made",
        paragraphs: [
          "AI writing assistants help draft, organize, and check pages. Every factual statement is verified against its primary source before it is published, and the author is responsible for everything published. The Editorial Standards page explains the process in full.",
        ],
      },
    ],
    lastReviewed: LAST_REVIEWED,
  },
];

export const policyPageByPath = (path: string) => POLICY_PAGES.find((p) => p.path === path);
