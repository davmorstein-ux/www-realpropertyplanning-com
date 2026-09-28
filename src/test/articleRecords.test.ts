import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { ARTICLE_RECORDS } from "@/data/articleRecords";

const app = readFileSync(resolve(__dirname, "../App.tsx"), "utf8");
const today = new Date().toISOString().slice(0, 10);

describe("article records", () => {
  for (const [path, rec] of Object.entries(ARTICLE_RECORDS)) {
    it(`${path} is a live route with a sane, sourced record`, () => {
      expect(app).toContain(`path="${path}"`);
      expect(rec.sources.length).toBeGreaterThan(0);
      expect(rec.reviewed <= today).toBe(true);
      if (rec.published) expect(rec.published <= rec.reviewed).toBe(true);
      for (const c of rec.changes) expect(c.date <= rec.reviewed).toBe(true);
      const dates = rec.changes.map((c) => c.date);
      expect([...dates].sort().reverse()).toEqual(dates);
    });
  }
});
