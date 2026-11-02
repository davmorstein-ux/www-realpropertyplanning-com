/**
 * Nov 2, 2026: Caregiver Board and testimonial events, push-alert UTM tags.
 */
import { afterEach, describe, expect, it, vi } from "vitest";
import { readFileSync } from "node:fs";
import vm from "node:vm";
import { trackLead } from "@/lib/leadTracking";
import { trackTestimonialSubmitted } from "@/lib/siteTracking";

afterEach(() => {
  delete (window as { gtag?: unknown }).gtag;
});

describe("Caregiver Board lead", () => {
  it("sends generate_lead with form_name caregiver_board and the same four fields", () => {
    const gtag = vi.fn();
    (window as { gtag?: unknown }).gtag = gtag;
    trackLead({ reason: "afh-job-post", recipient: "general", sourcePage: "/afh-club/caregivers", formName: "caregiver_board" });
    expect(gtag).toHaveBeenCalledWith("event", "generate_lead", {
      form_name: "caregiver_board",
      contact_reason: "afh-job-post",
      recipient_group: "general",
      source_page: "/afh-club/caregivers",
    });
  });
});

describe("testimonial event", () => {
  it("sends testimonial_submitted with the page path only", () => {
    const gtag = vi.fn();
    (window as { gtag?: unknown }).gtag = gtag;
    trackTestimonialSubmitted();
    expect(gtag).toHaveBeenCalledTimes(1);
    const [, name, params] = gtag.mock.calls[0];
    expect(name).toBe("testimonial_submitted");
    expect(Object.keys(params as object)).toEqual(["page_path"]);
  });
  it("does not throw without Analytics", () => {
    expect(() => trackTestimonialSubmitted()).not.toThrow();
  });
});

describe("push alert click (public/sw.js)", () => {
  const run = (url: string | undefined) => {
    const handlers: Record<string, (e: unknown) => void> = {};
    const opened: string[] = [];
    const self = {
      location: { origin: "https://realpropertyplanning.com" },
      addEventListener: (t: string, f: (e: unknown) => void) => (handlers[t] = f),
      registration: { showNotification: () => Promise.resolve() },
      clients: { matchAll: () => Promise.resolve([]), openWindow: (h: string) => (opened.push(h), Promise.resolve()) },
    };
    vm.runInNewContext(readFileSync("public/sw.js", "utf8"), { self, URL, Promise, console });
    let waited: Promise<unknown> = Promise.resolve();
    handlers.notificationclick({ notification: { close() {}, data: url ? { url } : undefined }, waitUntil: (p: Promise<unknown>) => (waited = p) });
    return waited.then(() => opened);
  };

  it("adds push campaign tags to the alert link", async () => {
    const [href] = await run("https://realpropertyplanning.com/afh-club/listings/abc");
    const u = new URL(href);
    expect(u.pathname).toBe("/afh-club/listings/abc");
    expect(u.searchParams.get("utm_source")).toBe("push");
    expect(u.searchParams.get("utm_medium")).toBe("push");
    expect(u.searchParams.get("utm_campaign")).toBe("afh-listing-alert");
  });
  it("tags the default page too", async () => {
    const [href] = await run(undefined);
    expect(href).toBe("https://realpropertyplanning.com/afh-club/listings?utm_source=push&utm_medium=push&utm_campaign=afh-listing-alert");
  });
  it("keeps an existing source tag", async () => {
    const [href] = await run("https://realpropertyplanning.com/afh-club?utm_source=test");
    expect(href).toBe("https://realpropertyplanning.com/afh-club?utm_source=test");
  });
  it("still never opens another site", async () => {
    expect(await run("https://example.com/x")).toEqual([]);
  });
});
