"use client";

import { motion } from "framer-motion";
import InteractiveCard from "@/components/features/InteractiveCard";
import AnimatedText from "@/components/ui/animated/AnimatedText";
import { Badge } from "@/components/ui/core/badge";
import { aboutData } from "@/data/about";
import { staggerContainer, fadeInUp } from "@/lib/advanced-animations";

export default function AboutExperience() {
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
        Professional Journey
      </AnimatedText>
      
      <div className="space-y-8">
        {aboutData.experience.map((exp, index) => (
          <motion.div key={exp.company} variants={fadeInUp}>
            <InteractiveCard
              variant="default"
              animation="slide"
              hover="lift"
              delay={index * 0.1}
              className="relative overflow-hidden"
            >
              <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-${exp.color}-400 to-${exp.color}-600`} />
              <div className="p-8 pl-12">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {exp.title}
                    </h3>
                    <p className={`text-${exp.color}-600 dark:text-${exp.color}-400 font-medium`}>
                      {exp.company}
                    </p>
                  </div>
                  <Badge variant="outline" className="w-fit mt-2 lg:mt-0">
                    {exp.period}
                  </Badge>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </InteractiveCard>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
