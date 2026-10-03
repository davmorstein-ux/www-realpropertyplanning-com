/**
 * Builds public/downloads/afh-club-handbook.pdf from afh-club-handbook.html.
 *
 *   node docs/handbook/build-pdf.mjs [path-to-@fontsource/dm-sans]
 *
 * Needs Playwright (Chromium). DM Sans is embedded from @fontsource/dm-sans
 * (npm i @fontsource/dm-sans in any folder and pass its path) so the PDF does
 * not depend on Google Fonts.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "../..");
const fontDir = process.argv[2] || path.join(root, "node_modules/@fontsource/dm-sans");
const pw = process.env.PLAYWRIGHT_PATH || "playwright";
const { chromium } = await import(pw.endsWith(".mjs") ? pathToFileURL(pw).href : pw);

const faces = [400, 500, 600, 700]
  .map((w) => {
    const f = path.join(fontDir, "files", `dm-sans-latin-${w}-normal.woff2`);
    if (!fs.existsSync(f)) throw new Error(`DM Sans ${w} not found at ${f}`);
    return `@font-face{font-family:"DM Sans";font-weight:${w};src:url(data:font/woff2;base64,${fs.readFileSync(f).toString("base64")}) format("woff2")}`;
  })
  .join("\n");

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto(pathToFileURL(path.join(here, "afh-club-handbook.html")).href);
await page.addStyleTag({ content: faces });
await page.evaluate(() => document.fonts.ready);
const out = path.join(root, "public/downloads/afh-club-handbook.pdf");
await page.pdf({
  path: out,
  format: "Letter",
  printBackground: true,
  preferCSSPageSize: true,
  displayHeaderFooter: true,
  headerTemplate: "<div></div>",
  footerTemplate:
    '<div style="width:100%;font-family:Helvetica,Arial,sans-serif;font-size:8pt;color:#2b3640;padding:0 0.9in;display:flex;justify-content:space-between"><span>The AFH Club Handbook · realpropertyplanning.com/afh-club</span><span class="pageNumber"></span></div>',
});
await browser.close();
console.log(`wrote ${path.relative(root, out)} (${Math.round(fs.statSync(out).size / 1024)} KB)`);
