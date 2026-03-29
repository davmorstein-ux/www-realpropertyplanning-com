import { useState, useCallback, useEffect, useRef } from "react";
import { Volume2, Square, Pause, Play } from "lucide-react";

interface ListenButtonProps {
  targetId: string;
  label?: string;
}

/**
 * Ranked list of preferred voices — checked in order.
 * "Natural" variants (Edge/Windows 11) and macOS premium voices rank highest.
 */
const VOICE_PREFERENCES = [
  // Microsoft Edge / Windows 11 "Natural" voices — best quality on Windows
  "Microsoft Aria Natural",
  "Microsoft Guy Natural",
  "Microsoft Jenny Natural",
  "Microsoft Ana Natural",
  // macOS premium voices
  "Samantha (Enhanced)",
  "Samantha",
  "Karen (Enhanced)",
  "Karen",
  "Daniel (Enhanced)",
  "Daniel",
  "Moira (Enhanced)",
  // Google high-quality
  "Google US English",
  "Google UK English Female",
  "Google UK English Male",
  // Generic "Natural" keyword (catches other platforms)
  "__NATURAL__",
  // Microsoft standard voices (still decent)
  "Microsoft David",
  "Microsoft Zira",
  "Microsoft Mark",
];

function pickBestVoice(voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice | null {
  const english = voices.filter((v) => v.lang.startsWith("en"));
  if (english.length === 0) return null;

  // Try each preference in rank order
  for (const pref of VOICE_PREFERENCES) {
    if (pref === "__NATURAL__") {
      // Match any voice with "Natural" or "Enhanced" or "Premium" in the name
      const natural = english.find(
        (v) =>
          v.name.includes("Natural") ||
          v.name.includes("Enhanced") ||
          v.name.includes("Premium")
      );
      if (natural) return natural;
      continue;
    }
    const match = english.find((v) => v.name.includes(pref));
    if (match) return match;
  }

  // Fallback: prefer a non-local voice (typically higher quality cloud voice)
  const remote = english.find((v) => !v.localService);
  return remote || english[0] || null;
}

/**
 * Extracts clean readable text from an element, filtering out
 * interactive controls (buttons, inputs) and hidden elements.
 */
function extractReadableText(el: HTMLElement): string {
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent) return NodeFilter.FILTER_REJECT;
      // Skip buttons, inputs, and hidden elements
      const tag = parent.tagName;
      if (
        tag === "BUTTON" ||
        tag === "INPUT" ||
        tag === "TEXTAREA" ||
        tag === "SELECT" ||
        parent.getAttribute("aria-hidden") === "true" ||
        parent.closest("button, [role='button']")
      ) {
        return NodeFilter.FILTER_REJECT;
      }
      return NodeFilter.FILTER_ACCEPT;
    },
  });

  const chunks: string[] = [];
  while (walker.nextNode()) {
    const txt = walker.currentNode.textContent?.trim();
    if (txt) chunks.push(txt);
  }

  return chunks.join(" ").replace(/\s+/g, " ").trim();
}

/**
 * Splits text into sentence-sized chunks for more natural delivery.
 * SpeechSynthesis handles long text poorly on some browsers.
 */
function splitIntoChunks(text: string, maxLen = 250): string[] {
  // Split on sentence-ending punctuation
  const sentences = text.split(/(?<=[.!?])\s+/);
  const chunks: string[] = [];
  let current = "";

  for (const sentence of sentences) {
    if ((current + " " + sentence).length > maxLen && current) {
      chunks.push(current.trim());
      current = sentence;
    } else {
      current = current ? current + " " + sentence : sentence;
    }
  }
  if (current.trim()) chunks.push(current.trim());

  return chunks.length > 0 ? chunks : [text];
}

