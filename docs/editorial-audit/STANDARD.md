# Real Property Planning editorial standard (owner-approved Nov 3, 2026)

Applies to every page edited in the editorial audit. The pilot pages are the reference:
`src/pages/estate-probate-inherited-property/PreparingTheProperty.tsx`,
`src/pages/articles/MemoryCareCosts.tsx`, `src/pages/planning-before-a-crisis/LegalDocuments.tsx`
(originals in `docs/editorial-audit/originals/`).

## Owner decisions
1. Pilot style approved.
2. **Em dashes: remove all** from page body text (use a colon, comma, period or parentheses, or
   restructure). Leave page titles, meta descriptions and structured data untouched.
3. **Narrated pages: edit now.** The owner re-records later; list every narrated page edited in
   PROGRESS.md under "Needs re-recording".
4. No unsourced specific numbers (e.g. an insurance vacancy period was dropped).

## Voice
- Lead with the answer: the first sentence of the page and of each section says the thing the
  reader came for.
- Specific over general, but ONLY with facts already on the site (its data files, e.g.
  `src/lib/careTypes.ts` for CareScout costs, `src/data/afh*` for DSHS rates) or facts verified
  against a primary source for the edit. Never invent figures, examples, clients or experience.
- Plain adult tone. Cut: "journey", "peace of mind", "informed decisions", "navigate/navigating",
  "the right fit/choice", "one of the most", "many families" (unless a fact), "whether you're",
  "here's what", "can feel overwhelming", "it's not just X, it's Y", sentimental openings,
  motivational closings, reassurance nobody asked for. Acknowledge difficulty once, briefly,
  where it matters.
- Sentence length follows content. No artificial fragments, rhetorical questions or jokes.
- Careful, not absolute: "usually" where the law has exceptions; keep every legal, tax and
  medical qualification and every citation.
- Educational, not personal: no first person for the founder, no stories; professionals as roles
  and the listing standard ("met in person; nobody pays to be listed").

## Must not change (without owner approval)
URLs, page titles, meta descriptions, JSON-LD, FAQ question text, heading levels and count,
links and their targets, components/props, disclaimers, images, layout and class names.
Heading WORDING may be lightly fixed (remove an em dash or a cliché) but not restructured.

## Process per page
Read the whole page; edit only text that has a tell or is vague; keep facts; check any new fact;
record before/after word counts, em dashes, and any fact flagged for review.
