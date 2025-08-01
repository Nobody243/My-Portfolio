"use client";

import { motion } from "framer-motion";
import { TextFillEffect } from "@/components/ui/animated/TextFillEffect";
import { EnhancedButton } from "@/components/ui/animated/EnhancedButton";
import { Heart, LucideIcon } from "lucide-react";

interface CTASectionProps {
  title: string;
  description: string;
  primaryButton: {
    text: string;
    href: string;
    icon?: LucideIcon;
  };
  secondaryButton?: {
    text: string;
    href: string;
  };
  className?: string;
}

export const CTASection = ({
  title,
  description,
  primaryButton,
  secondaryButton,
  className = ""
}: CTASectionProps) => {
  return (
    <section className={`py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden ${className}`}>
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <TextFillEffect
              text={title}
              className="text-white"
              delay={0.5}
              duration={4}
              as="span"
            />
          </motion.h2>
          
          <motion.p 
            className="text-xl text-white/90 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {description}
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-stretch sm:items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <EnhancedButton
              variant="secondary"
              size="lg"
              icon={primaryButton.icon || Heart}
              iconPosition="left"
              iconAnimation="bounce"
              textFill={false}
              href={primaryButton.href}
              className="w-full sm:w-auto min-w-[200px] flex items-center justify-center"
            >
              {primaryButton.text}
            </EnhancedButton>
            
            {secondaryButton && (
              <EnhancedButton
                variant="outline"
                size="lg"
                href={secondaryButton.href}
                textFill={true}
                className="w-full sm:w-auto min-w-[200px] border-white text-white hover:bg-white/10 flex items-center justify-center"
              >
                {secondaryButton.text}
              </EnhancedButton>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
