"use client";

import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  children: ReactNode;
  variant?: "heading" | "subheading" | "body" | "caption";
  animation?: "fadeUp" | "fadeLeft" | "fadeRight" | "typewriter" | "wave" | "gradient" | "split";
  delay?: number;
  duration?: number;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
  gradient?: boolean;
  stagger?: boolean;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  children,
  variant = "body",
  animation = "fadeUp",
  delay = 0,
  duration = 0.8,
  className,
  as: Component = "div",
  gradient = false,
  stagger = false
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const text = typeof children === 'string' ? children : '';
  const words = text.split(' ');
  const letters = text.split('');

  const baseVariants = {
    heading: "text-4xl md:text-6xl font-bold leading-tight",
    subheading: "text-2xl md:text-3xl font-semibold leading-relaxed", 
    body: "text-base md:text-lg leading-relaxed",
    caption: "text-sm"
  };

  const colorClasses = gradient 
    ? "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
    : "text-gray-900 dark:text-white";

  const variants = {
    heading: `${baseVariants.heading} ${colorClasses}`,
    subheading: `${baseVariants.subheading} ${colorClasses}`,
    body: `${baseVariants.body} ${gradient ? colorClasses : "text-gray-700 dark:text-gray-300"}`,
    caption: `${baseVariants.caption} text-gray-600 dark:text-gray-400`
  };

  const animations = {
    fadeUp: {
      hidden: { opacity: 0, y: 30 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { 
          duration,
          delay,
          ease: [0.25, 0.46, 0.45, 0.94] as const
        }
      }
    },
    fadeLeft: {
      hidden: { opacity: 0, x: -50 },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: { 
          duration,
          delay,
          ease: [0.25, 0.46, 0.45, 0.94] as const
        }
      }
    },
    fadeRight: {
      hidden: { opacity: 0, x: 50 },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: { 
          duration,
          delay,
          ease: [0.25, 0.46, 0.45, 0.94] as const
        }
      }
    },
    typewriter: {
      hidden: { width: 0 },
      visible: { 
        width: "auto",
        transition: { 
          duration: duration * 2,
          delay,
          ease: [0, 0, 1, 1] as const // linear easing as cubic bezier
        }
      }
    },
    wave: {
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.1,
          delayChildren: delay
        }
      }
    },
    gradient: {
      hidden: { backgroundPosition: "0% 50%" },
      visible: { 
        backgroundPosition: "100% 50%",
        transition: { 
          duration: duration * 2,
          delay,
          repeat: Infinity,
          repeatType: "reverse" as const
        }
      }
    },
    split: {
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.05,
          delayChildren: delay
        }
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  if (animation === "typewriter") {
    return (
      <motion.div
        ref={ref}
        className={cn("overflow-hidden whitespace-nowrap", className)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={animations.typewriter}
      >
        <Component className={cn(variants[variant])}>
          {children}
        </Component>
      </motion.div>
    );
  }

  if (animation === "wave" && stagger) {
    return (
      <motion.div
        ref={ref}
        className={className}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={animations.wave}
      >
        <Component className={cn(variants[variant])}>
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className="inline-block"
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </Component>
      </motion.div>
    );
  }

  if (animation === "split" && stagger) {
    return (
      <motion.div
        ref={ref}
        className={className}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={animations.split}
      >
        <Component className={cn(variants[variant])}>
          {words.map((word, index) => (
            <motion.span
              key={index}
              variants={wordVariants}
              className="inline-block mr-2"
            >
              {word}
            </motion.span>
          ))}
        </Component>
      </motion.div>
    );
  }

  if (animation === "gradient") {
    return (
      <motion.div
        ref={ref}
        className={className}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <Component 
          className={cn(
            variants[variant], 
            "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent bg-size-200"
          )}
        >
          <motion.div
            variants={animations.gradient}
            style={{
              backgroundImage: "linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)",
              backgroundSize: "200% 100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}
          >
            {children}
          </motion.div>
        </Component>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={animations[animation]}
    >
      <Component className={cn(variants[variant])}>
        {children}
      </Component>
    </motion.div>
  );
};

export default AnimatedText;
