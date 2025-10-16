import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, Crown } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    description: "Perfect for personal projects and learning",
    price: "Free",
    features: [
      "Complete source code access",
      "Development setup guide",
      "Email & password authentication",
      "Basic UI components",
      "Community support",
      "MIT License",
    ],
    excluded: [
      "Priority support",
      "Advanced tutorials",
      "Custom integrations",
    ],
    badge: null,
    popular: false,
    cta: "Get Started",
    icon: Zap,
  },
  {
    name: "Professional",
    description: "For professional developers and teams",
    price: "$49",
    period: "one-time",
    features: [
      "Everything in Starter",
      "Advanced authentication (OAuth, SSO)",
      "Premium UI component library",
      "Admin dashboard templates",
      "API integration examples",
      "Testing setup (Jest, Cypress)",
      "Deployment configurations",
      "Priority email support",
      "Access to private Discord",
      "Lifetime updates",
    ],
    excluded: [],
    badge: "Most Popular",
    popular: true,
    cta: "Upgrade Now",
    icon: Star,
  },
  {
    name: "Enterprise",
    description: "For large teams and organizations",
    price: "Custom",
    features: [
      "Everything in Professional",
      "Custom authentication flows",
      "Enterprise database schemas",
      "Microservices architecture",
      "Advanced security features",
      "Custom component development",
      "Onboarding assistance",
      "Dedicated support channel",
      "Custom training sessions",
      "SLA guarantees",
      "Source code escrow",
    ],
    excluded: [],
    badge: "Enterprise",
    popular: false,
    cta: "Contact Sales",
    icon: Crown,
  },
];

export default function PricingSection() {
  return (
    <section className="py-16 px-4" aria-labelledby="pricing-heading">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 id="pricing-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the plan that fits your needs. Start free and upgrade as your 
            project grows. No hidden fees or surprise charges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative p-8 bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-900/50 dark:to-gray-900/50 border hover:shadow-lg transition-all duration-300 ${
                plan.popular 
                  ? 'ring-2 ring-blue-500 shadow-xl scale-105' 
                  : 'hover:scale-102'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge variant="default" className="px-4 py-1">
                    {plan.badge}
                  </Badge>
                </div>
              )}

              <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-4">
                  <div className={`flex items-center justify-center w-12 h-12 rounded-lg ${
                    plan.popular 
                      ? 'bg-blue-100 dark:bg-blue-900/20' 
                      : 'bg-gray-100 dark:bg-gray-800'
                  }`}>
                    <plan.icon className={`w-6 h-6 ${
                      plan.popular 
                        ? 'text-blue-600 dark:text-blue-400' 
                        : 'text-gray-600 dark:text-gray-400'
                    }`} />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-muted-foreground ml-2">{plan.period}</span>
                  )}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
                {plan.excluded.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3 opacity-50">
                    <span className="w-5 h-5 flex-shrink-0 mt-0.5 text-center">—</span>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-3">
                {plan.name === "Enterprise" ? (
                  <Button variant="outline" className="w-full" size="lg">
                    {plan.cta}
                  </Button>
                ) : (
                  <Link 
                    href={plan.name === "Starter" ? "/sign-up" : "#"}
                    className="block"
                  >
                    <Button 
                      className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : ''}`} 
                      size="lg"
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                )}
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 rounded-lg p-6 max-w-2xl mx-auto">
            <h4 className="font-semibold mb-2">30-Day Money Back Guarantee</h4>
            <p className="text-sm text-muted-foreground">
              Not satisfied? Get a full refund within 30 days, no questions asked.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}