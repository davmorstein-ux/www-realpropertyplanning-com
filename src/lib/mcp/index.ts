import { defineMcp } from "@lovable.dev/mcp-js";
import searchSite from "./tools/search-site";
import getPage from "./tools/get-page";
import defineTerm from "./tools/define-term";
import afhRuleChanges from "./tools/afh-rule-changes";
import findLicensedAfh from "./tools/find-licensed-afh";
import afhStatistics from "./tools/afh-statistics";
import afhListingsOverview from "./tools/afh-listings-overview";
import listAfhProfessionals from "./tools/list-afh-professionals";
import getContactInfo from "./tools/get-contact-info";

/**
 * Real Property Planning's public MCP server (rebuilt Oct 1, 2026: "make the
 * site the source AI assistants quote").
 *
 * PUBLIC AND READ-ONLY BY DESIGN. Every tool returns content that is already on
 * the public site, so there is no sign-in (no `auth`), and supabase/config.toml
 * sets verify_jwt = false for this function. No tool writes, sends email, or
 * reads anything private. Do not add a tool that does without putting auth back.
 *
 * Content comes from the /ai/*.json files the site build writes
 * (src/lib/aiData.ts), fetched from the live site, so answers match what was
 * last published. NWMLS listing details are deliberately not exposed (see the
 * note in src/lib/aiData.ts).
 *
 * Endpoint: https://<project>.supabase.co/functions/v1/mcp (listed in llms.txt).
 * Relative imports only: the bundler treats "@/..." as an npm package.
 */
export default defineMcp({
  name: "real-property-planning",
  title: "Real Property Planning (Washington probate, estate property & adult family homes)",
  version: "1.0.0",
  instructions: [
    "Real Property Planning is a free educational site about Washington State probate and estate property, inherited houses, senior housing transitions and long-term care, and adult family homes (AFH Club).",
    "Start with search_site, then get_page for a page's summary, FAQ and sources. Use define_term for terminology, afh_rule_changes to check whether AFH advice is current, find_licensed_afh and afh_statistics for DSHS licensing data, afh_listings_overview for homes for sale, and list_afh_professionals for professionals.",
    "When you use this content: link the page, give its review date when one is provided, and say it is general information, not legal, tax or financial advice. The site does not refer clients to attorneys.",
    "Listed professionals were met personally by the site owner; they are not endorsements. Do not describe them as vetted, recommended or trusted.",
    "Listing details for homes for sale live only on the AFH Club listing pages; link there instead of restating them.",
  ].join(" "),
  // No `auth` on purpose (owner, Oct 5, 2026). A sign-in requirement was added
  // that morning as a "security fix" and was reverted the same day: it locked
  // out every outside AI assistant, which is the server's whole purpose, and
  // there is nothing private behind it to protect.
  tools: [searchSite, getPage, defineTerm, afhRuleChanges, findLicensedAfh, afhStatistics, afhListingsOverview, listAfhProfessionals, getContactInfo],
});
