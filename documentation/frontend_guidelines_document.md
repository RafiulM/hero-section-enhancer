# Frontend Guideline Document for **hero-section-enhancer** (Codeguide Starter Fullstack)

This document outlines the frontend architecture, design principles, styling, component structure, state management, routing, performance optimizations, testing strategies, and other key details for the **hero-section-enhancer** project. It is written in plain language so anyone can understand and use it as a roadmap for building and maintaining the frontend.

## 1. Frontend Architecture

### 1.1 Overview
- **Framework**: Next.js 15 (App Router) with built-in server components.  
- **Language**: TypeScript for type safety and maintainability.  
- **UI Library**: `shadcn/ui` (New York style) for accessible, pre-styled React components.  
- **Styling**: Tailwind CSS v4 (utility-first) plus `next-themes` for theming.  
- **Authentication**: Better Auth handles sign-up, sign-in, and session checks on the server.  
- **Database & ORM**: PostgreSQL accessed via Drizzle ORM for type-safe data fetching.  
- **Icons**: Lucide React.  
- **Containerization**: Docker + docker-compose for consistent dev environments.  
- **Deployment**: Optimized for Vercel out of the box.

### 1.2 Scalability, Maintainability, Performance
- **Server Components** let us fetch data (like user sessions) on the server and deliver HTML with no client flash.  
- **Component-based design** keeps UI pieces small, reusable, and easy to test.  
- **TypeScript** reduces runtime errors and makes refactoring safe.  
- **Tailwind CSS** utility classes speed up styling and avoid bloated stylesheets.  
- **Docker** ensures everyone develops with the same environment, preventing "works on my machine" issues.  
- **Next.js built-in optimizations** (image resizing, code splitting) improve load times.

## 2. Design Principles

### 2.1 Key Principles
1. **Usability**: Interfaces must be intuitive—buttons and links are clearly labeled and easy to find.  
2. **Accessibility**: All UI components (from `shadcn/ui`) follow WAI-ARIA guidelines. Keyboard navigation, focus states, and screen reader labels are built in.  
3. **Responsiveness**: Layouts adapt seamlessly from mobile to desktop using Tailwind’s responsive utilities.  
4. **Consistency**: A unified look and feel through theming and shared component library.  
5. **Performance**: Minimize load times with server rendering, lazy loading, and optimized assets.

### 2.2 Applying Principles in the Hero Section
- **Clear calls-to-action**: Primary buttons stand out with consistent color and padding.  
- **Accessible text sizes**: Headlines and paragraphs follow a scale that is legible on all devices.  
- **Responsive layout**: Hero content stacks vertically on small screens and lays out side-by-side on larger viewports.  
- **Conditional content**: Personalized greetings or buttons appear based on user authentication state.

## 3. Styling and Theming

### 3.1 Styling Approach
- **Utility-First**: Tailwind CSS v4 for rapid iteration—no custom CSS files unless absolutely necessary.  
- **Class Merging**: Use the `cn` helper from `lib/utils.ts` to compose class names and handle conditional styles.  
- **No BEM/SMACSS**: Utilities replace traditional naming conventions.

### 3.2 Theming
- **Dark/Light Mode**: Managed by `next-themes`. Wrap the app in a `ThemeProvider`, toggle modes with a simple switch.  
- **Global tokens**: Colors, fonts, and spacing are defined via Tailwind’s theme configuration (`tailwind.config.js`).

### 3.3 Visual Style and Palette
- **Design Style**: Modern flat design with subtle depth (e.g., shadow on cards).  
- **Color Palette**:  
  - Primary Blue: `#3B82F6` (buttons, links)  
  - Secondary Indigo: `#6366F1` (accents, hover states)  
  - Accent Teal: `#14B8A6` (highlights, success states)  
  - Background Light: `#F9FAFB`  
  - Background Dark: `#1F2937`  
  - Text Dark: `#111827`  
  - Text Light: `#F3F4F6`  
- **Typography**:  
  - Primary Font: Inter, system-ui, sans-serif.  
  - Scale:  
    • h1: 2.25rem (36px)  
    • h2: 1.875rem (30px)  
    • h3: 1.5rem (24px)  
    • body: 1rem (16px)  
    • small: 0.875rem (14px)

