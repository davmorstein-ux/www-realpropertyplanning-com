import { Link } from "react-router-dom";
import joinNetworkBtn from "@/assets/JoinNetwork_Button_transparent.png";

const StickyContactSidebar = () => {
  return (
    <Link
      to="/join-network"
      className="fixed left-0 top-1/2 -translate-y-1/2 z-[1000] hidden lg:block transition-all duration-300 hover:drop-shadow-[0_0_18px_rgba(232,200,74,0.55)]"
      style={{ width: 80 }}
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
          width: 40,
          height: 40,
          top: "60%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          animation: "globePulse 2.5s ease-in-out infinite",
        }}
      />
    </Link>
  );
};

export default StickyContactSidebar;
