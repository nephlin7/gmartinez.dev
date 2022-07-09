import { useRouter } from 'next/router';

import { getClient, usePreviewSubscription } from '../utils/sanity';

import { HeroImage } from '@/components/hero-image';
import { Layout } from '@/components/layout';
import { Profile } from '@/components/profile';
import { SocialIcons } from '@/components/social-icons';
import { ThemeToggle } from '@/components/theme-toggle';

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
            <ThemeToggle />
            <HeroImage image={frontPage.mainImage} />
            <Profile
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
