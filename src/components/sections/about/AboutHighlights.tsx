"use client";

import { motion } from "framer-motion";
import InteractiveCard from "@/components/features/InteractiveCard";
import AnimatedText from "@/components/ui/animated/AnimatedText";
import { Rocket, Palette, Target, Heart, Sparkles } from "lucide-react";
import { staggerContainer, fadeInUp } from "@/lib/advanced-animations";

export default function AboutHighlights() {
  const highlights = [
    { icon: Rocket, title: "Fast Delivery", description: "Quick turnaround without compromising quality" },
    { icon: Palette, title: "Creative Design", description: "Beautiful, user-centric interfaces" },
    { icon: Target, title: "Problem Solver", description: "Strategic thinking meets technical execution" },
    { icon: Heart, title: "Passionate", description: "Genuinely love what I do" }
  ];

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="mb-20"
    >
      <AnimatedText
        variant="subheading"
        animation="fadeUp"
        className="text-center mb-12"
        as="h2"
      >
        What I Bring to the Table
        <motion.span className="inline-block ml-2">
          <Sparkles className="w-8 h-8 text-yellow-500" />
        </motion.span>
      </AnimatedText>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {highlights.map((highlight, index) => (
          <motion.div key={highlight.title} variants={fadeInUp}>
            <InteractiveCard
              variant="default"
              animation="rotate"
              hover="glow"
              delay={index * 0.1}
              className="text-center p-6 h-full"
            >
              <motion.div
                className="inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 text-white mb-4"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <highlight.icon className="w-6 h-6" />
              </motion.div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                {highlight.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {highlight.description}
              </p>
            </InteractiveCard>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
