import { useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, ChevronDown, ExternalLink } from 'lucide-react';
import { useReducedMotion } from '../hooks/useReducedMotion';
import profileImg from '../assets/profile-portfolio.png';

const roles = ['AI/ML Engineer', 'Machine Learning Enthusiast', 'Problem Solver', 'Student Leader'];

const orbitBadges = [
  { text: 'Python', angle: 30 },
  { text: 'ML', angle: 100 },
  { text: 'NLP', angle: 170 },
  { text: 'Firebase', angle: 240 },
  { text: 'AWS', angle: 310 },
];

function LeetCodeIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 9H7.5a2.5 2.5 0 0 1 0-5C11 4 12 7 12 7s1-3 4.5-3a2.5 2.5 0 0 1 0 5H14" />
      <path d="M6 20h12" /><path d="M6 16h12" /><path d="M9 16v4" /><path d="M15 16v4" />
    </svg>
  );
}

function NeuralCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotion();

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const nodes: { x: number; y: number; vx: number; vy: number; size: number; opacity: number; hue: number }[] = [];
    const count = reduced ? 20 : 50;

    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < count; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.35 + 0.08,
        hue: Math.random() > 0.5 ? 199 : 260,
      });
    }

    let animId: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < nodes.length; i++) {
        const p = nodes[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.hue === 199 ? `rgba(56,189,248,${p.opacity})` : `rgba(167,139,250,${p.opacity})`;
        ctx.fill();
        for (let j = i + 1; j < nodes.length; j++) {
          const q = nodes[j];
          const dist = Math.hypot(p.x - q.x, p.y - q.y);
          if (dist < 160) {
            const alpha = 0.035 * (1 - dist / 160);
            const grad = ctx.createLinearGradient(p.x, p.y, q.x, q.y);
            grad.addColorStop(0, `rgba(56,189,248,${alpha})`);
            grad.addColorStop(1, `rgba(167,139,250,${alpha})`);
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = grad; ctx.lineWidth = 0.5; ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { window.removeEventListener('resize', resize); cancelAnimationFrame(animId); };
  }, [reduced]);

  useEffect(() => { const c = animate(); return c; }, [animate]);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" />;
}

function ProfileImage() {
  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[360px] lg:h-[360px]">
      <motion.div
        className="relative w-full h-full"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 blur-2xl" />

        <div className="relative w-full h-full rounded-full p-[2px] bg-gradient-to-br from-primary via-accent to-secondary">
          <div className="w-full h-full rounded-full overflow-hidden bg-dark-secondary">
            <img
              src={profileImg}
              alt="Pranali Sawant"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* Orbit ring 1 */}
        <motion.div
          className="orbit-ring"
          style={{
            width: '120%', height: '120%', top: '-10%', left: '-10%',
            borderColor: 'rgba(56,189,248,0.1)',
            animationDuration: '20s',
          }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary/60" style={{ boxShadow: '0 0 8px rgba(56,189,248,0.4)' }} />
        </motion.div>

        {/* Orbit ring 2 */}
        <motion.div
          className="orbit-ring"
          style={{
            width: '140%', height: '140%', top: '-20%', left: '-20%',
            borderColor: 'rgba(167,139,250,0.08)',
            animationDuration: '30s',
            animationDirection: 'reverse',
          }}
        >
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-secondary/60" style={{ boxShadow: '0 0 6px rgba(167,139,250,0.4)' }} />
        </motion.div>

        {/* Orbit ring 3 */}
        <motion.div
          className="orbit-ring"
          style={{
            width: '160%', height: '160%', top: '-30%', left: '-30%',
            borderColor: 'rgba(34,211,238,0.06)',
            animationDuration: '40s',
          }}
        >
          <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-accent/50" style={{ boxShadow: '0 0 6px rgba(34,211,238,0.3)' }} />
        </motion.div>
      </motion.div>

      {/* Floating tech badges */}
      {orbitBadges.map((badge, i) => {
        const rad = (badge.angle * Math.PI) / 180;
        const radius = 58;
        const x = Math.cos(rad) * radius;
        const y = Math.sin(rad) * radius;
        return (
          <motion.div
            key={badge.text}
            className="absolute top-1/2 left-1/2 z-20"
            style={{ transform: `translate(calc(-50% + ${x}%), calc(-50% + ${y}%))` }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.6 + i * 0.1, type: 'spring', stiffness: 200 }}
          >
            <span className={`px-2.5 py-1 text-[9px] font-semibold rounded-lg glass tracking-wider ${
              i % 3 === 0 ? 'text-primary border-primary/15' : i % 3 === 1 ? 'text-secondary border-secondary/15' : 'text-accent border-accent/15'
            }`}>
              {badge.text}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/95 to-dark-secondary/30 z-[2]" />
      <NeuralCanvas />

      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[15%] w-[500px] h-[500px] bg-primary/6 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] right-[15%] w-[400px] h-[400px] bg-secondary/6 rounded-full blur-[100px]" />
      </div>

      <div className="absolute inset-0 ai-grid z-[1] opacity-50 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-medium tracking-[0.2em] uppercase bg-primary/5 text-primary border border-primary/10">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" />
                Available for Opportunities
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mb-8"
            >
              <p className="text-muted text-lg md:text-xl font-light mb-3">Hi, I'm</p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                <span className="gradient-text-premium">Pranali Sawant</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1 }}
              className="mb-8"
            >
              <div className="flex flex-wrap items-center gap-2.5">
                {roles.map((role, i) => (
                  <motion.span
                    key={role}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 + i * 0.1 }}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-medium ${
                      i === 0 ? 'text-primary bg-primary/8 border border-primary/12' :
                      i === 1 ? 'text-secondary bg-secondary/8 border border-secondary/12' :
                      i === 2 ? 'text-accent bg-accent/8 border border-accent/12' :
                      'text-primary bg-primary/5 border border-primary/10'
                    }`}
                  >
                    {role}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.5 }}
              className="text-muted text-sm md:text-base max-w-lg mb-10 leading-relaxed font-light"
            >
              I build intelligent systems that combine AI, machine learning, software development, and real-world problem solving.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.7 }}
              className="flex items-center gap-4 flex-wrap mb-10"
            >
              <motion.a
                href="#projects"
                onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="btn-primary px-7 py-3 rounded-full text-sm flex items-center gap-2"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                View Projects
                <ExternalLink size={14} />
              </motion.a>
              <motion.a

                href={`${import.meta.env.BASE_URL}resume.pdf`}
                download="Pranali_Ravindra_Sawant_Resume.pdf"

                className="btn-glass px-7 py-3 rounded-full text-sm flex items-center gap-2"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <FileTextIcon size={14} />
                Download Resume
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="flex items-center gap-4"
            >
              {[
                { icon: Github, href: 'https://github.com/pranalisawant02', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/pranali-sawant-2832a6334/', label: 'LinkedIn' },
                { icon: LeetCodeIcon, href: 'https://leetcode.com/u/Pranalisawant1403/', label: 'LeetCode' },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 glass rounded-full text-muted hover:text-primary hover:border-primary/20 transition-all duration-400"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={label}
                >
                  <Icon size={17} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <ProfileImage />
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-muted/30 text-[9px] tracking-[0.3em] uppercase font-medium">Scroll</span>
        <ChevronDown className="text-muted/25" size={18} />
      </motion.div>
    </section>
  );
}

function FileTextIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" /><path d="M14 2v6h6" />
    </svg>
  );
}
