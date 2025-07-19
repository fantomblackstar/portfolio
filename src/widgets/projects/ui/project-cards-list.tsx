import { AnimatePresence, motion } from 'framer-motion';
import { FC, useState } from 'react';
import { useEffect } from 'react';

import { cards } from '../lib/constants';
import { ProjectInfo } from '../model';
import { CloseIcon } from './close-icon';
import { ProjectCardExtended } from './project-card-extended';
import { ProjectCardSmall } from './project-card-small';

const ProjectCardsList: FC = () => {
  const [active, setActive] = useState<ProjectInfo | boolean | null>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setActive(false);
      }
    }

    if (active && typeof active === 'object') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [active]);

  const onCardClick = (id: number) => {
    const foundCard = cards.find((card) => card.id === id);
    setActive(foundCard || null);
  };

  const clearActive = () => {
    setActive(null);
  };

  return (
    <>
      <AnimatePresence>
        {active && typeof active === 'object' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-10 h-full w-full bg-black/20"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === 'object' ? (
          <div className="fixed inset-0 z-[100] grid place-items-center">
            <motion.button
              key={`button-${active.title}-${active.id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="absolute right-2 top-2 flex size-6 items-center justify-center rounded-full bg-white lg:hidden"
              onClick={clearActive}
            >
              <CloseIcon />
            </motion.button>
            <ProjectCardExtended clearActive={clearActive} active={active} />
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="mx-auto w-full gap-4 space-y-4">
        {cards.map((card) => (
          <ProjectCardSmall
            key={`card-${card.title}-${card.id}`}
            {...card}
            onCardClick={onCardClick}
          />
        ))}
      </ul>
    </>
  );
};

export { ProjectCardsList };
