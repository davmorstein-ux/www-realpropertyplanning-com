import { afterEach, beforeAll, describe, expect, it, vi } from "vitest";
import { contactTarget, initSiteTracking, trackSignup } from "@/lib/siteTracking";

const gtag = vi.fn();
const click = (html: string, path = "/guides/x") => {
  window.history.pushState({}, "", path);
  document.body.innerHTML = `<main>${html}</main>`;
  const el = document.querySelector("[data-t]") as HTMLElement;
  el.addEventListener("click", (e) => e.preventDefault());
  el.click();
};

describe("site tracking", () => {
  beforeAll(() => {
    (window as { gtag?: unknown }).gtag = gtag;
    initSiteTracking();
  });
  afterEach(() => gtag.mockClear());

  it("classifies contact targets without exposing the number or address", () => {
    expect(contactTarget("tel:+12069003015")).toBe("featured_professional");
    expect(contactTarget("tel:206-900-3015")).toBe("featured_professional");
    expect(contactTarget("mailto:david@realpropertyplanning.com")).toBe("featured_professional");
    expect(contactTarget("mailto:info@realpropertyplanning.com?subject=Hi")).toBe("site_inbox");
    expect(contactTarget("tel:+14255550100")).toBe("other");
  });

  it("sends contact_click for a phone tap, with page and category only", () => {
    click(`<a data-t href="tel:+12069003015">Call</a>`, "/executors");
    expect(gtag).toHaveBeenCalledWith("event", "contact_click", { contact_kind: "phone", contact_target: "featured_professional", page_path: "/executors" });
  });

  it("does not double-count provider links that already send provider_contact_click", () => {
    click(`<div data-provider-tracked><a data-t href="tel:+14255550100">Call</a></div>`);
    expect(gtag).not.toHaveBeenCalled();
  });

  it("sends contact_cta_click with the topic code for a contact link", () => {
    click(`<a data-t href="/contact?reason=afh-buy-sell">Get connected</a>`, "/afh-club/listings");
    expect(gtag).toHaveBeenCalledWith("event", "contact_cta_click", { page_path: "/afh-club/listings", contact_reason: "afh-buy-sell" });
  });

  it("sends calculator_used once per calculator, never with the typed value", () => {
    window.history.pushState({}, "", "/afh-club/afh-roi-calculator");
    document.body.innerHTML = `<main><input id="i" /></main>`;
    const input = document.getElementById("i") as HTMLInputElement;
    input.value = "650000";
    input.dispatchEvent(new Event("input", { bubbles: true }));
    input.dispatchEvent(new Event("input", { bubbles: true }));
    expect(gtag).toHaveBeenCalledTimes(1);
    expect(gtag).toHaveBeenCalledWith("event", "calculator_used", { calculator_path: "/afh-club/afh-roi-calculator" });
  });

  it("ignores typing on pages that are not calculators", () => {
    window.history.pushState({}, "", "/contact");
    document.body.innerHTML = `<main><input id="i" /></main>`;
    document.getElementById("i")!.dispatchEvent(new Event("input", { bubbles: true }));
    expect(gtag).not.toHaveBeenCalled();
  });

  it("sends sign_up with the form tag", () => {
    trackSignup("afh-alert:bothell");
    expect(gtag).toHaveBeenCalledWith("event", "sign_up", { method: "newsletter", signup_source: "afh-alert:bothell" });
  });
});
