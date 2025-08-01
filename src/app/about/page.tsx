"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import AboutHeader from "@/components/sections/about/AboutHeader";
import AboutHero from "@/components/sections/about/AboutHero";
import AboutStats from "@/components/sections/about/AboutStats";
import AboutHighlights from "@/components/sections/about/AboutHighlights";
import AboutSkills from "@/components/sections/about/AboutSkills";
import AboutExperience from "@/components/sections/about/AboutExperience";
import { CTASection } from "@/components";

export default function About() {
  return (
    <div className="gradient-bg-light min-h-screen relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 25, repeat: Infinity }}
        />
      </div>

      <div className="container-default section-padding relative z-10">
        {/* Header Section */}
        <AboutHeader />

        {/* Hero Section */}
        <AboutHero />

        {/* Stats Section */}
        <AboutStats />

        {/* Highlights Section */}
        <AboutHighlights />

        {/* Skills Section */}
        <AboutSkills />

        {/* Experience Section */}
        <AboutExperience />

        {/* Call to Action */}
        <CTASection
          title="Interested in working together?"
          description=" I am always open to discussing new opportunities and exciting projects. Let&apos;s create something amazing together!"
          primaryButton={{
            text: "Get In Touch",
            href: "/contact",
            icon: Sparkles
          }}
        />
      </div>
    </div>
  );
}
