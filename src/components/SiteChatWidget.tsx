import { useEffect, useRef, useState } from "react";
import chatAvatar from "@/assets/chat-avatar.png";

type Pos = { x: number; y: number };

const TEAL = "#0D5C63";
const TEAL_DARK = "#094A50";
const CREAM = "#F5F0E8";

const BUTTON_SIZE = 44;
const PANEL_W = 270;
const PANEL_H = 260;
const MARGIN = 16;

const SiteChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [input, setInput] = useState("");
  const [confirmation, setConfirmation] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(true);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const soundOnRef = useRef(soundOn);
  useEffect(() => { soundOnRef.current = soundOn; }, [soundOn]);

  const playChime = () => {
    try {
      const AC: typeof AudioContext | undefined =
        (window as any).AudioContext || (window as any).webkitAudioContext;
      if (!AC) return;
      const ctx = new AC();
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = "sine";
      o.frequency.setValueAtTime(880, ctx.currentTime);
      o.frequency.exponentialRampToValueAtTime(1320, ctx.currentTime + 0.18);
      g.gain.setValueAtTime(0.0001, ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.18, ctx.currentTime + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.35);
      o.connect(g); g.connect(ctx.destination);
      o.start();
      o.stop(ctx.currentTime + 0.4);
      setTimeout(() => ctx.close(), 600);
    } catch { /* ignore */ }
  };

  // Play notification chime when a new message (confirmation) appears
  useEffect(() => {
    if (confirmation && soundOnRef.current) playChime();
  }, [confirmation]);

  // Close dropdown on outside click
  useEffect(() => {
    if (!menuOpen) return;
    const onDoc = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [menuOpen]);

  const handlePrint = () => {
    setMenuOpen(false);
    setTimeout(() => window.print(), 50);
  };

  // Button position (bottom-right by default). Stored as left/top in px.
  const [btnPos, setBtnPos] = useState<Pos>(() => ({
    x: typeof window !== "undefined" ? window.innerWidth - BUTTON_SIZE - MARGIN : 0,
    y: typeof window !== "undefined" ? window.innerHeight - BUTTON_SIZE - MARGIN : 0,
  }));
  // Panel offset relative to its default (anchored above the button).
  const [panelOffset, setPanelOffset] = useState<Pos>({ x: 0, y: 0 });

  const dragRef = useRef<{
    target: "button" | "panel";
    startX: number;
    startY: number;
    origX: number;
    origY: number;
    moved: boolean;
  } | null>(null);

  useEffect(() => {
    const onResize = () => {
      setBtnPos((p) => ({
        x: Math.min(p.x, window.innerWidth - BUTTON_SIZE - 4),
        y: Math.min(p.y, window.innerHeight - BUTTON_SIZE - 4),
      }));
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const d = dragRef.current;
      if (!d) return;
      const dx = e.clientX - d.startX;
      const dy = e.clientY - d.startY;
      if (Math.abs(dx) > 3 || Math.abs(dy) > 3) d.moved = true;
      if (d.target === "button") {
        const x = Math.max(0, Math.min(window.innerWidth - BUTTON_SIZE, d.origX + dx));
        const y = Math.max(0, Math.min(window.innerHeight - BUTTON_SIZE, d.origY + dy));
        setBtnPos({ x, y });
      } else {
        setPanelOffset({ x: d.origX + dx, y: d.origY + dy });
      }
    };
    const onUp = () => {
      dragRef.current = null;
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, []);

  const startButtonDrag = (e: React.PointerEvent) => {
    dragRef.current = {
      target: "button",
      startX: e.clientX,
      startY: e.clientY,
      origX: btnPos.x,
      origY: btnPos.y,
      moved: false,
    };
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const startPanelDrag = (e: React.PointerEvent) => {
    dragRef.current = {
      target: "panel",
      startX: e.clientX,
      startY: e.clientY,
      origX: panelOffset.x,
      origY: panelOffset.y,
      moved: false,
    };
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const handleButtonClick = () => {
    if (dragRef.current?.moved) return;
    setOpen((v) => !v);
    setMinimized(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setInput("");
    setConfirmation(true);
  };

  // Panel position: anchored above-left of the button by default, then offset by drag.
  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
  const panelW = isMobile ? Math.round(window.innerWidth * 0.9) : PANEL_W;
  const panelDefaultLeft = Math.max(
    MARGIN,
    Math.min(window.innerWidth - panelW - MARGIN, btnPos.x + BUTTON_SIZE / 2 - panelW + 26),
  );
  const panelDefaultTop = Math.max(MARGIN, btnPos.y - PANEL_H - 12);
  const panelLeft = panelDefaultLeft + panelOffset.x;
  const panelTop = panelDefaultTop + panelOffset.y;

  return (
    <>
      <style>{`
        .rpp-cw-btn {
          position: fixed;
          width: ${BUTTON_SIZE}px;
          height: ${BUTTON_SIZE}px;
          border-radius: 50%;
          background: ${TEAL};
          color: #fff;
          border: none;
          box-shadow: 0 2px 8px rgba(0,0,0,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: grab;
          z-index: 99998;
          transition: background-color 0.2s ease;
          touch-action: none;
          user-select: none;
        }
        .rpp-cw-btn:hover { background: ${TEAL_DARK}; }
        .rpp-cw-btn:active { cursor: grabbing; }
        @keyframes dotBounce {
          0%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-4px); }
        }
        .rpp-cw-dot { animation: dotBounce 1.2s ease-in-out infinite; transform-box: fill-box; transform-origin: center; }
        .rpp-cw-dot.d1 { animation-delay: 0s; }
        .rpp-cw-dot.d2 { animation-delay: 0.2s; }
        .rpp-cw-dot.d3 { animation-delay: 0.4s; }
        @keyframes chatPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(13, 92, 99, 0.5); transform: scale(1); }
          50% { box-shadow: 0 0 0 10px rgba(13, 92, 99, 0); transform: scale(1.08); }
        }
        .rpp-cw-btn.chat-pulse { animation: chatPulse 1.5s ease-in-out 3; }

        .rpp-cw-panel {
          position: fixed;
          width: ${PANEL_W}px;
          height: auto;
          min-height: 200px;
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 12px 40px rgba(0,0,0,0.22);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          z-index: 99999;
          font-family: inherit;
        }
        .rpp-cw-panel[data-min="true"] { height: 40px; min-height: 40px; }

        .rpp-cw-header {
          height: 36px;
          background: ${TEAL};
          color: #fff;
          display: flex;
          align-items: center;
          padding: 1px 10px;
          cursor: grab;
          touch-action: none;
          user-select: none;
          flex-shrink: 0;
        }
        .rpp-cw-header:active { cursor: grabbing; }
        .rpp-cw-title {
          flex: 1;
          font-size: 0.75rem;
          font-weight: 600;
          color: #fff;
          letter-spacing: 0.01em;
          white-space: nowrap;
        }
        .rpp-cw-iconbtn {
          background: transparent;
          border: none;
          color: #fff;
          font-size: 0.7rem;
          line-height: 1;
          cursor: pointer;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2px 4px;
        }
        .rpp-cw-iconbtn:hover { background: rgba(255,255,255,0.15); }

        .rpp-cw-messages {
          flex: 1;
          height: auto;
          overflow-y: auto;
          padding: 10px;
          padding-bottom: 8px;
          background: #F5F5F5;
          display: flex;
          flex-direction: column;
          gap: 10px;
          align-content: flex-start;
        }
        .rpp-cw-msg-row {
          display: flex;
          align-items: flex-end;
          gap: 8px;
        }
        .rpp-cw-avatar {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          object-fit: cover;
          flex-shrink: 0;
          align-self: flex-start;
          display: block;
        }
        .rpp-cw-bubble {
          max-width: 75%;
          padding: 8px 11px;
          border-radius: 12px;
          font-size: 0.75rem;
          line-height: 1.5;
          background: ${CREAM};
          color: ${TEAL};
          align-self: flex-start;
          border-bottom-left-radius: 4px;
          position: relative;
        }
        .rpp-cw-bubble.welcome::after {
          content: '';
          position: absolute;
          bottom: -6px;
          left: 0;
          width: 1px;
          height: 1px;
          background: transparent;
          border-style: solid;
          border-width: 0 6px 8px 1px;
          border-color: transparent ${CREAM} transparent transparent;
        }
        .rpp-cw-bubble.confirm {
          background: #F1F4F9;
          color: #1B2B4B;
          margin-left: 32px;
        }

        .rpp-cw-input-bar {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px;
          overflow: visible;
          background: #F4F5F7;
          border-top: 1px solid #E5E7EB;
          flex-shrink: 0;
        }
        .rpp-cw-input {
          flex: 1;
          padding: 0 10px;
          border: 1px solid #D1D5DB;
          border-radius: 4px;
          font-size: 0.75rem;
          height: 32px;
          outline: none;
          background: #fff;
          font-family: inherit;
          color: #1B2B4B;
        }
        .rpp-cw-input:focus { border-color: ${TEAL}; }
        .rpp-cw-send {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          border: none;
          background: ${TEAL};
          color: #fff;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .rpp-cw-send:hover { background: ${TEAL_DARK}; }
        .rpp-cw-send:disabled { opacity: 0.5; cursor: not-allowed; }

        @media (max-width: 639px) {
          .rpp-cw-panel { width: 90vw !important; }
        }

        .rpp-cw-menu-wrap { position: relative; display: inline-flex; }
        .rpp-cw-menu {
          position: absolute;
          top: calc(100% + 6px);
          right: 0;
          background: #fff;
          border-radius: 6px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.15);
          min-width: 140px;
          z-index: 1;
          overflow: hidden;
        }
        .rpp-cw-menu-item {
          display: flex;
          align-items: center;
          gap: 8px;
          width: 100%;
          padding: 6px 10px;
          background: transparent;
          border: none;
          color: ${TEAL};
          font-size: 0.75rem;
          font-family: inherit;
          cursor: pointer;
          text-align: left;
        }
        .rpp-cw-menu-item:hover { background: ${CREAM}; }

        @media print {
          body * { visibility: hidden !important; }
          .rpp-cw-panel, .rpp-cw-panel * { visibility: visible !important; }
          .rpp-cw-panel {
            position: absolute !important;
            left: 0 !important;
            top: 0 !important;
            width: 100% !important;
            height: auto !important;
            box-shadow: none !important;
          }
          .rpp-cw-input-bar, .rpp-cw-iconbtn, .rpp-cw-menu { display: none !important; }
          .rpp-cw-btn { display: none !important; }
        }
      `}</style>

      {open && (
        <div
          className="rpp-cw-panel"
          data-min={minimized ? "true" : "false"}
          role="dialog"
          aria-label="Chat with Real Property Planning"
          style={{
            left: `${panelLeft}px`,
            top: `${panelTop}px`,
            width: isMobile ? "90vw" : `${PANEL_W}px`,
          }}
        >
          <div className="rpp-cw-header" onPointerDown={startPanelDrag}>
            <div className="rpp-cw-title">Real Property Planning</div>
            <div className="rpp-cw-menu-wrap" ref={menuRef}>
              <button
                type="button"
                className="rpp-cw-iconbtn"
                aria-label="Open menu"
                aria-haspopup="menu"
                aria-expanded={menuOpen}
                onPointerDown={(e) => e.stopPropagation()}
                onClick={() => setMenuOpen((v) => !v)}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <circle cx="12" cy="5" r="1.8" />
                  <circle cx="12" cy="12" r="1.8" />
                  <circle cx="12" cy="19" r="1.8" />
                </svg>
              </button>
              {menuOpen && (
                <div className="rpp-cw-menu" role="menu" onPointerDown={(e) => e.stopPropagation()}>
                  <button
                    type="button"
                    className="rpp-cw-menu-item"
                    role="menuitem"
                    onClick={() => setSoundOn((v) => !v)}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                      <path d="M10 21a2 2 0 0 0 4 0" />
                    </svg>
                    {soundOn ? "Sound On" : "Sound Off"}
                  </button>
                  <button
                    type="button"
                    className="rpp-cw-menu-item"
                    role="menuitem"
                    onClick={handlePrint}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="6 9 6 2 18 2 18 9" />
                      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                      <rect x="6" y="14" width="12" height="8" />
                    </svg>
                    Print
                  </button>
                </div>
              )}
            </div>
            <button
              type="button"
              className="rpp-cw-iconbtn"
              aria-label="Minimize chat"
              onPointerDown={(e) => e.stopPropagation()}
              onClick={() => setMinimized((v) => !v)}
            >
              —
            </button>
            <button
              type="button"
              className="rpp-cw-iconbtn"
              aria-label="Close chat"
              onPointerDown={(e) => e.stopPropagation()}
              onClick={() => {
                setOpen(false);
                setMinimized(false);
                setConfirmation(false);
                setPanelOffset({ x: 0, y: 0 });
              }}
            >
              ✕
            </button>
          </div>

          {!minimized && (
            <>
              <div className="rpp-cw-messages">
                <div className="rpp-cw-msg-row">
                  <img className="rpp-cw-avatar" src={chatAvatar} alt="Real Property Planning representative" />
                  <div className="rpp-cw-bubble welcome">
                    How can we help you today?
                  </div>
                </div>
                {confirmation && (
                  <div className="rpp-cw-bubble confirm">
                    Thank you! We'll be in touch shortly.
                  </div>
                )}
              </div>

              <form className="rpp-cw-input-bar" onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="rpp-cw-input"
                  placeholder="Type your message..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  maxLength={500}
                />
                <button
                  type="submit"
                  className="rpp-cw-send"
                  aria-label="Send message"
                  disabled={!input.trim()}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </button>
              </form>
            </>
          )}
        </div>
      )}

      <button
        type="button"
        className="rpp-cw-btn"
        aria-label={open ? "Close chat" : "Open chat"}
        style={{ left: `${btnPos.x}px`, top: `${btnPos.y}px` }}
        onPointerDown={startButtonDrag}
        onClick={handleButtonClick}
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" fill="none"></path>
          <circle className="rpp-cw-dot d1" cx="8" cy="11" r="1.4" fill="#fff" stroke="none" />
          <circle className="rpp-cw-dot d2" cx="12" cy="11" r="1.4" fill="#fff" stroke="none" />
          <circle className="rpp-cw-dot d3" cx="16" cy="11" r="1.4" fill="#fff" stroke="none" />
        </svg>
      </button>
    </>
  );
};

export default SiteChatWidget;
