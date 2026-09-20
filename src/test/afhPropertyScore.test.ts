import { describe, it, expect } from "vitest";
import {
  QUESTIONS, CATEGORIES, NOT_SURE, MAX_UNKNOWN_FOR_SCORE, SCORED_COUNT,
  scoreProperty, scoreText, scoreLine, encodeAnswers, decodeAnswers, activeQuestions, bandFor, type Answers,
} from "@/data/afhPropertyScore";

const scored = QUESTIONS.filter((q) => q.section === "score");
const best = (): Answers => Object.fromEntries(scored.map((q) => [q.id, [...q.options].sort((a, b) => (b.points ?? 0) - (a.points ?? 0))[0].id]));
const worst = (): Answers => Object.fromEntries(scored.map((q) => [q.id, [...q.options].sort((a, b) => (a.points ?? 0) - (b.points ?? 0))[0].id]));
const clean = { licensed: "no", residents: "both", sewer: "sewer", hoa: "no", levels: "no", permits: "no", access: "no", systems: "no" };

describe("AFH Property Score: configuration", () => {
  it("category maximums add up to exactly 100", () => {
    expect(CATEGORIES.reduce((s, c) => s + c.max, 0)).toBe(100);
  });
  it("each category's questions add up to that category's maximum", () => {
    for (const c of CATEGORIES) {
      const sum = scored.filter((q) => q.category === c.id).reduce((s, q) => s + Math.max(...q.options.map((o) => o.points ?? 0)), 0);
      expect(sum, c.label).toBe(c.max);
    }
  });
  it("every scored option has points, and no unscored option does", () => {
    for (const q of QUESTIONS) for (const o of q.options) {
      if (q.section === "score") expect(typeof o.points, `${q.id}.${o.id}`).toBe("number");
      else expect(o.points, `${q.id}.${o.id}`).toBeUndefined();
    }
  });
  it("question ids are unique and option ids are unique within a question", () => {
    expect(new Set(QUESTIONS.map((q) => q.id)).size).toBe(QUESTIONS.length);
    for (const q of QUESTIONS) expect(new Set(q.options.map((o) => o.id)).size, q.id).toBe(q.options.length);
  });
  it("no question offers more than six choices, and every prompt is a question", () => {
    for (const q of QUESTIONS) {
      expect(q.options.length, q.id).toBeLessThanOrEqual(6);
      expect(q.prompt.trim().endsWith("?") || q.prompt.includes("?"), q.id).toBe(true);
    }
  });
  it("never uses the forbidden words", () => {
    const text = JSON.stringify(QUESTIONS).toLowerCase();
    for (const w of ["approved", "compliant", "licensable", "bad property", "neighborhood", "neighbourhood"]) expect(text.includes(w), w).toBe(false);
  });
});

describe("AFH Property Score: scoring", () => {
  it("the best possible house scores 100 with no flags and a low burden", () => {
    const r = scoreProperty({ ...clean, ...best() });
    expect(r.low).toBe(100); expect(r.high).toBe(100);
    expect(r.flagsToInvestigate).toBe(0);
    expect(r.burden.level).toBe("Low"); expect(r.burden.projects).toHaveLength(0);
    expect(scoreText(r)).toBe("100");
  });
  it("the worst possible house scores the floor of 4 and a high burden", () => {
    // The floor is 4, not 0: every house has at least one door to the outside,
    // and one door is not a defect (building code sleeping-room type NS1).
    const r = scoreProperty({ ...clean, ...worst() });
    expect(r.low).toBe(4); expect(r.high).toBe(4);
    expect(r.burden.level).toBe("High");
    expect(r.band.label).toContain("Significant challenges");
  });
  it("is deterministic", () => {
    const a = { ...clean, ...best(), entrySteps: "3-4", toilets: "1" };
    expect(scoreProperty(a)).toEqual(scoreProperty({ ...a }));
  });
  it("'not sure' widens the range instead of guessing, and does not inflate the low end", () => {
    const a: Answers = { ...clean, ...best(), toilets: NOT_SURE, parking: NOT_SURE };
    const r = scoreProperty(a);
    expect(r.high).toBe(100);
    expect(r.low).toBe(100 - 10 - 5);
    expect(r.answered).toBe(SCORED_COUNT - 2);
    expect(scoreText(r)).toBe("85 to 100");
    expect(r.withheld).toBe(false);
  });
  it("withholds a score when too little is known", () => {
    const a: Answers = { ...clean };
    scored.slice(0, MAX_UNKNOWN_FOR_SCORE + 1).forEach((q) => (a[q.id] = NOT_SURE));
    scored.slice(MAX_UNKNOWN_FOR_SCORE + 1).forEach((q) => (a[q.id] = q.options[0].id));
    expect(scoreProperty(a).withheld).toBe(true);
  });
  it("answering everything 'not sure' cannot produce a score", () => {
    const a: Answers = { ...clean }; scored.forEach((q) => (a[q.id] = NOT_SURE));
    const r = scoreProperty(a);
    expect(r.withheld).toBe(true); expect(r.low).toBe(0);
  });
  it("bands are ordered and cover 0 to 100", () => {
    expect(bandFor(100).min).toBe(85); expect(bandFor(84).min).toBe(70); expect(bandFor(55).min).toBe(55); expect(bandFor(0).min).toBe(0);
  });
});

