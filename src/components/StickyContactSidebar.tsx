import { Link } from "react-router-dom";
import forProfessionalsBtn from "@/assets/for-professionals-sidebar-button.png";

const StickyContactSidebar = () => {
  return (
    <div
      className="fixed left-0 top-1/2 -translate-y-1/2 z-[1000] hidden lg:block"
      style={{ width: 160 }}
    >
      <Link
        to="/professionals"
        className="block transition-[filter] duration-200 ease-out hover:brightness-110"
        aria-label="For Professionals"
      >
        <img
          src={forProfessionalsBtn}
          alt="For Professionals"
          className="w-full h-auto"
          loading="eager"
        />
      </Link>
    </div>
  );
};

export default StickyContactSidebar;
