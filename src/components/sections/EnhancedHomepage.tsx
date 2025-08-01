"use client";

import { useRef } from "react";
import { Heart } from "lucide-react";
import { HeroSectionMain } from "./HeroSectionMain";
import { StatsSection } from "./StatsSection";
import { FeaturedProjectsSection } from "./FeaturedProjectsSection";
import { SkillsSection } from "./SkillsSection";
import { TestimonialsSectionMain } from "./TestimonialsSectionMain";
import { CTASection } from "./CTASection";

export default function ModernHomepage() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="min-h-screen overflow-hidden relative">
      {/* Hero Section */}
      <HeroSectionMain containerRef={containerRef} />

      {/* Stats Section */}
      <StatsSection />

      {/* Featured Projects Section */}
      <FeaturedProjectsSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Testimonials Section */}
      <TestimonialsSectionMain />

      {/* CTA Section */}
      <CTASection
        title="Ready to Work Together?"
        description="Let's discuss your next project and create something extraordinary!"
        primaryButton={{
          text: "Let's Talk",
          href: "/contact",
          icon: Heart
        }}
        secondaryButton={{
          text: "Learn More About Me",
          href: "/about"
        }}
      />
    </div>
  );
}
