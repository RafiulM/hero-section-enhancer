# Backend Structure Document

## 1. Backend Architecture

Our backend is built on Node.js using Next.js 15’s App Router. It leverages server components and API routes to keep the code organized, maintainable, and fast.

- **Framework & Design Patterns**
  - Next.js App Router (server & client components) for hybrid rendering
  - Modular folder structure:
    - `/app` — routing and page-level server code
    - `/lib` — shared services (authentication helpers, database connection)
    - `/api` — RESTful API routes where needed
  - Drizzle ORM separates data-access logic from application logic
  - Business logic lives in small, single-purpose modules (e.g., `lib/auth.ts`, `lib/db.ts`)

- **Scalability**
  - Serverless functions (via Vercel) auto-scale with traffic
  - Stateless API routes make horizontal scaling trivial
  - Connection pooling handled by the PostgreSQL driver

- **Maintainability**
  - TypeScript enforces consistent types across services
  - Clear separation of concerns: routing, business logic, data access, and UI components live in dedicated folders
  - Reusable utilities (e.g., `cn` for className management) in `/lib/utils.ts`

- **Performance**
  - Server Components deliver pre-rendered HTML with user data before reaching the browser, reducing time to interactive
  - Built–in caching strategies (Next.js ISR and Edge Caching)

## 2. Database Management

We use PostgreSQL (a relational SQL database) paired with Drizzle ORM to manage data.

- **Database Type**: SQL (Relational)
- **Database System**: PostgreSQL
- **ORM**: Drizzle ORM for type-safe queries and migrations
- **Connection Handling**
  - Single connection pool via `pg` driver
  - Environment-driven configuration for host, port, user, password
- **Data Practices**
  - Migrations tracked in code for version control
  - Environment-specific databases (development, staging, production)
  - Backups scheduled at the database provider level (e.g., AWS RDS snapshots)

## 3. Database Schema

The following schema is for a PostgreSQL database. It covers basic user accounts and session tracking.

```sql
-- Users table stores each user’s profile and credentials
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT,
  email TEXT UNIQUE NOT NULL,
  image TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Sessions table tracks active sessions for authenticated users
CREATE TABLE sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_token TEXT UNIQUE NOT NULL,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  expires TIMESTAMPTZ NOT NULL
);

-- Example index to speed up lookup by session_token
CREATE INDEX idx_sessions_token ON sessions(session_token);
```

## 4. API Design and Endpoints

We use RESTful routes via Next.js API routes and server components for backend communication.

- **Authentication Endpoints** (provided by Better Auth)
  - `POST /api/auth/sign-up` — create a new account
  - `POST /api/auth/sign-in` — user login
  - `POST /api/auth/sign-out` — end session
  - `GET  /api/auth/session` — check current session

- **User Data Endpoints**
  - `GET  /api/user/profile` — fetch basic user info (name, email, image)
  - `GET  /api/user/hero-data` — optional custom data for the hero section

- **Dashboard & Feature Endpoints**
  - `GET  /api/dashboard/stats` — pull user-specific metrics for dashboard

- **Communication Flow**
  1. Client (or server component) requests `GET /api/auth/session` to verify login status.
  2. If logged in, Next.js server component fetches additional data via protected endpoints.
  3. Server renders the page with personalized content before sending HTML to the browser.

## 5. Hosting Solutions

- **Local Development**
  - Docker & `docker-compose` bring up:
    - Next.js application
    - PostgreSQL database
  - Mirrored environment variables for safety and consistency

- **Production**
  - Next.js deployed on Vercel (serverless functions, global CDN)
  - PostgreSQL hosted on a managed service (e.g., AWS RDS, Supabase)

- **Benefits**
  - Zero-maintenance serverless scaling for the application
  - Automatic CI/CD on every push to main (via Vercel)
  - Pay-as-you-go infrastructure costs
  - Built-in HTTPS and global content delivery

## 6. Infrastructure Components

- **Load Balancer & CDN**
  - Vercel Edge Network routes traffic and caches static assets globally

- **Caching**
  - HTTP caching headers (ISR) for public pages
  - On-demand caching via Next.js Edge Config (for A/B testing or feature flags)

- **Containerization**
  - Docker images define consistent build and run environments
  - `docker-compose` orchestration for local multi‐service setups

- **Background Jobs (optional)**
  - If needed, scheduled tasks (e.g., cleanup expired sessions) can run in separate serverless functions or cron containers

## 7. Security Measures

- **Authentication & Authorization**
  - Better Auth library with secure cookies (HTTPOnly, SameSite=strict)
  - Server-side session validation in Next.js Server Components

- **Data Protection**
  - TLS/SSL enforced on all endpoints
  - Environment variables for secrets (never checked into Git)
  - Database encryption at rest (managed by hosting provider)

- **Input Sanitization & Validation**
  - Drizzle ORM’s parameterized queries prevent SQL injection
  - Zod (or similar) can validate request payloads at the API boundary

- **Other Best Practices**
  - Rate limiting at the API layer (can be added via middleware)
  - CORS restricted to known frontends

## 8. Monitoring and Maintenance

- **Logging & Error Tracking**
  - Vercel built-in logs for serverless functions
  - Sentry (or similar) for capturing exceptions and performance traces

- **Performance Monitoring**
  - Vercel Analytics for page-load metrics
  - Database query monitoring via provider dashboard

- **Maintenance Strategies**
  - Automated Drizzle migrations for database schema changes
  - Scheduled backups and restore drills for PostgreSQL
  - Dependency updates via Dependabot or Renovate for security patches

## 9. Conclusion and Overall Backend Summary

This backend setup uses Next.js 15’s App Router and serverless functions to deliver a scalable, maintainable, and high-performance foundation. We store user and session data in a PostgreSQL database managed by Drizzle ORM, and we secure our application with the Better Auth library and industry-standard encryption. Hosting on Vercel ensures global availability, automatic scaling, and minimal operational overhead. Infrastructure components like CDNs, caching, and logging work together to provide fast load times and reliable monitoring. Overall, this architecture aligns with the project’s goals of delivering dynamic, personalized hero sections and a robust full-stack experience.