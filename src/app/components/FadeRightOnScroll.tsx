'use client';
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

const FadeLeftOnScroll = ({ children }: any) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 1.5) {
          controls.start({ opacity: 1, x: 0, transition: { duration: 0.3 } });
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
      ref={ref}
      initial={{ opacity: 0, x: '100vw' }}
      animate={controls}
      className="overflow-x-hidden"
    >
      {children}
    </motion.div>
  );
};

export default FadeLeftOnScroll;
