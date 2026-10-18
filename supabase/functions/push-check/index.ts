/**
 * push-check — sends AFH listing push alerts (Oct 18, 2026).
 *
 * Every 15 minutes (pg_cron, set up by this function on its first run) it:
 *   1. fetches /afh-alert-feed.json from the LIVE site — written by the build,
 *      so it only changes when the site is published (src/data/afhAlerts.ts);
 *   2. compares it with the copy saved last time (diff.ts);
 *   3. sends each change to the subscribers whose area matches, and deletes
 *      subscriptions the push service reports as gone;
 *   4. saves the new copy.
 *
 * Opening the function URL in a browser runs one check and shows the result,
 * which is also how the owner switches it on the first time.
 *
 * Public on purpose (verify_jwt = false in supabase/config.toml): calling it
 * can only send alerts for real changes on the published site, at most once a
 * minute, and an extra call with no change sends nothing.
 *
 * Needs one secret: VAPID_PRIVATE_KEY (Supabase → Edge Functions → Secrets).
 * The matching public key is in _shared/vapid.ts and src/lib/pushAlerts.ts.
 */
import { db, ensureSchema, SCHEDULE_SQL } from "../_shared/pushdb.ts";
import { vapidKeys } from "../_shared/vapid.ts";
import { diffFeeds, MAX_ALERTS_PER_RUN, type Alert, type FeedItem } from "../_shared/diff.ts";
import { sendPush, type VapidKeys } from "../_shared/webpush.ts";

const SITE = "https://realpropertyplanning.com";
// ALERT_FEED_URL exists for local testing only; production reads the live site.
const FEED_URL = Deno.env.get("ALERT_FEED_URL") ?? `${SITE}/afh-alert-feed.json`;
const FUNCTION_URL = `${Deno.env.get("SUPABASE_URL") ?? "https://zgmoiivyxzppnrpksmfg.supabase.co"}/functions/v1/push-check`;
const MIN_SECONDS_BETWEEN_CHECKS = 60;

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};
const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body, null, 2), { status, headers: { ...cors, "Content-Type": "application/json" } });

async function fetchFeed(): Promise<FeedItem[]> {
  const res = await fetch(`${FEED_URL}?t=${Date.now()}`, { headers: { "Cache-Control": "no-cache" } });
  if (!res.ok) throw new Error(`feed returned ${res.status} — has the site been published since the alerts were added?`);
  const feed = await res.json();
  if (feed?.version !== 1 || !Array.isArray(feed.items)) throw new Error("feed has an unexpected shape");
  return feed.items as FeedItem[];
}

interface Sub { endpoint: string; p256dh: string; auth: string }

/** Send one alert to everyone it concerns. Returns [recipients, delivered]. */
async function deliver(alert: Alert, keys: VapidKeys): Promise<[number, number]> {
  const sql = db();
  const rows = await sql<Sub[]>`
    select endpoint, p256dh, auth from public.push_subscriptions where scopes && ${sql.array(alert.audience)}::text[]`;
  const payload = { title: alert.title, body: alert.body, url: `${SITE}${alert.path}`, tag: `${alert.key}:${alert.event}` };
  let delivered = 0;
  for (let i = 0; i < rows.length; i += 10) {
    const batch = rows.slice(i, i + 10);
    const results = await Promise.allSettled(batch.map((s) => sendPush(s, payload, keys)));
    for (let j = 0; j < batch.length; j++) {
      const r = results[j];
      const ep = batch[j].endpoint;
      if (r.status === "fulfilled" && r.value.status < 300) {
        delivered++;
        await sql`update public.push_subscriptions set last_sent_at = now(), failures = 0 where endpoint = ${ep}`;
      } else if (r.status === "fulfilled" && r.value.gone) {
        await sql`delete from public.push_subscriptions where endpoint = ${ep}`;
      } else {
        await sql`update public.push_subscriptions set failures = failures + 1 where endpoint = ${ep}`;
        await sql`delete from public.push_subscriptions where endpoint = ${ep} and failures > 5`;
      }
    }
  }
  await sql`
    insert into public.afh_alert_log (listing, event, recipients, delivered)
    values (${alert.key}, ${alert.event}, ${rows.length}, ${delivered})`;
  return [rows.length, delivered];
}

async function scheduleCheck(): Promise<string> {
  try {
    await db().unsafe(SCHEDULE_SQL(FUNCTION_URL));
    return "every 15 minutes";
  } catch (e) {
    return `not scheduled: ${(e as Error).message} — run supabase/push-alerts.sql in the SQL editor`;
  }
}

async function runCheck(): Promise<Record<string, unknown>> {
  await ensureSchema();
  const sql = db();

  /* Claim this run. One atomic update both stops two checks overlapping and
     limits checks to one a minute, however often the URL is called. */
  await sql`insert into public.afh_alert_state (id) values ('feed') on conflict (id) do nothing`;
  const claimed = await sql<{ feed: FeedItem[] | null }[]>`
    update public.afh_alert_state set claimed_at = now()
    where id = 'feed' and (claimed_at is null or claimed_at < now() - make_interval(secs => ${MIN_SECONDS_BETWEEN_CHECKS}))
    returning feed`;
  if (!claimed.length) return { result: "checked less than a minute ago; nothing to do" };
  const prev = claimed[0].feed;

  const next = await fetchFeed();
  const alerts = diffFeeds(prev, next);
  const keys = vapidKeys();
  let result: Record<string, unknown>;

  if (!prev) {
    result = { result: `first run: saved ${next.length} listings to compare against next time; no alerts sent` };
  } else if (alerts.length === 0) {
    result = { result: "no listing changes since the last check" };
  } else if (alerts.length > MAX_ALERTS_PER_RUN) {
    result = { result: `${alerts.length} changes at once looks like a data update, not market news; saved without sending` };
  } else if (!keys) {
    // Keep the old copy so these alerts go out once the key is added.
    return { result: `${alerts.length} alert(s) waiting: VAPID_PRIVATE_KEY secret is not set`, waiting: alerts.map((a) => a.title) };
  } else {
    const sent: { alert: string; listing: string; recipients: number; delivered: number }[] = [];
    for (const a of alerts) {
      const [recipients, delivered] = await deliver(a, keys);
      sent.push({ alert: a.title, listing: a.path, recipients, delivered });
    }
    result = { result: `sent ${alerts.length} alert(s)`, sent };
  }

  await sql`
    update public.afh_alert_state
    set feed = ${sql.json(next as unknown as postgresJson)}, checked_at = now(), last_result = ${sql.json(result as postgresJson)}
    where id = 'feed'`;
  return result;
}

// postgres.js's JSON parameter type; the feed and result are plain JSON data.
// deno-lint-ignore no-explicit-any
type postgresJson = any;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: cors });
  try {
    const result = await runCheck();
    const schedule = await scheduleCheck();
    const [{ n }] = await db()<{ n: number }[]>`select count(*)::int as n from public.push_subscriptions`;
    return json({ ok: true, ...result, subscribers: n, schedule, sendingKey: vapidKeys() ? "set" : "MISSING: add VAPID_PRIVATE_KEY" });
  } catch (e) {
    console.error("push-check failed:", e);
    return json({ ok: false, error: (e as Error).message }, 500);
  }
});
