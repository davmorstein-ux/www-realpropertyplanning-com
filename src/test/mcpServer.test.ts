/**
 * The public MCP server (src/lib/mcp), exercised over the real MCP protocol,
 * with the /ai/*.json files built in memory from the same builders the site
 * build uses (src/lib/aiData.ts). Pages come from a small fixture because the
 * page index is built from ROUTE_METADATA inside vite.config.ts.
 */
import { describe, it, expect, beforeAll } from "vitest";
import path from "node:path";
import { createMcpProtocolHandler } from "@lovable.dev/mcp-js/protocols/mcp";
import mcp from "@/lib/mcp";
import { setFetcherForTests } from "@/lib/mcp/data";
import {
  buildAiPages, buildAiGlossary, buildAiRuleChanges, buildAiDirectory, buildAiStats,
  buildAiListingsOverview, buildLlmsTxt, DSHS_RECORDS_URL_PATTERN,
} from "@/lib/aiData";
import { afhListings } from "@/data/afhListings";
import { FEATURED_BROKER, FEATURED_APPRAISER } from "@/data/featuredProfessionals";

const dataDir = path.resolve(__dirname, "../data/afh");
const pages = buildAiPages({
  "/washington-probate-guide": {
    title: "Washington Probate Guide",
    h1: "Washington Probate & Estate Property: The Complete Guide",
    description: "How probate works in Washington when a house is involved.",
    sections: ["Can the house be sold while probate is open? — Usually. With nonintervention powers the personal representative may sell real estate without a court order (RCW 11.68.090)."],
  },
  "/afh-club/wabo-inspection-guide": {
    title: "WABO Inspection Guide",
    description: "Building code requirements for converting a house to an adult family home.",
  },
  "/search": { title: "Search", description: "Internal search", noIndex: true },
});
const stats = buildAiStats(dataDir);
const FILES: Record<string, unknown> = {
  "pages.json": pages,
  "glossary.json": buildAiGlossary(),
  "afh-rule-changes.json": buildAiRuleChanges(),
  "afh-stats.json": stats,
  "afh-directory.json": { source: "DSHS", retrieved: stats.retrievedTo, dshsRecordsUrlPattern: DSHS_RECORDS_URL_PATTERN, homes: buildAiDirectory(dataDir) },
  "afh-listings-overview.json": buildAiListingsOverview("2026-10-01"),
  "afh-professionals.json": { page: "x", standard: "met personally", groups: [{ group: "Bookkeeping", profession: "Bookkeeper", people: [{ name: "Test Person" }] }] },
};

const handler = createMcpProtocolHandler(mcp);
let id = 0;
async function rpc(method: string, params: Record<string, unknown> = {}) {
  const res = await handler(
    new Request("http://localhost/functions/v1/mcp", {
      method: "POST",
      headers: { "content-type": "application/json", accept: "application/json, text/event-stream" },
      body: JSON.stringify({ jsonrpc: "2.0", id: ++id, method, params }),
    })
  );
  const text = await res.text();
  const json = text.trim().startsWith("{") ? JSON.parse(text) : JSON.parse(text.split("\n").find((l) => l.startsWith("data:"))!.slice(5));
  return json.result;
}
const call = async (name: string, args: Record<string, unknown> = {}) => {
  const r = await rpc("tools/call", { name, arguments: args });
  let data = r.structuredContent;
  if (!data) {
    try {
      data = JSON.parse(r.content[0].text);
    } catch {
      data = { message: r.content[0].text };
    }
  }
  return { ...r, data };
};

beforeAll(() => {
  setFetcherForTests(async (url) => {
    const file = url.split("/ai/")[1];
    return { ok: file in FILES, status: file in FILES ? 200 : 404, json: async () => ({ version: 1, data: FILES[file] }) };
  });
});

