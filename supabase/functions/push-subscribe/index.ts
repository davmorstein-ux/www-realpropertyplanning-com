/**
 * push-subscribe — saves or removes a visitor's AFH listing alert sign-up
 * (Oct 18, 2026). Called by src/lib/pushAlerts.ts.
 *
 * Actions (POST JSON):
 *   { action: "subscribe", subscription: {endpoint, keys: {p256dh, auth}}, scopes: [...], areaLabel }
 *       Saves the sign-up (or updates its area) and sends a confirmation alert
 *       straight away, so the visitor sees at once that alerts work.
 *   { action: "unsubscribe", endpoint }
 *   { action: "status", endpoint }   → { scopes } for the sign-up box
 *
 * Public on purpose (verify_jwt = false in supabase/config.toml). Its defences:
 *   - a browser only produces a subscription after the visitor taps Allow on
 *     the phone's own permission prompt, which a script cannot press;
 *   - endpoints must belong to a real push service (Apple, Google, Mozilla,
 *     Microsoft), so the table cannot be used to make this server call
 *     arbitrary URLs;
 *   - scopes must match the fixed pattern, at most three;
 *   - nothing is ever returned about other subscribers.
 */
import { db, ensureSchema } from "../_shared/pushdb.ts";
import { vapidKeys } from "../_shared/vapid.ts";
import { sendPush } from "../_shared/webpush.ts";
import { SCOPE_PATTERN } from "../push-check/diff.ts";

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};
const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { ...cors, "Content-Type": "application/json" } });

const PUSH_HOSTS = [
  /^fcm\.googleapis\.com$/,
  /^android\.googleapis\.com$/,
  /^web\.push\.apple\.com$/,
  /\.push\.apple\.com$/,
  /^updates\.push\.services\.mozilla\.com$/,
  /\.notify\.windows\.com$/,
];

function validEndpoint(e: unknown): e is string {
  if (typeof e !== "string" || e.length > 1000) return false;
  try {
    const u = new URL(e);
    return u.protocol === "https:" && PUSH_HOSTS.some((re) => re.test(u.hostname));
  } catch {
    return false;
  }
}

const B64URL = /^[A-Za-z0-9_-]+$/;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: cors });
  if (req.method !== "POST") return json({ success: false, error: "POST only" }, 405);

  try {
    const body = await req.json();
    const action = body?.action;
    await ensureSchema();
    const sql = db();
    {
      if (action === "unsubscribe" || action === "status") {
        if (!validEndpoint(body.endpoint)) return json({ success: false, error: "bad endpoint" }, 400);
        if (action === "unsubscribe") {
          await sql`delete from public.push_subscriptions where endpoint = ${body.endpoint}`;
          return json({ success: true });
        }
        const r = await sql<{ scopes: string[] }[]>`select scopes from public.push_subscriptions where endpoint = ${body.endpoint}`;
        return json({ success: true, scopes: r[0]?.scopes ?? [] });
      }

      if (action !== "subscribe") return json({ success: false, error: "unknown action" }, 400);
      const sub = body.subscription;
      const endpoint = sub?.endpoint;
      const p256dh = sub?.keys?.p256dh;
      const auth = sub?.keys?.auth;
      const scopes: unknown = body.scopes;
      if (!validEndpoint(endpoint)) return json({ success: false, error: "bad endpoint" }, 400);
      if (typeof p256dh !== "string" || !B64URL.test(p256dh) || p256dh.length < 80 || p256dh.length > 100) {
        return json({ success: false, error: "bad key" }, 400);
      }
      if (typeof auth !== "string" || !B64URL.test(auth) || auth.length < 16 || auth.length > 32) {
        return json({ success: false, error: "bad key" }, 400);
      }
      if (!Array.isArray(scopes) || scopes.length < 1 || scopes.length > 3 || !scopes.every((s) => typeof s === "string" && SCOPE_PATTERN.test(s))) {
        return json({ success: false, error: "bad area" }, 400);
      }
      await sql`
        insert into public.push_subscriptions (endpoint, p256dh, auth, scopes)
        values (${endpoint}, ${p256dh}, ${auth}, ${sql.array(scopes as string[])}::text[])
        on conflict (endpoint) do update set p256dh = excluded.p256dh, auth = excluded.auth,
          scopes = excluded.scopes, updated_at = now(), failures = 0`;

      // Confirmation alert. The area label is display text only; keep it short and plain.
      const label = typeof body.areaLabel === "string" ? body.areaLabel.replace(/[^\w ,.'&-]/g, "").slice(0, 60) : "";
      const keys = vapidKeys();
      let confirmed = false;
      if (keys) {
        const r = await sendPush({ endpoint, p256dh, auth }, {
          title: "AFH listing alerts are on",
          body: label ? `You'll hear about adult family homes listed in ${label}.` : "You'll hear about new adult family home listings.",
          url: "https://realpropertyplanning.com/afh-club/listings",
          tag: "afh-alerts-confirm",
        }, keys).catch(() => null);
        confirmed = !!r && r.status < 300;
      }
      return json({ success: true, confirmed });
    }
  } catch (e) {
    console.error("push-subscribe failed:", e);
    return json({ success: false, error: "server error" }, 500);
  }
});
