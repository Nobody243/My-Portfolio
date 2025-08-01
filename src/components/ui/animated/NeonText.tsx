"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface NeonTextProps {
  text: string;
  className?: string;
  colorSet?: 'blue' | 'purple' | 'cyan' | 'emerald' | 'gradient';
  intensity?: 'subtle' | 'medium' | 'strong';
  enableWave?: boolean;
  enableGlow?: boolean;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
}

export function NeonText({ 
  text, 
  className = "",
  colorSet = 'blue',
  intensity = 'medium',
  enableWave = true,
  enableGlow = true,
  as: Component = 'span'
}: NeonTextProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const colorSets = {
    blue: {
      primary: '#3b82f6',
      secondary: '#1d4ed8',
      glow: 'rgba(59, 130, 246, 0.6)'
    },
    purple: {
      primary: '#8b5cf6',
      secondary: '#7c3aed',
      glow: 'rgba(139, 92, 246, 0.6)'
    },
    cyan: {
      primary: '#06b6d4',
      secondary: '#0891b2',
      glow: 'rgba(6, 182, 212, 0.6)'
    },
    emerald: {
      primary: '#10b981',
      secondary: '#059669',
      glow: 'rgba(16, 185, 129, 0.6)'
    },
    gradient: {
      primary: 'linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899)',
      secondary: '#8b5cf6',
      glow: 'rgba(139, 92, 246, 0.6)'
    }
  };

  const intensitySettings = {
    subtle: {
      blur: '5px',
      spread: '2px',
      opacity: 0.3
    },
    medium: {
      blur: '10px',
      spread: '4px',
      opacity: 0.5
    },
    strong: {
      blur: '15px',
      spread: '6px',
      opacity: 0.7
    }
  };

  const colors = colorSets[colorSet];
  const settings = intensitySettings[intensity];

  const neonStyle = {
    color: colorSet === 'gradient' ? 'transparent' : colors.primary,
    background: colorSet === 'gradient' ? colors.primary : 'transparent',
    backgroundClip: colorSet === 'gradient' ? 'text' : 'initial',
    WebkitBackgroundClip: colorSet === 'gradient' ? 'text' : 'initial',
    textShadow: enableGlow ? `
      0 0 ${settings.blur} ${colors.glow},
      0 0 ${settings.spread} ${colors.glow},
      0 0 ${parseInt(settings.spread) * 2}px ${colors.glow}
    ` : 'none',
    filter: enableGlow ? `drop-shadow(0 0 ${settings.blur} ${colors.glow})` : 'none'
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className="relative inline-block"
    >
      <Component
        className={`font-bold ${className}`}
        style={neonStyle}
      >
        {text.split('').map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={enableWave ? {
              opacity: 1,
              scale: 1,
              textShadow: [
                `0 0 ${settings.blur} ${colors.glow}`,
                `0 0 ${parseInt(settings.blur) * 2}px ${colors.glow}`,
                `0 0 ${settings.blur} ${colors.glow}`
              ]
            } : { opacity: 1, scale: 1 }}
            transition={{
              delay: index * 0.05,
              duration: enableWave ? 2 : 0.3,
              repeat: enableWave ? Infinity : 0,
              type: enableWave ? "tween" : "spring",
              stiffness: 300,
              ease: "easeInOut"
            }}
            style={{
              animationDelay: `${index * 0.1}s`,
              display: 'inline-block'
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </Component>
    </motion.div>
  );
}

export default NeonText;