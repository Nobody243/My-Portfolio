"use client";

import { motion } from "framer-motion";
import AnimatedText from "@/components/ui/animated/AnimatedText";
import InteractiveCard from "@/components/features/InteractiveCard";
import { fadeInUp } from "@/lib/advanced-animations";

interface SocialLink {
  name: string;
  url: string;
  icon: string;
  description: string;
}

export default function SocialLinks() {
  const socialLinks: SocialLink[] = [
    { name: "LinkedIn", url: "#", icon: "💼", description: "Professional network" },
    { name: "GitHub", url: "#", icon: "🐱", description: "Code repositories" },
    { name: "Twitter", url: "#", icon: "🐦", description: "Daily thoughts" },
    { name: "Medium", url: "#", icon: "📝", description: "Technical articles" }
  ];

  return (
    <motion.div variants={fadeInUp} className="pt-4">
      <div className="text-center">
        <AnimatedText
          variant="subheading"
          animation="fadeUp"
          className="mb-6 text-center text-lg"
          as="h3"
        >
          🌐 Connect Online
        </AnimatedText>
        
        <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
        {socialLinks.map((social, index) => (
          <motion.div key={social.name} variants={fadeInUp}>
            <InteractiveCard
              variant="minimal"
              animation="scale"
              hover="magnetic"
              delay={index * 0.05}
              className="p-4 text-center backdrop-blur-sm cursor-pointer group"
            >
              <motion.div
                className="text-xl mb-1"
                whileHover={{ scale: 1.3, rotate: 15 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {social.icon}
              </motion.div>
              <h4 className="font-semibold text-gray-900 dark:text-white text-xs">
                {social.name}
              </h4>
              <p className="text-gray-500 dark:text-gray-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                {social.description}
              </p>
            </InteractiveCard>
          </motion.div>
        ))}
        </div>
      </div>
    </motion.div>
  );
}
