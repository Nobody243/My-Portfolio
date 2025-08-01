import { getTestimonialAvatar } from './images';

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
  rating: number;
  projectType: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ahmed Hassan",
    role: "Senior Developer at New Web Order Co.",
    company: "New Web Order Co.",
    image: getTestimonialAvatar("Ahmed Hassan"),
    content: "Muhammad is a dedicated intern with a strong foundation in web development. His work on client projects shows great attention to detail and eagerness to learn. He consistently delivers quality code and asks thoughtful questions.",
    rating: 5,
    projectType: "Web Development Internship"
  },
  {
    id: 2,
    name: "Dr. Fatima Ali",
    role: "Computer Science Professor",
    company: "University of Karachi",
    image: getTestimonialAvatar("Dr. Fatima Ali"),
    content: "Muhammad demonstrates exceptional problem-solving skills and a deep understanding of programming concepts. His CS Academy project shows real innovation in educational technology. A promising student developer.",
    rating: 5,
    projectType: "Academic Project"
  },
  {
    id: 3,
    name: "Sarah Khan",
    role: "Fellow CS Student",
    company: "University of Karachi",
    image: getTestimonialAvatar("Sarah Khan"),
    content: "Working with Muhammad on group projects has been great. He's always willing to help others understand complex concepts and his coding skills are impressive for a student. CS Academy is inspiring!",
    rating: 5,
    projectType: "Peer Collaboration"
  }
];

export const stats = [
  {
    number: "6+",
    label: "Months of Experience",
    icon: "📊"
  },
  {
    number: "1",
    label: "Active Internship",
    icon: "🚀"
  },
  {
    number: "5+",
    label: "Projects Completed",
    icon: "�"
  },
  {
    number: "100%",
    label: "Learning Enthusiasm",
    icon: "✅"
  }
];

export const services = [
  {
    title: "Frontend Development",
    description: "Building responsive, modern web applications using React, Next.js, and contemporary CSS frameworks.",
    icon: "💻",
    technologies: ["React", "Next.js", "JavaScript", "Tailwind CSS"]
  },
  {
    title: "Web Development",
    description: "Creating interactive websites and web applications with clean, maintainable code and best practices.",
    icon: "⚙️",
    technologies: ["HTML5", "CSS3", "JavaScript", "TypeScript"]
  },
  {
    title: "Educational Technology",
    description: "Developing learning platforms and educational tools to enhance the learning experience for students.",
    icon: "🎯",
    technologies: ["React", "Node.js", "MongoDB", "Educational Design"]
  },
  {
    title: "Problem Solving",
    description: "Applying algorithmic thinking and programming fundamentals to solve complex technical challenges.",
    icon: "🎨",
    technologies: ["C++", "Algorithms", "Data Structures", "System Design"]
  }
];
