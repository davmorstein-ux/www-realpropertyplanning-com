import { Link, useLocation } from "react-router-dom";

const AutoBreadcrumbs = () => {
  const { pathname } = useLocation();

  // Hide on homepage and 404-style empty paths.
  if (pathname === "/" || pathname === "") return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className="bg-cream border-b border-border/40"
    >
      <div className="container px-5 md:px-8 py-3 md:py-4">
        <Link
          to="/"
          className="text-base font-bold text-[#8B0000] hover:underline"
        >
          ‹ Home
        </Link>
      </div>
    </nav>
  );
};

export default AutoBreadcrumbs;