describe("AFH Property Score: flags and burden", () => {
  it("stairs to a bedroom are RED for residents who need help and YELLOW for independent residents", () => {
    const base = { ...clean, ...best(), levels: "yes" };
    expect(scoreProperty({ ...base, residents: "assist" }).flags.find((f) => f.id === "levels")!.level).toBe("red");
    expect(scoreProperty({ ...base, residents: "independent" }).flags.find((f) => f.id === "levels")!.level).toBe("yellow");
    expect(scoreProperty({ ...base, residents: "both" }).flags.find((f) => f.id === "levels")!.level).toBe("yellow");
  });
  it("the resident answer never changes the points", () => {
    const base = { ...clean, ...best(), levels: "yes", entrySteps: "3-4" };
    expect(scoreProperty({ ...base, residents: "assist" }).low).toBe(scoreProperty({ ...base, residents: "independent" }).low);
  });
  it("a flag never caps or alters the score", () => {
    const a = { ...clean, ...best(), residents: "assist", levels: "yes", sewer: "septic", hoa: "yes" };
    const r = scoreProperty(a);
    expect(r.low).toBe(100);
    expect(r.flagsToInvestigate).toBe(3);
    expect(scoreLine(r)).toBe("100 out of 100 · 3 items to investigate");
  });
  it("unknown feasibility answers read as 'needs verification', never green", () => {
    const r = scoreProperty({ licensed: "no", residents: "both", ...best() });
    for (const id of ["sewer", "hoa", "levels", "permits", "access", "systems"]) expect(r.flags.find((f) => f.id === id)!.level, id).toBe("yellow");
  });
  it("a tall entry raises a ramp flag", () => {
    expect(scoreProperty({ ...clean, ...best(), entrySteps: "5+" }).flags.find((f) => f.id === "ramp")!.level).toBe("red");
    expect(scoreProperty({ ...clean, ...best(), entrySteps: "3-4" }).flags.find((f) => f.id === "ramp")!.level).toBe("yellow");
    expect(scoreProperty({ ...clean, ...best(), entrySteps: "1-2" }).flags.find((f) => f.id === "ramp")).toBeUndefined();
  });
  it("many moderate projects add up to a HIGH burden even when no single one is large", () => {
    const a = { ...clean, ...best(), entrySteps: "3-4", interiorSteps: "several", toilets: "1", bathing: "0" };
    const r = scoreProperty(a);
    expect(r.burden.projects).toHaveLength(4);
    expect(r.burden.level).toBe("High");
  });
  it("one small project is a LOW burden", () => {
    expect(scoreProperty({ ...clean, ...best(), shower: "room" }).burden.level).toBe("Low");
  });
});

