import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en.json";
import es from "./locales/es.json";
import zhTW from "./locales/zh-TW.json";
import zhCN from "./locales/zh-CN.json";
import tl from "./locales/tl.json";
import vi from "./locales/vi.json";

// Supported languages, keyed by the URL path prefix used for each
// (e.g. realpropertyplanning.com/es/probate-estate-sales).
// English has no prefix and lives at the site root.
export const SUPPORTED_LANGUAGES = [
  { code: "en", pathPrefix: "", label: "English", nativeLabel: "English" },
  { code: "es", pathPrefix: "es", label: "Spanish", nativeLabel: "Español" },
  { code: "zh-TW", pathPrefix: "zh-tw", label: "Chinese (Traditional)", nativeLabel: "繁體中文" },
  { code: "zh-CN", pathPrefix: "zh-cn", label: "Chinese (Simplified)", nativeLabel: "简体中文" },
  { code: "tl", pathPrefix: "tl", label: "Tagalog", nativeLabel: "Tagalog" },
  { code: "vi", pathPrefix: "vi", label: "Vietnamese", nativeLabel: "Tiếng Việt" },
] as const;

export type SupportedLanguageCode = (typeof SUPPORTED_LANGUAGES)[number]["code"];

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
      "zh-TW": { translation: zhTW },
      "zh-CN": { translation: zhCN },
      tl: { translation: tl },
      vi: { translation: vi },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    // Language is driven explicitly by the URL path prefix (see
    // LanguageRouteSync in App.tsx), not by browser auto-detection —
    // this keeps the URL and displayed language always in sync, which
    // matters for SEO (each language gets its own indexable URLs).
    detection: {
      order: [],
    },
  });

export default i18n;
