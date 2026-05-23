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
        }
        .fcb-btn:hover .fcb-tire {
          animation: fcb-tire-spin 1.4s linear infinite;
        }
        .fcb-label {
          position: absolute;
          right: 110%;
          top: 50%;
          transform: translateY(-50%);
          background: #1B2B4B;
          color: #fff;
          font-size: 14px;
          font-weight: bold;
          padding: 6px 12px;
          border-radius: 20px;
          white-space: nowrap;
          opacity: 0;
          transition: opacity 0.2s ease;
          pointer-events: none;
        }
        .fcb-btn:hover .fcb-label {
          opacity: 1;
        }
        @keyframes fcb-tire-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
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
    </>
  );
};

export default FloatingChatButton;
