import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, resolve } from "node:path";
import { describe, expect, it } from "vitest";

/* The owner's old appraisal-firm mailbox has been unused for years and must
   never appear on the site or in routing (owner, Sept 29, 2026). The address
   is assembled here so this file does not contain it either. */
const DEAD = ["dave", "steinappraisal.com"].join("@");
const root = resolve(__dirname, "../..");
const SCAN = ["src", "public", "supabase", "index.html", "vite.config.ts", "AGENTS.md", "README.md"];
const TEXT = /\.(tsx?|jsx?|mjs|json|html|txt|md|xml|css)$/;

function* files(p: string): Generator<string> {
  const st = statSync(p);
  if (st.isDirectory()) {
    for (const f of readdirSync(p)) if (f !== "node_modules") yield* files(join(p, f));
  } else if (TEXT.test(p)) yield p;
}

describe("dead email address", () => {
  it("appears nowhere in the site's source", () => {
    const hits: string[] = [];
    for (const s of SCAN) for (const f of files(join(root, s))) if (readFileSync(f, "utf8").toLowerCase().includes(DEAD)) hits.push(f);
    expect(hits).toEqual([]);
  });
});
