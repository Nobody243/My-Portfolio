// Responsive breakpoints for the portfolio
export const breakpoints = {
  xs: '320px',   // Extra small devices (small phones)
  sm: '640px',   // Small devices (large phones)
  md: '768px',   // Medium devices (tablets)
  lg: '1024px',  // Large devices (laptops)
  xl: '1280px',  // Extra large devices (desktops)
  '2xl': '1536px' // 2X Large devices (large desktops)
} as const;

// Typography scale for different screen sizes
export const typography = {
  // Headings
  h1: {
    xs: 'text-3xl',      // 30px
    sm: 'text-4xl',      // 36px
    md: 'text-5xl',      // 48px
    lg: 'text-6xl',      // 60px
    xl: 'text-7xl',      // 72px
    '2xl': 'text-8xl'    // 96px
  },
  h2: {
    xs: 'text-2xl',      // 24px
    sm: 'text-3xl',      // 30px
    md: 'text-4xl',      // 36px
    lg: 'text-5xl',      // 48px
    xl: 'text-6xl',      // 60px
    '2xl': 'text-7xl'    // 72px
  },
  h3: {
    xs: 'text-xl',       // 20px
    sm: 'text-2xl',      // 24px
    md: 'text-3xl',      // 30px
    lg: 'text-4xl',      // 36px
    xl: 'text-5xl'       // 48px
  },
  h4: {
    xs: 'text-lg',       // 18px
    sm: 'text-xl',       // 20px
    md: 'text-2xl',      // 24px
    lg: 'text-3xl'       // 30px
  },
  // Body text
  body: {
    xs: 'text-sm',       // 14px
    sm: 'text-base',     // 16px
    md: 'text-lg',       // 18px
    lg: 'text-xl'        // 20px
  },
  bodyLarge: {
    xs: 'text-base',     // 16px
    sm: 'text-lg',       // 18px
    md: 'text-xl',       // 20px
    lg: 'text-2xl'       // 24px
  },
  caption: {
    xs: 'text-xs',       // 12px
    sm: 'text-sm',       // 14px
    md: 'text-base'      // 16px
  }
} as const;

// Spacing scale for different screen sizes
export const spacing = {
  section: {
    xs: 'py-12 px-4',       // 48px vertical, 16px horizontal
    sm: 'py-16 px-6',       // 64px vertical, 24px horizontal
    md: 'py-20 px-8',       // 80px vertical, 32px horizontal
    lg: 'py-24 px-12',      // 96px vertical, 48px horizontal
    xl: 'py-32 px-16'       // 128px vertical, 64px horizontal
  },
  container: {
    xs: 'max-w-full px-4',
    sm: 'max-w-screen-sm px-6',
    md: 'max-w-screen-md px-8',
    lg: 'max-w-screen-lg px-12',
    xl: 'max-w-screen-xl px-16',
    '2xl': 'max-w-screen-2xl px-20'
  },
  gap: {
    xs: 'gap-4',
    sm: 'gap-6',
    md: 'gap-8',
    lg: 'gap-12',
    xl: 'gap-16'
  }
} as const;

// Grid layouts for different screen sizes
export const grid = {
  projects: {
    xs: 'grid-cols-1',
    sm: 'grid-cols-1',
    md: 'grid-cols-2',
    lg: 'grid-cols-3',
    xl: 'grid-cols-3'
  },
  skills: {
    xs: 'grid-cols-2',
    sm: 'grid-cols-3',
    md: 'grid-cols-4',
    lg: 'grid-cols-6',
    xl: 'grid-cols-8'
  },
  stats: {
    xs: 'grid-cols-2',
    sm: 'grid-cols-2',
    md: 'grid-cols-4',
    lg: 'grid-cols-4'
  },
  bento: {
    xs: 'grid-cols-1',
    sm: 'grid-cols-1',
    md: 'grid-cols-2',
    lg: 'grid-cols-3',
    xl: 'grid-cols-4'
  }
} as const;

// Component sizes for different screens
export const components = {
  card: {
    xs: 'p-4',
    sm: 'p-6',
    md: 'p-8',
    lg: 'p-10'
  },
  button: {
    xs: 'px-4 py-2 text-sm',
    sm: 'px-6 py-3 text-base',
    md: 'px-8 py-4 text-lg',
    lg: 'px-10 py-5 text-xl'
  },
  avatar: {
    xs: 'w-16 h-16',
    sm: 'w-20 h-20',
    md: 'w-24 h-24',
    lg: 'w-32 h-32'
  },
  icon: {
    xs: 'w-4 h-4',
    sm: 'w-5 h-5',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  }
} as const;

// Animation duration for different interactions
export const animations = {
  fast: '150ms',
  normal: '300ms',
  slow: '500ms',
  slower: '750ms'
} as const;
