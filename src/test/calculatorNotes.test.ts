import { describe, it, expect } from "vitest";
import { AFH_CALCULATORS, HOME_CALCULATORS, FAMILY_CALCULATOR_HREFS } from "@/data/calculatorIndex";
import { calculatorNoteForRoute, FOUNDER_SIGNATURE } from "@/data/calculatorNotes";
import { HUB_FOUNDER_NAME, FEATURED_BROKER } from "@/data/featuredProfessionals";

/** Every calculator listed on /calculators carries a founder's "Why I built this" note. */
describe("calculator founder notes", () => {
  const routes = [...AFH_CALCULATORS, ...HOME_CALCULATORS].map((c) => c.href).concat(FAMILY_CALCULATOR_HREFS);

  it.each(routes)("%s has a note of two to five sentences", (route) => {
    const note = calculatorNoteForRoute(route);
    expect(note, `no note for ${route}`).toBeTruthy();
    const sentences = (note as string).split(/[.?!](?:\s|$)/).filter((s) => s.trim()).length;
    expect(sentences).toBeGreaterThanOrEqual(2);
    expect(sentences).toBeLessThanOrEqual(5);
  });

  it("is signed by the founder, not by the featured-broker record", () => {
    expect(FOUNDER_SIGNATURE.startsWith(HUB_FOUNDER_NAME)).toBe(true);
    expect(FOUNDER_SIGNATURE).not.toContain(FEATURED_BROKER.brokerage);
  });
});
