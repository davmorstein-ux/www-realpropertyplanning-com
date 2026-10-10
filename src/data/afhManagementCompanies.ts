/**
 * "Hiring a Management Company for Your Washington Adult Family Home" (Oct 10, 2026).
 *
 * WHY IT EXISTS. An AFH resident manager the owner met (Oct 10, 2026) asked
 * whether he could manage more than one adult family home. The site's
 * "Ask a question" box had no answer for that, or for "can I hire a company to
 * manage my AFH" / "can I own one without managing it". A Google AI answer to
 * the same questions cited this site's old "Retiring" card ("a management
 * company can run the home while the asset stays in your name"), which
 * overstated what a manager may do; that card was corrected the same day.
 *
 * WHAT IS CONFIRMED, AND HOW. Every rule below was read in full on
 * app.leg.wa.gov on Oct 10, 2026, history line included (not from a search
 * summary, and not from the Google or ChatGPT answers that prompted the page):
 *   - WAC 388-76-10036  one responsible person per home, "designated to manage only
 *                       one adult family home at a given time" (applies when one
 *                       provider holds more than one license). WSR 10-04-008.
 *   - WAC 388-76-10037  additional licenses: 24 months on the first; then 12 months
 *                       since the last, no enforcement actions. WSR 20-05-016.
 *   - WAC 388-76-10040  provider or entity representative lives in, or a resident
 *                       manager lives in; waived with 24-hour staffing and a
 *                       decision-maker always present. WSR 10-04-008.
 *   - WAC 388-76-10130  resident manager qualifications (21+, 1,000 hours direct
 *                       care within 60 months, training, background). WSR 20-05-016.
 *   - WAC 388-76-11050  management agreements: written, filed with an org chart and
 *                       a signed attestation; 60 days before the effective date;
 *                       amendments 30 days; residents notified 60 days ahead. A
 *                       "manager" excludes a resident manager. WSR 23-12-075.
 *   - WAC 388-76-11055  the home keeps ultimate responsibility; handing over too
 *                       much is treated as a change of ownership; principal/agent
 *                       only; "department-approved" agreement. WSR 23-12-075.
 *   - WAC 388-76-11060  required terms: monthly oversight meetings and at least
 *                       quarterly on-site visits by the home; the home keeps
 *                       ultimate responsibility for personnel, care and staffing;
 *                       the manager may sign resident agreements in the home's
 *                       name; the manager may not appear to be the provider.
 *   - WAC 388-76-11065  DSHS may require changes to a proposed agreement.
 *   - WAC 388-76-11070  resident funds: bond or insurance, monthly accounting.
 *   - Form DSHS 27-226 (07/2023), "Adult Family Home Management Agreement:
 *     Attestation Information and Attachments": applicants include it with the
 *     license application; licensed homes email it to RCSBOA@dshs.wa.gov.
 *
 * WHAT IS DELIBERATELY NOT HERE
 *   - Whether a management company may itself EMPLOY a home's resident manager.
 *     The rules neither say so nor forbid it, and 11060(10) keeps "all personnel
 *     issues" with the home. The page says to ask DSHS; do not answer it until
 *     DSHS has, in writing.
 *   - Whether one resident manager may serve two homes owned by DIFFERENT
 *     providers under the 10040 staffing waiver. Same treatment.
 *   - Management fee ranges. None could be sourced (the "8-12%", "$2,500-4,500"
 *     and "15-25% markup" figures in the AI answers are unsupported). No fee
 *     calculator until there is real data.
 *
 * Node-safe: imported by vite.config.ts for the prerender. No React, no "@/".
 */

const WAC = (cite: string) => `https://app.leg.wa.gov/WAC/default.aspx?cite=${cite}`;

export const AFH_MGMT = {
  PATH: "/afh-club/hiring-an-afh-management-company",
  TITLE: "Hiring a Management Company for Your Washington Adult Family Home",
  SEO_TITLE: "Hiring an Adult Family Home Management Company in Washington: What the Rules Allow | AFH Club",
  DESCRIPTION:
    "Can you hire a company to manage your Washington adult family home? What a manager can and cannot do, what stays with you as the licensed owner, the DSHS 27-226 filing and 60-day notices, and whether one person can manage more than one home.",
  SHORT_ANSWER:
    "Yes. Washington allows an adult family home to hire a management company under a written agreement. The licensed owner stays responsible for the home and its residents, must meet with the manager every month and visit the home at least every quarter, and must file the agreement with DSHS 60 days before it starts. A company can manage many homes, but each home still needs its own on-site person in charge.",
  PUBLISHED: "2026-10-10",
  REVIEWED: "2026-10-10",
  /** Cover art supplied by the owner Oct 10, 2026. 1086x1448. Its tablet diagram shows the
   *  management company above "Owner Responsibilities" (the rules make the owner the
   *  principal); flagged to the owner, who may regenerate it. */
  COVER: "/afh-management-company-cover.webp" as string | null,
} as const;

