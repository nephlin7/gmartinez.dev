import { Layout } from '@/components/layout'
import { HeroImage } from '@/components/hero-image'
import { SocialIcons } from '@/components/social-icons'
import { InfoArea } from '@/components/info-area'

export default function Home() {
  return (
    <Layout>
      <div className="pageWrapper">
        <div className="mailWrapper">
          <a href="mailto:g7devp@gmail.com">Get in touch</a>
        </div>
        <HeroImage />
        <InfoArea />
        <SocialIcons />
      </div>
    </Layout>
  )
}
