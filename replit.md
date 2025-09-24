# Overview

Smart Cart is a modern, eco-friendly e-commerce platform that combines sustainable shopping with innovative voice-powered experiences. The application features comprehensive carbon footprint tracking, interactive product browsing, and a beautiful design system built with React, TypeScript, and a Node.js backend.

The platform targets environmentally conscious consumers by providing clear sustainability metrics, eco-friendly product badges, and carbon offset capabilities, all wrapped in a modern, accessible interface that supports both traditional browsing and voice commands.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern component patterns
- **Styling**: Tailwind CSS with custom design system using forest green, light green, and yellow color palette
- **UI Components**: Shadcn/UI component library providing consistent, accessible components
- **State Management**: React hooks and TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for full-stack type safety
- **Authentication**: Passport.js with local strategy and session-based auth
- **Password Security**: bcrypt for password hashing with configurable salt rounds
- **Session Management**: Express-session with memory store for development

## Database Layer
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (via Neon serverless) for production reliability
- **Schema**: Centralized schema definitions in shared directory for consistency
- **Migrations**: Drizzle Kit for database schema management

## Key Features Architecture
- **Voice Commands**: Mock implementation ready for Web Speech API integration
- **Carbon Tracking**: Product-level carbon footprint with visual impact indicators
- **Theme System**: CSS custom properties with light/dark mode support
- **Responsive Design**: Mobile-first approach with Tailwind responsive utilities
- **Accessibility**: Screen reader compatibility and keyboard navigation support

## Component Organization
- **Atomic Design**: Reusable UI components in `/components/ui/`
- **Feature Components**: Business logic components in `/components/`
- **Page Components**: Route-specific components in `/pages/`
- **Shared Types**: Common interfaces and schemas in `/shared/`

# External Dependencies

## Core Framework Dependencies
- **@radix-ui/***: Headless UI components providing accessibility and behavior
- **@tanstack/react-query**: Server state management and caching
- **wouter**: Lightweight routing library

## Development Tools
- **Vite**: Build tool with hot module replacement
- **TypeScript**: Static type checking
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS**: CSS processing with autoprefixer

## Database & Backend
- **@neondatabase/serverless**: PostgreSQL serverless connection
- **drizzle-orm**: Type-safe ORM with PostgreSQL adapter
- **express**: Web application framework
- **passport**: Authentication middleware

## UI & Styling
- **class-variance-authority**: Type-safe component variants
- **clsx**: Conditional className utility
- **tailwind-merge**: Tailwind class merging utility

## Security & Validation
- **bcrypt**: Password hashing
- **zod**: Runtime type validation

## Future Integration Points
- **Stripe**: Payment processing (dependencies included)
- **Web Speech API**: Voice command implementation
- **Real-time Features**: WebSocket support via HTTP server upgrade

# Recent Changes

## Replit Environment Setup (September 24, 2025)
- ✅ **Project Import Completed**: Successfully imported GitHub repository and configured for Replit environment
- ✅ **Frontend Configuration**: Properly configured Vite with `allowedHosts: true` for Replit proxy compatibility
- ✅ **Backend Setup**: Express server configured to serve on port 5000 with 0.0.0.0 host binding
- ✅ **Workflow Configuration**: Set up "Start application" workflow with `npm run dev` command and webview output
- ✅ **Deployment Configuration**: Configured autoscale deployment with proper build and start scripts
- ✅ **Host Configuration**: Backend uses 0.0.0.0:5000 binding, properly configured for Replit's proxy environment
- ✅ **Development Server**: Application running successfully with hot module replacement
- ✅ **UI Verification**: Frontend loads correctly with navigation, search, cart, and theme toggle functionality

## Current Environment Status
- **Server**: Running on port 5000 with Express + Vite development server
- **Frontend**: React application with TypeScript, Tailwind CSS, and Shadcn/UI components
- **Build System**: Vite with proper Replit plugins and configurations
- **Proxy Compatibility**: Configured for Replit's iframe-based preview system