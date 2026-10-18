/**
 * Browser side of the AFH listing push alerts (Oct 18, 2026).
 * The sign-up box is src/components/AFHPushAlerts.tsx; the server side is the
 * Supabase functions push-subscribe and push-check; the alert feed and wording
 * are in src/data/afhAlerts.ts.
 *
 * iPhone: Safari only allows push alerts for a site the visitor has added to
 * the Home Screen (iOS 16.4+) and opened from there. In the ordinary Safari
 * tab, PushManager is missing, so the box shows install steps instead.
 */
import { supabase } from "@/integrations/supabase/client";
import { AFH_CITY_PAGES } from "@/data/afhCityPages";

/** Must match supabase/functions/_shared/vapid.ts (src/test/afhAlerts.test.ts checks). */
export const VAPID_PUBLIC_KEY = "BCsW4MfFpXJR9PX4PyYHtGctQ_J-9JD_rSXrfqrHf-Nj3YoRKTH6JARd0IOFVXwjzq3KeE9m_8MGF0uOaBPXK2k";

export type PushSupport = "supported" | "needsInstall" | "unsupported";

export function isIOS(): boolean {
  if (typeof navigator === "undefined") return false;
  return /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.userAgent.includes("Macintosh") && navigator.maxTouchPoints > 1);
}

export function isStandalone(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia?.("(display-mode: standalone)").matches || (navigator as Navigator & { standalone?: boolean }).standalone === true;
}

export function pushSupport(): PushSupport {
  if (typeof window === "undefined") return "unsupported";
  const has = "serviceWorker" in navigator && "PushManager" in window && "Notification" in window;
  if (has) return "supported";
  if (isIOS() && !isStandalone()) return "needsInstall";
  return "unsupported";
}

export function permission(): NotificationPermission | "unknown" {
  return typeof Notification === "undefined" ? "unknown" : Notification.permission;
}

function keyBytes(b64url: string): Uint8Array {
  const b64 = b64url.replace(/-/g, "+").replace(/_/g, "/") + "===".slice((b64url.length + 3) % 4);
  const bin = atob(b64);
  return Uint8Array.from(bin, (ch) => ch.charCodeAt(0));
}

async function registration(): Promise<ServiceWorkerRegistration> {
  await navigator.serviceWorker.register("/sw.js", { scope: "/" });
  return navigator.serviceWorker.ready;
}

/** The existing subscription in this browser, if any, without registering anything new. */
export async function existingSubscription(): Promise<PushSubscription | null> {
  if (pushSupport() !== "supported") return null;
  const reg = await navigator.serviceWorker.getRegistration("/");
  return (await reg?.pushManager.getSubscription()) ?? null;
}

async function call(body: Record<string, unknown>): Promise<Record<string, unknown>> {
  const { data, error } = await supabase.functions.invoke("push-subscribe", { body });
  if (error || !data?.success) throw new Error("The alert service did not respond. Please try again.");
  return data;
}

/** The area this browser is signed up for, as saved on the server. */
export async function currentScopes(): Promise<string[]> {
  const sub = await existingSubscription();
  if (!sub) return [];
  const data = await call({ action: "status", endpoint: sub.endpoint });
  return Array.isArray(data.scopes) ? (data.scopes as string[]) : [];
}

/**
 * Ask permission, subscribe, and save the area. Must run from a tap: iPhone
 * refuses the permission prompt otherwise.
 */
export async function subscribe(scopes: string[], areaLabel: string): Promise<{ confirmed: boolean }> {
  const result = await Notification.requestPermission();
  if (result !== "granted") throw new Error(result === "denied" ? "denied" : "dismissed");
  const reg = await registration();
  const sub =
    (await reg.pushManager.getSubscription()) ??
    (await reg.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: keyBytes(VAPID_PUBLIC_KEY) as unknown as BufferSource }));
  const data = await call({ action: "subscribe", subscription: sub.toJSON(), scopes, areaLabel });
  return { confirmed: data.confirmed === true };
}

export async function unsubscribe(): Promise<void> {
  const sub = await existingSubscription();
  if (!sub) return;
  await call({ action: "unsubscribe", endpoint: sub.endpoint }).catch(() => undefined);
  await sub.unsubscribe();
}

/** Plain-words name of a saved scope, e.g. "Bothell and nearby cities". */
export function scopeLabel(scope: string | undefined): string {
  if (!scope || scope === "statewide") return "all of Washington";
  const [kind, slug] = scope.split(":");
  const page = AFH_CITY_PAGES.find((c) => c.slug === slug);
  if (!page) return "all of Washington";
  return kind === "near" && page.nearby.length ? `${page.city} and nearby cities` : page.city;
}
