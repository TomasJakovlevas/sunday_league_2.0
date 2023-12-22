import type { Metadata } from 'next';
import { Bungee, Roboto } from 'next/font/google';

import { ClerkProvider } from '@clerk/nextjs';
import './globals.css';

import { NextUiProvider } from '@/providers/nextUiProvider';

// const inter = Inter({ subsets: ['latin'] });
const roboto = Roboto({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-roboto',
});
const bungee = Bungee({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bungee',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        layout: {
          socialButtonsVariant: 'iconButton',
        },
        // baseTheme: dark,
        elements: {
          rootBox: 'w-full',
          card: 'max-w-none mx-0 w-full pt-0 px-0 bg-accent-500 shadow-none gap-5 xl:gap-6',
          headerTitle: 'text-lg xl:text-xl text-primary-700',
          headerSubtitle: 'hidden',
          dividerRow: 'hidden',
          socialButtonsIconButton: 'hover:bg-primary-400 border-primary-700',
          form: 'hidden',
          footer: 'hidden',
          internal: 'hidden',
        },
      }}
    >
      <html lang='en'>
        <body
          className={`${roboto.className} ${bungee.variable} light bg-white text-primary-700`}
        >
          <NextUiProvider>{children}</NextUiProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
