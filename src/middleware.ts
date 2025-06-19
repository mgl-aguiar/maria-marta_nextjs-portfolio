import createMiddleware from 'next-intl/middleware';
import { Locale } from './types/i18n';

export default createMiddleware({
  // A list of all locales that are supported
  locales: [Locale.EN, Locale.PT, Locale.ES],

  // Used when no locale matches
  defaultLocale: Locale.EN,

  // Disable automatic locale detection
  localeDetection: false,

  // Only add locale prefix for non-default locales
  localePrefix: 'as-needed',
});

// Language routing middleware
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(pt|en|es)/:path*'],
};
