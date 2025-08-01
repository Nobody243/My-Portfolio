"use client";

import { motion } from "framer-motion";
import ContactForm from "@/components/sections/ContactForm";
import { Send } from "lucide-react";
import AnimatedText from "@/components/ui/animated/AnimatedText";
import InteractiveCard from "@/components/features/InteractiveCard";
import { fadeInUp } from "@/lib/advanced-animations";

export default function ContactFormSection() {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      animate="show"
      className="lg:col-span-2"
    >
      <InteractiveCard
        variant="glow"
        animation="scale"
        hover="lift"
        className="p-6 sm:p-8 h-full"
      >
        <div className="mb-8">
          <AnimatedText
            variant="subheading"
            animation="fadeUp"
            className="mb-4 flex items-center justify-center sm:justify-start gap-3"
            as="h2"
          >
            <motion.div
              animate={{ rotate: [0, 15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Send className="w-6 h-6 text-blue-500" />
            </motion.div>
            Send a Message
          </AnimatedText>
          <AnimatedText
            animation="fadeUp"
            delay={0.1}
            className="text-gray-600 dark:text-gray-400 text-center sm:text-left"
          >
            Fill out the form below and I&apos;ll get back to you soon! I love hearing about new projects and opportunities.
          </AnimatedText>
        </div>
        <ContactForm />
      </InteractiveCard>
    </motion.div>
  );
}
