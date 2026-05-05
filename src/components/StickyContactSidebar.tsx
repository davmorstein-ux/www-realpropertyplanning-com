import { Link } from "react-router-dom";
import joinNetworkBtn from "@/assets/JoinNetwork_Button_v4_transparent.webp";

const StickyContactSidebar = () => {
  return (
    <div
      className="fixed left-0 top-1/2 -translate-y-1/2 z-[1000] hidden lg:block"
      style={{ width: 60 }}
    >
      <Link
        to="/join-the-network"
        className="relative block"
        aria-label="Join the Network"
      >
        <img
          src={joinNetworkBtn}
          alt="Join the Network"
          className="w-full h-auto"
          loading="eager"
        />
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 30,
            height: 30,
            top: "52%",
            left: "65%",
            transform: "translate(-50%, -50%) translateZ(0)",
            willChange: "transform, opacity",
            animation: "globeGlow 2.5s ease-in-out infinite",
            background: "radial-gradient(circle, rgba(34, 197, 94, 0.6) 0%, transparent 70%)",
          }}
        />
      </Link>
    </div>
  );
};

export default StickyContactSidebar;
