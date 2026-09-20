/**
 * AFH PROPERTY SCORE — configuration and scoring engine (Sept 2026).
 *
 * WHAT THE SCORE MEANS. One thing only: the physical suitability of the real
 * estate for use as a Washington adult family home, weighted by COST TO CURE.
 * A shortfall that is cheap to fix costs few points; one that is expensive
 * costs many; one that may not be fixable at all is a Feasibility flag, not
 * points. Licensing, occupancy, income and staffing are NEVER scored: two
 * identical houses must score the same whether one has vacancies or not.
 * Those belong to the unscored Acquisition Review.
 *
 * THIS FILE HAS NO REACT AND NO BROWSER APIS. Everything the tool asks, every
 * point value, flag rule, band and checklist line lives here, so the
 * methodology can be retuned without touching the interface, and so the
 * scoring can be unit-tested (src/test/afhPropertyScore.test.ts).
 *
 * DETERMINISTIC. Same answers, same result. No AI decides any number.
 *
 * EVERY QUESTION IS A FACT a buyer can get from a listing and its photos, in
 * one tap. No opinions ("appears spacious") and no tape measure during the
 * quiz. The measurable requirements are delivered afterwards as the showing
 * checklist.
 *
 * WEIGHTS ARE PROVISIONAL. They follow cost-to-cure ranges supplied Sept 20,
 * 2026 (an AI estimate David relayed, not field data). Replace them with real
 * conversion costs when available: change the `points` arrays below; the
 * tests will confirm the total is still 100.
 *
 * SOURCES, read Sept 20, 2026:
 *   WAC 51-51-0330 (IRC R330, Adult family homes; eff. 3/16/2024): sleeping
 *     room types S / NS1 / NS2; ramps max 1:12 with handrails both sides;
 *     showers min 30 x 48 in; escape windows per R310 with NO step or platform
 *     accepted as a sill-height workaround; fire apparatus access and water
 *     supply per the local jurisdiction; grab bars; one-hand door hardware.
 *   WAC 388-76-10690: bedrooms 80 sq ft usable single, 120 double, excluding
 *     toilet rooms, closets, lockers, wardrobes and vestibules.
 *   WAC 388-76-10795: window sill max 44 in; opening min 5.7 sq ft (5.0 at
 *     grade), 24 in high, 20 in wide.
 *   WAC 388-76-10865: all residents out in 5 minutes; path not through other
 *     bedrooms; residents who need assistance must have a path with NO STAIRS;
 *     elevators, chairlifts and platform lifts do not count.
 *   WAC 388-76-10870: evacuation capability is Independent or Assistance
 *     required.
 *   WAC 388-76-10780 (as amended eff. 3/4/2025): one accessible indoor flush
 *     toilet per five persons, counting residents AND household members who
 *     live in the home, reachable without going through another person's
 *     room. Ensuite toilets can count. The rule counts toilets, not bathrooms.
 *   RCW 64.38.060: HOA governing documents may not limit the operation of a
 *     licensed AFH; retroactive; conflicting provisions are unenforceable.
 *     Reasonable nondiscriminatory rules (signs, landscaping) still apply.
 *     A companion provision in chapter 70.128 RCW covers restrictive covenants.
 *     (Chapter 64.38 is scheduled for repeal on Jan 1, 2028, when chapter
 *     64.90 takes over; re-check the citation then.)
 *   IRC R311.2: required exit door side-hinged, 32 in clear width, 78 in high.
 *   IRC R311.8.2: ramp landings min 3 x 3 ft at top, bottom, doors and turns.
 *   PROPOSED, NOT ADOPTED (DSHS rulemaking opened June 2026): 36 in of clear
 *     space outside one bedroom escape window in newly licensed homes.
 *   RCW 70.128.140(2): an AFH is a residential use and a permitted use in all
 *     areas zoned residential or commercial. Zoning is a reassurance here,
 *     not a worry.
 *   DSHS "Adult Family Home Characteristics" information sheet: a home with
 *     stairs may suit independent residents only; if residents need
 *     assistance, a bathroom, common area, dining area and kitchenette must be
 *     on the same level as the bedroom.
 *
 * NOT YET VERIFIED: the bedroom doorway width DSHS licensors expect. It
 * appears on the checklist as "measure and ask", with no number stated.
 *
 * REVISED Sept 20, 2026 after an outside code review: "major systems" left the
 * score (an unknown was earning full points); bathrooms now count toilets and
 * bathing rooms; "can every bedroom reach a bathroom" moved to the checklist
 * (not visible in a listing); one exterior door is no longer treated as a
 * defect; the HOA text was corrected; two flags were added (living split
 * across levels, no main-level toilet).
 *
 * GUARDRAILS. Never say approved, compliant, licensable, fails, or bad
 * property. Never score or comment on a neighborhood (fair housing: AFH
 * residents are a protected class). Never publish a score on a listing page;
 * a score exists only from a user's own answers in their own session.
 */

export const NOT_SURE = "unsure" as const;

export type CureClass = "A" | "B" | "C";
/** A = under about $5k, B = about $5k-$25k, C = over $25k. */
export const CURE_BURDEN_POINTS: Record<CureClass, number> = { A: 1, B: 3, C: 6 };

export type CategoryId = "bedrooms" | "stepFree" | "bathrooms" | "exits" | "site";

export const CATEGORIES: { id: CategoryId; label: string; max: number }[] = [
  { id: "bedrooms", label: "Bedrooms and layout", max: 30 },
  { id: "stepFree", label: "Step-free living", max: 27 },
  { id: "bathrooms", label: "Toilets and bathing", max: 18 },
  { id: "exits", label: "Getting out safely", max: 15 },
  { id: "site", label: "The site", max: 10 },
];

