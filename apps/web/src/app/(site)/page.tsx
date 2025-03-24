import { groq } from 'next-sanity';
import { Suspense } from 'react';

import { client } from '../../sanity/client';

import { Profile } from '@/components/profile';
import { SocialIcons } from '@/components/social-icons';
import { ThemeToggle } from '@/components/theme-toggle';

const FRONTPAGE_QUERY = groq`*[_id == "frontPage"][0]{
  ...,
  'externalPosts': externalPosts[]->{title, url, emoji},
}`;

async function getFrontPageData() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return await client.fetch(FRONTPAGE_QUERY);
}

export default async function HomePage() {
  const frontPage = await getFrontPageData();

  return (
    <>
      {frontPage && (
        <>
          <ThemeToggle />
          <Suspense fallback={<div>Loading...</div>}>
            <Profile
              heading={frontPage.heading}
              subHeading={frontPage.subHeading}
              excerpt={frontPage.excerpt}
              posts={frontPage.externalPosts}
            />
          </Suspense>
        </>
      )}
      <SocialIcons />
    </>
  );
}
