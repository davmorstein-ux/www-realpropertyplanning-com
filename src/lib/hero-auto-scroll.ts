/**
 * Shared utility: 5s after a hero page loads, smoothly scroll so the top of
 * the navy hero band is flush with the bottom of the fixed header.
 * Cancels if the user has already scrolled (window.scrollY > 10).
 *
 * Called from HeroBandTitle so it only runs on pages that have a hero band.
 */
function slowScrollTo(targetY: number, duration: number) {
  const startY = window.scrollY;
  const distance = targetY - startY;
  const startTime = performance.now();

  function step(currentTime: number) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease =
      progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;
    window.scrollTo(0, startY + distance * ease);
    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

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

      slowScrollTo(targetScrollY, 5000);
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
