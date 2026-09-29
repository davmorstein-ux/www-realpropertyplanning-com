import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
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

  if (variant === "top") {
    return (
      <div className="rpp-prevpage-top" style={{ maxWidth: 900, margin: "0 auto", padding: "20px 24px 0" }}>
        <Link
          to={href}
          className="rpp-prevpage-link"
          style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontWeight: 600, color: "#1B3A6B", textDecoration: "underline", textUnderlineOffset: 3 }}
        >
          ❮ Back to {label}
        </Link>
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center", padding: "40px 24px 56px" }}>
      <Link
        to={href}
        className="rpp-return-btn"
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
          maxWidth: "100%",
          fontFamily: "'DM Sans', system-ui, sans-serif",
          fontSize: 18,
          fontWeight: 900,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "#ffffff",
          textDecoration: "none",
          background: "#280a0c",
          border: "2px solid #c3525c",
          padding: "10px 24px",
          borderRadius: 2,
          boxShadow: "inset 0 0 0 1px rgba(201,168,76,0.3), 0 4px 24px rgba(10,22,40,0.18)",
        }}
      >
        ❮ Back to {label}
      </Link>
    </div>
  );
}
