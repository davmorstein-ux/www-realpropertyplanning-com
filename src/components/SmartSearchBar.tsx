import { useState, useRef, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Mic, MicOff, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  Keyword → route mapping                                           */
/* ------------------------------------------------------------------ */

interface RouteMatch {
  keywords: string[];
  path: string;
  label: string;
}

const routeMap: RouteMatch[] = [
  {
    keywords: ["attorney", "attorneys", "lawyer", "lawyers", "legal", "law firm", "counsel"],
    path: "/for-attorneys",
    label: "For Attorneys",
  },
  {
    keywords: ["executor", "executors", "personal representative", "pr", "administer", "administering"],
    path: "/executors",
    label: "Personal Representatives",
  },
  {
    keywords: ["trustee", "fiduciary", "fiduciaries", "trust", "trusts"],
    path: "/executors",
    label: "Trustees & Fiduciaries",
  },
  {
    keywords: ["cpa", "cpas", "accountant", "accounting", "tax"],
    path: "/for-cpas",
    label: "CPAs",
  },
  {
    keywords: ["financial planner", "financial advisor", "wealth", "investment", "financial planning"],
    path: "/for-financial-planners",
    label: "Financial Planners",
  },
  {
    keywords: ["senior", "seniors", "elderly", "aging", "downsizing", "downsize", "move", "moving", "assisted living", "retirement", "older parent", "mom", "dad", "parent", "parents"],
    path: "/senior-transitions",
    label: "Senior Transitions",
  },
  {
    keywords: ["probate", "estate sale", "inherited", "inheritance", "selling inherited", "sell inherited", "deceased", "passed away", "death"],
    path: "/probate-estate-sales",
    label: "Probate & Estate Sales",
  },
  {
    keywords: ["process", "how does", "step by step", "steps", "how it works", "what happens", "how do"],
    path: "/how-the-process-works",
    label: "How the Process Works",
  },
  {
    keywords: ["valuation", "value", "appraisal", "worth", "market value", "home value", "property value", "pricing"],
    path: "/why-valuation-matters",
    label: "Why Valuation Matters",
  },
  {
    keywords: ["terminology", "definition", "definitions", "glossary", "what does", "what is", "meaning", "term", "terms"],
    path: "/terminology",
    label: "Probate Terminology",
  },
  {
    keywords: ["area", "areas", "county", "counties", "location", "where", "seattle", "tacoma", "washington", "puget", "king", "pierce", "snohomish", "kitsap", "skagit"],
    path: "/counties",
    label: "Service Areas",
  },
  {
    keywords: ["resource", "resources", "referral", "partner", "network", "professional"],
    path: "/professional-referral-resource",
    label: "Professional Resources",
  },
  {
    keywords: ["contact", "call", "schedule", "consultation", "appointment", "talk", "reach", "phone", "email"],
    path: "/contact",
    label: "Contact",
  },
];

function findBestRoute(input: string): RouteMatch | null {
  const lower = input.toLowerCase().trim();
  if (!lower) return null;

  let bestMatch: RouteMatch | null = null;
  let bestScore = 0;

  for (const route of routeMap) {
    for (const kw of route.keywords) {
      if (lower.includes(kw)) {
        // Longer keyword matches are more specific → higher score
        const score = kw.length;
        if (score > bestScore) {
          bestScore = score;
          bestMatch = route;
        }
      }
    }
  }

  return bestMatch;
}

/* ------------------------------------------------------------------ */
/*  Suggested prompts                                                  */
/* ------------------------------------------------------------------ */

const suggestedPrompts = [
  "I'm an executor",
  "I need help selling an inherited home",
  "What does probate mean?",
  "I'm helping a senior move",
  "I'm an attorney looking for a resource",
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

const SmartSearchBar = () => {
  const [query, setQuery] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [suggestion, setSuggestion] = useState<RouteMatch | null>(null);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const navigate = useNavigate();

  // Debounced routing suggestion
  useEffect(() => {
    if (!query.trim()) {
      setSuggestion(null);
      setShowSuggestion(false);
      return;
    }
    const timer = setTimeout(() => {
      const match = findBestRoute(query);
      setSuggestion(match);
      setShowSuggestion(!!match);
    }, 300);
    return () => clearTimeout(timer);
  }, [query]);

  const handleSubmit = useCallback(() => {
    const match = findBestRoute(query);
    if (match) {
      navigate(match.path);
    } else if (query.trim()) {
      // Fallback: go to FAQ
      navigate("/faq");
    }
  }, [query, navigate]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter") handleSubmit();
    },
    [handleSubmit],
  );

  const handlePromptClick = useCallback(
    (prompt: string) => {
      setQuery(prompt);
      const match = findBestRoute(prompt);
      if (match) {
        navigate(match.path);
      }
    },
    [navigate],
  );

  const handleSuggestionClick = useCallback(() => {
    if (suggestion) navigate(suggestion.path);
  }, [suggestion, navigate]);

  /* ---- Voice input ---- */
  const supportsVoice =
    typeof window !== "undefined" &&
    ("SpeechRecognition" in window || "webkitSpeechRecognition" in window);

  const toggleVoice = useCallback(() => {
    if (isListening && recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
      return;
    }

    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) return;

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const transcript = event.results[0][0].transcript;
      setQuery(transcript);
      setIsListening(false);
      // Auto-navigate after voice result
      const match = findBestRoute(transcript);
      if (match) {
        setTimeout(() => navigate(match.path), 600);
      }
    };

    recognition.onerror = () => setIsListening(false);
    recognition.onend = () => setIsListening(false);

    recognitionRef.current = recognition;
    recognition.start();
    setIsListening(true);
  }, [isListening, navigate]);

  return (
    <div className="w-full max-w-2xl mx-auto mb-10">
      {/* Search bar */}
      <div
        className="relative flex items-center rounded-full border-2 border-border bg-card transition-all duration-200 focus-within:border-gold focus-within:ring-2 focus-within:ring-gold/20"
        style={{
          boxShadow:
            "0 4px 20px -4px hsl(220 35% 15% / 0.08), inset 0 1px 0 hsl(0 0% 100% / 0.7)",
        }}
      >
        <Search className="ml-5 w-5 h-5 text-muted-foreground flex-shrink-0" />

        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Tell us what you need help with…"
          className="flex-1 bg-transparent border-none outline-none py-4 px-4 text-base lg:text-lg text-foreground placeholder:text-muted-foreground/60 font-sans"
          aria-label="Search for help"
        />

        {/* Voice button */}
        {supportsVoice && (
          <button
            onClick={toggleVoice}
            aria-label={isListening ? "Stop listening" : "Use voice input"}
            className={cn(
              "flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center mr-1.5 transition-all duration-200",
              isListening
                ? "bg-destructive/10 text-destructive animate-pulse"
                : "text-muted-foreground hover:text-foreground hover:bg-muted",
            )}
          >
            {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
          </button>
        )}

        {/* Submit button */}
        <button
          onClick={handleSubmit}
          aria-label="Search"
          className="flex-shrink-0 w-10 h-10 rounded-full bg-navy text-primary-foreground flex items-center justify-center mr-1.5 transition-all duration-200 hover:bg-navy-light active:scale-95"
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      {/* Routing suggestion */}
      {showSuggestion && suggestion && (
        <button
          onClick={handleSuggestionClick}
          className="mt-3 mx-auto flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-sm text-foreground hover:bg-muted transition-colors duration-200 animate-fade-in"
        >
          <Search className="w-3.5 h-3.5 text-gold-dark" />
          <span>
            Go to <strong className="font-semibold text-navy">{suggestion.label}</strong>
          </span>
          <ArrowRight className="w-3.5 h-3.5 text-muted-foreground" />
        </button>
      )}

      {/* Suggested prompts */}
      <div className="flex flex-wrap justify-center gap-2 mt-5">
        {suggestedPrompts.map((prompt) => (
          <button
            key={prompt}
            onClick={() => handlePromptClick(prompt)}
            className="px-4 py-2 rounded-full border border-border bg-card text-sm text-muted-foreground hover:text-foreground hover:border-gold/40 hover:bg-gold/5 transition-all duration-200 active:scale-95"
          >
            {prompt}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SmartSearchBar;
