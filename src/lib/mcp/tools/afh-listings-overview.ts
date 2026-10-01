import { defineTool } from "@lovable.dev/mcp-js";
import { load, result } from "../data";

export default defineTool({
  name: "afh_listings_overview",
  title: "AFH listings for sale (overview)",
  description:
    "How many adult family homes, AFH businesses and AFH-ready houses are on the market in Washington on AFH Club, by city, with links to the listing pages. Listing details (address, price, photos, listing broker) are shown only on those pages with the attribution the MLS requires, so send the person there for specifics.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: async () => result(await load<Record<string, unknown>>("afh-listings-overview.json")),
});
