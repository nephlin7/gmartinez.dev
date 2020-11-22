import Head from "next/head"
import config from "@/utils/config"
import PropTypes from "prop-types"

const Layout = ({ children }) => {
  return (
    <main>
      <Head>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
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
    </main>
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
