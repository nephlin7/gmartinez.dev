import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';
import React from 'react';

import { getCssText } from '@/utils/stitches.config';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
        </Head>
        <body>
          <Main />
          <NextScript />
          {process.env.NEXT_PUBLIC_ANALYTICS_ENV === 'production' && (
            <>
              <Script
                id="googletagmanager-js"
                strategy="lazyOnload"
                src={`https://www.googletagmanager.com/gtag/js?id=${config?.gaTrackingId}`}
              />
              <Script id="gtag" strategy="beforeInteractive">
                {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${config.gaTrackingId}');
          `}
              </Script>
            </>
          )}
        </body>
      </Html>
    );
  }
}
