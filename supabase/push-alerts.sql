-- AFH listing push alerts (Oct 18, 2026) — REFERENCE COPY.
-- The push-subscribe and push-check functions run these statements themselves
-- on first use (supabase/functions/_shared/pushdb.ts is the live copy). Run
-- this by hand only if a function reports that it could not create its tables
-- or the schedule. Safe to run more than once.

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

-- Check for changes every 15 minutes.
create extension if not exists pg_cron;
create extension if not exists pg_net;
select cron.schedule(
  'afh-push-check',
  '*/15 * * * *',
  $job$ select net.http_post(url := 'https://zgmoiivyxzppnrpksmfg.supabase.co/functions/v1/push-check', headers := '{"Content-Type":"application/json"}'::jsonb, body := '{}'::jsonb) $job$
);
