import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Zap,
  Shield,
  Code,
  Database,
  Globe,
  Palette,
  Package,
  Rocket,
} from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: "Modern Stack",
    description: "Built with the latest technologies including Next.js 15, React 19, and TypeScript for optimal performance and developer experience.",
    badge: "Cutting-edge",
  },
  {
    icon: Shield,
    title: "Secure Authentication",
    description: "Enterprise-grade authentication with Better Auth, session management, and support for multiple login providers.",
    badge: "Enterprise-ready",
  },
  {
    icon: Database,
    title: "Database Integration",
    description: "PostgreSQL with Drizzle ORM provides type-safe database operations and automatic migrations.",
    badge: "Type-safe",
  },
  {
    icon: Palette,
    title: "Beautiful UI",
    description: "Pre-built components with Tailwind CSS, Radix UI primitives, and dark mode support out of the box.",
    badge: "Responsive",
  },
  {
    icon: Zap,
    title: "Developer Experience",
    description: "Hot reload, TypeScript strict mode, ESLint configuration, and comprehensive tooling setup.",
    badge: "Productive",
  },
  {
    icon: Package,
    title: "Production Ready",
    description: "Docker containerization, environment configurations, and deployment-ready setup.",
    badge: "Scalable",
  },
];

export default function FeatureSection() {
  return (
    <section className="py-16 px-4" aria-labelledby="features-heading">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 id="features-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Everything You Need to Build Fast
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Stop wasting time configuring boilerplate. Focus on building your application 
            with a carefully curated stack of modern technologies and best practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-900/50 dark:to-gray-900/50 border hover:shadow-lg transition-shadow duration-300"
              role="article"
              aria-labelledby={`feature-title-${index}`}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/20">
                    <feature.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 id={`feature-title-${index}`} className="text-lg font-semibold">{feature.title}</h3>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}