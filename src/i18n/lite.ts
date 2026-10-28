/**
 * A tiny stand-in for i18next + react-i18next (Oct 28, 2026, code splitting).
 *
 * The site has been English only since Sept 30, 2026, yet the two libraries were
 * ~80 KB of every page's first download (about a tenth of the main JavaScript file),
 * run on the phone before the page could finish drawing. Everything the site
 * actually uses is here:
 *   - useTranslation() -> { t, i18n }
 *   - t(key, { defaultValue, ...values }) with {{value}} placeholders
 *   - i18n.language / i18n.changeLanguage()
 * vite.config.ts points "react-i18next" and "i18next" at this file, so components
 * keep their normal imports. If translations ever come back, delete the two
 * aliases in vite.config.ts and the real libraries take over unchanged.
 *
 * Missing keys behave like i18next: the defaultValue if one was given, else the key.
 */
import en from "./locales/en.json";

type Values = { defaultValue?: string; [k: string]: unknown };

const lookup = (key: string): unknown => {
  let node: unknown = en;
  for (const part of key.split(".")) {
    if (node && typeof node === "object" && part in (node as Record<string, unknown>)) {
      node = (node as Record<string, unknown>)[part];
    } else {
      return undefined;
    }
  }
  return node;
};

export function t(key: string, values?: Values | string): string {
  const opts: Values = typeof values === "string" ? { defaultValue: values } : values || {};
  const found = lookup(key);
  const raw = typeof found === "string" ? found : opts.defaultValue ?? key;
  return raw.replace(/\{\{\s*([\w.]+)\s*\}\}/g, (m, name: string) =>
    name in opts && opts[name] !== undefined && opts[name] !== null ? String(opts[name]) : m,
  );
}

const i18n = {
  language: "en",
  languages: ["en"],
  isInitialized: true,
  t,
  changeLanguage(lng?: string) {
    if (lng) i18n.language = lng;
    return Promise.resolve(t);
  },
  exists: (key: string) => typeof lookup(key) === "string",
  use() {
    return i18n;
  },
  init() {
    return Promise.resolve(t);
  },
  on() {},
  off() {},
};

export { i18n };
export default i18n;

export function useTranslation() {
  return { t, i18n, ready: true } as const;
}

/* react-i18next's plugin object; config.ts passes it to i18n.use(). */
export const initReactI18next = { type: "3rdParty", init() {} };
