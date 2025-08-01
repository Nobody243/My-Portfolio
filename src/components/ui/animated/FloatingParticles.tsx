"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface FloatingParticlesProps {
  count?: number;
  colors?: string[];
  className?: string;
}

const FloatingParticles: React.FC<FloatingParticlesProps> = ({
  count = 30,
  colors = [
    "rgba(99, 102, 241, 0.3)",
    "rgba(139, 92, 246, 0.3)", 
    "rgba(236, 72, 153, 0.3)",
    "rgba(59, 130, 246, 0.3)"
  ],
  className = ""
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={`fixed inset-0 overflow-hidden pointer-events-none select-none ${className}`} style={{ pointerEvents: 'none' }}>
        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-tl from-pink-500/5 via-transparent to-indigo-500/5 pointer-events-none" />
      </div>
    );
  }

  // Generate particles with deterministic values
  const particles = Array.from({ length: count }, (_, i) => {
    const seed = i + 1;
    return {
      id: i,
      x: (seed * 37) % 100,
      y: (seed * 73) % 100,
      size: (seed % 3) + 2,
      color: colors[seed % colors.length],
      duration: (seed % 15) + 10,
      delay: (seed % 5),
      animationOffset: (seed * 23) % 80 - 40,
    };
  });

  return (
    <div className={`fixed inset-0 overflow-hidden pointer-events-none select-none ${className}`} style={{ pointerEvents: 'none' }}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full blur-sm pointer-events-none"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            pointerEvents: 'none',
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, particle.animationOffset, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-tl from-pink-500/5 via-transparent to-indigo-500/5 pointer-events-none" />
    </div>
  );
};

export default FloatingParticles;