/** Every rule the page cites, in the order it cites them. */
export const AFH_MGMT_SOURCES: { cite: string; title: string; href: string }[] = [
  { cite: "WAC 388-76-11050", title: "Management agreements — general", href: WAC("388-76-11050") },
  { cite: "WAC 388-76-11055", title: "Management agreements — adult family home", href: WAC("388-76-11055") },
  { cite: "WAC 388-76-11060", title: "Terms of the management agreement", href: WAC("388-76-11060") },
  { cite: "WAC 388-76-11065", title: "Management agreements — department review", href: WAC("388-76-11065") },
  { cite: "WAC 388-76-11070", title: "Management agreements — resident funds", href: WAC("388-76-11070") },
  { cite: "WAC 388-76-10036", title: "Multiple adult family home management", href: WAC("388-76-10036") },
  { cite: "WAC 388-76-10040", title: "Qualified person must live in or be on-site", href: WAC("388-76-10040") },
  { cite: "WAC 388-76-10130", title: "Qualifications — provider, entity representative, and resident manager", href: WAC("388-76-10130") },
  { cite: "WAC 388-76-10037", title: "Multiple adult family homes — additional homes", href: WAC("388-76-10037") },
  { cite: "Form DSHS 27-226", title: "Management Agreement: Attestation Information and Attachments", href: "https://www.dshs.wa.gov/media/24326/download?inline" },
];

/** The two jobs people both call "manager". */
export const TWO_MANAGERS: { label: string; who: string; howMany: string; rule: string }[] = [
  {
    label: "Resident manager",
    who: "The qualified person who lives in the home (or is in charge on site) and is responsible for residents' care at all times, when the owner does not live there.",
    howMany: "One home at a time.",
    rule: "WAC 388-76-10040, 10036",
  },
  {
    label: "Management company",
    who: "A company or person the owner hires under a written management agreement to handle contracted work: staffing, scheduling, billing, records, compliance support.",
    howMany: "As many homes as it has agreements for. Each home still needs its own on-site person in charge.",
    rule: "WAC 388-76-11050",
  },
];

export const MANAGER_CAN: string[] = [
  "Recruit and schedule staff and run payroll, as the owner's agent",
  "Bill residents and payers, and keep records the rules require",
  "Prepare for DSHS inspections and track training and certifications",
  "Sign resident agreements on the home's behalf, if the agreement authorizes it; the agreement itself is always between the home and the resident",
  "Handle residents' personal funds, but only with a bond or insurance covering those funds and a monthly accounting to the home",
];

export const OWNER_KEEPS: string[] = [
  "Ultimate responsibility for daily operations and for residents' care, services and safety",
  "Ultimate responsibility for personnel, staffing plans, and staff training",
  "Monthly oversight meetings with the manager, and on-site visits at least every quarter",
  "Appointing the entity representative (for a home owned by a company), through its own board or owners",
  "Reviewing and signing license applications, including a change of ownership",
  "Making sure the manager follows the agreement and never presents itself as the provider",
];

export const AFH_MGMT_QUESTIONS: string[] = [
  "Do you file the management agreement and form 27-226 with DSHS for each home, 60 days before you start?",
  "Who will be the on-site person in charge of my home, and who employs them?",
  "How do you handle residents' money, and what bond or insurance covers it?",
  "What do you report to me each month, and how do you prepare for our monthly meeting?",
  "How many homes do you manage now, and may I speak with two of those owners?",
  "How are you paid, and what happens to staff and records if either of us ends the agreement?",
];

