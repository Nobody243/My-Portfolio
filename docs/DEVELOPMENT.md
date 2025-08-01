# Development Guidelines

## 🚀 Getting Started

### Prerequisites
- Node.js 18.0 or higher
- npm 9.0 or higher
- Git
- VS Code (recommended)

### Quick Setup
```bash
# Clone the repository
git clone <your-repo-url>
cd my-portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Open browser
open http://localhost:3000
```

## 📁 Project Structure Overview

```
my-portfolio/
├── docs/                       # Documentation
├── public/                     # Static assets
├── src/
│   ├── app/                   # Next.js App Router
│   ├── components/            # React components
│   │   ├── ui/               # UI components
│   │   │   ├── core/         # Basic UI elements
│   │   │   ├── animated/     # Animated components
│   │   │   └── forms/        # Form components
│   │   ├── sections/         # Page sections
│   │   ├── navigation/       # Navigation components
│   │   └── layout/           # Layout components
│   ├── lib/                  # Utilities and configurations
│   ├── data/                 # Static data and content
│   └── types/                # TypeScript type definitions
├── .next/                     # Next.js build output
└── node_modules/              # Dependencies
```

## 💻 Development Workflow

### Branch Strategy
```bash
# Main branches
main                    # Production-ready code
develop                # Development integration

# Feature branches
feature/component-name  # New features
fix/issue-description  # Bug fixes
docs/section-name      # Documentation updates
```

### Commit Convention
```bash
# Format: <type>(<scope>): <description>
feat(components): add TextFillEffect animation
fix(button): resolve visibility issues in dark theme
docs(readme): update installation instructions
style(homepage): improve responsive layout
refactor(utils): optimize animation performance
```

### Development Commands
```bash
# Development
npm run dev              # Start development server
npm run dev:turbo        # Start with Turbo mode

# Building
npm run build            # Production build
npm run start            # Start production server

# Code Quality
npm run lint             # ESLint check
npm run lint:fix         # Fix linting issues
npm run type-check       # TypeScript check
npm run format           # Prettier formatting

# Testing
npm run test             # Run tests
npm run test:watch       # Watch mode
npm run test:coverage    # Coverage report

# Analysis
npm run analyze          # Bundle analyzer
npm run lighthouse       # Performance audit
```

## 🎨 Component Development

### Component Structure
```typescript
// components/ui/core/Button.tsx
import { forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground",
        outline: "border border-input hover:bg-accent",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
```

### Component Guidelines

#### 1. **Naming Conventions**
```typescript
// Components: PascalCase
export const TextFillEffect = () => {}
export const EnhancedButton = () => {}

// Props interfaces: ComponentNameProps
interface TextFillEffectProps {
  text: string
  className?: string
}

// Variants: camelCase
const textVariants = cva("base-classes", {
  variants: {
    size: { sm: "text-sm", lg: "text-lg" },
    variant: { primary: "text-blue-500", secondary: "text-gray-500" }
  }
})
```

#### 2. **TypeScript Best Practices**
```typescript
// Use proper type definitions
interface ComponentProps {
  children: React.ReactNode
  className?: string
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

// Use generics for flexible components
interface ListProps<T> {
  items: T[]
  renderItem: (item: T) => React.ReactNode
}

// Use union types for variants
type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
```

#### 3. **Accessibility Standards**
```typescript
// Include ARIA attributes
<button
  aria-label="Close dialog"
  aria-expanded={isOpen}
  aria-controls="dialog-content"
  role="button"
  tabIndex={0}
>
  {children}
</button>

// Semantic HTML
<nav role="navigation" aria-label="Main navigation">
  <ul>
    <li><a href="/" aria-current="page">Home</a></li>
    <li><a href="/about">About</a></li>
  </ul>
</nav>
```

## 🎭 Animation Development

### Framer Motion Guidelines
```typescript
// Define reusable motion variants
export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

// Use motion components
import { motion } from 'framer-motion'

<motion.div
  variants={fadeInUp}
  initial="hidden"
  animate="visible"
  className="component-class"
>
  Content
</motion.div>
```

### CSS Animation Guidelines
```css
/* Use CSS custom properties for dynamic values */
.text-fill-effect {
  --fill-percentage: 0%;
  background: linear-gradient(
    90deg,
    var(--primary) var(--fill-percentage),
    transparent var(--fill-percentage)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Optimize for performance */
.optimized-animation {
  will-change: transform, opacity;
  transform: translateZ(0); /* Force hardware acceleration */
}

/* Use keyframes for complex animations */
@keyframes textFill {
  0% { --fill-percentage: 0%; }
  100% { --fill-percentage: 100%; }
}
```

## 🔧 Utility Development

### Creating Utilities
```typescript
// lib/utils/animations.ts
export const createStaggeredAnimation = (
  staggerDelay: number = 0.1
) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: 0.1,
    },
  },
})

// lib/utils/responsive.ts
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const

export const mediaQuery = (breakpoint: keyof typeof breakpoints) =>
  `@media (min-width: ${breakpoints[breakpoint]})`
```

## 📊 Performance Guidelines

