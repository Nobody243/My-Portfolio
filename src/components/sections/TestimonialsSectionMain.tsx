"use client";

import { motion } from "framer-motion";
import { InfiniteMovingCards } from "@/components/features/InfiniteMovingCards";
import { TextFillEffect } from "@/components/ui/animated/TextFillEffect";
import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export const TestimonialsSectionMain = () => {
  return (
    <>
      {/* Single Testimonial */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <motion.div 
              className="flex justify-center mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <Star className="w-8 h-8 fill-yellow-400 text-yellow-400" />
                </motion.div>
              ))}
            </motion.div>
            <motion.blockquote 
              className="text-2xl sm:text-3xl font-light mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              &quot;{testimonials[0]?.content || 'Working with Alex was an absolute pleasure. His attention to detail and technical expertise exceeded our expectations.'}&quot;
            </motion.blockquote>
            <motion.div 
              className="text-lg opacity-90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <p className="font-semibold">{testimonials[0]?.name || 'Sarah Johnson'}</p>
              <p>{testimonials[0]?.role || 'Project Manager'} at {testimonials[0]?.company || 'TechCorp'}</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Infinite Moving Testimonials */}
      <section className="py-12 bg-white dark:bg-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              <TextFillEffect
                text="What People Say"
                className="text-gray-900 dark:text-gray-100"
                delay={0.5}
                duration={4}
                as="span"
              />
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Feedback from colleagues, professors, and peers who have worked with me
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <InfiniteMovingCards
              items={testimonials.map(testimonial => ({
                quote: testimonial.content,
                name: testimonial.name,
                title: `${testimonial.role} at ${testimonial.company}`,
                avatar: testimonial.image
              }))}
              direction="right"
              speed="slow"
              className="mb-4"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};
