import { useState, useRef, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { siteSearchIndex } from "@/lib/siteSearchIndex";

/**
 * Always-visible search bar — sits directly under the nav bar on every
 * page. No click-to-open step: type, see matching pages appear right
 * below, click one to go there. Built simple and direct on purpose,
 * since this site's visitors skew older and shouldn't have to figure
 * out a hidden search feature.
 */
const SiteSearchBar = () => {
  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    const scoreEntry = (label: string, path: string): number => {
      const l = label.toLowerCase();
      if (l === q) return 100; // exact label match
      if (l.startsWith(q)) return 80; // label starts with query
      // whole-word match anywhere in the label
      if (new RegExp(`\\b${q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`).test(l)) return 60;
      if (l.includes(q)) return 40; // substring match in label
      if (path.toLowerCase().includes(q)) return 20; // only the path matches
      return 0;
    };

    return siteSearchIndex
      .map((entry) => ({ entry, score: scoreEntry(entry.label, entry.path) }))
      .filter((r) => r.score > 0)
      .sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score;
        // Equal relevance: shorter, more canonical labels rank above longer,
        // more specific ones (e.g. "Probate & Estate Sales" over
        // "Bellevue Probate Estate Real Estate").
        return a.entry.label.length - b.entry.label.length;
      })
      .slice(0, 8)
      .map((r) => r.entry);
  }, [query]);

  // Close results dropdown when clicking outside the search bar
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setShowResults(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const goTo = (path: string) => {
    setQuery("");
    setShowResults(false);
    navigate(path);
  };

  return (
    <div ref={containerRef} style={{ position: "relative", width: "100%" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          background: "#ffffff",
          borderRadius: 8,
          padding: "10px 16px",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <Search size={20} color="#6b1b22" strokeWidth={2.25} style={{ flexShrink: 0 }} aria-hidden="true" />
        <input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setShowResults(true);
          }}
          onFocus={() => setShowResults(true)}
          placeholder="Search for a page…"
          aria-label="Search this site"
          style={{
            flex: 1,
            border: "none",
            outline: "none",
            fontSize: 17,
            fontFamily: "'Raleway', sans-serif",
            color: "#272421",
            background: "transparent",
            minWidth: 0,
          }}
        />
      </div>

      {showResults && query.trim() !== "" && (
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 6px)",
            left: 0,
            right: 0,
            background: "#ffffff",
            borderRadius: 8,
            boxShadow: "0 12px 32px rgba(0,0,0,0.25)",
            overflow: "hidden",
            zIndex: 100,
          }}
        >
          {results.length === 0 && (
            <div
              style={{
                padding: "18px 16px",
                fontFamily: "'Raleway', sans-serif",
                fontSize: 16,
                color: "#806b6d",
              }}
            >
              No pages match "{query}"
            </div>
          )}
          {results.map((entry) => (
            <button
              key={entry.path}
              type="button"
              onClick={() => goTo(entry.path)}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                padding: "12px 16px",
                background: "transparent",
                border: "none",
                borderBottom: "1px solid #f0ede4",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  fontFamily: "'Raleway', sans-serif",
                  fontSize: 16,
                  fontWeight: 600,
                  color: "#272421",
                }}
              >
                {entry.label}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SiteSearchBar;
