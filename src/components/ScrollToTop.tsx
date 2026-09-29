import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { recordPreviousPage } from "@/lib/navHistory";

const ScrollToTop = () => {
  const { pathname, search, hash } = useLocation();
  const navigate = useNavigate();

  // Redirect any URL with a trailing slash to the non-slash version (except root "/")
  useEffect(() => {
    if (pathname.length > 1 && pathname.endsWith("/")) {
      const normalized = pathname.replace(/\/+$/, "");
      navigate(`${normalized}${search}${hash}`, { replace: true });
    }
  }, [pathname, search, hash, navigate]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  /* Remember the page being left, for "Back to …" links (src/lib/navHistory.ts).
     Recorded when an in-site link is clicked: at that moment the address and
     document.title still belong to the page being left (by the time the route
     changes, the next page has already set its own title). */
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!a || a.target === "_blank") return;
      const href = a.getAttribute("href") || "";
      const internal = href.startsWith("/") || a.origin === window.location.origin;
      if (!internal || href.startsWith("#")) return;
      recordPreviousPage(window.location.pathname + window.location.search, document.title);
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
};

export default ScrollToTop;
