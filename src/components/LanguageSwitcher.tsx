import { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Check } from "lucide-react";
import { SUPPORTED_LANGUAGES, type SupportedLanguageCode } from "@/i18n/config";
import { FLAG_COMPONENTS } from "@/components/FlagIcons";

// Pages that currently have real, translated content. As more pages
// get translated in future sessions, add their English path here —
// the switcher will only offer languages for pages that actually have
// translated content, falling back to English for everything else.
const TRANSLATED_PAGES: Record<string, true> = {
  "/": true,
  "/probate-estate-sales": true,
  "/senior-transitions": true,
};

const LANGUAGE_PATH_PREFIXES = SUPPORTED_LANGUAGES.filter((l) => l.pathPrefix).map((l) => l.pathPrefix);

/** Strips a known language prefix off the current path, returning the underlying English path. */
function toEnglishPath(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length > 0 && LANGUAGE_PATH_PREFIXES.some((prefix) => prefix === segments[0])) {
    segments.shift();
  }
  return "/" + segments.join("/");
}

const LanguageSwitcher = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const englishPath = toEnglishPath(location.pathname);
  const isTranslated = !!TRANSLATED_PAGES[englishPath];

  const currentSegment = location.pathname.split("/").filter(Boolean)[0] || "";
  const currentLang =
    SUPPORTED_LANGUAGES.find((l) => l.pathPrefix === currentSegment)?.code ?? "en";

  useEffect(() => {
    if (!open) return;
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  const handleSelect = (code: SupportedLanguageCode, pathPrefix: string) => {
    setOpen(false);
    const target = pathPrefix ? `/${pathPrefix}${englishPath === "/" ? "" : englishPath}` : englishPath;
    navigate(target);
  };

  return (
    <div ref={menuRef} style={{ position: "relative", display: "inline-block" }}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Choose language"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          background: "transparent",
          border: "1px solid rgba(0,0,0,0.15)",
          borderRadius: 6,
          padding: "6px 10px",
          fontFamily: "'Raleway', sans-serif",
          fontSize: 13,
          fontWeight: 600,
          color: "#302b26",
          cursor: "pointer",
        }}
      >
        {(() => {
          const CurrentFlag = FLAG_COMPONENTS[currentLang];
          return CurrentFlag ? <CurrentFlag size={18} /> : null;
        })()}
        {SUPPORTED_LANGUAGES.find((l) => l.code === currentLang)?.nativeLabel}
      </button>
      {open && (
        <div
          role="listbox"
          style={{
            position: "absolute",
            top: "calc(100% + 6px)",
            right: 0,
            background: "#ffffff",
            border: "1px solid #e7e0da",
            borderRadius: 8,
            boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
            minWidth: 200,
            zIndex: 200,
            padding: "6px 0",
          }}
        >
          {!isTranslated && (
            <p
              style={{
                fontFamily: "'Raleway', sans-serif",
                fontSize: 12,
                color: "#7a6a6c",
                margin: 0,
                padding: "8px 14px",
                borderBottom: "1px solid #f0ebe6",
              }}
            >
              This page is only available in English right now.
            </p>
          )}
          {SUPPORTED_LANGUAGES.map((l) => {
            const disabled = l.code !== "en" && !isTranslated;
            const selected = l.code === currentLang;
            const Flag = FLAG_COMPONENTS[l.code];
            return (
              <button
                key={l.code}
                type="button"
                role="option"
                aria-selected={selected}
                disabled={disabled}
                onClick={() => !disabled && handleSelect(l.code, l.pathPrefix)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 10,
                  width: "100%",
                  background: "transparent",
                  border: "none",
                  textAlign: "left",
                  padding: "8px 14px",
                  fontFamily: "'Raleway', sans-serif",
                  fontSize: 14,
                  fontWeight: selected ? 700 : 500,
                  color: disabled ? "#c2b9b1" : "#302b26",
                  cursor: disabled ? "not-allowed" : "pointer",
                  opacity: disabled ? 0.6 : 1,
                }}
              >
                <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  {Flag && <Flag size={20} />}
                  <span>
                    {l.nativeLabel}
                    {l.nativeLabel !== l.label && (
                      <span style={{ color: "#9a8f89", fontWeight: 400 }}> · {l.label}</span>
                    )}
                  </span>
                </span>
                {selected && <Check size={15} aria-hidden="true" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
