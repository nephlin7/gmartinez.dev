import '../../css/globals.css';
import type { Metadata } from 'next';
import { Bodoni_Moda, Jost } from 'next/font/google';

import { ThemeProvider } from './theme-provider';

import config from '@/utils/config';
import clsx from 'clsx';

const bodoni = Bodoni_Moda({
  weight: ['800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--bodoni',
});

const jost = Jost({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: config.title,
  description: config.description,
  openGraph: {
    title: config.title,
    description: config.description,
    url: config.siteUrl,
    images: [config.seoImageUrl],
  },
  twitter: {
    card: 'summary_large_image',
    title: config.title,
    description: config.description,
    images: [config.seoImageUrl],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta name="msapplication-TileColor" content="#4c708a" />
        <meta name="theme-color" content="#4c708a" />
        <title>{config.title}</title>
        <meta name="title" content={config?.title} />
        <meta name="description" content={config?.description} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={config?.siteUrl} />
        <meta property="og:title" content={config?.title} />
        <meta property="og:description" content={config?.description} />
        <meta property="og:image" content={config?.seoImageUrl} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={config?.siteUrl} />
        <meta property="twitter:title" content={config?.title} />
        <meta property="twitter:description" content={config?.description} />
        <meta property="twitter:image" content={config?.seoImageUrl} />
      </head>
      <ThemeProvider>
        <body
          className={clsx(
            bodoni.variable,
            jost.className,
            'bg-gradient-to-t from-[#dfe9f3] to-white dark:from-slate-950 dark:to-slate-800',
          )}
        >
          <div className="max-w-full h-screen overflow-hidden flex flex-col items-center justify-center text-lg">
            {children}
          </div>
        </body>
      </ThemeProvider>
      {process.env.NEXT_PUBLIC_ANALYTICS_ENV === 'production' && (
        <script src="https://statsy.observer/cl8mft4re05860cp9lomo8hq5.js" defer />
      )}
    </html>
  );
}
