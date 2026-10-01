import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { afhListings as AFH_LISTINGS } from "@/data/afhListings";

/* NWMLS IDX/VOW display rule, effective October 15, 2026: every NWMLS listing
   shown on the site must read "Listing Broker: [firm name]; [broker name];
   [contact phone]; [contact email]", as prominent as and adjacent to the
   call/email buttons, and NWMLS must still be named as the source.

   Until Oct 15 this only reports which listings are missing the phone or email.
   From Oct 15 it fails, so a listing without them cannot be published unnoticed:
   add the contact details from the IDX feed / MyNWMLS, or take the listing down. */
const EFFECTIVE = "2026-10-15";
const today = new Date().toISOString().slice(0, 10);

describe("NWMLS listing firm attribution (effective Oct 15, 2026)", () => {
  const nwmls = AFH_LISTINGS.filter((l) => l.source === "nwmls");

  it("every NWMLS listing names its firm and broker", () => {
    for (const l of nwmls) {
      expect(l.brokerage?.trim(), `${l.address}: firm`).toBeTruthy();
      expect(l.broker?.trim(), `${l.address}: broker`).toBeTruthy();
    }
  });

  it("every NWMLS listing has the listing contact phone and email (required from Oct 15)", () => {
    const missing = nwmls
      .filter((l) => !l.listingContactPhone || !l.listingContactEmail)
      .map((l) => `${l.marketStatus.padEnd(7)} ${l.mlsNum}  ${l.address}, ${l.city}  (missing ${[!l.listingContactPhone && "phone", !l.listingContactEmail && "email"].filter(Boolean).join(" + ")})`);
    if (missing.length && today < EFFECTIVE) {
      console.warn(`NWMLS attribution: ${missing.length} listing(s) still need contact details before ${EFFECTIVE}:\n  ${missing.join("\n  ")}`);
      return;
    }
    expect(missing, `Add the listing contact phone and email from the IDX feed or MyNWMLS, or remove the listing`).toEqual([]);
  });

  it("the card shows the attribution in NWMLS's order and names NWMLS as the source", () => {
    const card = readFileSync(resolve(__dirname, "../components/AFHListingCard.tsx"), "utf8");
    expect(card).toContain("Listing Broker:");
    expect(card).toMatch(/listing\.brokerage,\s*listing\.broker,\s*listing\.listingContactPhone/);
    expect(card).toContain("Listing information source: NWMLS");
  });
});
