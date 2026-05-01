import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
}

interface Pulse {
  fromIdx: number;
  toIdx: number;
  progress: number; // 0..1
  speed: number;
}

interface LineGlow {
  // keyed by "i-j" — current intensity 0..1
  intensity: number;
  target: number;
  speed: number;
}

const HeroNetworkBackground = ({ className = "" }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const NODE_COUNT = 36;
    const CONNECT_DIST = 220;

    let nodes: Node[] = [];
    let pulses: Pulse[] = [];
    const lineGlows = new Map<string, LineGlow>();

    const initNodes = () => {
      nodes = [];
      for (let i = 0; i < NODE_COUNT; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.15,
          vy: (Math.random() - 0.5) * 0.15,
          r: 2 + Math.random() * 2,
        });
      }
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (nodes.length === 0) initNodes();
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const lineKey = (i: number, j: number) => (i < j ? `${i}-${j}` : `${j}-${i}`);

    let lastPulseSpawn = 0;
    let lastGlowTick = 0;

    const draw = (t: number) => {
      // background
      ctx.fillStyle = "#020810";
      ctx.fillRect(0, 0, width, height);

      // update node positions (slow drift, bounce)
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
      }

      // periodically retarget some line glows
      if (t - lastGlowTick > 180) {
        lastGlowTick = t;
        for (let k = 0; k < 3; k++) {
          const i = Math.floor(Math.random() * nodes.length);
          const j = Math.floor(Math.random() * nodes.length);
          if (i === j) continue;
          const a = nodes[i];
          const b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d > CONNECT_DIST) continue;
          const key = lineKey(i, j);
          const g = lineGlows.get(key) ?? { intensity: 0, target: 0, speed: 0.02 };
          g.target = 1;
          g.speed = 0.015 + Math.random() * 0.02;
          lineGlows.set(key, g);
        }
      }

      // draw lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d > CONNECT_DIST) continue;

          const fade = 1 - d / CONNECT_DIST;
          const key = lineKey(i, j);
          const glow = lineGlows.get(key);
          let intensity = 0;
          if (glow) {
            // ease toward target, then drop target back to 0
            intensity = glow.intensity + (glow.target - glow.intensity) * glow.speed;
            glow.intensity = intensity;
            if (Math.abs(glow.intensity - glow.target) < 0.02) {
              if (glow.target === 1) glow.target = 0;
            }
          }

          // base + glow blend
          const baseR = 80, baseG = 160, baseB = 255, baseA = 0.4 * fade;
          const glowR = 120, glowG = 200, glowB = 255, glowA = 0.85 * fade;
          const r = baseR + (glowR - baseR) * intensity;
          const g = baseG + (glowG - baseG) * intensity;
          const bl = baseB + (glowB - baseB) * intensity;
          const al = baseA + (glowA - baseA) * intensity;

          ctx.strokeStyle = `rgba(${r | 0}, ${g | 0}, ${bl | 0}, ${al})`;
          ctx.lineWidth = 1 + intensity * 0.6;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      // spawn signal pulses occasionally
      if (t - lastPulseSpawn > 700 && pulses.length < 6) {
        lastPulseSpawn = t;
        for (let attempt = 0; attempt < 8; attempt++) {
          const i = Math.floor(Math.random() * nodes.length);
          const j = Math.floor(Math.random() * nodes.length);
          if (i === j) continue;
          const a = nodes[i];
          const b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d > CONNECT_DIST) continue;
          pulses.push({
            fromIdx: i,
            toIdx: j,
            progress: 0,
            speed: 0.006 + Math.random() * 0.008,
          });
          break;
        }
      }

      // update + draw pulses
      pulses = pulses.filter((p) => {
        p.progress += p.speed;
        if (p.progress >= 1) return false;
        const a = nodes[p.fromIdx];
        const b = nodes[p.toIdx];
        if (!a || !b) return false;
        const x = a.x + (b.x - a.x) * p.progress;
        const y = a.y + (b.y - a.y) * p.progress;
        ctx.save();
        ctx.shadowBlur = 12;
        ctx.shadowColor = "#7fbcff";
        ctx.fillStyle = "rgba(200, 225, 255, 0.95)";
        ctx.beginPath();
        ctx.arc(x, y, 2.4, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
        return true;
      });

      // draw nodes (with glow)
      for (const n of nodes) {
        ctx.save();
        ctx.shadowBlur = 15;
        ctx.shadowColor = "#4499ff";
        ctx.fillStyle = "rgba(220, 235, 255, 0.95)";
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`absolute inset-0 w-full h-full block ${className}`}
      style={{ backgroundColor: "#020810" }}
    />
  );
};

export default HeroNetworkBackground;
