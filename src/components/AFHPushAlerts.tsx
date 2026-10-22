/**
 * "Alert my phone" sign-up box for AFH listings (owner's request, Oct 18, 2026).
 *
 * Sits beside the email "Notify me" box on every /afh-club/for-sale/<city>
 * page (preset to that city, nearby cities included) and on /afh-club/listings
 * (preset to all of Washington). Owner's decisions: alerts for every kind of
 * change; city choices matter, nearby cities optional, statewide available.
 *
 * Browser plumbing: src/lib/pushAlerts.ts. Alert wording and the public feed:
 * src/data/afhAlerts.ts. Server: supabase/functions/push-subscribe, push-check.
 *
 * Styling follows NewsletterSignup: doubled class selectors with !important,
 * because index.css forces sizes on bare p / label / select / button inside
 * main, and no class contains "btn" or "cta" (index.css restyles those).
 */
import { useEffect, useId, useMemo, useState } from "react";
import { AFH_CITY_PAGES, cityPageBySlug } from "@/data/afhCityPages";
import { scopeFor } from "@/data/afhAlerts";
import {
  currentScopes,
  isIOS,
  permission,
  pushSupport,
  scopeLabel,
  subscribe,
  unsubscribe,
  type PushSupport,
} from "@/lib/pushAlerts";

const ACCENT = "#0a5648"; // AFH Club hunter green
const ACCENT_HOVER = "#07443a";

type Phase = "checking" | "form" | "working" | "on" | "blocked" | "error";

