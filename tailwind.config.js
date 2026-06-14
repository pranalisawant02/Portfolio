/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    'bg-primary/8','bg-primary/10','bg-primary/12','bg-primary/15','bg-secondary/8','bg-secondary/10','bg-secondary/12','bg-secondary/15','bg-accent/8','bg-accent/10','bg-accent/12','bg-accent/15',
    'border-primary/8','border-primary/10','border-primary/12','border-primary/15','border-primary/20','border-primary/25','border-secondary/8','border-secondary/10','border-secondary/12','border-secondary/15','border-accent/8','border-accent/10','border-accent/12','border-accent/15',
    'text-primary','text-secondary','text-accent','from-primary/12','from-secondary/12','from-accent/12','to-primary/3','to-secondary/3',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#38BDF8',
        'primary-dark': '#0EA5E9',
        secondary: '#A78BFA',
        'secondary-dark': '#8B5CF6',
        accent: '#22D3EE',
        dark: '#070B14',
        'dark-secondary': '#0F172A',
        'dark-card': '#0F172A',
        surface: '#1E293B',
        muted: '#94A3B8',
        light: '#F8FAFC',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'gradient-shift': 'gradientShift 8s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
