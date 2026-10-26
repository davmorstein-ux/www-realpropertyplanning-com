import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BackLink from "@/components/BackLink";
import { getPreviousPage, type PreviousPage } from "@/lib/navHistory";

/**
 * "Back to <the page the visitor came from>" (Sept 29, 2026).
 *
 * For pages reached from many places (the process page is linked from two
 * menus, the footer, service tiles and county pages). Shows the in-site page
 * the visitor just left, by its title; on a direct visit or a search-engine
 * landing there is none, so it shows `fallback`. The first render always uses
 * the fallback so the prerendered HTML and hydration agree.
 *
 * Class names avoid "BackTo…": index.css rule 15 recolours [class*="BackTo"] a.
 */

interface Props {
  fallback: { href: string; label: string };
  /** "top": a quiet text link under the hero. "bottom": the site's return button. */
  variant?: "top" | "bottom";
}

export default function BackToPreviousPage({ fallback, variant = "bottom" }: Props) {
  const { pathname } = useLocation();
  const [prev, setPrev] = useState<PreviousPage | null>(null);

  useEffect(() => {
    const p = getPreviousPage();
    setPrev(p && p.path.split("?")[0] !== pathname && p.title ? p : null);
  }, [pathname]);

  const href = prev ? prev.path : fallback.href;
  const label = prev ? prev.title : fallback.label;

  /* Oct 26, 2026: the site's one back button (BackLink), top and bottom. */
  if (variant === "top") {
    return (
      <div className="rpp-prevpage-top" style={{ maxWidth: 900, margin: "0 auto", padding: "20px 24px 0" }}>
        <BackLink to={href} label={label} />
      </div>
    );
  }
  return <BackLink to={href} label={label} center />;
}
