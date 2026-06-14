import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Code2, Sparkles, Users } from 'lucide-react';
import { useTilt } from '../hooks/useTilt';
import { useReducedMotion } from '../hooks/useReducedMotion';
import profileImg from '../assets/profile-portfolio.png';

const highlights = [
  { icon: Brain, label: 'AIML Student', color: 'primary' },
  { icon: Users, label: 'AISA Vice President', color: 'secondary' },
  { icon: Sparkles, label: 'ML Intern', color: 'accent' },
  { icon: Code2, label: 'Problem Solver', color: 'primary' },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const reduced = useReducedMotion();
  const tilt = useTilt(8);

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/3 rounded-full blur-[130px]" />

      <div className="container-max relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-primary font-medium text-[11px] tracking-[0.35em] uppercase">Get to Know Me</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 tracking-tight">
            About <span className="gradient-text-premium">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-5xl mx-auto">
          {/* ID Badge Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="perspective-1000">
              <motion.div
                ref={tilt.ref}
                onMouseMove={reduced ? undefined : tilt.handleMouseMove}
                onMouseLeave={reduced ? undefined : tilt.handleMouseLeave}
                style={{ rotateX: tilt.rotateX, rotateY: tilt.rotateY }}
                className="preserve-3d"
              >
                {/* Lanyard */}
                <div className="flex flex-col items-center">
                  <div className="w-[2px] h-8 bg-gradient-to-b from-primary/40 to-primary/20" />
                  <div className="w-12 h-3 rounded-t-full bg-gradient-to-b from-primary/20 to-primary/10 border border-primary/15" />

                  {/* Badge */}
                  <div className="glass-card rounded-2xl p-1 w-[280px] md:w-[300px] border-primary/12 hover:border-primary/25">
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-primary via-secondary to-accent opacity-30" />

                    <div className="bg-dark-secondary/90 rounded-xl p-6 relative overflow-hidden">
                      {/* Header stripe */}
                      <div className="flex items-center gap-2 mb-5 pb-4 border-b border-primary/8">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
                        <span className="text-[9px] font-semibold tracking-[0.3em] uppercase text-primary">Developer ID</span>
                      </div>

                      {/* Profile Image */}
                      <div className="flex justify-center mb-5">
                        <div className="w-24 h-24 rounded-full p-[1.5px] bg-gradient-to-br from-primary via-accent to-secondary">
                          <div className="w-full h-full rounded-full overflow-hidden bg-dark flex items-center justify-center">
                            <img
                              src={profileImg}
                              alt="Pranali Sawant"
                              className="w-full h-full object-cover object-center"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Info */}
                      <div className="text-center mb-5">
                        <h3 className="text-lg font-bold tracking-tight">Pranali Ravindra Sawant</h3>
                        <p className="gradient-text-cyan text-xs font-semibold mt-1">AI/ML Engineer</p>
                        <p className="text-muted text-[11px] mt-1">DKTE CSE AIML</p>
                      </div>

                      {/* Status badges */}
                      <div className="flex flex-wrap justify-center gap-2 mb-4">
                        <span className="px-2.5 py-1 text-[9px] font-semibold rounded-md bg-primary/8 text-primary border border-primary/10 tracking-wider">STUDENT LEADER</span>
                        <span className="px-2.5 py-1 text-[9px] font-semibold rounded-md bg-secondary/8 text-secondary border border-secondary/10 tracking-wider">ML INTERN</span>
                      </div>

                      {/* Barcode-like decoration */}
                      <div className="flex justify-center gap-[2px] mt-3">
                        {Array.from({ length: 20 }).map((_, i) => (
                          <div
                            key={i}
                            className="bg-primary/8"
                            style={{
                              width: i % 3 === 0 ? '2px' : '1px',
                              height: '16px',
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              Hello!<span className="gradient-text-cyan ml-2">:)</span>
            </h3>
            <p className="text-muted leading-[1.9] text-[15px] mb-6">
              I am a Computer Science and Engineering student specializing in Artificial Intelligence
              and Machine Learning. I enjoy building intelligent systems, solving practical problems,
              and converting innovative ideas into real digital products.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-6">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + i * 0.08 }}
                  className="glass-card rounded-xl p-4 flex items-center gap-3"
                >
                  <div className={`w-9 h-9 rounded-lg bg-${item.color}/8 border border-${item.color}/12 flex items-center justify-center shrink-0`}>
                    <item.icon className={`text-${item.color}`} size={16} />
                  </div>
                  <span className="text-xs font-medium text-light/80">{item.label}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {['AI', 'ML', 'DL', 'NLP', 'Python', 'Leadership'].map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.8 + i * 0.04 }}
                  className="px-3 py-1 text-[10px] font-semibold rounded-lg bg-primary/5 text-primary border border-primary/8 tracking-wider"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
