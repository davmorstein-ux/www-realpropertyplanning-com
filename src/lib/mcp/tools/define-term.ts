import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { loadGlossary, norm, result, type Term } from "../data";

export function matchTerms(all: Term[], query: string): Term[] {
  const q = norm(query);
  const exact = all.filter((t) => norm(t.term) === q || (t.aka && norm(t.aka) === q));
  if (exact.length) return exact;
  const starts = all.filter((t) => norm(t.term).startsWith(q) || (t.aka && norm(t.aka).includes(q)));
  if (starts.length) return starts;
  return all.filter((t) => norm(t.term).includes(q) || norm(t.definition).includes(q));
}

export default defineTool({
  name: "define_term",
  title: "Define a term",
  description:
    "Plain-English definition of a Washington probate/estate term (personal representative, nonintervention powers, letters testamentary, TEDRA, transfer on death deed...) or adult family home term (CHOW, CARE, A-E classifications, CBHS, ECS, SBS, WABO, form 15-604...), with the statute or agency source and the guide that explains it.",
  inputSchema: {
    term: z.string().min(2).max(100).describe("The word, phrase or acronym."),
    glossary: z.enum(["any", "probate", "afh"]).default("any").describe("Which glossary to search."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: async ({ term, glossary }) => {
    const all = (await loadGlossary()).filter((t) => glossary === "any" || t.glossary === glossary);
    const found = matchTerms(all, term).slice(0, 5);
    return result({
      term,
      matches: found,
      ...(found.length === 0
        ? { tip: "Not in the glossaries. Try search_site, or browse https://realpropertyplanning.com/probate-glossary and https://realpropertyplanning.com/afh-club/glossary" }
        : {}),
    });
  },
});
