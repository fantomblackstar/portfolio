import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ProgressIndicator: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="absolute -bottom-1 left-0 h-1 w-full origin-left bg-gradient-to-r from-orange-1 to-violet-1"
      style={{ scaleX }}
    />
  );
};

export default ProgressIndicator;
