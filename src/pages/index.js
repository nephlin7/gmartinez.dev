import Layout from "../components/layout"
import DevImage from "../components/image"
import SEO from "../components/seo"
import { Link } from "gatsby"

import SocialIcons from "../components/social-icons"

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
          top: 30,
          right: 30,
        }}
      >
        <a
          css={{ color: `#333`, textDecoration: `none`, marginRight: 20 }}
          href="/docs/gmartinezcv2019.pdf"
        >
          Download Resume
        </a>
        <a
          css={{ color: `#333`, textDecoration: `none` }}
          href={`mailto:g7devp@gmail.com`}
        >
          Contact
        </a>
      </div>
      <div
        css={{
          position: `absolute`,
          bottom: 30,
          right: 30,
        }}
      >
        <SocialIcons />
      </div>
      <section
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
      </section>

      <section className="info-area">
        <span
          css={{
            color: `#6f6f6f`,
          }}
        >
          Web Developer
        </span>
        <h1 className="main-title tracking-in-expand ">Gerald Martinez</h1>
        <p
          css={{
            lineHeight: `27px`,
            marginBottom: `15px`,
          }}
        >
          I am a Front-End web developer based in Nicaragua. Actually i'm <br />{" "}
          in love working with
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
          <span role="img" aria-label="code">
            👨‍💻
          </span>
        </p>

        <br />
        <Link
          css={{
            borderRadius: 25,
            padding: `14px 28px`,
          }}
          className="button -dark center"
          to="/works"
        >
          View Work
        </Link>
      </section>
    </div>
  </Layout>
)

export default Home