const ListenButton = ({ targetId, label = "Listen to this section" }: ListenButtonProps) => {
  const [state, setState] = useState<"idle" | "playing" | "paused">("idle");
  const chunksRef = useRef<string[]>([]);
  const chunkIndexRef = useRef(0);
  const voiceRef = useRef<SpeechSynthesisVoice | null>(null);
  const [voicesLoaded, setVoicesLoaded] = useState(false);

  const supportsSpeak =
    typeof window !== "undefined" && "speechSynthesis" in window;

  // Preload voices — some browsers load them asynchronously
  useEffect(() => {
    if (!supportsSpeak) return;

    const loadVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      if (voices.length > 0) {
        voiceRef.current = pickBestVoice(voices);
        setVoicesLoaded(true);
      }
    };

    loadVoices();
    window.speechSynthesis.addEventListener("voiceschanged", loadVoices);
    return () => {
      window.speechSynthesis.removeEventListener("voiceschanged", loadVoices);
    };
  }, [supportsSpeak]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (supportsSpeak) window.speechSynthesis.cancel();
    };
  }, [supportsSpeak]);

  const speakChunk = useCallback(
    (index: number) => {
      if (index >= chunksRef.current.length) {
        setState("idle");
        chunkIndexRef.current = 0;
        return;
      }

      const utt = new SpeechSynthesisUtterance(chunksRef.current[index]);
      utt.lang = "en-US";
      utt.rate = 0.88; // Slightly slower for clarity with older users
      utt.pitch = 1.0;

      if (voiceRef.current) utt.voice = voiceRef.current;

      utt.onend = () => {
        chunkIndexRef.current = index + 1;
        // Small pause between chunks for natural pacing
        setTimeout(() => speakChunk(index + 1), 180);
      };

      utt.onerror = () => {
        setState("idle");
        chunkIndexRef.current = 0;
      };

      window.speechSynthesis.speak(utt);
    },
    []
  );

  const handlePlay = useCallback(() => {
    const el = document.getElementById(targetId);
    if (!el) return;

    const text = extractReadableText(el);
    if (!text) return;

    window.speechSynthesis.cancel();
    chunksRef.current = splitIntoChunks(text);
    chunkIndexRef.current = 0;
    setState("playing");
    speakChunk(0);
  }, [targetId, speakChunk]);

  const handlePause = useCallback(() => {
    window.speechSynthesis.pause();
    setState("paused");
  }, []);

  const handleResume = useCallback(() => {
    window.speechSynthesis.resume();
    setState("playing");
  }, []);

  const handleStop = useCallback(() => {
    window.speechSynthesis.cancel();
    setState("idle");
    chunkIndexRef.current = 0;
    chunksRef.current = [];
  }, []);

  const handleClick = useCallback(() => {
    if (!supportsSpeak) return;

    switch (state) {
      case "idle":
        handlePlay();
        break;
      case "playing":
        handlePause();
        break;
      case "paused":
        handleResume();
        break;
    }
  }, [state, supportsSpeak, handlePlay, handlePause, handleResume]);

  if (!supportsSpeak) return null;

  const Icon = state === "playing" ? Pause : state === "paused" ? Play : Volume2;
  const buttonText =
    state === "playing"
      ? "Pause"
      : state === "paused"
        ? "Resume"
        : label;

  return (
    <div className="inline-flex items-center gap-2">
      <button
        onClick={handleClick}
        aria-label={buttonText}
        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-border/80 bg-card text-sm font-medium text-muted-foreground transition-all duration-200 cursor-pointer hover:text-foreground hover:border-gold/40 hover:-translate-y-[1px] active:translate-y-[0.5px] min-h-[44px]"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, hsl(var(--card)), hsl(var(--card) / 0.94))",
          boxShadow:
            "0 2px 8px -2px rgba(0,0,0,0.08), 0 1px 3px -1px rgba(0,0,0,0.05), inset 0 1px 0 0 rgba(255,255,255,0.7), inset 0 -1px 0 0 rgba(0,0,0,0.03)",
        }}
      >
        <Icon className={`w-4 h-4 ${state === "playing" ? "fill-current" : ""}`} />
        <span>{buttonText}</span>
      </button>

      {state !== "idle" && (
        <button
          onClick={handleStop}
          aria-label="Stop reading"
          className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-border/80 bg-card text-muted-foreground hover:text-foreground hover:border-gold/40 transition-all duration-200 cursor-pointer min-h-[44px] min-w-[44px]"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, hsl(var(--card)), hsl(var(--card) / 0.94))",
            boxShadow:
              "0 2px 8px -2px rgba(0,0,0,0.08), 0 1px 3px -1px rgba(0,0,0,0.05), inset 0 1px 0 0 rgba(255,255,255,0.7), inset 0 -1px 0 0 rgba(0,0,0,0.03)",
          }}
        >
          <Square className="w-3.5 h-3.5 fill-current" />
        </button>
      )}
    </div>
  );
};

export default ListenButton;
