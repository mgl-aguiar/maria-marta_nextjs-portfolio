import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';
import { Locale } from '../types/i18n';

const { EN, PT, ES } = Locale;

export const routing = defineRouting({
  locales: [EN, PT, ES],
  defaultLocale: EN,
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
