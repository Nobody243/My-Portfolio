"use client";

import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/lib/ThemeContext";
import { Button } from "@/components/ui/core/button";

const themeIcons = {
  light: Sun,
  dark: Moon,
};

const themeLabels = {
  light: "Light Mode",
  dark: "Dark Mode", 
};

interface ThemeToggleProps {
  variant?: "icon" | "dropdown" | "inline";
  showLabel?: boolean;
  size?: "sm" | "md" | "lg";
}

export default function ThemeToggle({ 
  variant = "icon", 
  showLabel = false,
  size = "md" 
}: ThemeToggleProps) {
  const { theme, resolvedTheme, setTheme, toggleTheme } = useTheme();

  const iconSizes = {
    sm: "h-4 w-4",
    md: "h-5 w-5", 
    lg: "h-6 w-6"
  };

  const buttonSizes = {
    sm: "p-2",
    md: "p-2.5",
    lg: "p-3"
  };

  if (variant === "dropdown") {
    return (
      <div className="relative group">
        <Button
          variant="ghost"
          size="sm"
          className={`${buttonSizes[size]} hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors flex items-center justify-center`}
          aria-label={`Current theme: ${themeLabels[theme]}. Click to change.`}
        >
          <div className="flex items-center justify-center gap-2">
            <motion.div
              key={theme}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center"
            >
              {(() => {
                const Icon = themeIcons[theme];
                return <Icon className={iconSizes[size]} />;
              })()}
            </motion.div>
            {showLabel && (
              <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                {themeLabels[theme]}
              </span>
            )}
          </div>
        </Button>

        {/* Dropdown Menu */}
        <div className="absolute right-0 mt-2 w-36 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
          {(Object.keys(themeIcons) as Array<keyof typeof themeIcons>).map((themeOption) => {
            const Icon = themeIcons[themeOption];
            const isActive = theme === themeOption;
            
            return (
              <button
                key={themeOption}
                onClick={() => setTheme(themeOption)}
                className={`w-full flex items-center px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                  isActive ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                <Icon className="h-4 w-4 mr-3" />
                {themeLabels[themeOption]}
                {isActive && (
                  <motion.div
                    layoutId="active-theme"
                    className="ml-auto w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  if (variant === "inline") {
    return (
      <div className="flex items-center space-x-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
        {(Object.keys(themeIcons) as Array<keyof typeof themeIcons>).map((themeOption) => {
          const Icon = themeIcons[themeOption];
          const isActive = theme === themeOption;
          
          return (
            <button
              key={themeOption}
              onClick={() => setTheme(themeOption)}
              className={`${buttonSizes[size]} rounded-md transition-all duration-200 ${
                isActive 
                  ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm' 
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
              aria-label={themeLabels[themeOption]}
            >
              <Icon className={iconSizes[size]} />
            </button>
          );
        })}
      </div>
    );
  }

  // Default icon variant
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className={`${buttonSizes[size]} hover:bg-gray-100 dark:hover:bg-gray-800 
                  light-mode-subtle rounded-lg transition-all duration-300 group 
                  flex items-center justify-center min-w-[44px] min-h-[44px]`}
      aria-label={`Current theme: ${themeLabels[theme]}. Click to toggle theme.`}
    >
      <div className="flex items-center justify-center gap-2 w-full h-full">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={`${theme}-${resolvedTheme}`}
            initial={{ scale: 0.8, opacity: 0, rotate: -180 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0.8, opacity: 0, rotate: 180 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="group-hover:scale-110 transition-transform duration-200 
                       flex items-center justify-center flex-shrink-0"
          >
            {(() => {
              // Show the next theme icon to indicate what will happen on click
              let iconTheme = theme;
              if (theme === 'light') iconTheme = 'dark';
              else iconTheme = 'light';
              
              const Icon = themeIcons[iconTheme];
              return <Icon className={iconSizes[size]} />;
            })()}
          </motion.div>
        </AnimatePresence>
        
        {showLabel && (
          <span className="text-sm font-medium text-gray-700 dark:text-gray-200 flex-1 text-center">
            {themeLabels[theme]}
          </span>
        )}
      </div>
    </Button>
  );
}