export interface ScoreOption {
  id: string;
  label: string;
  /** Points for a scored question. Omitted on unscored questions. */
  points?: number;
  /** A project this answer implies, with its cost class. Feeds Conversion Burden. */
  cure?: { cls: CureClass; project: string };
  /** Shown under "Strengths" when chosen. */
  strength?: string;
}

export type Section = "framing" | "feasibility" | "score" | "acquisition";

export interface ScoreQuestion {
  id: string;
  section: Section;
  category?: CategoryId;
  prompt: string;
  /** One or two plain sentences. Optional reading; never required to answer. */
  why: string;
  options: ScoreOption[];
  /** "Not sure" is offered on everything except the two framing questions. */
  allowNotSure: boolean;
  /** Acquisition questions appear only for a home that is licensed now. */
  licensedOnly?: boolean;
}

export type Answers = Record<string, string>;

/* ------------------------------------------------------------------ */
/* QUESTIONS                                                           */
/* ------------------------------------------------------------------ */

export const QUESTIONS: ScoreQuestion[] = [
  /* ---------- framing (unscored) ---------- */
  {
    id: "licensed",
    section: "framing",
    prompt: "Is this home licensed as an adult family home right now?",
    why: "A home that is already licensed has passed a building inspection, so the questions that matter shift toward what you are actually buying. The license itself never comes with the house.",
    allowNotSure: true,
    options: [
      { id: "operating", label: "Yes, and residents live there" },
      { id: "empty", label: "Yes, but it is empty" },
      { id: "former", label: "It used to be" },
      { id: "no", label: "No" },
    ],
  },
  {
    id: "residents",
    section: "framing",
    prompt: "Who do you plan to care for?",
    why: "This is the first thing DSHS asks a prospective provider. Residents who need help getting out of the home must have an exit path with no stairs. It does not change your score, but it changes how serious stairs are.",
    allowNotSure: false,
    options: [
      { id: "independent", label: "Residents who can walk and get out on their own" },
      { id: "assist", label: "Residents who need help walking or getting out" },
      { id: "both", label: "Both, or I am not sure yet" },
    ],
  },

  /* ---------- feasibility check (unscored) ---------- */
  {
    id: "sewer",
    section: "feasibility",
    prompt: "Is the home on public sewer or a septic system?",
    why: "A septic system is permitted for a certain number of bedrooms. Six residents plus staff can exceed what it was designed for.",
    allowNotSure: true,
    options: [
      { id: "sewer", label: "Public sewer" },
      { id: "septic", label: "Septic system" },
    ],
  },
  {
    id: "hoa",
    section: "feasibility",
    prompt: "Is the home in a homeowners association (HOA)?",
    why: "Washington law makes HOA rules that restrict adult family homes unenforceable. An HOA can still apply ordinary rules that cover every home, like sign and landscaping standards, so it is worth knowing them.",
    allowNotSure: true,
    options: [
      { id: "no", label: "No" },
      { id: "yes", label: "Yes" },
    ],
  },
  {
    id: "levels",
    section: "feasibility",
    prompt: "Would any resident bedroom be in a basement or on an upper floor?",
    why: "A bedroom reached by stairs can only be used by residents who can get out on their own. Basement bedrooms must also meet the escape-window rule.",
    allowNotSure: true,
    options: [
      { id: "no", label: "No, all on the main level" },
      { id: "yes", label: "Yes, at least one" },
    ],
  },
  {
    id: "permits",
    section: "feasibility",
    prompt: "Does the home have an addition, a converted garage, or a finished basement?",
    why: "You cannot tell from a listing whether that work was permitted. If you are counting on the space for a bedroom or bathroom, check county records before you rely on it.",
    allowNotSure: true,
    options: [
      { id: "no", label: "No" },
      { id: "yes", label: "Yes" },
    ],
  },
  {
    id: "access",
    section: "feasibility",
    prompt: "Is the home on a private road, a long shared driveway, or well water?",
    why: "The building code requires fire truck access and a water supply that satisfy the local fire authority. Rural sites sometimes need extra verification.",
    allowNotSure: true,
    options: [
      { id: "no", label: "No" },
      { id: "yes", label: "Yes, one or more of those" },
    ],
  },
  {
    // UNSCORED on purpose. It used to be worth 5 points, and "none that I know
    // of" earned all 5: a score rising because the buyer lacked information.
    // Nobody can see a foundation or a repipe in listing photos.
    id: "systems",
    section: "feasibility",
    prompt: "Does the listing or seller disclosure mention a major problem with the roof, foundation, electrical, or plumbing?",
    why: "These cannot be judged from photos, and their cost ranges from a few thousand dollars to far more. Paint, flooring, and counters are a price question and are not part of this tool.",
    allowNotSure: true,
    options: [
      { id: "no", label: "No" },
      { id: "yes", label: "Yes" },
    ],
  },

  /* ---------- the score: bedrooms and layout, 28 ---------- */
  {
    id: "mainBedrooms",
    section: "score",
    category: "bedrooms",
    prompt: "How many bedrooms are on the main level? Count only rooms that look at least about 9 by 9 feet.",
    why: "A resident bedroom needs 80 square feet of usable floor. If there are no other rooms to convert, the only cure for too few main-level bedrooms is an addition, the most expensive fix there is.",
    allowNotSure: true,
    options: [
      { id: "0", label: "None", points: 0 },
      { id: "1-2", label: "1 or 2", points: 6 },
      { id: "3", label: "3", points: 13 },
      { id: "4", label: "4", points: 18 },
      { id: "5", label: "5", points: 22, strength: "Five main-level bedrooms" },
      { id: "6+", label: "6 or more", points: 25, strength: "Six or more main-level bedrooms" },
    ],
  },
  {
    id: "convertible",
    section: "score",
    category: "bedrooms",
    prompt: "Are there other main-level rooms with a window and a door that could serve as a bedroom?",
    why: "A den or office can become a resident bedroom only if it has the floor area and an escape window. Adding a closet is the easy part.",
    allowNotSure: true,
    options: [
      { id: "0", label: "None", points: 0 },
      { id: "1", label: "One", points: 3 },
      { id: "2+", label: "Two or more", points: 5, strength: "Extra main-level rooms that could become bedrooms" },
    ],
  },

  /* ---------- step-free living, 25 ---------- */
  {
    id: "entrySteps",
    section: "score",
    category: "stepFree",
    prompt: "How many steps are there from the driveway to the main entry?",
    why: "A ramp can be no steeper than 1 inch of rise per foot of length. At a typical 7 inches per step, two steps need about 14 feet of ramp and five need about 35 feet, plus landings, which may not fit the lot.",
    allowNotSure: true,
    options: [
      { id: "0", label: "None", points: 10, strength: "A step-free main entry" },
      { id: "1-2", label: "1 or 2", points: 8, cure: { cls: "A", project: "Ramp a low entry" } },
      { id: "3-4", label: "3 or 4", points: 4, cure: { cls: "B", project: "Ramp a 3 to 4 step entry" } },
      // Class B, not C: the real risk with a tall entry is that a ramp will not FIT,
      // which the red feasibility flag carries. Its cost is often moderate.
      { id: "5+", label: "5 or more, or a steep approach", points: 0, cure: { cls: "B", project: "Ramp a tall entry, if the site allows it" } },
    ],
  },
  {
    id: "oneLevel",
    section: "score",
    category: "stepFree",
    prompt: "Could residents live entirely on one level: bedroom, bathroom, kitchen, and living area?",
    why: "If residents need assistance, DSHS expects a bathroom, common area, dining area, and kitchenette on the same level as their bedroom. This cannot be fixed by remodeling.",
    allowNotSure: true,
    options: [
      { id: "yes", label: "Yes", points: 12, strength: "True one-level living" },
      { id: "mostly", label: "Mostly", points: 6 },
      { id: "no", label: "No", points: 0 },
    ],
  },
  {
    id: "interiorSteps",
    section: "score",
    category: "stepFree",
    prompt: "Are there steps inside between main-level rooms, like a sunken living room?",
    why: "Every interior level change is a fall risk and a barrier to a walker or wheelchair. A single step can sometimes be ramped; leveling a floor is a bigger project.",
    allowNotSure: true,
    options: [
      { id: "none", label: "None", points: 5 },
      { id: "one", label: "One spot", points: 3, cure: { cls: "A", project: "Ramp or level one interior step" } },
      { id: "several", label: "Several", points: 0, cure: { cls: "B", project: "Ramp or level several interior floor changes" } },
    ],
  },

  /* ---------- toilets and bathing, 18 ----------
     WAC 388-76-10780 (as amended eff. 3/4/2025) counts TOILETS: one accessible
     indoor flush toilet per five persons, counting residents AND household
     members who live in the home, each reachable without going through another
     person's room. Ensuite toilets can count. A full bath plus a half bath is
     therefore materially better than one full bath, which an earlier version
     of this question ("how many full bathrooms?") failed to recognize.
     Whether every bedroom can REACH a bathroom cannot be seen in a listing, so
     that lives on the showing checklist, not here. */
  {
    id: "toilets",
    section: "score",
    category: "bathrooms",
    prompt: "How many toilets are on the main level? Count full and half bathrooms.",
    why: "DSHS requires one toilet for every five people living in the home, counting residents and any household members. Six residents plus a live-in provider means at least two.",
    allowNotSure: true,
    options: [
      { id: "0", label: "None", points: 0, cure: { cls: "C", project: "Add main-level bathrooms" } },
      { id: "1", label: "1", points: 4, cure: { cls: "B", project: "Add a second main-level toilet" } },
      { id: "2", label: "2", points: 8 },
      { id: "3+", label: "3 or more", points: 10, strength: "Three or more main-level toilets" },
    ],
  },
  {
    id: "bathing",
    section: "score",
    category: "bathrooms",
    prompt: "How many main-level bathrooms have a tub or a shower?",
    why: "Residents need somewhere to bathe on the level where they live. Two bathing rooms keep a six-resident home running in the morning.",
    allowNotSure: true,
    options: [
      { id: "0", label: "None", points: 0, cure: { cls: "B", project: "Add a main-level tub or shower" } },
      { id: "1", label: "1", points: 3 },
      { id: "2+", label: "2 or more", points: 5, strength: "Two or more main-level bathing rooms" },
    ],
  },
  {
    id: "shower",
    section: "score",
    category: "bathrooms",
    prompt: "Is there a walk-in shower on the main level?",
    why: "A shower used for resident bathing must be at least 30 by 48 inches, with grab bars that can carry 250 pounds.",
    allowNotSure: true,
    options: [
      { id: "has", label: "Yes", points: 3, strength: "A walk-in shower already in place" },
      { id: "room", label: "No, but a tub could be converted", points: 2, cure: { cls: "A", project: "Convert a tub to a walk-in shower" } },
      { id: "tight", label: "No, and the bathrooms are small", points: 0, cure: { cls: "B", project: "Enlarge a bathroom for a walk-in shower" } },
    ],
  },

  /* ---------- getting out safely, 15 ---------- */
  {
    id: "exitDoors",
    section: "score",
    category: "exits",
    prompt: "How many doors lead outside from the main level?",
    why: "Everyone must be able to get out within five minutes. A bedroom with two step-free ways out is the most flexible kind.",
    allowNotSure: true,
    options: [
      // No cure tag: the building code contemplates a bedroom with ONE exit at
      // grade (type NS1). More doors add flexibility; one is not a defect.
      { id: "1", label: "1", points: 4 },
      { id: "2", label: "2", points: 7 },
      { id: "3+", label: "3 or more", points: 8, strength: "Three or more exits from the main level" },
    ],
  },
  {
    id: "windows",
    section: "score",
    category: "exits",
    prompt: "Does every main-level bedroom have a window to the outside?",
    why: "Each resident bedroom needs an escape window. Photos can show whether a window exists; you will check that it opens, and measure it, at the showing.",
    allowNotSure: true,
    options: [
      { id: "all", label: "Yes, all of them", points: 4 },
      { id: "some", label: "Some of them", points: 2, cure: { cls: "A", project: "Add or enlarge a bedroom window" } },
      { id: "none", label: "No", points: 0, cure: { cls: "B", project: "Add escape windows to the bedrooms" } },
    ],
  },
  {
    id: "exitGrade",
    section: "score",
    category: "exits",
    prompt: "What do the exit doors open onto?",
    why: "A door is only useful in an emergency if the ground outside it can be reached without stairs.",
    allowNotSure: true,
    options: [
      { id: "ground", label: "Level ground or a patio", points: 3, strength: "Exits that open at ground level" },
      { id: "low", label: "A low deck or a step or two", points: 2, cure: { cls: "A", project: "Short ramp at an exit" } },
      { id: "high", label: "A raised deck or a flight of stairs", points: 0, cure: { cls: "B", project: "Ramp or regrade at a raised exit" } },
    ],
  },

  /* ---------- the site, 10 ---------- */
  {
    id: "parking",
    section: "score",
    category: "site",
    prompt: "How many off-street parking spaces are there, counting the driveway?",
    why: "Staff, visiting nurses, families, and deliveries all need somewhere to park.",
    allowNotSure: true,
    options: [
      { id: "0-1", label: "0 or 1", points: 0, cure: { cls: "B", project: "Add off-street parking, if the lot allows it" } },
      { id: "2-3", label: "2 or 3", points: 3 },
      { id: "4+", label: "4 or more", points: 5, strength: "Generous off-street parking" },
    ],
  },
  {
    id: "lot",
    section: "score",
    category: "site",
    prompt: "How would you describe the lot?",
    why: "A level lot makes ramps, walkways, and outdoor space for residents straightforward. A steep one makes all three harder.",
    allowNotSure: true,
    options: [
      { id: "level", label: "Mostly level", points: 5, strength: "A level lot" },
      { id: "some", label: "Some slope", points: 3 },
      { id: "steep", label: "Steep", points: 0 },
    ],
  },

  /* ---------- acquisition review (unscored, licensed homes only) ---------- */
  {
    id: "aqHistory",
    section: "acquisition",
    licensedOnly: true,
    prompt: "Have you looked up the home's DSHS inspection history?",
    why: "Licensed homes have a public record of inspections and enforcement. Looking it up is free and takes a few minutes.",
    allowNotSure: false,
    options: [
      { id: "clean", label: "Yes, and it looks clean" },
      { id: "minor", label: "Yes, some citations" },
      { id: "serious", label: "Yes, serious enforcement" },
      { id: "notyet", label: "Not yet" },
    ],
  },
  {
    id: "aqYears",
    section: "acquisition",
    licensedOnly: true,
    prompt: "How long has it been licensed at this address?",
    why: "A long record at one address tells you more than a short one.",
    allowNotSure: true,
    options: [
      { id: "5+", label: "5 years or more" },
      { id: "2-4", label: "2 to 4 years" },
      { id: "<2", label: "Under 2 years" },
    ],
  },
  {
    id: "aqCapacity",
    section: "acquisition",
    licensedOnly: true,
    prompt: "How many residents is it licensed for?",
    why: "Licensed capacity sets the ceiling on income. Homes licensed for seven or eight have extra requirements a new owner must meet.",
    allowNotSure: true,
    options: [
      { id: "7-8", label: "7 or 8" },
      { id: "6", label: "6" },
      { id: "5", label: "5" },
      { id: "<5", label: "4 or fewer" },
    ],
  },
  {
    id: "aqFilled",
    section: "acquisition",
    licensedOnly: true,
    prompt: "How many of the beds are filled today?",
    why: "A lender looks at last year's actual income, not what the home could earn when full.",
    allowNotSure: true,
    options: [
      { id: "all", label: "All of them" },
      { id: "most", label: "Most" },
      { id: "half", label: "About half or fewer" },
      { id: "none", label: "None" },
    ],
  },
  {
    id: "aqPayer",
    section: "acquisition",
    licensedOnly: true,
    prompt: "Who pays for most of the residents?",
    why: "Private-pay rates are set by the home. Medicaid rates are set by the state and depend on each resident's assessed care level.",
    allowNotSure: true,
    options: [
      { id: "private", label: "Mostly private pay" },
      { id: "mixed", label: "A mix" },
      { id: "medicaid", label: "Mostly Medicaid" },
    ],
  },
  {
    id: "aqPrograms",
    section: "acquisition",
    licensedOnly: true,
    prompt: "Does the income rely on ECS or SBS contracts, or on CBHS tiers?",
    why: "ECS and SBS contracts belong to the current owner and do not transfer. A CBHS tier belongs to the resident, but any provider must be enrolled and contracted to bill for it, and how that works at a sale has not been published.",
    allowNotSure: true,
    options: [
      { id: "none", label: "No, or very little" },
      { id: "some", label: "Some of it" },
      { id: "lots", label: "A lot of it" },
    ],
  },
  {
    id: "aqFinancials",
    section: "acquisition",
    licensedOnly: true,
    prompt: "Have you seen at least 12 months of financial statements?",
    why: "Income claims should reconcile: residents, to rates, to actual deposits.",
    allowNotSure: false,
    options: [
      { id: "yes", label: "Yes" },
      { id: "partial", label: "Partly" },
      { id: "no", label: "Not yet" },
    ],
  },
  {
    id: "aqTransition",
    section: "acquisition",
    licensedOnly: true,
    prompt: "Will the seller and the staff stay on through a transition?",
    why: "Residents, families, and referral sources follow the people they know. A handover period protects occupancy.",
    allowNotSure: true,
    options: [
      { id: "yes", label: "Yes" },
      { id: "partly", label: "Some of them" },
      { id: "no", label: "No" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* HELPERS                                                             */
/* ------------------------------------------------------------------ */

export const isLicensedNow = (a: Answers) => a.licensed === "operating" || a.licensed === "empty";

/** The questions this user will actually see, in order. */
export function activeQuestions(a: Answers): ScoreQuestion[] {
  return QUESTIONS.filter((q) => !q.licensedOnly || isLicensedNow(a));
}

const SCORED = QUESTIONS.filter((q) => q.section === "score");
export const SCORED_COUNT = SCORED.length;
/** More unknowns than this and the tool withholds a score. */
export const MAX_UNKNOWN_FOR_SCORE = 4;

const maxPoints = (q: ScoreQuestion) => Math.max(...q.options.map((o) => o.points ?? 0));

/* ------------------------------------------------------------------ */
/* BANDS                                                               */
/* ------------------------------------------------------------------ */

export interface Band {
  min: number;
  label: string;
  blurb: string;
}

export const BANDS: Band[] = [
  { min: 85, label: "Very strong physical candidate for further evaluation", blurb: "The property shows many of the characteristics that make an adult family home work. Building, licensing, and financial due diligence are still required." },
  { min: 70, label: "Strong physical candidate for further evaluation", blurb: "The property has many favorable characteristics. Expect some modifications, and look closely at the items below." },
  { min: 55, label: "Moderate candidate for further evaluation", blurb: "The property may be workable, but several characteristics deserve a closer look, and conversion costs could become important." },
  { min: 40, label: "Challenging candidate", blurb: "Several characteristics may make conversion more difficult or expensive. Get professional estimates before going further." },
  { min: 0, label: "Significant challenges identified", blurb: "Based on these answers, the property has substantial layout, access, exit, or site challenges for this use." },
];

export const bandFor = (score: number): Band => BANDS.find((b) => score >= b.min) ?? BANDS[BANDS.length - 1];

/* ------------------------------------------------------------------ */
/* FLAGS                                                               */
/* ------------------------------------------------------------------ */

export type FlagLevel = "green" | "yellow" | "red";
export const FLAG_LABEL: Record<FlagLevel, string> = {
  green: "No immediate concern identified",
  yellow: "Needs verification",
  red: "Potential significant issue",
};

export interface Flag {
  id: string;
  level: FlagLevel;
  title: string;
  detail: string;
}

function feasibilityFlags(a: Answers): Flag[] {
  const f: Flag[] = [];

  // Sewer
  if (a.sewer === "sewer") f.push({ id: "sewer", level: "green", title: "Public sewer", detail: "No septic capacity question to resolve." });
  else f.push({ id: "sewer", level: "yellow", title: a.sewer === "septic" ? "Septic system" : "Sewer or septic not confirmed", detail: "A septic system is permitted for a set number of bedrooms. Get the as-built drawing and the permitted bedroom count from county environmental health, and confirm it supports the number of residents and staff you plan." });

  // HOA
  if (a.hoa === "no") f.push({ id: "hoa", level: "green", title: "No HOA", detail: "No private covenants to review." });
  else f.push({ id: "hoa", level: "yellow", title: a.hoa === "yes" ? "Homeowners association" : "HOA status not confirmed", detail: "Washington law says HOA governing documents may not limit the operation of a licensed adult family home, applies that rule retroactively, and makes a conflicting provision unenforceable (RCW 64.38.060). An HOA may still apply reasonable rules that cover every home, such as sign and landscaping standards. Read the documents so you know those rules, and keep the statute handy in case a board objects." });

  // Levels, severity depends on who will live there
  if (a.levels === "no") f.push({ id: "levels", level: "green", title: "All resident bedrooms on the main level", detail: "No resident would need stairs to reach their room." });
  else if (a.levels === "yes") {
    if (a.residents === "assist") f.push({ id: "levels", level: "red", title: "Bedrooms on another level, and residents who need help", detail: "Residents who need assistance must have an exit path with no stairs, and an elevator, chairlift, or platform lift does not count. A basement or upstairs bedroom cannot be used for these residents. Plan your capacity around the main-level bedrooms only." });
    else f.push({ id: "levels", level: "yellow", title: "Bedrooms on another level", detail: "A bedroom reached by stairs can be used only by residents who can get out on their own, and it stops working for a resident whose mobility declines. A basement bedroom must also meet the escape-window rule." });
  } else f.push({ id: "levels", level: "yellow", title: "Bedroom levels not confirmed", detail: "Confirm which level each planned resident bedroom is on. Stairs limit who can live in a room." });

  // Permits
  if (a.permits === "no") f.push({ id: "permits", level: "green", title: "No additions or conversions", detail: "Still worth a quick check of county permit records." });
  else f.push({ id: "permits", level: "yellow", title: a.permits === "yes" ? "Added or converted space" : "Additions not confirmed", detail: "A listing cannot tell you whether an addition, garage conversion, or finished basement was permitted. Compare the house to county permit records, and do not count that space as a bedroom or bathroom until its legal status is confirmed." });

  // Access and water
  if (a.access === "no") f.push({ id: "access", level: "green", title: "Public road and public water", detail: "Fire access and water supply are unlikely to need special review." });
  else f.push({ id: "access", level: "yellow", title: a.access === "yes" ? "Private road, long driveway, or well" : "Road and water not confirmed", detail: "The building code requires fire truck access and a water supply acceptable to the local fire authority. Ask the fire marshal's office early, because this can be a site problem that money does not easily fix." });

  // Major systems: unscored, because nobody can judge them from a listing
  if (a.systems === "no") f.push({ id: "systems", level: "green", title: "No major system problem disclosed", detail: "A professional home inspection is still essential." });
  else f.push({ id: "systems", level: "yellow", title: a.systems === "yes" ? "A major system problem is disclosed" : "Condition of major systems unknown", detail: "Roof, foundation, electrical, and plumbing repairs range from a few thousand dollars to far more, and none can be judged from photos. Get a specialist's written estimate before you rely on a price." });

  // Conditional flags raised by scored answers
  if (a.oneLevel === "no" && a.residents !== "independent") f.push({
    id: "oneLevel",
    level: a.residents === "assist" ? "red" : "yellow",
    title: "Daily living is split across levels",
    detail: "For residents who need assistance, DSHS expects a bathroom, a common area, a dining area, and a kitchenette on the same level as their bedroom, and their way out cannot include stairs. A layout that cannot provide that on one level limits you to residents who can manage stairs on their own.",
  });
  if (a.toilets === "0") f.push({ id: "toilets", level: "yellow", title: "No toilet on the main level", detail: "Resident toilets and bathing are required, and residents who need help cannot use stairs to reach them. Adding main-level bathrooms is a major project; confirm it is possible before going further." });
  if (a.entrySteps === "5+" || a.entrySteps === "3-4") {
    const tall = a.entrySteps === "5+";
    f.push({
      id: "ramp",
      level: tall ? "red" : "yellow",
      title: tall ? "Confirm that a ramp will fit this entry" : "Check that a ramp will fit",
      detail: `A ramp needs about one foot of length for every inch of rise, plus a 3 by 3 foot landing at the top, the bottom, and every turn, with handrails on both sides. ${tall ? "At a typical 7 inches per step, five steps is roughly 35 feet of ramp. A tall entry can work well where the site has the room." : "At a typical 7 inches per step, three or four steps is roughly 21 to 28 feet of ramp."} Measure the rise and the available space at the showing.${a.residents !== "independent" ? " Residents who need help cannot use an exit path that includes steps." : ""}`,
    });
  }
  if (a.exitGrade === "high" && a.residents !== "independent") f.push({ id: "exitGrade", level: "yellow", title: "Exits open onto a raised deck or stairs", detail: "For residents who need help, an exit only counts if the path to a safe spot outside has no stairs. Check whether a ramp from the deck is practical." });
  if (a.parking === "0-1") f.push({ id: "parking", level: "yellow", title: "Very little parking", detail: "Check whether the lot has room to add spaces. Where it does not, no budget fixes it." });
  if (a.lot === "steep") f.push({ id: "lot", level: "yellow", title: "Steep lot", detail: "A steep site limits where ramps, walkways, and parking can go. Walk every exit path at the showing." });

  return f;
}

/* ------------------------------------------------------------------ */
/* CONVERSION BURDEN                                                   */
/* ------------------------------------------------------------------ */

export type BurdenLevel = "Low" | "Moderate" | "High";
export interface Burden {
  level: BurdenLevel;
  points: number;
  projects: { project: string; cls: CureClass }[];
  message: string;
}

export const CURE_LABEL: Record<CureClass, string> = {
  A: "usually under about $5,000",
  B: "often about $5,000 to $25,000",
  C: "often over $25,000",
};

function conversionBurden(a: Answers): Burden {
  const projects: Burden["projects"] = [];
  for (const q of SCORED) {
    const o = q.options.find((x) => x.id === a[q.id]);
    if (o?.cure) projects.push({ project: o.cure.project, cls: o.cure.cls });
  }
  const points = projects.reduce((s, p) => s + CURE_BURDEN_POINTS[p.cls], 0);
  const level: BurdenLevel = points >= 10 ? "High" : points >= 4 ? "Moderate" : "Low";
  const message =
    level === "High"
      ? "No single item may rule this property out, but together these projects could make conversion expensive. Get contractor estimates before going further."
      : level === "Moderate"
        ? "A few real projects are likely. Price them before you make an offer, and treat them as part of the purchase price."
        : projects.length
          ? "Only minor work is indicated by these answers."
          : "These answers do not point to any conversion projects.";
  return { level, points, projects, message };
}

/* ------------------------------------------------------------------ */
/* SHOWING CHECKLIST                                                   */
/* ------------------------------------------------------------------ */

export interface ChecklistItem {
  /** A short action, readable at a glance while standing in the house. */
  title: string;
  text: string;
  source?: string;
}

function showingChecklist(a: Answers): ChecklistItem[] {
  const c: ChecklistItem[] = [
    // "Door swings" is not in the WAC text; it is how DSHS's own Resident Bedroom
    // and AFH Characteristics information sheets tell providers to measure.
    { title: "Measure each resident bedroom", text: "At least 80 square feet of usable floor for one resident, 120 for two. Closets and door swings do not count. Note any odd shape that would not fit a bed plus a walker.", source: "WAC 388-76-10690; DSHS Resident Bedroom information sheet" },
    { title: "Measure every bedroom window", text: "Sill 44 inches or less above the floor. Clear opening at least 24 inches high and 20 wide. Opens without a key or tool. A step under a high window does not fix it.", source: "WAC 388-76-10795" },
    { title: "Look outside each bedroom window", text: "Note anything within about three feet of the window: shrubs, fences, a heat pump, a steep drop. DSHS has proposed, but as of mid-2026 not adopted, a rule requiring 36 inches of clear space outside an escape window in newly licensed homes." },
    { title: "Walk each bedroom's way out", text: "The route cannot pass through another bedroom, and everyone must be able to get out within five minutes.", source: "WAC 388-76-10865" },
    { title: "Measure the exit door", text: "The required exit door must be side-hinged with at least 32 inches of clear width and 78 inches of height.", source: "Building code R311.2" },
    { title: "Measure bedroom doorways and the hallway", text: "Write down the narrowest doorway and the narrowest point of the hall, and ask the building official and the DSHS licensor what they expect for the residents you plan to serve." },
    { title: "Count the toilets, and how you reach them", text: "One toilet for every five people living in the home, counting household members. Each must be reachable without passing through another person's room. A toilet in an ensuite bathroom can count if it is licensed for resident use.", source: "WAC 388-76-10780" },
    { title: "Check the showers", text: "A shower for residents must be at least 30 by 48 inches, with walls that can carry grab bars.", source: "Building code R330" },
    { title: "Photograph every exit", text: "Include the ground right outside each door." },
    { title: "Photograph the electrical panel", text: "Get the main breaker rating in the shot." },
    { title: "Look for smoke and CO alarms", text: "Every level, every bedroom, and outside sleeping areas. One alarm must be heard throughout the home.", source: "Building code R330.5" },
  ];
  if (a.entrySteps && a.entrySteps !== "0") c.push({ title: "Measure the rise at each entry", text: "In inches, ground to threshold. A ramp needs one foot of length per inch of rise, plus a landing of at least 3 by 3 feet at the top, the bottom, where a door opens onto it, and at any turn. Pace off whether it fits.", source: "Building code R330.9 and R311.8.2" });
  if (a.levels !== "no") c.push({ title: "Trace the way out of any basement or upstairs room", text: "Note every stair on the path. Basement windows must still meet the sill and opening sizes above." });
  if (a.sewer !== "sewer") c.push({ title: "Confirm sewer or septic", text: "If septic, ask county environmental health for the as-built drawing and the permitted number of bedrooms." });
  if (a.permits !== "no") c.push({ title: "Check the permit record", text: "Compare the house to county records: additions, garage conversions, finished basements, added bathrooms." });
  if (a.systems !== "no") c.push({ title: "Look hard at the big systems", text: "Roof age and condition, foundation cracks, the electrical panel, and visible plumbing. Book a full inspection before you remove contingencies." });
  if (a.hoa !== "no") c.push({ title: "Get the HOA covenants", text: "Read the use restrictions before paying for inspections." });
  if (a.access !== "no") c.push({ title: "Call the fire marshal's office", text: "Ask about fire truck access and water supply for this address." });
  if (a.parking === "0-1") c.push({ title: "Sketch where parking could go", text: "Note whether it would need grading or a retaining wall." });
  return c;
}

/* ------------------------------------------------------------------ */
/* ACQUISITION REVIEW                                                  */
/* ------------------------------------------------------------------ */

export interface AcquisitionReview {
  known: string[];
  ask: string[];
  links: { href: string; label: string }[];
}

function acquisitionReview(a: Answers): AcquisitionReview | null {
  if (!isLicensedNow(a)) return null;
  const known: string[] = [];
  const ask: string[] = [];
  const open = (id: string) => a[id] === undefined || a[id] === NOT_SURE;

  if (a.aqHistory === "clean") known.push("You have reviewed the DSHS inspection history and found it clean.");
  else if (a.aqHistory === "minor") { known.push("The inspection history shows some citations."); ask.push("What were the citations for, and how was each one corrected?"); }
  else if (a.aqHistory === "serious") { known.push("The inspection history shows serious enforcement."); ask.push("Ask for the full enforcement file and the corrective action plan. Talk with DSHS about how this history affects a new owner's application."); }
  else ask.push("Look up the home's inspection and enforcement history before anything else. It is public and free.");

  if (open("aqYears")) ask.push("How long has this home been licensed at this address, and has it ever changed hands?");
  else known.push(a.aqYears === "5+" ? "Licensed at this address for five years or more." : a.aqYears === "2-4" ? "Licensed at this address for two to four years." : "Licensed at this address for under two years.");

  if (open("aqCapacity")) ask.push("What is the licensed capacity, and how many rooms are private?");
  else {
    known.push(`Licensed for ${a.aqCapacity === "<5" ? "four or fewer" : a.aqCapacity === "7-8" ? "seven or eight" : a.aqCapacity} residents.`);
    if (a.aqCapacity === "7-8") ask.push("Seven and eight bed homes have additional requirements. Confirm with DSHS what a new owner must meet to keep that capacity.");
  }

  if (open("aqFilled")) ask.push("How many beds are filled today, and what has occupancy been over the last 12 months?");
  else {
    known.push(a.aqFilled === "all" ? "All beds are filled today." : a.aqFilled === "most" ? "Most beds are filled today." : a.aqFilled === "half" ? "About half the beds, or fewer, are filled today." : "The home is empty today.");
    if (a.aqFilled === "half" || a.aqFilled === "none") ask.push("Why are beds empty, and for how long? A lender will use actual income, not potential income.");
  }

  if (open("aqPayer")) ask.push("Ask for a de-identified resident schedule: payer type, care classification or private-pay level, daily or monthly rate, and the date of each resident's last assessment.");
  else {
    known.push(a.aqPayer === "private" ? "Most residents are private pay." : a.aqPayer === "medicaid" ? "Most residents are paid by Medicaid." : "Residents are a mix of private pay and Medicaid.");
    if (a.aqPayer !== "private") ask.push("For each Medicaid resident, what is the CARE classification and when was the last assessment? Reassessments move the rate up or down.");
  }

  if (open("aqPrograms")) ask.push("Does any income come from ECS or SBS contracts, or from CBHS tiers? Ask for the amounts separately from the base rate.");
  else if (a.aqPrograms !== "none") {
    known.push(a.aqPrograms === "lots" ? "A lot of the income relies on specialty contracts or CBHS tiers." : "Some income relies on specialty contracts or CBHS tiers.");
    ask.push("ECS and SBS contracts do not transfer to a buyer. What would you need to qualify for your own, and how long does it take?");
    ask.push("For CBHS, ask the Health Care Authority and each resident's managed care plan what a new owner needs in place to be paid from the day of closing.");
  } else known.push("Little or none of the income relies on specialty contracts or CBHS tiers.");

  if (a.aqFinancials === "yes") known.push("You have seen at least 12 months of financial statements.");
  else ask.push("Ask for 12 to 24 months of financial statements, and reconcile them: residents, to rates, to actual bank deposits.");

  if (open("aqTransition")) ask.push("Will the seller stay on to train you, and which staff intend to stay?");
  else if (a.aqTransition !== "yes") ask.push("Negotiate a transition period in writing. Residents, families, and referral sources follow the people they know.");
  else known.push("The seller and staff are expected to stay through a transition.");

  return {
    known,
    ask,
    links: [
      { href: "/afh-club/violation-history-lookup", label: "Violation History Lookup" },
      { href: "/afh-club/afh-payment-field-guide", label: "Which Tier? The AFH Payment Field Guide" },
      { href: "/afh-club/buying-selling", label: "Buying or Selling an AFH" },
    ],
  };
}

/** Applies to every buyer, licensed home or not. Not scored. */
export const BEFORE_YOU_COMMIT: string[] = [
  "Ask your lender how it will treat this purchase. A house you plan to operate as an adult family home, and a home bought together with an operating business, can be underwritten very differently from an ordinary residence.",
  "Get an insurance quote for the intended use before you remove contingencies. Ordinary homeowner coverage does not cover operating an adult family home.",
  "Have the local building official's adult family home inspection requirements in hand before you budget the conversion.",
  "Get written contractor estimates for every project listed above.",
];

/* ------------------------------------------------------------------ */
/* RESULT                                                              */
/* ------------------------------------------------------------------ */

export interface CategoryResult {
  id: CategoryId;
  label: string;
  max: number;
  low: number;
  high: number;
}

export interface PropertyScoreResult {
  /** Points from answered questions only. */
  low: number;
  /** low + the full value of every "not sure" question. */
  high: number;
  /** Midpoint, used only to name the band. */
  mid: number;
  answered: number;
  total: number;
  unknownIds: string[];
  /** True when too little is known to show a number. */
  withheld: boolean;
  band: Band;
  categories: CategoryResult[];
  flags: Flag[];
  /** Yellow and red only. This count travels with the score everywhere. */
  flagsToInvestigate: number;
  burden: Burden;
  strengths: string[];
  checklist: ChecklistItem[];
  acquisition: AcquisitionReview | null;
}

export function scoreProperty(a: Answers): PropertyScoreResult {
  let low = 0;
  let high = 0;
  const unknownIds: string[] = [];
  const cats = new Map<CategoryId, CategoryResult>(CATEGORIES.map((c) => [c.id, { ...c, low: 0, high: 0 }]));

  for (const q of SCORED) {
    const cat = cats.get(q.category as CategoryId)!;
    const chosen = q.options.find((o) => o.id === a[q.id]);
    if (chosen) {
      const p = chosen.points ?? 0;
      low += p; high += p; cat.low += p; cat.high += p;
    } else {
      const m = maxPoints(q);
      high += m; cat.high += m;
      unknownIds.push(q.id);
    }
  }

  const strengths: string[] = [];
  for (const q of SCORED) {
    const o = q.options.find((x) => x.id === a[q.id]);
    if (o?.strength) strengths.push(o.strength);
  }
  if (a.sewer === "sewer" && a.access === "no") strengths.push("Public sewer, public water, and a public road");

  const flags = feasibilityFlags(a);
  const mid = Math.round((low + high) / 2);
  return {
    low,
    high,
    mid,
    answered: SCORED.length - unknownIds.length,
    total: SCORED.length,
    unknownIds,
    withheld: unknownIds.length > MAX_UNKNOWN_FOR_SCORE,
    band: bandFor(mid),
    categories: CATEGORIES.map((c) => cats.get(c.id)!),
    flags,
    flagsToInvestigate: flags.filter((f) => f.level !== "green").length,
    burden: conversionBurden(a),
    strengths: strengths.slice(0, 5),
    checklist: showingChecklist(a),
    acquisition: acquisitionReview(a),
  };
}

/** "82", or "76 to 86" when some items are unknown. */
export const scoreText = (r: PropertyScoreResult) => (r.low === r.high ? String(r.low) : `${r.low} to ${r.high}`);

/** The line that must accompany the number everywhere it appears. */
export const scoreLine = (r: PropertyScoreResult) =>
  `${scoreText(r)} out of 100 · ${r.flagsToInvestigate === 0 ? "no items to investigate" : `${r.flagsToInvestigate} item${r.flagsToInvestigate === 1 ? "" : "s"} to investigate`}`;

/* ------------------------------------------------------------------ */
/* SAVING ANSWERS IN A LINK (no accounts, no database)                 */
/* ------------------------------------------------------------------ */

/**
 * Answers ride in the URL so a result can be bookmarked, shared, or reopened
 * after the showing. Format: "id.option~id.option". Unknown ids and options
 * are dropped on the way back in, so an old link cannot corrupt a newer
 * version of the questions.
 */
export function encodeAnswers(a: Answers): string {
  return QUESTIONS.filter((q) => a[q.id] !== undefined)
    .map((q) => `${q.id}.${a[q.id]}`)
    .join("~");
}

export function decodeAnswers(s: string | null | undefined): Answers {
  const out: Answers = {};
  if (!s) return out;
  for (const part of s.split("~")) {
    const i = part.indexOf(".");
    if (i < 1) continue;
    const id = part.slice(0, i);
    const val = part.slice(i + 1);
    const q = QUESTIONS.find((x) => x.id === id);
    if (!q) continue;
    if ((val === NOT_SURE && q.allowNotSure) || q.options.some((o) => o.id === val)) out[id] = val;
  }
  return out;
}
