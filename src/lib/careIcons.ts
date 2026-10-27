import { Brain, HeartHandshake, Home, Hospital, HousePlus, Users, type LucideIcon } from "lucide-react";

/**
 * One icon per care option (Oct 27, 2026), keyed by CARE_CALCULATORS slug. Used by the homepage
 * Cost of Care card and the "Choose a housing option" cards (CareCalculatorSwitcher), each drawn
 * in the option's own colour (careCalculators.ts), never navy (David: "there is already too much
 * navy blue being used throughout the site").
 */
export const CARE_ICONS: Record<string, LucideIcon> = {
  "memory-care": Brain,
  "independent-living": Home,
  "in-home-care": HeartHandshake,
  "nursing-home": Hospital,
  "assisted-living": Users,
  "adult-family-home": HousePlus,
};

export const careIconFor = (slug: string): LucideIcon => CARE_ICONS[slug] ?? Home;
