import createMiddleware from 'next-intl/middleware';
import { Locale } from './types/i18n';

export default createMiddleware({
  locales: [Locale.EN, Locale.PT, Locale.ES],
  defaultLocale: Locale.EN,
  localeDetection: false,
  localePrefix: 'as-needed',
});

// Language routing middleware
export const config = {
  // Match all paths that should be handled by the middleware
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
