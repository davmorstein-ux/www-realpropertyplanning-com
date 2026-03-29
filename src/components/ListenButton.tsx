import { useState, useCallback, useEffect, useRef } from "react";
import { Volume2, Square } from "lucide-react";

interface ListenButtonProps {
  /** CSS selector or ref-based ID to find the text container */
  targetId: string;
  label?: string;
}

const ListenButton = ({ targetId, label = "Listen to this section" }: ListenButtonProps) => {
  const [playing, setPlaying] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const supportsSpeak =
    typeof window !== "undefined" && "speechSynthesis" in window;

  // Stop on unmount or route change
  useEffect(() => {
    return () => {
      if (supportsSpeak) {
        window.speechSynthesis.cancel();
      }
    };
  }, [supportsSpeak]);

  const handleClick = useCallback(() => {
    if (!supportsSpeak) return;

    if (playing) {
      window.speechSynthesis.cancel();
      setPlaying(false);
      return;
    }

    const el = document.getElementById(targetId);
    if (!el) return;

    // Extract visible text, skip buttons / interactive elements
    const text = el.innerText || el.textContent || "";
    if (!text.trim()) return;

    window.speechSynthesis.cancel();

    const utt = new SpeechSynthesisUtterance(text);
    utt.lang = "en-US";
    utt.rate = 0.92;
    utt.pitch = 1;

    // Pick a natural-sounding voice if available
    const voices = window.speechSynthesis.getVoices();
    const preferred = voices.find(
      (v) =>
        v.lang.startsWith("en") &&
        (v.name.includes("Samantha") ||
          v.name.includes("Google US") ||
          v.name.includes("Microsoft") ||
          v.name.includes("Natural"))
    );
    if (preferred) utt.voice = preferred;

    utt.onend = () => setPlaying(false);
    utt.onerror = () => setPlaying(false);

    utteranceRef.current = utt;
    window.speechSynthesis.speak(utt);
    setPlaying(true);
  }, [playing, targetId, supportsSpeak]);

  if (!supportsSpeak) return null;

  return (
    <button
      onClick={handleClick}
      aria-label={playing ? "Stop reading" : label}
      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-border/80 bg-card text-sm font-medium text-muted-foreground transition-all duration-200 cursor-pointer hover:text-foreground hover:border-gold/40 hover:-translate-y-[1px] active:translate-y-[0.5px] min-h-[44px]"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, hsl(var(--card)), hsl(var(--card) / 0.94))",
        boxShadow:
          "0 2px 8px -2px rgba(0,0,0,0.08), 0 1px 3px -1px rgba(0,0,0,0.05), inset 0 1px 0 0 rgba(255,255,255,0.7), inset 0 -1px 0 0 rgba(0,0,0,0.03)",
      }}
    >
      {playing ? (
        <>
          <Square className="w-4 h-4 fill-current" />
          <span>Stop Reading</span>
        </>
      ) : (
        <>
          <Volume2 className="w-4 h-4" />
          <span>{label}</span>
        </>
      )}
    </button>
  );
};

export default ListenButton;
