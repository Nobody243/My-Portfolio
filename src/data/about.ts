import { images } from './images';

export interface AboutData {
  profile: {
    name: string;
    role: string;
    experience: string;
    image: string;
    imageAlt: string;
  };
  bio: string[];
  skills: string[];
  experience: {
    title: string;
    company: string;
    period: string;
    description: string;
    color: string;
  }[];
  education: {
    degree: string;
    field: string;
    university: string;
    status: string;
    period: string;
  };
  currentRole: {
    title: string;
    company: string;
    description: string;
    startDate: string;
  };
}

export const aboutData: AboutData = {
  // Profile Information
  profile: {
    name: "Muhammad Saad",
    role: "Full-Stack Web Developer & Student",
    experience: "Learning & Growing",
    image: images.profile.main,
    imageAlt: "Muhammad Saad - Full-Stack Web Developer",
  },

  // Bio Paragraphs
  bio: [
    "I'm Muhammad Saad, a passionate bachelor's student currently diving deep into the world of full-stack web development. My journey in technology started with a curiosity about how things work behind the scenes, and has evolved into a genuine love for creating digital solutions that make a difference.",
    
    "Currently working as an intern at New Web Order Co., I'm gaining hands-on experience in modern web technologies while developing my flagship project, CS Academy—a comprehensive platform designed to make computer science education more accessible and engaging for students worldwide.",
    
    "I believe in continuous learning and writing clean, maintainable code. My goal is to build applications that solve real-world problems and create positive impacts in the tech community."
  ],

  // Skills & Technologies
  skills: [
    "C++",
    "JavaScript",
    "TypeScript", 
    "HTML5/CSS3",
    "React",
    "Next.js",
    "Node.js",
    "Tailwind CSS",
    "Git/GitHub",
    "Cisco Networking",
    "Responsive Design",
    "Problem Solving"
  ],

  // Education
  education: {
    degree: "Bachelor's Degree",
    field: "Computer Science",
    university: "University of Karachi",
    status: "Currently Pursuing",
    period: "2022 - 2026 (Expected)"
  },

  // Current Role
  currentRole: {
    title: "Web Development Intern",
    company: "New Web Order Co.",
    description: "Working on real-world projects, collaborating with senior developers, and contributing to client solutions using modern web technologies.",
    startDate: "January 2024"
  },

  // Work Experience
  experience: [
    {
      title: "Web Development Intern",
      company: "New Web Order Co.",
      period: "Jan 2024 - Present",
      description: "Developing responsive web applications, collaborating on client projects, and learning industry best practices. Contributing to modern web solutions using React, Next.js, and other cutting-edge technologies.",
      color: "blue",
    },
    {
      title: "CS Academy - Founder & Developer",
      company: "Personal Project",
      period: "2023 - Present",
      description: "Building a comprehensive educational platform for computer science courses. Implementing modern web technologies to create an engaging learning experience for students worldwide.",
      color: "purple",
    },
    {
      title: "Networking Studies",
      company: "Cisco Certification Program",
      period: "2023",
      description: "Completed foundational networking courses focusing on routing, switching, and network configuration. Gained hands-on experience with Cisco technologies and network troubleshooting.",
      color: "green",
    },
  ],
};
