"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/core";
import { TextFillEffect, TextFillLetterByLetter } from "@/components/ui/animated/TextFillEffect";
import { EnhancedButton } from "@/components/ui/animated/EnhancedButton";
import { 
  Eye,
  Download,
  Github,
  Linkedin,
  Mail
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

interface HeroSectionMainProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
}

export const HeroSectionMain = ({ containerRef }: HeroSectionMainProps) => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  // Smooth spring animations for parallax
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.5], [1, 0]), springConfig);
  const scale = useSpring(useTransform(scrollYProgress, [0, 0.5], [1, 0.8]), springConfig);

  return (
    <motion.section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ opacity, scale }}
    >
      {/* Clean Code-Inspired Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>
        
        {/* Enhanced Interactive Floating Code Brackets - Responsive */}
        <motion.div 
          className="absolute top-12 sm:top-16 lg:top-20 left-4 sm:left-8 lg:left-20 
                     text-3xl sm:text-4xl lg:text-6xl text-blue-500/20 dark:text-blue-400/20 
                     font-mono select-none"
          animate={{ 
            y: [-5, 5, -5],
            rotate: [0, 2, 0, -2, 0]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          whileHover={{ scale: 1.1, opacity: 0.4 }}
        >
          {'{'}
        </motion.div>
        
        <motion.div 
          className="absolute top-20 sm:top-32 lg:top-40 right-8 sm:right-16 lg:right-32 
                     text-4xl sm:text-6xl lg:text-8xl text-purple-500/20 dark:text-purple-400/20 
                     font-mono select-none"
          animate={{ 
            y: [5, -5, 5],
            rotate: [0, -2, 0, 2, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          whileHover={{ scale: 1.1, opacity: 0.4 }}
        >
          {'}'}
        </motion.div>
        
        <motion.div 
          className="absolute bottom-16 sm:bottom-24 lg:bottom-32 left-8 sm:left-20 lg:left-40 
                     text-2xl sm:text-3xl lg:text-5xl text-cyan-500/20 dark:text-cyan-400/20 
                     font-mono select-none"
          animate={{ 
            x: [-3, 3, -3],
            rotate: [0, 1, 0, -1, 0]
          }}
          transition={{ 
            duration: 7, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          whileHover={{ scale: 1.1, opacity: 0.4 }}
        >
          {'</'}
        </motion.div>
        
        <motion.div 
          className="absolute bottom-8 sm:bottom-12 lg:bottom-20 right-4 sm:right-8 lg:right-20 
                     text-3xl sm:text-5xl lg:text-7xl text-pink-500/20 dark:text-pink-400/20 
                     font-mono select-none"
          animate={{ 
            x: [3, -3, 3],
            rotate: [0, -1, 0, 1, 0]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
          whileHover={{ scale: 1.1, opacity: 0.4 }}
        >
          {'/>'}
        </motion.div>
        
        {/* Enhanced Interactive Code Lines - Fully Responsive */}
        <motion.div 
          className="absolute top-1/4 left-2 sm:left-4 lg:left-10 font-mono 
                     text-xs sm:text-sm lg:text-base text-blue-500/30 dark:text-blue-400/30 
                     space-y-1 sm:space-y-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 2 }}
          whileHover={{ 
            scale: 1.05, 
            opacity: 0.8,
            x: 10
          }}
        >
          <div>const developer = {}</div>
          <div>&nbsp;&nbsp;name: &quot;Creative Dev&quot;,</div>
          <div>&nbsp;&nbsp;skills: [&quot;React&quot;, &quot;Next.js&quot;, &quot;TypeScript&quot;],</div>
          <div>&nbsp;&nbsp;passion: &quot;Innovation&quot;,</div>
          <div>&nbsp;&nbsp;responsive: true</div>
          <div>{"}"}</div>
        </motion.div>
        
        {/* Enhanced Interactive Terminal Window - Fully Responsive */}
        <motion.div 
          className="absolute bottom-4 sm:bottom-8 lg:bottom-1/4 
                     right-2 sm:right-4 lg:right-10 
                     bg-gray-800/90 dark:bg-gray-900/90 backdrop-blur-sm
                     rounded-lg p-2 sm:p-3 lg:p-4 
                     w-44 sm:w-52 lg:w-64 shadow-2xl 
                     border border-gray-700/50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          whileHover={{ 
            scale: 1.05, 
            y: -5,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
          }}
        >
          <div className="flex space-x-1 sm:space-x-2 mb-2">
            <motion.div 
              className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"
              whileHover={{ scale: 1.2 }}
            />
            <motion.div 
              className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"
              whileHover={{ scale: 1.2 }}
            />
            <motion.div 
              className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"
              whileHover={{ scale: 1.2 }}
            />
          </div>
          <div className="font-mono text-xs space-y-1">
            <div className="text-green-400">$ npm run dev</div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 2, duration: 1.5 }}
              className="overflow-hidden"
            >
              <span className="text-gray-300">Starting development server...</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.5, duration: 0.5 }}
              className="text-blue-400"
            >
              <span className="text-green-400">✓</span> Local: http://localhost:3000
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4, duration: 0.5 }}
              className="text-yellow-400"
            >
              <span className="text-green-400">✓</span> Ready in 2.1s
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4.5, duration: 0.5 }}
              className="text-purple-400"
            >
              <motion.span 
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-cyan-400"
              >
                ⚡
              </motion.span> 
              Hot reload enabled
            </motion.div>
          </div>
        </motion.div>

        {/* Interactive JSON Structure - Responsive */}
        <motion.div
          className="absolute top-1/2 right-2 sm:right-4 lg:right-8 
                     font-mono text-xs sm:text-sm text-orange-500/30 dark:text-orange-400/30 
                     space-y-1"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 3, duration: 1.5 }}
          whileHover={{ 
            opacity: 0.8, 
            scale: 1.05,
            x: -10
          }}
        >
          <div>{`{`}</div>
          <div>&nbsp;&nbsp;&quot;framework&quot;: &quot;Next.js&quot;,</div>
          <div>&nbsp;&nbsp;&quot;animations&quot;: &quot;Framer Motion&quot;,</div>
          <div>&nbsp;&nbsp;&quot;styling&quot;: &quot;Tailwind&quot;,</div>
          <div>&nbsp;&nbsp;&quot;responsive&quot;: true</div>
          <div>{`}`}</div>
        </motion.div>

        {/* Interactive Grid Pattern - Responsive */}
        <motion.div
          className="absolute top-8 sm:top-12 lg:top-16 right-4 sm:right-8 lg:right-16 
                     w-16 sm:w-24 lg:w-32 h-16 sm:h-24 lg:h-32 opacity-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ delay: 2, duration: 2 }}
        >
          <div className="grid grid-cols-4 gap-1 w-full h-full">
            {Array.from({ length: 16 }).map((_, i) => (
              <motion.div
                key={i}
                className="bg-blue-500 dark:bg-blue-400 rounded-sm"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  delay: 2 + (i * 0.1), 
                  duration: 0.3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 4
                }}
                whileHover={{ scale: 1.5, opacity: 0.5 }}
              />
            ))}
          </div>
        </motion.div>

        {/* Floating Component Tag - Mobile Responsive */}
        <motion.div
          className="absolute top-1/3 left-1/2 transform -translate-x-1/2 
                     text-purple-500/25 dark:text-purple-400/25 
                     text-xs sm:text-sm lg:text-base font-mono"
          animate={{
            y: [-10, 10, -10],
            rotate: [0, 3, 0, -3, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{ scale: 1.2, opacity: 0.5 }}
        >
          <div className="text-center">
            <div>{"<Component"}</div>
            <div className="hidden sm:block">&nbsp;&nbsp;interactive={true}</div>
            <div className="hidden sm:block">&nbsp;&nbsp;responsive=&quot;all&quot;</div>
            <div>{"/>"}</div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Hero Content - Fully Responsive */}
      <div className="relative z-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          {/* Clean Developer Badge - Responsive */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <Badge variant="outline" className="mb-4 sm:mb-6 px-3 sm:px-4 py-1 sm:py-2 
                                                text-xs sm:text-sm 
                                                border-blue-200 dark:border-blue-800 
                                                bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm
                                                hover:scale-105 transition-transform duration-200"
            >
              <motion.span 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mr-2"
              >
                ⚡
              </motion.span>
              Full Stack Developer
            </Badge>
          </motion.div>

          {/* Enhanced Responsive Main Heading */}
          <motion.h1 
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 
                       font-bold mb-4 sm:mb-6 leading-tight px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            <span className="block text-gray-900 dark:text-gray-100">
              Hi, I&apos;m{" "}
              <TextFillLetterByLetter
                text={siteConfig.hero.name}
                className="relative inline-block font-bold"
                delay={1.0}
              />
            </span>
          </motion.h1>

          {/* Enhanced Interactive Typewriter Effect Subtitle - Responsive */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 
                       text-gray-700 dark:text-gray-200 mb-6 sm:mb-8 
                       font-light font-mono px-4"
          >
            <TextFillEffect
              text="Building digital experiences"
              className="border-r-2 border-blue-500 pr-2"
              delay={1.5}
              duration={4}
              as="span"
            />
          </motion.div>

          {/* Enhanced Interactive Description - Responsive */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 1 }}
            className="text-sm sm:text-base lg:text-lg 
                       text-gray-600 dark:text-gray-300 
                       mb-8 sm:mb-10 lg:mb-12 
                       max-w-xs sm:max-w-lg lg:max-w-2xl mx-auto 
                       leading-relaxed px-4"
            whileHover={{ scale: 1.02 }}
          >
            I craft exceptional digital experiences with clean code, modern frameworks, 
            and user-centered design. Let&apos;s build something amazing together.
          </motion.p>

          {/* Enhanced Interactive CTA Buttons - Fully Responsive */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 1 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 
                       justify-center items-center 
                       mb-12 sm:mb-14 lg:mb-16 px-4"
          >
            <EnhancedButton
              variant="primary"
              size="lg"
              icon={Eye}
              iconPosition="left"
              iconAnimation="spin"
              textFill={false}
              href="/projects"
              className="w-full sm:w-auto"
            >
              View Projects
            </EnhancedButton>
            
            <EnhancedButton
              variant="outline"
              size="lg"
              icon={Download}
              iconPosition="left"
              iconAnimation="bounce"
              textFill={true}
              className="w-full sm:w-auto"
            >
              Download CV
            </EnhancedButton>
          </motion.div>

          {/* Enhanced Responsive Social Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 1 }}
            className="flex justify-center items-center 
                       space-x-6 sm:space-x-8 
                       px-4"
          >
            {[
              { icon: Github, href: siteConfig.social.github, label: "GitHub", color: "hover:text-gray-900 dark:hover:text-gray-100" },
              { icon: Linkedin, href: siteConfig.social.linkedin, label: "LinkedIn", color: "hover:text-blue-600 dark:hover:text-blue-400" },
              { icon: Mail, href: `mailto:${siteConfig.social.email}`, label: "Email", color: "hover:text-green-600 dark:hover:text-green-400" },
            ].map(({ icon: Icon, href, label, color }, index) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 sm:p-4 rounded-xl 
                           bg-white/80 dark:bg-gray-800/80 
                           hover:bg-gray-50 dark:hover:bg-gray-700 
                           transition-all duration-300 group backdrop-blur-sm
                           light-mode-subtle
                           text-gray-600 dark:text-gray-400 ${color}
                           flex items-center justify-center`}
                aria-label={label}
                whileHover={{ 
                  scale: 1.1, 
                  y: -3,
                  rotate: [-2, 2, -2, 0][index] || 0
                }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: 2 + (index * 0.1), 
                  duration: 0.5,
                  type: "spring", 
                  stiffness: 300, 
                  damping: 20 
                }}
              >
                <motion.div
                  className="flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </motion.div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Clean Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center cursor-pointer group"
          onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <span className="text-sm text-gray-500 dark:text-gray-400 mb-2 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">Scroll</span>
          <div className="w-0.5 h-8 bg-gradient-to-b from-blue-500 to-transparent rounded-full"></div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
