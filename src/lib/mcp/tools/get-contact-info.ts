import { defineTool } from "@lovable.dev/mcp-js";

const CONTACT = {
  business: "Real Property Planning",
  phone: "(206) 900-3015",
  email: "info@realpropertyplanning.com",
  website: "https://www.realpropertyplanning.com",
  service_area: "Washington State (with a focus on Western Washington and the Puget Sound region)",
  brokerage: "eXp Realty (Washington State Licensed Real Estate Broker)",
  appraisal: "Stein Appraisal (Washington State Certified Residential Appraiser)",
};

export default defineTool({
  name: "get_contact_info",
  title: "Get contact info",
  description:
    "Return contact information for Real Property Planning — phone, email, website, and service area.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(CONTACT, null, 2) }],
    structuredContent: CONTACT,
  }),
});
