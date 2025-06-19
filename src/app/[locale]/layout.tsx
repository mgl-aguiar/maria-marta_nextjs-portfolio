import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { alegreya } from '../lib/fonts';
import { Locale } from '@/src/types/i18n';

import ClientProviders from './ClientProviders';

import '../globals.css';

const locales = [Locale.EN, Locale.PT, Locale.ES];

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  if (!locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={alegreya.variable}>
      <body>
        <ClientProviders messages={messages} locale={locale}>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}
