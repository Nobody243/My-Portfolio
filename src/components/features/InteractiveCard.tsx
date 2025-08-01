"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { hoverLift, fadeInUp } from "@/lib/advanced-animations";

interface InteractiveCardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: ReactNode;
  variant?: "default" | "featured" | "minimal" | "glow" | "magnetic";
  animation?: "fade" | "scale" | "slide" | "rotate" | "none";
  hover?: "lift" | "scale" | "glow" | "magnetic" | "none";
  delay?: number;
  className?: string;
}

const InteractiveCard = forwardRef<HTMLDivElement, InteractiveCardProps>(
  ({ 
    children, 
    variant = "default", 
    animation = "fade",
    hover = "lift",
    delay = 0,
    className,
    ...props 
  }, ref) => {
    
    const variants = {
      fade: fadeInUp,
      scale: {
        hidden: { opacity: 0, scale: 0.8 },
        show: { 
          opacity: 1, 
          scale: 1,
          transition: { 
            duration: 0.6, 
            ease: [0.42, 0, 0.58, 1] as const,
            delay
          }
        }
      },
      slide: {
        hidden: { opacity: 0, x: -100 },
        show: { 
          opacity: 1, 
          x: 0,
          transition: { 
            duration: 0.8, 
            ease: [0.42, 0, 0.58, 1] as const,
            delay
          }
        }
      },
      rotate: {
        hidden: { opacity: 0, rotate: -180, scale: 0.5 },
        show: { 
          opacity: 1, 
          rotate: 0, 
          scale: 1,
          transition: { 
            duration: 1.2, 
            ease: [0.42, 0, 0.58, 1] as const,
            type: "spring" as const,
            delay
          }
        }
      },
      none: {}
    };

    const hoverEffects = {
      lift: hoverLift,
      scale: {
        whileHover: { 
          scale: 1.05,
          transition: { type: "spring" as const, stiffness: 300, damping: 20 }
        },
        whileTap: { scale: 0.95 }
      },
      glow: {
        ...hoverLift,
        whileHover: { 
          ...hoverLift.whileHover,
          boxShadow: "0 20px 40px rgba(99, 102, 241, 0.3)",
        }
      },
      magnetic: {
        whileHover: { 
          scale: 1.02,
          y: -5,
          transition: { type: "spring" as const, stiffness: 400, damping: 25 }
        }
      },
      none: {}
    };

    const cardVariants = {
      default: "bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-shadow duration-300",
      featured: "bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300",
      minimal: "bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg border border-gray-200/50 dark:border-gray-700/50",
      glow: "bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-[0_0_30px_rgba(99,102,241,0.3)] transition-all duration-300",
      magnetic: "bg-gradient-to-br from-white via-white to-blue-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg"
    };

    const getHoverProps = () => {
      if (hover === "none") return {};
      return hoverEffects[hover] || {};
    };

    return (
      <motion.div
        ref={ref}
        variants={animation !== "none" ? variants[animation] : undefined}
        initial={animation !== "none" ? "hidden" : undefined}
        whileInView={animation !== "none" ? "show" : undefined}
        viewport={{ once: true, margin: "-100px" }}
        {...getHoverProps()}
        className={cn(cardVariants[variant], className)}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

InteractiveCard.displayName = "InteractiveCard";

export default InteractiveCard;
