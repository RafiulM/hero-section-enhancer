import { ThemeToggle } from "@/components/theme-toggle";
import { AuthButtons } from "@/components/auth-buttons";
import HeroSection from "@/components/landing/HeroSection";
import FeatureSection from "@/components/landing/FeatureSection";
import TestimonialSection from "@/components/landing/TestimonialSection";
import PricingSection from "@/components/landing/PricingSection";
import CallToActionSection from "@/components/landing/CallToActionSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Codeguide - Build Modern Web Applications Faster",
  description: "A complete full-stack TypeScript starter with authentication, database integration, and beautiful UI components. Everything you need to ship your next project.",
  keywords: ["Next.js", "TypeScript", "React", "Full-stack", "Authentication", "Database", "UI Components"],
  openGraph: {
    title: "Codeguide - Build Modern Web Applications Faster",
    description: "A complete full-stack TypeScript starter with authentication, database integration, and beautiful UI components.",
    type: "website",
    images: [{
      url: "/codeguide-logo.png",
      width: 1200,
      height: 630,
      alt: "Codeguide Logo",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Codeguide - Build Modern Web Applications Faster",
    description: "A complete full-stack TypeScript starter with authentication, database integration, and beautiful UI components.",
    images: ["/codeguide-logo.png"],
  },
};

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Codeguide",
    "description": "A complete full-stack TypeScript starter with authentication, database integration, and beautiful UI components",
    "url": typeof window !== 'undefined' ? window.location.origin : "",
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "author": {
      "@type": "Organization",
      "name": "Codeguide"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        {/* Header with Auth */}
        <header className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50" role="banner">
          <div className="flex items-center gap-2 sm:gap-3">
            <AuthButtons />
            <ThemeToggle />
          </div>
        </header>

        <main role="main">
          {/* Hero Section */}
          <section aria-labelledby="hero-heading">
            <HeroSection />
          </section>
          
          {/* Feature Section */}
          <section aria-labelledby="features-heading">
            <FeatureSection />
          </section>
          
          {/* Testimonial Section */}
          <section aria-labelledby="testimonials-heading">
            <TestimonialSection />
          </section>
          
          {/* Pricing Section */}
          <section aria-labelledby="pricing-heading">
            <PricingSection />
          </section>
          
          {/* Call to Action Section */}
          <section aria-labelledby="cta-heading">
            <CallToActionSection />
          </section>
        </main>
      </div>
    </>
  );
}