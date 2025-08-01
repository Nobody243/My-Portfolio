// Advanced Animation System for Portfolio
import { Variants } from "framer-motion";

// === CORE ANIMATIONS ===
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.25, 0.46, 0.45, 0.94],
      type: "spring",
      damping: 20,
      stiffness: 100
    }
  }
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -60 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -100 },
  show: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 100 },
  show: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.6, 
      ease: [0.25, 0.46, 0.45, 0.94],
      type: "spring",
      damping: 15,
      stiffness: 120
    }
  }
};

export const rotateIn: Variants = {
  hidden: { opacity: 0, rotate: -180, scale: 0.5 },
  show: { 
    opacity: 1, 
    rotate: 0, 
    scale: 1,
    transition: { 
      duration: 1.2, 
      ease: [0.25, 0.46, 0.45, 0.94],
      type: "spring"
    }
  }
};

// === CONTAINER ANIMATIONS ===
export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

export const staggerFast: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

export const staggerSlow: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.3
    }
  }
};

// === INTERACTIVE ANIMATIONS ===
export const hoverLift = {
  whileHover: { 
    y: -8, 
    scale: 1.02,
    transition: { 
      type: "spring", 
      stiffness: 400, 
      damping: 25 
    }
  },
  whileTap: { 
    scale: 0.98,
    transition: { duration: 0.1 }
  }
};

export const hoverScale = {
  whileHover: { 
    scale: 1.05,
    transition: { 
      type: "spring", 
      stiffness: 300, 
      damping: 20 
    }
  },
  whileTap: { 
    scale: 0.95,
    transition: { duration: 0.1 }
  }
};

export const hoverGlow = {
  whileHover: { 
    boxShadow: "0 0 25px rgba(99, 102, 241, 0.5)",
    transition: { duration: 0.3 }
  }
};

export const hoverRotate = {
  whileHover: { 
    rotate: 360,
    transition: { duration: 0.6 }
  }
};

// === CONTINUOUS ANIMATIONS ===
export const floatingY: Variants = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const floatingX: Variants = {
  animate: {
    x: [-5, 5, -5],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const pulse: Variants = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [1, 0.8, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const rotate360: Variants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

export const breathe: Variants = {
  animate: {
    scale: [1, 1.02, 1],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// === COMPLEX ANIMATIONS ===
export const slideUpReveal: Variants = {
  hidden: { 
    opacity: 0, 
    y: 100,
    clipPath: "inset(100% 0 0 0)"
  },
  show: { 
    opacity: 1, 
    y: 0,
    clipPath: "inset(0% 0 0 0)",
    transition: { 
      duration: 1.2, 
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

export const morphIn: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0,
    borderRadius: "50%"
  },
  show: { 
    opacity: 1, 
    scale: 1,
    borderRadius: "8px",
    transition: { 
      duration: 1,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

export const textReveal: Variants = {
  hidden: { 
    opacity: 0,
    y: 20,
    clipPath: "inset(0 0 100% 0)"
  },
  show: { 
    opacity: 1,
    y: 0,
    clipPath: "inset(0 0 0% 0)",
    transition: { 
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

// === PAGE TRANSITIONS ===
export const pageTransition = {
  initial: { opacity: 0, x: 300 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -300 },
  transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
};

export const slideFromBottom = {
  initial: { opacity: 0, y: "100vh" },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: "100vh" },
  transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
};

// === MAGNETIC EFFECTS ===
export const magneticEffect = {
  whileHover: {
    scale: 1.1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  }
};

// === GRADIENT ANIMATIONS ===
export const gradientShift: Variants = {
  animate: {
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// === ELASTIC ANIMATIONS ===
export const elasticIn: Variants = {
  hidden: { scale: 0, rotate: -180 },
  show: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 10,
      duration: 1.5
    }
  }
};

export const bounceIn: Variants = {
  hidden: { scale: 0, y: -100 },
  show: {
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 8,
      duration: 1.2
    }
  }
};

// === UTILITY FUNCTIONS ===
export const createStagger = (staggerDelay: number = 0.1, childrenDelay: number = 0.2) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: childrenDelay
    }
  }
});

export const createDelay = (delay: number): Variants => ({
  hidden: { opacity: 0, y: 60 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.25, 0.46, 0.45, 0.94],
      type: "spring",
      damping: 20,
      stiffness: 100,
      delay
    }
  }
});
