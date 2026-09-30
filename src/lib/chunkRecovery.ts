import { lazy as reactLazy, type ComponentType } from "react";

/**
 * Recovering when a page's code file fails to load (Sept 29, 2026).
 *
 * After a publish, a tab opened earlier still asks for the previous build's
 * file names, which no longer exist. The old guard reloaded once per browser
 * SESSION and then silently swallowed every later failure, so after a few
 * publishes a menu click simply did nothing (owner report, Sept 29, 2026).
 *
 * Now every failure reloads the page, with the address already set to where
 * the visitor was going, so they land on the page they clicked. The only
 * limit is a 15-second window, which prevents a reload loop if the file is
 * genuinely missing. Uses sessionStorage for one timestamp; it is not
 * tracking (see the privacy page's storage list).
 */

const KEY = "rpp-chunk-reload-at";
const WINDOW_MS = 15_000;

export function recoverFromChunkError(): boolean {
  let last = 0;
  try {
    last = Number(sessionStorage.getItem(KEY) || 0);
  } catch {
    /* storage blocked: still reload, the window guard just won't apply */
  }
  if (Date.now() - last < WINDOW_MS) return false;
  try {
    sessionStorage.setItem(KEY, String(Date.now()));
  } catch {
    /* ignore */
  }
  window.location.reload();
  return true;
}

const looksLikeChunkError = (err: unknown) =>
  /dynamically imported module|Importing a module script failed|error loading dynamically imported module|Failed to fetch|Loading chunk/i.test(
    String((err as Error)?.message ?? err)
  );

/** React.lazy that reloads to the fresh build when the page's file is gone. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function lazy<T extends ComponentType<any>>(factory: () => Promise<{ default: T }>) {
  return reactLazy(() =>
    factory().catch((err) => {
      if (looksLikeChunkError(err) && recoverFromChunkError()) {
        // Keep the current screen until the reload takes over.
        return new Promise<{ default: T }>(() => {});
      }
      throw err;
    })
  );
}
