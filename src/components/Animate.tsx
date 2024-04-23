'use client';
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Animate = ({ children }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        ease: 'linear',
        duration: 0.5,
        delay: 0.1 + 0.5,
      }}
      className="col-span-2 flex flex-col gap-8 md:flex-row md:items-center md:justify-center"
    >
      {children}
    </motion.div>
  );
};

export default Animate;