describe("AFH Property Score: rules added after the Sept 2026 code review", () => {
  it("not knowing about major systems can never raise the score", () => {
    const base = { ...clean, ...best() };
    const known = scoreProperty({ ...base, systems: "no" });
    const unknown = scoreProperty({ ...base, systems: NOT_SURE });
    const bad = scoreProperty({ ...base, systems: "yes" });
    expect(unknown.low).toBe(known.low); expect(bad.low).toBe(known.low);
    expect(QUESTIONS.find((q) => q.id === "systems")!.section).toBe("feasibility");
    expect(bad.flags.find((f) => f.id === "systems")!.level).toBe("yellow");
  });
  it("bathrooms are scored on toilets and bathing rooms, never on 'full bathrooms'", () => {
    expect(QUESTIONS.some((q) => q.id === "mainBaths")).toBe(false);
    expect(QUESTIONS.find((q) => q.id === "toilets")!.prompt).toContain("half bathrooms");
    expect(QUESTIONS.some((q) => q.id === "bathReach")).toBe(false);
  });
  it("one exterior door is not treated as a defect", () => {
    const o = QUESTIONS.find((q) => q.id === "exitDoors")!.options.find((x) => x.id === "1")!;
    expect(o.cure).toBeUndefined(); expect(o.points).toBeGreaterThanOrEqual(4);
  });
  it("living split across levels is RED for residents who need help, YELLOW if unsure, silent if independent", () => {
    const base = { ...clean, ...best(), oneLevel: "no" };
    expect(scoreProperty({ ...base, residents: "assist" }).flags.find((f) => f.id === "oneLevel")!.level).toBe("red");
    expect(scoreProperty({ ...base, residents: "both" }).flags.find((f) => f.id === "oneLevel")!.level).toBe("yellow");
    expect(scoreProperty({ ...base, residents: "independent" }).flags.find((f) => f.id === "oneLevel")).toBeUndefined();
  });
  it("no main-level toilet raises a flag", () => {
    expect(scoreProperty({ ...clean, ...best(), toilets: "0" }).flags.find((f) => f.id === "toilets")!.level).toBe("yellow");
  });
  it("the HOA flag states the law correctly: restrictions on AFHs are unenforceable", () => {
    const d = scoreProperty({ ...clean, ...best(), hoa: "yes" }).flags.find((f) => f.id === "hoa")!.detail;
    expect(d).toContain("RCW 64.38.060"); expect(d).toContain("unenforceable");
  });
  it("no checklist line states a bedroom doorway width, which is still unverified", () => {
    const text = scoreProperty({ ...clean, ...best() }).checklist.map((c) => c.title + " " + c.text).join(" ");
    expect(/27\s*inch/i.test(text)).toBe(false);
    expect(text).toContain("32 inches");
  });
});

describe("AFH Property Score: paths and saved links", () => {
  it("acquisition questions appear only for a home licensed now", () => {
    expect(activeQuestions({ licensed: "no" }).some((q) => q.section === "acquisition")).toBe(false);
    expect(activeQuestions({ licensed: "former" }).some((q) => q.section === "acquisition")).toBe(false);
    expect(activeQuestions({ licensed: "operating" }).filter((q) => q.section === "acquisition")).toHaveLength(8);
    expect(scoreProperty({ ...clean, ...best() }).acquisition).toBeNull();
    expect(scoreProperty({ ...clean, ...best(), licensed: "empty" }).acquisition).not.toBeNull();
  });
  it("licensing and occupancy answers never change the score", () => {
    const base = { ...clean, ...best(), toilets: "1" };
    const a = scoreProperty({ ...base, licensed: "operating", aqFilled: "all", aqHistory: "clean" });
    const b = scoreProperty({ ...base, licensed: "operating", aqFilled: "none", aqHistory: "serious" });
    expect(a.low).toBe(b.low); expect(a.high).toBe(b.high);
  });
  it("answers survive a round trip through a link, including awkward characters", () => {
    const a: Answers = { ...clean, ...best(), mainBedrooms: "6+", entrySteps: "1-2", parking: NOT_SURE, licensed: "operating", aqCapacity: "<5" };
    const viaUrl = new URLSearchParams({ a: encodeAnswers(a) }).toString();
    expect(decodeAnswers(new URLSearchParams(viaUrl).get("a"))).toEqual(a);
  });
  it("a link with junk or outdated values is ignored, not trusted", () => {
    expect(decodeAnswers("mainBedrooms.99~nope.x~residents.unsure~sewer.sewer~garbage")).toEqual({ sewer: "sewer" });
    expect(decodeAnswers("")).toEqual({}); expect(decodeAnswers(null)).toEqual({});
  });
});
