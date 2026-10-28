/**
 * The family checklist PDF's address, on its own so the newsletter box (shown on
 * every page) can link it without pulling all of src/data/myPlan.ts (~20 KB) into
 * the first download (Oct 28, 2026, code splitting). myPlan.ts re-exports it.
 */
export const CHECKLIST_PDF = "/family-home-planning-checklist.pdf";
