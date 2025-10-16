# Project Requirements Document (PRD)

## 1. Project Overview

**Project Name:** hero-section-enhancer (Codeguide Starter Fullstack)

This project is all about building a **dynamic, personalized hero section** for a modern web application. Starting from the existing `hero-section-enhancer` full-stack Next.js 15 template (the "Codeguide Starter Fullstack"), the goal is to swap out the static landing-page hero with two tailored variants: one for anonymous visitors (encouraging them to sign up) and another for returning, authenticated users (welcoming them back and pointing them toward their dashboard).

By leveraging the template’s built-in authentication, database connection, and UI component library, we’ll create a hero section that: 1) checks the user’s session server-side; 2) pulls basic user data from the database; and 3) conditionally renders the appropriate UI. Success is measured by: 1) correct conditional rendering for both user states, 2) smooth server-side performance (no content flashes), and 3) a clean, reusable component structure that future features (like A/B testing or animations) can attach to.

## 2. In-Scope vs. Out-of-Scope

**In-Scope (Version 1):**
- Implement two new hero components: `LoggedOutHero` and `LoggedInHero`.
- Integrate server-side session checks using the existing `Better Auth` setup in `lib/auth.ts`.
- Fetch the authenticated user’s name (and any other basic profile data) from PostgreSQL via Drizzle ORM.
- Build the UI with `shadcn/ui` components and Tailwind CSS utility classes.
- Ensure no flash of unauthenticated content by using Next.js Server Components in `/app/page.tsx`.
- Write unit tests for both hero variants using Jest and React Testing Library.

**Out-of-Scope (Version 1):**
- Full A/B testing framework or analytics integration (this can be added later).
- Advanced animations beyond simple CSS transitions (framer-motion integration is deferred).
- Multi-language or localization support.
- Mobile-only layouts or a separate mobile app.
- Detailed CI/CD pipelines or performance monitoring beyond basic linting and testing.

## 3. User Flow

When any visitor lands on the home page (`/`), the server component in `app/page.tsx` immediately calls an auth helper from `lib/auth.ts` to determine session state. 

- **Anonymous User Journey:** The helper finds no active session, so the page renders `LoggedOutHero`. This component shows a prominent headline, a brief value proposition, and a large "Sign Up for Free" button (shadcn `Button`). When clicked, it routes to the `/sign-up` form.

- **Authenticated User Journey:** The helper confirms a valid session, then the server component queries Drizzle ORM for the user’s profile data. It renders `LoggedInHero`, which greets the user by name (e.g., “Welcome back, Jane!”) and presents a secondary call-to-action button like "Go to Your Dashboard" that links to `/dashboard`. Both flows happen without any client-side flicker because rendering is done server-side.

## 4. Core Features

- **Server-Side Session Check:** Use `Better Auth` to verify login status in Next.js Server Components.
- **Conditional Rendering:** Swap between `LoggedOutHero` and `LoggedInHero` based on session existence.
- **Data Fetching:** For `LoggedInHero`, query PostgreSQL via Drizzle ORM to retrieve the user’s display name.
- **UI Composition:** Build both hero variants using `shadcn/ui` components (Buttons, Cards, Headings) and style with Tailwind CSS.
- **Routing:** Link primary CTAs appropriately (`/sign-up`, `/dashboard`).
- **Unit Testing:** Cover both hero variants and the session-detection logic with Jest + React Testing Library.

## 5. Tech Stack & Tools

- **Frontend Framework:** Next.js 15 (App Router) with React Server Components.
- **Language:** TypeScript.
- **Authentication:** Better Auth (server-side session management).
- **Database:** PostgreSQL via Drizzle ORM.
- **Styling:** Tailwind CSS v4 (utility classes) + `cn` helper for conditional class names.
- **UI Components:** shadcn/ui (pre-built accessible components).
- **Icons:** Lucide React.
- **Containerization:** Docker & docker-compose for local dev parity.
- **Hosting:** Vercel (optimized deployment).
- **Testing:** Jest & React Testing Library.

## 6. Non-Functional Requirements

- **Performance:** Time to first byte (TTFB) under 200 ms on a typical authenticated check. No client-side flash of incorrect hero.
- **Security:** All auth tokens stored securely (cookies with HttpOnly, Secure flags). Follow OWASP best practices for session management.
- **Accessibility:** WCAG 2.1 AA compliance for hero elements (proper ARIA labels, focus order, color contrast).
- **Maintainability:** Code must be modular with clear file boundaries (`/app`, `/components`, `/lib`). Every new component has a `.test.tsx` file.
- **Scalability:** Component-based design so future features (animations, A/B tests) plug in without refactoring the core logic.

## 7. Constraints & Assumptions

- **Dependencies:** Assumes Better Auth, Drizzle ORM, and PostgreSQL are already configured and working from the starter template.
- **Environment:** Node.js 20+, Docker installed for local environment.
- **Assumption:** User profiles contain at least a `name` field to personalize the hero.
- **Constraint:** Must use Next.js Server Components (no client-only hero logic).

## 8. Known Issues & Potential Pitfalls

- **API Rate Limits:** If too many session checks occur simultaneously, consider caching session lookups or adding rate-limiting on the auth endpoint.
- **SSR Data Delays:** Fetching user data in the server component can add latency. Mitigation: only fetch minimal fields, and consider edge caching in future releases.
- **Styling Conflicts:** Tailwind’s utility-first approach sometimes clashes with global styles. Use the `cn` helper to compose class names carefully.
- **Environment Variables:** Missing `DATABASE_URL` or `AUTH_SECRET` can break the build. Ensure `.env.example` is up-to-date.
- **Testing Auth:** Mock the `lib/auth.ts` module properly in tests to avoid real-session checks.

---

This PRD captures the essential goals, features, and boundaries for building a robust, server-side, dynamic hero section. It’s structured to guide an AI or developer team to generate detailed technical documents (tech stack spec, file structure, component guidelines) without ambiguity.