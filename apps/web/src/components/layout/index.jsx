/* eslint-disable no-undef */

import Head from 'next/head';

import { PageWrapper } from './layout.styles';

import config from '@/utils/config';

export function Layout({ children }) {
  return (
    <PageWrapper>
      <Head>
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
      </Head>

      {children}
    </PageWrapper>
  );
}