### Code Splitting
```typescript
// Lazy load components
import { lazy, Suspense } from 'react'

const HeavyComponent = lazy(() => import('./HeavyComponent'))

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeavyComponent />
    </Suspense>
  )
}
```

### Bundle Optimization
```typescript
// Use dynamic imports for libraries
const loadChartLibrary = async () => {
  const { Chart } = await import('chart.js')
  return Chart
}

// Tree shaking friendly exports
export { Button } from './Button'
export { Input } from './Input'
export type { ButtonProps, InputProps } from './types'
```

### Image Optimization
```typescript
// Use Next.js Image component
import Image from 'next/image'

<Image
  src="/hero-image.jpg"
  alt="Hero image"
  width={1200}
  height={600}
  priority
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>
```

## 🧪 Testing Guidelines

### Component Testing
```typescript
// components/__tests__/Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from '../Button'

describe('Button', () => {
  it('renders with correct text', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button')).toHaveTextContent('Click me')
  })

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click me</Button>)
    
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('applies custom className', () => {
    render(<Button className="custom-class">Button</Button>)
    expect(screen.getByRole('button')).toHaveClass('custom-class')
  })
})
```

### Animation Testing
```typescript
// Test animation states
import { render } from '@testing-library/react'
import { TextFillEffect } from '../TextFillEffect'

jest.mock('framer-motion', () => ({
  motion: {
    span: ({ children, ...props }: any) => <span {...props}>{children}</span>,
  },
}))

describe('TextFillEffect', () => {
  it('renders all characters', () => {
    const { container } = render(<TextFillEffect text="Hello" />)
    expect(container.querySelectorAll('span')).toHaveLength(5)
  })
})
```

## 🔍 Debugging Guidelines

### Development Tools
```typescript
// Debug utility
export const debugLog = (label: string, data: any) => {
  if (process.env.NODE_ENV === 'development') {
    console.group(`🐛 ${label}`)
    console.log(data)
    console.groupEnd()
  }
}

// Performance monitoring
export const measurePerformance = (name: string, fn: () => void) => {
  if (process.env.NODE_ENV === 'development') {
    performance.mark(`${name}-start`)
    fn()
    performance.mark(`${name}-end`)
    performance.measure(name, `${name}-start`, `${name}-end`)
  } else {
    fn()
  }
}
```

### Error Boundaries
```typescript
// components/ErrorBoundary.tsx
import { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  }

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return this.props.fallback || <h1>Something went wrong.</h1>
    }

    return this.props.children
  }
}

export default ErrorBoundary
```

## 📚 Documentation Standards

### Component Documentation
```typescript
/**
 * TextFillEffect Component
 * 
 * A component that creates a text-filling animation effect with customizable
 * timing and styling options.
 * 
 * @example
 * ```tsx
 * <TextFillEffect 
 *   text="Hello World" 
 *   duration={2000}
 *   className="text-4xl font-bold"
 * />
 * ```
 */
interface TextFillEffectProps {
  /** The text content to animate */
  text: string
  /** Animation duration in milliseconds */
  duration?: number
  /** Additional CSS classes */
  className?: string
  /** Callback when animation completes */
  onComplete?: () => void
}
```

### README Updates
When adding new features:
1. Update the README.md with new component documentation
2. Add usage examples
3. Include any new dependencies
4. Update the feature list

## 🔒 Security Guidelines

### Environment Variables
```typescript
// Never commit sensitive data
// Use .env.local for local development
NEXT_PUBLIC_SITE_URL=http://localhost:3000
DATABASE_URL=postgresql://user:pass@localhost:5432/db

// Validate environment variables
const requiredEnvVars = ['DATABASE_URL', 'NEXT_PUBLIC_SITE_URL']
requiredEnvVars.forEach((envVar) => {
  if (!process.env[envVar]) {
    throw new Error(`Missing required environment variable: ${envVar}`)
  }
})
```

### Input Sanitization
```typescript
// Sanitize user inputs
import DOMPurify from 'dompurify'

const sanitizeHTML = (html: string) => {
  if (typeof window !== 'undefined') {
    return DOMPurify.sanitize(html)
  }
  return html
}
```

## 🚀 Deployment Preparation

### Pre-deployment Checklist
```bash
# Run all checks before deployment
npm run lint
npm run type-check
npm run test
npm run build

# Check bundle size
npm run analyze

# Test production build locally
npm run start
```

### Environment Configuration
```typescript
// lib/env.ts
export const env = {
  NODE_ENV: process.env.NODE_ENV,
  SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  IS_PRODUCTION: process.env.NODE_ENV === 'production',
  IS_DEVELOPMENT: process.env.NODE_ENV === 'development',
}

// Validate in production
if (env.IS_PRODUCTION && !env.SITE_URL.startsWith('https://')) {
  throw new Error('SITE_URL must use HTTPS in production')
}
```

## 📈 Continuous Improvement

### Code Reviews
- Check for TypeScript errors
- Verify accessibility compliance
- Test responsive design
- Review performance impact
- Ensure proper documentation

### Performance Monitoring
- Core Web Vitals tracking
- Bundle size monitoring
- Runtime performance profiling
- User experience metrics

### Learning Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Framer Motion Guide](https://www.framer.com/motion/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
