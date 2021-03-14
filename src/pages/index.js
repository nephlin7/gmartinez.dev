import Layout from "@/components/layout"
import HeroImage from "@/components/hero-image"
import SocialIcons from "@/components/social-icons"
import InfoArea from "@/components/info-area"

const Home = () => (
  <Layout>
    <div className="pageWrapper">
      <div className="mailinfo">
        <a href={`mailto:g7devp@gmail.com`}>Get in touch</a>
      </div>
      <HeroImage />
      <InfoArea />
      <SocialIcons />
    </div>
  </Layout>
)

export default Home
