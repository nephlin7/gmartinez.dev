import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
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
            <script src="https://statsy.observer/cl8mft4re05860cp9lomo8hq5.js" defer />
          )}
        </body>
      </Html>
    );
  }
}
