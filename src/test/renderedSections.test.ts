/**
 * Page text for /ai/pages.json from the rendered page (Oct 20, 2026): the
 * guided-path pages keep their answers in components, so the build reads them
 * from the rendered HTML. These checks keep navigation out of that text.
 */
import { describe, expect, it } from "vitest";
import { sectionsFromRenderedHtml, RENDERED_TEXT_PREFIXES } from "@/lib/aiData";

const words = (n: number, w = "word") => Array.from({ length: n }, () => w).join(" ");
const page = (body: string) => `<html><body><header><a href="/">Home</a></header><main>${body}</main><footer>x</footer></body></html>`;

describe("sectionsFromRenderedHtml", () => {
  const html = page(`
    <h1>Power of attorney</h1>
    <ol aria-label="Your progress through this guide"><li>Where you are</li><li>What you need</li></ol>
    <p>Pick the option below that best matches your situation to get started.</p>
    <h2>Durable power of attorney</h2><p>Names someone to manage money. ${words(40, "money")}</p>
    <h2>What to do</h2><p>Schedule an appointment. ${words(40, "appointment")}</p>
    <a href="/x"><h3>A tile title</h3><p>Tile text that is navigation, not content.</p></a>
    <aside class="topic-pros"><p>People who help with this and their names here.</p></aside>
    <div role="navigation" class="estate-readnext"><p>What to read next and some link text here.</p></div>
    <h2>Your next questions</h2><p>Link text that is not content at all.</p>
  `);
  const out = sectionsFromRenderedHtml(html);

  it("keeps each heading with the text under it", () => {
    expect(out).toHaveLength(2);
    expect(out[0].startsWith("Durable power of attorney — Names someone to manage money.")).toBe(true);
    expect(out[1].startsWith("What to do — Schedule an appointment.")).toBe(true);
  });

  it("leaves out steps, tiles, the professionals box and the next-step blocks", () => {
    const all = out.join(" ");
    for (const s of ["Where you are", "Pick the option", "A tile title", "People who help", "What to read next", "not content at all"]) {
      expect(all).not.toContain(s);
    }
  });

  it("returns nothing for a page that is mostly tiles", () => {
    expect(sectionsFromRenderedHtml(page(`<h1>Hub</h1><h2>Things to consider</h2><p>One short line of text.</p>`))).toEqual([]);
  });

  it("covers the three homepage paths", () => {
    expect(RENDERED_TEXT_PREFIXES).toEqual(["/planning-before-a-crisis", "/helping-an-aging-parent", "/estate-probate-inherited-property"]);
  });
});
