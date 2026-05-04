import { Phone, Calendar, Handshake } from "lucide-react";
import { Link } from "react-router-dom";

const StickyContactSidebar = () => {
  return (
    <div
      className="fixed right-0 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col group"
      style={{
        width: 48,
        transition: "width 0.3s ease",
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
          background: "#1a2f4e",
          borderTopLeftRadius: 12,
          borderBottomLeftRadius: 12,
          borderLeft: "2px solid #c9a84c",
          boxShadow: "-4px 0 20px rgba(0,0,0,0.25)",
        }}
      >
        {/* Phone */}
        <a
          href="tel:+12069003015"
          className="flex items-center gap-3 px-3 py-4 hover:bg-white/10 transition-colors"
          style={{ minHeight: 52 }}
        >
          <Phone size={22} className="shrink-0" style={{ color: "#c9a84c" }} />
          <span
            className="whitespace-nowrap text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ color: "#c9a84c" }}
          >
            (206) 900-3015
          </span>
        </a>

        {/* Schedule */}
        <Link
          to="/contact"
          className="flex items-center gap-3 px-3 py-4 hover:bg-white/10 transition-colors"
          style={{ minHeight: 52 }}
        >
          <Calendar size={22} className="shrink-0" style={{ color: "#c9a84c" }} />
          <span
            className="whitespace-nowrap text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ color: "#c9a84c" }}
          >
            Schedule a Call
          </span>
        </Link>

        {/* Join Network */}
        <Link
          to="/join-network"
          className="flex items-center gap-3 px-3 py-4 hover:bg-white/10 transition-colors"
          style={{ minHeight: 52 }}
        >
          <Handshake size={22} className="shrink-0" style={{ color: "#c9a84c" }} />
          <span
            className="whitespace-nowrap text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ color: "#c9a84c" }}
          >
            Join the Network
          </span>
        </Link>
      </div>
    </div>
  );
};

export default StickyContactSidebar;
