"use client";

import { motion, easeInOut } from "framer-motion";
import { Button } from "@/components/ui/core";
import { LucideIcon } from "lucide-react";
import { forwardRef } from "react";

interface EnhancedButtonProps {
  children: React.ReactNode;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  iconAnimation?: 'spin' | 'bounce' | 'slide' | 'none';
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  lightGlow?: boolean;
  textFill?: boolean;
}

export const EnhancedButton = forwardRef<HTMLButtonElement, EnhancedButtonProps>(
  ({ 
    children, 
    icon: Icon, 
    iconPosition = 'left', 
    iconAnimation = 'none',
    variant = 'primary',
    size = 'md',
    className = '',
    href,
    onClick,
    disabled = false,
    lightGlow = true,
    textFill = false,
    ...props 
  }, ref) => {

    const getIconClasses = () => {
      switch (variant) {
        case 'primary':
          return 'text-white'; // Always white for primary buttons
        case 'outline':
          return textFill ? 'text-gray-700 dark:text-gray-200' : 'text-gray-700 dark:text-gray-200';
        case 'ghost':
          return 'text-gray-700 dark:text-gray-200';
        case 'secondary':
          return 'text-gray-900'; // Black for secondary buttons
        default:
          return 'text-gray-700 dark:text-gray-200';
      }
    };

    const getVariantClasses = () => {
      switch (variant) {
        case 'primary':
          return `
            bg-gradient-to-r from-blue-600 to-purple-600 
            hover:from-blue-700 hover:to-purple-700 
            text-white border-0
            light-mode-subtle
          `;
        case 'secondary':
          return `
            bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600
            hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 
            text-white border-0
            light-mode-subtle
          `;
        case 'outline':
          return `
            border-2 border-gray-300 dark:border-gray-600 
            hover:border-blue-500 dark:hover:border-blue-400 
            bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm
            ${textFill ? '' : 'text-gray-700 dark:text-gray-200'}
            hover:bg-blue-50 dark:hover:bg-gray-700
            light-mode-subtle
          `;
        case 'ghost':
          return `
            bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800
            text-gray-700 dark:text-gray-200
            border-0
          `;
        default:
          return '';
      }
    };

    const getSizeClasses = () => {
      switch (size) {
        case 'sm':
          return 'px-4 py-2 text-sm h-9 min-w-[120px]';
        case 'md':
          return 'px-6 py-3 text-base h-11 min-w-[160px]';
        case 'lg':
          return 'px-8 py-4 text-lg h-12 min-w-[180px]';
        default:
          return 'px-6 py-3 text-base h-11 min-w-[160px]';
      }
    };

    const getIconAnimation = () => {
      switch (iconAnimation) {
        case 'spin':
          return {
            animate: { rotate: [0, 360] },
            transition: { duration: 2, repeat: Infinity, ease: easeInOut }
          };
        case 'bounce':
          return {
            animate: { y: [-1, 1, -1] },
            transition: { duration: 2, repeat: Infinity, ease: easeInOut }
          };
        case 'slide':
          return {
            initial: { x: 0 },
            whileHover: { x: iconPosition === 'right' ? 4 : -4 },
            transition: { type: "spring" as const, stiffness: 400 }
          };
        default:
          return {};
      }
    };

    const buttonContent = (
      <div className="flex items-center justify-center gap-3 w-full h-full min-h-[44px]">
        {Icon && iconPosition === 'left' && (
          <motion.div
            {...getIconAnimation()}
            className="flex items-center justify-center flex-shrink-0"
          >
            <Icon className={`h-5 w-5 ${getIconClasses()}`} />
          </motion.div>
        )}
        
        <span className={`font-medium text-center leading-none ${textFill ? 'text-fill-effect' : ''}`}>
          {children}
        </span>
        
        {Icon && iconPosition === 'right' && (
          <motion.div
            {...getIconAnimation()}
            className="flex items-center justify-center flex-shrink-0"
          >
            <Icon className={`h-5 w-5 ${getIconClasses()}`} />
          </motion.div>
        )}
      </div>
    );

    const buttonClasses = `
      ${getVariantClasses()}
      ${getSizeClasses()}
      ${lightGlow ? 'btn-light-glow' : ''}
      rounded-lg transition-all duration-200
      font-medium
      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
      disabled:opacity-50 disabled:cursor-not-allowed
      ${className}
    `.replace(/\s+/g, ' ').trim();


    if (href) {
      return (
        <motion.a
          href={href}
          whileHover={{ 
            scale: 1.05, 
            y: -2,
            boxShadow: variant === 'primary' 
              ? "0 20px 40px -12px rgba(59, 130, 246, 0.3)"
              : "0 10px 20px -5px rgba(0, 0, 0, 0.1)"
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="inline-block"
        >
          <Button 
            ref={ref}
            className={buttonClasses}
            disabled={disabled}
            onClick={onClick}
            {...props}
          >
            {buttonContent}
          </Button>
        </motion.a>
      );
    }

    return (
      <motion.div
        whileHover={{ 
          scale: 1.05, 
          y: -2,
          boxShadow: variant === 'primary' 
            ? "0 20px 40px -12px rgba(59, 130, 246, 0.3)"
            : "0 10px 20px -5px rgba(0, 0, 0, 0.1)"
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="inline-block"
      >
        <Button 
          ref={ref}
          className={buttonClasses}
          disabled={disabled}
          onClick={onClick}
          {...props}
        >
          {buttonContent}
        </Button>
      </motion.div>
    );
  }
);

EnhancedButton.displayName = "EnhancedButton";
