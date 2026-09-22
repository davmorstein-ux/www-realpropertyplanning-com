import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import {
  FEATURED_BROKER,
  FEATURED_APPRAISER,
  SAME_PERSON,
  brokerageAttribution,
  appraisalAttribution,
  brokerCredentialSentence,
} from "@/data/featuredProfessionals";
import { featuredProfessionalPerson } from "@/lib/schema";

// Files that used to spell the featured broker's name, brokerage, firm or
// license numbers by hand and now read src/data/featuredProfessionals.ts.
// If a literal creeps back into one of them, the record stops being the
// single source and the next hand-off breaks silently.
const REWIRED = [
  "src/components/MidPageCTA.tsx",
  "src/components/AuthorByline.tsx",
  "src/components/PlanningSubPageLayout.tsx",
  "src/pages/AFHClub.tsx",
  "src/pages/AFHListings.tsx",
  "src/pages/AFHRealEstateBroker.tsx",
  "src/pages/Realtor.tsx",
  "src/pages/RealEstateAppraiser.tsx",
  "src/pages/FeaturedProfessionals.tsx",
  "src/pages/attorneys/ForProbateAttorneys.tsx",
  "src/pages/attorneys/ForFamilyLawAttorneys.tsx",
  "src/pages/attorneys/ForRealEstateAttorneys.tsx",
  "src/pages/attorneys/ForEstatePlanningAttorneys.tsx",
  "src/data/afhProfessionals.ts",
  "src/lib/schema.ts",
  "src/lib/mcp/tools/get-contact-info.ts",
];

// Realtor.tsx and AFHRealEstateBroker.tsx keep their disclosures via the
// record but carry a curated testimonial set that mentions "David" (no
// surname) — those are his reviews and are not the record's job. The attorney
// pages still name him as the actor in their prose; that copy rewrite is a
// separate step, so the literal-name check is limited to the files whose only
// mention was the attribution.
const NO_LITERAL_NAME = REWIRED.filter(
  (f) => !/attorneys\//.test(f) && !/Realtor|AFHRealEstateBroker|AFHClub/.test(f),
);

describe("featured professionals record", () => {
  it("has the fields every consumer relies on", () => {
    for (const p of [FEATURED_BROKER, FEATURED_APPRAISER]) {
      expect(p.name.trim()).not.toBe("");
      expect(p.licenseNumber).toMatch(/^\d+$/);
      expect(p.phoneTel).toMatch(/^\+1\d{10}$/);
      expect(p.email).toContain("@");
    }
    expect(FEATURED_BROKER.brokerage).not.toMatch(/Real Property Planning/);
    expect(FEATURED_APPRAISER.firm).not.toMatch(/Real Property Planning/);
  });

  it("attributes licensed work to the person, never to the hub", () => {
    expect(brokerageAttribution).toContain(FEATURED_BROKER.name);
    expect(brokerageAttribution).toContain(FEATURED_BROKER.brokerage);
    expect(appraisalAttribution).toContain(FEATURED_APPRAISER.name);
    expect(appraisalAttribution).toContain(FEATURED_APPRAISER.firm);
    expect(brokerCredentialSentence).toContain(`#${FEATURED_BROKER.licenseNumber}`);
    if (SAME_PERSON) expect(brokerCredentialSentence).toContain(`#${FEATURED_APPRAISER.licenseNumber}`);
    else expect(brokerCredentialSentence).not.toContain(FEATURED_APPRAISER.licenseNumber);
  });

  it("every rewired file imports the record", () => {
    for (const f of REWIRED) {
      const src = readFileSync(f, "utf8");
      expect(src, f).toMatch(/featuredProfessional(s|Assets)/);
    }
  });

  it("no rewired file spells the license numbers or the brokerage/firm pair by hand", () => {
    for (const f of NO_LITERAL_NAME) {
      const src = readFileSync(f, "utf8");
      expect(src, `${f} hardcodes the broker license`).not.toContain(FEATURED_BROKER.licenseNumber);
      expect(src, `${f} hardcodes the appraiser license`).not.toContain(FEATURED_APPRAISER.licenseNumber);
      // A comment may explain history; a JSX/string literal of the full name may not.
      const literal = new RegExp(`["'\`>]\\s*${FEATURED_BROKER.name}\\b`);
      expect(src, `${f} spells the featured broker's name in markup`).not.toMatch(literal);
    }
  });

  it("the schema Person carries the record's identity", () => {
    expect(featuredProfessionalPerson.name).toBe(FEATURED_BROKER.name);
    const creds = (featuredProfessionalPerson.hasCredential as Array<{ identifier: string }>).map((c) => c.identifier);
    expect(creds).toContain(FEATURED_BROKER.licenseNumber);
    expect(creds).toContain(FEATURED_APPRAISER.licenseNumber);
  });
});

describe("no page names the featured broker by hand", () => {
  it("scripts/audit-david-stein.mjs --strict passes", async () => {
    const { execFileSync } = await import("node:child_process");
    const out = execFileSync("node", ["scripts/audit-david-stein.mjs", "--strict"], { encoding: "utf8" });
    expect(out).toContain("Total violations: 0");
  });
});

describe("schema: the hub is not a brokerage", () => {
  it("Organization carries no founder/employee/offer catalog and is not a RealEstateAgent", async () => {
    const { hubOrganizationSchema, countyPageSchema, featuredProfessionalPerson } = await import("@/lib/schema");
    const org = (hubOrganizationSchema["@graph"] as Array<Record<string, unknown>>)[0];
    expect(org["@type"]).not.toContain("RealEstateAgent");
    expect(org).not.toHaveProperty("founder");
    expect(org).not.toHaveProperty("employee");
    expect(org).not.toHaveProperty("hasOfferCatalog");
    expect(org).not.toHaveProperty("priceRange");
    expect(featuredProfessionalPerson).not.toHaveProperty("worksFor");
    const county = countyPageSchema("King County", "/king-county", "x");
    expect(county["@type"]).toBe("WebPage");
    expect(county).not.toHaveProperty("employee");
  });
});

describe("public/llms.txt matches the record", () => {
  it("names the current featured broker and appraiser with their license numbers", () => {
    const txt = readFileSync("public/llms.txt", "utf8");
    expect(txt).toContain(FEATURED_BROKER.name);
    expect(txt).toContain(FEATURED_BROKER.licenseNumber);
    expect(txt).toContain(FEATURED_APPRAISER.licenseNumber);
    expect(txt).not.toMatch(/\bour team\b|\bclients\b/i);
  });
});