export default function AFHPushAlerts({ citySlug }: { citySlug?: string }) {
  const startPage = citySlug ? cityPageBySlug(citySlug) : undefined;
  const [support, setSupport] = useState<PushSupport>("unsupported");
  const [phase, setPhase] = useState<Phase>("checking");
  const [area, setArea] = useState<string>(startPage ? startPage.slug : "statewide");
  const [nearby, setNearby] = useState(true);
  const [saved, setSaved] = useState<string | undefined>();
  const [message, setMessage] = useState("");
  const id = useId();

  const page = area === "statewide" ? undefined : cityPageBySlug(area);
  const nearbyNames = useMemo(
    () => (page?.nearby ?? []).map((s) => cityPageBySlug(s)?.city).filter(Boolean) as string[],
    [page],
  );
  const scope =
    area === "statewide" || !page
      ? scopeFor({ area: "statewide" })
      : scopeFor({ area: "city", slug: page.slug, nearby: nearby && nearbyNames.length > 0 });

  useEffect(() => {
    const s = pushSupport();
    setSupport(s);
    if (s !== "supported") { setPhase("form"); return; }
    if (permission() === "denied") { setPhase("blocked"); return; }
    currentScopes()
      .then((scopes) => {
        if (scopes.length) { setSaved(scopes[0]); setPhase("on"); } else setPhase("form");
      })
      .catch(() => setPhase("form"));
  }, []);

  const turnOn = async () => {
    setPhase("working");
    setMessage("");
    try {
      const label = scopeLabel(scope).replace(/^all of /, "");
      const { confirmed } = await subscribe([scope], label);
      setSaved(scope);
      setPhase("on");
      setMessage(confirmed ? "A test alert is on its way to this device now." : "");
    } catch (e) {
      const why = (e as Error).message;
      if (why === "denied") { setPhase("blocked"); return; }
      setPhase(why === "dismissed" ? "form" : "error");
      setMessage(why === "dismissed" ? "Alerts were not turned on. Tap the button again and choose Allow." : why);
    }
  };

  const turnOff = async () => {
    setPhase("working");
    await unsubscribe();
    setSaved(undefined);
    setMessage("Alerts are off for this device.");
    setPhase("form");
  };

  const heading = startPage ? `Get a phone alert when an AFH lists in ${startPage.city}` : "Get phone alerts for new AFH listings";

  return (
    <div className="rpp-push" style={{ ["--rpp-push-accent" as string]: ACCENT, ["--rpp-push-hover" as string]: ACCENT_HOVER } as React.CSSProperties}>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <p className="rpp-push-heading">{heading}</p>
      <p className="rpp-push-body">
        An alert on your phone when an adult family home property, business, or lease in your area is listed,
        changes price, goes pending, or sells. Nothing else. Turn it off any time.
      </p>

      {support === "needsInstall" ? (
        <div className="rpp-push-steps" role="note">
          <p className="rpp-push-strong">On iPhone, alerts work once this site is on your Home Screen:</p>
          <ol>
            <li>Tap the <strong>Share</strong> button at the bottom of Safari (the square with an arrow).</li>
            <li>Choose <strong>Add to Home Screen</strong>, then tap <strong>Add</strong>.</li>
            <li>Open <strong>Real Plan</strong> from your Home Screen and come back to this page to turn alerts on.</li>
          </ol>
          <p className="rpp-push-fine">Needs iOS 16.4 or later.{startPage ? " Prefer email? Use the box below." : ""}</p>
        </div>
      ) : support === "unsupported" ? (
        <p className="rpp-push-fine">
          This browser cannot show listing alerts{isIOS() ? " (iPhone needs iOS 16.4 or later)" : ""}.
          {startPage ? " The email option below works everywhere." : ""}
        </p>
      ) : phase === "checking" ? (
        <p className="rpp-push-fine" role="status">Checking this device…</p>
      ) : phase === "blocked" ? (
        <p className="rpp-push-fine" role="alert">
          Alerts from this site are blocked in your phone or browser settings. To use them, allow notifications for
          realpropertyplanning.com (on iPhone: Settings, Notifications, Real Plan), then reload this page.
        </p>
      ) : phase === "on" ? (
        <div role="status">
          <p className="rpp-push-strong">Alerts are on for {scopeLabel(saved)}.</p>
          {message && <p className="rpp-push-fine">{message}</p>}
          <div className="rpp-push-row">
            <button type="button" className="rpp-push-ghost" onClick={() => { setPhase("form"); setMessage(""); }}>
              Change area
            </button>
            <button type="button" className="rpp-push-ghost" onClick={turnOff}>
              Turn off alerts
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="rpp-push-label" id={`${id}-area`}>Area</div>
          <select
            className="rpp-push-select"
            aria-labelledby={`${id}-area`}
            value={area}
            onChange={(e) => setArea(e.target.value)}
            disabled={phase === "working"}
          >
            <option value="statewide">All of Washington</option>
            {AFH_CITY_PAGES.map((c) => (
              <option key={c.slug} value={c.slug}>{c.city}</option>
            ))}
          </select>

          {page && nearbyNames.length > 0 && (
            <div className="rpp-push-check">
              <input
                id={`${id}-near`}
                type="checkbox"
                checked={nearby}
                onChange={(e) => setNearby(e.target.checked)}
                disabled={phase === "working"}
                aria-labelledby={`${id}-near-text`}
              />
              <div id={`${id}-near-text`} className="rpp-push-checktext" onClick={() => setNearby(!nearby)}>
                Also nearby cities: {nearbyNames.join(", ")}
              </div>
            </div>
          )}

          <div className="rpp-push-row">
            <button type="button" className="rpp-push-submit" onClick={turnOn} disabled={phase === "working"}>
              {phase === "working" ? "Turning on…" : "Turn on phone alerts"}
            </button>
          </div>
          {message && (
            <p className={phase === "error" ? "rpp-push-error" : "rpp-push-fine"} role={phase === "error" ? "alert" : "status"}>
              {message}
            </p>
          )}
          <p className="rpp-push-fine">
            Your phone will ask permission first. Listings in cities without their own page reach the All of Washington choice.
          </p>
        </div>
      )}
    </div>
  );
}

