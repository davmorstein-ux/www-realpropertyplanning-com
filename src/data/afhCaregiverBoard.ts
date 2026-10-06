/**
 * AFH Club caregiver board (Oct 5, 2026, owner's decision).
 *
 * Two sides: caregivers looking for work, and adult family homes hiring.
 * Version one is owner-approved: every post and every "contact this poster"
 * message arrives in the general inbox through the existing contact-form
 * function (send-contact-email; reasons caregiver-board-post, afh-job-post and
 * caregiver-board-contact all route to the general inbox, so no function
 * redeploy was needed). The owner reviews each post and approved ones are
 * added to the arrays below.
 *
 * THIS REPOSITORY IS PUBLIC. Posts here hold only what is shown on the page.
 * Never put a poster's email, phone number, full last name, street address,
 * date of birth or credential number in this file. Contact details stay in the
 * owner's inbox; visitors reach a poster through the contact form, and the
 * owner forwards the message. src/test/afhCaregiverBoard.test.ts fails on
 * anything that looks like an email address or phone number.
 *
 * Every post expires POST_LIFE_DAYS after it is posted. Expired posts are
 * hidden by the page. Remove them from this file when next editing it.
 */

export const POST_LIFE_DAYS = 30;

/**
 * The date the arrays below were last edited. The page's first render hides
 * posts that had expired by this date, so the static HTML and the browser
 * agree; after loading, the page hides anything expired as of today.
 */
export const BOARD_AS_OF = "2026-10-05";

export const COUNTIES = ["King", "Snohomish", "Pierce", "Kitsap", "Thurston", "Clark", "Spokane", "Other Washington county"] as const;
export const POSITIONS = ["Caregiver", "Resident manager", "Nurse (LPN or RN)", "Cook or housekeeper"] as const;
export const SCHEDULES = ["Full-time", "Part-time", "Weekends", "Overnight", "Live-in"] as const;
export const EXPERIENCE = ["Dementia", "Mental health", "Developmental disabilities", "Hospice and end of life", "Behavioral support"] as const;
export const CREDENTIALS = [
  "Home Care Aide (HCA)",
  "Nursing Assistant Certified (NAC)",
  "LPN",
  "RN",
  "Nurse delegation",
  "Dementia specialty training",
  "Mental health specialty training",
  "CPR and first aid",
  "Food handler card",
] as const;
export const YEARS = ["Less than 1 year", "1 to 2 years", "3 to 5 years", "6 to 10 years", "More than 10 years"] as const;
export const LANGUAGES = [
  "English", "Spanish", "Amharic", "Tigrinya", "Somali", "Oromo", "Swahili", "Russian", "Ukrainian",
  "Romanian", "Vietnamese", "Tagalog", "Korean", "Chinese", "Punjabi", "Other",
] as const;

export interface CaregiverPost {
  id: string; // "cg-001"
  posted: string; // ISO date
  /** First name and last initial only, e.g. "Maria S." */
  displayName: string;
  county: (typeof COUNTIES)[number];
  /** Up to three cities the caregiver will work in. */
  cities: string[];
  positions: (typeof POSITIONS)[number][];
  schedules: (typeof SCHEDULES)[number][];
  experience: (typeof EXPERIENCE)[number][];
  credentials: (typeof CREDENTIALS)[number][];
  years: (typeof YEARS)[number];
  languages: (typeof LANGUAGES)[number][];
  hasTransportation: boolean;
  availableFrom: string; // ISO date
  /** Up to 300 characters, reviewed by the owner before posting. */
  note?: string;
}

export interface JobPost {
  id: string; // "job-001"
  posted: string;
  /** The home's name as licensed by DSHS. */
  homeName: string;
  /** DSHS license number, checked by the owner against the directory. */
  licenseNumber: string;
  city: string;
  county: (typeof COUNTIES)[number];
  position: (typeof POSITIONS)[number];
  schedules: (typeof SCHEDULES)[number][];
  /** Care the home provides, from its DSHS specialty designations. */
  homeSpecialties: (typeof EXPERIENCE)[number][];
  credentialsRequired: (typeof CREDENTIALS)[number][];
  /** Hourly pay range in dollars, when the home gives one. */
  payMin?: number;
  payMax?: number;
  startDate: string;
  /** Up to 300 characters, reviewed by the owner before posting. */
  note?: string;
}

/* ---- Approved posts. Newest first. ---------------------------------- */

export const CAREGIVER_POSTS: CaregiverPost[] = [];

export const JOB_POSTS: JobPost[] = [];

/* ---- Helpers ---------------------------------------------------------- */

export const expiresOn = (posted: string): string => {
  const d = new Date(`${posted}T12:00:00Z`);
  d.setUTCDate(d.getUTCDate() + POST_LIFE_DAYS);
  return d.toISOString().slice(0, 10);
};

/** Posts still showing on the given date (ISO yyyy-mm-dd). */
export const activeOn = <T extends { posted: string }>(posts: T[], today: string): T[] =>
  posts.filter((p) => p.posted <= today && expiresOn(p.posted) >= today);

export const NOTE_MAX = 300;
