import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en.json";

// English only since Sept 30, 2026: the seven translated languages (es, zh-TW,
// zh-CN, tl, vi, ro, ti) were retired after Analytics showed 241 views in 90
// days, nearly all 0-second visits. Their files remain in git history; their
// old addresses redirect to English (src/data/redirects.ts).
export const SUPPORTED_LANGUAGES = [
  { code: "en", pathPrefix: "", label: "English", nativeLabel: "English" },
] as const;

export type SupportedLanguageCode = (typeof SUPPORTED_LANGUAGES)[number]["code"];

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
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
