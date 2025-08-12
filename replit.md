# Jim Hillier Professional Portfolio Application

## Overview

This is a full-stack professional portfolio web application built to showcase Jim Hillier's IT leadership expertise, technical skills, and project experience. The application features a modern, responsive design with a React frontend and Express backend, emphasizing clean UI/UX for professional presentation. The portfolio highlights 28+ years of IT experience, AWS expertise, and agile leadership capabilities with dedicated sections for skills, applications, and contact information.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

- **August 12, 2025**: Created comprehensive GitHub preparation files (README.md, .gitignore, DEPLOYMENT.md, CONTRIBUTING.md)
- **August 12, 2025**: Redesigned Apps page with two-column layout: text on left describing AI development, custom apps SVG on right
- **August 12, 2025**: Added "vibe coding" reference to describe AI-assisted development approach
- **August 11, 2025**: Added Snake Game tile to Apps page with Python pun description and Gamepad2 icon
- **August 11, 2025**: Updated Pawsome icon from Activity to Heart for better representation of pet care
- **August 11, 2025**: Fixed button alignment to display horizontally across all app tiles using flexbox
- **August 11, 2025**: Updated all app URLs to point to live deployed .replit.app applications
- **January 10, 2025**: Simplified Contact page to show only contact information without form
- **January 10, 2025**: Added real contact details - email: hillier.jim@gmail.com, phone: 07733320473, LinkedIn profile, location: Llantwit Major, Wales
- **January 10, 2025**: Made contact information clickable (mailto, tel, external links)
- **January 10, 2025**: Updated Apps page to showcase actual Replit applications instead of mock examples
- **January 10, 2025**: Added "home-task-manager" app - task creation and payment system for workers
- **January 10, 2025**: Added "Pawsome" app - professional dog training appointment booking
- **January 10, 2025**: Removed technology tag buttons from app cards for cleaner design
- **January 10, 2025**: Added task manager interface screenshot as Apps page hero image
- **January 10, 2025**: Implemented Pawsome-inspired design with custom orange, blue, and yellow color palette
- **January 10, 2025**: Added Jim Hillier's professional headshot in circular format to hero section
- **January 10, 2025**: Updated navigation branding to "Jim Hillier Portfolio"
- **January 10, 2025**: Fixed HTML validation issues with nested anchor tags in navigation
- **January 10, 2025**: Resolved button text visibility issues in hero section

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing with three main pages (Home, Apps, Contact)
- **UI Framework**: Shadcn/ui component library built on Radix UI primitives for accessibility and consistency
- **Styling**: Tailwind CSS with custom design tokens and CSS variables for theming
- **State Management**: TanStack Query for server state management and caching
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework for REST API endpoints
- **Language**: TypeScript for full-stack type safety
- **Development**: Hot module replacement via Vite integration in development mode
- **Storage Interface**: Abstracted storage layer with in-memory implementation for user management
- **Error Handling**: Centralized error middleware with proper HTTP status codes

### Data Layer
- **ORM**: Drizzle ORM for type-safe database operations and schema management
- **Database**: PostgreSQL configured via environment variables (DATABASE_URL)
- **Schema**: User table with UUID primary keys, username/password fields
- **Migrations**: Drizzle Kit for database schema migrations and versioning
- **Validation**: Zod schemas for runtime type validation integrated with Drizzle

### Development & Build System
- **Monorepo Structure**: Shared types and schemas between client and server in `/shared` directory
- **Path Aliases**: Configured TypeScript paths for clean imports (@/, @shared/)
- **Build Process**: Separate client (Vite) and server (esbuild) build pipelines
- **Development Server**: Integrated Vite dev server with Express middleware for seamless full-stack development

### UI/UX Design System
- **Component Library**: Comprehensive Shadcn/ui components (cards, buttons, forms, navigation)
- **Theming**: CSS custom properties with light/dark mode support
- **Typography**: Inter font family for modern, professional appearance
- **Color System**: Professional blue/orange gradient palette optimized for IT portfolio presentation
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

## External Dependencies

### Core Framework Dependencies
- **@neondatabase/serverless**: Neon serverless PostgreSQL driver for cloud database connectivity
- **drizzle-orm** & **drizzle-kit**: Type-safe ORM and migration toolkit for PostgreSQL
- **express**: Web application framework for Node.js backend
- **react** & **react-dom**: Frontend UI library and DOM renderer

### UI Component Libraries
- **@radix-ui/react-***: Comprehensive set of accessible, unstyled UI primitives (dialog, dropdown, form controls)
- **@tanstack/react-query**: Server state management and caching for API interactions
- **wouter**: Minimalist routing library for React applications
- **lucide-react**: Modern icon library with consistent design

### Styling & Design
- **tailwindcss**: Utility-first CSS framework for responsive design
- **class-variance-authority**: Utility for creating variant-based component APIs
- **clsx** & **tailwind-merge**: Conditional CSS class utilities

### Development Tools
- **vite**: Next-generation frontend build tool with HMR
- **typescript**: Static type checking for JavaScript
- **@replit/vite-plugin-***: Replit-specific development plugins for error handling and debugging

### Validation & Forms
- **zod**: TypeScript-first schema validation library
- **react-hook-form** & **@hookform/resolvers**: Performant form library with validation integration

### Database & Session Management
- **connect-pg-simple**: PostgreSQL session store for Express sessions
- **nanoid**: Compact URL-safe unique string ID generator