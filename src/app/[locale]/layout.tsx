import type { Metadata } from 'next';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { alegreya } from '../lib/fonts';
import { locales, Locale } from '@/src/types/i18n';

import ClientProviders from './ClientProviders';

import '../globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Maria Marta — Artist Portfolio',
    template: '%s | Maria Marta',
  },
  description:
    'Maria Marta is a multidisciplinary artist working in video art, photography, and mixed media, exploring memory, identity, and belonging.',
  keywords: [
    'Maria Marta',
    'artist',
    'photography',
    'video art',
    'mixed media',
    'fine art',
    'portfolio',
  ],
  authors: [{ name: 'Maria Marta' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Maria Marta',
    title: 'Maria Marta — Artist Portfolio',
    description:
      'Multidisciplinary artist working in video art, photography, and mixed media.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maria Marta — Artist Portfolio',
    description:
      'Multidisciplinary artist working in video art, photography, and mixed media.',
  },
};

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
