"use client";

import { motion } from "framer-motion";
import AnimatedText from "@/components/ui/animated/AnimatedText";
import { Badge } from "@/components/ui/core/badge";
import { Clock, Globe, MessageCircle } from "lucide-react";
import { staggerContainer, fadeInUp } from "@/lib/advanced-animations";

export default function ContactHeader() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="text-center-responsive mb-8"
    >
      <AnimatedText
        variant="heading"
        animation="fadeUp"
        className="mb-6"
        gradient
        as="h1"
      >
        Get In Touch
        <motion.span
          className="inline-block ml-3"
          animate={{ rotate: [0, 20, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          📬
        </motion.span>
      </AnimatedText>
      
      <AnimatedText
        variant="body"
        animation="fadeUp"
        delay={0.2}
        className="max-width-prose text-xl"
      >
        I am always interested in hearing about new opportunities and exciting projects. 
        Whether you have a question or just want to say hi, feel free to reach out!
      </AnimatedText>

      {/* Quick Stats */}
      <motion.div 
        className="flex flex-wrap justify-center gap-6 mt-8"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={fadeInUp}>
          <Badge variant="outline" className="px-4 py-2 text-base">
            <Clock className="w-4 h-4 mr-2" />
            Usually responds in 24h
          </Badge>
        </motion.div>
        <motion.div variants={fadeInUp}>
          <Badge variant="outline" className="px-4 py-2 text-base">
            <Globe className="w-4 h-4 mr-2" />
            Available worldwide
          </Badge>
        </motion.div>
        <motion.div variants={fadeInUp}>
          <Badge variant="outline" className="px-4 py-2 text-base">
            <MessageCircle className="w-4 h-4 mr-2" />
            Open to collaborations
          </Badge>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
