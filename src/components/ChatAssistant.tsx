import { useEffect, useRef, useState } from "react";
import { X, Send } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import chatAvatar from "@/assets/chat-avatar.png";

type Msg = { role: "user" | "assistant"; content: string };

const OPENING: Msg = {
  role: "assistant",
  content:
    "Hi! We're here to help answer your questions and drive you to the page you are looking for.",
};

const LIMIT_MSG: Msg = {
  role: "assistant",
  content:
    "I've enjoyed chatting! For more detailed help, feel free to call us at (206) 900-3015 or visit our Contact page.",
};

const SESSION_LIMIT = 20;

const linkify = (text: string) => {
  const parts = text.split(/(\/[a-z0-9-]+(?:\/[a-z0-9-]+)*)/gi);
  return parts.map((p, i) =>
    /^\/[a-z0-9-]/i.test(p) ? (
      <a
        key={i}
        href={p}
        className="text-[#1B3A6B] font-semibold underline hover:text-[#C9A84C]"
      >
        {p}
      </a>
    ) : (
      <span key={i}>{p}</span>
    ),
  );
};

const ChatAssistant = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([OPENING]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [limitReached, setLimitReached] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open]);

  useEffect(() => {
    if (open && !limitReached) inputRef.current?.focus();
  }, [open, limitReached]);

  const userMessageCount = messages.filter((m) => m.role === "user").length;

  const send = async () => {
    const text = input.trim();
    if (!text || loading || limitReached) return;

    const next: Msg[] = [...messages, { role: "user", content: text }];
    setMessages(next);
    setInput("");
    setLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke("chat-assistant", {
        body: { messages: next.filter((m) => m !== OPENING) },
      });
      if (error) throw error;
      const reply: string = data?.reply ?? "Sorry, something went wrong. Please try again.";
      const updated: Msg[] = [...next, { role: "assistant", content: reply }];

      // Enforce 20-message session cap (user messages).
      if (next.filter((m) => m.role === "user").length >= SESSION_LIMIT) {
        setMessages([...updated, LIMIT_MSG]);
        setLimitReached(true);
      } else {
        setMessages(updated);
      }
    } catch (e) {
      console.error(e);
      setMessages([
        ...next,
        {
          role: "assistant",
          content:
            "Sorry, I'm having trouble connecting right now. Please try again, or call (206) 900-3015.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{`
        @keyframes rpp-pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.25); opacity: 0.7; }
        }
        .rpp-chat-anchor {
          position: fixed;
          left: 72px;
          top: calc(50% + 42px);
          width: 110px;
          height: 110px;
          transform: translateX(-50%);
          z-index: 1000;
        }
        .rpp-chat-fab {
          position: relative;
          width: 110px;
          height: 110px;
          border-radius: 50%;
          border: 3px solid #C9A84C;
          background: #fff;
          padding: 0;
          cursor: pointer;
          box-shadow: 0 6px 20px rgba(0,0,0,0.25);
          overflow: visible;
          transition: transform 0.3s ease, box-shadow 0.3s ease, filter 0.3s ease;
        }
        .rpp-chat-fab:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 28px rgba(201,168,76,0.45);
          filter: drop-shadow(0 0 10px rgba(201,168,76,0.5));
        }
        .rpp-chat-fab img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          display: block;
        }
        .rpp-chat-fab::after {
          content: "";
          position: absolute;
          top: 4px;
          right: 4px;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #C9A84C;
          border: 2px solid #fff;
          animation: rpp-pulse 1.8s ease-in-out infinite;
        }
        .rpp-chat-panel {
          position: absolute;
          top: calc(100% + 8px);
          left: 50%;
          transform: translateX(-50%);
          width: 380px;
          height: 520px;
          max-width: calc(100vw - 16px);
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.3);
          z-index: 1001;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          animation: rpp-slide-up 0.25s ease-out;
        }
        @keyframes rpp-slide-up {
          from { transform: translateX(-50%) translateY(20px); opacity: 0; }
          to { transform: translateX(-50%) translateY(0); opacity: 1; }
        }
        .rpp-chat-header {
          position: relative;
          background: #1B3A6B;
          color: #fff;
          padding: 14px 16px;
          display: flex;
          align-items: center;
          gap: 12px;
          z-index: 1;
        }
        .rpp-chat-header::before,
        .rpp-chat-header::after { display: none !important; content: none !important; }
        .rpp-chat-header img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          object-fit: cover;
          border: 1.5px solid #C9A84C;
          flex-shrink: 0;
          position: relative;
          z-index: 1;
        }
        .rpp-chat-header-text { flex: 1; min-width: 0; position: relative; z-index: 2; }
        .rpp-chat-header-text h3 {
          margin: 0;
          font-size: 18px;
          font-weight: 700;
          line-height: 1.2;
          color: #ffffff;
          opacity: 1;
        }
        .rpp-chat-header-text p {
          margin: 3px 0 0;
          font-size: 13px;
          color: #ffffff;
          opacity: 0.8;
        }
        .rpp-chat-close {
          background: transparent;
          border: none;
          color: #fff;
          cursor: pointer;
          padding: 4px;
          border-radius: 4px;
        }
        .rpp-chat-close:hover { background: rgba(255,255,255,0.12); }
        .rpp-chat-messages {
          flex: 1;
          overflow-y: auto;
          padding: 16px;
          background: #fff;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .rpp-chat-bubble {
          max-width: 85%;
          padding: 10px 14px;
          border-radius: 14px;
          font-size: 14px;
          line-height: 1.5;
          white-space: pre-wrap;
          word-wrap: break-word;
        }
        .rpp-chat-bubble.assistant {
          background: #F5F1E8;
          color: #1B2B4B;
          align-self: flex-start;
          border-bottom-left-radius: 4px;
        }
        .rpp-chat-bubble.user {
          background: #1B3A6B;
          color: #fff;
          align-self: flex-end;
          border-bottom-right-radius: 4px;
        }
        .rpp-chat-typing {
          align-self: flex-start;
          color: #1B2B4B;
          font-size: 13px;
          font-style: italic;
          padding: 4px 8px;
        }
        .rpp-chat-input-bar {
          display: flex;
          gap: 8px;
          padding: 12px;
          border-top: 1px solid #eee;
          background: #fff;
        }
        .rpp-chat-input {
          flex: 1;
          padding: 10px 12px;
          border: 1px solid #ddd;
          border-radius: 24px;
          font-size: 14px;
          outline: none;
          font-family: inherit;
        }
        .rpp-chat-input:focus { border-color: #C9A84C; }
        .rpp-chat-input:disabled { background: #f5f5f5; cursor: not-allowed; }
        .rpp-chat-send {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: none;
          background: #C9A84C;
          color: #fff;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .rpp-chat-send:hover:not(:disabled) { background: #b8962f; }
        .rpp-chat-send:disabled { opacity: 0.5; cursor: not-allowed; }
        @media (max-width: 480px) {
          .rpp-chat-panel {
            width: calc(100vw - 16px);
            height: 70vh;
          }
          .rpp-chat-anchor { left: 72px; top: calc(50% + 35px); }
        }
      `}</style>

      <div className="rpp-chat-anchor">
        <button
          type="button"
          className="rpp-chat-fab"
          aria-label={open ? "Close chat assistant" : "Open chat assistant"}
          onClick={() => setOpen((v) => !v)}
        >
          <img src={chatAvatar} alt="Chat with us" />
        </button>

        {open && (
          <div
            className="rpp-chat-panel"
            role="dialog"
            aria-label="Chat assistant"
            ref={(el) => {
              if (!el) return;
              // Clamp within viewport: if panel overflows the left edge, shift right.
              el.style.marginLeft = "0px";
              const rect = el.getBoundingClientRect();
              if (rect.left < 8) {
                el.style.marginLeft = `${Math.max(0, 8 - rect.left)}px`;
              } else if (rect.right > window.innerWidth - 8) {
                el.style.marginLeft = `${Math.min(0, window.innerWidth - 8 - rect.right)}px`;
              }
            }}
          >
            <div className="rpp-chat-header">
              <img src={chatAvatar} alt="" aria-hidden="true" />
              <div className="rpp-chat-header-text">
                <h3>Ask Us Anything</h3>
                <p>We're here to help</p>
              </div>
              <button
                type="button"
                className="rpp-chat-close"
                aria-label="Close chat"
                onClick={() => setOpen(false)}
              >
                <X size={20} />
              </button>
            </div>

            <div className="rpp-chat-messages" ref={scrollRef}>
              {messages.map((m, i) => (
                <div key={i} className={`rpp-chat-bubble ${m.role}`}>
                  {m.role === "assistant" ? linkify(m.content) : m.content}
                </div>
              ))}
              {loading && <div className="rpp-chat-typing">Typing…</div>}
            </div>

            <form
              className="rpp-chat-input-bar"
              onSubmit={(e) => {
                e.preventDefault();
                send();
              }}
            >
              <input
                ref={inputRef}
                type="text"
                className="rpp-chat-input"
                placeholder={
                  limitReached ? "Session ended — call (206) 900-3015" : "Type your message…"
                }
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={loading || limitReached}
                maxLength={500}
              />
              <button
                type="submit"
                className="rpp-chat-send"
                aria-label="Send message"
                disabled={loading || limitReached || !input.trim()}
              >
                <Send size={18} />
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default ChatAssistant;
