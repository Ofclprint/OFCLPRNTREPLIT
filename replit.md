# Manufacturing ERP System - MVP

## Overview

This is a streamlined manufacturing ERP (Enterprise Resource Planning) system built with modern web technologies, focused on essential manufacturing operations. The MVP provides core functionality for inventory tracking, production orders, quality control, and barcode scanning with a clean, user-friendly interface optimized for immediate deployment and real-world use.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API with structured error handling
- **Session Management**: Express sessions with PostgreSQL storage
- **File Structure**: Modular architecture with separate routes, storage, and database layers

## Key Components

### Authentication System
- **Provider**: Replit Auth with OpenID Connect
- **Session Storage**: PostgreSQL-backed sessions using connect-pg-simple
- **Security**: Secure cookies with HTTP-only and secure flags
- **User Management**: Role-based access control (admin, manager, employee)

### Database Layer
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for Neon Database)
- **Migrations**: Drizzle Kit for schema migrations
- **Connection**: Connection pooling with @neondatabase/serverless

### UI Framework
- **Component Library**: shadcn/ui with Radix UI primitives
- **Design System**: Custom Carbon Design-inspired theme
- **Responsive Design**: Mobile-first approach with responsive layouts
- **Icons**: Lucide React for consistent iconography

### Core Modules
1. **Inventory Management**: Stock tracking, SKU management, barcode integration
2. **Production Orders**: Order lifecycle management with status tracking
3. **Quality Control**: Inspection workflows and defect tracking
4. **Barcode Scanner**: Real-time barcode scanning for inventory operations
5. **AI Insights**: Gemini API integration for predictive analytics
6. **Activity Logging**: Comprehensive audit trail for all operations
7. **Advanced Analytics**: Deep performance insights with interactive charts and KPI tracking
8. **Machine Monitoring**: Real-time equipment status, efficiency tracking, and predictive maintenance
9. **Supply Chain Management**: Supplier management, purchase orders, and shipment tracking
10. **Workforce Management**: Employee scheduling, performance tracking, and analytics
11. **Energy Management**: Smart energy monitoring, optimization, and sustainability metrics
12. **API Integrations**: Third-party service connectivity with real-time synchronization and webhook management
13. **Notifications & Alerts**: Comprehensive real-time notification system with multi-channel delivery and rule-based automation
14. **Advanced Reporting & Business Intelligence**: Powerful reporting dashboards with custom report builder and automated scheduling
15. **Document Management & Knowledge Base**: Centralized document control, version management, and knowledge sharing with training materials
16. **Mobile Field Operations & Offline Sync**: Field task management with offline capabilities and mobile forms for disconnected operations
17. **Advanced AI & Machine Learning Suite**: Intelligent automation with predictive analytics, computer vision, and ML model management
18. **Enterprise Security & Compliance Management**: Comprehensive security policies, compliance frameworks, and audit trail management

## Data Flow

### Client-Server Communication
- REST API endpoints under `/api` prefix
- JSON request/response format with structured error handling
- Automatic session validation middleware
- Query invalidation for real-time data updates

### Database Schema
- **Users**: Authentication and role management
- **Inventory Items**: Product catalog with stock levels and locations
- **Production Orders**: Manufacturing workflow management
- **Quality Control Logs**: Inspection results and compliance tracking
- **Inventory Movements**: Stock transaction history
- **Activity Logs**: System-wide audit trail
- **AI Forecasts**: ML-powered predictions and insights

### State Management
- Server state managed by TanStack Query with automatic caching
- Optimistic updates for better user experience
- Error boundaries and retry mechanisms
- Real-time data synchronization

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL connection for Neon Database
- **drizzle-orm**: Type-safe ORM with PostgreSQL dialect
- **@tanstack/react-query**: Server state management
- **@hookform/resolvers**: Form validation integration
- **date-fns**: Date manipulation and formatting

