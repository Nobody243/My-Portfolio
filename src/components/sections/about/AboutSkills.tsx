"use client";

import { motion } from "framer-motion";
import InteractiveCard from "@/components/features/InteractiveCard";
import AnimatedText from "@/components/ui/animated/AnimatedText";
import { aboutData } from "@/data/about";
import { staggerContainer, fadeInUp } from "@/lib/advanced-animations";

export default function AboutSkills() {
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
        Skills & Technologies
      </AnimatedText>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {aboutData.skills.map((skill, index) => (
          <motion.div
            key={skill}
            variants={fadeInUp}
            custom={index}
          >
            <InteractiveCard
              variant="minimal"
              animation="scale"
              hover="lift"
              delay={index * 0.05}
              className="text-center p-4 backdrop-blur-sm"
            >
              <motion.span
                className="text-gray-700 dark:text-gray-300 font-medium text-sm"
                whileHover={{ scale: 1.05 }}
              >
                {skill}
              </motion.span>
            </InteractiveCard>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