export const AFH_MGMT_FAQS = [
  {
    question: "Can one AFH manager manage more than one adult family home in Washington?",
    answer:
      "It depends on the role. A resident manager, the qualified person in charge on site, can be designated for only one home at a time. A management company, or a person acting as one under a written management agreement, can manage several homes for one or more owners, as long as each home has its own on-site person in charge and its own agreement filed with DSHS (WAC 388-76-10036, 10040, 11050).",
  },
  {
    question: "Can a resident manager work at two adult family homes?",
    answer:
      "Not as the resident manager of both. Each home has its own person in charge of care, designated for only one home at a time, and that person lives in the home unless it has staff 24 hours a day with a decision-maker always present (WAC 388-76-10036, 10040). Someone who wants to oversee several homes does it as a manager under a written management agreement with each home.",
  },
  {
    question: "Is it legal to run an adult family home management company in Washington?",
    answer:
      "Yes. Washington's adult family home rules provide for management agreements between a licensed home and a manager (WAC 388-76-11050 to 11070). Each home the company manages must file its agreement with DSHS on form 27-226, 60 days ahead; the licensed owner keeps responsibility for the home; and the company must not present itself as the provider.",
  },
  {
    question: "Can I hire a company to manage my adult family home?",
    answer:
      "Yes. Washington allows a licensed adult family home to hire a manager under a written management agreement filed with DSHS. You stay the licensed provider: you keep responsibility for the home and its residents, meet with the manager monthly, and visit the home at least quarterly (WAC 388-76-11050 to 11060).",
  },
  {
    question: "Can I own an adult family home without personally managing it?",
    answer:
      "Partly. You can hire a resident manager to live in and run care day to day, and a management company to handle staffing, billing and compliance work. But you cannot hand off the responsibility: as the licensed owner you oversee the home, hold monthly meetings with the manager, and visit at least quarterly. If the manager takes over so much that you no longer run the home, DSHS treats it as a change of ownership (WAC 388-76-11055).",
  },
  {
    question: "Where can I find an AFH management company?",
    answer:
      "AFH Club's Find a Professional page lists an adult family home management company the site owner has met in person, under Operate. Before hiring any manager, ask whether they file the management agreement and form DSHS 27-226 with DSHS for each home, and who will be the on-site person in charge.",
  },
  {
    question: "What can an adult family home management company do?",
    answer:
      "Whatever the written agreement assigns, acting as the owner's agent: staffing and scheduling, payroll, billing, record-keeping, inspection preparation, and signing resident agreements in the home's name. It may handle residents' money only with a bond or insurance covering those funds and a monthly accounting to the home (WAC 388-76-11060, 11070).",
  },
  {
    question: "Who hires the resident manager when a management company is involved?",
    answer:
      "The rules keep ultimate responsibility for all personnel issues with the licensed home (WAC 388-76-11060), so the owner must stay in charge of who is placed there. Whether the management company itself may be the resident manager's employer is not spelled out in the rules; ask DSHS before setting it up that way.",
  },
  {
    question: "Does DSHS have to approve an adult family home management agreement?",
    answer:
      "DSHS reviews it. The home files the written agreement, an organizational chart, the notice to residents, and a signed attestation on form DSHS 27-226. DSHS can ask for more information or require changes, and the home and manager must follow the agreement as approved (WAC 388-76-11050, 11055, 11065). Licensed homes email the form to RCSBOA@dshs.wa.gov.",
  },
  {
    question: "How far ahead do I have to tell DSHS and residents about a management company?",
    answer:
      "Sixty days. File the agreement with DSHS 60 days before it takes effect, and give current residents and their representatives written notice 60 days ahead. Changes to an existing agreement are filed 30 days before they take effect. A new applicant includes the agreement with the license application (WAC 388-76-11050).",
  },
  {
    question: "What happens if a management company takes over too much?",
    answer:
      "If the owner gives the manager responsibilities so broad that the owner is relieved of daily operations and care, DSHS treats it as a change of ownership and may take licensing action. A management agreement is allowed only as a principal and agent relationship (WAC 388-76-11055).",
  },
  {
    question: "Does an AFH management company need its own license?",
    answer:
      "The adult family home rules (chapter 388-76 WAC) set no separate license for a management company. The licensed home carries the responsibility. Anyone the company places in the home as resident manager must meet the resident-manager qualifications, including 1,000 hours of direct care within the past 60 months (WAC 388-76-10130).",
  },
  {
    question: "Does Real Property Planning get paid by management companies?",
    answer:
      "No. Professionals on AFH Club are listed as a courtesy, no one pays to be listed, and Real Property Planning receives nothing if you hire them.",
  },
];

/** Plain-text sections for the build-time prerender that crawlers and AI engines read. */
export function afhMgmtPrerenderSections(): string[] {
  return [
    `Two kinds of "manager" — ${TWO_MANAGERS.map((m) => `${m.label}: ${m.who} How many homes: ${m.howMany} (${m.rule})`).join(" ")}`,
    `What a management company can do, as the owner's agent — ${MANAGER_CAN.join("; ")} (WAC 388-76-11060, 11070).`,
    `What stays with you, the licensed owner — ${OWNER_KEEPS.join("; ")} (WAC 388-76-11055, 11060).`,
    "Filing with DSHS — the home files the written agreement, an organizational chart showing the home, the manager and related entities, the notice to residents, and a signed attestation on form DSHS 27-226. New applicants include it with the license application; licensed homes email it to RCSBOA@dshs.wa.gov 60 days before the agreement takes effect. Amendments: 30 days. Residents and their representatives get written notice 60 days ahead. DSHS may require changes (WAC 388-76-11050, 11065).",
    "The line you cannot cross — if the manager is given responsibilities so broad that the owner is relieved of daily operations and care, DSHS treats it as a change of ownership and may take licensing action. The manager may not present itself as the provider (WAC 388-76-11055, 11060).",
    "Not settled by the rules — whether a management company may itself employ a home's resident manager, and whether one resident manager may serve homes of two different owners under the 24-hour-staffing exception. Ask DSHS before relying on either.",
    "Owning more than one home is a different question — a second license needs 24 months on the first with no enforcement actions for significant violations; later licenses need 12 months since the last (WAC 388-76-10037).",
    `Questions to ask a management company — ${AFH_MGMT_QUESTIONS.join(" ")}`,
    "Find a management company — AFH Club Featured Professionals (/afh-club/find-a-professional), Operate row. Related — Running a Licensed Adult Family Home (/afh-club/washington-adult-family-home-guide/running), Buying as an Individual or Through an LLC (/afh-club/ownership-structure), the AFH Glossary entry for resident manager (/afh-club/glossary#resident-manager).",
    `Sources — ${AFH_MGMT_SOURCES.map((s) => `${s.cite} (${s.title})`).join("; ")}.`,
  ];
}
