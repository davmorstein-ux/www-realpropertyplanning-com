import { useState, useRef, useCallback, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Mic, MicOff, ArrowRight, Volume2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

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
    keywords: ["attorney", "attorneys", "lawyer", "lawyers", "legal", "law firm", "counsel", "law"],
    path: "/for-attorneys",
    label: "For Attorneys",
  },
  {
    keywords: ["executor", "executors", "personal representative", "pr", "administer", "administering", "appointed"],
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
    keywords: ["senior", "seniors", "elderly", "aging", "downsizing", "downsize", "move", "moving", "assisted living", "retirement", "older parent", "mom", "dad", "parent", "parents", "relocat"],
    path: "/senior-transitions",
    label: "Senior Transitions",
  },
  {
    keywords: ["probate", "estate sale", "inherited", "inheritance", "selling inherited", "sell inherited", "deceased", "passed away", "death", "sell", "selling", "house", "home", "property"],
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
    keywords: ["terminology", "definition", "definitions", "glossary", "what does", "what is", "meaning", "term", "terms", "mean"],
    path: "/terminology",
    label: "Probate Terminology",
  },
  {
    keywords: ["area", "areas", "county", "counties", "location", "where", "seattle", "tacoma", "washington", "puget", "king", "pierce", "snohomish", "kitsap", "skagit", "serve", "work", "cover"],
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

function findTopRoutes(input: string, max = 3): RouteMatch[] {
  const lower = input.toLowerCase().trim();
  if (!lower) return [];

  const scored: { route: RouteMatch; score: number }[] = [];

  for (const route of routeMap) {
    let routeBestScore = 0;
    for (const kw of route.keywords) {
      if (lower.includes(kw) && kw.length > routeBestScore) {
        routeBestScore = kw.length;
      }
    }
    if (routeBestScore > 0) {
      scored.push({ route, score: routeBestScore });
    }
  }

  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, max)
    .map((s) => s.route);
}

// Note: aria-label intentionally omitted so the visible button text is the
// accessible name — this prevents screen readers (and some audit tools) from
// announcing the label twice (e.g. "I'm an executor I'm an executor").
const suggestedPrompts = [
  { label: "I'm an executor" },
  { label: "I need help selling an inherited home" },
  { label: "I'm helping a senior move" },
  { label: "I'm an attorney looking for a resource" },
];

interface SmartSearchBarProps {
  pillsOnly?: boolean;
  searchOnly?: boolean;
}

