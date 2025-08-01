"use client";

import { useState } from "react";
import { Button } from "@/components/ui/core";
import { Input } from "@/components/ui/core";
import { Textarea } from "@/components/ui/core";
import { Label } from "@/components/ui/core";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/core";
import { Send } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    
    // Reset form
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
    
    // Show success message (you can replace this with a toast notification)
    alert("Message sent successfully! (This is just a demo)");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="card-default w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="heading-secondary text-center">Get In Touch</CardTitle>
          <CardDescription className="text-body text-center">
            Have a question or want to work together? Send me a message!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-body-large">Name</Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full focus-ring"
              />
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-body-large">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full focus-ring"
              />
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <Label htmlFor="message" className="text-body-large">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell me about your project or just say hello!"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full min-h-[120px] resize-none focus-ring"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full"
              size="lg"
            >
              {isSubmitting ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Sending...
                </div>
              ) : (
                <div className="flex items-center">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </div>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}
