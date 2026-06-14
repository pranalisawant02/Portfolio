import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';

export default function LoadingScreen() {
  const [phase, setPhase] = useState<'outline' | 'fill' | 'exit'>('outline');
  const [done, setDone] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) {
      const t = setTimeout(() => setDone(true), 600);
      return () => clearTimeout(t);
    }
    const t1 = setTimeout(() => setPhase('fill'), 400);
    const t2 = setTimeout(() => setPhase('exit'), 1800);
    const t3 = setTimeout(() => setDone(true), 2400);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [reduced]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] bg-dark flex items-center justify-center overflow-hidden"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="relative">
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-transparent"
              style={{
                WebkitTextStroke: '1.5px rgba(56, 189, 248, 0.3)',
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            >
              PRANALI
              <span className="text-secondary" style={{ WebkitTextStroke: '1.5px rgba(167, 139, 250, 0.4)' }}>.</span>
            </motion.h1>

            {phase !== 'outline' && (
              <motion.div
                className="absolute inset-0 overflow-hidden"
                initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
                animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
                transition={{ duration: 1.1, ease: [0.4, 0, 0.2, 1] }}
              >
                <h1
                  className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter gradient-text-premium"
                >
                  PRANALI<span className="gradient-text-violet">.</span>
                </h1>
              </motion.div>
            )}

            <motion.div
              className="absolute -bottom-12 left-0 right-0 flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex gap-1.5">
                {[0, 1, 2].map(i => (
                  <motion.div
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-primary"
                    animate={{ opacity: [0.2, 1, 0.2] }}
                    transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.3 }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
