import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  r: number;
  // brief flare added when a signal arrives (intensity 0..1)
  flare: number;
  // ghost nodes live just outside the canvas; never drawn, used to extend lines off-edge
  ghost?: boolean;
}

interface Signal {
  // edge endpoints (node indices); signal travels a -> b
  a: number;
  b: number;
  progress: number; // 0..1
  duration: number; // ms
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

    const NODE_COUNT = 75;
    const LEFT_EXTRA_COUNT = 12; // extra nodes seeded into the left third
    const CONNECT_DIST = 320;
    const MAX_CONCURRENT_SIGNALS = 3;

    let nodes: Node[] = [];
    const forcedEdges = new Set<string>();
    let edgeList: { i: number; j: number; key: string }[] = [];
    let ghostEdgeList: { i: number; j: number; key: string }[] = []; // edges where exactly one endpoint is a ghost
    const signals: Signal[] = [];

    const initNodes = () => {
      nodes = [];
      // Grid-seeded random placement for even coverage across the hero.
      const aspect = Math.max(width / Math.max(height, 1), 0.1);
      const rows = Math.max(2, Math.round(Math.sqrt(NODE_COUNT / aspect)));
      const cols = Math.max(2, Math.ceil(NODE_COUNT / rows));
      const cellW = width / cols;
      const cellH = height / rows;

      const cells: { c: number; r: number }[] = [];
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) cells.push({ c, r });
      }
      for (let i = cells.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cells[i], cells[j]] = [cells[j], cells[i]];
      }

      const cx = width / 2;
      const cy = height / 2;
      const exclusionRX = Math.min(width * 0.22, 260);
      const exclusionRY = Math.min(height * 0.32, 130);

      let placed = 0;
      let idx = 0;
      while (placed < NODE_COUNT && idx < cells.length) {
        const { c, r } = cells[idx++];
        const jx = (Math.random() * 0.85 + 0.075) * cellW;
        const jy = (Math.random() * 0.85 + 0.075) * cellH;
        const x = c * cellW + jx;
        const y = r * cellH + jy;

        const dx = (x - cx) / exclusionRX;
        const dy = (y - cy) / exclusionRY;
        const distNorm = Math.hypot(dx, dy);
        if (distNorm < 1 && Math.random() > distNorm * 0.85) continue;

        nodes.push({ x, y, r: 2 + Math.random() * 1, flare: 0 });
        placed++;
      }

      while (placed < NODE_COUNT) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          r: 2 + Math.random() * 1,
          flare: 0,
        });
        placed++;
      }

      // Extra nodes biased to the left third for balance
      const leftMax = width / 3;
      for (let k = 0; k < LEFT_EXTRA_COUNT; k++) {
        nodes.push({
          x: Math.random() * leftMax,
          y: Math.random() * height,
          r: 2 + Math.random() * 1,
          flare: 0,
        });
      }

      // Loose ring of nodes surrounding the logo so it reads as the network hub.
      const RING_COUNT = 14;
      for (let k = 0; k < RING_COUNT; k++) {
        // Even angle distribution with jitter so it doesn't look mechanical
        const angle = (k / RING_COUNT) * Math.PI * 2 + (Math.random() - 0.5) * 0.35;
        const radius = 180 + Math.random() * 100; // 180-280px
        const x = cx + Math.cos(angle) * radius;
        const y = cy + Math.sin(angle) * radius;
        // Skip points that fall outside the hero
        if (x < 6 || x > width - 6 || y < 6 || y > height - 6) continue;
        nodes.push({ x, y, r: 2 + Math.random() * 1, flare: 0 });
      }

      // Cluster of nodes below the logo (lower-center) for visual weight under the hub.
      const BOTTOM_COUNT = 11;
      for (let k = 0; k < BOTTOM_COUNT; k++) {
        const x = width * (0.30 + Math.random() * 0.40); // 30%-70%
        const y = height * (0.60 + Math.random() * 0.35); // 60%-95%
        nodes.push({ x, y, r: 2 + Math.random() * 1, flare: 0 });
      }

      // Ghost nodes outside the canvas — invisible, but their connecting lines fade
      // toward the edge to suggest the network continues beyond view.
      // Placed 100–300px outside each edge, distributed so every visible edge node
      // gets multiple outward lines.
      const perSide = 30; // 30 ghosts/side -> ~120 ghost nodes
      const offsetRange = () => 100 + Math.random() * 200; // 100–300px outside edge
      for (let k = 0; k < perSide; k++) {
        nodes.push({ x: Math.random() * width, y: -offsetRange(), r: 0, flare: 0, ghost: true });
        nodes.push({ x: Math.random() * width, y: height + offsetRange(), r: 0, flare: 0, ghost: true });
        nodes.push({ x: -offsetRange(), y: Math.random() * height, r: 0, flare: 0, ghost: true });
        nodes.push({ x: width + offsetRange(), y: Math.random() * height, r: 0, flare: 0, ghost: true });
      }

      ensureConnectivity();
      buildEdgeList();
    };

    const ensureConnectivity = () => {
      forcedEdges.clear();
      const n = nodes.length;
      // Build a list of visible-node indices to operate on (ignore ghosts).
      const vis: number[] = [];
      for (let i = 0; i < n; i++) if (!nodes[i].ghost) vis.push(i);

      const neighborCount = new Map<number, number>();
      for (const i of vis) neighborCount.set(i, 0);
      for (let a = 0; a < vis.length; a++) {
        for (let b = a + 1; b < vis.length; b++) {
          const i = vis[a], j = vis[b];
          const d = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
          if (d <= CONNECT_DIST) {
            neighborCount.set(i, (neighborCount.get(i) || 0) + 1);
            neighborCount.set(j, (neighborCount.get(j) || 0) + 1);
          }
        }
      }
      for (const i of vis) {
        if ((neighborCount.get(i) || 0) >= 2) continue;
        const dists: { j: number; d: number }[] = [];
        for (const j of vis) {
          if (j === i) continue;
          dists.push({ j, d: Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y) });
        }
        dists.sort((a, b) => a.d - b.d);
        for (let k = 0; k < Math.min(2, dists.length); k++) {
          const j = dists[k].j;
          const key = i < j ? `${i}-${j}` : `${j}-${i}`;
          if (!forcedEdges.has(key)) {
            forcedEdges.add(key);
            neighborCount.set(i, (neighborCount.get(i) || 0) + 1);
            neighborCount.set(j, (neighborCount.get(j) || 0) + 1);
          }
        }
      }
      // Union-find over visible nodes only.
      const parent = new Map<number, number>();
      for (const i of vis) parent.set(i, i);
      const find = (x: number): number => {
        const px = parent.get(x)!;
        if (px === x) return x;
        const r = find(px);
        parent.set(x, r);
        return r;
      };
      const union = (a: number, b: number) => {
        const ra = find(a), rb = find(b);
        if (ra !== rb) parent.set(ra, rb);
      };
      for (let a = 0; a < vis.length; a++) {
        for (let b = a + 1; b < vis.length; b++) {
          const i = vis[a], j = vis[b];
          const d = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
          const key = `${i}-${j}`;
          if (d <= CONNECT_DIST || forcedEdges.has(key)) union(i, j);
        }
      }
      let safety = vis.length;
      while (safety-- > 0) {
        const roots = new Map<number, number[]>();
        for (const i of vis) {
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

    const buildEdgeList = () => {
      edgeList = [];
      ghostEdgeList = [];
      const n = nodes.length;
      // Visible-to-visible edges (existing logic).
      for (let i = 0; i < n; i++) {
        if (nodes[i].ghost) continue;
        for (let j = i + 1; j < n; j++) {
          if (nodes[j].ghost) continue;
          const d = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
          const key = `${i}-${j}`;
          if (d > CONNECT_DIST && !forcedEdges.has(key)) continue;
          edgeList.push({ i, j, key });
        }
      }
      // For each visible node within 150px of any canvas edge, attach 2–4 outward
      // lines toward ghost nodes lying off that edge. This guarantees the
      // "infinite network" effect is dense and obvious on every side.
      const EDGE_PROXIMITY = 150;
      const ghostsBySide = {
        top: [] as number[],
        bottom: [] as number[],
        left: [] as number[],
        right: [] as number[],
      };
      for (let i = 0; i < n; i++) {
        if (!nodes[i].ghost) continue;
        if (nodes[i].y < 0) ghostsBySide.top.push(i);
        else if (nodes[i].y > height) ghostsBySide.bottom.push(i);
        else if (nodes[i].x < 0) ghostsBySide.left.push(i);
        else if (nodes[i].x > width) ghostsBySide.right.push(i);
      }

      const seen = new Set<string>();
      for (let i = 0; i < n; i++) {
        const v = nodes[i];
        if (v.ghost) continue;
        const sides: ("top" | "bottom" | "left" | "right")[] = [];
        if (v.y < EDGE_PROXIMITY) sides.push("top");
        if (height - v.y < EDGE_PROXIMITY) sides.push("bottom");
        if (v.x < EDGE_PROXIMITY) sides.push("left");
        if (width - v.x < EDGE_PROXIMITY) sides.push("right");
        if (sides.length === 0) continue;

        const desired = 2 + Math.floor(Math.random() * 3); // 2-4 outward lines
        for (let s = 0; s < desired; s++) {
          const side = sides[Math.floor(Math.random() * sides.length)];
          const pool = ghostsBySide[side];
          if (pool.length === 0) continue;
          // Pick one of the nearest ghosts on that side for a believable angle
          const candidates: { j: number; d: number }[] = [];
          for (const j of pool) {
            const d = Math.hypot(nodes[j].x - v.x, nodes[j].y - v.y);
            candidates.push({ j, d });
          }
          candidates.sort((a, b) => a.d - b.d);
          const pick = candidates[Math.floor(Math.random() * Math.min(6, candidates.length))];
          if (!pick) continue;
          const a = Math.min(i, pick.j), b = Math.max(i, pick.j);
          const key = `${a}-${b}`;
          if (seen.has(key)) continue;
          seen.add(key);
          ghostEdgeList.push({ i: a, j: b, key });
        }
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

    // Trails: per-edge progress where the signal has passed.
    // Map key -> { trailEnd: 0..1 (highest progress reached), age: ms since signal moved over it }
    interface Trail {
      trailEnd: number; // 0..1, head furthest along the line
      direction: 1 | -1; // 1 means a->b; -1 means b->a (matches edge i,j ordering)
      headTime: number; // ms since trail head reached trailEnd
      // brightness decays over ~1000ms
    }
    const trails = new Map<string, Trail>();

    let nextSignalIn = 800 + Math.random() * 1500;

    const spawnSignal = () => {
      if (signals.length >= MAX_CONCURRENT_SIGNALS) return;
      const pool = edgeList.length + ghostEdgeList.length;
      if (pool === 0) return;
      const busy = new Set<string>();
      for (const s of signals) {
        const key = s.a < s.b ? `${s.a}-${s.b}` : `${s.b}-${s.a}`;
        busy.add(key);
      }
      for (let attempt = 0; attempt < 10; attempt++) {
        // ~20% of signals come from the ghost pool so the network feels alive at edges.
        const fromGhost = ghostEdgeList.length > 0 && Math.random() < 0.2;
        const list = fromGhost ? ghostEdgeList : edgeList;
        if (list.length === 0) continue;
        const e = list[Math.floor(Math.random() * list.length)];
        if (busy.has(e.key)) continue;
        const reverse = Math.random() < 0.5;
        signals.push({
          a: reverse ? e.j : e.i,
          b: reverse ? e.i : e.j,
          progress: 0,
          duration: 2000 + Math.random() * 1000, // 2-3s
        });
        return;
      }
    };

    let lastT = performance.now();

    const draw = (t: number) => {
      const dt = Math.min(t - lastT, 64);
      lastT = t;

      // background
      ctx.fillStyle = "#020810";
      ctx.fillRect(0, 0, width, height);

      // ---- Update signals ----
      nextSignalIn -= dt;
      if (nextSignalIn <= 0) {
        spawnSignal();
        nextSignalIn = 2000 + Math.random() * 2000; // 2-4s
      }

      for (let s = signals.length - 1; s >= 0; s--) {
        const sig = signals[s];
        sig.progress += dt / sig.duration;
        const a = nodes[sig.a];
        const b = nodes[sig.b];
        const key = sig.a < sig.b ? `${sig.a}-${sig.b}` : `${sig.b}-${sig.a}`;

        // Map signal progress to trail progress in the canonical edge direction (i<j).
        // If signal goes from larger index to smaller, direction is -1 and progress is 1-p.
        const direction: 1 | -1 = sig.a < sig.b ? 1 : -1;
        const canonicalProgress = direction === 1 ? sig.progress : 1 - sig.progress;
        let tr = trails.get(key);
        if (!tr) {
          tr = { trailEnd: canonicalProgress, direction, headTime: 0 };
          trails.set(key, tr);
        } else {
          tr.direction = direction;
          tr.trailEnd = canonicalProgress;
          tr.headTime = 0;
        }

        if (sig.progress >= 1) {
          // arrived: flare destination node
          b.flare = Math.max(b.flare, 1);
          // Mark trail as fully traversed; let it fade out via its own age
          tr.trailEnd = direction === 1 ? 1 : 0;
          tr.headTime = 0;
          signals.splice(s, 1);
        }
      }

      // Age trails (brief brightened trail, fade within 1s)
      for (const [key, tr] of trails) {
        // headTime grows when no active signal is updating this trail
        const stillActive = signals.some((s) => {
          const k = s.a < s.b ? `${s.a}-${s.b}` : `${s.b}-${s.a}`;
          return k === key;
        });
        if (!stillActive) tr.headTime += dt;
        if (tr.headTime > 1200) trails.delete(key);
      }

      // ---- Draw base lines (visible-to-visible) ----
      for (const e of edgeList) {
        const a = nodes[e.i];
        const b = nodes[e.j];
        ctx.strokeStyle = "rgba(80, 150, 255, 0.45)";
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }

      // ---- Draw ghost edges (one endpoint outside canvas) with edge-fading gradient ----
      // Strategy: draw from the visible node to the canvas-boundary intersection of
      // the line, with a linear gradient that goes 0.4 -> 0 across that segment.
      for (const e of ghostEdgeList) {
        const ni = nodes[e.i];
        const nj = nodes[e.j];
        const visible = ni.ghost ? nj : ni;
        const ghost = ni.ghost ? ni : nj;

        // Find intersection of the segment (visible -> ghost) with the canvas border.
        const dx = ghost.x - visible.x;
        const dy = ghost.y - visible.y;
        // Parametric tt in (0,1] where ghost lies; we want the smallest tt where the
        // point exits the rect [0,width] x [0,height].
        let tt = 1;
        if (dx > 0) tt = Math.min(tt, (width - visible.x) / dx);
        else if (dx < 0) tt = Math.min(tt, (0 - visible.x) / dx);
        if (dy > 0) tt = Math.min(tt, (height - visible.y) / dy);
        else if (dy < 0) tt = Math.min(tt, (0 - visible.y) / dy);
        tt = Math.max(0, Math.min(1, tt));
        const ex = visible.x + dx * tt;
        const ey = visible.y + dy * tt;

        const grad = ctx.createLinearGradient(visible.x, visible.y, ex, ey);
        grad.addColorStop(0, "rgba(80, 150, 255, 0.4)");
        grad.addColorStop(1, "rgba(80, 150, 255, 0)");
        ctx.strokeStyle = grad;
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.moveTo(visible.x, visible.y);
        ctx.lineTo(ex, ey);
        ctx.stroke();
      }

      // ---- Draw trail brightening on top of base lines ----
      for (const [key, tr] of trails) {
        const [iStr, jStr] = key.split("-");
        const i = parseInt(iStr, 10);
        const j = parseInt(jStr, 10);
        const a = nodes[i];
        const b = nodes[j];

        // brightness fades from 1 -> 0 over 1000ms after head stops moving
        const fade = Math.max(0, 1 - tr.headTime / 1000);
        if (fade <= 0) continue;

        // Trail segment: from edge start (in canonical direction) up to trailEnd
        // If direction is -1, trail occupies the b->a segment; we draw from j-end back to (j - trailEnd along i->j parameter).
        const start = tr.direction === 1 ? 0 : tr.trailEnd;
        const end = tr.direction === 1 ? tr.trailEnd : 1;
        if (end <= start) continue;
        const sx = a.x + (b.x - a.x) * start;
        const sy = a.y + (b.y - a.y) * start;
        const ex = a.x + (b.x - a.x) * end;
        const ey = a.y + (b.y - a.y) * end;

        ctx.save();
        ctx.shadowBlur = 6 * fade;
        ctx.shadowColor = "#88ccff";
        ctx.strokeStyle = `rgba(140, 210, 255, ${0.85 * fade})`;
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.moveTo(sx, sy);
        ctx.lineTo(ex, ey);
        ctx.stroke();
        ctx.restore();
      }

      // ---- Draw signal heads ----
      for (const sig of signals) {
        const a = nodes[sig.a];
        const b = nodes[sig.b];
        const x = a.x + (b.x - a.x) * sig.progress;
        const y = a.y + (b.y - a.y) * sig.progress;
        ctx.save();
        ctx.shadowBlur = 10;
        ctx.shadowColor = "#aaddff";
        ctx.fillStyle = "#aaddff";
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // ---- Draw nodes (with optional flare) ----
      for (const n of nodes) {
        if (n.ghost) continue; // ghost nodes are never drawn
        // Flare decays over ~500ms
        if (n.flare > 0) n.flare = Math.max(0, n.flare - dt / 500);
        ctx.save();
        ctx.shadowBlur = 15 + 5 * n.flare; // 15 -> 20 at peak flare
        ctx.shadowColor = n.flare > 0 ? "#aaddff" : "#6ab0ff";
        ctx.fillStyle = "rgba(220, 235, 255, 0.95)";
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r + n.flare * 0.6, 0, Math.PI * 2);
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
