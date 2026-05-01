import { useEffect, useRef } from "react";

/**
 * Pulsing line network overlay.
 *
 * Draws a fixed set of subtle glowing line segments distributed across the
 * canvas. Each segment independently fades in to a bright blue-white, holds
 * briefly, then fades back out — staggered so the network feels like signals
 * are travelling through it. No floating dots, no moving particles.
 */
const NetworkCanvas = ({ className = "" }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;

    type Segment = {
      x1: number;
      y1: number;
      x2: number;
      y2: number;
      duration: number; // total fade-in + hold + fade-out (seconds)
      delay: number; // seconds before this segment starts pulsing
      cycleGap: number; // pause between pulses
      elapsed: number;
    };

    let segments: Segment[] = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const buildSegments = () => {
      // Place anchor points loosely on a jittered grid so segments feel
      // distributed but irregular, then connect each anchor to 1–2 neighbors.
      const cols = Math.max(5, Math.round(width / 160));
      const rows = Math.max(3, Math.round(height / 140));
      const cellW = width / cols;
      const cellH = height / rows;

      const points: { x: number; y: number }[] = [];
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          points.push({
            x: c * cellW + cellW * (0.2 + Math.random() * 0.6),
            y: r * cellH + cellH * (0.2 + Math.random() * 0.6),
          });
        }
      }

      const built: Segment[] = [];
      const maxDist = Math.min(width, height) * 0.35;
      for (let i = 0; i < points.length; i++) {
        // Connect to up to 2 nearest points to form a sparse network
        const distances = points
          .map((p, idx) => ({
            idx,
            d: Math.hypot(points[i].x - p.x, points[i].y - p.y),
          }))
          .filter((p) => p.idx !== i && p.d < maxDist)
          .sort((a, b) => a.d - b.d)
          .slice(0, 2);

        for (const { idx } of distances) {
          if (idx <= i) continue; // avoid duplicate segments
          built.push({
            x1: points[i].x,
            y1: points[i].y,
            x2: points[idx].x,
            y2: points[idx].y,
            duration: 1.5 + Math.random() * 0.5, // 1.5–2s
            delay: Math.random() * 4,
            cycleGap: 1.5 + Math.random() * 3.5,
            elapsed: 0,
          });
        }
      }
      segments = built;
    };

    const handleResize = () => {
      resize();
      buildSegments();
    };

    resize();
    buildSegments();
    window.addEventListener("resize", handleResize);

    let rafId = 0;
    let last = performance.now();

    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;

      ctx.clearRect(0, 0, width, height);
      ctx.lineCap = "round";

      for (const seg of segments) {
        seg.elapsed += dt;
        const t = seg.elapsed - seg.delay;
        if (t < 0) continue;

        const cycle = seg.duration + seg.cycleGap;
        const phase = t % cycle;
        let alpha = 0;
        if (phase < seg.duration) {
          // Symmetric fade in / fade out within the duration window
          const half = seg.duration / 2;
          alpha =
            phase < half
              ? phase / half
              : 1 - (phase - half) / half;
        }
        if (alpha <= 0.01) continue;

        const finalAlpha = Math.max(0, Math.min(1, alpha)) * 0.8;

        // Soft outer glow stroke
        ctx.strokeStyle = `rgba(120, 180, 255, ${finalAlpha * 0.35})`;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(seg.x1, seg.y1);
        ctx.lineTo(seg.x2, seg.y2);
        ctx.stroke();

        // Bright inner core
        ctx.strokeStyle = `rgba(120, 180, 255, ${finalAlpha})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(seg.x1, seg.y1);
        ctx.lineTo(seg.x2, seg.y2);
        ctx.stroke();
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 w-full h-full ${className}`}
    />
  );
};

export default NetworkCanvas;