const STYLES = `
.rpp-push.rpp-push {
  background: #ffffff;
  border: 1px solid #ddd6cc;
  border-left: 4px solid var(--rpp-push-accent);
  border-radius: 8px;
  padding: 28px 24px;
  margin: 0 auto 24px;
  max-width: 640px;
}
.rpp-push .rpp-push-heading.rpp-push-heading {
  font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif !important;
  font-size: 24px !important; font-weight: 600 !important; line-height: 1.25 !important;
  color: #272421 !important; margin: 0 0 10px !important;
}
.rpp-push .rpp-push-body.rpp-push-body,
.rpp-push .rpp-push-strong.rpp-push-strong,
.rpp-push .rpp-push-steps li {
  font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif !important;
  font-size: 18px !important; line-height: 1.55 !important; color: #1c1917 !important;
  margin: 0 0 16px !important;
}
.rpp-push .rpp-push-strong.rpp-push-strong { font-weight: 700 !important; margin-bottom: 10px !important; }
.rpp-push .rpp-push-steps ol { margin: 0 0 12px 1.4em !important; padding: 0 !important; list-style: decimal !important; }
.rpp-push .rpp-push-steps li { margin: 0 0 8px !important; }
.rpp-push .rpp-push-label.rpp-push-label {
  font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif !important;
  font-size: 17px !important; font-weight: 700 !important; color: #272421 !important; margin: 0 0 6px !important;
}
.rpp-push .rpp-push-select.rpp-push-select {
  width: 100%; max-width: 360px; min-height: 52px; padding: 10px 12px !important;
  font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif !important;
  font-size: 18px !important; color: #272421 !important; background: #ffffff !important;
  border: 1px solid #8c8075 !important; border-radius: 6px !important;
}
.rpp-push .rpp-push-check { display: flex; align-items: flex-start; gap: 12px; margin: 16px 0 0; }
.rpp-push .rpp-push-check input { width: 26px; height: 26px; margin-top: 2px; flex: 0 0 auto; accent-color: var(--rpp-push-accent); cursor: pointer; }
.rpp-push .rpp-push-checktext.rpp-push-checktext {
  font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif !important;
  font-size: 18px !important; line-height: 1.45 !important; color: #1c1917 !important; cursor: pointer;
}
.rpp-push .rpp-push-row { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 20px; }
.rpp-push .rpp-push-submit.rpp-push-submit,
.rpp-push .rpp-push-ghost.rpp-push-ghost {
  min-height: 52px; padding: 12px 22px !important;
  font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif !important;
  font-size: 18px !important; font-weight: 700 !important; border-radius: 6px !important; cursor: pointer !important;
}
.rpp-push .rpp-push-submit.rpp-push-submit { color: #ffffff !important; background: var(--rpp-push-accent) !important; border: none !important; }
.rpp-push .rpp-push-submit.rpp-push-submit:hover { background: var(--rpp-push-hover) !important; }
.rpp-push .rpp-push-ghost.rpp-push-ghost { color: var(--rpp-push-accent) !important; background: #ffffff !important; border: 2px solid var(--rpp-push-accent) !important; }
.rpp-push .rpp-push-submit:focus-visible, .rpp-push .rpp-push-ghost:focus-visible, .rpp-push .rpp-push-select:focus-visible, .rpp-push .rpp-push-check input:focus-visible {
  outline: 3px solid #272421 !important; outline-offset: 3px !important;
}
.rpp-push .rpp-push-submit:disabled, .rpp-push .rpp-push-select:disabled { opacity: 0.65; cursor: default !important; }
.rpp-push .rpp-push-fine.rpp-push-fine {
  font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif !important;
  font-size: 16px !important; line-height: 1.5 !important; color: #1c1917 !important; margin: 14px 0 0 !important;
}
.rpp-push .rpp-push-error.rpp-push-error {
  font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif !important;
  font-size: 16px !important; font-weight: 700 !important; color: #8a1f1f !important; margin: 14px 0 0 !important;
}
`;
