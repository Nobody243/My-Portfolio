"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TextFillEffectProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  enableAura?: boolean;
}

export function TextFillEffect({ 
  text, 
  className = "", 
  delay = 0,
  duration = 4,
  as: Component = 'span'
}: TextFillEffectProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className="relative inline-block"
    >
      <Component
        className={`text-fill-effect ${className}`}
        style={{
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`
        }}
      >
        {text}
      </Component>
    </motion.div>
  );
}

// Flowing gradient effect like buttons
export function TextFillLetterByLetter({ 
  text, 
  className = "", 
  delay = 0
}: Omit<TextFillEffectProps, 'duration' | 'as' | 'enableAura'>) {
  return (
    <motion.span
      className={`text-fill-effect ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: delay,
        duration: 0.8
      }}
    >
      {text}
    </motion.span>
  );
}
