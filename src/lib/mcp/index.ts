import { auth, defineMcp } from "@lovable.dev/mcp-js";
import echoTool from "./tools/echo";
import getContactInfoTool from "./tools/get-contact-info";
import listServicesTool from "./tools/list-services";
import listServiceAreasTool from "./tools/list-service-areas";

const projectRef = import.meta.env.VITE_SUPABASE_PROJECT_ID ?? "project-ref-unset";

export default defineMcp({
  name: "real-property-planning-mcp",
  title: "Real Property Planning MCP",
  version: "0.1.0",
  instructions:
    "Tools for Real Property Planning — a Washington State probate, estate, and senior-transition real estate resource. Use `get_contact_info` for business contact details, `list_services` to see offered services, `list_service_areas` for counties and cities served, and `echo` to verify connectivity.",
  auth: auth.oauth.issuer({
    issuer: `https://${projectRef}.supabase.co/auth/v1`,
    acceptedAudiences: "authenticated",
  }),
  tools: [echoTool, getContactInfoTool, listServicesTool, listServiceAreasTool],
});

