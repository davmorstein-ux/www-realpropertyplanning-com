/**
 * AFH listing push alerts (Oct 18, 2026): the public feed, the change
 * detection, the subscription scopes, and the push encryption/signing.
 */
import { describe, expect, it } from "vitest";
import crypto from "node:crypto";
import { readFileSync } from "node:fs";
import path from "node:path";
import { afhListings, listingSlug } from "@/data/afhListings";
import { AFH_CITY_PAGES } from "@/data/afhCityPages";
import { audienceFor, buildAlertFeed, fingerprint, scopeFor, VALID_SCOPES } from "@/data/afhAlerts";
import { diffFeeds, eventFor, SCOPE_PATTERN, type FeedItem } from "../../supabase/functions/push-check/diff";
import { b64urlToBytes, bytesToB64url, encryptPayload, vapidAuthorization } from "../../supabase/functions/_shared/webpush";

const root = path.resolve(__dirname, "../..");

describe("alert feed", () => {
  const feed = buildAlertFeed(afhListings, new Date("2026-10-18T12:00:00Z"));
  const text = JSON.stringify(feed);

  it("has one item per listing, keyed by the listing page slug", () => {
    expect(feed.items).toHaveLength(afhListings.length);
    expect(new Set(feed.items.map((i) => i.key)).size).toBe(afhListings.length);
    expect(feed.items[0].path).toBe(`/afh-club/listings/${listingSlug(afhListings[0])}`);
  });

  it("carries no address or price of any listing (NWMLS: details stay on the listing pages)", () => {
    for (const l of afhListings) {
      if (l.address.trim().length > 4) expect(text).not.toContain(l.address);
      if (/\d/.test(l.price)) expect(text).not.toContain(l.price);
      if (l.soldPrice) expect(text).not.toContain(l.soldPrice);
      if (l.photo) expect(text).not.toContain(l.photo);
    }
  });

  it("alert wording names only the listing type and city", () => {
    for (const item of feed.items) {
      for (const m of Object.values(item.messages)) {
        expect(m.title.length).toBeLessThanOrEqual(70);
        expect(m.title + m.body).not.toMatch(/\$\d/);
      }
    }
  });

  it("price fingerprint changes when the price changes", () => {
    expect(fingerprint("$1,450,000")).not.toBe(fingerprint("$1,400,000"));
    expect(fingerprint("$1,450,000")).toMatch(/^[0-9a-f]{8}$/);
  });
});

describe("who hears about a listing", () => {
  it("a city-page city reaches its own page, nearby subscribers of neighbouring pages, and statewide", () => {
    const a = audienceFor("Seattle");
    expect(a).toEqual(expect.arrayContaining(["statewide", "city:seattle-wa", "near:seattle-wa", "near:bellevue-wa"]));
    expect(a).not.toContain("city:bellevue-wa"); // Bellevue-only subscribers did not ask for Seattle
  });

  it("a city without its own page reaches statewide subscribers only", () => {
    expect(audienceFor("Nowhereville")).toEqual(["statewide"]);
  });

  it("every nearby city is a real city page", () => {
    const slugs = new Set(AFH_CITY_PAGES.map((c) => c.slug));
    for (const c of AFH_CITY_PAGES) for (const n of c.nearby) expect(slugs.has(n)).toBe(true);
  });

  it("every scope the sign-up box can produce passes the server's check", () => {
    for (const s of VALID_SCOPES) expect(s).toMatch(SCOPE_PATTERN);
    expect(scopeFor({ area: "city", slug: "edmonds-wa", nearby: true })).toBe("near:edmonds-wa");
    expect(scopeFor({ area: "city", slug: "edmonds-wa", nearby: false })).toBe("city:edmonds-wa");
    expect(scopeFor({ area: "statewide" })).toBe("statewide");
    expect("city:../../etc").not.toMatch(SCOPE_PATTERN);
  });
});

