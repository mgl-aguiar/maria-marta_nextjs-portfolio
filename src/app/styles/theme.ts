export const theme = {
  breakpoints: {
    tablet: '768px',
    desktop: '1024px',
    largeDesktop: '1440px',
  },
  fontSizes: {
    xs: '0.75rem', // 12px
    sm: '0.875rem', // 14px
    base: '1rem', // 16px
    lg: '1.125rem', // 18px
    xl: '1.25rem', // 20px
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700,
  },
  spacing: {
    xs: '0.5rem', // 8px
    sm: '1rem', // 16px
    md: '1.5rem', // 24px
    lg: '2rem', // 32px
    xl: '3rem', // 48px
  },
  colors: {
    primary: '#cadetblue',
    background: '#offwhite',
    text: '#333333',
  },
} as const;
