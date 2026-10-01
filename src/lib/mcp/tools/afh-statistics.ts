import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { load, norm, result } from "../data";

interface Stats {
  page: string;
  csv: string;
  source: string;
  retrievedFrom: string;
  retrievedTo: string;
  state: Record<string, number>;
  shares: Record<string, number>;
  bedSizes: unknown[];
  contracts: Array<{ id: string; homes: number; share: number }>;
  contractLabels: Record<string, string>;
  counties: Array<{ county: string; [k: string]: unknown }>;
  topCities: unknown[];
}

export default defineTool({
  name: "afh_statistics",
  title: "Washington AFH statistics",
  description:
    "Counts of Washington's licensed adult family homes and beds, statewide or for one county: homes, beds, Medicaid contracts, dementia / mental health / developmental disability specialty designations, ECS and SBS contracts, home sizes and the largest cities. From DSHS licensing data.",
  inputSchema: { county: z.string().max(40).optional().describe("One county, e.g. 'Snohomish'. Leave out for statewide.") },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: async ({ county }) => {
    const s = await load<Stats>("afh-stats.json");
    const meta = { page: s.page, csv: s.csv, source: `${s.source}, retrieved ${s.retrievedFrom} to ${s.retrievedTo}` };
    if (county) {
      const c = norm(county).replace(/ county$/, "");
      const row = s.counties.find((x) => norm(x.county) === c);
      if (!row) return result({ error: `No licensed homes found for "${county}" County.`, counties: s.counties.map((x) => x.county), ...meta });
      return result({ county: row, statewide: s.state, ...meta });
    }
    return result({
      statewide: s.state,
      sharesPercent: s.shares,
      bedSizes: s.bedSizes,
      contracts: s.contracts.map((c) => ({ ...c, label: s.contractLabels[c.id] ?? c.id })),
      counties: s.counties,
      topCities: s.topCities,
      ...meta,
    });
  },
});
