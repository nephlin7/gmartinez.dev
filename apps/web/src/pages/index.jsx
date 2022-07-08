import { useRouter } from 'next/router';

import { getClient, usePreviewSubscription } from '../utils/sanity';

import { HeroImage } from '@/components/hero-image';
import { InfoArea } from '@/components/info-area';
import { Layout } from '@/components/layout';
import { SocialIcons } from '@/components/social-icons';

const query = `//groq
*[_id == "frontPage"][0]{
  ...,
  'externalPosts': externalPosts[]->{title, url, emoji},
}
`;

export default function Home({ frontPageData, preview }) {
  const router = useRouter();
  const { data: frontPage } = usePreviewSubscription(query, {
    initialData: frontPageData,
    enabled: preview || router.query.preview !== null,
  });

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
  );
}

export async function getStaticProps({ preview = false }) {
  const frontPageData = await getClient(preview).fetch(query);

  return {
    props: {
      preview,
      frontPageData,
    },
  };
}
