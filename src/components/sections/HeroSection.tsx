"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/core";
import { Badge } from "@/components/ui/core";
import { 
  ArrowRight, 
  Github, 
  Linkedin, 
  Mail, 
  Download,
  Eye
} from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { cn } from "@/lib/utils";
import { 
  responsiveTypography, 
  responsiveLayout, 
  responsiveComponents,
  responsiveClasses,
  responsiveFlex 
} from "@/lib/utils/responsive";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        {/* Floating Shapes */}
        <motion.div
          animate={{ 
            y: [-20, 20, -20],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className={cn(
            "absolute bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl",
            responsiveClasses({
              xs: "top-10 left-5 w-32 h-32",
              sm: "top-16 left-8 w-48 h-48", 
              md: "top-20 left-10 w-64 h-64",
              lg: "top-20 left-10 w-72 h-72"
            })
          )}
        />
        <motion.div
          animate={{ 
            y: [20, -20, 20],
            rotate: [360, 180, 0],
            scale: [1.1, 1, 1.1]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2 
          }}
          className={cn(
            "absolute bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl",
            responsiveClasses({
              xs: "bottom-10 right-5 w-40 h-40",
              sm: "bottom-16 right-8 w-56 h-56",
              md: "bottom-20 right-10 w-80 h-80",
              lg: "bottom-20 right-10 w-96 h-96"
            })
          )}
        />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5" 
           style={{
             backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0)`,
             backgroundSize: '20px 20px'
           }} 
      />

      {/* Hero Content */}
      <div className={responsiveLayout.container()}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          {/* Greeting Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-4 sm:mb-6 lg:mb-8"
          >
            <Badge 
              variant="outline" 
              className={cn(
                "border-blue-200 dark:border-blue-800 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm",
                responsiveClasses({
                  xs: "px-3 py-2 text-xs",
                  sm: "px-4 py-2 text-sm",
                  md: "px-4 py-2 text-sm"
                })
              )}
            >
              <motion.span 
                animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3 }}
                className="mr-2"
              >
                👋
              </motion.span>
              Welcome to my digital space
            </Badge>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className={responsiveTypography.h1("text-gray-900 dark:text-white mb-4 sm:mb-6 lg:mb-8")}
          >
            <span className="block">
              Hi, I&apos;m{" "}
              <motion.span 
                className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                {siteConfig.hero.name}
              </motion.span>
            </span>
          </motion.h1>

          {/* Animated Subtitle */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className={cn(
              responsiveTypography.h3("text-gray-600 dark:text-gray-300 font-light mb-4 sm:mb-6 lg:mb-8"),
              "space-y-2"
            )}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="block"
            >
              Full-Stack Developer
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 1 }}
              className="block"
            >
              & Creative Problem Solver
            </motion.span>
          </motion.div>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className={cn(
              responsiveTypography.bodyLarge("text-gray-600 dark:text-gray-400 leading-relaxed mb-8 sm:mb-10 lg:mb-12"),
              "max-w-3xl mx-auto"
            )}
          >
            I craft exceptional digital experiences through clean code, innovative design, 
            and user-centered thinking. Let&apos;s build something amazing together.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className={cn(
              responsiveFlex.direction.columnToRow,
              responsiveClasses({
                xs: "gap-3",
                sm: "gap-4"
              }),
              "justify-center items-center mb-8 sm:mb-12 lg:mb-16"
            )}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                asChild 
                className={responsiveComponents.button('lg', "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg")}
              >
                <Link href="/projects">
                  <Eye className={responsiveComponents.icon('sm', 'mr-2')} />
                  View My Work
                  <ArrowRight className={responsiveComponents.icon('sm', 'ml-2')} />
                </Link>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline" 
                size="lg" 
                className={responsiveComponents.button('lg', "border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800")}
              >
                <Download className={responsiveComponents.icon('sm', 'mr-2')} />
                Download CV
              </Button>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
            className={cn(
              responsiveFlex.direction.row,
              responsiveFlex.align.center,
              responsiveClasses({
                xs: "gap-4",
                sm: "gap-6"
              })
            )}
          >
            {[
              { icon: Github, href: siteConfig.social.github, label: "GitHub" },
              { icon: Linkedin, href: siteConfig.social.linkedin, label: "LinkedIn" },
              { icon: Mail, href: `mailto:${siteConfig.social.email}`, label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.2, 
                  rotate: 5,
                  transition: { type: "spring", stiffness: 300 }
                }}
                whileTap={{ scale: 0.9 }}
                className={cn(
                  "p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm",
                  "text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400",
                  "border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600",
                  "transition-all duration-300 shadow-sm hover:shadow-md",
                  "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                )}
                aria-label={label}
              >
                <Icon className={responsiveComponents.icon('md')} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className={cn(
          "absolute left-1/2 transform -translate-x-1/2 cursor-pointer",
          responsiveClasses({
            xs: "bottom-6",
            sm: "bottom-8"
          })
        )}
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className={cn(
            "border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center",
            responsiveClasses({
              xs: "w-5 h-8",
              sm: "w-6 h-10"
            })
          )}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
