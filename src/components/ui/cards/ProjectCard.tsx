"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/core";
import { Github, ExternalLink, Star, Eye } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.2 }
      }}
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer ${
        featured ? 'ring-2 ring-blue-500 ring-opacity-50' : ''
      }`}
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

          {featured && (
            <div className="absolute bottom-4 left-4">
              <Badge variant="secondary" className="bg-blue-500 text-white backdrop-blur-sm text-xs">
                <Star className="w-3 h-3 mr-1" />
                Featured
              </Badge>
            </div>
          )}
        </div>
        
        {/* Content Section */}
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
            {title}
          </h3>
          
          <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3 mb-4 flex-1">
            {description}
          </p>
          
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
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
          </div>
          
          {/* Stats */}
          {stats && (
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
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
            </div>
          )}
          
          {/* Action Buttons */}
          <div className="flex gap-3 mt-auto">
            {githubUrl && (
              <motion.a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Github className="w-4 h-4 mr-2" />
                Code
              </motion.a>
            )}
            {liveUrl && (
              <motion.a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Demo
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
