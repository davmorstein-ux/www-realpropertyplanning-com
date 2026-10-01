import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { DISCLAIMER, SITE, errorResult, loadPages, result } from "../data";

export const toPath = (input: string) => {
  let p = input.trim();
  try {
    if (/^https?:\/\//i.test(p)) p = new URL(p).pathname;
  } catch {
    /* keep as typed */
  }
  p = p.split(/[?#]/)[0].replace(/\/+$/, "");
  if (!p.startsWith("/")) p = `/${p}`;
  return p || "/";
};

export default defineTool({
  name: "get_page",
  title: "Get a page's summary",
  description:
    "Get one Real Property Planning page by path or URL: its quick answer, section-by-section summary, FAQ, review date and the statutes or agency sources it relies on. Use after search_site, or for a URL you already have (e.g. /washington-probate-guide or /afh-club/washington-adult-family-home-guide).",
  inputSchema: {
    page: z.string().min(1).max(300).describe("A path like /probate-glossary or a full realpropertyplanning.com URL."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: async ({ page }) => {
    const pages = await loadPages();
    const path = toPath(page);
    const hit = pages.find((p) => p.path === path);
    if (!hit) {
      const near = pages.filter((p) => p.path.includes(path.split("/").pop() || "~")).slice(0, 5).map((p) => p.url);
      return errorResult(
        `No page at ${SITE}${path}.${near.length ? ` Did you mean: ${near.join(", ")}?` : " Use search_site to find the right page."}`
      );
    }
    return result({ ...hit, note: DISCLAIMER });
  },
});
