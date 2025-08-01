"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/core";
import { Github, ExternalLink, Calendar, Star, Eye } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import AnimatedButton from "@/components/ui/animated/AnimatedButton";
import InteractiveCard from "./InteractiveCard";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  year: number;
  category: string;
  featured?: boolean;
  stats?: {
    stars?: number;
    views?: number;
    likes?: number;
  };
  delay?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  techStack,
  githubUrl,
  liveUrl,
  year,
  category,
  featured = false,
  stats,
  delay = 0
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  if (featured) {
    return (
      <InteractiveCard
        variant="featured"
        animation="fade"
        hover="magnetic"
        delay={delay}
        className="overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="grid lg:grid-cols-2 gap-0">
          <div className="relative overflow-hidden group">
            <motion.div
              className="relative h-80 lg:h-full"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src={imageUrl}
                alt={title}
                fill
                className={`object-cover transition-all duration-700 ${
                  imageLoaded ? 'blur-0 scale-100' : 'blur-md scale-105'
                }`}
                onLoad={() => setImageLoaded(true)}
              />
              
              {/* Overlay */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0.3 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Floating badges */}
              <motion.div 
                className="absolute top-4 left-4"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Badge variant="secondary" className="bg-white/90 text-gray-900 backdrop-blur-sm">
                  <Star className="w-3 h-3 mr-1" />
                  Featured
                </Badge>
              </motion.div>
              
              <motion.div 
                className="absolute top-4 right-4"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <Badge variant="outline" className="bg-white/90 text-gray-900 backdrop-blur-sm">
                  {year}
                </Badge>
              </motion.div>

              {/* Stats overlay */}
              {stats && (
                <motion.div 
                  className="absolute bottom-4 left-4 flex space-x-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {stats.stars && (
                    <div className="flex items-center text-white/90 text-sm">
                      <Star className="w-4 h-4 mr-1" />
                      {stats.stars}
                    </div>
                  )}
                  {stats.views && (
                    <div className="flex items-center text-white/90 text-sm">
                      <Eye className="w-4 h-4 mr-1" />
                      {stats.views}
                    </div>
                  )}
                </motion.div>
              )}
            </motion.div>
          </div>
          
          <div className="p-8 lg:p-12 flex flex-col justify-center space-y-6">
            <div className="flex items-center gap-2 text-gray-500">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">{year}</span>
              <Badge variant="outline" className="ml-2">{category}</Badge>
            </div>
            
            <motion.h3 
              className="text-3xl font-bold text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {title}
            </motion.h3>
            
            <motion.p 
              className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {description}
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {techStack.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-sm px-3 py-1">
                  {tech}
                </Badge>
              ))}
            </motion.div>
            
            <motion.div 
              className="flex gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {githubUrl && (
                <AnimatedButton variant="outline" size="lg" animation="scale" asChild>
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-hover"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                </AnimatedButton>
              )}
              {liveUrl && (
                <AnimatedButton variant="primary" size="lg" animation="glow" asChild>
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-hover"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                </AnimatedButton>
              )}
            </motion.div>
          </div>
        </div>
      </InteractiveCard>
    );
  }

  return (
    <InteractiveCard
      variant="default"
      animation="scale"
      hover="lift"
      delay={delay}
      className="overflow-hidden group cursor-hover"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col h-full">
        {/* Image Section */}
        <div className="relative overflow-hidden">
          <motion.div
            className="relative h-48"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src={imageUrl}
              alt={title}
              fill
              className={`object-cover transition-all duration-500 ${
                imageLoaded ? 'blur-0' : 'blur-sm'
              }`}
              onLoad={() => setImageLoaded(true)}
            />
            
            {/* Gradient overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
          
          {/* Badges */}
          <div className="absolute top-4 right-4">
            <Badge variant="secondary" className="bg-white/90 text-gray-900 backdrop-blur-sm text-xs">
              {year}
            </Badge>
          </div>
          
          <div className="absolute top-4 left-4">
            <Badge variant="outline" className="bg-white/90 text-gray-900 backdrop-blur-sm border-white/50 text-xs">
              {category}
            </Badge>
          </div>
        </div>
        
        {/* Content Section */}
        <div className="p-6 flex-1 flex flex-col">
          <motion.h3 
            className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {title}
          </motion.h3>
          
          <motion.p 
            className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3 mb-4 flex-1"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {description}
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-2 mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {techStack.slice(0, 3).map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
            {techStack.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{techStack.length - 3}
              </Badge>
            )}
          </motion.div>
          
          {stats && (
            <motion.div 
              className="flex items-center gap-4 text-sm text-gray-500 mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {stats.stars && (
                <div className="flex items-center">
                  <Star className="w-4 h-4 mr-1" />
                  {stats.stars}
                </div>
              )}
              {stats.views && (
                <div className="flex items-center">
                  <Eye className="w-4 h-4 mr-1" />
                  {stats.views}
                </div>
              )}
            </motion.div>
          )}
          
          <motion.div 
            className="flex gap-3 mt-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {githubUrl && (
              <AnimatedButton variant="outline" size="sm" animation="scale" className="flex-1" asChild>
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-hover"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </a>
              </AnimatedButton>
            )}
            {liveUrl && (
              <AnimatedButton variant="primary" size="sm" animation="bounce" className="flex-1" asChild>
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-hover"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Demo
                </a>
              </AnimatedButton>
            )}
          </motion.div>
        </div>
      </div>
    </InteractiveCard>
  );
};

export default ProjectCard;
