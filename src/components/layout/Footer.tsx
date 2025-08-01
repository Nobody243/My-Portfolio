"use client";

import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import ScrollToTopButton from "@/components/navigation/ScrollToTopButton";

export default function Footer() {
  const currentYear = 2025;

  const socialLinks = [
    {
      name: "GitHub",
      href: siteConfig.social.github,
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: siteConfig.social.linkedin,
      icon: Linkedin,
    },
    {
      name: "Twitter",
      href: siteConfig.social.twitter,
      icon: Twitter,
    },
    {
      name: "Email",
      href: `mailto:${siteConfig.social.email}`,
      icon: Mail,
    },
  ];

  return (
    <footer className="gradient-bg-dark border-t border-gray-200/10">
      <div className="container-default section-padding">
        <div className="flex flex-col items-center justify-center space-y-4">
          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors focus-ring"
                  aria-label={link.name}
                >
                  <Icon className="h-6 w-6" />
                </Link>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-center text-body text-gray-400">
            <p>&copy; {currentYear} {siteConfig.name}. All rights reserved.</p>
          </div>

          {/* Back to top */}
          <ScrollToTopButton className="text-sm text-gray-500 hover:text-gray-300 transition-colors focus-ring">
            Back to top ↑
          </ScrollToTopButton>
        </div>
      </div>
    </footer>
  );
}
