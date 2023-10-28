'use client';
import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const FadeOnScroll = ({ children }) => {
  const controls = useAnimation();
  const [elementTop, setElementTop] = useState(null);

  const onScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > elementTop - window.innerHeight / 1.5) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 1 } });
    }
  };

  useEffect(() => {
    const element = document.getElementById('fade-in-on-scroll');
    setElementTop(element.offsetTop);
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [elementTop]);

  return (
    <motion.div
      id="fade-in-on-scroll"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

export default FadeOnScroll;
