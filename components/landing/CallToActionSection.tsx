import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Github, Star, Users, Zap } from "lucide-react";
import Link from "next/link";

const stats = [
  { icon: Star, label: "GitHub Stars", value: "2.5k+" },
  { icon: Users, label: "Developers", value: "10k+" },
  { icon: Zap, label: "Projects Built", value: "500+" },
];

export default function CallToActionSection() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-slate-900 to-blue-900 text-white" aria-labelledby="cta-heading">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-6 text-lg px-6 py-2">
            Ready to Get Started?
          </Badge>
          <h2 id="cta-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Build Your Next Application Today
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Join thousands of developers who are shipping faster with Codeguide. 
            No credit card required. Start building in minutes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link href="/sign-up">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-6 text-lg font-semibold">
                Start Building Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-6 text-lg font-semibold"
            >
              <Github className="mr-2 w-5 h-5" />
              View on GitHub
            </Button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className="bg-white/10 backdrop-blur-sm border-white/20 p-6 text-center"
            >
              <div className="flex items-center justify-center mb-3">
                <stat.icon className="w-6 h-6 text-blue-300" />
              </div>
              <div className="text-2xl font-bold mb-1">{stat.value}</div>
              <div className="text-blue-100 text-sm">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Features List */}
        <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 border-blue-500 p-8">
          <h3 className="text-xl font-semibold mb-6 text-center">Everything Included Out of the Box</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
              <span>Complete authentication system</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
              <span>Database setup with migrations</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
              <span>Beautiful UI components</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
              <span>TypeScript throughout</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
              <span>Production deployment ready</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
              <span>Comprehensive documentation</span>
            </div>
          </div>
        </Card>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-blue-100 mb-4">
            Questions? Check out our <span className="underline">documentation</span> or{' '}
            <span className="underline">join our Discord</span>
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-blue-200">
            <span>MIT License</span>
            <span>•</span>
            <span>No Vendor Lock-in</span>
            <span>•</span>
            <span>Community Driven</span>
          </div>
        </div>
      </div>
    </section>
  );
}