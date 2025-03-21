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
    <section className="relative left-0 w-4/5 text-[0.9rem] lg:w-1/2 lg:left-[100px] lg:pl-0 lg:text-base">
      <div className="overflow-hidden">
        <span>{subHeading}</span>
        <h1>{heading}</h1>
      </div>

      {excerpt && (
        <div className="[&>p]:leading-[1.7] [&>p]:mb-[15px] [&>p]:text-slate-700">
          <PortableText value={excerpt} />
        </div>
      )}

      <ul className="p-0 [&>li]:mb-[10px] [&>li>a]:animate-[fadeIn_2s_cubic-bezier(0.77,0,0.175,1)] [&>li>a]:mr-[10px] [&>li>a]:text-slate-900 [&>li>a]:no-underline [&>li>a]:transition-colors [&>li>a]:duration-300 [&>li>a:hover]:text-violet-600">
        {posts.map((item) => (
          <li key={item.url}>
            <a href={item.url} rel="noreferrer noopener" target="_blank">
              {item.emoji} {item.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
