import { Link } from "react-router-dom";
import { useEffect, useRef, useState, useCallback } from "react";
import defaultBtn from "@/assets/for-professionals-sidebar-button.png";
import hoverBtn from "@/assets/for-professionals-sidebar-button-green.png";

const StickyContactSidebar = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const hoveredRef = useRef(false);
  const colorProgressRef = useRef(0);
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

    const W = 160, H = 117;
    canvas.width = W;
    canvas.height = H;

    // Nodes with slow movement
    const nodes: { x: number; y: number; vx: number; vy: number }[] = [];
    for (let i = 0; i < 12; i++) {
      nodes.push({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
      });
    }

    // Pulses traveling between nodes
    const pulses: { from: number; to: number; progress: number; speed: number }[] = [];
    for (let i = 0; i < 4; i++) {
      const a = Math.floor(Math.random() * nodes.length);
      let b = Math.floor(Math.random() * nodes.length);
      while (b === a) b = Math.floor(Math.random() * nodes.length);
      pulses.push({ from: a, to: b, progress: 0, speed: 0.004 + Math.random() * 0.003 });
    }

    function lerpColor(t: number) {
      return {
        r: Math.round(100 + (80 - 100) * t),
        g: Math.round(180 + (255 - 180) * t),
        b: Math.round(255 + (120 - 255) * t),
      };
    }

    function inTriangle(x: number, y: number) {
      // Triangle: (0,0) -> (W, H/2) -> (0, H)
      // Using cross-product sign checks
      const edge1x = W, edge1y = H / 2;
      const edge2x = -W, edge2y = H / 2;
      const edge3x = 0, edge3y = -H;

      const d1 = x * edge1y - y * edge1x;
      const d2 = (x - W) * edge2y - (y - H / 2) * edge2x;
      const d3 = x * edge3y - (y - H) * edge3x;

      const hasNeg = d1 < 0 || d2 < 0 || d3 < 0;
      const hasPos = d1 > 0 || d2 > 0 || d3 > 0;
      return !(hasNeg && hasPos);
    }

    const animate = () => {
      ctx.clearRect(0, 0, W, H);

      // Smooth color transition
      colorProgressRef.current += hoveredRef.current ? 0.05 : -0.05;
      colorProgressRef.current = Math.max(0, Math.min(1, colorProgressRef.current));
      const c = lerpColor(colorProgressRef.current);

      // Move nodes
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;
      }

      // Draw lines between close nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 80) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(${c.r},${c.g},${c.b},${0.25 * (1 - dist / 80)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (const n of nodes) {
        if (!inTriangle(n.x, n.y)) continue;
        ctx.beginPath();
        ctx.arc(n.x, n.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${c.r},${c.g},${c.b},0.9)`;
        ctx.fill();
      }

      // Draw and update pulses
      for (let i = 0; i < pulses.length; i++) {
        const p = pulses[i];
        p.progress += p.speed;
        const from = nodes[p.from];
        const to = nodes[p.to];
        const px = from.x + (to.x - from.x) * p.progress;
        const py = from.y + (to.y - from.y) * p.progress;
        ctx.beginPath();
        ctx.arc(px, py, 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${1 - p.progress})`;
        ctx.fill();
        if (p.progress >= 1) {
          pulses[i] = {
            from: p.to,
            to: Math.floor(Math.random() * nodes.length),
            progress: 0,
            speed: 0.004 + Math.random() * 0.003,
          };
        }
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      className="fixed left-0 top-1/2 -translate-y-1/2 z-[1000] hidden lg:block"
      style={{ width: 160, height: 117 }}
    >
      <Link
        to="/professionals"
        className="relative block"
        style={{ width: 160, height: 117 }}
        aria-label="For Professionals"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <canvas
          ref={canvasRef}
          aria-hidden="true"
          className="absolute top-0 left-0 pointer-events-none"
          style={{ width: 160, height: 117, clipPath: "polygon(0 0, 100% 50%, 0 100%)", zIndex: 1 }}
        />
        <img
          src={defaultBtn}
          alt="For Professionals"
          className="absolute top-0 left-0 transition-opacity duration-300 ease-in-out"
          style={{ width: 160, height: 117, zIndex: 2, opacity: hovered ? 0 : 1 }}
          loading="eager"
        />
        <img
          src={hoverBtn}
          alt=""
          aria-hidden="true"
          className="absolute top-0 left-0 transition-opacity duration-300 ease-in-out"
          style={{ width: 160, height: 117, zIndex: 2, opacity: hovered ? 1 : 0 }}
          loading="eager"
        />
      </Link>
    </div>
  );
};

export default StickyContactSidebar;
