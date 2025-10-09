# Hero Section Enhancer

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![React](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react)
![Better Auth](https://img.shields.io/badge/Better%20Auth-1.3-green?style=flat-square)
![Drizzle ORM](https://img.shields.io/badge/Drizzle-ORM-blue?style=flat-square)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-blue?style=flat-square&logo=postgresql)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-38B2AC?style=flat-square&logo=tailwind-css)
![shadcn/ui](https://img.shields.io/badge/shadcn/ui-0-000000?style=flat-square)

> A modern full-stack TypeScript starter template featuring dynamic hero sections with authentication, database integration, and beautiful UI components.

## 🎯 Project Overview

Hero Section Enhancer is a comprehensive web application starter that demonstrates modern full-stack development practices. It features a dynamic hero section with conditional rendering based on user authentication state, built with the latest technologies and best practices.

The application showcases a responsive hero section that adapts its content and call-to-action buttons based on whether users are authenticated or not, providing a seamless user experience from landing to logged-in states.

## ✨ Key Features

- 🔐 **Modern Authentication**: Secure user authentication with Better Auth featuring email/password login and session management
- 🎨 **Dynamic Hero Section**: Responsive hero section with conditional content rendering based on auth state
- 🗄️ **Type-Safe Database**: PostgreSQL database with Drizzle ORM for type-safe database operations
- 🌙 **Dark Mode Support**: Built-in dark mode with system preference detection and smooth theme transitions
- 📱 **Responsive Design**: Mobile-first design using Tailwind CSS with beautiful gradients and animations
- 🎯 **Component Library**: 40+ pre-configured shadcn/ui components with consistent theming
- 🐳 **Docker Support**: Complete Docker development environment with multi-stage builds
- 🚀 **Production Ready**: Optimized for deployment with Vercel, Docker, and other platforms

## 🛠 Technology Stack

### Frontend
- **[Next.js 15](https://nextjs.org/)** - React framework with App Router and Turbopack
- **[React 19](https://react.dev/)** - Latest React with concurrent features
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type-safe development
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Beautiful, accessible component library

### Authentication & Database
- **[Better Auth](https://better-auth.com/)** - Modern authentication solution
- **[PostgreSQL](https://www.postgresql.org/)** - Robust relational database
- **[Drizzle ORM](https://orm.drizzle.team/)** - Type-safe database toolkit

### Development Tools
- **[ESLint](https://eslint.org/)** - Code linting and formatting
- **[Docker](https://www.docker.com/)** - Containerized development environment
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library

## 📁 Project Structure

```
hero-section-enhancer/
├── app/                        # Next.js app router pages
│   ├── globals.css            # Global styles with dark mode
│   ├── layout.tsx             # Root layout with providers
│   ├── page.tsx               # Main hero section page
│   ├── dashboard/             # Authenticated user dashboard
│   ├── sign-in/               # Sign-in page
│   └── sign-up/               # Sign-up page
├── components/                # React components
│   ├── ui/                    # shadcn/ui components (40+)
│   ├── auth-buttons.tsx       # Authentication button components
│   ├── theme-toggle.tsx       # Dark mode toggle
│   └── site-header.tsx        # Application header
├── lib/                       # Utility functions
│   ├── auth.ts               # Better Auth configuration
│   ├── auth-client.ts        # Client-side auth utilities
│   └── utils.ts              # General utilities
├── db/                        # Database configuration
│   ├── index.ts              # Database connection
│   └── schema/               # Database schemas
├── hooks/                     # Custom React hooks
├── documentation/             # Project documentation
└── docker/                   # Docker configuration
```

## 🚀 Getting Started

Get your Hero Section Enhancer application running in minutes with this comprehensive setup guide.

### 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js 20+** - [Download Node.js](https://nodejs.org/) (LTS version recommended)
- **Docker & Docker Compose** - [Download Docker](https://www.docker.com/products/docker-desktop) (for PostgreSQL)
- **Git** - [Download Git](https://git-scm.com/) (for version control)
- **Code Editor** - [VS Code](https://code.visualstudio.com/) recommended with these extensions:
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
  - [TypeScript Importer](https://marketplace.visualstudio.com/items?itemName=pmneo.tsimporter)

### 🛠 Installation Steps

#### 1. Clone the Repository

```bash
# Clone the repository
git clone https://github.com/yourusername/hero-section-enhancer.git

# Navigate into the project directory
cd hero-section-enhancer
```

#### 2. Install Dependencies

```bash
# Install npm dependencies
npm install

# Alternative: Use yarn (if you prefer)
yarn install

# Alternative: Use pnpm (faster package manager)
pnpm install
```

#### 3. Environment Variables Setup

Create your environment configuration file:

```bash
# Copy the example environment file
cp .env.example .env
```

Edit the `.env` file with your configuration:

```env
# Database Configuration (default values work with Docker)
DATABASE_URL=postgresql://postgres:postgres@localhost:5433/postgres
POSTGRES_DB=postgres
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres

# Authentication Configuration
BETTER_AUTH_SECRET=your_secret_key_here
BETTER_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:3000
```

> **Important**: Generate a secure `BETTER_AUTH_SECRET` using:
> ```bash
> # Generate a secure secret key
> openssl rand -base64 32
> # or
> node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
> ```

#### 4. Database Setup

**Option A: Docker Setup (Recommended)**

```bash
# Start PostgreSQL database in Docker
npm run db:up

# Push database schema to create tables
npm run db:push
```

**Option B: Local PostgreSQL Setup**

```bash
# 1. Install PostgreSQL locally and create a database
# 2. Update your .env file with your local database credentials
# 3. Push the schema
npm run db:push
```

#### 5. Start Development Server

```bash
# Start the Next.js development server with Turbopack
npm run dev
```

#### 6. Verify Installation

Open your browser and navigate to:
- **Application**: [http://localhost:3000](http://localhost:3000)
- **Database Studio** (optional): Run `npm run db:studio` for a visual database interface

### 🎯 Development Commands

Here are the essential commands you'll use during development:

```bash
# Application Commands
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint

# Database Commands
npm run db:up        # Start PostgreSQL in Docker
npm run db:down      # Stop PostgreSQL container
npm run db:push      # Push schema changes to database
npm run db:studio    # Open Drizzle Studio (database GUI)
npm run db:reset     # Reset database (drop all tables and recreate)

# Docker Commands
npm run docker:up    # Start full application stack (app + database)
npm run docker:down  # Stop all containers
npm run docker:logs  # View container logs
```

### 🔧 Configuration Details

#### Environment Variables Explained

| Variable | Description | Default | Required |
|----------|-------------|---------|----------|
| `DATABASE_URL` | PostgreSQL connection string | `postgresql://postgres:postgres@localhost:5433/postgres` | ✅ |
| `POSTGRES_DB` | PostgreSQL database name | `postgres` | ✅ |
| `POSTGRES_USER` | PostgreSQL username | `postgres` | ✅ |
| `POSTGRES_PASSWORD` | PostgreSQL password | `postgres` | ✅ |
| `BETTER_AUTH_SECRET` | Secret key for authentication | - | ✅ |
| `BETTER_AUTH_URL` | Server-side auth URL | `http://localhost:3000` | ✅ |
| `NEXT_PUBLIC_BETTER_AUTH_URL` | Client-side auth URL | `http://localhost:3000` | ✅ |

#### Database Configuration

The application uses **Drizzle ORM** with **PostgreSQL**:

- **Connection**: Managed through Docker for consistency
- **Migrations**: Automatic schema pushing with `npm run db:push`
- **Studio**: Visual database interface with `npm run db:studio`
- **Reset**: Complete database reset with `npm run db:reset`

### 🐛 Troubleshooting

#### Common Issues and Solutions

**Issue: "Database connection failed"**
```bash
# Solution 1: Check if Docker is running
docker --version
docker ps

# Solution 2: Restart database
npm run db:down
npm run db:up

# Solution 3: Check database URL in .env
# Ensure DATABASE_URL matches your Docker setup
```

**Issue: "Port already in use"**
```bash
# Find process using port 3000
lsof -ti:3000

# Kill the process
kill -9 $(lsof -ti:3000)

# Or use a different port
PORT=3001 npm run dev
```

**Issue: "Module not found" errors**
```bash
# Clear node modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Issue: "Authentication not working"**
```bash
# Verify your .env file has BETTER_AUTH_SECRET
# Generate a new secret if needed
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"

# Restart development server after .env changes
npm run dev
```

**Issue: Docker permissions (Linux)**
```bash
# Add user to docker group
sudo usermod -aG docker $USER

# Logout and login again, or run:
newgrp docker
```

#### Platform-Specific Notes

**Windows Users:**
- Use **WSL2** (Windows Subsystem for Linux) for best Docker experience
- If using PowerShell, you might need to adjust environment variable syntax
- Consider using **Git Bash** for Unix-like commands

**macOS Users:**
- Ensure Docker Desktop is running before starting the database
- If you encounter permission issues, try: `sudo chown -R $(whoami) .`

**Linux Users:**
- Install Docker following your distribution's instructions
- Make sure your user is in the docker group: `sudo usermod -aG docker $USER`

### 📚 Development Tips

1. **Hot Reloading**: The development server automatically reloads when you save files
2. **Database Changes**: Use `npm run db:push` to apply schema changes
3. **Type Safety**: TypeScript provides real-time error checking
4. **Component Library**: Browse available components in the `components/ui/` directory
5. **Dark Mode**: Use the theme toggle in the top-right corner to test dark mode
6. **Authentication Flow**: Test sign-up, sign-in, and logout functionality

### 🎯 Next Steps

Once your development environment is set up:

1. **Explore the codebase**: Check the `app/` directory for page structure
2. **Customize the hero section**: Edit `app/page.tsx` to modify the landing page
3. **Add new components**: Use `npx shadcn@latest add [component-name]` to add UI components
4. **Database operations**: Extend the database schema in `db/schema/`
5. **Authentication**: Customize auth flows in `lib/auth.ts`

## 🎨 Hero Section Features

The hero section dynamically adapts based on user authentication:

### Unauthenticated Users
- Welcoming landing page with call-to-action buttons
- Sign-up and sign-in prompts
- Feature highlights and technology showcase

### Authenticated Users  
- Personalized welcome message
- Dashboard access and user-specific content
- Logout functionality and user profile options

## 🚀 Deployment

Deploy your Hero Section Enhancer application to production with these comprehensive deployment guides.

### 🌐 Vercel Deployment (Recommended)

Vercel provides the best deployment experience for Next.js applications with automatic optimizations.

#### Step 1: Prepare for Deployment

```bash
# Build your application locally to test
npm run build

# Test production build locally
npm start
```

#### Step 2: Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to Vercel
vercel

# Follow the prompts to connect your GitHub account
```

#### Step 3: Configure Environment Variables

In your Vercel dashboard, add these environment variables:

```env
# Production Database
DATABASE_URL=your_production_postgresql_url

# Authentication
BETTER_AUTH_SECRET=your_production_secret_key
BETTER_AUTH_URL=https://your-app.vercel.app
NEXT_PUBLIC_BETTER_AUTH_URL=https://your-app.vercel.app

# Optional: Analytics and monitoring
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your_analytics_id
```

#### Step 4: Set Up Production Database

```bash
# Option 1: Vercel Postgres (Recommended)
# Use Vercel's managed PostgreSQL service

# Option 2: External Database
# Set up PostgreSQL with AWS RDS, Railway, Neon, etc.

# Push schema to production database
DATABASE_URL=your_production_db_url npm run db:push
```

### 🐳 Docker Deployment

Deploy using Docker for complete control over your infrastructure.

#### Option 1: Docker Compose (VPS/Cloud Server)

```bash
# Clone repository on your server
git clone https://github.com/yourusername/hero-section-enhancer.git
cd hero-section-enhancer

# Create production environment file
cp .env.example .env.production

# Edit .env.production with production values
# - Use secure database passwords
# - Set production URLs
# - Generate strong secrets

# Build and start containers
docker-compose -f docker-compose.yml --env-file .env.production up -d
```

#### Option 2: Container Registry

```bash
# Build and push to container registry
docker build -t your-registry/hero-section-enhancer:latest .
docker push your-registry/hero-section-enhancer:latest

# Deploy to your cloud provider (AWS ECS, Google Cloud Run, etc.)
```

### ☁️ Cloud Platform Deployment

#### AWS Deployment

```bash
# Option 1: AWS Amplify (Easiest)
# Connect your GitHub repository to AWS Amplify
# Configure environment variables in Amplify console

# Option 2: AWS ECS + RDS
# Use Docker containers with Amazon ECS
# Set up Amazon RDS for PostgreSQL
```

#### Google Cloud Platform

```bash
# Option 1: Google Cloud Run
gcloud builds submit --tag gcr.io/PROJECT-ID/hero-section-enhancer
gcloud run deploy --image gcr.io/PROJECT-ID/hero-section-enhancer --platform managed

# Option 2: Google App Engine
# Use the flexible environment with custom runtime
```

#### Railway Deployment

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login and deploy
railway login
railway up

# Configure environment variables in Railway dashboard
```

### 🔧 Production Configuration

#### Essential Environment Variables for Production

```env
# Database (Required)
DATABASE_URL=postgresql://user:password@host:port/database

# Authentication (Required)
BETTER_AUTH_SECRET=generate-a-very-secure-32-character-key
BETTER_AUTH_URL=https://yourdomain.com
NEXT_PUBLIC_BETTER_AUTH_URL=https://yourdomain.com

# Performance (Optional)
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1

# Analytics (Optional)
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your_vercel_analytics_id
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

#### Security Best Practices

1. **Use HTTPS in production** - Ensure `BETTER_AUTH_URL` uses HTTPS
2. **Generate strong secrets** - Use cryptographically secure random strings
3. **Environment variable security** - Never commit secrets to version control
4. **Database security** - Use SSL connections and strong passwords
5. **Regular updates** - Keep dependencies updated for security patches

#### Performance Optimizations

```javascript
// next.config.ts - Production optimizations
export default {
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons']
  },
  images: {
    domains: ['yourdomain.com'],
    formats: ['image/webp', 'image/avif']
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
  }
}
```

### 📊 Monitoring and Analytics

#### Vercel Analytics

```bash
# Install Vercel Analytics
npm install @vercel/analytics

# Add to your layout.tsx
import { Analytics } from '@vercel/analytics/react';

// In your root layout
<Analytics />
```

#### Error Tracking

```bash
# Install Sentry for error tracking
npm install @sentry/nextjs

# Initialize Sentry in sentry.client.config.ts and sentry.server.config.ts
```

## 🤝 Contributing

We welcome contributions to the Hero Section Enhancer project! This guide will help you get started.

### 🎯 How to Contribute

#### 1. Set Up Development Environment

```bash
# Fork the repository on GitHub
# Clone your fork locally
git clone https://github.com/yourusername/hero-section-enhancer.git
cd hero-section-enhancer

# Add upstream remote
git remote add upstream https://github.com/original-owner/hero-section-enhancer.git

# Install dependencies
npm install

# Set up development environment
npm run db:up
npm run db:push
npm run dev
```

#### 2. Create a Feature Branch

```bash
# Create a new branch for your feature
git checkout -b feature/your-feature-name

# Or for a bug fix
git checkout -b fix/issue-description
```

#### 3. Make Your Changes

- **Code Style**: Follow the existing code style and patterns
- **TypeScript**: Ensure all code is properly typed
- **Components**: Use existing shadcn/ui components when possible
- **Tests**: Add tests for new functionality (if applicable)
- **Documentation**: Update documentation for new features

#### 4. Test Your Changes

```bash
# Run linting
npm run lint

# Fix any linting issues
npm run lint --fix

# Build the project to ensure no errors
npm run build

# Test the application
npm run dev
```

#### 5. Submit Your Pull Request

```bash
# Commit your changes
git add .
git commit -m "feat: add your feature description"

# Push to your fork
git push origin feature/your-feature-name

# Create a pull request on GitHub
```

### 📝 Pull Request Guidelines

#### PR Title Format

Use conventional commit format:
- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

#### PR Description Template

```markdown
## Description
Brief description of what this PR changes.

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tested manually
- [ ] Added automated tests
- [ ] All tests pass

## Checklist
- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
```

### 🐛 Bug Reports

When reporting bugs, please include:

1. **Environment**: OS, Node.js version, browser
2. **Steps to Reproduce**: Clear, reproducible steps
3. **Expected Behavior**: What should happen
4. **Actual Behavior**: What actually happens
5. **Error Messages**: Any error logs or screenshots

### 💡 Feature Requests

For feature requests:

1. **Use Case**: Describe the problem you're trying to solve
2. **Proposed Solution**: How you envision the feature working
3. **Alternatives**: Any alternative solutions you've considered
4. **Additional Context**: Any other relevant information

### 👥 Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Help others learn and grow
- Focus on what is best for the community
- Show empathy towards other community members

## 📁 Project Architecture

### Directory Structure Deep Dive

```
hero-section-enhancer/
├── app/                          # Next.js 15 App Router
│   ├── (auth)/                   # Route groups for auth pages
│   │   ├── sign-in/
│   │   └── sign-up/
│   ├── dashboard/                # Protected authenticated routes
│   │   ├── layout.tsx           # Dashboard layout
│   │   └── page.tsx             # Dashboard main page
│   ├── globals.css              # Global styles and CSS variables
│   ├── layout.tsx               # Root layout with providers
│   └── page.tsx                 # Hero section landing page
├── components/                   # Reusable React components
│   ├── ui/                      # shadcn/ui component library
│   │   ├── button.tsx           # Button component with variants
│   │   ├── card.tsx             # Card component
│   │   └── ...                  # 40+ UI components
│   ├── auth-buttons.tsx         # Authentication button logic
│   ├── theme-toggle.tsx         # Dark/light mode toggle
│   └── site-header.tsx          # Application header
├── lib/                          # Utility libraries and configurations
│   ├── auth.ts                  # Better Auth server configuration
│   ├── auth-client.ts           # Client-side auth utilities
│   └── utils.ts                 # General utility functions
├── db/                           # Database configuration and schemas
│   ├── index.ts                 # Database connection setup
│   └── schema/                  # Drizzle ORM schema definitions
│       └── auth.ts              # User authentication schema
├── hooks/                        # Custom React hooks
│   └── use-mobile.ts            # Mobile detection hook
├── documentation/                # Project documentation
│   ├── app_flow_document.md     # Application flow documentation
│   ├── tech_stack_document.md   # Technology stack details
│   └── ...                      # Additional documentation files
├── drizzle/                      # Database migration files
│   ├── 0000_*.sql              # Migration SQL files
│   └── meta/                   # Migration metadata
├── docker/                       # Docker configuration files
│   └── postgres/               # PostgreSQL initialization scripts
├── public/                       # Static assets
│   ├── codeguide-logo.png      # Application logo
│   └── ...                     # Other static files
├── docker-compose.yaml           # Docker services configuration
├── Dockerfile                    # Application container definition
├── drizzle.config.ts             # Drizzle ORM configuration
├── next.config.ts                # Next.js configuration
├── tailwind.config.ts            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
└── package.json                  # Dependencies and scripts
```

### Component Architecture

#### Authentication Flow
```
User → Landing Page → Auth Buttons → Sign In/Up → Dashboard
       ↓ (Unauthenticated)    ↓ (Authenticated)         ↓
    Hero Section         Better Auth Flow          Protected Routes
```

#### Data Flow
```
Client Component → Server Action → Database → Response
       ↓                  ↓              ↓          ↓
   User Interaction  → Auth Check → Drizzle ORM → UI Update
```

### Key Patterns

#### 1. Server Components
- Most pages use Server Components by default
- Database queries happen server-side for security
- Client components only when interactivity is needed

#### 2. Authentication Pattern
```typescript
// Server-side auth check
import { auth } from "@/lib/auth";

export default async function Dashboard() {
  const session = await auth();
  if (!session) redirect("/sign-in");
  
  return <DashboardContent user={session.user} />;
}
```

#### 3. Environment-Based Configuration
```typescript
// Different behavior based on environment
const isDevelopment = process.env.NODE_ENV === "development";
const baseUrl = process.env.NEXT_PUBLIC_APP_URL;
```

## 🔧 Maintenance

### 📅 Regular Maintenance Tasks

#### Weekly
- [ ] Check for security updates: `npm audit`
- [ ] Update dependencies: `npm update`
- [ ] Review and merge pull requests
- [ ] Check GitHub issues for new reports

#### Monthly
- [ ] Review analytics and performance metrics
- [ ] Update documentation based on feedback
- [ ] Test deployment process
- [ ] Review and optimize database queries

#### Quarterly
- [ ] Major dependency updates
- [ ] Security audit and penetration testing
- [ ] Performance benchmarking
- [ ] User feedback review and feature planning

### 🚨 Troubleshooting Common Production Issues

#### Database Connection Issues

```bash
# Check database connectivity
npm run db:studio

# Test database connection string
psql $DATABASE_URL

# Reset database if needed (CAUTION: This deletes all data)
npm run db:reset
```

#### Authentication Problems

```bash
# Check auth configuration
curl http://localhost:3000/api/auth/session

# Verify environment variables
echo $BETTER_AUTH_SECRET
echo $BETTER_AUTH_URL

# Clear auth cookies
document.cookie.split(";").forEach(function(c) { 
  document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); 
});
```

#### Performance Issues

```bash
# Analyze bundle size
npm run build
npx @next/bundle-analyzer

# Check for memory leaks
node --inspect dist/server.js

# Monitor API performance
npm install clinic
clinic doctor -- node dist/server.js
```

### 📊 Monitoring and Health Checks

#### Application Health Check Endpoint

```typescript
// app/api/health/route.ts
export async function GET() {
  try {
    // Check database connection
    await db.select().from(users).limit(1);
    
    return Response.json({ 
      status: "healthy", 
      timestamp: new Date().toISOString(),
      version: process.env.npm_package_version 
    });
  } catch (error) {
    return Response.json(
      { status: "unhealthy", error: error.message }, 
      { status: 500 }
    );
  }
}
```

#### Docker Health Check

```dockerfile
# Add to Dockerfile
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3000/api/health || exit 1
```

### 🔄 Backup and Recovery

#### Database Backup

```bash
# Create backup
pg_dump $DATABASE_URL > backup-$(date +%Y%m%d).sql

# Restore backup
psql $DATABASE_URL < backup-20241201.sql

# Automated backup script
#!/bin/bash
BACKUP_DIR="/backups"
DATE=$(date +%Y%m%d_%H%M%S)
pg_dump $DATABASE_URL > $BACKUP_DIR/backup_$DATE.sql
# Keep only last 7 days
find $BACKUP_DIR -name "backup_*.sql" -mtime +7 -delete
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2024 Hero Section Enhancer

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 🔗 Links

- **Live Demo**: [https://hero-section-enhancer.vercel.app](https://hero-section-enhancer.vercel.app)
- **Documentation**: [https://hero-section-enhancer.docs.vercel.app](https://hero-section-enhancer.docs.vercel.app)
- **Report Issues**: [GitHub Issues](https://github.com/yourusername/hero-section-enhancer/issues)
- **Feature Requests**: [GitHub Discussions](https://github.com/yourusername/hero-section-enhancer/discussions)
- **Community**: [Discord Server](https://discord.gg/your-invite)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework for production
- [shadcn/ui](https://ui.shadcn.com/) - Beautifully designed components
- [Better Auth](https://better-auth.com/) - Modern authentication solution
- [Drizzle ORM](https://orm.drizzle.team/) - Type-safe SQL toolkit
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Vercel](https://vercel.com/) - Deployment platform for Next.js

---

Built with ❤️ using [Next.js](https://nextjs.org/) and [shadcn/ui](https://ui.shadcn.com/)