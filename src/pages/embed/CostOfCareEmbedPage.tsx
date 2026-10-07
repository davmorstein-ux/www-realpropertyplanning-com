/**
 * The Cost of Care calculator as other websites embed it (Oct 6, 2026).
 * Routes: /embed/cost-of-care (all six, with a chooser) and
 * /embed/cost-of-care/:careSlug (one care type). How it is shared:
 * src/lib/calculatorEmbed.ts and /calculators/embed.
 *
 * No header or footer, noindex, transparent page background so the card sits
 * on the host site's own background. Every internal link opens the full site
 * in a new tab rather than navigating inside the frame. The page posts its
 * height to the parent so the snippet's script can size the frame.
 */
import { useEffect, useRef, useState, type MouseEvent } from "react";
import { Navigate, useParams } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import CostOfCareEmbed from "@/components/CostOfCareEmbed";
import { CARE_CALCULATORS, findCareCalculator } from "@/lib/careCalculators";
import { EMBED_DEFAULT_SLUG, EMBED_HEIGHT_MESSAGE, SITE_ORIGIN, creditPath } from "@/lib/calculatorEmbed";

const CSS = `
html, body { background: transparent !important; }
body::before { display: none !important; }
.rpe { font-family: 'DM Sans', system-ui, sans-serif; padding: 4px 4px 8px; max-width: 780px; margin: 0 auto; box-sizing: border-box; }
.rpe .rpe-pick { display: flex; flex-wrap: wrap; justify-content: center; gap: 8px; margin: 0 0 14px; }
.rpe button.rpe-pill.rpe-pill { font-family: 'DM Sans', system-ui, sans-serif !important; font-size: 16px !important; font-weight: 600 !important; line-height: 1.2 !important; padding: 10px 14px !important; min-height: 44px; border-radius: 999px !important; border: 2px solid var(--pc) !important; background: #ffffff !important; color: var(--pc) !important; cursor: pointer !important; }
.rpe button.rpe-pill.rpe-pill[aria-pressed="true"] { background: var(--pc) !important; color: #ffffff !important; }
.rpe button.rpe-pill.rpe-pill:focus-visible { outline: 3px solid #14283a; outline-offset: 2px; }
.rpe .rpe-credit.rpe-credit { text-align: center; font-size: 15px !important; color: #1f2933 !important; margin: 12px 0 0 !important; line-height: 1.4 !important; }
.rpe .rpe-credit a { color: #1B3A6B !important; font-weight: 600 !important; font-size: 15px !important; text-decoration: underline !important; text-underline-offset: 3px; }
@media (max-width: 480px) { .rpe button.rpe-pill.rpe-pill { font-size: 15px !important; padding: 8px 12px !important; } }
`;

/** Internal links open the full site in a new tab; outside links already do. */
function openOutside(e: MouseEvent<HTMLDivElement>) {
  const a = (e.target as HTMLElement).closest("a");
  if (!a) return;
  const href = a.getAttribute("href") || "";
  if (!href.startsWith("/")) return;
  e.preventDefault();
  window.open(`${SITE_ORIGIN}${href}`, "_blank", "noopener");
}

const CostOfCareEmbedPage = () => {
  const { careSlug } = useParams<{ careSlug?: string }>();
  const fixed = careSlug ? findCareCalculator(careSlug) : undefined;
  const [chosen, setChosen] = useState(EMBED_DEFAULT_SLUG);
  const ref = useRef<HTMLDivElement>(null);

  /* Tell the parent page how tall the content is, whenever it changes. */
  useEffect(() => {
    if (window.parent === window || !ref.current) return;
    const send = () => {
      /* The content's own bottom edge, not document scrollHeight: that is never
         less than the frame's height, so the frame could grow but never shrink. */
      const el = ref.current;
      if (!el) return;
      const h = el.getBoundingClientRect().bottom + window.scrollY + 4;
      window.parent.postMessage({ type: EMBED_HEIGHT_MESSAGE, height: h }, "*");
    };
    send();
    const ro = new ResizeObserver(send);
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);

  if (careSlug && !fixed) return <Navigate to="/embed/cost-of-care" replace />;

  const option = fixed ?? findCareCalculator(chosen) ?? CARE_CALCULATORS[0];
  const choice = fixed ? fixed.slug : "all";

  return (
    <div className="rpe" ref={ref} onClickCapture={openOutside}>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <SEOHead
        title={`${option.shortLabel} Cost Calculator (embed) | Real Property Planning`}
        description="The Washington cost of care calculator from Real Property Planning, as embedded on other websites."
        canonical={`${SITE_ORIGIN}${fixed ? `/embed/cost-of-care/${fixed.slug}` : "/embed/cost-of-care"}`}
        noindex
      />
      {!fixed && (
        <div className="rpe-pick" role="group" aria-label="Type of care">
          {CARE_CALCULATORS.map((o) => (
            <button
              key={o.slug}
              type="button"
              className="rpe-pill"
              aria-pressed={o.slug === option.slug}
              onClick={() => setChosen(o.slug)}
              style={{ ["--pc" as string]: o.color }}
            >
              {o.shortLabel}
            </button>
          ))}
        </div>
      )}
      <CostOfCareEmbed careTypeId={option.careTypeId} />
      <p className="rpe-credit">
        Free calculator from <a href={creditPath(choice)}>Real Property Planning</a>. No sign-up, no ads.
      </p>
    </div>
  );
};

export default CostOfCareEmbedPage;
