import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';
import React from 'react';

import config from '@/utils/config';
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
            <Script
              id="googletagmanager-js"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer', '${config.gaTrackingId}');
  `,
              }}
            />
          )}
        </body>
      </Html>
    );
  }
}
