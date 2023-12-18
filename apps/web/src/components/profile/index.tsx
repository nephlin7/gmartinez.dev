import { ProfileWrapper, PortableTextWrapper, BlogList, HeadingWrapper } from './profile.styles';

import { PortableText } from '@portabletext/react';

interface Posts {
  title: string;
  url: string;
  emoji: string;
}

interface Props {
  heading: string;
  subHeading: string;
  excerpt: [];
  posts?: Posts[];
}

export function Profile({ heading, subHeading, excerpt, posts = [] }: Props) {
  return (
    <ProfileWrapper>
      <HeadingWrapper>
        <span>{subHeading}</span>
        <h1>{heading}</h1>
      </HeadingWrapper>

      {excerpt && (
        <PortableTextWrapper>
          <PortableText value={excerpt} />
        </PortableTextWrapper>
      )}

      <BlogList>
        {posts.map((item) => (
          <li key={item.url}>
            <a href={item.url} rel="noreferrer noopener" target="_blank">
              {item.emoji} {item.title}
            </a>
          </li>
        ))}
      </BlogList>
    </ProfileWrapper>
  );
}
