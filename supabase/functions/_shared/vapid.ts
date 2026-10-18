/**
 * The site's Web Push identity (generated Oct 18, 2026).
 *
 * The PUBLIC key is safe to publish; the browser needs it to subscribe and it
 * must match src/lib/pushAlerts.ts (src/test/afhAlerts.test.ts checks). The
 * PRIVATE key lives only in the Supabase secret VAPID_PRIVATE_KEY. If it is
 * ever lost or replaced, every existing subscription stops working and
 * visitors must sign up again — so replace the pair only if the private key
 * leaks.
 */
import type { VapidKeys } from "./webpush.ts";

export const VAPID_PUBLIC_KEY = "BCsW4MfFpXJR9PX4PyYHtGctQ_J-9JD_rSXrfqrHf-Nj3YoRKTH6JARd0IOFVXwjzq3KeE9m_8MGF0uOaBPXK2k";
export const VAPID_SUBJECT = "mailto:david@realpropertyplanning.com";

export function vapidKeys(): VapidKeys | null {
  const privateKey = Deno.env.get("VAPID_PRIVATE_KEY")?.trim();
  return privateKey ? { publicKey: VAPID_PUBLIC_KEY, privateKey, subject: VAPID_SUBJECT } : null;
}
