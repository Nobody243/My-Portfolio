"use client";

import { motion } from "framer-motion";
import ContactHeader from "@/components/sections/contact/ContactHeader";
import ContactFormSection from "@/components/sections/contact/ContactFormSection";
import ContactSidebar from "@/components/sections/contact/ContactSidebar";
import ContactFAQ from "@/components/sections/contact/ContactFAQ";

export default function Contact() {
  return (
    <div className="gradient-bg-light min-h-screen relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, 90, 180, 270, 360]
          }}
          transition={{ duration: 30, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 270, 180, 90, 0]
          }}
          transition={{ duration: 25, repeat: Infinity }}
        />
      </div>

      <div className="container-default section-padding relative z-10">
        {/* Header Section */}
        <ContactHeader />

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 mt-8">
          {/* Contact Form - Takes 2 columns on large screens */}
          <div className="lg:col-span-2">
            <ContactFormSection />
          </div>

          {/* Contact Information Sidebar */}
          <div className="lg:col-span-1">
            <ContactSidebar />
          </div>
        </div>

        {/* FAQ Section */}
        <ContactFAQ />
      </div>
    </div>
  );
}
