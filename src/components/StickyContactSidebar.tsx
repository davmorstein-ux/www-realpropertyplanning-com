import { Link } from "react-router-dom";
import joinNetworkBtn from "@/assets/JoinNetwork_Button_v3_transparent.png";

const StickyContactSidebar = () => {
  return (
    <Link
      to="/join-network"
      className="fixed left-0 top-1/2 -translate-y-1/2 z-[1000] hidden lg:block join-network-sidebar"
      style={{ width: 80 }}
      aria-label="Join the Network"
    >
      <img
        src={joinNetworkBtn}
        alt="Join the Network"
        className="w-full h-auto"
        loading="eager"
      />
    </Link>
  );
};

export default StickyContactSidebar;
