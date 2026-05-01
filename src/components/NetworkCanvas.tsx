import { useEffect, useRef } from "react";

/**
 * Animated network overlay: drifting glowing nodes connected by pulsing lines,
 * with occasional bright "signal packets" travelling between nodes.
 */
const NetworkCanvas = ({ className = "" }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;

    type Node = { x: number; y: number; vx: number; vy: number; r: number };
    type Pulse = {
      from: number;
      to: number;
      progress: number;
      speed: number;
    };
    type Link = {
      a: number;
      b: number;
      phase: number; // 0..1 fade-in, hold, fade-out lifecycle
      duration: number;
      delay: number;
      elapsed: number;
    };

    let nodes: Node[] = [];
    let links: Link[] = [];
    let pulses: Pulse[] = [];

    const NODE_COUNT_BASE = 24;
    const MAX_DIST = 200;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const initNodes = () => {
      const count = Math.max(
        20,
        Math.min(28, Math.round((width * height) / 45000)),
      );
      nodes = Array.from({ length: count || NODE_COUNT_BASE }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.12,
        r: 1.6 + Math.random() * 1.4,
      }));
    };

    const handleResize = () => {
      resize();
      initNodes();
    };

    resize();
    initNodes();
    window.addEventListener("resize", handleResize);

    let lastPulseAt = 0;

    const spawnPulse = (now: number) => {
      if (nodes.length < 2) return;
      // pick a near pair
      for (let attempt = 0; attempt < 12; attempt++) {
        const a = Math.floor(Math.random() * nodes.length);
        const b = Math.floor(Math.random() * nodes.length);
        if (a === b) continue;
        const dx = nodes[a].x - nodes[b].x;
        const dy = nodes[a].y - nodes[b].y;
        const d = Math.hypot(dx, dy);
        if (d < MAX_DIST * 1.1) {
          pulses.push({
            from: a,
            to: b,
            progress: 0,
            speed: 0.4 + Math.random() * 0.4, // progress per second
          });
          lastPulseAt = now;
          return;
        }
      }
    };

    const ensureLink = (a: number, b: number) => {
      const existing = links.find(
        (l) => (l.a === a && l.b === b) || (l.a === b && l.b === a),
      );
      if (existing) return existing;
      const link: Link = {
        a,
        b,
        phase: 0,
        duration: 1.4 + Math.random() * 1.6,
        delay: Math.random() * 1.2,
        elapsed: 0,
      };
      links.push(link);
      return link;
    };

    let rafId = 0;
    let last = performance.now();
    let nextPulseDelay = 2 + Math.random() * 2;

    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;

      ctx.clearRect(0, 0, width, height);

      // Drift nodes
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < -10) n.x = width + 10;
        if (n.x > width + 10) n.x = -10;
        if (n.y < -10) n.y = height + 10;
        if (n.y > height + 10) n.y = -10;
      }

      // Build/refresh links between nearby nodes
      const activePairs = new Set<string>();
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d = Math.hypot(dx, dy);
          if (d < MAX_DIST) {
            ensureLink(i, j);
            activePairs.add(`${i}-${j}`);
          }
        }
      }
      // Drop links whose nodes are no longer near
      links = links.filter((l) => activePairs.has(`${l.a}-${l.b}`));

      // Draw pulsing lines
      for (const link of links) {
        link.elapsed += dt;
        const t = link.elapsed - link.delay;
        if (t < 0) continue;
        const cycle = link.duration * 2.6; // fade in + hold + fade out + dwell
        const phase = (t % cycle) / cycle;
        let alpha = 0;
        if (phase < 0.35) alpha = phase / 0.35; // fade in
        else if (phase < 0.55) alpha = 1; // hold
        else if (phase < 0.9) alpha = 1 - (phase - 0.55) / 0.35; // fade out
        else alpha = 0;

        const a = nodes[link.a];
        const b = nodes[link.b];
        if (!a || !b) continue;
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.hypot(dx, dy);
        const distFalloff = 1 - dist / MAX_DIST;
        const finalAlpha = Math.max(0, alpha * 0.35 * distFalloff);

        ctx.strokeStyle = `rgba(100, 160, 255, ${finalAlpha})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }

      // Spawn pulses periodically
      if ((now - lastPulseAt) / 1000 > nextPulseDelay) {
        spawnPulse(now);
        nextPulseDelay = 2 + Math.random() * 2;
      }

      // Update + draw signal packets
      pulses = pulses.filter((p) => {
        p.progress += p.speed * dt;
        if (p.progress >= 1) return false;
        const a = nodes[p.from];
        const b = nodes[p.to];
        if (!a || !b) return false;
        const x = a.x + (b.x - a.x) * p.progress;
        const y = a.y + (b.y - a.y) * p.progress;

        const grad = ctx.createRadialGradient(x, y, 0, x, y, 10);
        grad.addColorStop(0, "rgba(220, 240, 255, 0.95)");
        grad.addColorStop(0.4, "rgba(140, 190, 255, 0.6)");
        grad.addColorStop(1, "rgba(100, 160, 255, 0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "rgba(255, 255, 255, 0.95)";
        ctx.beginPath();
        ctx.arc(x, y, 1.8, 0, Math.PI * 2);
        ctx.fill();
        return true;
      });

      // Draw nodes with glow
      for (const n of nodes) {
        const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, 14);
        grad.addColorStop(0, "rgba(200, 225, 255, 0.85)");
        grad.addColorStop(0.4, "rgba(120, 170, 255, 0.35)");
        grad.addColorStop(1, "rgba(80, 140, 240, 0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(n.x, n.y, 14, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "rgba(240, 248, 255, 0.95)";
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
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
