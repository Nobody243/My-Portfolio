"use client";

import ContactInfo from "./ContactInfo";
import QuickActions from "./QuickActions";
import SocialLinks from "./SocialLinks";
import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/advanced-animations";

export default function ContactSidebar() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="lg:col-span-1 space-y-8"
    >
      <ContactInfo />
      <QuickActions />
      <SocialLinks />
    </motion.div>
  );
}
