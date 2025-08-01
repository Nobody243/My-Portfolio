export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  keywords: string[];
  nav: { href: string; label: string }[];
  social: {
    github: string;
    linkedin: string;
    twitter: string;
    email: string;
  };
  contact: {
    email: string;
    phone: string;
    location: string;
    timezone: string;
    responseTime: string;
  };
  hero: {
    name: string;
    title: string;
    subtitle: string;
    cta: {
      primary: string;
      secondary: string;
    };
  };
}

export const siteConfig: SiteConfig = {
  name: "Muhammad Saad",
  title: "Muhammad Saad - Full-Stack Web Developer",
  description: "Bachelor student and aspiring full-stack web developer specializing in React, Next.js, and modern web technologies. Currently interning at New Web Order Co.",
  url: "https://muhammadsaad.dev",
  keywords: [
    "Muhammad Saad",
    "Full-Stack Developer",
    "React Developer",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Web Development",
    "Frontend",
    "Backend",
    "Student Developer",
    "Intern",
    "CS Academy"
  ],
  
  // Navigation
  nav: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ],

  // Social Links
  social: {
    github: "https://github.com/muhammadsaad-dev",
    linkedin: "https://linkedin.com/in/muhammad-saad-dev",
    twitter: "https://twitter.com/saad_webdev",
    email: "hello@muhammadsaad.dev",
  },

  // Contact Information
  contact: {
    email: "hello@muhammadsaad.dev",
    phone: "+92 (300) 123-4567",
    location: "Karachi, Pakistan",
    timezone: "PKT (UTC+5)",
    responseTime: "Within 24 hours",
  },

  // Hero Section
  hero: {
    name: "Muhammad Saad",
    title: "Full-Stack Web Developer & Student",
    subtitle: "Learning and building modern web applications with cutting-edge technologies",
    cta: {
      primary: "View My Work",
      secondary: "Get In Touch",
    },
  },
};
