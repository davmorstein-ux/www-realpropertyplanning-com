import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { CONTACT_REASONS, RECIPIENT_EMAIL } from "@/data/contactRouting";
import en from "@/i18n/locales/en.json";

/* The edge function keeps its own copy of the routing table because it
   deploys separately from the site. These tests keep the copies identical. */
const fn = readFileSync(resolve(__dirname, "../../supabase/functions/send-contact-email/index.ts"), "utf8");

describe("contact form routing", () => {
  it("the edge function routes every reason to the same recipient as the site says", () => {
    for (const { value, recipient } of CONTACT_REASONS) {
      expect(fn).toMatch(new RegExp(`"${value}":\\s*"${recipient}"`));
    }
  });

  it("the edge function's addresses match the featured professionals record", () => {
    for (const [recipient, email] of Object.entries(RECIPIENT_EMAIL)) {
      expect(fn).toMatch(new RegExp(`${recipient}:\\s*"${email.replace(/\./g, "\\.")}"`));
    }
  });

  it("every reason has an English label, and every recipient has a note", () => {
    const page = (en as Record<string, any>).contactPage;
    for (const { value } of CONTACT_REASONS) expect(page.reasonOptions[value]).toBeTruthy();
    for (const k of ["choose", "general", "broker", "appraiser"]) expect(page.form.recipient[k]).toBeTruthy();
  });
});
