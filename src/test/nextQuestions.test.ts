import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { NEXT_QUESTIONS, nextQuestionsFor } from "@/data/nextQuestions";
import { PROBATE_GLOSSARY } from "@/data/probateGlossary";

const app = readFileSync(resolve(__dirname, "../App.tsx"), "utf8");
const flowRoutes = readFileSync(resolve(__dirname, "../components/ChoiceFlowPage.tsx"), "utf8");
const isRoute = (path: string) =>
  app.includes(`path="${path}"`) || (path.startsWith("/helping-an-aging-parent/") && app.includes('path="/helping-an-aging-parent/*"'));

describe("decision-path links (src/data/nextQuestions.ts)", () => {
  for (const [page, questions] of Object.entries(NEXT_QUESTIONS)) {
    it(`${page}: page and every link are real routes`, () => {
      expect(isRoute(page), `${page} is not a route`).toBe(true);
      expect(questions.length).toBeGreaterThan(0);
      for (const q of questions) {
        const [path, anchor] = q.href.split("#");
        expect(isRoute(path), `${page} links to ${q.href}, which is not a route`).toBe(true);
        if (path === "/probate-glossary" && anchor) {
          expect(PROBATE_GLOSSARY.some((t) => t.id === anchor), `glossary has no #${anchor}`).toBe(true);
        }
        expect(q.title.trim().endsWith("?"), `"${q.title}" should be phrased as a question`).toBe(true);
      }
    });
  }

  it("never links a page to itself and tolerates a trailing slash", () => {
    for (const page of Object.keys(NEXT_QUESTIONS)) {
      expect(nextQuestionsFor(page).some((q) => q.href.split("#")[0] === page)).toBe(false);
      expect(nextQuestionsFor(`${page}/`)).toEqual(nextQuestionsFor(page));
    }
  });

  it("is rendered by the shared flow page", () => {
    expect(flowRoutes).toContain("<NextQuestions />");
  });
});
