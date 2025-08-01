// Image configuration with high-quality online sources
export const images = {
  // Project Images - Tech-focused, high quality from Unsplash
  projects: {
    "cs-academy": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&auto=format&q=80",
    "portfolio-website": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&auto=format&q=80",
    "task-manager-react": "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop&auto=format&q=80",
    "network-calculator": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop&auto=format&q=80",
    "cpp-algorithms": "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?w=800&h=600&fit=crop&auto=format&q=80",
    "learning-management-system": "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop&auto=format&q=80"
  },

  // Testimonial Avatar Images - Professional headshots from UI Avatars
  testimonials: {
    "ahmed-hassan": "https://ui-avatars.com/api/?name=Ahmed+Hassan&size=200&background=3b82f6&color=ffffff&rounded=true&font-size=0.6",
    "fatima-ali": "https://ui-avatars.com/api/?name=Fatima+Ali&size=200&background=8b5cf6&color=ffffff&rounded=true&font-size=0.6",
    "sarah-khan": "https://ui-avatars.com/api/?name=Sarah+Khan&size=200&background=ec4899&color=ffffff&rounded=true&font-size=0.6"
  },

  // Profile Images
  profile: {
    main: "https://ui-avatars.com/api/?name=Muhammad+Saad&size=400&background=gradient&color=ffffff&rounded=true&font-size=0.4",
    about: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&auto=format&q=80"
  },

  // Background and Decorative Images
  backgrounds: {
    hero: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop&auto=format&q=80",
    about: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&h=1080&fit=crop&auto=format&q=80",
    contact: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1920&h=1080&fit=crop&auto=format&q=80"
  },

  // Technology Icons (using CDN sources)
  technologies: {
    react: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    nextjs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    typescript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    javascript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    nodejs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    mongodb: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    tailwind: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    css: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    html: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    cpp: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    github: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
  },

  // Default fallback images
  defaults: {
    projectPlaceholder: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop&auto=format&q=80",
    avatarPlaceholder: "https://ui-avatars.com/api/?name=User&size=200&background=6b7280&color=ffffff&rounded=true",
    profilePlaceholder: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&auto=format&q=80"
  }
};

// Helper function to get project image
export const getProjectImage = (projectId: string): string => {
  return images.projects[projectId as keyof typeof images.projects] || images.defaults.projectPlaceholder;
};

// Helper function to get testimonial avatar
export const getTestimonialAvatar = (name: string): string => {
  const key = name.toLowerCase().replace(/\s+/g, '-');
  return images.testimonials[key as keyof typeof images.testimonials] || 
         `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=200&background=6b7280&color=ffffff&rounded=true&font-size=0.6`;
};

// Helper function to get technology icon
export const getTechnologyIcon = (tech: string): string => {
  const key = tech.toLowerCase().replace(/\s+/g, '').replace('.', '');
  return images.technologies[key as keyof typeof images.technologies] || '';
};

// Alternative project images for variety
export const alternativeProjectImages = {
  education: [
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&auto=format&q=80",
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop&auto=format&q=80",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop&auto=format&q=80"
  ],
  web: [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&auto=format&q=80",
    "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop&auto=format&q=80",
    "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop&auto=format&q=80"
  ],
  mobile: [
    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&auto=format&q=80",
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop&auto=format&q=80"
  ],
  desktop: [
    "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?w=800&h=600&fit=crop&auto=format&q=80",
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop&auto=format&q=80"
  ],
  api: [
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop&auto=format&q=80",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop&auto=format&q=80"
  ]
};

export default images;
