import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { loadDirectory, norm, result, type Home } from "../data";

const SPECIALTY = { dementia: "dementia", mental_health: "mentalHealth", developmental_disabilities: "developmentalDisabilities" } as const;
const CONTRACT = {
  medicaid: "adultFamilyHome",
  specialized_behavior_support: "specializedBehaviorSupport",
  expanded_community_services: "expandedCommunityServices",
  private_duty_nursing: "privateDutyNursing",
  respite: "afhRespite",
  wa_cares: "waCaresFund",
} as const;

export interface DirectoryQuery {
  city?: string;
  county?: string;
  zip?: string;
  name?: string;
  license?: string;
  min_beds?: number;
  specialty?: keyof typeof SPECIALTY;
  contract?: keyof typeof CONTRACT;
  private_pay_only?: boolean;
}

export function filterHomes(homes: Home[], q: DirectoryQuery): Home[] {
  const city = q.city ? norm(q.city) : "";
  const county = q.county ? norm(q.county).replace(/ county$/, "") : "";
  const name = q.name ? norm(q.name) : "";
  return homes.filter(
    (h) =>
      (!q.license || h.license === q.license.replace(/\D/g, "")) &&
      (!city || norm(h.city) === city) &&
      (!county || norm(h.county) === county) &&
      (!q.zip || h.zip.startsWith(q.zip)) &&
      (!name || norm(h.name).includes(name)) &&
      (!q.min_beds || h.beds >= q.min_beds) &&
      (!q.specialty || h.specialties.includes(SPECIALTY[q.specialty])) &&
      (!q.contract || h.contracts.includes(CONTRACT[q.contract])) &&
      (!q.private_pay_only || !h.medicaid)
  );
}

export default defineTool({
  name: "find_licensed_afh",
  title: "Find licensed adult family homes",
  description:
    "Look up Washington adult family homes in the statewide directory of every DSHS-licensed home (public DSHS locator data): by city, county, ZIP, name or license number, with licensed beds, DSHS specialty training (dementia, mental health, developmental disabilities), DSHS contracts (Medicaid, SBS, ECS...) and a link to the home's DSHS inspection reports. Specialty designations are training on file, not quality ratings. This is a licensing directory, not a list of homes for sale.",
  inputSchema: {
    city: z.string().max(60).optional(),
    county: z.string().max(40).optional().describe("e.g. 'King' or 'Pierce County'."),
    zip: z.string().regex(/^\d{3,5}$/).optional(),
    name: z.string().max(80).optional().describe("Part of the home's name."),
    license: z.string().max(12).optional().describe("DSHS license number."),
    min_beds: z.number().int().min(1).max(8).optional(),
    specialty: z.enum(["dementia", "mental_health", "developmental_disabilities"]).optional(),
    contract: z.enum(["medicaid", "specialized_behavior_support", "expanded_community_services", "private_duty_nursing", "respite", "wa_cares"]).optional(),
    private_pay_only: z.boolean().optional().describe("Only homes with no DSHS Medicaid contract."),
    limit: z.number().int().min(1).max(25).default(10),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: async ({ limit, ...q }) => {
    if (!Object.values(q).some((v) => v !== undefined && v !== "")) {
      return result({
        error: "Give at least one of city, county, zip, name or license.",
        directory: "https://realpropertyplanning.com/afh-club/homes",
      });
    }
    const d = await loadDirectory();
    const found = filterHomes(d.homes, q);
    return result({
      matched: found.length,
      showing: Math.min(limit, found.length),
      homes: found.slice(0, limit).map((h) => ({
        ...h,
        dshsRecords: d.dshsRecordsUrlPattern.replace("{license}", encodeURIComponent(h.license)),
      })),
      source: `${d.source}, retrieved ${d.retrieved}. Confirm current license status with DSHS before relying on it.`,
      directory: "https://realpropertyplanning.com/afh-club/homes",
    });
  },
});
