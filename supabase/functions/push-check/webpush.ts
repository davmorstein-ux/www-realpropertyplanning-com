/**
 * Web Push sending, written against the standards with Web Crypto only:
 *   - RFC 8291 message encryption (aes128gcm, RFC 8188)
 *   - RFC 8292 VAPID sender identification (ES256 JWT)
 *
 * Why not the npm "web-push" package: it relies on Node's crypto.createECDH,
 * which Supabase's Deno runtime does not reliably provide. Web Crypto is
 * built into Deno, browsers and Node 18+, so this file runs unchanged in the
 * edge function and in the test suite (src/test/afhAlerts.test.ts decrypts its
 * output with an independent implementation to prove it is correct).
 *
 * No Deno-only APIs in here.
 */

const enc = new TextEncoder();

export function b64urlToBytes(s: string): Uint8Array {
  const b64 = s.replace(/-/g, "+").replace(/_/g, "/") + "===".slice((s.length + 3) % 4);
  const bin = atob(b64);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

export function bytesToB64url(b: Uint8Array): string {
  let bin = "";
  for (const x of b) bin += String.fromCharCode(x);
  return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

/** Typed-array → BufferSource. Newer TypeScript types Uint8Array by its buffer kind and rejects the plain form; the bytes are the same. */
const bs = (u: Uint8Array): BufferSource => u as unknown as BufferSource;

function concat(...parts: Uint8Array[]): Uint8Array {
  const out = new Uint8Array(parts.reduce((n, p) => n + p.length, 0));
  let o = 0;
  for (const p of parts) { out.set(p, o); o += p.length; }
  return out;
}

async function hmac(key: Uint8Array, data: Uint8Array): Promise<Uint8Array> {
  const k = await crypto.subtle.importKey("raw", bs(key), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  return new Uint8Array(await crypto.subtle.sign("HMAC", k, bs(data)));
}

/** HKDF with a single output block (all lengths used here are ≤ 32 bytes). */
async function hkdf(salt: Uint8Array, ikm: Uint8Array, info: Uint8Array, length: number): Promise<Uint8Array> {
  const prk = await hmac(salt, ikm);
  const okm = await hmac(prk, concat(info, new Uint8Array([1])));
  return okm.slice(0, length);
}

export interface PushSubscriptionKeys {
  endpoint: string;
  p256dh: string; // base64url, 65-byte uncompressed P-256 point
  auth: string; // base64url, 16 bytes
}

/** RFC 8291 encryption. Returns the request body. `salt` and `serverKeys` are injectable for tests only. */
export async function encryptPayload(
  sub: PushSubscriptionKeys,
  plaintext: Uint8Array,
  opts: { salt?: Uint8Array; serverKeys?: CryptoKeyPair } = {},
): Promise<Uint8Array> {
  const uaPublic = b64urlToBytes(sub.p256dh);
  const authSecret = b64urlToBytes(sub.auth);
  const serverKeys = opts.serverKeys ??
    (await crypto.subtle.generateKey({ name: "ECDH", namedCurve: "P-256" }, true, ["deriveBits"])) as CryptoKeyPair;
  const asPublic = new Uint8Array(await crypto.subtle.exportKey("raw", serverKeys.publicKey));
  const uaKey = await crypto.subtle.importKey("raw", bs(uaPublic), { name: "ECDH", namedCurve: "P-256" }, false, []);
  const ecdhSecret = new Uint8Array(
    await crypto.subtle.deriveBits({ name: "ECDH", public: uaKey }, serverKeys.privateKey, 256),
  );

  const keyInfo = concat(enc.encode("WebPush: info\0"), uaPublic, asPublic);
  const ikm = await hkdf(authSecret, ecdhSecret, keyInfo, 32);
  const salt = opts.salt ?? crypto.getRandomValues(new Uint8Array(16));
  const cek = await hkdf(salt, ikm, enc.encode("Content-Encoding: aes128gcm\0"), 16);
  const nonce = await hkdf(salt, ikm, enc.encode("Content-Encoding: nonce\0"), 12);

  const padded = concat(plaintext, new Uint8Array([2])); // single, last record
  const aes = await crypto.subtle.importKey("raw", bs(cek), { name: "AES-GCM" }, false, ["encrypt"]);
  const cipher = new Uint8Array(await crypto.subtle.encrypt({ name: "AES-GCM", iv: bs(nonce) }, aes, bs(padded)));

  const rs = new Uint8Array(4);
  new DataView(rs.buffer).setUint32(0, 4096);
  return concat(salt, rs, new Uint8Array([asPublic.length]), asPublic, cipher);
}

export interface VapidKeys {
  publicKey: string; // base64url, 65-byte uncompressed point
  privateKey: string; // base64url, 32-byte scalar
  subject: string; // mailto: or https: contact for push services
}

/** RFC 8292 Authorization header value for one push service origin. */
export async function vapidAuthorization(endpoint: string, keys: VapidKeys, now = Date.now()): Promise<string> {
  const pub = b64urlToBytes(keys.publicKey);
  const jwk: JsonWebKey = {
    kty: "EC",
    crv: "P-256",
    d: keys.privateKey,
    x: bytesToB64url(pub.slice(1, 33)),
    y: bytesToB64url(pub.slice(33, 65)),
    ext: true,
  };
  const key = await crypto.subtle.importKey("jwk", jwk, { name: "ECDSA", namedCurve: "P-256" }, false, ["sign"]);
  const header = bytesToB64url(enc.encode(JSON.stringify({ typ: "JWT", alg: "ES256" })));
  const claims = bytesToB64url(enc.encode(JSON.stringify({
    aud: new URL(endpoint).origin,
    exp: Math.floor(now / 1000) + 12 * 3600,
    sub: keys.subject,
  })));
  const unsigned = `${header}.${claims}`;
  const sig = new Uint8Array(await crypto.subtle.sign({ name: "ECDSA", hash: "SHA-256" }, key, bs(enc.encode(unsigned))));
  return `vapid t=${unsigned}.${bytesToB64url(sig)}, k=${keys.publicKey}`;
}

export interface SendResult {
  status: number;
  /** The subscription is gone for good (unsubscribed or expired); delete it. */
  gone: boolean;
}

/** Send one alert. `payload` is JSON the service worker (public/sw.js) reads. */
export async function sendPush(
  sub: PushSubscriptionKeys,
  payload: unknown,
  keys: VapidKeys,
  fetchImpl: typeof fetch = fetch,
): Promise<SendResult> {
  const body = await encryptPayload(sub, enc.encode(JSON.stringify(payload)));
  const res = await fetchImpl(sub.endpoint, {
    method: "POST",
    headers: {
      Authorization: await vapidAuthorization(sub.endpoint, keys),
      "Content-Encoding": "aes128gcm",
      "Content-Type": "application/octet-stream",
      TTL: String(3 * 24 * 3600), // a phone that is off for a weekend still gets it
      Urgency: "normal",
    },
    body: bs(body),
  });
  try { await res.body?.cancel(); } catch { /* nothing to read */ }
  return { status: res.status, gone: res.status === 404 || res.status === 410 };
}
