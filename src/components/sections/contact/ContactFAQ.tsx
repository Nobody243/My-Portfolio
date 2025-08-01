"use client";

import { motion } from "framer-motion";
import AnimatedText from "@/components/ui/animated/AnimatedText";
import InteractiveCard from "@/components/features/InteractiveCard";
import { staggerContainer, fadeInUp } from "@/lib/advanced-animations";

interface FAQItem {
  q: string;
  a: string;
}

export default function ContactFAQ() {
  const faqs: FAQItem[] = [
    {
      q: "What's your typical response time?",
      a: "I usually respond within 24 hours, often much sooner!"
    },
    {
      q: "Do you work with international clients?",
      a: "Absolutely! I work with clients from all around the world."
    },
    {
      q: "What's the best way to reach you?",
      a: "Email is best for detailed discussions, but feel free to call for urgent matters."
    },
    {
      q: "Do you offer free consultations?",
      a: "Yes! I offer a free 30-minute consultation to discuss your project."
    }
  ];

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="mt-12"
    >
      <AnimatedText
        variant="subheading"
        animation="fadeUp"
        className="text-center mb-12"
        as="h2"
      >
        Frequently Asked Questions
      </AnimatedText>
      
      <div className="grid md:grid-cols-2 gap-6">
        {faqs.map((faq, index) => (
          <motion.div key={index} variants={fadeInUp}>
            <InteractiveCard
              variant="default"
              animation="scale"
              hover="lift"
              delay={index * 0.1}
              className="p-6"
            >
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                {faq.q}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {faq.a}
              </p>
            </InteractiveCard>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
