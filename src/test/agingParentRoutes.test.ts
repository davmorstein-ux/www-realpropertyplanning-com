import { describe, expect, it } from "vitest";
import { AGING_PARENT_LOOKUP } from "@/lib/aging-parent-flow";
import ROUTES from "@/data/agingParentRoutes.json";

/** The prerender's copy of the aging-parent pages must match the flow file.
 *  If this fails: node scripts/build-aging-parent-routes.mjs */
describe("aging-parent prerender routes", () => {
  it("lists every page in the flow, with its current label", () => {
    expect(ROUTES.map((r) => r.path).sort()).toEqual([...AGING_PARENT_LOOKUP.keys()].sort());
    for (const r of ROUTES) {
      const node = AGING_PARENT_LOOKUP.get(r.path)!.node;
      expect(r.title).toBe(`${node.label} | Real Property Planning`);
      expect(r.h1).toBe(node.heroBandTitle || node.label);
    }
  });
});
