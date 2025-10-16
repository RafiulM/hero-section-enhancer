import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Full-Stack Developer",
    company: "TechCorp",
    content: "Codeguide has transformed our development workflow. What used to take weeks now takes days. The TypeScript integration and authentication setup are particularly impressive.",
    rating: 5,
    avatar: "SC",
  },
  {
    name: "Michael Rodriguez",
    role: "Startup Founder",
    company: "InnovateLabs",
    content: "As a non-technical founder, I needed something that would let me move fast without sacrificing quality. Codeguide delivered exactly that. Our MVP was built in record time.",
    rating: 5,
    avatar: "MR",
  },
  {
    name: "Emily Watson",
    role: "Frontend Engineer",
    company: "DesignStudio",
    content: "The UI components and design system are beautiful out of the box. I love that I can focus on building unique features instead of reinventing the wheel.",
    rating: 5,
    avatar: "EW",
  },
  {
    name: "David Kim",
    role: "DevOps Engineer",
    company: "CloudScale",
    content: "The Docker setup and deployment configuration saved us countless hours. Everything just works, which is exactly what you want in a production environment.",
    rating: 5,
    avatar: "DK",
  },
  {
    name: "Lisa Thompson",
    role: "Product Manager",
    company: "StartupHub",
    content: "Codeguide lets our team iterate quickly while maintaining code quality. The built-in best practices and comprehensive documentation make onboarding new developers seamless.",
    rating: 5,
    avatar: "LT",
  },
  {
    name: "Alex Johnson",
    role: "Freelance Developer",
    company: "Independent",
    content: "I've tried many starters, but Codeguide is by far the most complete. The authentication flow alone would have taken me weeks to build from scratch.",
    rating: 5,
    avatar: "AJ",
  },
];

export default function TestimonialSection() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10" aria-labelledby="testimonials-heading">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Quote className="w-8 h-8 text-blue-600 dark:text-blue-400" aria-hidden="true" />
            <Badge variant="outline" className="text-base px-4 py-1">
              Trusted by Developers
            </Badge>
          </div>
          <h2 id="testimonials-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Loved by Thousands of Developers
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Join developers from startups and enterprises who are building amazing 
            applications with Codeguide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-6 bg-white dark:bg-slate-900/50 border hover:shadow-lg transition-shadow duration-300"
              role="article"
              aria-labelledby={`testimonial-name-${index}`}
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-4 h-4 fill-yellow-400 text-yellow-400" 
                    aria-hidden="true"
                  />
                ))}
              </div>
              
              <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                <q>{testimonial.content}</q>
              </blockquote>
              
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white font-semibold text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <div id={`testimonial-name-${index}`} className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role} • {testimonial.company}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-4 text-sm text-muted-foreground">
            <Badge variant="secondary">4.9/5 Average Rating</Badge>
            <span>•</span>
            <Badge variant="secondary">10,000+ Developers</Badge>
            <span>•</span>
            <Badge variant="secondary">500+ Companies</Badge>
          </div>
        </div>
      </div>
    </section>
  );
}