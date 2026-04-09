import * as React from "react";
import { useNavigate } from "react-router-dom";
import compassImg from "@/assets/compass-nav.png";

interface ServicePageNavProps {
  variant?: "global";
}

const ServicePageNav = React.forwardRef<HTMLElement, ServicePageNavProps>(({ variant }, ref) => {
  const navigate = useNavigate();

  if (variant !== "global") {
    return null;
  }

  const goHome = () => navigate("/");
  const goBack = () => navigate(-1);
  const goForward = () => navigate(1);
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const scrollBottom = () => window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });

  return (
    <nav ref={ref} aria-label="Page navigation" className="rpp-compass-nav">
      <div className="rpp-compass-container">
        {/* The single compass image */}
        <img
          src={compassImg}
          alt="Navigation compass"
          className="rpp-compass-img"
          draggable={false}
        />

        {/* Invisible overlay hit areas */}
        <button
          type="button"
          className="rpp-compass-hit rpp-compass-hit--top"
          aria-label="Scroll to top of page"
          onClick={scrollTop}
        />
        <button
          type="button"
          className="rpp-compass-hit rpp-compass-hit--bottom"
          aria-label="Scroll to bottom of page"
          onClick={scrollBottom}
        />
        <button
          type="button"
          className="rpp-compass-hit rpp-compass-hit--left"
          aria-label="Go back"
          onClick={goBack}
        />
        <button
          type="button"
          className="rpp-compass-hit rpp-compass-hit--right"
          aria-label="Go forward"
          onClick={goForward}
        />
        <button
          type="button"
          className="rpp-compass-hit rpp-compass-hit--center"
          aria-label="Go to home page"
          onClick={goHome}
        />
      </div>
    </nav>
  );
});

ServicePageNav.displayName = "ServicePageNav";

export default ServicePageNav;
