import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';

import ClientProviders from './ClientProviders';

import { routing } from '../../i18n/routing';

import '../styles/globals.css';

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <ClientProviders messages={messages} locale={locale}>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}
