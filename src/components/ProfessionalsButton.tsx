import { useEffect, useRef, useState } from "react";
import blueButton from "@/assets/for-professionals-sidebar-button.png";
import greenButton from "@/assets/for-professionals-sidebar-button-green.png";

const W = 200;
const H = 38;

export default function ProfessionalsButton() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hovered, setHovered] = useState(false);
  const hoveredRef = useRef(false);
  const colorRef = useRef(0);

  useEffect(() => {
    hoveredRef.current = hovered;
  }, [hovered]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const nodes = Array.from({ length: 8 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,
    }));

    const pulses = Array.from({ length: 3 }, () => ({
      from: Math.floor(Math.random() * 8),
      to: Math.floor(Math.random() * 8),
      progress: Math.random(),
      speed: 0.001 + Math.random() * 0.002,
    }));

    let animId: number;

    function animate() {
      ctx.clearRect(0, 0, W, H);

      const target = hoveredRef.current ? 1 : 0;
      colorRef.current += (target - colorRef.current) * 0.04;
      const t = colorRef.current;

      const r = Math.round(100 + (80 - 100) * t);
      const g = Math.round(180 + (255 - 180) * t);
      const b = Math.round(255 + (120 - 255) * t);

      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;
      });

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 60) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(${r},${g},${b},${0.25 * (1 - dist / 60)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      nodes.forEach((n) => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},0.8)`;
        ctx.fill();
      });

      pulses.forEach((p) => {
        p.progress += p.speed;
        if (p.progress >= 1) {
          p.from = p.to;
          p.to = Math.floor(Math.random() * nodes.length);
          p.progress = 0;
        }
        const from = nodes[p.from];
        const to = nodes[p.to];
        const px = from.x + (to.x - from.x) * p.progress;
        const py = from.y + (to.y - from.y) * p.progress;
        const alpha = Math.sin(p.progress * Math.PI);
        ctx.beginPath();
        ctx.arc(px, py, 5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},${alpha * 0.3})`;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(px, py, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${alpha * 0.9})`;
        ctx.fill();
      });

      animId = requestAnimationFrame(animate);
    }

    animate();
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <a
      href="/professionals"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "block",
        width: W,
        height: H,
        cursor: "pointer",
        textDecoration: "none",
      }}
    >
      <div style={{ position: "relative", width: W, height: H }}>
        <img
          src={hovered ? greenButton : blueButton}
          alt="For Professionals"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: W,
            height: H,
            zIndex: 1,
            display: "block",
          }}
        />
        <canvas
          ref={canvasRef}
          width={W}
          height={H}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: W,
            height: H,
            zIndex: 2,
            pointerEvents: "none",
            borderRadius: "4px",
            mixBlendMode: "screen",
          }}
        />
      </div>
    </a>
  );
}
