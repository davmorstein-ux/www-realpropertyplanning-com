import { defineTool } from "@lovable.dev/mcp-js";

const SERVICES = [
  { name: "Probate & Estate Sales", url: "/probate-estate-sales", audience: "Executors, attorneys, families" },
  { name: "Support for Executors", url: "/executors", audience: "Executors managing inherited property" },
  { name: "Senior Housing Transitions", url: "/senior-transitions", audience: "Seniors and families downsizing or relocating" },
  { name: "Attorney Referral Resource", url: "/for-attorneys", audience: "Estate, probate, and family law attorneys" },
  { name: "Real Estate Guidance for CPAs", url: "/for-cpas", audience: "CPAs and their clients" },
  { name: "Real Estate Guidance for Financial Planners", url: "/for-financial-planners", audience: "Financial planners and their clients" },
  { name: "Property Valuation", url: "/why-valuation-matters", audience: "Attorneys, executors, trustees" },
  { name: "Join the Professional Network", url: "/join-network", audience: "Professionals serving seniors and estates" },
];

export default defineTool({
  name: "list_services",
  title: "List services",
  description:
    "List the core services offered by Real Property Planning with a short audience description and page path.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(SERVICES, null, 2) }],
    structuredContent: { services: SERVICES },
  }),
});
