import { CAREGIVER_POSTS, JOB_POSTS, activeOn, expiresOn, NOTE_MAX } from "@/data/afhCaregiverBoard";
import { readFileSync } from "fs";

describe("AFH caregiver board data", () => {
  it("keeps contact details out of the public file", () => {
    const src = readFileSync("src/data/afhCaregiverBoard.ts", "utf8").split("/* ---- Approved posts")[1];
    expect(src).not.toMatch(/[\w.+-]+@[\w-]+\.[\w.]+/); // email addresses
    expect(src).not.toMatch(/\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}/); // phone numbers
  });
  it("posts have unique ids, short notes and last-initial names", () => {
    const ids = [...CAREGIVER_POSTS, ...JOB_POSTS].map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const p of [...CAREGIVER_POSTS, ...JOB_POSTS]) expect((p.note ?? "").length).toBeLessThanOrEqual(NOTE_MAX);
    for (const p of CAREGIVER_POSTS) {
      expect(p.displayName, p.id).toMatch(/^\S+ [A-Z]\.$/);
      expect(p.cities.length, p.id).toBeLessThanOrEqual(3);
    }
    for (const p of JOB_POSTS) expect(p.licenseNumber, p.id).toMatch(/^\d{6}$/);
  });
  it("posts expire after 30 days", () => {
    expect(expiresOn("2026-10-05")).toBe("2026-11-04");
    const p = [{ posted: "2026-10-01" }];
    expect(activeOn(p, "2026-10-31")).toHaveLength(1);
    expect(activeOn(p, "2026-11-01")).toHaveLength(0);
  });
});
