import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, Mail, Github, Linkedin, MapPin } from 'lucide-react';
import profileImg from '../assets/profile-portfolio.png';

function LeetCodeIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 9H7.5a2.5 2.5 0 0 1 0-5C11 4 12 7 12 7s1-3 4.5-3a2.5 2.5 0 0 1 0 5H14" />
      <path d="M6 20h12" /><path d="M6 16h12" /><path d="M9 16v4" /><path d="M15 16v4" />
    </svg>
  );
}

const socialLinks = [
  { icon: Github, href: 'https://github.com/pranalisawant02', label: 'GitHub', accent: 'primary' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/pranali-sawant-2832a6334/', label: 'LinkedIn', accent: 'secondary' },
  { icon: LeetCodeIcon, href: 'https://leetcode.com/u/Pranalisawant1403/', label: 'LeetCode', accent: 'accent' },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-primary/2 rounded-full blur-[180px]" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-secondary/2 rounded-full blur-[130px]" />

      <div className="container-max relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-primary font-medium text-[11px] tracking-[0.35em] uppercase">Get In Touch</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 tracking-tight max-w-2xl mx-auto leading-tight">
            Let's Build <span className="gradient-text-premium">Intelligent Solutions</span> Together
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="glass rounded-2xl p-7 md:p-9 border-glow-cyan h-full">
              <h3 className="text-base font-semibold tracking-tight mb-7">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-[9px] font-semibold text-muted/50 uppercase tracking-[0.2em] mb-2 block">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full input-glass rounded-xl px-4 py-3 text-sm"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="text-[9px] font-semibold text-muted/50 uppercase tracking-[0.2em] mb-2 block">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full input-glass rounded-xl px-4 py-3 text-sm"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="text-[9px] font-semibold text-muted/50 uppercase tracking-[0.2em] mb-2 block">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full input-glass rounded-xl px-4 py-3 text-sm resize-none"
                    placeholder="Tell me about your project or opportunity..."
                    required
                  />
                </div>
                <motion.button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm"
                  whileHover={{ scale: 1.01, y: -1 }}
                  whileTap={{ scale: 0.99 }}
                >
                  {submitted ? 'Message Sent!' : 'Send Message'}
                  <Send size={14} />
                </motion.button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col gap-4"
          >
            {/* Profile avatar card */}
            <div className="glass-card rounded-2xl p-5 flex items-center gap-4">
              <div className="w-14 h-14 rounded-full p-[1.5px] bg-gradient-to-br from-primary via-accent to-secondary shrink-0">
                <div className="w-full h-full rounded-full overflow-hidden bg-dark">
                  <img
                    src={profileImg}
                    alt="Pranali Sawant"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
              <div className="min-w-0">
                <h4 className="font-semibold text-sm tracking-tight">Pranali Sawant</h4>
                <p className="gradient-text-cyan text-xs font-medium truncate">AI/ML Engineer</p>
                <p className="text-muted/50 text-[11px]">Open to opportunities</p>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/8 border border-primary/12 flex items-center justify-center shrink-0">
                <Mail className="text-primary" size={18} />
              </div>
              <div className="min-w-0">
                <h4 className="font-semibold text-sm tracking-tight">Email</h4>
                <a href="mailto:pranalisawant1403@gmail.com" className="text-muted text-sm hover:text-primary transition-colors truncate block">
                  pranalisawant1403@gmail.com
                </a>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-secondary/8 border border-secondary/12 flex items-center justify-center shrink-0">
                <MapPin className="text-secondary" size={18} />
              </div>
              <div>
                <h4 className="font-semibold text-sm tracking-tight">Location</h4>
                <p className="text-muted text-sm">Maharashtra, India</p>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-5">
              <h4 className="font-semibold text-sm tracking-tight mb-4">Connect With Me</h4>
              <div className="flex flex-wrap gap-2.5">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn-glass flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium`}
                    whileHover={{ scale: 1.04, y: -2 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    <Icon size={14} />
                    {label}
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.div
              className="glass rounded-2xl p-6 bg-gradient-to-br from-primary/[0.04] via-secondary/[0.04] to-accent/[0.04] border border-primary/8"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7 }}
            >
              <p className="text-muted text-sm italic leading-relaxed">
                "Building Intelligent Systems That Solve Real Problems"
              </p>
              <p className="gradient-text-cyan text-xs font-semibold mt-3 tracking-wide">— Pranali Sawant</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
