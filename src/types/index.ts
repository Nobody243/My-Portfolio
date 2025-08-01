// Component Types
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface AnimationProps {
  delay?: number;
  duration?: number;
  animation?: 'fadeUp' | 'fadeLeft' | 'fadeRight' | 'scale' | 'bounce';
}

export interface ButtonVariantProps {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

export interface TextVariantProps {
  variant?: 'heading' | 'subheading' | 'body' | 'caption';
  gradient?: boolean;
}

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  year?: string;
  category?: string;
}

export interface TestimonialData {
  id: string;
  name: string;
  title: string;
  quote: string;
  avatar?: string;
  company?: string;
}

export interface NavigationItem {
  name: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  author: {
    name: string;
    email: string;
    twitter?: string;
    github?: string;
    linkedin?: string;
  };
  hero: {
    name: string;
    title: string;
    description: string;
  };
  navigation: NavigationItem[];
}

// Re-export commonly used types from libraries
export type { LucideIcon } from 'lucide-react';
export type { MotionProps } from 'framer-motion';
