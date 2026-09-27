/**
 * Where a professional's hover bio may open (David, Sept 27 2026).
 *
 * The bio used to open anywhere over the top half of a tile, logo and name
 * included, and people opened it without meaning to. Now only the headshot
 * and a small margin around it count. A headshot is any round <img> inside
 * the trigger region (border-radius of 50%, or at least half its width);
 * paired providers have two, and either one opens the bio. If a tile has no
 * round image the whole region counts, so a tile never loses its bio.
 *
 * Used by ProviderTile and ProviderHoverPanel so the two behave the same.
 */

/** How far outside the headshot circle's box the pointer may be and still count. */
export const HEADSHOT_HOVER_MARGIN = 14;

/**
 * The bio closes the instant the pointer leaves the headshot zone: no delay,
 * no fade (David, Sept 27 2026). The panel itself does NOT keep it open and
 * takes no pointer events, so it can sit over the headshot without stealing
 * the hover and flickering. Nothing inside a bio panel is clickable; the
 * "Watch introduction" button lives on the tile instead.
 */
export const bioTransition = (props: string[]) => props.map((p) => `${p} 1.4s cubic-bezier(0.16,1,0.3,1)`).join(", ");

function headshotRects(root: HTMLElement, margin: number): DOMRect[] {
  const rects: DOMRect[] = [];
  root.querySelectorAll("img").forEach((img) => {
    const r = img.getBoundingClientRect();
    if (r.width === 0 || r.height === 0) return;
    const radius = getComputedStyle(img).borderTopLeftRadius;
    const round = radius.endsWith("%") ? parseFloat(radius) >= 50 : parseFloat(radius) >= r.width / 2 - 1;
    if (!round) return;
    rects.push(new DOMRect(r.left - margin, r.top - margin, r.width + margin * 2, r.height + margin * 2));
  });
  return rects;
}

/** True when (x, y) is over a headshot in `root`, or anywhere in `root` if it has no headshot. */
export function isOverHeadshot(root: HTMLElement | null, x: number, y: number, margin = HEADSHOT_HOVER_MARGIN): boolean {
  if (!root) return false;
  const rects = headshotRects(root, margin);
  const zones = rects.length > 0 ? rects : [root.getBoundingClientRect()];
  return zones.some((r) => x >= r.left && x <= r.right && y >= r.top && y <= r.bottom);
}

/** True when (x, y) is inside the element's box. */
export function isOverElement(el: HTMLElement | null, x: number, y: number): boolean {
  if (!el) return false;
  const r = el.getBoundingClientRect();
  return x >= r.left && x <= r.right && y >= r.top && y <= r.bottom;
}
