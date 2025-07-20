import { HTMLMotionProps, motion, useAnimation, Variant } from 'framer-motion';
import React, { ReactNode, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export enum AnimatedDirection {
  BOTTOM = 'BOTTOM',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
}

interface AnimatedBlockProps
  extends Omit<HTMLMotionProps<'div'>, 'initial' | 'animate' | 'variants'> {
  children?: ReactNode;
  direction: AnimatedDirection;
  durationMs?: number;
  delayMs?: number;
  visibleVariant?: Variant;
  hiddenVariant?: Variant;
}

const AnimatedBlock: React.FC<AnimatedBlockProps> = ({
  children,
  direction,
  durationMs = 700,
  delayMs = 400,
  hiddenVariant,
  visibleVariant,
  ...motionProps
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
    hidden: { opacity: 0, y: hiddenY, x: hiddenX, scale: 0.9, ...hiddenVariant },
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
    <motion.div ref={ref} initial="hidden" animate={controls} variants={variants} {...motionProps}>
      {children}
    </motion.div>
  );
};

export { AnimatedBlock };
