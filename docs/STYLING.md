# Styling Guide

## 🎨 Styling Architecture

This portfolio uses a hybrid approach combining Tailwind CSS, custom CSS, and CSS-in-JS for optimal developer experience and performance.

## 📁 Style Organization

```
src/styles/
├── globals/
│   ├── base.css           # Base styles and resets
│   ├── components.css     # Global component styles
│   ├── utilities.css      # Custom utility classes
│   └── animations.css     # Global animations
├── components/
│   ├── ui/               # UI component styles
│   ├── sections/         # Section-specific styles
│   └── layout/           # Layout component styles
└── custom.css            # Main custom CSS file
```

## 🎯 Styling Methodology

### 1. **Tailwind CSS First**
Use Tailwind utilities for:
- Layout (flexbox, grid, spacing)
- Typography (fonts, sizes, weights)
- Colors (background, text, borders)
- Responsive design
- Basic animations

```typescript
<div className="flex items-center justify-center p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
  Content
</div>
```

### 2. **Custom CSS for Complex Animations**
Use custom CSS for:
- Complex keyframe animations
- Advanced pseudo-elements
- Browser-specific optimizations

```css
/* Text fill effect animation */
@keyframes text-fill-subtle {
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
}

.text-fill-effect {
  background: linear-gradient(90deg, currentColor 0%, currentColor 25%, #3b82f6 35%, #8b5cf6 50%, #ec4899 65%, currentColor 75%, currentColor 100%);
  background-size: 400% 100%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: text-fill-subtle 8s ease-in-out infinite;
}
```

### 3. **CSS-in-JS for Dynamic Styles**
Use styled-components or CSS-in-JS for:
- Dynamic theming
- State-dependent styles
- Component-scoped styles

## 🌈 Color System

### Primary Palette
```css
:root {
  /* Primary Colors */
  --primary-50: #eff6ff;
  --primary-100: #dbeafe;
  --primary-500: #3b82f6;
  --primary-600: #2563eb;
  --primary-900: #1e3a8a;
  
  /* Secondary Colors */
  --secondary-50: #faf5ff;
  --secondary-500: #8b5cf6;
  --secondary-600: #7c3aed;
  
  /* Accent Colors */
  --accent-50: #fdf2f8;
  --accent-500: #ec4899;
  --accent-600: #db2777;
}
```

### Dark Mode Colors
```css
.dark {
  --background: #0f172a;
  --foreground: #f8fafc;
  --card: #1e293b;
  --card-foreground: #f8fafc;
  --primary: #3b82f6;
  --primary-foreground: #f8fafc;
}
```

### Gradient Combinations
```css
/* Featured gradients */
.gradient-primary {
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
}

.gradient-secondary {
  background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%);
}

.gradient-accent {
  background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 50%, #8b5cf6 100%);
}
```

## 📱 Responsive Design

### Breakpoint System
```typescript
const breakpoints = {
  xs: '320px',   // Mobile small
  sm: '640px',   // Mobile large
  md: '768px',   // Tablet
  lg: '1024px',  // Desktop small
  xl: '1280px',  // Desktop large
  '2xl': '1536px' // Desktop extra large
}
```

### Responsive Utilities
```typescript
// Responsive typography helper
export const responsiveTypography = {
  h1: (className?: string) => cn(
    "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold",
    className
  ),
  h2: (className?: string) => cn(
    "text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold",
    className
  ),
  body: (className?: string) => cn(
    "text-sm sm:text-base md:text-lg",
    className
  )
}

// Responsive layout helper
export const responsiveLayout = {
  container: (className?: string) => cn(
    "mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl",
    className
  ),
  section: (className?: string) => cn(
    "py-12 sm:py-16 lg:py-20",
    className
  )
}
```

## ✨ Animation System

### Performance-Optimized Animations
```css
/* Use transform and opacity for performance */
.animate-slide-up {
  animation: slideUp 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(2rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### Framer Motion Variants
```typescript
export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}
```

### Micro-Interactions
```css
/* Button hover effects */
.btn-enhanced {
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-enhanced:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

/* Card hover effects */
.card-interactive:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}
```

## 🌙 Theme System

### CSS Custom Properties
```css
:root {
  --radius: 0.5rem;
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --card: 0 0% 100%;
  --card-foreground: 222.2 84% 4.9%;
  --popover: 0 0% 100%;
  --popover-foreground: 222.2 84% 4.9%;
  --primary: 221.2 83.2% 53.3%;
  --primary-foreground: 210 40% 98%;
}
```

### Theme Toggle Implementation
```typescript
const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
```

## 🎭 Component-Specific Styles

### Button Variants
```css
.btn-primary {
  @apply bg-primary text-primary-foreground hover:bg-primary/90;
}

.btn-outline {
  @apply border border-input bg-background hover:bg-accent hover:text-accent-foreground;
}

.btn-ghost {
  @apply hover:bg-accent hover:text-accent-foreground;
}
```

### Card Variants
```css
.card-default {
  @apply bg-card text-card-foreground rounded-lg border shadow-sm;
}

.card-interactive {
  @apply card-default hover:shadow-md transition-all duration-200 cursor-pointer;
}

.card-glass {
  @apply bg-white/10 backdrop-blur-md border-white/20;
}
```

## 📐 Layout Patterns

### Grid Systems
```css
/* Auto-fit grid for responsive cards */
.grid-auto-fit {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

/* Responsive project grid */
.grid-projects {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 768px) {
  .grid-projects {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid-projects {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

### Flexbox Patterns
```css
/* Center everything */
.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Space between with center alignment */
.flex-between {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
```

## 🚀 Performance Considerations

### CSS Optimization
- Use CSS containment for complex animations
- Prefer transform and opacity for animations
- Use will-change sparingly
- Implement critical CSS for above-the-fold content

### Loading Strategies
```css
/* Skeleton loading states */
.skeleton {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

## 🛠️ Development Workflow

### Style Linting
```json
{
  "stylelint": {
    "extends": ["stylelint-config-standard"],
    "rules": {
      "selector-class-pattern": "^[a-z][a-zA-Z0-9]*$"
    }
  }
}
```

### Build Optimization
- PurgeCSS for removing unused styles
- CSS minification and compression
- Critical CSS extraction
- PostCSS plugins for vendor prefixes
