"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Code,
  Database,
  Shield,
  Zap,
  Globe,
  Palette,
  Package,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { AuthButtons } from "@/components/auth-buttons";
import Image from "next/image";
import Link from "next/link";
import { User, UserPlus, LogIn, ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface UserSession {
  user: {
    id: string;
    name?: string;
    email?: string;
    image?: string;
  };
}

interface HeroSectionProps {
  session?: UserSession | null;
}

export function HeroSection({ session }: HeroSectionProps) {
  return (
    <div className="text-center py-12 sm:py-16 relative px-4 overflow-hidden">
      {/* Background gradient animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/20 dark:via-indigo-950/20 dark:to-purple-950/20 -z-10" />
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-300/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse dark:bg-blue-900/20" />
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-purple-300/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000 dark:bg-purple-900/20" />
      <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-pink-300/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000 dark:bg-pink-900/20" />
      
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
        <div className="flex items-center gap-2 sm:gap-3">
          <AuthButtons />
          <ThemeToggle />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 relative z-10">
        <div className="relative group">
          <Image
            src="/codeguide-logo.png"
            alt="CodeGuide Logo"
            width={60}
            height={60}
            className="rounded-xl sm:w-[70px] sm:h-[70px] transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
          />
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-300" />
        </div>
        <div className="relative">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent font-parkinsans leading-tight">
            Codeguide Starter
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-600 to-gray-400 dark:from-gray-400 dark:to-gray-600 bg-clip-text text-transparent font-parkinsans mt-1">
            Fullstack
          </h2>
        </div>
      </div>
      
      {session?.user ? (
        <LoggedInHero user={session.user} />
      ) : (
        <LoggedOutHero />
      )}
    </div>
  );
}

function LoggedOutHero() {
  return (
    <div className="relative z-10">
      <div className="flex items-center justify-center gap-2 mb-4">
        <Sparkles className="h-5 w-5 text-yellow-500 animate-pulse" />
        <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
          Modern Development Stack
        </p>
        <Sparkles className="h-5 w-5 text-yellow-500 animate-pulse" />
      </div>
      
      <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4 mb-8 leading-relaxed">
        A powerful full-stack TypeScript starter with authentication, database, and 
        beautiful UI components. Build production-ready applications faster than ever.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Button 
          asChild 
          size="lg" 
          className={cn(
            "text-base px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700",
            "border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105",
            "focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
          )}
          aria-label="Get started with Codeguide Starter"
        >
          <Link href="/sign-up">
            <UserPlus className="mr-2 h-5 w-5" />
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
        <Button 
          asChild 
          variant="outline" 
          size="lg" 
          className={cn(
            "text-base px-8 py-3 border-2 border-gray-300 dark:border-gray-600",
            "hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105",
            "focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
          )}
          aria-label="Sign in to your account"
        >
          <Link href="/sign-in">
            <LogIn className="mr-2 h-5 w-5" />
            Sign In
          </Link>
        </Button>
      </div>
      
      <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-1">
          <Shield className="h-4 w-4 text-green-500" />
          <span>Secure Auth</span>
        </div>
        <div className="flex items-center gap-1">
          <Database className="h-4 w-4 text-blue-500" />
          <span>PostgreSQL</span>
        </div>
        <div className="flex items-center gap-1">
          <Zap className="h-4 w-4 text-yellow-500" />
          <span>Lightning Fast</span>
        </div>
        <div className="flex items-center gap-1">
          <Palette className="h-4 w-4 text-purple-500" />
          <span>Beautiful UI</span>
        </div>
      </div>
    </div>
  );
}

function LoggedInHero({ user }: { user: UserSession["user"] }) {
  const firstName = user.name?.split(" ")[0] || user.email?.split("@")[0] || "there";
  
  return (
    <div className="relative z-10">
      <div className="flex items-center justify-center gap-2 mb-4">
        <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse" />
        <p className="text-sm font-medium text-green-600 dark:text-green-400 uppercase tracking-wider">
          Welcome Back
        </p>
        <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse" />
      </div>
      
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-2xl p-6 mb-6 max-w-2xl mx-auto border border-blue-200 dark:border-blue-800">
        <p className="text-lg sm:text-xl text-muted-foreground mb-2">
          Hello, <span className="font-bold text-foreground text-xl">{firstName}</span>! 👋
        </p>
        <p className="text-base text-muted-foreground leading-relaxed">
          Ready to continue building amazing projects with your modern full-stack starter?
        </p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Button 
          asChild 
          size="lg" 
          className={cn(
            "text-base px-8 py-3 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700",
            "border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105",
            "focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800"
          )}
          aria-label="Go to your dashboard"
        >
          <Link href="/dashboard">
            <User className="mr-2 h-5 w-5" />
            Go to Dashboard
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
      
      <div className="mt-6 text-center">
        <p className="text-sm text-muted-foreground">
          Need help? Check out our{' '}
          <Link href="/docs" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 underline">
            documentation
          </Link>
          {' '}or{' '}
          <Link href="/support" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 underline">
            contact support
          </Link>
        </p>
      </div>
    </div>
  );
}