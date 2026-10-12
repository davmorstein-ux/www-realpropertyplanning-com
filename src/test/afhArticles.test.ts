import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { AFH_ARTICLES } from "@/data/afhArticles";
import { articleRecordFor } from "@/data/articleRecords";
import { REDIRECTS } from "@/data/redirects";

/**
 * AFH Club articles (src/data/afhArticles.ts). The facts were checked against their
 * primary sources before building; these checks keep the page honest as it is edited.
 */
const app = readFileSync(resolve(__dirname, "../App.tsx"), "utf8");
const sitemap = readFileSync(resolve(__dirname, "../../public/sitemap.xml"), "utf8");
const redirected = new Set(REDIRECTS.map((r) => r.from));
const allText = (a: (typeof AFH_ARTICLES)[number]) =>
  [a.title, a.dek, a.shortAnswer, ...a.sections.flatMap((s) => [s.heading, s.body]), a.next ?? "", ...a.faqs.flatMap((f) => [f.question, f.answer, ...(f.alts ?? [])])].join("\n");

describe("AFH Club articles", () => {
  it("each article has a route, a sitemap entry and a source record", () => {
    for (const a of AFH_ARTICLES) {
      expect(app.includes(`path="${a.path}"`), a.path).toBe(true);
      expect(sitemap.includes(`https://realpropertyplanning.com${a.path}<`), a.path).toBe(true);
      const rec = articleRecordFor(a.path);
      expect(rec?.sources.length ?? 0, a.path).toBeGreaterThan(5);
      expect(rec?.reviewed).toBe(a.reviewed);
    }
  });

  it("no unresolved draft markers, endorsements or sales language", () => {
    for (const a of AFH_ARTICLES) {
      const t = allText(a);
      expect(t, a.slug).not.toMatch(/\[CONFIRM|TODO|TBD/);
      expect(t, a.slug).not.toMatch(/\b(vetted|trusted|we recommend)\b/i);
    }
  });

  it("internal links are live AFH Club routes, not redirects", () => {
    for (const a of AFH_ARTICLES) {
      const links = [...allText(a).matchAll(/\]\((\/[^)\s#]*)/g)].map((m) => m[1]);
      expect(links.length, a.slug).toBeGreaterThan(0);
      for (const p of links) {
        expect(p.startsWith("/afh-club/"), `${a.slug} links to ${p}`).toBe(true);
        expect(app.includes(`path="${p}"`), `${a.slug} links to ${p}, not a route`).toBe(true);
        expect(redirected.has(p), `${a.slug} links to ${p}, which redirects`).toBe(false);
      }
    }
  });

  it("does not publish daily rates (the payment field guide carries them)", () => {
    for (const a of AFH_ARTICLES) expect(allText(a), a.slug).not.toMatch(/\$\d+(\.\d\d)?\s*(a|per)\s*day/i);
  });
});
