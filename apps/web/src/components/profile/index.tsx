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
      <div className="overflow-hidden mb-8 flex flex-col gap-4">
        <span className="text-xs tracking-widest bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-400 px-4 py-1 rounded-3xl flex w-fit">
          {subHeading}
        </span>
        <h1 className="text-3xl lg:text-7xl font-bodoni italic">{heading}</h1>
      </div>

      {excerpt && (
        <div className="[&>p]:leading-[1.7] [&>p]:mb-[15px] [&>p]:text-slate-700 [&>p]:dark:text-slate-400">
          <PortableText value={excerpt} />
        </div>
      )}

      <ul className="p-0 ">
        {posts.map((item) => (
          <li key={item.url} className="mb-3  ">
            <a href={item.url} rel="noreferrer noopener" target="_blank">
              {item.emoji} {item.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
