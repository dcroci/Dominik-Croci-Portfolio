import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TextAnimation = ({ children }: any) => {
  // Splitting the text into an array of characters
  const characters = children.split('');

  return (
    <div>
      <AnimatePresence>
        {characters.map((char: string, i: number) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ delay: i * 0.1 }}
          >
            {char}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default TextAnimation;
