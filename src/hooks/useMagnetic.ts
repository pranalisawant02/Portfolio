import { useRef, useCallback } from 'react';
import { useMotionValue, useSpring } from 'framer-motion';

export function useMagnetic(strength = 0.3) {
  const ref = useRef<HTMLDivElement>(null);
  const magnetX = useMotionValue(0);
  const magnetY = useMotionValue(0);
  const springX = useSpring(magnetX, { stiffness: 200, damping: 15 });
  const springY = useSpring(magnetY, { stiffness: 200, damping: 15 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      magnetX.set((e.clientX - centerX) * strength);
      magnetY.set((e.clientY - centerY) * strength);
    },
    [strength, magnetX, magnetY]
  );

  const handleMouseLeave = useCallback(() => {
    magnetX.set(0);
    magnetY.set(0);
  }, [magnetX, magnetY]);

  return { ref, x: springX, y: springY, handleMouseMove, handleMouseLeave };
}
