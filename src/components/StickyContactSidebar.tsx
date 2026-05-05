import { Phone, Calendar, Handshake } from "lucide-react";
import { Link } from "react-router-dom";

const StickyContactSidebar = () => {
  return (
    <div
      className="fixed left-0 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col group"
      style={{
        width: 48,
        transition: "width 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.width = "220px";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.width = "48px";
      }}
    >
      <div
        className="flex flex-col overflow-hidden"
        style={{
          background: "linear-gradient(145deg, #1e3a5f 0%, #142a48 40%, #0f1f36 100%)",
          borderTopRightRadius: 14,
          borderBottomRightRadius: 14,
          borderRight: "3px solid transparent",
          borderImage: "linear-gradient(180deg, #e8c84a 0%, #c9a84c 40%, #a08630 100%) 1",
          boxShadow: `
            inset 2px 2px 4px rgba(255, 255, 255, 0.08),
            inset -2px -2px 6px rgba(0, 0, 0, 0.4),
            4px 0 20px rgba(0, 0, 0, 0.35),
            1px 0 0 rgba(201, 168, 76, 0.3),
            0 -1px 0 rgba(201, 168, 76, 0.15),
            0 1px 0 rgba(0, 0, 0, 0.5)
          `,
        }}
      >
        {/* Phone */}
        <a
          href="tel:+12069003015"
          className="flex items-center gap-3 px-3 py-4 transition-colors"
          style={{
            minHeight: 56,
            borderBottom: "1px solid rgba(201, 168, 76, 0.15)",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(201, 168, 76, 0.12)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
        >
          <div style={{
            filter: "drop-shadow(0 2px 3px rgba(0,0,0,0.4))",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <Phone size={22} className="shrink-0" style={{ color: "#e8c84a" }} />
          </div>
          <span
            className="whitespace-nowrap text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ color: "#e8c84a", textShadow: "0 1px 2px rgba(0,0,0,0.3)" }}
          >
            (206) 900-3015
          </span>
        </a>

        {/* Schedule */}
        <Link
          to="/contact"
          className="flex items-center gap-3 px-3 py-4 transition-colors"
          style={{
            minHeight: 56,
            borderBottom: "1px solid rgba(201, 168, 76, 0.15)",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(201, 168, 76, 0.12)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
        >
          <div style={{
            filter: "drop-shadow(0 2px 3px rgba(0,0,0,0.4))",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <Calendar size={22} className="shrink-0" style={{ color: "#e8c84a" }} />
          </div>
          <span
            className="whitespace-nowrap text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ color: "#e8c84a", textShadow: "0 1px 2px rgba(0,0,0,0.3)" }}
          >
            Schedule a Call
          </span>
        </Link>

        {/* Join Network */}
        <Link
          to="/join-network"
          className="flex items-center gap-3 px-3 py-4 transition-colors"
          style={{ minHeight: 56 }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(201, 168, 76, 0.12)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
        >
          <div style={{
            filter: "drop-shadow(0 2px 3px rgba(0,0,0,0.4))",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <Handshake size={22} className="shrink-0" style={{ color: "#e8c84a" }} />
          </div>
          <span
            className="whitespace-nowrap text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ color: "#e8c84a", textShadow: "0 1px 2px rgba(0,0,0,0.3)" }}
          >
            Join the Network
          </span>
        </Link>
      </div>
    </div>
  );
};

export default StickyContactSidebar;
