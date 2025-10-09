# Tech Stack Document for hero-section-enhancer (Codeguide Starter Fullstack)

This document explains the technology choices behind the hero-section-enhancer template in plain English. It covers why each tool was chosen and how they work together to create a modern, dynamic hero section and full-stack web application.

## 1. Frontend Technologies

These are the tools we use to build the part of the app you see and interact with (the user interface).

- Next.js 15 (App Router)
  • A React framework that handles routing, server-side rendering, and static generation.
  • Lets us decide on the server if a user is logged in, so there’s no flash of wrong content on page load.

- React & TypeScript
  • React provides reusable UI components.
  • TypeScript adds type checking to catch errors early and make the code easier to understand.

- Tailwind CSS v4
  • A utility-first CSS framework for rapidly styling elements with simple class names.
  • Speeds up design tweaks—spacing, colors, and layouts can be changed directly in the HTML-like code.

- shadcn/ui
  • A library of pre-built, accessible UI components (buttons, cards, dialogs).
  • Ensures consistent look and feel across your hero section and other pages.

- next-themes
  • A simple way to add dark/light mode toggles.
  • Automatically applies theme preferences across all pages and components.

- Lucide React
  • A collection of modern, open-source icons for use in buttons, links, and feature highlights.

## 2. Backend Technologies

These tools power the logic, data storage, and server operations behind the scenes.

- Better Auth
  • A ready-made authentication library for sign-up, sign-in, and session management.
  • Integrates seamlessly with Next.js server components to protect routes and personalize content.

- PostgreSQL
  • A reliable, open-source relational database for storing user accounts and application data.

- Drizzle ORM
  • A TypeScript-friendly library that helps you write safe, easy-to-read database queries.
  • Keeps your database access code consistent and maintainable.

## 3. Infrastructure and Deployment

This section covers where the app runs and how updates get deployed.

- Docker & docker-compose
  • Define consistent local environments for backend, database, and frontend.
  • Ensures every team member runs the same setup without manual configuration.

- Vercel
  • A cloud platform optimized for Next.js projects.
  • Handles build, deploy, and automatic global CDN distribution in seconds.

- Git & GitHub
  • Version control to track code changes and collaborate with others.
  • Branching workflows keep feature work isolated until it’s ready to merge.

- (Optional) GitHub Actions
  • Automate testing and deployment steps whenever you push code.
  • Helps catch errors earlier and ensures a smooth delivery process.

## 4. Third-Party Integrations

These external libraries and services add key features without reinventing the wheel.

- Better Auth (Authentication)
  • Manages user sessions, password hashing, and secure cookies.

- shadcn/ui (UI Components)
  • Provides a set of accessible, themed components that match the project’s design system.

- Drizzle ORM (Database Access)
  • Acts as the bridge between your TypeScript code and the PostgreSQL database.

- next-themes (Theming)
  • Handles switching and persisting dark or light mode preferences.

- Lucide React (Icons)
  • Supplies a variety of scalable icons to enhance calls-to-action.

## 5. Security and Performance Considerations

How we keep data safe and make the app run smoothly.

- Secure Authentication
  • Better Auth uses industry-standard practices (encrypted passwords, secure cookies).
  • Server components check sessions before rendering protected content.

- Data Protection
  • PostgreSQL stores user data safely on the server side—no sensitive info leaks to the browser.
  • Drizzle ORM prevents SQL injection by construction.

- Performance Optimizations
  • Server-side rendering (SSR) in Next.js avoids flashes of unstyled or unauthorized content.
  • Tailwind CSS purges unused styles automatically in production.
  • Next.js built-in image optimization and code splitting reduce load times.

## 6. Conclusion and Overall Tech Stack Summary

By combining these technologies, the hero-section-enhancer template delivers:

- A **dynamic hero section** that adapts for logged-out vs. logged-in users without extra boilerplate.
- A **consistent design system** using Tailwind CSS and shadcn/ui to build and iterate on UI fast.
- **Secure authentication** and **type-safe data access** with Better Auth and Drizzle ORM.
- A **containerized development environment** for reliable local testing (Docker) and a **one-click deploy** to Vercel.

This stack strikes a balance between developer productivity, performance, and security. It’s ready for you to build a personalized, data-driven hero section and expand into a full-featured web application with confidence.