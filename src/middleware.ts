import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './types/i18n';

export default createMiddleware({
  locales: [...locales],
  defaultLocale,
  localeDetection: false,
  localePrefix: 'as-needed',
});

// Language routing middleware
export const config = {
  // Match all paths that should be handled by the middleware
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
