"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import ProjectCard from "@/components/ui/cards/ProjectCard";
import { Badge } from "@/components/ui/core/badge";
import { Filter, Grid3X3, List } from "lucide-react";

interface Project {
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
}

interface ProjectGridProps {
  projects: Project[];
  categories?: string[];
  showFilters?: boolean;
  showViewToggle?: boolean;
  className?: string;
}

const ProjectGrid: React.FC<ProjectGridProps> = ({
  projects,
  categories = ["All", "Web", "Mobile", "Desktop", "API"],
  showFilters = true,
  showViewToggle = true,
  className = ""
}) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => 
        project.category.toLowerCase() === selectedCategory.toLowerCase()
      );

  // Get project count for each category
  const getCategoryCount = (category: string) => {
    if (category === "All") return projects.length;
    return projects.filter(p => p.category.toLowerCase() === category.toLowerCase()).length;
  };

  return (
    <div className={`space-y-8 ${className}`}>
      {/* Filter Controls */}
      {(showFilters || showViewToggle) && (
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          {/* Category Filters */}
          {showFilters && (
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                    selectedCategory === category
                      ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Filter className="w-4 h-4" />
                  {category}
                  <Badge 
                    variant="secondary" 
                    className={`ml-1 text-xs ${
                      selectedCategory === category 
                        ? 'bg-white/20 text-white' 
                        : 'bg-gray-200 dark:bg-gray-700'
                    }`}
                  >
                    {getCategoryCount(category)}
                  </Badge>
                </motion.button>
              ))}
            </div>
          )}

          {/* View Mode Toggle */}
          {showViewToggle && (
            <div className="flex justify-center lg:justify-end">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-1 flex">
                <motion.button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-md transition-colors duration-200 ${
                    viewMode === "grid"
                      ? 'bg-white dark:bg-gray-700 shadow-sm'
                      : 'hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Grid3X3 className="w-4 h-4" />
                </motion.button>
                <motion.button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-md transition-colors duration-200 ${
                    viewMode === "list"
                      ? 'bg-white dark:bg-gray-700 shadow-sm'
                      : 'hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <List className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Active Filter Indicator */}
      {showFilters && (
        <div className="text-center">
          <span className="text-gray-600 dark:text-gray-400">
            Showing <span className="font-semibold text-blue-600">{filteredProjects.length}</span> 
            {selectedCategory !== "All" && (
              <> <span className="font-semibold text-blue-600">{selectedCategory}</span></>
            )} project{filteredProjects.length !== 1 ? 's' : ''}
          </span>
        </div>
      )}

      {/* Projects Grid/List */}
      {filteredProjects.length > 0 ? (
        <motion.div
          layout
          className={
            viewMode === "grid" 
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
              : "space-y-8"
          }
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              {...project}
              delay={index * 0.1}
            />
          ))}
        </motion.div>
      ) : (
        // Empty State
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-20"
        >
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            No projects found
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            No projects match the selected category. Try selecting a different category.
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default ProjectGrid;
