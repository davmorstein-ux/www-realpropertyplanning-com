import { useEffect, useRef } from "react";
import blueButton from "@/assets/for-professionals-sidebar-button.png";

export default function ProfessionalsButton() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = 160, H = 117;
    canvas.width = W;
    canvas.height = H;
    let animId: number;

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

    function animate() {
      ctx!.clearRect(0, 0, W, H);

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
            ctx!.strokeStyle = `rgba(100,180,255,${0.2 * (1 - dist / 75)})`;
            ctx!.lineWidth = 0.6;
            ctx!.stroke();
          }
        }
      }

      nodes.forEach((n) => {
        ctx!.beginPath();
        ctx!.arc(n.x, n.y, 1.8, 0, Math.PI * 2);
        ctx!.fillStyle = "rgba(150,210,255,0.7)";
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
        ctx!.arc(px, py, 5, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(100,180,255,${alpha * 0.3})`;
        ctx!.fill();
        ctx!.beginPath();
        ctx!.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(255,255,255,${alpha * 0.8})`;
        ctx!.fill();
      });

      animId = requestAnimationFrame(animate);
    }

    animate();
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <a
      href="/professionals"
      className="hidden lg:block"
      style={{
        position: "fixed",
        left: 0,
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 1000,
        width: 160,
        height: 117,
        display: "block",
        cursor: "pointer",
        textDecoration: "none",
      }}
    >
      <div style={{ position: "relative", width: 160, height: 117 }}>
        <img
          src={blueButton}
          alt="For Professionals"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 160,
            height: 117,
            zIndex: 1,
          }}
          loading="eager"
        />
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
            zIndex: 2,
            pointerEvents: "none",
          }}
        />
      </div>
    </a>
  );
}
