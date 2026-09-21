import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { AFH_PROFESSIONAL_GROUPS, ACTIVE_AFH_PROFESSIONAL_GROUPS, DAVID_STEIN, NICOLE_GUZMAN_JOHNSON } from "@/data/afhProfessionals";

const everyone = AFH_PROFESSIONAL_GROUPS.flatMap((g) => g.people);
const page = readFileSync("src/pages/AFHFindProfessional.tsx", "utf8");

describe("AFH Club featured professionals", () => {
  it("every person can actually be reached: a name, a business, a photo, a website, and a phone or email", () => {
    for (const p of everyone) {
      expect(p.name.trim().length, p.id).toBeGreaterThan(3);
      expect(p.company.trim().length, p.id).toBeGreaterThan(1);
      expect(p.photo, `${p.id} photo`).toBeTruthy();
      expect(p.photoAlt.trim().length, `${p.id} photo description`).toBeGreaterThan(10);
      expect(p.website.startsWith("https://"), `${p.id} website`).toBe(true);
      expect(Boolean(p.phone || p.email), `${p.id} needs a phone or an email`).toBe(true);
      if (p.email) expect(p.email, p.id).toMatch(/^[^@\s]+@[^@\s]+\.[a-z]{2,}$/i);
      if (p.phone) expect(p.phone.replace(/\D/g, "").length, `${p.id} phone`).toBe(10);
    }
  });
  it("nobody is listed twice, and group ids are unique", () => {
    expect(new Set(everyone.map((p) => p.id)).size).toBe(everyone.length);
    expect(new Set(AFH_PROFESSIONAL_GROUPS.map((g) => g.id)).size).toBe(AFH_PROFESSIONAL_GROUPS.length);
  });
  it("an empty group is never rendered", () => {
    for (const g of ACTIVE_AFH_PROFESSIONAL_GROUPS) expect(g.people.length, g.id).toBeGreaterThan(0);
  });
  it("every group explains why the ROLE matters, without making a claim about a person", () => {
    for (const g of AFH_PROFESSIONAL_GROUPS) {
      expect(g.why.trim().length, g.id).toBeGreaterThan(60);
      for (const p of g.people) expect(g.why.includes(p.name.split(" ")[0]), `${g.id} names ${p.name}`).toBe(false);
    }
  });
  it("the page tells visitors the listings are a courtesy", () => {
    expect(page).toContain("No one pays to be featured");
    expect(page).toContain("receives nothing");
  });
  it("the one person who IS compensated says so on his own listing", () => {
    expect(DAVID_STEIN.note).toBeDefined();
    expect(DAVID_STEIN.note).toContain("compensated");
    expect(DAVID_STEIN.note).toContain("133972");
  });
  it("no listing promises more than was supplied", () => {
    const text = JSON.stringify(everyone).toLowerCase();
    for (const w of ["guarantee", "best in", "top-rated", "endorsed by"]) expect(text.includes(w), w).toBe(false);
    // "#1" as a ranking boast, but not a license number such as "#133972"
    expect(/#1(?!\d)/.test(text), "a '#1' ranking claim").toBe(false);
  });
  it("each person's details live in one place: the pages that show them import the shared record", () => {
    expect(readFileSync("src/pages/BookkeepingServices.tsx", "utf8")).toContain("NICOLE_GUZMAN_JOHNSON");
    expect(readFileSync("src/pages/AFHRealEstateBroker.tsx", "utf8")).toContain("DAVID_STEIN");
    expect(readFileSync("src/pages/BookkeepingServices.tsx", "utf8")).not.toContain(NICOLE_GUZMAN_JOHNSON.phone as string);
  });
});
