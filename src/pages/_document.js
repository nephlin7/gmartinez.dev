import Document, { Html, Head, Main, NextScript } from "next/document"

import config from "@/utils/config"

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {process.env.VERCEL_ENV === "production" && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${config?.gaTrackingId}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${config?.gaTrackingId}', {
            page_path: window.location.pathname,
          });
        `,
                }}
              />
            </>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
