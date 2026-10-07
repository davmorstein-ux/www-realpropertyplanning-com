import i18n from "i18next";
import { initReactI18next } from "react-i18next";

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
    // No browser language detection: English only, and the detector library
    // (with detection switched off) was 35 KB of every page's first download.
    // Removed Oct 6, 2026.
  });

export default i18n;
