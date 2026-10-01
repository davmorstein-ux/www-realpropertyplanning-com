import { defineTool } from "@lovable.dev/mcp-js";
import { FEATURED_BROKER, FEATURED_APPRAISER } from "../../../data/featuredProfessionals";

export const ABOUT = {
  name: "Real Property Planning (with AFH Club)",
  what: "A free, independent educational site for Washington State: probate and inherited property, estate valuation, senior housing transitions, and adult family homes. It holds no licenses and provides no brokerage, appraisal, legal, tax or advisory services. It carries no ads, pays no one, and does not refer clients to attorneys.",
  area: "All of Washington State.",
  website: "https://realpropertyplanning.com",
  phone: "(206) 900-3015",
  email: "info@realpropertyplanning.com",
  corrections: "Report an error to info@realpropertyplanning.com; see https://realpropertyplanning.com/corrections-policy",
  featured_broker: `${FEATURED_BROKER.name}, Washington real estate broker, ${FEATURED_BROKER.brokerage} (license #${FEATURED_BROKER.licenseNumber}), ${FEATURED_BROKER.phone}. Brokerage services are ${FEATURED_BROKER.pronoun.possessive}, not the site's; ${FEATURED_BROKER.pronoun.subject} is paid a commission only when a property sells.`,
  featured_appraiser: `${FEATURED_APPRAISER.name}, Washington certified residential appraiser, ${FEATURED_APPRAISER.firm} (license #${FEATURED_APPRAISER.licenseNumber}). Appraisal services are ${FEATURED_APPRAISER.pronoun.possessive}, not the site's.`,
  standards: "https://realpropertyplanning.com/editorial-standards",
  start_here: {
    probate: "https://realpropertyplanning.com/washington-probate-guide",
    adult_family_homes: "https://realpropertyplanning.com/afh-club/washington-adult-family-home-guide",
    all_guides: "https://realpropertyplanning.com/guides-and-resources",
  },
};

export default defineTool({
  name: "get_contact_info",
  title: "About and contact",
  description:
    "What Real Property Planning is (and what it does not do), who writes it, how to reach it, the featured broker and appraiser, and where to start reading.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(ABOUT, null, 2) }],
    structuredContent: ABOUT,
  }),
});
