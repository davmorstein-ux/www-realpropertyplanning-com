import { Link, useLocation } from "react-router-dom";

const AutoBreadcrumbs = () => {
  const { pathname } = useLocation();

  // Hide on homepage and 404-style empty paths.
  if (pathname === "/" || pathname === "") return null;

  return (
    <Link
      to="/"
      aria-label="Back to homepage"
      className="inline-flex items-center font-bold bg-cream text-navy"
      style={{
        padding: "14px 22px",
        fontSize: "18px",
        border: "2px solid #8B0000",
        borderRadius: "50px",
      }}
    >
      ‹ Home
    </Link>
  );
};

export default AutoBreadcrumbs;
