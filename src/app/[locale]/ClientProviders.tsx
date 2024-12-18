'use client';

import { ThemeProvider } from 'styled-components';
import { NextIntlClientProvider } from 'next-intl';

import StyledComponentsRegistry from '../lib/registry';
import { theme } from '../styles/theme';

export default function ClientProviders({
  children,
  messages,
  locale
}: {
  children: React.ReactNode;
  messages: any;
  locale: string;
}) {
  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <ThemeProvider theme={theme}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}