/**
 * "Ask a question" matching (Oct 8, 2026).
 *
 * Answers come ONLY from words already on the site: each page's short answer,
 * its FAQs, and the two glossaries, as published in /ai/pages.json and
 * /ai/glossary.json (built from the same data the pages use; see aiData.ts).
 * Nothing is generated, so nothing can be made up. When no answer covers the
 * question well enough, the box says so and offers the closest pages instead.
 *
 * The page ranking mirrors scorePage() in src/lib/mcp/tools/search-site.ts
 * (the public AI tool's search). It is copied, not imported, because importing
 * that file would pull the MCP server's libraries into the site's bundle and
 * changing it regenerates the deployed MCP function. Keep the two in step.
 *
 * Pure functions, no React, no fetch: AskBox.tsx loads the JSON and calls these;
 * src/test/askSearch.test.ts runs them against the built data.
 */
import { norm, stem, termPattern, words, type Page, type Term } from "@/lib/mcp/data";

export interface AnswerCard {
  kind: "qa" | "term";
  q: string;
  a: string;
  path: string;
  pageTitle: string;
  area: "rpp" | "afh";
}

export interface AskResult {
  /** The best short answer, or null when nothing covers the question well enough. */
  answer: AnswerCard | null;
  /** Up to three pages to read next (the answer's own page first when there is one). */
  more: { path: string; title: string; description: string }[];
  /** Fraction of the question's important words the answer covers (0–1), for tuning. */
  coverage: number;
}

const pathOf = (url: string) => {
  try {
    return new URL(url, "https://realpropertyplanning.com").pathname.replace(/\/+$/, "") || "/";
  } catch {
    return url;
  }
};

