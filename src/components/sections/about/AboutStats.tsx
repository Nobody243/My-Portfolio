"use client";

import { motion } from "framer-motion";
import InteractiveCard from "@/components/features/InteractiveCard";
import { Code, Users, Calendar, Coffee } from "lucide-react";
import { staggerContainer, fadeInUp } from "@/lib/advanced-animations";

export default function AboutStats() {
  const stats = [
    { icon: Code, label: "Projects Completed", value: "50+", color: "text-blue-500" },
    { icon: Users, label: "Happy Clients", value: "25+", color: "text-green-500" },
    { icon: Calendar, label: "Years Experience", value: "5+", color: "text-purple-500" },
    { icon: Coffee, label: "Cups of Coffee", value: "1000+", color: "text-orange-500" },
  ];

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="mb-20"
    >
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div key={stat.label} variants={fadeInUp}>
            <InteractiveCard
              variant="minimal"
              animation="scale"
              hover="lift"
              delay={index * 0.1}
              className="text-center p-8 backdrop-blur-sm"
            >
              <motion.div
                className={`inline-flex p-4 rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 mb-4`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </motion.div>
              <motion.div
                className="text-3xl font-bold text-gray-900 dark:text-white mb-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
              >
                {stat.value}
              </motion.div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </InteractiveCard>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
