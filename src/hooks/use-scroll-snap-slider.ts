import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

const getSlidesPerView = (width: number) => {
  if (width >= 1024) return 3;
  if (width >= 640) return 2;
  return 1;
};

const getGap = (width: number) => {
  if (width >= 1024) return 24;
  if (width >= 640) return 20;
  return 16;
};

interface UseScrollSnapSliderOptions {
  itemCount: number;
}

export const useScrollSnapSlider = ({ itemCount }: UseScrollSnapSliderOptions) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const slideRefs = useRef<Array<HTMLDivElement | null>>([]);
  const animationFrameRef = useRef<number | null>(null);
  const hasInitializedRef = useRef(false);

  const slidesPerView = getSlidesPerView(viewportWidth);
  const gap = getGap(viewportWidth);
  const slideWidth = viewportWidth ? (viewportWidth - gap * (slidesPerView - 1)) / slidesPerView : 0;
  const edgePadding = viewportWidth && slideWidth ? (viewportWidth - slideWidth) / 2 : 0;

  const setSlideRef = useCallback(
    (index: number) => (node: HTMLDivElement | null) => {
      slideRefs.current[index] = node;
    },
    [],
  );

  const centerSlide = useCallback((index: number, behavior: ScrollBehavior = "smooth") => {
    const slide = slideRefs.current[index];
    slide?.scrollIntoView({ behavior, inline: "center", block: "nearest" });
  }, []);

  const getNearestIndex = useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport) return 0;

    const viewportRect = viewport.getBoundingClientRect();
    const viewportCenter = viewportRect.left + viewportRect.width / 2;
    let nearestIndex = 0;
    let nearestDistance = Number.POSITIVE_INFINITY;

    slideRefs.current.forEach((slide, index) => {
      if (!slide) return;

      const rect = slide.getBoundingClientRect();
      const slideCenter = rect.left + rect.width / 2;
      const distance = Math.abs(slideCenter - viewportCenter);

      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = index;
      }
    });

    return nearestIndex;
  }, []);

  const syncSelectedIndex = useCallback(() => {
    const nextIndex = getNearestIndex();
    setSelectedIndex((currentIndex) => (currentIndex === nextIndex ? currentIndex : nextIndex));
    return nextIndex;
  }, [getNearestIndex]);

  const goToIndex = useCallback(
    (index: number, behavior: ScrollBehavior = "smooth") => {
      const nextIndex = Math.max(0, Math.min(index, itemCount - 1));
      setSelectedIndex(nextIndex);
      centerSlide(nextIndex, behavior);
    },
    [centerSlide, itemCount],
  );

  const scrollPrev = useCallback(() => {
    goToIndex(selectedIndex - 1);
  }, [goToIndex, selectedIndex]);

  const scrollNext = useCallback(() => {
    goToIndex(selectedIndex + 1);
  }, [goToIndex, selectedIndex]);

  const handleScroll = useCallback(() => {
    if (animationFrameRef.current) {
      window.cancelAnimationFrame(animationFrameRef.current);
    }

    animationFrameRef.current = window.requestAnimationFrame(() => {
      syncSelectedIndex();
    });
  }, [syncSelectedIndex]);

  useLayoutEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const measure = () => {
      setViewportWidth(viewport.clientWidth);
    };

    measure();

    const observer = new ResizeObserver(() => {
      measure();
    });

    observer.observe(viewport);

    return () => observer.disconnect();
  }, []);

  useLayoutEffect(() => {
    if (!viewportWidth) return;

    if (!hasInitializedRef.current) {
      hasInitializedRef.current = true;
      goToIndex(viewportWidth >= 640 ? 1 : 0, "auto");
      return;
    }

    centerSlide(selectedIndex, "auto");
  }, [centerSlide, goToIndex, selectedIndex, viewportWidth]);

  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return {
    viewportRef,
    selectedIndex,
    slidesPerView,
    gap,
    slideWidth,
    edgePadding,
    setSlideRef,
    handleScroll,
    goToIndex,
    scrollPrev,
    scrollNext,
    canScrollPrev: selectedIndex > 0,
    canScrollNext: selectedIndex < itemCount - 1,
  };
};