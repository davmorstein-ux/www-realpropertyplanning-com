import { useState, useEffect, RefObject } from "react";

export function useIsVisible(ref: RefObject<Element | null>, rootMargin = "200px"): boolean {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, rootMargin]);

  return isVisible;
}
