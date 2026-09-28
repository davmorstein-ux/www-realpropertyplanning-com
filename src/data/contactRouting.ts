/**
 * Contact form routing (Sept 27, 2026, after the second outside audit).
 *
 * The first question on /contact is WHY someone is writing. The answer decides
 * who receives the message, and the form states that recipient before sending:
 *   - "general"   → Real Property Planning's general inbox (site questions,
 *                   directory, AFH Club, finding a professional)
 *   - "broker"    → the featured broker, by name, at their own brokerage address
 *   - "appraiser" → the featured appraiser, by name, at their own firm address
 *
 * The same table is copied into supabase/functions/send-contact-email/index.ts
 * (that function deploys separately and cannot import from src/). The test in
 * src/test/contactRouting.test.ts fails if the two drift apart or if the
 * addresses there stop matching src/data/featuredProfessionals.ts.
 *
 * Reason values are fixed English slugs; pages link to /contact?reason=<slug>,
 * so never rename one without updating those links.
 */
import { FEATURED_APPRAISER, FEATURED_BROKER } from "./featuredProfessionals";

export type Recipient = "general" | "broker" | "appraiser";

export const GENERAL_INBOX = "info@realpropertyplanning.com";

/** Display order in the form's first question. */
export const CONTACT_REASONS = [
  { value: "estate-property", recipient: "broker" },
  { value: "sell-or-value", recipient: "broker" },
  { value: "appraisal", recipient: "appraiser" },
  { value: "afh-buy-sell", recipient: "broker" },
  { value: "aging-parent", recipient: "general" },
  { value: "find-professional", recipient: "general" },
  { value: "afh-question", recipient: "general" },
  { value: "join-network", recipient: "general" },
  { value: "site-question", recipient: "general" },
  { value: "other", recipient: "general" },
] as const satisfies readonly { value: string; recipient: Recipient }[];

export type ContactReason = (typeof CONTACT_REASONS)[number]["value"];

export const REASON_VALUES = CONTACT_REASONS.map((r) => r.value) as ContactReason[];

export const isContactReason = (v: string | null): v is ContactReason =>
  !!v && (REASON_VALUES as string[]).includes(v);

export const recipientFor = (reason: string): Recipient =>
  CONTACT_REASONS.find((r) => r.value === reason)?.recipient ?? "general";

export const RECIPIENT_EMAIL: Record<Recipient, string> = {
  general: GENERAL_INBOX,
  broker: FEATURED_BROKER.email,
  appraiser: FEATURED_APPRAISER.email,
};
