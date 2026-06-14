import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const milestones = [
  'Worked on real-world datasets',
  'Performed preprocessing and feature engineering',
  'Trained ML models with hyperparameter tuning',
  'Built Vehicle Insurance Claim Prediction System',
  'Compared multiple algorithms for optimal performance',
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/2 rounded-full blur-[150px]" />

      <div className="container-max relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-primary font-medium text-[11px] tracking-[0.35em] uppercase">Professional Path</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 tracking-tight">
            Work <span className="gradient-text-premium">Experience</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <motion.div
              className="absolute left-[21px] md:left-1/2 md:-translate-x-[0.5px] top-0 bottom-0 w-[1px]"
              style={{
                background: 'linear-gradient(to bottom, rgba(56,189,248,0.35), rgba(167,139,250,0.15), transparent)',
                transformOrigin: 'top',
              }}
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="relative pl-14 md:pl-0 md:grid md:grid-cols-[1fr_auto_1fr] md:gap-8 items-start"
            >
              {/* Left side (date) */}
              <div className="hidden md:flex flex-col items-end pt-2">
                <span className="text-muted/60 text-xs font-medium">Dec 2025</span>
                <span className="text-muted/40 text-[10px]">—</span>
                <span className="text-muted/60 text-xs font-medium">Jan 2026</span>
              </div>

              {/* Center dot */}
              <div className="absolute left-3 md:left-1/2 md:-translate-x-1/2 top-2 z-10">
                <motion.div
                  className="w-[17px] h-[17px] rounded-full bg-dark-secondary border-2 border-primary flex items-center justify-center"
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: 0.5, type: 'spring', stiffness: 300 }}
                >
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" style={{ boxShadow: '0 0 8px rgba(56,189,248,0.5)' }} />
                </motion.div>
              </div>

              {/* Right side (card) */}
              <div>
                <div className="glass-card rounded-2xl p-7 md:p-8">
                  <div className="flex items-center gap-2.5 mb-5">
                    <span className="px-3 py-1 rounded-lg text-[10px] font-semibold bg-primary/8 text-primary border border-primary/12 flex items-center gap-1.5 tracking-wider uppercase">
                      <Briefcase size={10} />
                      Internship
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-2">Machine Learning Intern</h3>
                  <h4 className="gradient-text-cyan text-sm font-semibold mb-5">Sunbeam Infotech, Pune</h4>

                  <div className="flex flex-wrap gap-4 mb-6 text-xs text-muted/60">
                    <span className="flex items-center gap-1.5 md:hidden">
                      <Calendar size={10} />
                      Dec 2025 – Jan 2026
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={10} />
                      Pune, Maharashtra
                    </span>
                  </div>

                  <div className="space-y-3">
                    {milestones.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 14 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.7 + i * 0.07 }}
                        className="flex items-start gap-3 text-sm text-muted"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-accent shrink-0 mt-[7px]" />
                        <span>{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
