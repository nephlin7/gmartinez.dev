import { useRouter } from 'next/router'

import { Layout } from '@/components/layout'
import { HeroImage } from '@/components/hero-image'
import { SocialIcons } from '@/components/social-icons'
import { InfoArea } from '@/components/info-area'

import { getClient, urlFor, usePreviewSubscription } from '../utils/sanity'

const query = `//groq
*[_id == "frontPage"][0]{
  ...,
  'externalPosts': externalPosts[]->{title, url, emoji},
}
`

export default function Home({ frontPageData, preview }) {
  const router = useRouter()
  const { data: frontPage } = usePreviewSubscription(query, {
    initialData: frontPageData,
    enabled: preview || router.query.preview !== null,
  })

  return (
    <Layout>
      <div className="pageWrapper">
        {frontPage && (
          <>
            <HeroImage image={frontPage.mainImage} />
            <InfoArea
              heading={frontPage.heading}
              subHeading={frontPage.subHeading}
              excerpt={frontPage.excerpt}
              posts={frontPage.externalPosts}
            />
          </>
        )}

        <SocialIcons />
      </div>
    </Layout>
  )
}

export async function getStaticProps({ params = {}, preview = true }) {
  const frontPageData = await getClient(preview).fetch(query)

  return {
    props: {
      preview,
      frontPageData,
    },
  }
}
