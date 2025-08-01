"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/core/badge";
import { Star, Sparkles } from "lucide-react";
import { projects } from "@/data/projects";
import { staggerContainer, fadeInUp } from "@/lib/advanced-animations";
import AnimatedText from "@/components/ui/animated/AnimatedText";
import ProjectGrid from "@/components/ui/cards/ProjectGrid";
import ProjectCard from "@/components/ui/cards/ProjectCard";
import { CTASection } from "@/components/sections/CTASection";

export default function ProjectShowcase() {
  // Get featured project (first project or one marked as featured)
  const featuredProject = projects.find(p => p.featured) || projects[0];
  // Get non-featured projects
  const otherProjects = projects.filter(p => p.id !== featuredProject?.id);

  return (
    <section className="section-padding gradient-bg-light relative overflow-hidden">
      <div className="container-default relative z-10">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="text-center-responsive mb-16"
        >
          <AnimatedText
            variant="heading"
            animation="fadeUp"
            className="mb-6"
            gradient
            as="h1"
          >
            My Projects
            <span className="relative">
              <motion.div
                className="absolute -top-2 -right-2"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-8 h-8 text-yellow-500" />
              </motion.div>
            </span>
          </AnimatedText>
          
          <AnimatedText
            variant="body"
            animation="fadeUp"
            delay={0.2}
            className="max-width-prose text-xl"
          >
            A collection of projects I have worked on, showcasing my skills in web development, 
            mobile applications, and software engineering. Each project represents a unique 
            challenge and creative solution.
          </AnimatedText>
        </motion.div>

        {/* Featured Project */}
        {featuredProject && (
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="show"
            className="mb-20"
          >
            <div className="text-center mb-8">
              <Badge variant="outline" className="px-6 py-3 text-gray-800 text-lg bg-gradient-to-r from-yellow-100 to-orange-300 border-yellow-300">
                <Star className="w-5 h-5 mr-2 text-gray-800" />
                Featured Project
              </Badge>
            </div>
            
            <div className="max-w-1xl mx-auto">
              <ProjectCard
                {...featuredProject}
                featured={true}
              />
            </div>
          </motion.div>
        )}

        {/* Projects Grid with Filters */}
        {otherProjects.length > 0 && (
          <ProjectGrid 
            projects={otherProjects}
            categories={["All", "Web", "Mobile", "Desktop", "API"]}
            showFilters={true}
            showViewToggle={true}
            className="mb-20 "
          />
        )}

        {/* Call to Action */}
        <CTASection
          title="Interested in working together?"
          description="I am always open to discussing new opportunities and exciting projects. Let's create something amazing together!"
          primaryButton={{
            text: "Get In Touch",
            href: "/contact",
            icon: Sparkles
          }}
        />
      </div>
    </section>
  );
}