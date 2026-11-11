"use client";
import { useEffect, useRef } from "react";

type Star = { x: number; y: number; r: number; tw: number; sp: number; green: boolean };
type Shooter = { x: number; y: number; vx: number; vy: number; life: number };

export default function GalaxyBackground() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0, h = 0, raf = 0, angle = 0;
    let mx = 0, my = 0, px = 0, py = 0;
    let stars: Star[] = [];
    const shooters: Shooter[] = [];

    const build = () => {
      const R = Math.hypot(w, h) / 2;
      const count = Math.min(420, Math.floor((w * h) / 4500));
      stars = Array.from({ length: count }, (_, k) => {
        const spiral = k % 4 !== 0; // 3 of 4 stars follow the spiral arms
        const rad = R * Math.pow(Math.random(), 0.75);
        const theta = spiral
          ? Math.floor(Math.random() * 3) * ((Math.PI * 2) / 3) +
            rad * 0.0045 +
            (Math.random() - 0.5) * 0.9
          : Math.random() * Math.PI * 2;
        return {
          x: Math.cos(theta) * rad,
          y: Math.sin(theta) * rad,
          r: Math.random() * 1.3 + 0.3,
          tw: Math.random() * Math.PI * 2,
          sp: Math.random() * 0.02 + 0.005,
          green: Math.random() < 0.4,
        };
      });
    };

    let lastW = 0;
    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (w !== lastW) {
        lastW = w;
        build();
      }
    };

    const draw = () => {
      const dark = document.documentElement.classList.contains("dark");
      ctx.clearRect(0, 0, w, h);
      px += (mx - px) * 0.05;
      py += (my - py) * 0.05;

      ctx.save();
      ctx.translate(w / 2 + px * 14, h / 2 + py * 14);
      ctx.rotate(angle);
      for (const s of stars) {
        s.tw += s.sp;
        const a = 0.35 + 0.65 * Math.abs(Math.sin(s.tw));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = dark
          ? s.green
            ? `rgba(110,231,183,${a * 0.9})`
            : `rgba(255,255,255,${a * 0.75})`
          : `rgba(5,150,105,${a * 0.35})`;
        ctx.fill();
      }
      ctx.restore();

      if (dark && !reduce) {
        if (Math.random() < 0.004 && shooters.length < 2) {
          shooters.push({
            x: Math.random() * w * 0.8,
            y: Math.random() * h * 0.5,
            vx: 7 + Math.random() * 4,
            vy: 3 + Math.random() * 2,
            life: 1,
          });
        }
        for (let k = shooters.length - 1; k >= 0; k--) {
          const m = shooters[k];
          m.x += m.vx;
          m.y += m.vy;
          m.life -= 0.015;
          if (m.life <= 0) {
            shooters.splice(k, 1);
            continue;
          }
          const g = ctx.createLinearGradient(m.x, m.y, m.x - m.vx * 8, m.y - m.vy * 8);
          g.addColorStop(0, `rgba(167,243,208,${m.life})`);
          g.addColorStop(1, "rgba(167,243,208,0)");
          ctx.strokeStyle = g;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(m.x, m.y);
          ctx.lineTo(m.x - m.vx * 8, m.y - m.vy * 8);
          ctx.stroke();
        }
      }

      if (!reduce) {
        angle += 0.00008;
        raf = requestAnimationFrame(draw);
      }
    };

    const onMove = (e: MouseEvent) => {
      mx = (e.clientX / w - 0.5) * 2;
      my = (e.clientY / h - 0.5) * 2;
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    if (!reduce) window.addEventListener("mousemove", onMove, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="nebula absolute inset-0" />
      <canvas ref={ref} className="absolute inset-0" />
    </div>
  );
}