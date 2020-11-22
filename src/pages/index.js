import Layout from "@/components/layout"
import DevImage from "@/components/image"

import SocialIcons from "@/components/social-icons"

const Home = () => (
  <Layout>
    <div className="pageWrapper">
      <div className="mailinfo">
        <a href={`mailto:g7devp@gmail.com`}>Contact</a>
      </div>
      <div className="socialIcons">
        <SocialIcons />
      </div>
      <section className="imageSide">
        <div className="hero-image">
          <DevImage />
        </div>
      </section>

      <section className="info-area">
        <span>Front-end Developer</span>
        <h1 className="main-title tracking-in-expand ">Gerald Martinez</h1>
        <p>
          Front-End web developer based in Nicaragua with 4+ years of
          experience. Currently, I'm working at <strong>Bejamas</strong> as a
          Front-end dev, building great stuff with
          <a
            rel="noreferrer noopener"
            href={`https://twitter.com/hashtag/JAMstack?src=hash&lang=es`}
            target={`_blank`}
          >
            #JAMstack
          </a>
          technologies.
        </p>

        <br />
      </section>
    </div>
  </Layout>
)

export default Home
