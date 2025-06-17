import type { Metadata } from 'next';
import { alegreya } from './lib/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'Maria Marta - Visual Artist',
  description: 'Portfolio website of Maria Marta, visual artist',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={alegreya.variable}>
      <body>{children}</body>
    </html>
  );
}
