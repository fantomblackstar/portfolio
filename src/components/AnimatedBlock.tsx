import React, { ReactNode, useEffect } from 'react';
import { motion, useAnimation, Variant } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AnimatedDirection } from '../interfaces';

interface AnimatedBlockProps {
  children?: ReactNode;
  direction: AnimatedDirection;
  className?: HTMLDivElement['className'];
  durationMs?: number;
  delayMs?: number;
  visibleVariant?: Variant;
  hiddenVariant?: Variant;
}

const AnimatedBlock: React.FC<AnimatedBlockProps> = ({
  children,
  direction,
  className,
  durationMs = 700,
  delayMs = 500,
  hiddenVariant,
  visibleVariant,
}) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const hiddenX =
    direction === AnimatedDirection.LEFT ? -100 : direction === AnimatedDirection.RIGHT ? 100 : 0;

  const hiddenY = direction === AnimatedDirection.BOTTOM ? 100 : 0;

  const variants = {
    hidden: {
      opacity: 0,
      y: hiddenY,
      x: hiddenX,
      scale: 0.9,
      ...hiddenVariant,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: { duration: durationMs / 1000, delay: delayMs / 1000 },
      ...visibleVariant,
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedBlock;
