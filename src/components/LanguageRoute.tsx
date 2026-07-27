import { useEffect, ReactNode } from "react";
import i18n from "@/i18n/config";
import type { SupportedLanguageCode } from "@/i18n/config";

interface LanguageRouteProps {
  lang: SupportedLanguageCode;
  children: ReactNode;
}

/**
 * Wraps a page so that, whenever this route is visited, i18next's
 * active language is set to match the URL. This is deliberately
 * explicit (one wrapper per language route) rather than a generic
 * `/:lang?` wildcard pattern, since this site already has 300+
 * existing routes — an optional catch-all language prefix risks
 * subtly interfering with routes that were never meant to be
 * "under" a language segment. Explicit, fully-qualified routes avoid
 * that risk entirely, at the cost of a little more boilerplate per
 * language/page combination as translated pages are added.
 */
const LanguageRoute = ({ lang, children }: LanguageRouteProps) => {
  useEffect(() => {
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
    document.documentElement.lang = lang;
  }, [lang]);

  return <>{children}</>;
};

export default LanguageRoute;
