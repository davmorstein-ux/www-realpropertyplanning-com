import { defineTool } from "@lovable.dev/mcp-js";
import { FEATURED_BROKER, FEATURED_APPRAISER } from "../../../data/featuredProfessionals";

const CONTACT = {
  business: "Real Property Planning",
  phone: "(206) 900-3015",
  email: "info@realpropertyplanning.com",
  website: "https://www.realpropertyplanning.com",
  service_area: "Washington State (with a focus on Western Washington and the Puget Sound region)",
  featured_broker: `${FEATURED_BROKER.name}, Washington State Licensed Real Estate Broker, ${FEATURED_BROKER.brokerage} (license #${FEATURED_BROKER.licenseNumber}) — brokerage services are his, not the hub's`,
  featured_appraiser: `${FEATURED_APPRAISER.name}, Washington State Certified Residential Appraiser, ${FEATURED_APPRAISER.firm} (license #${FEATURED_APPRAISER.licenseNumber}) — appraisal services are his, not the hub's`,
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
