/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
/** @jsx jsx */
import { jsx } from "@emotion/core"
import Header from "./header"
import "./layout.css"

const Layout = ({ children, pageTitle }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>
          <section
            css={{
              position: `absolute`,
              width: `20%`,
              height: `100vh`,
              textAlign: `center`,
              lineHeight: `3.5rem`,
              fontSize: `2rem`,
              background: `linear-gradient(to top, #09203f 0%, #537895 100%)`,
              color: `white`,
              display: `flex`,
              alignItems: `center`,
              justifyContent: `center`,
              flexDirection: `column`,
            }}
          >
            {pageTitle}
          </section>
          {children}
        </main>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
