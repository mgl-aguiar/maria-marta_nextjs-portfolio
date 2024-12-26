'use client';

import { ThemeProvider } from 'styled-components';
import { NextIntlClientProvider, AbstractIntlMessages } from 'next-intl';

import StyledComponentsRegistry from '../lib/registry';
import { theme } from '../styles/theme';

export default function ClientProviders({
  children,
  messages,
  locale,
}: {
  children: React.ReactNode;
  messages: AbstractIntlMessages;
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
