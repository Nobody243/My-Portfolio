"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/core";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/core";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { useEffect, useRef } from "react";

export default function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollSpeed = 2; // Increased speed
    let scrollPosition = 0;

    const autoScroll = () => {
      scrollPosition += scrollSpeed;
      container.scrollLeft = scrollPosition;

      // Reset when we've scrolled through half the content (seamless loop)
      if (scrollPosition >= container.scrollWidth / 2) {
        scrollPosition = 0;
        container.scrollLeft = 0;
      }
    };

    const interval = setInterval(autoScroll, 20); // Faster interval

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="py-12 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            What People <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Say</span>
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Testimonials from colleagues, clients, and collaborators I have had the pleasure to work with.
          </motion.p>
        </motion.div>

        {/* Testimonials Auto-Scrolling Row */}
        <div className="relative overflow-hidden">
          <div 
            ref={scrollRef}
            className="flex gap-12 overflow-x-hidden pb-8"
            style={{
              maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
            }}
          >
            {/* Create multiple copies for seamless infinite scroll */}
            {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
              <motion.div
                key={`${testimonial.name}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % testimonials.length) * 0.1 }}
                whileHover={{ 
                  scale: 1.03,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                className="flex-shrink-0 w-96"
              >
                <Card className="h-full p-12 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                  {/* Decorative Quote Icon */}
                  <div className="absolute top-10 right-10 opacity-10">
                    <Quote className="w-12 h-12 text-gray-400" />
                  </div>
                  
                  {/* Star Rating */}
                  <div className="flex items-center gap-2 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-6 h-6 fill-yellow-400 text-yellow-400" 
                      />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-gray-700 dark:text-gray-300 mb-10 leading-relaxed text-xl font-light italic">
                    &quot;{testimonial.content}&quot;
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex items-center gap-6 mt-auto">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold text-xl">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="min-w-0">
                      <h4 className="font-bold text-gray-900 dark:text-white text-xl mb-1">
                        {testimonial.name}
                      </h4>
                      <p className="text-lg text-gray-600 dark:text-gray-400 mb-1">
                        {testimonial.role}
                      </p>
                      <p className="text-lg text-gray-500 dark:text-gray-500">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Ready to work together and create something amazing?
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Let&apos;s Connect
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
