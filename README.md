# Hero Section Enhancer

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js Version](https://img.shields.io/badge/Next.js-15.5.0-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![React Version](https://img.shields.io/badge/React-19-61dafb)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38b2ac)](https://tailwindcss.com/)
[![Better Auth](https://img.shields.io/badge/Better_Auth-1.3-0ea5e9)](https://better-auth.com/)

> A modern, responsive hero section starter template built with Next.js 15, featuring authentication, database integration, and a stunning UI with dark mode support.

## 📖 Table of Contents

- [🖼️ Visual Showcase](#-visual-showcase)
- [✨ Features](#-features)
- [🚀 Quick Start](#-quick-start)
- [🏗️ Tech Stack](#️-tech-stack)
- [📁 Project Structure](#-project-structure)
- [⚙️ Configuration](#️-configuration)
- [🎨 Customization Guide](#-customization-guide)
- [🐳 Docker Development](#-docker-development)
- [📚 Available Scripts](#-available-scripts)
- [🚀 Deployment](#-deployment)
- [🔒 Authentication Flow](#-authentication-flow)
- [💡 Usage Examples](#-usage-examples)
- [🎯 Component Library](#-component-library)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

## 🖼️ Visual Showcase

### Light Mode
```
┌─────────────────────────────────────────────────────────────┐
│  [🔐 Sign In] [🚀 Sign Up]           [🌙 Dark Mode]         │
│                                                             │
│    [🎨 Logo] Hero Section Enhancer                          │
│                 A modern full-stack TypeScript starter        │
│                                                             │
│    [Get Started →] [Learn More ←]                           │
│                                                             │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐            │
│  │   Frontend  │ │      UI     │ │     Auth    │            │
│  │   Next.js   │ │ TailwindCSS │ │ Better Auth │            │
│  └─────────────┘ └─────────────┘ └─────────────┘            │
└─────────────────────────────────────────────────────────────┘
```

### Dark Mode
```
┌─────────────────────────────────────────────────────────────┐
│  [🔐 Sign In] [🚀 Sign Up]           [☀️ Light Mode]        │
│                                                             │
│    [🎨 Logo] Hero Section Enhancer                          │
│                 A modern full-stack TypeScript starter        │
│                                                             │
│    [Get Started →] [Learn More ←]                           │
│                                                             │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐            │
│  │   Frontend  │ │      UI     │ │     Auth    │            │
│  │   Next.js   │ │ TailwindCSS │ │ Better Auth │            │
│  └─────────────┘ └─────────────┘ └─────────────┘            │
└─────────────────────────────────────────────────────────────┘
```

## ✨ Features

🎨 **Beautiful Hero Section**
- Responsive design that works on all devices
- Eye-catching gradients and animations
- Dark mode support with smooth transitions
- Authentication integration directly in the hero section

🔐 **Modern Authentication**
- Built with [Better Auth](https://better-auth.com/) - the next-gen auth solution
- Email/password authentication with secure session management
- Type-safe authentication hooks and components
- Social login providers ready to integrate

🗄️ **Database Integration**
- [Drizzle ORM](https://orm.drizzle.team/) with PostgreSQL
- Type-safe database operations
- Docker-based development setup
- Migration and schema management

🎯 **Modern Tech Stack**
- **Next.js 15** with App Router and Turbopack
- **React 19** with latest concurrent features
- **TypeScript** for type-safe development
- **Tailwind CSS 4** for modern styling
- **shadcn/ui** components (40+ pre-built components)

🌙 **Theme System**
- Built-in dark mode support
- System preference detection
- Smooth theme transitions
- Consistent theming across all components

## 🚀 Quick Start

Get your hero section up and running in minutes:

### Prerequisites

- Node.js 18+ installed
- Docker and Docker Compose (for database)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/RafiulM/hero-section-enhancer.git
   cd hero-section-enhancer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment**
   ```bash
   cp .env.example .env
   # The defaults work with Docker setup
   ```

4. **Start development**
   ```bash
   # Start the database
   npm run db:dev

   # Start the development server
   npm run dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to see your hero section in action!

## 🏗️ Tech Stack

| Technology | Purpose | Why we chose it |
|------------|---------|-----------------|
| **Next.js 15** | Framework | Latest App Router, Turbopack, and excellent performance |
| **React 19** | UI Library | Concurrent features and automatic batching |
| **TypeScript** | Type Safety | Catches errors at compile-time, better developer experience |
| **Better Auth** | Authentication | Modern, type-safe, and highly customizable auth solution |
| **Drizzle ORM** | Database | Type-safe SQL with excellent TypeScript support |
| **PostgreSQL** | Database | Robust, reliable relational database |
| **Tailwind CSS 4** | Styling | Utility-first CSS with excellent performance |
| **shadcn/ui** | Components | Beautiful, accessible, and customizable components |
| **Docker** | Development | Consistent development environment across machines |

## 📁 Project Structure

```
hero-section-enhancer/
├── app/                        # Next.js app router pages
│   ├── sign-in/               # Sign-in page
│   ├── sign-up/               # Sign-up page
│   ├── globals.css            # Global styles with dark mode support
│   ├── layout.tsx             # Root layout with providers
│   └── page.tsx               # Hero section and landing page
├── components/                # React components
│   ├── ui/                    # shadcn/ui components (40+)
│   ├── auth-buttons.tsx       # Authentication button components
│   ├── theme-toggle.tsx       # Dark mode toggle
│   ├── theme-provider.tsx     # Theme context provider
│   └── site-header.tsx        # Site header component
├── db/                        # Database configuration
│   ├── index.ts              # Database connection setup
│   └── schema/               # Database schemas
├── lib/                       # Utility functions
│   ├── auth.ts               # Better Auth configuration
│   ├── auth-client.ts        # Client-side auth utilities
│   └── utils.ts              # General utility functions
├── hooks/                     # Custom React hooks
│   └── use-mobile.ts         # Mobile detection hook
├── docker/                    # Docker configuration
│   └── postgres/             # PostgreSQL initialization
├── documentation/             # Project documentation
├── drizzle.config.ts         # Drizzle ORM configuration
├── docker-compose.yml        # Docker services configuration
├── Dockerfile                # Application container definition
└── components.json           # shadcn/ui configuration
```

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# Database Configuration (defaults work with Docker)
DATABASE_URL=postgresql://postgres:postgres@localhost:5433/postgres
POSTGRES_DB=postgres
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres

# Authentication
BETTER_AUTH_SECRET=your_secret_key_here
BETTER_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:3000
```

### Database Setup

#### Option 1: Docker (Recommended)

```bash
# Start PostgreSQL in Docker
npm run db:dev

# Push database schema
npm run db:push
```

#### Option 2: Local PostgreSQL

Update your `.env` with your local database credentials:

```env
DATABASE_URL=postgresql://username:password@localhost:5432/database_name
```

Then run migrations:

```bash
npm run db:push
```

## 🎨 Customization Guide

### Hero Section Customization

The hero section is implemented in `app/page.tsx`. Here are the key areas you can customize:

#### Colors and Gradients

```tsx
// Update the background gradient in page.tsx
<div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
```

#### Typography

```tsx
// Customize the title colors
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent">
```

#### Content

Update the main heading, description, and CTA buttons in the hero section:

```tsx
<h1>Hero Section Enhancer</h1>
<p>Your custom description here</p>
```

### Theme Customization

Colors and theme variables are defined in:
- `app/globals.css` - Global styles and CSS variables
- `components/ui/` - Component-specific styles

### Adding New Components

Add new shadcn/ui components:

```bash
npx shadcn@latest add [component-name]
```

## 🐳 Docker Development

### Development Commands

```bash
# Database operations
npm run db:up          # Start PostgreSQL (port 5432)
npm run db:dev         # Start dev PostgreSQL (port 5433)
npm run db:down        # Stop PostgreSQL
npm run db:push        # Push schema changes
npm run db:studio      # Open Drizzle Studio
npm run db:reset       # Reset database

# Application
npm run dev            # Start development server
npm run build          # Build for production
npm run start          # Start production server

# Docker
npm run docker:up      # Start full stack (app + database)
npm run docker:down    # Stop all containers
npm run docker:logs    # View container logs
```

### Docker Profiles

```bash
# Development database on port 5433
docker-compose --profile dev up postgres-dev -d
```

## 📚 Available Scripts

### Application
- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production with Turbopack
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Database
- `npm run db:generate` - Generate Drizzle migration files
- `npm run db:push` - Push schema changes to database
- `npm run db:pull` - Pull schema from database
- `npm run db:migrate` - Run database migrations
- `npm run db:studio` - Open Drizzle Studio (database GUI)
- `npm run db:reset` - Reset database (drop all tables and recreate)

### Docker
- `npm run docker:build` - Build application Docker image
- `npm run docker:up` - Start full application stack
- `npm run docker:down` - Stop all containers
- `npm run docker:clean` - Stop containers and clean up volumes

## 🚀 Deployment

### Vercel (Recommended)

1. **Deploy to Vercel**
   ```bash
   npm i -g vercel
   vercel
   ```

2. **Configure Environment Variables**
   - `DATABASE_URL`: Your managed PostgreSQL connection string
   - `BETTER_AUTH_SECRET`: Generate a secure secret
   - `BETTER_AUTH_URL`: Your Vercel deployment URL

3. **Setup Database**
   ```bash
   npm run db:push
   ```

### Docker Production

1. **Configure Production Environment**
   ```env
   DATABASE_URL=postgresql://user:password@host:port/database
   BETTER_AUTH_SECRET=generate-a-very-secure-32-character-key
   BETTER_AUTH_URL=https://yourdomain.com
   NODE_ENV=production
   ```

2. **Deploy**
   ```bash
   npm run docker:up
   ```

### Other Platforms

This starter works with any platform that supports Next.js:
- Netlify
- AWS Amplify
- Google Cloud Platform
- DigitalOcean App Platform
- Railway

## 🔒 Authentication Flow

The authentication system includes:

1. **Sign Up** (`/sign-up`) - User registration with email/password
2. **Sign In** (`/sign-in`) - User login with credentials
3. **Session Management** - Secure session handling
4. **Protected Routes** - Route protection for authenticated users

### Authentication Components

- `<AuthButtons />` - Authentication buttons for the hero section
- `<HeroAuthButtons />` - Call-to-action authentication buttons
- `useAuth()` hook - Access authentication state

## 💡 Usage Examples

### Hero Section Component

Here's how the main hero section is structured:

```tsx
// app/page.tsx
import { AuthButtons, HeroAuthButtons } from "@/components/auth-buttons";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-gray-900">
      {/* Hero Section */}
      <div className="text-center py-12 sm:py-16 relative px-4">
        {/* Top Right Controls */}
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
          <div className="flex items-center gap-2 sm:gap-3">
            <AuthButtons />
            <ThemeToggle />
          </div>
        </div>

        {/* Main Content */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-400">
          Hero Section Enhancer
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
          A modern full-stack TypeScript starter with authentication, database, and UI components
        </p>

        {/* CTA Buttons */}
        <HeroAuthButtons />
      </div>
    </div>
  );
}
```

### Authentication Integration

```tsx
// components/auth-buttons.tsx
import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/auth-client";
import { SignIn, SignOut } from "better-auth/react";

export function AuthButtons() {
  const { isSignedIn, user } = useAuth();

  if (isSignedIn) {
    return (
      <div className="flex items-center gap-2">
        <span className="text-sm">Welcome, {user?.name}</span>
        <SignOut>
          <Button variant="outline">Sign Out</Button>
        </SignOut>
      </div>
    );
  }

  return (
    <div className="flex gap-2">
      <SignIn>
        <Button variant="outline">Sign In</Button>
      </SignIn>
      <Button>Sign Up</Button>
    </div>
  );
}
```

### Theme Implementation

```tsx
// components/theme-toggle.tsx
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
    </Button>
  );
}
```

### Database Usage Example

```tsx
// Example: Using Drizzle ORM with authentication
import { db } from "@/db";
import { users } from "@/db/schema/auth";
import { eq } from "drizzle-orm";

export async function getUserProfile(userId: string) {
  const user = await db
    .select({
      id: users.id,
      email: users.email,
      name: users.name,
      createdAt: users.createdAt,
    })
    .from(users)
    .where(eq(users.id, userId))
    .limit(1);

  return user[0];
}
```

### Customizing the Hero Section

```tsx
// Custom colors and gradients
<div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-indigo-100
                    dark:from-purple-900 dark:via-pink-900 dark:to-indigo-900">

// Custom typography
<h1 className="text-4xl font-black bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600
                   bg-clip-text text-transparent animate-pulse">

// Custom buttons with icons
import { Rocket } from "lucide-react";
<Button size="lg" className="gap-2">
  <Rocket className="w-5 h-5" />
  Get Started
</Button>
```

## 🎯 Component Library

This starter includes 40+ pre-built shadcn/ui components:

### Form Components
- Input, Button, Select, Checkbox, Radio Group
- Form, Label, Textarea, Switch, Slider

### Layout Components
- Card, Separator, Scroll Area, Resizable
- Dialog, Sheet, Popover, Tooltip

### Navigation Components
- Navigation Menu, Menubar, Breadcrumb
- Sidebar, Header with user dropdown

### Data Display
- Table, Badge, Avatar, Progress
- Charts (with Recharts integration)

### Feedback
- Alert, Alert Dialog, Toast (Sonner)
- Skeleton, Loading states

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Development Setup

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Install dependencies (`npm install`)
4. Make your changes
5. Run tests and linting (`npm run lint`)
6. Commit your changes (`git commit -m 'Add amazing feature'`)
7. Push to the branch (`git push origin feature/amazing-feature`)
8. Open a Pull Request

### Code Style

This project uses:
- **ESLint** - For code linting
- **TypeScript** - For type safety
- **Prettier** - For code formatting (configured via ESLint)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Better Auth](https://better-auth.com/) - Modern authentication solution
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful component library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Next.js](https://nextjs.org/) - React framework
- [Drizzle ORM](https://orm.drizzle.team/) - Type-safe SQL toolkit

## 📞 Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Check the [documentation](./documentation/)
- Review the [examples](./examples/)

---

⭐ If you find this project helpful, please give it a star!