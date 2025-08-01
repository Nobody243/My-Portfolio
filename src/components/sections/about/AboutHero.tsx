"use client";

import { motion } from "framer-motion";
import InteractiveCard from "@/components/features/InteractiveCard";
import AnimatedButton from "@/components/ui/animated/AnimatedButton";
import AnimatedText from "@/components/ui/animated/AnimatedText";
import { Download, Mail, MapPin, Award } from "lucide-react";
import { aboutData } from "@/data/about";
import { fadeInUp, staggerContainer } from "@/lib/advanced-animations";

export default function AboutHero() {
  return (
    <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
      {/* Profile Image */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="show"
        className="text-center lg:text-left"
      >
        <InteractiveCard
          variant="glow"
          animation="scale"
          hover="magnetic"
          className="inline-block p-2 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500"
        >
          <div className="w-80 h-80 rounded-2xl bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
            <motion.div
              className="text-gray-500 dark:text-gray-400 text-8xl"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              👨‍💻
            </motion.div>
          </div>
        </InteractiveCard>
        
        {/* Quick Actions */}
        <motion.div
          className="flex flex-wrap gap-4 justify-center lg:justify-start mt-8"
          variants={fadeInUp}
          initial="hidden"
          animate="show"
        >
          <AnimatedButton variant="primary" animation="glow" size="lg">
            <Download className="w-5 h-5 mr-2" />
            Download CV
          </AnimatedButton>
          <AnimatedButton variant="outline" animation="scale" size="lg" asChild>
            <a href="/contact">
              <Mail className="w-5 h-5 mr-2" />
              Contact Me
            </a>
          </AnimatedButton>
        </motion.div>
      </motion.div>

      {/* Bio Content */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="show"
        className="space-y-8"
      >
        <div>
          <AnimatedText
            variant="subheading"
            animation="fadeLeft"
            className="mb-6"
            as="h2"
          >
            Hi, I&apos;m {aboutData.profile.name}
            <motion.span
              className="inline-block ml-2"
              animate={{ rotate: [0, 20, 0] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
            >
              👋
            </motion.span>
          </AnimatedText>
          
          <div className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
            {aboutData.bio.map((paragraph, index) => (
              <AnimatedText
                key={index}
                animation="fadeUp"
                delay={index * 0.1}
                as="p"
              >
                {paragraph}
              </AnimatedText>
            ))}
          </div>
        </div>

        {/* Quick Info */}
        <motion.div
          className="grid grid-cols-2 gap-4"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-blue-500" />
            <span>San Francisco, CA</span>
          </motion.div>
          <motion.div variants={fadeInUp} className="flex items-center gap-3">
            <Award className="w-5 h-5 text-purple-500" />
            <span>5+ Years Experience</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
