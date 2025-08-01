# Component Documentation

## 🧩 Component Architecture

This portfolio follows a hierarchical component structure with clear separation of concerns.

## 📁 Component Categories

### 1. **Core UI Components** (`/src/components/ui/core/`)
Basic building blocks used throughout the application.

#### `Button` - Enhanced button component
```typescript
interface ButtonProps {
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  icon?: LucideIcon
  iconPosition?: 'left' | 'right'
  iconAnimation?: 'spin' | 'bounce' | 'slide' | 'none'
  textFill?: boolean
  lightGlow?: boolean
}
```

#### `Card` - Flexible card container
```typescript
interface CardProps {
  variant?: 'default' | 'interactive' | 'glass'
  hover?: boolean
  shadow?: 'sm' | 'md' | 'lg' | 'xl'
}
```

#### `Badge` - Status and category indicators
```typescript
interface BadgeProps {
  variant?: 'default' | 'secondary' | 'outline' | 'destructive'
  size?: 'sm' | 'md' | 'lg'
}
```

### 2. **Animated Components** (`/src/components/ui/animated/`)
Components with built-in animations and interactions.

#### `TextFillEffect` - Animated text with gradient fill
```typescript
interface TextFillEffectProps {
  text: string
  className?: string
  delay?: number
  duration?: number
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div'
  enableAura?: boolean
}
```

#### `NeonText` - Neon-style animated text
```typescript
interface NeonTextProps {
  text: string
  colorSet?: 'blue' | 'purple' | 'cyan' | 'emerald' | 'gradient'
  intensity?: 'subtle' | 'medium' | 'strong'
  enableWave?: boolean
  enableGlow?: boolean
}
```

#### `FloatingParticles` - Animated background particles
```typescript
interface FloatingParticlesProps {
  count?: number
  speed?: 'slow' | 'medium' | 'fast'
  color?: string
  size?: 'sm' | 'md' | 'lg'
}
```

### 3. **Form Components** (`/src/components/ui/forms/`)
Form-related components with validation and accessibility.

#### `ContactForm` - Contact form with validation
```typescript
interface ContactFormProps {
  onSubmit?: (data: ContactFormData) => void
  loading?: boolean
}
```

### 4. **Navigation Components** (`/src/components/ui/navigation/`)
Navigation and routing related components.

#### `Navbar` - Main navigation bar
```typescript
interface NavbarProps {
  variant?: 'default' | 'transparent' | 'glass'
  sticky?: boolean
}
```

#### `ThemeToggle` - Dark/light mode toggle
```typescript
interface ThemeToggleProps {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'button' | 'switch'
}
```

### 5. **Page Sections** (`/src/components/sections/`)
Large page sections that combine multiple components.

#### `HeroSection` - Landing page hero
- Animated background elements
- Dynamic text animations
- Call-to-action buttons
- Responsive design

#### `ProjectShowcase` - Project display section
- Project cards with hover effects
- Category filtering
- Responsive grid layout
- Performance optimized images

#### `TestimonialsSection` - Client testimonials
- Infinite moving cards
- Star ratings
- Responsive testimonial grid

#### `BentoGrid` - Skills and stats display
- Interactive grid layout
- Animated counters
- Skill progression bars

### 6. **Layout Components** (`/src/components/layout/`)
Page structure and layout components.

#### `MainLayout` - Primary page layout
```typescript
interface MainLayoutProps {
  children: React.ReactNode
  showNavbar?: boolean
  showFooter?: boolean
  className?: string
}
```

#### `Footer` - Site footer
- Social media links
- Copyright information
- Quick navigation links

### 7. **3D Components** (`/src/components/3d/`)
Three.js and WebGL components.

#### `Scene3D` - 3D scene container
#### `Text3D` - 3D text rendering
#### `ParticleBackground` - 3D particle system
#### `GeometricBackground` - Animated 3D shapes

## 🎨 Styling Conventions

### CSS Classes
- Use Tailwind CSS for styling
- Custom CSS for complex animations
- CSS modules for component-specific styles

### Responsive Design
```typescript
// Use responsive utility functions
import { responsiveTypography, responsiveLayout } from '@/lib/utils/responsive'

const Component = () => (
  <div className={responsiveLayout.container()}>
    <h1 className={responsiveTypography.h1("text-center")}>
      Title
    </h1>
  </div>
)
```

### Animation Guidelines
- Use Framer Motion for React animations
- CSS keyframes for pure CSS animations
- Performance considerations for mobile devices

## 🔧 Component Development Guidelines

### 1. **Component Structure**
```typescript
// Component file structure
interface ComponentProps {
  // Props interface
}

export const Component: React.FC<ComponentProps> = ({
  // Destructured props with defaults
}) => {
  // Hooks and state
  // Event handlers
  // Render logic
  
  return (
    // JSX with proper accessibility
  )
}

Component.displayName = 'Component'
export default Component
```

### 2. **Accessibility**
- Use semantic HTML elements
- Include ARIA labels and roles
- Ensure keyboard navigation
- Test with screen readers

### 3. **Performance**
- Use React.memo for expensive components
- Implement proper loading states
- Optimize images and assets
- Lazy load non-critical components

### 4. **TypeScript**
- Define proper interfaces for all props
- Use generic types where appropriate
- Avoid 'any' types
- Document complex type definitions

## 🧪 Testing

### Component Testing
```typescript
// Example test structure
import { render, screen } from '@testing-library/react'
import { Component } from './Component'

describe('Component', () => {
  it('renders correctly', () => {
    render(<Component />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
```

### Visual Testing
- Storybook for component documentation
- Visual regression testing
- Cross-browser compatibility

## 📦 Export Patterns

### Index Files
```typescript
// /src/components/ui/index.ts
export { Button } from './core/button'
export { Card } from './core/card'
export { Badge } from './core/badge'
export { TextFillEffect } from './animated/text-fill-effect'
export { ContactForm } from './forms/contact-form'
```

### Named Exports
```typescript
// Prefer named exports for better tree shaking
export const Component = () => { /* ... */ }

// Default exports only for pages
export default Component
```
