import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { DISCLAIMER, loadPages, norm, result, stem, termPattern, words, type Page } from "../data";

/** Weighted keyword score: title and headings count most, then the summary, then body text. */
/** Searchable text of a page in three tiers. */
const tiers = (p: Page) => ({
  title: norm(`${p.h1 ?? ""} ${p.title}`),
  desc: norm(`${p.description} ${p.intro ?? ""} ${p.quickAnswer?.q ?? ""}`),
  body: norm(`${p.quickAnswer?.a ?? ""} ${(p.sections ?? []).join(" ")} ${(p.faq ?? []).map((f) => `${f.q} ${f.a}`).join(" ")}`),
});

/**
 * How much each query word counts: rare words more than common ones (inverse
 * document frequency), so "cost" outweighs "adult family home", which appears
 * on nearly every AFH Club page.
 */
export function termWeights(pool: Page[], terms: string[]): Record<string, number> {
  const w: Record<string, number> = {};
  for (const t of terms) {
    const re = new RegExp(termPattern(t));
    const df = pool.filter((p) => {
      const x = tiers(p);
      return re.test(x.title) || re.test(x.desc) || re.test(x.body);
    }).length;
    w[t] = Math.log((pool.length + 1) / (df + 1)) + 0.2;
  }
  return w;
}

export function scorePage(p: Page, terms: string[], phrase: string, weights: Record<string, number> = {}): number {
  const { title, desc, body } = tiers(p);
  let s = 0;
  for (const raw of terms) {
    const t = termPattern(raw);
    const k = weights[raw] ?? 1;
    if (new RegExp(t).test(title)) s += 6 * k;
    if (new RegExp(t).test(desc)) s += 3 * k;
    // Body text: being there matters; repeating it a lot only a little (long hub pages repeat everything).
    const n = (body.match(new RegExp(t, "g")) ?? []).length;
    if (n) s += (2 + Math.min(n - 1, 3) * 0.5) * k;
  }
  if (phrase.length > 4 && title.includes(phrase)) s += 10;
  else if (phrase.length > 4 && (desc.includes(phrase) || body.includes(phrase))) s += 4;
  // A page that matches every term beats one that repeats a single term.
  const all = `${title} ${desc} ${body}`;
  if (terms.length > 1 && terms.every((t) => new RegExp(termPattern(t)).test(all))) s += 5;
  // Pairs of query words that appear together ("license fee", "memory care") are strong evidence.
  for (let i = 0; i + 1 < terms.length; i++) {
    const pair = `${stem(terms[i])}`;
    const re = new RegExp(`\\b${pair}\\w* ${stem(terms[i + 1])}`);
    const k = Math.min(weights[terms[i]] ?? 1, weights[terms[i + 1]] ?? 1);
    if (re.test(title)) s += 6 * k;
    else if (re.test(desc)) s += 3 * k;
    else if (re.test(body)) s += 2 * k;
  }
  return s;
}

/** The passage that best shows why a page matched: the best sentence plus what follows it, about 400 characters. */
export function snippet(p: Page, terms: string[]): string {
  const texts = [p.quickAnswer?.a, ...(p.sections ?? []), ...(p.faq ?? []).map((f) => `${f.q} ${f.a}`), p.intro, p.description].filter(Boolean) as string[];
  let best = p.description;
  let bestHits = 0;
  for (const t of texts) {
    const sentences = t.split(/(?<=[.?!])\s+/);
    sentences.forEach((sentence, i) => {
      const hits = terms.filter((w) => new RegExp(termPattern(w)).test(norm(sentence))).length;
      if (hits > bestHits) {
        bestHits = hits;
        let out = sentence;
        for (let j = i + 1; j < sentences.length && out.length + sentences[j].length < 400; j++) out += ` ${sentences[j]}`;
        best = out;
      }
    });
  }
  return best.length > 420 ? `${best.slice(0, 417)}...` : best;
}

export default defineTool({
  name: "search_site",
  title: "Search Real Property Planning",
  description:
    "Search Real Property Planning's Washington State guides: probate and estate property, inherited houses, executors and trustees, estate valuation, senior housing and long-term care, and adult family homes (AFH Club: licensing, WABO, DSHS rules, payment rates, buying and selling). Returns the best-matching pages with a relevant excerpt, URL and review date. Follow up with get_page for the full summary, FAQ and sources.",
  inputSchema: {
    query: z.string().min(2).max(200).describe("What to look for, in plain words, e.g. 'can the executor sell the house before probate closes'."),
    area: z
      .enum(["all", "probate_estate_senior", "adult_family_homes"])
      .default("all")
      .describe("Limit to the family/probate side or to AFH Club."),
    limit: z.number().int().min(1).max(10).default(5),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: async ({ query, area, limit }) => {
    const pages = await loadPages();
    const terms = words(query);
    const phrase = norm(query);
    const pool = pages.filter((p) => area === "all" || (area === "adult_family_homes" ? p.area === "afh" : p.area === "rpp"));
    const weights = termWeights(pool, terms);
    const ranked = pool
      .map((p) => ({ p, s: scorePage(p, terms, phrase, weights) }))
      .filter((x) => x.s > 0)
      .sort((a, b) => b.s - a.s || a.p.path.length - b.p.path.length)
      .slice(0, limit);
    return result({
      query,
      results: ranked.map(({ p }) => ({
        title: p.h1 || p.title,
        url: p.url,
        path: p.path,
        summary: p.description,
        excerpt: snippet(p, terms),
        ...(p.reviewed ? { reviewed: p.reviewed } : {}),
      })),
      ...(ranked.length === 0 ? { tip: "No page matched. Try fewer or simpler words, or start from https://realpropertyplanning.com/guides-and-resources" } : {}),
      note: DISCLAIMER,
    });
  },
});
