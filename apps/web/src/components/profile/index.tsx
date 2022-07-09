import { ProfileWrapper, PortableTextWrapper, BlogList } from './profile.styles';

import { PortableText } from '@/utils/sanity';

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
      <span>{subHeading}</span>
      <h1>{heading}</h1>
      {excerpt && <PortableTextWrapper>{<PortableText value={excerpt} />}</PortableTextWrapper>}

      <br />
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
