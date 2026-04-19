import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const modules = [
  { label: 'Finance', icon: '💰', angle: 0 },
  { label: 'Inventory', icon: '📦', angle: 60 },
  { label: 'CRM', icon: '🤝', angle: 120 },
  { label: 'HR', icon: '👥', angle: 180 },
  { label: 'Manufacturing', icon: '⚙️', angle: 240 },
  { label: 'Projects', icon: '📊', angle: 300 },
];

function polarToCartesian(cx, cy, r, angleDeg) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return {
    x: cx + r * Math.cos(rad),
    y: cy + r * Math.sin(rad),
  };
}

export default function ParticleNetwork() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf;
    let t = 0;

    const particles = Array.from({ length: 40 }, () => ({
      x: Math.random() * 480,
      y: Math.random() * 480,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.5 + 0.2,
    }));

    function draw() {
      ctx.clearRect(0, 0, 480, 480);

      // Moving particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > 480) p.vx *= -1;
        if (p.y < 0 || p.y > 480) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99, 179, 246, ${p.alpha * 0.6})`;
        ctx.fill();
      });

      // Connect nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 80) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(99, 179, 246, ${(1 - dist / 80) * 0.12})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      t += 0.008;

      // Pulsing center glow
      const pulse = 0.5 + 0.5 * Math.sin(t * 2);
      const cg = ctx.createRadialGradient(240, 240, 0, 240, 240, 60 + pulse * 20);
      cg.addColorStop(0, `rgba(139, 92, 246, ${0.25 + pulse * 0.1})`);
      cg.addColorStop(0.5, `rgba(59, 130, 246, ${0.12 + pulse * 0.05})`);
      cg.addColorStop(1, 'rgba(59, 130, 246, 0)');
      ctx.beginPath();
      ctx.arc(240, 240, 60 + pulse * 20, 0, Math.PI * 2);
      ctx.fillStyle = cg;
      ctx.fill();

      // Spoke lines to orbit nodes
      modules.forEach(({ angle }, i) => {
        const orbit = 155;
        const pos = polarToCartesian(240, 240, orbit, angle + t * 4);
        const grad = ctx.createLinearGradient(240, 240, pos.x, pos.y);
        grad.addColorStop(0, 'rgba(139, 92, 246, 0.3)');
        grad.addColorStop(1, 'rgba(59, 130, 246, 0.05)');
        ctx.beginPath();
        ctx.moveTo(240, 240);
        ctx.lineTo(pos.x, pos.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      raf = requestAnimationFrame(draw);
    }

    draw();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="relative w-[480px] h-[480px]">
      <canvas ref={canvasRef} width={480} height={480} className="absolute inset-0" />

      {/* Center node */}
      <motion.div
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex flex-col items-center justify-center shadow-lg glow-blue z-10"
      >
        <span className="text-2xl">🤖</span>
        <span className="text-white text-[9px] font-bold mt-0.5">AI CORE</span>
      </motion.div>

      {/* Orbit nodes */}
      {modules.map(({ label, icon, angle }, i) => {
        const pos = polarToCartesian(240, 240, 155, angle);
        return (
          <motion.div
            key={label}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 + i * 0.1, duration: 0.5, ease: 'backOut' }}
            className="absolute flex flex-col items-center gap-1"
            style={{
              left: pos.x - 30,
              top: pos.y - 30,
              width: 60,
            }}
          >
            <div className="w-12 h-12 rounded-xl card-glass flex flex-col items-center justify-center shadow-md">
              <span className="text-lg">{icon}</span>
            </div>
            <span className="text-slate-400 text-[9px] font-medium whitespace-nowrap">{label}</span>
          </motion.div>
        );
      })}

      {/* Outer glow ring */}
      <div className="absolute inset-8 rounded-full border border-blue-500/10 pointer-events-none" />
      <div className="absolute inset-16 rounded-full border border-purple-500/10 pointer-events-none" />
    </div>
  );
}
