import { Link } from "react-router-dom";
import defaultBtn from "@/assets/for-professionals-sidebar-button.png";
import hoverBtn from "@/assets/for-professionals-sidebar-button-green.png";

const StickyContactSidebar = () => {
  return (
    <div
      className="fixed left-0 top-1/2 -translate-y-1/2 z-[1000] hidden lg:block"
      style={{ width: 160 }}
    >
      <Link
        to="/professionals"
        className="group relative block"
        aria-label="For Professionals"
      >
        <img
          src={defaultBtn}
          alt="For Professionals"
          className="w-full h-auto transition-opacity duration-300 ease-in-out group-hover:opacity-0"
          loading="eager"
        />
        <img
          src={hoverBtn}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-auto opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
          loading="eager"
        />
      </Link>
    </div>
  );
};

export default StickyContactSidebar;
