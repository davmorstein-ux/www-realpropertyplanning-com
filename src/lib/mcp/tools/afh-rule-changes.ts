import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { load, norm, result } from "../data";

interface RuleFile {
  page: string;
  lastVerified: string;
  note: string;
  changes: Array<{ topic: string; category: string; effective: string; before: string; after: string; affects: string; impact: string; status?: string; [k: string]: unknown }>;
  pending: Array<{ topic: string; proposes: string[]; [k: string]: unknown }>;
  outdatedAdvice: Array<{ claim: string; now: string; ruleId: string }>;
}

export default defineTool({
  name: "afh_rule_changes",
  title: "Washington AFH rule changes",
  description:
    "Every Washington adult family home rule change since 2023 (DSHS WAC rules, statutes, budget and contract changes, court decisions): the old rule, the current rule, effective date, who it affects, and the official citation. Also lists pending proposals, which are NOT law, and common outdated advice. Use it to check whether AFH advice is still current.",
  inputSchema: {
    topic: z.string().max(100).optional().describe("Optional keyword, e.g. 'door width', 'license fee', 'training', 'evacuation'."),
    category: z.enum(["Building", "Licensing", "Operations", "Payment", "Staffing and training", "Who needs a license"]).optional(),
    include_pending: z.boolean().default(true),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: async ({ topic, category, include_pending }) => {
    const f = await load<RuleFile>("afh-rule-changes.json");
    const q = topic ? norm(topic) : "";
    const hit = (x: Record<string, unknown>) => !q || norm(JSON.stringify(x)).includes(q);
    const changes = f.changes.filter((c) => (!category || c.category === category) && hit(c));
    const pending = include_pending ? f.pending.filter(hit) : [];
    return result({
      page: f.page,
      lastVerified: f.lastVerified,
      note: f.note,
      changes,
      ...(include_pending ? { pending } : {}),
      outdatedAdvice: f.outdatedAdvice.filter((o) => !q || norm(`${o.claim} ${o.now}`).includes(q)),
    });
  },
});
