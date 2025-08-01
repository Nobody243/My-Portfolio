# Portfolio Project Structure

## 📁 Folder Organization

This project follows Next.js 13+ App Router best practices with a clean, scalable architecture.

```
my-portfolio/
├── 📁 docs/                    # Documentation
│   ├── PROJECT_STRUCTURE.md    # This file
│   ├── COMPONENTS.md           # Component documentation
│   ├── STYLING.md              # Styling guide
│   └── DEPLOYMENT.md           # Deployment instructions
├── 📁 public/                  # Static assets
│   ├── images/                 # Image assets
│   ├── icons/                  # Icon files
│   └── ...                     # Other static files
├── 📁 src/
│   ├── 📁 app/                 # Next.js App Router
│   │   ├── 📁 (routes)/        # Route groups
│   │   │   ├── about/          # About page
│   │   │   ├── contact/        # Contact page
│   │   │   ├── projects/       # Projects page
│   │   │   └── blog/           # Blog pages (optional)
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   ├── loading.tsx         # Loading UI
│   │   ├── error.tsx           # Error UI
│   │   └── not-found.tsx       # 404 page
│   ├── 📁 components/          # React components
│   │   ├── 📁 ui/              # Reusable UI components
│   │   │   ├── 📁 animated/    # Animated components
│   │   │   ├── 📁 forms/       # Form components
│   │   │   ├── 📁 navigation/  # Navigation components
│   │   │   └── 📁 core/        # Core UI components
│   │   ├── 📁 sections/        # Page sections
│   │   ├── 📁 layout/          # Layout components
│   │   ├── 📁 pages/           # Page-specific components
│   │   └── 📁 features/        # Feature-specific components
│   ├── 📁 lib/                 # Utilities and configurations
│   │   ├── 📁 utils/           # Utility functions
│   │   ├── 📁 hooks/           # Custom React hooks
│   │   ├── 📁 constants/       # Constants and configurations
│   │   ├── 📁 animations/      # Animation utilities
│   │   └── 📁 services/        # API services
│   ├── 📁 data/                # Static data and content
│   │   ├── 📁 content/         # Content files (MDX, etc.)
│   │   ├── 📁 config/          # Configuration files
│   │   └── 📁 mock/            # Mock data for development
│   ├── 📁 styles/              # Styling files
│   │   ├── 📁 components/      # Component-specific styles
│   │   ├── 📁 globals/         # Global style partials
│   │   └── custom.css          # Custom CSS
│   ├── 📁 contexts/            # React contexts
│   ├── 📁 types/               # TypeScript type definitions
│   └── 📁 assets/              # Non-public assets
├── 📄 package.json
├── 📄 tsconfig.json
├── 📄 tailwind.config.js
├── 📄 next.config.js
└── 📄 README.md
```

## 🎯 Key Principles

### 1. **Feature-Based Organization**
- Group related components, styles, and logic together
- Each feature has its own folder with all necessary files

### 2. **Clear Separation of Concerns**
- UI components are pure and reusable
- Business logic is separated into hooks and utilities
- Data and configuration are centralized

### 3. **Scalable Architecture**
- Easy to add new features without restructuring
- Clear import paths and dependencies
- Consistent naming conventions

### 4. **Developer Experience**
- Well-documented components and utilities
- Type-safe throughout with TypeScript
- Easy to find and modify specific functionality

## 📂 Detailed Breakdown

### `/src/components/`
- **ui/**: Reusable, generic UI components (buttons, cards, forms)
- **sections/**: Large page sections (hero, about, contact)
- **layout/**: Layout-related components (navbar, footer, sidebar)
- **features/**: Feature-specific components (project showcase, testimonials)
- **pages/**: Page-specific components that combine multiple sections

### `/src/lib/`
- **utils/**: Pure utility functions
- **hooks/**: Custom React hooks
- **constants/**: Application constants and configurations
- **animations/**: Animation utilities and configurations
- **services/**: API calls and external service integrations

### `/src/data/`
- **content/**: Static content (projects, testimonials, about info)
- **config/**: Site configuration and settings
- **mock/**: Development and testing data

## 🔄 Import Conventions

```typescript
// Absolute imports from src
import { Button } from '@/components/ui/core/button'
import { siteConfig } from '@/data/config/site'
import { useAnimation } from '@/lib/hooks/use-animation'

// Relative imports for nearby files
import './component.css'
import { helper } from '../utils/helper'
```

## 🚀 Getting Started

1. All components should be documented with JSDoc comments
2. Use TypeScript for all new files
3. Follow the established naming conventions
4. Add tests for complex utilities and hooks
5. Update this documentation when adding new major features
