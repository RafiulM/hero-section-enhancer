import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getSession } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default async function HeroSection() {
  const session = await getSession();

  return (
    <section className="relative py-16 sm:py-24 px-4" aria-labelledby="hero-heading">
      <div className="text-center">
        {/* Logo and Title */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Image
            src="/codeguide-logo.png"
            alt="CodeGuide Logo"
            width={60}
            height={60}
            className="rounded-xl"
            priority
          />
          <h1 id="hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent">
            Codeguide Starter Fullstack
          </h1>
        </div>

        {/* Dynamic Content Based on Authentication */}
        {!session?.data?.user ? (
          // Unauthenticated User Content
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-6">
              Build Modern Web Applications Faster
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              A complete full-stack TypeScript starter with authentication, database integration, 
              and beautiful UI components. Everything you need to ship your next project.
            </p>
            <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-blue-200/50 dark:border-blue-700/30 max-w-md mx-auto">
              <h3 className="text-xl font-semibold mb-4">Start Building Today</h3>
              <p id="signup-description" className="text-muted-foreground mb-6">
                Join thousands of developers using Codeguide to build production-ready applications 
                with modern tools and best practices.
              </p>
              <Link href="/sign-up" aria-label="Sign up for Codeguide for free">
                <Button size="lg" className="w-full" aria-describedby="signup-description">
                  Sign Up for Free
                </Button>
              </Link>
            </Card>
          </div>
        ) : (
          // Authenticated User Content
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-6">
              Welcome back, {session.data.user.name || 'Developer'}!
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ready to continue building amazing things? Your dashboard awaits with all the tools 
              you need to create, deploy, and scale your applications.
            </p>
            <Card className="p-8 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200/50 dark:border-green-700/30 max-w-md mx-auto">
              <h3 className="text-xl font-semibold mb-4">Continue Your Journey</h3>
              <p id="dashboard-description" className="text-muted-foreground mb-6">
                Access your dashboard to manage your projects, view analytics, and take advantage 
                of all the powerful features Codeguide has to offer.
              </p>
              <Link href="/dashboard" aria-label="Navigate to your dashboard">
                <Button size="lg" className="w-full" aria-describedby="dashboard-description">
                  Go to Dashboard
                </Button>
              </Link>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
}