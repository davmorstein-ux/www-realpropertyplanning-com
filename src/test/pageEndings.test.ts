/**
 * The page-ending guard (Oct 21, 2026, David's go): every family guide the
 * homepage counts (src/data/guideLibrary.ts) must end by pointing the reader
 * somewhere. It passes when the page has related reading or a professionals
 * box:
 *   - related reading: an entry in src/data/nextQuestions.ts, or the page (or
 *     the shared layout it uses) renders a related-reading block, or it has a
 *     "Related Resources" / "Continue Learning" / "Related guides" section;
 *   - professionals: an entry in src/data/topicProfessionals.ts.
 * Adding a guide without either fails here. Fix it by adding an entry to
 * nextQuestions.ts (usually the right answer) rather than by adding a marker.
 */
import { describe, expect, it } from "vitest";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { GUIDE_LIBRARY } from "@/data/guideLibrary";
import { nextQuestionsFor } from "@/data/nextQuestions";
import { professionalsForTopic } from "@/data/topicProfessionals";

const app = readFileSync(path.resolve(__dirname, "../App.tsx"), "utf8");

/** The page file a route renders, found through App.tsx. */
const pageFile = (route: string): string | null => {
  const esc = route.replace(/[.*+?^${}()|[\]\\/-]/g, "\\$&");
  const m = app.match(new RegExp(`path="${esc}"\\s*element=\\{\\s*(?:<LanguageRoute[^>]*>\\s*)?<(\\w+)`));
  if (!m) return null;
  const imp =
    app.match(new RegExp(`const ${m[1]} = lazy\\(\\s*\\(\\) => import\\("\\./([^"]+)"\\)`)) ||
    app.match(new RegExp(`import ${m[1]} from "\\./([^"]+)"`));
  if (!imp) return null;
  for (const ext of [".tsx", ".ts", "/index.tsx"]) {
    const f = path.resolve(__dirname, "..", imp[1] + ext);
    if (existsSync(f)) return f;
  }
  return null;
};

/** Shared components and layouts that end a page with related reading. */
/* Not listed on purpose: NextQuestions and the layouts that only render it
   (ExecutorSubPageLayout), because <NextQuestions /> shows
   nothing unless the page has an entry; the entry check above covers them. */
const RELATED_BLOCKS = [
  "NextStepBlock",
  "RelatedServices",
  "RelatedResourcesSection",
  "WhichGuide",
  "flow/FlowBranchPage",
  "EstateSubPageLayout", // ends with "What to read next" (simplified pages: a Next button)
  "HousingOptionDetail",
  "AFHBuyerGuides",
  // Hubs whose page is a list of topic pages (estate hub, professional team,
  // the Helping an Aging Parent start page).
  "RoadmapDropdown",
  "ChoiceFlowPage",
  "SimpleHubChoices", // the Estate and Plan Ahead hubs' photo buttons (Oct 23, 2026)
];
const RELATED_HEADINGS = /Related Resources|Continue Learning|Related guides|Related Guides|More on this|Keep reading/;

const pieces = GUIDE_LIBRARY.flatMap((g) => g.pieces);

describe("every family guide ends by pointing somewhere", () => {
  it("covers the guide library", () => {
    expect(pieces.length).toBeGreaterThanOrEqual(90);
  });

  for (const p of pieces) {
    it(p.href, () => {
      if (nextQuestionsFor(p.href).length > 0 || professionalsForTopic(p.href).length > 0) return;
      const file = pageFile(p.href);
      expect(file, `${p.href}: page file not found through App.tsx`).toBeTruthy();
      const src = readFileSync(file!, "utf8");
      const isBlock = RELATED_BLOCKS.some((b) => file!.endsWith(`components/${b}.tsx`)); // the route renders the block itself
      const usesBlock = isBlock || RELATED_BLOCKS.some((b) => new RegExp(`from "@/components/${b.replace("/", "\\/")}"`).test(src));
      const hasHeading = RELATED_HEADINGS.test(src);
      expect(
        usesBlock || hasHeading,
        `${p.href} has no related reading and no professionals box. Add it to src/data/nextQuestions.ts (and render <NextQuestions /> on the page if it does not use a shared layout).`,
      ).toBe(true);
    });
  }
});
