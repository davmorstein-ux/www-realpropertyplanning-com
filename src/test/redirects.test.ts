import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { REDIRECTS } from "@/data/redirects";

const app = readFileSync("src/App.tsx", "utf8");
const pages = new Set([...app.matchAll(/<Route\s+path=\{?"([^"]+)"/g)].map((m) => m[1]));
const dynamicPages = [...pages].filter((p) => p.includes(":")).map((d) => new RegExp("^" + d.replace(/:[^/]+/g, "[^/]+") + "$"));
const isPage = (href: string) => pages.has(href) || dynamicPages.some((rx) => rx.test(href));
const froms = new Set(REDIRECTS.map((r) => r.from));
const vite = readFileSync("vite.config.ts", "utf8");

describe("site redirects (src/data/redirects.ts)", () => {
  it("every redirect lands on a real page, never on another redirect", () => {
    for (const r of REDIRECTS) {
      expect(froms.has(r.to), `${r.from} -> ${r.to} is a chain`).toBe(false);
      expect(isPage(r.to), `${r.from} -> ${r.to}: target is not a page`).toBe(true);
    }
  });

  it("no address is both a page and a redirect", () => {
    for (const r of REDIRECTS) expect(pages.has(r.from), `${r.from} is also a page route`).toBe(false);
  });

  it("each address is redirected once", () => {
    expect(froms.size).toBe(REDIRECTS.length);
  });

  it("App.tsx has no redirects written outside the list", () => {
    expect(/element=\{<Navigate\s+to="/.test(app)).toBe(false);
    expect(app).toContain("REDIRECTS.map");
  });

  it("no redirect address gets prerendered metadata (a real file there can shadow the 301)", () => {
    const metaKeys = new Set([...vite.slice(vite.indexOf("const ROUTE_METADATA")).matchAll(/\n  "(\/[^"]*)": \{/g)].map((m) => m[1]));
    const clash = [...froms].filter((f) => metaKeys.has(f));
    expect(clash, clash.join(", ")).toEqual([]);
  });

  it("each county has exactly one address", () => {
    for (const m of app.matchAll(/path="\/counties\/([a-z-]+)"/g)) expect(m[1], `/counties/${m[1]} is a page again`).toBe("__none__");
  });
});
