export interface ContactData {
  personal: {
    email: string;
    phone: string;
    location: {
      city: string;
      country: string;
      timezone: string;
    };
  };
  availability: {
    status: string;
    openTo: string[];
    responseTime: string;
  };
  contactNote: string;
  preferredMethod: string;
  socialLinks: {
    github: string;
    linkedin: string;
    twitter: string;
    email: string;
  };
  workingHours: {
    timezone: string;
    schedule: string;
    note: string;
  };
}

export const contactData: ContactData = {
  personal: {
    email: "hello@muhammadsaad.dev",
    phone: "+92 (300) 123-4567",
    location: {
      city: "Karachi",
      country: "Pakistan",
      timezone: "PKT (UTC+5)"
    }
  },
  availability: {
    status: "Available for opportunities",
    openTo: [
      "Internships",
      "Part-time projects", 
      "Freelance work",
      "Learning collaborations",
      "Open source contributions"
    ],
    responseTime: "Within 24 hours"
  },
  contactNote: "I'm always excited to connect with fellow developers, potential mentors, and anyone interested in discussing technology, education, or collaboration opportunities. Feel free to reach out!",
  preferredMethod: "Email",
  socialLinks: {
    github: "https://github.com/muhammadsaad-dev",
    linkedin: "https://linkedin.com/in/muhammad-saad-dev",
    twitter: "https://twitter.com/saad_webdev",
    email: "mailto:hello@muhammadsaad.dev"
  },
  workingHours: {
    timezone: "PKT (UTC+5)",
    schedule: "Monday - Friday, 9:00 AM - 6:00 PM",
    note: "Flexible hours for urgent matters or international collaboration"
  }
};

export const contactMethods = [
  {
    type: "Email",
    value: "hello@muhammadsaad.dev",
    icon: "Mail",
    preferred: true,
    description: "Best for detailed discussions and project inquiries"
  },
  {
    type: "LinkedIn",
    value: "muhammad-saad-dev",
    icon: "Linkedin", 
    preferred: false,
    description: "Professional networking and career opportunities"
  },
  {
    type: "GitHub",
    value: "muhammadsaad-dev",
    icon: "Github",
    preferred: false,
    description: "Code collaboration and open source projects"
  },
  {
    type: "Phone",
    value: "+92 (300) 123-4567",
    icon: "Phone",
    preferred: false,
    description: "For urgent matters (please schedule via email first)"
  }
];

export const faqs = [
  {
    question: "What type of projects are you looking for?",
    answer: "I'm interested in web development projects, especially those involving React, Next.js, or educational technology. I'm also open to contributing to open source projects and learning new technologies."
  },
  {
    question: "Are you available for internships?",
    answer: "Yes! I'm currently an intern at New Web Order Co. and am always open to discussing additional learning opportunities or future full-time positions."
  },
  {
    question: "What's your experience level?",
    answer: "I'm a bachelor's student with hands-on experience in modern web technologies. While I'm early in my career, I'm passionate about learning and have worked on several projects including CS Academy."
  },
  {
    question: "Do you work on freelance projects?",
    answer: "I'm open to small to medium-sized freelance projects that align with my skills and learning goals. I believe in delivering quality work while continuing to grow as a developer."
  }
];
