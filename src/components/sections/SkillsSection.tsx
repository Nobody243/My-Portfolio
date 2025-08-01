"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/core";
import { TextFillEffect } from "@/components/ui/animated/TextFillEffect";
import { Code, Palette, Rocket, LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

const features: Feature[] = [
  {
    icon: Code,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and efficient code following best practices.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Palette,
    title: "Creative Design",
    description: "Crafting beautiful, intuitive interfaces that provide exceptional experiences.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Rocket,
    title: "Fast Delivery",
    description: "Delivering high-quality solutions on time with attention to detail.",
    color: "from-orange-500 to-red-500"
  }
];

export const SkillsSection = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            <TextFillEffect
              text="What I Bring"
              className="text-gray-900 dark:text-gray-100"
              delay={0.5}
              duration={4}
              as="span"
            />
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A combination of technical expertise and creative vision
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ 
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="group cursor-pointer"
            >
              <Card className="p-8 text-center border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800 h-full">
                <motion.div 
                  className={`mx-auto w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300`}
                >
                  <feature.icon className="h-8 w-8 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                  <TextFillEffect
                    text={feature.title}
                    className="font-bold"
                    delay={index * 0.3 + 1}
                    duration={4}
                    as="span"
                  />
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
