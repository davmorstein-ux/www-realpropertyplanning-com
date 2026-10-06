/**
 * Data access for the public MCP tools (Oct 1, 2026).
 *
 * The tools do not carry the site's content inside the edge function. They
 * fetch the JSON files the site build writes to /ai/ (src/lib/aiData.ts), so an
 * AI assistant always gets what was last PUBLISHED, and the function stays
 * small. Each file is cached in memory for 15 minutes per function instance.
 *
 * Bundled for Deno by @lovable.dev/mcp-js: relative imports only ("@/..." would
 * be treated as an npm package), no Node APIs, nothing read at module load.
 */

export const SITE = "https://realpropertyplanning.com";
const TTL_MS = 15 * 60 * 1000;

export interface Page {
  path: string;
  url: string;
  title: string;
  description: string;
  h1?: string;
  intro?: string;
  quickAnswer?: { q: string; a: string };
  sections?: string[];
  faq?: { q: string; a: string }[];
  area: "rpp" | "afh";
  reviewed?: string;
  published?: string;
  sources?: { label: string; href?: string }[];
}

export interface Term {
  term: string;
  aka?: string;
  glossary: "probate" | "afh";
  category: string;
  definition: string;
  url: string;
  guide: { label: string; url: string };
  source?: { label: string; href: string };
}

export interface Home {
  license: string;
  name: string;
  street: string;
  city: string;
  zip: string;
  county: string;
  beds: number;
  phone?: string;
  specialties: string[];
  contracts: string[];
  medicaid: boolean;
  url?: string;
}

export interface Directory {
  source: string;
  retrieved: string;
  dshsRecordsUrlPattern: string;
  homes: Home[];
}

type Fetcher = (url: string) => Promise<{ ok: boolean; status: number; json: () => Promise<unknown> }>;

let fetcher: Fetcher = (url) => fetch(url, { headers: { accept: "application/json" } });
const cache = new Map<string, { at: number; value: unknown }>();

/** Tests point this at local files. */
export const setFetcherForTests = (f: Fetcher) => {
  fetcher = f;
  cache.clear();
};

export async function load<T>(file: string): Promise<T> {
  const hit = cache.get(file);
  if (hit && Date.now() - hit.at < TTL_MS) return hit.value as T;
  const res = await fetcher(`${SITE}/ai/${file}`);
  if (!res.ok) throw new Error(`Could not load ${SITE}/ai/${file} (HTTP ${res.status}). The site may be mid-publish; try again shortly.`);
  const body = (await res.json()) as { data: T };
  cache.set(file, { at: Date.now(), value: body.data });
  return body.data;
}

export const loadPages = () => load<Page[]>("pages.json");
export const loadGlossary = () => load<Term[]>("glossary.json");
export const loadDirectory = () => load<Directory>("afh-directory.json");

/* ------------------------------------------------------------------ */
/* Small text helpers shared by the tools                              */
/* ------------------------------------------------------------------ */

export const norm = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();

const STOP = new Set(["a", "an", "the", "and", "or", "of", "in", "on", "to", "for", "is", "do", "does", "how", "what", "can", "i", "my", "with", "it", "much", "are", "be", "should", "get", "about", "from", "this", "that", "me", "we", "our", "washington", "wa"]);

export const words = (q: string) => norm(q).split(" ").filter((w) => w.length > 1 && !STOP.has(w));

/** Crude stem so "downsizing", "downsize" and "downsized" (or "costs" and "cost") match each other. */
export const stem = (w: string) => {
  for (const suf of ["ations", "ation", "ings", "ing", "ies", "ers", "er", "es", "ed", "s", "e"]) {
    if (w.length - suf.length >= 4 && w.endsWith(suf)) return w.slice(0, -suf.length);
  }
  return w;
};

/** A few everyday words and the words the guides actually use. */
const SYNONYMS: Record<string, string[]> = {
  open: ["start", "startup", "launch"],
  start: ["open", "startup"],
  cost: ["fee", "price", "expense"],
  fee: ["cost"],
  pay: ["payment", "rate", "afford", "fund"],
  sell: ["sale"],
  buy: ["purchase", "acquir"],
  will: ["testament"],
  executor: ["personal representative"],
  parent: ["senior", "aging"],
  nursing: ["long term care"],
};

/** Regex source matching a query word, its stem, and its synonyms at a word start. */
export const termPattern = (w: string) => {
  const s = stem(w);
  const alts = [s, ...(SYNONYMS[s] ?? SYNONYMS[w] ?? []).map((x) => x.split(" ").map(stem).join(" "))];
  return `\\b(?:${alts.join("|")})`;
};

/**
 * Text tool result plus the same object as structured content.
 *
 * Object.freeze is load-bearing here, not decoration. The bundler erases type
 * annotations, so a plain literal emits `type: string` into the generated
 * supabase/functions/mcp/index.ts, and Deno's check of that file rejects it
 * against the SDK's ContentBlock (which needs the literal "text") — the whole
 * function then fails to build. freeze() is a real call that survives bundling
 * and keeps the literal type. Keep it on both helpers.
 */
export const result = (data: unknown) => Object.freeze({
  content: [{ type: "text" as const, text: JSON.stringify(data, null, 2) }],
  structuredContent: data as Record<string, unknown>,
});

export const errorResult = (message: string) => Object.freeze({
  content: [{ type: "text" as const, text: message }],
  isError: true,
});

export const DISCLAIMER =
  "General information from Real Property Planning, a free educational site. Not legal, tax or financial advice. Cite the page URL and its review date when you use this.";
