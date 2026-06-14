import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Trophy, Award, Shield, BookOpen, Star, Zap } from 'lucide-react';

function Counter({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView || target === 0) return;
    let current = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span>{target === 0 ? null : count}{suffix}</span>;
}

const achievements = [
  {
    icon: Trophy,
    value: 150,
    suffix: '+',
    label: 'LeetCode Problems',
    detail: 'Consistent competitive programming',
    accent: 'primary',
  },
  {
    icon: Shield,
    value: 3,
    suffix: '+',
    label: 'HackerRank Badges',
    detail: 'Certified skill proficiencies',
    accent: 'secondary',
  },
  {
    icon: Star,
    value: 0,
    suffix: '',
    label: 'VP – AISA',
    detail: "Artificial Intelligence Students' Association",
    accent: 'accent',
  },
  {
    icon: Zap,
    value: 0,
    suffix: '',
    label: 'ML Internship',
    detail: 'Sunbeam Infotech, Pune',
    accent: 'primary',
  },
];

const certifications = [
  { title: 'Getting Started with Artificial Intelligence', provider: 'IBM', accent: 'primary' },
  { title: 'Customer Relationship Management', provider: 'NPTEL', accent: 'secondary' },
];

export default function Achievements() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="achievements" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-primary/2 rounded-full blur-[150px]" />

      <div className="container-max relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-primary font-medium text-[11px] tracking-[0.35em] uppercase">Recognition</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 tracking-tight">
            Achievements & <span className="gradient-text-premium">Certifications</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {achievements.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="glass-card rounded-2xl p-6 text-center group"
            >
              <div className={`w-12 h-12 rounded-2xl bg-${item.accent}/8 border border-${item.accent}/12 flex items-center justify-center mx-auto mb-4 group-hover:bg-${item.accent}/15 transition-colors duration-400`}>
                <item.icon className={`text-${item.accent}`} size={22} />
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-1.5 gradient-text-premium">
                {item.value > 0 ? (
                  <Counter target={item.value} suffix={item.suffix} inView={inView} />
                ) : (
                  <Award className="text-primary mx-auto" size={32} />
                )}
              </div>
              <h4 className="font-semibold text-sm mb-1 tracking-tight">{item.label}</h4>
              <p className="text-muted text-[11px] leading-relaxed">{item.detail}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-8 justify-center">
            <Award className="text-secondary" size={20} />
            <h3 className="text-lg font-bold tracking-tight">Certifications</h3>
          </div>
          <div className="space-y-3">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, x: -16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="glass-card rounded-xl p-4.5 flex items-center gap-4"
              >
                <div className={`w-9 h-9 rounded-lg bg-${cert.accent}/8 border border-${cert.accent}/12 flex items-center justify-center shrink-0`}>
                  <BookOpen className={`text-${cert.accent}`} size={16} />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-sm tracking-tight truncate">{cert.title}</h4>
                  <p className="text-muted text-[11px]">{cert.provider}</p>
                </div>
                <span className={`px-2.5 py-1 text-[9px] font-semibold rounded-md bg-${cert.accent}/8 text-${cert.accent} border border-${cert.accent}/12 shrink-0 uppercase tracking-wider`}>
                  Verified
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
