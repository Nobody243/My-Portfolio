"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

interface ScrollProgressProps {
  variant?: "line" | "circle" | "dots";
  position?: "top" | "bottom" | "left" | "right";
  color?: string;
  thickness?: number;
  className?: string;
}

const ScrollProgress: React.FC<ScrollProgressProps> = ({
  variant = "line",
  position = "top",
  color = "rgb(99, 102, 241)",
  thickness = 3,
  className = ""
}) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  const opacity = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const percentage = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  if (variant === "line") {
    const positionClasses = {
      top: "fixed top-0 left-0 right-0 z-50 origin-left",
      bottom: "fixed bottom-0 left-0 right-0 z-50 origin-left",
      left: "fixed top-0 left-0 bottom-0 z-50 origin-top w-1",
      right: "fixed top-0 right-0 bottom-0 z-50 origin-top w-1"
    };

    return (
      <motion.div
        className={`${positionClasses[position]} ${className}`}
        style={{
          scaleX: position === "left" || position === "right" ? 1 : scaleX,
          scaleY: position === "left" || position === "right" ? scrollYProgress : 1,
          height: position === "top" || position === "bottom" ? thickness : "100%",
          backgroundColor: color,
        }}
      />
    );
  }

  if (variant === "circle") {
    return (
      <div className={`fixed bottom-8 right-8 z-50 ${className}`}>
        <svg width="60" height="60" className="transform -rotate-90">
          <circle
            cx="30"
            cy="30"
            r="25"
            fill="none"
            stroke="rgba(99, 102, 241, 0.2)"
            strokeWidth="4"
          />
          <motion.circle
            cx="30"
            cy="30"
            r="25"
            fill="none"
            stroke={color}
            strokeWidth="4"
            strokeLinecap="round"
            style={{
              pathLength: scrollYProgress
            }}
            initial={{ pathLength: 0 }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span 
            className="text-xs font-medium text-gray-600 dark:text-gray-300"
            style={{ opacity }}
          >
            <motion.span>{percentage}</motion.span>%
          </motion.span>
        </div>
      </div>
    );
  }

  if (variant === "dots") {
    const dots = Array.from({ length: 10 }, (_, i) => i);
    
    return (
      <div className={`fixed right-8 top-1/2 transform -translate-y-1/2 z-50 ${className}`}>
        <div className="flex flex-col space-y-3">
          {dots.map((dot, index) => (
            <motion.div
              key={dot}
              className="w-2 h-2 rounded-full border"
              style={{
                borderColor: color,
              }}
              animate={{
                scale: [1, 1.5],
                backgroundColor: [color, "transparent"]
              }}
              transition={{
                duration: 0.2,
                repeat: Infinity,
                repeatType: "reverse",
                delay: index * 0.1
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  return null;
};

export default ScrollProgress;
