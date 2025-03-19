"use client"

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const FestiveBackground = () => {
  const [particles, setParticles] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 50 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full bg-yellow-400 opacity-70"
        initial={{
          x: Math.random() * window.innerWidth,
          y: -20,
          scale: Math.random() * 0.5 + 0.5,
        }}
        animate={{
          y: window.innerHeight + 20,
          transition: {
            duration: Math.random() * 2 + 3,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
          },
        }}
        style={{
          width: Math.random() * 10 + 5,
          height: Math.random() * 10 + 5,
        }}
      />
    ));
    setParticles(newParticles);
  }, []);

  return <div className="fixed inset-0 pointer-events-none">{particles}</div>;
};

export default FestiveBackground;
