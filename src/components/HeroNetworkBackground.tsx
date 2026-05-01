import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  r: number;
}

interface LinePulse {
  // phase 0..1 over duration
  phase: number;
  duration: number; // ms
  delay: number; // ms until next pulse starts after current ends
  active: boolean;
  cooldown: number; // ms remaining before next pulse
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

    const NODE_COUNT = 50;
    const CONNECT_DIST = 300;

    let nodes: Node[] = [];
    const linePulses = new Map<string, LinePulse>();
    // Forced edges (key "i-j" with i<j) that always render regardless of distance
    const forcedEdges = new Set<string>();

    const initNodes = () => {
      nodes = [];
      for (let i = 0; i < NODE_COUNT; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          r: 2 + Math.random() * 1,
        });
      }
      ensureConnectivity();
    };

    const ensureConnectivity = () => {
      forcedEdges.clear();
      const n = nodes.length;
      const neighborCount: number[] = new Array(n).fill(0);
      for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
          const d = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
          if (d <= CONNECT_DIST) {
            neighborCount[i]++;
            neighborCount[j]++;
          }
        }
      }
      // Force-connect any node with <2 connections to its 2 nearest neighbors
      for (let i = 0; i < n; i++) {
        if (neighborCount[i] >= 2) continue;
        const dists: { j: number; d: number }[] = [];
        for (let j = 0; j < n; j++) {
          if (j === i) continue;
          dists.push({ j, d: Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y) });
        }
        dists.sort((a, b) => a.d - b.d);
        for (let k = 0; k < Math.min(2, dists.length); k++) {
          const j = dists[k].j;
          const key = i < j ? `${i}-${j}` : `${j}-${i}`;
          if (!forcedEdges.has(key)) {
            forcedEdges.add(key);
            neighborCount[i]++;
            neighborCount[j]++;
          }
        }
      }
      // Union-find: merge any disconnected components
      const parent = Array.from({ length: n }, (_, i) => i);
      const find = (x: number): number => (parent[x] === x ? x : (parent[x] = find(parent[x])));
      const union = (a: number, b: number) => {
        const ra = find(a), rb = find(b);
        if (ra !== rb) parent[ra] = rb;
      };
      for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
          const d = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
          const key = `${i}-${j}`;
          if (d <= CONNECT_DIST || forcedEdges.has(key)) union(i, j);
        }
      }
      let safety = n;
      while (safety-- > 0) {
        const roots = new Map<number, number[]>();
        for (let i = 0; i < n; i++) {
          const r = find(i);
          if (!roots.has(r)) roots.set(r, []);
          roots.get(r)!.push(i);
        }
        if (roots.size <= 1) break;
        const groups = Array.from(roots.values());
        const a = groups[0];
        let best = { i: -1, j: -1, d: Infinity };
        for (let g = 1; g < groups.length; g++) {
          for (const i of a) {
            for (const j of groups[g]) {
              const d = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
              if (d < best.d) best = { i, j, d };
            }
          }
        }
        if (best.i < 0) break;
        const key = best.i < best.j ? `${best.i}-${best.j}` : `${best.j}-${best.i}`;
        forcedEdges.add(key);
        union(best.i, best.j);
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

    const getOrCreatePulse = (key: string): LinePulse => {
      let p = linePulses.get(key);
      if (!p) {
        p = {
          phase: 0,
          duration: 1500 + Math.random() * 1500,
          delay: 0,
          active: false,
          cooldown: Math.random() * 4000, // stagger initial activations
        };
        linePulses.set(key, p);
      }
      return p;
    };

    let lastT = performance.now();

    const draw = (t: number) => {
      const dt = Math.min(t - lastT, 64);
      lastT = t;

      // background
      ctx.fillStyle = "#020810";
      ctx.fillRect(0, 0, width, height);

      // draw lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d > CONNECT_DIST) continue;

          const fade = 1 - d / CONNECT_DIST;
          const key = lineKey(i, j);
          const p = getOrCreatePulse(key);

          // update pulse state
          if (p.active) {
            p.phase += dt / p.duration;
            if (p.phase >= 1) {
              p.phase = 0;
              p.active = false;
              p.cooldown = 800 + Math.random() * 3500;
              p.duration = 1500 + Math.random() * 1500;
            }
          } else {
            p.cooldown -= dt;
            if (p.cooldown <= 0) {
              p.active = true;
              p.phase = 0;
            }
          }

          // intensity: smooth 0 -> 1 -> 0 over phase
          const intensity = p.active ? Math.sin(p.phase * Math.PI) : 0;

          // base + pulse blend
          const baseR = 80, baseG = 150, baseB = 255, baseA = 0.3 * fade;
          const glowR = 140, glowG = 210, glowB = 255, glowA = 0.9 * fade;
          const r = baseR + (glowR - baseR) * intensity;
          const g = baseG + (glowG - baseG) * intensity;
          const bl = baseB + (glowB - baseB) * intensity;
          const al = baseA + (glowA - baseA) * intensity;

          ctx.strokeStyle = `rgba(${r | 0}, ${g | 0}, ${bl | 0}, ${al})`;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      // draw stationary nodes
      for (const n of nodes) {
        ctx.save();
        ctx.shadowBlur = 15;
        ctx.shadowColor = "#6ab0ff";
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
