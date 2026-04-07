import * as React from "react";
import { useNavigate } from "react-router-dom";

interface ServicePageNavProps {
  variant?: "global";
}

const ServicePageNav = React.forwardRef<HTMLElement, ServicePageNavProps>(({ variant }, ref) => {
  const navigate = useNavigate();

  if (variant !== "global") {
    return null;
  }

  return (
    <nav ref={ref} aria-label="Page navigation" className="rpp-arrow-nav">
      <button
        type="button"
        className="rpp-arrow-btn"
        aria-label="Go back"
        onClick={() => navigate(-1)}
      >
        <img src="/back-arrow-3d-transparent.svg" alt="" />
      </button>

      <button
        type="button"
        className="rpp-arrow-btn"
        aria-label="Go forward"
        onClick={() => navigate(1)}
      >
        <img src="/forward-arrow-3d-transparent.svg" alt="" />
      </button>
    </nav>
  );
});

ServicePageNav.displayName = "ServicePageNav";

export default ServicePageNav;
