'use client';
import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const FadeLeftOnScroll = ({ children }: any) => {
  const controls = useAnimation();
  const [ref, setRef] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref) {
        const rect = ref.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 1.5) {
          controls.start({ opacity: 1, x: 0, transition: { duration: 0.5 } });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls, ref]);

  return (
    <motion.div
      ref={setRef}
      initial={{ opacity: 0, x: '100vw' }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

export default FadeLeftOnScroll;
