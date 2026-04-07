import { Link, useLocation } from "react-router-dom";
import { getAdjacentPages } from "@/lib/service-page-sequence";
import backArrow from "@/assets/back-arrow-3d-transparent.svg";
import forwardArrow from "@/assets/forward-arrow-3d-transparent.svg";

const ServicePageNav = () => {
  const { pathname } = useLocation();
  const { prev, next } = getAdjacentPages(pathname);

  if (!prev && !next) return null;

  return (
    <nav aria-label="Previous and next service pages" className="rpp-arrow-nav mx-auto flex max-w-4xl items-center justify-between px-6 py-10 sm:py-14">
      {/* Previous */}
      <div className="flex-1">
        {prev ? (
          <Link
            to={prev.path}
            className="rpp-arrow-btn group inline-flex flex-col items-start gap-1.5"
            aria-label={`Previous: ${prev.label}`}
          >
            <img
              src={backArrow}
              alt=""
              className="h-[88px] w-[88px] transition-transform duration-300 group-hover:-translate-x-1"
            />
            <span className="text-xs font-medium tracking-wide text-muted-foreground transition-colors duration-300 group-hover:text-foreground sm:text-sm">
              {prev.label}
            </span>
          </Link>
        ) : (
          <span />
        )}
      </div>

      {/* Next */}
      <div className="flex-1 flex justify-end">
        {next ? (
          <Link
            to={next.path}
            className="rpp-arrow-btn group inline-flex flex-col items-end gap-1.5"
            aria-label={`Next: ${next.label}`}
          >
            <img
              src={forwardArrow}
              alt=""
              className="h-[88px] w-[88px] transition-transform duration-300 group-hover:translate-x-1"
            />
            <span className="text-xs font-medium tracking-wide text-muted-foreground transition-colors duration-300 group-hover:text-foreground sm:text-sm">
              {next.label}
            </span>
          </Link>
        ) : (
          <span />
        )}
      </div>
    </nav>
  );
};

export default ServicePageNav;
