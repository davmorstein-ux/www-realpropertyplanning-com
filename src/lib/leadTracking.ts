/**
 * Contact-form lead tracking (Sept 30, 2026).
 *
 * Fires GA4's recommended `generate_lead` event once a contact-form message has
 * actually been SENT (after the server confirms), so Analytics can report how
 * many inquiries the site produces and which pages they start from. The owner
 * marks `generate_lead` as a key event in Google Analytics (Admin > Key events).
 *
 * WHAT IS COLLECTED: the form's topic code (e.g. "afh-buy-sell"), which inbox it
 * went to (general / broker / appraiser), and the page the visitor came from.
 * Never a name, email, phone number or any message text. Documented on
 * src/pages/Privacy.tsx; keep the two in step.
 *
 * Also sent by the AFH Caregiver Board forms (Nov 2, 2026) with form_name
 * "caregiver_board" and the board's reason code (caregiver-board-post,
 * afh-job-post, caregiver-board-contact), again only after the send succeeds.
 *
 * Fails silently if gtag is missing (ad blocker, preview build): tracking must
 * never affect sending a message.
 */
export const trackLead = (args: { reason: string; recipient: string; sourcePage?: string; formName?: "contact" | "caregiver_board" }): void => {
  try {
    if (typeof window === "undefined" || typeof window.gtag !== "function") return;
    window.gtag("event", "generate_lead", {
      form_name: args.formName ?? "contact",
      contact_reason: args.reason || "unspecified",
      recipient_group: args.recipient,
      source_page: args.sourcePage || window.location.pathname,
    });
  } catch {
    /* never interrupt the visitor */
  }
};
