import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleHoverCheck = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('a, button, input, textarea, [role="button"], .glass-card, .tilt-card');
      setIsHovering(!!isInteractive);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousemove', handleHoverCheck);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousemove', handleHoverCheck);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [reduced]);

  if (reduced) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          <motion.div
            className="fixed top-0 left-0 w-3 h-3 rounded-full z-[999] pointer-events-none mix-blend-difference"
            style={{ background: 'linear-gradient(135deg, #38BDF8, #A78BFA)' }}
            animate={{
              x: position.x - 6,
              y: position.y - 6,
              scale: isClicking ? 0.5 : 1,
            }}
            transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
          />
          <motion.div
            className="fixed top-0 left-0 rounded-full z-[998] pointer-events-none"
            style={{
              border: '1px solid rgba(56, 189, 248, 0.3)',
              background: isHovering ? 'rgba(56, 189, 248, 0.04)' : 'transparent',
            }}
            animate={{
              x: position.x - (isHovering ? 20 : 14),
              y: position.y - (isHovering ? 20 : 14),
              width: isHovering ? 40 : 28,
              height: isHovering ? 40 : 28,
              borderColor: isHovering ? 'rgba(56, 189, 248, 0.5)' : 'rgba(56, 189, 248, 0.2)',
            }}
            transition={{ type: 'spring', stiffness: 200, damping: 20, mass: 0.8 }}
          />
        </>
      )}
    </AnimatePresence>
  );
}
