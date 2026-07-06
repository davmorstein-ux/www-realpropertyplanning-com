import { defineTool } from "@lovable.dev/mcp-js";

const COUNTIES = [
  { name: "King County", url: "/king-county", cities: ["Seattle", "Bellevue", "Kirkland", "Redmond", "Mercer Island", "Issaquah", "Renton"] },
  { name: "Snohomish County", url: "/snohomish-county", cities: ["Everett", "Edmonds", "Lynnwood", "Mukilteo", "Mill Creek", "Monroe"] },
  { name: "Pierce County", url: "/pierce-county", cities: ["Tacoma", "Gig Harbor", "Puyallup", "University Place"] },
  { name: "Kitsap County", url: "/kitsap-county", cities: ["Bainbridge Island", "Poulsbo", "Silverdale", "Bremerton"] },
  { name: "Skagit County", url: "/skagit-county", cities: ["Mount Vernon", "Burlington", "Anacortes"] },
];

export default defineTool({
  name: "list_service_areas",
  title: "List service areas",
  description:
    "List Washington State counties served by Real Property Planning, with representative cities and page paths.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(COUNTIES, null, 2) }],
    structuredContent: { counties: COUNTIES },
  }),
});