describe("MCP server", () => {
  it("is public (no auth) and lists only read-only tools", async () => {
    const r = await rpc("tools/list");
    const names = r.tools.map((t: { name: string }) => t.name).sort();
    expect(names).toEqual([
      "afh_listings_overview", "afh_rule_changes", "afh_statistics", "define_term", "find_licensed_afh",
      "get_contact_info", "get_page", "list_afh_professionals", "search_site",
    ]);
    for (const t of r.tools) expect(t.annotations?.readOnlyHint).toBe(true);
  });

  it("search_site finds the probate guide and skips noindex pages", async () => {
    const { data } = await call("search_site", { query: "can the executor sell the house during probate" });
    expect(data.results[0].path).toBe("/washington-probate-guide");
    expect(data.results[0].excerpt).toMatch(/nonintervention/);
    expect(pages.some((p) => p.path === "/search")).toBe(false);
  });

  it("get_page accepts a full URL", async () => {
    const { data } = await call("get_page", { page: "https://realpropertyplanning.com/afh-club/wabo-inspection-guide/" });
    expect(data.path).toBe("/afh-club/wabo-inspection-guide");
    const miss = await call("get_page", { page: "/nope" });
    expect(miss.isError).toBe(true);
  });

  it("define_term finds acronyms in both glossaries", async () => {
    expect((await call("define_term", { term: "CHOW" })).data.matches[0].glossary).toBe("afh");
    const pr = (await call("define_term", { term: "personal representative", glossary: "probate" })).data.matches[0];
    expect(pr.url).toMatch(/\/probate-glossary#/);
  });

  it("find_licensed_afh filters the statewide directory and links DSHS records", async () => {
    const { data } = await call("find_licensed_afh", { city: "Lakewood", specialty: "dementia", limit: 3 });
    expect(data.matched).toBeGreaterThan(50);
    expect(data.homes).toHaveLength(3);
    expect(data.homes[0].city).toBe("Lakewood");
    expect(data.homes[0].dshsRecords).toContain(data.homes[0].license);
    expect((await call("find_licensed_afh", {})).data.error).toBeTruthy();
  });

  it("afh_statistics answers for one county", async () => {
    const { data } = await call("afh_statistics", { county: "King County" });
    expect(data.county.county).toBe("King");
  });

  it("afh_rule_changes keeps pending proposals marked as not law", async () => {
    const { data } = await call("afh_rule_changes", {});
    expect(data.changes.length).toBeGreaterThan(5);
    for (const p of data.pending) expect(p.notLaw).toBe(true);
  });

  it("get_contact_info names the featured professionals from the record", async () => {
    const { data } = await call("get_contact_info");
    expect(data.featured_broker).toContain(FEATURED_BROKER.licenseNumber);
    expect(data.featured_appraiser).toContain(FEATURED_APPRAISER.licenseNumber);
    expect(data.what).toMatch(/does not refer clients to attorneys/);
  });
});

describe("NWMLS: listing details never leave the listing pages", () => {
  it("the listings overview carries counts and links only", async () => {
    const { data } = await call("afh_listings_overview");
    const text = JSON.stringify(data);
    for (const l of afhListings.filter((x) => x.marketStatus === "active")) {
      expect(text).not.toContain(l.address);
      expect(text).not.toContain(l.mlsNum);
      expect(text).not.toContain(l.price);
    }
  });
});

describe("llms.txt", () => {
  const txt = buildLlmsTxt({ pages, glossary: [], stats, listings: buildAiListingsOverview("2026-10-01"), mcpUrl: "https://example.supabase.co/functions/v1/mcp" });
  it("names the current featured broker and appraiser with their license numbers", () => {
    expect(txt).toContain(FEATURED_BROKER.name);
    expect(txt).toContain(FEATURED_BROKER.licenseNumber);
    expect(txt).toContain(FEATURED_APPRAISER.licenseNumber);
    expect(txt).not.toMatch(/\bour team\b|\bvetted\b|\btrusted\b/i);
  });
  it("points AI tools at the MCP server and the JSON files", () => {
    expect(txt).toContain("https://example.supabase.co/functions/v1/mcp");
    expect(txt).toContain("/ai/pages.json");
  });
});
