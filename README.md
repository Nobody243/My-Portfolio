# My Portfolio - Professional Next.js Application

A modern, performant portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Quick Start

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

## 📁 Project Structure

This project follows professional Next.js development patterns with clear separation of concerns:

```
my-portfolio/
├── docs/                          # Project documentation
│   ├── PROJECT_STRUCTURE.md       # Architecture overview
│   ├── COMPONENTS.md               # Component documentation
│   ├── STYLING.md                  # Styling guidelines
│   ├── DEPLOYMENT.md               # Deployment instructions
│   └── DEVELOPMENT.md              # Development workflow
├── public/                        # Static assets
├── src/
│   ├── app/                       # Next.js App Router
│   │   ├── (pages)/              # Route groups
│   │   ├── globals.css           # Global styles
│   │   └── layout.tsx            # Root layout
│   ├── components/               # React components
│   │   ├── ui/                   # UI component library
│   │   │   ├── core/            # Basic UI elements
│   │   │   ├── animated/        # Animated components
│   │   │   └── forms/           # Form components
│   │   ├── navigation/          # Navigation components
│   │   ├── layout/              # Layout components
│   │   ├── sections/            # Page sections
│   │   ├── features/            # Feature components
│   │   └── 3d/                  # 3D components
│   ├── lib/                     # Utilities and configurations
│   ├── data/                    # Static data and content
│   ├── types/                   # TypeScript type definitions
│   └── styles/                  # Additional stylesheets
└── Configuration files...
```

## ✨ Features

### 🎨 **Modern Design**
- Clean, professional interface
- Dark/light theme support
- Responsive design for all devices
- Smooth animations and transitions

### 🚀 **Performance Optimized**
- Next.js 15 with App Router
- Static site generation (SSG)
- Image optimization
- Code splitting and lazy loading
- Bundle size optimization

### 🎭 **Advanced Animations**
- Framer Motion integration
- Text-fill effects with aura animations
- Interactive hover states
- Smooth page transitions
- 3D elements and particle effects

### 📱 **User Experience**
- Intuitive navigation
- Fast loading times
- Accessible design (WCAG compliant)
- SEO optimized
- Contact form with validation

### 🔧 **Developer Experience**
- TypeScript for type safety
- ESLint and Prettier configuration
- Comprehensive documentation
- Component-based architecture
- Absolute imports with path mapping

## 🛠️ Tech Stack

### **Core Technologies**
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library

### **UI Components**
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library
- **Class Variance Authority** - Component variants

### **Development Tools**
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **PostCSS** - CSS processing

## 📚 Component Library

### **Core UI Components** (`/src/components/ui/core/`)
- Button, Input, Label, Textarea
- Card, Badge, Avatar
- Form components

### **Animated Components** (`/src/components/ui/animated/`)
- TextFillEffect - Gradient text animation
- NeonText - Neon glow effects
- AnimatedText - Various text animations
- EnhancedButton - Interactive buttons
- FloatingParticles - Background animations

### **Feature Components** (`/src/components/features/`)
- ProjectCard - Project showcase cards
- InteractiveCard - Hover-responsive cards
- InfiniteMovingCards - Testimonial carousel

### **Page Sections** (`/src/components/sections/`)
- HeroSection - Landing page hero
- ProjectShowcase - Portfolio display
- ContactForm - Contact form section

## 🎨 Styling System

### **Design Tokens**
- Consistent color palette
- Typography scale
- Spacing system
- Component variants

### **Animation System**
- Reusable motion variants
- Performance-optimized animations
- Accessible reduced-motion support

### **Responsive Design**
- Mobile-first approach
- Breakpoint system
- Flexible grid layouts

## 🚀 Available Scripts

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

# Analysis
npm run analyze          # Bundle analyzer
npm run lighthouse       # Performance audit
```

## 📖 Documentation

Comprehensive documentation is available in the `/docs` folder:

- **[Project Structure](./docs/PROJECT_STRUCTURE.md)** - Architecture and organization
- **[Components](./docs/COMPONENTS.md)** - Component library documentation
- **[Styling](./docs/STYLING.md)** - Styling methodology and guidelines
- **[Development](./docs/DEVELOPMENT.md)** - Development workflow and best practices
- **[Deployment](./docs/DEPLOYMENT.md)** - Deployment guides and configuration

## 🔧 Configuration

### **Environment Variables**
```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id
CONTACT_EMAIL=your.email@domain.com
```

### **Customization**
- Update `src/data/site-config.ts` for site configuration
- Modify `src/data/projects.ts` for project data
- Customize `tailwind.config.js` for design tokens

## 🚀 Deployment

The project is optimized for deployment on:

### **Recommended Platforms**
- **Vercel** (Recommended) - Zero-config deployment
- **Netlify** - Static site hosting
- **AWS Amplify** - Full-stack hosting
- **Docker** - Containerized deployment

### **Quick Deploy to Vercel**
```bash
npm i -g vercel
vercel
```

## 📈 Performance

### **Lighthouse Scores**
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

### **Core Web Vitals**
- Largest Contentful Paint (LCP): < 2.5s
- First Input Delay (FID): < 100ms
- Cumulative Layout Shift (CLS): < 0.1

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Radix UI](https://www.radix-ui.com/) - Accessible components
- [Lucide](https://lucide.dev/) - Icon library

---

Built with ❤️ using modern web technologies.
