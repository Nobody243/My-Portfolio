"use client";

import { motion } from "framer-motion";
import AnimatedText from "@/components/ui/animated/AnimatedText";
import { staggerContainer } from "@/lib/advanced-animations";

export default function AboutHeader() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="text-center-responsive mb-16"
    >
      <AnimatedText
        variant="heading"
        animation="fadeUp"
        className="mb-6"
        gradient
        as="h1"
      >
        About Me
      </AnimatedText>
      <AnimatedText
        variant="body"
        animation="fadeUp"
        delay={0.2}
        className="text-xl"
      >
        Get to know me better - my journey, passion, and what drives me
      </AnimatedText>
    </motion.div>
  );
}
