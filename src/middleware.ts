import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware({
  locales: routing.locales,
  defaultLocale: routing.defaultLocale,
  localeDetection: true,
  localePrefix: 'as-needed',
});

// Language routing middleware
export const config = {
  // Match all paths that should be handled by the middleware
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
