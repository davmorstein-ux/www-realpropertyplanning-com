/*
 * Service worker — AFH listing push alerts only (Oct 18, 2026).
 *
 * It does exactly two things: shows an alert when one arrives, and opens the
 * listing page when the alert is tapped. It deliberately has NO fetch handler
 * and caches nothing, so it can never serve a stale page after the site is
 * published. Registered by src/lib/pushAlerts.ts.
 *
 * Alerts are sent by the Supabase function push-check; the payload is
 * { title, body, url, tag }.
 */
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("push", (event) => {
  let data = {};
  try {
    data = event.data ? event.data.json() : {};
  } catch (e) {
    data = { title: "Real Property Planning", body: event.data ? event.data.text() : "" };
  }
  const title = data.title || "AFH Club listing alert";
  event.waitUntil(
    self.registration.showNotification(title, {
      body: data.body || "",
      icon: "/real-plan-icon-192.png",
      badge: "/real-plan-icon-192.png",
      tag: data.tag || undefined,
      data: { url: data.url || "/afh-club/listings" },
    }),
  );
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const target = new URL((event.notification.data && event.notification.data.url) || "/afh-club/listings", self.location.origin);
  if (target.origin !== self.location.origin) return; // only ever open this site
  event.waitUntil(
    self.clients.matchAll({ type: "window", includeUncontrolled: true }).then((wins) => {
      for (const w of wins) {
        if ("navigate" in w && "focus" in w) return w.navigate(target.href).then((c) => (c || w).focus());
      }
      return self.clients.openWindow(target.href);
    }),
  );
});
