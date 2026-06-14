import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText } from 'lucide-react';
import { useMagnetic } from '../hooks/useMagnetic';
import profileImg from '../assets/profile-portfolio.png';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
];

function MagneticResumeBtn() {
  const { ref, x, y, handleMouseMove, handleMouseLeave } = useMagnetic(0.25);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      className="hidden md:block"
    >
      <a
        href={`${import.meta.env.BASE_URL}resume.pdf`}
        download="Pranali_Ravindra_Sawant_Resume.pdf"
        className="btn-glass px-5 py-2 rounded-full text-[13px] font-medium flex items-center gap-2"
      >
        <FileText size={13} />
        Resume
      </a>
    </motion.div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0);

      const sections = navLinks.map((l) => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.8 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled ? 'glass-strong shadow-2xl shadow-black/30' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
              className="text-xl md:text-2xl font-bold tracking-tighter"
            >
              <span className="gradient-text-cyan">PRANALI</span>
              <span className="gradient-text-violet">.</span>
            </a>

            <div className="hidden md:flex items-center gap-0.5">
              {navLinks.map((link) => {
                const sectionId = link.href.replace('#', '');
                const isActive = activeSection === sectionId;

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={`relative px-4 py-2 text-[13px] font-medium tracking-wide transition-colors duration-300 ${
                      isActive ? 'text-primary' : 'text-muted hover:text-light'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.span
                        layoutId="navIndicator"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-[2px] rounded-full bg-gradient-to-r from-primary to-accent"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </div>

            <MagneticResumeBtn />

            <button
              className="md:hidden text-light p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-150 opacity-50"
          style={{ width: `${scrollProgress}%` }}
        />
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-dark/98 backdrop-blur-2xl"
              onClick={() => setMobileOpen(false)}
            />

            <motion.div className="relative flex flex-col items-center justify-center h-full gap-6 pt-20">
              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.85, y: 12 }}
                className="mb-2 flex flex-col items-center"
              >
                <div className="w-20 h-20 rounded-full p-[2px] bg-gradient-to-br from-primary via-accent to-secondary shadow-[0_0_35px_rgba(56,189,248,0.18)]">
                  <div className="w-full h-full rounded-full overflow-hidden bg-dark">
                    <img
                      src={profileImg}
                      alt="Pranali Sawant"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>

                <p className="mt-3 text-xs tracking-[0.25em] uppercase text-primary">
                  AI/ML Engineer
                </p>
              </motion.div>

              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className={`text-2xl font-semibold transition-colors ${
                    activeSection === link.href.replace('#', '')
                      ? 'gradient-text-cyan'
                      : 'text-muted hover:text-light'
                  }`}
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.a
                href={`${import.meta.env.BASE_URL}resume.pdf`}
                download="Pranali_Ravindra_Sawant_Resume.pdf"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="btn-glass px-6 py-3 rounded-full text-base font-medium flex items-center gap-2 mt-4"
              >
                <FileText size={16} />
                Resume
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}