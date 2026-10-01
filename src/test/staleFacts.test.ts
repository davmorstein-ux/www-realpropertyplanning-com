import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, resolve } from "node:path";
import { describe, expect, it } from "vitest";

/* Figures and phrases corrected against primary sources on Sept 30, 2026.
   If one of these comes back (an old copy pasted in, another assistant
   working from stale knowledge), this fails. See AGENTS.md §8. */
const STALE: { re: RegExp; why: string }[] = [
  { re: /2\.193 million|\$2,193,000/, why: "WA estate tax exclusion is $3,000,000 from July 1, 2026 (DOR)" },
  { re: /\$204 per day|\$209\.50 per day/, why: "Medicare SNF days 21-100 coinsurance is $217/day in 2026" },
  { re: /\$2,829/, why: "2026 special income level is $2,982" },
  { re: /WAC 388-551/, why: "Apple Health hospice is chapter 182-551 WAC (HCA)" },
  { re: /Licensed Broker & Certified Appraiser/, why: "the hub holds no licenses" },
  { re: /Federal rules now require[^.]{0,80}3\.48 hours/, why: "the federal 3.48 HPRD minimum was repealed Feb 2, 2026" },
  { re: /executor named in the will is the only person authorized/i, why: "authority comes only from letters testamentary" },
];

const root = resolve(__dirname, "..", "..");
const files: string[] = [join(root, "vite.config.ts"), join(root, "src/i18n/locales/en.json")];
const walk = (dir: string) => {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) {
      if (name !== "test" && name !== "afh") walk(p);
    } else if (/\.(tsx?|json)$/.test(name)) files.push(p);
  }
};
walk(join(root, "src"));

describe("stale facts stay corrected", () => {
  for (const { re, why } of STALE) {
    it(`no "${re.source}" (${why})`, () => {
      const hits = files.filter((f) => re.test(readFileSync(f, "utf8"))).map((f) => f.replace(root + "/", ""));
      expect(hits, why).toEqual([]);
    });
  }
});
