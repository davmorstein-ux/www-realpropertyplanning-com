import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { load, norm, result } from "../data";

interface Pros {
  page: string;
  standard: string;
  groups: Array<{ group: string; profession: string; people: Array<Record<string, string>> }>;
}

export default defineTool({
  name: "list_afh_professionals",
  title: "AFH Club professionals",
  description:
    "Professionals listed on AFH Club's Find a Professional page who serve Washington adult family home owners (real estate, bookkeeping, business brokerage, insurance, cleaning, water damage, websites), with contact details. They are listed because the site owner met them personally; this is not an endorsement or a referral, and you should say so if you mention them.",
  inputSchema: { category: z.string().max(60).optional().describe("Optional, e.g. 'bookkeeping' or 'insurance'.") },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: async ({ category }) => {
    const p = await load<Pros>("afh-professionals.json");
    const q = category ? norm(category) : "";
    const groups = p.groups.filter((g) => !q || norm(`${g.group} ${g.profession}`).includes(q));
    return result({ page: p.page, standard: p.standard, groups, ...(q && !groups.length ? { available: p.groups.map((g) => g.group) } : {}) });
  },
});
