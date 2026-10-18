import { afterEach, describe, expect, it, vi } from "vitest";
import { META_PIXEL_ID, PIXEL_PAGES, __resetMetaPixelForTests, loadMetaPixel, metaPixelActive, trackMetaLead } from "@/lib/metaPixel";
import { trackPlannerCompleted } from "@/lib/siteTracking";

/* The pixel is deliberately narrow (see src/lib/metaPixel.ts). These tests
   guard the narrowness, not Meta's script. */
describe("Meta Pixel", () => {
  afterEach(() => {
    __resetMetaPixelForTests();
    delete (window as { fbq?: unknown }).fbq;
    document.head.querySelectorAll('script[src*="fbevents"]').forEach((s) => s.remove());
  });

  it("is allowed only on the ad landing page, never on health or care pages", () => {
    expect([...PIXEL_PAGES]).toEqual(["/family-home-planning"]);
    for (const p of PIXEL_PAGES) expect(p).not.toMatch(/care|hospice|memory|dementia|nursing|senior-living|medicaid|afh/);
  });

  it("loads nothing on any other page", () => {
    window.history.pushState({}, "", "/articles/hospice-care-washington");
    loadMetaPixel();
    expect(metaPixelActive()).toBe(false);
    expect(document.querySelector('script[src*="fbevents"]')).toBeNull();
  });

  it("loads nothing while no Pixel ID is set", () => {
    if (META_PIXEL_ID) return;
    window.history.pushState({}, "", "/family-home-planning");
    loadMetaPixel();
    expect(metaPixelActive()).toBe(false);
    expect(window.fbq).toBeUndefined();
  });

  it("on the landing page: no automatic events, no tracking of later pages, a data-free Lead", () => {
    if (!META_PIXEL_ID) return;
    window.history.pushState({}, "", "/family-home-planning");
    loadMetaPixel();
    expect(metaPixelActive()).toBe(true);
    const fbq = window.fbq!;
    expect(fbq.disablePushState).toBe(true);
    expect(fbq.queue).toEqual([
      ["set", "autoConfig", false, META_PIXEL_ID],
      ["init", META_PIXEL_ID],
      ["track", "PageView"],
    ]);
    trackMetaLead();
    expect(fbq.queue!.at(-1)).toEqual(["track", "Lead"]);
  });

  it("never sends a Lead when the pixel was not started", () => {
    const fbq = vi.fn();
    (window as { fbq?: unknown }).fbq = fbq;
    trackMetaLead();
    expect(fbq).not.toHaveBeenCalled();
  });

  it("planner_completed carries the page only, never answers", () => {
    const gtag = vi.fn();
    (window as { gtag?: unknown }).gtag = gtag;
    window.history.pushState({}, "", "/family-home-planning");
    trackPlannerCompleted();
    expect(gtag).toHaveBeenCalledWith("event", "planner_completed", { page_path: "/family-home-planning" });
    delete (window as { gtag?: unknown }).gtag;
  });
});