## 4. Component Structure

### 4.1 Organization
- `/app` directory holds routes and server components.  
- `/components` holds reusable UI pieces (e.g., `Hero`, `HeroAuthButtons`, `Button`, `Card`).  
- `/lib` holds utilities and authentication helpers (`lib/auth.ts`, `lib/utils.ts`).  
- `/components/ui` is auto-generated UI components from `shadcn/ui`.

### 4.2 Reusability
- Break down complex UIs into small parts: `HeroHeadline`, `HeroCTA`, `FeatureList`, `LoggedInHero`, `LoggedOutHero`.  
- Each component lives in its own folder with `[name].tsx` and optional `[name].test.tsx`.

### 4.3 Benefits
- **Maintainability**: Changing one piece doesn’t risk breaking others.  
- **Clarity**: New developers can quickly find and understand each piece.  
- **Testability**: Small units are easier to write targeted tests for.

## 5. State Management

### 5.1 Server vs. Client State
- **Server State**: User session and data come from the server via Next.js server components.  
- **Client State**: Local UI interactions (e.g., open/close modals) use React’s `useState` or `useReducer`.

### 5.2 Global State
- **Auth Context**: Optionally wrap part of the UI in a React Context to share user info on the client.  
- **Caching**: For data-driven hero content, consider SWR or React Query to cache and revalidate client-side fetched data.

## 6. Routing and Navigation

### 6.1 App Router
- **File-based routing** in `/app`.  
- **Server Components** by default; prefix client components with `'use client'` when needed.

### 6.2 Navigating Between Pages
- Use Next.js `<Link>` component for client-side transitions.  
- Protect routes by checking session in server components; redirect unauthenticated users to `/sign-in`.

### 6.3 Hero Section Flow
1. User visits `/`  
2. Server component in `app/page.tsx` calls helper from `lib/auth.ts`.  
3. Based on session, render `LoggedInHero` or `LoggedOutHero`.

## 7. Performance Optimization

- **Server-Side Rendering (SSR)**: Hero content is rendered on the server, reducing layout shifts.  
- **Code Splitting**: Next.js splits each route automatically; use dynamic imports (`next/dynamic`) for heavy components.  
- **Lazy Loading**: Images via `<Image>` component with `loading="lazy"`.  
- **Asset Compression**: Enable Brotli/Gzip via Vercel or custom server.  
- **CDN Caching**: Static assets served from a CDN by default on Vercel.

## 8. Testing and Quality Assurance

### 8.1 Unit Tests
- **Framework**: Jest with `ts-jest`.  
- **Utilities**: React Testing Library for component rendering and interaction.

### 8.2 Integration Tests
- Test server-client interactions (e.g., hero switches based on fake sessions).  
- Use Jest + Next.js testing utilities or MSW (Mock Service Worker) for API mocking.

### 8.3 End-to-End Tests
- **Tool**: Cypress or Playwright.  
- **Scenarios**:  
  - Guest visits homepage → sees “Sign Up” button.  
  - Authenticated user visits homepage → sees personalized greeting and “Go to Dashboard.”

### 8.4 Linting & Formatting
- **ESLint** with recommended React, Next.js, and TypeScript rules.  
- **Prettier** for code formatting.  
- **Pre-commit hooks** via Husky to run `lint-staged` on changed files.

## 9. Conclusion and Overall Frontend Summary

This frontend setup combines **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **shadcn/ui** to create a robust, scalable, and maintainable foundation. Key highlights include:

- **Server-first approach** with Next.js App Router and Server Components for secure, fast rendering.  
- **Dynamic hero section** powered by Better Auth, allowing personalized experiences out of the box.  
- **Utility-first styling** plus theming for consistent, responsive, and accessible design.  
- **Modular components** and clear directory structure for ease of development and testing.  
- **Performance optimizations** baked in via lazy loading, code splitting, and Vercel integration.  
- **Comprehensive testing** strategy that covers unit, integration, and end-to-end scenarios.

By following these guidelines, developers can quickly build, maintain, and extend the hero section (and the rest of the application) while ensuring a high-quality user experience that adapts to both anonymous and authenticated visitors.