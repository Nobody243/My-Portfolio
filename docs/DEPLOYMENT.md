# Deployment Guide

## 🚀 Deployment Options

This Next.js portfolio can be deployed to various platforms. Here are the recommended options:

## 1. **Vercel (Recommended)**

### Quick Deployment
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project root
vercel

# Deploy to production
vercel --prod
```

### Automatic Deployment
1. Connect GitHub repository to Vercel
2. Configure environment variables
3. Automatic deployments on push to main branch

### Environment Variables
```env
# .env.local
NEXT_PUBLIC_SITE_URL=https://yoursite.vercel.app
NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id
CONTACT_EMAIL=your.email@domain.com
```

## 2. **Netlify**

### Build Settings
```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Deployment Steps
```bash
# Build the project
npm run build

# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=out
```

## 3. **Docker Deployment**

### Dockerfile
```dockerfile
FROM node:18-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --only=production

FROM node:18-alpine AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["npm", "start"]
```

### Docker Compose
```yaml
# docker-compose.yml
version: '3.8'
services:
  portfolio:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
```

## 4. **AWS Amplify**

### Amplify Configuration
```yaml
# amplify.yml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: out
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

## 5. **GitHub Pages**

### Static Export Configuration
```javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
```

### GitHub Actions Workflow
```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v3
      
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./out
```

## 🔧 Pre-Deployment Checklist

### Performance Optimization
- [ ] Bundle analyzer check (`npm run analyze`)
- [ ] Image optimization verification
- [ ] Lighthouse performance audit (score > 90)
- [ ] Core Web Vitals optimization

### SEO Optimization
- [ ] Meta tags implementation
- [ ] Open Graph tags
- [ ] Twitter Card tags
- [ ] Sitemap generation
- [ ] Robots.txt configuration

### Security
- [ ] Environment variables configured
- [ ] No sensitive data in client code
- [ ] HTTPS configuration
- [ ] Security headers implementation

### Testing
- [ ] Cross-browser testing
- [ ] Mobile responsiveness
- [ ] Form functionality
- [ ] Contact form email delivery
- [ ] All internal links working

## 📊 Performance Monitoring

### Analytics Setup
```typescript
// lib/analytics.ts
export const initAnalytics = () => {
  if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_ANALYTICS_ID) {
    // Google Analytics 4
    gtag('config', process.env.NEXT_PUBLIC_ANALYTICS_ID, {
      page_title: document.title,
      page_location: window.location.href,
    })
  }
}

export const trackEvent = (action: string, category: string, label?: string) => {
  if (typeof window !== 'undefined') {
    gtag('event', action, {
      event_category: category,
      event_label: label,
    })
  }
}
```

### Error Monitoring
```typescript
// lib/error-tracking.ts
export const initErrorTracking = () => {
  if (process.env.NODE_ENV === 'production') {
    window.addEventListener('error', (event) => {
      // Send to error tracking service
      console.error('Global error:', event.error)
    })
    
    window.addEventListener('unhandledrejection', (event) => {
      // Send to error tracking service
      console.error('Unhandled promise rejection:', event.reason)
    })
  }
}
```

## 🔄 CI/CD Pipeline

### GitHub Actions Example
```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      - run: npm ci
      - run: npm run lint
      - run: npm run type-check
      - run: npm run test
      - run: npm run build

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      - run: npm ci
      - run: npm run build
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'
```

## 🛡️ Security Headers

### Next.js Security Configuration
```javascript
// next.config.js
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  }
]

module.exports = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
}
```

## 📈 Post-Deployment Monitoring

### Health Checks
```typescript
// pages/api/health.ts
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    version: process.env.npm_package_version
  })
}
```

### Performance Monitoring
- Set up Core Web Vitals monitoring
- Configure uptime monitoring
- Monitor bundle size changes
- Track conversion funnel metrics

## 🔧 Environment Configuration

### Production Environment Variables
```env
# Production .env
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_ANALYTICS_ID=GA_MEASUREMENT_ID
CONTACT_EMAIL=contact@yourdomain.com
DATABASE_URL=your_database_url
SMTP_HOST=your_smtp_host
SMTP_PORT=587
SMTP_USER=your_smtp_user
SMTP_PASS=your_smtp_password
```

### Development vs Production
```typescript
// lib/config.ts
export const config = {
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  analyticsId: process.env.NEXT_PUBLIC_ANALYTICS_ID,
  contactEmail: process.env.CONTACT_EMAIL,
}
```

## 🚨 Troubleshooting

### Common Issues
1. **Build Failures**: Check Node.js version compatibility
2. **Environment Variables**: Ensure all required variables are set
3. **Image Optimization**: Configure image domains for external images
4. **Static Export Issues**: Verify no server-side features in static build

### Debug Commands
```bash
# Analyze bundle size
npm run analyze

# Check for unused dependencies
npx depcheck

# Type checking
npm run type-check

# Lint check
npm run lint

# Build locally
npm run build && npm start
```
