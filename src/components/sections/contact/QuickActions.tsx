"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Calendar } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import AnimatedButton from "@/components/ui/animated/AnimatedButton";
import { fadeInUp } from "@/lib/advanced-animations";

export default function QuickActions() {
  return (
    <motion.div 
      variants={fadeInUp}
      className="pt-4"
    >
      <div className="space-y-3">
        <AnimatedButton
          variant="primary"
          size="lg"
          animation="glow"
          className="w-full group relative overflow-hidden"
          asChild
        >
          <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center justify-center gap-2">
            <motion.div
              animate={{ x: [-2, 2, -2] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Mail className="w-5 h-5" />
            </motion.div>
            <span className="font-medium">Send Quick Email</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          </a>
        </AnimatedButton>
        
        <AnimatedButton
          variant="outline"
          size="lg"
          animation="scale"
          className="w-full border-2 border-gray-300 dark:border-gray-600 
                     hover:border-blue-500 dark:hover:border-blue-400 
                     text-gray-700 dark:text-gray-200 
                     hover:bg-blue-50 dark:hover:bg-blue-900/20
                     transition-all duration-200"
          asChild
        >
          <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`} className="flex items-center justify-center gap-2">
            <motion.div
              animate={{ rotate: [0, 20, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Phone className="w-5 h-5" />
            </motion.div>
            <span className="font-medium">Call Now</span>
          </a>
        </AnimatedButton>
        
        <AnimatedButton
          variant="gradient"
          size="lg"
          animation="bounce"
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 
                     hover:from-purple-700 hover:to-pink-700 
                     text-white font-medium"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Calendar className="w-5 h-5 mr-2" />
          </motion.div>
          Schedule Meeting
        </AnimatedButton>
      </div>
    </motion.div>
  );
}
