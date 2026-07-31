/**
 * Data model for the Washington State adult family home directory.
 *
 * Source of truth is the DSHS Adult Family Home Locator, a public record:
 * https://fortress.wa.gov/dshs/adsaapps/lookup/AFHAdvLookup.aspx
 *
 * The permanent key for a facility is its DSHS license number. Facility names
 * change, ownership changes, and homes come on and off the market — the license
 * number does not. Every URL and every internal reference keys off it.
 */

/** DSHS specialty training designations. Not quality ratings. */
export type AFHSpecialty = "dementia" | "mentalHealth" | "developmentalDisabilities";

/**
 * DSHS contract types. "adultFamilyHome" is the base contract; the others carry
 * enhanced reimbursement for higher-acuity residents. A home with no contract
 * cannot accept Medicaid.
 */
export type AFHContract =
  | "adultFamilyHome"
  | "specializedBehaviorSupport"
  | "expandedCommunityServices"
  | "privateDutyNursing"
  | "afhRespite"
  | "waCaresFund"
  | "waCaresFundRespite";

export interface AFHAddress {
  /** Street line as published by DSHS, e.g. "7339 Ne 140th St" */
  street: string;
  city: string;
  /** URL segment, e.g. "kirkland" */
  citySlug: string;
  state: "WA";
  /** 5-digit; DSHS occasionally publishes ZIP+4, which is normalised here. */
  zip: string;
  county: string;
}

export interface AFHFacility {
  /** DSHS license number — the permanent primary key. */
  licenseNumber: string;

  /**
   * Name exactly as DSHS publishes it, including leading punctuation.
   * Many operators prefix names with #, *, or spaces to sort first in the
   * locator results. Preserved verbatim for accuracy.
   */
  name: string;

  /** Name with sort-hacking punctuation stripped, for headings and lists. */
  displayName: string;

  /** URL segment: display name plus license number, e.g. "amen-adult-family-home-755603" */
  slug: string;

  address: AFHAddress;

  /** Provider contact as published by DSHS. Business contact, not private data. */
  contactName: string | null;
  phone: string | null;

  /** DSHS administrative region/unit, e.g. "2G". */
  regionUnit: string | null;

  /** Licensed resident capacity. Standard maximum is 6; DSHS grants up to 8. */
  licensedBeds: number;

  specialties: AFHSpecialty[];
  contracts: AFHContract[];
  acceptsMedicaid: boolean;

  /**
   * Whether DSHS has inspection or enforcement documents on file. Drives the
   * content-threshold gate: a facility page is only worth generating when there
   * is something substantive to publish.
   */
  hasReports: boolean;

  /** ISO date of the DSHS pull. Displayed on every page for accuracy. */
  retrievedAt: string;
}

/** Human-readable labels. Keep display strings out of components. */
export const SPECIALTY_LABELS: Record<AFHSpecialty, string> = {
  dementia: "Dementia",
  mentalHealth: "Mental Health",
  developmentalDisabilities: "Developmental Disabilities",
};

export const CONTRACT_LABELS: Record<AFHContract, string> = {
  adultFamilyHome: "Adult Family Home",
  specializedBehaviorSupport: "Specialized Behavior Support",
  expandedCommunityServices: "Expanded Community Services",
  privateDutyNursing: "Private Duty Nursing",
  afhRespite: "AFH Respite",
  waCaresFund: "WA Cares Fund Adult Family Home",
  waCaresFundRespite: "WA Cares Fund Adult Family Home Respite",
};

/* ------------------------------------------------------------------ */
/* Selectors — the only place directory pages should query facilities. */
/* ------------------------------------------------------------------ */

export const byCity = (facilities: AFHFacility[], citySlug: string) =>
  facilities.filter((f) => f.address.citySlug === citySlug);

export const bySpecialty = (facilities: AFHFacility[], specialty: AFHSpecialty) =>
  facilities.filter((f) => f.specialties.includes(specialty));

export const medicaidAccepting = (facilities: AFHFacility[]) => facilities.filter((f) => f.acceptsMedicaid);

/**
 * Aggregate stats for directory page copy. Computed rather than hardcoded so the
 * numbers can never drift from the data — the mistake that put five duplicate
 * listings live on the listings page.
 */
export interface AFHCityStats {
  city: string;
  citySlug: string;
  facilityCount: number;
  totalBeds: number;
  medicaidCount: number;
  expandedCapacityCount: number;
  specialtyCounts: Record<AFHSpecialty, number>;
  /** Operators running more than one home in the city, most homes first. */
  multiHomeOperators: { contactName: string; homes: number }[];
}

export function cityStats(facilities: AFHFacility[], citySlug: string): AFHCityStats | null {
  const inCity = byCity(facilities, citySlug);
  if (inCity.length === 0) return null;

  const operatorCounts = new Map<string, number>();
  inCity.forEach((f) => {
    if (!f.contactName) return;
    operatorCounts.set(f.contactName, (operatorCounts.get(f.contactName) ?? 0) + 1);
  });

  return {
    city: inCity[0].address.city,
    citySlug,
    facilityCount: inCity.length,
    totalBeds: inCity.reduce((sum, f) => sum + f.licensedBeds, 0),
    medicaidCount: inCity.filter((f) => f.acceptsMedicaid).length,
    expandedCapacityCount: inCity.filter((f) => f.licensedBeds > 6).length,
    specialtyCounts: {
      dementia: inCity.filter((f) => f.specialties.includes("dementia")).length,
      mentalHealth: inCity.filter((f) => f.specialties.includes("mentalHealth")).length,
      developmentalDisabilities: inCity.filter((f) => f.specialties.includes("developmentalDisabilities")).length,
    },
    multiHomeOperators: [...operatorCounts.entries()]
      .filter(([, n]) => n > 1)
      .sort((a, b) => b[1] - a[1])
      .map(([contactName, homes]) => ({ contactName, homes })),
  };
}
