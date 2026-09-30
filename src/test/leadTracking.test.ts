import { afterEach, describe, expect, it, vi } from "vitest";
import { trackLead } from "@/lib/leadTracking";

describe("contact-form lead event", () => {
  afterEach(() => {
    delete (window as { gtag?: unknown }).gtag;
  });

  it("sends generate_lead with topic, inbox and source page only", () => {
    const gtag = vi.fn();
    (window as { gtag?: unknown }).gtag = gtag;
    trackLead({ reason: "afh-buy-sell", recipient: "broker", sourcePage: "/afh-club/buying-selling" });
    expect(gtag).toHaveBeenCalledWith("event", "generate_lead", {
      form_name: "contact",
      contact_reason: "afh-buy-sell",
      recipient_group: "broker",
      source_page: "/afh-club/buying-selling",
    });
    // Exactly these four fields: nothing that could identify the visitor.
    expect(Object.keys(gtag.mock.calls[0][2] as object).sort()).toEqual(["contact_reason", "form_name", "recipient_group", "source_page"]);
  });

  it("does nothing, and does not throw, when Analytics is blocked", () => {
    expect(() => trackLead({ reason: "other", recipient: "general" })).not.toThrow();
  });
});
