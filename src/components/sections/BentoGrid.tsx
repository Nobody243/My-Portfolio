"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/core";
import { Badge } from "@/components/ui/core";
import { aboutData } from "@/data/about";
import { stats } from "@/data/testimonials";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { 
  responsiveTypography, 
  responsiveLayout, 
  responsiveComponents,
  responsiveClasses 
} from "@/lib/utils/responsive";

export default function BentoGrid() {
  return (
    <section className={responsiveLayout.section("bg-gray-50 dark:bg-gray-900")}>
      <div className={responsiveLayout.container()}>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <motion.h2 
            variants={fadeInUp} 
            className={responsiveTypography.h2("text-gray-900 dark:text-white mb-4 sm:mb-6")}
          >
            Skills & Expertise
          </motion.h2>
          <motion.p 
            variants={fadeInUp} 
            className={responsiveTypography.bodyLarge("text-gray-600 dark:text-gray-300 max-w-3xl mx-auto")}
          >
            A comprehensive overview of my technical skills and professional experience
          </motion.p>
        </motion.div>

        {/* Stats Cards - Responsive Grid */}
        <div className={responsiveLayout.grid.stats("mb-8 sm:mb-12 lg:mb-16")}>
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Card className={responsiveComponents.card("text-center hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700")}>
                <div className="text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3">{stat.icon}</div>
                <div className={responsiveClasses({
                  xs: 'text-2xl',
                  sm: 'text-3xl',
                  md: 'text-4xl'
                }) + " font-bold text-gray-900 dark:text-white mb-1 sm:mb-2"}>
                  {stat.number}
                </div>
                <div className={responsiveTypography.caption("text-gray-600 dark:text-gray-400")}>
                  {stat.label}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Main Bento Grid - Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {/* Large Skills Card */}
          <motion.div 
            variants={fadeInUp}
            className="lg:col-span-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Card className={responsiveComponents.card("h-full bg-gradient-to-br from-purple-500 to-blue-600 text-white border-0 shadow-xl lg:shadow-2xl")}>
              <h3 className={responsiveTypography.h3("text-white mb-4 sm:mb-6")}>
                Technical Skills
              </h3>
              <div className={responsiveLayout.grid.skills()}>
                {aboutData.skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Badge 
                      variant="secondary" 
                      className={responsiveClasses({
                        xs: 'text-xs py-1 px-2',
                        sm: 'text-sm py-2 px-3',
                        md: 'text-sm py-2 px-3'
                      }) + " bg-white/20 text-white border-white/30 hover:bg-white/30 transition-colors w-full justify-center"}
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Profile Card */}
          <motion.div 
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Card className={responsiveComponents.card("h-full bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300")}>
              <div className="text-center">
                <div className={responsiveComponents.avatar('lg', 'mx-auto bg-gradient-to-br from-purple-400 to-blue-600 flex items-center justify-center text-white mb-4 sm:mb-6')}>
                  <span className={responsiveClasses({
                    xs: 'text-2xl',
                    sm: 'text-3xl',
                    md: 'text-4xl'
                  })}>
                    👨‍💻
                  </span>
                </div>
                <h3 className={responsiveTypography.h4("text-gray-900 dark:text-white mb-2")}>
                  {aboutData.profile.name}
                </h3>
                <p className={responsiveTypography.body("text-gray-600 dark:text-gray-400 mb-3 sm:mb-4")}>
                  {aboutData.profile.role}
                </p>
                <div className={responsiveTypography.caption("text-gray-500 dark:text-gray-500")}>
                  {aboutData.profile.experience} of experience
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Experience Timeline Cards - Responsive Grid */}
        <div className={responsiveLayout.grid.projects("mt-6 sm:mt-8 lg:mt-12")}>
          {aboutData.experience.slice(0, 3).map((exp, index) => (
            <motion.div
              key={exp.company}
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ 
                type: "spring" as const,
                stiffness: 300,
                damping: 20,
                delay: index * 0.1 
              }}
            >
              <Card className={responsiveComponents.card("h-full bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300")}>
                <div className={`w-3 h-3 rounded-full bg-${exp.color}-500 mb-3 sm:mb-4`}></div>
                <h4 className={responsiveTypography.h4("text-gray-900 dark:text-white mb-2")}>
                  {exp.title}
                </h4>
                <p className={responsiveTypography.body(`text-${exp.color}-600 dark:text-${exp.color}-400 mb-2 sm:mb-3`)}>
                  {exp.company} • {exp.period}
                </p>
                <p className={responsiveTypography.body("text-gray-600 dark:text-gray-400")}>
                  {exp.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
