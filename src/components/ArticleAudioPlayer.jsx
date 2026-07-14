import { useState, useRef, useEffect } from "react";

// ─────────────────────────────────────────────
//  ArticleAudioPlayer
//  Drop this near the top of any article page.
//  Usage:
//    <ArticleAudioPlayer audioSrc="/audio/probate-basics.mp3" />
//
//  Color scheme: Warm Slate-Green + Ivory + Brass
//  Distinct from site's Navy/Gold palette.
// ─────────────────────────────────────────────

const COLORS = {
  bg: "#2C3E35", // deep forest slate-green
  bgLight: "#3A5046", // lighter green for hover/track
  ivory: "#F5F0E8", // warm ivory text
  ivoryMuted: "#c7afb1", // muted ivory for secondary text
  brass: "#b47277", // warm brass accent
  brassDark: "#97595e", // darker brass for hover
  track: "#1E2C26", // dark track background
  progress: "#b47277", // brass progress fill
};

// Format seconds → m:ss
function fmt(s) {
  if (!isFinite(s)) return "0:00";
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, "0")}`;
}

// Headphone SVG icon
function HeadphoneIcon({ size = 28, color = COLORS.brass }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 18v-6a9 9 0 0 1 18 0v6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Play / Pause icons
function PlayIcon({ size = 22, color = COLORS.bg }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
      <polygon points="5,3 19,12 5,21" />
    </svg>
  );
}

function PauseIcon({ size = 22, color = COLORS.bg }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
      <rect x="6" y="4" width="4" height="16" rx="1" />
      <rect x="14" y="4" width="4" height="16" rx="1" />
    </svg>
  );
}

// Rewind 15s icon
function RewindIcon({ size = 20, color = COLORS.ivoryMuted }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M11 17a6 6 0 1 0-6-6" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <polyline points="5,7 5,11 9,11" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <text x="9.5" y="14.5" fontSize="5" fill={color} fontFamily="Georgia, serif" fontWeight="bold">
        15
      </text>
    </svg>
  );
}

// Forward 15s icon
function ForwardIcon({ size = 20, color = COLORS.ivoryMuted }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M13 17a6 6 0 1 1 6-6" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <polyline points="19,7 19,11 15,11" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <text x="8" y="14.5" fontSize="5" fill={color} fontFamily="Georgia, serif" fontWeight="bold">
        15
      </text>
    </svg>
  );
}

export default function ArticleAudioPlayer({ audioSrc = "" }) {
  const audioRef = useRef(null);
  const progressRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  // Sync audio events
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onTime = () => !isDragging && setCurrentTime(audio.currentTime);
    const onMeta = () => setDuration(audio.duration);
    const onEnd = () => setIsPlaying(false);
    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("loadedmetadata", onMeta);
    audio.addEventListener("ended", onEnd);
    return () => {
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("loadedmetadata", onMeta);
      audio.removeEventListener("ended", onEnd);
    };
  }, [isDragging]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      // Expand on first play
      if (!isExpanded) setIsExpanded(true);
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    }
  };

  const skip = (secs) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = Math.min(Math.max(0, audio.currentTime + secs), duration);
  };

  const cycleSpeed = () => {
    const rates = [1, 1.25, 1.5, 1.75, 2];
    const next = rates[(rates.indexOf(playbackRate) + 1) % rates.length];
    setPlaybackRate(next);
    if (audioRef.current) audioRef.current.playbackRate = next;
  };

  // Progress bar interaction
  const seek = (e) => {
    const bar = progressRef.current;
    if (!bar || !duration) return;
    const rect = bar.getBoundingClientRect();
    const x = (e.clientX ?? e.touches?.[0]?.clientX) - rect.left;
    const pct = Math.min(Math.max(x / rect.width, 0), 1);
    const t = pct * duration;
    setCurrentTime(t);
    if (audioRef.current) audioRef.current.currentTime = t;
  };

  const progress = duration ? (currentTime / duration) * 100 : 0;

  // ── Collapsed "pill" — always visible at top of article
  const pillStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    background: COLORS.bg,
    borderRadius: "50px",
    padding: "10px 20px 10px 14px",
    cursor: "pointer",
    border: `1.5px solid ${COLORS.bgLight}`,
    boxShadow: "0 2px 12px rgba(0,0,0,0.18)",
    transition: "box-shadow 0.2s, transform 0.15s",
    userSelect: "none",
    marginBottom: "6px",
  };

  const pillLabelStyle = {
    fontFamily: "Raleway, Georgia, serif",
    fontWeight: "700",
    fontSize: "15px",
    color: COLORS.ivory,
    letterSpacing: "0.03em",
    lineHeight: 1,
  };

  const pillSubStyle = {
    fontFamily: "Georgia, 'Times New Roman', serif",
    fontWeight: "400",
    fontSize: "12px",
    color: COLORS.ivoryMuted,
    marginTop: "2px",
  };

  // ── Expanded player
  const playerStyle = {
    background: `linear-gradient(135deg, ${COLORS.bg} 0%, #243329 100%)`,
    borderRadius: "14px",
    padding: "20px 24px 18px",
    marginBottom: "28px",
    boxShadow: "0 4px 24px rgba(0,0,0,0.22)",
    border: `1px solid ${COLORS.bgLight}`,
    maxWidth: "680px",
    fontFamily: "Raleway, Georgia, sans-serif",
  };

  const headerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "16px",
  };

  const labelStyle = {
    flex: 1,
  };

  const titleStyle = {
    fontFamily: "Raleway, Georgia, serif",
    fontWeight: "800",
    fontSize: "13px",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: COLORS.brass,
    margin: 0,
  };

  const subtitleStyle = {
    fontFamily: "Georgia, serif",
    fontWeight: "400",
    fontSize: "12px",
    color: COLORS.ivoryMuted,
    marginTop: "3px",
  };

  // Track bar
  const trackContainerStyle = {
    marginBottom: "14px",
  };

  const trackStyle = {
    position: "relative",
    height: "6px",
    background: COLORS.track,
    borderRadius: "3px",
    cursor: "pointer",
    marginBottom: "6px",
  };

  const fillStyle = {
    position: "absolute",
    left: 0,
    top: 0,
    height: "100%",
    width: `${progress}%`,
    background: `linear-gradient(90deg, ${COLORS.brassDark}, ${COLORS.brass})`,
    borderRadius: "3px",
    transition: isDragging ? "none" : "width 0.1s linear",
  };

  const thumbStyle = {
    position: "absolute",
    top: "50%",
    left: `${progress}%`,
    transform: "translate(-50%, -50%)",
    width: "14px",
    height: "14px",
    background: COLORS.brass,
    borderRadius: "50%",
    boxShadow: "0 1px 4px rgba(0,0,0,0.4)",
    transition: isDragging ? "none" : "left 0.1s linear",
  };

  const timesStyle = {
    display: "flex",
    justifyContent: "space-between",
    fontFamily: "Georgia, monospace",
    fontSize: "12px",
    color: COLORS.ivoryMuted,
  };

  // Controls row
  const controlsStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "16px",
  };

  const iconBtnStyle = {
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: "6px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.85,
    transition: "opacity 0.15s, transform 0.1s",
    borderRadius: "50%",
  };

  const playBtnStyle = {
    width: "52px",
    height: "52px",
    background: COLORS.brass,
    borderRadius: "50%",
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 3px 12px rgba(184,150,110,0.35)",
    transition: "background 0.15s, transform 0.1s, box-shadow 0.15s",
    flexShrink: 0,
  };

  const speedBtnStyle = {
    background: COLORS.track,
    border: `1px solid ${COLORS.bgLight}`,
    borderRadius: "20px",
    color: COLORS.brass,
    fontFamily: "Georgia, serif",
    fontWeight: "700",
    fontSize: "12px",
    padding: "4px 10px",
    cursor: "pointer",
    letterSpacing: "0.04em",
    transition: "background 0.15s",
  };

  const dismissStyle = {
    background: "none",
    border: "none",
    cursor: "pointer",
    color: COLORS.ivoryMuted,
    fontSize: "18px",
    lineHeight: 1,
    padding: "2px 4px",
    opacity: 0.7,
    transition: "opacity 0.15s",
  };

  return (
    <div style={{ marginBottom: isExpanded ? 0 : "12px" }}>
      <audio ref={audioRef} src={audioSrc} preload="metadata" />

      {/* ── Collapsed pill ─────────────────────────────── */}
      {!isExpanded && (
        <div
          role="button"
          tabIndex={0}
          aria-label="Listen to this article"
          style={pillStyle}
          onClick={() => {
            setIsExpanded(true);
          }}
          onKeyDown={(e) => e.key === "Enter" && setIsExpanded(true)}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = "0 4px 18px rgba(0,0,0,0.26)";
            e.currentTarget.style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.18)";
            e.currentTarget.style.transform = "none";
          }}
        >
          <HeadphoneIcon size={26} color={COLORS.brass} />
          <div>
            <div style={pillLabelStyle}>Listen to this Article</div>
            <div style={pillSubStyle}>AI-generated audio · Real Property Planning</div>
          </div>
        </div>
      )}

      {/* ── Expanded player ─────────────────────────────── */}
      {isExpanded && (
        <div style={playerStyle}>
          {/* Header */}
          <div style={headerStyle}>
            <HeadphoneIcon size={30} color={COLORS.brass} />
            <div style={labelStyle}>
              <p style={titleStyle}>Listen to this Article</p>
              <p style={subtitleStyle}>AI-generated audio overview · Real Property Planning</p>
            </div>
            <button
              style={dismissStyle}
              aria-label="Close audio player"
              onClick={() => {
                setIsExpanded(false);
                if (isPlaying) {
                  audioRef.current?.pause();
                  setIsPlaying(false);
                }
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.7")}
            >
              ✕
            </button>
          </div>

          {/* Progress track */}
          <div style={trackContainerStyle}>
            <div
              ref={progressRef}
              style={trackStyle}
              role="slider"
              aria-label="Audio progress"
              aria-valuemin={0}
              aria-valuemax={duration || 100}
              aria-valuenow={currentTime}
              tabIndex={0}
              onClick={seek}
              onMouseDown={(e) => {
                setIsDragging(true);
                seek(e);
              }}
              onMouseMove={(e) => isDragging && seek(e)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onTouchStart={(e) => {
                setIsDragging(true);
                seek(e);
              }}
              onTouchMove={(e) => {
                seek(e);
              }}
              onTouchEnd={() => setIsDragging(false)}
              onKeyDown={(e) => {
                if (e.key === "ArrowRight") skip(5);
                if (e.key === "ArrowLeft") skip(-5);
              }}
            >
              <div style={fillStyle} />
              <div style={thumbStyle} />
            </div>
            <div style={timesStyle}>
              <span>{fmt(currentTime)}</span>
              <span>{fmt(duration)}</span>
            </div>
          </div>

          {/* Controls */}
          <div style={controlsStyle}>
            {/* Rewind 15s */}
            <button
              style={iconBtnStyle}
              aria-label="Rewind 15 seconds"
              onClick={() => skip(-15)}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "1";
                e.currentTarget.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "0.85";
                e.currentTarget.style.transform = "none";
              }}
            >
              <RewindIcon size={22} color={COLORS.ivoryMuted} />
            </button>

            {/* Play / Pause */}
            <button
              style={playBtnStyle}
              aria-label={isPlaying ? "Pause" : "Play"}
              onClick={togglePlay}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = COLORS.brassDark;
                e.currentTarget.style.transform = "scale(1.06)";
                e.currentTarget.style.boxShadow = "0 4px 18px rgba(184,150,110,0.45)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = COLORS.brass;
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "0 3px 12px rgba(184,150,110,0.35)";
              }}
            >
              {isPlaying ? <PauseIcon size={22} color={COLORS.bg} /> : <PlayIcon size={22} color={COLORS.bg} />}
            </button>

            {/* Forward 15s */}
            <button
              style={iconBtnStyle}
              aria-label="Skip forward 15 seconds"
              onClick={() => skip(15)}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "1";
                e.currentTarget.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "0.85";
                e.currentTarget.style.transform = "none";
              }}
            >
              <ForwardIcon size={22} color={COLORS.ivoryMuted} />
            </button>

            {/* Speed */}
            <button
              style={speedBtnStyle}
              aria-label={`Playback speed ${playbackRate}x. Click to change.`}
              onClick={cycleSpeed}
              onMouseEnter={(e) => (e.currentTarget.style.background = COLORS.bgLight)}
              onMouseLeave={(e) => (e.currentTarget.style.background = COLORS.track)}
            >
              {playbackRate}×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
