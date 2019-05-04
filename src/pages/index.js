import React from "react"
import Layout from "../components/layout"
import DevImage from "../components/image"
import SEO from "../components/seo"
import gitHubIcon from "../images/github.svg"
import twitterIcon from "../images/twitter.svg"
import linkedinIcon from "../images/linkedin.svg"
/** @jsx jsx */
import { jsx } from "@emotion/core"

const Home = () => (
  <Layout>
    <SEO
      title="Home"
      description="Gerald Martinez - Front end developer based in Nicaragua"
    />

    <div
      css={{
        maxWidth: `100%`,
        maxHeight: `100vh`,
        overflow: `hidden`,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `space-between`,
      }}
    >
      <div
        css={{
          position: `absolute`,
          bottom: 20,
          right: 20,
        }}
      >
        <a
          css={{
            marginRight: 5,
          }}
          rel={`noopener noreferrer`}
          target={`_blank`}
          href={`https://github.com/nephlin7`}
        >
          <img title="GitHub" alt={`nephlin7`} width="30" src={gitHubIcon} />
        </a>
        <a
          css={{
            marginRight: 5,
          }}
          rel={`noopener noreferrer`}
          target={`_blank`}
          href={`https://twitter.com/GeraldM_92`}
        >
          <img
            title="Follow me on twitter"
            alt={`@GeraldM_92`}
            width="30"
            src={twitterIcon}
          />
        </a>
        <a
          rel={`noopener noreferrer`}
          target={`_blank`}
          href={`https://www.linkedin.com/in/gmartinez92/`}
        >
          <img
            title="Linkedin"
            alt={`gmartinez92`}
            width="30"
            src={linkedinIcon}
          />
        </a>
      </div>
      <div
        css={{
          position: `relative`,
          width: `40%`,
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
        <div className="hero-image">
          <DevImage />
        </div>
      </div>

      <div className="info-area">
        <span
          css={{
            color: `#6f6f6f`,
          }}
        >
          Front End Dev
        </span>
        <h1 className="main-title tracking-in-expand ">Gerald Martinez</h1>
        <p
          css={{
            lineHeight: `27px`,
            marginBottom: `15px`,
          }}
        >
          <span role="img" aria-label="code">
            👨‍💻
          </span>
          Hi, Im a Front-End dev based in Nicaragua.
          <br />I love working with
          <a
            rel="noreferrer noopener"
            href={`https://twitter.com/hashtag/JAMstack?src=hash&lang=es`}
            target={`_blank`}
            css={{
              marginLeft: 10,
              marginRight: 10,
            }}
          >
            #JAMSTACK
          </a>
          <span aria-label="laptop" role="img">
            💻
          </span>
        </p>

        <br />
        <a className="button -dark center" href="/docs/gmartinezcv2019.pdf">
          Download Resume
        </a>
      </div>
    </div>
  </Layout>
)

export default Home
