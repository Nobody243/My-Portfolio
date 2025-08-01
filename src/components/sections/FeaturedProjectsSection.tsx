"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/core";
import { Card } from "@/components/ui/core";
import { TextFillEffect } from "@/components/ui/animated/TextFillEffect";
import { EnhancedButton } from "@/components/ui/animated/EnhancedButton";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { projects } from "@/data/projects";

export const FeaturedProjectsSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 
                        bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 
                        dark:from-black dark:via-gray-900 dark:to-blue-900">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white 
                         mb-4 sm:mb-6 px-4">
            <TextFillEffect
              text="Featured Projects"
              className="text-white"
              delay={0.5}
              duration={4}
              as="span"
            />
          </h2>
          <p className="text-base sm:text-lg text-gray-300 
                        max-w-xl sm:max-w-2xl mx-auto px-4">
            A showcase of my recent work and creative solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
                        gap-6 sm:gap-8">
          {projects.slice(0, 3).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="group cursor-pointer"
            >
              <Card className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 h-full">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-blue-600 text-white">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    <TextFillEffect
                      text={project.title}
                      className="font-bold"
                      delay={index * 0.2 + 0.5}
                      duration={4}
                      as="span"
                    />
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 3).map((tech: string) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">{project.year}</span>
                    <motion.div
                      whileHover={{ x: 3 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
                    </motion.div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <EnhancedButton
            variant="outline"
            size="lg"
            icon={ArrowRight}
            iconPosition="right"
            iconAnimation="slide"
            href="/projects"
            textFill={true}
          >
            View All Projects
          </EnhancedButton>
        </motion.div>
      </div>
    </section>
  );
};
