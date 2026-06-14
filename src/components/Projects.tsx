import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { useTilt } from '../hooks/useTilt';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface Project {
  title: string;
  subtitle: string;
  category: string;
  description: string;
  technologies: string[];
  features: string[];
  accentFrom: string;
  accentTo: string;
  accentColor: string;
}

const projects: Project[] = [
  {
    title: 'STEAMROLLER',
    subtitle: 'AI-Based Stuttered Speech Processing System',
    category: 'AI Research',
    description: 'A real-time multi-agent speech processing system that converts stuttered speech into fluent output and improves accessibility for people who stutter.',
    technologies: ['Python', 'NLP', 'Transformers', 'Whisper', 'StyleTTS2'],
    features: ['Speech-to-text conversion', 'Fluency enhancement', 'Accessibility-focused AI', 'Text-to-speech generation'],
    accentFrom: 'from-primary/12',
    accentTo: 'to-secondary/3',
    accentColor: 'primary',
  },
  {
    title: 'SafeHer',
    subtitle: 'Women Safety & Emergency Assistance Platform',
    category: 'Safety Platform',
    description: 'A safety platform with emergency assistance features, Firebase Authentication, Firestore integration, responsive UI, and Vercel deployment.',
    technologies: ['React', 'Firebase', 'Firestore', 'Vercel'],
    features: ['Emergency assistance', 'Authentication', 'Cloud database', 'Responsive UI'],
    accentFrom: 'from-secondary/12',
    accentTo: 'to-primary/3',
    accentColor: 'secondary',
  },
  {
    title: 'Vehicle Insurance',
    subtitle: 'Machine Learning Prediction System',
    category: 'Machine Learning',
    description: 'A machine learning prediction system built during internship using preprocessing, feature engineering, model training, and algorithm comparison.',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
    features: ['Predictive modeling', 'Feature engineering', 'Algorithm comparison', 'Decision support'],
    accentFrom: 'from-accent/12',
    accentTo: 'to-primary/3',
    accentColor: 'accent',
  },
];

function ProjectCard({ project, index, inView }: { project: Project; index: number; inView: boolean }) {
  const tilt = useTilt(6);
  const reduced = useReducedMotion();
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12 }}
      className="perspective-1000"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        ref={tilt.ref}
        onMouseMove={reduced ? undefined : tilt.handleMouseMove}
        onMouseLeave={reduced ? undefined : tilt.handleMouseLeave}
        style={{ rotateX: tilt.rotateX, rotateY: tilt.rotateY }}
        className="preserve-3d"
      >
        <div className="glass-card rounded-2xl overflow-hidden tilt-card">
          {/* Header */}
          <div className={`relative h-48 md:h-56 bg-gradient-to-br ${project.accentFrom} ${project.accentTo} p-6 md:p-7 overflow-hidden`}>
            <div className="absolute inset-0 bg-dark/60" />

            {/* AI grid pattern */}
            <svg className="absolute inset-0 w-full h-full opacity-[0.025]" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id={`pgrid-${index}`} width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill={`url(#pgrid-${index})`} />
            </svg>

            {/* Animated circles on hover */}
            <motion.div
              className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full border border-primary/10"
              animate={hovered ? { scale: 1.3, opacity: 0.15 } : { scale: 1, opacity: 0.05 }}
              transition={{ duration: 0.6 }}
            />
            <motion.div
              className="absolute -top-8 -left-8 w-24 h-24 rounded-full border border-secondary/10"
              animate={hovered ? { scale: 1.2, opacity: 0.12 } : { scale: 1, opacity: 0.04 }}
              transition={{ duration: 0.6 }}
            />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <span className={`px-2.5 py-1 rounded-md text-[10px] font-semibold tracking-wider uppercase bg-${project.accentColor}/10 text-${project.accentColor} border border-${project.accentColor}/12`}>
                  {project.category}
                </span>
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-400">
                  <button className="p-1.5 glass rounded-lg text-muted hover:text-primary transition-colors">
                    <Github size={13} />
                  </button>
                  <button className="p-1.5 glass rounded-lg text-muted hover:text-primary transition-colors">
                    <ExternalLink size={13} />
                  </button>
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-bold tracking-tight transition-colors duration-400 text-light">
                {project.title}
              </h3>
              <p className={`text-${project.accentColor} text-xs mt-1.5 font-medium`}>{project.subtitle}</p>
            </div>
          </div>

          {/* Body */}
          <div className="p-6 md:p-7">
            <p className="text-muted text-sm leading-relaxed mb-6">{project.description}</p>

            <div className="mb-5">
              <h4 className="text-[9px] font-semibold text-muted/50 uppercase tracking-[0.2em] mb-3">Key Features</h4>
              <div className="grid grid-cols-2 gap-2">
                {project.features.map((f) => (
                  <div key={f} className="flex items-start gap-2 text-xs text-muted/80">
                    <span className="w-1 h-1 rounded-full bg-primary shrink-0 mt-[5px]" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-2.5 py-1 text-[10px] font-medium rounded-md bg-light/[0.03] text-muted/60 border border-light/[0.04]">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/2 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/2 rounded-full blur-[130px]" />

      <div className="container-max relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-primary font-medium text-[11px] tracking-[0.35em] uppercase">Selected Work</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 tracking-tight">
            Featured <span className="gradient-text-premium">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} inView={inView} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/pranalisawant02"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glass inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            View All on GitHub
            <ArrowUpRight size={14} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
