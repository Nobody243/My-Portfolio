"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const MagneticCursor = () => {
  const [isClient, setIsClient] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [cursorVariant, setCursorVariant] = useState("default");

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    setIsClient(true);
    
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 8);
      cursorY.set(e.clientY - 8);
    };

    const handleMouseEnter = () => setCursorVariant("hover");
    const handleMouseLeave = () => setCursorVariant("default");

    if (typeof window !== 'undefined') {
      window.addEventListener("mousemove", moveCursor);
      
      // Add hover effects to interactive elements
      const interactiveElements = document.querySelectorAll(
        'button, a, input, textarea, [role="button"], .cursor-hover'
      );
      
      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", handleMouseEnter);
        el.addEventListener("mouseleave", handleMouseLeave);
      });

      return () => {
        window.removeEventListener("mousemove", moveCursor);
        interactiveElements.forEach((el) => {
          el.removeEventListener("mouseenter", handleMouseEnter);
          el.removeEventListener("mouseleave", handleMouseLeave);
        });
      };
    }
  }, [cursorX, cursorY]);

  if (!isClient) return null;

  const variants = {
    default: {
      height: 16,
      width: 16,
      backgroundColor: "rgba(99, 102, 241, 0.8)",
      mixBlendMode: "difference" as const,
      transition: {
        type: "spring" as const,
        damping: 25,
        stiffness: 700
      }
    },
    hover: {
      height: 40,
      width: 40,
      backgroundColor: "rgba(99, 102, 241, 0.6)",
      mixBlendMode: "difference" as const,
      transition: {
        type: "spring" as const,
        damping: 25,
        stiffness: 700
      }
    }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 z-50 pointer-events-none hidden md:block"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
      }}
    >
      <motion.div
        className="rounded-full"
        variants={variants}
        animate={cursorVariant}
      />
    </motion.div>
  );
};

export default MagneticCursor;
