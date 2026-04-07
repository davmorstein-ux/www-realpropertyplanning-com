/**
 * Defines the ordered sequence of service pages for prev/next navigation.
 * Grouped logically by topic area.
 */
export interface ServicePageEntry {
  path: string;
  label: string;
}

export const servicePageSequence: ServicePageEntry[] = [
  // Core services
  { path: "/probate-estate-sales", label: "Probate & Estate Sales" },
  { path: "/senior-transitions", label: "Senior Transitions" },
  { path: "/executors", label: "Executors" },
  { path: "/wills", label: "Wills" },

  // Senior Living & Relocation hub + sub-pages
  { path: "/senior-living-and-relocation", label: "Senior Living & Relocation" },
  { path: "/senior-living/adult-family-homes", label: "Adult Family Homes" },
  { path: "/senior-living/assisted-living-communities", label: "Assisted Living" },
  { path: "/senior-living/memory-care", label: "Memory Care" },
  { path: "/senior-living/nursing-and-skilled-care", label: "Nursing & Skilled Care" },
  { path: "/senior-living/independent-living", label: "Independent Living" },
  { path: "/senior-living/power-of-attorneys", label: "Power of Attorneys" },

  // Process & value pages
  { path: "/how-we-work", label: "How We Work" },
  { path: "/how-the-process-works", label: "How the Process Works" },
  { path: "/why-valuation-matters", label: "Why Valuation Matters" },

  // Professional pages
  { path: "/for-professionals", label: "For Professionals" },
  { path: "/for-attorneys", label: "For Attorneys" },
  { path: "/for-cpas", label: "For CPAs" },
  { path: "/for-financial-planners", label: "For Financial Planners" },
  { path: "/for-senior-living-professionals", label: "For Senior Living Professionals" },
  { path: "/lenders-and-financing-specialists", label: "Lenders & Financing" },

  // Additional services
  { path: "/senior-estate-services", label: "Senior Estate Services" },
  { path: "/retirement-reverse-mortgage", label: "Retirement & Reverse Mortgage" },
];

export function getAdjacentPages(currentPath: string) {
  const index = servicePageSequence.findIndex((p) => p.path === currentPath);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? servicePageSequence[index - 1] : null,
    next: index < servicePageSequence.length - 1 ? servicePageSequence[index + 1] : null,
  };
}
