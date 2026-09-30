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

  /* A new page opens at the top, unless the address names a spot on it
     (/probate-glossary#letters-testamentary). Pages load lazily, so the target
     may not exist yet: look for it for up to 4 seconds (Sept 30, 2026). */
  useEffect(() => {
    const id = hash ? decodeURIComponent(hash.slice(1)) : "";
    if (!id) {
      window.scrollTo(0, 0);
      return;
    }
    let tries = 0;
    let timer: number | undefined;
    const seek = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ block: "start" });
        return;
      }
      if (tries === 0) window.scrollTo(0, 0);
      if (++tries < 40) timer = window.setTimeout(seek, 100);
    };
    seek();
    return () => window.clearTimeout(timer);
  }, [pathname, hash]);

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
