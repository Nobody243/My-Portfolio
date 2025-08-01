import { typography, spacing, grid, components } from '@/lib/constants/responsive';
import { cn } from '@/lib/utils';

type BreakpointKey = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

// Helper function to generate responsive classes
export function responsiveClasses(
  config: Partial<Record<BreakpointKey, string>>
): string {
  const classes: string[] = [];
  
  Object.entries(config).forEach(([breakpoint, className]) => {
    if (breakpoint === 'xs') {
      classes.push(className);
    } else {
      classes.push(`${breakpoint}:${className}`);
    }
  });
  
  return classes.join(' ');
}

// Typography helpers
export const responsiveTypography = {
  h1: (customClasses?: string) => cn(
    responsiveClasses(typography.h1),
    'font-bold leading-tight tracking-tight',
    customClasses
  ),
  h2: (customClasses?: string) => cn(
    responsiveClasses(typography.h2),
    'font-bold leading-tight tracking-tight',
    customClasses
  ),
  h3: (customClasses?: string) => cn(
    responsiveClasses(typography.h3),
    'font-semibold leading-snug',
    customClasses
  ),
  h4: (customClasses?: string) => cn(
    responsiveClasses(typography.h4),
    'font-semibold leading-snug',
    customClasses
  ),
  body: (customClasses?: string) => cn(
    responsiveClasses(typography.body),
    'leading-relaxed',
    customClasses
  ),
  bodyLarge: (customClasses?: string) => cn(
    responsiveClasses(typography.bodyLarge),
    'leading-relaxed',
    customClasses
  ),
  caption: (customClasses?: string) => cn(
    responsiveClasses(typography.caption),
    'leading-normal',
    customClasses
  )
};

// Layout helpers
export const responsiveLayout = {
  section: (customClasses?: string) => cn(
    responsiveClasses(spacing.section),
    customClasses
  ),
  container: (customClasses?: string) => cn(
    'mx-auto w-full',
    responsiveClasses(spacing.container),
    customClasses
  ),
  grid: {
    projects: (customClasses?: string) => cn(
      'grid',
      responsiveClasses(grid.projects),
      responsiveClasses(spacing.gap),
      customClasses
    ),
    skills: (customClasses?: string) => cn(
      'grid',
      responsiveClasses(grid.skills),
      responsiveClasses({ xs: 'gap-2', sm: 'gap-3', md: 'gap-4' }),
      customClasses
    ),
    stats: (customClasses?: string) => cn(
      'grid',
      responsiveClasses(grid.stats),
      responsiveClasses(spacing.gap),
      customClasses
    ),
    bento: (customClasses?: string) => cn(
      'grid',
      responsiveClasses(grid.bento),
      responsiveClasses(spacing.gap),
      customClasses
    )
  }
};

// Component helpers
export const responsiveComponents = {
  card: (customClasses?: string) => cn(
    responsiveClasses(components.card),
    'rounded-lg border bg-card text-card-foreground shadow-sm',
    customClasses
  ),
  button: (size: 'sm' | 'md' | 'lg' = 'md', customClasses?: string) => {
    const sizeClasses = {
      sm: responsiveClasses({ xs: 'px-3 py-2 text-sm', md: 'px-4 py-2 text-base' }),
      md: responsiveClasses({ xs: 'px-4 py-2 text-sm', sm: 'px-6 py-3 text-base', md: 'px-8 py-4 text-lg' }),
      lg: responsiveClasses({ xs: 'px-6 py-3 text-base', sm: 'px-8 py-4 text-lg', md: 'px-10 py-5 text-xl' })
    };
    
    return cn(
      'inline-flex items-center justify-center rounded-md font-medium transition-colors',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
      'disabled:pointer-events-none disabled:opacity-50',
      sizeClasses[size],
      customClasses
    );
  },
  avatar: (size: 'sm' | 'md' | 'lg' = 'md', customClasses?: string) => {
    const sizeClasses = {
      sm: responsiveClasses({ xs: 'w-12 h-12', md: 'w-16 h-16' }),
      md: responsiveClasses({ xs: 'w-16 h-16', sm: 'w-20 h-20', md: 'w-24 h-24' }),
      lg: responsiveClasses({ xs: 'w-20 h-20', sm: 'w-24 h-24', md: 'w-32 h-32', lg: 'w-40 h-40' })
    };
    
    return cn(
      'rounded-full object-cover',
      sizeClasses[size],
      customClasses
    );
  },
  icon: (size: 'sm' | 'md' | 'lg' = 'md', customClasses?: string) => {
    const sizeClasses = {
      sm: responsiveClasses({ xs: 'w-4 h-4', md: 'w-5 h-5' }),
      md: responsiveClasses({ xs: 'w-5 h-5', md: 'w-6 h-6' }),
      lg: responsiveClasses({ xs: 'w-6 h-6', md: 'w-8 h-8' })
    };
    
    return cn(sizeClasses[size], customClasses);
  }
};

// Responsive visibility helpers
export const responsiveVisibility = {
  showFrom: (breakpoint: BreakpointKey) => `hidden ${breakpoint}:block`,
  hideFrom: (breakpoint: BreakpointKey) => `block ${breakpoint}:hidden`,
  showOnly: (breakpoint: BreakpointKey) => {
    const breakpoints: BreakpointKey[] = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];
    const index = breakpoints.indexOf(breakpoint);
    const nextBreakpoint = breakpoints[index + 1];
    
    if (!nextBreakpoint) return `hidden ${breakpoint}:block`;
    return `hidden ${breakpoint}:block ${nextBreakpoint}:hidden`;
  }
};

// Responsive flex/grid helpers
export const responsiveFlex = {
  direction: {
    column: 'flex flex-col',
    columnToRow: 'flex flex-col sm:flex-row',
    row: 'flex flex-row',
    rowToColumn: 'flex flex-row sm:flex-col'
  },
  align: {
    center: 'items-center justify-center',
    start: 'items-start justify-start',
    end: 'items-end justify-end',
    between: 'items-center justify-between',
    around: 'items-center justify-around'
  }
};
