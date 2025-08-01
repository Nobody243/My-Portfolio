"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import AnimatedText from "@/components/ui/animated/AnimatedText";
import InteractiveCard from "@/components/features/InteractiveCard";
import { fadeInUp } from "@/lib/advanced-animations";

interface ContactInfoItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href: string;
  description: string;
  color: string;
}

export default function ContactInfo() {
  const contactInfo: ContactInfoItem[] = [
    {
      icon: Mail,
      label: "Email",
      value: siteConfig.contact.email,
      href: `mailto:${siteConfig.contact.email}`,
      description: "Send me an email anytime",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      label: "Phone",
      value: siteConfig.contact.phone,
      href: `tel:${siteConfig.contact.phone.replace(/\s/g, '')}`,
      description: "Call me during business hours",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: MapPin,
      label: "Location",
      value: siteConfig.contact.location,
      href: "#",
      description: "Based in beautiful San Francisco",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Clock,
      label: "Response Time",
      value: siteConfig.contact.responseTime,
      href: "#",
      description: "I reply as quickly as possible",
      color: "from-orange-500 to-red-500"
    },
  ];

  return (
    <div>
      <AnimatedText
        variant="subheading"
        animation="fadeUp"
        className="mb-6 text-left"
        as="h2"
      >
        <motion.span
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          📞
        </motion.span>
        {" "}Contact Info
      </AnimatedText>

      <div className="space-y-3">
        {contactInfo.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div key={item.label} variants={fadeInUp}>
              <InteractiveCard
                variant="minimal"
                animation="slide"
                hover="lift"
                delay={index * 0.1}
                className="p-4 backdrop-blur-sm group"
              >
                <div className="flex items-start space-x-3">
                  <motion.div
                    className={`flex-shrink-0 p-2 bg-gradient-to-br ${item.color} rounded-lg text-white`}
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                      {item.label}
                    </h3>
                    {item.href !== "#" ? (
                      <a
                        href={item.href}
                        className="text-blue-600 dark:text-blue-400 hover:underline font-medium text-sm block truncate group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-gray-700 dark:text-gray-300 font-medium text-sm block truncate">
                        {item.value}
                      </span>
                    )}
                    <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              </InteractiveCard>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
