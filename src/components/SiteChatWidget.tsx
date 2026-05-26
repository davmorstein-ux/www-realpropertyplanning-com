import { useEffect, useRef, useState } from "react";
import chatAvatar from "@/assets/chat-avatar.png";

type Pos = { x: number; y: number };

const NAVY = "#1B3A6B";
const NAVY_DARK = "#142C52";

const BUTTON_SIZE = 44;
const PANEL_W = 260;
const PANEL_H = 360;
const MARGIN = 16;

const SiteChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [input, setInput] = useState("");
  const [confirmation, setConfirmation] = useState(false);

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
          background: ${NAVY};
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
        .rpp-cw-btn:hover { background: ${NAVY_DARK}; }
        .rpp-cw-btn:active { cursor: grabbing; }

        .rpp-cw-panel {
          position: fixed;
          width: ${PANEL_W}px;
          height: ${PANEL_H}px;
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 12px 40px rgba(0,0,0,0.22);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          z-index: 99999;
          font-family: inherit;
        }
        .rpp-cw-panel[data-min="true"] { height: 40px; }

        .rpp-cw-header {
          height: 40px;
          background: ${NAVY};
          color: #fff;
          display: flex;
          align-items: center;
          padding: 0 10px;
          cursor: grab;
          touch-action: none;
          user-select: none;
          flex-shrink: 0;
        }
        .rpp-cw-header:active { cursor: grabbing; }
        .rpp-cw-title {
          flex: 1;
          font-size: 0.85rem;
          font-weight: 600;
          color: #fff;
          letter-spacing: 0.01em;
        }
        .rpp-cw-iconbtn {
          width: 28px;
          height: 28px;
          background: transparent;
          border: none;
          color: #fff;
          font-size: 18px;
          line-height: 1;
          cursor: pointer;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .rpp-cw-iconbtn:hover { background: rgba(255,255,255,0.15); }

        .rpp-cw-messages {
          flex: 1;
          overflow-y: auto;
          padding: 14px;
          background: #F5F5F5;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .rpp-cw-msg-row {
          display: flex;
          align-items: flex-end;
          gap: 8px;
        }
        .rpp-cw-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          object-fit: cover;
          flex-shrink: 0;
          margin-bottom: 2px;
          display: block;
        }
        .rpp-cw-bubble {
          max-width: 75%;
          padding: 8px 11px;
          border-radius: 12px;
          font-size: 0.75rem;
          line-height: 1.5;
          background: ${NAVY};
          color: #fff;
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
          border-color: transparent ${NAVY} transparent transparent;
        }
        .rpp-cw-bubble.confirm {
          background: #F1F4F9;
          color: #1B2B4B;
          margin-left: 32px;
        }

        .rpp-cw-input-bar {
          display: flex;
          gap: 8px;
          padding: 8px;
          background: #F4F5F7;
          border-top: 1px solid #E5E7EB;
          flex-shrink: 0;
        }
        .rpp-cw-input {
          flex: 1;
          padding: 7px 10px;
          border: 1px solid #D1D5DB;
          border-radius: 20px;
          font-size: 0.8rem;
          outline: none;
          background: #fff;
          font-family: inherit;
          color: #1B2B4B;
        }
        .rpp-cw-input:focus { border-color: ${NAVY}; }
        .rpp-cw-send {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: none;
          background: ${NAVY};
          color: #fff;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .rpp-cw-send:hover { background: ${NAVY_DARK}; }
        .rpp-cw-send:disabled { opacity: 0.5; cursor: not-allowed; }

        @media (max-width: 639px) {
          .rpp-cw-panel { width: 90vw !important; }
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
                  <div className="rpp-cw-avatar">RPP</div>
                  <div className="rpp-cw-bubble welcome">
                    Hello! How can we help you today? We respond personally to every inquiry.
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
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </button>
    </>
  );
};

export default SiteChatWidget;
