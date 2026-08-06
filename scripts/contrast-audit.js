/* ============================================================
   CONTRAST AUDIT — paste into the browser console on any page

   Lists every piece of text failing WCAG AA, sorted worst first,
   with the element, its colour, and its measured ratio. Click any
   row in the console to jump to that element in the Elements tab.

   HOW TO USE
     1. Open the page
     2. F12, click Console
     3. Paste this whole file, press Enter
     4. Read the table

   Run it before and after applying rpp-contrast-sitewide.css to
   confirm the fix, and on any page that still looks wrong so you
   can send me the specific selectors.
   ============================================================ */

(() => {
  const lum = (r, g, b) => {
    const a = [r, g, b].map(v => {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2];
  };

  const parse = c => {
    const m = c.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
    return m ? { r: +m[1], g: +m[2], b: +m[3], a: m[4] === undefined ? 1 : +m[4] } : null;
  };

  // Walk up the tree to find the first non-transparent background.
  const bgOf = el => {
    let n = el;
    while (n && n !== document.documentElement) {
      const c = parse(getComputedStyle(n).backgroundColor);
      if (c && c.a > 0) return c;
      n = n.parentElement;
    }
    return { r: 255, g: 255, b: 255, a: 1 };
  };

  const ratio = (fg, bg) => {
    // Flatten any foreground alpha (including opacity) against the background.
    const f = {
      r: fg.r * fg.a + bg.r * (1 - fg.a),
      g: fg.g * fg.a + bg.g * (1 - fg.a),
      b: fg.b * fg.a + bg.b * (1 - fg.a),
    };
    const L1 = lum(f.r, f.g, f.b);
    const L2 = lum(bg.r, bg.g, bg.b);
    const [hi, lo] = L1 > L2 ? [L1, L2] : [L2, L1];
    return (hi + 0.05) / (lo + 0.05);
  };

  const rows = [];
  document.querySelectorAll('body *').forEach(el => {
    // Only elements with their own visible text.
    const own = [...el.childNodes]
      .filter(n => n.nodeType === 3)
      .map(n => n.textContent.trim())
      .join(' ')
      .trim();
    if (!own) return;

    const cs = getComputedStyle(el);
    if (cs.visibility === 'hidden' || cs.display === 'none') return;

    const fg = parse(cs.color);
    if (!fg) return;

    // Fold inherited opacity into the alpha so faded text is caught.
    let op = 1, n = el;
    while (n && n !== document.documentElement) {
      op *= parseFloat(getComputedStyle(n).opacity);
      n = n.parentElement;
    }
    if (op < 0.05) return;
    fg.a = fg.a * op;

    const size = parseFloat(cs.fontSize);
    const weight = parseInt(cs.fontWeight, 10) || 400;
    const large = size >= 24 || (size >= 18.66 && weight >= 700);
    const required = large ? 3 : 4.5;

    const r = ratio(fg, bgOf(el));
    if (r < required) {
      rows.push({
        ratio: +r.toFixed(2),
        needs: required,
        size: Math.round(size) + 'px',
        color: cs.color,
        text: own.slice(0, 45),
        element: el,
      });
    }
  });

  rows.sort((a, b) => a.ratio - b.ratio);

  console.clear();
  if (!rows.length) {
    console.log('%c PASS — no AA contrast failures on this page ',
      'background:#0f4c4a;color:#fff;padding:6px 10px;font-size:14px');
    return;
  }
  console.log(`%c ${rows.length} contrast failures on this page `,
    'background:#8a2d1f;color:#fff;padding:6px 10px;font-size:14px');
  console.table(rows, ['ratio', 'needs', 'size', 'color', 'text']);
  console.log('Worst offender:', rows[0].element);
  window.__contrastFails = rows;
  console.log('Full list saved to window.__contrastFails');
})();
