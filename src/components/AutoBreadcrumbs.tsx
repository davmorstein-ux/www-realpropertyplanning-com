import { Link, useLocation } from "react-router-dom";

const AutoBreadcrumbs = () => {
  const { pathname } = useLocation();

  // Hide on homepage and 404-style empty paths.
  if (pathname === "/" || pathname === "") return null;

  return (
    <Link
      to="/"
      aria-label="Back to homepage"
      className="fixed bg-navy text-white font-bold rounded-md shadow-lg hover:bg-navy/90"
      style={{
        bottom: "24px",
        left: "24px",
        zIndex: 999,
        padding: "16px 28px",
        fontSize: "18px",
        border: "2px solid #8B0000",
      }}
    >
      ‹ Home
    </Link>
  );
};

export default AutoBreadcrumbs;