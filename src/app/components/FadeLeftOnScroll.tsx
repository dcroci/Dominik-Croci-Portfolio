'use client';
import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const FadeLeftOnScroll = ({ children }: any) => {
  const controls = useAnimation();
  const [elementTop, setElementTop] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      if (elementTop) {
        if (scrollY > elementTop - window.innerHeight / 1.5) {
          controls.start({ opacity: 1, x: 0, transition: { duration: 1 } });
        }
      }
    };
    const element = document.getElementById('fade-in-on-scroll');
    if (element) {
      setElementTop(element.offsetTop);
    }
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [elementTop, controls]);

  return (
    <motion.div
      id="fade-in-on-scroll"
      initial={{ opacity: 0, x: '-100vw' }} // start from the left outside of the view
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

export default FadeLeftOnScroll;
