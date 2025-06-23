# Portfolio Website Application

## Overview

This is a full-stack portfolio website for Krishna Sudan, a Full Stack Software Engineer at UBS Group AG. The application showcases professional experience, skills, projects, and provides a contact form for potential collaborations. Built with modern web technologies, it features a responsive design with dark/light theme support and smooth scrolling navigation.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Shadcn/ui component library built on Radix UI primitives
- **State Management**: React Context API for theme management, React Hook Form for form handling
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for full-stack type safety
- **API Design**: RESTful API with a single contact form endpoint
- **Request Handling**: Express middleware for JSON parsing and request logging
- **Storage**: In-memory storage system with interface for future database integration

### Database Layer
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema**: Defined user schema with username/password fields
- **Migration**: Drizzle Kit for schema management and migrations
- **Connection**: Configured for Neon Database (serverless PostgreSQL)

## Key Components

### Frontend Components
- **Navigation**: Responsive navigation with smooth scrolling and active section highlighting
- **Hero Section**: Professional introduction with downloadable resume functionality
- **About Section**: Personal information with key metrics and achievements
- **Experience Section**: Timeline-based work history with accomplishments
- **Skills Section**: Categorized technical skills with proficiency indicators
- **Projects Section**: Featured projects with technology stacks and descriptions
- **Education Section**: Academic background and professional certifications
- **Contact Section**: Form with validation and submission handling
- **Theme Provider**: Dark/light mode switching with localStorage persistence

### Backend Components
- **Contact API**: POST endpoint for form submissions with validation
- **Storage Interface**: Abstracted storage layer for user management
- **Memory Storage**: In-memory implementation of storage interface
- **Express Middleware**: Request logging and error handling
- **Vite Integration**: Development server setup with HMR support

## Data Flow

### Contact Form Submission
1. User fills out contact form with name, email, subject, and message
2. Frontend validates input and sends POST request to `/api/contact`
3. Backend validates email format and required fields
4. Form data is logged to console (placeholder for email service integration)
5. Success/error response sent back to frontend
6. Toast notification displayed to user

### Theme Management
1. Theme preference stored in localStorage
2. Theme context provides current theme and setter function
3. CSS variables updated dynamically based on theme selection
4. Components automatically adjust styling through Tailwind classes

### Navigation
1. Scroll event listener tracks current section
2. Active section state updated based on viewport position
3. Navigation links highlight current section
4. Smooth scrolling implemented for section navigation

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form, React Query
- **UI Framework**: Radix UI primitives, Lucide React icons
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer
- **Database**: Drizzle ORM, Neon Database serverless driver
- **Validation**: Zod for schema validation, Drizzle-Zod integration
- **Build Tools**: Vite, ESBuild, TypeScript
- **Utilities**: Date-fns, clsx, class-variance-authority

### Development Dependencies
- **TypeScript**: Full-stack type safety
- **ESLint**: Code linting and formatting
- **PostCSS**: CSS processing and optimization
- **Replit Integration**: Development environment plugins

## Deployment Strategy

### Development Environment
- **Local Development**: `npm run dev` starts both frontend and backend
- **Hot Module Replacement**: Vite provides instant feedback during development
- **Development Server**: Express serves API endpoints while Vite handles frontend
- **Port Configuration**: Backend on port 5000, frontend served through Vite

### Production Deployment
- **Build Process**: `npm run build` creates optimized frontend build and bundles backend
- **Frontend Build**: Vite creates static assets in `dist/public`
- **Backend Build**: ESBuild bundles server code to `dist/index.js`
- **Production Start**: `npm run start` runs the production server
- **Static Serving**: Express serves built frontend assets and API endpoints

### Replit Configuration
- **Modules**: Node.js 20, Web server, PostgreSQL 16
- **Auto-deployment**: Configured for autoscale deployment target
- **Port Mapping**: Internal port 5000 mapped to external port 80
- **Build Command**: npm run build for deployment preparation

### Database Setup
- **Schema Push**: `npm run db:push` applies schema changes to database
- **Environment Variables**: DATABASE_URL required for connection
- **Migration Strategy**: Drizzle migrations stored in `/migrations` directory

## Changelog

Changelog:
- June 23, 2025. Initial setup
- June 23, 2025. Updated portfolio focus to emphasize backend engineering with Spring Boot and React.js frontend development. Modified skills proficiency levels, updated GitHub links, removed project action buttons, and integrated complete resume content from provided PDF.
- June 23, 2025. Enhanced website with Java Full Stack Developer focus, added professional profile image, implemented Apple-style smooth animations with glass effects, fixed contact form functionality with proper validation and toast notifications, added Data Structures & Algorithms skills section, and integrated GitHub profile link in projects section.

## User Preferences

Preferred communication style: Simple, everyday language.