export function buildCards(pages: Page[], terms: Term[]): AnswerCard[] {
  const cards: AnswerCard[] = [];
  for (const p of pages) {
    const pageTitle = p.h1 || p.title.replace(/\s*\|.*$/, "");
    if (p.quickAnswer) cards.push({ kind: "qa", q: p.quickAnswer.q, a: p.quickAnswer.a, path: p.path, pageTitle, area: p.area });
    for (const f of p.faq ?? []) cards.push({ kind: "qa", q: f.q, a: f.a, path: p.path, pageTitle, area: p.area });
  }
  for (const t of terms) {
    cards.push({
      kind: "term",
      q: `What does “${t.term}”${t.aka ? ` (${t.aka})` : ""} mean?`,
      a: t.definition,
      path: pathOf(t.url).replace(/#.*$/, "") + (t.url.includes("#") ? t.url.slice(t.url.indexOf("#")) : ""),
      pageTitle: t.glossary === "afh" ? "AFH Glossary" : "Probate & Estate Glossary",
      area: t.glossary === "afh" ? "afh" : "rpp",
    });
  }
  // The same question often appears on two pages (a guide and its hub); keep the first.
  const seen = new Set<string>();
  return cards.filter((c) => {
    const k = norm(c.q);
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

const has = (re: RegExp, s: string) => re.test(s);

/** Rare words count more than common ones ("fee" beats "adult family home"). */
function weightsFor(texts: string[], qTerms: string[]): Record<string, number> {
  const w: Record<string, number> = {};
  for (const t of qTerms) {
    const re = new RegExp(termPattern(t));
    const df = texts.filter((x) => re.test(x)).length;
    w[t] = Math.log((texts.length + 1) / (df + 1)) + 0.2;
  }
  return w;
}

function scoreCard(c: AnswerCard, qTerms: string[], w: Record<string, number>): { s: number; coverage: number } {
  const q = norm(c.q);
  const a = norm(c.a);
  const title = norm(c.pageTitle);
  let s = 0;
  let covered = 0;
  let total = 0;
  for (const t of qTerms) {
    const re = new RegExp(termPattern(t));
    const k = w[t] ?? 1;
    total += k;
    const inQ = has(re, q);
    const inA = has(re, a);
    const inT = has(re, title);
    if (inQ) s += 5 * k;
    if (inA) s += 2 * k;
    if (inT) s += 1 * k;
    if (inQ || inA) covered += k;
  }
  // Two query words side by side in the card's question ("license fee") are strong evidence.
  for (let i = 0; i + 1 < qTerms.length; i++) {
    const re = new RegExp(`\\b${stem(qTerms[i])}\\w* ${stem(qTerms[i + 1])}`);
    if (re.test(q)) s += 4 * Math.min(w[qTerms[i]] ?? 1, w[qTerms[i + 1]] ?? 1);
  }
  return { s, coverage: total ? covered / total : 0 };
}

/* ---- page ranking: mirrors src/lib/mcp/tools/search-site.ts ---- */
const tiers = (p: Page) => ({
  title: norm(`${p.h1 ?? ""} ${p.title}`),
  desc: norm(`${p.description} ${p.intro ?? ""} ${p.quickAnswer?.q ?? ""}`),
  body: norm(`${p.quickAnswer?.a ?? ""} ${(p.sections ?? []).join(" ")} ${(p.faq ?? []).map((f) => `${f.q} ${f.a}`).join(" ")}`),
});

function scorePage(p: Page, terms: string[], phrase: string, weights: Record<string, number>): number {
  const { title, desc, body } = tiers(p);
  let s = 0;
  for (const raw of terms) {
    const t = termPattern(raw);
    const k = weights[raw] ?? 1;
    if (new RegExp(t).test(title)) s += 6 * k;
    if (new RegExp(t).test(desc)) s += 3 * k;
    const n = (body.match(new RegExp(t, "g")) ?? []).length;
    if (n) s += (2 + Math.min(n - 1, 3) * 0.5) * k;
  }
  if (phrase.length > 4 && title.includes(phrase)) s += 10;
  else if (phrase.length > 4 && (desc.includes(phrase) || body.includes(phrase))) s += 4;
  const all = `${title} ${desc} ${body}`;
  if (terms.length > 1 && terms.every((t) => new RegExp(termPattern(t)).test(all))) s += 5;
  for (let i = 0; i + 1 < terms.length; i++) {
    const re = new RegExp(`\\b${stem(terms[i])}\\w* ${stem(terms[i + 1])}`);
    const k = Math.min(weights[terms[i]] ?? 1, weights[terms[i + 1]] ?? 1);
    if (re.test(title)) s += 6 * k;
    else if (re.test(desc)) s += 3 * k;
    else if (re.test(body)) s += 2 * k;
  }
  return s;
}

/** Below these, the box says it has no direct answer rather than showing a weak one. */
export const MIN_COVERAGE = 0.7;
export const MIN_SCORE = 6;

/** Everyday words that say nothing about the topic (on top of the search's own stop list). */
const FILLER = new Set(["done", "have", "has", "had", "many", "need", "needs", "know", "make", "way", "will", "would", "could", "there", "their", "they", "when", "where", "who", "which", "why", "if", "any", "some", "all", "still", "just", "really", "please", "thanks", "thank", "tell", "want", "like", "go", "going", "take", "takes", "mom", "dad", "mother", "father", "her", "his", "she", "he", "you", "your", "us", "am", "was", "were", "been", "being", "after", "best", "good", "new", "find"]);

export function ask(question: string, pages: Page[], cards: AnswerCard[], area: "all" | "rpp" | "afh" = "all"): AskResult {
  const qTerms = words(question).filter((t) => !FILLER.has(t));
  if (qTerms.length === 0) return { answer: null, more: [], coverage: 0 };
  const phrase = norm(question);

  const cardPool = area === "all" ? cards : cards.filter((c) => c.area === area);
  const w = weightsFor(cardPool.map((c) => norm(`${c.q} ${c.a}`)), qTerms);
  // The question's most distinctive word must appear in the matched QUESTION, and its
  // two most distinctive words somewhere in the card: otherwise "how many beds can an
  // AFH have" matches "how many AFHs are there" on the common words alone.
  const rawWords = norm(question).split(" ").filter((x) => x.length > 2);
  const byWeight = [...qTerms].sort((x, y) => (w[y] ?? 0) - (w[x] ?? 0));
  const keyRe = new RegExp(termPattern(byWeight[0]));
  const topTwo = byWeight.slice(0, 2).map((t) => new RegExp(termPattern(t)));
  let best: { c: AnswerCard; s: number; coverage: number } | null = null;
  for (const c of cardPool) {
    const qn = norm(c.q);
    const all = `${qn} ${norm(c.a)}`;
    if (!keyRe.test(qn) || !topTwo.every((re) => re.test(all))) continue;
    const r = scoreCard(c, qTerms, w);
    // Wording close to the visitor's own question wins ties between neighbouring FAQs.
    const cardWords = new Set(norm(c.q).split(" ").filter((x) => x.length > 2));
    const overlap = rawWords.filter((x) => cardWords.has(x)).length / Math.max(rawWords.length, cardWords.size, 1);
    r.s += 12 * overlap;
    if (!best || r.s > best.s || (r.s === best.s && c.a.length < best.c.a.length)) best = { c, ...r };
  }
  const answer = best && best.s >= MIN_SCORE && best.coverage >= MIN_COVERAGE ? best.c : null;

  const pagePool = area === "all" ? pages : pages.filter((p) => p.area === area);
  const pw: Record<string, number> = {};
  for (const t of qTerms) {
    const re = new RegExp(termPattern(t));
    const df = pagePool.filter((p) => {
      const x = tiers(p);
      return re.test(x.title) || re.test(x.desc) || re.test(x.body);
    }).length;
    pw[t] = Math.log((pagePool.length + 1) / (df + 1)) + 0.2;
  }
  const ranked = pagePool
    .map((p) => ({ p, s: scorePage(p, qTerms, phrase, pw) }))
    .filter((x) => x.s > 0)
    .sort((a, b) => b.s - a.s || a.p.path.length - b.p.path.length);

  const more: AskResult["more"] = [];
  const add = (p: Page) => {
    if (more.length < 3 && !more.some((m) => m.path === p.path)) {
      more.push({ path: p.path, title: p.h1 || p.title.replace(/\s*\|.*$/, ""), description: p.description });
    }
  };
  if (answer) {
    const own = pages.find((p) => p.path === answer.path.replace(/#.*$/, ""));
    if (own) add(own);
  }
  for (const { p } of ranked) add(p);

  return { answer, more, coverage: best?.coverage ?? 0 };
}
