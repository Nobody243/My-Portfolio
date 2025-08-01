import { getProjectImage } from './images';

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl: string;
  featured: boolean;
  category: "web" | "mobile" | "desktop" | "api" | "education";
  year: number;
  status: "completed" | "in-progress" | "planned";
}

export const projects: Project[] = [
  {
    id: "cs-academy",
    title: "CS Academy",
    description: "A comprehensive educational platform for learning computer science courses with interactive content and progress tracking.",
    longDescription: "CS Academy is my flagship project - a modern educational platform designed to make computer science education more accessible and engaging. The platform features interactive lessons, coding challenges, progress tracking, and a community-driven learning environment. Built with modern web technologies to provide a seamless learning experience for students worldwide.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB", "NextAuth.js"],
    githubUrl: "https://github.com/muhammadsaad-dev/cs-academy",
    liveUrl: "https://cs-academy-demo.vercel.app",
    imageUrl: getProjectImage("cs-academy"),
    featured: true,
    category: "education",
    year: 2024,
    status: "in-progress",
  },
  {
    id: "portfolio-website",
    title: "Personal Portfolio Website",
    description: "A modern, responsive portfolio website showcasing my projects, skills, and experience as a developer.",
    longDescription: "My personal portfolio website built with Next.js and modern web technologies. Features include animated components, responsive design, dark mode support, and optimized performance. The site serves as a comprehensive showcase of my development journey and technical skills.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    githubUrl: "https://github.com/muhammadsaad-dev/portfolio",
    liveUrl: "https://muhammadsaad.dev",
    imageUrl: getProjectImage("portfolio-website"),
    featured: true,
    category: "web",
    year: 2024,
    status: "completed",
  },
  {
    id: "task-manager-react",
    title: "React Task Manager",
    description: "A simple yet effective task management application built with React, featuring local storage and intuitive UI.",
    longDescription: "A clean and efficient task management application developed as part of my React learning journey. Features include task creation, editing, deletion, status tracking, priority levels, and local storage persistence. The application demonstrates my understanding of React hooks, component lifecycle, and state management.",
    techStack: ["React", "JavaScript", "CSS3", "Local Storage", "React Hooks"],
    githubUrl: "https://github.com/muhammadsaad-dev/react-task-manager",
    liveUrl: "https://react-tasks-saad.netlify.app",
    imageUrl: getProjectImage("task-manager-react"),
    featured: false,
    category: "web",
    year: 2023,
    status: "completed",
  },
  {
    id: "network-calculator",
    title: "Network Subnet Calculator",
    description: "A web-based tool for network administrators to calculate subnet information and IP addressing schemes.",
    longDescription: "A practical networking tool developed during my Cisco networking studies. The calculator helps network administrators determine subnet masks, network addresses, broadcast addresses, and available host ranges. Built with vanilla JavaScript to demonstrate fundamental programming concepts and networking knowledge.",
    techStack: ["HTML5", "CSS3", "JavaScript", "Networking Concepts"],
    githubUrl: "https://github.com/muhammadsaad-dev/subnet-calculator",
    liveUrl: "https://subnet-calc-saad.netlify.app",
    imageUrl: getProjectImage("network-calculator"),
    featured: false,
    category: "web",
    year: 2023,
    status: "completed",
  },
  {
    id: "cpp-algorithms",
    title: "C++ Algorithm Implementations",
    description: "A collection of classic algorithms and data structures implemented in C++ with detailed explanations.",
    longDescription: "A comprehensive repository of algorithm implementations in C++ created during my computer science studies. Includes sorting algorithms, searching techniques, data structures (linked lists, trees, graphs), and dynamic programming solutions. Each implementation includes detailed comments and complexity analysis.",
    techStack: ["C++", "Data Structures", "Algorithms", "STL"],
    githubUrl: "https://github.com/muhammadsaad-dev/cpp-algorithms",
    imageUrl: getProjectImage("cpp-algorithms"),
    featured: false,
    category: "desktop",
    year: 2023,
    status: "completed",
  },
  {
    id: "learning-management-system",
    title: "LMS for Computer Science",
    description: "An ambitious learning management system specifically designed for computer science education (Future Project).",
    longDescription: "A planned comprehensive learning management system that will revolutionize computer science education. The platform will feature interactive coding environments, automated code assessment, peer collaboration tools, instructor dashboards, and AI-powered learning recommendations. This project represents my long-term vision for educational technology.",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Docker", "Kubernetes", "AI/ML"],
    imageUrl: getProjectImage("learning-management-system"),
    featured: true,
    category: "education",
    year: 2025,
    status: "planned",
  },
];

export const featuredProjects = projects.filter(project => project.featured);

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

export const getProjectsByCategory = (category: Project['category']): Project[] => {
  return projects.filter(project => project.category === category);
};

export const getProjectsByStatus = (status: Project['status']): Project[] => {
  return projects.filter(project => project.status === status);
};
