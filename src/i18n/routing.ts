import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';
import { Locale } from '../types/i18n';

const { EN, PT } = Locale;

export const routing = defineRouting({
  locales: [EN, PT],
  defaultLocale: PT,
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
