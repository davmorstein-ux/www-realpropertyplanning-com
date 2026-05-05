import { Link } from "react-router-dom";
import { useEffect, useRef, useState, useCallback } from "react";
import defaultBtn from "@/assets/for-professionals-sidebar-button.png";
import hoverBtn from "@/assets/for-professionals-sidebar-button-green.png";

interface SidebarNode {
  x: number;
  y: number;
  r: number;
}

interface SidebarSignal {
  a: number;
  b: number;
  progress: number;
  duration: number;
}

const StickyContactSidebar = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const hoveredRef = useRef(false);
  const colorBlendRef = useRef(0); // 0 = blue, 1 = green
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setHovered(true);
    hoveredRef.current = true;
  }, []);
  const handleMouseLeave = useCallback(() => {
    setHovered(false);
    hoveredRef.current = false;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const NODE_COUNT = 18;
    const CONNECT_DIST = 60;
    const MAX_SIGNALS = 4;

    let nodes: SidebarNode[] = [];
    let edges: { i: number; j: number }[] = [];
    const signals: SidebarSignal[] = [];
    let nextSignalIn = 500;

    const initNodes = () => {
      nodes = [];
      edges = [];
      // Scatter nodes across the triangle area (points right: 0,0 -> 100%,50% -> 0,100%)
      for (let i = 0; i < NODE_COUNT; i++) {
        // Generate points biased toward the triangle interior
        let x: number, y: number;
        let attempts = 0;
        do {
          x = Math.random() * width;
          y = Math.random() * height;
          attempts++;
          // Point is inside triangle if x <= width * (1 - |y/height - 0.5| * 2)
          // i.e. x/width <= 1 - |2*y/height - 1|
        } while (x / width > 1 - Math.abs(2 * y / height - 1) + 0.05 && attempts < 50);

        nodes.push({ x, y, r: 1.5 + Math.random() * 0.8 });
      }

      // Build edges
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const d = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
          if (d <= CONNECT_DIST) {
            edges.push({ i, j });
          }
        }
      }
      // Ensure each node has at least one connection
      for (let i = 0; i < nodes.length; i++) {
        const hasEdge = edges.some(e => e.i === i || e.j === i);
        if (!hasEdge) {
          let bestJ = -1, bestD = Infinity;
          for (let j = 0; j < nodes.length; j++) {
            if (j === i) continue;
            const d = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
            if (d < bestD) { bestD = d; bestJ = j; }
          }
          if (bestJ >= 0) edges.push({ i: Math.min(i, bestJ), j: Math.max(i, bestJ) });
        }
      }
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initNodes();
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    let lastT = performance.now();

    const draw = (t: number) => {
      const dt = Math.min(t - lastT, 64);
      lastT = t;

      // Smoothly blend color
      const target = hoveredRef.current ? 1 : 0;
      colorBlendRef.current += (target - colorBlendRef.current) * Math.min(1, dt / 150);

      const blend = colorBlendRef.current;

      // Interpolate colors
      const lineR = 100 + (50 - 100) * blend;
      const lineG = 160 + (220 - 160) * blend;
      const lineB = 255 + (100 - 255) * blend;

      const pulseR = 150 + (100 - 150) * blend;
      const pulseG = 200 + (255 - 200) * blend;
      const pulseB = 255 + (150 - 255) * blend;

      ctx.clearRect(0, 0, width, height);

      // Spawn signals
      nextSignalIn -= dt;
      if (nextSignalIn <= 0 && signals.length < MAX_SIGNALS && edges.length > 0) {
        const e = edges[Math.floor(Math.random() * edges.length)];
        const reverse = Math.random() < 0.5;
        signals.push({
          a: reverse ? e.j : e.i,
          b: reverse ? e.i : e.j,
          progress: 0,
          duration: 1500 + Math.random() * 1000,
        });
        nextSignalIn = 300 + Math.random() * 500;
      }

      // Update signals
      for (let s = signals.length - 1; s >= 0; s--) {
        signals[s].progress += dt / signals[s].duration;
        if (signals[s].progress >= 1) signals.splice(s, 1);
      }

      // Draw lines
      for (const e of edges) {
        ctx.strokeStyle = `rgba(${lineR}, ${lineG}, ${lineB}, 0.3)`;
        ctx.lineWidth = 0.6;
        ctx.beginPath();
        ctx.moveTo(nodes[e.i].x, nodes[e.i].y);
        ctx.lineTo(nodes[e.j].x, nodes[e.j].y);
        ctx.stroke();
      }

      // Draw signal pulses
      for (const sig of signals) {
        const a = nodes[sig.a];
        const b = nodes[sig.b];
        const x = a.x + (b.x - a.x) * sig.progress;
        const y = a.y + (b.y - a.y) * sig.progress;
        ctx.save();
        ctx.shadowBlur = 6;
        ctx.shadowColor = `rgba(${pulseR}, ${pulseG}, ${pulseB}, 0.8)`;
        ctx.fillStyle = `rgba(${pulseR}, ${pulseG}, ${pulseB}, 1)`;
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // Draw nodes
      for (const n of nodes) {
        ctx.save();
        ctx.shadowBlur = 8;
        ctx.shadowColor = `rgba(${lineR}, ${lineG}, ${lineB}, 0.6)`;
        ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
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
    <div
      className="fixed left-0 top-1/2 -translate-y-1/2 z-[1000] hidden lg:block"
      style={{ width: 160 }}
    >
      <Link
        to="/professionals"
        className="group relative block"
        aria-label="For Professionals"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Animated network canvas behind images */}
        <canvas
          ref={canvasRef}
          aria-hidden="true"
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }}
        />
        {/* Blue default image */}
        <img
          src={defaultBtn}
          alt="For Professionals"
          className={`w-full h-auto transition-opacity duration-300 ease-in-out ${hovered ? "opacity-0" : "opacity-100"}`}
          loading="eager"
        />
        {/* Green hover image */}
        <img
          src={hoverBtn}
          alt=""
          aria-hidden="true"
          className={`absolute inset-0 w-full h-auto transition-opacity duration-300 ease-in-out ${hovered ? "opacity-100" : "opacity-0"}`}
          loading="eager"
        />
      </Link>
    </div>
  );
};

export default StickyContactSidebar;
