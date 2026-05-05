import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import defaultBtn from "@/assets/for-professionals-sidebar-button.png";
import hoverBtn from "@/assets/for-professionals-sidebar-button-green.png";

export default function ProfessionalsButton() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [hovered, setHovered] = useState(false);
  const hoveredRef = useRef(false);

  useEffect(() => {
    hoveredRef.current = hovered;
  }, [hovered]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      console.error("Canvas 2D context failed to initialize");
      return;
    }
    console.log("Canvas initialized successfully, size:", W, "x", H);
    const W = 160;
    const H = 117;
    canvas.width = W;
    canvas.height = H;

    const nodes = Array.from({ length: 14 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
    }));

    const pulses = Array.from({ length: 5 }, () => ({
      from: Math.floor(Math.random() * nodes.length),
      to: Math.floor(Math.random() * nodes.length),
      progress: Math.random(),
      speed: 0.003 + Math.random() * 0.004,
    }));

    let colorProgress = 0;
    let animId: number;

    function lerpColor(t: number) {
      return {
        r: Math.round(100 + (80 - 100) * t),
        g: Math.round(180 + (255 - 180) * t),
        b: Math.round(255 + (120 - 255) * t),
      };
    }

    function insideTriangle(x: number, y: number) {
      const v0x = W, v0y = H / 2;
      const v1x = 0, v1y = H;
      const v2x = 0, v2y = 0;
      const d1 = (x - v1x) * (v2y - v1y) - (v2x - v1x) * (y - v1y);
      const d2 = (x - v2x) * (v0y - v2y) - (v0x - v2x) * (y - v2y);
      const d3 = (x - v0x) * (v1y - v0y) - (v1x - v0x) * (y - v0y);
      const hasNeg = d1 < 0 || d2 < 0 || d3 < 0;
      const hasPos = d1 > 0 || d2 > 0 || d3 > 0;
      return !(hasNeg && hasPos);
    }

    function animate() {
      if (frameCount < 3) { console.log("frame:", frameCount, "colorProgress:", colorProgress, "hovered:", hoveredRef.current); frameCount++; }
      ctx!.fillStyle = "rgba(255,0,0,0.5)";
      ctx!.fillRect(0, 0, 20, 20);
      ctx!.clearRect(0, 0, W, H);

      colorProgress += hoveredRef.current ? 0.04 : -0.04;
      colorProgress = Math.max(0, Math.min(1, colorProgress));
      const c = lerpColor(colorProgress);

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
          if (dist < 75) {
            ctx!.beginPath();
            ctx!.moveTo(nodes[i].x, nodes[i].y);
            ctx!.lineTo(nodes[j].x, nodes[j].y);
            ctx!.strokeStyle = `rgba(${c.r},${c.g},${c.b},${0.3 * (1 - dist / 75)})`;
            ctx!.lineWidth = 0.6;
            ctx!.stroke();
          }
        }
      }

      nodes.forEach((n) => {
        if (!insideTriangle(n.x, n.y)) return;
        ctx!.beginPath();
        ctx!.arc(n.x, n.y, 1.8, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${c.r},${c.g},${c.b},0.95)`;
        ctx!.fill();
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
        ctx!.beginPath();
        ctx!.arc(px, py, 3, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(255,255,255,${alpha})`;
        ctx!.fill();
        ctx!.beginPath();
        ctx!.arc(px, py, 6, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${c.r},${c.g},${c.b},${alpha * 0.3})`;
        ctx!.fill();
      });

      animId = requestAnimationFrame(animate);
    }

    animate();
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <Link
      to="/professionals"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="hidden lg:block"
      style={{
        position: "fixed",
        left: 0,
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 1000,
        width: 160,
        height: 117,
        cursor: "pointer",
        textDecoration: "none",
      }}
    >
      <div style={{ position: "relative", width: 160, height: 117 }}>
        <canvas
          ref={canvasRef}
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 160,
            height: 117,
            clipPath: "polygon(0 0, 100% 50%, 0 100%)",
            zIndex: 1,
          }}
        />
        <img
          src={defaultBtn}
          alt="For Professionals"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 160,
            height: 117,
            opacity: hovered ? 0 : 1,
            transition: "opacity 0.3s ease",
            zIndex: 2,
          }}
          loading="eager"
        />
        <img
          src={hoverBtn}
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 160,
            height: 117,
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.3s ease",
            zIndex: 2,
          }}
          loading="eager"
        />
      </div>
    </Link>
  );
}
