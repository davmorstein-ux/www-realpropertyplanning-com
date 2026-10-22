/**
 * "Get the Real Plan app" note (owner's request, Oct 18, 2026).
 *
 * Real Plan is the site installed to a phone's Home Screen (manifest:
 * public/site.webmanifest). It is not in the App Store, so people only find it
 * if the site tells them. This note shows the steps for the visitor's phone:
 *   - iPhone / iPad: Share → Add to Home Screen (Safari has no install button)
 *   - Android Chrome: an Install button when the browser offers one
 *     (beforeinstallprompt), otherwise the menu steps
 *   - computer: open the site on your phone
 * Hidden entirely when the visitor is already inside the installed app.
 *
 * English pages only: the text has no translations yet.
 */
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { isIOS, isStandalone } from "@/lib/pushAlerts";

type Platform = "ios" | "android" | "desktop";

interface InstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export default function AFHGetApp() {
  const { i18n } = useTranslation();
  const [platform, setPlatform] = useState<Platform>("desktop");
  const [installed, setInstalled] = useState(false);
  const [prompt, setPrompt] = useState<InstallPromptEvent | null>(null);

  useEffect(() => {
    setInstalled(isStandalone());
    setPlatform(isIOS() ? "ios" : /Android/i.test(navigator.userAgent) ? "android" : "desktop");
    const onPrompt = (e: Event) => { e.preventDefault(); setPrompt(e as InstallPromptEvent); };
    const onInstalled = () => setInstalled(true);
    window.addEventListener("beforeinstallprompt", onPrompt);
    window.addEventListener("appinstalled", onInstalled);
    return () => {
      window.removeEventListener("beforeinstallprompt", onPrompt);
      window.removeEventListener("appinstalled", onInstalled);
    };
  }, []);

  if (installed || !(i18n.language || "en").startsWith("en")) return null;

  const install = async () => {
    if (!prompt) return;
    await prompt.prompt();
    const { outcome } = await prompt.userChoice;
    if (outcome === "accepted") setInstalled(true);
    setPrompt(null);
  };

  return (
    <div className="rpp-getapp">
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <img src="/real-plan-icon-192.png" alt="" width={72} height={72} className="rpp-getapp-icon" />
      <div className="rpp-getapp-text">
        <p className="rpp-getapp-heading">Get the Real Plan app</p>
        <p className="rpp-getapp-body">
          Real Property Planning on your Home Screen, with phone alerts when an adult family home lists, changes price, or sells
          in the cities you choose. Free, and not in the App Store: you add it from this site.
        </p>
        {platform === "ios" && (
          <ol className="rpp-getapp-steps">
            <li>Tap <strong>Share</strong> at the bottom of Safari (the square with an arrow).</li>
            <li>Choose <strong>Add to Home Screen</strong>, then <strong>Add</strong>.</li>
          </ol>
        )}
        {platform === "android" && (prompt ? (
          <button type="button" className="rpp-getapp-install" onClick={install}>Install Real Plan</button>
        ) : (
          <ol className="rpp-getapp-steps">
            <li>Tap the <strong>⋮</strong> menu at the top right of Chrome.</li>
            <li>Choose <strong>Install app</strong> or <strong>Add to Home screen</strong>.</li>
          </ol>
        ))}
        {platform === "desktop" && (
          <p className="rpp-getapp-body">
            On your phone, open <strong>realpropertyplanning.com/afh-club</strong>. On iPhone tap Share, then Add to Home Screen; on
            Android use the Chrome menu, then Install app.
          </p>
        )}
        <p className="rpp-getapp-fine">
          Then pick your area under “Get a phone alert” on any <a href="/afh-club/listings">AFH listings page</a>.
        </p>
      </div>
    </div>
  );
}

/* Doubled class selectors with !important: index.css forces sizes on bare
   p / li / button inside main. No class contains "btn" or "cta". */
const STYLES = `
.rpp-getapp.rpp-getapp {
  display: flex; gap: 18px; align-items: flex-start;
  max-width: 860px; margin: 0 auto; padding: 24px 22px;
  background: #ffffff; border: 1px solid #ddd6cc; border-left: 4px solid #0a5648; border-radius: 8px;
  font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif;
}
.rpp-getapp .rpp-getapp-icon { flex: 0 0 auto; width: 72px; height: 72px; border-radius: 16px; border: 1px solid #e3ddd3; }
.rpp-getapp .rpp-getapp-text { min-width: 0; }
.rpp-getapp .rpp-getapp-heading.rpp-getapp-heading {
  font-size: 24px !important; font-weight: 600 !important; line-height: 1.25 !important; color: #272421 !important; margin: 0 0 8px !important;
}
.rpp-getapp .rpp-getapp-body.rpp-getapp-body, .rpp-getapp .rpp-getapp-steps li {
  font-size: 18px !important; line-height: 1.55 !important; color: #1c1917 !important; margin: 0 0 12px !important;
}
.rpp-getapp .rpp-getapp-steps { margin: 0 0 12px 1.4em !important; padding: 0 !important; list-style: decimal !important; }
.rpp-getapp .rpp-getapp-steps li { margin: 0 0 6px !important; }
.rpp-getapp .rpp-getapp-install.rpp-getapp-install {
  min-height: 52px; padding: 12px 22px !important; margin: 4px 0 12px !important;
  font-size: 18px !important; font-weight: 700 !important; color: #ffffff !important;
  background: #0a5648 !important; border: none !important; border-radius: 6px !important; cursor: pointer !important;
}
.rpp-getapp .rpp-getapp-install.rpp-getapp-install:hover { background: #07443a !important; }
.rpp-getapp .rpp-getapp-install:focus-visible { outline: 3px solid #272421 !important; outline-offset: 3px !important; }
.rpp-getapp .rpp-getapp-fine.rpp-getapp-fine { font-size: 16px !important; line-height: 1.5 !important; color: #1c1917 !important; margin: 0 !important; }
.rpp-getapp .rpp-getapp-fine a { color: #0a5648 !important; text-decoration: underline; font-size: 16px !important; }
@media (max-width: 520px) {
  .rpp-getapp.rpp-getapp { flex-direction: column; gap: 12px; padding: 20px 18px; }
  .rpp-getapp .rpp-getapp-icon { width: 60px; height: 60px; border-radius: 14px; }
}
`;
