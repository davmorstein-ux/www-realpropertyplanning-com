import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import vm from "node:vm";

/**
 * GA4 runs only on the production host and only for browsers that do not
 * declare automation (index.html, "ga-gate" block; GA4 audit, Nov 2, 2026).
 * This runs the real inline script from index.html in a sandbox.
 */
const html = readFileSync("index.html", "utf8");
const block = html.slice(html.indexOf("<!-- ga-gate:start -->"), html.indexOf("<!-- ga-gate:end -->"));
const script = block.slice(block.indexOf("<script>") + "<script>".length, block.indexOf("</script>"));

const run = (hostname: string, opts: { ua?: string; webdriver?: boolean } = {}) => {
  const listeners: string[] = [];
  const window: Record<string, unknown> = {
    addEventListener: (name: string) => listeners.push(name),
  };
  const ctx = {
    window,
    location: { hostname },
    navigator: { userAgent: opts.ua ?? "Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 Version/18.0 Mobile Safari/604.1", webdriver: opts.webdriver ?? false },
    document: {},
    Date,
  } as Record<string, unknown>;
  // Browser globals: window properties are globals and vice versa.
  window.window = window;
  vm.createContext(ctx);
  vm.runInContext(`var dataLayer; ${script.replace("window.dataLayer = window.dataLayer || [];", "window.dataLayer = window.dataLayer || []; dataLayer = window.dataLayer;")}; window.gtag = gtag;`, ctx);
  const dataLayer = (window.dataLayer as unknown[][]) ?? [];
  const configs = dataLayer.map((args) => Array.from(args)).filter((args) => args[0] === "config");
  return { configs, listeners, gtag: window.gtag as unknown };
};

describe("GA4 gate in index.html", () => {
  it("the block exists and keeps the production Measurement ID", () => {
    expect(script).toContain("G-0X2GPKCW65");
    expect((html.match(/G-0X2GPKCW65/g) || []).length).toBe(2); // config + loader, nowhere else
  });

  it("starts GA on the production host for an ordinary browser", () => {
    const r = run("realpropertyplanning.com");
    expect(r.configs).toEqual([["config", "G-0X2GPKCW65"]]);
    expect(r.listeners).toEqual(["load"]);
  });

  it("stays silent on preview and copy hosts", () => {
    for (const host of [
      "www-realpropertyplanning-com.lovable.app",
      "id-preview--abc.lovable.app",
      "abc.lovableproject.com",
      "www-realpropertyplanning-com.pages.dev",
      "realpropertyplanning.davmorstein.workers.dev",
      "www.realpropertyplanning.com",
      "localhost",
      "127.0.0.1",
    ]) {
      const r = run(host);
      expect(r.configs, host).toEqual([]);
      expect(r.listeners, host).toEqual([]);
    }
  });

  it("stays silent for browsers that declare automation", () => {
    expect(run("realpropertyplanning.com", { webdriver: true }).configs).toEqual([]);
    expect(run("realpropertyplanning.com", { ua: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 HeadlessChrome/140.0 Safari/537.36" }).configs).toEqual([]);
    expect(run("realpropertyplanning.com", { ua: "Mozilla/5.0 (Linux; Android 11; moto g power (2022)) Chrome/140.0 Mobile Safari/537.36 Chrome-Lighthouse" }).configs).toEqual([]);
  });

  it("still tracks ordinary desktop and Android browsers", () => {
    for (const ua of [
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0 Safari/537.36",
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Safari/605.1.15",
      "Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0 Mobile Safari/537.36",
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:133.0) Gecko/20100101 Firefox/133.0",
    ]) {
      expect(run("realpropertyplanning.com", { ua }).configs, ua).toHaveLength(1);
    }
  });

  it("always defines gtag so custom events never throw", () => {
    expect(typeof run("localhost").gtag).toBe("function");
  });
});
