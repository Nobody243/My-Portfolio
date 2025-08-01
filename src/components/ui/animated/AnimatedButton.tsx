"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";

interface AnimatedButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gradient" | "magnetic";
  size?: "sm" | "md" | "lg" | "xl";
  animation?: "pulse" | "bounce" | "glow" | "scale" | "magnetic" | "shine";
  asChild?: boolean;
  className?: string;
  disabled?: boolean;
}

const AnimatedButton = forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ 
    children, 
    variant = "primary", 
    size = "md",
    animation = "scale",
    asChild = false,
    className,
    disabled = false,
    ...props 
  }, ref) => {

    const variants = {
      primary: "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl border-0",
      secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700",
      outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 bg-transparent hover:bg-blue-600",
      ghost: "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 border-0 bg-transparent",
      gradient: "bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 border-0 shadow-lg",
      magnetic: "bg-gradient-to-r from-blue-400 to-purple-500 text-white hover:from-blue-500 hover:to-purple-600 shadow-lg hover:shadow-purple-500/25 border-0"
    };

    const sizes = {
      sm: "px-4 py-2 text-sm rounded-lg h-9 min-w-[4rem]",
      md: "px-6 py-3 text-base rounded-xl h-12 min-w-[5rem]",
      lg: "px-8 py-4 text-lg rounded-xl h-14 min-w-[6rem]",
      xl: "px-10 py-5 text-xl rounded-2xl h-16 min-w-[7rem]"
    };

    const animations = {
      pulse: {
        whileHover: { 
          scale: 1.05,
          transition: { 
            type: "spring" as const, 
            stiffness: 400, 
            damping: 10 
          }
        },
        whileTap: { scale: 0.95 },
        animate: {
          boxShadow: [
            "0 0 0 0 rgba(99, 102, 241, 0.4)",
            "0 0 0 10px rgba(99, 102, 241, 0)",
          ],
          transition: {
            duration: 2,
            repeat: Infinity,
          }
        }
      },
      bounce: {
        whileHover: { 
          scale: 1.1,
          y: -2,
          transition: { 
            type: "spring" as const, 
            stiffness: 400, 
            damping: 10 
          }
        },
        whileTap: { 
          scale: 0.9,
          transition: { duration: 0.1 }
        }
      },
      glow: {
        whileHover: { 
          scale: 1.05,
          boxShadow: "0 0 25px rgba(99, 102, 241, 0.6)",
          transition: { duration: 0.3 }
        },
        whileTap: { scale: 0.95 }
      },
      scale: {
        whileHover: { 
          scale: 1.05,
          transition: { 
            type: "spring" as const, 
            stiffness: 300, 
            damping: 20 
          }
        },
        whileTap: { scale: 0.95 }
      },
      magnetic: {
        whileHover: { 
          scale: 1.1,
          y: -3,
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
          transition: { 
            type: "spring" as const, 
            stiffness: 400, 
            damping: 25 
          }
        },
        whileTap: { 
          scale: 0.95,
          y: 0
        }
      },
      shine: {
        whileHover: { 
          scale: 1.05,
          transition: { duration: 0.3 }
        },
        whileTap: { scale: 0.95 }
      }
    };

    const baseClasses = "relative inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none whitespace-nowrap";
    const combinedClasses = cn(
      baseClasses,
      variants[variant],
      sizes[size],
      disabled && "pointer-events-none opacity-50",
      className
    );

    if (asChild) {
      return (
        <Slot className={combinedClasses}>
          <motion.div {...animations[animation]}>
            {children}
          </motion.div>
        </Slot>
      );
    }

    return (
      <motion.button
        ref={ref}
        {...animations[animation]}
        disabled={disabled}
        className={combinedClasses}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

AnimatedButton.displayName = "AnimatedButton";

export default AnimatedButton;
