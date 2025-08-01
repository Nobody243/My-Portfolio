"use client";

import { motion } from "framer-motion";
import { TextFillEffect } from "@/components/ui/animated/TextFillEffect";
import { Code, Users, Calendar, Coffee, LucideIcon } from "lucide-react";

interface StatItem {
  label: string;
  value: string;
  icon: LucideIcon;
  color: string;
}

const stats: StatItem[] = [
  { label: "Projects Completed", value: "50+", icon: Code, color: "from-blue-500 to-cyan-500" },
  { label: "Happy Clients", value: "25+", icon: Users, color: "from-green-500 to-emerald-500" },
  { label: "Years Experience", value: "5+", icon: Calendar, color: "from-purple-500 to-pink-500" },
  { label: "Cups of Coffee", value: "1000+", icon: Coffee, color: "from-orange-500 to-red-500" },
];

export const StatsSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 
                        bg-gray-50 dark:bg-gray-800/50 
                        relative overflow-hidden">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 
                     gap-4 sm:gap-6 lg:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.1, 
                duration: 0.6
              }}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="text-center group cursor-pointer"
            >
              <motion.div 
                className={`mx-auto w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 
                           bg-gradient-to-r ${stat.color} 
                           rounded-xl flex items-center justify-center 
                           mb-3 sm:mb-4 
                           group-hover:shadow-xl group-hover:scale-110
                           transition-all duration-300`}
                whileHover={{ rotate: 5 }}
              >
                <stat.icon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-white" />
              </motion.div>
              
              <motion.div
                className="text-2xl sm:text-3xl lg:text-4xl font-bold 
                           text-gray-900 dark:text-gray-100 mb-1 sm:mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.1 + 0.3, 
                  type: "spring", 
                  stiffness: 200 
                }}
                whileHover={{ scale: 1.1 }}
              >
                <TextFillEffect
                  text={stat.value}
                  className="font-bold"
                  delay={index * 0.2 + 1}
                  duration={4}
                  as="span"
                />
              </motion.div>
              
              <p className="text-xs sm:text-sm lg:text-base 
                           text-gray-600 dark:text-gray-300 
                           font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