const SmartSearchBar = ({ pillsOnly, searchOnly }: SmartSearchBarProps) => {
  const [query, setQuery] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [voiceStatus, setVoiceStatus] = useState<"idle" | "listening" | "processing" | "error">("idle");
  const [voiceError, setVoiceError] = useState<string | null>(null);
  const [suggestions, setSuggestions] = useState<RouteMatch[]>([]);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const recognitionRef = useRef<any>(null);
  
  const navigate = useNavigate();

  const supportsVoice = useMemo(
    () =>
      typeof window !== "undefined" &&
      ("SpeechRecognition" in window || "webkitSpeechRecognition" in window),
    [],
  );

  useEffect(() => {
    if (!query.trim()) {
      setSuggestions([]);
      return;
    }
    const timer = setTimeout(() => {
      setSuggestions(findTopRoutes(query));
    }, 250);
    return () => clearTimeout(timer);
  }, [query]);

  const handleSubmit = useCallback(() => {
    if (!query.trim()) return;

    const match = findBestRoute(query);
    if (match) {
      toast.success(`Taking you to ${match.label}`, { duration: 2000 });
      navigate(match.path);
    } else if (query.trim()) {
      toast.info("We couldn't find a perfect match. Here are some pages that might help.", {
        duration: 3000,
      });
      navigate("/services");
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
        toast.success(`Taking you to ${match.label}`, { duration: 2000 });
        navigate(match.path);
      }
    },
    [navigate],
  );

  const handleSuggestionClick = useCallback(() => {
    if (suggestions.length > 0) {
      toast.success(`Taking you to ${suggestions[0].label}`, { duration: 2000 });
      navigate(suggestions[0].path);
    }
  }, [suggestions, navigate]);

  const stopListening = useCallback(() => {
    if (isListening && recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch {
        // already stopped
      }
      setIsListening(false);
      setVoiceStatus("idle");
    }
  }, [isListening]);

  const startListening = useCallback(() => {
    if (!supportsVoice) {
      toast.error("Voice search is not supported on this device or browser. Please type your question instead.", {
        duration: 5000,
      });
      return;
    }

    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      toast.error("Voice search is not available. Please type your question instead.", {
        duration: 5000,
      });
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      setIsListening(true);
      setVoiceStatus("listening");
      setVoiceError(null);
      toast.info("Listening… speak now", { duration: 3000, id: "voice-listening" });
    };

    recognition.onresult = (event: any) => {
      const lastResult = event.results[event.results.length - 1];
      const transcript = lastResult[0].transcript;

      setQuery(transcript);

      if (lastResult.isFinal) {
        setVoiceStatus("processing");
        toast.dismiss("voice-listening");

        const match = findBestRoute(transcript);
        if (match) {
          toast.success(`Taking you to ${match.label}`, { duration: 2500 });
          setTimeout(() => navigate(match.path), 800);
        } else {
          toast.info(`We heard: "${transcript}". Showing related pages.`, { duration: 4000 });
          setSuggestions(findTopRoutes(transcript));
        }
      }
    };

    recognition.onerror = (event: any) => {
      setIsListening(false);
      setVoiceStatus("error");
      toast.dismiss("voice-listening");

      const errorType = event?.error || "unknown";

      if (errorType === "not-allowed") {
        setVoiceError("Microphone permission was denied.");
        toast.error(
          "Microphone access was denied. Please allow microphone permission in your browser settings, then try again.",
          { duration: 6000 },
        );
      } else if (errorType === "no-speech") {
        setVoiceError("No speech was detected.");
        toast.warning("We didn't hear anything. Please try again and speak clearly.", {
          duration: 4000,
        });
      } else if (errorType === "network") {
        setVoiceError("Network error during voice recognition.");
        toast.error("A network error occurred. Please check your connection and try again.", {
          duration: 4000,
        });
      } else if (errorType === "aborted") {
        // User or system aborted — no toast needed
      } else {
        setVoiceError("Voice recognition failed.");
        toast.error("Voice search encountered an error. Please type your question instead.", {
          duration: 4000,
        });
      }
    };

    recognition.onend = () => {
      setIsListening(false);
      if (voiceStatus === "listening") {
        setVoiceStatus("idle");
      }
    };

    recognitionRef.current = recognition;

    try {
      recognition.start();
    } catch (err) {
      toast.error("Could not start voice recognition. Please type your question instead.", {
        duration: 4000,
      });
      setIsListening(false);
      setVoiceStatus("error");
    }
  }, [navigate, supportsVoice, voiceStatus]);

  const toggleVoice = useCallback(() => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  }, [isListening, startListening, stopListening]);

  useEffect(() => {
    return () => {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.stop();
        } catch {
          // ignore
        }
      }
    };
  }, []);


  const renderSearchBar = () => (
    <div
      className="relative flex items-center rounded-full border-2 border-border bg-card transition-all duration-200 focus-within:border-gold focus-within:ring-2 focus-within:ring-gold/20 sm:rounded-full rounded-[1.5rem]"
      style={{ boxShadow: "0 4px 20px -4px hsl(220 35% 15% / 0.08), inset 0 1px 0 hsl(0 0% 100% / 0.7)" }}
    >
      <span
        className="ml-4 flex-shrink-0 self-center inline-flex items-center justify-center w-9 h-9 rounded-full"
        style={{
          background: "linear-gradient(180deg, #ffffff 0%, #e9ecf2 100%)",
          boxShadow:
            "inset 0 1px 0 rgba(255,255,255,0.9), inset 0 -1px 2px rgba(20,30,55,0.12), 0 1px 2px rgba(20,30,55,0.18), 0 2px 6px rgba(20,30,55,0.10)",
          border: "1px solid rgba(20,30,55,0.10)",
        }}
        aria-hidden="true"
      >
        <Search
          className="w-[18px] h-[18px] text-navy"
          strokeWidth={2.5}
          style={{ filter: "drop-shadow(0 1px 0 rgba(255,255,255,0.85)) drop-shadow(0 1px 1px rgba(20,30,55,0.25))" }}
        />
      </span>
      <textarea
        ref={inputRef}
        value={query}
        onChange={(e) => setQuery(e.target.value.replace(/\n/g, ""))}
        onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); handleSubmit(); } }}
        placeholder="Search…"
        rows={1}
        className="flex-1 bg-transparent border-none outline-none py-4 px-4 text-[18px] lg:text-[19px] text-foreground placeholder:text-muted-foreground/70 font-sans font-bold placeholder:font-bold resize-none overflow-hidden search-textarea-mobile"
        aria-label="Search for help"
        style={{ lineHeight: '1.5' }}
      />
      <button onClick={toggleVoice} aria-label={isListening ? "Stop listening" : supportsVoice ? "Use voice input" : "Voice input not supported"}
        className={cn("flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center mr-1.5 transition-all duration-200 hover:-translate-y-[1px] active:translate-y-[1px]",
          isListening && "animate-pulse")}
        style={{
          background: isListening
            ? "linear-gradient(180deg, #fde2e2 0%, #f5b9b9 100%)"
            : "linear-gradient(180deg, #ffffff 0%, #e6e9f0 100%)",
          border: "1px solid rgba(20,30,55,0.12)",
          boxShadow:
            "inset 0 1px 0 rgba(255,255,255,0.95), inset 0 -1px 2px rgba(20,30,55,0.14), 0 1px 2px rgba(20,30,55,0.16), 0 3px 8px rgba(20,30,55,0.12)",
        }}
      >
        {isListening
          ? <MicOff className="w-5 h-5 text-destructive" strokeWidth={2.5} style={{ filter: "drop-shadow(0 1px 0 rgba(255,255,255,0.85)) drop-shadow(0 1px 1px rgba(20,30,55,0.25))" }} />
          : voiceStatus === "processing"
            ? <Volume2 className="w-5 h-5 text-navy animate-pulse" strokeWidth={2.5} style={{ filter: "drop-shadow(0 1px 0 rgba(255,255,255,0.85)) drop-shadow(0 1px 1px rgba(20,30,55,0.25))" }} />
            : <Mic className="w-5 h-5 text-navy" strokeWidth={2.5} style={{ filter: "drop-shadow(0 1px 0 rgba(255,255,255,0.85)) drop-shadow(0 1px 1px rgba(20,30,55,0.25))" }} />}
      </button>
      <button onClick={handleSubmit} aria-label="Search"
        className="relative overflow-hidden flex-shrink-0 w-10 h-10 rounded-full text-primary-foreground flex items-center justify-center mr-1.5 transition-all duration-200 hover:-translate-y-[1px] active:translate-y-[1px]"
        style={{
          background: "linear-gradient(180deg, #2e4a7a 0%, #1a3056 60%, #0f2040 100%)",
          border: "1px solid rgba(10,20,40,0.55)",
          boxShadow:
            "inset 0 1px 0 rgba(255,255,255,0.35), inset 0 -2px 3px rgba(0,0,0,0.30), 0 2px 4px rgba(15,30,55,0.35), 0 6px 14px rgba(15,30,55,0.25)",
        }}
      >
        <span
          className="pointer-events-none absolute left-[12%] top-[8%] h-[42%] w-[76%] rounded-full"
          style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0) 100%)" }}
          aria-hidden="true"
        />
        <ArrowRight className="relative w-5 h-5" strokeWidth={3} style={{ filter: "drop-shadow(0 1px 0 rgba(0,0,0,0.35)) drop-shadow(0 -1px 0 rgba(255,255,255,0.25))" }} />
      </button>
    </div>
  );

  const renderSuggestions = () => (
    <>
      {suggestions.length > 0 && (
        <div className="mt-3 flex flex-wrap justify-center gap-3">
          {suggestions.map((s) => (
            <button key={s.path + s.label} type="button" onClick={() => { toast.success(`Taking you to ${s.label}`, { duration: 2000 }); navigate(s.path); }}
              className="premium-pill-3d focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
              <span className="premium-pill-3d__face text-[15px] sm:text-base">
                <Search className="w-4 h-4 text-gold-dark shrink-0" />
                <span>Go to <strong className="font-semibold text-foreground">{s.label}</strong></span>
                <ArrowRight className="w-4 h-4 text-muted-foreground shrink-0" />
              </span>
            </button>
          ))}
        </div>
      )}
      {voiceError && !isListening && <p className="mt-2 text-center text-sm text-destructive/80">{voiceError}</p>}
    </>
  );

  if (pillsOnly) {
    return (
      <div className="w-full max-w-2xl mx-auto">
        <div className="grid grid-cols-2 gap-3 px-4">
          {suggestedPrompts.map((prompt) => (
            <button
              key={prompt.label}
              type="button"
              onClick={() => handlePromptClick(prompt.label)}
              className="premium-pill-3d homepage-pill focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 w-full"
            >
              <span className="premium-pill-3d__face homepage-pill__face w-full justify-center font-bold">
                {prompt.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (searchOnly) {
    return (
      <div className="w-full max-w-2xl mx-auto overflow-hidden">
        {renderSearchBar()}
        {renderSuggestions()}
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto mb-10 overflow-hidden">
      {renderSearchBar()}
      {renderSuggestions()}
      <div className="flex flex-wrap justify-center gap-3 mt-5">
        {suggestedPrompts.map((prompt) => (
          <button key={prompt.label} type="button" onClick={() => handlePromptClick(prompt.label)}
            className="premium-pill-3d focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
            <span className="premium-pill-3d__face text-[15px] sm:text-base">{prompt.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SmartSearchBar;
