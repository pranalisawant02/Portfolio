import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Code2, Brain, Cloud, Wrench } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: typeof Code2;
  skills: string[];
  accent: string;
}

const categories: SkillCategory[] = [
  {
    title: 'Programming',
    icon: Code2,
    accent: 'primary',
    skills: ['Java', 'Python', 'C++', 'JavaScript', 'SQL', 'HTML', 'CSS'],
  },
  {
    title: 'AI / ML',
    icon: Brain,
    accent: 'secondary',
    skills: ['Machine Learning', 'Deep Learning', 'NLP', 'Transformers', 'Scikit-learn', 'Keras'],
  },
  {
    title: 'Cloud & Database',
    icon: Cloud,
    accent: 'accent',
    skills: ['AWS', 'Firebase', 'Firestore', 'MySQL'],
  },
  {
    title: 'Tools',
    icon: Wrench,
    accent: 'primary',
    skills: ['Git', 'GitHub', 'VS Code', 'Google Colab', 'Anaconda', 'Tableau', 'Excel'],
  },
];

function SkillCard({ name, index, inView }: { name: string; index: number; inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ delay: 0.05 + index * 0.04, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      className="group"
    >
      <div className="glass-card rounded-xl px-4 py-3 text-sm font-medium
        hover:border-primary/20 hover:shadow-[0_0_20px_rgba(56,189,248,0.06)]
        transition-all duration-400 relative overflow-hidden"
      >
        <span className="text-light/75 group-hover:text-primary transition-colors duration-300 relative z-10">{name}</span>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/2 rounded-full blur-[180px]" />

      <div className="container-max relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-primary font-medium text-[11px] tracking-[0.35em] uppercase">Technical Proficiency</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 tracking-tight">
            Skills & <span className="gradient-text-premium">Expertise</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2.5 mb-14">
          {categories.map((cat, i) => (
            <motion.button
              key={cat.title}
              onClick={() => setActiveCategory(i)}
              className={`flex items-center gap-2 px-4.5 py-2.5 rounded-full text-[13px] font-medium transition-all duration-400 ${
                activeCategory === i
                  ? 'bg-primary/10 text-primary border border-primary/20 glow-cyan'
                  : 'glass text-muted hover:text-light hover:border-primary/12'
              }`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.07 }}
            >
              <cat.icon size={14} />
              {cat.title}
            </motion.button>
          ))}
        </div>

        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="glass rounded-2xl p-7 md:p-9 max-w-3xl mx-auto border-glow-cyan"
        >
          <div className="flex items-center gap-3 mb-7">
            {(() => {
              const Icon = categories[activeCategory].icon;
              return <Icon className={`text-${categories[activeCategory].accent}`} size={20} />;
            })()}
            <h3 className="text-base font-semibold tracking-tight">{categories[activeCategory].title}</h3>
            <span className="text-muted/50 text-[11px] ml-auto">{categories[activeCategory].skills.length} skills</span>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {categories[activeCategory].skills.map((skill, i) => (
              <SkillCard key={skill} name={skill} index={i} inView={inView} />
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              className="glass-card rounded-xl p-5 text-center cursor-pointer"
              onClick={() => setActiveCategory(i)}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.08 }}
              whileHover={{ scale: 1.03 }}
            >
              <cat.icon className={`text-${cat.accent} mx-auto mb-2.5`} size={24} />
              <div className="text-2xl font-bold gradient-text-cyan mb-0.5">{cat.skills.length}</div>
              <p className="text-muted text-[11px]">{cat.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