### UI Dependencies
- **@radix-ui/***: Accessible component primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **cmdk**: Command palette component

### Development Dependencies
- **tsx**: TypeScript execution for development
- **esbuild**: Fast bundling for production builds
- **vite**: Development server and build tool

## Deployment Strategy

### Environment Configuration
- **Development**: Local development with Vite dev server
- **Production**: Compiled bundles served by Express static middleware
- **Database**: Environment-based DATABASE_URL configuration
- **Sessions**: Secure session secrets via environment variables

### Build Process
1. Frontend build with Vite (outputs to `dist/public`)
2. Backend compilation with esbuild (outputs to `dist`)
3. Static file serving in production mode
4. Automatic database schema synchronization

### Replit Integration
- **Modules**: Node.js 20, web server, PostgreSQL 16
- **Auto-deployment**: Configured for Replit's autoscale deployment
- **Development**: Integrated with Replit's development environment
- **Database**: Automatic PostgreSQL provisioning

## Changelog

```
Changelog:
- June 16, 2025. Initial setup
- June 16, 2025. Mobile app setup with Capacitor for iOS/Android deployment
- June 16, 2025. Fixed authentication system with dual login options (Replit Auth + demo login)
- June 16, 2025. Implemented PostgreSQL database with session management
- June 16, 2025. Created admin user account with full system access
- June 16, 2025. Prepared mobile app deployment for Google Play Store and Apple App Store
- June 16, 2025. Created comprehensive deployment documentation and build configuration
- June 16, 2025. Implemented Smart Onboarding Wizard with Interactive Tutorials for new user guidance
- June 16, 2025. Enhanced barcode scanner with mobile camera support and inventory management integration
- June 16, 2025. Implemented Quick Action Inventory Management Overlay with global access and keyboard shortcuts
- June 17, 2025. Deployed 5 major new features: Advanced Analytics, Machine Monitoring, Supply Chain Management, Workforce Management, and Energy Management
- June 17, 2025. Completed Android/iOS mobile preparation with enhanced Capacitor configuration, permissions, and deployment documentation
- June 17, 2025. Implemented comprehensive API Integration & External Services management with third-party connectivity, webhooks, and real-time synchronization
- June 17, 2025. Deployed Real-Time Notification & Alert System with multi-channel delivery, rule-based automation, and enterprise-grade monitoring
- June 17, 2025. Implemented 5 additional enterprise modules: Advanced Reporting & BI, Document Management & Knowledge Base, Mobile Field Operations & Offline Sync, Advanced AI & Machine Learning Suite, and Enterprise Security & Compliance Management
- June 17, 2025. Deployed One-Click Performance Snapshot Dashboard with real-time KPI monitoring, auto-refresh functionality, comprehensive analytics, and instant snapshot generation capabilities
- June 17, 2025. Implemented 5 additional enterprise manufacturing modules: Preventive Maintenance Management, Cost Accounting & Analysis, Inventory Optimization, Smart Scheduling & Resource Allocation, and Manufacturing CRM
- June 17, 2025. Streamlined system to MVP focusing on core manufacturing operations: Dashboard, Inventory Management, Production Orders, Quality Control, Barcode Scanner, and Settings for immediate deployment readiness
- June 17, 2025. Implemented One-Click Performance Snapshot Dashboard with comprehensive real-time KPI monitoring, interactive charts, downloadable reports, and instant performance analysis capabilities
- June 17, 2025. Deployed Customizable Dashboard System with drag-and-drop widgets, personalized KPI selections, configurable layouts (2-6 columns), adjustable refresh intervals, and persistent user preferences storage
- June 17, 2025. Completed comprehensive code refactoring and debugging: fixed TypeScript errors, resolved null safety issues, cleaned up authentication system, optimized API endpoints, and streamlined codebase by removing duplicate files
- June 17, 2025. Prepared complete Expo mobile app export package with production-ready configuration, EAS build setup, app store deployment guide, and mobile-optimized component structure for iOS/Android distribution
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```