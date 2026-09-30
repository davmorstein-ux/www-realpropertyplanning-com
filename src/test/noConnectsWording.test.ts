import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, resolve } from "node:path";
import { describe, expect, it } from "vitest";

/* Owner's decision (second outside audit; done Sept 30, 2026): the hub does not
   "connect" people with professionals. It explains roles and lists independent
   professionals whom visitors contact directly. The featured broker speaking for
   himself (e.g. out-of-state referrals) is fine; the hub claiming to connect is not.
   Old, unrouted homepage versions are skipped. */
const ROOT = resolve(__dirname, "../..");
const SKIP = /RPPHome\.tsx$|RPPHomeV2\.tsx$|HomepageFinal\.tsx$|HomepageNew\.tsx$|HomepageOrientation(New)?\.tsx$|HomepageTeamSection\.tsx$|StatewideSupport\.tsx$|ServiceAreasSection\.tsx$|\/test\//;
const BAD = /(Real Property Planning|the hub|AFH Club|Real Property Planning network)\s+(can\s+(help\s+)?)?(connects?|introduce)\b/i;

const files = (dir: string): string[] =>
  readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? files(p) : /\.(tsx?|json)$/.test(f) ? [p] : [];
  });

describe("no 'Real Property Planning connects you with…' wording", () => {
  it("appears in no live page, component, data file, English strings or prerender text", () => {
    const targets = [...files(join(ROOT, "src")).filter((f) => !SKIP.test(f) && (!f.includes("/i18n/locales/") || f.endsWith("en.json"))), join(ROOT, "vite.config.ts")];
    const hits: string[] = [];
    for (const f of targets) {
      readFileSync(f, "utf8").split("\n").forEach((line, i) => {
        if (/^\s*(\*|\/\/|\/\*)/.test(line)) return; // code comments
        if (BAD.test(line)) hits.push(`${f.replace(ROOT + "/", "")}:${i + 1}: ${line.trim().slice(0, 120)}`);
      });
    }
    expect(hits).toEqual([]);
  });
});
