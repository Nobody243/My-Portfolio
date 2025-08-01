"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/core/button";
import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="gradient-bg-light min-h-screen flex items-center justify-center">
      <div className="container-default text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* 404 Number */}
          <motion.h1 
            className="text-9xl sm:text-[12rem] font-bold text-gray-200 dark:text-gray-700 mb-4"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            404
          </motion.h1>

          {/* Error Message */}
          <h2 className="heading-secondary mb-4">
            Page Not Found
          </h2>
          
          <p className="text-body-large mb-8 max-width-prose">
            Sorry, the page you are looking for does not exist or has been moved.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg">
              <Link href="/" className="flex items-center">
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </Link>
            </Button>
            
            <Button variant="outline" size="lg" onClick={() => window.history.back()}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </Button>
          </div>

          {/* Additional Help */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 p-6 bg-white/50 dark:bg-gray-800/50 rounded-lg backdrop-blur-sm"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Looking for something specific?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Try one of these popular pages:
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              <Link 
                href="/about" 
                className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-md hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
              >
                About
              </Link>
              <Link 
                href="/projects" 
                className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-md hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
              >
                Projects
              </Link>
              <Link 
                href="/contact" 
                className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-md hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
              >
                Contact
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
