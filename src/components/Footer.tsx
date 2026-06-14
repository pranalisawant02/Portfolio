import { Github, Linkedin, Heart } from 'lucide-react';
import profileImg from '../assets/profile-portfolio.png';

function LeetCodeIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 9H7.5a2.5 2.5 0 0 1 0-5C11 4 12 7 12 7s1-3 4.5-3a2.5 2.5 0 0 1 0 5H14" />
      <path d="M6 20h12" /><path d="M6 16h12" /><path d="M9 16v4" /><path d="M15 16v4" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative border-t border-primary/[0.05] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/[0.015] to-transparent pointer-events-none" />

      <div className="container-max relative z-10 px-6 md:px-8 py-20 md:py-28">
        <div className="relative mb-12">
          <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter leading-none text-light/[0.02] select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-none">
            PRANALI
          </h2>
          <div className="relative z-10 text-center">
            <div className="mx-auto mb-5 w-16 h-16 rounded-full p-[1.5px] bg-gradient-to-br from-primary via-accent to-secondary shadow-[0_0_30px_rgba(56,189,248,0.16)]">
              <div className="w-full h-full rounded-full overflow-hidden bg-dark">
                <img src={profileImg} alt="Pranali Sawant" className="w-full h-full object-cover object-center" />
              </div>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              <span className="gradient-text-cyan">PRANALI</span>
              <span className="gradient-text-violet">.</span>
            </h3>
            <p className="text-muted text-sm max-w-md mx-auto">
              Building Intelligent Systems That Solve Real Problems
            </p>
          </div>
        </div>

        <div className="flex justify-center gap-3 mb-12">
          {[
            { icon: Github, href: 'https://github.com/pranalisawant02', label: 'GitHub' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/pranali-sawant-2832a6334/', label: 'LinkedIn' },
            { icon: LeetCodeIcon, href: 'https://leetcode.com/u/Pranalisawant1403/', label: 'LeetCode' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 glass rounded-full text-muted hover:text-primary hover:border-primary/20 transition-all duration-400"
              aria-label={label}
            >
              <Icon size={17} />
            </a>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted/30 text-xs flex items-center justify-center gap-1.5">
            Built with <Heart className="text-primary" size={10} /> using React, TypeScript, Tailwind CSS & Framer Motion
          </p>
          <p className="text-muted/20 text-[11px] mt-2">
            &copy; {new Date().getFullYear()} Pranali Sawant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
