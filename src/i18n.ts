import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { Locale } from './types/i18n';

// Can be imported from a shared config
const locales = [Locale.EN, Locale.PT, Locale.ES];

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as Locale)) notFound();

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
