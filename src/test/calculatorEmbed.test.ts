import { describe, it, expect } from "vitest";
import { CARE_CALCULATORS } from "@/lib/careCalculators";
import { EMBED_BASE, SITE_ORIGIN, embedOptions, embedPath, embedSnippet, creditPath } from "@/lib/calculatorEmbed";

describe("embeddable cost of care calculator", () => {
  it("offers the chooser plus one version per care type", () => {
    expect(embedOptions().map((o) => o.value)).toEqual(["all", ...CARE_CALCULATORS.map((o) => o.slug)]);
  });

  it("points every embed at a real calculator path and credit page", () => {
    for (const o of embedOptions()) {
      const path = embedPath(o.value);
      expect(path.startsWith(EMBED_BASE)).toBe(true);
      const credit = creditPath(o.value);
      expect(credit === "/cost-of-care-calculator" || CARE_CALCULATORS.some((c) => credit === `/cost-of-care-calculator/${c.slug}`)).toBe(true);
    }
  });

  it("puts the credit link outside the frame and checks the message origin", () => {
    const s = embedSnippet("adult-family-home");
    const [frame, credit, script] = s.split("\n");
    expect(frame).toContain(`src="${SITE_ORIGIN}/embed/cost-of-care/adult-family-home"`);
    expect(frame).toMatch(/title="[^"]+"/);
    expect(credit).toContain(`href="${SITE_ORIGIN}/cost-of-care-calculator/adult-family-home"`);
    expect(script).toContain(`e.origin!=="${SITE_ORIGIN}"`);
  });
});
