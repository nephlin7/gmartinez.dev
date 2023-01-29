import { getClient } from '../utils/sanity';

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

export default function Home({ frontPage }) {
  return (
    <Layout>
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
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const frontPage = await getClient(preview).fetch(query);

  return {
    props: {
      preview,
      frontPage,
    },
  };
}
