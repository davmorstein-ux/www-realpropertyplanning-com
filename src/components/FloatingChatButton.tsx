import chatCouple from "@/assets/chat-couple.png";
import chatTire from "@/assets/chat-tire.png";

/**
 * Standalone floating chat button shown on every page.
 * Reuses the sbn-chat-wrap visual structure from the bottom nav.
 */
const FloatingChatButton = () => {
  const openChat = () => {
    window.dispatchEvent(new Event("rpp-open-chat"));
  };

  return (
    <>
      <style>{`
        .fcb-btn {
          position: fixed;
          bottom: 20px;
          right: 20px;
          width: 105px;
          height: 105px;
          z-index: 10000;
          background: transparent;
          border: 0;
          padding: 0;
          cursor: pointer;
        }
        .fcb-wrap {
          position: relative;
          width: 100%;
          height: 100%;
          animation: fcb-pulse-glow 2.5s ease-in-out infinite;
        }
        .fcb-couple {
          position: absolute;
          inset: 10px;
          width: calc(100% - 20px);
          height: calc(100% - 20px);
          border-radius: 50%;
          object-fit: cover;
          display: block;
          z-index: 1;
        }
        .fcb-tire {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
          pointer-events: none;
          z-index: 2;
          animation: fcb-tire-spin 9s linear infinite;
        }
        @keyframes fcb-tire-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes fcb-pulse-glow {
          0% {
            transform: scale(1);
            filter: drop-shadow(0 0 0 rgba(0,0,0,0));
          }
          50% {
            transform: scale(1.05);
            filter: drop-shadow(0 6px 20px rgba(0,0,0,0.22));
          }
          100% {
            transform: scale(1);
            filter: drop-shadow(0 0 0 rgba(0,0,0,0));
          }
        }
        .fcb-text-label {
          position: fixed;
          bottom: 128px;
          right: 20px;
          width: 105px;
          z-index: 10000;
          pointer-events: none;
          text-align: center;
          font-family: 'Inter', 'DM Sans', system-ui, sans-serif;
          font-weight: 800;
          font-size: 8px !important;
          line-height: 1;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: #CA0600;
          white-space: nowrap;
        }
        @media (max-width: 639px) {
          .fcb-btn { bottom: 110px !important; }
          .fcb-text-label { bottom: 218px !important; font-size: 9px !important; }
        }
      `}</style>
      <button
        type="button"
        onClick={openChat}
        className="fcb-btn"
        aria-label="Open chat"
      >
        <div className="fcb-wrap">
          <img src={chatCouple} alt="" aria-hidden="true" className="fcb-couple" />
          <img src={chatTire} alt="" aria-hidden="true" className="fcb-tire" />
        </div>
      </button>
      <span className="fcb-text-label" aria-hidden="true">Chat Here!</span>
    </>
  );
};

export default FloatingChatButton;
