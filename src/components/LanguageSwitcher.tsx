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
  "/afh-club": true,
  "/cost-of-care-calculator": true,
  "/contact": true,
};

/* Some translated pages take a path parameter, so an exact-match lookup misses
   them. /cost-of-care-calculator is listed above, but the six real pages are
   /cost-of-care-calculator/<careSlug> — and every one of those matched nothing,
   so the switcher greyed out all seven languages and told the reader the page
   was English-only. The locale routes existed and worked the whole time; there
   was simply no way to reach them from the flag menu.

   Prefixes are listed separately rather than making the whole table a prefix
   match, because "/" is in the table and would then match every page on the
   site. Add a parent path here when its children are translated. */
const TRANSLATED_PAGE_PREFIXES: string[] = ["/cost-of-care-calculator/"];

const LANGUAGE_PATH_PREFIXES = SUPPORTED_LANGUAGES.filter((l) => l.pathPrefix).map((l) => l.pathPrefix);

/** Strips a known language prefix off the current path, returning the underlying English path. */
function toEnglishPath(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length > 0 && LANGUAGE_PATH_PREFIXES.some((prefix) => prefix === segments[0])) {
    segments.shift();
  }
  return "/" + segments.join("/");
}

type LanguageSwitcherProps = {
  /**
   * Compact mode renders the flag only, dropping the "LANGUAGE" text label.
   * Used in the mobile header, where the full label costs ~68px of horizontal
   * space and pushed the CALL button off the right edge of the screen.
   * The button keeps its aria-label, so it stays accessible without the text.
   */
  compact?: boolean;
};

const LanguageSwitcher = ({ compact = false }: LanguageSwitcherProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  /* Hover colour is handled in state rather than by the .rpp-top-link CSS
     rule, because the inline styles below would otherwise win the specificity
     contest and the gold hover would never fire. */
  const [hovered, setHovered] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const englishPath = toEnglishPath(location.pathname);
  const isTranslated =
    !!TRANSLATED_PAGES[englishPath] ||
    TRANSLATED_PAGE_PREFIXES.some((prefix) => englishPath.startsWith(prefix));

  const currentSegment = location.pathname.split("/").filter(Boolean)[0] || "";
  const currentLang = SUPPORTED_LANGUAGES.find((l) => l.pathPrefix === currentSegment)?.code ?? "en";

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
    <div ref={menuRef} style={{ position: "relative", display: compact ? "flex" : "inline-block", alignSelf: compact ? "stretch" : undefined }}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Choose language"
        className={compact ? undefined : "rpp-top-link"}
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: compact ? 0 : 8,
          background: "transparent",
          /* On desktop this now matches the plain uppercase nav links either
             side of it. The outlined pill made it read as a component from a
             different design system and broke the rhythm of the link row.
             Compact (mobile) keeps the bordered box, where it genuinely is a
             standalone icon button. */
          border: compact ? "1px solid rgba(39,36,33,0.35)" : "none",
          borderRadius: compact ? 6 : 0,
          padding: compact ? "0" : "6px 4px",
          /* Sized to sit level with the phone button beside it in the header:
             22px type plus 8px padding top and bottom puts that button at
             roughly 42px, so this matches. 44 was the accessibility minimum
             rather than a visual match, and left the flag looking undersized
             next to a much larger control. */
          /* Height comes from the row rather than a number: the parent in
             Header.tsx stretches its children, so this matches the phone
             button exactly and keeps matching if the phone's padding or type
             size ever changes. A fixed minHeight was guesswork and never quite
             lined up. */
          minWidth: compact ? 56 : undefined,
          minHeight: compact ? 44 : undefined,
          height: compact ? "100%" : undefined,
          alignSelf: compact ? "stretch" : undefined,
          fontFamily: "'DM Sans', system-ui, sans-serif",
          fontSize: 13,
          fontWeight: 600,
          letterSpacing: compact ? "0.06em" : "0.08em",
          textTransform: "uppercase",
        color: compact ? "#272421" : hovered ? "#7f1d1d" : "#272421",
          transition: "color 0.18s ease",
          cursor: "pointer",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {(() => {
          const CurrentFlag = FLAG_COMPONENTS[currentLang];
          return CurrentFlag ? <CurrentFlag size={compact ? 26 : 16} /> : null;
        })()}
        {!compact && "LANGUAGE"}
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
            minWidth: 260,
            zIndex: 200,
            padding: "6px 0",
          }}
        >
          {!isTranslated && (
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
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
                  gap: 16,
                  width: "100%",
                  background: "transparent",
                  border: "none",
                  borderBottom: "1px solid #f2ede8",
                  textAlign: "left",
                  padding: "14px 18px",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 16,
                  fontWeight: selected ? 700 : 500,
                  color: disabled ? "#c2b9b1" : "#302b26",
                  cursor: disabled ? "not-allowed" : "pointer",
                  opacity: disabled ? 0.6 : 1,
                }}
              >
                <span style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  {Flag && <Flag size={32} />}
                  <span style={{ lineHeight: 1.4 }}>
                    {l.nativeLabel}
                    {l.nativeLabel !== l.label && (
                      <>
                        <br />
                        <span style={{ color: "#9a8f89", fontWeight: 400, fontSize: 13 }}>{l.label}</span>
                      </>
                    )}
                  </span>
                </span>
                {selected && <Check size={17} aria-hidden="true" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
