import { Link } from "react-router-dom";
import RppArrow from "@/components/RppArrow";

/**
 * ImageTile — a choice tile with one realistic object picture (Oct 26, 2026).
 *
 * David: "any pages with tiles like this need an icon or image. Remember the
 * idea is to break up the text." Same look as the homepage Popular Resources
 * tiles: white tile, 2px border in the tile's colour, one cut-out object
 * (David makes them in ChatGPT: a realistic object on plain white, then cut
 * out and trimmed to public/<topic>-v1.webp), title, optional one-line
 * description, and the site's one arrow (RppArrow) in the bottom-right corner.
 *
 * Use for NAVIGATION tiles (each one opens a page). Do not put a picture on
 * every card of an information list ("caregiver burnout", rule changes):
 * that is clutter; give the section one image instead.
 *
 * One object per topic, reused on every page about that topic, so visitors
 * learn the picture. Keep the topic → image map in src/data/topicImages.ts.
 *
 * Desktop: picture on top, everything centred, like the homepage tiles (David,
 * Oct 26, 2026: centred looks best on a laptop). Keep descriptions to about
 * two lines; centred text gets hard to read past that. Phones: a row, picture
 * left, words left-aligned beside it.
 */
type Props = {
  to: string;
  title: string;
  description?: string;
  img: string;
  /** Pixel size of the image file, so the space is reserved before it loads. */
  w: number;
  h: number;
  /** Tile colour: border, arrow and title on hover. Defaults to navy. */
  color?: string;
};

export const IMAGE_TILE_CSS = `
.rpp-itile.rpp-itile {
  position: relative !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  text-align: center !important;
  width: 100% !important;
  height: 100% !important;
  background: #ffffff !important;
  border: 2px solid var(--it-c) !important;
  border-radius: 16px !important;
  padding: 1.4rem 1.4rem 3.6rem !important;
  text-decoration: none !important;
  box-shadow: 0 4px 14px -10px color-mix(in srgb, var(--it-c) 60%, transparent) !important;
  transition: transform 0.18s ease, box-shadow 0.18s ease !important;
}
.rpp-itile.rpp-itile:focus-visible { outline: 3px solid var(--it-c) !important; outline-offset: 3px !important; }
@media (hover: hover) {
  .rpp-itile.rpp-itile:hover {
    transform: translateY(-3px) !important;
    box-shadow: 0 16px 30px -14px color-mix(in srgb, var(--it-c) 60%, transparent) !important;
  }
  .rpp-itile:hover img.rpp-itile-img { transform: translateY(-2px) scale(1.03); }
  .rpp-itile:hover span.rpp-itile-arrow.rpp-itile-arrow {
    color: color-mix(in srgb, var(--it-c) 82%, #000000) !important;
    transform: translateX(2px);
  }
}
.rpp-itile img.rpp-itile-img.rpp-itile-img {
  display: block !important;
  width: auto !important;
  max-width: 160px !important;
  height: 120px !important;
  object-fit: contain !important;
  object-position: center bottom !important;
  margin: 0 auto 1rem !important;
  border-radius: 0 !important;
  filter: drop-shadow(0 8px 8px rgba(0, 0, 0, 0.16));
  transition: transform 0.18s ease;
}
.rpp-itile span.rpp-itile-body { display: flex; flex-direction: column; align-items: center; gap: 0.4rem; }
/* Spans inside links are forced to 16px regular by index.css; these restate
   their own size and weight. */
.rpp-itile span.rpp-itile-title.rpp-itile-title {
  font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif !important;
  font-size: 22px !important;
  font-weight: 800 !important;
  line-height: 1.25 !important;
  color: #272421 !important;
}
.rpp-itile span.rpp-itile-desc.rpp-itile-desc {
  font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif !important;
  font-size: 18px !important;
  font-weight: 400 !important;
  line-height: 1.45 !important;
  color: #3d3833 !important;
}
.rpp-itile span.rpp-itile-arrow.rpp-itile-arrow {
  position: absolute !important;
  right: 14px !important;
  bottom: 14px !important;
  width: 36px !important;
  height: 36px !important;
  display: inline-flex !important;
  color: var(--it-c) !important;
  filter: drop-shadow(0 2px 2px color-mix(in srgb, var(--it-c) 45%, transparent));
  transition: color 0.18s ease, transform 0.18s ease;
}
@media (max-width: 639px) {
  .rpp-itile.rpp-itile {
    flex-direction: row !important;
    align-items: center !important;
    text-align: left !important;
    gap: 0.9rem !important;
    padding: 0.9rem 1rem 2.9rem 0.75rem !important;
  }
  .rpp-itile img.rpp-itile-img.rpp-itile-img {
    width: 88px !important; max-width: 88px !important; height: 88px !important;
    flex: 0 0 88px; margin: 0 0 -2rem !important; object-position: center !important;
  }
  .rpp-itile span.rpp-itile-body { align-items: flex-start; }
  .rpp-itile span.rpp-itile-title.rpp-itile-title { font-size: 20px !important; }
  .rpp-itile span.rpp-itile-desc.rpp-itile-desc { font-size: 17px !important; }
  .rpp-itile span.rpp-itile-arrow.rpp-itile-arrow { right: 12px !important; bottom: 10px !important; width: 34px !important; height: 34px !important; }
}
/* Image tiles are their own frame; the sitewide dashed hover ring would draw a
   second outline. */
.marquee-hover.rpp-itile::before { display: none !important; }
`;

export default function ImageTile({ to, title, description, img, w, h, color = "#1B3A6B" }: Props) {
  return (
    <Link to={to} className="rpp-itile" style={{ ["--it-c" as string]: color }}>
      <img className="rpp-itile-img" src={img} alt="" width={w} height={h} loading="lazy" decoding="async" />
      <span className="rpp-itile-body">
        <span className="rpp-itile-title">{title}</span>
        {description && <span className="rpp-itile-desc">{description}</span>}
      </span>
      <span className="rpp-itile-arrow" aria-hidden="true">
        <RppArrow size="100%" />
      </span>
    </Link>
  );
}

/** Render once per page that uses ImageTile. */
export function ImageTileStyles() {
  return <style dangerouslySetInnerHTML={{ __html: IMAGE_TILE_CSS }} />;
}
