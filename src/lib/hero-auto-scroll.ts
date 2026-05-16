/**
 * Shared utility: 5s after a hero page loads, smoothly scroll so the top of
 * the navy hero band is flush with the bottom of the fixed header.
 * Cancels if the user has already scrolled (window.scrollY > 10).
 *
 * Called from HeroBandTitle so it only runs on pages that have a hero band.
 */
export function scheduleHeroAutoScroll() {
  if (typeof window === "undefined") return () => {};

  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  const start = () => {
    timeoutId = setTimeout(() => {
      if (window.scrollY > 10) return;

      const band = document.querySelector<HTMLElement>("[data-hero-band]");
      const header =
        document.querySelector<HTMLElement>("header") ||
        document.querySelector<HTMLElement>("nav");
      if (!band || !header) return;

      const headerHeight = header.getBoundingClientRect().height;
      const bandTop = band.getBoundingClientRect().top + window.scrollY;
      const targetScrollY = Math.max(0, bandTop - headerHeight);

      slowScrollTo(targetScrollY, 3000);
    }, 5000);
  };

  if (document.readyState === "complete") {
    start();
  } else {
    window.addEventListener("load", start, { once: true });
  }

  return () => {
    if (timeoutId) clearTimeout(timeoutId);
    window.removeEventListener("load", start);
  };
}
