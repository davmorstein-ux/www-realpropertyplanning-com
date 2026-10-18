/**
 * Database access for the AFH listing push alerts (push-subscribe, push-check).
 *
 * Connects with SUPABASE_DB_URL, which Supabase provides to every edge
 * function, and creates its own tables on first use — so nothing has to be
 * pasted into an SQL editor. The same statements are in
 * supabase/push-alerts.sql for reference, or to run by hand if the automatic
 * setup is ever refused.
 *
 * Row Level Security is switched on with NO policies: the public API keys can
 * neither read nor write these tables. Only these two functions, connecting
 * directly as the database owner, can.
 */
import postgres from "npm:postgres@3.4.5";

export type Sql = ReturnType<typeof postgres>;
let client: Sql | null = null;

/** prepare: false because Supabase's connection pooler (transaction mode) does not keep prepared statements. */
export function db(): Sql {
  const url = Deno.env.get("SUPABASE_DB_URL");
  if (!url) throw new Error("SUPABASE_DB_URL is not available to this function");
  client ??= postgres(url, { prepare: false, max: 3, idle_timeout: 20 });
  return client;
}

export const SCHEMA_SQL = `
create table if not exists public.push_subscriptions (
  endpoint     text primary key,
  p256dh       text not null,
  auth         text not null,
  scopes       text[] not null,
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now(),
  last_sent_at timestamptz,
  failures     integer not null default 0
);
alter table public.push_subscriptions enable row level security;

create table if not exists public.afh_alert_state (
  id          text primary key,
  feed        jsonb,
  claimed_at  timestamptz,
  checked_at  timestamptz,
  last_result jsonb
);
alter table public.afh_alert_state enable row level security;

create table if not exists public.afh_alert_log (
  id         bigserial primary key,
  sent_at    timestamptz not null default now(),
  listing    text not null,
  event      text not null,
  recipients integer not null,
  delivered  integer not null
);
alter table public.afh_alert_log enable row level security;
alter table public.afh_alert_log add column if not exists statuses text;
`;

/** pg_cron calls push-check every 15 minutes. Re-running replaces the job of the same name. */
export const SCHEDULE_SQL = (functionUrl: string) => `
create extension if not exists pg_cron;
create extension if not exists pg_net;
select cron.schedule(
  'afh-push-check',
  '*/15 * * * *',
  $job$ select net.http_post(url := '${functionUrl}', headers := '{"Content-Type":"application/json"}'::jsonb, body := '{}'::jsonb) $job$
);
`;

let schemaReady = false;

export async function ensureSchema(): Promise<void> {
  if (schemaReady) return;
  await db().unsafe(SCHEMA_SQL);
  schemaReady = true;
}
