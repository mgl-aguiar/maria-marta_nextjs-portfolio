/**
 * Utility functions for the application
 */

import { languageOptions, LanguageObject } from '@/src/types/i18n';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

/**
 * Generates a localized path based on the current locale
 * @param path - The base path (e.g., '/about', '/artwork/1')
 * @param locale - The current locale (optional, defaults to 'en')
 * @returns The localized path (e.g., '/about' for English, '/pt/about' for Portuguese)
 */
export const getLocalizedPath = (path: string, locale?: string) => {
  const currentLocale = locale || 'en';
  return currentLocale === 'en' ? path : `/${currentLocale}${path}`;
};

/**
 * Detects if the current device is mobile
 * @returns True if the device is mobile (iPhone, iPad, or Android)
 */
export const isMobileDevice = (): boolean => {
  if (typeof window === 'undefined') return false;

  return (
    navigator.userAgent.includes('iPhone') ||
    navigator.userAgent.includes('iPad') ||
    navigator.userAgent.includes('Android')
  );
};

/**
 * Gets the current language from URL parameters or pathname
 * @param params - URL parameters object
 * @param pathname - Current pathname
 * @returns The current language object
 */
export const getCurrentLanguage = (
  params?: { locale?: string },
  pathname?: string
): LanguageObject => {
  // Get locale from params first (most reliable)
  const locale = params?.locale;
  if (locale) {
    const language = languageOptions.find((lang) => lang.code === locale);
    if (language) {
      return language;
    }
  }

  // Fallback to pathname parsing
  if (pathname) {
    const pathSegments = pathname.split('/').filter(Boolean);
    if (pathSegments.length > 0) {
      const firstSegment = pathSegments[0];
      const language = languageOptions.find(
        (lang) => lang.code === firstSegment
      );
      if (language) {
        return language;
      }
    }
  }

  // If no language prefix found in URL, it's the default language (English)
  return languageOptions[0]; // English
};

/**
 * Handles language change navigation
 * @param languageCode - The target language code
 * @param pathname - Current pathname
 * @param router - Next.js router instance
 */
export const handleLanguageChange = (
  languageCode: string,
  pathname: string,
  router: AppRouterInstance
) => {
  // Get the current path segments
  const pathSegments = pathname.split('/').filter(Boolean);

  // Check if current path has a language prefix
  const hasLanguagePrefix = languageOptions.some(
    (lang) => lang.code === pathSegments[0]
  );

  // Remove language prefix if present
  const pathWithoutLanguage = hasLanguagePrefix
    ? pathSegments.slice(1)
    : pathSegments;

  const basePath =
    pathWithoutLanguage.length > 0 ? `/${pathWithoutLanguage.join('/')}` : '/';

  // Construct new path - only add prefix for non-default languages
  const newPathname =
    languageCode === 'en' ? basePath : `/${languageCode}${basePath}`;

  router.push(newPathname);
};

/**
 * Smoothly scrolls to the top of the page
 */
export const scrollToTop = () => {
  if (typeof window === 'undefined') return;

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