describe("change detection", () => {
  const base: FeedItem = buildAlertFeed(afhListings.slice(0, 1)).items[0] as FeedItem;
  const at = (status: string, priceKey = base.priceKey): FeedItem => ({ ...base, status, priceKey });

  it("names each kind of change", () => {
    expect(eventFor(undefined, at("active"))).toBe("new");
    expect(eventFor(at("active"), at("active", "zzzz"))).toBe("price");
    expect(eventFor(at("active"), at("pending"))).toBe("pending");
    expect(eventFor(at("pending"), at("sold"))).toBe("sold");
    expect(eventFor(at("pending"), at("active"))).toBe("back");
    expect(eventFor(at("expired"), at("active"))).toBe("back");
  });

  it("stays quiet for history and housekeeping", () => {
    expect(eventFor(undefined, at("sold"))).toBeNull(); // a past sale added to the sold page
    expect(eventFor(at("active"), at("expired"))).toBeNull();
    expect(eventFor(at("active"), at("active"))).toBeNull();
    expect(eventFor(at("sold"), at("sold", "zzzz"))).toBeNull();
  });

  it("a status change wins over a price change in the same publish", () => {
    expect(eventFor(at("active"), at("pending", "zzzz"))).toBe("pending");
  });

  it("sends nothing on the very first run", () => {
    expect(diffFeeds(null, [at("active")])).toEqual([]);
  });

  it("an alert carries its message, link and audience", () => {
    const [a] = diffFeeds([at("active")], [at("pending")]);
    expect(a.event).toBe("pending");
    expect(a.title).toBe(base.messages.pending.title);
    expect(a.path).toBe(base.path);
    expect(a.audience).toBe(base.audience);
  });
});

describe("push keys", () => {
  it("the browser and the server use the same public key", () => {
    const pick = (f: string) => readFileSync(path.join(root, f), "utf8").match(/VAPID_PUBLIC_KEY = "([^"]+)"/)?.[1];
    const browser = pick("src/lib/pushAlerts.ts");
    expect(browser).toBeTruthy();
    expect(browser).toBe(pick("supabase/functions/_shared/vapid.ts"));
    expect(b64urlToBytes(browser!).length).toBe(65);
  });
});

/** Independent RFC 8291 decryption with node:crypto, to check webpush.ts. */
function decrypt(body: Buffer, ua: crypto.ECDH, auth: Buffer): string {
  const salt = body.subarray(0, 16);
  const idlen = body[20];
  const asPublic = body.subarray(21, 21 + idlen);
  const cipher = body.subarray(21 + idlen);
  const secret = ua.computeSecret(asPublic);
  const info = Buffer.concat([Buffer.from("WebPush: info\0"), ua.getPublicKey(), asPublic]);
  const ikm = Buffer.from(crypto.hkdfSync("sha256", secret, auth, info, 32));
  const cek = Buffer.from(crypto.hkdfSync("sha256", ikm, salt, Buffer.from("Content-Encoding: aes128gcm\0"), 16));
  const nonce = Buffer.from(crypto.hkdfSync("sha256", ikm, salt, Buffer.from("Content-Encoding: nonce\0"), 12));
  const d = crypto.createDecipheriv("aes-128-gcm", cek, nonce);
  d.setAuthTag(cipher.subarray(cipher.length - 16));
  const plain = Buffer.concat([d.update(cipher.subarray(0, cipher.length - 16)), d.final()]);
  expect(plain[plain.length - 1]).toBe(2); // last-record delimiter
  return plain.subarray(0, plain.length - 1).toString();
}

describe("push encryption and signing", () => {
  it("a phone can decrypt what push-check sends", async () => {
    const ua = crypto.createECDH("prime256v1");
    ua.generateKeys();
    const auth = crypto.randomBytes(16);
    const sub = { endpoint: "https://web.push.apple.com/abc", p256dh: bytesToB64url(ua.getPublicKey()), auth: bytesToB64url(auth) };
    const msg = JSON.stringify({ title: "New adult family home for sale in Edmonds", url: "/afh-club/listings/x" });
    const body = Buffer.from(await encryptPayload(sub, new TextEncoder().encode(msg)));
    expect(decrypt(body, ua, auth)).toBe(msg);
  });

  it("the VAPID signature verifies against the public key", async () => {
    const { publicKey, privateKey } = crypto.generateKeyPairSync("ec", { namedCurve: "P-256" });
    const jwk = publicKey.export({ format: "jwk" });
    const pub = bytesToB64url(new Uint8Array([4, ...b64urlToBytes(jwk.x!), ...b64urlToBytes(jwk.y!)]));
    const d = privateKey.export({ format: "jwk" }).d!;
    const header = await vapidAuthorization("https://web.push.apple.com/abc", { publicKey: pub, privateKey: d, subject: "mailto:x@example.com" });
    const token = header.match(/t=([^,]+)/)![1];
    const [h, c, s] = token.split(".");
    expect(JSON.parse(Buffer.from(b64urlToBytes(c)).toString()).aud).toBe("https://web.push.apple.com");
    const ok = crypto.verify("sha256", Buffer.from(`${h}.${c}`), { key: publicKey, dsaEncoding: "ieee-p1363" }, Buffer.from(b64urlToBytes(s)));
    expect(ok).toBe(true);
    expect(header).toContain(`k=${pub}`);
  });
});
