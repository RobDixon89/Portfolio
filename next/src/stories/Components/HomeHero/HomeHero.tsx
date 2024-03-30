'use client';

import { bitter, raleway } from '@lib/fonts';
import { HomeHero } from '@types';
import { motion, useAnimation, useInView } from 'framer-motion';
import React from 'react';
import s from './HomeHero.module.css';

export type HomeHeroProps = Omit<HomeHero, '_type'>;

const HomeHero: React.FC<HomeHeroProps> = (props) => {
  const ref = React.useRef<HTMLHeadingElement>(null);
  const visible = useInView(ref, { once: true });

  const introControls = useAnimation();
  const messageControls = useAnimation();

  const spring = {
    type: 'spring',
    damping: 10,
    stiffness: 100,
  };

  React.useEffect(() => {
    if (visible) {
      introControls
        .start('visible')
        .finally(() => messageControls.start('visible'));
    }
  }, [visible]);

  return (
    <h1 ref={ref} className={`${s.h1}`}>
      <span className={`${s.intro}`}>
        <motion.span
          className={`${raleway?.className ?? 'raleway'} ${s.introText}`}
          variants={{
            initial: { opacity: 1, translateY: `100%`, zIndex: -1 },
            visible: { opacity: 1, translateY: `8%`, zIndex: 1 },
          }}
          transition={{ delay: 1.5, duration: 1, ...spring }}
          initial="initial"
          animate={introControls}
        >
          {props.intro}
        </motion.span>
        <motion.span
          className={`${s.underline}`}
          variants={{
            initial: { opacity: 0, height: '5%', translateY: `0%` },
            visible: { opacity: 1, height: '15%', translateY: `-25%` },
          }}
          transition={{ delay: 0.5, duration: 0.5, ...spring }}
          initial="initial"
          animate={introControls}
        />
      </span>

      <motion.span
        className={`${s.textWrapper} ${bitter?.className ?? 'bitter'}`}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.33,
            },
          },
        }}
        animate={messageControls}
        transition={{ duration: 0.33, ...spring, type: 'backIn' }}
        initial="initial"
      >
        {staggeredWords(props.main)}
      </motion.span>
    </h1>
  );

  function staggeredWords(text?: string): React.ReactNode {
    if (!text) {
      return null;
    }

    const arr = text.split(' ');

    return arr.map((t, i) => {
      const highlight = t.includes('**');

      return (
        <>
          <motion.span
            className={`${s.textItem}`}
            variants={{
              initial: {
                opacity: 0,
                translateX: `10px`,
                scale: 1.5,
                backgroundSize: `0% 100%`,
              },
              visible: {
                opacity: highlight ? 1 : 0.9,
                translateX: `0px`,
                scale: 1,
                backgroundSize: `100% 100%`,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            data-highlight={highlight}
          >
            {t.replace('**', '')}
          </motion.span>{' '}
        </>
      );
    });
  }
};

export default HomeHero;
